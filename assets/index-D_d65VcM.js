let pm;
let __tla = (async () => {
  (function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const b of document.querySelectorAll('link[rel="modulepreload"]')) f(b);
    new MutationObserver((b) => {
      for (const j of b) if (j.type === "childList") for (const z of j.addedNodes) z.tagName === "LINK" && z.rel === "modulepreload" && f(z);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function d(b) {
      const j = {};
      return b.integrity && (j.integrity = b.integrity), b.referrerPolicy && (j.referrerPolicy = b.referrerPolicy), b.crossOrigin === "use-credentials" ? j.credentials = "include" : b.crossOrigin === "anonymous" ? j.credentials = "omit" : j.credentials = "same-origin", j;
    }
    function f(b) {
      if (b.ep) return;
      b.ep = true;
      const j = d(b);
      fetch(b.href, j);
    }
  })();
  pm = function(c) {
    return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
  };
  var Ms = {
    exports: {}
  }, Yn = {};
  var Vd;
  function eh() {
    if (Vd) return Yn;
    Vd = 1;
    var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
    function d(f, b, j) {
      var z = null;
      if (j !== void 0 && (z = "" + j), b.key !== void 0 && (z = "" + b.key), "key" in b) {
        j = {};
        for (var S in b) S !== "key" && (j[S] = b[S]);
      } else j = b;
      return b = j.ref, {
        $$typeof: c,
        type: f,
        key: z,
        ref: b !== void 0 ? b : null,
        props: j
      };
    }
    return Yn.Fragment = s, Yn.jsx = d, Yn.jsxs = d, Yn;
  }
  var Kd;
  function lh() {
    return Kd || (Kd = 1, Ms.exports = eh()), Ms.exports;
  }
  var o = lh(), ws = {
    exports: {}
  }, $ = {};
  var Jd;
  function ah() {
    if (Jd) return $;
    Jd = 1;
    var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), j = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
    function tt(h) {
      return h === null || typeof h != "object" ? null : (h = q && h[q] || h["@@iterator"], typeof h == "function" ? h : null);
    }
    var st = {
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
    function K(h, C, E) {
      this.props = h, this.context = C, this.refs = k, this.updater = E || st;
    }
    K.prototype.isReactComponent = {}, K.prototype.setState = function(h, C) {
      if (typeof h != "object" && typeof h != "function" && h != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, h, C, "setState");
    }, K.prototype.forceUpdate = function(h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    };
    function W() {
    }
    W.prototype = K.prototype;
    function et(h, C, E) {
      this.props = h, this.context = C, this.refs = k, this.updater = E || st;
    }
    var J = et.prototype = new W();
    J.constructor = et, vt(J, K.prototype), J.isPureReactComponent = true;
    var Nt = Array.isArray;
    function Ct() {
    }
    var F = {
      H: null,
      A: null,
      T: null,
      S: null
    }, $t = Object.prototype.hasOwnProperty;
    function te(h, C, E) {
      var H = E.ref;
      return {
        $$typeof: c,
        type: h,
        key: C,
        ref: H !== void 0 ? H : null,
        props: E
      };
    }
    function Ce(h, C) {
      return te(h.type, C, h.props);
    }
    function Se(h) {
      return typeof h == "object" && h !== null && h.$$typeof === c;
    }
    function Zt(h) {
      var C = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + h.replace(/[=:]/g, function(E) {
        return C[E];
      });
    }
    var Ze = /\/+/g;
    function qe(h, C) {
      return typeof h == "object" && h !== null && h.key != null ? Zt("" + h.key) : C.toString(36);
    }
    function fe(h) {
      switch (h.status) {
        case "fulfilled":
          return h.value;
        case "rejected":
          throw h.reason;
        default:
          switch (typeof h.status == "string" ? h.then(Ct, Ct) : (h.status = "pending", h.then(function(C) {
            h.status === "pending" && (h.status = "fulfilled", h.value = C);
          }, function(C) {
            h.status === "pending" && (h.status = "rejected", h.reason = C);
          })), h.status) {
            case "fulfilled":
              return h.value;
            case "rejected":
              throw h.reason;
          }
      }
      throw h;
    }
    function w(h, C, E, H, Y) {
      var V = typeof h;
      (V === "undefined" || V === "boolean") && (h = null);
      var nt = false;
      if (h === null) nt = true;
      else switch (V) {
        case "bigint":
        case "string":
        case "number":
          nt = true;
          break;
        case "object":
          switch (h.$$typeof) {
            case c:
            case s:
              nt = true;
              break;
            case O:
              return nt = h._init, w(nt(h._payload), C, E, H, Y);
          }
      }
      if (nt) return Y = Y(h), nt = H === "" ? "." + qe(h, 0) : H, Nt(Y) ? (E = "", nt != null && (E = nt.replace(Ze, "$&/") + "/"), w(Y, C, E, "", function(rl) {
        return rl;
      })) : Y != null && (Se(Y) && (Y = Ce(Y, E + (Y.key == null || h && h.key === Y.key ? "" : ("" + Y.key).replace(Ze, "$&/") + "/") + nt)), C.push(Y)), 1;
      nt = 0;
      var Gt = H === "" ? "." : H + ":";
      if (Nt(h)) for (var Tt = 0; Tt < h.length; Tt++) H = h[Tt], V = Gt + qe(H, Tt), nt += w(H, C, E, V, Y);
      else if (Tt = tt(h), typeof Tt == "function") for (h = Tt.call(h), Tt = 0; !(H = h.next()).done; ) H = H.value, V = Gt + qe(H, Tt++), nt += w(H, C, E, V, Y);
      else if (V === "object") {
        if (typeof h.then == "function") return w(fe(h), C, E, H, Y);
        throw C = String(h), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
      }
      return nt;
    }
    function B(h, C, E) {
      if (h == null) return h;
      var H = [], Y = 0;
      return w(h, H, "", "", function(V) {
        return C.call(E, V, Y++);
      }), H;
    }
    function Z(h) {
      if (h._status === -1) {
        var C = h._result;
        C = C(), C.then(function(E) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = E);
        }, function(E) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = E);
        }), h._status === -1 && (h._status = 0, h._result = C);
      }
      if (h._status === 1) return h._result.default;
      throw h._result;
    }
    var dt = typeof reportError == "function" ? reportError : function(h) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var C = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
          error: h
        });
        if (!window.dispatchEvent(C)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", h);
        return;
      }
      console.error(h);
    }, ht = {
      map: B,
      forEach: function(h, C, E) {
        B(h, function() {
          C.apply(this, arguments);
        }, E);
      },
      count: function(h) {
        var C = 0;
        return B(h, function() {
          C++;
        }), C;
      },
      toArray: function(h) {
        return B(h, function(C) {
          return C;
        }) || [];
      },
      only: function(h) {
        if (!Se(h)) throw Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
    };
    return $.Activity = R, $.Children = ht, $.Component = K, $.Fragment = d, $.Profiler = b, $.PureComponent = et, $.StrictMode = f, $.Suspense = A, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, $.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(h) {
        return F.H.useMemoCache(h);
      }
    }, $.cache = function(h) {
      return function() {
        return h.apply(null, arguments);
      };
    }, $.cacheSignal = function() {
      return null;
    }, $.cloneElement = function(h, C, E) {
      if (h == null) throw Error("The argument must be a React element, but you passed " + h + ".");
      var H = vt({}, h.props), Y = h.key;
      if (C != null) for (V in C.key !== void 0 && (Y = "" + C.key), C) !$t.call(C, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && C.ref === void 0 || (H[V] = C[V]);
      var V = arguments.length - 2;
      if (V === 1) H.children = E;
      else if (1 < V) {
        for (var nt = Array(V), Gt = 0; Gt < V; Gt++) nt[Gt] = arguments[Gt + 2];
        H.children = nt;
      }
      return te(h.type, Y, H);
    }, $.createContext = function(h) {
      return h = {
        $$typeof: z,
        _currentValue: h,
        _currentValue2: h,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, h.Provider = h, h.Consumer = {
        $$typeof: j,
        _context: h
      }, h;
    }, $.createElement = function(h, C, E) {
      var H, Y = {}, V = null;
      if (C != null) for (H in C.key !== void 0 && (V = "" + C.key), C) $t.call(C, H) && H !== "key" && H !== "__self" && H !== "__source" && (Y[H] = C[H]);
      var nt = arguments.length - 2;
      if (nt === 1) Y.children = E;
      else if (1 < nt) {
        for (var Gt = Array(nt), Tt = 0; Tt < nt; Tt++) Gt[Tt] = arguments[Tt + 2];
        Y.children = Gt;
      }
      if (h && h.defaultProps) for (H in nt = h.defaultProps, nt) Y[H] === void 0 && (Y[H] = nt[H]);
      return te(h, V, Y);
    }, $.createRef = function() {
      return {
        current: null
      };
    }, $.forwardRef = function(h) {
      return {
        $$typeof: S,
        render: h
      };
    }, $.isValidElement = Se, $.lazy = function(h) {
      return {
        $$typeof: O,
        _payload: {
          _status: -1,
          _result: h
        },
        _init: Z
      };
    }, $.memo = function(h, C) {
      return {
        $$typeof: g,
        type: h,
        compare: C === void 0 ? null : C
      };
    }, $.startTransition = function(h) {
      var C = F.T, E = {};
      F.T = E;
      try {
        var H = h(), Y = F.S;
        Y !== null && Y(E, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Ct, dt);
      } catch (V) {
        dt(V);
      } finally {
        C !== null && E.types !== null && (C.types = E.types), F.T = C;
      }
    }, $.unstable_useCacheRefresh = function() {
      return F.H.useCacheRefresh();
    }, $.use = function(h) {
      return F.H.use(h);
    }, $.useActionState = function(h, C, E) {
      return F.H.useActionState(h, C, E);
    }, $.useCallback = function(h, C) {
      return F.H.useCallback(h, C);
    }, $.useContext = function(h) {
      return F.H.useContext(h);
    }, $.useDebugValue = function() {
    }, $.useDeferredValue = function(h, C) {
      return F.H.useDeferredValue(h, C);
    }, $.useEffect = function(h, C) {
      return F.H.useEffect(h, C);
    }, $.useEffectEvent = function(h) {
      return F.H.useEffectEvent(h);
    }, $.useId = function() {
      return F.H.useId();
    }, $.useImperativeHandle = function(h, C, E) {
      return F.H.useImperativeHandle(h, C, E);
    }, $.useInsertionEffect = function(h, C) {
      return F.H.useInsertionEffect(h, C);
    }, $.useLayoutEffect = function(h, C) {
      return F.H.useLayoutEffect(h, C);
    }, $.useMemo = function(h, C) {
      return F.H.useMemo(h, C);
    }, $.useOptimistic = function(h, C) {
      return F.H.useOptimistic(h, C);
    }, $.useReducer = function(h, C, E) {
      return F.H.useReducer(h, C, E);
    }, $.useRef = function(h) {
      return F.H.useRef(h);
    }, $.useState = function(h) {
      return F.H.useState(h);
    }, $.useSyncExternalStore = function(h, C, E) {
      return F.H.useSyncExternalStore(h, C, E);
    }, $.useTransition = function() {
      return F.H.useTransition();
    }, $.version = "19.2.3", $;
  }
  var kd;
  function Ys() {
    return kd || (kd = 1, ws.exports = ah()), ws.exports;
  }
  var yt = Ys();
  const nh = pm(yt);
  var Os = {
    exports: {}
  }, Ln = {}, Us = {
    exports: {}
  }, Ds = {};
  var Wd;
  function uh() {
    return Wd || (Wd = 1, (function(c) {
      function s(w, B) {
        var Z = w.length;
        w.push(B);
        t: for (; 0 < Z; ) {
          var dt = Z - 1 >>> 1, ht = w[dt];
          if (0 < b(ht, B)) w[dt] = B, w[Z] = ht, Z = dt;
          else break t;
        }
      }
      function d(w) {
        return w.length === 0 ? null : w[0];
      }
      function f(w) {
        if (w.length === 0) return null;
        var B = w[0], Z = w.pop();
        if (Z !== B) {
          w[0] = Z;
          t: for (var dt = 0, ht = w.length, h = ht >>> 1; dt < h; ) {
            var C = 2 * (dt + 1) - 1, E = w[C], H = C + 1, Y = w[H];
            if (0 > b(E, Z)) H < ht && 0 > b(Y, E) ? (w[dt] = Y, w[H] = Z, dt = H) : (w[dt] = E, w[C] = Z, dt = C);
            else if (H < ht && 0 > b(Y, Z)) w[dt] = Y, w[H] = Z, dt = H;
            else break t;
          }
        }
        return B;
      }
      function b(w, B) {
        var Z = w.sortIndex - B.sortIndex;
        return Z !== 0 ? Z : w.id - B.id;
      }
      if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var j = performance;
        c.unstable_now = function() {
          return j.now();
        };
      } else {
        var z = Date, S = z.now();
        c.unstable_now = function() {
          return z.now() - S;
        };
      }
      var A = [], g = [], O = 1, R = null, q = 3, tt = false, st = false, vt = false, k = false, K = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, et = typeof setImmediate < "u" ? setImmediate : null;
      function J(w) {
        for (var B = d(g); B !== null; ) {
          if (B.callback === null) f(g);
          else if (B.startTime <= w) f(g), B.sortIndex = B.expirationTime, s(A, B);
          else break;
          B = d(g);
        }
      }
      function Nt(w) {
        if (vt = false, J(w), !st) if (d(A) !== null) st = true, Ct || (Ct = true, Zt());
        else {
          var B = d(g);
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
              st = false, vt && (vt = false, W(F), F = -1), tt = true;
              var Z = q;
              try {
                e: {
                  for (J(w), R = d(A); R !== null && !(R.expirationTime > w && Ce()); ) {
                    var dt = R.callback;
                    if (typeof dt == "function") {
                      R.callback = null, q = R.priorityLevel;
                      var ht = dt(R.expirationTime <= w);
                      if (w = c.unstable_now(), typeof ht == "function") {
                        R.callback = ht, J(w), B = true;
                        break e;
                      }
                      R === d(A) && f(A), J(w);
                    } else f(A);
                    R = d(A);
                  }
                  if (R !== null) B = true;
                  else {
                    var h = d(g);
                    h !== null && fe(Nt, h.startTime - w), B = false;
                  }
                }
                break t;
              } finally {
                R = null, q = Z, tt = false;
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
        var Ze = new MessageChannel(), qe = Ze.port2;
        Ze.port1.onmessage = Se, Zt = function() {
          qe.postMessage(null);
        };
      } else Zt = function() {
        K(Se, 0);
      };
      function fe(w, B) {
        F = K(function() {
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
        var Z = q;
        q = B;
        try {
          return w();
        } finally {
          q = Z;
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
        var Z = q;
        q = w;
        try {
          return B();
        } finally {
          q = Z;
        }
      }, c.unstable_scheduleCallback = function(w, B, Z) {
        var dt = c.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? dt + Z : dt) : Z = dt, w) {
          case 1:
            var ht = -1;
            break;
          case 2:
            ht = 250;
            break;
          case 5:
            ht = 1073741823;
            break;
          case 4:
            ht = 1e4;
            break;
          default:
            ht = 5e3;
        }
        return ht = Z + ht, w = {
          id: O++,
          callback: B,
          priorityLevel: w,
          startTime: Z,
          expirationTime: ht,
          sortIndex: -1
        }, Z > dt ? (w.sortIndex = Z, s(g, w), d(A) === null && w === d(g) && (vt ? (W(F), F = -1) : vt = true, fe(Nt, Z - dt))) : (w.sortIndex = ht, s(A, w), st || tt || (st = true, Ct || (Ct = true, Zt()))), w;
      }, c.unstable_shouldYield = Ce, c.unstable_wrapCallback = function(w) {
        var B = q;
        return function() {
          var Z = q;
          q = B;
          try {
            return w.apply(this, arguments);
          } finally {
            q = Z;
          }
        };
      };
    })(Ds)), Ds;
  }
  var $d;
  function ih() {
    return $d || ($d = 1, Us.exports = uh()), Us.exports;
  }
  var Cs = {
    exports: {}
  }, Pt = {};
  var Fd;
  function ch() {
    if (Fd) return Pt;
    Fd = 1;
    var c = Ys();
    function s(A) {
      var g = "https://react.dev/errors/" + A;
      if (1 < arguments.length) {
        g += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var O = 2; O < arguments.length; O++) g += "&args[]=" + encodeURIComponent(arguments[O]);
      }
      return "Minified React error #" + A + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function d() {
    }
    var f = {
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
    }, b = /* @__PURE__ */ Symbol.for("react.portal");
    function j(A, g, O) {
      var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: b,
        key: R == null ? null : "" + R,
        children: A,
        containerInfo: g,
        implementation: O
      };
    }
    var z = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function S(A, g) {
      if (A === "font") return "";
      if (typeof g == "string") return g === "use-credentials" ? g : "";
    }
    return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Pt.createPortal = function(A, g) {
      var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(s(299));
      return j(A, g, null, O);
    }, Pt.flushSync = function(A) {
      var g = z.T, O = f.p;
      try {
        if (z.T = null, f.p = 2, A) return A();
      } finally {
        z.T = g, f.p = O, f.d.f();
      }
    }, Pt.preconnect = function(A, g) {
      typeof A == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, f.d.C(A, g));
    }, Pt.prefetchDNS = function(A) {
      typeof A == "string" && f.d.D(A);
    }, Pt.preinit = function(A, g) {
      if (typeof A == "string" && g && typeof g.as == "string") {
        var O = g.as, R = S(O, g.crossOrigin), q = typeof g.integrity == "string" ? g.integrity : void 0, tt = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        O === "style" ? f.d.S(A, typeof g.precedence == "string" ? g.precedence : void 0, {
          crossOrigin: R,
          integrity: q,
          fetchPriority: tt
        }) : O === "script" && f.d.X(A, {
          crossOrigin: R,
          integrity: q,
          fetchPriority: tt,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0
        });
      }
    }, Pt.preinitModule = function(A, g) {
      if (typeof A == "string") if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var O = S(g.as, g.crossOrigin);
          f.d.M(A, {
            crossOrigin: O,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && f.d.M(A);
    }, Pt.preload = function(A, g) {
      if (typeof A == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
        var O = g.as, R = S(O, g.crossOrigin);
        f.d.L(A, O, {
          crossOrigin: R,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0
        });
      }
    }, Pt.preloadModule = function(A, g) {
      if (typeof A == "string") if (g) {
        var O = S(g.as, g.crossOrigin);
        f.d.m(A, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: O,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else f.d.m(A);
    }, Pt.requestFormReset = function(A) {
      f.d.r(A);
    }, Pt.unstable_batchedUpdates = function(A, g) {
      return A(g);
    }, Pt.useFormState = function(A, g, O) {
      return z.H.useFormState(A, g, O);
    }, Pt.useFormStatus = function() {
      return z.H.useHostTransitionStatus();
    }, Pt.version = "19.2.3", Pt;
  }
  var Id;
  function sh() {
    if (Id) return Cs.exports;
    Id = 1;
    function c() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
    }
    return c(), Cs.exports = ch(), Cs.exports;
  }
  var Pd;
  function fh() {
    if (Pd) return Ln;
    Pd = 1;
    var c = ih(), s = Ys(), d = sh();
    function f(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function b(t) {
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
    function z(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function S(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function A(t) {
      if (j(t) !== t) throw Error(f(188));
    }
    function g(t) {
      var e = t.alternate;
      if (!e) {
        if (e = j(t), e === null) throw Error(f(188));
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
            if (u === l) return A(n), t;
            if (u === a) return A(n), e;
            u = u.sibling;
          }
          throw Error(f(188));
        }
        if (l.return !== a.return) l = n, a = u;
        else {
          for (var i = false, r = n.child; r; ) {
            if (r === l) {
              i = true, l = n, a = u;
              break;
            }
            if (r === a) {
              i = true, a = n, l = u;
              break;
            }
            r = r.sibling;
          }
          if (!i) {
            for (r = u.child; r; ) {
              if (r === l) {
                i = true, l = u, a = n;
                break;
              }
              if (r === a) {
                i = true, a = u, l = n;
                break;
              }
              r = r.sibling;
            }
            if (!i) throw Error(f(189));
          }
        }
        if (l.alternate !== a) throw Error(f(190));
      }
      if (l.tag !== 3) throw Error(f(188));
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
    var R = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), tt = /* @__PURE__ */ Symbol.for("react.transitional.element"), st = /* @__PURE__ */ Symbol.for("react.portal"), vt = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), et = /* @__PURE__ */ Symbol.for("react.context"), J = /* @__PURE__ */ Symbol.for("react.forward_ref"), Nt = /* @__PURE__ */ Symbol.for("react.suspense"), Ct = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), $t = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.activity"), Ce = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Se = Symbol.iterator;
    function Zt(t) {
      return t === null || typeof t != "object" ? null : (t = Se && t[Se] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var Ze = /* @__PURE__ */ Symbol.for("react.client.reference");
    function qe(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === Ze ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case vt:
          return "Fragment";
        case K:
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
        case st:
          return "Portal";
        case et:
          return t.displayName || "Context";
        case W:
          return (t._context.displayName || "Context") + ".Consumer";
        case J:
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
    var fe = Array.isArray, w = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, dt = [], ht = -1;
    function h(t) {
      return {
        current: t
      };
    }
    function C(t) {
      0 > ht || (t.current = dt[ht], dt[ht] = null, ht--);
    }
    function E(t, e) {
      ht++, dt[ht] = t.current, t.current = e;
    }
    var H = h(null), Y = h(null), V = h(null), nt = h(null);
    function Gt(t, e) {
      switch (E(V, e), E(Y, t), E(H, null), e.nodeType) {
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
      C(H), E(H, t);
    }
    function Tt() {
      C(H), C(Y), C(V);
    }
    function rl(t) {
      t.memoizedState !== null && E(nt, t);
      var e = H.current, l = hd(e, t.type);
      e !== l && (E(Y, t), E(H, l));
    }
    function Ft(t) {
      Y.current === t && (C(H), C(Y)), nt.current === t && (C(nt), Rn._currentValue = Z);
    }
    var ol, Kn;
    function Ve(t) {
      if (ol === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ol = e && e[1] || "", Kn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + ol + t + Kn;
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
                  } catch (N) {
                    var x = N;
                  }
                  Reflect.construct(t, [], D);
                } else {
                  try {
                    D.call();
                  } catch (N) {
                    x = N;
                  }
                  t.call(D.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (N) {
                  x = N;
                }
                (D = t()) && typeof D.catch == "function" && D.catch(function() {
                });
              }
            } catch (N) {
              if (N && x && typeof N.stack == "string") return [
                N.stack,
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
        var u = a.DetermineComponentFrameRoot(), i = u[0], r = u[1];
        if (i && r) {
          var m = i.split(`
`), p = r.split(`
`);
          for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < p.length && !p[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === m.length || n === p.length) for (a = m.length - 1, n = p.length - 1; 1 <= a && 0 <= n && m[a] !== p[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (m[a] !== p[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || m[a] !== p[n]) {
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
      return (l = t ? t.displayName || t.name : "") ? Ve(l) : "";
    }
    function Um(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Ve(t.type);
        case 16:
          return Ve("Lazy");
        case 13:
          return t.child !== e && e !== null ? Ve("Suspense Fallback") : Ve("Suspense");
        case 19:
          return Ve("SuspenseList");
        case 0:
        case 15:
          return Ne(t.type, false);
        case 11:
          return Ne(t.type.render, false);
        case 1:
          return Ne(t.type, true);
        case 31:
          return Ve("Activity");
        default:
          return "";
      }
    }
    function Qs(t) {
      try {
        var e = "", l = null;
        do
          e += Um(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var yi = Object.prototype.hasOwnProperty, hi = c.unstable_scheduleCallback, gi = c.unstable_cancelCallback, Dm = c.unstable_shouldYield, Cm = c.unstable_requestPaint, re = c.unstable_now, Rm = c.unstable_getCurrentPriorityLevel, Zs = c.unstable_ImmediatePriority, Vs = c.unstable_UserBlockingPriority, Jn = c.unstable_NormalPriority, Hm = c.unstable_LowPriority, Ks = c.unstable_IdlePriority, Bm = c.log, qm = c.unstable_setDisableYieldValue, Ka = null, oe = null;
    function dl(t) {
      if (typeof Bm == "function" && qm(t), oe && typeof oe.setStrictMode == "function") try {
        oe.setStrictMode(Ka, t);
      } catch {
      }
    }
    var de = Math.clz32 ? Math.clz32 : Gm, Ym = Math.log, Lm = Math.LN2;
    function Gm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Ym(t) / Lm | 0) | 0;
    }
    var kn = 256, Wn = 262144, $n = 4194304;
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
    function Fn(t, e, l) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
      t = t.warmLanes;
      var r = a & 134217727;
      return r !== 0 ? (a = r & ~u, a !== 0 ? n = Bl(a) : (i &= r, i !== 0 ? n = Bl(i) : l || (l = r & ~t, l !== 0 && (n = Bl(l))))) : (r = a & ~u, r !== 0 ? n = Bl(r) : i !== 0 ? n = Bl(i) : l || (l = a & ~t, l !== 0 && (n = Bl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
    }
    function Ja(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Xm(t, e) {
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
    function _i(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function ka(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Qm(t, e, l, a, n, u) {
      var i = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var r = t.entanglements, m = t.expirationTimes, p = t.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var T = 31 - de(l), D = 1 << T;
        r[T] = 0, m[T] = -1;
        var x = p[T];
        if (x !== null) for (p[T] = null, T = 0; T < x.length; T++) {
          var N = x[T];
          N !== null && (N.lane &= -536870913);
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
    var ml = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + ml, le = "__reactProps$" + ml, na = "__reactContainer$" + ml, pi = "__reactEvents$" + ml, Zm = "__reactListeners$" + ml, Vm = "__reactHandles$" + ml, Ps = "__reactResources$" + ml, Wa = "__reactMarker$" + ml;
    function xi(t) {
      delete t[Vt], delete t[le], delete t[pi], delete t[Zm], delete t[Vm];
    }
    function ua(t) {
      var e = t[Vt];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[na] || l[Vt]) {
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
    function ia(t) {
      if (t = t[Vt] || t[na]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function $a(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(f(33));
    }
    function ca(t) {
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
    function ql(t, e) {
      sa(t, e), sa(t + "Capture", e);
    }
    function sa(t, e) {
      for (ef[t] = e, t = 0; t < e.length; t++) tf.add(e[t]);
    }
    var Km = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), lf = {}, af = {};
    function Jm(t) {
      return yi.call(af, t) ? true : yi.call(lf, t) ? false : Km.test(t) ? af[t] = true : (lf[t] = true, false);
    }
    function In(t, e, l) {
      if (Jm(e)) if (l === null) t.removeAttribute(e);
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
    function Ke(t, e, l, a) {
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
    function nf(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function km(t, e, l) {
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
        t._valueTracker = km(t, e, "" + t[e]);
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
    var Wm = /[\n"\\]/g;
    function je(t) {
      return t.replace(Wm, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Ni(t, e, l, a, n, u, i, r) {
      t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ae(e)) : t.value !== "" + Ae(e) && (t.value = "" + Ae(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Ai(t, i, Ae(e)) : l != null ? Ai(t, i, Ae(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.name = "" + Ae(r) : t.removeAttribute("name");
    }
    function cf(t, e, l, a, n, u, i, r) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || e != null)) {
          Si(t);
          return;
        }
        l = l != null ? "" + Ae(l) : "", e = e != null ? "" + Ae(e) : l, r || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = r ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Si(t);
    }
    function Ai(t, e, l) {
      e === "number" && tu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
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
    function sf(t, e, l) {
      if (e != null && (e = "" + Ae(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + Ae(l) : "";
    }
    function ff(t, e, l, a) {
      if (e == null) {
        if (a != null) {
          if (l != null) throw Error(f(92));
          if (fe(a)) {
            if (1 < a.length) throw Error(f(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), e = l;
      }
      l = Ae(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Si(t);
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
    var $m = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function rf(t, e, l) {
      var a = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || $m.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function of(t, e, l) {
      if (e != null && typeof e != "object") throw Error(f(62));
      if (t = t.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && rf(t, n, a);
      } else for (var u in e) e.hasOwnProperty(u) && rf(t, u, e[u]);
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
    ]), Im = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function eu(t) {
      return Im.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Je() {
    }
    var zi = null;
    function Ei(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var oa = null, da = null;
    function df(t) {
      var e = ia(t);
      if (e && (t = e.stateNode)) {
        var l = t[le] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Ni(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + je("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var a = l[e];
                if (a !== t && a.form === t.form) {
                  var n = a[le] || null;
                  if (!n) throw Error(f(90));
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
            e = l.value, e != null && fa(t, !!l.multiple, e, false);
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
        if (Ti = false, (oa !== null || da !== null) && (Xu(), oa && (e = oa, t = da, da = oa = null, df(e), t))) for (e = 0; e < t.length; e++) df(t[e]);
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
      if (l && typeof l != "function") throw Error(f(231, e, typeof l));
      return l;
    }
    var ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mi = false;
    if (ke) try {
      var Ia = {};
      Object.defineProperty(Ia, "passive", {
        get: function() {
          Mi = true;
        }
      }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
    } catch {
      Mi = false;
    }
    var yl = null, wi = null, lu = null;
    function yf() {
      if (lu) return lu;
      var t, e = wi, l = e.length, a, n = "value" in yl ? yl.value : yl.textContent, u = n.length;
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
    function hf() {
      return false;
    }
    function ae(t) {
      function e(l, a, n, u, i) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var r in t) t.hasOwnProperty(r) && (l = t[r], this[r] = l ? l(u) : u[r]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? nu : hf, this.isPropagationStopped = hf, this;
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
    var Yl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, uu = ae(Yl), Pa = R({}, Yl, {
      view: 0,
      detail: 0
    }), Pm = ae(Pa), Oi, Ui, tn, iu = R({}, Pa, {
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
    }), gf = ae(iu), t0 = R({}, iu, {
      dataTransfer: 0
    }), e0 = ae(t0), l0 = R({}, Pa, {
      relatedTarget: 0
    }), Di = ae(l0), a0 = R({}, Yl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), n0 = ae(a0), u0 = R({}, Yl, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), i0 = ae(u0), c0 = R({}, Yl, {
      data: 0
    }), _f = ae(c0), s0 = {
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
    }, r0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function o0(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = r0[t]) ? !!e[t] : false;
    }
    function Ci() {
      return o0;
    }
    var d0 = R({}, Pa, {
      key: function(t) {
        if (t.key) {
          var e = s0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = au(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? f0[t.keyCode] || "Unidentified" : "";
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
    }), m0 = ae(d0), y0 = R({}, iu, {
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
    }), bf = ae(y0), h0 = R({}, Pa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci
    }), g0 = ae(h0), _0 = R({}, Yl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), b0 = ae(_0), v0 = R({}, iu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), p0 = ae(v0), x0 = R({}, Yl, {
      newState: 0,
      oldState: 0
    }), S0 = ae(x0), N0 = [
      9,
      13,
      27,
      32
    ], Ri = ke && "CompositionEvent" in window, en = null;
    ke && "documentMode" in document && (en = document.documentMode);
    var A0 = ke && "TextEvent" in window && !en, vf = ke && (!Ri || en && 8 < en && 11 >= en), pf = " ", xf = false;
    function Sf(t, e) {
      switch (t) {
        case "keyup":
          return N0.indexOf(e.keyCode) !== -1;
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
    var ma = false;
    function j0(t, e) {
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
    function z0(t, e) {
      if (ma) return t === "compositionend" || !Ri && Sf(t, e) ? (t = yf(), lu = wi = yl = null, ma = false, t) : null;
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
    function Af(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!E0[t.type] : e === "textarea";
    }
    function jf(t, e, l, a) {
      oa ? da ? da.push(a) : da = [
        a
      ] : oa = a, e = Wu(e, "onChange"), 0 < e.length && (l = new uu("onChange", "change", null, l, a), t.push({
        event: l,
        listeners: e
      }));
    }
    var ln = null, an = null;
    function T0(t) {
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
    if (ke) {
      var Hi;
      if (ke) {
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
        jf(e, an, t, Ei(t)), mf(T0, e);
      }
    }
    function M0(t, e, l) {
      t === "focusin" ? (Mf(), ln = e, an = l, ln.attachEvent("onpropertychange", wf)) : t === "focusout" && Mf();
    }
    function w0(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return cu(an);
    }
    function O0(t, e) {
      if (t === "click") return cu(e);
    }
    function U0(t, e) {
      if (t === "input" || t === "change") return cu(e);
    }
    function D0(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var me = typeof Object.is == "function" ? Object.is : D0;
    function nn(t, e) {
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
    var C0 = ke && "documentMode" in document && 11 >= document.documentMode, ya = null, Yi = null, un = null, Li = false;
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
    function Ll(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var ha = {
      animationend: Ll("Animation", "AnimationEnd"),
      animationiteration: Ll("Animation", "AnimationIteration"),
      animationstart: Ll("Animation", "AnimationStart"),
      transitionrun: Ll("Transition", "TransitionRun"),
      transitionstart: Ll("Transition", "TransitionStart"),
      transitioncancel: Ll("Transition", "TransitionCancel"),
      transitionend: Ll("Transition", "TransitionEnd")
    }, Gi = {}, Hf = {};
    ke && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete ha.animationend.animation, delete ha.animationiteration.animation, delete ha.animationstart.animation), "TransitionEvent" in window || delete ha.transitionend.transition);
    function Gl(t) {
      if (Gi[t]) return Gi[t];
      if (!ha[t]) return t;
      var e = ha[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in Hf) return Gi[t] = e[l];
      return t;
    }
    var Bf = Gl("animationend"), qf = Gl("animationiteration"), Yf = Gl("animationstart"), R0 = Gl("transitionrun"), H0 = Gl("transitionstart"), B0 = Gl("transitioncancel"), Lf = Gl("transitionend"), Gf = /* @__PURE__ */ new Map(), Xi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Xi.push("scrollEnd");
    function Re(t, e) {
      Gf.set(t, e), ql(e, [
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
    }, ze = [], ga = 0, Qi = 0;
    function fu() {
      for (var t = ga, e = Qi = ga = 0; e < t; ) {
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
      ze[ga++] = t, ze[ga++] = e, ze[ga++] = l, ze[ga++] = a, Qi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Zi(t, e, l, a) {
      return ru(t, e, l, a), ou(t);
    }
    function Xl(t, e) {
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
      if (50 < Tn) throw Tn = 0, Pc = null, Error(f(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var _a = {};
    function q0(t, e, l, a) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ye(t, e, l, a) {
      return new q0(t, e, l, a);
    }
    function Vi(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function We(t, e) {
      var l = t.alternate;
      return l === null ? (l = ye(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
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
      else if (typeof t == "string") i = Qy(t, l, H.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case te:
          return t = ye(31, l, e, n), t.elementType = te, t.lanes = u, t;
        case vt:
          return Ql(l.children, n, u, e);
        case k:
          i = 8, n |= 24;
          break;
        case K:
          return t = ye(12, l, e, n | 2), t.elementType = K, t.lanes = u, t;
        case Nt:
          return t = ye(13, l, e, n), t.elementType = Nt, t.lanes = u, t;
        case Ct:
          return t = ye(19, l, e, n), t.elementType = Ct, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case et:
              i = 10;
              break t;
            case W:
              i = 9;
              break t;
            case J:
              i = 11;
              break t;
            case F:
              i = 14;
              break t;
            case $t:
              i = 16, a = null;
              break t;
          }
          i = 29, l = Error(f(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = ye(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
    }
    function Ql(t, e, l, a) {
      return t = ye(7, t, a, e), t.lanes = l, t;
    }
    function Ki(t, e, l) {
      return t = ye(6, t, null, e), t.lanes = l, t;
    }
    function Zf(t) {
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
    var ba = [], va = 0, mu = null, cn = 0, Te = [], Me = 0, hl = null, Ye = 1, Le = "";
    function $e(t, e) {
      ba[va++] = cn, ba[va++] = mu, mu = t, cn = e;
    }
    function Kf(t, e, l) {
      Te[Me++] = Ye, Te[Me++] = Le, Te[Me++] = hl, hl = t;
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
      t.return !== null && ($e(t, 1), Kf(t, 1, 0));
    }
    function Wi(t) {
      for (; t === mu; ) mu = ba[--va], ba[va] = null, cn = ba[--va], ba[va] = null;
      for (; t === hl; ) hl = Te[--Me], Te[Me] = null, Le = Te[--Me], Te[Me] = null, Ye = Te[--Me], Te[Me] = null;
    }
    function Jf(t, e) {
      Te[Me++] = Ye, Te[Me++] = Le, Te[Me++] = hl, Ye = e.id, Le = e.overflow, hl = t;
    }
    var Kt = null, jt = null, ct = false, gl = null, we = false, $i = Error(f(519));
    function _l(t) {
      var e = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
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
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || dd(e.textContent, l) ? (a.popover != null && (at("beforetoggle", e), at("toggle", e)), a.onScroll != null && at("scroll", e), a.onScrollEnd != null && at("scrollend", e), a.onClick != null && (e.onclick = Je), e = true) : e = false, e || _l(t, true);
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
    function pa(t) {
      if (t !== Kt) return false;
      if (!ct) return Wf(t), ct = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || ys(t.type, t.memoizedProps)), l = !l), l && jt && _l(t), Wf(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
        jt = xd(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
        jt = xd(t);
      } else e === 27 ? (e = jt, Ol(t.type) ? (t = vs, vs = null, jt = t) : jt = e) : jt = Kt ? Ue(t.stateNode.nextSibling) : null;
      return true;
    }
    function Zl() {
      jt = Kt = null, ct = false;
    }
    function Fi() {
      var t = gl;
      return t !== null && (ce === null ? ce = t : ce.push.apply(ce, t), gl = null), t;
    }
    function sn(t) {
      gl === null ? gl = [
        t
      ] : gl.push(t);
    }
    var Ii = h(null), Vl = null, Fe = null;
    function bl(t, e, l) {
      E(Ii, e._currentValue), e._currentValue = l;
    }
    function Ie(t) {
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
            var r = u;
            u = n;
            for (var m = 0; m < e.length; m++) if (r.context === e[m]) {
              u.lanes |= l, r = u.alternate, r !== null && (r.lanes |= l), Pi(u.return, l, t), a || (i = null);
              break t;
            }
            u = r.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(f(341));
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
    function xa(t, e, l, a) {
      t = null;
      for (var n = e, u = false; n !== null; ) {
        if (!u) {
          if ((n.flags & 524288) !== 0) u = true;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var i = n.alternate;
          if (i === null) throw Error(f(387));
          if (i = i.memoizedProps, i !== null) {
            var r = n.type;
            me(n.pendingProps.value, i.value) || (t !== null ? t.push(r) : t = [
              r
            ]);
          }
        } else if (n === nt.current) {
          if (i = n.alternate, i === null) throw Error(f(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Rn) : t = [
            Rn
          ]);
        }
        n = n.return;
      }
      t !== null && tc(e, t, l, a), e.flags |= 262144;
    }
    function yu(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!me(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function Kl(t) {
      Vl = t, Fe = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Jt(t) {
      return $f(Vl, t);
    }
    function hu(t, e) {
      return Vl === null && Kl(t), $f(t, e);
    }
    function $f(t, e) {
      var l = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, Fe === null) {
        if (t === null) throw Error(f(308));
        Fe = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else Fe = Fe.next = e;
      return l;
    }
    var Y0 = typeof AbortController < "u" ? AbortController : function() {
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
    }, L0 = c.unstable_scheduleCallback, G0 = c.unstable_NormalPriority, Rt = {
      $$typeof: et,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function ec() {
      return {
        controller: new Y0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function fn(t) {
      t.refCount--, t.refCount === 0 && L0(G0, function() {
        t.controller.abort();
      });
    }
    var rn = null, lc = 0, Sa = 0, Na = null;
    function X0(t, e) {
      if (rn === null) {
        var l = rn = [];
        lc = 0, Sa = us(), Na = {
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
        Na !== null && (Na.status = "fulfilled");
        var t = rn;
        rn = null, Sa = 0, Na = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Q0(t, e) {
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
      Ho = re(), typeof e == "object" && e !== null && typeof e.then == "function" && X0(t, e), If !== null && If(t, e);
    };
    var Jl = h(null);
    function ac() {
      var t = Jl.current;
      return t !== null ? t : At.pooledCache;
    }
    function gu(t, e) {
      e === null ? E(Jl, Jl.current) : E(Jl, e.pool);
    }
    function Pf() {
      var t = ac();
      return t === null ? null : {
        parent: Rt._currentValue,
        pool: t
      };
    }
    var Aa = Error(f(460)), nc = Error(f(474)), _u = Error(f(542)), bu = {
      then: function() {
      }
    };
    function tr(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function er(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Je, Je), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, ar(t), t;
        default:
          if (typeof e.status == "string") e.then(Je, Je);
          else {
            if (t = At, t !== null && 100 < t.shellSuspendCounter) throw Error(f(482));
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
          throw Wl = e, Aa;
      }
    }
    function kl(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Wl = l, Aa) : l;
      }
    }
    var Wl = null;
    function lr() {
      if (Wl === null) throw Error(f(459));
      var t = Wl;
      return Wl = null, t;
    }
    function ar(t) {
      if (t === Aa || t === _u) throw Error(f(483));
    }
    var ja = null, on = 0;
    function vu(t) {
      var e = on;
      return on += 1, ja === null && (ja = []), er(ja, t, e);
    }
    function dn(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function pu(t, e) {
      throw e.$$typeof === q ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(f(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function nr(t) {
      function e(_, y) {
        if (t) {
          var v = _.deletions;
          v === null ? (_.deletions = [
            y
          ], _.flags |= 16) : v.push(y);
        }
      }
      function l(_, y) {
        if (!t) return null;
        for (; y !== null; ) e(_, y), y = y.sibling;
        return null;
      }
      function a(_) {
        for (var y = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? y.set(_.key, _) : y.set(_.index, _), _ = _.sibling;
        return y;
      }
      function n(_, y) {
        return _ = We(_, y), _.index = 0, _.sibling = null, _;
      }
      function u(_, y, v) {
        return _.index = v, t ? (v = _.alternate, v !== null ? (v = v.index, v < y ? (_.flags |= 67108866, y) : v) : (_.flags |= 67108866, y)) : (_.flags |= 1048576, y);
      }
      function i(_) {
        return t && _.alternate === null && (_.flags |= 67108866), _;
      }
      function r(_, y, v, U) {
        return y === null || y.tag !== 6 ? (y = Ki(v, _.mode, U), y.return = _, y) : (y = n(y, v), y.return = _, y);
      }
      function m(_, y, v, U) {
        var X = v.type;
        return X === vt ? T(_, y, v.props.children, U, v.key) : y !== null && (y.elementType === X || typeof X == "object" && X !== null && X.$$typeof === $t && kl(X) === y.type) ? (y = n(y, v.props), dn(y, v), y.return = _, y) : (y = du(v.type, v.key, v.props, null, _.mode, U), dn(y, v), y.return = _, y);
      }
      function p(_, y, v, U) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = Ji(v, _.mode, U), y.return = _, y) : (y = n(y, v.children || []), y.return = _, y);
      }
      function T(_, y, v, U, X) {
        return y === null || y.tag !== 7 ? (y = Ql(v, _.mode, U, X), y.return = _, y) : (y = n(y, v), y.return = _, y);
      }
      function D(_, y, v) {
        if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Ki("" + y, _.mode, v), y.return = _, y;
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case tt:
              return v = du(y.type, y.key, y.props, null, _.mode, v), dn(v, y), v.return = _, v;
            case st:
              return y = Ji(y, _.mode, v), y.return = _, y;
            case $t:
              return y = kl(y), D(_, y, v);
          }
          if (fe(y) || Zt(y)) return y = Ql(y, _.mode, v, null), y.return = _, y;
          if (typeof y.then == "function") return D(_, vu(y), v);
          if (y.$$typeof === et) return D(_, hu(_, y), v);
          pu(_, y);
        }
        return null;
      }
      function x(_, y, v, U) {
        var X = y !== null ? y.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return X !== null ? null : r(_, y, "" + v, U);
        if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case tt:
              return v.key === X ? m(_, y, v, U) : null;
            case st:
              return v.key === X ? p(_, y, v, U) : null;
            case $t:
              return v = kl(v), x(_, y, v, U);
          }
          if (fe(v) || Zt(v)) return X !== null ? null : T(_, y, v, U, null);
          if (typeof v.then == "function") return x(_, y, vu(v), U);
          if (v.$$typeof === et) return x(_, y, hu(_, v), U);
          pu(_, v);
        }
        return null;
      }
      function N(_, y, v, U, X) {
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return _ = _.get(v) || null, r(y, _, "" + U, X);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case tt:
              return _ = _.get(U.key === null ? v : U.key) || null, m(y, _, U, X);
            case st:
              return _ = _.get(U.key === null ? v : U.key) || null, p(y, _, U, X);
            case $t:
              return U = kl(U), N(_, y, v, U, X);
          }
          if (fe(U) || Zt(U)) return _ = _.get(v) || null, T(y, _, U, X, null);
          if (typeof U.then == "function") return N(_, y, v, vu(U), X);
          if (U.$$typeof === et) return N(_, y, v, hu(y, U), X);
          pu(y, U);
        }
        return null;
      }
      function L(_, y, v, U) {
        for (var X = null, rt = null, G = y, P = y = 0, it = null; G !== null && P < v.length; P++) {
          G.index > P ? (it = G, G = null) : it = G.sibling;
          var ot = x(_, G, v[P], U);
          if (ot === null) {
            G === null && (G = it);
            break;
          }
          t && G && ot.alternate === null && e(_, G), y = u(ot, y, P), rt === null ? X = ot : rt.sibling = ot, rt = ot, G = it;
        }
        if (P === v.length) return l(_, G), ct && $e(_, P), X;
        if (G === null) {
          for (; P < v.length; P++) G = D(_, v[P], U), G !== null && (y = u(G, y, P), rt === null ? X = G : rt.sibling = G, rt = G);
          return ct && $e(_, P), X;
        }
        for (G = a(G); P < v.length; P++) it = N(G, _, P, v[P], U), it !== null && (t && it.alternate !== null && G.delete(it.key === null ? P : it.key), y = u(it, y, P), rt === null ? X = it : rt.sibling = it, rt = it);
        return t && G.forEach(function(Hl) {
          return e(_, Hl);
        }), ct && $e(_, P), X;
      }
      function Q(_, y, v, U) {
        if (v == null) throw Error(f(151));
        for (var X = null, rt = null, G = y, P = y = 0, it = null, ot = v.next(); G !== null && !ot.done; P++, ot = v.next()) {
          G.index > P ? (it = G, G = null) : it = G.sibling;
          var Hl = x(_, G, ot.value, U);
          if (Hl === null) {
            G === null && (G = it);
            break;
          }
          t && G && Hl.alternate === null && e(_, G), y = u(Hl, y, P), rt === null ? X = Hl : rt.sibling = Hl, rt = Hl, G = it;
        }
        if (ot.done) return l(_, G), ct && $e(_, P), X;
        if (G === null) {
          for (; !ot.done; P++, ot = v.next()) ot = D(_, ot.value, U), ot !== null && (y = u(ot, y, P), rt === null ? X = ot : rt.sibling = ot, rt = ot);
          return ct && $e(_, P), X;
        }
        for (G = a(G); !ot.done; P++, ot = v.next()) ot = N(G, _, P, ot.value, U), ot !== null && (t && ot.alternate !== null && G.delete(ot.key === null ? P : ot.key), y = u(ot, y, P), rt === null ? X = ot : rt.sibling = ot, rt = ot);
        return t && G.forEach(function(th) {
          return e(_, th);
        }), ct && $e(_, P), X;
      }
      function St(_, y, v, U) {
        if (typeof v == "object" && v !== null && v.type === vt && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case tt:
              t: {
                for (var X = v.key; y !== null; ) {
                  if (y.key === X) {
                    if (X = v.type, X === vt) {
                      if (y.tag === 7) {
                        l(_, y.sibling), U = n(y, v.props.children), U.return = _, _ = U;
                        break t;
                      }
                    } else if (y.elementType === X || typeof X == "object" && X !== null && X.$$typeof === $t && kl(X) === y.type) {
                      l(_, y.sibling), U = n(y, v.props), dn(U, v), U.return = _, _ = U;
                      break t;
                    }
                    l(_, y);
                    break;
                  } else e(_, y);
                  y = y.sibling;
                }
                v.type === vt ? (U = Ql(v.props.children, _.mode, U, v.key), U.return = _, _ = U) : (U = du(v.type, v.key, v.props, null, _.mode, U), dn(U, v), U.return = _, _ = U);
              }
              return i(_);
            case st:
              t: {
                for (X = v.key; y !== null; ) {
                  if (y.key === X) if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                    l(_, y.sibling), U = n(y, v.children || []), U.return = _, _ = U;
                    break t;
                  } else {
                    l(_, y);
                    break;
                  }
                  else e(_, y);
                  y = y.sibling;
                }
                U = Ji(v, _.mode, U), U.return = _, _ = U;
              }
              return i(_);
            case $t:
              return v = kl(v), St(_, y, v, U);
          }
          if (fe(v)) return L(_, y, v, U);
          if (Zt(v)) {
            if (X = Zt(v), typeof X != "function") throw Error(f(150));
            return v = X.call(v), Q(_, y, v, U);
          }
          if (typeof v.then == "function") return St(_, y, vu(v), U);
          if (v.$$typeof === et) return St(_, y, hu(_, v), U);
          pu(_, v);
        }
        return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, y !== null && y.tag === 6 ? (l(_, y.sibling), U = n(y, v), U.return = _, _ = U) : (l(_, y), U = Ki(v, _.mode, U), U.return = _, _ = U), i(_)) : l(_, y);
      }
      return function(_, y, v, U) {
        try {
          on = 0;
          var X = St(_, y, v, U);
          return ja = null, X;
        } catch (G) {
          if (G === Aa || G === _u) throw G;
          var rt = ye(29, G, null, _.mode);
          return rt.lanes = U, rt.return = _, rt;
        }
      };
    }
    var $l = nr(true), ur = nr(false), vl = false;
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
    function pl(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function xl(t, e, l) {
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
    function yn() {
      if (sc) {
        var t = Na;
        if (t !== null) throw t;
      }
    }
    function hn(t, e, l, a) {
      sc = false;
      var n = t.updateQueue;
      vl = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, r = n.shared.pending;
      if (r !== null) {
        n.shared.pending = null;
        var m = r, p = m.next;
        m.next = null, i === null ? u = p : i.next = p, i = m;
        var T = t.alternate;
        T !== null && (T = T.updateQueue, r = T.lastBaseUpdate, r !== i && (r === null ? T.firstBaseUpdate = p : r.next = p, T.lastBaseUpdate = m));
      }
      if (u !== null) {
        var D = n.baseState;
        i = 0, T = p = m = null, r = u;
        do {
          var x = r.lane & -536870913, N = x !== r.lane;
          if (N ? (ut & x) === x : (a & x) === x) {
            x !== 0 && x === Sa && (sc = true), T !== null && (T = T.next = {
              lane: 0,
              tag: r.tag,
              payload: r.payload,
              callback: null,
              next: null
            });
            t: {
              var L = t, Q = r;
              x = e;
              var St = l;
              switch (Q.tag) {
                case 1:
                  if (L = Q.payload, typeof L == "function") {
                    D = L.call(St, D, x);
                    break t;
                  }
                  D = L;
                  break t;
                case 3:
                  L.flags = L.flags & -65537 | 128;
                case 0:
                  if (L = Q.payload, x = typeof L == "function" ? L.call(St, D, x) : L, x == null) break t;
                  D = R({}, D, x);
                  break t;
                case 2:
                  vl = true;
              }
            }
            x = r.callback, x !== null && (t.flags |= 64, N && (t.flags |= 8192), N = n.callbacks, N === null ? n.callbacks = [
              x
            ] : N.push(x));
          } else N = {
            lane: x,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null
          }, T === null ? (p = T = N, m = D) : T = T.next = N, i |= x;
          if (r = r.next, r === null) {
            if (r = n.shared.pending, r === null) break;
            N = r, r = N.next, N.next = null, n.lastBaseUpdate = N, n.shared.pending = null;
          }
        } while (true);
        T === null && (m = D), n.baseState = m, n.firstBaseUpdate = p, n.lastBaseUpdate = T, u === null && (n.shared.lanes = 0), zl |= i, t.lanes = i, t.memoizedState = D;
      }
    }
    function ir(t, e) {
      if (typeof t != "function") throw Error(f(191, t));
      t.call(e);
    }
    function cr(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) ir(l[t], e);
    }
    var za = h(null), xu = h(0);
    function sr(t, e) {
      t = cl, E(xu, t), E(za, e), cl = t | e.baseLanes;
    }
    function fc() {
      E(xu, cl), E(za, za.current);
    }
    function rc() {
      cl = xu.current, C(za), C(xu);
    }
    var he = h(null), Oe = null;
    function Sl(t) {
      var e = t.alternate;
      E(Ut, Ut.current & 1), E(he, t), Oe === null && (e === null || za.current !== null || e.memoizedState !== null) && (Oe = t);
    }
    function oc(t) {
      E(Ut, Ut.current), E(he, t), Oe === null && (Oe = t);
    }
    function fr(t) {
      t.tag === 22 ? (E(Ut, Ut.current), E(he, t), Oe === null && (Oe = t)) : Nl();
    }
    function Nl() {
      E(Ut, Ut.current), E(he, he.current);
    }
    function ge(t) {
      C(he), Oe === t && (Oe = null), C(Ut);
    }
    var Ut = h(0);
    function Su(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || _s(l) || bs(l))) return e;
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
    var Pe = 0, I = null, pt = null, Ht = null, Nu = false, Ea = false, Fl = false, Au = 0, gn = 0, Ta = null, Z0 = 0;
    function Mt() {
      throw Error(f(321));
    }
    function dc(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!me(t[l], e[l])) return false;
      return true;
    }
    function mc(t, e, l, a, n, u) {
      return Pe = u, I = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, w.H = t === null || t.memoizedState === null ? Kr : Tc, Fl = false, u = l(a, n), Fl = false, Ea && (u = or(e, l, a, n)), rr(t), u;
    }
    function rr(t) {
      w.H = vn;
      var e = pt !== null && pt.next !== null;
      if (Pe = 0, Ht = pt = I = null, Nu = false, gn = 0, Ta = null, e) throw Error(f(300));
      t === null || Bt || (t = t.dependencies, t !== null && yu(t) && (Bt = true));
    }
    function or(t, e, l, a) {
      I = t;
      var n = 0;
      do {
        if (Ea && (Ta = null), gn = 0, Ea = false, 25 <= n) throw Error(f(301));
        if (n += 1, Ht = pt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        w.H = Jr, u = e(l, a);
      } while (Ea);
      return u;
    }
    function V0() {
      var t = w.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? _n(e) : e, t = t.useState()[0], (pt !== null ? pt.memoizedState : null) !== t && (I.flags |= 1024), e;
    }
    function yc() {
      var t = Au !== 0;
      return Au = 0, t;
    }
    function hc(t, e, l) {
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
      Pe = 0, Ht = pt = I = null, Ea = false, gn = Au = 0, Ta = null;
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
        if (t === null) throw I.alternate === null ? Error(f(467)) : Error(f(310));
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
    function ju() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function _n(t) {
      var e = gn;
      return gn += 1, Ta === null && (Ta = []), t = er(Ta, t, e), e = I, (Ht === null ? e.memoizedState : Ht.next) === null && (e = e.alternate, w.H = e === null || e.memoizedState === null ? Kr : Tc), t;
    }
    function zu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return _n(t);
        if (t.$$typeof === et) return Jt(t);
      }
      throw Error(f(438, String(t)));
    }
    function _c(t) {
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
      }), l === null && (l = ju(), I.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Ce;
      return e.index++, l;
    }
    function tl(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Eu(t) {
      var e = Dt();
      return bc(e, pt, t);
    }
    function bc(t, e, l) {
      var a = t.queue;
      if (a === null) throw Error(f(311));
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
        var r = i = null, m = null, p = e, T = false;
        do {
          var D = p.lane & -536870913;
          if (D !== p.lane ? (ut & D) === D : (Pe & D) === D) {
            var x = p.revertLane;
            if (x === 0) m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), D === Sa && (T = true);
            else if ((Pe & x) === x) {
              p = p.next, x === Sa && (T = true);
              continue;
            } else D = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, m === null ? (r = m = D, i = u) : m = m.next = D, I.lanes |= x, zl |= x;
            D = p.action, Fl && l(u, D), u = p.hasEagerState ? p.eagerState : l(u, D);
          } else x = {
            lane: D,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, m === null ? (r = m = x, i = u) : m = m.next = x, I.lanes |= D, zl |= D;
          p = p.next;
        } while (p !== null && p !== e);
        if (m === null ? i = u : m.next = r, !me(u, t.memoizedState) && (Bt = true, T && (l = Na, l !== null))) throw l;
        t.memoizedState = u, t.baseState = i, t.baseQueue = m, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function vc(t) {
      var e = Dt(), l = e.queue;
      if (l === null) throw Error(f(311));
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
        if (l === void 0) throw Error(f(407));
        l = l();
      } else l = e();
      var i = !me((pt || n).memoizedState, l);
      if (i && (n.memoizedState = l, Bt = true), n = n.queue, Sc(hr.bind(null, a, n, t), [
        t
      ]), n.getSnapshot !== e || i || Ht !== null && Ht.memoizedState.tag & 1) {
        if (a.flags |= 2048, Ma(9, {
          destroy: void 0
        }, yr.bind(null, a, n, l, e), null), At === null) throw Error(f(349));
        u || (Pe & 127) !== 0 || mr(a, e, l);
      }
      return l;
    }
    function mr(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = I.updateQueue, e === null ? (e = ju(), I.updateQueue = e, e.stores = [
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
      var e = Xl(t, 2);
      e !== null && se(e, t, 2);
    }
    function pc(t) {
      var e = ee();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), Fl) {
          dl(true);
          try {
            l();
          } finally {
            dl(false);
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
    function br(t, e, l, a) {
      return t.baseState = l, bc(t, pt, typeof a == "function" ? a : tl);
    }
    function K0(t, e, l, a, n) {
      if (wu(t)) throw Error(f(485));
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
          var r = l(n, a), m = w.S;
          m !== null && m(i, r), pr(t, e, r);
        } catch (p) {
          xc(t, e, p);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), w.T = u;
        }
      } else try {
        u = l(n, a), pr(t, e, u);
      } catch (p) {
        xc(t, e, p);
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
    function Ar(t, e) {
      if (ct) {
        var l = At.formState;
        if (l !== null) {
          t: {
            var a = I;
            if (ct) {
              if (jt) {
                e: {
                  for (var n = jt, u = we; n.nodeType !== 8; ) {
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
                  jt = Ue(n.nextSibling), a = n.data === "F!";
                  break t;
                }
              }
              _l(a);
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
      }, a.queue = n, l = K0.bind(null, I, n, u, l), n.dispatch = l, a.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function jr(t) {
      var e = Dt();
      return zr(e, pt, t);
    }
    function zr(t, e, l) {
      if (e = bc(t, e, Nr)[0], t = Eu(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = _n(e);
      } catch (i) {
        throw i === Aa ? _u : i;
      }
      else a = e;
      e = Dt();
      var n = e.queue, u = n.dispatch;
      return l !== e.memoizedState && (I.flags |= 2048, Ma(9, {
        destroy: void 0
      }, J0.bind(null, n, l), null)), [
        a,
        u,
        t
      ];
    }
    function J0(t, e) {
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
    function Ma(t, e, l, a) {
      return t = {
        tag: t,
        create: l,
        deps: a,
        inst: e,
        next: null
      }, e = I.updateQueue, e === null && (e = ju(), I.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
    }
    function Tr() {
      return Dt().memoizedState;
    }
    function Tu(t, e, l, a) {
      var n = ee();
      I.flags |= t, n.memoizedState = Ma(1 | e, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function Mu(t, e, l, a) {
      var n = Dt();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      pt !== null && a !== null && dc(a, pt.memoizedState.deps) ? n.memoizedState = Ma(e, u, l, a) : (I.flags |= t, n.memoizedState = Ma(1 | e, u, l, a));
    }
    function Mr(t, e) {
      Tu(8390656, 8, t, e);
    }
    function Sc(t, e) {
      Mu(2048, 8, t, e);
    }
    function k0(t) {
      I.flags |= 4;
      var e = I.updateQueue;
      if (e === null) e = ju(), I.updateQueue = e, e.events = [
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
      return k0({
        ref: e,
        nextImpl: t
      }), function() {
        if ((mt & 2) !== 0) throw Error(f(440));
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
      if (a = t(), Fl) {
        dl(true);
        try {
          t();
        } finally {
          dl(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    }
    function Ac(t, e, l) {
      return l === void 0 || (Pe & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = qo(), I.lanes |= t, zl |= t, l);
    }
    function Br(t, e, l, a) {
      return me(l, e) ? l : za.current !== null ? (t = Ac(t, l, a), me(t, e) || (Bt = true), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (ut & 261930) === 0 ? (Bt = true, t.memoizedState = l) : (t = qo(), I.lanes |= t, zl |= t, e);
    }
    function qr(t, e, l, a, n) {
      var u = B.p;
      B.p = u !== 0 && 8 > u ? u : 8;
      var i = w.T, r = {};
      w.T = r, Ec(t, false, e, l);
      try {
        var m = n(), p = w.S;
        if (p !== null && p(r, m), m !== null && typeof m == "object" && typeof m.then == "function") {
          var T = Q0(m, a);
          bn(t, e, T, ve(t));
        } else bn(t, e, a, ve(t));
      } catch (D) {
        bn(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: D
        }, ve());
      } finally {
        B.p = u, i !== null && r.types !== null && (i.types = r.types), w.T = i;
      }
    }
    function W0() {
    }
    function jc(t, e, l, a) {
      if (t.tag !== 5) throw Error(f(476));
      var n = Yr(t).queue;
      qr(t, n, e, Z, l === null ? W0 : function() {
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
          lastRenderedReducer: tl,
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
          lastRenderedReducer: tl,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Lr(t) {
      var e = Yr(t);
      e.next === null && (e = t.alternate.memoizedState), bn(t, e.next.queue, {}, ve());
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
    function $0(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = ve();
            t = pl(l);
            var a = xl(e, t, l);
            a !== null && (se(a, e, l), mn(a, e, l)), e = {
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
      }, wu(t) ? Zr(e, l) : (l = Zi(t, e, l, a), l !== null && (se(l, t, a), Vr(l, e, a)));
    }
    function Qr(t, e, l) {
      var a = ve();
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
      if (wu(t)) Zr(e, n);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
          var i = e.lastRenderedState, r = u(i, l);
          if (n.hasEagerState = true, n.eagerState = r, me(r, i)) return ru(t, e, n, 0), At === null && fu(), false;
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
        if (e) throw Error(f(479));
      } else e = Zi(t, l, a, 2), e !== null && se(e, t, 2);
    }
    function wu(t) {
      var e = t.alternate;
      return t === I || e !== null && e === I;
    }
    function Zr(t, e) {
      Ea = Nu = true;
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
      useCallback: Mt,
      useContext: Mt,
      useEffect: Mt,
      useImperativeHandle: Mt,
      useLayoutEffect: Mt,
      useInsertionEffect: Mt,
      useMemo: Mt,
      useReducer: Mt,
      useRef: Mt,
      useState: Mt,
      useDebugValue: Mt,
      useDeferredValue: Mt,
      useTransition: Mt,
      useSyncExternalStore: Mt,
      useId: Mt,
      useHostTransitionStatus: Mt,
      useFormState: Mt,
      useActionState: Mt,
      useOptimistic: Mt,
      useMemoCache: Mt,
      useCacheRefresh: Mt
    };
    vn.useEffectEvent = Mt;
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
        if (Fl) {
          dl(true);
          try {
            t();
          } finally {
            dl(false);
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
          if (Fl) {
            dl(true);
            try {
              l(e);
            } finally {
              dl(false);
            }
          }
        } else n = e;
        return a.memoizedState = a.baseState = n, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = F0.bind(null, I, t), [
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
        return Ac(l, t, e);
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
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (l = e(), At === null) throw Error(f(349));
          (ut & 127) !== 0 || mr(a, e, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: e
        };
        return n.queue = u, Mr(hr.bind(null, a, u, t), [
          t
        ]), a.flags |= 2048, Ma(9, {
          destroy: void 0
        }, yr.bind(null, a, u, l, e), null), l;
      },
      useId: function() {
        var t = ee(), e = At.identifierPrefix;
        if (ct) {
          var l = Le, a = Ye;
          l = (a & ~(1 << 32 - de(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Au++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = Z0++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: zc,
      useFormState: Ar,
      useActionState: Ar,
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
      useMemoCache: _c,
      useCacheRefresh: function() {
        return ee().memoizedState = $0.bind(null, I);
      },
      useEffectEvent: function(t) {
        var e = ee(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((mt & 2) !== 0) throw Error(f(440));
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
        return Eu(tl);
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = Dt();
        return Br(l, pt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Eu(tl)[0], e = Dt().memoizedState;
        return [
          typeof t == "boolean" ? t : _n(t),
          e
        ];
      },
      useSyncExternalStore: dr,
      useId: Gr,
      useHostTransitionStatus: zc,
      useFormState: jr,
      useActionState: jr,
      useOptimistic: function(t, e) {
        var l = Dt();
        return br(l, pt, t, e);
      },
      useMemoCache: _c,
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
        return vc(tl);
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = Dt();
        return pt === null ? Ac(l, t, e) : Br(l, pt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = vc(tl)[0], e = Dt().memoizedState;
        return [
          typeof t == "boolean" ? t : _n(t),
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
        return pt !== null ? br(l, pt, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: _c,
      useCacheRefresh: Xr
    };
    Jr.useEffectEvent = wr;
    function Mc(t, e, l, a) {
      e = t.memoizedState, l = l(a, e), l = l == null ? e : R({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var wc = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var a = ve(), n = pl(a);
        n.payload = e, l != null && (n.callback = l), e = xl(t, n, a), e !== null && (se(e, t, a), mn(e, t, a));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var a = ve(), n = pl(a);
        n.tag = 1, n.payload = e, l != null && (n.callback = l), e = xl(t, n, a), e !== null && (se(e, t, a), mn(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = ve(), a = pl(l);
        a.tag = 2, e != null && (a.callback = e), e = xl(t, a, l), e !== null && (se(e, t, l), mn(e, t, l));
      }
    };
    function kr(t, e, l, a, n, u, i) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !nn(l, a) || !nn(n, u) : true;
    }
    function Wr(t, e, l, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && wc.enqueueReplaceState(e, e.state, null);
    }
    function Il(t, e) {
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
      return l = pl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        Ou(t, e);
      }, l;
    }
    function to(t) {
      return t = pl(t), t.tag = 3, t;
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
        Pr(e, l, a), typeof n != "function" && (El === null ? El = /* @__PURE__ */ new Set([
          this
        ]) : El.add(this));
        var r = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: r !== null ? r : ""
        });
      });
    }
    function I0(t, e, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = l.alternate, e !== null && xa(e, l, n, true), l = he.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Oe === null ? Qu() : l.alternate === null && wt === 0 && (wt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === bu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), ls(t, a, n)), false;
            case 22:
              return l.flags |= 65536, a === bu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), ls(t, a, n)), false;
          }
          throw Error(f(435, l.tag));
        }
        return ls(t, a, n), Qu(), false;
      }
      if (ct) return e = he.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== $i && (t = Error(f(422), {
        cause: a
      }), sn(Ee(t, l)))) : (a !== $i && (e = Error(f(423), {
        cause: a
      }), sn(Ee(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ee(a, l), n = Oc(t.stateNode, a, n), cc(t, n), wt !== 4 && (wt = 2)), false;
      var u = Error(f(520), {
        cause: a
      });
      if (u = Ee(u, l), En === null ? En = [
        u
      ] : En.push(u), wt !== 4 && (wt = 2), e === null) return true;
      a = Ee(a, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Oc(l.stateNode, a, t), cc(l, t), false;
          case 1:
            if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (El === null || !El.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = to(n), eo(n, t, l, a), cc(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Uc = Error(f(461)), Bt = false;
    function kt(t, e, l, a) {
      e.child = t === null ? ur(e, null, l, a) : $l(e, t.child, l, a);
    }
    function lo(t, e, l, a, n) {
      l = l.render;
      var u = e.ref;
      if ("ref" in a) {
        var i = {};
        for (var r in a) r !== "ref" && (i[r] = a[r]);
      } else i = a;
      return Kl(e), a = mc(t, e, l, i, u, n), r = yc(), t !== null && !Bt ? (hc(t, e, n), el(t, e, n)) : (ct && r && ki(e), e.flags |= 1, kt(t, e, a, n), e.child);
    }
    function ao(t, e, l, a, n) {
      if (t === null) {
        var u = l.type;
        return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, no(t, e, u, a, n)) : (t = du(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (u = t.child, !Lc(t, n)) {
        var i = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : nn, l(i, a) && t.ref === e.ref) return el(t, e, n);
      }
      return e.flags |= 1, t = We(u, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function no(t, e, l, a, n) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (nn(u, a) && t.ref === e.ref) if (Bt = false, e.pendingProps = a = u, Lc(t, n)) (t.flags & 131072) !== 0 && (Bt = true);
        else return e.lanes = t.lanes, el(t, e, n);
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
      } else u !== null ? (gu(e, u.cachePool), sr(e, u), Nl(), e.memoizedState = null) : (t !== null && gu(e, null), fc(), Nl());
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
      }, t !== null && gu(e, null), fc(), fr(e), t !== null && xa(t, e, a, true), e.childLanes = n, null;
    }
    function Uu(t, e) {
      return e = Cu({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function co(t, e, l) {
      return $l(e, t.child, null, l), t = Uu(e, e.pendingProps), t.flags |= 2, ge(e), e.memoizedState = null, t;
    }
    function P0(t, e, l) {
      var a = e.pendingProps, n = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (ct) {
          if (a.mode === "hidden") return t = Uu(e, a), e.lanes = 536870912, pn(null, t);
          if (oc(e), (t = jt) ? (t = pd(t, we), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: hl !== null ? {
              id: Ye,
              overflow: Le
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Zf(t), l.return = e, e.child = l, Kt = e, jt = null)) : t = null, t === null) throw _l(e);
          return e.lanes = 536870912, null;
        }
        return Uu(e, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (oc(e), n) if (e.flags & 256) e.flags &= -257, e = co(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
        else if (Bt || xa(t, e, l, false), n = (l & t.childLanes) !== 0, Bt || n) {
          if (a = At, a !== null && (i = $s(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Xl(t, i), se(a, t, i), Uc;
          Qu(), e = co(t, e, l);
        } else t = u.treeContext, jt = Ue(i.nextSibling), Kt = e, ct = true, gl = null, we = false, t !== null && Jf(e, t), e = Uu(e, a), e.flags |= 4096;
        return e;
      }
      return t = We(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Du(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(f(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Dc(t, e, l, a, n) {
      return Kl(e), l = mc(t, e, l, a, void 0, n), a = yc(), t !== null && !Bt ? (hc(t, e, n), el(t, e, n)) : (ct && a && ki(e), e.flags |= 1, kt(t, e, l, n), e.child);
    }
    function so(t, e, l, a, n, u) {
      return Kl(e), e.updateQueue = null, l = or(e, a, l, n), rr(t), a = yc(), t !== null && !Bt ? (hc(t, e, u), el(t, e, u)) : (ct && a && ki(e), e.flags |= 1, kt(t, e, l, u), e.child);
    }
    function fo(t, e, l, a, n) {
      if (Kl(e), e.stateNode === null) {
        var u = _a, i = l.contextType;
        typeof i == "object" && i !== null && (u = Jt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, uc(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Jt(i) : _a, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Mc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && wc.enqueueReplaceState(u, u.state, null), hn(e, a, u, n), yn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        u = e.stateNode;
        var r = e.memoizedProps, m = Il(l, r);
        u.props = m;
        var p = u.context, T = l.contextType;
        i = _a, typeof T == "object" && T !== null && (i = Jt(T));
        var D = l.getDerivedStateFromProps;
        T = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", r = e.pendingProps !== r, T || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r || p !== i) && Wr(e, u, a, i), vl = false;
        var x = e.memoizedState;
        u.state = x, hn(e, a, u, n), yn(), p = e.memoizedState, r || x !== p || vl ? (typeof D == "function" && (Mc(e, l, D, a), p = e.memoizedState), (m = vl || kr(e, l, m, a, x, p, i)) ? (T || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = p), u.props = a, u.state = p, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        u = e.stateNode, ic(t, e), i = e.memoizedProps, T = Il(l, i), u.props = T, D = e.pendingProps, x = u.context, p = l.contextType, m = _a, typeof p == "object" && p !== null && (m = Jt(p)), r = l.getDerivedStateFromProps, (p = typeof r == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== D || x !== m) && Wr(e, u, a, m), vl = false, x = e.memoizedState, u.state = x, hn(e, a, u, n), yn();
        var N = e.memoizedState;
        i !== D || x !== N || vl || t !== null && t.dependencies !== null && yu(t.dependencies) ? (typeof r == "function" && (Mc(e, l, r, a), N = e.memoizedState), (T = vl || kr(e, l, T, a, x, N, m) || t !== null && t.dependencies !== null && yu(t.dependencies)) ? (p || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, N, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, N, m)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = m, a = T) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return u = a, Du(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = $l(e, t.child, null, n), e.child = $l(e, null, l, n)) : kt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = el(t, e, n), t;
    }
    function ro(t, e, l, a) {
      return Zl(), e.flags |= 256, kt(t, e, l, a), e.child;
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
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= be), t;
    }
    function oo(t, e, l) {
      var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
      if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (Ut.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (ct) {
          if (n ? Sl(e) : Nl(), (t = jt) ? (t = pd(t, we), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: hl !== null ? {
              id: Ye,
              overflow: Le
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Zf(t), l.return = e, e.child = l, Kt = e, jt = null)) : t = null, t === null) throw _l(e);
          return bs(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var r = a.children;
        return a = a.fallback, n ? (Nl(), n = e.mode, r = Cu({
          mode: "hidden",
          children: r
        }, n), a = Ql(a, n, l, null), r.return = e, a.return = e, r.sibling = a, e.child = r, a = e.child, a.memoizedState = Rc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Cc, pn(null, a)) : (Sl(e), Bc(e, r));
      }
      var m = t.memoizedState;
      if (m !== null && (r = m.dehydrated, r !== null)) {
        if (u) e.flags & 256 ? (Sl(e), e.flags &= -257, e = qc(t, e, l)) : e.memoizedState !== null ? (Nl(), e.child = t.child, e.flags |= 128, e = null) : (Nl(), r = a.fallback, n = e.mode, a = Cu({
          mode: "visible",
          children: a.children
        }, n), r = Ql(r, n, l, null), r.flags |= 2, a.return = e, r.return = e, a.sibling = r, e.child = a, $l(e, t.child, null, l), a = e.child, a.memoizedState = Rc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Cc, e = pn(null, a));
        else if (Sl(e), bs(r)) {
          if (i = r.nextSibling && r.nextSibling.dataset, i) var p = i.dgst;
          i = p, a = Error(f(419)), a.stack = "", a.digest = i, sn({
            value: a,
            source: null,
            stack: null
          }), e = qc(t, e, l);
        } else if (Bt || xa(t, e, l, false), i = (l & t.childLanes) !== 0, Bt || i) {
          if (i = At, i !== null && (a = $s(i, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Xl(t, a), se(i, t, a), Uc;
          _s(r) || Qu(), e = qc(t, e, l);
        } else _s(r) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, jt = Ue(r.nextSibling), Kt = e, ct = true, gl = null, we = false, t !== null && Jf(e, t), e = Bc(e, a.children), e.flags |= 4096);
        return e;
      }
      return n ? (Nl(), r = a.fallback, n = e.mode, m = t.child, p = m.sibling, a = We(m, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = m.subtreeFlags & 65011712, p !== null ? r = We(p, r) : (r = Ql(r, n, l, null), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, pn(null, a), a = e.child, r = t.child.memoizedState, r === null ? r = Rc(l) : (n = r.cachePool, n !== null ? (m = Rt._currentValue, n = n.parent !== m ? {
        parent: m,
        pool: m
      } : n) : n = Pf(), r = {
        baseLanes: r.baseLanes | l,
        cachePool: n
      }), a.memoizedState = r, a.childLanes = Hc(t, i, l), e.memoizedState = Cc, pn(t.child, a)) : (Sl(e), l = t.child, t = l.sibling, l = We(l, {
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
      return t = ye(22, t, null, e), t.lanes = 0, t;
    }
    function qc(t, e, l) {
      return $l(e, t.child, null, l), t = Bc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
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
      var i = Ut.current, r = (i & 2) !== 0;
      if (r ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, E(Ut, i), kt(t, e, a, l), a = ct ? cn : 0, !r && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
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
    function el(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), zl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (xa(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(f(153));
      if (e.child !== null) {
        for (t = e.child, l = We(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = We(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function Lc(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && yu(t)));
    }
    function ty(t, e, l) {
      switch (e.tag) {
        case 3:
          Gt(e, e.stateNode.containerInfo), bl(e, Rt, t.memoizedState.cache), Zl();
          break;
        case 27:
        case 5:
          rl(e);
          break;
        case 4:
          Gt(e, e.stateNode.containerInfo);
          break;
        case 10:
          bl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, oc(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (Sl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? oo(t, e, l) : (Sl(e), t = el(t, e, l), t !== null ? t.sibling : null);
          Sl(e);
          break;
        case 19:
          var n = (t.flags & 128) !== 0;
          if (a = (l & e.childLanes) !== 0, a || (xa(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
            if (a) return yo(t, e, l);
            e.flags |= 128;
          }
          if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), E(Ut, Ut.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, uo(t, e, l, e.pendingProps);
        case 24:
          bl(e, Rt, t.memoizedState.cache);
      }
      return el(t, e, l);
    }
    function ho(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Bt = true;
      else {
        if (!Lc(t, l) && (e.flags & 128) === 0) return Bt = false, ty(t, e, l);
        Bt = (t.flags & 131072) !== 0;
      }
      else Bt = false, ct && (e.flags & 1048576) !== 0 && Kf(e, cn, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = kl(e.elementType), e.type = t, typeof t == "function") Vi(t) ? (a = Il(t, a), e.tag = 1, e = fo(null, e, t, a, l)) : (e.tag = 0, e = Dc(null, e, t, a, l));
            else {
              if (t != null) {
                var n = t.$$typeof;
                if (n === J) {
                  e.tag = 11, e = lo(null, e, t, a, l);
                  break t;
                } else if (n === F) {
                  e.tag = 14, e = ao(null, e, t, a, l);
                  break t;
                }
              }
              throw e = qe(t) || t, Error(f(306, e, ""));
            }
          }
          return e;
        case 0:
          return Dc(t, e, e.type, e.pendingProps, l);
        case 1:
          return a = e.type, n = Il(a, e.pendingProps), fo(t, e, a, n, l);
        case 3:
          t: {
            if (Gt(e, e.stateNode.containerInfo), t === null) throw Error(f(387));
            a = e.pendingProps;
            var u = e.memoizedState;
            n = u.element, ic(t, e), hn(e, a, null, l);
            var i = e.memoizedState;
            if (a = i.cache, bl(e, Rt, a), a !== u.cache && tc(e, [
              Rt
            ], l, true), yn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = ro(t, e, a, l);
              break t;
            } else if (a !== n) {
              n = Ee(Error(f(424)), e), sn(n), e = ro(t, e, a, l);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, jt = Ue(t.firstChild), Kt = e, ct = true, gl = null, we = true, l = ur(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (Zl(), a === n) {
                e = el(t, e, l);
                break t;
              }
              kt(t, e, a, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Du(t, e), t === null ? (l = zd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, a = $u(V.current).createElement(l), a[Vt] = e, a[le] = t, Wt(a, l, t), Xt(a), e.stateNode = a) : e.memoizedState = zd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return rl(e), t === null && ct && (a = e.stateNode = Nd(e.type, e.pendingProps, V.current), Kt = e, we = true, n = jt, Ol(e.type) ? (vs = n, jt = Ue(a.firstChild)) : jt = n), kt(t, e, e.pendingProps.children, l), Du(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && ct && ((n = a = jt) && (a = wy(a, e.type, e.pendingProps, we), a !== null ? (e.stateNode = a, Kt = e, jt = Ue(a.firstChild), we = false, n = true) : n = false), n || _l(e)), rl(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, ys(n, u) ? a = null : i !== null && ys(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = mc(t, e, V0, null, null, l), Rn._currentValue = n), Du(t, e), kt(t, e, a, l), e.child;
        case 6:
          return t === null && ct && ((t = l = jt) && (l = Oy(l, e.pendingProps, we), l !== null ? (e.stateNode = l, Kt = e, jt = null, t = true) : t = false), t || _l(e)), null;
        case 13:
          return oo(t, e, l);
        case 4:
          return Gt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = $l(e, null, a, l) : kt(t, e, a, l), e.child;
        case 11:
          return lo(t, e, e.type, e.pendingProps, l);
        case 7:
          return kt(t, e, e.pendingProps, l), e.child;
        case 8:
          return kt(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return kt(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return a = e.pendingProps, bl(e, e.type, a.value), kt(t, e, a.children, l), e.child;
        case 9:
          return n = e.type._context, a = e.pendingProps.children, Kl(e), n = Jt(n), a = a(n), e.flags |= 1, kt(t, e, a, l), e.child;
        case 14:
          return ao(t, e, e.type, e.pendingProps, l);
        case 15:
          return no(t, e, e.type, e.pendingProps, l);
        case 19:
          return yo(t, e, l);
        case 31:
          return P0(t, e, l);
        case 22:
          return uo(t, e, l, e.pendingProps);
        case 24:
          return Kl(e), a = Jt(Rt), t === null ? (n = ac(), n === null && (n = At, u = ec(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
            parent: a,
            cache: n
          }, uc(e), bl(e, Rt, n)) : ((t.lanes & l) !== 0 && (ic(t, e), hn(e, null, null, l), yn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), bl(e, Rt, a)) : (a = u.cache, bl(e, Rt, a), a !== n.cache && tc(e, [
            Rt
          ], l, true))), kt(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(f(156, e.tag));
    }
    function ll(t) {
      t.flags |= 4;
    }
    function Gc(t, e, l, a, n) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
        else if (Xo()) t.flags |= 8192;
        else throw Wl = bu, nc;
      } else t.flags &= -16777217;
    }
    function go(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Od(e)) if (Xo()) t.flags |= 8192;
      else throw Wl = bu, nc;
    }
    function Ru(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Js() : 536870912, t.lanes |= e, Da |= e);
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
    function ey(t, e, l) {
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
          return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ie(Rt), Tt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (pa(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Fi())), zt(e), null;
        case 26:
          var n = e.type, u = e.memoizedState;
          return t === null ? (ll(e), u !== null ? (zt(e), go(e, u)) : (zt(e), Gc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (ll(e), zt(e), go(e, u)) : (zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ll(e), zt(e), Gc(e, n, t, a, l)), null;
        case 27:
          if (Ft(e), l = V.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && ll(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(f(166));
              return zt(e), null;
            }
            t = H.current, pa(e) ? kf(e) : (t = Nd(n, a, l), e.stateNode = t, ll(e));
          }
          return zt(e), null;
        case 5:
          if (Ft(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && ll(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(f(166));
              return zt(e), null;
            }
            if (u = H.current, pa(e)) kf(e);
            else {
              var i = $u(V.current);
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
              a && ll(e);
            }
          }
          return zt(e), Gc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && ll(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
            if (t = V.current, pa(e)) {
              if (t = e.stateNode, l = e.memoizedProps, a = null, n = Kt, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              t[Vt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || dd(t.nodeValue, l)), t || _l(e, true);
            } else t = $u(t).createTextNode(a), t[Vt] = e, e.stateNode = t;
          }
          return zt(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = pa(e), l !== null) {
              if (t === null) {
                if (!a) throw Error(f(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
                t[Vt] = e;
              } else Zl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              zt(e), t = false;
            } else l = Fi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (ge(e), e) : (ge(e), null);
            if ((e.flags & 128) !== 0) throw Error(f(558));
          }
          return zt(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (n = pa(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!n) throw Error(f(318));
                if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
                n[Vt] = e;
              } else Zl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              zt(e), n = false;
            } else n = Fi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
            if (!n) return e.flags & 256 ? (ge(e), e) : (ge(e), null);
          }
          return ge(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ru(e, e.updateQueue), zt(e), null);
        case 4:
          return Tt(), t === null && fs(e.stateNode.containerInfo), zt(e), null;
        case 10:
          return Ie(e.type), zt(e), null;
        case 19:
          if (C(Ut), a = e.memoizedState, a === null) return zt(e), null;
          if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) xn(a, false);
          else {
            if (wt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (u = Su(t), u !== null) {
                for (e.flags |= 128, xn(a, false), t = u.updateQueue, e.updateQueue = t, Ru(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Qf(l, t), l = l.sibling;
                return E(Ut, Ut.current & 1 | 2), ct && $e(e, a.treeForkCount), e.child;
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
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = re(), t.sibling = null, l = Ut.current, E(Ut, n ? l & 1 | 2 : l & 1), ct && $e(e, a.treeForkCount), t) : (zt(e), null);
        case 22:
        case 23:
          return ge(e), rc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), l = e.updateQueue, l !== null && Ru(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && C(Jl), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(Rt), zt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(f(156, e.tag));
    }
    function ly(t, e) {
      switch (Wi(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return Ie(Rt), Tt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return Ft(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (ge(e), e.alternate === null) throw Error(f(340));
            Zl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(f(340));
            Zl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return C(Ut), null;
        case 4:
          return Tt(), null;
        case 10:
          return Ie(e.type), null;
        case 22:
        case 23:
          return ge(e), rc(), t !== null && C(Jl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return Ie(Rt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _o(t, e) {
      switch (Wi(e), e.tag) {
        case 3:
          Ie(Rt), Tt();
          break;
        case 26:
        case 27:
        case 5:
          Ft(e);
          break;
        case 4:
          Tt();
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
          Ie(e.type);
          break;
        case 22:
        case 23:
          ge(e), rc(), t !== null && C(Jl);
          break;
        case 24:
          Ie(Rt);
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
      } catch (r) {
        _t(e, e.return, r);
      }
    }
    function Al(t, e, l) {
      try {
        var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & t) === t) {
              var i = a.inst, r = i.destroy;
              if (r !== void 0) {
                i.destroy = void 0, n = e;
                var m = l, p = r;
                try {
                  p();
                } catch (T) {
                  _t(n, m, T);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (T) {
        _t(e, e.return, T);
      }
    }
    function bo(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          cr(e, l);
        } catch (a) {
          _t(t, t.return, a);
        }
      }
    }
    function vo(t, e, l) {
      l.props = Il(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        _t(t, e, a);
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
        _t(t, e, n);
      }
    }
    function Ge(t, e) {
      var l = t.ref, a = t.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        _t(t, e, n);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        _t(t, e, n);
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
        _t(t, t.return, n);
      }
    }
    function Xc(t, e, l) {
      try {
        var a = t.stateNode;
        Ay(a, t.type, l, e), a[le] = e;
      } catch (n) {
        _t(t, t.return, n);
      }
    }
    function xo(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ol(t.type) || t.tag === 4;
    }
    function Qc(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || xo(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Ol(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Zc(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Je));
      else if (a !== 4 && (a === 27 && Ol(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (Zc(t, e, l), t = t.sibling; t !== null; ) Zc(t, e, l), t = t.sibling;
    }
    function Hu(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (a !== 4 && (a === 27 && Ol(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Hu(t, e, l), t = t.sibling; t !== null; ) Hu(t, e, l), t = t.sibling;
    }
    function So(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
        Wt(e, a, l), e[Vt] = t, e[le] = l;
      } catch (u) {
        _t(t, t.return, u);
      }
    }
    var al = false, qt = false, Vc = false, No = typeof WeakSet == "function" ? WeakSet : Set, Qt = null;
    function ay(t, e) {
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
            var i = 0, r = -1, m = -1, p = 0, T = 0, D = t, x = null;
            e: for (; ; ) {
              for (var N; D !== l || n !== 0 && D.nodeType !== 3 || (r = i + n), D !== u || a !== 0 && D.nodeType !== 3 || (m = i + a), D.nodeType === 3 && (i += D.nodeValue.length), (N = D.firstChild) !== null; ) x = D, D = N;
              for (; ; ) {
                if (D === t) break e;
                if (x === l && ++p === n && (r = i), x === u && ++T === a && (m = i), (N = D.nextSibling) !== null) break;
                D = x, x = D.parentNode;
              }
              D = N;
            }
            l = r === -1 || m === -1 ? null : {
              start: r,
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
                var L = Il(l.type, n);
                t = a.getSnapshotBeforeUpdate(L, u), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (Q) {
                _t(l, l.return, Q);
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
            if ((t & 1024) !== 0) throw Error(f(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, Qt = t;
          break;
        }
        Qt = e.return;
      }
    }
    function Ao(t, e, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ul(t, l), a & 4 && Sn(5, l);
          break;
        case 1:
          if (ul(t, l), a & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (i) {
            _t(l, l.return, i);
          }
          else {
            var n = Il(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              _t(l, l.return, i);
            }
          }
          a & 64 && bo(l), a & 512 && Nn(l, l.return);
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
              cr(t, e);
            } catch (i) {
              _t(l, l.return, i);
            }
          }
          break;
        case 27:
          e === null && a & 4 && So(l);
        case 26:
        case 5:
          ul(t, l), e === null && a & 4 && po(l), a & 512 && Nn(l, l.return);
          break;
        case 12:
          ul(t, l);
          break;
        case 31:
          ul(t, l), a & 4 && Eo(t, l);
          break;
        case 13:
          ul(t, l), a & 4 && To(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = dy.bind(null, l), Uy(t, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || al, !a) {
            e = e !== null && e.memoizedState !== null || qt, n = al;
            var u = qt;
            al = a, (qt = e) && !u ? il(t, l, (l.subtreeFlags & 8772) !== 0) : ul(t, l), al = n, qt = u;
          }
          break;
        case 30:
          break;
        default:
          ul(t, l);
      }
    }
    function jo(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, jo(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && xi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Et = null, ne = false;
    function nl(t, e, l) {
      for (l = l.child; l !== null; ) zo(t, e, l), l = l.sibling;
    }
    function zo(t, e, l) {
      if (oe && typeof oe.onCommitFiberUnmount == "function") try {
        oe.onCommitFiberUnmount(Ka, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          qt || Ge(l, e), nl(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          qt || Ge(l, e);
          var a = Et, n = ne;
          Ol(l.type) && (Et = l.stateNode, ne = false), nl(t, e, l), Un(l.stateNode), Et = a, ne = n;
          break;
        case 5:
          qt || Ge(l, e);
        case 6:
          if (a = Et, n = ne, Et = null, nl(t, e, l), Et = a, ne = n, Et !== null) if (ne) try {
            (Et.nodeType === 9 ? Et.body : Et.nodeName === "HTML" ? Et.ownerDocument.body : Et).removeChild(l.stateNode);
          } catch (u) {
            _t(l, e, u);
          }
          else try {
            Et.removeChild(l.stateNode);
          } catch (u) {
            _t(l, e, u);
          }
          break;
        case 18:
          Et !== null && (ne ? (t = Et, bd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Ga(t)) : bd(Et, l.stateNode));
          break;
        case 4:
          a = Et, n = ne, Et = l.stateNode.containerInfo, ne = true, nl(t, e, l), Et = a, ne = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Al(2, l, e), qt || Al(4, l, e), nl(t, e, l);
          break;
        case 1:
          qt || (Ge(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && vo(l, e, a)), nl(t, e, l);
          break;
        case 21:
          nl(t, e, l);
          break;
        case 22:
          qt = (a = qt) || l.memoizedState !== null, nl(t, e, l), qt = a;
          break;
        default:
          nl(t, e, l);
      }
    }
    function Eo(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Ga(t);
        } catch (l) {
          _t(e, e.return, l);
        }
      }
    }
    function To(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Ga(t);
      } catch (l) {
        _t(e, e.return, l);
      }
    }
    function ny(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new No()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new No()), e;
        default:
          throw Error(f(435, t.tag));
      }
    }
    function Bu(t, e) {
      var l = ny(t);
      e.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = my.bind(null, t, a);
          a.then(n, n);
        }
      });
    }
    function ue(t, e) {
      var l = e.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, r = i;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Ol(r.type)) {
                Et = r.stateNode, ne = false;
                break t;
              }
              break;
            case 5:
              Et = r.stateNode, ne = false;
              break t;
            case 3:
            case 4:
              Et = r.stateNode.containerInfo, ne = true;
              break t;
          }
          r = r.return;
        }
        if (Et === null) throw Error(f(160));
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
          ue(e, t), ie(t), a & 4 && (Al(3, t, t.return), Sn(3, t), Al(5, t, t.return));
          break;
        case 1:
          ue(e, t), ie(t), a & 512 && (qt || l === null || Ge(l, l.return)), a & 64 && al && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
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
                      for (var r = 0; r < i.length; r++) if (u = i[r], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        i.splice(r, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), Wt(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = Md("meta", "content", n).get(a + (l.content || ""))) {
                      for (r = 0; r < i.length; r++) if (u = i[r], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        i.splice(r, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), Wt(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(f(468, a));
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
              ra(n, "");
            } catch (L) {
              _t(t, t.return, L);
            }
          }
          a & 4 && t.stateNode != null && (n = t.memoizedProps, Xc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Vc = true);
          break;
        case 6:
          if (ue(e, t), ie(t), a & 4) {
            if (t.stateNode === null) throw Error(f(162));
            a = t.memoizedProps, l = t.stateNode;
            try {
              l.nodeValue = a;
            } catch (L) {
              _t(t, t.return, L);
            }
          }
          break;
        case 3:
          if (Pu = null, n = He, He = Fu(e.containerInfo), ue(e, t), He = n, ie(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Ga(e.containerInfo);
          } catch (L) {
            _t(t, t.return, L);
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
          var m = l !== null && l.memoizedState !== null, p = al, T = qt;
          if (al = p || n, qt = T || m, ue(e, t), qt = T, al = p, ie(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || al || qt || Pl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    r = m.stateNode;
                    var D = m.memoizedProps.style, x = D != null && D.hasOwnProperty("display") ? D.display : null;
                    r.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (L) {
                  _t(m, m.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (L) {
                  _t(m, m.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var N = m.stateNode;
                  n ? vd(N, true) : vd(m.stateNode, false);
                } catch (L) {
                  _t(m, m.return, L);
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
          if (l == null) throw Error(f(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = Qc(t);
              Hu(t, u, n);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (ra(i, ""), l.flags &= -33);
              var r = Qc(t);
              Hu(t, r, i);
              break;
            case 3:
            case 4:
              var m = l.stateNode.containerInfo, p = Qc(t);
              Zc(t, p, m);
              break;
            default:
              throw Error(f(161));
          }
        } catch (T) {
          _t(t, t.return, T);
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
    function ul(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Ao(t, e.alternate, e), e = e.sibling;
    }
    function Pl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Al(4, e, e.return), Pl(e);
            break;
          case 1:
            Ge(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && vo(e, e.return, l), Pl(e);
            break;
          case 27:
            Un(e.stateNode);
          case 26:
          case 5:
            Ge(e, e.return), Pl(e);
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
            il(n, u, l), Sn(4, u);
            break;
          case 1:
            if (il(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (p) {
              _t(a, a.return, p);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var r = a.stateNode;
              try {
                var m = n.shared.hiddenCallbacks;
                if (m !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) ir(m[n], r);
              } catch (p) {
                _t(a, a.return, p);
              }
            }
            l && i & 64 && bo(u), Nn(u, u.return);
            break;
          case 27:
            So(u);
          case 26:
          case 5:
            il(n, u, l), l && a === null && i & 4 && po(u), Nn(u, u.return);
            break;
          case 12:
            il(n, u, l);
            break;
          case 31:
            il(n, u, l), l && i & 4 && Eo(n, u);
            break;
          case 13:
            il(n, u, l), l && i & 4 && To(n, u);
            break;
          case 22:
            u.memoizedState === null && il(n, u, l), Nn(u, u.return);
            break;
          case 30:
            break;
          default:
            il(n, u, l);
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
              var u = e.memoizedProps, i = u.id, r = u.onPostCommit;
              typeof r == "function" && r(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (m) {
              _t(e, e.return, m);
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
          u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Be(t, e, l, a) : An(t, e) : u._visibility & 2 ? Be(t, e, l, a) : (u._visibility |= 2, wa(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Kc(i, e);
          break;
        case 24:
          Be(t, e, l, a), n & 2048 && Jc(e.alternate, e);
          break;
        default:
          Be(t, e, l, a);
      }
    }
    function wa(t, e, l, a, n) {
      for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var u = t, i = e, r = l, m = a, p = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            wa(u, i, r, m, n), Sn(8, i);
            break;
          case 23:
            break;
          case 22:
            var T = i.stateNode;
            i.memoizedState !== null ? T._visibility & 2 ? wa(u, i, r, m, n) : An(u, i) : (T._visibility |= 2, wa(u, i, r, m, n)), n && p & 2048 && Kc(i.alternate, i);
            break;
          case 24:
            wa(u, i, r, m, n), n && p & 2048 && Jc(i.alternate, i);
            break;
          default:
            wa(u, i, r, m, n);
        }
        e = e.sibling;
      }
    }
    function An(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            An(l, a), n & 2048 && Kc(a.alternate, a);
            break;
          case 24:
            An(l, a), n & 2048 && Jc(a.alternate, a);
            break;
          default:
            An(l, a);
        }
        e = e.sibling;
      }
    }
    var jn = 8192;
    function Oa(t, e, l) {
      if (t.subtreeFlags & jn) for (t = t.child; t !== null; ) Uo(t, e, l), t = t.sibling;
    }
    function Uo(t, e, l) {
      switch (t.tag) {
        case 26:
          Oa(t, e, l), t.flags & jn && t.memoizedState !== null && Zy(l, He, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Oa(t, e, l);
          break;
        case 3:
        case 4:
          var a = He;
          He = Fu(t.stateNode.containerInfo), Oa(t, e, l), He = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = jn, jn = 16777216, Oa(t, e, l), jn = a) : Oa(t, e, l));
          break;
        default:
          Oa(t, e, l);
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
          zn(t), t.flags & 2048 && Al(9, t, t.return);
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
            Al(8, e, e.return), qu(e);
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
            Al(8, l, e);
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
          if (jo(a), a === l) {
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
    var uy = {
      getCacheForType: function(t) {
        var e = Jt(Rt), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return Jt(Rt).controller.signal;
      }
    }, iy = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, At = null, lt = null, ut = 0, gt = 0, _e = null, jl = false, Ua = false, kc = false, cl = 0, wt = 0, zl = 0, ta = 0, Wc = 0, be = 0, Da = 0, En = null, ce = null, $c = false, Yu = 0, Ho = 0, Lu = 1 / 0, Gu = null, El = null, Yt = 0, Tl = null, Ca = null, sl = 0, Fc = 0, Ic = null, Bo = null, Tn = 0, Pc = null;
    function ve() {
      return (mt & 2) !== 0 && ut !== 0 ? ut & -ut : w.T !== null ? us() : Fs();
    }
    function qo() {
      if (be === 0) if ((ut & 536870912) === 0 || ct) {
        var t = Wn;
        Wn <<= 1, (Wn & 3932160) === 0 && (Wn = 262144), be = t;
      } else be = 536870912;
      return t = he.current, t !== null && (t.flags |= 32), be;
    }
    function se(t, e, l) {
      (t === At && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) && (Ra(t, 0), Ml(t, ut, be, false)), ka(t, l), ((mt & 2) === 0 || t !== At) && (t === At && ((mt & 2) === 0 && (ta |= l), wt === 4 && Ml(t, ut, be, false)), Xe(t));
    }
    function Yo(t, e, l) {
      if ((mt & 6) !== 0) throw Error(f(327));
      var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ja(t, e), n = a ? fy(t, e) : es(t, e, true), u = a;
      do {
        if (n === 0) {
          Ua && !a && Ml(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, u && !cy(l)) {
            n = es(t, e, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
            else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              e = i;
              t: {
                var r = t;
                n = En;
                var m = r.current.memoizedState.isDehydrated;
                if (m && (Ra(r, i).flags |= 256), i = es(r, i, false), i !== 2) {
                  if (kc && !m) {
                    r.errorRecoveryDisabledLanes |= u, ta |= u, n = 4;
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
            Ra(t, 0), Ml(t, e, 0, true);
            break;
          }
          t: {
            switch (a = t, u = n, u) {
              case 0:
              case 1:
                throw Error(f(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                Ml(a, e, be, !jl);
                break t;
              case 2:
                ce = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(f(329));
            }
            if ((e & 62914560) === e && (n = Yu + 300 - re(), 10 < n)) {
              if (Ml(a, e, be, !jl), Fn(a, 0, true) !== 0) break t;
              sl = e, a.timeoutHandle = gd(Lo.bind(null, a, l, ce, Gu, $c, e, be, ta, Da, jl, u, "Throttled", -0, 0), n);
              break t;
            }
            Lo(a, l, ce, Gu, $c, e, be, ta, Da, jl, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Xe(t);
    }
    function Lo(t, e, l, a, n, u, i, r, m, p, T, D, x, N) {
      if (t.timeoutHandle = -1, D = e.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
        D = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Je
        }, Uo(e, u, D);
        var L = (u & 62914560) === u ? Yu - re() : (u & 4194048) === u ? Ho - re() : 0;
        if (L = Vy(D, L), L !== null) {
          sl = u, t.cancelPendingCommit = L(ko.bind(null, t, e, u, l, a, n, i, r, m, T, D, null, x, N)), Ml(t, u, i, !p);
          return;
        }
      }
      ko(t, e, u, l, a, n, i, r, m);
    }
    function cy(t) {
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
    function Ml(t, e, l, a) {
      e &= ~Wc, e &= ~ta, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
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
        else t = lt, Fe = Vl = null, gc(t), ja = null, on = 0, t = lt;
        for (; t !== null; ) _o(t.alternate, t), t = t.return;
        lt = null;
      }
    }
    function Ra(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, Ey(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), sl = 0, ts(), At = t, lt = l = We(t.current, null), ut = e, gt = 0, _e = null, jl = false, Ua = Ja(t, e), kc = false, Da = be = Wc = ta = zl = wt = 0, ce = En = null, $c = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - de(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
      return cl = e, fu(), l;
    }
    function Go(t, e) {
      I = null, w.H = vn, e === Aa || e === _u ? (e = lr(), gt = 3) : e === nc ? (e = lr(), gt = 4) : gt = e === Uc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, _e = e, lt === null && (wt = 1, Ou(t, Ee(e, t.current)));
    }
    function Xo() {
      var t = he.current;
      return t === null ? true : (ut & 4194048) === ut ? Oe === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Oe : false;
    }
    function Qo() {
      var t = w.H;
      return w.H = vn, t === null ? vn : t;
    }
    function Zo() {
      var t = w.A;
      return w.A = uy, t;
    }
    function Qu() {
      wt = 4, jl || (ut & 4194048) !== ut && he.current !== null || (Ua = true), (zl & 134217727) === 0 && (ta & 134217727) === 0 || At === null || Ml(At, ut, be, false);
    }
    function es(t, e, l) {
      var a = mt;
      mt |= 2;
      var n = Qo(), u = Zo();
      (At !== t || ut !== e) && (Gu = null, Ra(t, e)), e = false;
      var i = wt;
      t: do
        try {
          if (gt !== 0 && lt !== null) {
            var r = lt, m = _e;
            switch (gt) {
              case 8:
                ts(), i = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                he.current === null && (e = true);
                var p = gt;
                if (gt = 0, _e = null, Ha(t, r, m, p), l && Ua) {
                  i = 0;
                  break t;
                }
                break;
              default:
                p = gt, gt = 0, _e = null, Ha(t, r, m, p);
            }
          }
          sy(), i = wt;
          break;
        } catch (T) {
          Go(t, T);
        }
      while (true);
      return e && t.shellSuspendCounter++, Fe = Vl = null, mt = a, w.H = n, w.A = u, lt === null && (At = null, ut = 0, fu()), i;
    }
    function sy() {
      for (; lt !== null; ) Vo(lt);
    }
    function fy(t, e) {
      var l = mt;
      mt |= 2;
      var a = Qo(), n = Zo();
      At !== t || ut !== e ? (Gu = null, Lu = re() + 500, Ra(t, e)) : Ua = Ja(t, e);
      t: do
        try {
          if (gt !== 0 && lt !== null) {
            e = lt;
            var u = _e;
            e: switch (gt) {
              case 1:
                gt = 0, _e = null, Ha(t, e, u, 1);
                break;
              case 2:
              case 9:
                if (tr(u)) {
                  gt = 0, _e = null, Ko(e);
                  break;
                }
                e = function() {
                  gt !== 2 && gt !== 9 || At !== t || (gt = 7), Xe(t);
                }, u.then(e, e);
                break t;
              case 3:
                gt = 7;
                break t;
              case 4:
                gt = 5;
                break t;
              case 7:
                tr(u) ? (gt = 0, _e = null, Ko(e)) : (gt = 0, _e = null, Ha(t, e, u, 7));
                break;
              case 5:
                var i = null;
                switch (lt.tag) {
                  case 26:
                    i = lt.memoizedState;
                  case 5:
                  case 27:
                    var r = lt;
                    if (i ? Od(i) : r.stateNode.complete) {
                      gt = 0, _e = null;
                      var m = r.sibling;
                      if (m !== null) lt = m;
                      else {
                        var p = r.return;
                        p !== null ? (lt = p, Zu(p)) : lt = null;
                      }
                      break e;
                    }
                }
                gt = 0, _e = null, Ha(t, e, u, 5);
                break;
              case 6:
                gt = 0, _e = null, Ha(t, e, u, 6);
                break;
              case 8:
                ts(), wt = 6;
                break t;
              default:
                throw Error(f(462));
            }
          }
          ry();
          break;
        } catch (T) {
          Go(t, T);
        }
      while (true);
      return Fe = Vl = null, w.H = a, w.A = n, mt = l, lt !== null ? 0 : (At = null, ut = 0, fu(), wt);
    }
    function ry() {
      for (; lt !== null && !Dm(); ) Vo(lt);
    }
    function Vo(t) {
      var e = ho(t.alternate, t, cl);
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
          _o(l, e), e = lt = Qf(e, cl), e = ho(l, e, cl);
      }
      t.memoizedProps = t.pendingProps, e === null ? Zu(t) : lt = e;
    }
    function Ha(t, e, l, a) {
      Fe = Vl = null, gc(e), ja = null, on = 0;
      var n = e.return;
      try {
        if (I0(t, n, e, l, ut)) {
          wt = 1, Ou(t, Ee(l, t.current)), lt = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw lt = n, u;
        wt = 1, Ou(t, Ee(l, t.current)), lt = null;
        return;
      }
      e.flags & 32768 ? (ct || a === 1 ? t = true : Ua || (ut & 536870912) !== 0 ? t = false : (jl = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = he.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Jo(e, t)) : Zu(e);
    }
    function Zu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Jo(e, jl);
          return;
        }
        t = e.return;
        var l = ey(e.alternate, e, cl);
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
      wt === 0 && (wt = 5);
    }
    function Jo(t, e) {
      do {
        var l = ly(t.alternate, t);
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
      wt = 6, lt = null;
    }
    function ko(t, e, l, a, n, u, i, r, m) {
      t.cancelPendingCommit = null;
      do
        Vu();
      while (Yt !== 0);
      if ((mt & 6) !== 0) throw Error(f(327));
      if (e !== null) {
        if (e === t.current) throw Error(f(177));
        if (u = e.lanes | e.childLanes, u |= Qi, Qm(t, l, u, i, r, m), t === At && (lt = At = null, ut = 0), Ca = e, Tl = t, sl = l, Fc = u, Ic = n, Bo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yy(Jn, function() {
          return Po(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = w.T, w.T = null, n = B.p, B.p = 2, i = mt, mt |= 4;
          try {
            ay(t, e, l);
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
        var t = Tl, e = Ca, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = w.T, w.T = null;
          var a = B.p;
          B.p = 2;
          var n = mt;
          mt |= 4;
          try {
            Mo(e, t);
            var u = ms, i = Cf(t.containerInfo), r = u.focusedElem, m = u.selectionRange;
            if (i !== r && r && r.ownerDocument && Df(r.ownerDocument.documentElement, r)) {
              if (m !== null && qi(r)) {
                var p = m.start, T = m.end;
                if (T === void 0 && (T = p), "selectionStart" in r) r.selectionStart = p, r.selectionEnd = Math.min(T, r.value.length);
                else {
                  var D = r.ownerDocument || document, x = D && D.defaultView || window;
                  if (x.getSelection) {
                    var N = x.getSelection(), L = r.textContent.length, Q = Math.min(m.start, L), St = m.end === void 0 ? Q : Math.min(m.end, L);
                    !N.extend && Q > St && (i = St, St = Q, Q = i);
                    var _ = Uf(r, Q), y = Uf(r, St);
                    if (_ && y && (N.rangeCount !== 1 || N.anchorNode !== _.node || N.anchorOffset !== _.offset || N.focusNode !== y.node || N.focusOffset !== y.offset)) {
                      var v = D.createRange();
                      v.setStart(_.node, _.offset), N.removeAllRanges(), Q > St ? (N.addRange(v), N.extend(y.node, y.offset)) : (v.setEnd(y.node, y.offset), N.addRange(v));
                    }
                  }
                }
              }
              for (D = [], N = r; N = N.parentNode; ) N.nodeType === 1 && D.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
              for (typeof r.focus == "function" && r.focus(), r = 0; r < D.length; r++) {
                var U = D[r];
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
        var t = Tl, e = Ca, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = w.T, w.T = null;
          var a = B.p;
          B.p = 2;
          var n = mt;
          mt |= 4;
          try {
            Ao(t, e.alternate, e);
          } finally {
            mt = n, B.p = a, w.T = l;
          }
        }
        Yt = 3;
      }
    }
    function Fo() {
      if (Yt === 4 || Yt === 3) {
        Yt = 0, Cm();
        var t = Tl, e = Ca, l = sl, a = Bo;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Yt = 5 : (Yt = 0, Ca = Tl = null, Io(t, t.pendingLanes));
        var n = t.pendingLanes;
        if (n === 0 && (El = null), vi(l), e = e.stateNode, oe && typeof oe.onCommitFiberRoot == "function") try {
          oe.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = w.T, n = B.p, B.p = 2, w.T = null;
          try {
            for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
              var r = a[i];
              u(r.value, {
                componentStack: r.stack
              });
            }
          } finally {
            w.T = e, B.p = n;
          }
        }
        (sl & 3) !== 0 && Vu(), Xe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Pc ? Tn++ : (Tn = 0, Pc = t) : Tn = 0, Mn(0);
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
      var t = Tl, e = Fc;
      Fc = 0;
      var l = vi(sl), a = w.T, n = B.p;
      try {
        B.p = 32 > l ? 32 : l, w.T = null, l = Ic, Ic = null;
        var u = Tl, i = sl;
        if (Yt = 0, Ca = Tl = null, sl = 0, (mt & 6) !== 0) throw Error(f(331));
        var r = mt;
        if (mt |= 4, Co(u.current), Oo(u, u.current, i, l), mt = r, Mn(0, false), oe && typeof oe.onPostCommitFiberRoot == "function") try {
          oe.onPostCommitFiberRoot(Ka, u);
        } catch {
        }
        return true;
      } finally {
        B.p = n, w.T = a, Io(t, e);
      }
    }
    function td(t, e, l) {
      e = Ee(l, e), e = Oc(t.stateNode, e, 2), t = xl(t, e, 2), t !== null && (ka(t, 2), Xe(t));
    }
    function _t(t, e, l) {
      if (t.tag === 3) td(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          td(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (El === null || !El.has(a))) {
            t = Ee(l, t), l = to(2), a = xl(e, l, 2), a !== null && (eo(l, a, e, t), ka(a, 2), Xe(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function ls(t, e, l) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new iy();
        var n = /* @__PURE__ */ new Set();
        a.set(e, n);
      } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
      n.has(l) || (kc = true, n.add(l), t = oy.bind(null, t, e, l), e.then(t, t));
    }
    function oy(t, e, l) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, At === t && (ut & l) === l && (wt === 4 || wt === 3 && (ut & 62914560) === ut && 300 > re() - Yu ? (mt & 2) === 0 && Ra(t, 0) : Wc |= l, Da === ut && (Da = 0)), Xe(t);
    }
    function ed(t, e) {
      e === 0 && (e = Js()), t = Xl(t, e), t !== null && (ka(t, e), Xe(t));
    }
    function dy(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), ed(t, l);
    }
    function my(t, e) {
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
          throw Error(f(314));
      }
      a !== null && a.delete(e), ed(t, l);
    }
    function yy(t, e) {
      return hi(t, e);
    }
    var Ku = null, Ba = null, as = false, Ju = false, ns = false, wl = 0;
    function Xe(t) {
      t !== Ba && t.next === null && (Ba === null ? Ku = Ba = t : Ba = Ba.next = t), Ju = true, as || (as = true, gy());
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
                var i = a.suspendedLanes, r = a.pingedLanes;
                u = (1 << 31 - de(42 | t) + 1) - 1, u &= n & ~(i & ~r), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, ud(a, u));
            } else u = ut, u = Fn(a, a === At ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ja(a, u) || (l = true, ud(a, u));
            a = a.next;
          }
        while (l);
        ns = false;
      }
    }
    function hy() {
      ld();
    }
    function ld() {
      Ju = as = false;
      var t = 0;
      wl !== 0 && zy() && (t = wl);
      for (var e = re(), l = null, a = Ku; a !== null; ) {
        var n = a.next, u = ad(a, e);
        u === 0 ? (a.next = null, l === null ? Ku = n : l.next = n, n === null && (Ba = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Ju = true)), a = n;
      }
      Yt !== 0 && Yt !== 5 || Mn(t), wl !== 0 && (wl = 0);
    }
    function ad(t, e) {
      for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - de(u), r = 1 << i, m = n[i];
        m === -1 ? ((r & l) === 0 || (r & a) !== 0) && (n[i] = Xm(r, e)) : m <= e && (t.expiredLanes |= r), u &= ~r;
      }
      if (e = At, l = ut, l = Fn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && gi(a), t.callbackNode = null, t.callbackPriority = 0;
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
        return a = nd.bind(null, t), l = hi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return a !== null && a !== null && gi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function nd(t, e) {
      if (Yt !== 0 && Yt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (Vu() && t.callbackNode !== l) return null;
      var a = ut;
      return a = Fn(t, t === At ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Yo(t, a, e), ad(t, re()), t.callbackNode != null && t.callbackNode === l ? nd.bind(null, t) : null);
    }
    function ud(t, e) {
      if (Vu()) return null;
      Yo(t, e, true);
    }
    function gy() {
      Ty(function() {
        (mt & 6) !== 0 ? hi(Zs, hy) : ld();
      });
    }
    function us() {
      if (wl === 0) {
        var t = Sa;
        t === 0 && (t = kn, kn <<= 1, (kn & 261888) === 0 && (kn = 256)), wl = t;
      }
      return wl;
    }
    function id(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : eu("" + t);
    }
    function cd(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function _y(t, e, l, a, n) {
      if (e === "submit" && l && l.stateNode === n) {
        var u = id((n[le] || null).action), i = a.submitter;
        i && (e = (e = i[le] || null) ? id(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
        var r = new uu("action", "action", null, a, n);
        t.push({
          event: r,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (wl !== 0) {
                    var m = i ? cd(n, i) : new FormData(n);
                    jc(l, {
                      pending: true,
                      data: m,
                      method: n.method,
                      action: u
                    }, null, m);
                  }
                } else typeof u == "function" && (r.preventDefault(), m = i ? cd(n, i) : new FormData(n), jc(l, {
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
      var cs = Xi[is], by = cs.toLowerCase(), vy = cs[0].toUpperCase() + cs.slice(1);
      Re(by, "on" + vy);
    }
    Re(Bf, "onAnimationEnd"), Re(qf, "onAnimationIteration"), Re(Yf, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(R0, "onTransitionRun"), Re(H0, "onTransitionStart"), Re(B0, "onTransitionCancel"), Re(Lf, "onTransitionEnd"), sa("onMouseEnter", [
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
    var wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), py = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));
    function sd(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var a = t[l], n = a.event;
        a = a.listeners;
        t: {
          var u = void 0;
          if (e) for (var i = a.length - 1; 0 <= i; i--) {
            var r = a[i], m = r.instance, p = r.currentTarget;
            if (r = r.listener, m !== u && n.isPropagationStopped()) break t;
            u = r, n.currentTarget = p;
            try {
              u(n);
            } catch (T) {
              su(T);
            }
            n.currentTarget = null, u = m;
          }
          else for (i = 0; i < a.length; i++) {
            if (r = a[i], m = r.instance, p = r.currentTarget, r = r.listener, m !== u && n.isPropagationStopped()) break t;
            u = r, n.currentTarget = p;
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
          l !== "selectionchange" && (py.has(l) || ss(l, false, t), ss(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[ku] || (e[ku] = true, ss("selectionchange", false, e));
      }
    }
    function fd(t, e, l, a) {
      switch (qd(e)) {
        case 2:
          var n = ky;
          break;
        case 8:
          n = Wy;
          break;
        default:
          n = As;
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
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (i === 4) for (i = a.return; i !== null; ) {
            var m = i.tag;
            if ((m === 3 || m === 4) && i.stateNode.containerInfo === n) return;
            i = i.return;
          }
          for (; r !== null; ) {
            if (i = ua(r), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
      mf(function() {
        var p = u, T = Ei(l), D = [];
        t: {
          var x = Gf.get(t);
          if (x !== void 0) {
            var N = uu, L = t;
            switch (t) {
              case "keypress":
                if (au(l) === 0) break t;
              case "keydown":
              case "keyup":
                N = m0;
                break;
              case "focusin":
                L = "focus", N = Di;
                break;
              case "focusout":
                L = "blur", N = Di;
                break;
              case "beforeblur":
              case "afterblur":
                N = Di;
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
                N = gf;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                N = e0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                N = g0;
                break;
              case Bf:
              case qf:
              case Yf:
                N = n0;
                break;
              case Lf:
                N = b0;
                break;
              case "scroll":
              case "scrollend":
                N = Pm;
                break;
              case "wheel":
                N = p0;
                break;
              case "copy":
              case "cut":
              case "paste":
                N = i0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                N = bf;
                break;
              case "toggle":
              case "beforetoggle":
                N = S0;
            }
            var Q = (e & 4) !== 0, St = !Q && (t === "scroll" || t === "scrollend"), _ = Q ? x !== null ? x + "Capture" : null : x;
            Q = [];
            for (var y = p, v; y !== null; ) {
              var U = y;
              if (v = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || v === null || _ === null || (U = Fa(y, _), U != null && Q.push(On(y, U, v))), St) break;
              y = y.return;
            }
            0 < Q.length && (x = new N(x, L, null, l, T), D.push({
              event: x,
              listeners: Q
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (x = t === "mouseover" || t === "pointerover", N = t === "mouseout" || t === "pointerout", x && l !== zi && (L = l.relatedTarget || l.fromElement) && (ua(L) || L[na])) break t;
            if ((N || x) && (x = T.window === T ? T : (x = T.ownerDocument) ? x.defaultView || x.parentWindow : window, N ? (L = l.relatedTarget || l.toElement, N = p, L = L ? ua(L) : null, L !== null && (St = j(L), Q = L.tag, L !== St || Q !== 5 && Q !== 27 && Q !== 6) && (L = null)) : (N = null, L = p), N !== L)) {
              if (Q = gf, U = "onMouseLeave", _ = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (Q = bf, U = "onPointerLeave", _ = "onPointerEnter", y = "pointer"), St = N == null ? x : $a(N), v = L == null ? x : $a(L), x = new Q(U, y + "leave", N, l, T), x.target = St, x.relatedTarget = v, U = null, ua(T) === p && (Q = new Q(_, y + "enter", L, l, T), Q.target = v, Q.relatedTarget = St, U = Q), St = U, N && L) e: {
                for (Q = xy, _ = N, y = L, v = 0, U = _; U; U = Q(U)) v++;
                U = 0;
                for (var X = y; X; X = Q(X)) U++;
                for (; 0 < v - U; ) _ = Q(_), v--;
                for (; 0 < U - v; ) y = Q(y), U--;
                for (; v--; ) {
                  if (_ === y || y !== null && _ === y.alternate) {
                    Q = _;
                    break e;
                  }
                  _ = Q(_), y = Q(y);
                }
                Q = null;
              }
              else Q = null;
              N !== null && rd(D, x, N, Q, false), L !== null && St !== null && rd(D, St, L, Q, true);
            }
          }
          t: {
            if (x = p ? $a(p) : window, N = x.nodeName && x.nodeName.toLowerCase(), N === "select" || N === "input" && x.type === "file") var rt = zf;
            else if (Af(x)) if (Ef) rt = U0;
            else {
              rt = w0;
              var G = M0;
            }
            else N = x.nodeName, !N || N.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? p && ji(p.elementType) && (rt = zf) : rt = O0;
            if (rt && (rt = rt(t, p))) {
              jf(D, rt, l, T);
              break t;
            }
            G && G(t, x, p), t === "focusout" && p && x.type === "number" && p.memoizedProps.value != null && Ai(x, "number", x.value);
          }
          switch (G = p ? $a(p) : window, t) {
            case "focusin":
              (Af(G) || G.contentEditable === "true") && (ya = G, Yi = p, un = null);
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
              if (C0) break;
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
          else ma ? Sf(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
          it && (vf && l.locale !== "ko" && (ma || it !== "onCompositionStart" ? it === "onCompositionEnd" && ma && (P = yf()) : (yl = T, wi = "value" in yl ? yl.value : yl.textContent, ma = true)), G = Wu(p, it), 0 < G.length && (it = new _f(it, t, null, l, T), D.push({
            event: it,
            listeners: G
          }), P ? it.data = P : (P = Nf(l), P !== null && (it.data = P)))), (P = A0 ? j0(t, l) : z0(t, l)) && (it = Wu(p, "onBeforeInput"), 0 < it.length && (G = new _f("onBeforeInput", "beforeinput", null, l, T), D.push({
            event: G,
            listeners: it
          }), G.data = P)), _y(D, t, p, l, T);
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
    function xy(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function rd(t, e, l, a, n) {
      for (var u = e._reactName, i = []; l !== null && l !== a; ) {
        var r = l, m = r.alternate, p = r.stateNode;
        if (r = r.tag, m !== null && m === a) break;
        r !== 5 && r !== 26 && r !== 27 || p === null || (m = p, n ? (p = Fa(l, u), p != null && i.unshift(On(l, p, m))) : n || (p = Fa(l, u), p != null && i.push(On(l, p, m)))), l = l.return;
      }
      i.length !== 0 && t.push({
        event: e,
        listeners: i
      });
    }
    var Sy = /\r\n?/g, Ny = /\u0000|\uFFFD/g;
    function od(t) {
      return (typeof t == "string" ? t : "" + t).replace(Sy, `
`).replace(Ny, "");
    }
    function dd(t, e) {
      return e = od(e), od(t) === e;
    }
    function xt(t, e, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ra(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ra(t, "" + a);
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
          a != null && (t.onclick = Je);
          break;
        case "onScroll":
          a != null && at("scroll", t);
          break;
        case "onScrollEnd":
          a != null && at("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(f(60));
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
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Ke(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Ke(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          In(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Fm.get(l) || l, In(t, l, a));
      }
    }
    function os(t, e, l, a, n, u) {
      switch (l) {
        case "style":
          of(t, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(f(60));
              t.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ra(t, a) : (typeof a == "number" || typeof a == "bigint") && ra(t, "" + a);
          break;
        case "onScroll":
          a != null && at("scroll", t);
          break;
        case "onScrollEnd":
          a != null && at("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = Je);
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
                throw Error(f(137, e));
              default:
                xt(t, e, u, i, l, null);
            }
          }
          n && xt(t, e, "srcSet", l.srcSet, l, null), a && xt(t, e, "src", l.src, l, null);
          return;
        case "input":
          at("invalid", t);
          var r = u = i = n = null, m = null, p = null;
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
                p = T;
                break;
              case "value":
                u = T;
                break;
              case "defaultValue":
                r = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(f(137, e));
                break;
              default:
                xt(t, e, a, T, l, null);
            }
          }
          cf(t, u, r, m, p, i, n, false);
          return;
        case "select":
          at("invalid", t), a = i = u = null;
          for (n in l) if (l.hasOwnProperty(n) && (r = l[n], r != null)) switch (n) {
            case "value":
              u = r;
              break;
            case "defaultValue":
              i = r;
              break;
            case "multiple":
              a = r;
            default:
              xt(t, e, n, r, l, null);
          }
          e = u, l = i, t.multiple = !!a, e != null ? fa(t, !!a, e, false) : l != null && fa(t, !!a, l, true);
          return;
        case "textarea":
          at("invalid", t), u = n = a = null;
          for (i in l) if (l.hasOwnProperty(i) && (r = l[i], r != null)) switch (i) {
            case "value":
              a = r;
              break;
            case "defaultValue":
              n = r;
              break;
            case "children":
              u = r;
              break;
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(f(91));
              break;
            default:
              xt(t, e, i, r, l, null);
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
          for (p in l) if (l.hasOwnProperty(p) && (a = l[p], a != null)) switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(137, e));
            default:
              xt(t, e, p, a, l, null);
          }
          return;
        default:
          if (ji(e)) {
            for (T in l) l.hasOwnProperty(T) && (a = l[T], a !== void 0 && os(t, e, T, a, l, void 0));
            return;
          }
      }
      for (r in l) l.hasOwnProperty(r) && (a = l[r], a != null && xt(t, e, r, a, l, null));
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
          var n = null, u = null, i = null, r = null, m = null, p = null, T = null;
          for (N in l) {
            var D = l[N];
            if (l.hasOwnProperty(N) && D != null) switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = D;
              default:
                a.hasOwnProperty(N) || xt(t, e, N, null, a, D);
            }
          }
          for (var x in a) {
            var N = a[x];
            if (D = l[x], a.hasOwnProperty(x) && (N != null || D != null)) switch (x) {
              case "type":
                u = N;
                break;
              case "name":
                n = N;
                break;
              case "checked":
                p = N;
                break;
              case "defaultChecked":
                T = N;
                break;
              case "value":
                i = N;
                break;
              case "defaultValue":
                r = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(f(137, e));
                break;
              default:
                N !== D && xt(t, e, x, N, a, D);
            }
          }
          Ni(t, i, r, m, p, T, u, n);
          return;
        case "select":
          N = i = r = x = null;
          for (u in l) if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
            case "value":
              break;
            case "multiple":
              N = m;
            default:
              a.hasOwnProperty(u) || xt(t, e, u, null, a, m);
          }
          for (n in a) if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null)) switch (n) {
            case "value":
              x = u;
              break;
            case "defaultValue":
              r = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== m && xt(t, e, n, u, a, m);
          }
          e = r, l = i, a = N, x != null ? fa(t, !!l, x, false) : !!a != !!l && (e != null ? fa(t, !!l, e, true) : fa(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          N = x = null;
          for (r in l) if (n = l[r], l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r)) switch (r) {
            case "value":
              break;
            case "children":
              break;
            default:
              xt(t, e, r, null, a, n);
          }
          for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              x = n;
              break;
            case "defaultValue":
              N = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(f(91));
              break;
            default:
              n !== u && xt(t, e, i, n, a, u);
          }
          sf(t, x, N);
          return;
        case "option":
          for (var L in l) x = l[L], l.hasOwnProperty(L) && x != null && !a.hasOwnProperty(L) && (L === "selected" ? t.selected = false : xt(t, e, L, null, a, x));
          for (m in a) x = a[m], N = l[m], a.hasOwnProperty(m) && x !== N && (x != null || N != null) && (m === "selected" ? t.selected = x && typeof x != "function" && typeof x != "symbol" : xt(t, e, m, x, a, N));
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
          for (var Q in l) x = l[Q], l.hasOwnProperty(Q) && x != null && !a.hasOwnProperty(Q) && xt(t, e, Q, null, a, x);
          for (p in a) if (x = a[p], N = l[p], a.hasOwnProperty(p) && x !== N && (x != null || N != null)) switch (p) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (x != null) throw Error(f(137, e));
              break;
            default:
              xt(t, e, p, x, a, N);
          }
          return;
        default:
          if (ji(e)) {
            for (var St in l) x = l[St], l.hasOwnProperty(St) && x !== void 0 && !a.hasOwnProperty(St) && os(t, e, St, void 0, a, x);
            for (T in a) x = a[T], N = l[T], !a.hasOwnProperty(T) || x === N || x === void 0 && N === void 0 || os(t, e, T, x, a, N);
            return;
          }
      }
      for (var _ in l) x = l[_], l.hasOwnProperty(_) && x != null && !a.hasOwnProperty(_) && xt(t, e, _, null, a, x);
      for (D in a) x = a[D], N = l[D], !a.hasOwnProperty(D) || x === N || x == null && N == null || xt(t, e, D, x, a, N);
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
    function jy() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, i = n.initiatorType, r = n.duration;
          if (u && r && md(i)) {
            for (i = 0, r = n.responseEnd, a += 1; a < l.length; a++) {
              var m = l[a], p = m.startTime;
              if (p > r) break;
              var T = m.transferSize, D = m.initiatorType;
              T && md(D) && (m = m.responseEnd, i += T * (m < r ? 1 : (r - p) / (m - p)));
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
    function ys(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var hs = null;
    function zy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === hs ? false : (hs = t, true) : (hs = null, false);
    }
    var gd = typeof setTimeout == "function" ? setTimeout : void 0, Ey = typeof clearTimeout == "function" ? clearTimeout : void 0, _d = typeof Promise == "function" ? Promise : void 0, Ty = typeof queueMicrotask == "function" ? queueMicrotask : typeof _d < "u" ? function(t) {
      return _d.resolve(null).then(t).catch(My);
    } : gd;
    function My(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Ol(t) {
      return t === "head";
    }
    function bd(t, e) {
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
        else if (l === "html") Un(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Un(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, r = u.nodeName;
            u[Wa] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else l === "body" && Un(t.ownerDocument.body);
        l = n;
      } while (l);
      Ga(e);
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
    function wy(t, e, l, a) {
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
    function Oy(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ue(t.nextSibling), t === null)) return null;
      return t;
    }
    function pd(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ue(t.nextSibling), t === null)) return null;
      return t;
    }
    function _s(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function bs(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function Uy(t, e) {
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
          if (t = e.documentElement, !t) throw Error(f(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(f(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(f(454));
          return t;
        default:
          throw Error(f(451));
      }
    }
    function Un(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      xi(t);
    }
    var De = /* @__PURE__ */ new Map(), Ad = /* @__PURE__ */ new Set();
    function Fu(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var fl = B.d;
    B.d = {
      f: Dy,
      r: Cy,
      D: Ry,
      C: Hy,
      L: By,
      m: qy,
      X: Ly,
      S: Yy,
      M: Gy
    };
    function Dy() {
      var t = fl.f(), e = Xu();
      return t || e;
    }
    function Cy(t) {
      var e = ia(t);
      e !== null && e.tag === 5 && e.type === "form" ? Lr(e) : fl.r(t);
    }
    var qa = typeof document > "u" ? null : document;
    function jd(t, e, l) {
      var a = qa;
      if (a && typeof e == "string" && e) {
        var n = je(e);
        n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Ad.has(n) || (Ad.add(n), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, a.querySelector(n) === null && (e = a.createElement("link"), Wt(e, "link", t), Xt(e), a.head.appendChild(e)));
      }
    }
    function Ry(t) {
      fl.D(t), jd("dns-prefetch", t, null);
    }
    function Hy(t, e) {
      fl.C(t, e), jd("preconnect", t, e);
    }
    function By(t, e, l) {
      fl.L(t, e, l);
      var a = qa;
      if (a && t && e) {
        var n = 'link[rel="preload"][as="' + je(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + je(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + je(l.imageSizes) + '"]')) : n += '[href="' + je(t) + '"]';
        var u = n;
        switch (e) {
          case "style":
            u = Ya(t);
            break;
          case "script":
            u = La(t);
        }
        De.has(u) || (t = R({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), De.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Dn(u)) || e === "script" && a.querySelector(Cn(u)) || (e = a.createElement("link"), Wt(e, "link", t), Xt(e), a.head.appendChild(e)));
      }
    }
    function qy(t, e) {
      fl.m(t, e);
      var l = qa;
      if (l && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + je(a) + '"][href="' + je(t) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = La(t);
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
    function Yy(t, e, l) {
      fl.S(t, e, l);
      var a = qa;
      if (a && t) {
        var n = ca(a).hoistableStyles, u = Ya(t);
        e = e || "default";
        var i = n.get(u);
        if (!i) {
          var r = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(Dn(u))) r.loading = 5;
          else {
            t = R({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = De.get(u)) && ps(t, l);
            var m = i = a.createElement("link");
            Xt(m), Wt(m, "link", t), m._p = new Promise(function(p, T) {
              m.onload = p, m.onerror = T;
            }), m.addEventListener("load", function() {
              r.loading |= 1;
            }), m.addEventListener("error", function() {
              r.loading |= 2;
            }), r.loading |= 4, Iu(i, e, a);
          }
          i = {
            type: "stylesheet",
            instance: i,
            count: 1,
            state: r
          }, n.set(u, i);
        }
      }
    }
    function Ly(t, e) {
      fl.X(t, e);
      var l = qa;
      if (l && t) {
        var a = ca(l).hoistableScripts, n = La(t), u = a.get(n);
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
    function Gy(t, e) {
      fl.M(t, e);
      var l = qa;
      if (l && t) {
        var a = ca(l).hoistableScripts, n = La(t), u = a.get(n);
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
      var n = (n = V.current) ? Fu(n) : null;
      if (!n) throw Error(f(446));
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
            }, u.set(t, i), (u = n.querySelector(Dn(t))) && !u._p && (i.instance = u, i.state.loading = 5), De.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, De.set(t, l), u || Xy(n, t, l, i.state))), e && a === null) throw Error(f(528, ""));
            return i;
          }
          if (e && a !== null) throw Error(f(529, ""));
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
          throw Error(f(444, t));
      }
    }
    function Ya(t) {
      return 'href="' + je(t) + '"';
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
    function Xy(t, e, l, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), Wt(e, "link", l), Xt(e), t.head.appendChild(e));
    }
    function La(t) {
      return '[src="' + je(t) + '"]';
    }
    function Cn(t) {
      return "script[async]" + t;
    }
    function Td(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + je(l.href) + '"]');
          if (a) return e.instance = a, Xt(a), a;
          var n = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Xt(a), Wt(a, "style", n), Iu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ya(l.href);
          var u = t.querySelector(Dn(n));
          if (u) return e.state.loading |= 4, e.instance = u, Xt(u), u;
          a = Ed(l), (n = De.get(n)) && ps(a, n), u = (t.ownerDocument || t).createElement("link"), Xt(u);
          var i = u;
          return i._p = new Promise(function(r, m) {
            i.onload = r, i.onerror = m;
          }), Wt(u, "link", a), e.state.loading |= 4, Iu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = La(l.src), (n = t.querySelector(Cn(u))) ? (e.instance = n, Xt(n), n) : (a = l, (n = De.get(u)) && (a = R({}, l), xs(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Xt(n), Wt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Iu(a, l.precedence, t));
      return e.instance;
    }
    function Iu(t, e, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var r = a[i];
        if (r.dataset.precedence === e) u = r;
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
          var r = a.get(i);
          r ? r.push(u) : a.set(i, [
            u
          ]);
        }
      }
      return a;
    }
    function wd(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function Qy(t, e, l) {
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
    function Zy(t, e, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = Ya(a.href), u = e.querySelector(Dn(n));
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ti.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Xt(u);
            return;
          }
          u = e.ownerDocument || e, a = Ed(a), (n = De.get(n)) && ps(a, n), u = u.createElement("link"), Xt(u);
          var i = u;
          i._p = new Promise(function(r, m) {
            i.onload = r, i.onerror = m;
          }), Wt(u, "link", a), l.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = ti.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var Ss = 0;
    function Vy(t, e) {
      return t.stylesheets && t.count === 0 && li(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (t.stylesheets && li(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + e);
        0 < t.imgBytes && Ss === 0 && (Ss = 62500 * jy());
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
      t.stylesheets = null, t.unsuspend !== null && (t.count++, ei = /* @__PURE__ */ new Map(), e.forEach(Ky, t), ei = null, ti.call(t));
    }
    function Ky(t, e) {
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
      _currentValue: Z,
      _currentValue2: Z,
      _threadCount: 0
    };
    function Jy(t, e, l, a, n, u, i, r, m) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = _i(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _i(0), this.hiddenUpdates = _i(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Ud(t, e, l, a, n, u, i, r, m, p, T, D) {
      return t = new Jy(t, e, l, i, m, p, T, D, r), e = 1, u === true && (e |= 24), u = ye(3, null, null, e), t.current = u, u.stateNode = t, e = ec(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      }, uc(u), t;
    }
    function Dd(t) {
      return t ? (t = _a, t) : _a;
    }
    function Cd(t, e, l, a, n, u) {
      n = Dd(n), a.context === null ? a.context = n : a.pendingContext = n, a = pl(e), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = xl(t, a, e), l !== null && (se(l, t, e), mn(l, t, e));
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
        var e = Xl(t, 67108864);
        e !== null && se(e, t, 67108864), Ns(t, 67108864);
      }
    }
    function Bd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ve();
        e = bi(e);
        var l = Xl(t, e);
        l !== null && se(l, t, e), Ns(t, e);
      }
    }
    var ai = true;
    function ky(t, e, l, a) {
      var n = w.T;
      w.T = null;
      var u = B.p;
      try {
        B.p = 2, As(t, e, l, a);
      } finally {
        B.p = u, w.T = n;
      }
    }
    function Wy(t, e, l, a) {
      var n = w.T;
      w.T = null;
      var u = B.p;
      try {
        B.p = 8, As(t, e, l, a);
      } finally {
        B.p = u, w.T = n;
      }
    }
    function As(t, e, l, a) {
      if (ai) {
        var n = js(a);
        if (n === null) rs(t, e, a, ni, l), Yd(t, a);
        else if (Fy(n, t, e, l, a)) a.stopPropagation();
        else if (Yd(t, a), e & 4 && -1 < $y.indexOf(t)) {
          for (; n !== null; ) {
            var u = ia(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Bl(u.pendingLanes);
                  if (i !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - de(i);
                      r.entanglements[1] |= m, i &= ~m;
                    }
                    Xe(u), (mt & 6) === 0 && (Lu = re() + 500, Mn(0));
                  }
                }
                break;
              case 31:
              case 13:
                r = Xl(u, 2), r !== null && se(r, u, 2), Xu(), Ns(u, 2);
            }
            if (u = js(a), u === null && rs(t, e, a, ni, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else rs(t, e, a, null, l);
      }
    }
    function js(t) {
      return t = Ei(t), zs(t);
    }
    var ni = null;
    function zs(t) {
      if (ni = null, t = ua(t), t !== null) {
        var e = j(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = z(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = S(e), t !== null) return t;
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
          switch (Rm()) {
            case Zs:
              return 2;
            case Vs:
              return 8;
            case Jn:
            case Hm:
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
    var Es = false, Ul = null, Dl = null, Cl = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Rl = [], $y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Yd(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Ul = null;
          break;
        case "dragenter":
        case "dragleave":
          Dl = null;
          break;
        case "mouseover":
        case "mouseout":
          Cl = null;
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
      }, e !== null && (e = ia(e), e !== null && Hd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
    }
    function Fy(t, e, l, a, n) {
      switch (e) {
        case "focusin":
          return Ul = qn(Ul, t, e, l, a, n), true;
        case "dragenter":
          return Dl = qn(Dl, t, e, l, a, n), true;
        case "mouseover":
          return Cl = qn(Cl, t, e, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Hn.set(u, qn(Hn.get(u) || null, t, e, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Bn.set(u, qn(Bn.get(u) || null, t, e, l, a, n)), true;
      }
      return false;
    }
    function Ld(t) {
      var e = ua(t.target);
      if (e !== null) {
        var l = j(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = z(l), e !== null) {
              t.blockedOn = e, Is(t.priority, function() {
                Bd(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = S(l), e !== null) {
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
        var l = js(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var a = new l.constructor(l.type, l);
          zi = a, l.target.dispatchEvent(a), zi = null;
        } else return e = ia(l), e !== null && Hd(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function Gd(t, e, l) {
      ui(t) && l.delete(e);
    }
    function Iy() {
      Es = false, Ul !== null && ui(Ul) && (Ul = null), Dl !== null && ui(Dl) && (Dl = null), Cl !== null && ui(Cl) && (Cl = null), Hn.forEach(Gd), Bn.forEach(Gd);
    }
    function ii(t, e) {
      t.blockedOn === e && (t.blockedOn = null, Es || (Es = true, c.unstable_scheduleCallback(c.unstable_NormalPriority, Iy)));
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
        return ii(m, t);
      }
      Ul !== null && ii(Ul, t), Dl !== null && ii(Dl, t), Cl !== null && ii(Cl, t), Hn.forEach(e), Bn.forEach(e);
      for (var l = 0; l < Rl.length; l++) {
        var a = Rl[l];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Rl.length && (l = Rl[0], l.blockedOn === null); ) Ld(l), l.blockedOn === null && Rl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[le] || null;
        if (typeof u == "function") i || Xd(l);
        else if (i) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[le] || null) r = i.formAction;
            else if (zs(n) !== null) continue;
          } else r = i.action;
          typeof r == "function" ? l[a + 1] = r : (l.splice(a, 3), a -= 3), Xd(l);
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
      if (e === null) throw Error(f(409));
      var l = e.current, a = ve();
      Cd(l, a, t, e, null, null);
    }, si.prototype.unmount = Ts.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Cd(t.current, 2, null, t, null, null), Xu(), e[na] = null;
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
        for (var l = 0; l < Rl.length && e !== 0 && e < Rl[l].priority; l++) ;
        Rl.splice(l, 0, t), l === 0 && Ld(t);
      }
    };
    var Zd = s.version;
    if (Zd !== "19.2.3") throw Error(f(527, Zd, "19.2.3"));
    B.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
      return t = g(e), t = t !== null ? O(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var Py = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: w,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!fi.isDisabled && fi.supportsFiber) try {
        Ka = fi.inject(Py), oe = fi;
      } catch {
      }
    }
    return Ln.createRoot = function(t, e) {
      if (!b(t)) throw Error(f(299));
      var l = false, a = "", n = $r, u = Fr, i = Ir;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Ud(t, 1, false, null, null, l, a, null, n, u, i, Qd), t[na] = e.current, fs(t), new Ts(e);
    }, Ln.hydrateRoot = function(t, e, l) {
      if (!b(t)) throw Error(f(299));
      var a = false, n = "", u = $r, i = Fr, r = Ir, m = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (r = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Ud(t, 1, true, e, l ?? null, a, n, m, u, i, r, Qd), e.context = Dd(null), l = e.current, a = ve(), a = bi(a), n = pl(a), n.callback = null, xl(l, n, a), l = a, e.current.lanes = l, ka(e, l), Xe(e), t[na] = e.current, fs(t), new si(e);
    }, Ln.version = "19.2.3", Ln;
  }
  var tm;
  function rh() {
    if (tm) return Os.exports;
    tm = 1;
    function c() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
    }
    return c(), Os.exports = fh(), Os.exports;
  }
  var oh = rh();
  const dh = pm(oh), mh = "modulepreload", yh = function(c, s) {
    return new URL(c, s).href;
  }, em = {}, Rs = function(s, d, f) {
    let b = Promise.resolve();
    if (d && d.length > 0) {
      let g = function(O) {
        return Promise.all(O.map((R) => Promise.resolve(R).then((q) => ({
          status: "fulfilled",
          value: q
        }), (q) => ({
          status: "rejected",
          reason: q
        }))));
      };
      const z = document.getElementsByTagName("link"), S = document.querySelector("meta[property=csp-nonce]"), A = (S == null ? void 0 : S.nonce) || (S == null ? void 0 : S.getAttribute("nonce"));
      b = g(d.map((O) => {
        if (O = yh(O, f), O in em) return;
        em[O] = true;
        const R = O.endsWith(".css"), q = R ? '[rel="stylesheet"]' : "";
        if (f) for (let st = z.length - 1; st >= 0; st--) {
          const vt = z[st];
          if (vt.href === O && (!R || vt.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${O}"]${q}`)) return;
        const tt = document.createElement("link");
        if (tt.rel = R ? "stylesheet" : mh, R || (tt.as = "script"), tt.crossOrigin = "", tt.href = O, A && tt.setAttribute("nonce", A), document.head.appendChild(tt), R) return new Promise((st, vt) => {
          tt.addEventListener("load", st), tt.addEventListener("error", () => vt(new Error(`Unable to preload CSS for ${O}`)));
        });
      }));
    }
    function j(z) {
      const S = new Event("vite:preloadError", {
        cancelable: true
      });
      if (S.payload = z, window.dispatchEvent(S), !S.defaultPrevented) throw z;
    }
    return b.then((z) => {
      for (const S of z || []) S.status === "rejected" && j(S.reason);
      return s().catch(j);
    });
  };
  const hh = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gh = (c) => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, d, f) => f ? f.toUpperCase() : d.toLowerCase()), lm = (c) => {
    const s = gh(c);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }, xm = (...c) => c.filter((s, d, f) => !!s && s.trim() !== "" && f.indexOf(s) === d).join(" ").trim(), _h = (c) => {
    for (const s in c) if (s.startsWith("aria-") || s === "role" || s === "title") return true;
  };
  var bh = {
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
  const vh = yt.forwardRef(({ color: c = "currentColor", size: s = 24, strokeWidth: d = 2, absoluteStrokeWidth: f, className: b = "", children: j, iconNode: z, ...S }, A) => yt.createElement("svg", {
    ref: A,
    ...bh,
    width: s,
    height: s,
    stroke: c,
    strokeWidth: f ? Number(d) * 24 / Number(s) : d,
    className: xm("lucide", b),
    ...!j && !_h(S) && {
      "aria-hidden": "true"
    },
    ...S
  }, [
    ...z.map(([g, O]) => yt.createElement(g, O)),
    ...Array.isArray(j) ? j : [
      j
    ]
  ]));
  const Ot = (c, s) => {
    const d = yt.forwardRef(({ className: f, ...b }, j) => yt.createElement(vh, {
      ref: j,
      iconNode: s,
      className: xm(`lucide-${hh(lm(c))}`, `lucide-${c}`, f),
      ...b
    }));
    return d.displayName = lm(c), d;
  };
  const ph = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], am = Ot("activity", ph);
  const xh = [
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
  ], Sh = Ot("book-open", xh);
  const Nh = [
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
  ], Ah = Ot("building-2", Nh);
  const jh = [
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
  ], zh = Ot("bug", jh);
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
  ], Sm = Ot("clock", Eh);
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
  ], Mh = Ot("download", Th);
  const wh = [
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
  ], nm = Ot("file-text", wh);
  const Oh = [
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
  ], Uh = Ot("guitar", Oh);
  const Dh = [
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
  ], Ch = Ot("hash", Dh);
  const Rh = [
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
  ], Hh = Ot("image", Rh);
  const Bh = [
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
  ], um = Ot("key-round", Bh);
  const qh = [
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
  ], Yh = Ot("log-out", qh);
  const Lh = [
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
  ], Gh = Ot("mic", Lh);
  const Xh = [
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
  ], Qh = Ot("monitor", Xh);
  const Zh = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], Vh = Ot("moon", Zh);
  const Kh = [
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
  ], Vn = Ot("music", Kh);
  const Jh = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], kh = Ot("play", Jh);
  const Wh = [
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
  ], Za = Ot("plus", Wh);
  const $h = [
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
  ], Fh = Ot("sun", $h);
  const Ih = [
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
  ], la = Ot("trash-2", Ih);
  const Ph = [
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
  ], im = Ot("trending-up", Ph);
  const tg = [
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
  ], Nm = Ot("upload", tg);
  function eg({ file: c, onFileUpload: s, isParsingMetadata: d = false, metadataSummary: f }) {
    const b = (j) => {
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
              onChange: b,
              className: "sr-only"
            })
          ]
        }),
        c && o.jsxs("div", {
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
                  children: c.name
                }),
                o.jsxs("span", {
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
        c && o.jsx("div", {
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
          }) : f ? o.jsx("span", {
            className: "text-foreground/70",
            children: f
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
  function lg({ metadata: c, onMetadataChange: s }) {
    var _a, _b;
    const d = Object.values(c).filter((j) => typeof j == "string" && j.trim().length > 0).length, f = cm.length + sm.length + fm.length + rm.length + 1, b = ({ key: j, label: z, placeholder: S, type: A, colSpan: g }) => {
      const O = c[j], R = typeof O == "string" || typeof O == "number" ? O : "";
      return o.jsxs("div", {
        className: `space-y-2 ${g === "full" ? "md:col-span-2" : ""}`,
        children: [
          o.jsx("label", {
            htmlFor: j,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: z
          }),
          o.jsx("input", {
            id: j,
            value: R,
            onChange: (q) => s(j, A === "number" ? parseInt(q.target.value) || void 0 : q.target.value),
            placeholder: S,
            type: A ?? "text",
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
                d,
                " / ",
                f,
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
                  children: cm.map(b)
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
                  children: sm.map(b)
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
                  children: fm.map(b)
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
                  children: rm.map(b)
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
              value: ((_b = (_a = c.comments) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
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
  ], ag = [
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
  function ng({ pictures: c = [], onPicturesChange: s, coverVariants: d = [], onCoverVariantsChange: f, animatedCover: b, onAnimatedCoverChange: j }) {
    const z = async (k, K) => {
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
        const et = await W.arrayBuffer(), J = new Uint8Array(et), Nt = {
          mime_type: W.type,
          picture_type: K,
          description: `${(_b = om.find((F) => F.value === K)) == null ? void 0 : _b.label} Art`,
          data: J
        }, Ct = c.filter((F) => F.picture_type !== K);
        Ct.push(Nt), s(Ct);
      }
    }, S = (k) => {
      s(c.filter((K) => K.picture_type !== k));
    }, A = () => {
      f([
        ...d,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, g = async (k, K) => {
      var _a;
      const W = (_a = K.target.files) == null ? void 0 : _a[0];
      if (W) {
        if (!W.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const et = await W.arrayBuffer(), J = [
          ...d
        ];
        J[k].data = new Uint8Array(et), J[k].mime_type = W.type, f(J);
      }
    }, O = (k, K, W) => {
      const et = [
        ...d
      ];
      et[k] = {
        ...et[k],
        [K]: W
      }, f(et);
    }, R = (k) => {
      f(d.filter((K, W) => W !== k));
    }, q = async (k) => {
      var _a;
      const K = (_a = k.target.files) == null ? void 0 : _a[0];
      if (K) {
        if (!K.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const W = await K.arrayBuffer(), et = new Uint8Array(W), J = {
          mime_type: K.type,
          data: et,
          duration_ms: 3e3,
          loop_count: 0
        };
        j(J);
      }
    }, tt = (k, K) => {
      b && j({
        ...b,
        [k]: K
      });
    }, st = () => {
      j(void 0);
    }, vt = (k, K) => URL.createObjectURL(new Blob([
      k
    ], {
      type: K
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
                  children: om.map(({ value: k, label: K }) => {
                    const W = c.find((et) => et.picture_type === k);
                    return o.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: W ? o.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          o.jsx("img", {
                            src: vt(W.data, W.mime_type),
                            alt: K,
                            className: "w-full h-32 object-cover rounded-lg"
                          }),
                          o.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              o.jsx("span", {
                                className: "text-sm font-medium",
                                children: K
                              }),
                              o.jsx("button", {
                                onClick: () => S(k),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: o.jsx(la, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : o.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          o.jsx(Za, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          o.jsx("span", {
                            className: "text-xs font-medium",
                            children: K
                          }),
                          o.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (et) => z(et, k),
                            className: "hidden"
                          })
                        ]
                      })
                    }, k);
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
                      onClick: A,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(Za, {
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
                      o.jsx(Hh, {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                      }),
                      o.jsx("p", {
                        className: "text-sm",
                        children: "No variants added"
                      })
                    ]
                  }) : d.map((k, K) => o.jsxs("div", {
                    className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("select", {
                            value: k.variant_type,
                            onChange: (W) => O(K, "variant_type", W.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: ag.map(({ value: W, label: et }) => o.jsx("option", {
                              value: W,
                              children: et
                            }, W))
                          }),
                          o.jsx("input", {
                            value: k.description || "",
                            onChange: (W) => O(K, "description", W.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          o.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              o.jsx(Nm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              o.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (W) => g(K, W),
                                className: "hidden"
                              })
                            ]
                          }),
                          o.jsx("button", {
                            onClick: () => R(K),
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "danger",
                            "data-size": "xs",
                            children: o.jsx(la, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      k.data.length > 0 && o.jsx("img", {
                        src: vt(k.data, k.mime_type),
                        alt: k.description || "Variant",
                        className: "w-24 h-24 object-cover rounded-lg border"
                      })
                    ]
                  }, K))
                })
              ]
            }),
            o.jsxs("div", {
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Animated Cover"
                }),
                b ? o.jsxs("div", {
                  className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                  children: [
                    o.jsx("img", {
                      src: vt(b.data, b.mime_type),
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
                              value: b.duration_ms || 0,
                              onChange: (k) => tt("duration_ms", parseInt(k.target.value) || 0),
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
                              value: b.loop_count || 0,
                              onChange: (k) => tt("loop_count", parseInt(k.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    o.jsxs("button", {
                      onClick: st,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        o.jsx(la, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : o.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    o.jsx(kh, {
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
  function ug({ syncedLyrics: c = [], onSyncedLyricsChange: s, lrcText: d, onLrcTextChange: f, onImport: b, unsyncedLyrics: j, onUnsyncedLyricsChange: z }) {
    var _a, _b;
    const S = c.length > 0 ? c[0] : {
      ...ri,
      lines: []
    }, A = () => {
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
    }, g = (R, q, tt) => {
      const st = [
        ...c
      ];
      st.length > 0 && (st[0].lines[R] = {
        text: q,
        timestamp_ms: tt
      }, s(st));
    }, O = (R) => {
      const q = [
        ...c
      ];
      q.length > 0 && (q[0].lines.splice(R, 1), s(q));
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
                ((_a = S.lines) == null ? void 0 : _a.length) || 0,
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
                      onClick: b,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(Nm, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Import"
                      ]
                    })
                  ]
                }),
                o.jsx("textarea", {
                  value: d,
                  onChange: (R) => f(R.target.value),
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
                      value: S.language || "",
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
                      onChange: (R) => z(R.target.value),
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
                      onClick: A,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(Za, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b = S.lines) == null ? void 0 : _b.map((R, q) => o.jsx(ig, {
                    index: q,
                    text: R.text,
                    timestamp: R.timestamp_ms,
                    onUpdate: g,
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
  function ig({ index: c, text: s, timestamp: d, onUpdate: f, onDelete: b }) {
    return o.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        o.jsx("input", {
          value: s,
          onChange: (j) => f(c, j.target.value, d),
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
              onChange: (j) => f(c, s, parseInt(j.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            })
          ]
        }),
        o.jsx("button", {
          onClick: () => b(c),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          children: o.jsx(la, {
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
      icon: Sh
    },
    {
      value: "chorus",
      label: "Chorus",
      icon: Gh
    },
    {
      value: "bridge",
      label: "Bridge",
      icon: Ah
    },
    {
      value: "solo",
      label: "Solo",
      icon: Uh
    },
    {
      value: "outro",
      label: "Outro",
      icon: Yh
    }
  ];
  function cg({ sectionMarkers: c = [], onSectionMarkersChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, f = (z, S, A) => {
      const g = [
        ...c
      ];
      g[z] = {
        ...g[z],
        [S]: A
      }, s(g);
    }, b = (z) => {
      s(c.filter((S, A) => A !== z));
    }, j = (z) => {
      const S = Math.floor(z / 1e3), A = Math.floor(S / 60), g = S % 60, O = Math.floor(z % 1e3 / 10);
      return `${A}:${g.toString().padStart(2, "0")}.${O.toString().padStart(2, "0")}`;
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
                o.jsx(Za, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Marker"
              ]
            })
          ]
        }),
        o.jsx("div", {
          className: "space-y-3",
          children: c.length === 0 ? o.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              o.jsx(Vn, {
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
          }) : c.map((z, S) => {
            var _a;
            const g = ((_a = mm.find((O) => O.value === z.section_type)) == null ? void 0 : _a.icon) || Vn;
            return o.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                o.jsx(g, {
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
                      value: z.timestamp_ms,
                      onChange: (O) => f(S, "timestamp_ms", Math.max(0, parseInt(O.target.value) || 0)),
                      placeholder: "ms",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    }),
                    o.jsxs("span", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "(",
                        j(z.timestamp_ms),
                        ")"
                      ]
                    })
                  ]
                }),
                o.jsx("select", {
                  value: z.section_type,
                  onChange: (O) => f(S, "section_type", O.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: mm.map(({ value: O, label: R }) => o.jsx("option", {
                    value: O,
                    children: R
                  }, O))
                }),
                o.jsx("input", {
                  value: z.label || "",
                  onChange: (O) => f(S, "label", O.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                o.jsx("button", {
                  onClick: () => b(S),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: o.jsx(la, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, S);
          })
        })
      ]
    });
  }
  function sg({ bpmMap: c = [], onBpmMapChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, f = (S, A, g) => {
      const O = [
        ...c
      ];
      O[S] = {
        ...O[S],
        [A]: g
      }, s(O);
    }, b = (S) => {
      s(c.filter((A, g) => g !== S));
    }, j = (S) => {
      const A = Math.floor(S / 1e3), g = Math.floor(A / 60), O = A % 60;
      return `${g}:${O.toString().padStart(2, "0")}`;
    }, z = [
      ...c
    ].sort((S, A) => S.timestamp_ms - A.timestamp_ms);
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
                o.jsx(Za, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        o.jsx("div", {
          className: "space-y-3",
          children: z.length === 0 ? o.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              o.jsx(im, {
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
                      z.map((S, A) => `${j(S.timestamp_ms)} \u2192 ${S.bpm} BPM${A < z.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              z.map((S, A) => o.jsxs("div", {
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
                        value: S.timestamp_ms,
                        onChange: (g) => f(A, "timestamp_ms", Math.max(0, parseInt(g.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      o.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          j(S.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      o.jsx(im, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      o.jsx("input", {
                        type: "number",
                        value: S.bpm,
                        onChange: (g) => f(A, "bpm", Math.max(1, parseFloat(g.target.value) || 120)),
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
                    onClick: () => b(A),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: o.jsx(la, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, A))
            ]
          })
        })
      ]
    });
  }
  function fg({ disabled: c, isProcessing: s, fileName: d, onProcess: f }) {
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
            onClick: f,
            disabled: c,
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
                  children: o.jsx(Mh, {
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
  function ym({ type: c, message: s }) {
    const d = c === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return o.jsx("div", {
      className: `${d} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: s
    });
  }
  const Am = "floeditor-theme", oi = () => typeof window < "u" && typeof document < "u", rg = () => {
    if (!oi()) return "auto";
    const c = window.localStorage.getItem(Am);
    return c === "light" || c === "dark" || c === "auto" ? c : "auto";
  };
  function og() {
    const [c, s] = yt.useState(rg), [d, f] = yt.useState("light");
    return yt.useEffect(() => {
      if (!oi()) return;
      const z = window.matchMedia("(prefers-color-scheme: dark)"), S = () => f(z.matches ? "dark" : "light");
      return S(), z.addEventListener("change", S), () => {
        z.removeEventListener("change", S);
      };
    }, []), yt.useEffect(() => {
      if (!oi()) return;
      const z = document.documentElement;
      (c === "auto" ? d : c) === "dark" ? (z.classList.add("dark"), z.style.colorScheme = "dark") : (z.classList.remove("dark"), z.style.colorScheme = "light");
    }, [
      c,
      d
    ]), {
      theme: c,
      resolvedTheme: c === "auto" ? d : c,
      setTheme: (z) => {
        s(z), oi() && window.localStorage.setItem(Am, z);
      }
    };
  }
  const hm = [
    {
      value: "auto",
      label: "Auto",
      icon: Qh
    },
    {
      value: "light",
      label: "Light",
      icon: Fh
    },
    {
      value: "dark",
      label: "Dark",
      icon: Vh
    }
  ];
  function dg() {
    var _a;
    const { theme: c, setTheme: s } = og(), d = ((_a = hm.find((f) => f.value === c)) == null ? void 0 : _a.label) ?? "Auto";
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
          children: hm.map(({ value: f, label: b, icon: j }) => {
            const z = c === f;
            return o.jsxs("button", {
              type: "button",
              onClick: () => s(f),
              "aria-pressed": z,
              "aria-label": `Switch theme to ${b}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": z,
              children: [
                o.jsx(j, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                o.jsx("span", {
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
  function mg(c) {
    const s = M.__externref_table_alloc();
    return M.__wbindgen_externrefs.set(s, c), s;
  }
  function Bs(c) {
    const s = typeof c;
    if (s == "number" || s == "boolean" || c == null) return `${c}`;
    if (s == "string") return `"${c}"`;
    if (s == "symbol") {
      const b = c.description;
      return b == null ? "Symbol" : `Symbol(${b})`;
    }
    if (s == "function") {
      const b = c.name;
      return typeof b == "string" && b.length > 0 ? `Function(${b})` : "Function";
    }
    if (Array.isArray(c)) {
      const b = c.length;
      let j = "[";
      b > 0 && (j += Bs(c[0]));
      for (let z = 1; z < b; z++) j += ", " + Bs(c[z]);
      return j += "]", j;
    }
    const d = /\[object ([^\]]+)\]/.exec(toString.call(c));
    let f;
    if (d && d.length > 1) f = d[1];
    else return toString.call(c);
    if (f == "Object") try {
      return "Object(" + JSON.stringify(c) + ")";
    } catch {
      return "Object";
    }
    return c instanceof Error ? `${c.name}: ${c.message}
${c.stack}` : f;
  }
  function Ls(c, s) {
    return c = c >>> 0, jm().subarray(c / 4, c / 4 + s);
  }
  function xe(c, s) {
    return c = c >>> 0, Qa().subarray(c / 1, c / 1 + s);
  }
  let ea = null;
  function Qe() {
    return (ea === null || ea.buffer.detached === true || ea.buffer.detached === void 0 && ea.buffer !== M.memory.buffer) && (ea = new DataView(M.memory.buffer)), ea;
  }
  let Xn = null;
  function jm() {
    return (Xn === null || Xn.byteLength === 0) && (Xn = new Float32Array(M.memory.buffer)), Xn;
  }
  function Xa(c, s) {
    return c = c >>> 0, hg(c, s);
  }
  let Qn = null;
  function Qa() {
    return (Qn === null || Qn.byteLength === 0) && (Qn = new Uint8Array(M.memory.buffer)), Qn;
  }
  function Gn(c, s) {
    try {
      return c.apply(this, s);
    } catch (d) {
      const f = mg(d);
      M.__wbindgen_exn_store(f);
    }
  }
  function pe(c) {
    return c == null;
  }
  function Lt(c, s) {
    const d = s(c.length * 1, 1) >>> 0;
    return Qa().set(c, d / 1), ft = c.length, d;
  }
  function Gs(c, s) {
    const d = s(c.length * 4, 4) >>> 0;
    return jm().set(c, d / 4), ft = c.length, d;
  }
  function aa(c, s, d) {
    if (d === void 0) {
      const S = Zn.encode(c), A = s(S.length, 1) >>> 0;
      return Qa().subarray(A, A + S.length).set(S), ft = S.length, A;
    }
    let f = c.length, b = s(f, 1) >>> 0;
    const j = Qa();
    let z = 0;
    for (; z < f; z++) {
      const S = c.charCodeAt(z);
      if (S > 127) break;
      j[b + z] = S;
    }
    if (z !== f) {
      z !== 0 && (c = c.slice(z)), b = d(b, f, f = z + c.length * 3, 1) >>> 0;
      const S = Qa().subarray(b + z, b + f), A = Zn.encodeInto(c, S);
      z += A.written, b = d(b, f, z, 1) >>> 0;
    }
    return ft = z, b;
  }
  function bt(c) {
    const s = M.__wbindgen_externrefs.get(c);
    return M.__externref_table_dealloc(c), s;
  }
  let di = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  di.decode();
  const yg = 2146435072;
  let Hs = 0;
  function hg(c, s) {
    return Hs += s, Hs >= yg && (di = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), di.decode(), Hs = s), di.decode(Qa().subarray(c, c + s));
  }
  const Zn = new TextEncoder();
  "encodeInto" in Zn || (Zn.encodeInto = function(c, s) {
    const d = Zn.encode(c);
    return s.set(d), {
      read: c.length,
      written: d.length
    };
  });
  let ft = 0;
  const gm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((c) => M.__wbg_audioinfo_free(c >>> 0, 1)), _m = typeof FinalizationRegistry > "u" ? {
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
        const f = M.audioinfo_version(this.__wbg_ptr);
        return s = f[0], d = f[1], Xa(f[0], f[1]);
      } finally {
        M.__wbindgen_free(s, d, 1);
      }
    }
  }
  Symbol.dispose && (Va.prototype[Symbol.dispose] = Va.prototype.free);
  class qs {
    __destroy_into_raw() {
      const s = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _m.unregister(this), s;
    }
    free() {
      const s = this.__destroy_into_raw();
      M.__wbg_wasmstreamingdecoder_free(s, 0);
    }
    next_frame() {
      const s = M.wasmstreamingdecoder_next_frame(this.__wbg_ptr);
      if (s[2]) throw bt(s[1]);
      return bt(s[0]);
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
      if (s[3]) throw bt(s[2]);
      var d = Ls(s[0], s[1]).slice();
      return M.__wbindgen_free(s[0], s[1] * 4, 4), d;
    }
    current_frame_index() {
      return M.wasmstreamingdecoder_current_frame_index(this.__wbg_ptr) >>> 0;
    }
    constructor() {
      const s = M.wasmstreamingdecoder_new();
      return this.__wbg_ptr = s >>> 0, _m.register(this, this.__wbg_ptr, this), this;
    }
    feed(s) {
      const d = Lt(s, M.__wbindgen_malloc), f = ft, b = M.wasmstreamingdecoder_feed(this.__wbg_ptr, d, f);
      if (b[2]) throw bt(b[1]);
      return b[0] !== 0;
    }
    reset() {
      M.wasmstreamingdecoder_reset(this.__wbg_ptr);
    }
    state() {
      let s, d;
      try {
        const f = M.wasmstreamingdecoder_state(this.__wbg_ptr);
        return s = f[0], d = f[1], Xa(f[0], f[1]);
      } finally {
        M.__wbindgen_free(s, d, 1);
      }
    }
    get_info() {
      const s = M.wasmstreamingdecoder_get_info(this.__wbg_ptr);
      if (s[2]) throw bt(s[1]);
      return bt(s[0]);
    }
    is_ready() {
      return M.wasmstreamingdecoder_is_ready(this.__wbg_ptr) !== 0;
    }
    has_error() {
      return M.wasmstreamingdecoder_has_error(this.__wbg_ptr) !== 0;
    }
  }
  Symbol.dispose && (qs.prototype[Symbol.dispose] = qs.prototype.free);
  function gg(c, s, d) {
    var f = pe(c) ? 0 : aa(c, M.__wbindgen_malloc, M.__wbindgen_realloc), b = ft, j = pe(s) ? 0 : aa(s, M.__wbindgen_malloc, M.__wbindgen_realloc), z = ft, S = pe(d) ? 0 : aa(d, M.__wbindgen_malloc, M.__wbindgen_realloc), A = ft;
    const g = M.create_metadata(f, b, j, z, S, A);
    if (g[3]) throw bt(g[2]);
    var O = xe(g[0], g[1]).slice();
    return M.__wbindgen_free(g[0], g[1] * 1, 1), O;
  }
  function zm(c) {
    const s = M.create_metadata_from_object(c);
    if (s[3]) throw bt(s[2]);
    var d = xe(s[0], s[1]).slice();
    return M.__wbindgen_free(s[0], s[1] * 1, 1), d;
  }
  function _g(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.decode(s, d);
    if (f[3]) throw bt(f[2]);
    var b = Ls(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 4, 4), b;
  }
  function bg(c, s, d, f, b) {
    const j = Gs(c, M.__wbindgen_malloc), z = ft;
    var S = pe(b) ? 0 : Lt(b, M.__wbindgen_malloc), A = ft;
    const g = M.encode(j, z, s, d, f, S, A);
    if (g[3]) throw bt(g[2]);
    var O = xe(g[0], g[1]).slice();
    return M.__wbindgen_free(g[0], g[1] * 1, 1), O;
  }
  function vg(c, s, d, f, b, j) {
    const z = Gs(c, M.__wbindgen_malloc), S = ft;
    var A = pe(j) ? 0 : Lt(j, M.__wbindgen_malloc), g = ft;
    const O = M.encode_lossy(z, S, s, d, f, b, A, g);
    if (O[3]) throw bt(O[2]);
    var R = xe(O[0], O[1]).slice();
    return M.__wbindgen_free(O[0], O[1] * 1, 1), R;
  }
  function pg(c, s, d, f, b, j) {
    const z = Gs(c, M.__wbindgen_malloc), S = ft;
    var A = pe(j) ? 0 : Lt(j, M.__wbindgen_malloc), g = ft;
    const O = M.encode_with_bitrate(z, S, s, d, f, b, A, g);
    if (O[3]) throw bt(O[2]);
    var R = xe(O[0], O[1]).slice();
    return M.__wbindgen_free(O[0], O[1] * 1, 1), R;
  }
  function xg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.get_cover_art(s, d);
    if (f[2]) throw bt(f[1]);
    return bt(f[0]);
  }
  function Xs(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.get_metadata(s, d);
    if (f[2]) throw bt(f[1]);
    return bt(f[0]);
  }
  function Sg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.get_metadata_bytes(s, d);
    if (f[3]) throw bt(f[2]);
    var b = xe(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), b;
  }
  function Ng(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.get_section_markers(s, d);
    if (f[2]) throw bt(f[1]);
    return bt(f[0]);
  }
  function Ag(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.get_synced_lyrics(s, d);
    if (f[2]) throw bt(f[1]);
    return bt(f[0]);
  }
  function jg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.get_waveform_data(s, d);
    if (f[2]) throw bt(f[1]);
    return bt(f[0]);
  }
  function zg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft;
    return M.has_metadata(s, d) !== 0;
  }
  function Em(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.info(s, d);
    if (f[2]) throw bt(f[1]);
    return Va.__wrap(f[0]);
  }
  function Eg(c, s) {
    const d = Lt(c, M.__wbindgen_malloc), f = ft, b = M.set_metadata(d, f, s);
    if (b[3]) throw bt(b[2]);
    var j = xe(b[0], b[1]).slice();
    return M.__wbindgen_free(b[0], b[1] * 1, 1), j;
  }
  function Tg(c, s, d) {
    var f = pe(c) ? 0 : Lt(c, M.__wbindgen_malloc), b = ft;
    const j = aa(s, M.__wbindgen_malloc, M.__wbindgen_realloc), z = ft, S = M.set_metadata_field(f, b, j, z, d);
    if (S[3]) throw bt(S[2]);
    var A = xe(S[0], S[1]).slice();
    return M.__wbindgen_free(S[0], S[1] * 1, 1), A;
  }
  function Mg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.strip_metadata(s, d);
    if (f[3]) throw bt(f[2]);
    var b = xe(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), b;
  }
  function Tm(c, s) {
    const d = Lt(c, M.__wbindgen_malloc), f = ft, b = Lt(s, M.__wbindgen_malloc), j = ft, z = M.update_metadata(d, f, b, j);
    if (z[3]) throw bt(z[2]);
    var S = xe(z[0], z[1]).slice();
    return M.__wbindgen_free(z[0], z[1] * 1, 1), S;
  }
  function Mm(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = ft, f = M.validate(s, d);
    if (f[2]) throw bt(f[1]);
    return f[0] !== 0;
  }
  function wg() {
    let c, s;
    try {
      const d = M.version();
      return c = d[0], s = d[1], Xa(d[0], d[1]);
    } finally {
      M.__wbindgen_free(c, s, 1);
    }
  }
  const Og = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function Ug(c, s) {
    if (typeof Response == "function" && c instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(c, s);
      } catch (f) {
        if (c.ok && Og.has(c.type) && c.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", f);
        else throw f;
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
  function wm() {
    const c = {};
    return c.wbg = {}, c.wbg.__wbg_Error_52673b7de5a0ca89 = function(s, d) {
      return Error(Xa(s, d));
    }, c.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(s) {
      return Number(s);
    }, c.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(s, d) {
      const f = String(d), b = aa(f, M.__wbindgen_malloc, M.__wbindgen_realloc), j = ft;
      Qe().setInt32(s + 4, j, true), Qe().setInt32(s + 0, b, true);
    }, c.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(s, d) {
      const f = d, b = typeof f == "bigint" ? f : void 0;
      Qe().setBigInt64(s + 8, pe(b) ? BigInt(0) : b, true), Qe().setInt32(s + 0, !pe(b), true);
    }, c.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(s) {
      const d = s, f = typeof d == "boolean" ? d : void 0;
      return pe(f) ? 16777215 : f ? 1 : 0;
    }, c.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(s, d) {
      const f = Bs(d), b = aa(f, M.__wbindgen_malloc, M.__wbindgen_realloc), j = ft;
      Qe().setInt32(s + 4, j, true), Qe().setInt32(s + 0, b, true);
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
      const f = d, b = typeof f == "number" ? f : void 0;
      Qe().setFloat64(s + 8, pe(b) ? 0 : b, true), Qe().setInt32(s + 0, !pe(b), true);
    }, c.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(s, d) {
      const f = d, b = typeof f == "string" ? f : void 0;
      var j = pe(b) ? 0 : aa(b, M.__wbindgen_malloc, M.__wbindgen_realloc), z = ft;
      Qe().setInt32(s + 4, z, true), Qe().setInt32(s + 0, j, true);
    }, c.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(s, d) {
      throw new Error(Xa(s, d));
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
    }, c.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(s, d, f) {
      Uint8Array.prototype.set.call(xe(s, d), f);
    }, c.wbg.__wbg_set_3f1d0b984ed272ed = function(s, d, f) {
      s[d] = f;
    }, c.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Gn(function(s, d, f) {
        return Reflect.set(s, d, f);
      }, arguments);
    }, c.wbg.__wbg_set_7df433eea03a5c14 = function(s, d, f) {
      s[d >>> 0] = f;
    }, c.wbg.__wbg_set_cb0e657d1901c8d8 = function(s, d, f) {
      s.set(Ls(d, f));
    }, c.wbg.__wbg_set_efaaf145b9377369 = function(s, d, f) {
      return s.set(d, f);
    }, c.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Gn(function(s) {
        return JSON.stringify(s);
      }, arguments);
    }, c.wbg.__wbg_value_57b7b035e117f7ee = function(s) {
      return s.value;
    }, c.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(s, d) {
      return Xa(s, d);
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
  function Om(c, s) {
    return M = c.exports, mi.__wbindgen_wasm_module = s, ea = null, Xn = null, Qn = null, M.__wbindgen_start(), M;
  }
  function Dg(c) {
    if (M !== void 0) return M;
    typeof c < "u" && (Object.getPrototypeOf(c) === Object.prototype ? { module: c } = c : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const s = wm();
    c instanceof WebAssembly.Module || (c = new WebAssembly.Module(c));
    const d = new WebAssembly.Instance(c, s);
    return Om(d, c);
  }
  async function mi(c) {
    if (M !== void 0) return M;
    typeof c < "u" && (Object.getPrototypeOf(c) === Object.prototype ? { module_or_path: c } = c : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof c > "u" && (c = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const s = wm();
    (typeof c == "string" || typeof Request == "function" && c instanceof Request || typeof URL == "function" && c instanceof URL) && (c = fetch(c));
    const { instance: d, module: f } = await Ug(await c, s);
    return Om(d, f);
  }
  const bm = Object.freeze(Object.defineProperty({
    __proto__: null,
    AudioInfo: Va,
    WasmStreamingDecoder: qs,
    create_metadata: gg,
    create_metadata_from_object: zm,
    decode: _g,
    default: mi,
    encode: bg,
    encode_lossy: vg,
    encode_with_bitrate: pg,
    get_cover_art: xg,
    get_metadata: Xs,
    get_metadata_bytes: Sg,
    get_section_markers: Ng,
    get_synced_lyrics: Ag,
    get_waveform_data: jg,
    has_metadata: zg,
    info: Em,
    initSync: Dg,
    set_metadata: Eg,
    set_metadata_field: Tg,
    strip_metadata: Mg,
    update_metadata: Tm,
    validate: Mm,
    version: wg
  }, Symbol.toStringTag, {
    value: "Module"
  })), Cg = {
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
  function Rg() {
    const [c, s] = yt.useState(false), [d, f] = yt.useState(false);
    return yt.useEffect(() => {
      (async () => {
        try {
          await mi(), f(true);
        } catch (O) {
          console.error("Failed to initialize flo\u2122 WASM:", O);
        }
      })();
    }, []), {
      isProcessing: c,
      isInitialized: d,
      loadMetadata: async (g) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        try {
          const O = await g.arrayBuffer(), R = new Uint8Array(O);
          return Xs(R);
        } catch (O) {
          return console.error("Failed to load flo\u2122 metadata:", O), null;
        }
      },
      updateMetadata: async (g, O) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        s(true);
        try {
          const R = zm(O), q = Tm(g, R);
          return s(false), q;
        } catch (R) {
          return console.error("Failed to update flo\u2122 metadata:", R), s(false), null;
        }
      },
      downloadFile: (g, O) => {
        const R = new Blob([
          g
        ], {
          type: "application/octet-stream"
        }), q = URL.createObjectURL(R), tt = document.createElement("a");
        tt.href = q, tt.download = O, tt.click(), URL.revokeObjectURL(q);
      },
      validateFile: (g) => d ? Mm(g) : false,
      resetMetadata: () => ({
        ...Cg
      })
    };
  }
  function Hg() {
    const [c, s] = yt.useState(false);
    return {
      isLoading: c,
      loadFloFile: async (f) => {
        s(true);
        try {
          if (!f.name.toLowerCase().endsWith(".flo")) return {
            metadata: null,
            audioInfo: null,
            error: "Please upload a valid .flo file"
          };
          await mi();
          const b = await f.arrayBuffer(), j = new Uint8Array(b), z = Xs(j), S = Em(j), A = S ? {
            sample_rate: S.sample_rate,
            channels: S.channels,
            bit_depth: S.bit_depth,
            total_frames: Number(S.total_frames),
            duration_secs: S.duration_secs,
            file_size: S.file_size,
            compression_ratio: S.compression_ratio,
            crc_valid: S.crc_valid,
            is_lossy: S.is_lossy,
            lossy_quality: S.lossy_quality,
            version: S.version
          } : null;
          return {
            metadata: z,
            audioInfo: A,
            error: null
          };
        } catch (b) {
          return console.error("Failed to load flo\u2122 file:", b), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${b instanceof Error ? b.message : "Unknown error"}`
          };
        } finally {
          s(false);
        }
      }
    };
  }
  function Bg() {
    return {
      parseLRCFormat: (s) => {
        const d = s.split(`
`), f = [];
        return d.forEach((b) => {
          const j = b.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (j) {
            const z = parseInt(j[1]), S = parseInt(j[2]), A = parseInt(j[3]), g = z * 60 * 1e3 + S * 1e3 + A * 10, O = j[4].trim();
            f.push([
              O,
              g
            ]);
          }
        }), f.sort((b, j) => b[1] - j[1]), f;
      }
    };
  }
  function vm(c, s, d, f = 50) {
    const b = Math.floor(s / f), j = Math.floor(c.length / (b * d)), z = [];
    for (let S = 0; S < j; S++) for (let A = 0; A < d; A++) {
      let g = 0;
      for (let O = 0; O < b; O++) {
        const R = S * b * d + O * d + A;
        R < c.length && (g = Math.max(g, Math.abs(c[R])));
      }
      z.push(g);
    }
    return {
      peaks_per_second: f,
      channels: d,
      peaks: z
    };
  }
  function qg({ waveform: c, onRegenerate: s }) {
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
            s && o.jsx("button", {
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
        o.jsx("div", {
          children: c && c.peaks && c.peaks.length > 0 ? o.jsx(Yg, {
            waveform: c
          }) : o.jsxs("div", {
            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
            children: [
              o.jsx(Vn, {
                className: "h-10 w-10 mb-2 opacity-50"
              }),
              o.jsx("p", {
                className: "text-sm",
                children: "No waveform data. Load a file or regenerate."
              })
            ]
          })
        }),
        o.jsx(Lg, {
          waveform: c
        })
      ]
    });
  }
  function Yg({ waveform: c, width: s = 600, height: d = 80 }) {
    const { peaks: f, channels: b } = c, j = Math.floor(f.length / b);
    function z(A) {
      return Array.from({
        length: j
      }, (g, O) => {
        const R = Math.floor(O / (j - 1) * (s - 2)) + 1, q = Math.floor((1 - (f[O * b + A] || 0)) * (d - 10)) + 5;
        return `${R},${q}`;
      }).join(" ");
    }
    function S() {
      const A = Array.from({
        length: j
      }, (O, R) => {
        const q = Math.floor(R / (j - 1) * (s - 2)) + 1, tt = f[R * b] || 0, st = Math.floor((1 - tt) * (d / 2 - 4)) + d / 2;
        return `${q},${st}`;
      }), g = Array.from({
        length: j
      }, (O, R) => {
        const q = j - 1 - R, tt = Math.floor(q / (j - 1) * (s - 2)) + 1, st = f[q * b] || 0, vt = Math.floor((1 + st) * (d / 2 - 4)) + 4;
        return `${tt},${vt}`;
      });
      return [
        ...A,
        ...g,
        A[0]
      ].join(" ");
    }
    return o.jsx("div", {
      style: {
        width: s,
        maxWidth: "100%"
      },
      className: "overflow-x-auto",
      children: o.jsxs("svg", {
        className: "block rounded border bg-background shadow",
        width: s,
        height: d,
        viewBox: `0 0 ${s} ${d}`,
        "aria-label": "Waveform",
        role: "img",
        children: [
          b === 1 && o.jsx("polygon", {
            points: S(),
            fill: "url(#wf-gradient)",
            opacity: 0.85
          }),
          o.jsx("polyline", {
            points: z(0),
            stroke: "#db2777",
            strokeWidth: b > 1 ? 1.5 : 2.5,
            fill: "none"
          }),
          b > 1 && o.jsx("polyline", {
            points: z(1),
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
  function Lg({ waveform: c }) {
    return c ? o.jsxs("div", {
      className: "mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground",
      children: [
        o.jsxs("span", {
          children: [
            o.jsx("strong", {
              children: "Channels:"
            }),
            " ",
            c.channels === 2 ? "Stereo" : "Mono"
          ]
        }),
        o.jsxs("span", {
          children: [
            o.jsx("strong", {
              children: "Peaks/sec:"
            }),
            " ",
            c.peaks_per_second
          ]
        }),
        o.jsxs("span", {
          children: [
            o.jsx("strong", {
              children: "Total Points:"
            }),
            " ",
            c.peaks.length
          ]
        })
      ]
    }) : null;
  }
  function Gg({ keyChanges: c = [], onKeyChangesChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          timestamp_ms: 0,
          key: ""
        }
      ]);
    }, f = (S, A, g) => {
      const O = [
        ...c
      ];
      O[S] = {
        ...O[S],
        [A]: g
      }, s(O);
    }, b = (S) => {
      s(c.filter((A, g) => g !== S));
    }, j = (S) => {
      const A = Math.floor(S / 1e3), g = Math.floor(A / 60), O = A % 60;
      return `${g}:${O.toString().padStart(2, "0")}`;
    }, z = [
      ...c
    ].sort((S, A) => S.timestamp_ms - A.timestamp_ms);
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
                  children: "Key Changes"
                }),
                o.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track musical key changes over time (e.g. C, F#m, D\u266D)"
                })
              ]
            }),
            o.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                o.jsx(Za, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        o.jsx("div", {
          className: "space-y-3",
          children: z.length === 0 ? o.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              o.jsx(um, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              o.jsx("p", {
                className: "text-sm",
                children: "No key changes added"
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
                  o.jsx(Ch, {
                    className: "h-4 w-4"
                  }),
                  o.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      z.map((S, A) => `${j(S.timestamp_ms)} \u2192 ${S.key || "?"}${A < z.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              z.map((S, A) => o.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      o.jsx(um, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      o.jsx("input", {
                        type: "number",
                        value: S.timestamp_ms,
                        onChange: (g) => f(A, "timestamp_ms", Math.max(0, parseInt(g.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      o.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          j(S.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  o.jsx("div", {
                    className: "flex items-center gap-2",
                    children: o.jsx("input", {
                      type: "text",
                      value: S.key,
                      onChange: (g) => f(A, "key", g.target.value),
                      placeholder: "Key (e.g. C#m)",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    })
                  }),
                  o.jsx("button", {
                    onClick: () => b(A),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    type: "button",
                    children: o.jsx(la, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, A))
            ]
          })
        })
      ]
    });
  }
  function Xg({ popularimeter: c, onChange: s }) {
    return o.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        o.jsxs("div", {
          className: "mb-4",
          children: [
            o.jsx("p", {
              className: "micro-label",
              children: "Stats"
            }),
            o.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Popularity & Usage"
            }),
            o.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Track ratings and play count (for history or sync)"
            })
          ]
        }),
        o.jsxs("div", {
          className: "flex flex-col gap-4 sm:flex-row sm:items-end",
          children: [
            o.jsxs("div", {
              className: "flex flex-col gap-2 flex-1",
              children: [
                o.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "User Email"
                }),
                o.jsx("input", {
                  type: "email",
                  className: "w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50",
                  value: c.email || "",
                  onChange: (d) => s("email", d.target.value),
                  placeholder: "user@email.com",
                  autoComplete: "email"
                })
              ]
            }),
            o.jsxs("div", {
              className: "flex flex-col gap-2 w-1/3 min-w-[120px]",
              children: [
                o.jsxs("label", {
                  className: "text-xs font-medium text-muted-foreground flex justify-between",
                  children: [
                    "Rating",
                    " ",
                    o.jsxs("span", {
                      className: "text-[0.85em] text-muted-foreground",
                      children: [
                        c.rating ?? 0,
                        " / 255"
                      ]
                    })
                  ]
                }),
                o.jsx("input", {
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
            o.jsxs("div", {
              className: "flex flex-col gap-2 w-1/4 min-w-[80px]",
              children: [
                o.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "Play Count"
                }),
                o.jsx("input", {
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
  function Qg() {
    var _a, _b, _c, _d, _e;
    const [c, s] = yt.useState(null), [d, f] = yt.useState(""), [b, j] = yt.useState(false), [z, S] = yt.useState(null), [A, g] = yt.useState(null), [O, R] = yt.useState(""), [q, tt] = yt.useState(null), { isProcessing: st, updateMetadata: vt, downloadFile: k, resetMetadata: K } = Rg(), [W, et] = yt.useState(null), [J, Nt] = yt.useState(() => ({
      ...dm
    })), [Ct, F] = yt.useState(null), [$t, te] = yt.useState(() => ({
      ...ri
    })), Ce = yt.useRef(""), { isLoading: Se, loadFloFile: Zt } = Hg(), { parseLRCFormat: Ze } = Bg();
    yt.useEffect(() => {
      typeof window < "u" && b && Rs(() => import("./eruda-j0P09wgc.js").then((E) => E.e), [], import.meta.url).then((E) => {
        E.default.init(), E.default.show();
      });
    }, [
      b
    ]);
    const fe = [
      {
        label: "Tag fields set",
        value: Object.values(J).filter((E) => typeof E == "string" && E.trim().length > 0).length.toString(),
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
    ], w = yt.useCallback((E) => `${E.name}:${E.lastModified}:${E.size}`, []), B = yt.useCallback(async () => {
      if (!(!q || !W)) try {
        const H = await (await Rs(() => Promise.resolve().then(() => bm), void 0, import.meta.url)).decode(q), Y = vm(H, W.sample_rate, W.channels);
        Nt((V) => ({
          ...V,
          waveform_data: Y
        })), g("Waveform re-generated from audio data.");
      } catch {
        S("Could not re-generate waveform.");
      }
    }, [
      q,
      W
    ]), Z = yt.useCallback(async (E) => {
      var _a2, _b2, _c2;
      if (!E) {
        Ce.current = "", s(null), tt(null), Nt(K()), F(null), te({
          ...ri
        }), f(""), R(""), g(null), S(null), et(null);
        return;
      }
      if (!E.name.toLowerCase().endsWith(".flo")) {
        S("Please upload a valid .flo file"), g(null);
        return;
      }
      const Y = w(E);
      Ce.current = Y, s(E), S(null), g("File loaded. Reading embedded tags..."), R("Scanning embedded metadata..."), Nt(K()), F(null), te({
        ...ri
      }), f(""), et(null);
      try {
        const { metadata: V, audioInfo: nt, error: Gt } = await Zt(E);
        if (Ce.current !== Y) return;
        if (Gt) {
          S(Gt), g(null);
          return;
        }
        const Tt = await E.arrayBuffer(), rl = new Uint8Array(Tt);
        tt(rl), et(nt || null);
        let Ft = V ? {
          ...V
        } : {
          ...dm
        };
        if ((!Ft.waveform_data || !((_a2 = Ft.waveform_data.peaks) == null ? void 0 : _a2.length)) && nt) try {
          const Ne = await (await Rs(() => Promise.resolve().then(() => bm), void 0, import.meta.url)).decode(rl);
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
        const ol = Object.values(Ft || {}).filter((It) => typeof It == "string" && It.trim().length > 0).length, Kn = ((_c2 = (_b2 = Ft == null ? void 0 : Ft.synced_lyrics) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.lines.length) ?? 0, Ve = ol > 0 || !!nt || Kn > 0;
        R(ol > 0 ? `Imported ${ol} embedded tag${ol === 1 ? "" : "s"}.` : "No embedded tags found."), g(Ve ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (V) {
        if (Ce.current !== Y) return;
        console.error("Failed to parse metadata", V), R(""), S("Loaded file, but could not read embedded metadata automatically."), g(null), et(null);
      }
    }, [
      Zt,
      w,
      K
    ]), dt = (E, H) => {
      Nt((Y) => ({
        ...Y,
        [E]: H
      }));
    };
    function ht(E, H) {
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
    const h = () => {
      if (d.trim()) {
        const E = Ze(d);
        if (te((H) => ({
          ...H,
          text: E
        })), !J.lyrics || J.lyrics.length === 0) {
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
        f(""), g("LRC format lyrics imported successfully!");
      }
    }, C = async () => {
      var _a2, _b2;
      if (!c || !q) return;
      S(null), g(null);
      const E = await vt(q, J);
      if (E) {
        const H = (_a2 = J.artist) == null ? void 0 : _a2.trim(), Y = (_b2 = J.title) == null ? void 0 : _b2.trim();
        let V;
        H && Y ? V = `${H} - ${Y}.flo` : Y ? V = `${Y}.flo` : V = c.name.endsWith(".flo") ? c.name : `${c.name.replace(/\.[^/.]+$/, "")}.flo`, k(E, V), g("File processed and downloaded successfully!");
      } else S("Failed to process file");
    };
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
                            children: o.jsx(Vn, {
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
                              className: `text-2xl font-semibold ${c ? "text-primary" : "text-muted-foreground"}`,
                              children: c ? c.name : "No file loaded"
                            }),
                            o.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: c ? "Ready for metadata tweaks." : "Load a flo\u2122 to unlock controls."
                            })
                          ]
                        }),
                        o.jsxs("div", {
                          className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1",
                          children: [
                            o.jsx(dg, {}),
                            o.jsxs("button", {
                              onClick: () => j(!b),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                o.jsx(zh, {
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
                z && o.jsx(ym, {
                  type: "error",
                  message: z
                }),
                A && o.jsx(ym, {
                  type: "success",
                  message: A
                }),
                o.jsx(eg, {
                  file: c,
                  onFileUpload: Z,
                  isParsingMetadata: Se,
                  metadataSummary: O
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: fe.map(({ label: E, value: H, helper: Y }) => o.jsxs("div", {
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
                            children: E
                          }),
                          o.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: H
                          }),
                          o.jsx("p", {
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
            o.jsx(qg, {
              waveform: J.waveform_data,
              onRegenerate: q && W ? B : void 0
            }),
            o.jsx(lg, {
              metadata: J,
              onMetadataChange: dt
            }),
            o.jsx(Xg, {
              popularimeter: {
                email: ((_a = J.popularimeter) == null ? void 0 : _a.email) ?? "",
                rating: ((_b = J.popularimeter) == null ? void 0 : _b.rating) ?? 0,
                play_count: ((_c = J.popularimeter) == null ? void 0 : _c.play_count) ?? 0
              },
              onChange: ht
            }),
            o.jsx(ng, {
              pictures: J.pictures,
              onPicturesChange: (E) => Nt({
                ...J,
                pictures: E
              }),
              coverVariants: J.cover_variants,
              onCoverVariantsChange: (E) => Nt({
                ...J,
                cover_variants: E
              }),
              animatedCover: J.animated_cover,
              onAnimatedCoverChange: (E) => Nt({
                ...J,
                animated_cover: E
              })
            }),
            o.jsx(ug, {
              syncedLyrics: J.synced_lyrics,
              onSyncedLyricsChange: (E) => Nt({
                ...J,
                synced_lyrics: E
              }),
              lrcText: d,
              onLrcTextChange: f,
              onImport: h,
              unsyncedLyrics: ((_e = (_d = J.lyrics) == null ? void 0 : _d[0]) == null ? void 0 : _e.text) || "",
              onUnsyncedLyricsChange: (E) => Nt({
                ...J,
                lyrics: E ? [
                  {
                    text: E
                  }
                ] : []
              })
            }),
            o.jsx(cg, {
              sectionMarkers: J.section_markers,
              onSectionMarkersChange: (E) => Nt({
                ...J,
                section_markers: E
              })
            }),
            o.jsx(sg, {
              bpmMap: J.bpm_map,
              onBpmMapChange: (E) => Nt({
                ...J,
                bpm_map: E
              })
            }),
            o.jsx(Gg, {
              keyChanges: J.key_changes,
              onKeyChangesChange: (E) => dt("key_changes", E)
            }),
            o.jsx(fg, {
              disabled: !c || st,
              isProcessing: st,
              fileName: c == null ? void 0 : c.name,
              onProcess: C
            })
          ]
        })
      ]
    });
  }
  dh.createRoot(document.getElementById("root")).render(o.jsx(nh.StrictMode, {
    children: o.jsx(Qg, {})
  }));
})();
export {
  __tla,
  pm as g
};

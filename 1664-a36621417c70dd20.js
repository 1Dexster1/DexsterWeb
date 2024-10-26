(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1664], {
        6691: function(e, t) {
            "use strict";
            var n, r, o, u;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ACTION_FAST_REFRESH: function() {
                        return s
                    },
                    ACTION_NAVIGATE: function() {
                        return f
                    },
                    ACTION_PREFETCH: function() {
                        return i
                    },
                    ACTION_REFRESH: function() {
                        return l
                    },
                    ACTION_RESTORE: function() {
                        return a
                    },
                    ACTION_SERVER_ACTION: function() {
                        return d
                    },
                    ACTION_SERVER_PATCH: function() {
                        return c
                    },
                    PrefetchCacheEntryStatus: function() {
                        return r
                    },
                    PrefetchKind: function() {
                        return n
                    },
                    isThenable: function() {
                        return p
                    }
                });
            let l = "refresh",
                f = "navigate",
                a = "restore",
                c = "server-patch",
                i = "prefetch",
                s = "fast-refresh",
                d = "server-action";

            function p(e) {
                return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
            }(o = n || (n = {})).AUTO = "auto", o.FULL = "full", o.TEMPORARY = "temporary", (u = r || (r = {})).fresh = "fresh", u.reusable = "reusable", u.expired = "expired", u.stale = "stale", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4318: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(8364), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9577: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let r = n(8754),
                o = n(5893),
                u = r._(n(7294)),
                l = n(1401),
                f = n(2045),
                a = n(7420),
                c = n(7201),
                i = n(1443),
                s = n(9953),
                d = n(5320),
                p = n(2905),
                y = n(4318),
                b = n(953),
                h = n(6691),
                v = new Set;

            function _(e, t, n, r, o, u) {
                if (u || (0, f.isLocalURL)(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (v.has(o)) return;
                        v.add(o)
                    }(async () => u ? e.prefetch(t, o) : e.prefetch(t, n, r))().catch(e => {})
                }
            }

            function C(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let O = u.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: v,
                    children: O,
                    prefetch: g = null,
                    passHref: E,
                    replace: j,
                    shallow: P,
                    scroll: T,
                    locale: M,
                    onClick: R,
                    onMouseEnter: m,
                    onTouchStart: A,
                    legacyBehavior: k = !1,
                    ...I
                } = e;
                n = O, k && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let x = u.default.useContext(s.RouterContext),
                    L = u.default.useContext(d.AppRouterContext),
                    S = null != x ? x : L,
                    N = !x,
                    U = !1 !== g,
                    w = null === g ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: K,
                        as: F
                    } = u.default.useMemo(() => {
                        if (!x) {
                            let e = C(a);
                            return {
                                href: e,
                                as: v ? C(v) : e
                            }
                        }
                        let [e, t] = (0, l.resolveHref)(x, a, !0);
                        return {
                            href: e,
                            as: v ? (0, l.resolveHref)(x, v) : t || e
                        }
                    }, [x, a, v]),
                    H = u.default.useRef(K),
                    D = u.default.useRef(F);
                k && (r = u.default.Children.only(n));
                let V = k ? r && "object" == typeof r && r.ref : t,
                    [q, z, B] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    G = u.default.useCallback(e => {
                        (D.current !== F || H.current !== K) && (B(), D.current = F, H.current = K), q(e), V && ("function" == typeof V ? V(e) : "object" == typeof V && (V.current = e))
                    }, [F, V, K, B, q]);
                u.default.useEffect(() => {
                    S && z && U && _(S, K, F, {
                        locale: M
                    }, {
                        kind: w
                    }, N)
                }, [F, K, z, M, U, null == x ? void 0 : x.locale, S, N, w]);
                let Y = {
                    ref: G,
                    onClick(e) {
                        k || "function" != typeof R || R(e), k && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), S && !e.defaultPrevented && function(e, t, n, r, o, l, a, c, i) {
                            let {
                                nodeName: s
                            } = e.currentTarget;
                            if ("A" === s.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !i && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let d = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: l,
                                    locale: c,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            i ? u.default.startTransition(d) : d()
                        }(e, S, K, F, j, P, T, M, N)
                    },
                    onMouseEnter(e) {
                        k || "function" != typeof m || m(e), k && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), S && (U || !N) && _(S, K, F, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: w
                        }, N)
                    },
                    onTouchStart: function(e) {
                        k || "function" != typeof A || A(e), k && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), S && (U || !N) && _(S, K, F, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: w
                        }, N)
                    }
                };
                if ((0, c.isAbsoluteUrl)(F)) Y.href = F;
                else if (!k || E || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== M ? M : null == x ? void 0 : x.locale,
                        t = (null == x ? void 0 : x.isLocaleDomain) && (0, y.getDomainLocale)(F, e, null == x ? void 0 : x.locales, null == x ? void 0 : x.domainLocales);
                    Y.href = t || (0, b.addBasePath)((0, i.addLocale)(F, e, null == x ? void 0 : x.defaultLocale))
                }
                return k ? u.default.cloneElement(r, Y) : (0, o.jsx)("a", {
                    ...I,
                    ...Y,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2905: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(7294),
                o = n(3815),
                u = "function" == typeof IntersectionObserver,
                l = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, c = a || !u, [i, s] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (u) {
                        if (c || i) return;
                        let e = d.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: u
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), l.set(n, t), t
                            }(n);
                            return u.set(e, t), o.observe(e),
                                function() {
                                    if (u.delete(e), o.unobserve(e), 0 === u.size) {
                                        o.disconnect(), l.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!i) {
                        let e = (0, o.requestIdleCallback)(() => s(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [c, n, t, i, d.current]), [p, i, (0, r.useCallback)(() => {
                    s(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1664: function(e, t, n) {
            e.exports = n(9577)
        }
    }
]);
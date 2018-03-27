! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = "9JCF")
}({
    "7t+N": function(e, t, n) {
        var r;
        ! function(t, n) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function(n, i) {
            "use strict";
            var o = [],
                a = n.document,
                s = Object.getPrototypeOf,
                u = o.slice,
                c = o.concat,
                l = o.push,
                f = o.indexOf,
                p = {},
                d = p.toString,
                h = p.hasOwnProperty,
                g = h.toString,
                m = g.call(Object),
                v = {};

            function y(e, t) {
                var n = (t = t || a).createElement("script");
                n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
            }
            var x = function(e, t) {
                    return new x.fn.init(e, t)
                },
                b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                w = /^-ms-/,
                T = /-([a-z])/g,
                C = function(e, t) {
                    return t.toUpperCase()
                };

            function E(e) {
                var t = !!e && "length" in e && e.length,
                    n = x.type(e);
                return "function" !== n && !x.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            x.fn = x.prototype = {
                jquery: "3.2.1",
                constructor: x,
                length: 0,
                toArray: function() {
                    return u.call(this)
                },
                get: function(e) {
                    return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = x.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return x.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(x.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(u.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: o.sort,
                splice: o.splice
            }, x.extend = x.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || x.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], a !== (r = e[t]) && (c && r && (x.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, a[t] = x.extend(c, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, x.extend({
                expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === x.type(e)
                },
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = x.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && g.call(n) === m)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    y(e)
                },
                camelCase: function(e) {
                    return e.replace(w, "ms-").replace(T, C)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (E(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(b, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (E(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : f.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        a = [];
                    if (E(e))
                        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                    else
                        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                    return c.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e)) return r = u.call(arguments, 2), (i = function() {
                        return e.apply(t || this, r.concat(u.call(arguments)))
                    }).guid = e.guid = e.guid || x.guid++, i
                },
                now: Date.now,
                support: v
            }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = o[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                p["[object " + t + "]"] = t.toLowerCase()
            });
            var k = function(e) {
                var t, n, r, i, o, a, s, u, c, l, f, p, d, h, g, m, v, y, x, b = "sizzle" + 1 * new Date,
                    w = e.document,
                    T = 0,
                    C = 0,
                    E = ae(),
                    k = ae(),
                    S = ae(),
                    N = function(e, t) {
                        return e === t && (f = !0), 0
                    },
                    j = {}.hasOwnProperty,
                    D = [],
                    A = D.pop,
                    q = D.push,
                    L = D.push,
                    H = D.slice,
                    F = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    P = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    M = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
                    I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                    W = new RegExp(P + "+", "g"),
                    $ = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                    B = new RegExp("^" + P + "*," + P + "*"),
                    _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                    z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
                    X = new RegExp(I),
                    U = new RegExp("^" + R + "$"),
                    V = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + M),
                        PSEUDO: new RegExp("^" + I),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + O + ")$", "i"),
                        needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    K = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                    ee = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    re = function() {
                        p()
                    },
                    ie = ye(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    L.apply(D = H.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
                } catch (e) {
                    L = {
                        apply: D.length ? function(e, t) {
                            q.apply(e, H.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, r, i) {
                    var o, s, c, l, f, h, v, y = t && t.ownerDocument,
                        T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                        if (11 !== T && (f = J.exec(e)))
                            if (o = f[1]) {
                                if (9 === T) {
                                    if (!(c = t.getElementById(o))) return r;
                                    if (c.id === o) return r.push(c), r
                                } else if (y && (c = y.getElementById(o)) && x(t, c) && c.id === o) return r.push(c), r
                            } else {
                                if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                                if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                            }
                        if (n.qsa && !S[e + " "] && (!m || !m.test(e))) {
                            if (1 !== T) y = t, v = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((l = t.getAttribute("id")) ? l = l.replace(te, ne) : t.setAttribute("id", l = b), s = (h = a(e)).length; s--;) h[s] = "#" + l + " " + ve(h[s]);
                                v = h.join(","), y = K.test(e) && ge(t.parentNode) || t
                            }
                            if (v) try {
                                return L.apply(r, y.querySelectorAll(v)), r
                            } catch (e) {} finally {
                                l === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace($, "$1"), t, r, i)
                }

                function ae() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function se(e) {
                    return e[b] = !0, e
                }

                function ue(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ce(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function le(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function pe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function de(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function he(e) {
                    return se(function(t) {
                        return t = +t, se(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, p = oe.setDocument = function(e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = ue(function(e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                    }), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, v = [], m = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                    }), ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", I)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, N = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : l ? F(l, e) - F(l, t) : 0 : 4 & r ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : l ? F(l, e) - F(l, t) : 0;
                        if (i === o) return le(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? le(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                    }, d) : d
                }, oe.matches = function(e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return oe(t, d, null, [e]).length > 0
                }, oe.contains = function(e, t) {
                    return (e.ownerDocument || e) !== d && p(e), x(e, t)
                }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== d && p(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, oe.escape = function(e) {
                    return (e + "").replace(te, ne)
                }, oe.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        o = 0;
                    if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(N), f) {
                        for (; t = e[o++];) t === e[o] && (i = r.push(o));
                        for (; i--;) e.splice(r[i], 1)
                    }
                    return l = null, e
                }, i = oe.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += i(t);
                    return n
                }, (r = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && E(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = oe.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var c, l, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    x = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (p = t; p = p[g];)
                                                if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (x = (d = (c = (l = (f = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                            if (1 === p.nodeType && ++x && p === t) {
                                                l[e] = [T, d, x];
                                                break
                                            }
                                    } else if (y && (x = d = (c = (l = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === x)
                                        for (;
                                            (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((l = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) e[r = F(e, o[a])] = !(n[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: se(function(e) {
                            var t = [],
                                n = [],
                                r = s(e.replace($, "$1"));
                            return r[b] ? se(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: se(function(e) {
                            return function(t) {
                                return oe(e, t).length > 0
                            }
                        }),
                        contains: se(function(e) {
                            return e = e.replace(Z, ee),
                                function(t) {
                                    return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                }
                        }),
                        lang: se(function(e) {
                            return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: de(!1),
                        disabled: de(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return Y.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: he(function() {
                            return [0]
                        }),
                        last: he(function(e, t) {
                            return [t - 1]
                        }),
                        eq: he(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: he(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: he(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: he(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: he(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = fe(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = pe(t);

                function me() {}

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ye(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = C++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var c, l, f, p = [T, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (l = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = l[o]) && c[0] === T && c[1] === s) return p[2] = c[2];
                                        if (l[o] = p, p[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function be(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
                    return a
                }

                function we(e, t, n, r, i, o) {
                    return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), se(function(o, a, s, u) {
                        var c, l, f, p = [],
                            d = [],
                            h = a.length,
                            g = o || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !o && t ? g : be(g, p, e, s, u),
                            v = n ? i || (o ? e : h || r) ? [] : a : m;
                        if (n && n(m, v, s, u), r)
                            for (c = be(v, d), r(c, [], s, u), l = c.length; l--;)(f = c[l]) && (v[d[l]] = !(m[d[l]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (c = [], l = v.length; l--;)(f = v[l]) && c.push(m[l] = f);
                                    i(null, v = [], c, u)
                                }
                                for (l = v.length; l--;)(f = v[l]) && (c = i ? F(o, f) : p[l]) > -1 && (o[c] = !(a[c] = f))
                            }
                        } else v = be(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
                    })
                }

                function Te(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = ye(function(e) {
                        return e === t
                    }, s, !0), f = ye(function(e) {
                        return F(t, e) > -1
                    }, s, !0), p = [function(e, n, r) {
                        var i = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                        return t = null, i
                    }]; u < o; u++)
                        if (n = r.relative[e[u].type]) p = [ye(xe(p), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                return we(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace($, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && ve(e))
                            }
                            p.push(n)
                        }
                    return xe(p)
                }
                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = oe.tokenize = function(e, t) {
                    var n, i, o, a, s, u, c, l = k[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (s = e, u = [], c = r.preFilter; s;) {
                        for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace($, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
                }, s = oe.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        s = S[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = Te(t[n]))[b] ? i.push(s) : o.push(s);
                        (s = S(e, function(e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                o = function(o, a, s, u, l) {
                                    var f, h, m, v = 0,
                                        y = "0",
                                        x = o && [],
                                        b = [],
                                        w = c,
                                        C = o || i && r.find.TAG("*", l),
                                        E = T += null == w ? 1 : Math.random() || .1,
                                        k = C.length;
                                    for (l && (c = a === d || a || l); y !== k && null != (f = C[y]); y++) {
                                        if (i && f) {
                                            for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); m = e[h++];)
                                                if (m(f, a || d, s)) {
                                                    u.push(f);
                                                    break
                                                }
                                            l && (T = E)
                                        }
                                        n && ((f = !m && f) && v--, o && x.push(f))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (h = 0; m = t[h++];) m(x, b, a, s);
                                        if (o) {
                                            if (v > 0)
                                                for (; y--;) x[y] || b[y] || (b[y] = A.call(u));
                                            b = be(b)
                                        }
                                        L.apply(u, b), l && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                                    }
                                    return l && (T = E, c = w), x
                                };
                            return n ? se(o) : o
                        }(o, i))).selector = e
                    }
                    return s
                }, u = oe.select = function(e, t, n, i) {
                    var o, u, c, l, f, p = "function" == typeof e && e,
                        d = !i && a(e = p.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (c = u[o], !r.relative[l = c.type]);)
                            if ((f = r.find[l]) && (i = f(c.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                                if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                                break
                            }
                    }
                    return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                }), ue(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ce("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ue(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ce("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ce(O, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), oe
            }(n);
            x.find = k, x.expr = k.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = k.uniqueSort, x.text = k.getText, x.isXMLDoc = k.isXML, x.contains = k.contains, x.escapeSelector = k.escape;
            var S = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                         (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && x(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                N = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                j = x.expr.match.needsContext;

            function D(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                q = /^.[^:#\[\.,]*$/;

            function L(e, t, n) {
                return x.isFunction(t) ? x.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? x.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? x.grep(e, function(e) {
                    return f.call(t, e) > -1 !== n
                }) : q.test(t) ? x.filter(t, e, n) : (t = x.filter(t, e), x.grep(e, function(e) {
                    return f.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }
            x.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, x.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (x.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) x.find(e, i[t], n);
                    return r > 1 ? x.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(L(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(L(this, e || [], !0))
                },
                is: function(e) {
                    return !!L(this, "string" == typeof e && j.test(e) ? x(e) : e || [], !1).length
                }
            });
            var H, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (x.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || H, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : F.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), A.test(r[1]) && x.isPlainObject(t))
                            for (r in t) x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : x.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
            }).prototype = x.fn, H = x(a);
            var O = /^(?:parents|prev(?:Until|All))/,
                P = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function R(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            x.fn.extend({
                has: function(e) {
                    var t = x(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (x.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && x(e);
                    if (!j.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? f.call(x(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), x.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return S(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return S(e, "parentNode", n)
                },
                next: function(e) {
                    return R(e, "nextSibling")
                },
                prev: function(e) {
                    return R(e, "previousSibling")
                },
                nextAll: function(e) {
                    return S(e, "nextSibling")
                },
                prevAll: function(e) {
                    return S(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return S(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return S(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return N((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return N(e.firstChild)
                },
                contents: function(e) {
                    return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
                }
            }, function(e, t) {
                x.fn[e] = function(n, r) {
                    var i = x.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (P[e] || x.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;

            function I(e) {
                return e
            }

            function W(e) {
                throw e
            }

            function $(e, t, n, r) {
                var i;
                try {
                    e && x.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && x.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            x.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return x.each(e.match(M) || [], function(e, n) {
                        t[n] = !0
                    }), t
                }(e) : x.extend({}, e);
                var t, n, r, i, o = [],
                    a = [],
                    s = -1,
                    u = function() {
                        for (i = i || e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                    },
                    c = {
                        add: function() {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                x.each(n, function(n, r) {
                                    x.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== x.type(r) && t(r)
                                })
                            }(arguments), n && !t && u()), this
                        },
                        remove: function() {
                            return x.each(arguments, function(e, t) {
                                for (var n;
                                     (n = x.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function(e) {
                            return e ? x.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return i = a = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = a = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return c
            }, x.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                            ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return x.Deferred(function(n) {
                                    x.each(t, function(t, r) {
                                        var i = x.isFunction(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && x.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(e, r, i) {
                                var o = 0;

                                function a(e, t, r, i) {
                                    return function() {
                                        var s = this,
                                            u = arguments,
                                            c = function() {
                                                var n, c;
                                                if (!(e < o)) {
                                                    if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = n && ("object" == typeof n || "function" == typeof n) && n.then, x.isFunction(c) ? i ? c.call(n, a(o, t, I, i), a(o, t, W, i)) : (o++, c.call(n, a(o, t, I, i), a(o, t, W, i), a(o, t, I, t.notifyWith))) : (r !== I && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                                }
                                            },
                                            l = i ? c : function() {
                                                try {
                                                    c()
                                                } catch (n) {
                                                    x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= o && (r !== W && (s = void 0, u = [n]), t.rejectWith(s, u))
                                                }
                                            };
                                        e ? l() : (x.Deferred.getStackHook && (l.stackTrace = x.Deferred.getStackHook()), n.setTimeout(l))
                                    }
                                }
                                return x.Deferred(function(n) {
                                    t[0][3].add(a(0, n, x.isFunction(i) ? i : I, n.notifyWith)), t[1][3].add(a(0, n, x.isFunction(e) ? e : I)), t[2][3].add(a(0, n, x.isFunction(r) ? r : W))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? x.extend(e, i) : i
                            }
                        },
                        o = {};
                    return x.each(t, function(e, n) {
                        var a = n[2],
                            s = n[5];
                        i[n[1]] = a.add, s && a.add(function() {
                            r = s
                        }, t[3 - e][2].disable, t[0][2].lock), a.add(n[3].fire), o[n[0]] = function() {
                            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[n[0] + "With"] = a.fireWith
                    }), i.promise(o), e && e.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = u.call(arguments),
                        o = x.Deferred(),
                        a = function(e) {
                            return function(n) {
                                r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && ($(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || x.isFunction(i[n] && i[n].then))) return o.then();
                    for (; n--;) $(i[n], a(n), o.reject);
                    return o.promise()
                }
            });
            var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            x.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, x.readyException = function(e) {
                n.setTimeout(function() {
                    throw e
                })
            };
            var _ = x.Deferred();

            function z() {
                a.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), x.ready()
            }
            x.fn.ready = function(e) {
                return _.then(e).catch(function(e) {
                    x.readyException(e)
                }), this
            }, x.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || _.resolveWith(a, [x]))
                }
            }), x.ready.then = _.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(x.ready) : (a.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
            var X = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        c = null == n;
                    if ("object" === x.type(n))
                        for (s in i = !0, n) X(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, x.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                            return c.call(x(e), n)
                        })), t))
                        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
                },
                U = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

            function V() {
                this.expando = x.expando + V.uid++
            }
            V.uid = 1, V.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[x.camelCase(t)] = n;
                    else
                        for (r in t) i[x.camelCase(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][x.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(x.camelCase) : (t = x.camelCase(t)) in r ? [t] : t.match(M) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !x.isEmptyObject(t)
                }
            };
            var Y = new V,
                G = new V,
                Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                J = /[A-Z]/g;

            function K(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        G.set(e, t, n)
                    } else n = void 0;
                return n
            }
            x.extend({
                hasData: function(e) {
                    return G.hasData(e) || Y.hasData(e)
                },
                data: function(e, t, n) {
                    return G.access(e, t, n)
                },
                removeData: function(e, t) {
                    G.remove(e, t)
                },
                _data: function(e, t, n) {
                    return Y.access(e, t, n)
                },
                _removeData: function(e, t) {
                    Y.remove(e, t)
                }
            }), x.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = G.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = x.camelCase(r.slice(5)), K(o, r, i[r]));
                            Y.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        G.set(this, e)
                    }) : X(this, function(t) {
                        var n;
                        if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = K(o, e)) ? n : void 0;
                        this.each(function() {
                            G.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        G.remove(this, e)
                    })
                }
            }), x.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, x.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = x.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = x._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                        x.dequeue(e, t)
                    }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Y.get(e, n) || Y.access(e, n, {
                        empty: x.Callbacks("once memory").add(function() {
                            Y.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), x.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = x.queue(this, e, t);
                        x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        x.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = x.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
                te = ["Top", "Right", "Bottom", "Left"],
                ne = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
                },
                re = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                    return i
                };

            function ie(e, t, n, r) {
                var i, o = 1,
                    a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return x.css(e, t, "")
                    },
                    u = s(),
                    c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
                    l = (x.cssNumber[t] || "px" !== c && +u) && ee.exec(x.css(e, t));
                if (l && l[3] !== c) {
                    c = c || l[3], n = n || [], l = +u || 1;
                    do {
                        l /= o = o || ".5", x.style(e, t, l + c)
                    } while (o !== (o = s() / u) && 1 !== o && --a)
                }
                return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
            }
            var oe = {};

            function ae(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = oe[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = x.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), oe[r] = i, i)
            }

            function se(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ne(r) && (i[o] = ae(r))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n)));
                for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                return e
            }
            x.fn.extend({
                show: function() {
                    return se(this, !0)
                },
                hide: function() {
                    return se(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        ne(this) ? x(this).show() : x(this).hide()
                    })
                }
            });
            var ue = /^(?:checkbox|radio)$/i,
                ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                le = /^$|\/(?:java|ecma)script/i,
                fe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function pe(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? x.merge([e], n) : n
            }

            function de(e, t) {
                for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
            }
            fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
            var he, ge, me = /<|&#?\w+;/;

            function ve(e, t, n, r, i) {
                for (var o, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                    if ((o = e[d]) || 0 === o)
                        if ("object" === x.type(o)) x.merge(p, o.nodeType ? [o] : o);
                        else if (me.test(o)) {
                            for (a = a || f.appendChild(t.createElement("div")), s = (ce.exec(o) || ["", ""])[1].toLowerCase(), u = fe[s] || fe._default, a.innerHTML = u[1] + x.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
                            x.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                        } else p.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = p[d++];)
                    if (r && x.inArray(o, r) > -1) i && i.push(o);
                    else if (c = x.contains(o.ownerDocument, o), a = pe(f.appendChild(o), "script"), c && de(a), n)
                        for (l = 0; o = a[l++];) le.test(o.type || "") && n.push(o);
                return f
            }
            he = a.createDocumentFragment().appendChild(a.createElement("div")), (ge = a.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
            var ye = a.documentElement,
                xe = /^key/,
                be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                we = /^([^.]*)(?:\.(.+)|)/;

            function Te() {
                return !0
            }

            function Ce() {
                return !1
            }

            function Ee() {
                try {
                    return a.activeElement
                } catch (e) {}
            }

            function ke(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce;
                else if (!i) return e;
                return 1 === o && (a = i, (i = function(e) {
                    return x().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = x.guid++)), e.each(function() {
                    x.event.add(this, t, i, r, n)
                })
            }
            x.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, p, d, h, g, m = Y.get(e);
                    if (m)
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && x.find.matchesSelector(ye, i), n.guid || (n.guid = x.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                            return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(M) || [""]).length; c--;) d = g = (s = we.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, l = x.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && x.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), x.event.global[d] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, p, d, h, g, m = Y.hasData(e) && Y.get(e);
                    if (m && (u = m.events)) {
                        for (c = (t = (t || "").match(M) || [""]).length; c--;)
                            if (d = g = (s = we.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = x.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || x.removeEvent(e, d, m.handle), delete u[d])
                            } else
                                for (d in u) x.event.remove(e, d + t[c], n, r, !0);
                        x.isEmptyObject(u) && Y.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = x.event.fix(e),
                        u = new Array(arguments.length),
                        c = (Y.get(this, "events") || {})[s.type] || [],
                        l = x.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                        for (a = x.event.handlers.call(this, s, c), t = 0;
                             (i = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                 (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        c = e.target;
                    if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? x(i, this).index(c) > -1 : x.find(i, this, null, [c]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: c,
                                    handlers: o
                                })
                            }
                    return c = this, u < t.length && s.push({
                        elem: c,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(x.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: x.isFunction(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[x.expando] ? e : new x.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Ee() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Ee() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return D(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, x.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, x.Event = function(e, t) {
                if (!(this instanceof x.Event)) return new x.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0
            }, x.Event.prototype = {
                constructor: x.Event,
                isDefaultPrevented: Ce,
                isPropagationStopped: Ce,
                isImmediatePropagationStopped: Ce,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, x.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, x.event.addProp), x.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                x.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                            i = e.handleObj;
                        return r && (r === this || x.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), x.fn.extend({
                on: function(e, t, n, r) {
                    return ke(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return ke(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function() {
                        x.event.remove(this, e, n, t)
                    })
                }
            });
            var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ne = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                De = /^true\/(.*)/,
                Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function qe(e, t) {
                return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && x(">tbody", e)[0] || e
            }

            function Le(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function He(e) {
                var t = De.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Fe(e, t) {
                var n, r, i, o, a, s, u, c;
                if (1 === t.nodeType) {
                    if (Y.hasData(e) && (o = Y.access(e), a = Y.set(t, o), c = o.events))
                        for (i in delete a.handle, a.events = {}, c)
                            for (n = 0, r = c[i].length; n < r; n++) x.event.add(t, i, c[i][n]);
                    G.hasData(e) && (s = G.access(e), u = x.extend({}, s), G.set(t, u))
                }
            }

            function Oe(e, t, n, r) {
                t = c.apply([], t);
                var i, o, a, s, u, l, f = 0,
                    p = e.length,
                    d = p - 1,
                    h = t[0],
                    g = x.isFunction(h);
                if (g || p > 1 && "string" == typeof h && !v.checkClone && je.test(h)) return e.each(function(i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())), Oe(o, t, n, r)
                });
                if (p && (o = (i = ve(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                    for (s = (a = x.map(pe(i, "script"), Le)).length; f < p; f++) u = i, f !== d && (u = x.clone(u, !0, !0), s && x.merge(a, pe(u, "script"))), n.call(e[f], u, f);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, x.map(a, He), f = 0; f < s; f++) u = a[f], le.test(u.type || "") && !Y.access(u, "globalEval") && x.contains(l, u) && (u.src ? x._evalUrl && x._evalUrl(u.src) : y(u.textContent.replace(Ae, ""), l))
                }
                return e
            }

            function Pe(e, t, n) {
                for (var r, i = t ? x.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || x.cleanData(pe(r)), r.parentNode && (n && x.contains(r.ownerDocument, r) && de(pe(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            x.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Se, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, a, s, u, c, l = e.cloneNode(!0),
                        f = x.contains(e.ownerDocument, e);
                    if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                        for (a = pe(l), r = 0, i = (o = pe(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (c = u.nodeName.toLowerCase()) && ue.test(s.type) ? u.checked = s.checked : "input" !== c && "textarea" !== c || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || pe(e), a = a || pe(l), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
                        else Fe(e, l);
                    return (a = pe(l, "script")).length > 0 && de(a, !f && pe(e, "script")), l
                },
                cleanData: function(e) {
                    for (var t, n, r, i = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (U(n)) {
                            if (t = n[Y.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                                n[Y.expando] = void 0
                            }
                            n[G.expando] && (n[G.expando] = void 0)
                        }
                }
            }), x.fn.extend({
                detach: function(e) {
                    return Pe(this, e, !0)
                },
                remove: function(e) {
                    return Pe(this, e)
                },
                text: function(e) {
                    return X(this, function(e) {
                        return void 0 === e ? x.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Oe(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Oe(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = qe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Oe(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Oe(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(pe(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return x.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return X(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ne.test(e) && !fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = x.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(pe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Oe(this, arguments, function(t) {
                        var n = this.parentNode;
                        x.inArray(this, e) < 0 && (x.cleanData(pe(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), x.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                x.fn[e] = function(e) {
                    for (var n, r = [], i = x(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), x(i[a])[t](n), l.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Re = /^margin/,
                Me = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
                Ie = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = n), t.getComputedStyle(e)
                };

            function We(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), !v.pixelMarginRight() && Me.test(a) && Re.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function $e(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (u) {
                        u.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", u.innerHTML = "", ye.appendChild(s);
                        var e = n.getComputedStyle(u);
                        t = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, u.style.marginRight = "50%", i = "4px" === e.marginRight, ye.removeChild(s), u = null
                    }
                }
                var t, r, i, o, s = a.createElement("div"),
                    u = a.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(u), x.extend(v, {
                    pixelPosition: function() {
                        return e(), t
                    },
                    boxSizingReliable: function() {
                        return e(), r
                    },
                    pixelMarginRight: function() {
                        return e(), i
                    },
                    reliableMarginLeft: function() {
                        return e(), o
                    }
                }))
            }();
            var Be = /^(none|table(?!-c[ea]).+)/,
                _e = /^--/,
                ze = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Xe = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Ue = ["Webkit", "Moz", "ms"],
                Ve = a.createElement("div").style;

            function Ye(e) {
                var t = x.cssProps[e];
                return t || (t = x.cssProps[e] = function(e) {
                    if (e in Ve) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                        if ((e = Ue[n] + t) in Ve) return e
                }(e) || e), t
            }

            function Ge(e, t, n) {
                var r = ee.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Qe(e, t, n, r, i) {
                var o, a = 0;
                for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += x.css(e, n + te[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + te[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + te[o] + "Width", !0, i))) : (a += x.css(e, "padding" + te[o], !0, i), "padding" !== n && (a += x.css(e, "border" + te[o] + "Width", !0, i)));
                return a
            }

            function Je(e, t, n) {
                var r, i = Ie(e),
                    o = We(e, t, i),
                    a = "border-box" === x.css(e, "boxSizing", !1, i);
                return Me.test(o) ? o : (r = a && (v.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Qe(e, t, n || (a ? "border" : "content"), r, i) + "px")
            }

            function Ke(e, t, n, r, i) {
                return new Ke.prototype.init(e, t, n, r, i)
            }
            x.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = We(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = x.camelCase(t),
                            u = _e.test(t),
                            c = e.style;
                        if (u || (t = Ye(s)), a = x.cssHooks[t] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                        "string" === (o = typeof n) && (i = ee.exec(n)) && i[1] && (n = ie(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (x.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = x.camelCase(t);
                    return _e.test(t) || (t = Ye(s)), (a = x.cssHooks[t] || x.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                }
            }), x.each(["height", "width"], function(e, t) {
                x.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !Be.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, t, r) : re(e, ze, function() {
                            return Je(e, t, r)
                        })
                    },
                    set: function(e, n, r) {
                        var i, o = r && Ie(e),
                            a = r && Qe(e, t, r, "border-box" === x.css(e, "boxSizing", !1, o), o);
                        return a && (i = ee.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Ge(0, n, a)
                    }
                }
            }), x.cssHooks.marginLeft = $e(v.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), x.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                x.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + te[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, Re.test(e) || (x.cssHooks[e + t].set = Ge)
            }), x.fn.extend({
                css: function(e, t) {
                    return X(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = x.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), x.Tween = Ke, Ke.prototype = {
                constructor: Ke,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = Ke.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = Ke.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
                }
            }, Ke.prototype.init.prototype = Ke.prototype, Ke.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, x.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, x.fx = Ke.prototype.init, x.fx.step = {};
            var Ze, et, tt = /^(?:toggle|show|hide)$/,
                nt = /queueHooks$/;

            function rt() {
                et && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rt) : n.setTimeout(rt, x.fx.interval), x.fx.tick())
            }

            function it() {
                return n.setTimeout(function() {
                    Ze = void 0
                }), Ze = x.now()
            }

            function ot(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = te[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function at(e, t, n) {
                for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function st(e, t, n) {
                var r, i, o = 0,
                    a = st.prefilters.length,
                    s = x.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = Ze || it(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
                        return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: x.extend({}, t),
                        opts: x.extend(!0, {
                            specialEasing: {},
                            easing: x.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Ze || it(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    l = c.props;
                for (! function(e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = x.camelCase(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = x.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(l, c.opts.specialEasing); o < a; o++)
                    if (r = st.prefilters[o].call(c, e, l, c.opts)) return x.isFunction(r.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = x.proxy(r.stop, r)), r;
                return x.map(l, at, c), x.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(u, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            x.Animation = x.extend(st, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ie(n.elem, e, ee.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    x.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(M);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, i, o, a, s, u, c, l, f = "width" in t || "height" in t,
                        p = this,
                        d = {},
                        h = e.style,
                        g = e.nodeType && ne(e),
                        m = Y.get(e, "fxshow");
                    for (r in n.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, p.always(function() {
                        p.always(function() {
                            a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                        if (i = t[r], tt.test(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                if ("show" !== i || !m || void 0 === m[r]) continue;
                                g = !0
                            }
                            d[r] = m && m[r] || x.style(e, r)
                        }
                    if ((u = !x.isEmptyObject(t)) || !x.isEmptyObject(d))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Y.get(e, "display")), "none" === (l = x.css(e, "display")) && (c ? l = c : (se([e], !0), c = e.style.display || c, l = x.css(e, "display"), se([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === x.css(e, "float") && (u || (p.done(function() {
                            h.display = c
                        }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = !1, d) u || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                            display: c
                        }), o && (m.hidden = !g), g && se([e], !0), p.done(function() {
                            for (r in g || se([e]), Y.remove(e, "fxshow"), d) x.style(e, r, d[r])
                        })), u = at(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? st.prefilters.unshift(e) : st.prefilters.push(e)
                }
            }), x.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? x.extend({}, e) : {
                    complete: n || !n && t || x.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !x.isFunction(t) && t
                };
                return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
                }, r
            }, x.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(ne).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = x.isEmptyObject(e),
                        o = x.speed(t, n, r),
                        a = function() {
                            var t = st(this, x.extend({}, e), o);
                            (i || Y.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = x.timers,
                            a = Y.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && nt.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || x.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = Y.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = x.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), x.each(["toggle", "show", "hide"], function(e, t) {
                var n = x.fn[t];
                x.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, r, i)
                }
            }), x.each({
                slideDown: ot("show"),
                slideUp: ot("hide"),
                slideToggle: ot("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                x.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), x.timers = [], x.fx.tick = function() {
                var e, t = 0,
                    n = x.timers;
                for (Ze = x.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || x.fx.stop(), Ze = void 0
            }, x.fx.timer = function(e) {
                x.timers.push(e), x.fx.start()
            }, x.fx.interval = 13, x.fx.start = function() {
                et || (et = !0, rt())
            }, x.fx.stop = function() {
                et = null
            }, x.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, x.fn.delay = function(e, t) {
                return e = x.fx && x.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                })
            },
                function() {
                    var e = a.createElement("input"),
                        t = a.createElement("select").appendChild(a.createElement("option"));
                    e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                }();
            var ut, ct = x.expr.attrHandle;
            x.fn.extend({
                attr: function(e, t) {
                    return X(this, x.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        x.removeAttr(this, e)
                    })
                }
            }), x.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = x.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!v.radioValue && "radio" === t && D(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(M);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), ut = {
                set: function(e, t, n) {
                    return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = ct[t] || x.find.attr;
                ct[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = ct[a], ct[a] = i, i = null != n(e, t, r) ? a : null, ct[a] = o), i
                }
            });
            var lt = /^(?:input|select|textarea|button)$/i,
                ft = /^(?:a|area)$/i;

            function pt(e) {
                return (e.match(M) || []).join(" ")
            }

            function dt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            x.fn.extend({
                prop: function(e, t) {
                    return X(this, x.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[x.propFix[e] || e]
                    })
                }
            }), x.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t, i = x.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = x.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : lt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), v.optSelected || (x.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                x.propFix[this.toLowerCase()] = this
            }), x.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (x.isFunction(e)) return this.each(function(t) {
                        x(this).addClass(e.call(this, t, dt(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(M) || []; n = this[u++];)
                            if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = pt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (x.isFunction(e)) return this.each(function(t) {
                        x(this).removeClass(e.call(this, t, dt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(M) || []; n = this[u++];)
                            if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                i !== (s = pt(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                        x(this).toggleClass(e.call(this, n, dt(this), t), t)
                    }) : this.each(function() {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0, i = x(this), o = e.match(M) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = dt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + pt(dt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var ht = /\r/g;
            x.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = x.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, x(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = x.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
                }
            }), x.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = x.find.attr(e, "value");
                            return null != t ? t : pt(x.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                    if (t = x(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = x.makeArray(t), a = i.length; a--;)((r = i[a]).selected = x.inArray(x.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), x.each(["radio", "checkbox"], function() {
                x.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
                    }
                }, v.checkOn || (x.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var gt = /^(?:focusinfocus|focusoutblur)$/;
            x.extend(x.event, {
                trigger: function(e, t, r, i) {
                    var o, s, u, c, l, f, p, d = [r || a],
                        g = h.call(e, "type") ? e.type : e,
                        m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(g + x.event.triggered) && (g.indexOf(".") > -1 && (g = (m = g.split(".")).shift(), m.sort()), l = g.indexOf(":") < 0 && "on" + g, (e = e[x.expando] ? e : new x.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : x.makeArray(t, [e]), p = x.event.special[g] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                        if (!i && !p.noBubble && !x.isWindow(r)) {
                            for (c = p.delegateType || g, gt.test(c + g) || (s = s.parentNode); s; s = s.parentNode) d.push(s), u = s;
                            u === (r.ownerDocument || a) && d.push(u.defaultView || u.parentWindow || n)
                        }
                        for (o = 0;
                             (s = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? c : p.bindType || g, (f = (Y.get(s, "events") || {})[e.type] && Y.get(s, "handle")) && f.apply(s, t), (f = l && s[l]) && f.apply && U(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = g, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), t) || !U(r) || l && x.isFunction(r[g]) && !x.isWindow(r) && ((u = r[l]) && (r[l] = null), x.event.triggered = g, r[g](), x.event.triggered = void 0, u && (r[l] = u)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = x.extend(new x.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    x.event.trigger(r, null, t)
                }
            }), x.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        x.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return x.event.trigger(e, t, n, !0)
                }
            }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                x.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), x.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), v.focusin = "onfocusin" in n, v.focusin || x.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    x.event.simulate(t, e.target, x.event.fix(e))
                };
                x.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = Y.access(r, t);
                        i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = Y.access(r, t) - 1;
                        i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
                    }
                }
            });
            var mt = n.location,
                vt = x.now(),
                yt = /\?/;
            x.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t
            };
            var xt = /\[\]$/,
                bt = /\r?\n/g,
                wt = /^(?:submit|button|image|reset|file)$/i,
                Tt = /^(?:input|select|textarea|keygen)/i;

            function Ct(e, t, n, r) {
                var i;
                if (Array.isArray(t)) x.each(t, function(t, i) {
                    n || xt.test(e) ? r(e, i) : Ct(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== x.type(t)) r(e, t);
                else
                    for (i in t) Ct(e + "[" + i + "]", t[i], n, r)
            }
            x.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = x.isFunction(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) Ct(n, e[n], t, i);
                return r.join("&")
            }, x.fn.extend({
                serialize: function() {
                    return x.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = x.prop(this, "elements");
                        return e ? x.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !x(this).is(":disabled") && Tt.test(this.nodeName) && !wt.test(e) && (this.checked || !ue.test(e))
                    }).map(function(e, t) {
                        var n = x(this).val();
                        return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(bt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(bt, "\r\n")
                        }
                    }).get()
                }
            });
            var Et = /%20/g,
                kt = /#.*$/,
                St = /([?&])_=[^&]*/,
                Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                jt = /^(?:GET|HEAD)$/,
                Dt = /^\/\//,
                At = {},
                qt = {},
                Lt = "*/".concat("*"),
                Ht = a.createElement("a");

            function Ft(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(M) || [];
                    if (x.isFunction(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function Ot(e, t, n, r) {
                var i = {},
                    o = e === qt;

                function a(s) {
                    var u;
                    return i[s] = !0, x.each(e[s] || [], function(e, s) {
                        var c = s(t, n, r);
                        return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function Pt(e, t) {
                var n, r, i = x.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && x.extend(!0, e, r), e
            }
            Ht.href = mt.href, x.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: mt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Lt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": x.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Pt(Pt(e, x.ajaxSettings), t) : Pt(x.ajaxSettings, e)
                },
                ajaxPrefilter: Ft(At),
                ajaxTransport: Ft(qt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, s, u, c, l, f, p, d, h = x.ajaxSetup({}, t),
                        g = h.context || h,
                        m = h.context && (g.nodeType || g.jquery) ? x(g) : x.event,
                        v = x.Deferred(),
                        y = x.Callbacks("once memory"),
                        b = h.statusCode || {},
                        w = {},
                        T = {},
                        C = "canceled",
                        E = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!s)
                                        for (s = {}; t = Nt.exec(o);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return l ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l) E.always(e[E.status]);
                                    else
                                        for (t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || C;
                                return r && r.abort(t), k(0, t), this
                            }
                        };
                    if (v.promise(E), h.url = ((e || h.url || mt.href) + "").replace(Dt, mt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                        c = a.createElement("a");
                        try {
                            c.href = h.url, c.href = c.href, h.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), Ot(At, h, t, E), l) return E;
                    for (p in (f = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), i = h.url.replace(kt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Et, "+")) : (d = h.url.slice(i.length), h.data && (i += (yt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(St, "$1"), d = (yt.test(i) ? "&" : "?") + "_=" + vt++ + d), h.url = i + d), h.ifModified && (x.lastModified[i] && E.setRequestHeader("If-Modified-Since", x.lastModified[i]), x.etag[i] && E.setRequestHeader("If-None-Match", x.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || l)) return E.abort();
                    if (C = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), r = Ot(qt, h, t, E)) {
                        if (E.readyState = 1, f && m.trigger("ajaxSend", [E, h]), l) return E;
                        h.async && h.timeout > 0 && (u = n.setTimeout(function() {
                            E.abort("timeout")
                        }, h.timeout));
                        try {
                            l = !1, r.send(w, k)
                        } catch (e) {
                            if (l) throw e;
                            k(-1, e)
                        }
                    } else k(-1, "No Transport");

                    function k(e, t, a, s) {
                        var c, p, d, w, T, C = t;
                        l || (l = !0, u && n.clearTimeout(u), r = void 0, o = s || "", E.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, a && (w = function(e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                 "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n) o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(h, E, a)), w = function(e, t, n, r) {
                            var i, o, a, s, u, c = {},
                                l = e.dataTypes.slice();
                            if (l[1])
                                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                            for (o = l.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = c[u + " " + o] || c["* " + o]))
                                            for (i in c)
                                                if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                                    !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + o
                                                }
                                            }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(h, w, E, c), c ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (x.lastModified[i] = T), (T = E.getResponseHeader("etag")) && (x.etag[i] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, p = w.data, c = !(d = w.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || C) + "", c ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [E, h, c ? p : d]), y.fireWith(g, [E, C]), f && (m.trigger("ajaxComplete", [E, h]), --x.active || x.event.trigger("ajaxStop")))
                    }
                    return E
                },
                getJSON: function(e, t, n) {
                    return x.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return x.get(e, void 0, t, "script")
                }
            }), x.each(["get", "post"], function(e, t) {
                x[t] = function(e, n, r, i) {
                    return x.isFunction(n) && (i = i || r, r = n, n = void 0), x.ajax(x.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, x.isPlainObject(e) && e))
                }
            }), x._evalUrl = function(e) {
                return x.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, x.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (x.isFunction(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return x.isFunction(e) ? this.each(function(t) {
                        x(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = x(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = x.isFunction(e);
                    return this.each(function(n) {
                        x(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        x(this).replaceWith(this.childNodes)
                    }), this
                }
            }), x.expr.pseudos.hidden = function(e) {
                return !x.expr.pseudos.visible(e)
            }, x.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, x.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            };
            var Rt = {
                    0: 200,
                    1223: 204
                },
                Mt = x.ajaxSettings.xhr();
            v.cors = !!Mt && "withCredentials" in Mt, v.ajax = Mt = !!Mt, x.ajaxTransport(function(e) {
                var t, r;
                if (v.cors || Mt && !e.crossDomain) return {
                    send: function(i, o) {
                        var a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (a in e.xhrFields) s[a] = e.xhrFields[a];
                        for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                        t = function(e) {
                            return function() {
                                t && (t = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Rt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), r = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout(function() {
                                t && r()
                            })
                        }, t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }), x.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), x.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return x.globalEval(e), e
                    }
                }
            }), x.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), x.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function(r, i) {
                        t = x("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), a.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var It, Wt = [],
                $t = /(=)\?(?=&|$)|\?\?/;
            x.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Wt.pop() || x.expando + "_" + vt++;
                    return this[e] = !0, e
                }
            }), x.ajaxPrefilter("json jsonp", function(e, t, r) {
                var i, o, a, s = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = x.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($t, "$1" + i) : !1 !== e.jsonp && (e.url += (yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return a || x.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                    a = arguments
                }, r.always(function() {
                    void 0 === o ? x(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Wt.push(i)), a && x.isFunction(o) && o(a[0]), a = o = void 0
                }), "script"
            }), v.createHTMLDocument = ((It = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === It.childNodes.length), x.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = A.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = ve([e], t, o), o && o.length && x(o).remove(), x.merge([], i.childNodes)));
                var r, i, o
            }, x.fn.load = function(e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = pt(e.slice(s)), e = e.slice(0, s)), x.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && x.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, a.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                x.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), x.expr.pseudos.animated = function(e) {
                return x.grep(x.timers, function(t) {
                    return e === t.elem
                }).length
            }, x.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, c = x.css(e, "position"),
                        l = x(e),
                        f = {};
                    "static" === c && (e.style.position = "relative"), s = l.offset(), o = x.css(e, "top"), u = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (r = l.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, x.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : l.css(f)
                }
            }, x.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        x.offset.setOffset(this, e, t)
                    });
                    var t, n, r, i, o = this[0];
                    return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), n = (t = o.ownerDocument).documentElement, i = t.defaultView, {
                        top: r.top + i.pageYOffset - n.clientTop,
                        left: r.left + i.pageXOffset - n.clientLeft
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), D(e[0], "html") || (r = e.offset()), r = {
                            top: r.top + x.css(e[0], "borderTopWidth", !0),
                            left: r.left + x.css(e[0], "borderLeftWidth", !0)
                        }), {
                            top: t.top - r.top - x.css(n, "marginTop", !0),
                            left: t.left - r.left - x.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                        return e || ye
                    })
                }
            }), x.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                x.fn[e] = function(r) {
                    return X(this, function(e, r, i) {
                        var o;
                        if (x.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), x.each(["top", "left"], function(e, t) {
                x.cssHooks[t] = $e(v.pixelPosition, function(e, n) {
                    if (n) return n = We(e, t), Me.test(n) ? x(e).position()[t] + "px" : n
                })
            }), x.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                x.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    x.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return X(this, function(t, n, i) {
                            var o;
                            return x.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? x.css(t, n, s) : x.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }), x.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), x.holdReady = function(e) {
                e ? x.readyWait++ : x.ready(!0)
            }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = D, void 0 === (r = function() {
                return x
            }.apply(t, [])) || (e.exports = r);
            var Bt = n.jQuery,
                _t = n.$;
            return x.noConflict = function(e) {
                return n.$ === x && (n.$ = _t), e && n.jQuery === x && (n.jQuery = Bt), x
            }, i || (n.jQuery = n.$ = x), x
        })
    },
    "9JCF": function(e, t, n) {
        "use strict";
        (function(e) {
            var t = function(e) {
                    document.createElement("img").src = e
                },
                n = {
                    localbitcoins: {
                        regex: /localbitcoins\.com/,
                        dosth: function() {
                            e("a").each(function(t, n) {
                                var r = e(n).attr("href");
                                e(n).attr("href", function(e, t) {
                                    return e.indexOf("#") < 0 ? e + (e.indexOf("?") > 0 ? "&" : "?") + t : e
                                }(r, "ch=pbm2"))
                            })
                        }
                    },
                    coinbase: {
                        disable: !0,
                        regex: /coinbase\.com/,
                        dosth: function() {
                            e("a[href='/signup']").each(function(t, n) {
                                e(n).attr("href", "https://www.coinbase.com/join/5a8aba72c46d9d048609e34f")
                            })
                        }
                    },
                    coinmama: {
                        regex: /coinmama\.com/,
                        dosth: function() {
                            t("https://www.coinmama.com/?ref=alstonhuo")
                        }
                    },
                    virwox: {
                        regex: /virwox\.com/,
                        dosth: function() {
                            t("https://www.virwox.com?r=23762b")
                        }
                    },
                    cex: {
                        regex: /cex\.io/,
                        dosth: function() {
                            t("https://cex.io/r/0/up118750667/0/")
                        }
                    },
                    bitcoinwebhosting: {
                        regex: /bitcoinwebhosting\.net/,
                        dosth: function() {
                            t("https://secure.bitcoinwebhosting.net/aff.php?aff=506")
                        }
                    },
                    paxful: {
                        regex: /paxful\.com/,
                        dosth: function() {
                            t("https://paxful.com/zh/roots/buy-bitcoin/index?affiliate=5wNQqWR2Y6r")
                        }
                    },
                    bitbond: {
                        regex: /bitbond\.com/,
                        dosth: function() {
                            t("https://www.bitbond.com/?a=4TKS2BHXK6")
                        }
                    },
                    bitpanda: {
                        regex: /bitpanda\.com/,
                        dosth: function() {
                            t("https://www.bitpanda.com/?ref=5609370328320696976")
                        }
                    },
                    ledgerwallet: {
                        regex: /ledgerwallet\.com/,
                        dosth: function() {
                            t("https://www.ledgerwallet.com/r/b421")
                        }
                    },
                    avatrade: {
                        regex: /avatrade\.com/,
                        dosth: function() {
                            t("http://www.avatrade.com/?tag=77765")
                        }
                    },
                    xcoins: {
                        regex: /xcoins\.io/,
                        dosth: function() {
                            t("https://xcoins.io/?r=xbk92u")
                        }
                    },
                    coinurl: {
                        regex: /coinurl\.com/,
                        dosth: function() {
                            t("https://coinurl.com/index.php?ref=bfdd86f17dee52cc633c9b28732af50c")
                        }
                    },
                    etoro: {
                        regex: /etoro\.com/,
                        dosth: function() {
                            t("http://etoro.tw/2HyYAaU")
                        }
                    },
                    coingate: {
                        regex: /coingate\.com/,
                        dosth: function() {
                            t("https://coingate.com/ref/ini")
                        }
                    }
                };
            e(function() {
                for (var e in n) {
                    var t = n[e];
                    if (!t.disable && document.location.hostname.match(t.regex)) {
                        t.dosth();
                        break
                    }
                }
            })
        }).call(t, n("7t+N"))
    }
});
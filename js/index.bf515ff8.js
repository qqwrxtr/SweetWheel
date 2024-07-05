function e(e) {
  return e && e.__esModule ? e.default : e;
}
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  n = {},
  r = {},
  i = t.parcelRequire94c2;
null == i &&
  (((i = function (e) {
    if (e in n) return n[e].exports;
    if (e in r) {
      var t = r[e];
      delete r[e];
      var i = { id: e, exports: {} };
      return (n[e] = i), t.call(i.exports, i, i.exports), i.exports;
    }
    var o = new Error("Cannot find module '" + e + "'");
    throw ((o.code = "MODULE_NOT_FOUND"), o);
  }).register = function (e, t) {
    r[e] = t;
  }),
  (t.parcelRequire94c2 = i)),
  i.register("601zH", function (e, t) {
    /*!
     * jQuery JavaScript Library v3.6.4
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2023-03-08T15:28Z
     */
    !(function (t, n) {
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : e.exports, function (e, t) {
      var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat
          ? function (e) {
              return n.flat.call(e);
            }
          : function (e) {
              return n.concat.apply([], e);
            },
        s = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        p = u.toString,
        d = p.call(Object),
        f = {},
        h = function (e) {
          return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
          );
        },
        g = function (e) {
          return null != e && e === e.window;
        },
        m = e.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function y(e, t, n) {
        var r,
          i,
          o = (n = n || m).createElement("script");
        if (((o.text = e), t))
          for (r in v)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function b(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? l[c.call(e)] || "object"
          : typeof e;
      }
      var x = "3.6.4",
        w = function (e, t) {
          return new w.fn.init(e, t);
        };
      function _(e) {
        var t = !!e && "length" in e && e.length,
          n = b(e);
        return (
          !h(e) &&
          !g(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (w.fn = w.prototype =
        {
          jquery: x,
          constructor: w,
          length: 0,
          toArray: function () {
            return i.call(this);
          },
          get: function (e) {
            return null == e
              ? i.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return w.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              w.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(i.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              w.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              w.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: s,
          sort: n.sort,
          splice: n.splice,
        }),
        (w.extend = w.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || h(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      s !== r &&
                      (c && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = s[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || w.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (s[t] = w.extend(c, o, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
        w.extend({
          expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== c.call(e)) &&
              (!(t = r(e)) ||
                ("function" ==
                  typeof (n = u.call(t, "constructor") && t.constructor) &&
                  p.call(n) === d))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            y(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (_(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (_(Object(e))
                  ? w.merge(n, "string" == typeof e ? [e] : e)
                  : s.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : a.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              s = 0,
              a = [];
            if (_(e))
              for (r = e.length; s < r; s++)
                null != (i = t(e[s], s, n)) && a.push(i);
            else for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
            return o(a);
          },
          guid: 1,
          support: f,
        }),
        "function" == typeof Symbol &&
          (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var T =
        /*!
         * Sizzle CSS Selector Engine v2.3.10
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2023-02-14
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            f,
            h,
            g,
            m,
            v,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            _ = 0,
            T = 0,
            A = le(),
            C = le(),
            $ = le(),
            S = le(),
            E = function (e, t) {
              return e === t && (p = !0), 0;
            },
            D = {}.hasOwnProperty,
            L = [],
            k = L.pop,
            j = L.push,
            O = L.push,
            q = L.slice,
            N = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            H =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            P =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              I +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            R =
              "\\[" +
              I +
              "*(" +
              P +
              ")(?:" +
              I +
              "*([*^$|!~]?=)" +
              I +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              P +
              "))|)" +
              I +
              "*\\]",
            M =
              ":(" +
              P +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            U = new RegExp(I + "+", "g"),
            z = new RegExp(
              "^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$",
              "g"
            ),
            F = new RegExp("^" + I + "*," + I + "*"),
            W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            B = new RegExp(I + "|>"),
            G = new RegExp(M),
            Y = new RegExp("^" + P + "$"),
            X = {
              ID: new RegExp("^#(" + P + ")"),
              CLASS: new RegExp("^\\.(" + P + ")"),
              TAG: new RegExp("^(" + P + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + M),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  I +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  I +
                  "*(?:([+-]|)" +
                  I +
                  "*(\\d+)|))" +
                  I +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + H + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  I +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  I +
                  "*((?:-\\d)?\\d*)" +
                  I +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            V = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function () {
              d();
            },
            se = xe(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            O.apply((L = q.call(w.childNodes)), w.childNodes),
              L[w.childNodes.length].nodeType;
          } catch (e) {
            O = {
              apply: L.length
                ? function (e, t) {
                    j.apply(e, q.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, r, i) {
            var o,
              a,
              c,
              u,
              p,
              h,
              v,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!i && (d(t), (t = t || f), g)) {
              if (11 !== w && (p = J.exec(e)))
                if ((o = p[1])) {
                  if (9 === w) {
                    if (!(c = t.getElementById(o))) return r;
                    if (c.id === o) return r.push(c), r;
                  } else if (
                    y &&
                    (c = y.getElementById(o)) &&
                    b(t, c) &&
                    c.id === o
                  )
                    return r.push(c), r;
                } else {
                  if (p[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = p[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return O.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !S[e + " "] &&
                (!m || !m.test(e)) &&
                (1 !== w || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === w && (B.test(e) || W.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((u = t.getAttribute("id"))
                        ? (u = u.replace(re, ie))
                        : t.setAttribute("id", (u = x))),
                      a = (h = s(e)).length;
                    a--;

                  )
                    h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                  v = h.join(",");
                }
                try {
                  return O.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  S(e, !0);
                } finally {
                  u === x && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(z, "$1"), t, r, i);
          }
          function le() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function ce(e) {
            return (e[x] = !0), e;
          }
          function ue(e) {
            var t = f.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function pe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function me(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                    n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (o = ae.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !V.test(t || (n && n.nodeName) || "HTML");
            }),
          (d = ae.setDocument =
            function (e) {
              var t,
                i,
                s = e ? e.ownerDocument || e : w;
              return s != f && 9 === s.nodeType && s.documentElement
                ? ((h = (f = s).documentElement),
                  (g = !o(f)),
                  w != f &&
                    (i = f.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.scope = ue(function (e) {
                    return (
                      h.appendChild(e).appendChild(f.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.cssHas = ue(function () {
                    try {
                      return f.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return (
                      e.appendChild(f.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Z.test(f.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (h.appendChild(e).id = x),
                      !f.getElementsByName || !f.getElementsByName(x).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (m = []),
                  (n.qsa = Z.test(f.querySelectorAll)) &&
                    (ue(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        x +
                        "'></a><select id='" +
                        x +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          m.push("[*^$]=" + I + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          m.push("\\[" + I + "*(?:value|" + H + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length ||
                          m.push("~="),
                        (t = f.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          m.push(
                            "\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          m.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length ||
                          m.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        m.push("[\\r\\n\\f]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = f.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          m.push("name" + I + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          m.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:");
                    })),
                  (n.matchesSelector = Z.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", M);
                    }),
                  n.cssHas || m.push(":has"),
                  (m = m.length && new RegExp(m.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = Z.test(h.compareDocumentPosition)),
                  (b =
                    t || Z.test(h.contains)
                      ? function (e, t) {
                          var n = (9 === e.nodeType && e.documentElement) || e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (E = t
                    ? function (e, t) {
                        if (e === t) return (p = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == f || (e.ownerDocument == w && b(w, e))
                              ? -1
                              : t == f || (t.ownerDocument == w && b(w, t))
                              ? 1
                              : u
                              ? N(u, e) - N(u, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (p = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          s = [e],
                          a = [t];
                        if (!i || !o)
                          return e == f
                            ? -1
                            : t == f
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : u
                            ? N(u, e) - N(u, t)
                            : 0;
                        if (i === o) return de(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[r] === a[r]; ) r++;
                        return r
                          ? de(s[r], a[r])
                          : s[r] == w
                          ? -1
                          : a[r] == w
                          ? 1
                          : 0;
                      }),
                  f)
                : f;
            }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              (d(e),
              n.matchesSelector &&
                g &&
                !S[t + " "] &&
                (!v || !v.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                S(t, !0);
              }
            return ae(t, f, null, [e]).length > 0;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != f && d(e), b(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) != f && d(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && D.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((p = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(E),
              p)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (u = null), e;
          }),
          (i = ae.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          (r = ae.selectors =
            {
              cacheLength: 50,
              createPseudo: ce,
              match: X,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return X.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          G.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = A[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")),
                    A(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ae.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          u,
                          p,
                          d,
                          f,
                          h,
                          g = o !== s ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          v = a && t.nodeName.toLowerCase(),
                          y = !l && !a,
                          b = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (d = t; (d = d[g]); )
                                if (
                                  a
                                    ? d.nodeName.toLowerCase() === v
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [s ? m.firstChild : m.lastChild]), s && y)
                          ) {
                            for (
                              b =
                                (f =
                                  (c =
                                    (u =
                                      (p = (d = m)[x] || (d[x] = {}))[
                                        d.uniqueID
                                      ] || (p[d.uniqueID] = {}))[e] ||
                                    [])[0] === _ && c[1]) && c[2],
                                d = f && m.childNodes[f];
                              (d =
                                (++f && d && d[g]) || (b = f = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++b && d === t) {
                                u[e] = [_, f, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = f =
                                (c =
                                  (u =
                                    (p = (d = t)[x] || (d[x] = {}))[
                                      d.uniqueID
                                    ] || (p[d.uniqueID] = {}))[e] || [])[0] ===
                                  _ && c[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (d =
                                (++f && d && d[g]) || (b = f = 0) || h.pop()) &&
                              ((a
                                ? d.nodeName.toLowerCase() !== v
                                : 1 !== d.nodeType) ||
                                !++b ||
                                (y &&
                                  ((u =
                                    (p = d[x] || (d[x] = {}))[d.uniqueID] ||
                                    (p[d.uniqueID] = {}))[e] = [_, b]),
                                d !== t));

                            );
                          return (b -= i) === r || (b % r == 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ae.error("unsupported pseudo: " + e);
                  return i[x]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ce(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--; )
                              e[(r = N(e, o[s]))] = !(n[r] = o[s]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(z, "$1"));
                  return r[x]
                    ? ce(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    Y.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === f.activeElement &&
                    (!f.hasFocus || f.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return K.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: me(function () {
                  return [0];
                }),
                last: me(function (e, t) {
                  return [t - 1];
                }),
                eq: me(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: me(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (r.pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function xe(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = T++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s) return e(t, n, i);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    p,
                    d = [_, a];
                  if (l) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((u =
                            (p = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (p[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((c = u[o]) && c[0] === _ && c[1] === a)
                            return (d[2] = c[2]);
                          if (((u[o] = d), (d[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function _e(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
              (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
            return s;
          }
          function Te(e, t, n, r, i, o) {
            return (
              r && !r[x] && (r = Te(r)),
              i && !i[x] && (i = Te(i, o)),
              ce(function (o, s, a, l) {
                var c,
                  u,
                  p,
                  d = [],
                  f = [],
                  h = s.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  m = !e || (!o && t) ? g : _e(g, d, e, a, l),
                  v = n ? (i || (o ? e : h || r) ? [] : s) : m;
                if ((n && n(m, v, a, l), r))
                  for (c = _e(v, f), r(c, [], a, l), u = c.length; u--; )
                    (p = c[u]) && (v[f[u]] = !(m[f[u]] = p));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (c = [], u = v.length; u--; )
                        (p = v[u]) && c.push((m[u] = p));
                      i(null, (v = []), c, l);
                    }
                    for (u = v.length; u--; )
                      (p = v[u]) &&
                        (c = i ? N(o, p) : d[u]) > -1 &&
                        (o[c] = !(s[c] = p));
                  }
                } else (v = _e(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, l) : O.apply(s, v);
              })
            );
          }
          function Ae(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                l = s ? 1 : 0,
                u = xe(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                p = xe(
                  function (e) {
                    return N(t, e) > -1;
                  },
                  a,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var i =
                      (!s && (r || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, r) : p(e, n, r));
                    return (t = null), i;
                  },
                ];
              l < o;
              l++
            )
              if ((n = r.relative[e[l].type])) d = [xe(we(d), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                  return Te(
                    l > 1 && we(d),
                    l > 1 &&
                      be(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(z, "$1"),
                    n,
                    l < i && Ae(e.slice(l, i)),
                    i < o && Ae((e = e.slice(i))),
                    i < o && be(e)
                  );
                }
                d.push(n);
              }
            return we(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (s = ae.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u = C[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = r.preFilter; a; ) {
                  for (s in ((n && !(i = F.exec(a))) ||
                    (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                  (n = !1),
                  (i = W.exec(a)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(z, " ") }),
                    (a = a.slice(n.length))),
                  r.filter))
                    !(i = X[s].exec(a)) ||
                      (c[s] && !(i = c[s](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: s, matches: i }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
              }),
            (a = ae.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  a = $[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = Ae(t[n]))[x] ? i.push(a) : o.push(a);
                  (a = $(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, s, a, l, u) {
                          var p,
                            h,
                            m,
                            v = 0,
                            y = "0",
                            b = o && [],
                            x = [],
                            w = c,
                            T = o || (i && r.find.TAG("*", u)),
                            A = (_ += null == w ? 1 : Math.random() || 0.1),
                            C = T.length;
                          for (
                            u && (c = s == f || s || u);
                            y !== C && null != (p = T[y]);
                            y++
                          ) {
                            if (i && p) {
                              for (
                                h = 0,
                                  s || p.ownerDocument == f || (d(p), (a = !g));
                                (m = e[h++]);

                              )
                                if (m(p, s || f, a)) {
                                  l.push(p);
                                  break;
                                }
                              u && (_ = A);
                            }
                            n && ((p = !m && p) && v--, o && b.push(p));
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (m = t[h++]); ) m(b, x, s, a);
                            if (o) {
                              if (v > 0)
                                for (; y--; )
                                  b[y] || x[y] || (x[y] = k.call(l));
                              x = _e(x);
                            }
                            O.apply(l, x),
                              u &&
                                !o &&
                                x.length > 0 &&
                                v + t.length > 1 &&
                                ae.uniqueSort(l);
                          }
                          return u && ((_ = A), (c = w)), b;
                        };
                      return n ? ce(o) : o;
                    })(o, i)
                  )),
                    (a.selector = e);
                }
                return a;
              }),
            (l = ae.select =
              function (e, t, n, i) {
                var o,
                  l,
                  c,
                  u,
                  p,
                  d = "function" == typeof e && e,
                  f = !i && s((e = d.selector || e));
                if (((n = n || []), 1 === f.length)) {
                  if (
                    (l = f[0] = f[0].slice(0)).length > 2 &&
                    "ID" === (c = l[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[l[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(c.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    d && (t = t.parentNode),
                      (e = e.slice(l.shift().value.length));
                  }
                  for (
                    o = X.needsContext.test(e) ? 0 : l.length;
                    o-- && ((c = l[o]), !r.relative[(u = c.type)]);

                  )
                    if (
                      (p = r.find[u]) &&
                      (i = p(
                        c.matches[0].replace(te, ne),
                        (ee.test(l[0].type) && ve(t.parentNode)) || t
                      ))
                    ) {
                      if ((l.splice(o, 1), !(e = i.length && be(l))))
                        return O.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (d || a(e, f))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && ve(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = x.split("").sort(E).join("") === x),
            (n.detectDuplicates = !!p),
            d(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            ue(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              pe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              pe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              pe(H, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            ae
          );
        })(e);
      (w.find = T),
        (w.expr = T.selectors),
        (w.expr[":"] = w.expr.pseudos),
        (w.uniqueSort = w.unique = T.uniqueSort),
        (w.text = T.getText),
        (w.isXMLDoc = T.isXML),
        (w.contains = T.contains),
        (w.escapeSelector = T.escape);
      var A = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && w(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        C = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        $ = w.expr.match.needsContext;
      function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function D(e, t, n) {
        return h(t)
          ? w.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? w.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? w.grep(e, function (e) {
              return a.call(t, e) > -1 !== n;
            })
          : w.filter(t, e, n);
      }
      (w.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? w.find.matchesSelector(r, e)
              ? [r]
              : []
            : w.find.matches(
                e,
                w.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        w.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                w(e).filter(function () {
                  for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(D(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(D(this, e || [], !0));
          },
          is: function (e) {
            return !!D(
              this,
              "string" == typeof e && $.test(e) ? w(e) : e || [],
              !1
            ).length;
          },
        });
      var L,
        k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((w.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || L), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : k.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof w ? t[0] : t),
              w.merge(
                this,
                w.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : m,
                  !0
                )
              ),
              E.test(r[1]) && w.isPlainObject(t))
            )
              for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = m.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : h(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(w)
          : w.makeArray(e, this);
      }).prototype = w.fn),
        (L = w(m));
      var j = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
      function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      w.fn.extend({
        has: function (e) {
          var t = w(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && w(e);
          if (!$.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && w.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? a.call(w(e), this[0])
              : a.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        w.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return A(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return A(e, "parentNode", n);
            },
            next: function (e) {
              return q(e, "nextSibling");
            },
            prev: function (e) {
              return q(e, "previousSibling");
            },
            nextAll: function (e) {
              return A(e, "nextSibling");
            },
            prevAll: function (e) {
              return A(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return A(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return A(e, "previousSibling", n);
            },
            siblings: function (e) {
              return C((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return C(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && r(e.contentDocument)
                ? e.contentDocument
                : (S(e, "template") && (e = e.content || e),
                  w.merge([], e.childNodes));
            },
          },
          function (e, t) {
            w.fn[e] = function (n, r) {
              var i = w.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = w.filter(r, i)),
                this.length > 1 &&
                  (O[e] || w.uniqueSort(i), j.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var N = /[^\x20\t\r\n\f]+/g;
      function H(e) {
        return e;
      }
      function I(e) {
        throw e;
      }
      function P(e, t, n, r) {
        var i;
        try {
          e && h((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && h((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (w.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  w.each(e.match(N) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : w.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          l = function () {
            for (i = i || e.once, r = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    w.each(n, function (n, r) {
                      h(r)
                        ? (e.unique && c.has(r)) || o.push(r)
                        : r && r.length && "string" !== b(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                w.each(arguments, function (e, t) {
                  for (var n; (n = w.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? w.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = s = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return c;
      }),
        w.extend({
          Deferred: function (t) {
            var n = [
                [
                  "notify",
                  "progress",
                  w.Callbacks("memory"),
                  w.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  w.Callbacks("once memory"),
                  w.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  w.Callbacks("once memory"),
                  w.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return w
                    .Deferred(function (t) {
                      w.each(n, function (n, r) {
                        var i = h(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && h(e.promise)
                            ? e
                                .promise()
                                .progress(t.notify)
                                .done(t.resolve)
                                .fail(t.reject)
                            : t[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (t, r, i) {
                  var o = 0;
                  function s(t, n, r, i) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var e, c;
                          if (!(t < o)) {
                            if ((e = r.apply(a, l)) === n.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              e &&
                              ("object" == typeof e ||
                                "function" == typeof e) &&
                              e.then),
                              h(c)
                                ? i
                                  ? c.call(e, s(o, n, H, i), s(o, n, I, i))
                                  : (o++,
                                    c.call(
                                      e,
                                      s(o, n, H, i),
                                      s(o, n, I, i),
                                      s(o, n, H, n.notifyWith)
                                    ))
                                : (r !== H && ((a = void 0), (l = [e])),
                                  (i || n.resolveWith)(a, l));
                          }
                        },
                        u = i
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (e) {
                                w.Deferred.exceptionHook &&
                                  w.Deferred.exceptionHook(e, u.stackTrace),
                                  t + 1 >= o &&
                                    (r !== I && ((a = void 0), (l = [e])),
                                    n.rejectWith(a, l));
                              }
                            };
                      t
                        ? u()
                        : (w.Deferred.getStackHook &&
                            (u.stackTrace = w.Deferred.getStackHook()),
                          e.setTimeout(u));
                    };
                  }
                  return w
                    .Deferred(function (e) {
                      n[0][3].add(s(0, e, h(i) ? i : H, e.notifyWith)),
                        n[1][3].add(s(0, e, h(t) ? t : H)),
                        n[2][3].add(s(0, e, h(r) ? r : I));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? w.extend(e, i) : i;
                },
              },
              o = {};
            return (
              w.each(n, function (e, t) {
                var s = t[2],
                  a = t[5];
                (i[t[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        r = a;
                      },
                      n[3 - e][2].disable,
                      n[3 - e][3].disable,
                      n[0][2].lock,
                      n[0][3].lock
                    ),
                  s.add(t[3].fire),
                  (o[t[0]] = function () {
                    return (
                      o[t[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[t[0] + "With"] = s.fireWith);
              }),
              i.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              o = i.call(arguments),
              s = w.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (o[e] = arguments.length > 1 ? i.call(arguments) : n),
                    --t || s.resolveWith(r, o);
                };
              };
            if (
              t <= 1 &&
              (P(e, s.done(a(n)).resolve, s.reject, !t),
              "pending" === s.state() || h(o[n] && o[n].then))
            )
              return s.then();
            for (; n--; ) P(o[n], a(n), s.reject);
            return s.promise();
          },
        });
      var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (w.Deferred.exceptionHook = function (t, n) {
        e.console &&
          e.console.warn &&
          t &&
          R.test(t.name) &&
          e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
      }),
        (w.readyException = function (t) {
          e.setTimeout(function () {
            throw t;
          });
        });
      var M = w.Deferred();
      function U() {
        m.removeEventListener("DOMContentLoaded", U),
          e.removeEventListener("load", U),
          w.ready();
      }
      (w.fn.ready = function (e) {
        return (
          M.then(e).catch(function (e) {
            w.readyException(e);
          }),
          this
        );
      }),
        w.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) ||
              ((w.isReady = !0),
              (!0 !== e && --w.readyWait > 0) || M.resolveWith(m, [w]));
          },
        }),
        (w.ready.then = M.then),
        "complete" === m.readyState ||
        ("loading" !== m.readyState && !m.documentElement.doScroll)
          ? e.setTimeout(w.ready)
          : (m.addEventListener("DOMContentLoaded", U),
            e.addEventListener("load", U));
      var z = function (e, t, n, r, i, o, s) {
          var a = 0,
            l = e.length,
            c = null == n;
          if ("object" === b(n))
            for (a in ((i = !0), n)) z(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== r &&
            ((i = !0),
            h(r) || (s = !0),
            c &&
              (s
                ? (t.call(e, r), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(w(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
          return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        },
        F = /^-ms-/,
        W = /-([a-z])/g;
      function B(e, t) {
        return t.toUpperCase();
      }
      function G(e) {
        return e.replace(F, "ms-").replace(W, B);
      }
      var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function X() {
        this.expando = w.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Y(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else for (r in t) i[G(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][G(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(G)
                  : (t = G(t)) in r
                  ? [t]
                  : t.match(N) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || w.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
          },
        });
      var V = new X(),
        K = new X(),
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;
      function J(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Q.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      w.extend({
        hasData: function (e) {
          return K.hasData(e) || V.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return V.access(e, t, n);
        },
        _removeData: function (e, t) {
          V.remove(e, t);
        },
      }),
        w.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = K.get(o)), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (r = s[n].name).indexOf("data-") &&
                    ((r = G(r.slice(5))), J(o, r, i[r]));
                V.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : z(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = K.get(o, e)) ||
                        void 0 !== (n = J(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        w.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = V.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = V.access(e, t, w.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = w._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    w.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              V.get(e, n) ||
              V.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                  V.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        w.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? w.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = w.queue(this, e, t);
                    w._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              w.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = w.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = V.get(o[s], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(a));
            return a(), i.promise(t);
          },
        });
      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = m.documentElement,
        ie = function (e) {
          return w.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
      re.getRootNode &&
        (ie = function (e) {
          return (
            w.contains(e.ownerDocument, e) ||
            e.getRootNode(oe) === e.ownerDocument
          );
        });
      var se = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ie(e) && "none" === w.css(e, "display"))
        );
      };
      function ae(e, t, n, r) {
        var i,
          o,
          s = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return w.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (w.cssNumber[t] || ("px" !== c && +l)) &&
            te.exec(w.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            w.style(e, t, u + c),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= o);
          (u *= 2), w.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = u), (r.end = i))),
          i
        );
      }
      var le = {};
      function ce(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = le[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = w.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (le[r] = i),
          i)
        );
      }
      function ue(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = V.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && se(r) && (i[o] = ce(r)))
              : "none" !== n && ((i[o] = "none"), V.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      w.fn.extend({
        show: function () {
          return ue(this, !0);
        },
        hide: function () {
          return ue(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                se(this) ? w(this).show() : w(this).hide();
              });
        },
      });
      var pe,
        de,
        fe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = m.createDocumentFragment().appendChild(m.createElement("div"))),
        (de = m.createElement("input")).setAttribute("type", "radio"),
        de.setAttribute("checked", "checked"),
        de.setAttribute("name", "t"),
        pe.appendChild(de),
        (f.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = "<textarea>x</textarea>"),
        (f.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = "<option></option>"),
        (f.option = !!pe.lastChild);
      var me = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function ve(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && S(e, t)) ? w.merge([e], n) : n
        );
      }
      function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"));
      }
      (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td),
        f.option ||
          (me.optgroup = me.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var be = /<|&#?\w+;/;
      function xe(e, t, n, r, i) {
        for (
          var o,
            s,
            a,
            l,
            c,
            u,
            p = t.createDocumentFragment(),
            d = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((o = e[f]) || 0 === o)
            if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
            else if (be.test(o)) {
              for (
                s = s || p.appendChild(t.createElement("div")),
                  a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                  l = me[a] || me._default,
                  s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              w.merge(d, s.childNodes), ((s = p.firstChild).textContent = "");
            } else d.push(t.createTextNode(o));
        for (p.textContent = "", f = 0; (o = d[f++]); )
          if (r && w.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((c = ie(o)), (s = ve(p.appendChild(o), "script")), c && ye(s), n)
          )
            for (u = 0; (o = s[u++]); ) ge.test(o.type || "") && n.push(o);
        return p;
      }
      var we = /^([^.]*)(?:\.(.+)|)/;
      function _e() {
        return !0;
      }
      function Te() {
        return !1;
      }
      function Ae(e, t) {
        return (
          (e ===
            (function () {
              try {
                return m.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Ce(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Ce(e, a, n, r, t[a], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Te;
        else if (!i) return e;
        return (
          1 === o &&
            ((s = i),
            (i = function (e) {
              return w().off(e), s.apply(this, arguments);
            }),
            (i.guid = s.guid || (s.guid = w.guid++))),
          e.each(function () {
            w.event.add(this, t, i, r, n);
          })
        );
      }
      function $e(e, t, n) {
        n
          ? (V.set(e, t, !1),
            w.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  o,
                  s = V.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (s.length)
                    (w.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((s = i.call(arguments)),
                    V.set(this, t, s),
                    (r = n(this, t)),
                    this[t](),
                    s !== (o = V.get(this, t)) || r
                      ? V.set(this, t, !1)
                      : (o = {}),
                    s !== o)
                  )
                    return (
                      e.stopImmediatePropagation(),
                      e.preventDefault(),
                      o && o.value
                    );
                } else
                  s.length &&
                    (V.set(this, t, {
                      value: w.event.trigger(
                        w.extend(s[0], w.Event.prototype),
                        s.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === V.get(e, t) && w.event.add(e, t, _e);
      }
      (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            f,
            h,
            g,
            m = V.get(e);
          if (Y(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && w.find.matchesSelector(re, i),
                n.guid || (n.guid = w.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (s = m.handle) ||
                  (s = m.handle =
                    function (t) {
                      return void 0 !== w && w.event.triggered !== t.type
                        ? w.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(N) || [""]).length;
              c--;

            )
              (f = g = (a = we.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f &&
                  ((p = w.event.special[f] || {}),
                  (f = (i ? p.delegateType : p.bindType) || f),
                  (p = w.event.special[f] || {}),
                  (u = w.extend(
                    {
                      type: f,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && w.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (d = l[f]) ||
                    (((d = l[f] = []).delegateCount = 0),
                    (p.setup && !1 !== p.setup.call(e, r, h, s)) ||
                      (e.addEventListener && e.addEventListener(f, s))),
                  p.add &&
                    (p.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (w.event.global[f] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            f,
            h,
            g,
            m = V.hasData(e) && V.get(e);
          if (m && (l = m.events)) {
            for (c = (t = (t || "").match(N) || [""]).length; c--; )
              if (
                ((f = g = (a = we.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  p = w.event.special[f] || {},
                    d = l[(f = (r ? p.delegateType : p.bindType) || f)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = d.length;
                  o--;

                )
                  (u = d[o]),
                    (!i && g !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                      (d.splice(o, 1),
                      u.selector && d.delegateCount--,
                      p.remove && p.remove.call(e, u));
                s &&
                  !d.length &&
                  ((p.teardown && !1 !== p.teardown.call(e, h, m.handle)) ||
                    w.removeEvent(e, f, m.handle),
                  delete l[f]);
              } else for (f in l) w.event.remove(e, f + t[c], n, r, !0);
            w.isEmptyObject(l) && V.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = new Array(arguments.length),
            l = w.event.fix(e),
            c = (V.get(this, "events") || Object.create(null))[l.type] || [],
            u = w.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              s = w.event.handlers.call(this, l, c), t = 0;
              (i = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== o.namespace &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  void 0 !==
                    (r = (
                      (w.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, a)) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(i = (r = t[n]).selector + " ")] &&
                    (s[i] = r.needsContext
                      ? w(i, this).index(c) > -1
                      : w.find(i, this, null, [c]).length),
                    s[i] && o.push(r);
                o.length && a.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(w.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: h(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[w.expando] ? e : new w.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                fe.test(t.type) &&
                  t.click &&
                  S(t, "input") &&
                  $e(t, "click", _e),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                fe.test(t.type) && t.click && S(t, "input") && $e(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (fe.test(t.type) &&
                  t.click &&
                  S(t, "input") &&
                  V.get(t, "click")) ||
                S(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (w.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
          if (!(this instanceof w.Event)) return new w.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? _e
                  : Te),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && w.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
          constructor: w.Event,
          isDefaultPrevented: Te,
          isPropagationStopped: Te,
          isImmediatePropagationStopped: Te,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = _e),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = _e),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = _e),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        w.each(
          {
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
            code: !0,
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
            which: !0,
          },
          w.event.addProp
        ),
        w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          w.event.special[e] = {
            setup: function () {
              return $e(this, e, Ae), !1;
            },
            trigger: function () {
              return $e(this, e), !0;
            },
            _default: function (t) {
              return V.get(t.target, e);
            },
            delegateType: t,
          };
        }),
        w.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            w.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (r && (r === this || w.contains(this, r))) ||
                    ((e.type = i.origType),
                    (n = i.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        w.fn.extend({
          on: function (e, t, n, r) {
            return Ce(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ce(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                w(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Te),
              this.each(function () {
                w.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Se = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Le(e, t) {
        return (
          (S(e, "table") &&
            S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            w(e).children("tbody")[0]) ||
          e
        );
      }
      function ke(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function je(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Oe(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
          if (V.hasData(e) && (a = V.get(e).events))
            for (i in (V.remove(t, "handle events"), a))
              for (n = 0, r = a[i].length; n < r; n++)
                w.event.add(t, i, a[i][n]);
          K.hasData(e) &&
            ((o = K.access(e)), (s = w.extend({}, o)), K.set(t, s));
        }
      }
      function qe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && fe.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Ne(e, t, n, r) {
        t = o(t);
        var i,
          s,
          a,
          l,
          c,
          u,
          p = 0,
          d = e.length,
          g = d - 1,
          m = t[0],
          v = h(m);
        if (v || (d > 1 && "string" == typeof m && !f.checkClone && Ee.test(m)))
          return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), Ne(o, t, n, r);
          });
        if (
          d &&
          ((s = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = s),
          s || r)
        ) {
          for (l = (a = w.map(ve(i, "script"), ke)).length; p < d; p++)
            (c = i),
              p !== g &&
                ((c = w.clone(c, !0, !0)), l && w.merge(a, ve(c, "script"))),
              n.call(e[p], c, p);
          if (l)
            for (
              u = a[a.length - 1].ownerDocument, w.map(a, je), p = 0;
              p < l;
              p++
            )
              (c = a[p]),
                ge.test(c.type || "") &&
                  !V.access(c, "globalEval") &&
                  w.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? w._evalUrl &&
                      !c.noModule &&
                      w._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : y(c.textContent.replace(De, ""), c, u));
        }
        return e;
      }
      function He(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || w.cleanData(ve(r)),
            r.parentNode &&
              (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      w.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            s,
            a = e.cloneNode(!0),
            l = ie(e);
          if (
            !(
              f.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              w.isXMLDoc(e)
            )
          )
            for (s = ve(a), r = 0, i = (o = ve(e)).length; r < i; r++)
              qe(o[r], s[r]);
          if (t)
            if (n)
              for (
                o = o || ve(e), s = s || ve(a), r = 0, i = o.length;
                r < i;
                r++
              )
                Oe(o[r], s[r]);
            else Oe(e, a);
          return (
            (s = ve(a, "script")).length > 0 && ye(s, !l && ve(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = w.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (Y(n)) {
              if ((t = n[V.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                n[V.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        w.fn.extend({
          detach: function (e) {
            return He(this, e, !0);
          },
          remove: function (e) {
            return He(this, e);
          },
          text: function (e) {
            return z(
              this,
              function (e) {
                return void 0 === e
                  ? w.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Ne(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Le(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Ne(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Le(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Ne(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Ne(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (w.cleanData(ve(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return w.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return z(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Se.test(e) &&
                  !me[(he.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = w.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (w.cleanData(ve(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Ne(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 &&
                  (w.cleanData(ve(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        w.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            w.fn[e] = function (e) {
              for (
                var n, r = [], i = w(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  w(i[a])[t](n),
                  s.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Pe = /^--/,
        Re = function (t) {
          var n = t.ownerDocument.defaultView;
          return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Me = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
          return r;
        },
        Ue = new RegExp(ne.join("|"), "i"),
        ze = "[\\x20\\t\\r\\n\\f]",
        Fe = new RegExp(
          "^" + ze + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ze + "+$",
          "g"
        );
      function We(e, t, n) {
        var r,
          i,
          o,
          s,
          a = Pe.test(t),
          l = e.style;
        return (
          (n = n || Re(e)) &&
            ((s = n.getPropertyValue(t) || n[t]),
            a && s && (s = s.replace(Fe, "$1") || void 0),
            "" !== s || ie(e) || (s = w.style(e, t)),
            !f.pixelBoxStyles() &&
              Ie.test(s) &&
              Ue.test(t) &&
              ((r = l.width),
              (i = l.minWidth),
              (o = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = s),
              (s = n.width),
              (l.width = r),
              (l.minWidth = i),
              (l.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function Be(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              re.appendChild(c).appendChild(u);
            var t = e.getComputedStyle(u);
            (r = "1%" !== t.top),
              (l = 12 === n(t.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === n(t.right)),
              (i = 36 === n(t.width)),
              (u.style.position = "absolute"),
              (o = 12 === n(u.offsetWidth / 3)),
              re.removeChild(c),
              (u = null);
          }
        }
        function n(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          s,
          a,
          l,
          c = m.createElement("div"),
          u = m.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (f.clearCloneStyle = "content-box" === u.style.backgroundClip),
          w.extend(f, {
            boxSizingReliable: function () {
              return t(), i;
            },
            pixelBoxStyles: function () {
              return t(), s;
            },
            pixelPosition: function () {
              return t(), r;
            },
            reliableMarginLeft: function () {
              return t(), l;
            },
            scrollboxSize: function () {
              return t(), o;
            },
            reliableTrDimensions: function () {
              var t, n, r, i;
              return (
                null == a &&
                  ((t = m.createElement("table")),
                  (n = m.createElement("tr")),
                  (r = m.createElement("div")),
                  (t.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (n.style.cssText = "border:1px solid"),
                  (n.style.height = "1px"),
                  (r.style.height = "9px"),
                  (r.style.display = "block"),
                  re.appendChild(t).appendChild(n).appendChild(r),
                  (i = e.getComputedStyle(n)),
                  (a =
                    parseInt(i.height, 10) +
                      parseInt(i.borderTopWidth, 10) +
                      parseInt(i.borderBottomWidth, 10) ===
                    n.offsetHeight),
                  re.removeChild(t)),
                a
              );
            },
          }));
      })();
      var Ge = ["Webkit", "Moz", "ms"],
        Ye = m.createElement("div").style,
        Xe = {};
      function Ve(e) {
        var t = w.cssProps[e] || Xe[e];
        return (
          t ||
          (e in Ye
            ? e
            : (Xe[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                    n--;

                  )
                    if ((e = Ge[n] + t) in Ye) return e;
                })(e) || e))
        );
      }
      var Ke = /^(none|table(?!-c[ea]).+)/,
        Qe = { position: "absolute", visibility: "hidden", display: "block" },
        Ze = { letterSpacing: "0", fontWeight: "400" };
      function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function et(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += w.css(e, n + ne[s], !0, i)),
            r
              ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, i)),
                "margin" !== n &&
                  (l -= w.css(e, "border" + ne[s] + "Width", !0, i)))
              : ((l += w.css(e, "padding" + ne[s], !0, i)),
                "padding" !== n
                  ? (l += w.css(e, "border" + ne[s] + "Width", !0, i))
                  : (a += w.css(e, "border" + ne[s] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function tt(e, t, n) {
        var r = Re(e),
          i =
            (!f.boxSizingReliable() || n) &&
            "border-box" === w.css(e, "boxSizing", !1, r),
          o = i,
          s = We(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ie.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!f.boxSizingReliable() && i) ||
            (!f.reliableTrDimensions() && S(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === w.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === w.css(e, "boxSizing", !1, r)),
            (o = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            et(e, t, n || (i ? "border" : "content"), o, r, s) +
            "px"
        );
      }
      function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
      }
      w.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = We(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              s,
              a = G(t),
              l = Pe.test(t),
              c = e.style;
            if (
              (l || (t = Ve(a)),
              (s = w.cssHooks[t] || w.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                ? i
                : c[t];
            "string" === (o = typeof n) &&
              (i = te.exec(n)) &&
              i[1] &&
              ((n = ae(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (i && i[3]) || (w.cssNumber[a] ? "" : "px")),
                f.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            s,
            a = G(t);
          return (
            Pe.test(t) || (t = Ve(a)),
            (s = w.cssHooks[t] || w.cssHooks[a]) &&
              "get" in s &&
              (i = s.get(e, !0, n)),
            void 0 === i && (i = We(e, t, r)),
            "normal" === i && t in Ze && (i = Ze[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        w.each(["height", "width"], function (e, t) {
          w.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ke.test(w.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? tt(e, t, r)
                  : Me(e, Qe, function () {
                      return tt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = Re(e),
                s = !f.scrollboxSize() && "absolute" === o.position,
                a = (s || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                l = r ? et(e, t, r, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      et(e, t, "border", !1, o) -
                      0.5
                  )),
                l &&
                  (i = te.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = w.css(e, t))),
                Je(0, n, l)
              );
            },
          };
        }),
        (w.cssHooks.marginLeft = Be(f.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(We(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Me(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (w.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (w.cssHooks[e + t].set = Je);
        }),
        w.fn.extend({
          css: function (e, t) {
            return z(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (r = Re(e), i = t.length; s < i; s++)
                    o[t[s]] = w.css(e, t[s], !1, r);
                  return o;
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (w.Tween = nt),
        (nt.prototype = {
          constructor: nt,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || w.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (w.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = nt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    w.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : nt.propHooks._default.set(this),
              this
            );
          },
        }),
        (nt.prototype.init.prototype = nt.prototype),
        (nt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              w.fx.step[e.prop]
                ? w.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!w.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : w.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (w.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (w.fx = nt.prototype.init),
        (w.fx.step = {});
      var rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
      function at() {
        it &&
          (!1 === m.hidden && e.requestAnimationFrame
            ? e.requestAnimationFrame(at)
            : e.setTimeout(at, w.fx.interval),
          w.fx.tick());
      }
      function lt() {
        return (
          e.setTimeout(function () {
            rt = void 0;
          }),
          (rt = Date.now())
        );
      }
      function ct(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function ut(e, t, n) {
        for (
          var r,
            i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
            o = 0,
            s = i.length;
          o < s;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function pt(e, t, n) {
        var r,
          i,
          o = 0,
          s = pt.prefilters.length,
          a = w.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (i) return !1;
            for (
              var t = rt || lt(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = 1 - (n / c.duration || 0),
                o = 0,
                s = c.tweens.length;
              o < s;
              o++
            )
              c.tweens[o].run(r);
            return (
              a.notifyWith(e, [c, r, n]),
              r < 1 && s
                ? n
                : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(
              !0,
              { specialEasing: {}, easing: w.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: rt || lt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = w.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, r, i, o, s;
            for (n in e)
              if (
                ((i = t[(r = G(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = w.cssHooks[r]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(u, c.opts.specialEasing);
          o < s;
          o++
        )
          if ((r = pt.prefilters[o].call(c, e, u, c.opts)))
            return (
              h(r.stop) &&
                (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          w.map(u, ut, c),
          h(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (w.Animation = w.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ae(n.elem, e, te.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          h(e) ? ((t = e), (e = ["*"])) : (e = e.match(N));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              c,
              u,
              p = "width" in t || "height" in t,
              d = this,
              f = {},
              h = e.style,
              g = e.nodeType && se(e),
              m = V.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (s = w._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function () {
                d.always(function () {
                  s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), ot.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (g ? "hide" : "show"))
                ) {
                  if ("show" !== i || !m || void 0 === m[r]) continue;
                  g = !0;
                }
                f[r] = (m && m[r]) || w.style(e, r);
              }
            if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
              for (r in (p &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = m && m.display) && (c = V.get(e, "display")),
                "none" === (u = w.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (ue([e], !0),
                      (c = e.style.display || c),
                      (u = w.css(e, "display")),
                      ue([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === w.css(e, "float") &&
                  (l ||
                    (d.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = V.access(e, "fxshow", { display: c })),
                  o && (m.hidden = !g),
                  g && ue([e], !0),
                  d.done(function () {
                    for (r in (g || ue([e]), V.remove(e, "fxshow"), f))
                      w.style(e, r, f[r]);
                  })),
                  (l = ut(g ? m[r] : 0, r, d)),
                  r in m ||
                    ((m[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (w.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? w.extend({}, e)
              : {
                  complete: n || (!n && t) || (h(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !h(t) && t),
                };
          return (
            w.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in w.fx.speeds
                  ? (r.duration = w.fx.speeds[r.duration])
                  : (r.duration = w.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              h(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
            }),
            r
          );
        }),
        w.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(se)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e),
              o = w.speed(t, n, r),
              s = function () {
                var t = pt(this, w.extend({}, e), o);
                (i || V.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = w.timers,
                  s = V.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && st.test(i) && r(s[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || w.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = V.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = w.timers,
                  s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    w.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
          var n = w.fn[t];
          w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ct(t, !0), e, r, i);
          };
        }),
        w.each(
          {
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            w.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (w.timers = []),
        (w.fx.tick = function () {
          var e,
            t = 0,
            n = w.timers;
          for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), (rt = void 0);
        }),
        (w.fx.timer = function (e) {
          w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
          it || ((it = !0), at());
        }),
        (w.fx.stop = function () {
          it = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
          return (
            (t = (w.fx && w.fx.speeds[t]) || t),
            (n = n || "fx"),
            this.queue(n, function (n, r) {
              var i = e.setTimeout(n, t);
              r.stop = function () {
                e.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = m.createElement("input"),
            t = m
              .createElement("select")
              .appendChild(m.createElement("option"));
          (e.type = "checkbox"),
            (f.checkOn = "" !== e.value),
            (f.optSelected = t.selected),
            ((e = m.createElement("input")).value = "t"),
            (e.type = "radio"),
            (f.radioValue = "t" === e.value);
        })();
      var dt,
        ft = w.expr.attrHandle;
      w.fn.extend({
        attr: function (e, t) {
          return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            w.removeAttr(this, e);
          });
        },
      }),
        w.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? w.prop(e, t, n)
                : ((1 === o && w.isXMLDoc(e)) ||
                    (i =
                      w.attrHooks[t.toLowerCase()] ||
                      (w.expr.match.bool.test(t) ? dt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void w.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = w.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!f.radioValue && "radio" === t && S(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(N);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (dt = {
          set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = ft[t] || w.find.attr;
          ft[t] = function (e, t, r) {
            var i,
              o,
              s = t.toLowerCase();
            return (
              r ||
                ((o = ft[s]),
                (ft[s] = i),
                (i = null != n(e, t, r) ? s : null),
                (ft[s] = o)),
              i
            );
          };
        });
      var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
      function mt(e) {
        return (e.match(N) || []).join(" ");
      }
      function vt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function yt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(N)) || [];
      }
      w.fn.extend({
        prop: function (e, t) {
          return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[w.propFix[e] || e];
          });
        },
      }),
        w.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && w.isXMLDoc(e)) ||
                  ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = w.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        f.optSelected ||
          (w.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        w.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            w.propFix[this.toLowerCase()] = this;
          }
        ),
        w.fn.extend({
          addClass: function (e) {
            var t, n, r, i, o, s;
            return h(e)
              ? this.each(function (t) {
                  w(this).addClass(e.call(this, t, vt(this)));
                })
              : (t = yt(e)).length
              ? this.each(function () {
                  if (
                    ((r = vt(this)),
                    (n = 1 === this.nodeType && " " + mt(r) + " "))
                  ) {
                    for (o = 0; o < t.length; o++)
                      (i = t[o]),
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    (s = mt(n)), r !== s && this.setAttribute("class", s);
                  }
                })
              : this;
          },
          removeClass: function (e) {
            var t, n, r, i, o, s;
            return h(e)
              ? this.each(function (t) {
                  w(this).removeClass(e.call(this, t, vt(this)));
                })
              : arguments.length
              ? (t = yt(e)).length
                ? this.each(function () {
                    if (
                      ((r = vt(this)),
                      (n = 1 === this.nodeType && " " + mt(r) + " "))
                    ) {
                      for (o = 0; o < t.length; o++)
                        for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                          n = n.replace(" " + i + " ", " ");
                      (s = mt(n)), r !== s && this.setAttribute("class", s);
                    }
                  })
                : this
              : this.attr("class", "");
          },
          toggleClass: function (e, t) {
            var n,
              r,
              i,
              o,
              s = typeof e,
              a = "string" === s || Array.isArray(e);
            return h(e)
              ? this.each(function (n) {
                  w(this).toggleClass(e.call(this, n, vt(this), t), t);
                })
              : "boolean" == typeof t && a
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : ((n = yt(e)),
                this.each(function () {
                  if (a)
                    for (o = w(this), i = 0; i < n.length; i++)
                      (r = n[i]),
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                  else
                    (void 0 !== e && "boolean" !== s) ||
                      ((r = vt(this)) && V.set(this, "__className__", r),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          r || !1 === e
                            ? ""
                            : V.get(this, "__className__") || ""
                        ));
                }));
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var bt = /\r/g;
      w.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = h(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, w(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = w.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    w.valHooks[this.type] ||
                    w.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(bt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        w.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = w.find.attr(e, "value");
                return null != t ? t : mt(w.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : i.length;
                for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
                  ) {
                    if (((t = w(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = w.makeArray(t), s = i.length;
                  s--;

                )
                  ((r = i[s]).selected =
                    w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        w.each(["radio", "checkbox"], function () {
          (w.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = w.inArray(w(e).val(), t) > -1);
            },
          }),
            f.checkOn ||
              (w.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (f.focusin = "onfocusin" in e);
      var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
          e.stopPropagation();
        };
      w.extend(w.event, {
        trigger: function (t, n, r, i) {
          var o,
            s,
            a,
            l,
            c,
            p,
            d,
            f,
            v = [r || m],
            y = u.call(t, "type") ? t.type : t,
            b = u.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((s = f = a = r = r || m),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !xt.test(y + w.event.triggered) &&
              (y.indexOf(".") > -1 &&
                ((b = y.split(".")), (y = b.shift()), b.sort()),
              (c = y.indexOf(":") < 0 && "on" + y),
              ((t = t[w.expando]
                ? t
                : new w.Event(y, "object" == typeof t && t)).isTrigger = i
                ? 2
                : 3),
              (t.namespace = b.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = r),
              (n = null == n ? [t] : w.makeArray(n, [t])),
              (d = w.event.special[y] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, n)))
          ) {
            if (!i && !d.noBubble && !g(r)) {
              for (
                l = d.delegateType || y, xt.test(l + y) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                v.push(s), (a = s);
              a === (r.ownerDocument || m) &&
                v.push(a.defaultView || a.parentWindow || e);
            }
            for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
              (f = s),
                (t.type = o > 1 ? l : d.bindType || y),
                (p =
                  (V.get(s, "events") || Object.create(null))[t.type] &&
                  V.get(s, "handle")) && p.apply(s, n),
                (p = c && s[c]) &&
                  p.apply &&
                  Y(s) &&
                  ((t.result = p.apply(s, n)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = y),
              i ||
                t.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                !Y(r) ||
                (c &&
                  h(r[y]) &&
                  !g(r) &&
                  ((a = r[c]) && (r[c] = null),
                  (w.event.triggered = y),
                  t.isPropagationStopped() && f.addEventListener(y, wt),
                  r[y](),
                  t.isPropagationStopped() && f.removeEventListener(y, wt),
                  (w.event.triggered = void 0),
                  a && (r[c] = a))),
              t.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
          w.event.trigger(r, null, t);
        },
      }),
        w.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              w.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0);
          },
        }),
        f.focusin ||
          w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              w.event.simulate(t, e.target, w.event.fix(e));
            };
            w.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = V.access(r, t);
                i || r.addEventListener(e, n, !0), V.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = V.access(r, t) - 1;
                i
                  ? V.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), V.remove(r, t));
              },
            };
          });
      var _t = e.location,
        Tt = { guid: Date.now() },
        At = /\?/;
      w.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
          n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {}
        return (
          (r = n && n.getElementsByTagName("parsererror")[0]),
          (n && !r) ||
            w.error(
              "Invalid XML: " +
                (r
                  ? w
                      .map(r.childNodes, function (e) {
                        return e.textContent;
                      })
                      .join("\n")
                  : t)
            ),
          n
        );
      };
      var Ct = /\[\]$/,
        $t = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
      function Dt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          w.each(t, function (t, i) {
            n || Ct.test(e)
              ? r(e, i)
              : Dt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== b(t)) r(e, t);
        else for (i in t) Dt(e + "[" + i + "]", t[i], n, r);
      }
      (w.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = h(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
          w.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) Dt(n, e[n], t, i);
        return r.join("&");
      }),
        w.fn.extend({
          serialize: function () {
            return w.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = w.prop(this, "elements");
              return e ? w.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !w(this).is(":disabled") &&
                  Et.test(this.nodeName) &&
                  !St.test(e) &&
                  (this.checked || !fe.test(e))
                );
              })
              .map(function (e, t) {
                var n = w(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? w.map(n, function (e) {
                      return { name: t.name, value: e.replace($t, "\r\n") };
                    })
                  : { name: t.name, value: n.replace($t, "\r\n") };
              })
              .get();
          },
        });
      var Lt = /%20/g,
        kt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        Ht = {},
        It = {},
        Pt = "*/".concat("*"),
        Rt = m.createElement("a");
      function Mt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(N) || [];
          if (h(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Ut(e, t, n, r) {
        var i = {},
          o = e === It;
        function s(a) {
          var l;
          return (
            (i[a] = !0),
            w.each(e[a] || [], function (e, a) {
              var c = a(t, n, r);
              return "string" != typeof c || o || i[c]
                ? o
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!i["*"] && s("*"));
      }
      function zt(e, t) {
        var n,
          r,
          i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
      }
      (Rt.href = _t.href),
        w.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: _t.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                _t.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Pt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": w.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
          },
          ajaxPrefilter: Mt(Ht),
          ajaxTransport: Mt(It),
          ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var r,
              i,
              o,
              s,
              a,
              l,
              c,
              u,
              p,
              d,
              f = w.ajaxSetup({}, n),
              h = f.context || f,
              g = f.context && (h.nodeType || h.jquery) ? w(h) : w.event,
              v = w.Deferred(),
              y = w.Callbacks("once memory"),
              b = f.statusCode || {},
              x = {},
              _ = {},
              T = "canceled",
              A = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!s)
                      for (s = {}; (t = Ot.exec(o)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) A.always(e[A.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return r && r.abort(t), C(0, t), this;
                },
              };
            if (
              (v.promise(A),
              (f.url = ((t || f.url || _t.href) + "").replace(
                Nt,
                _t.protocol + "//"
              )),
              (f.type = n.method || n.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              l = m.createElement("a");
              try {
                (l.href = f.url),
                  (l.href = l.href),
                  (f.crossDomain =
                    Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = w.param(f.data, f.traditional)),
              Ut(Ht, f, n, A),
              c)
            )
              return A;
            for (p in ((u = w.event && f.global) &&
              0 == w.active++ &&
              w.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !qt.test(f.type)),
            (i = f.url.replace(kt, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(Lt, "+"))
              : ((d = f.url.slice(i.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((i += (At.test(i) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((i = i.replace(jt, "$1")),
                  (d = (At.test(i) ? "&" : "?") + "_=" + Tt.guid++ + d)),
                (f.url = i + d)),
            f.ifModified &&
              (w.lastModified[i] &&
                A.setRequestHeader("If-Modified-Since", w.lastModified[i]),
              w.etag[i] && A.setRequestHeader("If-None-Match", w.etag[i])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              n.contentType) &&
              A.setRequestHeader("Content-Type", f.contentType),
            A.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Pt + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              A.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, A, f) || c))
              return A.abort();
            if (
              ((T = "abort"),
              y.add(f.complete),
              A.done(f.success),
              A.fail(f.error),
              (r = Ut(It, f, n, A)))
            ) {
              if (((A.readyState = 1), u && g.trigger("ajaxSend", [A, f]), c))
                return A;
              f.async &&
                f.timeout > 0 &&
                (a = e.setTimeout(function () {
                  A.abort("timeout");
                }, f.timeout));
              try {
                (c = !1), r.send(x, C);
              } catch (e) {
                if (c) throw e;
                C(-1, e);
              }
            } else C(-1, "No Transport");
            function C(t, n, s, l) {
              var p,
                d,
                m,
                x,
                _,
                T = n;
              c ||
                ((c = !0),
                a && e.clearTimeout(a),
                (r = void 0),
                (o = l || ""),
                (A.readyState = t > 0 ? 4 : 0),
                (p = (t >= 200 && t < 300) || 304 === t),
                s &&
                  (x = (function (e, t, n) {
                    for (
                      var r, i, o, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in a)
                        if (a[i] && a[i].test(r)) {
                          l.unshift(i);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (i in n) {
                        if (!l[0] || e.converters[i + " " + l[0]]) {
                          o = i;
                          break;
                        }
                        s || (s = i);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(f, A, s)),
                !p &&
                  w.inArray("script", f.dataTypes) > -1 &&
                  w.inArray("json", f.dataTypes) < 0 &&
                  (f.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (s in e.converters)
                      c[s.toLowerCase()] = e.converters[s];
                  for (o = u.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = u.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                          for (i in c)
                            if (
                              (a = i.split(" "))[1] === o &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[i])
                                : !0 !== c[i] && ((o = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(f, x, A, p)),
                p
                  ? (f.ifModified &&
                      ((_ = A.getResponseHeader("Last-Modified")) &&
                        (w.lastModified[i] = _),
                      (_ = A.getResponseHeader("etag")) && (w.etag[i] = _)),
                    204 === t || "HEAD" === f.type
                      ? (T = "nocontent")
                      : 304 === t
                      ? (T = "notmodified")
                      : ((T = x.state), (d = x.data), (p = !(m = x.error))))
                  : ((m = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                (A.status = t),
                (A.statusText = (n || T) + ""),
                p ? v.resolveWith(h, [d, T, A]) : v.rejectWith(h, [A, T, m]),
                A.statusCode(b),
                (b = void 0),
                u &&
                  g.trigger(p ? "ajaxSuccess" : "ajaxError", [A, f, p ? d : m]),
                y.fireWith(h, [A, T]),
                u &&
                  (g.trigger("ajaxComplete", [A, f]),
                  --w.active || w.event.trigger("ajaxStop")));
            }
            return A;
          },
          getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
          },
        }),
        w.each(["get", "post"], function (e, t) {
          w[t] = function (e, n, r, i) {
            return (
              h(n) && ((i = i || r), (r = n), (n = void 0)),
              w.ajax(
                w.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  w.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        w.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (w._evalUrl = function (e, t, n) {
          return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              w.globalEval(e, t, n);
            },
          });
        }),
        w.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (h(e) && (e = e.call(this[0])),
                (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return h(e)
              ? this.each(function (t) {
                  w(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = w(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = h(e);
            return this.each(function (n) {
              w(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  w(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (w.expr.pseudos.hidden = function (e) {
          return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (w.ajaxSettings.xhr = function () {
          try {
            return new e.XMLHttpRequest();
          } catch (e) {}
        });
      var Ft = { 0: 200, 1223: 204 },
        Wt = w.ajaxSettings.xhr();
      (f.cors = !!Wt && "withCredentials" in Wt),
        (f.ajax = Wt = !!Wt),
        w.ajaxTransport(function (t) {
          var n, r;
          if (f.cors || (Wt && !t.crossDomain))
            return {
              send: function (i, o) {
                var s,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  a.setRequestHeader(s, i[s]);
                (n = function (e) {
                  return function () {
                    n &&
                      ((n =
                        r =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            Ft[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = n()),
                  (r = a.onerror = a.ontimeout = n("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = r)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          e.setTimeout(function () {
                            n && r();
                          });
                      }),
                  (n = n("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (e) {
                  if (n) throw e;
                }
              },
              abort: function () {
                n && n();
              },
            };
        }),
        w.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return w.globalEval(e), e;
            },
          },
        }),
        w.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = w("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  m.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Bt,
        Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Gt.pop() || w.expando + "_" + Tt.guid++;
          return (this[e] = !0), e;
        },
      }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
          var i,
            o,
            s,
            a =
              !1 !== t.jsonp &&
              (Yt.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Yt.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (i = t.jsonpCallback =
                h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(Yt, "$1" + i))
                : !1 !== t.jsonp &&
                  (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
              (t.converters["script json"] = function () {
                return s || w.error(i + " was not called"), s[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = e[i]),
              (e[i] = function () {
                s = arguments;
              }),
              r.always(function () {
                void 0 === o ? w(e).removeProp(i) : (e[i] = o),
                  t[i] && ((t.jsonpCallback = n.jsonpCallback), Gt.push(i)),
                  s && h(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (f.createHTMLDocument =
          (((Bt = m.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Bt.childNodes.length)),
        (w.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (f.createHTMLDocument
                  ? (((r = (t =
                      m.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = m.location.href),
                    t.head.appendChild(r))
                  : (t = m)),
              (o = !n && []),
              (i = E.exec(e))
                ? [t.createElement(i[1])]
                : ((i = xe([e], t, o)),
                  o && o.length && w(o).remove(),
                  w.merge([], i.childNodes)));
          var r, i, o;
        }),
        (w.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((r = mt(e.slice(a))), (e = e.slice(0, a))),
            h(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            s.length > 0 &&
              w
                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (w.expr.pseudos.animated = function (e) {
          return w.grep(w.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (w.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              c = w.css(e, "position"),
              u = w(e),
              p = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (o = w.css(e, "top")),
              (l = w.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (o + l).indexOf("auto") > -1
                ? ((s = (r = u.position()).top), (i = r.left))
                : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              h(t) && (t = t.call(e, n, w.extend({}, a))),
              null != t.top && (p.top = t.top - a.top + s),
              null != t.left && (p.left = t.left - a.left + i),
              "using" in t ? t.using.call(e, p) : u.css(p);
          },
        }),
        w.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    w.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === w.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === w.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
                  (i.left += w.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - w.css(r, "marginTop", !0),
                left: t.left - i.left - w.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === w.css(e, "position");

              )
                e = e.offsetParent;
              return e || re;
            });
          },
        }),
        w.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
              return z(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        w.each(["top", "left"], function (e, t) {
          w.cssHooks[t] = Be(f.pixelPosition, function (e, n) {
            if (n)
              return (n = We(e, t)), Ie.test(n) ? w(e).position()[t] + "px" : n;
          });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
          w.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              w.fn[r] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                  a = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(
                  this,
                  function (t, n, i) {
                    var o;
                    return g(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? w.css(t, n, a)
                      : w.style(t, n, i, a);
                  },
                  t,
                  s ? i : void 0,
                  s
                );
              };
            }
          );
        }),
        w.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            w.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        w.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        w.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            w.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Xt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (w.proxy = function (e, t) {
        var n, r, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
          return (
            (r = i.call(arguments, 2)),
            (o = function () {
              return e.apply(t || this, r.concat(i.call(arguments)));
            }),
            (o.guid = e.guid = e.guid || w.guid++),
            o
          );
      }),
        (w.holdReady = function (e) {
          e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = S),
        (w.isFunction = h),
        (w.isWindow = g),
        (w.camelCase = G),
        (w.type = b),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
          var t = w.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (w.trim = function (e) {
          return null == e ? "" : (e + "").replace(Xt, "$1");
        }),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return w;
          });
      var Vt = e.jQuery,
        Kt = e.$;
      return (
        (w.noConflict = function (t) {
          return (
            e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Vt), w
          );
        }),
        void 0 === t && (e.jQuery = e.$ = w),
        w
      );
    });
  });
var o,
  s = i("601zH"),
  a = {};
(o = function (e) {
  var t = (function () {
      if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
        var t = e.fn.select2.amd;
      var n, r, i;
      return (
        (t && t.requirejs) ||
          (t ? (r = t) : (t = {}),
          (function (e) {
            var t,
              o,
              s,
              a,
              l = {},
              c = {},
              u = {},
              p = {},
              d = Object.prototype.hasOwnProperty,
              f = [].slice,
              h = /\.js$/;
            function g(e, t) {
              return d.call(e, t);
            }
            function m(e, t) {
              var n,
                r,
                i,
                o,
                s,
                a,
                l,
                c,
                p,
                d,
                f,
                g = t && t.split("/"),
                m = u.map,
                v = (m && m["*"]) || {};
              if (e) {
                for (
                  s = (e = e.split("/")).length - 1,
                    u.nodeIdCompat &&
                      h.test(e[s]) &&
                      (e[s] = e[s].replace(h, "")),
                    "." === e[0].charAt(0) &&
                      g &&
                      (e = g.slice(0, g.length - 1).concat(e)),
                    p = 0;
                  p < e.length;
                  p++
                )
                  if ("." === (f = e[p])) e.splice(p, 1), (p -= 1);
                  else if (".." === f) {
                    if (
                      0 === p ||
                      (1 === p && ".." === e[2]) ||
                      ".." === e[p - 1]
                    )
                      continue;
                    p > 0 && (e.splice(p - 1, 2), (p -= 2));
                  }
                e = e.join("/");
              }
              if ((g || v) && m) {
                for (p = (n = e.split("/")).length; p > 0; p -= 1) {
                  if (((r = n.slice(0, p).join("/")), g))
                    for (d = g.length; d > 0; d -= 1)
                      if ((i = m[g.slice(0, d).join("/")]) && (i = i[r])) {
                        (o = i), (a = p);
                        break;
                      }
                  if (o) break;
                  !l && v && v[r] && ((l = v[r]), (c = p));
                }
                !o && l && ((o = l), (a = c)),
                  o && (n.splice(0, a, o), (e = n.join("/")));
              }
              return e;
            }
            function v(t, n) {
              return function () {
                var r = f.call(arguments, 0);
                return (
                  "string" != typeof r[0] && 1 === r.length && r.push(null),
                  o.apply(e, r.concat([t, n]))
                );
              };
            }
            function y(e) {
              return function (t) {
                l[e] = t;
              };
            }
            function b(n) {
              if (g(c, n)) {
                var r = c[n];
                delete c[n], (p[n] = !0), t.apply(e, r);
              }
              if (!g(l, n) && !g(p, n)) throw new Error("No " + n);
              return l[n];
            }
            function x(e) {
              var t,
                n = e ? e.indexOf("!") : -1;
              return (
                n > -1 &&
                  ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
                [t, e]
              );
            }
            function w(e) {
              return e ? x(e) : [];
            }
            function _(e) {
              return function () {
                return (u && u.config && u.config[e]) || {};
              };
            }
            (s = function (e, t) {
              var n,
                r,
                i = x(e),
                o = i[0],
                s = t[1];
              return (
                (e = i[1]),
                o && (n = b((o = m(o, s)))),
                o
                  ? (e =
                      n && n.normalize
                        ? n.normalize(
                            e,
                            ((r = s),
                            function (e) {
                              return m(e, r);
                            })
                          )
                        : m(e, s))
                  : ((o = (i = x((e = m(e, s))))[0]),
                    (e = i[1]),
                    o && (n = b(o))),
                { f: o ? o + "!" + e : e, n: e, pr: o, p: n }
              );
            }),
              (a = {
                require: function (e) {
                  return v(e);
                },
                exports: function (e) {
                  var t = l[e];
                  return void 0 !== t ? t : (l[e] = {});
                },
                module: function (e) {
                  return { id: e, uri: "", exports: l[e], config: _(e) };
                },
              }),
              (t = function (t, n, r, i) {
                var o,
                  u,
                  d,
                  f,
                  h,
                  m,
                  x,
                  _ = [],
                  T = typeof r;
                if (
                  ((m = w((i = i || t))), "undefined" === T || "function" === T)
                ) {
                  for (
                    n =
                      !n.length && r.length
                        ? ["require", "exports", "module"]
                        : n,
                      h = 0;
                    h < n.length;
                    h += 1
                  )
                    if ("require" === (u = (f = s(n[h], m)).f))
                      _[h] = a.require(t);
                    else if ("exports" === u) (_[h] = a.exports(t)), (x = !0);
                    else if ("module" === u) o = _[h] = a.module(t);
                    else if (g(l, u) || g(c, u) || g(p, u)) _[h] = b(u);
                    else {
                      if (!f.p) throw new Error(t + " missing " + u);
                      f.p.load(f.n, v(i, !0), y(u), {}), (_[h] = l[u]);
                    }
                  (d = r ? r.apply(l[t], _) : void 0),
                    t &&
                      (o && o.exports !== e && o.exports !== l[t]
                        ? (l[t] = o.exports)
                        : (d === e && x) || (l[t] = d));
                } else t && (l[t] = r);
              }),
              (n =
                r =
                o =
                  function (n, r, i, l, c) {
                    if ("string" == typeof n)
                      return a[n] ? a[n](r) : b(s(n, w(r)).f);
                    if (!n.splice) {
                      if (((u = n).deps && o(u.deps, u.callback), !r)) return;
                      r.splice ? ((n = r), (r = i), (i = null)) : (n = e);
                    }
                    return (
                      (r = r || function () {}),
                      "function" == typeof i && ((i = l), (l = c)),
                      l
                        ? t(e, n, r, i)
                        : setTimeout(function () {
                            t(e, n, r, i);
                          }, 4),
                      o
                    );
                  }),
              (o.config = function (e) {
                return o(e);
              }),
              (n._defined = l),
              ((i = function (e, t, n) {
                if ("string" != typeof e)
                  throw new Error(
                    "See almond README: incorrect module build, no module name"
                  );
                t.splice || ((n = t), (t = [])),
                  g(l, e) || g(c, e) || (c[e] = [e, t, n]);
              }).amd = { jQuery: !0 });
          })(),
          (t.requirejs = n),
          (t.require = r),
          (t.define = i)),
        t.define("almond", function () {}),
        t.define("jquery", [], function () {
          var t = e || $;
          return (
            null == t &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            t
          );
        }),
        t.define("select2/utils", ["jquery"], function (e) {
          var t = {};
          function n(e) {
            var t = e.prototype,
              n = [];
            for (var r in t)
              "function" == typeof t[r] && "constructor" !== r && n.push(r);
            return n;
          }
          (t.Extend = function (e, t) {
            var n = {}.hasOwnProperty;
            function r() {
              this.constructor = e;
            }
            for (var i in t) n.call(t, i) && (e[i] = t[i]);
            return (
              (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.__super__ = t.prototype),
              e
            );
          }),
            (t.Decorate = function (e, t) {
              var r = n(t),
                i = n(e);
              function o() {
                var n = Array.prototype.unshift,
                  r = t.prototype.constructor.length,
                  i = e.prototype.constructor;
                r > 0 &&
                  (n.call(arguments, e.prototype.constructor),
                  (i = t.prototype.constructor)),
                  i.apply(this, arguments);
              }
              (t.displayName = e.displayName),
                (o.prototype = new (function () {
                  this.constructor = o;
                })());
              for (var s = 0; s < i.length; s++) {
                var a = i[s];
                o.prototype[a] = e.prototype[a];
              }
              for (
                var l = function (e) {
                    var n = function () {};
                    (e in o.prototype) && (n = o.prototype[e]);
                    var r = t.prototype[e];
                    return function () {
                      return (
                        Array.prototype.unshift.call(arguments, n),
                        r.apply(this, arguments)
                      );
                    };
                  },
                  c = 0;
                c < r.length;
                c++
              ) {
                var u = r[c];
                o.prototype[u] = l(u);
              }
              return o;
            });
          var r = function () {
            this.listeners = {};
          };
          (r.prototype.on = function (e, t) {
            (this.listeners = this.listeners || {}),
              e in this.listeners
                ? this.listeners[e].push(t)
                : (this.listeners[e] = [t]);
          }),
            (r.prototype.trigger = function (e) {
              var t = Array.prototype.slice,
                n = t.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                null == n && (n = []),
                0 === n.length && n.push({}),
                (n[0]._type = e),
                e in this.listeners &&
                  this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (r.prototype.invoke = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) e[n].apply(this, t);
            }),
            (t.Observable = r),
            (t.generateChars = function (e) {
              for (var t = "", n = 0; n < e; n++)
                t += Math.floor(36 * Math.random()).toString(36);
              return t;
            }),
            (t.bind = function (e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }),
            (t._convertData = function (e) {
              for (var t in e) {
                var n = t.split("-"),
                  r = e;
                if (1 !== n.length) {
                  for (var i = 0; i < n.length; i++) {
                    var o = n[i];
                    (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in
                      r || (r[o] = {}),
                      i == n.length - 1 && (r[o] = e[t]),
                      (r = r[o]);
                  }
                  delete e[t];
                }
              }
              return e;
            }),
            (t.hasScroll = function (t, n) {
              var r = e(n),
                i = n.style.overflowX,
                o = n.style.overflowY;
              return (
                (i !== o || ("hidden" !== o && "visible" !== o)) &&
                ("scroll" === i ||
                  "scroll" === o ||
                  r.innerHeight() < n.scrollHeight ||
                  r.innerWidth() < n.scrollWidth)
              );
            }),
            (t.escapeMarkup = function (e) {
              var t = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;",
              };
              return "string" != typeof e
                ? e
                : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e];
                  });
            }),
            (t.__cache = {});
          var i = 0;
          return (
            (t.GetUniqueElementId = function (e) {
              var n = e.getAttribute("data-select2-id");
              return (
                null != n ||
                  ((n = e.id
                    ? "select2-data-" + e.id
                    : "select2-data-" +
                      (++i).toString() +
                      "-" +
                      t.generateChars(4)),
                  e.setAttribute("data-select2-id", n)),
                n
              );
            }),
            (t.StoreData = function (e, n, r) {
              var i = t.GetUniqueElementId(e);
              t.__cache[i] || (t.__cache[i] = {}), (t.__cache[i][n] = r);
            }),
            (t.GetData = function (n, r) {
              var i = t.GetUniqueElementId(n);
              return r
                ? t.__cache[i] && null != t.__cache[i][r]
                  ? t.__cache[i][r]
                  : e(n).data(r)
                : t.__cache[i];
            }),
            (t.RemoveData = function (e) {
              var n = t.GetUniqueElementId(e);
              null != t.__cache[n] && delete t.__cache[n],
                e.removeAttribute("data-select2-id");
            }),
            (t.copyNonInternalCssClasses = function (e, t) {
              var n = e.getAttribute("class").trim().split(/\s+/);
              n = n.filter(function (e) {
                return 0 === e.indexOf("select2-");
              });
              var r = t.getAttribute("class").trim().split(/\s+/);
              r = r.filter(function (e) {
                return 0 !== e.indexOf("select2-");
              });
              var i = n.concat(r);
              e.setAttribute("class", i.join(" "));
            }),
            t
          );
        }),
        t.define("select2/results", ["jquery", "./utils"], function (e, t) {
          function n(e, t, r) {
            (this.$element = e),
              (this.data = r),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            t.Extend(n, t.Observable),
            (n.prototype.render = function () {
              var t = e(
                '<ul class="select2-results__options" role="listbox"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  t.attr("aria-multiselectable", "true"),
                (this.$results = t),
                t
              );
            }),
            (n.prototype.clear = function () {
              this.$results.empty();
            }),
            (n.prototype.displayMessage = function (t) {
              var n = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var r = e(
                  '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                ),
                i = this.options.get("translations").get(t.message);
              r.append(n(i(t.args))),
                (r[0].className += " select2-results__message"),
                this.$results.append(r);
            }),
            (n.prototype.hideMessages = function () {
              this.$results.find(".select2-results__message").remove();
            }),
            (n.prototype.append = function (e) {
              this.hideLoading();
              var t = [];
              if (null != e.results && 0 !== e.results.length) {
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                  var r = e.results[n],
                    i = this.option(r);
                  t.push(i);
                }
                this.$results.append(t);
              } else
                0 === this.$results.children().length &&
                  this.trigger("results:message", { message: "noResults" });
            }),
            (n.prototype.position = function (e, t) {
              t.find(".select2-results").append(e);
            }),
            (n.prototype.sort = function (e) {
              return this.options.get("sorter")(e);
            }),
            (n.prototype.highlightFirstItem = function () {
              var e = this.$results.find(
                  ".select2-results__option--selectable"
                ),
                t = e.filter(".select2-results__option--selected");
              t.length > 0
                ? t.first().trigger("mouseenter")
                : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (n.prototype.setClasses = function () {
              var n = this;
              this.data.current(function (r) {
                var i = r.map(function (e) {
                  return e.id.toString();
                });
                n.$results
                  .find(".select2-results__option--selectable")
                  .each(function () {
                    var n = e(this),
                      r = t.GetData(this, "data"),
                      o = "" + r.id;
                    (null != r.element && r.element.selected) ||
                    (null == r.element && i.indexOf(o) > -1)
                      ? (this.classList.add(
                          "select2-results__option--selected"
                        ),
                        n.attr("aria-selected", "true"))
                      : (this.classList.remove(
                          "select2-results__option--selected"
                        ),
                        n.attr("aria-selected", "false"));
                  });
              });
            }),
            (n.prototype.showLoading = function (e) {
              this.hideLoading();
              var t = {
                  disabled: !0,
                  loading: !0,
                  text: this.options.get("translations").get("searching")(e),
                },
                n = this.option(t);
              (n.className += " loading-results"), this.$results.prepend(n);
            }),
            (n.prototype.hideLoading = function () {
              this.$results.find(".loading-results").remove();
            }),
            (n.prototype.option = function (n) {
              var r = document.createElement("li");
              r.classList.add("select2-results__option"),
                r.classList.add("select2-results__option--selectable");
              var i = { role: "option" },
                o =
                  window.Element.prototype.matches ||
                  window.Element.prototype.msMatchesSelector ||
                  window.Element.prototype.webkitMatchesSelector;
              for (var s in (((null != n.element &&
                o.call(n.element, ":disabled")) ||
                (null == n.element && n.disabled)) &&
                ((i["aria-disabled"] = "true"),
                r.classList.remove("select2-results__option--selectable"),
                r.classList.add("select2-results__option--disabled")),
              null == n.id &&
                r.classList.remove("select2-results__option--selectable"),
              null != n._resultId && (r.id = n._resultId),
              n.title && (r.title = n.title),
              n.children &&
                ((i.role = "group"),
                (i["aria-label"] = n.text),
                r.classList.remove("select2-results__option--selectable"),
                r.classList.add("select2-results__option--group")),
              i)) {
                var a = i[s];
                r.setAttribute(s, a);
              }
              if (n.children) {
                var l = e(r),
                  c = document.createElement("strong");
                (c.className = "select2-results__group"), this.template(n, c);
                for (var u = [], p = 0; p < n.children.length; p++) {
                  var d = n.children[p],
                    f = this.option(d);
                  u.push(f);
                }
                var h = e("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                  role: "none",
                });
                h.append(u), l.append(c), l.append(h);
              } else this.template(n, r);
              return t.StoreData(r, "data", n), r;
            }),
            (n.prototype.bind = function (n, r) {
              var i = this,
                o = n.id + "-results";
              this.$results.attr("id", o),
                n.on("results:all", function (e) {
                  i.clear(),
                    i.append(e.data),
                    n.isOpen() && (i.setClasses(), i.highlightFirstItem());
                }),
                n.on("results:append", function (e) {
                  i.append(e.data), n.isOpen() && i.setClasses();
                }),
                n.on("query", function (e) {
                  i.hideMessages(), i.showLoading(e);
                }),
                n.on("select", function () {
                  n.isOpen() &&
                    (i.setClasses(),
                    i.options.get("scrollAfterSelect") &&
                      i.highlightFirstItem());
                }),
                n.on("unselect", function () {
                  n.isOpen() &&
                    (i.setClasses(),
                    i.options.get("scrollAfterSelect") &&
                      i.highlightFirstItem());
                }),
                n.on("open", function () {
                  i.$results.attr("aria-expanded", "true"),
                    i.$results.attr("aria-hidden", "false"),
                    i.setClasses(),
                    i.ensureHighlightVisible();
                }),
                n.on("close", function () {
                  i.$results.attr("aria-expanded", "false"),
                    i.$results.attr("aria-hidden", "true"),
                    i.$results.removeAttr("aria-activedescendant");
                }),
                n.on("results:toggle", function () {
                  var e = i.getHighlightedResults();
                  0 !== e.length && e.trigger("mouseup");
                }),
                n.on("results:select", function () {
                  var e = i.getHighlightedResults();
                  if (0 !== e.length) {
                    var n = t.GetData(e[0], "data");
                    e.hasClass("select2-results__option--selected")
                      ? i.trigger("close", {})
                      : i.trigger("select", { data: n });
                  }
                }),
                n.on("results:previous", function () {
                  var e = i.getHighlightedResults(),
                    t = i.$results.find(".select2-results__option--selectable"),
                    n = t.index(e);
                  if (!(n <= 0)) {
                    var r = n - 1;
                    0 === e.length && (r = 0);
                    var o = t.eq(r);
                    o.trigger("mouseenter");
                    var s = i.$results.offset().top,
                      a = o.offset().top,
                      l = i.$results.scrollTop() + (a - s);
                    0 === r
                      ? i.$results.scrollTop(0)
                      : a - s < 0 && i.$results.scrollTop(l);
                  }
                }),
                n.on("results:next", function () {
                  var e = i.getHighlightedResults(),
                    t = i.$results.find(".select2-results__option--selectable"),
                    n = t.index(e) + 1;
                  if (!(n >= t.length)) {
                    var r = t.eq(n);
                    r.trigger("mouseenter");
                    var o =
                        i.$results.offset().top + i.$results.outerHeight(!1),
                      s = r.offset().top + r.outerHeight(!1),
                      a = i.$results.scrollTop() + s - o;
                    0 === n
                      ? i.$results.scrollTop(0)
                      : s > o && i.$results.scrollTop(a);
                  }
                }),
                n.on("results:focus", function (e) {
                  e.element[0].classList.add(
                    "select2-results__option--highlighted"
                  ),
                    e.element[0].setAttribute("aria-selected", "true");
                }),
                n.on("results:message", function (e) {
                  i.displayMessage(e);
                }),
                e.fn.mousewheel &&
                  this.$results.on("mousewheel", function (e) {
                    var t = i.$results.scrollTop(),
                      n = i.$results.get(0).scrollHeight - t + e.deltaY,
                      r = e.deltaY > 0 && t - e.deltaY <= 0,
                      o = e.deltaY < 0 && n <= i.$results.height();
                    r
                      ? (i.$results.scrollTop(0),
                        e.preventDefault(),
                        e.stopPropagation())
                      : o &&
                        (i.$results.scrollTop(
                          i.$results.get(0).scrollHeight - i.$results.height()
                        ),
                        e.preventDefault(),
                        e.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option--selectable",
                  function (n) {
                    var r = e(this),
                      o = t.GetData(this, "data");
                    r.hasClass("select2-results__option--selected")
                      ? i.options.get("multiple")
                        ? i.trigger("unselect", { originalEvent: n, data: o })
                        : i.trigger("close", {})
                      : i.trigger("select", { originalEvent: n, data: o });
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option--selectable",
                  function (n) {
                    var r = t.GetData(this, "data");
                    i
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted")
                      .attr("aria-selected", "false"),
                      i.trigger("results:focus", { data: r, element: e(this) });
                  }
                );
            }),
            (n.prototype.getHighlightedResults = function () {
              return this.$results.find(
                ".select2-results__option--highlighted"
              );
            }),
            (n.prototype.destroy = function () {
              this.$results.remove();
            }),
            (n.prototype.ensureHighlightVisible = function () {
              var e = this.getHighlightedResults();
              if (0 !== e.length) {
                var t = this.$results
                    .find(".select2-results__option--selectable")
                    .index(e),
                  n = this.$results.offset().top,
                  r = e.offset().top,
                  i = this.$results.scrollTop() + (r - n),
                  o = r - n;
                (i -= 2 * e.outerHeight(!1)),
                  t <= 2
                    ? this.$results.scrollTop(0)
                    : (o > this.$results.outerHeight() || o < 0) &&
                      this.$results.scrollTop(i);
              }
            }),
            (n.prototype.template = function (t, n) {
              var r = this.options.get("templateResult"),
                i = this.options.get("escapeMarkup"),
                o = r(t, n);
              null == o
                ? (n.style.display = "none")
                : "string" == typeof o
                ? (n.innerHTML = i(o))
                : e(n).append(o);
            }),
            n
          );
        }),
        t.define("select2/keys", [], function () {
          return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          };
        }),
        t.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function (e, t, n) {
            function r(e, t) {
              (this.$element = e),
                (this.options = t),
                r.__super__.constructor.call(this);
            }
            return (
              t.Extend(r, t.Observable),
              (r.prototype.render = function () {
                var n = e(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != t.GetData(this.$element[0], "old-tabindex")
                    ? (this._tabindex = t.GetData(
                        this.$element[0],
                        "old-tabindex"
                      ))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  n.attr("title", this.$element.attr("title")),
                  n.attr("tabindex", this._tabindex),
                  n.attr("aria-disabled", "false"),
                  (this.$selection = n),
                  n
                );
              }),
              (r.prototype.bind = function (e, t) {
                var r = this,
                  i = e.id + "-results";
                (this.container = e),
                  this.$selection.on("focus", function (e) {
                    r.trigger("focus", e);
                  }),
                  this.$selection.on("blur", function (e) {
                    r._handleBlur(e);
                  }),
                  this.$selection.on("keydown", function (e) {
                    r.trigger("keypress", e),
                      e.which === n.SPACE && e.preventDefault();
                  }),
                  e.on("results:focus", function (e) {
                    r.$selection.attr(
                      "aria-activedescendant",
                      e.data._resultId
                    );
                  }),
                  e.on("selection:update", function (e) {
                    r.update(e.data);
                  }),
                  e.on("open", function () {
                    r.$selection.attr("aria-expanded", "true"),
                      r.$selection.attr("aria-owns", i),
                      r._attachCloseHandler(e);
                  }),
                  e.on("close", function () {
                    r.$selection.attr("aria-expanded", "false"),
                      r.$selection.removeAttr("aria-activedescendant"),
                      r.$selection.removeAttr("aria-owns"),
                      r.$selection.trigger("focus"),
                      r._detachCloseHandler(e);
                  }),
                  e.on("enable", function () {
                    r.$selection.attr("tabindex", r._tabindex),
                      r.$selection.attr("aria-disabled", "false");
                  }),
                  e.on("disable", function () {
                    r.$selection.attr("tabindex", "-1"),
                      r.$selection.attr("aria-disabled", "true");
                  });
              }),
              (r.prototype._handleBlur = function (t) {
                var n = this;
                window.setTimeout(function () {
                  document.activeElement == n.$selection[0] ||
                    e.contains(n.$selection[0], document.activeElement) ||
                    n.trigger("blur", t);
                }, 1);
              }),
              (r.prototype._attachCloseHandler = function (n) {
                e(document.body).on("mousedown.select2." + n.id, function (n) {
                  var r = e(n.target).closest(".select2");
                  e(".select2.select2-container--open").each(function () {
                    this != r[0] && t.GetData(this, "element").select2("close");
                  });
                });
              }),
              (r.prototype._detachCloseHandler = function (t) {
                e(document.body).off("mousedown.select2." + t.id);
              }),
              (r.prototype.position = function (e, t) {
                t.find(".selection").append(e);
              }),
              (r.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
              }),
              (r.prototype.update = function (e) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              (r.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (r.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              r
            );
          }
        ),
        t.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function (e, t, n, r) {
            function i() {
              i.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(i, t),
              (i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return (
                  e[0].classList.add("select2-selection--single"),
                  e.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  e
                );
              }),
              (i.prototype.bind = function (e, t) {
                var n = this;
                i.__super__.bind.apply(this, arguments);
                var r = e.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", r)
                  .attr("role", "textbox")
                  .attr("aria-readonly", "true"),
                  this.$selection.attr("aria-labelledby", r),
                  this.$selection.attr("aria-controls", r),
                  this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on("focus", function (e) {}),
                  this.$selection.on("blur", function (e) {}),
                  e.on("focus", function (t) {
                    e.isOpen() || n.$selection.trigger("focus");
                  });
              }),
              (i.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (i.prototype.selectionContainer = function () {
                return e("<span></span>");
              }),
              (i.prototype.update = function (e) {
                if (0 !== e.length) {
                  var t = e[0],
                    n = this.$selection.find(".select2-selection__rendered"),
                    r = this.display(t, n);
                  n.empty().append(r);
                  var i = t.title || t.text;
                  i ? n.attr("title", i) : n.removeAttr("title");
                } else this.clear();
              }),
              i
            );
          }
        ),
        t.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function (e, t, n) {
            function r(e, t) {
              r.__super__.constructor.apply(this, arguments);
            }
            return (
              n.Extend(r, t),
              (r.prototype.render = function () {
                var e = r.__super__.render.call(this);
                return (
                  e[0].classList.add("select2-selection--multiple"),
                  e.html('<ul class="select2-selection__rendered"></ul>'),
                  e
                );
              }),
              (r.prototype.bind = function (t, i) {
                var o = this;
                r.__super__.bind.apply(this, arguments);
                var s = t.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", s),
                  this.$selection.on("click", function (e) {
                    o.trigger("toggle", { originalEvent: e });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function (t) {
                      if (!o.isDisabled()) {
                        var r = e(this).parent(),
                          i = n.GetData(r[0], "data");
                        o.trigger("unselect", { originalEvent: t, data: i });
                      }
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-selection__choice__remove",
                    function (e) {
                      o.isDisabled() || e.stopPropagation();
                    }
                  );
              }),
              (r.prototype.clear = function () {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(), e.removeAttr("title");
              }),
              (r.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t));
              }),
              (r.prototype.selectionContainer = function () {
                return e(
                  '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                );
              }),
              (r.prototype.update = function (e) {
                if ((this.clear(), 0 !== e.length)) {
                  for (
                    var t = [],
                      r =
                        this.$selection
                          .find(".select2-selection__rendered")
                          .attr("id") + "-choice-",
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var o = e[i],
                      s = this.selectionContainer(),
                      a = this.display(o, s),
                      l = r + n.generateChars(4) + "-";
                    o.id ? (l += o.id) : (l += n.generateChars(4)),
                      s
                        .find(".select2-selection__choice__display")
                        .append(a)
                        .attr("id", l);
                    var c = o.title || o.text;
                    c && s.attr("title", c);
                    var u = this.options.get("translations").get("removeItem"),
                      p = s.find(".select2-selection__choice__remove");
                    p.attr("title", u()),
                      p.attr("aria-label", u()),
                      p.attr("aria-describedby", l),
                      n.StoreData(s[0], "data", o),
                      t.push(s);
                  }
                  this.$selection
                    .find(".select2-selection__rendered")
                    .append(t);
                }
              }),
              r
            );
          }
        ),
        t.define("select2/selection/placeholder", [], function () {
          function e(e, t, n) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n);
          }
          return (
            (e.prototype.normalizePlaceholder = function (e, t) {
              return "string" == typeof t && (t = { id: "", text: t }), t;
            }),
            (e.prototype.createPlaceholder = function (e, t) {
              var n = this.selectionContainer();
              n.html(this.display(t)),
                n[0].classList.add("select2-selection__placeholder"),
                n[0].classList.remove("select2-selection__choice");
              var r = t.title || t.text || n.text();
              return (
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("title", r),
                n
              );
            }),
            (e.prototype.update = function (e, t) {
              var n = 1 == t.length && t[0].id != this.placeholder.id;
              if (t.length > 1 || n) return e.call(this, t);
              this.clear();
              var r = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(r);
            }),
            e
          );
        }),
        t.define(
          "select2/selection/allowClear",
          ["jquery", "../keys", "../utils"],
          function (e, t, n) {
            function r() {}
            return (
              (r.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function (e) {
                      r._handleClear(e);
                    }
                  ),
                  t.on("keypress", function (e) {
                    r._handleKeyboardClear(e, t);
                  });
              }),
              (r.prototype._handleClear = function (e, t) {
                if (!this.isDisabled()) {
                  var r = this.$selection.find(".select2-selection__clear");
                  if (0 !== r.length) {
                    t.stopPropagation();
                    var i = n.GetData(r[0], "data"),
                      o = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var s = { data: i };
                    if ((this.trigger("clear", s), s.prevented))
                      this.$element.val(o);
                    else {
                      for (var a = 0; a < i.length; a++)
                        if (
                          ((s = { data: i[a] }),
                          this.trigger("unselect", s),
                          s.prevented)
                        )
                          return void this.$element.val(o);
                      this.$element.trigger("input").trigger("change"),
                        this.trigger("toggle", {});
                    }
                  }
                }
              }),
              (r.prototype._handleKeyboardClear = function (e, n, r) {
                r.isOpen() ||
                  (n.which != t.DELETE && n.which != t.BACKSPACE) ||
                  this._handleClear(n);
              }),
              (r.prototype.update = function (t, r) {
                if (
                  (t.call(this, r),
                  this.$selection.find(".select2-selection__clear").remove(),
                  this.$selection[0].classList.remove(
                    "select2-selection--clearable"
                  ),
                  !(
                    this.$selection.find(".select2-selection__placeholder")
                      .length > 0 || 0 === r.length
                  ))
                ) {
                  var i = this.$selection
                      .find(".select2-selection__rendered")
                      .attr("id"),
                    o = this.options.get("translations").get("removeAllItems"),
                    s = e(
                      '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                    );
                  s.attr("title", o()),
                    s.attr("aria-label", o()),
                    s.attr("aria-describedby", i),
                    n.StoreData(s[0], "data", r),
                    this.$selection.prepend(s),
                    this.$selection[0].classList.add(
                      "select2-selection--clearable"
                    );
                }
              }),
              r
            );
          }
        ),
        t.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function (e, t, n) {
            function r(e, t, n) {
              e.call(this, t, n);
            }
            return (
              (r.prototype.render = function (t) {
                var n = this.options.get("translations").get("search"),
                  r = e(
                    '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                  );
                (this.$searchContainer = r),
                  (this.$search = r.find("textarea")),
                  this.$search.prop(
                    "autocomplete",
                    this.options.get("autocomplete")
                  ),
                  this.$search.attr("aria-label", n());
                var i = t.call(this);
                return (
                  this._transferTabIndex(), i.append(this.$searchContainer), i
                );
              }),
              (r.prototype.bind = function (e, r, i) {
                var o = this,
                  s = r.id + "-results",
                  a = r.id + "-container";
                e.call(this, r, i),
                  o.$search.attr("aria-describedby", a),
                  r.on("open", function () {
                    o.$search.attr("aria-controls", s),
                      o.$search.trigger("focus");
                  }),
                  r.on("close", function () {
                    o.$search.val(""),
                      o.resizeSearch(),
                      o.$search.removeAttr("aria-controls"),
                      o.$search.removeAttr("aria-activedescendant"),
                      o.$search.trigger("focus");
                  }),
                  r.on("enable", function () {
                    o.$search.prop("disabled", !1), o._transferTabIndex();
                  }),
                  r.on("disable", function () {
                    o.$search.prop("disabled", !0);
                  }),
                  r.on("focus", function (e) {
                    o.$search.trigger("focus");
                  }),
                  r.on("results:focus", function (e) {
                    e.data._resultId
                      ? o.$search.attr(
                          "aria-activedescendant",
                          e.data._resultId
                        )
                      : o.$search.removeAttr("aria-activedescendant");
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function (e) {
                      o.trigger("focus", e);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function (e) {
                      o._handleBlur(e);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function (e) {
                      if (
                        (e.stopPropagation(),
                        o.trigger("keypress", e),
                        (o._keyUpPrevented = e.isDefaultPrevented()),
                        e.which === n.BACKSPACE && "" === o.$search.val())
                      ) {
                        var r = o.$selection
                          .find(".select2-selection__choice")
                          .last();
                        if (r.length > 0) {
                          var i = t.GetData(r[0], "data");
                          o.searchRemoveChoice(i), e.preventDefault();
                        }
                      }
                    }
                  ),
                  this.$selection.on(
                    "click",
                    ".select2-search--inline",
                    function (e) {
                      o.$search.val() && e.stopPropagation();
                    }
                  );
                var l = document.documentMode,
                  c = l && l <= 11;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function (e) {
                    c
                      ? o.$selection.off("input.search input.searchcheck")
                      : o.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function (e) {
                      if (c && "input" === e.type)
                        o.$selection.off("input.search input.searchcheck");
                      else {
                        var t = e.which;
                        t != n.SHIFT &&
                          t != n.CTRL &&
                          t != n.ALT &&
                          t != n.TAB &&
                          o.handleSearch(e);
                      }
                    }
                  );
              }),
              (r.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (r.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text);
              }),
              (r.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                  e.call(this, t),
                  this.resizeSearch(),
                  n && this.$search.trigger("focus");
              }),
              (r.prototype.handleSearch = function () {
                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                  var e = this.$search.val();
                  this.trigger("query", { term: e });
                }
                this._keyUpPrevented = !1;
              }),
              (r.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", { data: t }),
                  this.$search.val(t.text),
                  this.handleSearch();
              }),
              (r.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "100%";
                "" === this.$search.attr("placeholder") &&
                  (e = 0.75 * (this.$search.val().length + 1) + "em"),
                  this.$search.css("width", e);
              }),
              r
            );
          }
        ),
        t.define("select2/selection/selectionCss", ["../utils"], function (e) {
          function t() {}
          return (
            (t.prototype.render = function (t) {
              var n = t.call(this),
                r = this.options.get("selectionCssClass") || "";
              return (
                -1 !== r.indexOf(":all:") &&
                  ((r = r.replace(":all:", "")),
                  e.copyNonInternalCssClasses(n[0], this.$element[0])),
                n.addClass(r),
                n
              );
            }),
            t
          );
        }),
        t.define("select2/selection/eventRelay", ["jquery"], function (e) {
          function t() {}
          return (
            (t.prototype.bind = function (t, n, r) {
              var i = this,
                o = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting",
                  "clear",
                  "clearing",
                ],
                s = [
                  "opening",
                  "closing",
                  "selecting",
                  "unselecting",
                  "clearing",
                ];
              t.call(this, n, r),
                n.on("*", function (t, n) {
                  if (-1 !== o.indexOf(t)) {
                    n = n || {};
                    var r = e.Event("select2:" + t, { params: n });
                    i.$element.trigger(r),
                      -1 !== s.indexOf(t) &&
                        (n.prevented = r.isDefaultPrevented());
                  }
                });
            }),
            t
          );
        }),
        t.define("select2/translation", ["jquery", "require"], function (e, t) {
          function n(e) {
            this.dict = e || {};
          }
          return (
            (n.prototype.all = function () {
              return this.dict;
            }),
            (n.prototype.get = function (e) {
              return this.dict[e];
            }),
            (n.prototype.extend = function (t) {
              this.dict = e.extend({}, t.all(), this.dict);
            }),
            (n._cache = {}),
            (n.loadPath = function (e) {
              if (!(e in n._cache)) {
                var r = t(e);
                n._cache[e] = r;
              }
              return new n(n._cache[e]);
            }),
            n
          );
        }),
        t.define("select2/diacritics", [], function () {
          return {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Œ: "OE",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            œ: "oe",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ώ: "ω",
            ς: "σ",
            "’": "'",
          };
        }),
        t.define("select2/data/base", ["../utils"], function (e) {
          function t(e, n) {
            t.__super__.constructor.call(this);
          }
          return (
            e.Extend(t, e.Observable),
            (t.prototype.current = function (e) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (t.prototype.query = function (e, t) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (t.prototype.bind = function (e, t) {}),
            (t.prototype.destroy = function () {}),
            (t.prototype.generateResultId = function (t, n) {
              var r = t.id + "-result-";
              return (
                (r += e.generateChars(4)),
                null != n.id
                  ? (r += "-" + n.id.toString())
                  : (r += "-" + e.generateChars(4)),
                r
              );
            }),
            t
          );
        }),
        t.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function (e, t, n) {
            function r(e, t) {
              (this.$element = e),
                (this.options = t),
                r.__super__.constructor.call(this);
            }
            return (
              t.Extend(r, e),
              (r.prototype.current = function (e) {
                var t = this;
                e(
                  Array.prototype.map.call(
                    this.$element[0].querySelectorAll(":checked"),
                    function (e) {
                      return t.item(n(e));
                    }
                  )
                );
              }),
              (r.prototype.select = function (e) {
                var t = this;
                if (
                  ((e.selected = !0),
                  null != e.element &&
                    "option" === e.element.tagName.toLowerCase())
                )
                  return (
                    (e.element.selected = !0),
                    void this.$element.trigger("input").trigger("change")
                  );
                if (this.$element.prop("multiple"))
                  this.current(function (n) {
                    var r = [];
                    (e = [e]).push.apply(e, n);
                    for (var i = 0; i < e.length; i++) {
                      var o = e[i].id;
                      -1 === r.indexOf(o) && r.push(o);
                    }
                    t.$element.val(r),
                      t.$element.trigger("input").trigger("change");
                  });
                else {
                  var n = e.id;
                  this.$element.val(n),
                    this.$element.trigger("input").trigger("change");
                }
              }),
              (r.prototype.unselect = function (e) {
                var t = this;
                if (this.$element.prop("multiple")) {
                  if (
                    ((e.selected = !1),
                    null != e.element &&
                      "option" === e.element.tagName.toLowerCase())
                  )
                    return (
                      (e.element.selected = !1),
                      void this.$element.trigger("input").trigger("change")
                    );
                  this.current(function (n) {
                    for (var r = [], i = 0; i < n.length; i++) {
                      var o = n[i].id;
                      o !== e.id && -1 === r.indexOf(o) && r.push(o);
                    }
                    t.$element.val(r),
                      t.$element.trigger("input").trigger("change");
                  });
                }
              }),
              (r.prototype.bind = function (e, t) {
                var n = this;
                (this.container = e),
                  e.on("select", function (e) {
                    n.select(e.data);
                  }),
                  e.on("unselect", function (e) {
                    n.unselect(e.data);
                  });
              }),
              (r.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                  t.RemoveData(this);
                });
              }),
              (r.prototype.query = function (e, t) {
                var r = [],
                  i = this;
                this.$element.children().each(function () {
                  if (
                    "option" === this.tagName.toLowerCase() ||
                    "optgroup" === this.tagName.toLowerCase()
                  ) {
                    var t = n(this),
                      o = i.item(t),
                      s = i.matches(e, o);
                    null !== s && r.push(s);
                  }
                }),
                  t({ results: r });
              }),
              (r.prototype.addOptions = function (e) {
                this.$element.append(e);
              }),
              (r.prototype.option = function (e) {
                var r;
                e.children
                  ? ((r = document.createElement("optgroup")).label = e.text)
                  : void 0 !==
                    (r = document.createElement("option")).textContent
                  ? (r.textContent = e.text)
                  : (r.innerText = e.text),
                  void 0 !== e.id && (r.value = e.id),
                  e.disabled && (r.disabled = !0),
                  e.selected && (r.selected = !0),
                  e.title && (r.title = e.title);
                var i = this._normalizeItem(e);
                return (i.element = r), t.StoreData(r, "data", i), n(r);
              }),
              (r.prototype.item = function (e) {
                var r = {};
                if (null != (r = t.GetData(e[0], "data"))) return r;
                var i = e[0];
                if ("option" === i.tagName.toLowerCase())
                  r = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title"),
                  };
                else if ("optgroup" === i.tagName.toLowerCase()) {
                  r = {
                    text: e.prop("label"),
                    children: [],
                    title: e.prop("title"),
                  };
                  for (
                    var o = e.children("option"), s = [], a = 0;
                    a < o.length;
                    a++
                  ) {
                    var l = n(o[a]),
                      c = this.item(l);
                    s.push(c);
                  }
                  r.children = s;
                }
                return (
                  ((r = this._normalizeItem(r)).element = e[0]),
                  t.StoreData(e[0], "data", r),
                  r
                );
              }),
              (r.prototype._normalizeItem = function (e) {
                return (
                  e !== Object(e) && (e = { id: e, text: e }),
                  null != (e = n.extend({}, { text: "" }, e)).id &&
                    (e.id = e.id.toString()),
                  null != e.text && (e.text = e.text.toString()),
                  null == e._resultId &&
                    e.id &&
                    null != this.container &&
                    (e._resultId = this.generateResultId(this.container, e)),
                  n.extend({}, { selected: !1, disabled: !1 }, e)
                );
              }),
              (r.prototype.matches = function (e, t) {
                return this.options.get("matcher")(e, t);
              }),
              r
            );
          }
        ),
        t.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function (e, t, n) {
            function r(e, t) {
              (this._dataToConvert = t.get("data") || []),
                r.__super__.constructor.call(this, e, t);
            }
            return (
              t.Extend(r, e),
              (r.prototype.bind = function (e, t) {
                r.__super__.bind.call(this, e, t),
                  this.addOptions(this.convertToOptions(this._dataToConvert));
              }),
              (r.prototype.select = function (e) {
                var t = this.$element.find("option").filter(function (t, n) {
                  return n.value == e.id.toString();
                });
                0 === t.length && ((t = this.option(e)), this.addOptions(t)),
                  r.__super__.select.call(this, e);
              }),
              (r.prototype.convertToOptions = function (e) {
                var t = this,
                  r = this.$element.find("option"),
                  i = r
                    .map(function () {
                      return t.item(n(this)).id;
                    })
                    .get(),
                  o = [];
                function s(e) {
                  return function () {
                    return n(this).val() == e.id;
                  };
                }
                for (var a = 0; a < e.length; a++) {
                  var l = this._normalizeItem(e[a]);
                  if (i.indexOf(l.id) >= 0) {
                    var c = r.filter(s(l)),
                      u = this.item(c),
                      p = n.extend(!0, {}, l, u),
                      d = this.option(p);
                    c.replaceWith(d);
                  } else {
                    var f = this.option(l);
                    if (l.children) {
                      var h = this.convertToOptions(l.children);
                      f.append(h);
                    }
                    o.push(f);
                  }
                }
                return o;
              }),
              r
            );
          }
        ),
        t.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function (e, t, n) {
            function r(e, t) {
              (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                r.__super__.constructor.call(this, e, t);
            }
            return (
              t.Extend(r, e),
              (r.prototype._applyDefaults = function (e) {
                var t = {
                  data: function (e) {
                    return n.extend({}, e, { q: e.term });
                  },
                  transport: function (e, t, r) {
                    var i = n.ajax(e);
                    return i.then(t), i.fail(r), i;
                  },
                };
                return n.extend({}, t, e, !0);
              }),
              (r.prototype.processResults = function (e) {
                return e;
              }),
              (r.prototype.query = function (e, t) {
                var r = this;
                null != this._request &&
                  ("function" == typeof this._request.abort &&
                    this._request.abort(),
                  (this._request = null));
                var i = n.extend({ type: "GET" }, this.ajaxOptions);
                function o() {
                  var n = i.transport(
                    i,
                    function (n) {
                      var i = r.processResults(n, e);
                      r.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((i && i.results && Array.isArray(i.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        t(i);
                    },
                    function () {
                      (!("status" in n) ||
                        (0 !== n.status && "0" !== n.status)) &&
                        r.trigger("results:message", {
                          message: "errorLoading",
                        });
                    }
                  );
                  r._request = n;
                }
                "function" == typeof i.url &&
                  (i.url = i.url.call(this.$element, e)),
                  "function" == typeof i.data &&
                    (i.data = i.data.call(this.$element, e)),
                  this.ajaxOptions.delay && null != e.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        o,
                        this.ajaxOptions.delay
                      )))
                    : o();
              }),
              r
            );
          }
        ),
        t.define("select2/data/tags", ["jquery"], function (e) {
          function t(e, t, n) {
            var r = n.get("tags"),
              i = n.get("createTag");
            void 0 !== i && (this.createTag = i);
            var o = n.get("insertTag");
            if (
              (void 0 !== o && (this.insertTag = o),
              e.call(this, t, n),
              Array.isArray(r))
            )
              for (var s = 0; s < r.length; s++) {
                var a = r[s],
                  l = this._normalizeItem(a),
                  c = this.option(l);
                this.$element.append(c);
              }
          }
          return (
            (t.prototype.query = function (e, t, n) {
              var r = this;
              this._removeOldTags(),
                null != t.term && null == t.page
                  ? e.call(this, t, function e(i, o) {
                      for (var s = i.results, a = 0; a < s.length; a++) {
                        var l = s[a],
                          c =
                            null != l.children &&
                            !e({ results: l.children }, !0);
                        if (
                          (l.text || "").toUpperCase() ===
                            (t.term || "").toUpperCase() ||
                          c
                        )
                          return !o && ((i.data = s), void n(i));
                      }
                      if (o) return !0;
                      var u = r.createTag(t);
                      if (null != u) {
                        var p = r.option(u);
                        p.attr("data-select2-tag", "true"),
                          r.addOptions([p]),
                          r.insertTag(s, u);
                      }
                      (i.results = s), n(i);
                    })
                  : e.call(this, t, n);
            }),
            (t.prototype.createTag = function (e, t) {
              if (null == t.term) return null;
              var n = t.term.trim();
              return "" === n ? null : { id: n, text: n };
            }),
            (t.prototype.insertTag = function (e, t, n) {
              t.unshift(n);
            }),
            (t.prototype._removeOldTags = function (t) {
              this.$element.find("option[data-select2-tag]").each(function () {
                this.selected || e(this).remove();
              });
            }),
            t
          );
        }),
        t.define("select2/data/tokenizer", ["jquery"], function (e) {
          function t(e, t, n) {
            var r = n.get("tokenizer");
            void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
          }
          return (
            (t.prototype.bind = function (e, t, n) {
              e.call(this, t, n),
                (this.$search =
                  t.dropdown.$search ||
                  t.selection.$search ||
                  n.find(".select2-search__field"));
            }),
            (t.prototype.query = function (t, n, r) {
              var i = this;
              n.term = n.term || "";
              var o = this.tokenizer(n, this.options, function (t) {
                var n = i._normalizeItem(t);
                if (
                  !i.$element.find("option").filter(function () {
                    return e(this).val() === n.id;
                  }).length
                ) {
                  var r = i.option(n);
                  r.attr("data-select2-tag", !0),
                    i._removeOldTags(),
                    i.addOptions([r]);
                }
                !(function (e) {
                  i.trigger("select", { data: e });
                })(n);
              });
              o.term !== n.term &&
                (this.$search.length &&
                  (this.$search.val(o.term), this.$search.trigger("focus")),
                (n.term = o.term)),
                t.call(this, n, r);
            }),
            (t.prototype.tokenizer = function (t, n, r, i) {
              for (
                var o = r.get("tokenSeparators") || [],
                  s = n.term,
                  a = 0,
                  l =
                    this.createTag ||
                    function (e) {
                      return { id: e.term, text: e.term };
                    };
                a < s.length;

              ) {
                var c = s[a];
                if (-1 !== o.indexOf(c)) {
                  var u = s.substr(0, a),
                    p = l(e.extend({}, n, { term: u }));
                  null != p
                    ? (i(p), (s = s.substr(a + 1) || ""), (a = 0))
                    : a++;
                } else a++;
              }
              return { term: s };
            }),
            t
          );
        }),
        t.define("select2/data/minimumInputLength", [], function () {
          function e(e, t, n) {
            (this.minimumInputLength = n.get("minimumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                t.term.length < this.minimumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooShort",
                      args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        t.define("select2/data/maximumInputLength", [], function () {
          function e(e, t, n) {
            (this.maximumInputLength = n.get("maximumInputLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.query = function (e, t, n) {
              (t.term = t.term || ""),
                this.maximumInputLength > 0 &&
                t.term.length > this.maximumInputLength
                  ? this.trigger("results:message", {
                      message: "inputTooLong",
                      args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t,
                      },
                    })
                  : e.call(this, t, n);
            }),
            e
          );
        }),
        t.define("select2/data/maximumSelectionLength", [], function () {
          function e(e, t, n) {
            (this.maximumSelectionLength = n.get("maximumSelectionLength")),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("select", function () {
                  r._checkIfMaximumSelected();
                });
            }),
            (e.prototype.query = function (e, t, n) {
              var r = this;
              this._checkIfMaximumSelected(function () {
                e.call(r, t, n);
              });
            }),
            (e.prototype._checkIfMaximumSelected = function (e, t) {
              var n = this;
              this.current(function (e) {
                var r = null != e ? e.length : 0;
                n.maximumSelectionLength > 0 && r >= n.maximumSelectionLength
                  ? n.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: n.maximumSelectionLength },
                    })
                  : t && t();
              });
            }),
            e
          );
        }),
        t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            t.Extend(n, t.Observable),
            (n.prototype.render = function () {
              var t = e(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return (
                t.attr("dir", this.options.get("dir")), (this.$dropdown = t), t
              );
            }),
            (n.prototype.bind = function () {}),
            (n.prototype.position = function (e, t) {}),
            (n.prototype.destroy = function () {
              this.$dropdown.remove();
            }),
            n
          );
        }),
        t.define("select2/dropdown/search", ["jquery"], function (e) {
          function t() {}
          return (
            (t.prototype.render = function (t) {
              var n = t.call(this),
                r = this.options.get("translations").get("search"),
                i = e(
                  '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                );
              return (
                (this.$searchContainer = i),
                (this.$search = i.find("input")),
                this.$search.prop(
                  "autocomplete",
                  this.options.get("autocomplete")
                ),
                this.$search.attr("aria-label", r()),
                n.prepend(i),
                n
              );
            }),
            (t.prototype.bind = function (t, n, r) {
              var i = this,
                o = n.id + "-results";
              t.call(this, n, r),
                this.$search.on("keydown", function (e) {
                  i.trigger("keypress", e),
                    (i._keyUpPrevented = e.isDefaultPrevented());
                }),
                this.$search.on("input", function (t) {
                  e(this).off("keyup");
                }),
                this.$search.on("keyup input", function (e) {
                  i.handleSearch(e);
                }),
                n.on("open", function () {
                  i.$search.attr("tabindex", 0),
                    i.$search.attr("aria-controls", o),
                    i.$search.trigger("focus"),
                    window.setTimeout(function () {
                      i.$search.trigger("focus");
                    }, 0);
                }),
                n.on("close", function () {
                  i.$search.attr("tabindex", -1),
                    i.$search.removeAttr("aria-controls"),
                    i.$search.removeAttr("aria-activedescendant"),
                    i.$search.val(""),
                    i.$search.trigger("blur");
                }),
                n.on("focus", function () {
                  n.isOpen() || i.$search.trigger("focus");
                }),
                n.on("results:all", function (e) {
                  (null != e.query.term && "" !== e.query.term) ||
                    (i.showSearch(e)
                      ? i.$searchContainer[0].classList.remove(
                          "select2-search--hide"
                        )
                      : i.$searchContainer[0].classList.add(
                          "select2-search--hide"
                        ));
                }),
                n.on("results:focus", function (e) {
                  e.data._resultId
                    ? i.$search.attr("aria-activedescendant", e.data._resultId)
                    : i.$search.removeAttr("aria-activedescendant");
                });
            }),
            (t.prototype.handleSearch = function (e) {
              if (!this._keyUpPrevented) {
                var t = this.$search.val();
                this.trigger("query", { term: t });
              }
              this._keyUpPrevented = !1;
            }),
            (t.prototype.showSearch = function (e, t) {
              return !0;
            }),
            t
          );
        }),
        t.define("select2/dropdown/hidePlaceholder", [], function () {
          function e(e, t, n, r) {
            (this.placeholder = this.normalizePlaceholder(
              n.get("placeholder")
            )),
              e.call(this, t, n, r);
          }
          return (
            (e.prototype.append = function (e, t) {
              (t.results = this.removePlaceholder(t.results)), e.call(this, t);
            }),
            (e.prototype.normalizePlaceholder = function (e, t) {
              return "string" == typeof t && (t = { id: "", text: t }), t;
            }),
            (e.prototype.removePlaceholder = function (e, t) {
              for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                var i = t[r];
                this.placeholder.id === i.id && n.splice(r, 1);
              }
              return n;
            }),
            e
          );
        }),
        t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
          function t(e, t, n, r) {
            (this.lastParams = {}),
              e.call(this, t, n, r),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (t.prototype.append = function (e, t) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                e.call(this, t),
                this.showLoadingMore(t) &&
                  (this.$results.append(this.$loadingMore),
                  this.loadMoreIfNeeded());
            }),
            (t.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("query", function (e) {
                  (r.lastParams = e), (r.loading = !0);
                }),
                t.on("query:append", function (e) {
                  (r.lastParams = e), (r.loading = !0);
                }),
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
            }),
            (t.prototype.loadMoreIfNeeded = function () {
              var t = e.contains(
                document.documentElement,
                this.$loadingMore[0]
              );
              !this.loading &&
                t &&
                this.$results.offset().top +
                  this.$results.outerHeight(!1) +
                  50 >=
                  this.$loadingMore.offset().top +
                    this.$loadingMore.outerHeight(!1) &&
                this.loadMore();
            }),
            (t.prototype.loadMore = function () {
              this.loading = !0;
              var t = e.extend({}, { page: 1 }, this.lastParams);
              t.page++, this.trigger("query:append", t);
            }),
            (t.prototype.showLoadingMore = function (e, t) {
              return t.pagination && t.pagination.more;
            }),
            (t.prototype.createLoadingMore = function () {
              var t = e(
                  '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                ),
                n = this.options.get("translations").get("loadingMore");
              return t.html(n(this.lastParams)), t;
            }),
            t
          );
        }),
        t.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function (e, t) {
            function n(t, n, r) {
              (this.$dropdownParent = e(
                r.get("dropdownParent") || document.body
              )),
                t.call(this, n, r);
            }
            return (
              (n.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  t.on("open", function () {
                    r._showDropdown(),
                      r._attachPositioningHandler(t),
                      r._bindContainerResultHandlers(t);
                  }),
                  t.on("close", function () {
                    r._hideDropdown(), r._detachPositioningHandler(t);
                  }),
                  this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation();
                  });
              }),
              (n.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove();
              }),
              (n.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")),
                  t[0].classList.remove("select2"),
                  t[0].classList.add("select2-container--open"),
                  t.css({ position: "absolute", top: -999999 }),
                  (this.$container = n);
              }),
              (n.prototype.render = function (t) {
                var n = e("<span></span>"),
                  r = t.call(this);
                return n.append(r), (this.$dropdownContainer = n), n;
              }),
              (n.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach();
              }),
              (n.prototype._bindContainerResultHandlers = function (e, t) {
                if (!this._containerResultsHandlersBound) {
                  var n = this;
                  t.on("results:all", function () {
                    n._positionDropdown(), n._resizeDropdown();
                  }),
                    t.on("results:append", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    t.on("results:message", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    t.on("select", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    t.on("unselect", function () {
                      n._positionDropdown(), n._resizeDropdown();
                    }),
                    (this._containerResultsHandlersBound = !0);
                }
              }),
              (n.prototype._attachPositioningHandler = function (n, r) {
                var i = this,
                  o = "scroll.select2." + r.id,
                  s = "resize.select2." + r.id,
                  a = "orientationchange.select2." + r.id,
                  l = this.$container.parents().filter(t.hasScroll);
                l.each(function () {
                  t.StoreData(this, "select2-scroll-position", {
                    x: e(this).scrollLeft(),
                    y: e(this).scrollTop(),
                  });
                }),
                  l.on(o, function (n) {
                    var r = t.GetData(this, "select2-scroll-position");
                    e(this).scrollTop(r.y);
                  }),
                  e(window).on(o + " " + s + " " + a, function (e) {
                    i._positionDropdown(), i._resizeDropdown();
                  });
              }),
              (n.prototype._detachPositioningHandler = function (n, r) {
                var i = "scroll.select2." + r.id,
                  o = "resize.select2." + r.id,
                  s = "orientationchange.select2." + r.id;
                this.$container.parents().filter(t.hasScroll).off(i),
                  e(window).off(i + " " + o + " " + s);
              }),
              (n.prototype._positionDropdown = function () {
                var t = e(window),
                  n = this.$dropdown[0].classList.contains(
                    "select2-dropdown--above"
                  ),
                  r = this.$dropdown[0].classList.contains(
                    "select2-dropdown--below"
                  ),
                  i = null,
                  o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var s = { height: this.$container.outerHeight(!1) };
                (s.top = o.top), (s.bottom = o.top + s.height);
                var a = this.$dropdown.outerHeight(!1),
                  l = t.scrollTop(),
                  c = t.scrollTop() + t.height(),
                  u = l < o.top - a,
                  p = c > o.bottom + a,
                  d = { left: o.left, top: s.bottom },
                  f = this.$dropdownParent;
                "static" === f.css("position") && (f = f.offsetParent());
                var h = { top: 0, left: 0 };
                (e.contains(document.body, f[0]) || f[0].isConnected) &&
                  (h = f.offset()),
                  (d.top -= h.top),
                  (d.left -= h.left),
                  n || r || (i = "below"),
                  p || !u || n ? !u && p && n && (i = "below") : (i = "above"),
                  ("above" == i || (n && "below" !== i)) &&
                    (d.top = s.top - h.top - a),
                  null != i &&
                    (this.$dropdown[0].classList.remove(
                      "select2-dropdown--below"
                    ),
                    this.$dropdown[0].classList.remove(
                      "select2-dropdown--above"
                    ),
                    this.$dropdown[0].classList.add("select2-dropdown--" + i),
                    this.$container[0].classList.remove(
                      "select2-container--below"
                    ),
                    this.$container[0].classList.remove(
                      "select2-container--above"
                    ),
                    this.$container[0].classList.add(
                      "select2-container--" + i
                    )),
                  this.$dropdownContainer.css(d);
              }),
              (n.prototype._resizeDropdown = function () {
                var e = { width: this.$container.outerWidth(!1) + "px" };
                this.options.get("dropdownAutoWidth") &&
                  ((e.minWidth = e.width),
                  (e.position = "relative"),
                  (e.width = "auto")),
                  this.$dropdown.css(e);
              }),
              (n.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              n
            );
          }
        ),
        t.define("select2/dropdown/minimumResultsForSearch", [], function () {
          function e(t) {
            for (var n = 0, r = 0; r < t.length; r++) {
              var i = t[r];
              i.children ? (n += e(i.children)) : n++;
            }
            return n;
          }
          function t(e, t, n, r) {
            (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = 1 / 0),
              e.call(this, t, n, r);
          }
          return (
            (t.prototype.showSearch = function (t, n) {
              return (
                !(e(n.data.results) < this.minimumResultsForSearch) &&
                t.call(this, n)
              );
            }),
            t
          );
        }),
        t.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
          function t() {}
          return (
            (t.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("close", function (e) {
                  r._handleSelectOnClose(e);
                });
            }),
            (t.prototype._handleSelectOnClose = function (t, n) {
              if (n && null != n.originalSelect2Event) {
                var r = n.originalSelect2Event;
                if ("select" === r._type || "unselect" === r._type) return;
              }
              var i = this.getHighlightedResults();
              if (!(i.length < 1)) {
                var o = e.GetData(i[0], "data");
                (null != o.element && o.element.selected) ||
                  (null == o.element && o.selected) ||
                  this.trigger("select", { data: o });
              }
            }),
            t
          );
        }),
        t.define("select2/dropdown/closeOnSelect", [], function () {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var r = this;
              e.call(this, t, n),
                t.on("select", function (e) {
                  r._selectTriggered(e);
                }),
                t.on("unselect", function (e) {
                  r._selectTriggered(e);
                });
            }),
            (e.prototype._selectTriggered = function (e, t) {
              var n = t.originalEvent;
              (n && (n.ctrlKey || n.metaKey)) ||
                this.trigger("close", {
                  originalEvent: n,
                  originalSelect2Event: t,
                });
            }),
            e
          );
        }),
        t.define("select2/dropdown/dropdownCss", ["../utils"], function (e) {
          function t() {}
          return (
            (t.prototype.render = function (t) {
              var n = t.call(this),
                r = this.options.get("dropdownCssClass") || "";
              return (
                -1 !== r.indexOf(":all:") &&
                  ((r = r.replace(":all:", "")),
                  e.copyNonInternalCssClasses(n[0], this.$element[0])),
                n.addClass(r),
                n
              );
            }),
            t
          );
        }),
        t.define(
          "select2/dropdown/tagsSearchHighlight",
          ["../utils"],
          function (e) {
            function t() {}
            return (
              (t.prototype.highlightFirstItem = function (t) {
                var n = this.$results.find(
                  ".select2-results__option--selectable:not(.select2-results__option--selected)"
                );
                if (n.length > 0) {
                  var r = n.first(),
                    i = e.GetData(r[0], "data").element;
                  if (
                    i &&
                    i.getAttribute &&
                    "true" === i.getAttribute("data-select2-tag")
                  )
                    return void r.trigger("mouseenter");
                }
                t.call(this);
              }),
              t
            );
          }
        ),
        t.define("select2/i18n/en", [], function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded.";
            },
            inputTooLong: function (e) {
              var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
              return 1 != t && (n += "s"), n;
            },
            inputTooShort: function (e) {
              return (
                "Please enter " +
                (e.minimum - e.input.length) +
                " or more characters"
              );
            },
            loadingMore: function () {
              return "Loading more results…";
            },
            maximumSelected: function (e) {
              var t = "You can only select " + e.maximum + " item";
              return 1 != e.maximum && (t += "s"), t;
            },
            noResults: function () {
              return "No results found";
            },
            searching: function () {
              return "Searching…";
            },
            removeAllItems: function () {
              return "Remove all items";
            },
            removeItem: function () {
              return "Remove item";
            },
            search: function () {
              return "Search";
            },
          };
        }),
        t.define(
          "select2/defaults",
          [
            "jquery",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/selectionCss",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./dropdown/dropdownCss",
            "./dropdown/tagsSearchHighlight",
            "./i18n/en",
          ],
          function (
            e,
            t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            f,
            h,
            g,
            m,
            v,
            y,
            b,
            x,
            w,
            _,
            T,
            A,
            C,
            $,
            S,
            E,
            D,
            L
          ) {
            function k() {
              this.reset();
            }
            return (
              (k.prototype.apply = function (u) {
                if (
                  (null ==
                    (u = e.extend(!0, {}, this.defaults, u)).dataAdapter &&
                    (null != u.ajax
                      ? (u.dataAdapter = h)
                      : null != u.data
                      ? (u.dataAdapter = f)
                      : (u.dataAdapter = d),
                    u.minimumInputLength > 0 &&
                      (u.dataAdapter = c.Decorate(u.dataAdapter, v)),
                    u.maximumInputLength > 0 &&
                      (u.dataAdapter = c.Decorate(u.dataAdapter, y)),
                    u.maximumSelectionLength > 0 &&
                      (u.dataAdapter = c.Decorate(u.dataAdapter, b)),
                    u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)),
                    (null == u.tokenSeparators && null == u.tokenizer) ||
                      (u.dataAdapter = c.Decorate(u.dataAdapter, m))),
                  null == u.resultsAdapter &&
                    ((u.resultsAdapter = t),
                    null != u.ajax &&
                      (u.resultsAdapter = c.Decorate(u.resultsAdapter, T)),
                    null != u.placeholder &&
                      (u.resultsAdapter = c.Decorate(u.resultsAdapter, _)),
                    u.selectOnClose &&
                      (u.resultsAdapter = c.Decorate(u.resultsAdapter, $)),
                    u.tags &&
                      (u.resultsAdapter = c.Decorate(u.resultsAdapter, D))),
                  null == u.dropdownAdapter)
                ) {
                  if (u.multiple) u.dropdownAdapter = x;
                  else {
                    var p = c.Decorate(x, w);
                    u.dropdownAdapter = p;
                  }
                  0 !== u.minimumResultsForSearch &&
                    (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C)),
                    u.closeOnSelect &&
                      (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)),
                    null != u.dropdownCssClass &&
                      (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, E)),
                    (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, A));
                }
                null == u.selectionAdapter &&
                  (u.multiple
                    ? (u.selectionAdapter = r)
                    : (u.selectionAdapter = n),
                  null != u.placeholder &&
                    (u.selectionAdapter = c.Decorate(u.selectionAdapter, i)),
                  u.allowClear &&
                    (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)),
                  u.multiple &&
                    (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)),
                  null != u.selectionCssClass &&
                    (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)),
                  (u.selectionAdapter = c.Decorate(u.selectionAdapter, l))),
                  (u.language = this._resolveLanguage(u.language)),
                  u.language.push("en");
                for (var L = [], k = 0; k < u.language.length; k++) {
                  var j = u.language[k];
                  -1 === L.indexOf(j) && L.push(j);
                }
                return (
                  (u.language = L),
                  (u.translations = this._processTranslations(
                    u.language,
                    u.debug
                  )),
                  u
                );
              }),
              (k.prototype.reset = function () {
                function t(e) {
                  return e.replace(/[^\u0000-\u007E]/g, function (e) {
                    return p[e] || e;
                  });
                }
                this.defaults = {
                  amdLanguageBase: "./i18n/",
                  autocomplete: "off",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: c.escapeMarkup,
                  language: {},
                  matcher: function n(r, i) {
                    if (null == r.term || "" === r.term.trim()) return i;
                    if (i.children && i.children.length > 0) {
                      for (
                        var o = e.extend(!0, {}, i), s = i.children.length - 1;
                        s >= 0;
                        s--
                      )
                        null == n(r, i.children[s]) && o.children.splice(s, 1);
                      return o.children.length > 0 ? o : n(r, o);
                    }
                    var a = t(i.text).toUpperCase(),
                      l = t(r.term).toUpperCase();
                    return a.indexOf(l) > -1 ? i : null;
                  },
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  scrollAfterSelect: !1,
                  sorter: function (e) {
                    return e;
                  },
                  templateResult: function (e) {
                    return e.text;
                  },
                  templateSelection: function (e) {
                    return e.text;
                  },
                  theme: "default",
                  width: "resolve",
                };
              }),
              (k.prototype.applyFromElement = function (e, t) {
                var n = e.language,
                  r = this.defaults.language,
                  i = t.prop("lang"),
                  o = t.closest("[lang]").prop("lang"),
                  s = Array.prototype.concat.call(
                    this._resolveLanguage(i),
                    this._resolveLanguage(n),
                    this._resolveLanguage(r),
                    this._resolveLanguage(o)
                  );
                return (e.language = s), e;
              }),
              (k.prototype._resolveLanguage = function (t) {
                if (!t) return [];
                if (e.isEmptyObject(t)) return [];
                if (e.isPlainObject(t)) return [t];
                var n;
                n = Array.isArray(t) ? t : [t];
                for (var r = [], i = 0; i < n.length; i++)
                  if (
                    (r.push(n[i]),
                    "string" == typeof n[i] && n[i].indexOf("-") > 0)
                  ) {
                    var o = n[i].split("-")[0];
                    r.push(o);
                  }
                return r;
              }),
              (k.prototype._processTranslations = function (t, n) {
                for (var r = new u(), i = 0; i < t.length; i++) {
                  var o = new u(),
                    s = t[i];
                  if ("string" == typeof s)
                    try {
                      o = u.loadPath(s);
                    } catch (e) {
                      try {
                        (s = this.defaults.amdLanguageBase + s),
                          (o = u.loadPath(s));
                      } catch (e) {
                        n &&
                          window.console &&
                          console.warn &&
                          console.warn(
                            'Select2: The language file for "' +
                              s +
                              '" could not be automatically loaded. A fallback will be used instead.'
                          );
                      }
                    }
                  else o = e.isPlainObject(s) ? new u(s) : s;
                  r.extend(o);
                }
                return r;
              }),
              (k.prototype.set = function (t, n) {
                var r = {};
                r[e.camelCase(t)] = n;
                var i = c._convertData(r);
                e.extend(!0, this.defaults, i);
              }),
              new k()
            );
          }
        ),
        t.define(
          "select2/options",
          ["jquery", "./defaults", "./utils"],
          function (e, t, n) {
            function r(e, n) {
              (this.options = e),
                null != n && this.fromElement(n),
                null != n &&
                  (this.options = t.applyFromElement(this.options, n)),
                (this.options = t.apply(this.options));
            }
            return (
              (r.prototype.fromElement = function (t) {
                var r = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = t.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = t.prop("disabled")),
                  null == this.options.autocomplete &&
                    t.prop("autocomplete") &&
                    (this.options.autocomplete = t.prop("autocomplete")),
                  null == this.options.dir &&
                    (t.prop("dir")
                      ? (this.options.dir = t.prop("dir"))
                      : t.closest("[dir]").prop("dir")
                      ? (this.options.dir = t.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  t.prop("disabled", this.options.disabled),
                  t.prop("multiple", this.options.multiple),
                  n.GetData(t[0], "select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    n.StoreData(t[0], "data", n.GetData(t[0], "select2Tags")),
                    n.StoreData(t[0], "tags", !0)),
                  n.GetData(t[0], "ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    t.attr("ajax--url", n.GetData(t[0], "ajaxUrl")),
                    n.StoreData(t[0], "ajax-Url", n.GetData(t[0], "ajaxUrl")));
                var i = {};
                function o(e, t) {
                  return t.toUpperCase();
                }
                for (var s = 0; s < t[0].attributes.length; s++) {
                  var a = t[0].attributes[s].name,
                    l = "data-";
                  if (a.substr(0, 5) == l) {
                    var c = a.substring(5),
                      u = n.GetData(t[0], c);
                    i[c.replace(/-([a-z])/g, o)] = u;
                  }
                }
                e.fn.jquery &&
                  "1." == e.fn.jquery.substr(0, 2) &&
                  t[0].dataset &&
                  (i = e.extend(!0, {}, t[0].dataset, i));
                var p = e.extend(!0, {}, n.GetData(t[0]), i);
                for (var d in (p = n._convertData(p)))
                  r.indexOf(d) > -1 ||
                    (e.isPlainObject(this.options[d])
                      ? e.extend(this.options[d], p[d])
                      : (this.options[d] = p[d]));
                return this;
              }),
              (r.prototype.get = function (e) {
                return this.options[e];
              }),
              (r.prototype.set = function (e, t) {
                this.options[e] = t;
              }),
              r
            );
          }
        ),
        t.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function (e, t, n, r) {
            var i = function (e, r) {
              null != n.GetData(e[0], "select2") &&
                n.GetData(e[0], "select2").destroy(),
                (this.$element = e),
                (this.id = this._generateId(e)),
                (r = r || {}),
                (this.options = new t(r, e)),
                i.__super__.constructor.call(this);
              var o = e.attr("tabindex") || 0;
              n.StoreData(e[0], "old-tabindex", o), e.attr("tabindex", "-1");
              var s = this.options.get("dataAdapter");
              this.dataAdapter = new s(e, this.options);
              var a = this.render();
              this._placeContainer(a);
              var l = this.options.get("selectionAdapter");
              (this.selection = new l(e, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, a);
              var c = this.options.get("dropdownAdapter");
              (this.dropdown = new c(e, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, a);
              var u = this.options.get("resultsAdapter");
              (this.results = new u(e, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var p = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function (e) {
                  p.trigger("selection:update", { data: e });
                }),
                e[0].classList.add("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                n.StoreData(e[0], "select2", this),
                e.data("select2", this);
            };
            return (
              n.Extend(i, n.Observable),
              (i.prototype._generateId = function (e) {
                return (
                  "select2-" +
                  (null != e.attr("id")
                    ? e.attr("id")
                    : null != e.attr("name")
                    ? e.attr("name") + "-" + n.generateChars(2)
                    : n.generateChars(4)
                  ).replace(/(:|\.|\[|\]|,)/g, "")
                );
              }),
              (i.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != t && e.css("width", t);
              }),
              (i.prototype._resolveWidth = function (e, t) {
                var n =
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                  var r = this._resolveWidth(e, "style");
                  return null != r ? r : this._resolveWidth(e, "element");
                }
                if ("element" == t) {
                  var i = e.outerWidth(!1);
                  return i <= 0 ? "auto" : i + "px";
                }
                if ("style" == t) {
                  var o = e.attr("style");
                  if ("string" != typeof o) return null;
                  for (
                    var s = o.split(";"), a = 0, l = s.length;
                    a < l;
                    a += 1
                  ) {
                    var c = s[a].replace(/\s/g, "").match(n);
                    if (null !== c && c.length >= 1) return c[1];
                  }
                  return null;
                }
                return "computedstyle" == t
                  ? window.getComputedStyle(e[0]).width
                  : t;
              }),
              (i.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (i.prototype._registerDomEvents = function () {
                var e = this;
                this.$element.on("change.select2", function () {
                  e.dataAdapter.current(function (t) {
                    e.trigger("selection:update", { data: t });
                  });
                }),
                  this.$element.on("focus.select2", function (t) {
                    e.trigger("focus", t);
                  }),
                  (this._syncA = n.bind(this._syncAttributes, this)),
                  (this._syncS = n.bind(this._syncSubtree, this)),
                  (this._observer = new window.MutationObserver(function (t) {
                    e._syncA(), e._syncS(t);
                  })),
                  this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1,
                  });
              }),
              (i.prototype._registerDataEvents = function () {
                var e = this;
                this.dataAdapter.on("*", function (t, n) {
                  e.trigger(t, n);
                });
              }),
              (i.prototype._registerSelectionEvents = function () {
                var e = this,
                  t = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                  e.toggleDropdown();
                }),
                  this.selection.on("focus", function (t) {
                    e.focus(t);
                  }),
                  this.selection.on("*", function (n, r) {
                    -1 === t.indexOf(n) && e.trigger(n, r);
                  });
              }),
              (i.prototype._registerDropdownEvents = function () {
                var e = this;
                this.dropdown.on("*", function (t, n) {
                  e.trigger(t, n);
                });
              }),
              (i.prototype._registerResultsEvents = function () {
                var e = this;
                this.results.on("*", function (t, n) {
                  e.trigger(t, n);
                });
              }),
              (i.prototype._registerEvents = function () {
                var e = this;
                this.on("open", function () {
                  e.$container[0].classList.add("select2-container--open");
                }),
                  this.on("close", function () {
                    e.$container[0].classList.remove("select2-container--open");
                  }),
                  this.on("enable", function () {
                    e.$container[0].classList.remove(
                      "select2-container--disabled"
                    );
                  }),
                  this.on("disable", function () {
                    e.$container[0].classList.add(
                      "select2-container--disabled"
                    );
                  }),
                  this.on("blur", function () {
                    e.$container[0].classList.remove(
                      "select2-container--focus"
                    );
                  }),
                  this.on("query", function (t) {
                    e.isOpen() || e.trigger("open", {}),
                      this.dataAdapter.query(t, function (n) {
                        e.trigger("results:all", { data: n, query: t });
                      });
                  }),
                  this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (n) {
                      e.trigger("results:append", { data: n, query: t });
                    });
                  }),
                  this.on("keypress", function (t) {
                    var n = t.which;
                    e.isOpen()
                      ? n === r.ESC || (n === r.UP && t.altKey)
                        ? (e.close(t), t.preventDefault())
                        : n === r.ENTER || n === r.TAB
                        ? (e.trigger("results:select", {}), t.preventDefault())
                        : n === r.SPACE && t.ctrlKey
                        ? (e.trigger("results:toggle", {}), t.preventDefault())
                        : n === r.UP
                        ? (e.trigger("results:previous", {}),
                          t.preventDefault())
                        : n === r.DOWN &&
                          (e.trigger("results:next", {}), t.preventDefault())
                      : (n === r.ENTER ||
                          n === r.SPACE ||
                          (n === r.DOWN && t.altKey)) &&
                        (e.open(), t.preventDefault());
                  });
              }),
              (i.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.isDisabled()
                    ? (this.isOpen() && this.close(),
                      this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (i.prototype._isChangeMutation = function (e) {
                var t = this;
                if (e.addedNodes && e.addedNodes.length > 0) {
                  for (var n = 0; n < e.addedNodes.length; n++)
                    if (e.addedNodes[n].selected) return !0;
                } else {
                  if (e.removedNodes && e.removedNodes.length > 0) return !0;
                  if (Array.isArray(e))
                    return e.some(function (e) {
                      return t._isChangeMutation(e);
                    });
                }
                return !1;
              }),
              (i.prototype._syncSubtree = function (e) {
                var t = this._isChangeMutation(e),
                  n = this;
                t &&
                  this.dataAdapter.current(function (e) {
                    n.trigger("selection:update", { data: e });
                  });
              }),
              (i.prototype.trigger = function (e, t) {
                var n = i.__super__.trigger,
                  r = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing",
                  };
                if ((void 0 === t && (t = {}), e in r)) {
                  var o = r[e],
                    s = { prevented: !1, name: e, args: t };
                  if ((n.call(this, o, s), s.prevented))
                    return void (t.prevented = !0);
                }
                n.call(this, e, t);
              }),
              (i.prototype.toggleDropdown = function () {
                this.isDisabled() ||
                  (this.isOpen() ? this.close() : this.open());
              }),
              (i.prototype.open = function () {
                this.isOpen() || this.isDisabled() || this.trigger("query", {});
              }),
              (i.prototype.close = function (e) {
                this.isOpen() && this.trigger("close", { originalEvent: e });
              }),
              (i.prototype.isEnabled = function () {
                return !this.isDisabled();
              }),
              (i.prototype.isDisabled = function () {
                return this.options.get("disabled");
              }),
              (i.prototype.isOpen = function () {
                return this.$container[0].classList.contains(
                  "select2-container--open"
                );
              }),
              (i.prototype.hasFocus = function () {
                return this.$container[0].classList.contains(
                  "select2-container--focus"
                );
              }),
              (i.prototype.focus = function (e) {
                this.hasFocus() ||
                  (this.$container[0].classList.add("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (i.prototype.enable = function (e) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  ),
                  (null != e && 0 !== e.length) || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t);
              }),
              (i.prototype.data = function () {
                this.options.get("debug") &&
                  arguments.length > 0 &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var e = [];
                return (
                  this.dataAdapter.current(function (t) {
                    e = t;
                  }),
                  e
                );
              }),
              (i.prototype.val = function (e) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == e || 0 === e.length)
                )
                  return this.$element.val();
                var t = e[0];
                Array.isArray(t) &&
                  (t = t.map(function (e) {
                    return e.toString();
                  })),
                  this.$element.val(t).trigger("input").trigger("change");
              }),
              (i.prototype.destroy = function () {
                n.RemoveData(this.$container[0]),
                  this.$container.remove(),
                  this._observer.disconnect(),
                  (this._observer = null),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    n.GetData(this.$element[0], "old-tabindex")
                  ),
                  this.$element[0].classList.remove(
                    "select2-hidden-accessible"
                  ),
                  this.$element.attr("aria-hidden", "false"),
                  n.RemoveData(this.$element[0]),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (i.prototype.render = function () {
                var t = e(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  t.attr("dir", this.options.get("dir")),
                  (this.$container = t),
                  this.$container[0].classList.add(
                    "select2-container--" + this.options.get("theme")
                  ),
                  n.StoreData(t[0], "element", this.$element),
                  t
                );
              }),
              i
            );
          }
        ),
        t.define("jquery-mousewheel", ["jquery"], function (e) {
          return e;
        }),
        t.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults",
            "./select2/utils",
          ],
          function (e, t, n, r, i) {
            if (null == e.fn.select2) {
              var o = ["open", "close", "destroy"];
              e.fn.select2 = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var r = e.extend(!0, {}, t);
                      new n(e(this), r);
                    }),
                    this
                  );
                if ("string" == typeof t) {
                  var r,
                    s = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      var e = i.GetData(this, "select2");
                      null == e &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" +
                            t +
                            "') method was called on an element that is not using Select2."
                        ),
                        (r = e[t].apply(e, s));
                    }),
                    o.indexOf(t) > -1 ? this : r
                  );
                }
                throw new Error("Invalid arguments for Select2: " + t);
              };
            }
            return (
              null == e.fn.select2.defaults && (e.fn.select2.defaults = r), n
            );
          }
        ),
        { define: t.define, require: t.require }
      );
    })(),
    n = t.require("jquery.select2");
  return (e.fn.select2.amd = t), n;
}),
  "function" == typeof define && define.amd
    ? define(["jquery"], o)
    : a
    ? (a = function (e, t) {
        return (
          void 0 === t &&
            (t = "undefined" != typeof window ? i("601zH") : i("601zH")(e)),
          o(t),
          t
        );
      })
    : o(jQuery),
  (window.$ = window.jQuery = s),
  e(a)(s);
//# sourceMappingURL=index.bf515ff8.js.map

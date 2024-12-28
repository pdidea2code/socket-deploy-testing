/*! For license information please see main.25479188.js.LICENSE.txt */
(() => {
  var e = {
      730: (e, n, t) => {
        "use strict";
        var f = t(43),
          a = t(853);
        function r(e) {
          for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
            n += "&args[]=" + encodeURIComponent(arguments[t]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function u(e, n) {
          s(e, n), s(e + "Capture", n);
        }
        function s(e, n) {
          for (o[e] = n, e = 0; e < n.length; e++) i.add(n[e]);
        }
        var l = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          c = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          g = {};
        function h(e, n, t, f, a, r, i) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = f),
            (this.attributeNamespace = a),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = r),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var n = e[0];
            m[n] = new h(n, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            m[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            m[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var w = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, n, t, f) {
          var a = m.hasOwnProperty(n) ? m[n] : null;
          (null !== a
            ? 0 !== a.type
            : f || !(2 < n.length) || ("o" !== n[0] && "O" !== n[0]) || ("n" !== n[1] && "N" !== n[1])) &&
            ((function (e, n, t, f) {
              if (
                null === n ||
                "undefined" === typeof n ||
                (function (e, n, t, f) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !f &&
                        (null !== t
                          ? !t.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, n, t, f)
              )
                return !0;
              if (f) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, a, f) && (t = null),
            f || null === a
              ? (function (e) {
                  return !!c.call(g, e) || (!c.call(p, e) && (d.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)));
                })(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === t ? 3 !== a.type && "" : t)
              : ((n = a.attributeName),
                (f = a.attributeNamespace),
                null === t
                  ? e.removeAttribute(n)
                  : ((t = 3 === (a = a.type) || (4 === a && !0 === t) ? "" : "" + t),
                    f ? e.setAttributeNS(f, n, t) : e.setAttribute(n, t))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(w, b);
            m[n] = new h(n, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var n = e.replace(w, b);
            m[n] = new h(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(w, b);
            m[n] = new h(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new h("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var L = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          M = Symbol.for("react.element"),
          v = Symbol.for("react.portal"),
          C = Symbol.for("react.fragment"),
          j = Symbol.for("react.strict_mode"),
          k = Symbol.for("react.profiler"),
          I = Symbol.for("react.provider"),
          S = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          E = Symbol.for("react.suspense_list"),
          D = Symbol.for("react.memo"),
          x = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function P(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var O,
          R = Object.assign;
        function Q(e) {
          if (void 0 === O)
            try {
              throw Error();
            } catch (t) {
              var n = t.stack.trim().match(/\n( *(at )?)/);
              O = (n && n[1]) || "";
            }
          return "\n" + O + e;
        }
        var Y = !1;
        function U(e, n) {
          if (!e || Y) return "";
          Y = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (n)
              if (
                ((n = function () {
                  throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (s) {
                  var f = s;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (s) {
                  f = s;
                }
                e.call(n.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                f = s;
              }
              e();
            }
          } catch (s) {
            if (s && f && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"), r = f.stack.split("\n"), i = a.length - 1, o = r.length - 1;
                1 <= i && 0 <= o && a[i] !== r[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== r[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== r[o])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (Y = !1), (Error.prepareStackTrace = t);
          }
          return (e = e ? e.displayName || e.name : "") ? Q(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return Q(e.type);
            case 16:
              return Q("Lazy");
            case 13:
              return Q("Suspense");
            case 19:
              return Q("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function J(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case C:
              return "Fragment";
            case v:
              return "Portal";
            case k:
              return "Profiler";
            case j:
              return "StrictMode";
            case T:
              return "Suspense";
            case E:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case S:
                return (e.displayName || "Context") + ".Consumer";
              case I:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                  e
                );
              case D:
                return null !== (n = e.displayName || null) ? n : J(e.type) || "Memo";
              case x:
                (n = e._payload), (e = e._init);
                try {
                  return J(e(n));
                } catch (t) {}
            }
          return null;
        }
        function _(e) {
          var n = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (n.displayName || "Context") + ".Consumer";
            case 10:
              return (n._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = n.render).displayName || e.name || ""),
                n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return n;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return J(n);
            case 8:
              return n === j ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof n) return n.displayName || n.name || null;
              if ("string" === typeof n) return n;
          }
          return null;
        }
        function G(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Z(e) {
          var n = e.type;
          return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n);
        }
        function H(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var n = Z(e) ? "checked" : "value",
                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                f = "" + e[n];
              if (
                !e.hasOwnProperty(n) &&
                "undefined" !== typeof t &&
                "function" === typeof t.get &&
                "function" === typeof t.set
              ) {
                var a = t.get,
                  r = t.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (f = "" + e), r.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: t.enumerable }),
                  {
                    getValue: function () {
                      return f;
                    },
                    setValue: function (e) {
                      f = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[n];
                    },
                  }
                );
              }
            })(e));
        }
        function F(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            f = "";
          return e && (f = Z(e) ? (e.checked ? "true" : "false") : e.value), (e = f) !== t && (n.setValue(e), !0);
        }
        function W(e) {
          if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function V(e, n) {
          var t = n.checked;
          return R({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != t ? t : e._wrapperState.initialChecked,
          });
        }
        function K(e, n) {
          var t = null == n.defaultValue ? "" : n.defaultValue,
            f = null != n.checked ? n.checked : n.defaultChecked;
          (t = G(null != n.value ? n.value : t)),
            (e._wrapperState = {
              initialChecked: f,
              initialValue: t,
              controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value,
            });
        }
        function X(e, n) {
          null != (n = n.checked) && y(e, "checked", n, !1);
        }
        function q(e, n) {
          X(e, n);
          var t = G(n.value),
            f = n.type;
          if (null != t)
            "number" === f
              ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + t)
              : e.value !== "" + t && (e.value = "" + t);
          else if ("submit" === f || "reset" === f) return void e.removeAttribute("value");
          n.hasOwnProperty("value")
            ? ee(e, n.type, t)
            : n.hasOwnProperty("defaultValue") && ee(e, n.type, G(n.defaultValue)),
            null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked);
        }
        function $(e, n, t) {
          if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var f = n.type;
            if (!(("submit" !== f && "reset" !== f) || (void 0 !== n.value && null !== n.value))) return;
            (n = "" + e._wrapperState.initialValue), t || n === e.value || (e.value = n), (e.defaultValue = n);
          }
          "" !== (t = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== t && (e.name = t);
        }
        function ee(e, n, t) {
          ("number" === n && W(e.ownerDocument) === e) ||
            (null == t
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
        }
        var ne = Array.isArray;
        function te(e, n, t, f) {
          if (((e = e.options), n)) {
            n = {};
            for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
            for (t = 0; t < e.length; t++)
              (a = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== a && (e[t].selected = a),
                a && f && (e[t].defaultSelected = !0);
          } else {
            for (t = "" + G(t), n = null, a = 0; a < e.length; a++) {
              if (e[a].value === t) return (e[a].selected = !0), void (f && (e[a].defaultSelected = !0));
              null !== n || e[a].disabled || (n = e[a]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function fe(e, n) {
          if (null != n.dangerouslySetInnerHTML) throw Error(r(91));
          return R({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function ae(e, n) {
          var t = n.value;
          if (null == t) {
            if (((t = n.children), (n = n.defaultValue), null != t)) {
              if (null != n) throw Error(r(92));
              if (ne(t)) {
                if (1 < t.length) throw Error(r(93));
                t = t[0];
              }
              n = t;
            }
            null == n && (n = ""), (t = n);
          }
          e._wrapperState = { initialValue: G(t) };
        }
        function re(e, n) {
          var t = G(n.value),
            f = G(n.defaultValue);
          null != t &&
            ((t = "" + t) !== e.value && (e.value = t),
            null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
            null != f && (e.defaultValue = "" + f);
        }
        function ie(e) {
          var n = e.textContent;
          n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, n) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(n)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          le,
          ce =
            ((le = function (e, n) {
              if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = n;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                    n = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, f) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return le(e, n);
                  });
                }
              : le);
        function de(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType) return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          ge = ["Webkit", "ms", "Moz", "O"];
        function he(e, n, t) {
          return null == n || "boolean" === typeof n || "" === n
            ? ""
            : t || "number" !== typeof n || 0 === n || (pe.hasOwnProperty(e) && pe[e])
            ? ("" + n).trim()
            : n + "px";
        }
        function me(e, n) {
          for (var t in ((e = e.style), n))
            if (n.hasOwnProperty(t)) {
              var f = 0 === t.indexOf("--"),
                a = he(t, n[t], f);
              "float" === t && (t = "cssFloat"), f ? e.setProperty(t, a) : (e[t] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          ge.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (pe[n] = pe[e]);
          });
        });
        var we = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function be(e, n) {
          if (n) {
            if (we[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(r(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(r(60));
              if ("object" !== typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML))
                throw Error(r(61));
            }
            if (null != n.style && "object" !== typeof n.style) throw Error(r(62));
          }
        }
        function ye(e, n) {
          if (-1 === e.indexOf("-")) return "string" === typeof n.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Le = null;
        function Me(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ve = null,
          Ce = null,
          je = null;
        function ke(e) {
          if ((e = La(e))) {
            if ("function" !== typeof ve) throw Error(r(280));
            var n = e.stateNode;
            n && ((n = va(n)), ve(e.stateNode, e.type, n));
          }
        }
        function Ie(e) {
          Ce ? (je ? je.push(e) : (je = [e])) : (Ce = e);
        }
        function Se() {
          if (Ce) {
            var e = Ce,
              n = je;
            if (((je = Ce = null), ke(e), n)) for (e = 0; e < n.length; e++) ke(n[e]);
          }
        }
        function Ne(e, n) {
          return e(n);
        }
        function Te() {}
        var Ee = !1;
        function De(e, n, t) {
          if (Ee) return e(n, t);
          Ee = !0;
          try {
            return Ne(e, n, t);
          } finally {
            (Ee = !1), (null !== Ce || null !== je) && (Te(), Se());
          }
        }
        function xe(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var f = va(t);
          if (null === f) return null;
          t = f[n];
          e: switch (n) {
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
              (f = !f.disabled) ||
                (f = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                (e = !f);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && "function" !== typeof t) throw Error(r(231, n, typeof t));
          return t;
        }
        var ze = !1;
        if (l)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (le) {
            ze = !1;
          }
        function Pe(e, n, t, f, a, r, i, o, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, s);
          } catch (l) {
            this.onError(l);
          }
        }
        var Oe = !1,
          Re = null,
          Qe = !1,
          Ye = null,
          Ue = {
            onError: function (e) {
              (Oe = !0), (Re = e);
            },
          };
        function Be(e, n, t, f, a, r, i, o, u) {
          (Oe = !1), (Re = null), Pe.apply(Ue, arguments);
        }
        function Je(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 !== (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function _e(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if ((null === n && null !== (e = e.alternate) && (n = e.memoizedState), null !== n)) return n.dehydrated;
          }
          return null;
        }
        function Ge(e) {
          if (Je(e) !== e) throw Error(r(188));
        }
        function Ze(e) {
          return null !==
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = Je(e))) throw Error(r(188));
                return n !== e ? null : e;
              }
              for (var t = e, f = n; ; ) {
                var a = t.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (f = a.return)) {
                    t = f;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === t) return Ge(a), e;
                    if (i === f) return Ge(a), n;
                    i = i.sibling;
                  }
                  throw Error(r(188));
                }
                if (t.return !== f.return) (t = a), (f = i);
                else {
                  for (var o = !1, u = a.child; u; ) {
                    if (u === t) {
                      (o = !0), (t = a), (f = i);
                      break;
                    }
                    if (u === f) {
                      (o = !0), (f = a), (t = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!o) {
                    for (u = i.child; u; ) {
                      if (u === t) {
                        (o = !0), (t = i), (f = a);
                        break;
                      }
                      if (u === f) {
                        (o = !0), (f = i), (t = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!o) throw Error(r(189));
                  }
                }
                if (t.alternate !== f) throw Error(r(190));
              }
              if (3 !== t.tag) throw Error(r(188));
              return t.stateNode.current === t ? e : n;
            })(e))
            ? He(e)
            : null;
        }
        function He(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var n = He(e);
            if (null !== n) return n;
            e = e.sibling;
          }
          return null;
        }
        var Fe = a.unstable_scheduleCallback,
          We = a.unstable_cancelCallback,
          Ve = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Xe = a.unstable_now,
          qe = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          en = a.unstable_UserBlockingPriority,
          nn = a.unstable_NormalPriority,
          tn = a.unstable_LowPriority,
          fn = a.unstable_IdlePriority,
          an = null,
          rn = null;
        var on = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((un(e) / sn) | 0)) | 0;
              },
          un = Math.log,
          sn = Math.LN2;
        var ln = 64,
          cn = 4194304;
        function dn(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var f = 0,
            a = e.suspendedLanes,
            r = e.pingedLanes,
            i = 268435455 & t;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (f = dn(o)) : 0 !== (r &= i) && (f = dn(r));
          } else 0 !== (i = t & ~a) ? (f = dn(i)) : 0 !== r && (f = dn(r));
          if (0 === f) return 0;
          if (
            0 !== n &&
            n !== f &&
            0 === (n & a) &&
            ((a = f & -f) >= (r = n & -n) || (16 === a && 0 !== (4194240 & r)))
          )
            return n;
          if ((0 !== (4 & f) && (f |= 16 & t), 0 !== (n = e.entangledLanes)))
            for (e = e.entanglements, n &= f; 0 < n; ) (a = 1 << (t = 31 - on(n))), (f |= e[t]), (n &= ~a);
          return f;
        }
        function gn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
              return n + 5e3;
            default:
              return -1;
          }
        }
        function hn(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function mn() {
          var e = ln;
          return 0 === (4194240 & (ln <<= 1)) && (ln = 64), e;
        }
        function wn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function bn(e, n, t) {
          (e.pendingLanes |= n),
            536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(n = 31 - on(n))] = t);
        }
        function yn(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t; ) {
            var f = 31 - on(t),
              a = 1 << f;
            (a & n) | (e[f] & n) && (e[f] |= n), (t &= ~a);
          }
        }
        var Ln = 0;
        function Mn(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var vn,
          Cn,
          jn,
          kn,
          In,
          Sn = !1,
          Nn = [],
          Tn = null,
          En = null,
          Dn = null,
          xn = new Map(),
          zn = new Map(),
          An = [],
          Pn =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function On(e, n) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tn = null;
              break;
            case "dragenter":
            case "dragleave":
              En = null;
              break;
            case "mouseover":
            case "mouseout":
              Dn = null;
              break;
            case "pointerover":
            case "pointerout":
              xn.delete(n.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zn.delete(n.pointerId);
          }
        }
        function Rn(e, n, t, f, a, r) {
          return null === e || e.nativeEvent !== r
            ? ((e = { blockedOn: n, domEventName: t, eventSystemFlags: f, nativeEvent: r, targetContainers: [a] }),
              null !== n && null !== (n = La(n)) && Cn(n),
              e)
            : ((e.eventSystemFlags |= f), (n = e.targetContainers), null !== a && -1 === n.indexOf(a) && n.push(a), e);
        }
        function Qn(e) {
          var n = ya(e.target);
          if (null !== n) {
            var t = Je(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = _e(t)))
                  return (
                    (e.blockedOn = n),
                    void In(e.priority, function () {
                      jn(t);
                    })
                  );
              } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Yn(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Kn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t) return null !== (n = La(t)) && Cn(n), (e.blockedOn = t), !1;
            var f = new (t = e.nativeEvent).constructor(t.type, t);
            (Le = f), t.target.dispatchEvent(f), (Le = null), n.shift();
          }
          return !0;
        }
        function Un(e, n, t) {
          Yn(e) && t.delete(n);
        }
        function Bn() {
          (Sn = !1),
            null !== Tn && Yn(Tn) && (Tn = null),
            null !== En && Yn(En) && (En = null),
            null !== Dn && Yn(Dn) && (Dn = null),
            xn.forEach(Un),
            zn.forEach(Un);
        }
        function Jn(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null), Sn || ((Sn = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, Bn)));
        }
        function _n(e) {
          function n(n) {
            return Jn(n, e);
          }
          if (0 < Nn.length) {
            Jn(Nn[0], e);
            for (var t = 1; t < Nn.length; t++) {
              var f = Nn[t];
              f.blockedOn === e && (f.blockedOn = null);
            }
          }
          for (
            null !== Tn && Jn(Tn, e),
              null !== En && Jn(En, e),
              null !== Dn && Jn(Dn, e),
              xn.forEach(n),
              zn.forEach(n),
              t = 0;
            t < An.length;
            t++
          )
            (f = An[t]).blockedOn === e && (f.blockedOn = null);
          for (; 0 < An.length && null === (t = An[0]).blockedOn; ) Qn(t), null === t.blockedOn && An.shift();
        }
        var Gn = L.ReactCurrentBatchConfig,
          Zn = !0;
        function Hn(e, n, t, f) {
          var a = Ln,
            r = Gn.transition;
          Gn.transition = null;
          try {
            (Ln = 1), Wn(e, n, t, f);
          } finally {
            (Ln = a), (Gn.transition = r);
          }
        }
        function Fn(e, n, t, f) {
          var a = Ln,
            r = Gn.transition;
          Gn.transition = null;
          try {
            (Ln = 4), Wn(e, n, t, f);
          } finally {
            (Ln = a), (Gn.transition = r);
          }
        }
        function Wn(e, n, t, f) {
          if (Zn) {
            var a = Kn(e, n, t, f);
            if (null === a) Zf(e, n, f, Vn, t), On(e, f);
            else if (
              (function (e, n, t, f, a) {
                switch (n) {
                  case "focusin":
                    return (Tn = Rn(Tn, e, n, t, f, a)), !0;
                  case "dragenter":
                    return (En = Rn(En, e, n, t, f, a)), !0;
                  case "mouseover":
                    return (Dn = Rn(Dn, e, n, t, f, a)), !0;
                  case "pointerover":
                    var r = a.pointerId;
                    return xn.set(r, Rn(xn.get(r) || null, e, n, t, f, a)), !0;
                  case "gotpointercapture":
                    return (r = a.pointerId), zn.set(r, Rn(zn.get(r) || null, e, n, t, f, a)), !0;
                }
                return !1;
              })(a, e, n, t, f)
            )
              f.stopPropagation();
            else if ((On(e, f), 4 & n && -1 < Pn.indexOf(e))) {
              for (; null !== a; ) {
                var r = La(a);
                if ((null !== r && vn(r), null === (r = Kn(e, n, t, f)) && Zf(e, n, f, Vn, t), r === a)) break;
                a = r;
              }
              null !== a && f.stopPropagation();
            } else Zf(e, n, f, null, t);
          }
        }
        var Vn = null;
        function Kn(e, n, t, f) {
          if (((Vn = null), null !== (e = ya((e = Me(f))))))
            if (null === (n = Je(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = _e(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated) return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (Vn = e), null;
        }
        function Xn(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (qe()) {
                case $e:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case fn:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var qn = null,
          $n = null,
          et = null;
        function nt() {
          if (et) return et;
          var e,
            n,
            t = $n,
            f = t.length,
            a = "value" in qn ? qn.value : qn.textContent,
            r = a.length;
          for (e = 0; e < f && t[e] === a[e]; e++);
          var i = f - e;
          for (n = 1; n <= i && t[f - n] === a[r - n]; n++);
          return (et = a.slice(e, 1 < n ? 1 - n : void 0));
        }
        function tt(e) {
          var n = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function ft() {
          return !0;
        }
        function at() {
          return !1;
        }
        function rt(e) {
          function n(n, t, f, a, r) {
            for (var i in ((this._reactName = n),
            (this._targetInst = f),
            (this.type = t),
            (this.nativeEvent = a),
            (this.target = r),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(a) : a[i]));
            return (
              (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
                ? ft
                : at),
              (this.isPropagationStopped = at),
              this
            );
          }
          return (
            R(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = ft));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = ft));
              },
              persist: function () {},
              isPersistent: ft,
            }),
            n
          );
        }
        var it,
          ot,
          ut,
          st = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          lt = rt(st),
          ct = R({}, st, { view: 0, detail: 0 }),
          dt = rt(ct),
          pt = R({}, ct, {
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
            getModifierState: kt,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ut &&
                    (ut && "mousemove" === e.type
                      ? ((it = e.screenX - ut.screenX), (ot = e.screenY - ut.screenY))
                      : (ot = it = 0),
                    (ut = e)),
                  it);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ot;
            },
          }),
          gt = rt(pt),
          ht = rt(R({}, pt, { dataTransfer: 0 })),
          mt = rt(R({}, ct, { relatedTarget: 0 })),
          wt = rt(R({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          bt = R({}, st, {
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
          }),
          yt = rt(bt),
          Lt = rt(R({}, st, { data: 0 })),
          Mt = {
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
            MozPrintableKey: "Unidentified",
          },
          vt = {
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
            224: "Meta",
          },
          Ct = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function jt(e) {
          var n = this.nativeEvent;
          return n.getModifierState ? n.getModifierState(e) : !!(e = Ct[e]) && !!n[e];
        }
        function kt() {
          return jt;
        }
        var It = R({}, ct, {
            key: function (e) {
              if (e.key) {
                var n = Mt[e.key] || e.key;
                if ("Unidentified" !== n) return n;
              }
              return "keypress" === e.type
                ? 13 === (e = tt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? vt[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: kt,
            charCode: function (e) {
              return "keypress" === e.type ? tt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type ? tt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
          }),
          St = rt(It),
          Nt = rt(
            R({}, pt, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tt = rt(
            R({}, ct, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: kt,
            })
          ),
          Et = rt(R({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Dt = R({}, pt, {
            deltaX: function (e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          xt = rt(Dt),
          zt = [9, 13, 27, 32],
          At = l && "CompositionEvent" in window,
          Pt = null;
        l && "documentMode" in document && (Pt = document.documentMode);
        var Ot = l && "TextEvent" in window && !Pt,
          Rt = l && (!At || (Pt && 8 < Pt && 11 >= Pt)),
          Qt = String.fromCharCode(32),
          Yt = !1;
        function Ut(e, n) {
          switch (e) {
            case "keyup":
              return -1 !== zt.indexOf(n.keyCode);
            case "keydown":
              return 229 !== n.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bt(e) {
          return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Jt = !1;
        var _t = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Gt(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === n ? !!_t[e.type] : "textarea" === n;
        }
        function Zt(e, n, t, f) {
          Ie(f),
            0 < (n = Ff(n, "onChange")).length &&
              ((t = new lt("onChange", "change", null, t, f)), e.push({ event: t, listeners: n }));
        }
        var Ht = null,
          Ft = null;
        function Wt(e) {
          Yf(e, 0);
        }
        function Vt(e) {
          if (F(Ma(e))) return e;
        }
        function Kt(e, n) {
          if ("change" === e) return n;
        }
        var Xt = !1;
        if (l) {
          var qt;
          if (l) {
            var $t = "oninput" in document;
            if (!$t) {
              var ef = document.createElement("div");
              ef.setAttribute("oninput", "return;"), ($t = "function" === typeof ef.oninput);
            }
            qt = $t;
          } else qt = !1;
          Xt = qt && (!document.documentMode || 9 < document.documentMode);
        }
        function nf() {
          Ht && (Ht.detachEvent("onpropertychange", tf), (Ft = Ht = null));
        }
        function tf(e) {
          if ("value" === e.propertyName && Vt(Ft)) {
            var n = [];
            Zt(n, Ft, e, Me(e)), De(Wt, n);
          }
        }
        function ff(e, n, t) {
          "focusin" === e ? (nf(), (Ft = t), (Ht = n).attachEvent("onpropertychange", tf)) : "focusout" === e && nf();
        }
        function af(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Vt(Ft);
        }
        function rf(e, n) {
          if ("click" === e) return Vt(n);
        }
        function of(e, n) {
          if ("input" === e || "change" === e) return Vt(n);
        }
        var uf =
          "function" === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (e === n && (0 !== e || 1 / e === 1 / n)) || (e !== e && n !== n);
              };
        function sf(e, n) {
          if (uf(e, n)) return !0;
          if ("object" !== typeof e || null === e || "object" !== typeof n || null === n) return !1;
          var t = Object.keys(e),
            f = Object.keys(n);
          if (t.length !== f.length) return !1;
          for (f = 0; f < t.length; f++) {
            var a = t[f];
            if (!c.call(n, a) || !uf(e[a], n[a])) return !1;
          }
          return !0;
        }
        function lf(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cf(e, n) {
          var t,
            f = lf(e);
          for (e = 0; f; ) {
            if (3 === f.nodeType) {
              if (((t = e + f.textContent.length), e <= n && t >= n)) return { node: f, offset: n - e };
              e = t;
            }
            e: {
              for (; f; ) {
                if (f.nextSibling) {
                  f = f.nextSibling;
                  break e;
                }
                f = f.parentNode;
              }
              f = void 0;
            }
            f = lf(f);
          }
        }
        function df(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? df(e, n.parentNode)
                  : "contains" in e
                  ? e.contains(n)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function pf() {
          for (var e = window, n = W(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = "string" === typeof n.contentWindow.location.href;
            } catch (f) {
              t = !1;
            }
            if (!t) break;
            n = W((e = n.contentWindow).document);
          }
          return n;
        }
        function gf(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (("input" === n &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === n ||
              "true" === e.contentEditable)
          );
        }
        function hf(e) {
          var n = pf(),
            t = e.focusedElem,
            f = e.selectionRange;
          if (n !== t && t && t.ownerDocument && df(t.ownerDocument.documentElement, t)) {
            if (null !== f && gf(t))
              if (((n = f.start), void 0 === (e = f.end) && (e = n), "selectionStart" in t))
                (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
              else if ((e = ((n = t.ownerDocument || document) && n.defaultView) || window).getSelection) {
                e = e.getSelection();
                var a = t.textContent.length,
                  r = Math.min(f.start, a);
                (f = void 0 === f.end ? r : Math.min(f.end, a)),
                  !e.extend && r > f && ((a = f), (f = r), (r = a)),
                  (a = cf(t, r));
                var i = cf(t, f);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((n = n.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  r > f ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); )
              1 === e.nodeType && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" === typeof t.focus && t.focus(), t = 0; t < n.length; t++)
              ((e = n[t]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mf = l && "documentMode" in document && 11 >= document.documentMode,
          wf = null,
          bf = null,
          yf = null,
          Lf = !1;
        function Mf(e, n, t) {
          var f = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
          Lf ||
            null == wf ||
            wf !== W(f) ||
            ("selectionStart" in (f = wf) && gf(f)
              ? (f = { start: f.selectionStart, end: f.selectionEnd })
              : (f = {
                  anchorNode: (f = ((f.ownerDocument && f.ownerDocument.defaultView) || window).getSelection())
                    .anchorNode,
                  anchorOffset: f.anchorOffset,
                  focusNode: f.focusNode,
                  focusOffset: f.focusOffset,
                }),
            (yf && sf(yf, f)) ||
              ((yf = f),
              0 < (f = Ff(bf, "onSelect")).length &&
                ((n = new lt("onSelect", "select", null, n, t)), e.push({ event: n, listeners: f }), (n.target = wf))));
        }
        function vf(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t
          );
        }
        var Cf = {
            animationend: vf("Animation", "AnimationEnd"),
            animationiteration: vf("Animation", "AnimationIteration"),
            animationstart: vf("Animation", "AnimationStart"),
            transitionend: vf("Transition", "TransitionEnd"),
          },
          jf = {},
          kf = {};
        function If(e) {
          if (jf[e]) return jf[e];
          if (!Cf[e]) return e;
          var n,
            t = Cf[e];
          for (n in t) if (t.hasOwnProperty(n) && n in kf) return (jf[e] = t[n]);
          return e;
        }
        l &&
          ((kf = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Cf.animationend.animation,
            delete Cf.animationiteration.animation,
            delete Cf.animationstart.animation),
          "TransitionEvent" in window || delete Cf.transitionend.transition);
        var Sf = If("animationend"),
          Nf = If("animationiteration"),
          Tf = If("animationstart"),
          Ef = If("transitionend"),
          Df = new Map(),
          xf =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function zf(e, n) {
          Df.set(e, n), u(n, [e]);
        }
        for (var Af = 0; Af < xf.length; Af++) {
          var Pf = xf[Af];
          zf(Pf.toLowerCase(), "on" + (Pf[0].toUpperCase() + Pf.slice(1)));
        }
        zf(Sf, "onAnimationEnd"),
          zf(Nf, "onAnimationIteration"),
          zf(Tf, "onAnimationStart"),
          zf("dblclick", "onDoubleClick"),
          zf("focusin", "onFocus"),
          zf("focusout", "onBlur"),
          zf(Ef, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
          ),
          u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
          u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
          u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Of =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Of));
        function Qf(e, n, t) {
          var f = e.type || "unknown-event";
          (e.currentTarget = t),
            (function (e, n, t, f, a, i, o, u, s) {
              if ((Be.apply(this, arguments), Oe)) {
                if (!Oe) throw Error(r(198));
                var l = Re;
                (Oe = !1), (Re = null), Qe || ((Qe = !0), (Ye = l));
              }
            })(f, n, void 0, e),
            (e.currentTarget = null);
        }
        function Yf(e, n) {
          n = 0 !== (4 & n);
          for (var t = 0; t < e.length; t++) {
            var f = e[t],
              a = f.event;
            f = f.listeners;
            e: {
              var r = void 0;
              if (n)
                for (var i = f.length - 1; 0 <= i; i--) {
                  var o = f[i],
                    u = o.instance,
                    s = o.currentTarget;
                  if (((o = o.listener), u !== r && a.isPropagationStopped())) break e;
                  Qf(a, o, s), (r = u);
                }
              else
                for (i = 0; i < f.length; i++) {
                  if (
                    ((u = (o = f[i]).instance),
                    (s = o.currentTarget),
                    (o = o.listener),
                    u !== r && a.isPropagationStopped())
                  )
                    break e;
                  Qf(a, o, s), (r = u);
                }
            }
          }
          if (Qe) throw ((e = Ye), (Qe = !1), (Ye = null), e);
        }
        function Uf(e, n) {
          var t = n[ma];
          void 0 === t && (t = n[ma] = new Set());
          var f = e + "__bubble";
          t.has(f) || (Gf(n, e, 2, !1), t.add(f));
        }
        function Bf(e, n, t) {
          var f = 0;
          n && (f |= 4), Gf(t, e, f, n);
        }
        var Jf = "_reactListening" + Math.random().toString(36).slice(2);
        function _f(e) {
          if (!e[Jf]) {
            (e[Jf] = !0),
              i.forEach(function (n) {
                "selectionchange" !== n && (Rf.has(n) || Bf(n, !1, e), Bf(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[Jf] || ((n[Jf] = !0), Bf("selectionchange", !1, n));
          }
        }
        function Gf(e, n, t, f) {
          switch (Xn(n)) {
            case 1:
              var a = Hn;
              break;
            case 4:
              a = Fn;
              break;
            default:
              a = Wn;
          }
          (t = a.bind(null, n, t, e)),
            (a = void 0),
            !ze || ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) || (a = !0),
            f
              ? void 0 !== a
                ? e.addEventListener(n, t, { capture: !0, passive: a })
                : e.addEventListener(n, t, !0)
              : void 0 !== a
              ? e.addEventListener(n, t, { passive: a })
              : e.addEventListener(n, t, !1);
        }
        function Zf(e, n, t, f, a) {
          var r = f;
          if (0 === (1 & n) && 0 === (2 & n) && null !== f)
            e: for (;;) {
              if (null === f) return;
              var i = f.tag;
              if (3 === i || 4 === i) {
                var o = f.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = f.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a || (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    f = r = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              f = f.return;
            }
          De(function () {
            var f = r,
              a = Me(t),
              i = [];
            e: {
              var o = Df.get(e);
              if (void 0 !== o) {
                var u = lt,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tt(t)) break e;
                  case "keydown":
                  case "keyup":
                    u = St;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mt);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mt);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mt;
                    break;
                  case "click":
                    if (2 === t.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = gt;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = ht;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Tt;
                    break;
                  case Sf:
                  case Nf:
                  case Tf:
                    u = wt;
                    break;
                  case Ef:
                    u = Et;
                    break;
                  case "scroll":
                    u = dt;
                    break;
                  case "wheel":
                    u = xt;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = yt;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Nt;
                }
                var l = 0 !== (4 & n),
                  c = !l && "scroll" === e,
                  d = l ? (null !== o ? o + "Capture" : null) : o;
                l = [];
                for (var p, g = f; null !== g; ) {
                  var h = (p = g).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h), null !== d && null != (h = xe(g, d)) && l.push(Hf(g, h, p))),
                    c)
                  )
                    break;
                  g = g.return;
                }
                0 < l.length && ((o = new u(o, s, null, t, a)), i.push({ event: o, listeners: l }));
              }
            }
            if (0 === (7 & n)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  t === Le ||
                  !(s = t.relatedTarget || t.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || o) &&
                  ((o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window),
                  u
                    ? ((u = f),
                      null !== (s = (s = t.relatedTarget || t.toElement) ? ya(s) : null) &&
                        (s !== (c = Je(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = f)),
                  u !== s))
              ) {
                if (
                  ((l = gt),
                  (h = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (g = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((l = Nt), (h = "onPointerLeave"), (d = "onPointerEnter"), (g = "pointer")),
                  (c = null == u ? o : Ma(u)),
                  (p = null == s ? o : Ma(s)),
                  ((o = new l(h, g + "leave", u, t, a)).target = c),
                  (o.relatedTarget = p),
                  (h = null),
                  ya(a) === f && (((l = new l(d, g + "enter", s, t, a)).target = p), (l.relatedTarget = c), (h = l)),
                  (c = h),
                  u && s)
                )
                  e: {
                    for (d = s, g = 0, p = l = u; p; p = Wf(p)) g++;
                    for (p = 0, h = d; h; h = Wf(h)) p++;
                    for (; 0 < g - p; ) (l = Wf(l)), g--;
                    for (; 0 < p - g; ) (d = Wf(d)), p--;
                    for (; g--; ) {
                      if (l === d || (null !== d && l === d.alternate)) break e;
                      (l = Wf(l)), (d = Wf(d));
                    }
                    l = null;
                  }
                else l = null;
                null !== u && Vf(i, o, u, l, !1), null !== s && null !== c && Vf(i, c, s, l, !0);
              }
              if (
                "select" === (u = (o = f ? Ma(f) : window).nodeName && o.nodeName.toLowerCase()) ||
                ("input" === u && "file" === o.type)
              )
                var m = Kt;
              else if (Gt(o))
                if (Xt) m = of;
                else {
                  m = af;
                  var w = ff;
                }
              else
                (u = o.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (m = rf);
              switch (
                (m && (m = m(e, f))
                  ? Zt(i, m, t, a)
                  : (w && w(e, o, f),
                    "focusout" === e &&
                      (w = o._wrapperState) &&
                      w.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (w = f ? Ma(f) : window),
                e)
              ) {
                case "focusin":
                  (Gt(w) || "true" === w.contentEditable) && ((wf = w), (bf = f), (yf = null));
                  break;
                case "focusout":
                  yf = bf = wf = null;
                  break;
                case "mousedown":
                  Lf = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (Lf = !1), Mf(i, t, a);
                  break;
                case "selectionchange":
                  if (mf) break;
                case "keydown":
                case "keyup":
                  Mf(i, t, a);
              }
              var b;
              if (At)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Jt
                  ? Ut(e, t) && (y = "onCompositionEnd")
                  : "keydown" === e && 229 === t.keyCode && (y = "onCompositionStart");
              y &&
                (Rt &&
                  "ko" !== t.locale &&
                  (Jt || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Jt && (b = nt())
                    : (($n = "value" in (qn = a) ? qn.value : qn.textContent), (Jt = !0))),
                0 < (w = Ff(f, y)).length &&
                  ((y = new Lt(y, e, null, t, a)),
                  i.push({ event: y, listeners: w }),
                  b ? (y.data = b) : null !== (b = Bt(t)) && (y.data = b))),
                (b = Ot
                  ? (function (e, n) {
                      switch (e) {
                        case "compositionend":
                          return Bt(n);
                        case "keypress":
                          return 32 !== n.which ? null : ((Yt = !0), Qt);
                        case "textInput":
                          return (e = n.data) === Qt && Yt ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (Jt)
                        return "compositionend" === e || (!At && Ut(e, n))
                          ? ((e = nt()), (et = $n = qn = null), (Jt = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case "compositionend":
                          return Rt && "ko" !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (f = Ff(f, "onBeforeInput")).length &&
                  ((a = new Lt("onBeforeInput", "beforeinput", null, t, a)),
                  i.push({ event: a, listeners: f }),
                  (a.data = b));
            }
            Yf(i, n);
          });
        }
        function Hf(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function Ff(e, n) {
          for (var t = n + "Capture", f = []; null !== e; ) {
            var a = e,
              r = a.stateNode;
            5 === a.tag &&
              null !== r &&
              ((a = r),
              null != (r = xe(e, t)) && f.unshift(Hf(e, r, a)),
              null != (r = xe(e, n)) && f.push(Hf(e, r, a))),
              (e = e.return);
          }
          return f;
        }
        function Wf(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Vf(e, n, t, f, a) {
          for (var r = n._reactName, i = []; null !== t && t !== f; ) {
            var o = t,
              u = o.alternate,
              s = o.stateNode;
            if (null !== u && u === f) break;
            5 === o.tag &&
              null !== s &&
              ((o = s),
              a
                ? null != (u = xe(t, r)) && i.unshift(Hf(t, u, o))
                : a || (null != (u = xe(t, r)) && i.push(Hf(t, u, o)))),
              (t = t.return);
          }
          0 !== i.length && e.push({ event: n, listeners: i });
        }
        var Kf = /\r\n?/g,
          Xf = /\u0000|\uFFFD/g;
        function qf(e) {
          return ("string" === typeof e ? e : "" + e).replace(Kf, "\n").replace(Xf, "");
        }
        function $f(e, n, t) {
          if (((n = qf(n)), qf(e) !== n && t)) throw Error(r(425));
        }
        function ea() {}
        var na = null,
          ta = null;
        function fa(e, n) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof n.children ||
            "number" === typeof n.children ||
            ("object" === typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var aa = "function" === typeof setTimeout ? setTimeout : void 0,
          ra = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(ua);
                }
              : aa;
        function ua(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, n) {
          var t = n,
            f = 0;
          do {
            var a = t.nextSibling;
            if ((e.removeChild(t), a && 8 === a.nodeType))
              if ("/$" === (t = a.data)) {
                if (0 === f) return e.removeChild(a), void _n(n);
                f--;
              } else ("$" !== t && "$?" !== t && "$!" !== t) || f++;
            t = a;
          } while (t);
          _n(n);
        }
        function la(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
              if ("/$" === n) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("$" === t || "$!" === t || "$?" === t) {
                if (0 === n) return e;
                n--;
              } else "/$" === t && n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          pa = "__reactFiber$" + da,
          ga = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          wa = "__reactListeners$" + da,
          ba = "__reactHandles$" + da;
        function ya(e) {
          var n = e[pa];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[ha] || t[pa])) {
              if (((t = n.alternate), null !== n.child || (null !== t && null !== t.child)))
                for (e = ca(e); null !== e; ) {
                  if ((t = e[pa])) return t;
                  e = ca(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function La(e) {
          return !(e = e[pa] || e[ha]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
        }
        function Ma(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(r(33));
        }
        function va(e) {
          return e[ga] || null;
        }
        var Ca = [],
          ja = -1;
        function ka(e) {
          return { current: e };
        }
        function Ia(e) {
          0 > ja || ((e.current = Ca[ja]), (Ca[ja] = null), ja--);
        }
        function Sa(e, n) {
          ja++, (Ca[ja] = e.current), (e.current = n);
        }
        var Na = {},
          Ta = ka(Na),
          Ea = ka(!1),
          Da = Na;
        function xa(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Na;
          var f = e.stateNode;
          if (f && f.__reactInternalMemoizedUnmaskedChildContext === n)
            return f.__reactInternalMemoizedMaskedChildContext;
          var a,
            r = {};
          for (a in t) r[a] = n[a];
          return (
            f &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n),
              (e.__reactInternalMemoizedMaskedChildContext = r)),
            r
          );
        }
        function za(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          Ia(Ea), Ia(Ta);
        }
        function Pa(e, n, t) {
          if (Ta.current !== Na) throw Error(r(168));
          Sa(Ta, n), Sa(Ea, t);
        }
        function Oa(e, n, t) {
          var f = e.stateNode;
          if (((n = n.childContextTypes), "function" !== typeof f.getChildContext)) return t;
          for (var a in (f = f.getChildContext())) if (!(a in n)) throw Error(r(108, _(e) || "Unknown", a));
          return R({}, t, f);
        }
        function Ra(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Na),
            (Da = Ta.current),
            Sa(Ta, e),
            Sa(Ea, Ea.current),
            !0
          );
        }
        function Qa(e, n, t) {
          var f = e.stateNode;
          if (!f) throw Error(r(169));
          t
            ? ((e = Oa(e, n, Da)), (f.__reactInternalMemoizedMergedChildContext = e), Ia(Ea), Ia(Ta), Sa(Ta, e))
            : Ia(Ea),
            Sa(Ea, t);
        }
        var Ya = null,
          Ua = !1,
          Ba = !1;
        function Ja(e) {
          null === Ya ? (Ya = [e]) : Ya.push(e);
        }
        function _a() {
          if (!Ba && null !== Ya) {
            Ba = !0;
            var e = 0,
              n = Ln;
            try {
              var t = Ya;
              for (Ln = 1; e < t.length; e++) {
                var f = t[e];
                do {
                  f = f(!0);
                } while (null !== f);
              }
              (Ya = null), (Ua = !1);
            } catch (a) {
              throw (null !== Ya && (Ya = Ya.slice(e + 1)), Fe($e, _a), a);
            } finally {
              (Ln = n), (Ba = !1);
            }
          }
          return null;
        }
        var Ga = [],
          Za = 0,
          Ha = null,
          Fa = 0,
          Wa = [],
          Va = 0,
          Ka = null,
          Xa = 1,
          qa = "";
        function $a(e, n) {
          (Ga[Za++] = Fa), (Ga[Za++] = Ha), (Ha = e), (Fa = n);
        }
        function er(e, n, t) {
          (Wa[Va++] = Xa), (Wa[Va++] = qa), (Wa[Va++] = Ka), (Ka = e);
          var f = Xa;
          e = qa;
          var a = 32 - on(f) - 1;
          (f &= ~(1 << a)), (t += 1);
          var r = 32 - on(n) + a;
          if (30 < r) {
            var i = a - (a % 5);
            (r = (f & ((1 << i) - 1)).toString(32)),
              (f >>= i),
              (a -= i),
              (Xa = (1 << (32 - on(n) + a)) | (t << a) | f),
              (qa = r + e);
          } else (Xa = (1 << r) | (t << a) | f), (qa = e);
        }
        function nr(e) {
          null !== e.return && ($a(e, 1), er(e, 1, 0));
        }
        function tr(e) {
          for (; e === Ha; ) (Ha = Ga[--Za]), (Ga[Za] = null), (Fa = Ga[--Za]), (Ga[Za] = null);
          for (; e === Ka; )
            (Ka = Wa[--Va]), (Wa[Va] = null), (qa = Wa[--Va]), (Wa[Va] = null), (Xa = Wa[--Va]), (Wa[Va] = null);
        }
        var fr = null,
          ar = null,
          rr = !1,
          ir = null;
        function or(e, n) {
          var t = xs(5, null, null, 0);
          (t.elementType = "DELETED"),
            (t.stateNode = n),
            (t.return = e),
            null === (n = e.deletions) ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
        }
        function ur(e, n) {
          switch (e.tag) {
            case 5:
              var t = e.type;
              return (
                null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) &&
                ((e.stateNode = n), (fr = e), (ar = la(n.firstChild)), !0)
              );
            case 6:
              return (
                null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                ((e.stateNode = n), (fr = e), (ar = null), !0)
              );
            case 13:
              return (
                null !== (n = 8 !== n.nodeType ? null : n) &&
                ((t = null !== Ka ? { id: Xa, overflow: qa } : null),
                (e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }),
                ((t = xs(18, null, null, 0)).stateNode = n),
                (t.return = e),
                (e.child = t),
                (fr = e),
                (ar = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sr(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function lr(e) {
          if (rr) {
            var n = ar;
            if (n) {
              var t = n;
              if (!ur(e, n)) {
                if (sr(e)) throw Error(r(418));
                n = la(t.nextSibling);
                var f = fr;
                n && ur(e, n) ? or(f, t) : ((e.flags = (-4097 & e.flags) | 2), (rr = !1), (fr = e));
              }
            } else {
              if (sr(e)) throw Error(r(418));
              (e.flags = (-4097 & e.flags) | 2), (rr = !1), (fr = e);
            }
          }
        }
        function cr(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
          fr = e;
        }
        function dr(e) {
          if (e !== fr) return !1;
          if (!rr) return cr(e), (rr = !0), !1;
          var n;
          if (
            ((n = 3 !== e.tag) &&
              !(n = 5 !== e.tag) &&
              (n = "head" !== (n = e.type) && "body" !== n && !fa(e.type, e.memoizedProps)),
            n && (n = ar))
          ) {
            if (sr(e)) throw (pr(), Error(r(418)));
            for (; n; ) or(e, n), (n = la(n.nextSibling));
          }
          if ((cr(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ("/$" === t) {
                    if (0 === n) {
                      ar = la(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                }
                e = e.nextSibling;
              }
              ar = null;
            }
          } else ar = fr ? la(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pr() {
          for (var e = ar; e; ) e = la(e.nextSibling);
        }
        function gr() {
          (ar = fr = null), (rr = !1);
        }
        function hr(e) {
          null === ir ? (ir = [e]) : ir.push(e);
        }
        var mr = L.ReactCurrentBatchConfig;
        function wr(e, n, t) {
          if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(r(309));
                var f = t.stateNode;
              }
              if (!f) throw Error(r(147, e));
              var a = f,
                i = "" + e;
              return null !== n && null !== n.ref && "function" === typeof n.ref && n.ref._stringRef === i
                ? n.ref
                : ((n = function (e) {
                    var n = a.refs;
                    null === e ? delete n[i] : (n[i] = e);
                  }),
                  (n._stringRef = i),
                  n);
            }
            if ("string" !== typeof e) throw Error(r(284));
            if (!t._owner) throw Error(r(290, e));
          }
          return e;
        }
        function br(e, n) {
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(r(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
          );
        }
        function yr(e) {
          return (0, e._init)(e._payload);
        }
        function Lr(e) {
          function n(n, t) {
            if (e) {
              var f = n.deletions;
              null === f ? ((n.deletions = [t]), (n.flags |= 16)) : f.push(t);
            }
          }
          function t(t, f) {
            if (!e) return null;
            for (; null !== f; ) n(t, f), (f = f.sibling);
            return null;
          }
          function f(e, n) {
            for (e = new Map(); null !== n; ) null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
            return e;
          }
          function a(e, n) {
            return ((e = As(e, n)).index = 0), (e.sibling = null), e;
          }
          function i(n, t, f) {
            return (
              (n.index = f),
              e
                ? null !== (f = n.alternate)
                  ? (f = f.index) < t
                    ? ((n.flags |= 2), t)
                    : f
                  : ((n.flags |= 2), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function o(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function u(e, n, t, f) {
            return null === n || 6 !== n.tag
              ? (((n = Qs(t, e.mode, f)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function s(e, n, t, f) {
            var r = t.type;
            return r === C
              ? c(e, n, t.props.children, f, t.key)
              : null !== n &&
                (n.elementType === r || ("object" === typeof r && null !== r && r.$$typeof === x && yr(r) === n.type))
              ? (((f = a(n, t.props)).ref = wr(e, n, t)), (f.return = e), f)
              : (((f = Ps(t.type, t.key, t.props, null, e.mode, f)).ref = wr(e, n, t)), (f.return = e), f);
          }
          function l(e, n, t, f) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Ys(t, e.mode, f)).return = e), n)
              : (((n = a(n, t.children || [])).return = e), n);
          }
          function c(e, n, t, f, r) {
            return null === n || 7 !== n.tag
              ? (((n = Os(t, e.mode, f, r)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function d(e, n, t) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return ((n = Qs("" + n, e.mode, t)).return = e), n;
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case M:
                  return ((t = Ps(n.type, n.key, n.props, null, e.mode, t)).ref = wr(e, null, n)), (t.return = e), t;
                case v:
                  return ((n = Ys(n, e.mode, t)).return = e), n;
                case x:
                  return d(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || P(n)) return ((n = Os(n, e.mode, t, null)).return = e), n;
              br(e, n);
            }
            return null;
          }
          function p(e, n, t, f) {
            var a = null !== n ? n.key : null;
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return null !== a ? null : u(e, n, "" + t, f);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case M:
                  return t.key === a ? s(e, n, t, f) : null;
                case v:
                  return t.key === a ? l(e, n, t, f) : null;
                case x:
                  return p(e, n, (a = t._init)(t._payload), f);
              }
              if (ne(t) || P(t)) return null !== a ? null : c(e, n, t, f, null);
              br(e, t);
            }
            return null;
          }
          function g(e, n, t, f, a) {
            if (("string" === typeof f && "" !== f) || "number" === typeof f)
              return u(n, (e = e.get(t) || null), "" + f, a);
            if ("object" === typeof f && null !== f) {
              switch (f.$$typeof) {
                case M:
                  return s(n, (e = e.get(null === f.key ? t : f.key) || null), f, a);
                case v:
                  return l(n, (e = e.get(null === f.key ? t : f.key) || null), f, a);
                case x:
                  return g(e, n, t, (0, f._init)(f._payload), a);
              }
              if (ne(f) || P(f)) return c(n, (e = e.get(t) || null), f, a, null);
              br(n, f);
            }
            return null;
          }
          function h(a, r, o, u) {
            for (var s = null, l = null, c = r, h = (r = 0), m = null; null !== c && h < o.length; h++) {
              c.index > h ? ((m = c), (c = null)) : (m = c.sibling);
              var w = p(a, c, o[h], u);
              if (null === w) {
                null === c && (c = m);
                break;
              }
              e && c && null === w.alternate && n(a, c),
                (r = i(w, r, h)),
                null === l ? (s = w) : (l.sibling = w),
                (l = w),
                (c = m);
            }
            if (h === o.length) return t(a, c), rr && $a(a, h), s;
            if (null === c) {
              for (; h < o.length; h++)
                null !== (c = d(a, o[h], u)) && ((r = i(c, r, h)), null === l ? (s = c) : (l.sibling = c), (l = c));
              return rr && $a(a, h), s;
            }
            for (c = f(a, c); h < o.length; h++)
              null !== (m = g(c, a, h, o[h], u)) &&
                (e && null !== m.alternate && c.delete(null === m.key ? h : m.key),
                (r = i(m, r, h)),
                null === l ? (s = m) : (l.sibling = m),
                (l = m));
            return (
              e &&
                c.forEach(function (e) {
                  return n(a, e);
                }),
              rr && $a(a, h),
              s
            );
          }
          function m(a, o, u, s) {
            var l = P(u);
            if ("function" !== typeof l) throw Error(r(150));
            if (null == (u = l.call(u))) throw Error(r(151));
            for (
              var c = (l = null), h = o, m = (o = 0), w = null, b = u.next();
              null !== h && !b.done;
              m++, b = u.next()
            ) {
              h.index > m ? ((w = h), (h = null)) : (w = h.sibling);
              var y = p(a, h, b.value, s);
              if (null === y) {
                null === h && (h = w);
                break;
              }
              e && h && null === y.alternate && n(a, h),
                (o = i(y, o, m)),
                null === c ? (l = y) : (c.sibling = y),
                (c = y),
                (h = w);
            }
            if (b.done) return t(a, h), rr && $a(a, m), l;
            if (null === h) {
              for (; !b.done; m++, b = u.next())
                null !== (b = d(a, b.value, s)) && ((o = i(b, o, m)), null === c ? (l = b) : (c.sibling = b), (c = b));
              return rr && $a(a, m), l;
            }
            for (h = f(a, h); !b.done; m++, b = u.next())
              null !== (b = g(h, a, m, b.value, s)) &&
                (e && null !== b.alternate && h.delete(null === b.key ? m : b.key),
                (o = i(b, o, m)),
                null === c ? (l = b) : (c.sibling = b),
                (c = b));
            return (
              e &&
                h.forEach(function (e) {
                  return n(a, e);
                }),
              rr && $a(a, m),
              l
            );
          }
          return function e(f, r, i, u) {
            if (
              ("object" === typeof i && null !== i && i.type === C && null === i.key && (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case M:
                  e: {
                    for (var s = i.key, l = r; null !== l; ) {
                      if (l.key === s) {
                        if ((s = i.type) === C) {
                          if (7 === l.tag) {
                            t(f, l.sibling), ((r = a(l, i.props.children)).return = f), (f = r);
                            break e;
                          }
                        } else if (
                          l.elementType === s ||
                          ("object" === typeof s && null !== s && s.$$typeof === x && yr(s) === l.type)
                        ) {
                          t(f, l.sibling), ((r = a(l, i.props)).ref = wr(f, l, i)), (r.return = f), (f = r);
                          break e;
                        }
                        t(f, l);
                        break;
                      }
                      n(f, l), (l = l.sibling);
                    }
                    i.type === C
                      ? (((r = Os(i.props.children, f.mode, u, i.key)).return = f), (f = r))
                      : (((u = Ps(i.type, i.key, i.props, null, f.mode, u)).ref = wr(f, r, i)),
                        (u.return = f),
                        (f = u));
                  }
                  return o(f);
                case v:
                  e: {
                    for (l = i.key; null !== r; ) {
                      if (r.key === l) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          t(f, r.sibling), ((r = a(r, i.children || [])).return = f), (f = r);
                          break e;
                        }
                        t(f, r);
                        break;
                      }
                      n(f, r), (r = r.sibling);
                    }
                    ((r = Ys(i, f.mode, u)).return = f), (f = r);
                  }
                  return o(f);
                case x:
                  return e(f, r, (l = i._init)(i._payload), u);
              }
              if (ne(i)) return h(f, r, i, u);
              if (P(i)) return m(f, r, i, u);
              br(f, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== r && 6 === r.tag
                  ? (t(f, r.sibling), ((r = a(r, i)).return = f), (f = r))
                  : (t(f, r), ((r = Qs(i, f.mode, u)).return = f), (f = r)),
                o(f))
              : t(f, r);
          };
        }
        var Mr = Lr(!0),
          vr = Lr(!1),
          Cr = ka(null),
          jr = null,
          kr = null,
          Ir = null;
        function Sr() {
          Ir = kr = jr = null;
        }
        function Nr(e) {
          var n = Cr.current;
          Ia(Cr), (e._currentValue = n);
        }
        function Tr(e, n, t) {
          for (; null !== e; ) {
            var f = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== f && (f.childLanes |= n))
                : null !== f && (f.childLanes & n) !== n && (f.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function Er(e, n) {
          (jr = e),
            (Ir = kr = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & n) && (Lo = !0), (e.firstContext = null));
        }
        function Dr(e) {
          var n = e._currentValue;
          if (Ir !== e)
            if (((e = { context: e, memoizedValue: n, next: null }), null === kr)) {
              if (null === jr) throw Error(r(308));
              (kr = e), (jr.dependencies = { lanes: 0, firstContext: e });
            } else kr = kr.next = e;
          return n;
        }
        var xr = null;
        function zr(e) {
          null === xr ? (xr = [e]) : xr.push(e);
        }
        function Ar(e, n, t, f) {
          var a = n.interleaved;
          return null === a ? ((t.next = t), zr(n)) : ((t.next = a.next), (a.next = t)), (n.interleaved = t), Pr(e, f);
        }
        function Pr(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
            (e.childLanes |= n), null !== (t = e.alternate) && (t.childLanes |= n), (t = e), (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var Or = !1;
        function Rr(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Qr(e, n) {
          (e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Yr(e, n) {
          return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
        }
        function Ur(e, n, t) {
          var f = e.updateQueue;
          if (null === f) return null;
          if (((f = f.shared), 0 !== (2 & Tu))) {
            var a = f.pending;
            return null === a ? (n.next = n) : ((n.next = a.next), (a.next = n)), (f.pending = n), Pr(e, t);
          }
          return (
            null === (a = f.interleaved) ? ((n.next = n), zr(f)) : ((n.next = a.next), (a.next = n)),
            (f.interleaved = n),
            Pr(e, t)
          );
        }
        function Br(e, n, t) {
          if (null !== (n = n.updateQueue) && ((n = n.shared), 0 !== (4194240 & t))) {
            var f = n.lanes;
            (t |= f &= e.pendingLanes), (n.lanes = t), yn(e, t);
          }
        }
        function Jr(e, n) {
          var t = e.updateQueue,
            f = e.alternate;
          if (null !== f && t === (f = f.updateQueue)) {
            var a = null,
              r = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: t.eventTime,
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: t.callback,
                  next: null,
                };
                null === r ? (a = r = i) : (r = r.next = i), (t = t.next);
              } while (null !== t);
              null === r ? (a = r = n) : (r = r.next = n);
            } else a = r = n;
            return (
              (t = {
                baseState: f.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: r,
                shared: f.shared,
                effects: f.effects,
              }),
              void (e.updateQueue = t)
            );
          }
          null === (e = t.lastBaseUpdate) ? (t.firstBaseUpdate = n) : (e.next = n), (t.lastBaseUpdate = n);
        }
        function _r(e, n, t, f) {
          var a = e.updateQueue;
          Or = !1;
          var r = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var u = o,
              s = u.next;
            (u.next = null), null === i ? (r = s) : (i.next = s), (i = u);
            var l = e.alternate;
            null !== l &&
              (o = (l = l.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (l.firstBaseUpdate = s) : (o.next = s), (l.lastBaseUpdate = u));
          }
          if (null !== r) {
            var c = a.baseState;
            for (i = 0, l = s = u = null, o = r; ; ) {
              var d = o.lane,
                p = o.eventTime;
              if ((f & d) === d) {
                null !== l &&
                  (l = l.next =
                    { eventTime: p, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
                e: {
                  var g = e,
                    h = o;
                  switch (((d = n), (p = t), h.tag)) {
                    case 1:
                      if ("function" === typeof (g = h.payload)) {
                        c = g.call(p, c, d);
                        break e;
                      }
                      c = g;
                      break e;
                    case 3:
                      g.flags = (-65537 & g.flags) | 128;
                    case 0:
                      if (null === (d = "function" === typeof (g = h.payload) ? g.call(p, c, d) : g) || void 0 === d)
                        break e;
                      c = R({}, c, d);
                      break e;
                    case 2:
                      Or = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64), null === (d = a.effects) ? (a.effects = [o]) : d.push(o));
              } else
                (p = { eventTime: p, lane: d, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
                  null === l ? ((s = l = p), (u = c)) : (l = l.next = p),
                  (i |= d);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (d = o).next), (d.next = null), (a.lastBaseUpdate = d), (a.shared.pending = null);
              }
            }
            if (
              (null === l && (u = c),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = l),
              null !== (n = a.shared.interleaved))
            ) {
              a = n;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== n);
            } else null === r && (a.shared.lanes = 0);
            (Ru |= i), (e.lanes = i), (e.memoizedState = c);
          }
        }
        function Gr(e, n, t) {
          if (((e = n.effects), (n.effects = null), null !== e))
            for (n = 0; n < e.length; n++) {
              var f = e[n],
                a = f.callback;
              if (null !== a) {
                if (((f.callback = null), (f = t), "function" !== typeof a)) throw Error(r(191, a));
                a.call(f);
              }
            }
        }
        var Zr = {},
          Hr = ka(Zr),
          Fr = ka(Zr),
          Wr = ka(Zr);
        function Vr(e) {
          if (e === Zr) throw Error(r(174));
          return e;
        }
        function Kr(e, n) {
          switch ((Sa(Wr, n), Sa(Fr, e), Sa(Hr, Zr), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : ue(null, "");
              break;
            default:
              n = ue((n = (e = 8 === e ? n.parentNode : n).namespaceURI || null), (e = e.tagName));
          }
          Ia(Hr), Sa(Hr, n);
        }
        function Xr() {
          Ia(Hr), Ia(Fr), Ia(Wr);
        }
        function qr(e) {
          Vr(Wr.current);
          var n = Vr(Hr.current),
            t = ue(n, e.type);
          n !== t && (Sa(Fr, e), Sa(Hr, t));
        }
        function $r(e) {
          Fr.current === e && (Ia(Hr), Ia(Fr));
        }
        var ei = ka(0);
        function ni(e) {
          for (var n = e; null !== n; ) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)) return n;
            } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
              if (0 !== (128 & n.flags)) return n;
            } else if (null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
          return null;
        }
        var ti = [];
        function fi() {
          for (var e = 0; e < ti.length; e++) ti[e]._workInProgressVersionPrimary = null;
          ti.length = 0;
        }
        var ai = L.ReactCurrentDispatcher,
          ri = L.ReactCurrentBatchConfig,
          ii = 0,
          oi = null,
          ui = null,
          si = null,
          li = !1,
          ci = !1,
          di = 0,
          pi = 0;
        function gi() {
          throw Error(r(321));
        }
        function hi(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++) if (!uf(e[t], n[t])) return !1;
          return !0;
        }
        function mi(e, n, t, f, a, i) {
          if (
            ((ii = i),
            (oi = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? $i : eo),
            (e = t(f, a)),
            ci)
          ) {
            i = 0;
            do {
              if (((ci = !1), (di = 0), 25 <= i)) throw Error(r(301));
              (i += 1), (si = ui = null), (n.updateQueue = null), (ai.current = no), (e = t(f, a));
            } while (ci);
          }
          if (((ai.current = qi), (n = null !== ui && null !== ui.next), (ii = 0), (si = ui = oi = null), (li = !1), n))
            throw Error(r(300));
          return e;
        }
        function wi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function bi() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === si ? (oi.memoizedState = si = e) : (si = si.next = e), si;
        }
        function yi() {
          if (null === ui) {
            var e = oi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ui.next;
          var n = null === si ? oi.memoizedState : si.next;
          if (null !== n) (si = n), (ui = e);
          else {
            if (null === e) throw Error(r(310));
            (e = {
              memoizedState: (ui = e).memoizedState,
              baseState: ui.baseState,
              baseQueue: ui.baseQueue,
              queue: ui.queue,
              next: null,
            }),
              null === si ? (oi.memoizedState = si = e) : (si = si.next = e);
          }
          return si;
        }
        function Li(e, n) {
          return "function" === typeof n ? n(e) : n;
        }
        function Mi(e) {
          var n = yi(),
            t = n.queue;
          if (null === t) throw Error(r(311));
          t.lastRenderedReducer = e;
          var f = ui,
            a = f.baseQueue,
            i = t.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (f.baseQueue = a = i), (t.pending = null);
          }
          if (null !== a) {
            (i = a.next), (f = f.baseState);
            var u = (o = null),
              s = null,
              l = i;
            do {
              var c = l.lane;
              if ((ii & c) === c)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: l.action,
                      hasEagerState: l.hasEagerState,
                      eagerState: l.eagerState,
                      next: null,
                    }),
                  (f = l.hasEagerState ? l.eagerState : e(f, l.action));
              else {
                var d = {
                  lane: c,
                  action: l.action,
                  hasEagerState: l.hasEagerState,
                  eagerState: l.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (o = f)) : (s = s.next = d), (oi.lanes |= c), (Ru |= c);
              }
              l = l.next;
            } while (null !== l && l !== i);
            null === s ? (o = f) : (s.next = u),
              uf(f, n.memoizedState) || (Lo = !0),
              (n.memoizedState = f),
              (n.baseState = o),
              (n.baseQueue = s),
              (t.lastRenderedState = f);
          }
          if (null !== (e = t.interleaved)) {
            a = e;
            do {
              (i = a.lane), (oi.lanes |= i), (Ru |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function vi(e) {
          var n = yi(),
            t = n.queue;
          if (null === t) throw Error(r(311));
          t.lastRenderedReducer = e;
          var f = t.dispatch,
            a = t.pending,
            i = n.memoizedState;
          if (null !== a) {
            t.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            uf(i, n.memoizedState) || (Lo = !0),
              (n.memoizedState = i),
              null === n.baseQueue && (n.baseState = i),
              (t.lastRenderedState = i);
          }
          return [i, f];
        }
        function Ci() {}
        function ji(e, n) {
          var t = oi,
            f = yi(),
            a = n(),
            i = !uf(f.memoizedState, a);
          if (
            (i && ((f.memoizedState = a), (Lo = !0)),
            (f = f.queue),
            Oi(Si.bind(null, t, f, e), [e]),
            f.getSnapshot !== n || i || (null !== si && 1 & si.memoizedState.tag))
          ) {
            if (((t.flags |= 2048), Di(9, Ii.bind(null, t, f, a, n), void 0, null), null === Eu)) throw Error(r(349));
            0 !== (30 & ii) || ki(t, n, a);
          }
          return a;
        }
        function ki(e, n, t) {
          (e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = oi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }), (oi.updateQueue = n), (n.stores = [e]))
              : null === (t = n.stores)
              ? (n.stores = [e])
              : t.push(e);
        }
        function Ii(e, n, t, f) {
          (n.value = t), (n.getSnapshot = f), Ni(n) && Ti(e);
        }
        function Si(e, n, t) {
          return t(function () {
            Ni(n) && Ti(e);
          });
        }
        function Ni(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !uf(e, t);
          } catch (f) {
            return !0;
          }
        }
        function Ti(e) {
          var n = Pr(e, 1);
          null !== n && fs(n, e, 1, -1);
        }
        function Ei(e) {
          var n = bi();
          return (
            "function" === typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Li,
              lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = Wi.bind(null, oi, e)),
            [n.memoizedState, e]
          );
        }
        function Di(e, n, t, f) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: f, next: null }),
            null === (n = oi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }), (oi.updateQueue = n), (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((f = t.next), (t.next = e), (e.next = f), (n.lastEffect = e)),
            e
          );
        }
        function xi() {
          return yi().memoizedState;
        }
        function zi(e, n, t, f) {
          var a = bi();
          (oi.flags |= e), (a.memoizedState = Di(1 | n, t, void 0, void 0 === f ? null : f));
        }
        function Ai(e, n, t, f) {
          var a = yi();
          f = void 0 === f ? null : f;
          var r = void 0;
          if (null !== ui) {
            var i = ui.memoizedState;
            if (((r = i.destroy), null !== f && hi(f, i.deps))) return void (a.memoizedState = Di(n, t, r, f));
          }
          (oi.flags |= e), (a.memoizedState = Di(1 | n, t, r, f));
        }
        function Pi(e, n) {
          return zi(8390656, 8, e, n);
        }
        function Oi(e, n) {
          return Ai(2048, 8, e, n);
        }
        function Ri(e, n) {
          return Ai(4, 2, e, n);
        }
        function Qi(e, n) {
          return Ai(4, 4, e, n);
        }
        function Yi(e, n) {
          return "function" === typeof n
            ? ((e = e()),
              n(e),
              function () {
                n(null);
              })
            : null !== n && void 0 !== n
            ? ((e = e()),
              (n.current = e),
              function () {
                n.current = null;
              })
            : void 0;
        }
        function Ui(e, n, t) {
          return (t = null !== t && void 0 !== t ? t.concat([e]) : null), Ai(4, 4, Yi.bind(null, n, e), t);
        }
        function Bi() {}
        function Ji(e, n) {
          var t = yi();
          n = void 0 === n ? null : n;
          var f = t.memoizedState;
          return null !== f && null !== n && hi(n, f[1]) ? f[0] : ((t.memoizedState = [e, n]), e);
        }
        function _i(e, n) {
          var t = yi();
          n = void 0 === n ? null : n;
          var f = t.memoizedState;
          return null !== f && null !== n && hi(n, f[1]) ? f[0] : ((e = e()), (t.memoizedState = [e, n]), e);
        }
        function Gi(e, n, t) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (Lo = !0)), (e.memoizedState = t))
            : (uf(t, n) || ((t = mn()), (oi.lanes |= t), (Ru |= t), (e.baseState = !0)), n);
        }
        function Zi(e, n) {
          var t = Ln;
          (Ln = 0 !== t && 4 > t ? t : 4), e(!0);
          var f = ri.transition;
          ri.transition = {};
          try {
            e(!1), n();
          } finally {
            (Ln = t), (ri.transition = f);
          }
        }
        function Hi() {
          return yi().memoizedState;
        }
        function Fi(e, n, t) {
          var f = ts(e);
          if (((t = { lane: f, action: t, hasEagerState: !1, eagerState: null, next: null }), Vi(e))) Ki(n, t);
          else if (null !== (t = Ar(e, n, t, f))) {
            fs(t, e, f, ns()), Xi(t, n, f);
          }
        }
        function Wi(e, n, t) {
          var f = ts(e),
            a = { lane: f, action: t, hasEagerState: !1, eagerState: null, next: null };
          if (Vi(e)) Ki(n, a);
          else {
            var r = e.alternate;
            if (0 === e.lanes && (null === r || 0 === r.lanes) && null !== (r = n.lastRenderedReducer))
              try {
                var i = n.lastRenderedState,
                  o = r(i, t);
                if (((a.hasEagerState = !0), (a.eagerState = o), uf(o, i))) {
                  var u = n.interleaved;
                  return (
                    null === u ? ((a.next = a), zr(n)) : ((a.next = u.next), (u.next = a)), void (n.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (t = Ar(e, n, a, f)) && (fs(t, e, f, (a = ns())), Xi(t, n, f));
          }
        }
        function Vi(e) {
          var n = e.alternate;
          return e === oi || (null !== n && n === oi);
        }
        function Ki(e, n) {
          ci = li = !0;
          var t = e.pending;
          null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
        }
        function Xi(e, n, t) {
          if (0 !== (4194240 & t)) {
            var f = n.lanes;
            (t |= f &= e.pendingLanes), (n.lanes = t), yn(e, t);
          }
        }
        var qi = {
            readContext: Dr,
            useCallback: gi,
            useContext: gi,
            useEffect: gi,
            useImperativeHandle: gi,
            useInsertionEffect: gi,
            useLayoutEffect: gi,
            useMemo: gi,
            useReducer: gi,
            useRef: gi,
            useState: gi,
            useDebugValue: gi,
            useDeferredValue: gi,
            useTransition: gi,
            useMutableSource: gi,
            useSyncExternalStore: gi,
            useId: gi,
            unstable_isNewReconciler: !1,
          },
          $i = {
            readContext: Dr,
            useCallback: function (e, n) {
              return (bi().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: Dr,
            useEffect: Pi,
            useImperativeHandle: function (e, n, t) {
              return (t = null !== t && void 0 !== t ? t.concat([e]) : null), zi(4194308, 4, Yi.bind(null, n, e), t);
            },
            useLayoutEffect: function (e, n) {
              return zi(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return zi(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = bi();
              return (n = void 0 === n ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
            },
            useReducer: function (e, n, t) {
              var f = bi();
              return (
                (n = void 0 !== t ? t(n) : n),
                (f.memoizedState = f.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (f.queue = e),
                (e = e.dispatch = Fi.bind(null, oi, e)),
                [f.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (bi().memoizedState = e);
            },
            useState: Ei,
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return (bi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ei(!1),
                n = e[0];
              return (e = Zi.bind(null, e[1])), (bi().memoizedState = e), [n, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var f = oi,
                a = bi();
              if (rr) {
                if (void 0 === t) throw Error(r(407));
                t = t();
              } else {
                if (((t = n()), null === Eu)) throw Error(r(349));
                0 !== (30 & ii) || ki(f, n, t);
              }
              a.memoizedState = t;
              var i = { value: t, getSnapshot: n };
              return (
                (a.queue = i),
                Pi(Si.bind(null, f, i, e), [e]),
                (f.flags |= 2048),
                Di(9, Ii.bind(null, f, i, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = bi(),
                n = Eu.identifierPrefix;
              if (rr) {
                var t = qa;
                (n = ":" + n + "R" + (t = (Xa & ~(1 << (32 - on(Xa) - 1))).toString(32) + t)),
                  0 < (t = di++) && (n += "H" + t.toString(32)),
                  (n += ":");
              } else n = ":" + n + "r" + (t = pi++).toString(32) + ":";
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          },
          eo = {
            readContext: Dr,
            useCallback: Ji,
            useContext: Dr,
            useEffect: Oi,
            useImperativeHandle: Ui,
            useInsertionEffect: Ri,
            useLayoutEffect: Qi,
            useMemo: _i,
            useReducer: Mi,
            useRef: xi,
            useState: function () {
              return Mi(Li);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return Gi(yi(), ui.memoizedState, e);
            },
            useTransition: function () {
              return [Mi(Li)[0], yi().memoizedState];
            },
            useMutableSource: Ci,
            useSyncExternalStore: ji,
            useId: Hi,
            unstable_isNewReconciler: !1,
          },
          no = {
            readContext: Dr,
            useCallback: Ji,
            useContext: Dr,
            useEffect: Oi,
            useImperativeHandle: Ui,
            useInsertionEffect: Ri,
            useLayoutEffect: Qi,
            useMemo: _i,
            useReducer: vi,
            useRef: xi,
            useState: function () {
              return vi(Li);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              var n = yi();
              return null === ui ? (n.memoizedState = e) : Gi(n, ui.memoizedState, e);
            },
            useTransition: function () {
              return [vi(Li)[0], yi().memoizedState];
            },
            useMutableSource: Ci,
            useSyncExternalStore: ji,
            useId: Hi,
            unstable_isNewReconciler: !1,
          };
        function to(e, n) {
          if (e && e.defaultProps) {
            for (var t in ((n = R({}, n)), (e = e.defaultProps))) void 0 === n[t] && (n[t] = e[t]);
            return n;
          }
          return n;
        }
        function fo(e, n, t, f) {
          (t = null === (t = t(f, (n = e.memoizedState))) || void 0 === t ? n : R({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var ao = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Je(e) === e;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var f = ns(),
              a = ts(e),
              r = Yr(f, a);
            (r.payload = n),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (n = Ur(e, r, a)) && (fs(n, e, a, f), Br(n, e, a));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var f = ns(),
              a = ts(e),
              r = Yr(f, a);
            (r.tag = 1),
              (r.payload = n),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (n = Ur(e, r, a)) && (fs(n, e, a, f), Br(n, e, a));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = ns(),
              f = ts(e),
              a = Yr(t, f);
            (a.tag = 2),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (n = Ur(e, a, f)) && (fs(n, e, f, t), Br(n, e, f));
          },
        };
        function ro(e, n, t, f, a, r, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(f, r, i)
            : !n.prototype || !n.prototype.isPureReactComponent || !sf(t, f) || !sf(a, r);
        }
        function io(e, n, t) {
          var f = !1,
            a = Na,
            r = n.contextType;
          return (
            "object" === typeof r && null !== r
              ? (r = Dr(r))
              : ((a = za(n) ? Da : Ta.current),
                (r = (f = null !== (f = n.contextTypes) && void 0 !== f) ? xa(e, a) : Na)),
            (n = new n(t, r)),
            (e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null),
            (n.updater = ao),
            (e.stateNode = n),
            (n._reactInternals = e),
            f &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = r)),
            n
          );
        }
        function oo(e, n, t, f) {
          (e = n.state),
            "function" === typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, f),
            "function" === typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, f),
            n.state !== e && ao.enqueueReplaceState(n, n.state, null);
        }
        function uo(e, n, t, f) {
          var a = e.stateNode;
          (a.props = t), (a.state = e.memoizedState), (a.refs = {}), Rr(e);
          var r = n.contextType;
          "object" === typeof r && null !== r
            ? (a.context = Dr(r))
            : ((r = za(n) ? Da : Ta.current), (a.context = xa(e, r))),
            (a.state = e.memoizedState),
            "function" === typeof (r = n.getDerivedStateFromProps) && (fo(e, n, r, t), (a.state = e.memoizedState)),
            "function" === typeof n.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount) ||
              ((n = a.state),
              "function" === typeof a.componentWillMount && a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              n !== a.state && ao.enqueueReplaceState(a, a.state, null),
              _r(e, t, a, f),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function so(e, n) {
          try {
            var t = "",
              f = n;
            do {
              (t += B(f)), (f = f.return);
            } while (f);
            var a = t;
          } catch (r) {
            a = "\nError generating stack: " + r.message + "\n" + r.stack;
          }
          return { value: e, source: n, stack: a, digest: null };
        }
        function lo(e, n, t) {
          return { value: e, source: null, stack: null != t ? t : null, digest: null != n ? n : null };
        }
        function co(e, n) {
          try {
            console.error(n.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var po = "function" === typeof WeakMap ? WeakMap : Map;
        function go(e, n, t) {
          ((t = Yr(-1, t)).tag = 3), (t.payload = { element: null });
          var f = n.value;
          return (
            (t.callback = function () {
              Zu || ((Zu = !0), (Hu = f)), co(0, n);
            }),
            t
          );
        }
        function ho(e, n, t) {
          (t = Yr(-1, t)).tag = 3;
          var f = e.type.getDerivedStateFromError;
          if ("function" === typeof f) {
            var a = n.value;
            (t.payload = function () {
              return f(a);
            }),
              (t.callback = function () {
                co(0, n);
              });
          }
          var r = e.stateNode;
          return (
            null !== r &&
              "function" === typeof r.componentDidCatch &&
              (t.callback = function () {
                co(0, n), "function" !== typeof f && (null === Fu ? (Fu = new Set([this])) : Fu.add(this));
                var e = n.stack;
                this.componentDidCatch(n.value, { componentStack: null !== e ? e : "" });
              }),
            t
          );
        }
        function mo(e, n, t) {
          var f = e.pingCache;
          if (null === f) {
            f = e.pingCache = new po();
            var a = new Set();
            f.set(n, a);
          } else void 0 === (a = f.get(n)) && ((a = new Set()), f.set(n, a));
          a.has(t) || (a.add(t), (e = Is.bind(null, e, n, t)), n.then(e, e));
        }
        function wo(e) {
          do {
            var n;
            if (((n = 13 === e.tag) && (n = null === (n = e.memoizedState) || null !== n.dehydrated), n)) return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bo(e, n, t, f, a) {
          return 0 === (1 & e.mode)
            ? (e === n
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (t.flags |= 131072),
                  (t.flags &= -52805),
                  1 === t.tag && (null === t.alternate ? (t.tag = 17) : (((n = Yr(-1, 1)).tag = 2), Ur(t, n, 1))),
                  (t.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yo = L.ReactCurrentOwner,
          Lo = !1;
        function Mo(e, n, t, f) {
          n.child = null === e ? vr(n, null, t, f) : Mr(n, e.child, t, f);
        }
        function vo(e, n, t, f, a) {
          t = t.render;
          var r = n.ref;
          return (
            Er(n, a),
            (f = mi(e, n, t, f, r, a)),
            (t = wi()),
            null === e || Lo
              ? (rr && t && nr(n), (n.flags |= 1), Mo(e, n, f, a), n.child)
              : ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a), Zo(e, n, a))
          );
        }
        function Co(e, n, t, f, a) {
          if (null === e) {
            var r = t.type;
            return "function" !== typeof r ||
              zs(r) ||
              void 0 !== r.defaultProps ||
              null !== t.compare ||
              void 0 !== t.defaultProps
              ? (((e = Ps(t.type, null, f, n, n.mode, a)).ref = n.ref), (e.return = n), (n.child = e))
              : ((n.tag = 15), (n.type = r), jo(e, n, r, f, a));
          }
          if (((r = e.child), 0 === (e.lanes & a))) {
            var i = r.memoizedProps;
            if ((t = null !== (t = t.compare) ? t : sf)(i, f) && e.ref === n.ref) return Zo(e, n, a);
          }
          return (n.flags |= 1), ((e = As(r, f)).ref = n.ref), (e.return = n), (n.child = e);
        }
        function jo(e, n, t, f, a) {
          if (null !== e) {
            var r = e.memoizedProps;
            if (sf(r, f) && e.ref === n.ref) {
              if (((Lo = !1), (n.pendingProps = f = r), 0 === (e.lanes & a))) return (n.lanes = e.lanes), Zo(e, n, a);
              0 !== (131072 & e.flags) && (Lo = !0);
            }
          }
          return So(e, n, t, f, a);
        }
        function ko(e, n, t) {
          var f = n.pendingProps,
            a = f.children,
            r = null !== e ? e.memoizedState : null;
          if ("hidden" === f.mode)
            if (0 === (1 & n.mode))
              (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Sa(Au, zu), (zu |= t);
            else {
              if (0 === (1073741824 & t))
                return (
                  (e = null !== r ? r.baseLanes | t : t),
                  (n.lanes = n.childLanes = 1073741824),
                  (n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (n.updateQueue = null),
                  Sa(Au, zu),
                  (zu |= e),
                  null
                );
              (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (f = null !== r ? r.baseLanes : t),
                Sa(Au, zu),
                (zu |= f);
            }
          else null !== r ? ((f = r.baseLanes | t), (n.memoizedState = null)) : (f = t), Sa(Au, zu), (zu |= f);
          return Mo(e, n, a, t), n.child;
        }
        function Io(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) && ((n.flags |= 512), (n.flags |= 2097152));
        }
        function So(e, n, t, f, a) {
          var r = za(t) ? Da : Ta.current;
          return (
            (r = xa(n, r)),
            Er(n, a),
            (t = mi(e, n, t, f, r, a)),
            (f = wi()),
            null === e || Lo
              ? (rr && f && nr(n), (n.flags |= 1), Mo(e, n, t, a), n.child)
              : ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a), Zo(e, n, a))
          );
        }
        function No(e, n, t, f, a) {
          if (za(t)) {
            var r = !0;
            Ra(n);
          } else r = !1;
          if ((Er(n, a), null === n.stateNode)) Go(e, n), io(n, t, f), uo(n, t, f, a), (f = !0);
          else if (null === e) {
            var i = n.stateNode,
              o = n.memoizedProps;
            i.props = o;
            var u = i.context,
              s = t.contextType;
            "object" === typeof s && null !== s ? (s = Dr(s)) : (s = xa(n, (s = za(t) ? Da : Ta.current)));
            var l = t.getDerivedStateFromProps,
              c = "function" === typeof l || "function" === typeof i.getSnapshotBeforeUpdate;
            c ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== f || u !== s) && oo(n, i, f, s)),
              (Or = !1);
            var d = n.memoizedState;
            (i.state = d),
              _r(n, f, i, a),
              (u = n.memoizedState),
              o !== f || d !== u || Ea.current || Or
                ? ("function" === typeof l && (fo(n, t, l, f), (u = n.memoizedState)),
                  (o = Or || ro(n, t, o, f, d, u, s))
                    ? (c ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount && i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount && (n.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount && (n.flags |= 4194308),
                      (n.memoizedProps = f),
                      (n.memoizedState = u)),
                  (i.props = f),
                  (i.state = u),
                  (i.context = s),
                  (f = o))
                : ("function" === typeof i.componentDidMount && (n.flags |= 4194308), (f = !1));
          } else {
            (i = n.stateNode),
              Qr(e, n),
              (o = n.memoizedProps),
              (s = n.type === n.elementType ? o : to(n.type, o)),
              (i.props = s),
              (c = n.pendingProps),
              (d = i.context),
              "object" === typeof (u = t.contextType) && null !== u
                ? (u = Dr(u))
                : (u = xa(n, (u = za(t) ? Da : Ta.current)));
            var p = t.getDerivedStateFromProps;
            (l = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== c || d !== u) && oo(n, i, f, u)),
              (Or = !1),
              (d = n.memoizedState),
              (i.state = d),
              _r(n, f, i, a);
            var g = n.memoizedState;
            o !== c || d !== g || Ea.current || Or
              ? ("function" === typeof p && (fo(n, t, p, f), (g = n.memoizedState)),
                (s = Or || ro(n, t, s, f, d, g, u) || !1)
                  ? (l ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(f, g, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(f, g, u)),
                    "function" === typeof i.componentDidUpdate && (n.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate && (n.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = f),
                    (n.memoizedState = g)),
                (i.props = f),
                (i.state = g),
                (i.context = u),
                (f = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 1024),
                (f = !1));
          }
          return To(e, n, t, f, r, a);
        }
        function To(e, n, t, f, a, r) {
          Io(e, n);
          var i = 0 !== (128 & n.flags);
          if (!f && !i) return a && Qa(n, t, !1), Zo(e, n, r);
          (f = n.stateNode), (yo.current = n);
          var o = i && "function" !== typeof t.getDerivedStateFromError ? null : f.render();
          return (
            (n.flags |= 1),
            null !== e && i ? ((n.child = Mr(n, e.child, null, r)), (n.child = Mr(n, null, o, r))) : Mo(e, n, o, r),
            (n.memoizedState = f.state),
            a && Qa(n, t, !0),
            n.child
          );
        }
        function Eo(e) {
          var n = e.stateNode;
          n.pendingContext
            ? Pa(0, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Pa(0, n.context, !1),
            Kr(e, n.containerInfo);
        }
        function Do(e, n, t, f, a) {
          return gr(), hr(a), (n.flags |= 256), Mo(e, n, t, f), n.child;
        }
        var xo,
          zo,
          Ao,
          Po,
          Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ro(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Qo(e, n, t) {
          var f,
            a = n.pendingProps,
            i = ei.current,
            o = !1,
            u = 0 !== (128 & n.flags);
          if (
            ((f = u) || (f = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            f ? ((o = !0), (n.flags &= -129)) : (null !== e && null === e.memoizedState) || (i |= 1),
            Sa(ei, 1 & i),
            null === e)
          )
            return (
              lr(n),
              null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & n.mode) ? (n.lanes = 1) : "$!" === e.data ? (n.lanes = 8) : (n.lanes = 1073741824), null)
                : ((u = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = n.mode),
                      (o = n.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = u))
                        : (o = Rs(u, a, 0, null)),
                      (e = Os(e, a, t, null)),
                      (o.return = n),
                      (e.return = n),
                      (o.sibling = e),
                      (n.child = o),
                      (n.child.memoizedState = Ro(t)),
                      (n.memoizedState = Oo),
                      e)
                    : Yo(n, u))
            );
          if (null !== (i = e.memoizedState) && null !== (f = i.dehydrated))
            return (function (e, n, t, f, a, i, o) {
              if (t)
                return 256 & n.flags
                  ? ((n.flags &= -257), Uo(e, n, o, (f = lo(Error(r(422))))))
                  : null !== n.memoizedState
                  ? ((n.child = e.child), (n.flags |= 128), null)
                  : ((i = f.fallback),
                    (a = n.mode),
                    (f = Rs({ mode: "visible", children: f.children }, a, 0, null)),
                    ((i = Os(i, a, o, null)).flags |= 2),
                    (f.return = n),
                    (i.return = n),
                    (f.sibling = i),
                    (n.child = f),
                    0 !== (1 & n.mode) && Mr(n, e.child, null, o),
                    (n.child.memoizedState = Ro(o)),
                    (n.memoizedState = Oo),
                    i);
              if (0 === (1 & n.mode)) return Uo(e, n, o, null);
              if ("$!" === a.data) {
                if ((f = a.nextSibling && a.nextSibling.dataset)) var u = f.dgst;
                return (f = u), Uo(e, n, o, (f = lo((i = Error(r(419))), f, void 0)));
              }
              if (((u = 0 !== (o & e.childLanes)), Lo || u)) {
                if (null !== (f = Eu)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (f.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Pr(e, a), fs(f, e, a, -1));
                }
                return ms(), Uo(e, n, o, (f = lo(Error(r(421)))));
              }
              return "$?" === a.data
                ? ((n.flags |= 128), (n.child = e.child), (n = Ns.bind(null, e)), (a._reactRetry = n), null)
                : ((e = i.treeContext),
                  (ar = la(a.nextSibling)),
                  (fr = n),
                  (rr = !0),
                  (ir = null),
                  null !== e &&
                    ((Wa[Va++] = Xa), (Wa[Va++] = qa), (Wa[Va++] = Ka), (Xa = e.id), (qa = e.overflow), (Ka = n)),
                  (n = Yo(n, f.children)),
                  (n.flags |= 4096),
                  n);
            })(e, n, u, a, f, i, t);
          if (o) {
            (o = a.fallback), (u = n.mode), (f = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && n.child !== i
                ? (((a = n.child).childLanes = 0), (a.pendingProps = s), (n.deletions = null))
                : ((a = As(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== f ? (o = As(f, o)) : ((o = Os(o, u, t, null)).flags |= 2),
              (o.return = n),
              (a.return = n),
              (a.sibling = o),
              (n.child = a),
              (a = o),
              (o = n.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ro(t)
                  : { baseLanes: u.baseLanes | t, cachePool: null, transitions: u.transitions }),
              (o.memoizedState = u),
              (o.childLanes = e.childLanes & ~t),
              (n.memoizedState = Oo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = As(o, { mode: "visible", children: a.children })),
            0 === (1 & n.mode) && (a.lanes = t),
            (a.return = n),
            (a.sibling = null),
            null !== e && (null === (t = n.deletions) ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
            (n.child = a),
            (n.memoizedState = null),
            a
          );
        }
        function Yo(e, n) {
          return ((n = Rs({ mode: "visible", children: n }, e.mode, 0, null)).return = e), (e.child = n);
        }
        function Uo(e, n, t, f) {
          return (
            null !== f && hr(f),
            Mr(n, e.child, null, t),
            ((e = Yo(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function Bo(e, n, t) {
          e.lanes |= n;
          var f = e.alternate;
          null !== f && (f.lanes |= n), Tr(e.return, n, t);
        }
        function Jo(e, n, t, f, a) {
          var r = e.memoizedState;
          null === r
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: f,
                tail: t,
                tailMode: a,
              })
            : ((r.isBackwards = n),
              (r.rendering = null),
              (r.renderingStartTime = 0),
              (r.last = f),
              (r.tail = t),
              (r.tailMode = a));
        }
        function _o(e, n, t) {
          var f = n.pendingProps,
            a = f.revealOrder,
            r = f.tail;
          if ((Mo(e, n, f.children, t), 0 !== (2 & (f = ei.current)))) (f = (1 & f) | 2), (n.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = n.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, t, n);
                else if (19 === e.tag) Bo(e, t, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            f &= 1;
          }
          if ((Sa(ei, f), 0 === (1 & n.mode))) n.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (t = n.child, a = null; null !== t; )
                  null !== (e = t.alternate) && null === ni(e) && (a = t), (t = t.sibling);
                null === (t = a) ? ((a = n.child), (n.child = null)) : ((a = t.sibling), (t.sibling = null)),
                  Jo(n, !1, a, t, r);
                break;
              case "backwards":
                for (t = null, a = n.child, n.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ni(e)) {
                    n.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = t), (t = a), (a = e);
                }
                Jo(n, !0, t, null, r);
                break;
              case "together":
                Jo(n, !1, null, null, void 0);
                break;
              default:
                n.memoizedState = null;
            }
          return n.child;
        }
        function Go(e, n) {
          0 === (1 & n.mode) && null !== e && ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function Zo(e, n, t) {
          if ((null !== e && (n.dependencies = e.dependencies), (Ru |= n.lanes), 0 === (t & n.childLanes))) return null;
          if (null !== e && n.child !== e.child) throw Error(r(153));
          if (null !== n.child) {
            for (t = As((e = n.child), e.pendingProps), n.child = t, t.return = n; null !== e.sibling; )
              (e = e.sibling), ((t = t.sibling = As(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Ho(e, n) {
          if (!rr)
            switch (e.tailMode) {
              case "hidden":
                n = e.tail;
                for (var t = null; null !== n; ) null !== n.alternate && (t = n), (n = n.sibling);
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case "collapsed":
                t = e.tail;
                for (var f = null; null !== t; ) null !== t.alternate && (f = t), (t = t.sibling);
                null === f ? (n || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (f.sibling = null);
            }
        }
        function Fo(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            f = 0;
          if (n)
            for (var a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (f |= 14680064 & a.subtreeFlags),
                (f |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes), (f |= a.subtreeFlags), (f |= a.flags), (a.return = e), (a = a.sibling);
          return (e.subtreeFlags |= f), (e.childLanes = t), n;
        }
        function Wo(e, n, t) {
          var f = n.pendingProps;
          switch ((tr(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Fo(n), null;
            case 1:
            case 17:
              return za(n.type) && Aa(), Fo(n), null;
            case 3:
              return (
                (f = n.stateNode),
                Xr(),
                Ia(Ea),
                Ia(Ta),
                fi(),
                f.pendingContext && ((f.context = f.pendingContext), (f.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dr(n)
                    ? (n.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & n.flags)) ||
                      ((n.flags |= 1024), null !== ir && (os(ir), (ir = null)))),
                zo(e, n),
                Fo(n),
                null
              );
            case 5:
              $r(n);
              var a = Vr(Wr.current);
              if (((t = n.type), null !== e && null != n.stateNode))
                Ao(e, n, t, f, a), e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!f) {
                  if (null === n.stateNode) throw Error(r(166));
                  return Fo(n), null;
                }
                if (((e = Vr(Hr.current)), dr(n))) {
                  (f = n.stateNode), (t = n.type);
                  var i = n.memoizedProps;
                  switch (((f[pa] = n), (f[ga] = i), (e = 0 !== (1 & n.mode)), t)) {
                    case "dialog":
                      Uf("cancel", f), Uf("close", f);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Uf("load", f);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Of.length; a++) Uf(Of[a], f);
                      break;
                    case "source":
                      Uf("error", f);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Uf("error", f), Uf("load", f);
                      break;
                    case "details":
                      Uf("toggle", f);
                      break;
                    case "input":
                      K(f, i), Uf("invalid", f);
                      break;
                    case "select":
                      (f._wrapperState = { wasMultiple: !!i.multiple }), Uf("invalid", f);
                      break;
                    case "textarea":
                      ae(f, i), Uf("invalid", f);
                  }
                  for (var u in (be(t, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? f.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning && $f(f.textContent, s, e), (a = ["children", s]))
                          : "number" === typeof s &&
                            f.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning && $f(f.textContent, s, e), (a = ["children", "" + s]))
                        : o.hasOwnProperty(u) && null != s && "onScroll" === u && Uf("scroll", f);
                    }
                  switch (t) {
                    case "input":
                      H(f), $(f, i, !0);
                      break;
                    case "textarea":
                      H(f), ie(f);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (f.onclick = ea);
                  }
                  (f = a), (n.updateQueue = f), null !== f && (n.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(t)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === t
                        ? (((e = u.createElement("div")).innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof f.is
                        ? (e = u.createElement(t, { is: f.is }))
                        : ((e = u.createElement(t)),
                          "select" === t && ((u = e), f.multiple ? (u.multiple = !0) : f.size && (u.size = f.size)))
                      : (e = u.createElementNS(e, t)),
                    (e[pa] = n),
                    (e[ga] = f),
                    xo(e, n, !1, !1),
                    (n.stateNode = e);
                  e: {
                    switch (((u = ye(t, f)), t)) {
                      case "dialog":
                        Uf("cancel", e), Uf("close", e), (a = f);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Uf("load", e), (a = f);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Of.length; a++) Uf(Of[a], e);
                        a = f;
                        break;
                      case "source":
                        Uf("error", e), (a = f);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Uf("error", e), Uf("load", e), (a = f);
                        break;
                      case "details":
                        Uf("toggle", e), (a = f);
                        break;
                      case "input":
                        K(e, f), (a = V(e, f)), Uf("invalid", e);
                        break;
                      case "option":
                      default:
                        a = f;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!f.multiple }),
                          (a = R({}, f, { value: void 0 })),
                          Uf("invalid", e);
                        break;
                      case "textarea":
                        ae(e, f), (a = fe(e, f)), Uf("invalid", e);
                    }
                    for (i in (be(t, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var l = s[i];
                        "style" === i
                          ? me(e, l)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (l = l ? l.__html : void 0) && ce(e, l)
                          : "children" === i
                          ? "string" === typeof l
                            ? ("textarea" !== t || "" !== l) && de(e, l)
                            : "number" === typeof l && de(e, "" + l)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != l && "onScroll" === i && Uf("scroll", e)
                              : null != l && y(e, i, l, u));
                      }
                    switch (t) {
                      case "input":
                        H(e), $(e, f, !1);
                        break;
                      case "textarea":
                        H(e), ie(e);
                        break;
                      case "option":
                        null != f.value && e.setAttribute("value", "" + G(f.value));
                        break;
                      case "select":
                        (e.multiple = !!f.multiple),
                          null != (i = f.value)
                            ? te(e, !!f.multiple, i, !1)
                            : null != f.defaultValue && te(e, !!f.multiple, f.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = ea);
                    }
                    switch (t) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        f = !!f.autoFocus;
                        break e;
                      case "img":
                        f = !0;
                        break e;
                      default:
                        f = !1;
                    }
                  }
                  f && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return Fo(n), null;
            case 6:
              if (e && null != n.stateNode) Po(e, n, e.memoizedProps, f);
              else {
                if ("string" !== typeof f && null === n.stateNode) throw Error(r(166));
                if (((t = Vr(Wr.current)), Vr(Hr.current), dr(n))) {
                  if (
                    ((f = n.stateNode),
                    (t = n.memoizedProps),
                    (f[pa] = n),
                    (i = f.nodeValue !== t) && null !== (e = fr))
                  )
                    switch (e.tag) {
                      case 3:
                        $f(f.nodeValue, t, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning && $f(f.nodeValue, t, 0 !== (1 & e.mode));
                    }
                  i && (n.flags |= 4);
                } else ((f = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(f))[pa] = n), (n.stateNode = f);
              }
              return Fo(n), null;
            case 13:
              if (
                (Ia(ei),
                (f = n.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (rr && null !== ar && 0 !== (1 & n.mode) && 0 === (128 & n.flags))
                  pr(), gr(), (n.flags |= 98560), (i = !1);
                else if (((i = dr(n)), null !== f && null !== f.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(r(318));
                    if (!(i = null !== (i = n.memoizedState) ? i.dehydrated : null)) throw Error(r(317));
                    i[pa] = n;
                  } else gr(), 0 === (128 & n.flags) && (n.memoizedState = null), (n.flags |= 4);
                  Fo(n), (i = !1);
                } else null !== ir && (os(ir), (ir = null)), (i = !0);
                if (!i) return 65536 & n.flags ? n : null;
              }
              return 0 !== (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((f = null !== f) !== (null !== e && null !== e.memoizedState) &&
                    f &&
                    ((n.child.flags |= 8192),
                    0 !== (1 & n.mode) && (null === e || 0 !== (1 & ei.current) ? 0 === Pu && (Pu = 3) : ms())),
                  null !== n.updateQueue && (n.flags |= 4),
                  Fo(n),
                  null);
            case 4:
              return Xr(), zo(e, n), null === e && _f(n.stateNode.containerInfo), Fo(n), null;
            case 10:
              return Nr(n.type._context), Fo(n), null;
            case 19:
              if ((Ia(ei), null === (i = n.memoizedState))) return Fo(n), null;
              if (((f = 0 !== (128 & n.flags)), null === (u = i.rendering)))
                if (f) Ho(i, !1);
                else {
                  if (0 !== Pu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (u = ni(e))) {
                        for (
                          n.flags |= 128,
                            Ho(i, !1),
                            null !== (f = u.updateQueue) && ((n.updateQueue = f), (n.flags |= 4)),
                            n.subtreeFlags = 0,
                            f = t,
                            t = n.child;
                          null !== t;

                        )
                          (e = f),
                            ((i = t).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                            (t = t.sibling);
                        return Sa(ei, (1 & ei.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail && Xe() > _u && ((n.flags |= 128), (f = !0), Ho(i, !1), (n.lanes = 4194304));
                }
              else {
                if (!f)
                  if (null !== (e = ni(u))) {
                    if (
                      ((n.flags |= 128),
                      (f = !0),
                      null !== (t = e.updateQueue) && ((n.updateQueue = t), (n.flags |= 4)),
                      Ho(i, !0),
                      null === i.tail && "hidden" === i.tailMode && !u.alternate && !rr)
                    )
                      return Fo(n), null;
                  } else
                    2 * Xe() - i.renderingStartTime > _u &&
                      1073741824 !== t &&
                      ((n.flags |= 128), (f = !0), Ho(i, !1), (n.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = n.child), (n.child = u))
                  : (null !== (t = i.last) ? (t.sibling = u) : (n.child = u), (i.last = u));
              }
              return null !== i.tail
                ? ((n = i.tail),
                  (i.rendering = n),
                  (i.tail = n.sibling),
                  (i.renderingStartTime = Xe()),
                  (n.sibling = null),
                  (t = ei.current),
                  Sa(ei, f ? (1 & t) | 2 : 1 & t),
                  n)
                : (Fo(n), null);
            case 22:
            case 23:
              return (
                ds(),
                (f = null !== n.memoizedState),
                null !== e && (null !== e.memoizedState) !== f && (n.flags |= 8192),
                f && 0 !== (1 & n.mode)
                  ? 0 !== (1073741824 & zu) && (Fo(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : Fo(n),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(r(156, n.tag));
        }
        function Vo(e, n) {
          switch ((tr(n), n.tag)) {
            case 1:
              return za(n.type) && Aa(), 65536 & (e = n.flags) ? ((n.flags = (-65537 & e) | 128), n) : null;
            case 3:
              return (
                Xr(),
                Ia(Ea),
                Ia(Ta),
                fi(),
                0 !== (65536 & (e = n.flags)) && 0 === (128 & e) ? ((n.flags = (-65537 & e) | 128), n) : null
              );
            case 5:
              return $r(n), null;
            case 13:
              if ((Ia(ei), null !== (e = n.memoizedState) && null !== e.dehydrated)) {
                if (null === n.alternate) throw Error(r(340));
                gr();
              }
              return 65536 & (e = n.flags) ? ((n.flags = (-65537 & e) | 128), n) : null;
            case 19:
              return Ia(ei), null;
            case 4:
              return Xr(), null;
            case 10:
              return Nr(n.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (xo = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (zo = function () {}),
          (Ao = function (e, n, t, f) {
            var a = e.memoizedProps;
            if (a !== f) {
              (e = n.stateNode), Vr(Hr.current);
              var r,
                i = null;
              switch (t) {
                case "input":
                  (a = V(e, a)), (f = V(e, f)), (i = []);
                  break;
                case "select":
                  (a = R({}, a, { value: void 0 })), (f = R({}, f, { value: void 0 })), (i = []);
                  break;
                case "textarea":
                  (a = fe(e, a)), (f = fe(e, f)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick && "function" === typeof f.onClick && (e.onclick = ea);
              }
              for (l in (be(t, f), (t = null), a))
                if (!f.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
                  if ("style" === l) {
                    var u = a[l];
                    for (r in u) u.hasOwnProperty(r) && (t || (t = {}), (t[r] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== l &&
                      "children" !== l &&
                      "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (o.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null));
              for (l in f) {
                var s = f[l];
                if (((u = null != a ? a[l] : void 0), f.hasOwnProperty(l) && s !== u && (null != s || null != u)))
                  if ("style" === l)
                    if (u) {
                      for (r in u) !u.hasOwnProperty(r) || (s && s.hasOwnProperty(r)) || (t || (t = {}), (t[r] = ""));
                      for (r in s) s.hasOwnProperty(r) && u[r] !== s[r] && (t || (t = {}), (t[r] = s[r]));
                    } else t || (i || (i = []), i.push(l, t)), (t = s);
                  else
                    "dangerouslySetInnerHTML" === l
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(l, s))
                      : "children" === l
                      ? ("string" !== typeof s && "number" !== typeof s) || (i = i || []).push(l, "" + s)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        (o.hasOwnProperty(l)
                          ? (null != s && "onScroll" === l && Uf("scroll", e), i || u === s || (i = []))
                          : (i = i || []).push(l, s));
              }
              t && (i = i || []).push("style", t);
              var l = i;
              (n.updateQueue = l) && (n.flags |= 4);
            }
          }),
          (Po = function (e, n, t, f) {
            t !== f && (n.flags |= 4);
          });
        var Ko = !1,
          Xo = !1,
          qo = "function" === typeof WeakSet ? WeakSet : Set,
          $o = null;
        function eu(e, n) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (f) {
                ks(e, n, f);
              }
            else t.current = null;
        }
        function nu(e, n, t) {
          try {
            t();
          } catch (f) {
            ks(e, n, f);
          }
        }
        var tu = !1;
        function fu(e, n, t) {
          var f = n.updateQueue;
          if (null !== (f = null !== f ? f.lastEffect : null)) {
            var a = (f = f.next);
            do {
              if ((a.tag & e) === e) {
                var r = a.destroy;
                (a.destroy = void 0), void 0 !== r && nu(n, t, r);
              }
              a = a.next;
            } while (a !== f);
          }
        }
        function au(e, n) {
          if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var f = t.create;
                t.destroy = f();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function ru(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), "function" === typeof n ? n(e) : (n.current = e);
          }
        }
        function iu(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), iu(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (n = e.stateNode) &&
              (delete n[pa], delete n[ga], delete n[ma], delete n[wa], delete n[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, n, t) {
          var f = e.tag;
          if (5 === f || 6 === f)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e),
                  (null !== (t = t._reactRootContainer) && void 0 !== t) || null !== n.onclick || (n.onclick = ea));
          else if (4 !== f && null !== (e = e.child))
            for (su(e, n, t), e = e.sibling; null !== e; ) su(e, n, t), (e = e.sibling);
        }
        function lu(e, n, t) {
          var f = e.tag;
          if (5 === f || 6 === f) (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== f && null !== (e = e.child))
            for (lu(e, n, t), e = e.sibling; null !== e; ) lu(e, n, t), (e = e.sibling);
        }
        var cu = null,
          du = !1;
        function pu(e, n, t) {
          for (t = t.child; null !== t; ) gu(e, n, t), (t = t.sibling);
        }
        function gu(e, n, t) {
          if (rn && "function" === typeof rn.onCommitFiberUnmount)
            try {
              rn.onCommitFiberUnmount(an, t);
            } catch (o) {}
          switch (t.tag) {
            case 5:
              Xo || eu(t, n);
            case 6:
              var f = cu,
                a = du;
              (cu = null),
                pu(e, n, t),
                (du = a),
                null !== (cu = f) &&
                  (du
                    ? ((e = cu), (t = t.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t))
                    : cu.removeChild(t.stateNode));
              break;
            case 18:
              null !== cu &&
                (du
                  ? ((e = cu),
                    (t = t.stateNode),
                    8 === e.nodeType ? sa(e.parentNode, t) : 1 === e.nodeType && sa(e, t),
                    _n(e))
                  : sa(cu, t.stateNode));
              break;
            case 4:
              (f = cu), (a = du), (cu = t.stateNode.containerInfo), (du = !0), pu(e, n, t), (cu = f), (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Xo && null !== (f = t.updateQueue) && null !== (f = f.lastEffect)) {
                a = f = f.next;
                do {
                  var r = a,
                    i = r.destroy;
                  (r = r.tag), void 0 !== i && (0 !== (2 & r) || 0 !== (4 & r)) && nu(t, n, i), (a = a.next);
                } while (a !== f);
              }
              pu(e, n, t);
              break;
            case 1:
              if (!Xo && (eu(t, n), "function" === typeof (f = t.stateNode).componentWillUnmount))
                try {
                  (f.props = t.memoizedProps), (f.state = t.memoizedState), f.componentWillUnmount();
                } catch (o) {
                  ks(t, n, o);
                }
              pu(e, n, t);
              break;
            case 21:
              pu(e, n, t);
              break;
            case 22:
              1 & t.mode ? ((Xo = (f = Xo) || null !== t.memoizedState), pu(e, n, t), (Xo = f)) : pu(e, n, t);
              break;
            default:
              pu(e, n, t);
          }
        }
        function hu(e) {
          var n = e.updateQueue;
          if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new qo()),
              n.forEach(function (n) {
                var f = Ts.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(f, f));
              });
          }
        }
        function mu(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var f = 0; f < t.length; f++) {
              var a = t[f];
              try {
                var i = e,
                  o = n,
                  u = o;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(r(160));
                gu(i, o, a), (cu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (l) {
                ks(a, n, l);
              }
            }
          if (12854 & n.subtreeFlags) for (n = n.child; null !== n; ) wu(n, e), (n = n.sibling);
        }
        function wu(e, n) {
          var t = e.alternate,
            f = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(n, e), bu(e), 4 & f)) {
                try {
                  fu(3, e, e.return), au(3, e);
                } catch (m) {
                  ks(e, e.return, m);
                }
                try {
                  fu(5, e, e.return);
                } catch (m) {
                  ks(e, e.return, m);
                }
              }
              break;
            case 1:
              mu(n, e), bu(e), 512 & f && null !== t && eu(t, t.return);
              break;
            case 5:
              if ((mu(n, e), bu(e), 512 & f && null !== t && eu(t, t.return), 32 & e.flags)) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  ks(e, e.return, m);
                }
              }
              if (4 & f && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== t ? t.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u && "radio" === i.type && null != i.name && X(a, i), ye(u, o);
                    var l = ye(u, i);
                    for (o = 0; o < s.length; o += 2) {
                      var c = s[o],
                        d = s[o + 1];
                      "style" === c
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === c
                        ? ce(a, d)
                        : "children" === c
                        ? de(a, d)
                        : y(a, c, d, l);
                    }
                    switch (u) {
                      case "input":
                        q(a, i);
                        break;
                      case "textarea":
                        re(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var g = i.value;
                        null != g
                          ? te(a, !!i.multiple, g, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? te(a, !!i.multiple, i.defaultValue, !0)
                              : te(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[ga] = i;
                  } catch (m) {
                    ks(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((mu(n, e), bu(e), 4 & f)) {
                if (null === e.stateNode) throw Error(r(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  ks(e, e.return, m);
                }
              }
              break;
            case 3:
              if ((mu(n, e), bu(e), 4 & f && null !== t && t.memoizedState.isDehydrated))
                try {
                  _n(n.containerInfo);
                } catch (m) {
                  ks(e, e.return, m);
                }
              break;
            case 4:
            default:
              mu(n, e), bu(e);
              break;
            case 13:
              mu(n, e),
                bu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i || (null !== a.alternate && null !== a.alternate.memoizedState) || (Ju = Xe())),
                4 & f && hu(e);
              break;
            case 22:
              if (
                ((c = null !== t && null !== t.memoizedState),
                1 & e.mode ? ((Xo = (l = Xo) || c), mu(n, e), (Xo = l)) : mu(n, e),
                bu(e),
                8192 & f)
              ) {
                if (((l = null !== e.memoizedState), (e.stateNode.isHidden = l) && !c && 0 !== (1 & e.mode)))
                  for ($o = e, c = e.child; null !== c; ) {
                    for (d = $o = c; null !== $o; ) {
                      switch (((g = (p = $o).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          fu(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (f = p), (t = p.return);
                            try {
                              (n = f),
                                (h.props = n.memoizedProps),
                                (h.state = n.memoizedState),
                                h.componentWillUnmount();
                            } catch (m) {
                              ks(f, t, m);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            vu(d);
                            continue;
                          }
                      }
                      null !== g ? ((g.return = p), ($o = g)) : vu(d);
                    }
                    c = c.sibling;
                  }
                e: for (c = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === c) {
                      c = d;
                      try {
                        (a = d.stateNode),
                          l
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (o =
                                void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = he("display", o)));
                      } catch (m) {
                        ks(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === c)
                      try {
                        d.stateNode.nodeValue = l ? "" : d.memoizedProps;
                      } catch (m) {
                        ks(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    c === d && (c = null), (d = d.return);
                  }
                  c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(n, e), bu(e), 4 & f && hu(e);
            case 21:
          }
        }
        function bu(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (ou(t)) {
                    var f = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(r(160));
              }
              switch (f.tag) {
                case 5:
                  var a = f.stateNode;
                  32 & f.flags && (de(a, ""), (f.flags &= -33)), lu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var i = f.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(r(161));
              }
            } catch (o) {
              ks(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function yu(e, n, t) {
          ($o = e), Lu(e, n, t);
        }
        function Lu(e, n, t) {
          for (var f = 0 !== (1 & e.mode); null !== $o; ) {
            var a = $o,
              r = a.child;
            if (22 === a.tag && f) {
              var i = null !== a.memoizedState || Ko;
              if (!i) {
                var o = a.alternate,
                  u = (null !== o && null !== o.memoizedState) || Xo;
                o = Ko;
                var s = Xo;
                if (((Ko = i), (Xo = u) && !s))
                  for ($o = a; null !== $o; )
                    (u = (i = $o).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Cu(a)
                        : null !== u
                        ? ((u.return = i), ($o = u))
                        : Cu(a);
                for (; null !== r; ) ($o = r), Lu(r, n, t), (r = r.sibling);
                ($o = a), (Ko = o), (Xo = s);
              }
              Mu(e);
            } else 0 !== (8772 & a.subtreeFlags) && null !== r ? ((r.return = a), ($o = r)) : Mu(e);
          }
        }
        function Mu(e) {
          for (; null !== $o; ) {
            var n = $o;
            if (0 !== (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 !== (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo || au(5, n);
                      break;
                    case 1:
                      var f = n.stateNode;
                      if (4 & n.flags && !Xo)
                        if (null === t) f.componentDidMount();
                        else {
                          var a = n.elementType === n.type ? t.memoizedProps : to(n.type, t.memoizedProps);
                          f.componentDidUpdate(a, t.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
                        }
                      var i = n.updateQueue;
                      null !== i && Gr(n, i, f);
                      break;
                    case 3:
                      var o = n.updateQueue;
                      if (null !== o) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Gr(n, o, t);
                      }
                      break;
                    case 5:
                      var u = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = u;
                        var s = n.memoizedProps;
                        switch (n.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && t.focus();
                            break;
                          case "img":
                            s.src && (t.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var l = n.alternate;
                        if (null !== l) {
                          var c = l.memoizedState;
                          if (null !== c) {
                            var d = c.dehydrated;
                            null !== d && _n(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(r(163));
                  }
                Xo || (512 & n.flags && ru(n));
              } catch (p) {
                ks(n, n.return, p);
              }
            }
            if (n === e) {
              $o = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), ($o = t);
              break;
            }
            $o = n.return;
          }
        }
        function vu(e) {
          for (; null !== $o; ) {
            var n = $o;
            if (n === e) {
              $o = null;
              break;
            }
            var t = n.sibling;
            if (null !== t) {
              (t.return = n.return), ($o = t);
              break;
            }
            $o = n.return;
          }
        }
        function Cu(e) {
          for (; null !== $o; ) {
            var n = $o;
            try {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  var t = n.return;
                  try {
                    au(4, n);
                  } catch (u) {
                    ks(n, t, u);
                  }
                  break;
                case 1:
                  var f = n.stateNode;
                  if ("function" === typeof f.componentDidMount) {
                    var a = n.return;
                    try {
                      f.componentDidMount();
                    } catch (u) {
                      ks(n, a, u);
                    }
                  }
                  var r = n.return;
                  try {
                    ru(n);
                  } catch (u) {
                    ks(n, r, u);
                  }
                  break;
                case 5:
                  var i = n.return;
                  try {
                    ru(n);
                  } catch (u) {
                    ks(n, i, u);
                  }
              }
            } catch (u) {
              ks(n, n.return, u);
            }
            if (n === e) {
              $o = null;
              break;
            }
            var o = n.sibling;
            if (null !== o) {
              (o.return = n.return), ($o = o);
              break;
            }
            $o = n.return;
          }
        }
        var ju,
          ku = Math.ceil,
          Iu = L.ReactCurrentDispatcher,
          Su = L.ReactCurrentOwner,
          Nu = L.ReactCurrentBatchConfig,
          Tu = 0,
          Eu = null,
          Du = null,
          xu = 0,
          zu = 0,
          Au = ka(0),
          Pu = 0,
          Ou = null,
          Ru = 0,
          Qu = 0,
          Yu = 0,
          Uu = null,
          Bu = null,
          Ju = 0,
          _u = 1 / 0,
          Gu = null,
          Zu = !1,
          Hu = null,
          Fu = null,
          Wu = !1,
          Vu = null,
          Ku = 0,
          Xu = 0,
          qu = null,
          $u = -1,
          es = 0;
        function ns() {
          return 0 !== (6 & Tu) ? Xe() : -1 !== $u ? $u : ($u = Xe());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Tu) && 0 !== xu
            ? xu & -xu
            : null !== mr.transition
            ? (0 === es && (es = mn()), es)
            : 0 !== (e = Ln)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xn(e.type));
        }
        function fs(e, n, t, f) {
          if (50 < Xu) throw ((Xu = 0), (qu = null), Error(r(185)));
          bn(e, t, f),
            (0 !== (2 & Tu) && e === Eu) ||
              (e === Eu && (0 === (2 & Tu) && (Qu |= t), 4 === Pu && us(e, xu)),
              as(e, f),
              1 === t && 0 === Tu && 0 === (1 & n.mode) && ((_u = Xe() + 500), Ua && _a()));
        }
        function as(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (var t = e.suspendedLanes, f = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes; 0 < r; ) {
              var i = 31 - on(r),
                o = 1 << i,
                u = a[i];
              -1 === u ? (0 !== (o & t) && 0 === (o & f)) || (a[i] = gn(o, n)) : u <= n && (e.expiredLanes |= o),
                (r &= ~o);
            }
          })(e, n);
          var f = pn(e, e === Eu ? xu : 0);
          if (0 === f) null !== t && We(t), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((n = f & -f), e.callbackPriority !== n)) {
            if ((null != t && We(t), 1 === n))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Ja(e);
                  })(ss.bind(null, e))
                : Ja(ss.bind(null, e)),
                oa(function () {
                  0 === (6 & Tu) && _a();
                }),
                (t = null);
            else {
              switch (Mn(f)) {
                case 1:
                  t = $e;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = fn;
              }
              t = Es(t, rs.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function rs(e, n) {
          if ((($u = -1), (es = 0), 0 !== (6 & Tu))) throw Error(r(327));
          var t = e.callbackNode;
          if (Cs() && e.callbackNode !== t) return null;
          var f = pn(e, e === Eu ? xu : 0);
          if (0 === f) return null;
          if (0 !== (30 & f) || 0 !== (f & e.expiredLanes) || n) n = ws(e, f);
          else {
            n = f;
            var a = Tu;
            Tu |= 2;
            var i = hs();
            for ((Eu === e && xu === n) || ((Gu = null), (_u = Xe() + 500), ps(e, n)); ; )
              try {
                ys();
                break;
              } catch (u) {
                gs(e, u);
              }
            Sr(), (Iu.current = i), (Tu = a), null !== Du ? (n = 0) : ((Eu = null), (xu = 0), (n = Pu));
          }
          if (0 !== n) {
            if ((2 === n && 0 !== (a = hn(e)) && ((f = a), (n = is(e, a))), 1 === n))
              throw ((t = Ou), ps(e, 0), us(e, f), as(e, Xe()), t);
            if (6 === n) us(e, f);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & f) &&
                  !(function (e) {
                    for (var n = e; ; ) {
                      if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                          for (var f = 0; f < t.length; f++) {
                            var a = t[f],
                              r = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!uf(r(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((t = n.child), 16384 & n.subtreeFlags && null !== t)) (t.return = n), (n = t);
                      else {
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                          if (null === n.return || n.return === e) return !0;
                          n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (n = ws(e, f)) && 0 !== (i = hn(e)) && ((f = i), (n = is(e, i))), 1 === n))
              )
                throw ((t = Ou), ps(e, 0), us(e, f), as(e, Xe()), t);
              switch (((e.finishedWork = a), (e.finishedLanes = f), n)) {
                case 0:
                case 1:
                  throw Error(r(345));
                case 2:
                case 5:
                  vs(e, Bu, Gu);
                  break;
                case 3:
                  if ((us(e, f), (130023424 & f) === f && 10 < (n = Ju + 500 - Xe()))) {
                    if (0 !== pn(e, 0)) break;
                    if (((a = e.suspendedLanes) & f) !== f) {
                      ns(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = aa(vs.bind(null, e, Bu, Gu), n);
                    break;
                  }
                  vs(e, Bu, Gu);
                  break;
                case 4:
                  if ((us(e, f), (4194240 & f) === f)) break;
                  for (n = e.eventTimes, a = -1; 0 < f; ) {
                    var o = 31 - on(f);
                    (i = 1 << o), (o = n[o]) > a && (a = o), (f &= ~i);
                  }
                  if (
                    ((f = a),
                    10 <
                      (f =
                        (120 > (f = Xe() - f)
                          ? 120
                          : 480 > f
                          ? 480
                          : 1080 > f
                          ? 1080
                          : 1920 > f
                          ? 1920
                          : 3e3 > f
                          ? 3e3
                          : 4320 > f
                          ? 4320
                          : 1960 * ku(f / 1960)) - f))
                  ) {
                    e.timeoutHandle = aa(vs.bind(null, e, Bu, Gu), f);
                    break;
                  }
                  vs(e, Bu, Gu);
                  break;
                default:
                  throw Error(r(329));
              }
            }
          }
          return as(e, Xe()), e.callbackNode === t ? rs.bind(null, e) : null;
        }
        function is(e, n) {
          var t = Uu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, n).flags |= 256),
            2 !== (e = ws(e, n)) && ((n = Bu), (Bu = t), null !== n && os(n)),
            e
          );
        }
        function os(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function us(e, n) {
          for (n &= ~Yu, n &= ~Qu, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
            var t = 31 - on(n),
              f = 1 << t;
            (e[t] = -1), (n &= ~f);
          }
        }
        function ss(e) {
          if (0 !== (6 & Tu)) throw Error(r(327));
          Cs();
          var n = pn(e, 0);
          if (0 === (1 & n)) return as(e, Xe()), null;
          var t = ws(e, n);
          if (0 !== e.tag && 2 === t) {
            var f = hn(e);
            0 !== f && ((n = f), (t = is(e, f)));
          }
          if (1 === t) throw ((t = Ou), ps(e, 0), us(e, n), as(e, Xe()), t);
          if (6 === t) throw Error(r(345));
          return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), vs(e, Bu, Gu), as(e, Xe()), null;
        }
        function ls(e, n) {
          var t = Tu;
          Tu |= 1;
          try {
            return e(n);
          } finally {
            0 === (Tu = t) && ((_u = Xe() + 500), Ua && _a());
          }
        }
        function cs(e) {
          null !== Vu && 0 === Vu.tag && 0 === (6 & Tu) && Cs();
          var n = Tu;
          Tu |= 1;
          var t = Nu.transition,
            f = Ln;
          try {
            if (((Nu.transition = null), (Ln = 1), e)) return e();
          } finally {
            (Ln = f), (Nu.transition = t), 0 === (6 & (Tu = n)) && _a();
          }
        }
        function ds() {
          (zu = Au.current), Ia(Au);
        }
        function ps(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), ra(t)), null !== Du))
            for (t = Du.return; null !== t; ) {
              var f = t;
              switch ((tr(f), f.tag)) {
                case 1:
                  null !== (f = f.type.childContextTypes) && void 0 !== f && Aa();
                  break;
                case 3:
                  Xr(), Ia(Ea), Ia(Ta), fi();
                  break;
                case 5:
                  $r(f);
                  break;
                case 4:
                  Xr();
                  break;
                case 13:
                case 19:
                  Ia(ei);
                  break;
                case 10:
                  Nr(f.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              t = t.return;
            }
          if (
            ((Eu = e),
            (Du = e = As(e.current, null)),
            (xu = zu = n),
            (Pu = 0),
            (Ou = null),
            (Yu = Qu = Ru = 0),
            (Bu = Uu = null),
            null !== xr)
          ) {
            for (n = 0; n < xr.length; n++)
              if (null !== (f = (t = xr[n]).interleaved)) {
                t.interleaved = null;
                var a = f.next,
                  r = t.pending;
                if (null !== r) {
                  var i = r.next;
                  (r.next = a), (f.next = i);
                }
                t.pending = f;
              }
            xr = null;
          }
          return e;
        }
        function gs(e, n) {
          for (;;) {
            var t = Du;
            try {
              if ((Sr(), (ai.current = qi), li)) {
                for (var f = oi.memoizedState; null !== f; ) {
                  var a = f.queue;
                  null !== a && (a.pending = null), (f = f.next);
                }
                li = !1;
              }
              if (
                ((ii = 0),
                (si = ui = oi = null),
                (ci = !1),
                (di = 0),
                (Su.current = null),
                null === t || null === t.return)
              ) {
                (Pu = 1), (Ou = n), (Du = null);
                break;
              }
              e: {
                var i = e,
                  o = t.return,
                  u = t,
                  s = n;
                if (
                  ((n = xu), (u.flags |= 32768), null !== s && "object" === typeof s && "function" === typeof s.then)
                ) {
                  var l = s,
                    c = u,
                    d = c.tag;
                  if (0 === (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = c.alternate;
                    p
                      ? ((c.updateQueue = p.updateQueue), (c.memoizedState = p.memoizedState), (c.lanes = p.lanes))
                      : ((c.updateQueue = null), (c.memoizedState = null));
                  }
                  var g = wo(o);
                  if (null !== g) {
                    (g.flags &= -257), bo(g, o, u, 0, n), 1 & g.mode && mo(i, l, n), (s = l);
                    var h = (n = g).updateQueue;
                    if (null === h) {
                      var m = new Set();
                      m.add(s), (n.updateQueue = m);
                    } else h.add(s);
                    break e;
                  }
                  if (0 === (1 & n)) {
                    mo(i, l, n), ms();
                    break e;
                  }
                  s = Error(r(426));
                } else if (rr && 1 & u.mode) {
                  var w = wo(o);
                  if (null !== w) {
                    0 === (65536 & w.flags) && (w.flags |= 256), bo(w, o, u, 0, n), hr(so(s, u));
                    break e;
                  }
                }
                (i = s = so(s, u)), 4 !== Pu && (Pu = 2), null === Uu ? (Uu = [i]) : Uu.push(i), (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536), (n &= -n), (i.lanes |= n), Jr(i, go(0, s, n));
                      break e;
                    case 1:
                      u = s;
                      var b = i.type,
                        y = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== y && "function" === typeof y.componentDidCatch && (null === Fu || !Fu.has(y))))
                      ) {
                        (i.flags |= 65536), (n &= -n), (i.lanes |= n), Jr(i, ho(i, u, n));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Ms(t);
            } catch (L) {
              (n = L), Du === t && null !== t && (Du = t = t.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Iu.current;
          return (Iu.current = qi), null === e ? qi : e;
        }
        function ms() {
          (0 !== Pu && 3 !== Pu && 2 !== Pu) || (Pu = 4),
            null === Eu || (0 === (268435455 & Ru) && 0 === (268435455 & Qu)) || us(Eu, xu);
        }
        function ws(e, n) {
          var t = Tu;
          Tu |= 2;
          var f = hs();
          for ((Eu === e && xu === n) || ((Gu = null), ps(e, n)); ; )
            try {
              bs();
              break;
            } catch (a) {
              gs(e, a);
            }
          if ((Sr(), (Tu = t), (Iu.current = f), null !== Du)) throw Error(r(261));
          return (Eu = null), (xu = 0), Pu;
        }
        function bs() {
          for (; null !== Du; ) Ls(Du);
        }
        function ys() {
          for (; null !== Du && !Ve(); ) Ls(Du);
        }
        function Ls(e) {
          var n = ju(e.alternate, e, zu);
          (e.memoizedProps = e.pendingProps), null === n ? Ms(e) : (Du = n), (Su.current = null);
        }
        function Ms(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 === (32768 & n.flags))) {
              if (null !== (t = Wo(t, n, zu))) return void (Du = t);
            } else {
              if (null !== (t = Vo(t, n))) return (t.flags &= 32767), void (Du = t);
              if (null === e) return (Pu = 6), void (Du = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (Du = n);
            Du = n = e;
          } while (null !== n);
          0 === Pu && (Pu = 5);
        }
        function vs(e, n, t) {
          var f = Ln,
            a = Nu.transition;
          try {
            (Nu.transition = null),
              (Ln = 1),
              (function (e, n, t, f) {
                do {
                  Cs();
                } while (null !== Vu);
                if (0 !== (6 & Tu)) throw Error(r(327));
                t = e.finishedWork;
                var a = e.finishedLanes;
                if (null === t) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(r(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= n),
                      (e.mutableReadLanes &= n),
                      (e.entangledLanes &= n),
                      (n = e.entanglements);
                    var f = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var a = 31 - on(t),
                        r = 1 << a;
                      (n[a] = 0), (f[a] = -1), (e[a] = -1), (t &= ~r);
                    }
                  })(e, i),
                  e === Eu && ((Du = Eu = null), (xu = 0)),
                  (0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags)) ||
                    Wu ||
                    ((Wu = !0),
                    Es(nn, function () {
                      return Cs(), null;
                    })),
                  (i = 0 !== (15990 & t.flags)),
                  0 !== (15990 & t.subtreeFlags) || i)
                ) {
                  (i = Nu.transition), (Nu.transition = null);
                  var o = Ln;
                  Ln = 1;
                  var u = Tu;
                  (Tu |= 4),
                    (Su.current = null),
                    (function (e, n) {
                      if (((na = Zn), gf((e = pf())))) {
                        if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var f =
                              (t = ((t = e.ownerDocument) && t.defaultView) || window).getSelection && t.getSelection();
                            if (f && 0 !== f.rangeCount) {
                              t = f.anchorNode;
                              var a = f.anchorOffset,
                                i = f.focusNode;
                              f = f.focusOffset;
                              try {
                                t.nodeType, i.nodeType;
                              } catch (M) {
                                t = null;
                                break e;
                              }
                              var o = 0,
                                u = -1,
                                s = -1,
                                l = 0,
                                c = 0,
                                d = e,
                                p = null;
                              n: for (;;) {
                                for (
                                  var g;
                                  d !== t || (0 !== a && 3 !== d.nodeType) || (u = o + a),
                                    d !== i || (0 !== f && 3 !== d.nodeType) || (s = o + f),
                                    3 === d.nodeType && (o += d.nodeValue.length),
                                    null !== (g = d.firstChild);

                                )
                                  (p = d), (d = g);
                                for (;;) {
                                  if (d === e) break n;
                                  if (
                                    (p === t && ++l === a && (u = o),
                                    p === i && ++c === f && (s = o),
                                    null !== (g = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = g;
                              }
                              t = -1 === u || -1 === s ? null : { start: u, end: s };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (ta = { focusedElem: e, selectionRange: t }, Zn = !1, $o = n; null !== $o; )
                        if (((e = (n = $o).child), 0 !== (1028 & n.subtreeFlags) && null !== e))
                          (e.return = n), ($o = e);
                        else
                          for (; null !== $o; ) {
                            n = $o;
                            try {
                              var h = n.alternate;
                              if (0 !== (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var m = h.memoizedProps,
                                        w = h.memoizedState,
                                        b = n.stateNode,
                                        y = b.getSnapshotBeforeUpdate(n.elementType === n.type ? m : to(n.type, m), w);
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var L = n.stateNode.containerInfo;
                                    1 === L.nodeType
                                      ? (L.textContent = "")
                                      : 9 === L.nodeType && L.documentElement && L.removeChild(L.documentElement);
                                    break;
                                  default:
                                    throw Error(r(163));
                                }
                            } catch (M) {
                              ks(n, n.return, M);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), ($o = e);
                              break;
                            }
                            $o = n.return;
                          }
                      (h = tu), (tu = !1);
                    })(e, t),
                    wu(t, e),
                    hf(ta),
                    (Zn = !!na),
                    (ta = na = null),
                    (e.current = t),
                    yu(t, e, a),
                    Ke(),
                    (Tu = u),
                    (Ln = o),
                    (Nu.transition = i);
                } else e.current = t;
                if (
                  (Wu && ((Wu = !1), (Vu = e), (Ku = a)),
                  (i = e.pendingLanes),
                  0 === i && (Fu = null),
                  (function (e) {
                    if (rn && "function" === typeof rn.onCommitFiberRoot)
                      try {
                        rn.onCommitFiberRoot(an, e, void 0, 128 === (128 & e.current.flags));
                      } catch (n) {}
                  })(t.stateNode),
                  as(e, Xe()),
                  null !== n)
                )
                  for (f = e.onRecoverableError, t = 0; t < n.length; t++)
                    (a = n[t]), f(a.value, { componentStack: a.stack, digest: a.digest });
                if (Zu) throw ((Zu = !1), (e = Hu), (Hu = null), e);
                0 !== (1 & Ku) && 0 !== e.tag && Cs(),
                  (i = e.pendingLanes),
                  0 !== (1 & i) ? (e === qu ? Xu++ : ((Xu = 0), (qu = e))) : (Xu = 0),
                  _a();
              })(e, n, t, f);
          } finally {
            (Nu.transition = a), (Ln = f);
          }
          return null;
        }
        function Cs() {
          if (null !== Vu) {
            var e = Mn(Ku),
              n = Nu.transition,
              t = Ln;
            try {
              if (((Nu.transition = null), (Ln = 16 > e ? 16 : e), null === Vu)) var f = !1;
              else {
                if (((e = Vu), (Vu = null), (Ku = 0), 0 !== (6 & Tu))) throw Error(r(331));
                var a = Tu;
                for (Tu |= 4, $o = e.current; null !== $o; ) {
                  var i = $o,
                    o = i.child;
                  if (0 !== (16 & $o.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var l = u[s];
                        for ($o = l; null !== $o; ) {
                          var c = $o;
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              fu(8, c, i);
                          }
                          var d = c.child;
                          if (null !== d) (d.return = c), ($o = d);
                          else
                            for (; null !== $o; ) {
                              var p = (c = $o).sibling,
                                g = c.return;
                              if ((iu(c), c === l)) {
                                $o = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = g), ($o = p);
                                break;
                              }
                              $o = g;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var m = h.child;
                        if (null !== m) {
                          h.child = null;
                          do {
                            var w = m.sibling;
                            (m.sibling = null), (m = w);
                          } while (null !== m);
                        }
                      }
                      $o = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o) (o.return = i), ($o = o);
                  else
                    e: for (; null !== $o; ) {
                      if (0 !== (2048 & (i = $o).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            fu(9, i, i.return);
                        }
                      var b = i.sibling;
                      if (null !== b) {
                        (b.return = i.return), ($o = b);
                        break e;
                      }
                      $o = i.return;
                    }
                }
                var y = e.current;
                for ($o = y; null !== $o; ) {
                  var L = (o = $o).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== L) (L.return = o), ($o = L);
                  else
                    e: for (o = y; null !== $o; ) {
                      if (0 !== (2048 & (u = $o).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (v) {
                          ks(u, u.return, v);
                        }
                      if (u === o) {
                        $o = null;
                        break e;
                      }
                      var M = u.sibling;
                      if (null !== M) {
                        (M.return = u.return), ($o = M);
                        break e;
                      }
                      $o = u.return;
                    }
                }
                if (((Tu = a), _a(), rn && "function" === typeof rn.onPostCommitFiberRoot))
                  try {
                    rn.onPostCommitFiberRoot(an, e);
                  } catch (v) {}
                f = !0;
              }
              return f;
            } finally {
              (Ln = t), (Nu.transition = n);
            }
          }
          return !1;
        }
        function js(e, n, t) {
          (e = Ur(e, (n = go(0, (n = so(t, n)), 1)), 1)), (n = ns()), null !== e && (bn(e, 1, n), as(e, n));
        }
        function ks(e, n, t) {
          if (3 === e.tag) js(e, e, t);
          else
            for (; null !== n; ) {
              if (3 === n.tag) {
                js(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var f = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof f.componentDidCatch && (null === Fu || !Fu.has(f)))
                ) {
                  (n = Ur(n, (e = ho(n, (e = so(t, e)), 1)), 1)), (e = ns()), null !== n && (bn(n, 1, e), as(n, e));
                  break;
                }
              }
              n = n.return;
            }
        }
        function Is(e, n, t) {
          var f = e.pingCache;
          null !== f && f.delete(n),
            (n = ns()),
            (e.pingedLanes |= e.suspendedLanes & t),
            Eu === e &&
              (xu & t) === t &&
              (4 === Pu || (3 === Pu && (130023424 & xu) === xu && 500 > Xe() - Ju) ? ps(e, 0) : (Yu |= t)),
            as(e, n);
        }
        function Ss(e, n) {
          0 === n && (0 === (1 & e.mode) ? (n = 1) : ((n = cn), 0 === (130023424 & (cn <<= 1)) && (cn = 4194304)));
          var t = ns();
          null !== (e = Pr(e, n)) && (bn(e, n, t), as(e, t));
        }
        function Ns(e) {
          var n = e.memoizedState,
            t = 0;
          null !== n && (t = n.retryLane), Ss(e, t);
        }
        function Ts(e, n) {
          var t = 0;
          switch (e.tag) {
            case 13:
              var f = e.stateNode,
                a = e.memoizedState;
              null !== a && (t = a.retryLane);
              break;
            case 19:
              f = e.stateNode;
              break;
            default:
              throw Error(r(314));
          }
          null !== f && f.delete(n), Ss(e, t);
        }
        function Es(e, n) {
          return Fe(e, n);
        }
        function Ds(e, n, t, f) {
          (this.tag = e),
            (this.key = t),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = f),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function xs(e, n, t, f) {
          return new Ds(e, n, t, f);
        }
        function zs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function As(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = xs(e.tag, n, e.key, e.mode)).elementType = e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n), (t.type = e.type), (t.flags = 0), (t.subtreeFlags = 0), (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies = null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function Ps(e, n, t, f, a, i) {
          var o = 2;
          if (((f = e), "function" === typeof e)) zs(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case C:
                return Os(t.children, a, i, n);
              case j:
                (o = 8), (a |= 8);
                break;
              case k:
                return ((e = xs(12, t, n, 2 | a)).elementType = k), (e.lanes = i), e;
              case T:
                return ((e = xs(13, t, n, a)).elementType = T), (e.lanes = i), e;
              case E:
                return ((e = xs(19, t, n, a)).elementType = E), (e.lanes = i), e;
              case z:
                return Rs(t, a, i, n);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case I:
                      o = 10;
                      break e;
                    case S:
                      o = 9;
                      break e;
                    case N:
                      o = 11;
                      break e;
                    case D:
                      o = 14;
                      break e;
                    case x:
                      (o = 16), (f = null);
                      break e;
                  }
                throw Error(r(130, null == e ? e : typeof e, ""));
            }
          return ((n = xs(o, t, n, a)).elementType = e), (n.type = f), (n.lanes = i), n;
        }
        function Os(e, n, t, f) {
          return ((e = xs(7, e, f, n)).lanes = t), e;
        }
        function Rs(e, n, t, f) {
          return ((e = xs(22, e, f, n)).elementType = z), (e.lanes = t), (e.stateNode = { isHidden: !1 }), e;
        }
        function Qs(e, n, t) {
          return ((e = xs(6, e, null, n)).lanes = t), e;
        }
        function Ys(e, n, t) {
          return (
            ((n = xs(4, null !== e.children ? e.children : [], e.key, n)).lanes = t),
            (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            n
          );
        }
        function Us(e, n, t, f, a) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = wn(0)),
            (this.expirationTimes = wn(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = wn(0)),
            (this.identifierPrefix = f),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bs(e, n, t, f, a, r, i, o, u) {
          return (
            (e = new Us(e, n, t, o, u)),
            1 === n ? ((n = 1), !0 === r && (n |= 8)) : (n = 0),
            (r = xs(3, null, null, n)),
            (e.current = r),
            (r.stateNode = e),
            (r.memoizedState = {
              element: f,
              isDehydrated: t,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Rr(r),
            e
          );
        }
        function Js(e) {
          if (!e) return Na;
          e: {
            if (Je((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(r(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (za(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(r(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (za(t)) return Oa(e, t, n);
          }
          return n;
        }
        function _s(e, n, t, f, a, r, i, o, u) {
          return (
            ((e = Bs(t, f, !0, e, 0, r, 0, o, u)).context = Js(null)),
            (t = e.current),
            ((r = Yr((f = ns()), (a = ts(t)))).callback = void 0 !== n && null !== n ? n : null),
            Ur(t, r, a),
            (e.current.lanes = a),
            bn(e, a, f),
            as(e, f),
            e
          );
        }
        function Gs(e, n, t, f) {
          var a = n.current,
            r = ns(),
            i = ts(a);
          return (
            (t = Js(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = Yr(r, i)).payload = { element: e }),
            null !== (f = void 0 === f ? null : f) && (n.callback = f),
            null !== (e = Ur(a, n, i)) && (fs(e, a, i, r), Br(e, a, i)),
            i
          );
        }
        function Zs(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function Hs(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function Fs(e, n) {
          Hs(e, n), (e = e.alternate) && Hs(e, n);
        }
        ju = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || Ea.current) Lo = !0;
            else {
              if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                return (
                  (Lo = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        Eo(n), gr();
                        break;
                      case 5:
                        qr(n);
                        break;
                      case 1:
                        za(n.type) && Ra(n);
                        break;
                      case 4:
                        Kr(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var f = n.type._context,
                          a = n.memoizedProps.value;
                        Sa(Cr, f._currentValue), (f._currentValue = a);
                        break;
                      case 13:
                        if (null !== (f = n.memoizedState))
                          return null !== f.dehydrated
                            ? (Sa(ei, 1 & ei.current), (n.flags |= 128), null)
                            : 0 !== (t & n.child.childLanes)
                            ? Qo(e, n, t)
                            : (Sa(ei, 1 & ei.current), null !== (e = Zo(e, n, t)) ? e.sibling : null);
                        Sa(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (((f = 0 !== (t & n.childLanes)), 0 !== (128 & e.flags))) {
                          if (f) return _o(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (a = n.memoizedState) &&
                            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                          Sa(ei, ei.current),
                          f)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), ko(e, n, t);
                    }
                    return Zo(e, n, t);
                  })(e, n, t)
                );
              Lo = 0 !== (131072 & e.flags);
            }
          else (Lo = !1), rr && 0 !== (1048576 & n.flags) && er(n, Fa, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var f = n.type;
              Go(e, n), (e = n.pendingProps);
              var a = xa(n, Ta.current);
              Er(n, t), (a = mi(null, n, f, e, a, t));
              var i = wi();
              return (
                (n.flags |= 1),
                "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    za(f) ? ((i = !0), Ra(n)) : (i = !1),
                    (n.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                    Rr(n),
                    (a.updater = ao),
                    (n.stateNode = a),
                    (a._reactInternals = n),
                    uo(n, f, e, t),
                    (n = To(null, n, f, !0, i, t)))
                  : ((n.tag = 0), rr && i && nr(n), Mo(null, n, a, t), (n = n.child)),
                n
              );
            case 16:
              f = n.elementType;
              e: {
                switch (
                  (Go(e, n),
                  (e = n.pendingProps),
                  (f = (a = f._init)(f._payload)),
                  (n.type = f),
                  (a = n.tag =
                    (function (e) {
                      if ("function" === typeof e) return zs(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === D) return 14;
                      }
                      return 2;
                    })(f)),
                  (e = to(f, e)),
                  a)
                ) {
                  case 0:
                    n = So(null, n, f, e, t);
                    break e;
                  case 1:
                    n = No(null, n, f, e, t);
                    break e;
                  case 11:
                    n = vo(null, n, f, e, t);
                    break e;
                  case 14:
                    n = Co(null, n, f, to(f.type, e), t);
                    break e;
                }
                throw Error(r(306, f, ""));
              }
              return n;
            case 0:
              return (f = n.type), (a = n.pendingProps), So(e, n, f, (a = n.elementType === f ? a : to(f, a)), t);
            case 1:
              return (f = n.type), (a = n.pendingProps), No(e, n, f, (a = n.elementType === f ? a : to(f, a)), t);
            case 3:
              e: {
                if ((Eo(n), null === e)) throw Error(r(387));
                (f = n.pendingProps), (a = (i = n.memoizedState).element), Qr(e, n), _r(n, f, null, t);
                var o = n.memoizedState;
                if (((f = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: f,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (n.updateQueue.baseState = i),
                    (n.memoizedState = i),
                    256 & n.flags)
                  ) {
                    n = Do(e, n, f, t, (a = so(Error(r(423)), n)));
                    break e;
                  }
                  if (f !== a) {
                    n = Do(e, n, f, t, (a = so(Error(r(424)), n)));
                    break e;
                  }
                  for (
                    ar = la(n.stateNode.containerInfo.firstChild),
                      fr = n,
                      rr = !0,
                      ir = null,
                      t = vr(n, null, f, t),
                      n.child = t;
                    t;

                  )
                    (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((gr(), f === a)) {
                    n = Zo(e, n, t);
                    break e;
                  }
                  Mo(e, n, f, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                qr(n),
                null === e && lr(n),
                (f = n.type),
                (a = n.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                fa(f, a) ? (o = null) : null !== i && fa(f, i) && (n.flags |= 32),
                Io(e, n),
                Mo(e, n, o, t),
                n.child
              );
            case 6:
              return null === e && lr(n), null;
            case 13:
              return Qo(e, n, t);
            case 4:
              return (
                Kr(n, n.stateNode.containerInfo),
                (f = n.pendingProps),
                null === e ? (n.child = Mr(n, null, f, t)) : Mo(e, n, f, t),
                n.child
              );
            case 11:
              return (f = n.type), (a = n.pendingProps), vo(e, n, f, (a = n.elementType === f ? a : to(f, a)), t);
            case 7:
              return Mo(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return Mo(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (
                  ((f = n.type._context),
                  (a = n.pendingProps),
                  (i = n.memoizedProps),
                  (o = a.value),
                  Sa(Cr, f._currentValue),
                  (f._currentValue = o),
                  null !== i)
                )
                  if (uf(i.value, o)) {
                    if (i.children === a.children && !Ea.current) {
                      n = Zo(e, n, t);
                      break e;
                    }
                  } else
                    for (null !== (i = n.child) && (i.return = n); null !== i; ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        o = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === f) {
                            if (1 === i.tag) {
                              (s = Yr(-1, t & -t)).tag = 2;
                              var l = i.updateQueue;
                              if (null !== l) {
                                var c = (l = l.shared).pending;
                                null === c ? (s.next = s) : ((s.next = c.next), (c.next = s)), (l.pending = s);
                              }
                            }
                            (i.lanes |= t),
                              null !== (s = i.alternate) && (s.lanes |= t),
                              Tr(i.return, t, n),
                              (u.lanes |= t);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag) o = i.type === n.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(r(341));
                        (o.lanes |= t), null !== (u = o.alternate) && (u.lanes |= t), Tr(o, t, n), (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === n) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                Mo(e, n, a.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (
                (a = n.type),
                (f = n.pendingProps.children),
                Er(n, t),
                (f = f((a = Dr(a)))),
                (n.flags |= 1),
                Mo(e, n, f, t),
                n.child
              );
            case 14:
              return (a = to((f = n.type), n.pendingProps)), Co(e, n, f, (a = to(f.type, a)), t);
            case 15:
              return jo(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (f = n.type),
                (a = n.pendingProps),
                (a = n.elementType === f ? a : to(f, a)),
                Go(e, n),
                (n.tag = 1),
                za(f) ? ((e = !0), Ra(n)) : (e = !1),
                Er(n, t),
                io(n, f, a),
                uo(n, f, a, t),
                To(null, n, f, !0, e, t)
              );
            case 19:
              return _o(e, n, t);
            case 22:
              return ko(e, n, t);
          }
          throw Error(r(156, n.tag));
        };
        var Ws =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Vs(e) {
          this._internalRoot = e;
        }
        function Ks(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function qs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $s() {}
        function el(e, n, t, f, a) {
          var r = t._reactRootContainer;
          if (r) {
            var i = r;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Zs(i);
                o.call(e);
              };
            }
            Gs(n, i, e, a);
          } else
            i = (function (e, n, t, f, a) {
              if (a) {
                if ("function" === typeof f) {
                  var r = f;
                  f = function () {
                    var e = Zs(i);
                    r.call(e);
                  };
                }
                var i = _s(n, f, e, 0, null, !1, 0, "", $s);
                return (
                  (e._reactRootContainer = i), (e[ha] = i.current), _f(8 === e.nodeType ? e.parentNode : e), cs(), i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof f) {
                var o = f;
                f = function () {
                  var e = Zs(u);
                  o.call(e);
                };
              }
              var u = Bs(e, 0, !1, null, 0, !1, 0, "", $s);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                _f(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Gs(n, u, t, f);
                }),
                u
              );
            })(t, n, e, a, f);
          return Zs(i);
        }
        (Ks.prototype.render = Vs.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(r(409));
            Gs(e, n, null, null);
          }),
          (Ks.prototype.unmount = Vs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                cs(function () {
                  Gs(null, e, null, null);
                }),
                  (n[ha] = null);
              }
            }),
          (Ks.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = kn();
              e = { blockedOn: null, target: e, priority: n };
              for (var t = 0; t < An.length && 0 !== n && n < An[t].priority; t++);
              An.splice(t, 0, e), 0 === t && Qn(e);
            }
          }),
          (vn = function (e) {
            switch (e.tag) {
              case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                  var t = dn(n.pendingLanes);
                  0 !== t && (yn(n, 1 | t), as(n, Xe()), 0 === (6 & Tu) && ((_u = Xe() + 500), _a()));
                }
                break;
              case 13:
                cs(function () {
                  var n = Pr(e, 1);
                  if (null !== n) {
                    var t = ns();
                    fs(n, e, 1, t);
                  }
                }),
                  Fs(e, 1);
            }
          }),
          (Cn = function (e) {
            if (13 === e.tag) {
              var n = Pr(e, 134217728);
              if (null !== n) fs(n, e, 134217728, ns());
              Fs(e, 134217728);
            }
          }),
          (jn = function (e) {
            if (13 === e.tag) {
              var n = ts(e),
                t = Pr(e, n);
              if (null !== t) fs(t, e, n, ns());
              Fs(e, n);
            }
          }),
          (kn = function () {
            return Ln;
          }),
          (In = function (e, n) {
            var t = Ln;
            try {
              return (Ln = e), n();
            } finally {
              Ln = t;
            }
          }),
          (ve = function (e, n, t) {
            switch (n) {
              case "input":
                if ((q(e, t), (n = t.name), "radio" === t.type && null != n)) {
                  for (t = e; t.parentNode; ) t = t.parentNode;
                  for (
                    t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var f = t[n];
                    if (f !== e && f.form === e.form) {
                      var a = va(f);
                      if (!a) throw Error(r(90));
                      F(f), q(f, a);
                    }
                  }
                }
                break;
              case "textarea":
                re(e, t);
                break;
              case "select":
                null != (n = t.value) && te(e, !!t.multiple, n, !1);
            }
          }),
          (Ne = ls),
          (Te = cs);
        var nl = { usingClientEntryPoint: !1, Events: [La, Ma, va, Ie, Se, ls] },
          tl = { findFiberByHostInstance: ya, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
          fl = {
            bundleType: tl.bundleType,
            version: tl.version,
            rendererPackageName: tl.rendererPackageName,
            rendererConfig: tl.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: L.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ze(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tl.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!al.isDisabled && al.supportsFiber)
            try {
              (an = al.inject(fl)), (rn = al);
            } catch (le) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nl),
          (n.createPortal = function (e, n) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Xs(n)) throw Error(r(200));
            return (function (e, n, t) {
              var f = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return { $$typeof: v, key: null == f ? null : "" + f, children: e, containerInfo: n, implementation: t };
            })(e, n, null, t);
          }),
          (n.createRoot = function (e, n) {
            if (!Xs(e)) throw Error(r(299));
            var t = !1,
              f = "",
              a = Ws;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (f = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (n = Bs(e, 1, !1, null, 0, t, 0, f, a)),
              (e[ha] = n.current),
              _f(8 === e.nodeType ? e.parentNode : e),
              new Vs(n)
            );
          }),
          (n.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var n = e._reactInternals;
            if (void 0 === n) {
              if ("function" === typeof e.render) throw Error(r(188));
              throw ((e = Object.keys(e).join(",")), Error(r(268, e)));
            }
            return (e = null === (e = Ze(n)) ? null : e.stateNode);
          }),
          (n.flushSync = function (e) {
            return cs(e);
          }),
          (n.hydrate = function (e, n, t) {
            if (!qs(n)) throw Error(r(200));
            return el(null, e, n, !0, t);
          }),
          (n.hydrateRoot = function (e, n, t) {
            if (!Xs(e)) throw Error(r(405));
            var f = (null != t && t.hydratedSources) || null,
              a = !1,
              i = "",
              o = Ws;
            if (
              (null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (n = _s(n, null, e, 1, null != t ? t : null, a, 0, i, o)),
              (e[ha] = n.current),
              _f(e),
              f)
            )
              for (e = 0; e < f.length; e++)
                (a = (a = (t = f[e])._getVersion)(t._source)),
                  null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, a])
                    : n.mutableSourceEagerHydrationData.push(t, a);
            return new Ks(n);
          }),
          (n.render = function (e, n, t) {
            if (!qs(n)) throw Error(r(200));
            return el(null, e, n, !1, t);
          }),
          (n.unmountComponentAtNode = function (e) {
            if (!qs(e)) throw Error(r(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                el(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (n.unstable_batchedUpdates = ls),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, f) {
            if (!qs(t)) throw Error(r(200));
            if (null == e || void 0 === e._reactInternals) throw Error(r(38));
            return el(e, n, t, !1, f);
          }),
          (n.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, n, t) => {
        "use strict";
        var f = t(950);
        (n.createRoot = f.createRoot), (n.hydrateRoot = f.hydrateRoot);
      },
      950: (e, n, t) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
              console.error(n);
            }
        })(),
          (e.exports = t(730));
      },
      153: (e, n, t) => {
        "use strict";
        var f = t(43),
          a = Symbol.for("react.element"),
          r = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, n, t) {
          var f,
            r = {},
            s = null,
            l = null;
          for (f in (void 0 !== t && (s = "" + t),
          void 0 !== n.key && (s = "" + n.key),
          void 0 !== n.ref && (l = n.ref),
          n))
            i.call(n, f) && !u.hasOwnProperty(f) && (r[f] = n[f]);
          if (e && e.defaultProps) for (f in (n = e.defaultProps)) void 0 === r[f] && (r[f] = n[f]);
          return { $$typeof: a, type: e, key: s, ref: l, props: r, _owner: o.current };
        }
        (n.Fragment = r), (n.jsx = s), (n.jsxs = s);
      },
      202: (e, n) => {
        "use strict";
        var t = Symbol.for("react.element"),
          f = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          r = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          l = Symbol.for("react.suspense"),
          c = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var g = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          m = {};
        function w(e, n, t) {
          (this.props = e), (this.context = n), (this.refs = m), (this.updater = t || g);
        }
        function b() {}
        function y(e, n, t) {
          (this.props = e), (this.context = n), (this.refs = m), (this.updater = t || g);
        }
        (w.prototype.isReactComponent = {}),
          (w.prototype.setState = function (e, n) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, n, "setState");
          }),
          (w.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = w.prototype);
        var L = (y.prototype = new b());
        (L.constructor = y), h(L, w.prototype), (L.isPureReactComponent = !0);
        var M = Array.isArray,
          v = Object.prototype.hasOwnProperty,
          C = { current: null },
          j = { key: !0, ref: !0, __self: !0, __source: !0 };
        function k(e, n, f) {
          var a,
            r = {},
            i = null,
            o = null;
          if (null != n)
            for (a in (void 0 !== n.ref && (o = n.ref), void 0 !== n.key && (i = "" + n.key), n))
              v.call(n, a) && !j.hasOwnProperty(a) && (r[a] = n[a]);
          var u = arguments.length - 2;
          if (1 === u) r.children = f;
          else if (1 < u) {
            for (var s = Array(u), l = 0; l < u; l++) s[l] = arguments[l + 2];
            r.children = s;
          }
          if (e && e.defaultProps) for (a in (u = e.defaultProps)) void 0 === r[a] && (r[a] = u[a]);
          return { $$typeof: t, type: e, key: i, ref: o, props: r, _owner: C.current };
        }
        function I(e) {
          return "object" === typeof e && null !== e && e.$$typeof === t;
        }
        var S = /\/+/g;
        function N(e, n) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return n[e];
                  })
                );
              })("" + e.key)
            : n.toString(36);
        }
        function T(e, n, a, r, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (o) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case t:
                  case f:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === r ? "." + N(u, 0) : r),
              M(i)
                ? ((a = ""),
                  null != e && (a = e.replace(S, "$&/") + "/"),
                  T(i, n, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (I(i) &&
                    (i = (function (e, n) {
                      return { $$typeof: t, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
                    })(i, a + (!i.key || (u && u.key === i.key) ? "" : ("" + i.key).replace(S, "$&/") + "/") + e)),
                  n.push(i)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), M(e)))
            for (var s = 0; s < e.length; s++) {
              var l = r + N((o = e[s]), s);
              u += T(o, n, a, l, i);
            }
          else if (
            ((l = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof l)
          )
            for (e = l.call(e), s = 0; !(o = e.next()).done; ) u += T((o = o.value), n, a, (l = r + N(o, s++)), i);
          else if ("object" === o)
            throw (
              ((n = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function E(e, n, t) {
          if (null == e) return e;
          var f = [],
            a = 0;
          return (
            T(e, f, "", "", function (e) {
              return n.call(t, e, a++);
            }),
            f
          );
        }
        function D(e) {
          if (-1 === e._status) {
            var n = e._result;
            (n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = n));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = n));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var x = { current: null },
          z = { transition: null },
          A = { ReactCurrentDispatcher: x, ReactCurrentBatchConfig: z, ReactCurrentOwner: C };
        function P() {
          throw Error("act(...) is not supported in production builds of React.");
        }
        (n.Children = {
          map: E,
          forEach: function (e, n, t) {
            E(
              e,
              function () {
                n.apply(this, arguments);
              },
              t
            );
          },
          count: function (e) {
            var n = 0;
            return (
              E(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              E(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!I(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
          },
        }),
          (n.Component = w),
          (n.Fragment = a),
          (n.Profiler = i),
          (n.PureComponent = y),
          (n.StrictMode = r),
          (n.Suspense = l),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (n.act = P),
          (n.cloneElement = function (e, n, f) {
            if (null === e || void 0 === e)
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var a = h({}, e.props),
              r = e.key,
              i = e.ref,
              o = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((i = n.ref), (o = C.current)),
                void 0 !== n.key && (r = "" + n.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in n)
                v.call(n, s) && !j.hasOwnProperty(s) && (a[s] = void 0 === n[s] && void 0 !== u ? u[s] : n[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = f;
            else if (1 < s) {
              u = Array(s);
              for (var l = 0; l < s; l++) u[l] = arguments[l + 2];
              a.children = u;
            }
            return { $$typeof: t, type: e.type, key: r, ref: i, props: a, _owner: o };
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (n.createElement = k),
          (n.createFactory = function (e) {
            var n = k.bind(null, e);
            return (n.type = e), n;
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (n.isValidElement = I),
          (n.lazy = function (e) {
            return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: D };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: c, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = n;
            }
          }),
          (n.unstable_act = P),
          (n.useCallback = function (e, n) {
            return x.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return x.current.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return x.current.useDeferredValue(e);
          }),
          (n.useEffect = function (e, n) {
            return x.current.useEffect(e, n);
          }),
          (n.useId = function () {
            return x.current.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return x.current.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return x.current.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return x.current.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return x.current.useMemo(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return x.current.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return x.current.useRef(e);
          }),
          (n.useState = function (e) {
            return x.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return x.current.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return x.current.useTransition();
          }),
          (n.version = "18.3.1");
      },
      43: (e, n, t) => {
        "use strict";
        e.exports = t(202);
      },
      579: (e, n, t) => {
        "use strict";
        e.exports = t(153);
      },
      234: (e, n) => {
        "use strict";
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var f = (t - 1) >>> 1,
              a = e[f];
            if (!(0 < r(a, n))) break e;
            (e[f] = n), (e[t] = a), (t = f);
          }
        }
        function f(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var f = 0, a = e.length, i = a >>> 1; f < i; ) {
              var o = 2 * (f + 1) - 1,
                u = e[o],
                s = o + 1,
                l = e[s];
              if (0 > r(u, t))
                s < a && 0 > r(l, u) ? ((e[f] = l), (e[s] = t), (f = s)) : ((e[f] = u), (e[o] = t), (f = o));
              else {
                if (!(s < a && 0 > r(l, t))) break e;
                (e[f] = l), (e[s] = t), (f = s);
              }
            }
          }
          return n;
        }
        function r(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var i = performance;
          n.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            u = o.now();
          n.unstable_now = function () {
            return o.now() - u;
          };
        }
        var s = [],
          l = [],
          c = 1,
          d = null,
          p = 3,
          g = !1,
          h = !1,
          m = !1,
          w = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function L(e) {
          for (var n = f(l); null !== n; ) {
            if (null === n.callback) a(l);
            else {
              if (!(n.startTime <= e)) break;
              a(l), (n.sortIndex = n.expirationTime), t(s, n);
            }
            n = f(l);
          }
        }
        function M(e) {
          if (((m = !1), L(e), !h))
            if (null !== f(s)) (h = !0), z(v);
            else {
              var n = f(l);
              null !== n && A(M, n.startTime - e);
            }
        }
        function v(e, t) {
          (h = !1), m && ((m = !1), b(I), (I = -1)), (g = !0);
          var r = p;
          try {
            for (L(t), d = f(s); null !== d && (!(d.expirationTime > t) || (e && !T())); ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var o = i(d.expirationTime <= t);
                (t = n.unstable_now()), "function" === typeof o ? (d.callback = o) : d === f(s) && a(s), L(t);
              } else a(s);
              d = f(s);
            }
            if (null !== d) var u = !0;
            else {
              var c = f(l);
              null !== c && A(M, c.startTime - t), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = r), (g = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var C,
          j = !1,
          k = null,
          I = -1,
          S = 5,
          N = -1;
        function T() {
          return !(n.unstable_now() - N < S);
        }
        function E() {
          if (null !== k) {
            var e = n.unstable_now();
            N = e;
            var t = !0;
            try {
              t = k(!0, e);
            } finally {
              t ? C() : ((j = !1), (k = null));
            }
          } else j = !1;
        }
        if ("function" === typeof y)
          C = function () {
            y(E);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var D = new MessageChannel(),
            x = D.port2;
          (D.port1.onmessage = E),
            (C = function () {
              x.postMessage(null);
            });
        } else
          C = function () {
            w(E, 0);
          };
        function z(e) {
          (k = e), j || ((j = !0), C());
        }
        function A(e, t) {
          I = w(function () {
            e(n.unstable_now());
          }, t);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            h || g || ((h = !0), z(v));
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (S = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return f(s);
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, a, r) {
            var i = n.unstable_now();
            switch (
              ("object" === typeof r && null !== r
                ? (r = "number" === typeof (r = r.delay) && 0 < r ? i + r : i)
                : (r = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: c++,
                callback: a,
                priorityLevel: e,
                startTime: r,
                expirationTime: (o = r + o),
                sortIndex: -1,
              }),
              r > i
                ? ((e.sortIndex = r),
                  t(l, e),
                  null === f(s) && e === f(l) && (m ? (b(I), (I = -1)) : (m = !0), A(M, r - i)))
                : ((e.sortIndex = o), t(s, e), h || g || ((h = !0), z(v))),
              e
            );
          }),
          (n.unstable_shouldYield = T),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          });
      },
      853: (e, n, t) => {
        "use strict";
        e.exports = t(234);
      },
      324: (e) => {
        e.exports = function (e, n, t, f) {
          var a = t ? t.call(f, e, n) : void 0;
          if (void 0 !== a) return !!a;
          if (e === n) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof n || !n) return !1;
          var r = Object.keys(e),
            i = Object.keys(n);
          if (r.length !== i.length) return !1;
          for (var o = Object.prototype.hasOwnProperty.bind(n), u = 0; u < r.length; u++) {
            var s = r[u];
            if (!o(s)) return !1;
            var l = e[s],
              c = n[s];
            if (!1 === (a = t ? t.call(f, l, c, s) : void 0) || (void 0 === a && l !== c)) return !1;
          }
          return !0;
        };
      },
    },
    n = {};
  function t(f) {
    var a = n[f];
    if (void 0 !== a) return a.exports;
    var r = (n[f] = { exports: {} });
    return e[f](r, r.exports, t), r.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var f in n) t.o(n, f) && !t.o(e, f) && Object.defineProperty(e, f, { enumerable: !0, get: n[f] });
    }),
    (t.f = {}),
    (t.e = (e) => Promise.all(Object.keys(t.f).reduce((n, f) => (t.f[f](e, n), n), []))),
    (t.u = (e) => "static/js/" + e + ".5bf1f744.chunk.js"),
    (t.miniCssF = (e) => {}),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = {},
        n = "reactchat:";
      t.l = (f, a, r, i) => {
        if (e[f]) e[f].push(a);
        else {
          var o, u;
          if (void 0 !== r)
            for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
              var c = s[l];
              if (c.getAttribute("src") == f || c.getAttribute("data-webpack") == n + r) {
                o = c;
                break;
              }
            }
          o ||
            ((u = !0),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            t.nc && o.setAttribute("nonce", t.nc),
            o.setAttribute("data-webpack", n + r),
            (o.src = f)),
            (e[f] = [a]);
          var d = (n, t) => {
              (o.onerror = o.onload = null), clearTimeout(p);
              var a = e[f];
              if ((delete e[f], o.parentNode && o.parentNode.removeChild(o), a && a.forEach((e) => e(t)), n))
                return n(t);
            },
            p = setTimeout(d.bind(null, void 0, { type: "timeout", target: o }), 12e4);
          (o.onerror = d.bind(null, o.onerror)), (o.onload = d.bind(null, o.onload)), u && document.head.appendChild(o);
        }
      };
    })(),
    (t.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.p = "/"),
    (() => {
      var e = { 792: 0 };
      t.f.j = (n, f) => {
        var a = t.o(e, n) ? e[n] : void 0;
        if (0 !== a)
          if (a) f.push(a[2]);
          else {
            var r = new Promise((t, f) => (a = e[n] = [t, f]));
            f.push((a[2] = r));
            var i = t.p + t.u(n),
              o = new Error();
            t.l(
              i,
              (f) => {
                if (t.o(e, n) && (0 !== (a = e[n]) && (e[n] = void 0), a)) {
                  var r = f && ("load" === f.type ? "missing" : f.type),
                    i = f && f.target && f.target.src;
                  (o.message = "Loading chunk " + n + " failed.\n(" + r + ": " + i + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = r),
                    (o.request = i),
                    a[1](o);
                }
              },
              "chunk-" + n,
              n
            );
          }
      };
      var n = (n, f) => {
          var a,
            r,
            i = f[0],
            o = f[1],
            u = f[2],
            s = 0;
          if (i.some((n) => 0 !== e[n])) {
            for (a in o) t.o(o, a) && (t.m[a] = o[a]);
            if (u) u(t);
          }
          for (n && n(f); s < i.length; s++) (r = i[s]), t.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
        },
        f = (self.webpackChunkreactchat = self.webpackChunkreactchat || []);
      f.forEach(n.bind(null, 0)), (f.push = n.bind(null, f.push.bind(f)));
    })(),
    (t.nc = void 0),
    (() => {
      "use strict";
      var e = {};
      t.r(e),
        t.d(e, {
          hasBrowserEnv: () => ce,
          hasStandardBrowserEnv: () => pe,
          hasStandardBrowserWebWorkerEnv: () => ge,
          navigator: () => de,
          origin: () => he,
        });
      var n = {};
      t.r(n), t.d(n, { Decoder: () => Bt, Encoder: () => Yt, PacketType: () => Qt, protocol: () => Rt });
      var f = t(43),
        a = t(391);
      function r(e, n) {
        return function () {
          return e.apply(n, arguments);
        };
      }
      const { toString: i } = Object.prototype,
        { getPrototypeOf: o } = Object,
        u = ((e) => (n) => {
          const t = i.call(n);
          return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        s = (e) => ((e = e.toLowerCase()), (n) => u(n) === e),
        l = (e) => (n) => typeof n === e,
        { isArray: c } = Array,
        d = l("undefined");
      const p = s("ArrayBuffer");
      const g = l("string"),
        h = l("function"),
        m = l("number"),
        w = (e) => null !== e && "object" === typeof e,
        b = (e) => {
          if ("object" !== u(e)) return !1;
          const n = o(e);
          return (
            (null === n || n === Object.prototype || null === Object.getPrototypeOf(n)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        y = s("Date"),
        L = s("File"),
        M = s("Blob"),
        v = s("FileList"),
        C = s("URLSearchParams"),
        [j, k, I, S] = ["ReadableStream", "Request", "Response", "Headers"].map(s);
      function N(e, n) {
        let t,
          f,
          { allOwnKeys: a = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), c(e)))
            for (t = 0, f = e.length; t < f; t++) n.call(null, e[t], t, e);
          else {
            const f = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              r = f.length;
            let i;
            for (t = 0; t < r; t++) (i = f[t]), n.call(null, e[i], i, e);
          }
      }
      function T(e, n) {
        n = n.toLowerCase();
        const t = Object.keys(e);
        let f,
          a = t.length;
        for (; a-- > 0; ) if (((f = t[a]), n === f.toLowerCase())) return f;
        return null;
      }
      const E =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        D = (e) => !d(e) && e !== E;
      const x = ((z = "undefined" !== typeof Uint8Array && o(Uint8Array)), (e) => z && e instanceof z);
      var z;
      const A = s("HTMLFormElement"),
        P = ((e) => {
          let { hasOwnProperty: n } = e;
          return (e, t) => n.call(e, t);
        })(Object.prototype),
        O = s("RegExp"),
        R = (e, n) => {
          const t = Object.getOwnPropertyDescriptors(e),
            f = {};
          N(t, (t, a) => {
            let r;
            !1 !== (r = n(t, a, e)) && (f[a] = r || t);
          }),
            Object.defineProperties(e, f);
        },
        Q = "abcdefghijklmnopqrstuvwxyz",
        Y = "0123456789",
        U = { DIGIT: Y, ALPHA: Q, ALPHA_DIGIT: Q + Q.toUpperCase() + Y };
      const B = s("AsyncFunction"),
        J =
          ((_ = "function" === typeof setImmediate),
          (G = h(E.postMessage)),
          _
            ? setImmediate
            : G
            ? ((e, n) => (
                E.addEventListener(
                  "message",
                  (t) => {
                    let { source: f, data: a } = t;
                    f === E && a === e && n.length && n.shift()();
                  },
                  !1
                ),
                (t) => {
                  n.push(t), E.postMessage(e, "*");
                }
              ))(`axios@${Math.random()}`, [])
            : (e) => setTimeout(e));
      var _, G;
      const Z =
          "undefined" !== typeof queueMicrotask
            ? queueMicrotask.bind(E)
            : ("undefined" !== typeof process && process.nextTick) || J,
        H = {
          isArray: c,
          isArrayBuffer: p,
          isBuffer: function (e) {
            return (
              null !== e &&
              !d(e) &&
              null !== e.constructor &&
              !d(e.constructor) &&
              h(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let n;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (h(e.append) &&
                  ("formdata" === (n = u(e)) ||
                    ("object" === n && h(e.toString) && "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let n;
            return (
              (n =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && p(e.buffer)),
              n
            );
          },
          isString: g,
          isNumber: m,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: w,
          isPlainObject: b,
          isReadableStream: j,
          isRequest: k,
          isResponse: I,
          isHeaders: S,
          isUndefined: d,
          isDate: y,
          isFile: L,
          isBlob: M,
          isRegExp: O,
          isFunction: h,
          isStream: (e) => w(e) && h(e.pipe),
          isURLSearchParams: C,
          isTypedArray: x,
          isFileList: v,
          forEach: N,
          merge: function e() {
            const { caseless: n } = (D(this) && this) || {},
              t = {},
              f = (f, a) => {
                const r = (n && T(t, a)) || a;
                b(t[r]) && b(f)
                  ? (t[r] = e(t[r], f))
                  : b(f)
                  ? (t[r] = e({}, f))
                  : c(f)
                  ? (t[r] = f.slice())
                  : (t[r] = f);
              };
            for (let a = 0, r = arguments.length; a < r; a++) arguments[a] && N(arguments[a], f);
            return t;
          },
          extend: function (e, n, t) {
            let { allOwnKeys: f } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return (
              N(
                n,
                (n, f) => {
                  t && h(n) ? (e[f] = r(n, t)) : (e[f] = n);
                },
                { allOwnKeys: f }
              ),
              e
            );
          },
          trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, n, t, f) => {
            (e.prototype = Object.create(n.prototype, f)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: n.prototype }),
              t && Object.assign(e.prototype, t);
          },
          toFlatObject: (e, n, t, f) => {
            let a, r, i;
            const u = {};
            if (((n = n || {}), null == e)) return n;
            do {
              for (a = Object.getOwnPropertyNames(e), r = a.length; r-- > 0; )
                (i = a[r]), (f && !f(i, e, n)) || u[i] || ((n[i] = e[i]), (u[i] = !0));
              e = !1 !== t && o(e);
            } while (e && (!t || t(e, n)) && e !== Object.prototype);
            return n;
          },
          kindOf: u,
          kindOfTest: s,
          endsWith: (e, n, t) => {
            (e = String(e)), (void 0 === t || t > e.length) && (t = e.length), (t -= n.length);
            const f = e.indexOf(n, t);
            return -1 !== f && f === t;
          },
          toArray: (e) => {
            if (!e) return null;
            if (c(e)) return e;
            let n = e.length;
            if (!m(n)) return null;
            const t = new Array(n);
            for (; n-- > 0; ) t[n] = e[n];
            return t;
          },
          forEachEntry: (e, n) => {
            const t = (e && e[Symbol.iterator]).call(e);
            let f;
            for (; (f = t.next()) && !f.done; ) {
              const t = f.value;
              n.call(e, t[0], t[1]);
            }
          },
          matchAll: (e, n) => {
            let t;
            const f = [];
            for (; null !== (t = e.exec(n)); ) f.push(t);
            return f;
          },
          isHTMLForm: A,
          hasOwnProperty: P,
          hasOwnProp: P,
          reduceDescriptors: R,
          freezeMethods: (e) => {
            R(e, (n, t) => {
              if (h(e) && -1 !== ["arguments", "caller", "callee"].indexOf(t)) return !1;
              const f = e[t];
              h(f) &&
                ((n.enumerable = !1),
                "writable" in n
                  ? (n.writable = !1)
                  : n.set ||
                    (n.set = () => {
                      throw Error("Can not rewrite read-only method '" + t + "'");
                    }));
            });
          },
          toObjectSet: (e, n) => {
            const t = {},
              f = (e) => {
                e.forEach((e) => {
                  t[e] = !0;
                });
              };
            return c(e) ? f(e) : f(String(e).split(n)), t;
          },
          toCamelCase: (e) =>
            e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, n, t) {
              return n.toUpperCase() + t;
            }),
          noop: () => {},
          toFiniteNumber: (e, n) => (null != e && Number.isFinite((e = +e)) ? e : n),
          findKey: T,
          global: E,
          isContextDefined: D,
          ALPHABET: U,
          generateString: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.ALPHA_DIGIT,
              t = "";
            const { length: f } = n;
            for (; e--; ) t += n[(Math.random() * f) | 0];
            return t;
          },
          isSpecCompliantForm: function (e) {
            return !!(e && h(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
          },
          toJSONObject: (e) => {
            const n = new Array(10),
              t = (e, f) => {
                if (w(e)) {
                  if (n.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    n[f] = e;
                    const a = c(e) ? [] : {};
                    return (
                      N(e, (e, n) => {
                        const r = t(e, f + 1);
                        !d(r) && (a[n] = r);
                      }),
                      (n[f] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return t(e, 0);
          },
          isAsyncFn: B,
          isThenable: (e) => e && (w(e) || h(e)) && h(e.then) && h(e.catch),
          setImmediate: J,
          asap: Z,
        };
      function F(e, n, t, f, a) {
        Error.call(this),
          Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          n && (this.code = n),
          t && (this.config = t),
          f && (this.request = f),
          a && ((this.response = a), (this.status = a.status ? a.status : null));
      }
      H.inherits(F, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: H.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      const W = F.prototype,
        V = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        V[e] = { value: e };
      }),
        Object.defineProperties(F, V),
        Object.defineProperty(W, "isAxiosError", { value: !0 }),
        (F.from = (e, n, t, f, a, r) => {
          const i = Object.create(W);
          return (
            H.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            F.call(i, e.message, n, t, f, a),
            (i.cause = e),
            (i.name = e.name),
            r && Object.assign(i, r),
            i
          );
        });
      const K = F;
      function X(e) {
        return H.isPlainObject(e) || H.isArray(e);
      }
      function q(e) {
        return H.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function $(e, n, t) {
        return e
          ? e
              .concat(n)
              .map(function (e, n) {
                return (e = q(e)), !t && n ? "[" + e + "]" : e;
              })
              .join(t ? "." : "")
          : n;
      }
      const ee = H.toFlatObject(H, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const ne = function (e, n, t) {
        if (!H.isObject(e)) throw new TypeError("target must be an object");
        n = n || new FormData();
        const f = (t = H.toFlatObject(t, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, n) {
            return !H.isUndefined(n[e]);
          })).metaTokens,
          a = t.visitor || s,
          r = t.dots,
          i = t.indexes,
          o = (t.Blob || ("undefined" !== typeof Blob && Blob)) && H.isSpecCompliantForm(n);
        if (!H.isFunction(a)) throw new TypeError("visitor must be a function");
        function u(e) {
          if (null === e) return "";
          if (H.isDate(e)) return e.toISOString();
          if (!o && H.isBlob(e)) throw new K("Blob is not supported. Use a Buffer instead.");
          return H.isArrayBuffer(e) || H.isTypedArray(e)
            ? o && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function s(e, t, a) {
          let o = e;
          if (e && !a && "object" === typeof e)
            if (H.endsWith(t, "{}")) (t = f ? t : t.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (H.isArray(e) &&
                (function (e) {
                  return H.isArray(e) && !e.some(X);
                })(e)) ||
              ((H.isFileList(e) || H.endsWith(t, "[]")) && (o = H.toArray(e)))
            )
              return (
                (t = q(t)),
                o.forEach(function (e, f) {
                  !H.isUndefined(e) &&
                    null !== e &&
                    n.append(!0 === i ? $([t], f, r) : null === i ? t : t + "[]", u(e));
                }),
                !1
              );
          return !!X(e) || (n.append($(a, t, r), u(e)), !1);
        }
        const l = [],
          c = Object.assign(ee, { defaultVisitor: s, convertValue: u, isVisitable: X });
        if (!H.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(t, f) {
            if (!H.isUndefined(t)) {
              if (-1 !== l.indexOf(t)) throw Error("Circular reference detected in " + f.join("."));
              l.push(t),
                H.forEach(t, function (t, r) {
                  !0 === (!(H.isUndefined(t) || null === t) && a.call(n, t, H.isString(r) ? r.trim() : r, f, c)) &&
                    e(t, f ? f.concat(r) : [r]);
                }),
                l.pop();
            }
          })(e),
          n
        );
      };
      function te(e) {
        const n = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return n[e];
        });
      }
      function fe(e, n) {
        (this._pairs = []), e && ne(e, this, n);
      }
      const ae = fe.prototype;
      (ae.append = function (e, n) {
        this._pairs.push([e, n]);
      }),
        (ae.toString = function (e) {
          const n = e
            ? function (n) {
                return e.call(this, n, te);
              }
            : te;
          return this._pairs
            .map(function (e) {
              return n(e[0]) + "=" + n(e[1]);
            }, "")
            .join("&");
        });
      const re = fe;
      function ie(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function oe(e, n, t) {
        if (!n) return e;
        const f = (t && t.encode) || ie,
          a = t && t.serialize;
        let r;
        if (((r = a ? a(n, t) : H.isURLSearchParams(n) ? n.toString() : new re(n, t).toString(f)), r)) {
          const n = e.indexOf("#");
          -1 !== n && (e = e.slice(0, n)), (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      const ue = class {
          constructor() {
            this.handlers = [];
          }
          use(e, n, t) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: n,
                synchronous: !!t && t.synchronous,
                runWhen: t ? t.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            H.forEach(this.handlers, function (n) {
              null !== n && e(n);
            });
          }
        },
        se = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
        le = {
          isBrowser: !0,
          classes: {
            URLSearchParams: "undefined" !== typeof URLSearchParams ? URLSearchParams : re,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        ce = "undefined" !== typeof window && "undefined" !== typeof document,
        de = ("object" === typeof navigator && navigator) || void 0,
        pe = ce && (!de || ["ReactNative", "NativeScript", "NS"].indexOf(de.product) < 0),
        ge =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        he = (ce && window.location.href) || "http://localhost",
        me = { ...e, ...le };
      const we = function (e) {
        function n(e, t, f, a) {
          let r = e[a++];
          if ("__proto__" === r) return !0;
          const i = Number.isFinite(+r),
            o = a >= e.length;
          if (((r = !r && H.isArray(f) ? f.length : r), o))
            return H.hasOwnProp(f, r) ? (f[r] = [f[r], t]) : (f[r] = t), !i;
          (f[r] && H.isObject(f[r])) || (f[r] = []);
          return (
            n(e, t, f[r], a) &&
              H.isArray(f[r]) &&
              (f[r] = (function (e) {
                const n = {},
                  t = Object.keys(e);
                let f;
                const a = t.length;
                let r;
                for (f = 0; f < a; f++) (r = t[f]), (n[r] = e[r]);
                return n;
              })(f[r])),
            !i
          );
        }
        if (H.isFormData(e) && H.isFunction(e.entries)) {
          const t = {};
          return (
            H.forEachEntry(e, (e, f) => {
              n(
                (function (e) {
                  return H.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                })(e),
                f,
                t,
                0
              );
            }),
            t
          );
        }
        return null;
      };
      const be = {
        transitional: se,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, n) {
            const t = n.getContentType() || "",
              f = t.indexOf("application/json") > -1,
              a = H.isObject(e);
            a && H.isHTMLForm(e) && (e = new FormData(e));
            if (H.isFormData(e)) return f ? JSON.stringify(we(e)) : e;
            if (
              H.isArrayBuffer(e) ||
              H.isBuffer(e) ||
              H.isStream(e) ||
              H.isFile(e) ||
              H.isBlob(e) ||
              H.isReadableStream(e)
            )
              return e;
            if (H.isArrayBufferView(e)) return e.buffer;
            if (H.isURLSearchParams(e))
              return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
            let r;
            if (a) {
              if (t.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, n) {
                  return ne(
                    e,
                    new me.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, n, t, f) {
                          return me.isNode && H.isBuffer(e)
                            ? (this.append(n, e.toString("base64")), !1)
                            : f.defaultVisitor.apply(this, arguments);
                        },
                      },
                      n
                    )
                  );
                })(e, this.formSerializer).toString();
              if ((r = H.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
                const n = this.env && this.env.FormData;
                return ne(r ? { "files[]": e } : e, n && new n(), this.formSerializer);
              }
            }
            return a || f
              ? (n.setContentType("application/json", !1),
                (function (e, n, t) {
                  if (H.isString(e))
                    try {
                      return (n || JSON.parse)(e), H.trim(e);
                    } catch (f) {
                      if ("SyntaxError" !== f.name) throw f;
                    }
                  return (t || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const n = this.transitional || be.transitional,
              t = n && n.forcedJSONParsing,
              f = "json" === this.responseType;
            if (H.isResponse(e) || H.isReadableStream(e)) return e;
            if (e && H.isString(e) && ((t && !this.responseType) || f)) {
              const t = !(n && n.silentJSONParsing) && f;
              try {
                return JSON.parse(e);
              } catch (a) {
                if (t) {
                  if ("SyntaxError" === a.name) throw K.from(a, K.ERR_BAD_RESPONSE, this, null, this.response);
                  throw a;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: me.classes.FormData, Blob: me.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
      };
      H.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        be.headers[e] = {};
      });
      const ye = be,
        Le = H.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Me = Symbol("internals");
      function ve(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Ce(e) {
        return !1 === e || null == e ? e : H.isArray(e) ? e.map(Ce) : String(e);
      }
      function je(e, n, t, f, a) {
        return H.isFunction(f)
          ? f.call(this, n, t)
          : (a && (n = t),
            H.isString(n) ? (H.isString(f) ? -1 !== n.indexOf(f) : H.isRegExp(f) ? f.test(n) : void 0) : void 0);
      }
      class ke {
        constructor(e) {
          e && this.set(e);
        }
        set(e, n, t) {
          const f = this;
          function a(e, n, t) {
            const a = ve(n);
            if (!a) throw new Error("header name must be a non-empty string");
            const r = H.findKey(f, a);
            (!r || void 0 === f[r] || !0 === t || (void 0 === t && !1 !== f[r])) && (f[r || n] = Ce(e));
          }
          const r = (e, n) => H.forEach(e, (e, t) => a(e, t, n));
          if (H.isPlainObject(e) || e instanceof this.constructor) r(e, n);
          else if (H.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
            r(
              ((e) => {
                const n = {};
                let t, f, a;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (a = e.indexOf(":")),
                        (t = e.substring(0, a).trim().toLowerCase()),
                        (f = e.substring(a + 1).trim()),
                        !t ||
                          (n[t] && Le[t]) ||
                          ("set-cookie" === t
                            ? n[t]
                              ? n[t].push(f)
                              : (n[t] = [f])
                            : (n[t] = n[t] ? n[t] + ", " + f : f));
                    }),
                  n
                );
              })(e),
              n
            );
          else if (H.isHeaders(e)) for (const [i, o] of e.entries()) a(o, i, t);
          else null != e && a(n, e, t);
          return this;
        }
        get(e, n) {
          if ((e = ve(e))) {
            const t = H.findKey(this, e);
            if (t) {
              const e = this[t];
              if (!n) return e;
              if (!0 === n)
                return (function (e) {
                  const n = Object.create(null),
                    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let f;
                  for (; (f = t.exec(e)); ) n[f[1]] = f[2];
                  return n;
                })(e);
              if (H.isFunction(n)) return n.call(this, e, t);
              if (H.isRegExp(n)) return n.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, n) {
          if ((e = ve(e))) {
            const t = H.findKey(this, e);
            return !(!t || void 0 === this[t] || (n && !je(0, this[t], t, n)));
          }
          return !1;
        }
        delete(e, n) {
          const t = this;
          let f = !1;
          function a(e) {
            if ((e = ve(e))) {
              const a = H.findKey(t, e);
              !a || (n && !je(0, t[a], a, n)) || (delete t[a], (f = !0));
            }
          }
          return H.isArray(e) ? e.forEach(a) : a(e), f;
        }
        clear(e) {
          const n = Object.keys(this);
          let t = n.length,
            f = !1;
          for (; t--; ) {
            const a = n[t];
            (e && !je(0, this[a], a, e, !0)) || (delete this[a], (f = !0));
          }
          return f;
        }
        normalize(e) {
          const n = this,
            t = {};
          return (
            H.forEach(this, (f, a) => {
              const r = H.findKey(t, a);
              if (r) return (n[r] = Ce(f)), void delete n[a];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(/([a-z\d])(\w*)/g, (e, n, t) => n.toUpperCase() + t);
                  })(a)
                : String(a).trim();
              i !== a && delete n[a], (n[i] = Ce(f)), (t[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return this.constructor.concat(this, ...n);
        }
        toJSON(e) {
          const n = Object.create(null);
          return (
            H.forEach(this, (t, f) => {
              null != t && !1 !== t && (n[f] = e && H.isArray(t) ? t.join(", ") : t);
            }),
            n
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [n, t] = e;
              return n + ": " + t;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const n = new this(e);
          for (var t = arguments.length, f = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) f[a - 1] = arguments[a];
          return f.forEach((e) => n.set(e)), n;
        }
        static accessor(e) {
          const n = (this[Me] = this[Me] = { accessors: {} }).accessors,
            t = this.prototype;
          function f(e) {
            const f = ve(e);
            n[f] ||
              (!(function (e, n) {
                const t = H.toCamelCase(" " + n);
                ["get", "set", "has"].forEach((f) => {
                  Object.defineProperty(e, f + t, {
                    value: function (e, t, a) {
                      return this[f].call(this, n, e, t, a);
                    },
                    configurable: !0,
                  });
                });
              })(t, e),
              (n[f] = !0));
          }
          return H.isArray(e) ? e.forEach(f) : f(e), this;
        }
      }
      ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        H.reduceDescriptors(ke.prototype, (e, n) => {
          let { value: t } = e,
            f = n[0].toUpperCase() + n.slice(1);
          return {
            get: () => t,
            set(e) {
              this[f] = e;
            },
          };
        }),
        H.freezeMethods(ke);
      const Ie = ke;
      function Se(e, n) {
        const t = this || ye,
          f = n || t,
          a = Ie.from(f.headers);
        let r = f.data;
        return (
          H.forEach(e, function (e) {
            r = e.call(t, r, a.normalize(), n ? n.status : void 0);
          }),
          a.normalize(),
          r
        );
      }
      function Ne(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Te(e, n, t) {
        K.call(this, null == e ? "canceled" : e, K.ERR_CANCELED, n, t), (this.name = "CanceledError");
      }
      H.inherits(Te, K, { __CANCEL__: !0 });
      const Ee = Te;
      function De(e, n, t) {
        const f = t.config.validateStatus;
        t.status && f && !f(t.status)
          ? n(
              new K(
                "Request failed with status code " + t.status,
                [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
                t.config,
                t.request,
                t
              )
            )
          : e(t);
      }
      const xe = function (e, n) {
        e = e || 10;
        const t = new Array(e),
          f = new Array(e);
        let a,
          r = 0,
          i = 0;
        return (
          (n = void 0 !== n ? n : 1e3),
          function (o) {
            const u = Date.now(),
              s = f[i];
            a || (a = u), (t[r] = o), (f[r] = u);
            let l = i,
              c = 0;
            for (; l !== r; ) (c += t[l++]), (l %= e);
            if (((r = (r + 1) % e), r === i && (i = (i + 1) % e), u - a < n)) return;
            const d = s && u - s;
            return d ? Math.round((1e3 * c) / d) : void 0;
          }
        );
      };
      const ze = function (e, n) {
          let t,
            f,
            a = 0,
            r = 1e3 / n;
          const i = function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            (a = r), (t = null), f && (clearTimeout(f), (f = null)), e.apply(null, n);
          };
          return [
            function () {
              const e = Date.now(),
                n = e - a;
              for (var o = arguments.length, u = new Array(o), s = 0; s < o; s++) u[s] = arguments[s];
              n >= r
                ? i(u, e)
                : ((t = u),
                  f ||
                    (f = setTimeout(() => {
                      (f = null), i(t);
                    }, r - n)));
            },
            () => t && i(t),
          ];
        },
        Ae = function (e, n) {
          let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
            f = 0;
          const a = xe(50, 250);
          return ze((t) => {
            const r = t.loaded,
              i = t.lengthComputable ? t.total : void 0,
              o = r - f,
              u = a(o);
            f = r;
            e({
              loaded: r,
              total: i,
              progress: i ? r / i : void 0,
              bytes: o,
              rate: u || void 0,
              estimated: u && i && r <= i ? (i - r) / u : void 0,
              event: t,
              lengthComputable: null != i,
              [n ? "download" : "upload"]: !0,
            });
          }, t);
        },
        Pe = (e, n) => {
          const t = null != e;
          return [(f) => n[0]({ lengthComputable: t, total: e, loaded: f }), n[1]];
        },
        Oe = (e) =>
          function () {
            for (var n = arguments.length, t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f];
            return H.asap(() => e(...t));
          },
        Re = me.hasStandardBrowserEnv
          ? (function () {
              const e = me.navigator && /(msie|trident)/i.test(me.navigator.userAgent),
                n = document.createElement("a");
              let t;
              function f(t) {
                let f = t;
                return (
                  e && (n.setAttribute("href", f), (f = n.href)),
                  n.setAttribute("href", f),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                  }
                );
              }
              return (
                (t = f(window.location.href)),
                function (e) {
                  const n = H.isString(e) ? f(e) : e;
                  return n.protocol === t.protocol && n.host === t.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        Qe = me.hasStandardBrowserEnv
          ? {
              write(e, n, t, f, a, r) {
                const i = [e + "=" + encodeURIComponent(n)];
                H.isNumber(t) && i.push("expires=" + new Date(t).toGMTString()),
                  H.isString(f) && i.push("path=" + f),
                  H.isString(a) && i.push("domain=" + a),
                  !0 === r && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read(e) {
                const n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return n ? decodeURIComponent(n[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function Ye(e, n) {
        return e &&
          !(function (e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          })(n)
          ? (function (e, n) {
              return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
            })(e, n)
          : n;
      }
      const Ue = (e) => (e instanceof Ie ? { ...e } : e);
      function Be(e, n) {
        n = n || {};
        const t = {};
        function f(e, n, t) {
          return H.isPlainObject(e) && H.isPlainObject(n)
            ? H.merge.call({ caseless: t }, e, n)
            : H.isPlainObject(n)
            ? H.merge({}, n)
            : H.isArray(n)
            ? n.slice()
            : n;
        }
        function a(e, n, t) {
          return H.isUndefined(n) ? (H.isUndefined(e) ? void 0 : f(void 0, e, t)) : f(e, n, t);
        }
        function r(e, n) {
          if (!H.isUndefined(n)) return f(void 0, n);
        }
        function i(e, n) {
          return H.isUndefined(n) ? (H.isUndefined(e) ? void 0 : f(void 0, e)) : f(void 0, n);
        }
        function o(t, a, r) {
          return r in n ? f(t, a) : r in e ? f(void 0, t) : void 0;
        }
        const u = {
          url: r,
          method: r,
          data: r,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: o,
          headers: (e, n) => a(Ue(e), Ue(n), !0),
        };
        return (
          H.forEach(Object.keys(Object.assign({}, e, n)), function (f) {
            const r = u[f] || a,
              i = r(e[f], n[f], f);
            (H.isUndefined(i) && r !== o) || (t[f] = i);
          }),
          t
        );
      }
      const Je = (e) => {
          const n = Be({}, e);
          let t,
            { data: f, withXSRFToken: a, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: u } = n;
          if (
            ((n.headers = o = Ie.from(o)),
            (n.url = oe(Ye(n.baseURL, n.url), e.params, e.paramsSerializer)),
            u &&
              o.set(
                "Authorization",
                "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
              ),
            H.isFormData(f))
          )
            if (me.hasStandardBrowserEnv || me.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
            else if (!1 !== (t = o.getContentType())) {
              const [e, ...n] = t
                ? t
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              o.setContentType([e || "multipart/form-data", ...n].join("; "));
            }
          if (me.hasStandardBrowserEnv && (a && H.isFunction(a) && (a = a(n)), a || (!1 !== a && Re(n.url)))) {
            const e = r && i && Qe.read(i);
            e && o.set(r, e);
          }
          return n;
        },
        _e =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (n, t) {
              const f = Je(e);
              let a = f.data;
              const r = Ie.from(f.headers).normalize();
              let i,
                o,
                u,
                s,
                l,
                { responseType: c, onUploadProgress: d, onDownloadProgress: p } = f;
              function g() {
                s && s(),
                  l && l(),
                  f.cancelToken && f.cancelToken.unsubscribe(i),
                  f.signal && f.signal.removeEventListener("abort", i);
              }
              let h = new XMLHttpRequest();
              function m() {
                if (!h) return;
                const f = Ie.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
                De(
                  function (e) {
                    n(e), g();
                  },
                  function (e) {
                    t(e), g();
                  },
                  {
                    data: c && "text" !== c && "json" !== c ? h.response : h.responseText,
                    status: h.status,
                    statusText: h.statusText,
                    headers: f,
                    config: e,
                    request: h,
                  }
                ),
                  (h = null);
              }
              h.open(f.method.toUpperCase(), f.url, !0),
                (h.timeout = f.timeout),
                "onloadend" in h
                  ? (h.onloadend = m)
                  : (h.onreadystatechange = function () {
                      h &&
                        4 === h.readyState &&
                        (0 !== h.status || (h.responseURL && 0 === h.responseURL.indexOf("file:"))) &&
                        setTimeout(m);
                    }),
                (h.onabort = function () {
                  h && (t(new K("Request aborted", K.ECONNABORTED, e, h)), (h = null));
                }),
                (h.onerror = function () {
                  t(new K("Network Error", K.ERR_NETWORK, e, h)), (h = null);
                }),
                (h.ontimeout = function () {
                  let n = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded";
                  const a = f.transitional || se;
                  f.timeoutErrorMessage && (n = f.timeoutErrorMessage),
                    t(new K(n, a.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED, e, h)),
                    (h = null);
                }),
                void 0 === a && r.setContentType(null),
                "setRequestHeader" in h &&
                  H.forEach(r.toJSON(), function (e, n) {
                    h.setRequestHeader(n, e);
                  }),
                H.isUndefined(f.withCredentials) || (h.withCredentials = !!f.withCredentials),
                c && "json" !== c && (h.responseType = f.responseType),
                p && (([u, l] = Ae(p, !0)), h.addEventListener("progress", u)),
                d &&
                  h.upload &&
                  (([o, s] = Ae(d)), h.upload.addEventListener("progress", o), h.upload.addEventListener("loadend", s)),
                (f.cancelToken || f.signal) &&
                  ((i = (n) => {
                    h && (t(!n || n.type ? new Ee(null, e, h) : n), h.abort(), (h = null));
                  }),
                  f.cancelToken && f.cancelToken.subscribe(i),
                  f.signal && (f.signal.aborted ? i() : f.signal.addEventListener("abort", i)));
              const w = (function (e) {
                const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (n && n[1]) || "";
              })(f.url);
              w && -1 === me.protocols.indexOf(w)
                ? t(new K("Unsupported protocol " + w + ":", K.ERR_BAD_REQUEST, e))
                : h.send(a || null);
            });
          },
        Ge = (e, n) => {
          const { length: t } = (e = e ? e.filter(Boolean) : []);
          if (n || t) {
            let t,
              f = new AbortController();
            const a = function (e) {
              if (!t) {
                (t = !0), i();
                const n = e instanceof Error ? e : this.reason;
                f.abort(n instanceof K ? n : new Ee(n instanceof Error ? n.message : n));
              }
            };
            let r =
              n &&
              setTimeout(() => {
                (r = null), a(new K(`timeout ${n} of ms exceeded`, K.ETIMEDOUT));
              }, n);
            const i = () => {
              e &&
                (r && clearTimeout(r),
                (r = null),
                e.forEach((e) => {
                  e.unsubscribe ? e.unsubscribe(a) : e.removeEventListener("abort", a);
                }),
                (e = null));
            };
            e.forEach((e) => e.addEventListener("abort", a));
            const { signal: o } = f;
            return (o.unsubscribe = () => H.asap(i)), o;
          }
        },
        Ze = function* (e, n) {
          let t = e.byteLength;
          if (!n || t < n) return void (yield e);
          let f,
            a = 0;
          for (; a < t; ) (f = a + n), yield e.slice(a, f), (a = f);
        },
        He = async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          const n = e.getReader();
          try {
            for (;;) {
              const { done: e, value: t } = await n.read();
              if (e) break;
              yield t;
            }
          } finally {
            await n.cancel();
          }
        },
        Fe = (e, n, t, f) => {
          const a = (async function* (e, n) {
            for await (const t of He(e)) yield* Ze(t, n);
          })(e, n);
          let r,
            i = 0,
            o = (e) => {
              r || ((r = !0), f && f(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  const { done: n, value: f } = await a.next();
                  if (n) return o(), void e.close();
                  let r = f.byteLength;
                  if (t) {
                    let e = (i += r);
                    t(e);
                  }
                  e.enqueue(new Uint8Array(f));
                } catch (n) {
                  throw (o(n), n);
                }
              },
              cancel: (e) => (o(e), a.return()),
            },
            { highWaterMark: 2 }
          );
        },
        We = "function" === typeof fetch && "function" === typeof Request && "function" === typeof Response,
        Ve = We && "function" === typeof ReadableStream,
        Ke =
          We &&
          ("function" === typeof TextEncoder
            ? ((Xe = new TextEncoder()), (e) => Xe.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
      var Xe;
      const qe = function (e) {
          try {
            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++) t[f - 1] = arguments[f];
            return !!e(...t);
          } catch (a) {
            return !1;
          }
        },
        $e =
          Ve &&
          qe(() => {
            let e = !1;
            const n = new Request(me.origin, {
              body: new ReadableStream(),
              method: "POST",
              get duplex() {
                return (e = !0), "half";
              },
            }).headers.has("Content-Type");
            return e && !n;
          }),
        en = Ve && qe(() => H.isReadableStream(new Response("").body)),
        nn = { stream: en && ((e) => e.body) };
      var tn;
      We &&
        ((tn = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !nn[e] &&
            (nn[e] = H.isFunction(tn[e])
              ? (n) => n[e]()
              : (n, t) => {
                  throw new K(`Response type '${e}' is not supported`, K.ERR_NOT_SUPPORT, t);
                });
        }));
      const fn = async (e, n) => {
          const t = H.toFiniteNumber(e.getContentLength());
          return null == t
            ? (async (e) => {
                if (null == e) return 0;
                if (H.isBlob(e)) return e.size;
                if (H.isSpecCompliantForm(e)) {
                  const n = new Request(me.origin, { method: "POST", body: e });
                  return (await n.arrayBuffer()).byteLength;
                }
                return H.isArrayBufferView(e) || H.isArrayBuffer(e)
                  ? e.byteLength
                  : (H.isURLSearchParams(e) && (e += ""), H.isString(e) ? (await Ke(e)).byteLength : void 0);
              })(n)
            : t;
        },
        an =
          We &&
          (async (e) => {
            let {
              url: n,
              method: t,
              data: f,
              signal: a,
              cancelToken: r,
              timeout: i,
              onDownloadProgress: o,
              onUploadProgress: u,
              responseType: s,
              headers: l,
              withCredentials: c = "same-origin",
              fetchOptions: d,
            } = Je(e);
            s = s ? (s + "").toLowerCase() : "text";
            let p,
              g = Ge([a, r && r.toAbortSignal()], i);
            const h =
              g &&
              g.unsubscribe &&
              (() => {
                g.unsubscribe();
              });
            let m;
            try {
              if (u && $e && "get" !== t && "head" !== t && 0 !== (m = await fn(l, f))) {
                let e,
                  t = new Request(n, { method: "POST", body: f, duplex: "half" });
                if ((H.isFormData(f) && (e = t.headers.get("content-type")) && l.setContentType(e), t.body)) {
                  const [e, n] = Pe(m, Ae(Oe(u)));
                  f = Fe(t.body, 65536, e, n);
                }
              }
              H.isString(c) || (c = c ? "include" : "omit");
              const a = "credentials" in Request.prototype;
              p = new Request(n, {
                ...d,
                signal: g,
                method: t.toUpperCase(),
                headers: l.normalize().toJSON(),
                body: f,
                duplex: "half",
                credentials: a ? c : void 0,
              });
              let r = await fetch(p);
              const i = en && ("stream" === s || "response" === s);
              if (en && (o || (i && h))) {
                const e = {};
                ["status", "statusText", "headers"].forEach((n) => {
                  e[n] = r[n];
                });
                const n = H.toFiniteNumber(r.headers.get("content-length")),
                  [t, f] = (o && Pe(n, Ae(Oe(o), !0))) || [];
                r = new Response(
                  Fe(r.body, 65536, t, () => {
                    f && f(), h && h();
                  }),
                  e
                );
              }
              s = s || "text";
              let w = await nn[H.findKey(nn, s) || "text"](r, e);
              return (
                !i && h && h(),
                await new Promise((n, t) => {
                  De(n, t, {
                    data: w,
                    headers: Ie.from(r.headers),
                    status: r.status,
                    statusText: r.statusText,
                    config: e,
                    request: p,
                  });
                })
              );
            } catch (w) {
              if ((h && h(), w && "TypeError" === w.name && /fetch/i.test(w.message)))
                throw Object.assign(new K("Network Error", K.ERR_NETWORK, e, p), { cause: w.cause || w });
              throw K.from(w, w && w.code, e, p);
            }
          }),
        rn = { http: null, xhr: _e, fetch: an };
      H.forEach(rn, (e, n) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: n });
          } catch (t) {}
          Object.defineProperty(e, "adapterName", { value: n });
        }
      });
      const on = (e) => `- ${e}`,
        un = (e) => H.isFunction(e) || null === e || !1 === e,
        sn = (e) => {
          e = H.isArray(e) ? e : [e];
          const { length: n } = e;
          let t, f;
          const a = {};
          for (let r = 0; r < n; r++) {
            let n;
            if (((t = e[r]), (f = t), !un(t) && ((f = rn[(n = String(t)).toLowerCase()]), void 0 === f)))
              throw new K(`Unknown adapter '${n}'`);
            if (f) break;
            a[n || "#" + r] = f;
          }
          if (!f) {
            const e = Object.entries(a).map((e) => {
              let [n, t] = e;
              return (
                `adapter ${n} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")
              );
            });
            let t = n
              ? e.length > 1
                ? "since :\n" + e.map(on).join("\n")
                : " " + on(e[0])
              : "as no adapter specified";
            throw new K("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT");
          }
          return f;
        };
      function ln(e) {
        if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Ee(null, e);
      }
      function cn(e) {
        ln(e),
          (e.headers = Ie.from(e.headers)),
          (e.data = Se.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return sn(e.adapter || ye.adapter)(e).then(
          function (n) {
            return ln(e), (n.data = Se.call(e, e.transformResponse, n)), (n.headers = Ie.from(n.headers)), n;
          },
          function (n) {
            return (
              Ne(n) ||
                (ln(e),
                n &&
                  n.response &&
                  ((n.response.data = Se.call(e, e.transformResponse, n.response)),
                  (n.response.headers = Ie.from(n.response.headers)))),
              Promise.reject(n)
            );
          }
        );
      }
      const dn = "1.7.7",
        pn = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
        pn[e] = function (t) {
          return typeof t === e || "a" + (n < 1 ? "n " : " ") + e;
        };
      });
      const gn = {};
      pn.transitional = function (e, n, t) {
        function f(e, n) {
          return "[Axios v1.7.7] Transitional option '" + e + "'" + n + (t ? ". " + t : "");
        }
        return (t, a, r) => {
          if (!1 === e) throw new K(f(a, " has been removed" + (n ? " in " + n : "")), K.ERR_DEPRECATED);
          return (
            n &&
              !gn[a] &&
              ((gn[a] = !0),
              console.warn(f(a, " has been deprecated since v" + n + " and will be removed in the near future"))),
            !e || e(t, a, r)
          );
        };
      };
      const hn = {
          assertOptions: function (e, n, t) {
            if ("object" !== typeof e) throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
            const f = Object.keys(e);
            let a = f.length;
            for (; a-- > 0; ) {
              const r = f[a],
                i = n[r];
              if (i) {
                const n = e[r],
                  t = void 0 === n || i(n, r, e);
                if (!0 !== t) throw new K("option " + r + " must be " + t, K.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== t) throw new K("Unknown option " + r, K.ERR_BAD_OPTION);
            }
          },
          validators: pn,
        },
        mn = hn.validators;
      class wn {
        constructor(e) {
          (this.defaults = e), (this.interceptors = { request: new ue(), response: new ue() });
        }
        async request(e, n) {
          try {
            return await this._request(e, n);
          } catch (t) {
            if (t instanceof Error) {
              let e;
              Error.captureStackTrace ? Error.captureStackTrace((e = {})) : (e = new Error());
              const n = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                t.stack
                  ? n && !String(t.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (t.stack += "\n" + n)
                  : (t.stack = n);
              } catch (f) {}
            }
            throw t;
          }
        }
        _request(e, n) {
          "string" === typeof e ? ((n = n || {}).url = e) : (n = e || {}), (n = Be(this.defaults, n));
          const { transitional: t, paramsSerializer: f, headers: a } = n;
          void 0 !== t &&
            hn.assertOptions(
              t,
              {
                silentJSONParsing: mn.transitional(mn.boolean),
                forcedJSONParsing: mn.transitional(mn.boolean),
                clarifyTimeoutError: mn.transitional(mn.boolean),
              },
              !1
            ),
            null != f &&
              (H.isFunction(f)
                ? (n.paramsSerializer = { serialize: f })
                : hn.assertOptions(f, { encode: mn.function, serialize: mn.function }, !0)),
            (n.method = (n.method || this.defaults.method || "get").toLowerCase());
          let r = a && H.merge(a.common, a[n.method]);
          a &&
            H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
              delete a[e];
            }),
            (n.headers = Ie.concat(r, a));
          const i = [];
          let o = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(n)) ||
              ((o = o && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const u = [];
          let s;
          this.interceptors.response.forEach(function (e) {
            u.push(e.fulfilled, e.rejected);
          });
          let l,
            c = 0;
          if (!o) {
            const e = [cn.bind(this), void 0];
            for (e.unshift.apply(e, i), e.push.apply(e, u), l = e.length, s = Promise.resolve(n); c < l; )
              s = s.then(e[c++], e[c++]);
            return s;
          }
          l = i.length;
          let d = n;
          for (c = 0; c < l; ) {
            const e = i[c++],
              n = i[c++];
            try {
              d = e(d);
            } catch (p) {
              n.call(this, p);
              break;
            }
          }
          try {
            s = cn.call(this, d);
          } catch (p) {
            return Promise.reject(p);
          }
          for (c = 0, l = u.length; c < l; ) s = s.then(u[c++], u[c++]);
          return s;
        }
        getUri(e) {
          return oe(Ye((e = Be(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
        }
      }
      H.forEach(["delete", "get", "head", "options"], function (e) {
        wn.prototype[e] = function (n, t) {
          return this.request(Be(t || {}, { method: e, url: n, data: (t || {}).data }));
        };
      }),
        H.forEach(["post", "put", "patch"], function (e) {
          function n(n) {
            return function (t, f, a) {
              return this.request(
                Be(a || {}, { method: e, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: t, data: f })
              );
            };
          }
          (wn.prototype[e] = n()), (wn.prototype[e + "Form"] = n(!0));
        });
      const bn = wn;
      class yn {
        constructor(e) {
          if ("function" !== typeof e) throw new TypeError("executor must be a function.");
          let n;
          this.promise = new Promise(function (e) {
            n = e;
          });
          const t = this;
          this.promise.then((e) => {
            if (!t._listeners) return;
            let n = t._listeners.length;
            for (; n-- > 0; ) t._listeners[n](e);
            t._listeners = null;
          }),
            (this.promise.then = (e) => {
              let n;
              const f = new Promise((e) => {
                t.subscribe(e), (n = e);
              }).then(e);
              return (
                (f.cancel = function () {
                  t.unsubscribe(n);
                }),
                f
              );
            }),
            e(function (e, f, a) {
              t.reason || ((t.reason = new Ee(e, f, a)), n(t.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const n = this._listeners.indexOf(e);
          -1 !== n && this._listeners.splice(n, 1);
        }
        toAbortSignal() {
          const e = new AbortController(),
            n = (n) => {
              e.abort(n);
            };
          return this.subscribe(n), (e.signal.unsubscribe = () => this.unsubscribe(n)), e.signal;
        }
        static source() {
          let e;
          return {
            token: new yn(function (n) {
              e = n;
            }),
            cancel: e,
          };
        }
      }
      const Ln = yn;
      const Mn = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Mn).forEach((e) => {
        let [n, t] = e;
        Mn[t] = n;
      });
      const vn = Mn;
      const Cn = (function e(n) {
        const t = new bn(n),
          f = r(bn.prototype.request, t);
        return (
          H.extend(f, bn.prototype, t, { allOwnKeys: !0 }),
          H.extend(f, t, null, { allOwnKeys: !0 }),
          (f.create = function (t) {
            return e(Be(n, t));
          }),
          f
        );
      })(ye);
      (Cn.Axios = bn),
        (Cn.CanceledError = Ee),
        (Cn.CancelToken = Ln),
        (Cn.isCancel = Ne),
        (Cn.VERSION = dn),
        (Cn.toFormData = ne),
        (Cn.AxiosError = K),
        (Cn.Cancel = Cn.CanceledError),
        (Cn.all = function (e) {
          return Promise.all(e);
        }),
        (Cn.spread = function (e) {
          return function (n) {
            return e.apply(null, n);
          };
        }),
        (Cn.isAxiosError = function (e) {
          return H.isObject(e) && !0 === e.isAxiosError;
        }),
        (Cn.mergeConfig = Be),
        (Cn.AxiosHeaders = Ie),
        (Cn.formToJSON = (e) => we(H.isHTMLForm(e) ? new FormData(e) : e)),
        (Cn.getAdapter = sn),
        (Cn.HttpStatusCode = vn),
        (Cn.default = Cn);
      const jn = Cn;
      var kn = t(579);
      const In = (e) => {
          let { onLogin: n } = e;
          const [t, a] = (0, f.useState)(""),
            [r, i] = (0, f.useState)("");
          return (0, kn.jsxs)("div", {
            id: "login-container",
            children: [
              (0, kn.jsx)("input", {
                type: "text",
                value: t,
                onChange: (e) => a(e.target.value),
                placeholder: "Enter User Id",
                required: !0,
              }),
              (0, kn.jsx)("button", {
                onClick: async () => {
                  if (t.trim())
                    try {
                      const e = await jn.post(
                          "https://socket-deploy-testing.onrender.com/login",
                          { userId: t },
                          { headers: { "Content-Type": "application/json" } }
                        ),
                        { data: f } = e;
                      f.success
                        ? (localStorage.setItem("user", JSON.stringify(f.data)), n())
                        : i(`Login failed: ${f.message}`);
                    } catch (e) {
                      console.error("Error during login:", e), i(e.message);
                    }
                  else alert("Please enter a User ID.");
                },
                children: "Log In",
              }),
              (0, kn.jsx)("div", { id: "login-message", children: r }),
            ],
          });
        },
        Sn = Object.create(null);
      (Sn.open = "0"),
        (Sn.close = "1"),
        (Sn.ping = "2"),
        (Sn.pong = "3"),
        (Sn.message = "4"),
        (Sn.upgrade = "5"),
        (Sn.noop = "6");
      const Nn = Object.create(null);
      Object.keys(Sn).forEach((e) => {
        Nn[Sn[e]] = e;
      });
      const Tn = { type: "error", data: "parser error" },
        En =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
        Dn = "function" === typeof ArrayBuffer,
        xn = (e) =>
          "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
        zn = (e, n, t) => {
          let { type: f, data: a } = e;
          return En && a instanceof Blob
            ? n
              ? t(a)
              : An(a, t)
            : Dn && (a instanceof ArrayBuffer || xn(a))
            ? n
              ? t(a)
              : An(new Blob([a]), t)
            : t(Sn[f] + (a || ""));
        },
        An = (e, n) => {
          const t = new FileReader();
          return (
            (t.onload = function () {
              const e = t.result.split(",")[1];
              n("b" + (e || ""));
            }),
            t.readAsDataURL(e)
          );
        };
      function Pn(e) {
        return e instanceof Uint8Array
          ? e
          : e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      let On;
      const Rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Qn = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256);
      for (let t = 0; t < 64; t++) Qn[Rn.charCodeAt(t)] = t;
      const Yn = "function" === typeof ArrayBuffer,
        Un = (e, n) => {
          if ("string" !== typeof e) return { type: "message", data: Jn(e, n) };
          const t = e.charAt(0);
          if ("b" === t) return { type: "message", data: Bn(e.substring(1), n) };
          return Nn[t] ? (e.length > 1 ? { type: Nn[t], data: e.substring(1) } : { type: Nn[t] }) : Tn;
        },
        Bn = (e, n) => {
          if (Yn) {
            const t = ((e) => {
              let n,
                t,
                f,
                a,
                r,
                i = 0.75 * e.length,
                o = e.length,
                u = 0;
              "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
              const s = new ArrayBuffer(i),
                l = new Uint8Array(s);
              for (n = 0; n < o; n += 4)
                (t = Qn[e.charCodeAt(n)]),
                  (f = Qn[e.charCodeAt(n + 1)]),
                  (a = Qn[e.charCodeAt(n + 2)]),
                  (r = Qn[e.charCodeAt(n + 3)]),
                  (l[u++] = (t << 2) | (f >> 4)),
                  (l[u++] = ((15 & f) << 4) | (a >> 2)),
                  (l[u++] = ((3 & a) << 6) | (63 & r));
              return s;
            })(e);
            return Jn(t, n);
          }
          return { base64: !0, data: e };
        },
        Jn = (e, n) =>
          "blob" === n ? (e instanceof Blob ? e : new Blob([e])) : e instanceof ArrayBuffer ? e : e.buffer,
        _n = String.fromCharCode(30);
      function Gn() {
        return new TransformStream({
          transform(e, n) {
            !(function (e, n) {
              En && e.data instanceof Blob
                ? e.data.arrayBuffer().then(Pn).then(n)
                : Dn && (e.data instanceof ArrayBuffer || xn(e.data))
                ? n(Pn(e.data))
                : zn(e, !1, (e) => {
                    On || (On = new TextEncoder()), n(On.encode(e));
                  });
            })(e, (t) => {
              const f = t.length;
              let a;
              if (f < 126) (a = new Uint8Array(1)), new DataView(a.buffer).setUint8(0, f);
              else if (f < 65536) {
                a = new Uint8Array(3);
                const e = new DataView(a.buffer);
                e.setUint8(0, 126), e.setUint16(1, f);
              } else {
                a = new Uint8Array(9);
                const e = new DataView(a.buffer);
                e.setUint8(0, 127), e.setBigUint64(1, BigInt(f));
              }
              e.data && "string" !== typeof e.data && (a[0] |= 128), n.enqueue(a), n.enqueue(t);
            });
          },
        });
      }
      let Zn;
      function Hn(e) {
        return e.reduce((e, n) => e + n.length, 0);
      }
      function Fn(e, n) {
        if (e[0].length === n) return e.shift();
        const t = new Uint8Array(n);
        let f = 0;
        for (let a = 0; a < n; a++) (t[a] = e[0][f++]), f === e[0].length && (e.shift(), (f = 0));
        return e.length && f < e[0].length && (e[0] = e[0].slice(f)), t;
      }
      function Wn(e) {
        if (e)
          return (function (e) {
            for (var n in Wn.prototype) e[n] = Wn.prototype[n];
            return e;
          })(e);
      }
      (Wn.prototype.on = Wn.prototype.addEventListener =
        function (e, n) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n),
            this
          );
        }),
        (Wn.prototype.once = function (e, n) {
          function t() {
            this.off(e, t), n.apply(this, arguments);
          }
          return (t.fn = n), this.on(e, t), this;
        }),
        (Wn.prototype.off =
          Wn.prototype.removeListener =
          Wn.prototype.removeAllListeners =
          Wn.prototype.removeEventListener =
            function (e, n) {
              if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
                return (this._callbacks = {}), this;
              var t,
                f = this._callbacks["$" + e];
              if (!f) return this;
              if (1 == arguments.length) return delete this._callbacks["$" + e], this;
              for (var a = 0; a < f.length; a++)
                if ((t = f[a]) === n || t.fn === n) {
                  f.splice(a, 1);
                  break;
                }
              return 0 === f.length && delete this._callbacks["$" + e], this;
            }),
        (Wn.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (var n = new Array(arguments.length - 1), t = this._callbacks["$" + e], f = 1; f < arguments.length; f++)
            n[f - 1] = arguments[f];
          if (t) {
            f = 0;
            for (var a = (t = t.slice(0)).length; f < a; ++f) t[f].apply(this, n);
          }
          return this;
        }),
        (Wn.prototype.emitReserved = Wn.prototype.emit),
        (Wn.prototype.listeners = function (e) {
          return (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || [];
        }),
        (Wn.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      const Vn =
        "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : Function("return this")();
      function Kn(e) {
        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++) t[f - 1] = arguments[f];
        return t.reduce((n, t) => (e.hasOwnProperty(t) && (n[t] = e[t]), n), {});
      }
      const Xn = Vn.setTimeout,
        qn = Vn.clearTimeout;
      function $n(e, n) {
        n.useNativeTimers
          ? ((e.setTimeoutFn = Xn.bind(Vn)), (e.clearTimeoutFn = qn.bind(Vn)))
          : ((e.setTimeoutFn = Vn.setTimeout.bind(Vn)), (e.clearTimeoutFn = Vn.clearTimeout.bind(Vn)));
      }
      class et extends Error {
        constructor(e, n, t) {
          super(e), (this.description = n), (this.context = t), (this.type = "TransportError");
        }
      }
      class nt extends Wn {
        constructor(e) {
          super(), (this.writable = !1), $n(this, e), (this.opts = e), (this.query = e.query), (this.socket = e.socket);
        }
        onError(e, n, t) {
          return super.emitReserved("error", new et(e, n, t)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) || (this.doClose(), this.onClose()), this
          );
        }
        send(e) {
          "open" === this.readyState && this.write(e);
        }
        onOpen() {
          (this.readyState = "open"), (this.writable = !0), super.emitReserved("open");
        }
        onData(e) {
          const n = Un(e, this.socket.binaryType);
          this.onPacket(n);
        }
        onPacket(e) {
          super.emitReserved("packet", e);
        }
        onClose(e) {
          (this.readyState = "closed"), super.emitReserved("close", e);
        }
        pause(e) {}
        createUri(e) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
        }
        _hostname() {
          const e = this.opts.hostname;
          return -1 === e.indexOf(":") ? e : "[" + e + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(e) {
          const n = (function (e) {
            let n = "";
            for (let t in e)
              e.hasOwnProperty(t) &&
                (n.length && (n += "&"), (n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t])));
            return n;
          })(e);
          return n.length ? "?" + n : "";
        }
      }
      const tt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        ft = 64,
        at = {};
      let rt,
        it = 0,
        ot = 0;
      function ut(e) {
        let n = "";
        do {
          (n = tt[e % ft] + n), (e = Math.floor(e / ft));
        } while (e > 0);
        return n;
      }
      function st() {
        const e = ut(+new Date());
        return e !== rt ? ((it = 0), (rt = e)) : e + "." + ut(it++);
      }
      for (; ot < ft; ot++) at[tt[ot]] = ot;
      let lt = !1;
      try {
        lt = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
      } catch (mc) {}
      const ct = lt;
      function dt(e) {
        const n = e.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!n || ct)) return new XMLHttpRequest();
        } catch (t) {}
        if (!n)
          try {
            return new Vn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (t) {}
      }
      function pt() {}
      const gt = null != new dt({ xdomain: !1 }).responseType;
      class ht extends Wn {
        constructor(e, n) {
          super(),
            $n(this, n),
            (this.opts = n),
            (this.method = n.method || "GET"),
            (this.uri = e),
            (this.data = void 0 !== n.data ? n.data : null),
            this.create();
        }
        create() {
          var e;
          const n = Kn(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          n.xdomain = !!this.opts.xd;
          const t = (this.xhr = new dt(n));
          try {
            t.open(this.method, this.uri, !0);
            try {
              if (this.opts.extraHeaders) {
                t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                for (let e in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(e) && t.setRequestHeader(e, this.opts.extraHeaders[e]);
              }
            } catch (f) {}
            if ("POST" === this.method)
              try {
                t.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (f) {}
            try {
              t.setRequestHeader("Accept", "*/*");
            } catch (f) {}
            null === (e = this.opts.cookieJar) || void 0 === e || e.addCookies(t),
              "withCredentials" in t && (t.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout),
              (t.onreadystatechange = () => {
                var e;
                3 === t.readyState && (null === (e = this.opts.cookieJar) || void 0 === e || e.parseCookies(t)),
                  4 === t.readyState &&
                    (200 === t.status || 1223 === t.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError("number" === typeof t.status ? t.status : 0);
                        }, 0));
              }),
              t.send(this.data);
          } catch (f) {
            return void this.setTimeoutFn(() => {
              this.onError(f);
            }, 0);
          }
          "undefined" !== typeof document && ((this.index = ht.requestsCount++), (ht.requests[this.index] = this));
        }
        onError(e) {
          this.emitReserved("error", e, this.xhr), this.cleanup(!0);
        }
        cleanup(e) {
          if ("undefined" !== typeof this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = pt), e))
              try {
                this.xhr.abort();
              } catch (n) {}
            "undefined" !== typeof document && delete ht.requests[this.index], (this.xhr = null);
          }
        }
        onLoad() {
          const e = this.xhr.responseText;
          null !== e && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      }
      if (((ht.requestsCount = 0), (ht.requests = {}), "undefined" !== typeof document))
        if ("function" === typeof attachEvent) attachEvent("onunload", mt);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in Vn ? "pagehide" : "unload", mt, !1);
        }
      function mt() {
        for (let e in ht.requests) ht.requests.hasOwnProperty(e) && ht.requests[e].abort();
      }
      const wt =
          "function" === typeof Promise && "function" === typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, n) => n(e, 0),
        bt = Vn.WebSocket || Vn.MozWebSocket,
        yt =
          "undefined" !== typeof navigator &&
          "string" === typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase();
      const Lt = {
          websocket: class extends nt {
            constructor(e) {
              super(e), (this.supportsBinary = !e.forceBase64);
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check()) return;
              const e = this.uri(),
                n = this.opts.protocols,
                t = yt
                  ? {}
                  : Kn(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                    );
              this.opts.extraHeaders && (t.headers = this.opts.extraHeaders);
              try {
                this.ws = yt ? new bt(e, n, t) : n ? new bt(e, n) : new bt(e);
              } catch (mc) {
                return this.emitReserved("error", mc);
              }
              (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
            }
            addEventListeners() {
              (this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }),
                (this.ws.onclose = (e) => this.onClose({ description: "websocket connection closed", context: e })),
                (this.ws.onmessage = (e) => this.onData(e.data)),
                (this.ws.onerror = (e) => this.onError("websocket error", e));
            }
            write(e) {
              this.writable = !1;
              for (let n = 0; n < e.length; n++) {
                const t = e[n],
                  f = n === e.length - 1;
                zn(t, this.supportsBinary, (e) => {
                  try {
                    this.ws.send(e);
                  } catch (n) {}
                  f &&
                    wt(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              "undefined" !== typeof this.ws && (this.ws.close(), (this.ws = null));
            }
            uri() {
              const e = this.opts.secure ? "wss" : "ws",
                n = this.query || {};
              return (
                this.opts.timestampRequests && (n[this.opts.timestampParam] = st()),
                this.supportsBinary || (n.b64 = 1),
                this.createUri(e, n)
              );
            }
            check() {
              return !!bt;
            }
          },
          webtransport: class extends nt {
            get name() {
              return "webtransport";
            }
            doOpen() {
              "function" === typeof WebTransport &&
                ((this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])),
                this.transport.closed
                  .then(() => {
                    this.onClose();
                  })
                  .catch((e) => {
                    this.onError("webtransport error", e);
                  }),
                this.transport.ready.then(() => {
                  this.transport.createBidirectionalStream().then((e) => {
                    const n = (function (e, n) {
                        Zn || (Zn = new TextDecoder());
                        const t = [];
                        let f = 0,
                          a = -1,
                          r = !1;
                        return new TransformStream({
                          transform(i, o) {
                            for (t.push(i); ; ) {
                              if (0 === f) {
                                if (Hn(t) < 1) break;
                                const e = Fn(t, 1);
                                (r = 128 === (128 & e[0])), (a = 127 & e[0]), (f = a < 126 ? 3 : 126 === a ? 1 : 2);
                              } else if (1 === f) {
                                if (Hn(t) < 2) break;
                                const e = Fn(t, 2);
                                (a = new DataView(e.buffer, e.byteOffset, e.length).getUint16(0)), (f = 3);
                              } else if (2 === f) {
                                if (Hn(t) < 8) break;
                                const e = Fn(t, 8),
                                  n = new DataView(e.buffer, e.byteOffset, e.length),
                                  r = n.getUint32(0);
                                if (r > Math.pow(2, 21) - 1) {
                                  o.enqueue(Tn);
                                  break;
                                }
                                (a = r * Math.pow(2, 32) + n.getUint32(4)), (f = 3);
                              } else {
                                if (Hn(t) < a) break;
                                const e = Fn(t, a);
                                o.enqueue(Un(r ? e : Zn.decode(e), n)), (f = 0);
                              }
                              if (0 === a || a > e) {
                                o.enqueue(Tn);
                                break;
                              }
                            }
                          },
                        });
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      t = e.readable.pipeThrough(n).getReader(),
                      f = Gn();
                    f.readable.pipeTo(e.writable), (this.writer = f.writable.getWriter());
                    const a = () => {
                      t.read()
                        .then((e) => {
                          let { done: n, value: t } = e;
                          n || (this.onPacket(t), a());
                        })
                        .catch((e) => {});
                    };
                    a();
                    const r = { type: "open" };
                    this.query.sid && (r.data = `{"sid":"${this.query.sid}"}`),
                      this.writer.write(r).then(() => this.onOpen());
                  });
                }));
            }
            write(e) {
              this.writable = !1;
              for (let n = 0; n < e.length; n++) {
                const t = e[n],
                  f = n === e.length - 1;
                this.writer.write(t).then(() => {
                  f &&
                    wt(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              var e;
              null === (e = this.transport) || void 0 === e || e.close();
            }
          },
          polling: class extends nt {
            constructor(e) {
              if ((super(e), (this.polling = !1), "undefined" !== typeof location)) {
                const n = "https:" === location.protocol;
                let t = location.port;
                t || (t = n ? "443" : "80"),
                  (this.xd = ("undefined" !== typeof location && e.hostname !== location.hostname) || t !== e.port);
              }
              const n = e && e.forceBase64;
              (this.supportsBinary = gt && !n), this.opts.withCredentials && (this.cookieJar = void 0);
            }
            get name() {
              return "polling";
            }
            doOpen() {
              this.poll();
            }
            pause(e) {
              this.readyState = "pausing";
              const n = () => {
                (this.readyState = "paused"), e();
              };
              if (this.polling || !this.writable) {
                let e = 0;
                this.polling &&
                  (e++,
                  this.once("pollComplete", function () {
                    --e || n();
                  })),
                  this.writable ||
                    (e++,
                    this.once("drain", function () {
                      --e || n();
                    }));
              } else n();
            }
            poll() {
              (this.polling = !0), this.doPoll(), this.emitReserved("poll");
            }
            onData(e) {
              ((e, n) => {
                const t = e.split(_n),
                  f = [];
                for (let a = 0; a < t.length; a++) {
                  const e = Un(t[a], n);
                  if ((f.push(e), "error" === e.type)) break;
                }
                return f;
              })(e, this.socket.binaryType).forEach((e) => {
                if (("opening" === this.readyState && "open" === e.type && this.onOpen(), "close" === e.type))
                  return this.onClose({ description: "transport closed by the server" }), !1;
                this.onPacket(e);
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1), this.emitReserved("pollComplete"), "open" === this.readyState && this.poll());
            }
            doClose() {
              const e = () => {
                this.write([{ type: "close" }]);
              };
              "open" === this.readyState ? e() : this.once("open", e);
            }
            write(e) {
              (this.writable = !1),
                ((e, n) => {
                  const t = e.length,
                    f = new Array(t);
                  let a = 0;
                  e.forEach((e, r) => {
                    zn(e, !1, (e) => {
                      (f[r] = e), ++a === t && n(f.join(_n));
                    });
                  });
                })(e, (e) => {
                  this.doWrite(e, () => {
                    (this.writable = !0), this.emitReserved("drain");
                  });
                });
            }
            uri() {
              const e = this.opts.secure ? "https" : "http",
                n = this.query || {};
              return (
                !1 !== this.opts.timestampRequests && (n[this.opts.timestampParam] = st()),
                this.supportsBinary || n.sid || (n.b64 = 1),
                this.createUri(e, n)
              );
            }
            request() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new ht(this.uri(), e);
            }
            doWrite(e, n) {
              const t = this.request({ method: "POST", data: e });
              t.on("success", n),
                t.on("error", (e, n) => {
                  this.onError("xhr post error", e, n);
                });
            }
            doPoll() {
              const e = this.request();
              e.on("data", this.onData.bind(this)),
                e.on("error", (e, n) => {
                  this.onError("xhr poll error", e, n);
                }),
                (this.pollXhr = e);
            }
          },
        },
        Mt =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        vt = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function Ct(e) {
        if (e.length > 2e3) throw "URI too long";
        const n = e,
          t = e.indexOf("["),
          f = e.indexOf("]");
        -1 != t && -1 != f && (e = e.substring(0, t) + e.substring(t, f).replace(/:/g, ";") + e.substring(f, e.length));
        let a = Mt.exec(e || ""),
          r = {},
          i = 14;
        for (; i--; ) r[vt[i]] = a[i] || "";
        return (
          -1 != t &&
            -1 != f &&
            ((r.source = n),
            (r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":")),
            (r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":")),
            (r.ipv6uri = !0)),
          (r.pathNames = (function (e, n) {
            const t = /\/{2,9}/g,
              f = n.replace(t, "/").split("/");
            ("/" != n.slice(0, 1) && 0 !== n.length) || f.splice(0, 1);
            "/" == n.slice(-1) && f.splice(f.length - 1, 1);
            return f;
          })(0, r.path)),
          (r.queryKey = (function (e, n) {
            const t = {};
            return (
              n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, n, f) {
                n && (t[n] = f);
              }),
              t
            );
          })(0, r.query)),
          r
        );
      }
      class jt extends Wn {
        constructor(e) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            e && "object" === typeof e && ((n = e), (e = null)),
            e
              ? ((e = Ct(e)),
                (n.hostname = e.host),
                (n.secure = "https" === e.protocol || "wss" === e.protocol),
                (n.port = e.port),
                e.query && (n.query = e.query))
              : n.host && (n.hostname = Ct(n.host).host),
            $n(this, n),
            (this.secure =
              null != n.secure ? n.secure : "undefined" !== typeof location && "https:" === location.protocol),
            n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
            (this.hostname = n.hostname || ("undefined" !== typeof location ? location.hostname : "localhost")),
            (this.port =
              n.port ||
              ("undefined" !== typeof location && location.port ? location.port : this.secure ? "443" : "80")),
            (this.transports = n.transports || ["polling", "websocket", "webtransport"]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              n
            )),
            (this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "")),
            "string" === typeof this.opts.query &&
              (this.opts.query = (function (e) {
                let n = {},
                  t = e.split("&");
                for (let f = 0, a = t.length; f < a; f++) {
                  let e = t[f].split("=");
                  n[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
                }
                return n;
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            "function" === typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport && (this.transport.removeAllListeners(), this.transport.close());
                }),
                addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
              "localhost" !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose("transport close", { description: "network connection lost" });
                }),
                addEventListener("offline", this.offlineEventListener, !1))),
            this.open();
        }
        createTransport(e) {
          const n = Object.assign({}, this.opts.query);
          (n.EIO = 4), (n.transport = e), this.id && (n.sid = this.id);
          const t = Object.assign(
            {},
            this.opts,
            { query: n, socket: this, hostname: this.hostname, secure: this.secure, port: this.port },
            this.opts.transportOptions[e]
          );
          return new Lt[e](t);
        }
        open() {
          let e;
          if (this.opts.rememberUpgrade && jt.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
            e = "websocket";
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
            e = this.transports[0];
          }
          this.readyState = "opening";
          try {
            e = this.createTransport(e);
          } catch (n) {
            return this.transports.shift(), void this.open();
          }
          e.open(), this.setTransport(e);
        }
        setTransport(e) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = e),
            e
              .on("drain", this.onDrain.bind(this))
              .on("packet", this.onPacket.bind(this))
              .on("error", this.onError.bind(this))
              .on("close", (e) => this.onClose("transport close", e));
        }
        probe(e) {
          let n = this.createTransport(e),
            t = !1;
          jt.priorWebsocketSuccess = !1;
          const f = () => {
            t ||
              (n.send([{ type: "ping", data: "probe" }]),
              n.once("packet", (e) => {
                if (!t)
                  if ("pong" === e.type && "probe" === e.data) {
                    if (((this.upgrading = !0), this.emitReserved("upgrading", n), !n)) return;
                    (jt.priorWebsocketSuccess = "websocket" === n.name),
                      this.transport.pause(() => {
                        t ||
                          ("closed" !== this.readyState &&
                            (s(),
                            this.setTransport(n),
                            n.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", n),
                            (n = null),
                            (this.upgrading = !1),
                            this.flush()));
                      });
                  } else {
                    const e = new Error("probe error");
                    (e.transport = n.name), this.emitReserved("upgradeError", e);
                  }
              }));
          };
          function a() {
            t || ((t = !0), s(), n.close(), (n = null));
          }
          const r = (e) => {
            const t = new Error("probe error: " + e);
            (t.transport = n.name), a(), this.emitReserved("upgradeError", t);
          };
          function i() {
            r("transport closed");
          }
          function o() {
            r("socket closed");
          }
          function u(e) {
            n && e.name !== n.name && a();
          }
          const s = () => {
            n.removeListener("open", f),
              n.removeListener("error", r),
              n.removeListener("close", i),
              this.off("close", o),
              this.off("upgrading", u);
          };
          n.once("open", f),
            n.once("error", r),
            n.once("close", i),
            this.once("close", o),
            this.once("upgrading", u),
            -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e
              ? this.setTimeoutFn(() => {
                  t || n.open();
                }, 200)
              : n.open();
        }
        onOpen() {
          if (
            ((this.readyState = "open"),
            (jt.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush(),
            "open" === this.readyState && this.opts.upgrade)
          ) {
            let e = 0;
            const n = this.upgrades.length;
            for (; e < n; e++) this.probe(this.upgrades[e]);
          }
        }
        onPacket(e) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
            switch ((this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type)) {
              case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
              case "ping":
                this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                break;
              case "error":
                const n = new Error("server error");
                (n.code = e.data), this.onError(n);
                break;
              case "message":
                this.emitReserved("data", e.data), this.emitReserved("message", e.data);
            }
        }
        onHandshake(e) {
          this.emitReserved("handshake", e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            (this.maxPayload = e.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
        }
        flush() {
          if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this.getWritablePackets();
            this.transport.send(e), (this.prevBufferLen = e.length), this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1))
            return this.writeBuffer;
          let e = 1;
          for (let t = 0; t < this.writeBuffer.length; t++) {
            const f = this.writeBuffer[t].data;
            if (
              (f &&
                (e +=
                  "string" === typeof (n = f)
                    ? (function (e) {
                        let n = 0,
                          t = 0;
                        for (let f = 0, a = e.length; f < a; f++)
                          (n = e.charCodeAt(f)),
                            n < 128
                              ? (t += 1)
                              : n < 2048
                              ? (t += 2)
                              : n < 55296 || n >= 57344
                              ? (t += 3)
                              : (f++, (t += 4));
                        return t;
                      })(n)
                    : Math.ceil(1.33 * (n.byteLength || n.size))),
              t > 0 && e > this.maxPayload)
            )
              return this.writeBuffer.slice(0, t);
            e += 2;
          }
          var n;
          return this.writeBuffer;
        }
        write(e, n, t) {
          return this.sendPacket("message", e, n, t), this;
        }
        send(e, n, t) {
          return this.sendPacket("message", e, n, t), this;
        }
        sendPacket(e, n, t, f) {
          if (
            ("function" === typeof n && ((f = n), (n = void 0)),
            "function" === typeof t && ((f = t), (t = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (t = t || {}).compress = !1 !== t.compress;
          const a = { type: e, data: n, options: t };
          this.emitReserved("packetCreate", a), this.writeBuffer.push(a), f && this.once("flush", f), this.flush();
        }
        close() {
          const e = () => {
              this.onClose("forced close"), this.transport.close();
            },
            n = () => {
              this.off("upgrade", n), this.off("upgradeError", n), e();
            },
            t = () => {
              this.once("upgrade", n), this.once("upgradeError", n);
            };
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? t() : e();
                  })
                : this.upgrading
                ? t()
                : e()),
            this
          );
        }
        onError(e) {
          (jt.priorWebsocketSuccess = !1), this.emitReserved("error", e), this.onClose("transport error", e);
        }
        onClose(e, n) {
          ("opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            "function" === typeof removeEventListener &&
              (removeEventListener("beforeunload", this.beforeunloadEventListener, !1),
              removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", e, n),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
        }
        filterUpgrades(e) {
          const n = [];
          let t = 0;
          const f = e.length;
          for (; t < f; t++) ~this.transports.indexOf(e[t]) && n.push(e[t]);
          return n;
        }
      }
      jt.protocol = 4;
      jt.protocol;
      const kt = "function" === typeof ArrayBuffer,
        It = (e) =>
          "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
        St = Object.prototype.toString,
        Nt =
          "function" === typeof Blob || ("undefined" !== typeof Blob && "[object BlobConstructor]" === St.call(Blob)),
        Tt =
          "function" === typeof File || ("undefined" !== typeof File && "[object FileConstructor]" === St.call(File));
      function Et(e) {
        return (kt && (e instanceof ArrayBuffer || It(e))) || (Nt && e instanceof Blob) || (Tt && e instanceof File);
      }
      function Dt(e, n) {
        if (!e || "object" !== typeof e) return !1;
        if (Array.isArray(e)) {
          for (let n = 0, t = e.length; n < t; n++) if (Dt(e[n])) return !0;
          return !1;
        }
        if (Et(e)) return !0;
        if (e.toJSON && "function" === typeof e.toJSON && 1 === arguments.length) return Dt(e.toJSON(), !0);
        for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t) && Dt(e[t])) return !0;
        return !1;
      }
      function xt(e) {
        const n = [],
          t = e.data,
          f = e;
        return (f.data = zt(t, n)), (f.attachments = n.length), { packet: f, buffers: n };
      }
      function zt(e, n) {
        if (!e) return e;
        if (Et(e)) {
          const t = { _placeholder: !0, num: n.length };
          return n.push(e), t;
        }
        if (Array.isArray(e)) {
          const t = new Array(e.length);
          for (let f = 0; f < e.length; f++) t[f] = zt(e[f], n);
          return t;
        }
        if ("object" === typeof e && !(e instanceof Date)) {
          const t = {};
          for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (t[f] = zt(e[f], n));
          return t;
        }
        return e;
      }
      function At(e, n) {
        return (e.data = Pt(e.data, n)), delete e.attachments, e;
      }
      function Pt(e, n) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" === typeof e.num && e.num >= 0 && e.num < n.length) return n[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e)) for (let t = 0; t < e.length; t++) e[t] = Pt(e[t], n);
        else if ("object" === typeof e)
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Pt(e[t], n));
        return e;
      }
      const Ot = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
        Rt = 5;
      var Qt;
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(Qt || (Qt = {}));
      class Yt {
        constructor(e) {
          this.replacer = e;
        }
        encode(e) {
          return (e.type !== Qt.EVENT && e.type !== Qt.ACK) || !Dt(e)
            ? [this.encodeAsString(e)]
            : this.encodeAsBinary({
                type: e.type === Qt.EVENT ? Qt.BINARY_EVENT : Qt.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id,
              });
        }
        encodeAsString(e) {
          let n = "" + e.type;
          return (
            (e.type !== Qt.BINARY_EVENT && e.type !== Qt.BINARY_ACK) || (n += e.attachments + "-"),
            e.nsp && "/" !== e.nsp && (n += e.nsp + ","),
            null != e.id && (n += e.id),
            null != e.data && (n += JSON.stringify(e.data, this.replacer)),
            n
          );
        }
        encodeAsBinary(e) {
          const n = xt(e),
            t = this.encodeAsString(n.packet),
            f = n.buffers;
          return f.unshift(t), f;
        }
      }
      function Ut(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      class Bt extends Wn {
        constructor(e) {
          super(), (this.reviver = e);
        }
        add(e) {
          let n;
          if ("string" === typeof e) {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(e);
            const t = n.type === Qt.BINARY_EVENT;
            t || n.type === Qt.BINARY_ACK
              ? ((n.type = t ? Qt.EVENT : Qt.ACK),
                (this.reconstructor = new Jt(n)),
                0 === n.attachments && super.emitReserved("decoded", n))
              : super.emitReserved("decoded", n);
          } else {
            if (!Et(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            (n = this.reconstructor.takeBinaryData(e)),
              n && ((this.reconstructor = null), super.emitReserved("decoded", n));
          }
        }
        decodeString(e) {
          let n = 0;
          const t = { type: Number(e.charAt(0)) };
          if (void 0 === Qt[t.type]) throw new Error("unknown packet type " + t.type);
          if (t.type === Qt.BINARY_EVENT || t.type === Qt.BINARY_ACK) {
            const f = n + 1;
            for (; "-" !== e.charAt(++n) && n != e.length; );
            const a = e.substring(f, n);
            if (a != Number(a) || "-" !== e.charAt(n)) throw new Error("Illegal attachments");
            t.attachments = Number(a);
          }
          if ("/" === e.charAt(n + 1)) {
            const f = n + 1;
            for (; ++n; ) {
              if ("," === e.charAt(n)) break;
              if (n === e.length) break;
            }
            t.nsp = e.substring(f, n);
          } else t.nsp = "/";
          const f = e.charAt(n + 1);
          if ("" !== f && Number(f) == f) {
            const f = n + 1;
            for (; ++n; ) {
              const t = e.charAt(n);
              if (null == t || Number(t) != t) {
                --n;
                break;
              }
              if (n === e.length) break;
            }
            t.id = Number(e.substring(f, n + 1));
          }
          if (e.charAt(++n)) {
            const f = this.tryParse(e.substr(n));
            if (!Bt.isPayloadValid(t.type, f)) throw new Error("invalid payload");
            t.data = f;
          }
          return t;
        }
        tryParse(e) {
          try {
            return JSON.parse(e, this.reviver);
          } catch (n) {
            return !1;
          }
        }
        static isPayloadValid(e, n) {
          switch (e) {
            case Qt.CONNECT:
              return Ut(n);
            case Qt.DISCONNECT:
              return void 0 === n;
            case Qt.CONNECT_ERROR:
              return "string" === typeof n || Ut(n);
            case Qt.EVENT:
            case Qt.BINARY_EVENT:
              return (
                Array.isArray(n) && ("number" === typeof n[0] || ("string" === typeof n[0] && -1 === Ot.indexOf(n[0])))
              );
            case Qt.ACK:
            case Qt.BINARY_ACK:
              return Array.isArray(n);
          }
        }
        destroy() {
          this.reconstructor && (this.reconstructor.finishedReconstruction(), (this.reconstructor = null));
        }
      }
      class Jt {
        constructor(e) {
          (this.packet = e), (this.buffers = []), (this.reconPack = e);
        }
        takeBinaryData(e) {
          if ((this.buffers.push(e), this.buffers.length === this.reconPack.attachments)) {
            const e = At(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function _t(e, n, t) {
        return (
          e.on(n, t),
          function () {
            e.off(n, t);
          }
        );
      }
      const Gt = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class Zt extends Wn {
        constructor(e, n, t) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = e),
            (this.nsp = n),
            t && t.auth && (this.auth = t.auth),
            (this._opts = Object.assign({}, t)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          const e = this.io;
          this.subs = [
            _t(e, "open", this.onopen.bind(this)),
            _t(e, "packet", this.onpacket.bind(this)),
            _t(e, "error", this.onerror.bind(this)),
            _t(e, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return n.unshift("message"), this.emit.apply(this, n), this;
        }
        emit(e) {
          if (Gt.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++) t[f - 1] = arguments[f];
          if ((t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile))
            return this._addToQueue(t), this;
          const a = { type: Qt.EVENT, data: t, options: {} };
          if (((a.options.compress = !1 !== this.flags.compress), "function" === typeof t[t.length - 1])) {
            const e = this.ids++,
              n = t.pop();
            this._registerAckCallback(e, n), (a.id = e);
          }
          const r = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
          return (
            (this.flags.volatile && (!r || !this.connected)) ||
              (this.connected ? (this.notifyOutgoingListeners(a), this.packet(a)) : this.sendBuffer.push(a)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(e, n) {
          var t,
            f = this;
          const a = null !== (t = this.flags.timeout) && void 0 !== t ? t : this._opts.ackTimeout;
          if (void 0 === a) return void (this.acks[e] = n);
          const r = this.io.setTimeoutFn(() => {
              delete this.acks[e];
              for (let n = 0; n < this.sendBuffer.length; n++)
                this.sendBuffer[n].id === e && this.sendBuffer.splice(n, 1);
              n.call(this, new Error("operation has timed out"));
            }, a),
            i = function () {
              f.io.clearTimeoutFn(r);
              for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
              n.apply(f, t);
            };
          (i.withError = !0), (this.acks[e] = i);
        }
        emitWithAck(e) {
          for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++) t[f - 1] = arguments[f];
          return new Promise((n, f) => {
            const a = (e, t) => (e ? f(e) : n(t));
            (a.withError = !0), t.push(a), this.emit(e, ...t);
          });
        }
        _addToQueue(e) {
          var n = this;
          let t;
          "function" === typeof e[e.length - 1] && (t = e.pop());
          const f = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          e.push(function (e) {
            if (f !== n._queue[0]) return;
            if (null !== e) f.tryCount > n._opts.retries && (n._queue.shift(), t && t(e));
            else if ((n._queue.shift(), t)) {
              for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
                r[i - 1] = arguments[i];
              t(null, ...r);
            }
            return (f.pending = !1), n._drainQueue();
          }),
            this._queue.push(f),
            this._drainQueue();
        }
        _drainQueue() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.connected || 0 === this._queue.length) return;
          const n = this._queue[0];
          (n.pending && !e) || ((n.pending = !0), n.tryCount++, (this.flags = n.flags), this.emit.apply(this, n.args));
        }
        packet(e) {
          (e.nsp = this.nsp), this.io._packet(e);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((e) => {
                this._sendConnectPacket(e);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(e) {
          this.packet({
            type: Qt.CONNECT,
            data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e,
          });
        }
        onerror(e) {
          this.connected || this.emitReserved("connect_error", e);
        }
        onclose(e, n) {
          (this.connected = !1), delete this.id, this.emitReserved("disconnect", e, n), this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach((e) => {
            if (!this.sendBuffer.some((n) => String(n.id) === e)) {
              const n = this.acks[e];
              delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
            }
          });
        }
        onpacket(e) {
          if (e.nsp === this.nsp)
            switch (e.type) {
              case Qt.CONNECT:
                e.data && e.data.sid
                  ? this.onconnect(e.data.sid, e.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case Qt.EVENT:
              case Qt.BINARY_EVENT:
                this.onevent(e);
                break;
              case Qt.ACK:
              case Qt.BINARY_ACK:
                this.onack(e);
                break;
              case Qt.DISCONNECT:
                this.ondisconnect();
                break;
              case Qt.CONNECT_ERROR:
                this.destroy();
                const n = new Error(e.data.message);
                (n.data = e.data.data), this.emitReserved("connect_error", n);
            }
        }
        onevent(e) {
          const n = e.data || [];
          null != e.id && n.push(this.ack(e.id)),
            this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
        }
        emitEvent(e) {
          if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const t of n) t.apply(this, e);
          }
          super.emit.apply(this, e),
            this._pid && e.length && "string" === typeof e[e.length - 1] && (this._lastOffset = e[e.length - 1]);
        }
        ack(e) {
          const n = this;
          let t = !1;
          return function () {
            if (!t) {
              t = !0;
              for (var f = arguments.length, a = new Array(f), r = 0; r < f; r++) a[r] = arguments[r];
              n.packet({ type: Qt.ACK, id: e, data: a });
            }
          };
        }
        onack(e) {
          const n = this.acks[e.id];
          "function" === typeof n &&
            (delete this.acks[e.id], n.withError && e.data.unshift(null), n.apply(this, e.data));
        }
        onconnect(e, n) {
          (this.id = e),
            (this.recovered = n && this._pid === n),
            (this._pid = n),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((e) => this.emitEvent(e)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((e) => {
              this.notifyOutgoingListeners(e), this.packet(e);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)), this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: Qt.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(e) {
          return (this.flags.compress = e), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(e) {
          return (this.flags.timeout = e), this;
        }
        onAny(e) {
          return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(e), this;
        }
        prependAny(e) {
          return (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(e), this;
        }
        offAny(e) {
          if (!this._anyListeners) return this;
          if (e) {
            const n = this._anyListeners;
            for (let t = 0; t < n.length; t++) if (e === n[t]) return n.splice(t, 1), this;
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []), this._anyOutgoingListeners.push(e), this
          );
        }
        prependAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []), this._anyOutgoingListeners.unshift(e), this
          );
        }
        offAnyOutgoing(e) {
          if (!this._anyOutgoingListeners) return this;
          if (e) {
            const n = this._anyOutgoingListeners;
            for (let t = 0; t < n.length; t++) if (e === n[t]) return n.splice(t, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(e) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const t of n) t.apply(this, e.data);
          }
        }
      }
      function Ht(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (Ht.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var n = Math.random(),
            t = Math.floor(n * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * n)) ? e - t : e + t;
        }
        return 0 | Math.min(e, this.max);
      }),
        (Ht.prototype.reset = function () {
          this.attempts = 0;
        }),
        (Ht.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (Ht.prototype.setMax = function (e) {
          this.max = e;
        }),
        (Ht.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      class Ft extends Wn {
        constructor(e, t) {
          var f;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            e && "object" === typeof e && ((t = e), (e = void 0)),
            ((t = t || {}).path = t.path || "/socket.io"),
            (this.opts = t),
            $n(this, t),
            this.reconnection(!1 !== t.reconnection),
            this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(t.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
            this.randomizationFactor(null !== (f = t.randomizationFactor) && void 0 !== f ? f : 0.5),
            (this.backoff = new Ht({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == t.timeout ? 2e4 : t.timeout),
            (this._readyState = "closed"),
            (this.uri = e);
          const a = t.parser || n;
          (this.encoder = new a.Encoder()),
            (this.decoder = new a.Decoder()),
            (this._autoConnect = !1 !== t.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(e) {
          return arguments.length ? ((this._reconnection = !!e), this) : this._reconnection;
        }
        reconnectionAttempts(e) {
          return void 0 === e ? this._reconnectionAttempts : ((this._reconnectionAttempts = e), this);
        }
        reconnectionDelay(e) {
          var n;
          return void 0 === e
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = e), null === (n = this.backoff) || void 0 === n || n.setMin(e), this);
        }
        randomizationFactor(e) {
          var n;
          return void 0 === e
            ? this._randomizationFactor
            : ((this._randomizationFactor = e), null === (n = this.backoff) || void 0 === n || n.setJitter(e), this);
        }
        reconnectionDelayMax(e) {
          var n;
          return void 0 === e
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = e), null === (n = this.backoff) || void 0 === n || n.setMax(e), this);
        }
        timeout(e) {
          return arguments.length ? ((this._timeout = e), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
        }
        open(e) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new jt(this.uri, this.opts);
          const n = this.engine,
            t = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const f = _t(n, "open", function () {
              t.onopen(), e && e();
            }),
            a = (n) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", n),
                e ? e(n) : this.maybeReconnectOnOpen();
            },
            r = _t(n, "error", a);
          if (!1 !== this._timeout) {
            const e = this._timeout,
              t = this.setTimeoutFn(() => {
                f(), a(new Error("timeout")), n.close();
              }, e);
            this.opts.autoUnref && t.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(t);
              });
          }
          return this.subs.push(f), this.subs.push(r), this;
        }
        connect(e) {
          return this.open(e);
        }
        onopen() {
          this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
          const e = this.engine;
          this.subs.push(
            _t(e, "ping", this.onping.bind(this)),
            _t(e, "data", this.ondata.bind(this)),
            _t(e, "error", this.onerror.bind(this)),
            _t(e, "close", this.onclose.bind(this)),
            _t(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(e) {
          try {
            this.decoder.add(e);
          } catch (n) {
            this.onclose("parse error", n);
          }
        }
        ondecoded(e) {
          wt(() => {
            this.emitReserved("packet", e);
          }, this.setTimeoutFn);
        }
        onerror(e) {
          this.emitReserved("error", e);
        }
        socket(e, n) {
          let t = this.nsps[e];
          return t ? this._autoConnect && !t.active && t.connect() : ((t = new Zt(this, e, n)), (this.nsps[e] = t)), t;
        }
        _destroy(e) {
          const n = Object.keys(this.nsps);
          for (const t of n) {
            if (this.nsps[t].active) return;
          }
          this._close();
        }
        _packet(e) {
          const n = this.encoder.encode(e);
          for (let t = 0; t < n.length; t++) this.engine.write(n[t], e.options);
        }
        cleanup() {
          this.subs.forEach((e) => e()), (this.subs.length = 0), this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(e, n) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", e, n),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          const e = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(), this.emitReserved("reconnect_failed"), (this._reconnecting = !1);
          else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const t = this.setTimeoutFn(() => {
              e.skipReconnect ||
                (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                e.skipReconnect ||
                  e.open((n) => {
                    n
                      ? ((e._reconnecting = !1), e.reconnect(), this.emitReserved("reconnect_error", n))
                      : e.onreconnect();
                  }));
            }, n);
            this.opts.autoUnref && t.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(t);
              });
          }
        }
        onreconnect() {
          const e = this.backoff.attempts;
          (this._reconnecting = !1), this.backoff.reset(), this.emitReserved("reconnect", e);
        }
      }
      const Wt = {};
      function Vt(e, n) {
        "object" === typeof e && ((n = e), (e = void 0));
        const t = (function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              t = arguments.length > 2 ? arguments[2] : void 0,
              f = e;
            (t = t || ("undefined" !== typeof location && location)),
              null == e && (e = t.protocol + "//" + t.host),
              "string" === typeof e &&
                ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e = "undefined" !== typeof t ? t.protocol + "//" + e : "https://" + e),
                (f = Ct(e))),
              f.port ||
                (/^(http|ws)$/.test(f.protocol)
                  ? (f.port = "80")
                  : /^(http|ws)s$/.test(f.protocol) && (f.port = "443")),
              (f.path = f.path || "/");
            const a = -1 !== f.host.indexOf(":") ? "[" + f.host + "]" : f.host;
            return (
              (f.id = f.protocol + "://" + a + ":" + f.port + n),
              (f.href = f.protocol + "://" + a + (t && t.port === f.port ? "" : ":" + f.port)),
              f
            );
          })(e, (n = n || {}).path || "/socket.io"),
          f = t.source,
          a = t.id,
          r = t.path,
          i = Wt[a] && r in Wt[a].nsps;
        let o;
        return (
          n.forceNew || n["force new connection"] || !1 === n.multiplex || i
            ? (o = new Ft(f, n))
            : (Wt[a] || (Wt[a] = new Ft(f, n)), (o = Wt[a])),
          t.query && !n.query && (n.query = t.queryKey),
          o.socket(t.path, n)
        );
      }
      Object.assign(Vt, { Manager: Ft, Socket: Zt, io: Vt, connect: Vt });
      var Kt = function () {
        return (
          (Kt =
            Object.assign ||
            function (e) {
              for (var n, t = 1, f = arguments.length; t < f; t++)
                for (var a in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }),
          Kt.apply(this, arguments)
        );
      };
      Object.create;
      function Xt(e, n, t) {
        if (t || 2 === arguments.length)
          for (var f, a = 0, r = n.length; a < r; a++)
            (!f && a in n) || (f || (f = Array.prototype.slice.call(n, 0, a)), (f[a] = n[a]));
        return e.concat(f || Array.prototype.slice.call(n));
      }
      Object.create;
      "function" === typeof SuppressedError && SuppressedError;
      var qt = t(324),
        $t = t.n(qt),
        ef = "-ms-",
        nf = "-moz-",
        tf = "-webkit-",
        ff = "comm",
        af = "rule",
        rf = "decl",
        of = "@import",
        uf = "@keyframes",
        sf = "@layer",
        lf = Math.abs,
        cf = String.fromCharCode,
        df = Object.assign;
      function pf(e) {
        return e.trim();
      }
      function gf(e, n) {
        return (e = n.exec(e)) ? e[0] : e;
      }
      function hf(e, n, t) {
        return e.replace(n, t);
      }
      function mf(e, n, t) {
        return e.indexOf(n, t);
      }
      function wf(e, n) {
        return 0 | e.charCodeAt(n);
      }
      function bf(e, n, t) {
        return e.slice(n, t);
      }
      function yf(e) {
        return e.length;
      }
      function Lf(e) {
        return e.length;
      }
      function Mf(e, n) {
        return n.push(e), e;
      }
      function vf(e, n) {
        return e.filter(function (e) {
          return !gf(e, n);
        });
      }
      var Cf = 1,
        jf = 1,
        kf = 0,
        If = 0,
        Sf = 0,
        Nf = "";
      function Tf(e, n, t, f, a, r, i, o) {
        return {
          value: e,
          root: n,
          parent: t,
          type: f,
          props: a,
          children: r,
          line: Cf,
          column: jf,
          length: i,
          return: "",
          siblings: o,
        };
      }
      function Ef(e, n) {
        return df(Tf("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
      }
      function Df(e) {
        for (; e.root; ) e = Ef(e.root, { children: [e] });
        Mf(e, e.siblings);
      }
      function xf() {
        return (Sf = If > 0 ? wf(Nf, --If) : 0), jf--, 10 === Sf && ((jf = 1), Cf--), Sf;
      }
      function zf() {
        return (Sf = If < kf ? wf(Nf, If++) : 0), jf++, 10 === Sf && ((jf = 1), Cf++), Sf;
      }
      function Af() {
        return wf(Nf, If);
      }
      function Pf() {
        return If;
      }
      function Of(e, n) {
        return bf(Nf, e, n);
      }
      function Rf(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Qf(e) {
        return (Cf = jf = 1), (kf = yf((Nf = e))), (If = 0), [];
      }
      function Yf(e) {
        return (Nf = ""), e;
      }
      function Uf(e) {
        return pf(Of(If - 1, _f(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Bf(e) {
        for (; (Sf = Af()) && Sf < 33; ) zf();
        return Rf(e) > 2 || Rf(Sf) > 3 ? "" : " ";
      }
      function Jf(e, n) {
        for (; --n && zf() && !(Sf < 48 || Sf > 102 || (Sf > 57 && Sf < 65) || (Sf > 70 && Sf < 97)); );
        return Of(e, Pf() + (n < 6 && 32 == Af() && 32 == zf()));
      }
      function _f(e) {
        for (; zf(); )
          switch (Sf) {
            case e:
              return If;
            case 34:
            case 39:
              34 !== e && 39 !== e && _f(Sf);
              break;
            case 40:
              41 === e && _f(e);
              break;
            case 92:
              zf();
          }
        return If;
      }
      function Gf(e, n) {
        for (; zf() && e + Sf !== 57 && (e + Sf !== 84 || 47 !== Af()); );
        return "/*" + Of(n, If - 1) + "*" + cf(47 === e ? e : zf());
      }
      function Zf(e) {
        for (; !Rf(Af()); ) zf();
        return Of(e, If);
      }
      function Hf(e, n) {
        for (var t = "", f = 0; f < e.length; f++) t += n(e[f], f, e, n) || "";
        return t;
      }
      function Ff(e, n, t, f) {
        switch (e.type) {
          case sf:
            if (e.children.length) break;
          case of:
          case rf:
            return (e.return = e.return || e.value);
          case ff:
            return "";
          case uf:
            return (e.return = e.value + "{" + Hf(e.children, f) + "}");
          case af:
            if (!yf((e.value = e.props.join(",")))) return "";
        }
        return yf((t = Hf(e.children, f))) ? (e.return = e.value + "{" + t + "}") : "";
      }
      function Wf(e, n, t) {
        switch (
          (function (e, n) {
            return 45 ^ wf(e, 0) ? (((((((n << 2) ^ wf(e, 0)) << 2) ^ wf(e, 1)) << 2) ^ wf(e, 2)) << 2) ^ wf(e, 3) : 0;
          })(e, n)
        ) {
          case 5103:
            return tf + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return tf + e + e;
          case 4789:
            return nf + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return tf + e + nf + e + ef + e + e;
          case 5936:
            switch (wf(e, n + 11)) {
              case 114:
                return tf + e + ef + hf(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return tf + e + ef + hf(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return tf + e + ef + hf(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return tf + e + ef + e + e;
          case 6165:
            return tf + e + ef + "flex-" + e + e;
          case 5187:
            return tf + e + hf(e, /(\w+).+(:[^]+)/, tf + "box-$1$2" + ef + "flex-$1$2") + e;
          case 5443:
            return (
              tf +
              e +
              ef +
              "flex-item-" +
              hf(e, /flex-|-self/g, "") +
              (gf(e, /flex-|baseline/) ? "" : ef + "grid-row-" + hf(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return tf + e + ef + "flex-line-pack" + hf(e, /align-content|flex-|-self/g, "") + e;
          case 5548:
            return tf + e + ef + hf(e, "shrink", "negative") + e;
          case 5292:
            return tf + e + ef + hf(e, "basis", "preferred-size") + e;
          case 6060:
            return tf + "box-" + hf(e, "-grow", "") + tf + e + ef + hf(e, "grow", "positive") + e;
          case 4554:
            return tf + hf(e, /([^-])(transform)/g, "$1" + tf + "$2") + e;
          case 6187:
            return hf(hf(hf(e, /(zoom-|grab)/, tf + "$1"), /(image-set)/, tf + "$1"), e, "") + e;
          case 5495:
          case 3959:
            return hf(e, /(image-set\([^]*)/, tf + "$1$`$1");
          case 4968:
            return (
              hf(hf(e, /(.+:)(flex-)?(.*)/, tf + "box-pack:$3" + ef + "flex-pack:$3"), /s.+-b[^;]+/, "justify") +
              tf +
              e +
              e
            );
          case 4200:
            if (!gf(e, /flex-|baseline/)) return ef + "grid-column-align" + bf(e, n) + e;
            break;
          case 2592:
          case 3360:
            return ef + hf(e, "template-", "") + e;
          case 4384:
          case 3616:
            return t &&
              t.some(function (e, t) {
                return (n = t), gf(e.props, /grid-\w+-end/);
              })
              ? ~mf(e + (t = t[n].value), "span", 0)
                ? e
                : ef +
                  hf(e, "-start", "") +
                  e +
                  ef +
                  "grid-row-span:" +
                  (~mf(t, "span", 0) ? gf(t, /\d+/) : +gf(t, /\d+/) - +gf(e, /\d+/)) +
                  ";"
              : ef + hf(e, "-start", "") + e;
          case 4896:
          case 4128:
            return t &&
              t.some(function (e) {
                return gf(e.props, /grid-\w+-start/);
              })
              ? e
              : ef + hf(hf(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return hf(e, /(.+)-inline(.+)/, tf + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (yf(e) - 1 - n > 6)
              switch (wf(e, n + 1)) {
                case 109:
                  if (45 !== wf(e, n + 4)) break;
                case 102:
                  return (
                    hf(e, /(.+:)(.+)-([^]+)/, "$1" + tf + "$2-$3$1" + nf + (108 == wf(e, n + 3) ? "$3" : "$2-$3")) + e
                  );
                case 115:
                  return ~mf(e, "stretch", 0) ? Wf(hf(e, "stretch", "fill-available"), n, t) + e : e;
              }
            break;
          case 5152:
          case 5920:
            return hf(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (n, t, f, a, r, i, o) {
              return ef + t + ":" + f + o + (a ? ef + t + "-span:" + (r ? i : +i - +f) + o : "") + e;
            });
          case 4949:
            if (121 === wf(e, n + 6)) return hf(e, ":", ":" + tf) + e;
            break;
          case 6444:
            switch (wf(e, 45 === wf(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  hf(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" + tf + (45 === wf(e, 14) ? "inline-" : "") + "box$3$1" + tf + "$2$3$1" + ef + "$2box$3"
                  ) + e
                );
              case 100:
                return hf(e, ":", ":" + ef) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return hf(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function Vf(e, n, t, f) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case rf:
              return void (e.return = Wf(e.value, e.length, t));
            case uf:
              return Hf([Ef(e, { value: hf(e.value, "@", "@" + tf) })], f);
            case af:
              if (e.length)
                return (function (e, n) {
                  return e.map(n).join("");
                })((t = e.props), function (n) {
                  switch (gf(n, (f = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      Df(Ef(e, { props: [hf(n, /:(read-\w+)/, ":" + nf + "$1")] })),
                        Df(Ef(e, { props: [n] })),
                        df(e, { props: vf(t, f) });
                      break;
                    case "::placeholder":
                      Df(Ef(e, { props: [hf(n, /:(plac\w+)/, ":" + tf + "input-$1")] })),
                        Df(Ef(e, { props: [hf(n, /:(plac\w+)/, ":" + nf + "$1")] })),
                        Df(Ef(e, { props: [hf(n, /:(plac\w+)/, ef + "input-$1")] })),
                        Df(Ef(e, { props: [n] })),
                        df(e, { props: vf(t, f) });
                  }
                  return "";
                });
          }
      }
      function Kf(e) {
        return Yf(Xf("", null, null, null, [""], (e = Qf(e)), 0, [0], e));
      }
      function Xf(e, n, t, f, a, r, i, o, u) {
        for (
          var s = 0, l = 0, c = i, d = 0, p = 0, g = 0, h = 1, m = 1, w = 1, b = 0, y = "", L = a, M = r, v = f, C = y;
          m;

        )
          switch (((g = b), (b = zf()))) {
            case 40:
              if (108 != g && 58 == wf(C, c - 1)) {
                -1 != mf((C += hf(Uf(b), "&", "&\f")), "&\f", lf(s ? o[s - 1] : 0)) && (w = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              C += Uf(b);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              C += Bf(g);
              break;
            case 92:
              C += Jf(Pf() - 1, 7);
              continue;
            case 47:
              switch (Af()) {
                case 42:
                case 47:
                  Mf($f(Gf(zf(), Pf()), n, t, u), u);
                  break;
                default:
                  C += "/";
              }
              break;
            case 123 * h:
              o[s++] = yf(C) * w;
            case 125 * h:
            case 59:
            case 0:
              switch (b) {
                case 0:
                case 125:
                  m = 0;
                case 59 + l:
                  -1 == w && (C = hf(C, /\f/g, "")),
                    p > 0 &&
                      yf(C) - c &&
                      Mf(p > 32 ? ea(C + ";", f, t, c - 1, u) : ea(hf(C, " ", "") + ";", f, t, c - 2, u), u);
                  break;
                case 59:
                  C += ";";
                default:
                  if ((Mf((v = qf(C, n, t, s, l, a, o, y, (L = []), (M = []), c, r)), r), 123 === b))
                    if (0 === l) Xf(C, n, v, v, L, r, c, o, M);
                    else
                      switch (99 === d && 110 === wf(C, 3) ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Xf(e, v, v, f && Mf(qf(e, v, v, 0, 0, a, o, y, a, (L = []), c, M), M), a, M, c, o, f ? L : M);
                          break;
                        default:
                          Xf(C, v, v, v, [""], M, 0, o, M);
                      }
              }
              (s = l = p = 0), (h = w = 1), (y = C = ""), (c = i);
              break;
            case 58:
              (c = 1 + yf(C)), (p = g);
            default:
              if (h < 1)
                if (123 == b) --h;
                else if (125 == b && 0 == h++ && 125 == xf()) continue;
              switch (((C += cf(b)), b * h)) {
                case 38:
                  w = l > 0 ? 1 : ((C += "\f"), -1);
                  break;
                case 44:
                  (o[s++] = (yf(C) - 1) * w), (w = 1);
                  break;
                case 64:
                  45 === Af() && (C += Uf(zf())), (d = Af()), (l = c = yf((y = C += Zf(Pf())))), b++;
                  break;
                case 45:
                  45 === g && 2 == yf(C) && (h = 0);
              }
          }
        return r;
      }
      function qf(e, n, t, f, a, r, i, o, u, s, l, c) {
        for (var d = a - 1, p = 0 === a ? r : [""], g = Lf(p), h = 0, m = 0, w = 0; h < f; ++h)
          for (var b = 0, y = bf(e, d + 1, (d = lf((m = i[h])))), L = e; b < g; ++b)
            (L = pf(m > 0 ? p[b] + " " + y : hf(y, /&\f/g, p[b]))) && (u[w++] = L);
        return Tf(e, n, t, 0 === a ? af : o, u, s, l, c);
      }
      function $f(e, n, t, f) {
        return Tf(e, n, t, ff, cf(Sf), bf(e, 2, -2), 0, f);
      }
      function ea(e, n, t, f, a) {
        return Tf(e, n, t, rf, bf(e, 0, f), bf(e, f + 1, -1), f, a);
      }
      var na = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        ta =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        fa = "active",
        aa = "data-styled-version",
        ra = "6.1.13",
        ia = "/*!sc*/\n",
        oa = "undefined" != typeof window && "HTMLElement" in window,
        ua = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY
        ),
        sa = (new Set(), Object.freeze([])),
        la = Object.freeze({});
      function ca(e, n, t) {
        return void 0 === t && (t = la), (e.theme !== t.theme && e.theme) || n || t.theme;
      }
      var da = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        pa = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        ga = /(^-|-$)/g;
      function ha(e) {
        return e.replace(pa, "-").replace(ga, "");
      }
      var ma = /(a)(d)/gi,
        wa = 52,
        ba = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function ya(e) {
        var n,
          t = "";
        for (n = Math.abs(e); n > wa; n = (n / wa) | 0) t = ba(n % wa) + t;
        return (ba(n % wa) + t).replace(ma, "$1-$2");
      }
      var La,
        Ma = 5381,
        va = function (e, n) {
          for (var t = n.length; t; ) e = (33 * e) ^ n.charCodeAt(--t);
          return e;
        },
        Ca = function (e) {
          return va(Ma, e);
        };
      function ja(e) {
        return ya(Ca(e) >>> 0);
      }
      function ka(e) {
        return e.displayName || e.name || "Component";
      }
      function Ia(e) {
        return "string" == typeof e && !0;
      }
      var Sa = "function" == typeof Symbol && Symbol.for,
        Na = Sa ? Symbol.for("react.memo") : 60115,
        Ta = Sa ? Symbol.for("react.forward_ref") : 60112,
        Ea = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        Da = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        xa = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        za =
          (((La = {})[Ta] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
          (La[Na] = xa),
          La);
      function Aa(e) {
        return ("type" in (n = e) && n.type.$$typeof) === Na ? xa : "$$typeof" in e ? za[e.$$typeof] : Ea;
        var n;
      }
      var Pa = Object.defineProperty,
        Oa = Object.getOwnPropertyNames,
        Ra = Object.getOwnPropertySymbols,
        Qa = Object.getOwnPropertyDescriptor,
        Ya = Object.getPrototypeOf,
        Ua = Object.prototype;
      function Ba(e, n, t) {
        if ("string" != typeof n) {
          if (Ua) {
            var f = Ya(n);
            f && f !== Ua && Ba(e, f, t);
          }
          var a = Oa(n);
          Ra && (a = a.concat(Ra(n)));
          for (var r = Aa(e), i = Aa(n), o = 0; o < a.length; ++o) {
            var u = a[o];
            if (!(u in Da || (t && t[u]) || (i && u in i) || (r && u in r))) {
              var s = Qa(n, u);
              try {
                Pa(e, u, s);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function Ja(e) {
        return "function" == typeof e;
      }
      function _a(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function Ga(e, n) {
        return e && n ? "".concat(e, " ").concat(n) : e || n || "";
      }
      function Za(e, n) {
        if (0 === e.length) return "";
        for (var t = e[0], f = 1; f < e.length; f++) t += n ? n + e[f] : e[f];
        return t;
      }
      function Ha(e) {
        return (
          null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
        );
      }
      function Fa(e, n, t) {
        if ((void 0 === t && (t = !1), !t && !Ha(e) && !Array.isArray(e))) return n;
        if (Array.isArray(n)) for (var f = 0; f < n.length; f++) e[f] = Fa(e[f], n[f]);
        else if (Ha(n)) for (var f in n) e[f] = Fa(e[f], n[f]);
        return e;
      }
      function Wa(e, n) {
        Object.defineProperty(e, "toString", { value: n });
      }
      function Va(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")
        );
      }
      var Ka = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var n = 0, t = 0; t < e; t++) n += this.groupSizes[t];
              return n;
            }),
            (e.prototype.insertRules = function (e, n) {
              if (e >= this.groupSizes.length) {
                for (var t = this.groupSizes, f = t.length, a = f; e >= a; )
                  if ((a <<= 1) < 0) throw Va(16, "".concat(e));
                (this.groupSizes = new Uint32Array(a)), this.groupSizes.set(t), (this.length = a);
                for (var r = f; r < a; r++) this.groupSizes[r] = 0;
              }
              for (var i = this.indexOfGroup(e + 1), o = ((r = 0), n.length); r < o; r++)
                this.tag.insertRule(i, n[r]) && (this.groupSizes[e]++, i++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var n = this.groupSizes[e],
                  t = this.indexOfGroup(e),
                  f = t + n;
                this.groupSizes[e] = 0;
                for (var a = t; a < f; a++) this.tag.deleteRule(t);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var n = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return n;
              for (var t = this.groupSizes[e], f = this.indexOfGroup(e), a = f + t, r = f; r < a; r++)
                n += "".concat(this.tag.getRule(r)).concat(ia);
              return n;
            }),
            e
          );
        })(),
        Xa = new Map(),
        qa = new Map(),
        $a = 1,
        er = function (e) {
          if (Xa.has(e)) return Xa.get(e);
          for (; qa.has($a); ) $a++;
          var n = $a++;
          return Xa.set(e, n), qa.set(n, e), n;
        },
        nr = function (e, n) {
          ($a = n + 1), Xa.set(e, n), qa.set(n, e);
        },
        tr = "style[".concat(ta, "][").concat(aa, '="').concat(ra, '"]'),
        fr = new RegExp("^".concat(ta, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
        ar = function (e, n, t) {
          for (var f, a = t.split(","), r = 0, i = a.length; r < i; r++) (f = a[r]) && e.registerName(n, f);
        },
        rr = function (e, n) {
          for (
            var t, f = (null !== (t = n.textContent) && void 0 !== t ? t : "").split(ia), a = [], r = 0, i = f.length;
            r < i;
            r++
          ) {
            var o = f[r].trim();
            if (o) {
              var u = o.match(fr);
              if (u) {
                var s = 0 | parseInt(u[1], 10),
                  l = u[2];
                0 !== s && (nr(l, s), ar(e, l, u[3]), e.getTag().insertRules(s, a)), (a.length = 0);
              } else a.push(o);
            }
          }
        },
        ir = function (e) {
          for (var n = document.querySelectorAll(tr), t = 0, f = n.length; t < f; t++) {
            var a = n[t];
            a && a.getAttribute(ta) !== fa && (rr(e, a), a.parentNode && a.parentNode.removeChild(a));
          }
        };
      function or() {
        return t.nc;
      }
      var ur = function (e) {
          var n = document.head,
            t = e || n,
            f = document.createElement("style"),
            a = (function (e) {
              var n = Array.from(e.querySelectorAll("style[".concat(ta, "]")));
              return n[n.length - 1];
            })(t),
            r = void 0 !== a ? a.nextSibling : null;
          f.setAttribute(ta, fa), f.setAttribute(aa, ra);
          var i = or();
          return i && f.setAttribute("nonce", i), t.insertBefore(f, r), f;
        },
        sr = (function () {
          function e(e) {
            (this.element = ur(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (var n = document.styleSheets, t = 0, f = n.length; t < f; t++) {
                  var a = n[t];
                  if (a.ownerNode === e) return a;
                }
                throw Va(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, n) {
              try {
                return this.sheet.insertRule(n, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var n = this.sheet.cssRules[e];
              return n && n.cssText ? n.cssText : "";
            }),
            e
          );
        })(),
        lr = (function () {
          function e(e) {
            (this.element = ur(e)), (this.nodes = this.element.childNodes), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, n) {
              if (e <= this.length && e >= 0) {
                var t = document.createTextNode(n);
                return this.element.insertBefore(t, this.nodes[e] || null), this.length++, !0;
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        cr = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, n) {
              return e <= this.length && (this.rules.splice(e, 0, n), this.length++, !0);
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        dr = oa,
        pr = { isServer: !oa, useCSSOMInjection: !ua },
        gr = (function () {
          function e(e, n, t) {
            void 0 === e && (e = la), void 0 === n && (n = {});
            var f = this;
            (this.options = Kt(Kt({}, pr), e)),
              (this.gs = n),
              (this.names = new Map(t)),
              (this.server = !!e.isServer),
              !this.server && oa && dr && ((dr = !1), ir(this)),
              Wa(this, function () {
                return (function (e) {
                  for (
                    var n = e.getTag(),
                      t = n.length,
                      f = "",
                      a = function (t) {
                        var a = (function (e) {
                          return qa.get(e);
                        })(t);
                        if (void 0 === a) return "continue";
                        var r = e.names.get(a),
                          i = n.getGroup(t);
                        if (void 0 === r || !r.size || 0 === i.length) return "continue";
                        var o = "".concat(ta, ".g").concat(t, '[id="').concat(a, '"]'),
                          u = "";
                        void 0 !== r &&
                          r.forEach(function (e) {
                            e.length > 0 && (u += "".concat(e, ","));
                          }),
                          (f += "".concat(i).concat(o, '{content:"').concat(u, '"}').concat(ia));
                      },
                      r = 0;
                    r < t;
                    r++
                  )
                    a(r);
                  return f;
                })(f);
              });
          }
          return (
            (e.registerId = function (e) {
              return er(e);
            }),
            (e.prototype.rehydrate = function () {
              !this.server && oa && ir(this);
            }),
            (e.prototype.reconstructWithOptions = function (n, t) {
              return void 0 === t && (t = !0), new e(Kt(Kt({}, this.options), n), this.gs, (t && this.names) || void 0);
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var n = e.useCSSOMInjection,
                      t = e.target;
                    return e.isServer ? new cr(t) : n ? new sr(t) : new lr(t);
                  })(this.options)),
                  new Ka(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, n) {
              return this.names.has(e) && this.names.get(e).has(n);
            }),
            (e.prototype.registerName = function (e, n) {
              if ((er(e), this.names.has(e))) this.names.get(e).add(n);
              else {
                var t = new Set();
                t.add(n), this.names.set(e, t);
              }
            }),
            (e.prototype.insertRules = function (e, n, t) {
              this.registerName(e, n), this.getTag().insertRules(er(e), t);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(er(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        hr = /&/g,
        mr = /^\s*\/\/.*$/gm;
      function wr(e, n) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(n, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(n, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(n, " ").concat(e);
              }))),
            Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = wr(e.children, n)),
            e
          );
        });
      }
      function br(e) {
        var n,
          t,
          f,
          a = void 0 === e ? la : e,
          r = a.options,
          i = void 0 === r ? la : r,
          o = a.plugins,
          u = void 0 === o ? sa : o,
          s = function (e, f, a) {
            return a.startsWith(t) && a.endsWith(t) && a.replaceAll(t, "").length > 0 ? ".".concat(n) : e;
          },
          l = u.slice();
        l.push(function (e) {
          e.type === af && e.value.includes("&") && (e.props[0] = e.props[0].replace(hr, t).replace(f, s));
        }),
          i.prefix && l.push(Vf),
          l.push(Ff);
        var c = function (e, a, r, o) {
          void 0 === a && (a = ""),
            void 0 === r && (r = ""),
            void 0 === o && (o = "&"),
            (n = o),
            (t = a),
            (f = new RegExp("\\".concat(t, "\\b"), "g"));
          var u = e.replace(mr, ""),
            s = Kf(r || a ? "".concat(r, " ").concat(a, " { ").concat(u, " }") : u);
          i.namespace && (s = wr(s, i.namespace));
          var c,
            d = [];
          return (
            Hf(
              s,
              (function (e) {
                var n = Lf(e);
                return function (t, f, a, r) {
                  for (var i = "", o = 0; o < n; o++) i += e[o](t, f, a, r) || "";
                  return i;
                };
              })(
                l.concat(
                  ((c = function (e) {
                    return d.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && c(e));
                  })
                )
              )
            ),
            d
          );
        };
        return (
          (c.hash = u.length
            ? u
                .reduce(function (e, n) {
                  return n.name || Va(15), va(e, n.name);
                }, Ma)
                .toString()
            : ""),
          c
        );
      }
      var yr = new gr(),
        Lr = br(),
        Mr = f.createContext({ shouldForwardProp: void 0, styleSheet: yr, stylis: Lr }),
        vr = (Mr.Consumer, f.createContext(void 0));
      function Cr() {
        return (0, f.useContext)(Mr);
      }
      function jr(e) {
        var n = (0, f.useState)(e.stylisPlugins),
          t = n[0],
          a = n[1],
          r = Cr().styleSheet,
          i = (0, f.useMemo)(
            function () {
              var n = r;
              return (
                e.sheet ? (n = e.sheet) : e.target && (n = n.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection && (n = n.reconstructWithOptions({ useCSSOMInjection: !1 })),
                n
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target, r]
          ),
          o = (0, f.useMemo)(
            function () {
              return br({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: t });
            },
            [e.enableVendorPrefixes, e.namespace, t]
          );
        (0, f.useEffect)(
          function () {
            $t()(t, e.stylisPlugins) || a(e.stylisPlugins);
          },
          [e.stylisPlugins]
        );
        var u = (0, f.useMemo)(
          function () {
            return { shouldForwardProp: e.shouldForwardProp, styleSheet: i, stylis: o };
          },
          [e.shouldForwardProp, i, o]
        );
        return f.createElement(Mr.Provider, { value: u }, f.createElement(vr.Provider, { value: o }, e.children));
      }
      var kr = (function () {
          function e(e, n) {
            var t = this;
            (this.inject = function (e, n) {
              void 0 === n && (n = Lr);
              var f = t.name + n.hash;
              e.hasNameForId(t.id, f) || e.insertRules(t.id, f, n(t.rules, f, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = n),
              Wa(this, function () {
                throw Va(12, String(t.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = Lr), this.name + e.hash;
            }),
            e
          );
        })(),
        Ir = function (e) {
          return e >= "A" && e <= "Z";
        };
      function Sr(e) {
        for (var n = "", t = 0; t < e.length; t++) {
          var f = e[t];
          if (1 === t && "-" === f && "-" === e[0]) return e;
          Ir(f) ? (n += "-" + f.toLowerCase()) : (n += f);
        }
        return n.startsWith("ms-") ? "-" + n : n;
      }
      var Nr = function (e) {
          return null == e || !1 === e || "" === e;
        },
        Tr = function (e) {
          var n,
            t,
            f = [];
          for (var a in e) {
            var r = e[a];
            e.hasOwnProperty(a) &&
              !Nr(r) &&
              ((Array.isArray(r) && r.isCss) || Ja(r)
                ? f.push("".concat(Sr(a), ":"), r, ";")
                : Ha(r)
                ? f.push.apply(f, Xt(Xt(["".concat(a, " {")], Tr(r), !1), ["}"], !1))
                : f.push(
                    ""
                      .concat(Sr(a), ": ")
                      .concat(
                        ((n = a),
                        null == (t = r) || "boolean" == typeof t || "" === t
                          ? ""
                          : "number" != typeof t || 0 === t || n in na || n.startsWith("--")
                          ? String(t).trim()
                          : "".concat(t, "px")),
                        ";"
                      )
                  ));
          }
          return f;
        };
      function Er(e, n, t, f) {
        return Nr(e)
          ? []
          : _a(e)
          ? [".".concat(e.styledComponentId)]
          : Ja(e)
          ? !Ja((a = e)) || (a.prototype && a.prototype.isReactComponent) || !n
            ? [e]
            : Er(e(n), n, t, f)
          : e instanceof kr
          ? t
            ? (e.inject(t, f), [e.getName(f)])
            : [e]
          : Ha(e)
          ? Tr(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              sa,
              e.map(function (e) {
                return Er(e, n, t, f);
              })
            )
          : [e.toString()];
        var a;
      }
      function Dr(e) {
        for (var n = 0; n < e.length; n += 1) {
          var t = e[n];
          if (Ja(t) && !_a(t)) return !1;
        }
        return !0;
      }
      var xr = Ca(ra),
        zr = (function () {
          function e(e, n, t) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === t || t.isStatic) && Dr(e)),
              (this.componentId = n),
              (this.baseHash = va(xr, n)),
              (this.baseStyle = t),
              gr.registerId(n);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, n, t) {
              var f = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, n, t) : "";
              if (this.isStatic && !t.hash)
                if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
                  f = Ga(f, this.staticRulesId);
                else {
                  var a = Za(Er(this.rules, e, n, t)),
                    r = ya(va(this.baseHash, a) >>> 0);
                  if (!n.hasNameForId(this.componentId, r)) {
                    var i = t(a, ".".concat(r), void 0, this.componentId);
                    n.insertRules(this.componentId, r, i);
                  }
                  (f = Ga(f, r)), (this.staticRulesId = r);
                }
              else {
                for (var o = va(this.baseHash, t.hash), u = "", s = 0; s < this.rules.length; s++) {
                  var l = this.rules[s];
                  if ("string" == typeof l) u += l;
                  else if (l) {
                    var c = Za(Er(l, e, n, t));
                    (o = va(o, c + s)), (u += c);
                  }
                }
                if (u) {
                  var d = ya(o >>> 0);
                  n.hasNameForId(this.componentId, d) ||
                    n.insertRules(this.componentId, d, t(u, ".".concat(d), void 0, this.componentId)),
                    (f = Ga(f, d));
                }
              }
              return f;
            }),
            e
          );
        })(),
        Ar = f.createContext(void 0);
      Ar.Consumer;
      var Pr = {};
      new Set();
      function Or(e, n, t) {
        var a = _a(e),
          r = e,
          i = !Ia(e),
          o = n.attrs,
          u = void 0 === o ? sa : o,
          s = n.componentId,
          l =
            void 0 === s
              ? (function (e, n) {
                  var t = "string" != typeof e ? "sc" : ha(e);
                  Pr[t] = (Pr[t] || 0) + 1;
                  var f = "".concat(t, "-").concat(ja(ra + t + Pr[t]));
                  return n ? "".concat(n, "-").concat(f) : f;
                })(n.displayName, n.parentComponentId)
              : s,
          c = n.displayName,
          d =
            void 0 === c
              ? (function (e) {
                  return Ia(e) ? "styled.".concat(e) : "Styled(".concat(ka(e), ")");
                })(e)
              : c,
          p =
            n.displayName && n.componentId
              ? "".concat(ha(n.displayName), "-").concat(n.componentId)
              : n.componentId || l,
          g = a && r.attrs ? r.attrs.concat(u).filter(Boolean) : u,
          h = n.shouldForwardProp;
        if (a && r.shouldForwardProp) {
          var m = r.shouldForwardProp;
          if (n.shouldForwardProp) {
            var w = n.shouldForwardProp;
            h = function (e, n) {
              return m(e, n) && w(e, n);
            };
          } else h = m;
        }
        var b = new zr(t, p, a ? r.componentStyle : void 0);
        function y(e, n) {
          return (function (e, n, t) {
            var a = e.attrs,
              r = e.componentStyle,
              i = e.defaultProps,
              o = e.foldedComponentIds,
              u = e.styledComponentId,
              s = e.target,
              l = f.useContext(Ar),
              c = Cr(),
              d = e.shouldForwardProp || c.shouldForwardProp,
              p = ca(n, l, i) || la,
              g = (function (e, n, t) {
                for (var f, a = Kt(Kt({}, n), { className: void 0, theme: t }), r = 0; r < e.length; r += 1) {
                  var i = Ja((f = e[r])) ? f(a) : f;
                  for (var o in i)
                    a[o] = "className" === o ? Ga(a[o], i[o]) : "style" === o ? Kt(Kt({}, a[o]), i[o]) : i[o];
                }
                return n.className && (a.className = Ga(a.className, n.className)), a;
              })(a, n, p),
              h = g.as || s,
              m = {};
            for (var w in g)
              void 0 === g[w] ||
                "$" === w[0] ||
                "as" === w ||
                ("theme" === w && g.theme === p) ||
                ("forwardedAs" === w ? (m.as = g.forwardedAs) : (d && !d(w, h)) || (m[w] = g[w]));
            var b = (function (e, n) {
                var t = Cr();
                return e.generateAndInjectStyles(n, t.styleSheet, t.stylis);
              })(r, g),
              y = Ga(o, u);
            return (
              b && (y += " " + b),
              g.className && (y += " " + g.className),
              (m[Ia(h) && !da.has(h) ? "class" : "className"] = y),
              (m.ref = t),
              (0, f.createElement)(h, m)
            );
          })(L, e, n);
        }
        y.displayName = d;
        var L = f.forwardRef(y);
        return (
          (L.attrs = g),
          (L.componentStyle = b),
          (L.displayName = d),
          (L.shouldForwardProp = h),
          (L.foldedComponentIds = a ? Ga(r.foldedComponentIds, r.styledComponentId) : ""),
          (L.styledComponentId = p),
          (L.target = a ? r.target : e),
          Object.defineProperty(L, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = a
                ? (function (e) {
                    for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                    for (var f = 0, a = n; f < a.length; f++) Fa(e, a[f], !0);
                    return e;
                  })({}, r.defaultProps, e)
                : e;
            },
          }),
          Wa(L, function () {
            return ".".concat(L.styledComponentId);
          }),
          i &&
            Ba(L, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          L
        );
      }
      function Rr(e, n) {
        for (var t = [e[0]], f = 0, a = n.length; f < a; f += 1) t.push(n[f], e[f + 1]);
        return t;
      }
      var Qr = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function Yr(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        if (Ja(e) || Ha(e)) return Qr(Er(Rr(sa, Xt([e], n, !0))));
        var f = e;
        return 0 === n.length && 1 === f.length && "string" == typeof f[0] ? Er(f) : Qr(Er(Rr(f, n)));
      }
      function Ur(e, n, t) {
        if ((void 0 === t && (t = la), !n)) throw Va(1, n);
        var f = function (f) {
          for (var a = [], r = 1; r < arguments.length; r++) a[r - 1] = arguments[r];
          return e(n, t, Yr.apply(void 0, Xt([f], a, !1)));
        };
        return (
          (f.attrs = function (f) {
            return Ur(e, n, Kt(Kt({}, t), { attrs: Array.prototype.concat(t.attrs, f).filter(Boolean) }));
          }),
          (f.withConfig = function (f) {
            return Ur(e, n, Kt(Kt({}, t), f));
          }),
          f
        );
      }
      var Br = function (e) {
          return Ur(Or, e);
        },
        Jr = Br;
      da.forEach(function (e) {
        Jr[e] = Br(e);
      });
      !(function () {
        function e(e, n) {
          (this.rules = e), (this.componentId = n), (this.isStatic = Dr(e)), gr.registerId(this.componentId + 1);
        }
        (e.prototype.createStyles = function (e, n, t, f) {
          var a = f(Za(Er(this.rules, n, t, f)), ""),
            r = this.componentId + e;
          t.insertRules(r, r, a);
        }),
          (e.prototype.removeStyles = function (e, n) {
            n.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, n, t, f) {
            e > 2 && gr.registerId(this.componentId + e), this.removeStyles(e, t), this.createStyles(e, n, t, f);
          });
      })();
      (function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var n = e.instance.toString();
            if (!n) return "";
            var t = or(),
              f = Za(
                [t && 'nonce="'.concat(t, '"'), "".concat(ta, '="true"'), "".concat(aa, '="').concat(ra, '"')].filter(
                  Boolean
                ),
                " "
              );
            return "<style ".concat(f, ">").concat(n, "</style>");
          }),
            (this.getStyleTags = function () {
              if (e.sealed) throw Va(2);
              return e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (e.sealed) throw Va(2);
              var t = e.instance.toString();
              if (!t) return [];
              var a = (((n = {})[ta] = ""), (n[aa] = ra), (n.dangerouslySetInnerHTML = { __html: t }), n),
                r = or();
              return r && (a.nonce = r), [f.createElement("style", Kt({}, a, { key: "sc-0-0" }))];
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new gr({ isServer: !0 })),
            (this.sealed = !1);
        }
        (e.prototype.collectStyles = function (e) {
          if (this.sealed) throw Va(2);
          return f.createElement(jr, { sheet: this.instance }, e);
        }),
          (e.prototype.interleaveWithNodeStream = function (e) {
            throw Va(3);
          });
      })(),
        "__sc-".concat(ta, "__");
      const _r = t.p + "static/media/robot.0617a41936621e9697cd.gif";
      var Gr = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        Zr = f.createContext && f.createContext(Gr),
        Hr = ["attr", "size", "title"];
      function Fr(e, n) {
        if (null == e) return {};
        var t,
          f,
          a = (function (e, n) {
            if (null == e) return {};
            var t = {};
            for (var f in e)
              if (Object.prototype.hasOwnProperty.call(e, f)) {
                if (n.indexOf(f) >= 0) continue;
                t[f] = e[f];
              }
            return t;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (f = 0; f < r.length; f++)
            (t = r[f]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
        }
        return a;
      }
      function Wr() {
        return (
          (Wr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && (e[f] = t[f]);
                }
                return e;
              }),
          Wr.apply(this, arguments)
        );
      }
      function Vr(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(e);
          n &&
            (f = f.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, f);
        }
        return t;
      }
      function Kr(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Vr(Object(t), !0).forEach(function (n) {
                Xr(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Vr(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      function Xr(e, n, t) {
        return (
          (n = (function (e) {
            var n = (function (e, n) {
              if ("object" != typeof e || !e) return e;
              var t = e[Symbol.toPrimitive];
              if (void 0 !== t) {
                var f = t.call(e, n || "default");
                if ("object" != typeof f) return f;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === n ? String : Number)(e);
            })(e, "string");
            return "symbol" == typeof n ? n : n + "";
          })(n)) in e
            ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[n] = t),
          e
        );
      }
      function qr(e) {
        return e && e.map((e, n) => f.createElement(e.tag, Kr({ key: n }, e.attr), qr(e.child)));
      }
      function $r(e) {
        return (n) => f.createElement(ei, Wr({ attr: Kr({}, e.attr) }, n), qr(e.child));
      }
      function ei(e) {
        var n = (n) => {
          var t,
            { attr: a, size: r, title: i } = e,
            o = Fr(e, Hr),
            u = r || n.size || "1em";
          return (
            n.className && (t = n.className),
            e.className && (t = (t ? t + " " : "") + e.className),
            f.createElement(
              "svg",
              Wr({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, a, o, {
                className: t,
                style: Kr(Kr({ color: e.color || n.color }, n.style), e.style),
                height: u,
                width: u,
                xmlns: "http://www.w3.org/2000/svg",
              }),
              i && f.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== Zr ? f.createElement(Zr.Consumer, null, (e) => n(e)) : n(Gr);
      }
      function ni(e) {
        return $r({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8",
              },
              child: [],
            },
          ],
        })(e);
      }
      function ti(e) {
        return [].concat(e);
      }
      function fi(e) {
        return e.startsWith(":");
      }
      function ai(e) {
        return ui(e) && ("*" === e || (e.length > 1 && ":>~.+*".includes(e.slice(0, 1))) || si(e));
      }
      function ri(e, n) {
        return (ui(n) || "number" === typeof n) && !oi(e) && !fi(e) && !ii(e);
      }
      function ii(e) {
        return e.startsWith("@media");
      }
      function oi(e) {
        return "--" === e;
      }
      function ui(e) {
        return e + "" === e;
      }
      function si(e) {
        return ui(e) && (e.startsWith("&") || fi(e));
      }
      function li(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return e.filter(Boolean).join(n);
      }
      function ci(e, n) {
        let t = 0;
        if (0 === n.length) return t.toString();
        for (let f = 0; f < n.length; f++) {
          (t = (t << 5) - t + n.charCodeAt(f)), (t |= 0);
        }
        return `${e ?? "cl"}_${t.toString(36)}`;
      }
      function di(e, n) {
        return `${e}:${n}`;
      }
      var pi = class e {
        constructor(e, n, t, f) {
          (this.sheet = e),
            (this.property = n),
            (this.value = t),
            (this.selector = f),
            (this.property = n),
            (this.value = t),
            (this.joined = di(n, t));
          const a = this.selector.preconditions.concat(this.selector.postconditions);
          (this.hash = this.selector.hasConditions ? this.selector.scopeClassName : ci(this.sheet.name, this.joined)),
            (this.key = li([this.joined, a, this.hash]));
        }
        toString() {
          let n = gi(this.selector.preconditions, { right: this.hash });
          return (n = gi(this.selector.postconditions, { left: n })), `${n} {${e.genRule(this.property, this.value)}}`;
        }
        static genRule(e, n) {
          return (
            di(
              e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              (function (e, n) {
                return "content" === e ? `"${n}"` : n;
              })(e, n)
            ) + ";"
          );
        }
      };
      function gi(e) {
        let { left: n = "", right: t = "" } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const f = e.reduce((e, n) => (fi(n) ? e + n : si(n) ? e + n.slice(1) : li([e, n], " ")), n);
        return li([f, ((a = t), a ? `.${a}` : "")], " ");
        var a;
      }
      var hi,
        mi = class e {
          constructor(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              { preconditions: t, postconditions: f } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            (this.sheet = e),
              (this.preconditions = []),
              (this.scopeClassName = null),
              (this.scopeName = null),
              (this.postconditions = []),
              (this.preconditions = t ? ti(t) : []),
              (this.postconditions = f ? ti(f) : []),
              this.setScope(n);
          }
          setScope(e) {
            return e
              ? (this.scopeClassName ||
                  ((this.scopeName = e), (this.scopeClassName = ci(this.sheet.name, e + this.sheet.count))),
                this)
              : this;
          }
          get hasConditions() {
            return this.preconditions.length > 0 || this.postconditions.length > 0;
          }
          addScope(n) {
            return new e(this.sheet, n, { preconditions: this.preconditions, postconditions: this.postconditions });
          }
          addPrecondition(n) {
            return new e(this.sheet, this.scopeClassName, {
              postconditions: this.postconditions,
              preconditions: this.preconditions.concat(n),
            });
          }
          addPostcondition(n) {
            return new e(this.sheet, this.scopeClassName, {
              preconditions: this.preconditions,
              postconditions: this.postconditions.concat(n),
            });
          }
          createRule(e, n) {
            return new pi(this.sheet, e, n, this);
          }
        },
        wi = class {
          constructor(e, n) {
            (this.name = e),
              (this.rootNode = n),
              (this.storedStyles = {}),
              (this.storedClasses = {}),
              (this.style = ""),
              (this.count = 0),
              (this.id = `flairup-${e}`),
              (this.styleTag = this.createStyleTag());
          }
          getStyle() {
            return this.style;
          }
          append(e) {
            this.style = (function (e, n) {
              return e ? `${e}\n${n}` : n;
            })(this.style, e);
          }
          apply() {
            this.count++, this.styleTag && (this.styleTag.innerHTML = this.style);
          }
          isApplied() {
            return !!this.styleTag;
          }
          createStyleTag() {
            if ("undefined" === typeof document || this.isApplied() || null === this.rootNode) return this.styleTag;
            const e = document.createElement("style");
            return (e.type = "text/css"), (e.id = this.id), (this.rootNode ?? document.head).appendChild(e), e;
          }
          addRule(e) {
            const n = this.storedClasses[e.key];
            return ui(n)
              ? n
              : ((this.storedClasses[e.key] = e.hash),
                (this.storedStyles[e.hash] = [e.property, e.value]),
                this.append(e.toString()),
                e.hash);
          }
        };
      function bi(e, n) {
        for (const t in e) n(t.trim(), e[t]);
      }
      function yi() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        const f = n.reduce(
          (e, n) => (
            n instanceof Set
              ? e.push(...n)
              : "string" === typeof n
              ? e.push(n)
              : Array.isArray(n)
              ? e.push(yi(...n))
              : "object" === typeof n &&
                Object.entries(n).forEach((n) => {
                  let [t, f] = n;
                  f && e.push(t);
                }),
            e
          ),
          []
        );
        return li(f, " ").trim();
      }
      function Li(e, n) {
        const t = new wi(e, n);
        return {
          create: function (e) {
            const n = {};
            return (
              Mi(t, e, new mi(t)).forEach((e) => {
                let [f, a, r] = e;
                vi(t, a, r).forEach((e) => {
                  !(function (e, t) {
                    (n[e] = n[e] ?? new Set()), n[e].add(t);
                  })(f, e);
                });
              }),
              t.apply(),
              n
            );
          },
          getStyle: t.getStyle.bind(t),
          isApplied: t.isApplied.bind(t),
        };
      }
      function Mi(e, n, t) {
        const f = [];
        return (
          bi(n, (a, r) => {
            if (ai(a)) return Mi(e, r, t.addPrecondition(a)).forEach((e) => f.push(e));
            f.push([a, n[a], t.addScope(a)]);
          }),
          f
        );
      }
      function vi(e, n, t) {
        const f = new Set();
        return (
          bi(n, (n, a) => {
            let r = [];
            if (ai(n)) r = vi(e, a, t.addPostcondition(n));
            else if (
              (function (e) {
                return "." === e;
              })(n)
            )
              r = ti(a);
            else if (ii(n))
              r = (function (e, n, t, f) {
                e.append(t + " {");
                const a = vi(e, n, f);
                return e.append("}"), a;
              })(e, a, n, t);
            else if (oi(n))
              r = (function (e, n, t) {
                const f = new Set(),
                  a = [];
                if (
                  (bi(n, (n, r) => {
                    if (ri(n, r)) return void a.push(pi.genRule(n, r));
                    Ci(vi(e, r ?? {}, t), f);
                  }),
                  !t.scopeClassName)
                )
                  return f;
                if (a.length) {
                  const n = a.join(" ");
                  e.append(`${gi(t.preconditions, { right: t.scopeClassName })} {${n}}`);
                }
                return f.add(t.scopeClassName), f;
              })(e, a, t);
            else if (ri(n, a)) {
              const r = t.createRule(n, a);
              e.addRule(r), f.add(r.hash);
            }
            return Ci(r, f);
          }),
          f
        );
      }
      function Ci(e, n) {
        return e.forEach((e) => n.add(e)), n;
      }
      function ji() {
        return (
          (ji = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && (e[f] = t[f]);
                }
                return e;
              }),
          ji.apply(this, arguments)
        );
      }
      function ki(e, n) {
        return (
          (ki = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, n) {
                return (e.__proto__ = n), e;
              }),
          ki(e, n)
        );
      }
      function Ii(e, n) {
        if (null == e) return {};
        var t,
          f,
          a = {},
          r = Object.keys(e);
        for (f = 0; f < r.length; f++) (t = r[f]), n.indexOf(t) >= 0 || (a[t] = e[t]);
        return a;
      }
      function Si(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, f = new Array(n); t < n; t++) f[t] = e[t];
        return f;
      }
      function Ni(e, n) {
        var t = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (t) return (t = t.call(e)).next.bind(t);
        if (
          Array.isArray(e) ||
          (t = (function (e, n) {
            if (e) {
              if ("string" === typeof e) return Si(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(e)
                  : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Si(e, n)
                  : void 0
              );
            }
          })(e)) ||
          (n && e && "number" === typeof e.length)
        ) {
          t && (e = t);
          var f = 0;
          return function () {
            return f >= e.length ? { done: !0 } : { done: !1, value: e[f++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function Ti() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return n
          .map(function (e) {
            return "." + e;
          })
          .join("");
      }
      !(function (e) {
        (e.hiddenOnSearch = "epr-hidden-on-search"),
          (e.searchActive = "epr-search-active"),
          (e.hidden = "epr-hidden"),
          (e.visible = "epr-visible"),
          (e.active = "epr-active"),
          (e.emoji = "epr-emoji"),
          (e.category = "epr-emoji-category"),
          (e.label = "epr-emoji-category-label"),
          (e.categoryContent = "epr-emoji-category-content"),
          (e.emojiHasVariations = "epr-emoji-has-variations"),
          (e.scrollBody = "epr-body"),
          (e.emojiList = "epr-emoji-list"),
          (e.external = "__EmojiPicker__"),
          (e.emojiPicker = "EmojiPickerReact"),
          (e.open = "epr-open"),
          (e.vertical = "epr-vertical"),
          (e.horizontal = "epr-horizontal"),
          (e.variationPicker = "epr-emoji-variation-picker"),
          (e.darkTheme = "epr-dark-theme"),
          (e.autoTheme = "epr-auto-theme");
      })(hi || (hi = {}));
      var Ei = Li("epr", null),
        Di = { display: "none", opacity: "0", pointerEvents: "none", visibility: "hidden", overflow: "hidden" },
        xi = Ei.create({ hidden: ji({ ".": hi.hidden }, Di) }),
        zi = (0, f.memo)(function () {
          return (0,
          f.createElement)("style", { suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: Ei.getStyle() } });
        }),
        Ai = Ei.create({
          ".epr-main": {
            ":has(input:not(:placeholder-shown))": {
              categoryBtn: {
                ":hover": { opacity: "1", backgroundPositionY: "var(--epr-category-navigation-button-size)" },
              },
              hiddenOnSearch: ji({ ".": hi.hiddenOnSearch }, Di),
            },
            ":has(input(:placeholder-shown))": { visibleOnSearchOnly: Di },
          },
          hiddenOnReactions: { transition: "all 0.5s ease-in-out" },
          ".epr-reactions": {
            hiddenOnReactions: { height: "0px", width: "0px", opacity: "0", pointerEvents: "none", overflow: "hidden" },
          },
          ".EmojiPickerReact:not(.epr-search-active)": {
            categoryBtn: {
              ":hover": { opacity: "1", backgroundPositionY: "var(--epr-category-navigation-button-size)" },
              "&.epr-active": { opacity: "1", backgroundPositionY: "var(--epr-category-navigation-button-size)" },
            },
            visibleOnSearchOnly: ji({ ".": "epr-visible-on-search-only" }, Di),
          },
        });
      function Pi(e, n) {
        var t, f;
        return {
          ".epr-dark-theme": ((t = {}), (t[e] = n), t),
          ".epr-auto-theme": ((f = {}), (f[e] = { "@media (prefers-color-scheme: dark)": n }), f),
        };
      }
      function Oi(e, n) {
        var t,
          f,
          a = null != (t = e.customEmojis) ? t : [],
          r = null != (f = n.customEmojis) ? f : [];
        return (
          e.open === n.open &&
          e.emojiVersion === n.emojiVersion &&
          e.reactionsDefaultOpen === n.reactionsDefaultOpen &&
          e.searchPlaceHolder === n.searchPlaceHolder &&
          e.searchPlaceholder === n.searchPlaceholder &&
          e.defaultSkinTone === n.defaultSkinTone &&
          e.skinTonesDisabled === n.skinTonesDisabled &&
          e.autoFocusSearch === n.autoFocusSearch &&
          e.emojiStyle === n.emojiStyle &&
          e.theme === n.theme &&
          e.suggestedEmojisMode === n.suggestedEmojisMode &&
          e.lazyLoadEmojis === n.lazyLoadEmojis &&
          e.className === n.className &&
          e.height === n.height &&
          e.width === n.width &&
          e.style === n.style &&
          e.searchDisabled === n.searchDisabled &&
          e.skinTonePickerLocation === n.skinTonePickerLocation &&
          a.length === r.length
        );
      }
      var Ri,
        Qi,
        Yi,
        Ui,
        Bi,
        Ji,
        _i,
        Gi = ["1f44d", "2764-fe0f", "1f603", "1f622", "1f64f", "1f44e", "1f621"];
      !(function (e) {
        (e.RECENT = "recent"), (e.FREQUENT = "frequent");
      })(Ri || (Ri = {})),
        (function (e) {
          (e.NATIVE = "native"),
            (e.APPLE = "apple"),
            (e.TWITTER = "twitter"),
            (e.GOOGLE = "google"),
            (e.FACEBOOK = "facebook");
        })(Qi || (Qi = {})),
        (function (e) {
          (e.DARK = "dark"), (e.LIGHT = "light"), (e.AUTO = "auto");
        })(Yi || (Yi = {})),
        (function (e) {
          (e.NEUTRAL = "neutral"),
            (e.LIGHT = "1f3fb"),
            (e.MEDIUM_LIGHT = "1f3fc"),
            (e.MEDIUM = "1f3fd"),
            (e.MEDIUM_DARK = "1f3fe"),
            (e.DARK = "1f3ff");
        })(Ui || (Ui = {})),
        (function (e) {
          (e.SUGGESTED = "suggested"),
            (e.CUSTOM = "custom"),
            (e.SMILEYS_PEOPLE = "smileys_people"),
            (e.ANIMALS_NATURE = "animals_nature"),
            (e.FOOD_DRINK = "food_drink"),
            (e.TRAVEL_PLACES = "travel_places"),
            (e.ACTIVITIES = "activities"),
            (e.OBJECTS = "objects"),
            (e.SYMBOLS = "symbols"),
            (e.FLAGS = "flags");
        })(Bi || (Bi = {})),
        (function (e) {
          (e.SEARCH = "SEARCH"), (e.PREVIEW = "PREVIEW");
        })(Ji || (Ji = {}));
      var Zi = [
          Bi.SUGGESTED,
          Bi.CUSTOM,
          Bi.SMILEYS_PEOPLE,
          Bi.ANIMALS_NATURE,
          Bi.FOOD_DRINK,
          Bi.TRAVEL_PLACES,
          Bi.ACTIVITIES,
          Bi.OBJECTS,
          Bi.SYMBOLS,
          Bi.FLAGS,
        ],
        Hi = { name: "Recently Used", category: Bi.SUGGESTED },
        Fi =
          (((_i = {})[Bi.SUGGESTED] = { category: Bi.SUGGESTED, name: "Frequently Used" }),
          (_i[Bi.CUSTOM] = { category: Bi.CUSTOM, name: "Custom Emojis" }),
          (_i[Bi.SMILEYS_PEOPLE] = { category: Bi.SMILEYS_PEOPLE, name: "Smileys & People" }),
          (_i[Bi.ANIMALS_NATURE] = { category: Bi.ANIMALS_NATURE, name: "Animals & Nature" }),
          (_i[Bi.FOOD_DRINK] = { category: Bi.FOOD_DRINK, name: "Food & Drink" }),
          (_i[Bi.TRAVEL_PLACES] = { category: Bi.TRAVEL_PLACES, name: "Travel & Places" }),
          (_i[Bi.ACTIVITIES] = { category: Bi.ACTIVITIES, name: "Activities" }),
          (_i[Bi.OBJECTS] = { category: Bi.OBJECTS, name: "Objects" }),
          (_i[Bi.SYMBOLS] = { category: Bi.SYMBOLS, name: "Symbols" }),
          (_i[Bi.FLAGS] = { category: Bi.FLAGS, name: "Flags" }),
          _i);
      function Wi(e) {
        return Zi.map(function (n) {
          return ji({}, Fi[n], e && e[n] && e[n]);
        });
      }
      function Vi(e) {
        return e.category;
      }
      function Ki(e) {
        return e.name;
      }
      function Xi(e, n) {
        return void 0 === n && (n = {}), Object.assign(Fi[e], n);
      }
      var qi = "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/",
        $i = "https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/",
        eo = "https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/",
        no = "https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";
      var to,
        fo = {
          custom: [],
          smileys_people: [
            { n: ["grinning", "grinning face"], u: "1f600", a: "1.0" },
            { n: ["smiley", "smiling face with open mouth"], u: "1f603", a: "0.6" },
            { n: ["smile", "smiling face with open mouth and smiling eyes"], u: "1f604", a: "0.6" },
            { n: ["grin", "grinning face with smiling eyes"], u: "1f601", a: "0.6" },
            {
              n: ["laughing", "satisfied", "smiling face with open mouth and tightly-closed eyes"],
              u: "1f606",
              a: "0.6",
            },
            { n: ["sweat smile", "smiling face with open mouth and cold sweat"], u: "1f605", a: "0.6" },
            { n: ["rolling on the floor laughing"], u: "1f923", a: "3.0" },
            { n: ["joy", "face with tears of joy"], u: "1f602", a: "0.6" },
            { n: ["slightly smiling face"], u: "1f642", a: "1.0" },
            { n: ["upside-down face", "upside down face"], u: "1f643", a: "1.0" },
            { n: ["melting face"], u: "1fae0", a: "14.0" },
            { n: ["wink", "winking face"], u: "1f609", a: "0.6" },
            { n: ["blush", "smiling face with smiling eyes"], u: "1f60a", a: "0.6" },
            { n: ["innocent", "smiling face with halo"], u: "1f607", a: "1.0" },
            {
              n: ["smiling face with 3 hearts", "smiling face with smiling eyes and three hearts"],
              u: "1f970",
              a: "11.0",
            },
            { n: ["heart eyes", "smiling face with heart-shaped eyes"], u: "1f60d", a: "0.6" },
            { n: ["star-struck", "grinning face with star eyes"], u: "1f929", a: "5.0" },
            { n: ["kissing heart", "face throwing a kiss"], u: "1f618", a: "0.6" },
            { n: ["kissing", "kissing face"], u: "1f617", a: "1.0" },
            { n: ["relaxed", "white smiling face"], u: "263a-fe0f", a: "0.6" },
            { n: ["kissing closed eyes", "kissing face with closed eyes"], u: "1f61a", a: "0.6" },
            { n: ["kissing smiling eyes", "kissing face with smiling eyes"], u: "1f619", a: "1.0" },
            { n: ["smiling face with tear"], u: "1f972", a: "13.0" },
            { n: ["yum", "face savouring delicious food"], u: "1f60b", a: "0.6" },
            { n: ["stuck out tongue", "face with stuck-out tongue"], u: "1f61b", a: "1.0" },
            { n: ["stuck out tongue winking eye", "face with stuck-out tongue and winking eye"], u: "1f61c", a: "0.6" },
            { n: ["zany face", "grinning face with one large and one small eye"], u: "1f92a", a: "5.0" },
            {
              n: ["stuck out tongue closed eyes", "face with stuck-out tongue and tightly-closed eyes"],
              u: "1f61d",
              a: "0.6",
            },
            { n: ["money-mouth face", "money mouth face"], u: "1f911", a: "1.0" },
            { n: ["hugging face"], u: "1f917", a: "1.0" },
            {
              n: ["face with hand over mouth", "smiling face with smiling eyes and hand covering mouth"],
              u: "1f92d",
              a: "5.0",
            },
            { n: ["face with open eyes and hand over mouth"], u: "1fae2", a: "14.0" },
            { n: ["face with peeking eye"], u: "1fae3", a: "14.0" },
            { n: ["shushing face", "face with finger covering closed lips"], u: "1f92b", a: "5.0" },
            { n: ["thinking face"], u: "1f914", a: "1.0" },
            { n: ["saluting face"], u: "1fae1", a: "14.0" },
            { n: ["zipper-mouth face", "zipper mouth face"], u: "1f910", a: "1.0" },
            { n: ["face with raised eyebrow", "face with one eyebrow raised"], u: "1f928", a: "5.0" },
            { n: ["neutral face"], u: "1f610", a: "0.7" },
            { n: ["expressionless", "expressionless face"], u: "1f611", a: "1.0" },
            { n: ["no mouth", "face without mouth"], u: "1f636", a: "1.0" },
            { n: ["dotted line face"], u: "1fae5", a: "14.0" },
            { n: ["face in clouds"], u: "1f636-200d-1f32b-fe0f", a: "13.1" },
            { n: ["smirk", "smirking face"], u: "1f60f", a: "0.6" },
            { n: ["unamused", "unamused face"], u: "1f612", a: "0.6" },
            { n: ["face with rolling eyes"], u: "1f644", a: "1.0" },
            { n: ["grimacing", "grimacing face"], u: "1f62c", a: "1.0" },
            { n: ["face exhaling"], u: "1f62e-200d-1f4a8", a: "13.1" },
            { n: ["lying face"], u: "1f925", a: "3.0" },
            { n: ["relieved", "relieved face"], u: "1f60c", a: "0.6" },
            { n: ["pensive", "pensive face"], u: "1f614", a: "0.6" },
            { n: ["sleepy", "sleepy face"], u: "1f62a", a: "0.6" },
            { n: ["drooling face"], u: "1f924", a: "3.0" },
            { n: ["sleeping", "sleeping face"], u: "1f634", a: "1.0" },
            { n: ["mask", "face with medical mask"], u: "1f637", a: "0.6" },
            { n: ["face with thermometer"], u: "1f912", a: "1.0" },
            { n: ["face with head-bandage", "face with head bandage"], u: "1f915", a: "1.0" },
            { n: ["nauseated face"], u: "1f922", a: "3.0" },
            { n: ["face vomiting", "face with open mouth vomiting"], u: "1f92e", a: "5.0" },
            { n: ["sneezing face"], u: "1f927", a: "3.0" },
            { n: ["hot face", "overheated face"], u: "1f975", a: "11.0" },
            { n: ["cold face", "freezing face"], u: "1f976", a: "11.0" },
            { n: ["woozy face", "face with uneven eyes and wavy mouth"], u: "1f974", a: "11.0" },
            { n: ["dizzy face"], u: "1f635", a: "0.6" },
            { n: ["face with spiral eyes"], u: "1f635-200d-1f4ab", a: "13.1" },
            { n: ["exploding head", "shocked face with exploding head"], u: "1f92f", a: "5.0" },
            { n: ["face with cowboy hat"], u: "1f920", a: "3.0" },
            { n: ["partying face", "face with party horn and party hat"], u: "1f973", a: "11.0" },
            { n: ["disguised face"], u: "1f978", a: "13.0" },
            { n: ["sunglasses", "smiling face with sunglasses"], u: "1f60e", a: "1.0" },
            { n: ["nerd face"], u: "1f913", a: "1.0" },
            { n: ["face with monocle"], u: "1f9d0", a: "5.0" },
            { n: ["confused", "confused face"], u: "1f615", a: "1.0" },
            { n: ["face with diagonal mouth"], u: "1fae4", a: "14.0" },
            { n: ["worried", "worried face"], u: "1f61f", a: "1.0" },
            { n: ["slightly frowning face"], u: "1f641", a: "1.0" },
            { n: ["frowning face", "white frowning face"], u: "2639-fe0f", a: "0.7" },
            { n: ["open mouth", "face with open mouth"], u: "1f62e", a: "1.0" },
            { n: ["hushed", "hushed face"], u: "1f62f", a: "1.0" },
            { n: ["astonished", "astonished face"], u: "1f632", a: "0.6" },
            { n: ["flushed", "flushed face"], u: "1f633", a: "0.6" },
            { n: ["pleading face", "face with pleading eyes"], u: "1f97a", a: "11.0" },
            { n: ["face holding back tears"], u: "1f979", a: "14.0" },
            { n: ["frowning", "frowning face with open mouth"], u: "1f626", a: "1.0" },
            { n: ["anguished", "anguished face"], u: "1f627", a: "1.0" },
            { n: ["fearful", "fearful face"], u: "1f628", a: "0.6" },
            { n: ["cold sweat", "face with open mouth and cold sweat"], u: "1f630", a: "0.6" },
            { n: ["disappointed relieved", "disappointed but relieved face"], u: "1f625", a: "0.6" },
            { n: ["cry", "crying face"], u: "1f622", a: "0.6" },
            { n: ["sob", "loudly crying face"], u: "1f62d", a: "0.6" },
            { n: ["scream", "face screaming in fear"], u: "1f631", a: "0.6" },
            { n: ["confounded", "confounded face"], u: "1f616", a: "0.6" },
            { n: ["persevere", "persevering face"], u: "1f623", a: "0.6" },
            { n: ["disappointed", "disappointed face"], u: "1f61e", a: "0.6" },
            { n: ["sweat", "face with cold sweat"], u: "1f613", a: "0.6" },
            { n: ["weary", "weary face"], u: "1f629", a: "0.6" },
            { n: ["tired face"], u: "1f62b", a: "0.6" },
            { n: ["yawning face"], u: "1f971", a: "12.0" },
            { n: ["triumph", "face with look of triumph"], u: "1f624", a: "0.6" },
            { n: ["rage", "pouting face"], u: "1f621", a: "0.6" },
            { n: ["angry", "angry face"], u: "1f620", a: "0.6" },
            { n: ["face with symbols on mouth", "serious face with symbols covering mouth"], u: "1f92c", a: "5.0" },
            { n: ["smiling imp", "smiling face with horns"], u: "1f608", a: "1.0" },
            { n: ["imp"], u: "1f47f", a: "0.6" },
            { n: ["skull"], u: "1f480", a: "0.6" },
            { n: ["skull and crossbones"], u: "2620-fe0f", a: "1.0" },
            { n: ["poop", "shit", "hankey", "pile of poo"], u: "1f4a9", a: "0.6" },
            { n: ["clown face"], u: "1f921", a: "3.0" },
            { n: ["japanese ogre"], u: "1f479", a: "0.6" },
            { n: ["japanese goblin"], u: "1f47a", a: "0.6" },
            { n: ["ghost"], u: "1f47b", a: "0.6" },
            { n: ["alien", "extraterrestrial alien"], u: "1f47d", a: "0.6" },
            { n: ["alien monster", "space invader"], u: "1f47e", a: "0.6" },
            { n: ["robot face"], u: "1f916", a: "1.0" },
            { n: ["smiley cat", "smiling cat face with open mouth"], u: "1f63a", a: "0.6" },
            { n: ["smile cat", "grinning cat face with smiling eyes"], u: "1f638", a: "0.6" },
            { n: ["joy cat", "cat face with tears of joy"], u: "1f639", a: "0.6" },
            { n: ["heart eyes cat", "smiling cat face with heart-shaped eyes"], u: "1f63b", a: "0.6" },
            { n: ["smirk cat", "cat face with wry smile"], u: "1f63c", a: "0.6" },
            { n: ["kissing cat", "kissing cat face with closed eyes"], u: "1f63d", a: "0.6" },
            { n: ["scream cat", "weary cat face"], u: "1f640", a: "0.6" },
            { n: ["crying cat face"], u: "1f63f", a: "0.6" },
            { n: ["pouting cat", "pouting cat face"], u: "1f63e", a: "0.6" },
            { n: ["see no evil", "see-no-evil monkey"], u: "1f648", a: "0.6" },
            { n: ["hear no evil", "hear-no-evil monkey"], u: "1f649", a: "0.6" },
            { n: ["speak no evil", "speak-no-evil monkey"], u: "1f64a", a: "0.6" },
            { n: ["kiss", "kiss mark"], u: "1f48b", a: "0.6" },
            { n: ["love letter"], u: "1f48c", a: "0.6" },
            { n: ["cupid", "heart with arrow"], u: "1f498", a: "0.6" },
            { n: ["gift heart", "heart with ribbon"], u: "1f49d", a: "0.6" },
            { n: ["sparkling heart"], u: "1f496", a: "0.6" },
            { n: ["heartpulse", "growing heart"], u: "1f497", a: "0.6" },
            { n: ["heartbeat", "beating heart"], u: "1f493", a: "0.6" },
            { n: ["revolving hearts"], u: "1f49e", a: "0.6" },
            { n: ["two hearts"], u: "1f495", a: "0.6" },
            { n: ["heart decoration"], u: "1f49f", a: "0.6" },
            { n: ["heart exclamation", "heavy heart exclamation mark ornament"], u: "2763-fe0f", a: "1.0" },
            { n: ["broken heart"], u: "1f494", a: "0.6" },
            { n: ["heart on fire"], u: "2764-fe0f-200d-1f525", a: "13.1" },
            { n: ["mending heart"], u: "2764-fe0f-200d-1fa79", a: "13.1" },
            { n: ["heart", "heavy black heart"], u: "2764-fe0f", a: "0.6" },
            { n: ["orange heart"], u: "1f9e1", a: "5.0" },
            { n: ["yellow heart"], u: "1f49b", a: "0.6" },
            { n: ["green heart"], u: "1f49a", a: "0.6" },
            { n: ["blue heart"], u: "1f499", a: "0.6" },
            { n: ["purple heart"], u: "1f49c", a: "0.6" },
            { n: ["brown heart"], u: "1f90e", a: "12.0" },
            { n: ["black heart"], u: "1f5a4", a: "3.0" },
            { n: ["white heart"], u: "1f90d", a: "12.0" },
            { n: ["100", "hundred points symbol"], u: "1f4af", a: "0.6" },
            { n: ["anger", "anger symbol"], u: "1f4a2", a: "0.6" },
            { n: ["boom", "collision", "collision symbol"], u: "1f4a5", a: "0.6" },
            { n: ["dizzy", "dizzy symbol"], u: "1f4ab", a: "0.6" },
            { n: ["sweat drops", "splashing sweat symbol"], u: "1f4a6", a: "0.6" },
            { n: ["dash", "dash symbol"], u: "1f4a8", a: "0.6" },
            { n: ["hole"], u: "1f573-fe0f", a: "0.7" },
            { n: ["bomb"], u: "1f4a3", a: "0.6" },
            { n: ["speech balloon"], u: "1f4ac", a: "0.6" },
            { n: ["eye in speech bubble", "eye-in-speech-bubble"], u: "1f441-fe0f-200d-1f5e8-fe0f", a: "2.0" },
            { n: ["left speech bubble"], u: "1f5e8-fe0f", a: "2.0" },
            { n: ["right anger bubble"], u: "1f5ef-fe0f", a: "0.7" },
            { n: ["thought balloon"], u: "1f4ad", a: "1.0" },
            { n: ["zzz", "sleeping symbol"], u: "1f4a4", a: "0.6" },
            {
              n: ["wave", "waving hand sign"],
              u: "1f44b",
              v: ["1f44b-1f3fb", "1f44b-1f3fc", "1f44b-1f3fd", "1f44b-1f3fe", "1f44b-1f3ff"],
              a: "0.6",
            },
            {
              n: ["raised back of hand"],
              u: "1f91a",
              v: ["1f91a-1f3fb", "1f91a-1f3fc", "1f91a-1f3fd", "1f91a-1f3fe", "1f91a-1f3ff"],
              a: "3.0",
            },
            {
              n: ["hand with fingers splayed", "raised hand with fingers splayed"],
              u: "1f590-fe0f",
              v: ["1f590-1f3fb", "1f590-1f3fc", "1f590-1f3fd", "1f590-1f3fe", "1f590-1f3ff"],
              a: "0.7",
            },
            {
              n: ["hand", "raised hand"],
              u: "270b",
              v: ["270b-1f3fb", "270b-1f3fc", "270b-1f3fd", "270b-1f3fe", "270b-1f3ff"],
              a: "0.6",
            },
            {
              n: ["spock-hand", "raised hand with part between middle and ring fingers"],
              u: "1f596",
              v: ["1f596-1f3fb", "1f596-1f3fc", "1f596-1f3fd", "1f596-1f3fe", "1f596-1f3ff"],
              a: "1.0",
            },
            {
              n: ["rightwards hand"],
              u: "1faf1",
              v: ["1faf1-1f3fb", "1faf1-1f3fc", "1faf1-1f3fd", "1faf1-1f3fe", "1faf1-1f3ff"],
              a: "14.0",
            },
            {
              n: ["leftwards hand"],
              u: "1faf2",
              v: ["1faf2-1f3fb", "1faf2-1f3fc", "1faf2-1f3fd", "1faf2-1f3fe", "1faf2-1f3ff"],
              a: "14.0",
            },
            {
              n: ["palm down hand"],
              u: "1faf3",
              v: ["1faf3-1f3fb", "1faf3-1f3fc", "1faf3-1f3fd", "1faf3-1f3fe", "1faf3-1f3ff"],
              a: "14.0",
            },
            {
              n: ["palm up hand"],
              u: "1faf4",
              v: ["1faf4-1f3fb", "1faf4-1f3fc", "1faf4-1f3fd", "1faf4-1f3fe", "1faf4-1f3ff"],
              a: "14.0",
            },
            {
              n: ["ok hand", "ok hand sign"],
              u: "1f44c",
              v: ["1f44c-1f3fb", "1f44c-1f3fc", "1f44c-1f3fd", "1f44c-1f3fe", "1f44c-1f3ff"],
              a: "0.6",
            },
            {
              n: ["pinched fingers"],
              u: "1f90c",
              v: ["1f90c-1f3fb", "1f90c-1f3fc", "1f90c-1f3fd", "1f90c-1f3fe", "1f90c-1f3ff"],
              a: "13.0",
            },
            {
              n: ["pinching hand"],
              u: "1f90f",
              v: ["1f90f-1f3fb", "1f90f-1f3fc", "1f90f-1f3fd", "1f90f-1f3fe", "1f90f-1f3ff"],
              a: "12.0",
            },
            {
              n: ["v", "victory hand"],
              u: "270c-fe0f",
              v: ["270c-1f3fb", "270c-1f3fc", "270c-1f3fd", "270c-1f3fe", "270c-1f3ff"],
              a: "0.6",
            },
            {
              n: ["crossed fingers", "hand with index and middle fingers crossed"],
              u: "1f91e",
              v: ["1f91e-1f3fb", "1f91e-1f3fc", "1f91e-1f3fd", "1f91e-1f3fe", "1f91e-1f3ff"],
              a: "3.0",
            },
            {
              n: ["hand with index finger and thumb crossed"],
              u: "1faf0",
              v: ["1faf0-1f3fb", "1faf0-1f3fc", "1faf0-1f3fd", "1faf0-1f3fe", "1faf0-1f3ff"],
              a: "14.0",
            },
            {
              n: ["i love you hand sign"],
              u: "1f91f",
              v: ["1f91f-1f3fb", "1f91f-1f3fc", "1f91f-1f3fd", "1f91f-1f3fe", "1f91f-1f3ff"],
              a: "5.0",
            },
            {
              n: ["the horns", "sign of the horns"],
              u: "1f918",
              v: ["1f918-1f3fb", "1f918-1f3fc", "1f918-1f3fd", "1f918-1f3fe", "1f918-1f3ff"],
              a: "1.0",
            },
            {
              n: ["call me hand"],
              u: "1f919",
              v: ["1f919-1f3fb", "1f919-1f3fc", "1f919-1f3fd", "1f919-1f3fe", "1f919-1f3ff"],
              a: "3.0",
            },
            {
              n: ["point left", "white left pointing backhand index"],
              u: "1f448",
              v: ["1f448-1f3fb", "1f448-1f3fc", "1f448-1f3fd", "1f448-1f3fe", "1f448-1f3ff"],
              a: "0.6",
            },
            {
              n: ["point right", "white right pointing backhand index"],
              u: "1f449",
              v: ["1f449-1f3fb", "1f449-1f3fc", "1f449-1f3fd", "1f449-1f3fe", "1f449-1f3ff"],
              a: "0.6",
            },
            {
              n: ["point up 2", "white up pointing backhand index"],
              u: "1f446",
              v: ["1f446-1f3fb", "1f446-1f3fc", "1f446-1f3fd", "1f446-1f3fe", "1f446-1f3ff"],
              a: "0.6",
            },
            {
              n: ["middle finger", "reversed hand with middle finger extended"],
              u: "1f595",
              v: ["1f595-1f3fb", "1f595-1f3fc", "1f595-1f3fd", "1f595-1f3fe", "1f595-1f3ff"],
              a: "1.0",
            },
            {
              n: ["point down", "white down pointing backhand index"],
              u: "1f447",
              v: ["1f447-1f3fb", "1f447-1f3fc", "1f447-1f3fd", "1f447-1f3fe", "1f447-1f3ff"],
              a: "0.6",
            },
            {
              n: ["point up", "white up pointing index"],
              u: "261d-fe0f",
              v: ["261d-1f3fb", "261d-1f3fc", "261d-1f3fd", "261d-1f3fe", "261d-1f3ff"],
              a: "0.6",
            },
            {
              n: ["index pointing at the viewer"],
              u: "1faf5",
              v: ["1faf5-1f3fb", "1faf5-1f3fc", "1faf5-1f3fd", "1faf5-1f3fe", "1faf5-1f3ff"],
              a: "14.0",
            },
            {
              n: ["+1", "thumbsup", "thumbs up sign"],
              u: "1f44d",
              v: ["1f44d-1f3fb", "1f44d-1f3fc", "1f44d-1f3fd", "1f44d-1f3fe", "1f44d-1f3ff"],
              a: "0.6",
            },
            {
              n: ["-1", "thumbsdown", "thumbs down sign"],
              u: "1f44e",
              v: ["1f44e-1f3fb", "1f44e-1f3fc", "1f44e-1f3fd", "1f44e-1f3fe", "1f44e-1f3ff"],
              a: "0.6",
            },
            {
              n: ["fist", "raised fist"],
              u: "270a",
              v: ["270a-1f3fb", "270a-1f3fc", "270a-1f3fd", "270a-1f3fe", "270a-1f3ff"],
              a: "0.6",
            },
            {
              n: ["punch", "facepunch", "fisted hand sign"],
              u: "1f44a",
              v: ["1f44a-1f3fb", "1f44a-1f3fc", "1f44a-1f3fd", "1f44a-1f3fe", "1f44a-1f3ff"],
              a: "0.6",
            },
            {
              n: ["left-facing fist"],
              u: "1f91b",
              v: ["1f91b-1f3fb", "1f91b-1f3fc", "1f91b-1f3fd", "1f91b-1f3fe", "1f91b-1f3ff"],
              a: "3.0",
            },
            {
              n: ["right-facing fist"],
              u: "1f91c",
              v: ["1f91c-1f3fb", "1f91c-1f3fc", "1f91c-1f3fd", "1f91c-1f3fe", "1f91c-1f3ff"],
              a: "3.0",
            },
            {
              n: ["clap", "clapping hands sign"],
              u: "1f44f",
              v: ["1f44f-1f3fb", "1f44f-1f3fc", "1f44f-1f3fd", "1f44f-1f3fe", "1f44f-1f3ff"],
              a: "0.6",
            },
            {
              n: ["raised hands", "person raising both hands in celebration"],
              u: "1f64c",
              v: ["1f64c-1f3fb", "1f64c-1f3fc", "1f64c-1f3fd", "1f64c-1f3fe", "1f64c-1f3ff"],
              a: "0.6",
            },
            {
              n: ["heart hands"],
              u: "1faf6",
              v: ["1faf6-1f3fb", "1faf6-1f3fc", "1faf6-1f3fd", "1faf6-1f3fe", "1faf6-1f3ff"],
              a: "14.0",
            },
            {
              n: ["open hands", "open hands sign"],
              u: "1f450",
              v: ["1f450-1f3fb", "1f450-1f3fc", "1f450-1f3fd", "1f450-1f3fe", "1f450-1f3ff"],
              a: "0.6",
            },
            {
              n: ["palms up together"],
              u: "1f932",
              v: ["1f932-1f3fb", "1f932-1f3fc", "1f932-1f3fd", "1f932-1f3fe", "1f932-1f3ff"],
              a: "5.0",
            },
            {
              n: ["handshake"],
              u: "1f91d",
              v: [
                "1f91d-1f3fb",
                "1f91d-1f3fc",
                "1f91d-1f3fd",
                "1f91d-1f3fe",
                "1f91d-1f3ff",
                "1faf1-1f3fb-200d-1faf2-1f3fc",
                "1faf1-1f3fb-200d-1faf2-1f3fd",
                "1faf1-1f3fb-200d-1faf2-1f3fe",
                "1faf1-1f3fb-200d-1faf2-1f3ff",
                "1faf1-1f3fc-200d-1faf2-1f3fb",
                "1faf1-1f3fc-200d-1faf2-1f3fd",
                "1faf1-1f3fc-200d-1faf2-1f3fe",
                "1faf1-1f3fc-200d-1faf2-1f3ff",
                "1faf1-1f3fd-200d-1faf2-1f3fb",
                "1faf1-1f3fd-200d-1faf2-1f3fc",
                "1faf1-1f3fd-200d-1faf2-1f3fe",
                "1faf1-1f3fd-200d-1faf2-1f3ff",
                "1faf1-1f3fe-200d-1faf2-1f3fb",
                "1faf1-1f3fe-200d-1faf2-1f3fc",
                "1faf1-1f3fe-200d-1faf2-1f3fd",
                "1faf1-1f3fe-200d-1faf2-1f3ff",
                "1faf1-1f3ff-200d-1faf2-1f3fb",
                "1faf1-1f3ff-200d-1faf2-1f3fc",
                "1faf1-1f3ff-200d-1faf2-1f3fd",
                "1faf1-1f3ff-200d-1faf2-1f3fe",
              ],
              a: "3.0",
            },
            {
              n: ["pray", "person with folded hands"],
              u: "1f64f",
              v: ["1f64f-1f3fb", "1f64f-1f3fc", "1f64f-1f3fd", "1f64f-1f3fe", "1f64f-1f3ff"],
              a: "0.6",
            },
            {
              n: ["writing hand"],
              u: "270d-fe0f",
              v: ["270d-1f3fb", "270d-1f3fc", "270d-1f3fd", "270d-1f3fe", "270d-1f3ff"],
              a: "0.7",
            },
            {
              n: ["nail care", "nail polish"],
              u: "1f485",
              v: ["1f485-1f3fb", "1f485-1f3fc", "1f485-1f3fd", "1f485-1f3fe", "1f485-1f3ff"],
              a: "0.6",
            },
            {
              n: ["selfie"],
              u: "1f933",
              v: ["1f933-1f3fb", "1f933-1f3fc", "1f933-1f3fd", "1f933-1f3fe", "1f933-1f3ff"],
              a: "3.0",
            },
            {
              n: ["muscle", "flexed biceps"],
              u: "1f4aa",
              v: ["1f4aa-1f3fb", "1f4aa-1f3fc", "1f4aa-1f3fd", "1f4aa-1f3fe", "1f4aa-1f3ff"],
              a: "0.6",
            },
            { n: ["mechanical arm"], u: "1f9be", a: "12.0" },
            { n: ["mechanical leg"], u: "1f9bf", a: "12.0" },
            {
              n: ["leg"],
              u: "1f9b5",
              v: ["1f9b5-1f3fb", "1f9b5-1f3fc", "1f9b5-1f3fd", "1f9b5-1f3fe", "1f9b5-1f3ff"],
              a: "11.0",
            },
            {
              n: ["foot"],
              u: "1f9b6",
              v: ["1f9b6-1f3fb", "1f9b6-1f3fc", "1f9b6-1f3fd", "1f9b6-1f3fe", "1f9b6-1f3ff"],
              a: "11.0",
            },
            {
              n: ["ear"],
              u: "1f442",
              v: ["1f442-1f3fb", "1f442-1f3fc", "1f442-1f3fd", "1f442-1f3fe", "1f442-1f3ff"],
              a: "0.6",
            },
            {
              n: ["ear with hearing aid"],
              u: "1f9bb",
              v: ["1f9bb-1f3fb", "1f9bb-1f3fc", "1f9bb-1f3fd", "1f9bb-1f3fe", "1f9bb-1f3ff"],
              a: "12.0",
            },
            {
              n: ["nose"],
              u: "1f443",
              v: ["1f443-1f3fb", "1f443-1f3fc", "1f443-1f3fd", "1f443-1f3fe", "1f443-1f3ff"],
              a: "0.6",
            },
            { n: ["brain"], u: "1f9e0", a: "5.0" },
            { n: ["anatomical heart"], u: "1fac0", a: "13.0" },
            { n: ["lungs"], u: "1fac1", a: "13.0" },
            { n: ["tooth"], u: "1f9b7", a: "11.0" },
            { n: ["bone"], u: "1f9b4", a: "11.0" },
            { n: ["eyes"], u: "1f440", a: "0.6" },
            { n: ["eye"], u: "1f441-fe0f", a: "0.7" },
            { n: ["tongue"], u: "1f445", a: "0.6" },
            { n: ["lips", "mouth"], u: "1f444", a: "0.6" },
            { n: ["biting lip"], u: "1fae6", a: "14.0" },
            {
              n: ["baby"],
              u: "1f476",
              v: ["1f476-1f3fb", "1f476-1f3fc", "1f476-1f3fd", "1f476-1f3fe", "1f476-1f3ff"],
              a: "0.6",
            },
            {
              n: ["child"],
              u: "1f9d2",
              v: ["1f9d2-1f3fb", "1f9d2-1f3fc", "1f9d2-1f3fd", "1f9d2-1f3fe", "1f9d2-1f3ff"],
              a: "5.0",
            },
            {
              n: ["boy"],
              u: "1f466",
              v: ["1f466-1f3fb", "1f466-1f3fc", "1f466-1f3fd", "1f466-1f3fe", "1f466-1f3ff"],
              a: "0.6",
            },
            {
              n: ["girl"],
              u: "1f467",
              v: ["1f467-1f3fb", "1f467-1f3fc", "1f467-1f3fd", "1f467-1f3fe", "1f467-1f3ff"],
              a: "0.6",
            },
            {
              n: ["adult"],
              u: "1f9d1",
              v: ["1f9d1-1f3fb", "1f9d1-1f3fc", "1f9d1-1f3fd", "1f9d1-1f3fe", "1f9d1-1f3ff"],
              a: "5.0",
            },
            {
              n: ["person with blond hair"],
              u: "1f471",
              v: ["1f471-1f3fb", "1f471-1f3fc", "1f471-1f3fd", "1f471-1f3fe", "1f471-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man"],
              u: "1f468",
              v: ["1f468-1f3fb", "1f468-1f3fc", "1f468-1f3fd", "1f468-1f3fe", "1f468-1f3ff"],
              a: "0.6",
            },
            {
              n: ["bearded person"],
              u: "1f9d4",
              v: ["1f9d4-1f3fb", "1f9d4-1f3fc", "1f9d4-1f3fd", "1f9d4-1f3fe", "1f9d4-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man: beard", "man with beard"],
              u: "1f9d4-200d-2642-fe0f",
              v: [
                "1f9d4-1f3fb-200d-2642-fe0f",
                "1f9d4-1f3fc-200d-2642-fe0f",
                "1f9d4-1f3fd-200d-2642-fe0f",
                "1f9d4-1f3fe-200d-2642-fe0f",
                "1f9d4-1f3ff-200d-2642-fe0f",
              ],
              a: "13.1",
            },
            {
              n: ["woman: beard", "woman with beard"],
              u: "1f9d4-200d-2640-fe0f",
              v: [
                "1f9d4-1f3fb-200d-2640-fe0f",
                "1f9d4-1f3fc-200d-2640-fe0f",
                "1f9d4-1f3fd-200d-2640-fe0f",
                "1f9d4-1f3fe-200d-2640-fe0f",
                "1f9d4-1f3ff-200d-2640-fe0f",
              ],
              a: "13.1",
            },
            {
              n: ["man: red hair", "red haired man"],
              u: "1f468-200d-1f9b0",
              v: [
                "1f468-1f3fb-200d-1f9b0",
                "1f468-1f3fc-200d-1f9b0",
                "1f468-1f3fd-200d-1f9b0",
                "1f468-1f3fe-200d-1f9b0",
                "1f468-1f3ff-200d-1f9b0",
              ],
              a: "11.0",
            },
            {
              n: ["man: curly hair", "curly haired man"],
              u: "1f468-200d-1f9b1",
              v: [
                "1f468-1f3fb-200d-1f9b1",
                "1f468-1f3fc-200d-1f9b1",
                "1f468-1f3fd-200d-1f9b1",
                "1f468-1f3fe-200d-1f9b1",
                "1f468-1f3ff-200d-1f9b1",
              ],
              a: "11.0",
            },
            {
              n: ["man: white hair", "white haired man"],
              u: "1f468-200d-1f9b3",
              v: [
                "1f468-1f3fb-200d-1f9b3",
                "1f468-1f3fc-200d-1f9b3",
                "1f468-1f3fd-200d-1f9b3",
                "1f468-1f3fe-200d-1f9b3",
                "1f468-1f3ff-200d-1f9b3",
              ],
              a: "11.0",
            },
            {
              n: ["bald man", "man: bald"],
              u: "1f468-200d-1f9b2",
              v: [
                "1f468-1f3fb-200d-1f9b2",
                "1f468-1f3fc-200d-1f9b2",
                "1f468-1f3fd-200d-1f9b2",
                "1f468-1f3fe-200d-1f9b2",
                "1f468-1f3ff-200d-1f9b2",
              ],
              a: "11.0",
            },
            {
              n: ["woman"],
              u: "1f469",
              v: ["1f469-1f3fb", "1f469-1f3fc", "1f469-1f3fd", "1f469-1f3fe", "1f469-1f3ff"],
              a: "0.6",
            },
            {
              n: ["woman: red hair", "red haired woman"],
              u: "1f469-200d-1f9b0",
              v: [
                "1f469-1f3fb-200d-1f9b0",
                "1f469-1f3fc-200d-1f9b0",
                "1f469-1f3fd-200d-1f9b0",
                "1f469-1f3fe-200d-1f9b0",
                "1f469-1f3ff-200d-1f9b0",
              ],
              a: "11.0",
            },
            {
              n: ["person: red hair", "red haired person"],
              u: "1f9d1-200d-1f9b0",
              v: [
                "1f9d1-1f3fb-200d-1f9b0",
                "1f9d1-1f3fc-200d-1f9b0",
                "1f9d1-1f3fd-200d-1f9b0",
                "1f9d1-1f3fe-200d-1f9b0",
                "1f9d1-1f3ff-200d-1f9b0",
              ],
              a: "12.1",
            },
            {
              n: ["woman: curly hair", "curly haired woman"],
              u: "1f469-200d-1f9b1",
              v: [
                "1f469-1f3fb-200d-1f9b1",
                "1f469-1f3fc-200d-1f9b1",
                "1f469-1f3fd-200d-1f9b1",
                "1f469-1f3fe-200d-1f9b1",
                "1f469-1f3ff-200d-1f9b1",
              ],
              a: "11.0",
            },
            {
              n: ["person: curly hair", "curly haired person"],
              u: "1f9d1-200d-1f9b1",
              v: [
                "1f9d1-1f3fb-200d-1f9b1",
                "1f9d1-1f3fc-200d-1f9b1",
                "1f9d1-1f3fd-200d-1f9b1",
                "1f9d1-1f3fe-200d-1f9b1",
                "1f9d1-1f3ff-200d-1f9b1",
              ],
              a: "12.1",
            },
            {
              n: ["woman: white hair", "white haired woman"],
              u: "1f469-200d-1f9b3",
              v: [
                "1f469-1f3fb-200d-1f9b3",
                "1f469-1f3fc-200d-1f9b3",
                "1f469-1f3fd-200d-1f9b3",
                "1f469-1f3fe-200d-1f9b3",
                "1f469-1f3ff-200d-1f9b3",
              ],
              a: "11.0",
            },
            {
              n: ["person: white hair", "white haired person"],
              u: "1f9d1-200d-1f9b3",
              v: [
                "1f9d1-1f3fb-200d-1f9b3",
                "1f9d1-1f3fc-200d-1f9b3",
                "1f9d1-1f3fd-200d-1f9b3",
                "1f9d1-1f3fe-200d-1f9b3",
                "1f9d1-1f3ff-200d-1f9b3",
              ],
              a: "12.1",
            },
            {
              n: ["bald woman", "woman: bald"],
              u: "1f469-200d-1f9b2",
              v: [
                "1f469-1f3fb-200d-1f9b2",
                "1f469-1f3fc-200d-1f9b2",
                "1f469-1f3fd-200d-1f9b2",
                "1f469-1f3fe-200d-1f9b2",
                "1f469-1f3ff-200d-1f9b2",
              ],
              a: "11.0",
            },
            {
              n: ["bald person", "person: bald"],
              u: "1f9d1-200d-1f9b2",
              v: [
                "1f9d1-1f3fb-200d-1f9b2",
                "1f9d1-1f3fc-200d-1f9b2",
                "1f9d1-1f3fd-200d-1f9b2",
                "1f9d1-1f3fe-200d-1f9b2",
                "1f9d1-1f3ff-200d-1f9b2",
              ],
              a: "12.1",
            },
            {
              n: ["woman: blond hair", "blond-haired-woman"],
              u: "1f471-200d-2640-fe0f",
              v: [
                "1f471-1f3fb-200d-2640-fe0f",
                "1f471-1f3fc-200d-2640-fe0f",
                "1f471-1f3fd-200d-2640-fe0f",
                "1f471-1f3fe-200d-2640-fe0f",
                "1f471-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["man: blond hair", "blond-haired-man"],
              u: "1f471-200d-2642-fe0f",
              v: [
                "1f471-1f3fb-200d-2642-fe0f",
                "1f471-1f3fc-200d-2642-fe0f",
                "1f471-1f3fd-200d-2642-fe0f",
                "1f471-1f3fe-200d-2642-fe0f",
                "1f471-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["older adult"],
              u: "1f9d3",
              v: ["1f9d3-1f3fb", "1f9d3-1f3fc", "1f9d3-1f3fd", "1f9d3-1f3fe", "1f9d3-1f3ff"],
              a: "5.0",
            },
            {
              n: ["older man"],
              u: "1f474",
              v: ["1f474-1f3fb", "1f474-1f3fc", "1f474-1f3fd", "1f474-1f3fe", "1f474-1f3ff"],
              a: "0.6",
            },
            {
              n: ["older woman"],
              u: "1f475",
              v: ["1f475-1f3fb", "1f475-1f3fc", "1f475-1f3fd", "1f475-1f3fe", "1f475-1f3ff"],
              a: "0.6",
            },
            {
              n: ["person frowning"],
              u: "1f64d",
              v: ["1f64d-1f3fb", "1f64d-1f3fc", "1f64d-1f3fd", "1f64d-1f3fe", "1f64d-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man frowning", "man-frowning"],
              u: "1f64d-200d-2642-fe0f",
              v: [
                "1f64d-1f3fb-200d-2642-fe0f",
                "1f64d-1f3fc-200d-2642-fe0f",
                "1f64d-1f3fd-200d-2642-fe0f",
                "1f64d-1f3fe-200d-2642-fe0f",
                "1f64d-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman frowning", "woman-frowning"],
              u: "1f64d-200d-2640-fe0f",
              v: [
                "1f64d-1f3fb-200d-2640-fe0f",
                "1f64d-1f3fc-200d-2640-fe0f",
                "1f64d-1f3fd-200d-2640-fe0f",
                "1f64d-1f3fe-200d-2640-fe0f",
                "1f64d-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["person with pouting face"],
              u: "1f64e",
              v: ["1f64e-1f3fb", "1f64e-1f3fc", "1f64e-1f3fd", "1f64e-1f3fe", "1f64e-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man pouting", "man-pouting"],
              u: "1f64e-200d-2642-fe0f",
              v: [
                "1f64e-1f3fb-200d-2642-fe0f",
                "1f64e-1f3fc-200d-2642-fe0f",
                "1f64e-1f3fd-200d-2642-fe0f",
                "1f64e-1f3fe-200d-2642-fe0f",
                "1f64e-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman pouting", "woman-pouting"],
              u: "1f64e-200d-2640-fe0f",
              v: [
                "1f64e-1f3fb-200d-2640-fe0f",
                "1f64e-1f3fc-200d-2640-fe0f",
                "1f64e-1f3fd-200d-2640-fe0f",
                "1f64e-1f3fe-200d-2640-fe0f",
                "1f64e-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["no good", "face with no good gesture"],
              u: "1f645",
              v: ["1f645-1f3fb", "1f645-1f3fc", "1f645-1f3fd", "1f645-1f3fe", "1f645-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man gesturing no", "man-gesturing-no"],
              u: "1f645-200d-2642-fe0f",
              v: [
                "1f645-1f3fb-200d-2642-fe0f",
                "1f645-1f3fc-200d-2642-fe0f",
                "1f645-1f3fd-200d-2642-fe0f",
                "1f645-1f3fe-200d-2642-fe0f",
                "1f645-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman gesturing no", "woman-gesturing-no"],
              u: "1f645-200d-2640-fe0f",
              v: [
                "1f645-1f3fb-200d-2640-fe0f",
                "1f645-1f3fc-200d-2640-fe0f",
                "1f645-1f3fd-200d-2640-fe0f",
                "1f645-1f3fe-200d-2640-fe0f",
                "1f645-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["ok woman", "face with ok gesture"],
              u: "1f646",
              v: ["1f646-1f3fb", "1f646-1f3fc", "1f646-1f3fd", "1f646-1f3fe", "1f646-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man gesturing ok", "man-gesturing-ok"],
              u: "1f646-200d-2642-fe0f",
              v: [
                "1f646-1f3fb-200d-2642-fe0f",
                "1f646-1f3fc-200d-2642-fe0f",
                "1f646-1f3fd-200d-2642-fe0f",
                "1f646-1f3fe-200d-2642-fe0f",
                "1f646-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman gesturing ok", "woman-gesturing-ok"],
              u: "1f646-200d-2640-fe0f",
              v: [
                "1f646-1f3fb-200d-2640-fe0f",
                "1f646-1f3fc-200d-2640-fe0f",
                "1f646-1f3fd-200d-2640-fe0f",
                "1f646-1f3fe-200d-2640-fe0f",
                "1f646-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["information desk person"],
              u: "1f481",
              v: ["1f481-1f3fb", "1f481-1f3fc", "1f481-1f3fd", "1f481-1f3fe", "1f481-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man tipping hand", "man-tipping-hand"],
              u: "1f481-200d-2642-fe0f",
              v: [
                "1f481-1f3fb-200d-2642-fe0f",
                "1f481-1f3fc-200d-2642-fe0f",
                "1f481-1f3fd-200d-2642-fe0f",
                "1f481-1f3fe-200d-2642-fe0f",
                "1f481-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman tipping hand", "woman-tipping-hand"],
              u: "1f481-200d-2640-fe0f",
              v: [
                "1f481-1f3fb-200d-2640-fe0f",
                "1f481-1f3fc-200d-2640-fe0f",
                "1f481-1f3fd-200d-2640-fe0f",
                "1f481-1f3fe-200d-2640-fe0f",
                "1f481-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["raising hand", "happy person raising one hand"],
              u: "1f64b",
              v: ["1f64b-1f3fb", "1f64b-1f3fc", "1f64b-1f3fd", "1f64b-1f3fe", "1f64b-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man raising hand", "man-raising-hand"],
              u: "1f64b-200d-2642-fe0f",
              v: [
                "1f64b-1f3fb-200d-2642-fe0f",
                "1f64b-1f3fc-200d-2642-fe0f",
                "1f64b-1f3fd-200d-2642-fe0f",
                "1f64b-1f3fe-200d-2642-fe0f",
                "1f64b-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman raising hand", "woman-raising-hand"],
              u: "1f64b-200d-2640-fe0f",
              v: [
                "1f64b-1f3fb-200d-2640-fe0f",
                "1f64b-1f3fc-200d-2640-fe0f",
                "1f64b-1f3fd-200d-2640-fe0f",
                "1f64b-1f3fe-200d-2640-fe0f",
                "1f64b-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["deaf person"],
              u: "1f9cf",
              v: ["1f9cf-1f3fb", "1f9cf-1f3fc", "1f9cf-1f3fd", "1f9cf-1f3fe", "1f9cf-1f3ff"],
              a: "12.0",
            },
            {
              n: ["deaf man"],
              u: "1f9cf-200d-2642-fe0f",
              v: [
                "1f9cf-1f3fb-200d-2642-fe0f",
                "1f9cf-1f3fc-200d-2642-fe0f",
                "1f9cf-1f3fd-200d-2642-fe0f",
                "1f9cf-1f3fe-200d-2642-fe0f",
                "1f9cf-1f3ff-200d-2642-fe0f",
              ],
              a: "12.0",
            },
            {
              n: ["deaf woman"],
              u: "1f9cf-200d-2640-fe0f",
              v: [
                "1f9cf-1f3fb-200d-2640-fe0f",
                "1f9cf-1f3fc-200d-2640-fe0f",
                "1f9cf-1f3fd-200d-2640-fe0f",
                "1f9cf-1f3fe-200d-2640-fe0f",
                "1f9cf-1f3ff-200d-2640-fe0f",
              ],
              a: "12.0",
            },
            {
              n: ["bow", "person bowing deeply"],
              u: "1f647",
              v: ["1f647-1f3fb", "1f647-1f3fc", "1f647-1f3fd", "1f647-1f3fe", "1f647-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man bowing", "man-bowing"],
              u: "1f647-200d-2642-fe0f",
              v: [
                "1f647-1f3fb-200d-2642-fe0f",
                "1f647-1f3fc-200d-2642-fe0f",
                "1f647-1f3fd-200d-2642-fe0f",
                "1f647-1f3fe-200d-2642-fe0f",
                "1f647-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman bowing", "woman-bowing"],
              u: "1f647-200d-2640-fe0f",
              v: [
                "1f647-1f3fb-200d-2640-fe0f",
                "1f647-1f3fc-200d-2640-fe0f",
                "1f647-1f3fd-200d-2640-fe0f",
                "1f647-1f3fe-200d-2640-fe0f",
                "1f647-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["face palm"],
              u: "1f926",
              v: ["1f926-1f3fb", "1f926-1f3fc", "1f926-1f3fd", "1f926-1f3fe", "1f926-1f3ff"],
              a: "3.0",
            },
            {
              n: ["man facepalming", "man-facepalming"],
              u: "1f926-200d-2642-fe0f",
              v: [
                "1f926-1f3fb-200d-2642-fe0f",
                "1f926-1f3fc-200d-2642-fe0f",
                "1f926-1f3fd-200d-2642-fe0f",
                "1f926-1f3fe-200d-2642-fe0f",
                "1f926-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman facepalming", "woman-facepalming"],
              u: "1f926-200d-2640-fe0f",
              v: [
                "1f926-1f3fb-200d-2640-fe0f",
                "1f926-1f3fc-200d-2640-fe0f",
                "1f926-1f3fd-200d-2640-fe0f",
                "1f926-1f3fe-200d-2640-fe0f",
                "1f926-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["shrug"],
              u: "1f937",
              v: ["1f937-1f3fb", "1f937-1f3fc", "1f937-1f3fd", "1f937-1f3fe", "1f937-1f3ff"],
              a: "3.0",
            },
            {
              n: ["man shrugging", "man-shrugging"],
              u: "1f937-200d-2642-fe0f",
              v: [
                "1f937-1f3fb-200d-2642-fe0f",
                "1f937-1f3fc-200d-2642-fe0f",
                "1f937-1f3fd-200d-2642-fe0f",
                "1f937-1f3fe-200d-2642-fe0f",
                "1f937-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman shrugging", "woman-shrugging"],
              u: "1f937-200d-2640-fe0f",
              v: [
                "1f937-1f3fb-200d-2640-fe0f",
                "1f937-1f3fc-200d-2640-fe0f",
                "1f937-1f3fd-200d-2640-fe0f",
                "1f937-1f3fe-200d-2640-fe0f",
                "1f937-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["health worker"],
              u: "1f9d1-200d-2695-fe0f",
              v: [
                "1f9d1-1f3fb-200d-2695-fe0f",
                "1f9d1-1f3fc-200d-2695-fe0f",
                "1f9d1-1f3fd-200d-2695-fe0f",
                "1f9d1-1f3fe-200d-2695-fe0f",
                "1f9d1-1f3ff-200d-2695-fe0f",
              ],
              a: "12.1",
            },
            {
              n: ["male-doctor", "man health worker"],
              u: "1f468-200d-2695-fe0f",
              v: [
                "1f468-1f3fb-200d-2695-fe0f",
                "1f468-1f3fc-200d-2695-fe0f",
                "1f468-1f3fd-200d-2695-fe0f",
                "1f468-1f3fe-200d-2695-fe0f",
                "1f468-1f3ff-200d-2695-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["female-doctor", "woman health worker"],
              u: "1f469-200d-2695-fe0f",
              v: [
                "1f469-1f3fb-200d-2695-fe0f",
                "1f469-1f3fc-200d-2695-fe0f",
                "1f469-1f3fd-200d-2695-fe0f",
                "1f469-1f3fe-200d-2695-fe0f",
                "1f469-1f3ff-200d-2695-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["student"],
              u: "1f9d1-200d-1f393",
              v: [
                "1f9d1-1f3fb-200d-1f393",
                "1f9d1-1f3fc-200d-1f393",
                "1f9d1-1f3fd-200d-1f393",
                "1f9d1-1f3fe-200d-1f393",
                "1f9d1-1f3ff-200d-1f393",
              ],
              a: "12.1",
            },
            {
              n: ["man student", "male-student"],
              u: "1f468-200d-1f393",
              v: [
                "1f468-1f3fb-200d-1f393",
                "1f468-1f3fc-200d-1f393",
                "1f468-1f3fd-200d-1f393",
                "1f468-1f3fe-200d-1f393",
                "1f468-1f3ff-200d-1f393",
              ],
              a: "4.0",
            },
            {
              n: ["woman student", "female-student"],
              u: "1f469-200d-1f393",
              v: [
                "1f469-1f3fb-200d-1f393",
                "1f469-1f3fc-200d-1f393",
                "1f469-1f3fd-200d-1f393",
                "1f469-1f3fe-200d-1f393",
                "1f469-1f3ff-200d-1f393",
              ],
              a: "4.0",
            },
            {
              n: ["teacher"],
              u: "1f9d1-200d-1f3eb",
              v: [
                "1f9d1-1f3fb-200d-1f3eb",
                "1f9d1-1f3fc-200d-1f3eb",
                "1f9d1-1f3fd-200d-1f3eb",
                "1f9d1-1f3fe-200d-1f3eb",
                "1f9d1-1f3ff-200d-1f3eb",
              ],
              a: "12.1",
            },
            {
              n: ["man teacher", "male-teacher"],
              u: "1f468-200d-1f3eb",
              v: [
                "1f468-1f3fb-200d-1f3eb",
                "1f468-1f3fc-200d-1f3eb",
                "1f468-1f3fd-200d-1f3eb",
                "1f468-1f3fe-200d-1f3eb",
                "1f468-1f3ff-200d-1f3eb",
              ],
              a: "4.0",
            },
            {
              n: ["woman teacher", "female-teacher"],
              u: "1f469-200d-1f3eb",
              v: [
                "1f469-1f3fb-200d-1f3eb",
                "1f469-1f3fc-200d-1f3eb",
                "1f469-1f3fd-200d-1f3eb",
                "1f469-1f3fe-200d-1f3eb",
                "1f469-1f3ff-200d-1f3eb",
              ],
              a: "4.0",
            },
            {
              n: ["judge"],
              u: "1f9d1-200d-2696-fe0f",
              v: [
                "1f9d1-1f3fb-200d-2696-fe0f",
                "1f9d1-1f3fc-200d-2696-fe0f",
                "1f9d1-1f3fd-200d-2696-fe0f",
                "1f9d1-1f3fe-200d-2696-fe0f",
                "1f9d1-1f3ff-200d-2696-fe0f",
              ],
              a: "12.1",
            },
            {
              n: ["man judge", "male-judge"],
              u: "1f468-200d-2696-fe0f",
              v: [
                "1f468-1f3fb-200d-2696-fe0f",
                "1f468-1f3fc-200d-2696-fe0f",
                "1f468-1f3fd-200d-2696-fe0f",
                "1f468-1f3fe-200d-2696-fe0f",
                "1f468-1f3ff-200d-2696-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman judge", "female-judge"],
              u: "1f469-200d-2696-fe0f",
              v: [
                "1f469-1f3fb-200d-2696-fe0f",
                "1f469-1f3fc-200d-2696-fe0f",
                "1f469-1f3fd-200d-2696-fe0f",
                "1f469-1f3fe-200d-2696-fe0f",
                "1f469-1f3ff-200d-2696-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["farmer"],
              u: "1f9d1-200d-1f33e",
              v: [
                "1f9d1-1f3fb-200d-1f33e",
                "1f9d1-1f3fc-200d-1f33e",
                "1f9d1-1f3fd-200d-1f33e",
                "1f9d1-1f3fe-200d-1f33e",
                "1f9d1-1f3ff-200d-1f33e",
              ],
              a: "12.1",
            },
            {
              n: ["man farmer", "male-farmer"],
              u: "1f468-200d-1f33e",
              v: [
                "1f468-1f3fb-200d-1f33e",
                "1f468-1f3fc-200d-1f33e",
                "1f468-1f3fd-200d-1f33e",
                "1f468-1f3fe-200d-1f33e",
                "1f468-1f3ff-200d-1f33e",
              ],
              a: "4.0",
            },
            {
              n: ["woman farmer", "female-farmer"],
              u: "1f469-200d-1f33e",
              v: [
                "1f469-1f3fb-200d-1f33e",
                "1f469-1f3fc-200d-1f33e",
                "1f469-1f3fd-200d-1f33e",
                "1f469-1f3fe-200d-1f33e",
                "1f469-1f3ff-200d-1f33e",
              ],
              a: "4.0",
            },
            {
              n: ["cook"],
              u: "1f9d1-200d-1f373",
              v: [
                "1f9d1-1f3fb-200d-1f373",
                "1f9d1-1f3fc-200d-1f373",
                "1f9d1-1f3fd-200d-1f373",
                "1f9d1-1f3fe-200d-1f373",
                "1f9d1-1f3ff-200d-1f373",
              ],
              a: "12.1",
            },
            {
              n: ["man cook", "male-cook"],
              u: "1f468-200d-1f373",
              v: [
                "1f468-1f3fb-200d-1f373",
                "1f468-1f3fc-200d-1f373",
                "1f468-1f3fd-200d-1f373",
                "1f468-1f3fe-200d-1f373",
                "1f468-1f3ff-200d-1f373",
              ],
              a: "4.0",
            },
            {
              n: ["woman cook", "female-cook"],
              u: "1f469-200d-1f373",
              v: [
                "1f469-1f3fb-200d-1f373",
                "1f469-1f3fc-200d-1f373",
                "1f469-1f3fd-200d-1f373",
                "1f469-1f3fe-200d-1f373",
                "1f469-1f3ff-200d-1f373",
              ],
              a: "4.0",
            },
            {
              n: ["mechanic"],
              u: "1f9d1-200d-1f527",
              v: [
                "1f9d1-1f3fb-200d-1f527",
                "1f9d1-1f3fc-200d-1f527",
                "1f9d1-1f3fd-200d-1f527",
                "1f9d1-1f3fe-200d-1f527",
                "1f9d1-1f3ff-200d-1f527",
              ],
              a: "12.1",
            },
            {
              n: ["man mechanic", "male-mechanic"],
              u: "1f468-200d-1f527",
              v: [
                "1f468-1f3fb-200d-1f527",
                "1f468-1f3fc-200d-1f527",
                "1f468-1f3fd-200d-1f527",
                "1f468-1f3fe-200d-1f527",
                "1f468-1f3ff-200d-1f527",
              ],
              a: "4.0",
            },
            {
              n: ["woman mechanic", "female-mechanic"],
              u: "1f469-200d-1f527",
              v: [
                "1f469-1f3fb-200d-1f527",
                "1f469-1f3fc-200d-1f527",
                "1f469-1f3fd-200d-1f527",
                "1f469-1f3fe-200d-1f527",
                "1f469-1f3ff-200d-1f527",
              ],
              a: "4.0",
            },
            {
              n: ["factory worker"],
              u: "1f9d1-200d-1f3ed",
              v: [
                "1f9d1-1f3fb-200d-1f3ed",
                "1f9d1-1f3fc-200d-1f3ed",
                "1f9d1-1f3fd-200d-1f3ed",
                "1f9d1-1f3fe-200d-1f3ed",
                "1f9d1-1f3ff-200d-1f3ed",
              ],
              a: "12.1",
            },
            {
              n: ["man factory worker", "male-factory-worker"],
              u: "1f468-200d-1f3ed",
              v: [
                "1f468-1f3fb-200d-1f3ed",
                "1f468-1f3fc-200d-1f3ed",
                "1f468-1f3fd-200d-1f3ed",
                "1f468-1f3fe-200d-1f3ed",
                "1f468-1f3ff-200d-1f3ed",
              ],
              a: "4.0",
            },
            {
              n: ["woman factory worker", "female-factory-worker"],
              u: "1f469-200d-1f3ed",
              v: [
                "1f469-1f3fb-200d-1f3ed",
                "1f469-1f3fc-200d-1f3ed",
                "1f469-1f3fd-200d-1f3ed",
                "1f469-1f3fe-200d-1f3ed",
                "1f469-1f3ff-200d-1f3ed",
              ],
              a: "4.0",
            },
            {
              n: ["office worker"],
              u: "1f9d1-200d-1f4bc",
              v: [
                "1f9d1-1f3fb-200d-1f4bc",
                "1f9d1-1f3fc-200d-1f4bc",
                "1f9d1-1f3fd-200d-1f4bc",
                "1f9d1-1f3fe-200d-1f4bc",
                "1f9d1-1f3ff-200d-1f4bc",
              ],
              a: "12.1",
            },
            {
              n: ["man office worker", "male-office-worker"],
              u: "1f468-200d-1f4bc",
              v: [
                "1f468-1f3fb-200d-1f4bc",
                "1f468-1f3fc-200d-1f4bc",
                "1f468-1f3fd-200d-1f4bc",
                "1f468-1f3fe-200d-1f4bc",
                "1f468-1f3ff-200d-1f4bc",
              ],
              a: "4.0",
            },
            {
              n: ["woman office worker", "female-office-worker"],
              u: "1f469-200d-1f4bc",
              v: [
                "1f469-1f3fb-200d-1f4bc",
                "1f469-1f3fc-200d-1f4bc",
                "1f469-1f3fd-200d-1f4bc",
                "1f469-1f3fe-200d-1f4bc",
                "1f469-1f3ff-200d-1f4bc",
              ],
              a: "4.0",
            },
            {
              n: ["scientist"],
              u: "1f9d1-200d-1f52c",
              v: [
                "1f9d1-1f3fb-200d-1f52c",
                "1f9d1-1f3fc-200d-1f52c",
                "1f9d1-1f3fd-200d-1f52c",
                "1f9d1-1f3fe-200d-1f52c",
                "1f9d1-1f3ff-200d-1f52c",
              ],
              a: "12.1",
            },
            {
              n: ["man scientist", "male-scientist"],
              u: "1f468-200d-1f52c",
              v: [
                "1f468-1f3fb-200d-1f52c",
                "1f468-1f3fc-200d-1f52c",
                "1f468-1f3fd-200d-1f52c",
                "1f468-1f3fe-200d-1f52c",
                "1f468-1f3ff-200d-1f52c",
              ],
              a: "4.0",
            },
            {
              n: ["woman scientist", "female-scientist"],
              u: "1f469-200d-1f52c",
              v: [
                "1f469-1f3fb-200d-1f52c",
                "1f469-1f3fc-200d-1f52c",
                "1f469-1f3fd-200d-1f52c",
                "1f469-1f3fe-200d-1f52c",
                "1f469-1f3ff-200d-1f52c",
              ],
              a: "4.0",
            },
            {
              n: ["technologist"],
              u: "1f9d1-200d-1f4bb",
              v: [
                "1f9d1-1f3fb-200d-1f4bb",
                "1f9d1-1f3fc-200d-1f4bb",
                "1f9d1-1f3fd-200d-1f4bb",
                "1f9d1-1f3fe-200d-1f4bb",
                "1f9d1-1f3ff-200d-1f4bb",
              ],
              a: "12.1",
            },
            {
              n: ["man technologist", "male-technologist"],
              u: "1f468-200d-1f4bb",
              v: [
                "1f468-1f3fb-200d-1f4bb",
                "1f468-1f3fc-200d-1f4bb",
                "1f468-1f3fd-200d-1f4bb",
                "1f468-1f3fe-200d-1f4bb",
                "1f468-1f3ff-200d-1f4bb",
              ],
              a: "4.0",
            },
            {
              n: ["woman technologist", "female-technologist"],
              u: "1f469-200d-1f4bb",
              v: [
                "1f469-1f3fb-200d-1f4bb",
                "1f469-1f3fc-200d-1f4bb",
                "1f469-1f3fd-200d-1f4bb",
                "1f469-1f3fe-200d-1f4bb",
                "1f469-1f3ff-200d-1f4bb",
              ],
              a: "4.0",
            },
            {
              n: ["singer"],
              u: "1f9d1-200d-1f3a4",
              v: [
                "1f9d1-1f3fb-200d-1f3a4",
                "1f9d1-1f3fc-200d-1f3a4",
                "1f9d1-1f3fd-200d-1f3a4",
                "1f9d1-1f3fe-200d-1f3a4",
                "1f9d1-1f3ff-200d-1f3a4",
              ],
              a: "12.1",
            },
            {
              n: ["man singer", "male-singer"],
              u: "1f468-200d-1f3a4",
              v: [
                "1f468-1f3fb-200d-1f3a4",
                "1f468-1f3fc-200d-1f3a4",
                "1f468-1f3fd-200d-1f3a4",
                "1f468-1f3fe-200d-1f3a4",
                "1f468-1f3ff-200d-1f3a4",
              ],
              a: "4.0",
            },
            {
              n: ["woman singer", "female-singer"],
              u: "1f469-200d-1f3a4",
              v: [
                "1f469-1f3fb-200d-1f3a4",
                "1f469-1f3fc-200d-1f3a4",
                "1f469-1f3fd-200d-1f3a4",
                "1f469-1f3fe-200d-1f3a4",
                "1f469-1f3ff-200d-1f3a4",
              ],
              a: "4.0",
            },
            {
              n: ["artist"],
              u: "1f9d1-200d-1f3a8",
              v: [
                "1f9d1-1f3fb-200d-1f3a8",
                "1f9d1-1f3fc-200d-1f3a8",
                "1f9d1-1f3fd-200d-1f3a8",
                "1f9d1-1f3fe-200d-1f3a8",
                "1f9d1-1f3ff-200d-1f3a8",
              ],
              a: "12.1",
            },
            {
              n: ["man artist", "male-artist"],
              u: "1f468-200d-1f3a8",
              v: [
                "1f468-1f3fb-200d-1f3a8",
                "1f468-1f3fc-200d-1f3a8",
                "1f468-1f3fd-200d-1f3a8",
                "1f468-1f3fe-200d-1f3a8",
                "1f468-1f3ff-200d-1f3a8",
              ],
              a: "4.0",
            },
            {
              n: ["woman artist", "female-artist"],
              u: "1f469-200d-1f3a8",
              v: [
                "1f469-1f3fb-200d-1f3a8",
                "1f469-1f3fc-200d-1f3a8",
                "1f469-1f3fd-200d-1f3a8",
                "1f469-1f3fe-200d-1f3a8",
                "1f469-1f3ff-200d-1f3a8",
              ],
              a: "4.0",
            },
            {
              n: ["pilot"],
              u: "1f9d1-200d-2708-fe0f",
              v: [
                "1f9d1-1f3fb-200d-2708-fe0f",
                "1f9d1-1f3fc-200d-2708-fe0f",
                "1f9d1-1f3fd-200d-2708-fe0f",
                "1f9d1-1f3fe-200d-2708-fe0f",
                "1f9d1-1f3ff-200d-2708-fe0f",
              ],
              a: "12.1",
            },
            {
              n: ["man pilot", "male-pilot"],
              u: "1f468-200d-2708-fe0f",
              v: [
                "1f468-1f3fb-200d-2708-fe0f",
                "1f468-1f3fc-200d-2708-fe0f",
                "1f468-1f3fd-200d-2708-fe0f",
                "1f468-1f3fe-200d-2708-fe0f",
                "1f468-1f3ff-200d-2708-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman pilot", "female-pilot"],
              u: "1f469-200d-2708-fe0f",
              v: [
                "1f469-1f3fb-200d-2708-fe0f",
                "1f469-1f3fc-200d-2708-fe0f",
                "1f469-1f3fd-200d-2708-fe0f",
                "1f469-1f3fe-200d-2708-fe0f",
                "1f469-1f3ff-200d-2708-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["astronaut"],
              u: "1f9d1-200d-1f680",
              v: [
                "1f9d1-1f3fb-200d-1f680",
                "1f9d1-1f3fc-200d-1f680",
                "1f9d1-1f3fd-200d-1f680",
                "1f9d1-1f3fe-200d-1f680",
                "1f9d1-1f3ff-200d-1f680",
              ],
              a: "12.1",
            },
            {
              n: ["man astronaut", "male-astronaut"],
              u: "1f468-200d-1f680",
              v: [
                "1f468-1f3fb-200d-1f680",
                "1f468-1f3fc-200d-1f680",
                "1f468-1f3fd-200d-1f680",
                "1f468-1f3fe-200d-1f680",
                "1f468-1f3ff-200d-1f680",
              ],
              a: "4.0",
            },
            {
              n: ["woman astronaut", "female-astronaut"],
              u: "1f469-200d-1f680",
              v: [
                "1f469-1f3fb-200d-1f680",
                "1f469-1f3fc-200d-1f680",
                "1f469-1f3fd-200d-1f680",
                "1f469-1f3fe-200d-1f680",
                "1f469-1f3ff-200d-1f680",
              ],
              a: "4.0",
            },
            {
              n: ["firefighter"],
              u: "1f9d1-200d-1f692",
              v: [
                "1f9d1-1f3fb-200d-1f692",
                "1f9d1-1f3fc-200d-1f692",
                "1f9d1-1f3fd-200d-1f692",
                "1f9d1-1f3fe-200d-1f692",
                "1f9d1-1f3ff-200d-1f692",
              ],
              a: "12.1",
            },
            {
              n: ["man firefighter", "male-firefighter"],
              u: "1f468-200d-1f692",
              v: [
                "1f468-1f3fb-200d-1f692",
                "1f468-1f3fc-200d-1f692",
                "1f468-1f3fd-200d-1f692",
                "1f468-1f3fe-200d-1f692",
                "1f468-1f3ff-200d-1f692",
              ],
              a: "4.0",
            },
            {
              n: ["woman firefighter", "female-firefighter"],
              u: "1f469-200d-1f692",
              v: [
                "1f469-1f3fb-200d-1f692",
                "1f469-1f3fc-200d-1f692",
                "1f469-1f3fd-200d-1f692",
                "1f469-1f3fe-200d-1f692",
                "1f469-1f3ff-200d-1f692",
              ],
              a: "4.0",
            },
            {
              n: ["cop", "police officer"],
              u: "1f46e",
              v: ["1f46e-1f3fb", "1f46e-1f3fc", "1f46e-1f3fd", "1f46e-1f3fe", "1f46e-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man police officer", "male-police-officer"],
              u: "1f46e-200d-2642-fe0f",
              v: [
                "1f46e-1f3fb-200d-2642-fe0f",
                "1f46e-1f3fc-200d-2642-fe0f",
                "1f46e-1f3fd-200d-2642-fe0f",
                "1f46e-1f3fe-200d-2642-fe0f",
                "1f46e-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman police officer", "female-police-officer"],
              u: "1f46e-200d-2640-fe0f",
              v: [
                "1f46e-1f3fb-200d-2640-fe0f",
                "1f46e-1f3fc-200d-2640-fe0f",
                "1f46e-1f3fd-200d-2640-fe0f",
                "1f46e-1f3fe-200d-2640-fe0f",
                "1f46e-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["detective", "sleuth or spy"],
              u: "1f575-fe0f",
              v: ["1f575-1f3fb", "1f575-1f3fc", "1f575-1f3fd", "1f575-1f3fe", "1f575-1f3ff"],
              a: "0.7",
            },
            {
              n: ["man detective", "male-detective"],
              u: "1f575-fe0f-200d-2642-fe0f",
              v: [
                "1f575-1f3fb-200d-2642-fe0f",
                "1f575-1f3fc-200d-2642-fe0f",
                "1f575-1f3fd-200d-2642-fe0f",
                "1f575-1f3fe-200d-2642-fe0f",
                "1f575-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman detective", "female-detective"],
              u: "1f575-fe0f-200d-2640-fe0f",
              v: [
                "1f575-1f3fb-200d-2640-fe0f",
                "1f575-1f3fc-200d-2640-fe0f",
                "1f575-1f3fd-200d-2640-fe0f",
                "1f575-1f3fe-200d-2640-fe0f",
                "1f575-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["guardsman"],
              u: "1f482",
              v: ["1f482-1f3fb", "1f482-1f3fc", "1f482-1f3fd", "1f482-1f3fe", "1f482-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man guard", "male-guard"],
              u: "1f482-200d-2642-fe0f",
              v: [
                "1f482-1f3fb-200d-2642-fe0f",
                "1f482-1f3fc-200d-2642-fe0f",
                "1f482-1f3fd-200d-2642-fe0f",
                "1f482-1f3fe-200d-2642-fe0f",
                "1f482-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman guard", "female-guard"],
              u: "1f482-200d-2640-fe0f",
              v: [
                "1f482-1f3fb-200d-2640-fe0f",
                "1f482-1f3fc-200d-2640-fe0f",
                "1f482-1f3fd-200d-2640-fe0f",
                "1f482-1f3fe-200d-2640-fe0f",
                "1f482-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["ninja"],
              u: "1f977",
              v: ["1f977-1f3fb", "1f977-1f3fc", "1f977-1f3fd", "1f977-1f3fe", "1f977-1f3ff"],
              a: "13.0",
            },
            {
              n: ["construction worker"],
              u: "1f477",
              v: ["1f477-1f3fb", "1f477-1f3fc", "1f477-1f3fd", "1f477-1f3fe", "1f477-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man construction worker", "male-construction-worker"],
              u: "1f477-200d-2642-fe0f",
              v: [
                "1f477-1f3fb-200d-2642-fe0f",
                "1f477-1f3fc-200d-2642-fe0f",
                "1f477-1f3fd-200d-2642-fe0f",
                "1f477-1f3fe-200d-2642-fe0f",
                "1f477-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman construction worker", "female-construction-worker"],
              u: "1f477-200d-2640-fe0f",
              v: [
                "1f477-1f3fb-200d-2640-fe0f",
                "1f477-1f3fc-200d-2640-fe0f",
                "1f477-1f3fd-200d-2640-fe0f",
                "1f477-1f3fe-200d-2640-fe0f",
                "1f477-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["person with crown"],
              u: "1fac5",
              v: ["1fac5-1f3fb", "1fac5-1f3fc", "1fac5-1f3fd", "1fac5-1f3fe", "1fac5-1f3ff"],
              a: "14.0",
            },
            {
              n: ["prince"],
              u: "1f934",
              v: ["1f934-1f3fb", "1f934-1f3fc", "1f934-1f3fd", "1f934-1f3fe", "1f934-1f3ff"],
              a: "3.0",
            },
            {
              n: ["princess"],
              u: "1f478",
              v: ["1f478-1f3fb", "1f478-1f3fc", "1f478-1f3fd", "1f478-1f3fe", "1f478-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man with turban"],
              u: "1f473",
              v: ["1f473-1f3fb", "1f473-1f3fc", "1f473-1f3fd", "1f473-1f3fe", "1f473-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man wearing turban", "man-wearing-turban"],
              u: "1f473-200d-2642-fe0f",
              v: [
                "1f473-1f3fb-200d-2642-fe0f",
                "1f473-1f3fc-200d-2642-fe0f",
                "1f473-1f3fd-200d-2642-fe0f",
                "1f473-1f3fe-200d-2642-fe0f",
                "1f473-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman wearing turban", "woman-wearing-turban"],
              u: "1f473-200d-2640-fe0f",
              v: [
                "1f473-1f3fb-200d-2640-fe0f",
                "1f473-1f3fc-200d-2640-fe0f",
                "1f473-1f3fd-200d-2640-fe0f",
                "1f473-1f3fe-200d-2640-fe0f",
                "1f473-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["man with gua pi mao"],
              u: "1f472",
              v: ["1f472-1f3fb", "1f472-1f3fc", "1f472-1f3fd", "1f472-1f3fe", "1f472-1f3ff"],
              a: "0.6",
            },
            {
              n: ["person with headscarf"],
              u: "1f9d5",
              v: ["1f9d5-1f3fb", "1f9d5-1f3fc", "1f9d5-1f3fd", "1f9d5-1f3fe", "1f9d5-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man in tuxedo", "person in tuxedo"],
              u: "1f935",
              v: ["1f935-1f3fb", "1f935-1f3fc", "1f935-1f3fd", "1f935-1f3fe", "1f935-1f3ff"],
              a: "3.0",
            },
            {
              n: ["man in tuxedo"],
              u: "1f935-200d-2642-fe0f",
              v: [
                "1f935-1f3fb-200d-2642-fe0f",
                "1f935-1f3fc-200d-2642-fe0f",
                "1f935-1f3fd-200d-2642-fe0f",
                "1f935-1f3fe-200d-2642-fe0f",
                "1f935-1f3ff-200d-2642-fe0f",
              ],
              a: "13.0",
            },
            {
              n: ["woman in tuxedo"],
              u: "1f935-200d-2640-fe0f",
              v: [
                "1f935-1f3fb-200d-2640-fe0f",
                "1f935-1f3fc-200d-2640-fe0f",
                "1f935-1f3fd-200d-2640-fe0f",
                "1f935-1f3fe-200d-2640-fe0f",
                "1f935-1f3ff-200d-2640-fe0f",
              ],
              a: "13.0",
            },
            {
              n: ["bride with veil"],
              u: "1f470",
              v: ["1f470-1f3fb", "1f470-1f3fc", "1f470-1f3fd", "1f470-1f3fe", "1f470-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man with veil"],
              u: "1f470-200d-2642-fe0f",
              v: [
                "1f470-1f3fb-200d-2642-fe0f",
                "1f470-1f3fc-200d-2642-fe0f",
                "1f470-1f3fd-200d-2642-fe0f",
                "1f470-1f3fe-200d-2642-fe0f",
                "1f470-1f3ff-200d-2642-fe0f",
              ],
              a: "13.0",
            },
            {
              n: ["woman with veil"],
              u: "1f470-200d-2640-fe0f",
              v: [
                "1f470-1f3fb-200d-2640-fe0f",
                "1f470-1f3fc-200d-2640-fe0f",
                "1f470-1f3fd-200d-2640-fe0f",
                "1f470-1f3fe-200d-2640-fe0f",
                "1f470-1f3ff-200d-2640-fe0f",
              ],
              a: "13.0",
            },
            {
              n: ["pregnant woman"],
              u: "1f930",
              v: ["1f930-1f3fb", "1f930-1f3fc", "1f930-1f3fd", "1f930-1f3fe", "1f930-1f3ff"],
              a: "3.0",
            },
            {
              n: ["pregnant man"],
              u: "1fac3",
              v: ["1fac3-1f3fb", "1fac3-1f3fc", "1fac3-1f3fd", "1fac3-1f3fe", "1fac3-1f3ff"],
              a: "14.0",
            },
            {
              n: ["pregnant person"],
              u: "1fac4",
              v: ["1fac4-1f3fb", "1fac4-1f3fc", "1fac4-1f3fd", "1fac4-1f3fe", "1fac4-1f3ff"],
              a: "14.0",
            },
            {
              n: ["breast-feeding"],
              u: "1f931",
              v: ["1f931-1f3fb", "1f931-1f3fc", "1f931-1f3fd", "1f931-1f3fe", "1f931-1f3ff"],
              a: "5.0",
            },
            {
              n: ["woman feeding baby"],
              u: "1f469-200d-1f37c",
              v: [
                "1f469-1f3fb-200d-1f37c",
                "1f469-1f3fc-200d-1f37c",
                "1f469-1f3fd-200d-1f37c",
                "1f469-1f3fe-200d-1f37c",
                "1f469-1f3ff-200d-1f37c",
              ],
              a: "13.0",
            },
            {
              n: ["man feeding baby"],
              u: "1f468-200d-1f37c",
              v: [
                "1f468-1f3fb-200d-1f37c",
                "1f468-1f3fc-200d-1f37c",
                "1f468-1f3fd-200d-1f37c",
                "1f468-1f3fe-200d-1f37c",
                "1f468-1f3ff-200d-1f37c",
              ],
              a: "13.0",
            },
            {
              n: ["person feeding baby"],
              u: "1f9d1-200d-1f37c",
              v: [
                "1f9d1-1f3fb-200d-1f37c",
                "1f9d1-1f3fc-200d-1f37c",
                "1f9d1-1f3fd-200d-1f37c",
                "1f9d1-1f3fe-200d-1f37c",
                "1f9d1-1f3ff-200d-1f37c",
              ],
              a: "13.0",
            },
            {
              n: ["angel", "baby angel"],
              u: "1f47c",
              v: ["1f47c-1f3fb", "1f47c-1f3fc", "1f47c-1f3fd", "1f47c-1f3fe", "1f47c-1f3ff"],
              a: "0.6",
            },
            {
              n: ["santa", "father christmas"],
              u: "1f385",
              v: ["1f385-1f3fb", "1f385-1f3fc", "1f385-1f3fd", "1f385-1f3fe", "1f385-1f3ff"],
              a: "0.6",
            },
            {
              n: ["mrs claus", "mother christmas"],
              u: "1f936",
              v: ["1f936-1f3fb", "1f936-1f3fc", "1f936-1f3fd", "1f936-1f3fe", "1f936-1f3ff"],
              a: "3.0",
            },
            {
              n: ["mx claus"],
              u: "1f9d1-200d-1f384",
              v: [
                "1f9d1-1f3fb-200d-1f384",
                "1f9d1-1f3fc-200d-1f384",
                "1f9d1-1f3fd-200d-1f384",
                "1f9d1-1f3fe-200d-1f384",
                "1f9d1-1f3ff-200d-1f384",
              ],
              a: "13.0",
            },
            {
              n: ["superhero"],
              u: "1f9b8",
              v: ["1f9b8-1f3fb", "1f9b8-1f3fc", "1f9b8-1f3fd", "1f9b8-1f3fe", "1f9b8-1f3ff"],
              a: "11.0",
            },
            {
              n: ["man superhero", "male superhero"],
              u: "1f9b8-200d-2642-fe0f",
              v: [
                "1f9b8-1f3fb-200d-2642-fe0f",
                "1f9b8-1f3fc-200d-2642-fe0f",
                "1f9b8-1f3fd-200d-2642-fe0f",
                "1f9b8-1f3fe-200d-2642-fe0f",
                "1f9b8-1f3ff-200d-2642-fe0f",
              ],
              a: "11.0",
            },
            {
              n: ["woman superhero", "female superhero"],
              u: "1f9b8-200d-2640-fe0f",
              v: [
                "1f9b8-1f3fb-200d-2640-fe0f",
                "1f9b8-1f3fc-200d-2640-fe0f",
                "1f9b8-1f3fd-200d-2640-fe0f",
                "1f9b8-1f3fe-200d-2640-fe0f",
                "1f9b8-1f3ff-200d-2640-fe0f",
              ],
              a: "11.0",
            },
            {
              n: ["supervillain"],
              u: "1f9b9",
              v: ["1f9b9-1f3fb", "1f9b9-1f3fc", "1f9b9-1f3fd", "1f9b9-1f3fe", "1f9b9-1f3ff"],
              a: "11.0",
            },
            {
              n: ["man supervillain", "male supervillain"],
              u: "1f9b9-200d-2642-fe0f",
              v: [
                "1f9b9-1f3fb-200d-2642-fe0f",
                "1f9b9-1f3fc-200d-2642-fe0f",
                "1f9b9-1f3fd-200d-2642-fe0f",
                "1f9b9-1f3fe-200d-2642-fe0f",
                "1f9b9-1f3ff-200d-2642-fe0f",
              ],
              a: "11.0",
            },
            {
              n: ["woman supervillain", "female supervillain"],
              u: "1f9b9-200d-2640-fe0f",
              v: [
                "1f9b9-1f3fb-200d-2640-fe0f",
                "1f9b9-1f3fc-200d-2640-fe0f",
                "1f9b9-1f3fd-200d-2640-fe0f",
                "1f9b9-1f3fe-200d-2640-fe0f",
                "1f9b9-1f3ff-200d-2640-fe0f",
              ],
              a: "11.0",
            },
            {
              n: ["mage"],
              u: "1f9d9",
              v: ["1f9d9-1f3fb", "1f9d9-1f3fc", "1f9d9-1f3fd", "1f9d9-1f3fe", "1f9d9-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man mage", "male mage"],
              u: "1f9d9-200d-2642-fe0f",
              v: [
                "1f9d9-1f3fb-200d-2642-fe0f",
                "1f9d9-1f3fc-200d-2642-fe0f",
                "1f9d9-1f3fd-200d-2642-fe0f",
                "1f9d9-1f3fe-200d-2642-fe0f",
                "1f9d9-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["woman mage", "female mage"],
              u: "1f9d9-200d-2640-fe0f",
              v: [
                "1f9d9-1f3fb-200d-2640-fe0f",
                "1f9d9-1f3fc-200d-2640-fe0f",
                "1f9d9-1f3fd-200d-2640-fe0f",
                "1f9d9-1f3fe-200d-2640-fe0f",
                "1f9d9-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["fairy"],
              u: "1f9da",
              v: ["1f9da-1f3fb", "1f9da-1f3fc", "1f9da-1f3fd", "1f9da-1f3fe", "1f9da-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man fairy", "male fairy"],
              u: "1f9da-200d-2642-fe0f",
              v: [
                "1f9da-1f3fb-200d-2642-fe0f",
                "1f9da-1f3fc-200d-2642-fe0f",
                "1f9da-1f3fd-200d-2642-fe0f",
                "1f9da-1f3fe-200d-2642-fe0f",
                "1f9da-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["woman fairy", "female fairy"],
              u: "1f9da-200d-2640-fe0f",
              v: [
                "1f9da-1f3fb-200d-2640-fe0f",
                "1f9da-1f3fc-200d-2640-fe0f",
                "1f9da-1f3fd-200d-2640-fe0f",
                "1f9da-1f3fe-200d-2640-fe0f",
                "1f9da-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["vampire"],
              u: "1f9db",
              v: ["1f9db-1f3fb", "1f9db-1f3fc", "1f9db-1f3fd", "1f9db-1f3fe", "1f9db-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man vampire", "male vampire"],
              u: "1f9db-200d-2642-fe0f",
              v: [
                "1f9db-1f3fb-200d-2642-fe0f",
                "1f9db-1f3fc-200d-2642-fe0f",
                "1f9db-1f3fd-200d-2642-fe0f",
                "1f9db-1f3fe-200d-2642-fe0f",
                "1f9db-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["woman vampire", "female vampire"],
              u: "1f9db-200d-2640-fe0f",
              v: [
                "1f9db-1f3fb-200d-2640-fe0f",
                "1f9db-1f3fc-200d-2640-fe0f",
                "1f9db-1f3fd-200d-2640-fe0f",
                "1f9db-1f3fe-200d-2640-fe0f",
                "1f9db-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["merperson"],
              u: "1f9dc",
              v: ["1f9dc-1f3fb", "1f9dc-1f3fc", "1f9dc-1f3fd", "1f9dc-1f3fe", "1f9dc-1f3ff"],
              a: "5.0",
            },
            {
              n: ["merman"],
              u: "1f9dc-200d-2642-fe0f",
              v: [
                "1f9dc-1f3fb-200d-2642-fe0f",
                "1f9dc-1f3fc-200d-2642-fe0f",
                "1f9dc-1f3fd-200d-2642-fe0f",
                "1f9dc-1f3fe-200d-2642-fe0f",
                "1f9dc-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["mermaid"],
              u: "1f9dc-200d-2640-fe0f",
              v: [
                "1f9dc-1f3fb-200d-2640-fe0f",
                "1f9dc-1f3fc-200d-2640-fe0f",
                "1f9dc-1f3fd-200d-2640-fe0f",
                "1f9dc-1f3fe-200d-2640-fe0f",
                "1f9dc-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["elf"],
              u: "1f9dd",
              v: ["1f9dd-1f3fb", "1f9dd-1f3fc", "1f9dd-1f3fd", "1f9dd-1f3fe", "1f9dd-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man elf", "male elf"],
              u: "1f9dd-200d-2642-fe0f",
              v: [
                "1f9dd-1f3fb-200d-2642-fe0f",
                "1f9dd-1f3fc-200d-2642-fe0f",
                "1f9dd-1f3fd-200d-2642-fe0f",
                "1f9dd-1f3fe-200d-2642-fe0f",
                "1f9dd-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["woman elf", "female elf"],
              u: "1f9dd-200d-2640-fe0f",
              v: [
                "1f9dd-1f3fb-200d-2640-fe0f",
                "1f9dd-1f3fc-200d-2640-fe0f",
                "1f9dd-1f3fd-200d-2640-fe0f",
                "1f9dd-1f3fe-200d-2640-fe0f",
                "1f9dd-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            { n: ["genie"], u: "1f9de", a: "5.0" },
            { n: ["man genie", "male genie"], u: "1f9de-200d-2642-fe0f", a: "5.0" },
            { n: ["woman genie", "female genie"], u: "1f9de-200d-2640-fe0f", a: "5.0" },
            { n: ["zombie"], u: "1f9df", a: "5.0" },
            { n: ["man zombie", "male zombie"], u: "1f9df-200d-2642-fe0f", a: "5.0" },
            { n: ["woman zombie", "female zombie"], u: "1f9df-200d-2640-fe0f", a: "5.0" },
            { n: ["troll"], u: "1f9cc", a: "14.0" },
            {
              n: ["massage", "face massage"],
              u: "1f486",
              v: ["1f486-1f3fb", "1f486-1f3fc", "1f486-1f3fd", "1f486-1f3fe", "1f486-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man getting massage", "man-getting-massage"],
              u: "1f486-200d-2642-fe0f",
              v: [
                "1f486-1f3fb-200d-2642-fe0f",
                "1f486-1f3fc-200d-2642-fe0f",
                "1f486-1f3fd-200d-2642-fe0f",
                "1f486-1f3fe-200d-2642-fe0f",
                "1f486-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman getting massage", "woman-getting-massage"],
              u: "1f486-200d-2640-fe0f",
              v: [
                "1f486-1f3fb-200d-2640-fe0f",
                "1f486-1f3fc-200d-2640-fe0f",
                "1f486-1f3fd-200d-2640-fe0f",
                "1f486-1f3fe-200d-2640-fe0f",
                "1f486-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["haircut"],
              u: "1f487",
              v: ["1f487-1f3fb", "1f487-1f3fc", "1f487-1f3fd", "1f487-1f3fe", "1f487-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man getting haircut", "man-getting-haircut"],
              u: "1f487-200d-2642-fe0f",
              v: [
                "1f487-1f3fb-200d-2642-fe0f",
                "1f487-1f3fc-200d-2642-fe0f",
                "1f487-1f3fd-200d-2642-fe0f",
                "1f487-1f3fe-200d-2642-fe0f",
                "1f487-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman getting haircut", "woman-getting-haircut"],
              u: "1f487-200d-2640-fe0f",
              v: [
                "1f487-1f3fb-200d-2640-fe0f",
                "1f487-1f3fc-200d-2640-fe0f",
                "1f487-1f3fd-200d-2640-fe0f",
                "1f487-1f3fe-200d-2640-fe0f",
                "1f487-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["walking", "pedestrian"],
              u: "1f6b6",
              v: ["1f6b6-1f3fb", "1f6b6-1f3fc", "1f6b6-1f3fd", "1f6b6-1f3fe", "1f6b6-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man walking", "man-walking"],
              u: "1f6b6-200d-2642-fe0f",
              v: [
                "1f6b6-1f3fb-200d-2642-fe0f",
                "1f6b6-1f3fc-200d-2642-fe0f",
                "1f6b6-1f3fd-200d-2642-fe0f",
                "1f6b6-1f3fe-200d-2642-fe0f",
                "1f6b6-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman walking", "woman-walking"],
              u: "1f6b6-200d-2640-fe0f",
              v: [
                "1f6b6-1f3fb-200d-2640-fe0f",
                "1f6b6-1f3fc-200d-2640-fe0f",
                "1f6b6-1f3fd-200d-2640-fe0f",
                "1f6b6-1f3fe-200d-2640-fe0f",
                "1f6b6-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["standing person"],
              u: "1f9cd",
              v: ["1f9cd-1f3fb", "1f9cd-1f3fc", "1f9cd-1f3fd", "1f9cd-1f3fe", "1f9cd-1f3ff"],
              a: "12.0",
            },
            {
              n: ["man standing"],
              u: "1f9cd-200d-2642-fe0f",
              v: [
                "1f9cd-1f3fb-200d-2642-fe0f",
                "1f9cd-1f3fc-200d-2642-fe0f",
                "1f9cd-1f3fd-200d-2642-fe0f",
                "1f9cd-1f3fe-200d-2642-fe0f",
                "1f9cd-1f3ff-200d-2642-fe0f",
              ],
              a: "12.0",
            },
            {
              n: ["woman standing"],
              u: "1f9cd-200d-2640-fe0f",
              v: [
                "1f9cd-1f3fb-200d-2640-fe0f",
                "1f9cd-1f3fc-200d-2640-fe0f",
                "1f9cd-1f3fd-200d-2640-fe0f",
                "1f9cd-1f3fe-200d-2640-fe0f",
                "1f9cd-1f3ff-200d-2640-fe0f",
              ],
              a: "12.0",
            },
            {
              n: ["kneeling person"],
              u: "1f9ce",
              v: ["1f9ce-1f3fb", "1f9ce-1f3fc", "1f9ce-1f3fd", "1f9ce-1f3fe", "1f9ce-1f3ff"],
              a: "12.0",
            },
            {
              n: ["man kneeling"],
              u: "1f9ce-200d-2642-fe0f",
              v: [
                "1f9ce-1f3fb-200d-2642-fe0f",
                "1f9ce-1f3fc-200d-2642-fe0f",
                "1f9ce-1f3fd-200d-2642-fe0f",
                "1f9ce-1f3fe-200d-2642-fe0f",
                "1f9ce-1f3ff-200d-2642-fe0f",
              ],
              a: "12.0",
            },
            {
              n: ["woman kneeling"],
              u: "1f9ce-200d-2640-fe0f",
              v: [
                "1f9ce-1f3fb-200d-2640-fe0f",
                "1f9ce-1f3fc-200d-2640-fe0f",
                "1f9ce-1f3fd-200d-2640-fe0f",
                "1f9ce-1f3fe-200d-2640-fe0f",
                "1f9ce-1f3ff-200d-2640-fe0f",
              ],
              a: "12.0",
            },
            {
              n: ["person with white cane", "person with probing cane"],
              u: "1f9d1-200d-1f9af",
              v: [
                "1f9d1-1f3fb-200d-1f9af",
                "1f9d1-1f3fc-200d-1f9af",
                "1f9d1-1f3fd-200d-1f9af",
                "1f9d1-1f3fe-200d-1f9af",
                "1f9d1-1f3ff-200d-1f9af",
              ],
              a: "12.1",
            },
            {
              n: ["man with white cane", "man with probing cane"],
              u: "1f468-200d-1f9af",
              v: [
                "1f468-1f3fb-200d-1f9af",
                "1f468-1f3fc-200d-1f9af",
                "1f468-1f3fd-200d-1f9af",
                "1f468-1f3fe-200d-1f9af",
                "1f468-1f3ff-200d-1f9af",
              ],
              a: "12.0",
            },
            {
              n: ["woman with white cane", "woman with probing cane"],
              u: "1f469-200d-1f9af",
              v: [
                "1f469-1f3fb-200d-1f9af",
                "1f469-1f3fc-200d-1f9af",
                "1f469-1f3fd-200d-1f9af",
                "1f469-1f3fe-200d-1f9af",
                "1f469-1f3ff-200d-1f9af",
              ],
              a: "12.0",
            },
            {
              n: ["person in motorized wheelchair"],
              u: "1f9d1-200d-1f9bc",
              v: [
                "1f9d1-1f3fb-200d-1f9bc",
                "1f9d1-1f3fc-200d-1f9bc",
                "1f9d1-1f3fd-200d-1f9bc",
                "1f9d1-1f3fe-200d-1f9bc",
                "1f9d1-1f3ff-200d-1f9bc",
              ],
              a: "12.1",
            },
            {
              n: ["man in motorized wheelchair"],
              u: "1f468-200d-1f9bc",
              v: [
                "1f468-1f3fb-200d-1f9bc",
                "1f468-1f3fc-200d-1f9bc",
                "1f468-1f3fd-200d-1f9bc",
                "1f468-1f3fe-200d-1f9bc",
                "1f468-1f3ff-200d-1f9bc",
              ],
              a: "12.0",
            },
            {
              n: ["woman in motorized wheelchair"],
              u: "1f469-200d-1f9bc",
              v: [
                "1f469-1f3fb-200d-1f9bc",
                "1f469-1f3fc-200d-1f9bc",
                "1f469-1f3fd-200d-1f9bc",
                "1f469-1f3fe-200d-1f9bc",
                "1f469-1f3ff-200d-1f9bc",
              ],
              a: "12.0",
            },
            {
              n: ["person in manual wheelchair"],
              u: "1f9d1-200d-1f9bd",
              v: [
                "1f9d1-1f3fb-200d-1f9bd",
                "1f9d1-1f3fc-200d-1f9bd",
                "1f9d1-1f3fd-200d-1f9bd",
                "1f9d1-1f3fe-200d-1f9bd",
                "1f9d1-1f3ff-200d-1f9bd",
              ],
              a: "12.1",
            },
            {
              n: ["man in manual wheelchair"],
              u: "1f468-200d-1f9bd",
              v: [
                "1f468-1f3fb-200d-1f9bd",
                "1f468-1f3fc-200d-1f9bd",
                "1f468-1f3fd-200d-1f9bd",
                "1f468-1f3fe-200d-1f9bd",
                "1f468-1f3ff-200d-1f9bd",
              ],
              a: "12.0",
            },
            {
              n: ["woman in manual wheelchair"],
              u: "1f469-200d-1f9bd",
              v: [
                "1f469-1f3fb-200d-1f9bd",
                "1f469-1f3fc-200d-1f9bd",
                "1f469-1f3fd-200d-1f9bd",
                "1f469-1f3fe-200d-1f9bd",
                "1f469-1f3ff-200d-1f9bd",
              ],
              a: "12.0",
            },
            {
              n: ["runner", "running"],
              u: "1f3c3",
              v: ["1f3c3-1f3fb", "1f3c3-1f3fc", "1f3c3-1f3fd", "1f3c3-1f3fe", "1f3c3-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man running", "man-running"],
              u: "1f3c3-200d-2642-fe0f",
              v: [
                "1f3c3-1f3fb-200d-2642-fe0f",
                "1f3c3-1f3fc-200d-2642-fe0f",
                "1f3c3-1f3fd-200d-2642-fe0f",
                "1f3c3-1f3fe-200d-2642-fe0f",
                "1f3c3-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman running", "woman-running"],
              u: "1f3c3-200d-2640-fe0f",
              v: [
                "1f3c3-1f3fb-200d-2640-fe0f",
                "1f3c3-1f3fc-200d-2640-fe0f",
                "1f3c3-1f3fd-200d-2640-fe0f",
                "1f3c3-1f3fe-200d-2640-fe0f",
                "1f3c3-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["dancer"],
              u: "1f483",
              v: ["1f483-1f3fb", "1f483-1f3fc", "1f483-1f3fd", "1f483-1f3fe", "1f483-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man dancing"],
              u: "1f57a",
              v: ["1f57a-1f3fb", "1f57a-1f3fc", "1f57a-1f3fd", "1f57a-1f3fe", "1f57a-1f3ff"],
              a: "3.0",
            },
            {
              n: ["person in suit levitating", "man in business suit levitating"],
              u: "1f574-fe0f",
              v: ["1f574-1f3fb", "1f574-1f3fc", "1f574-1f3fd", "1f574-1f3fe", "1f574-1f3ff"],
              a: "0.7",
            },
            { n: ["dancers", "woman with bunny ears"], u: "1f46f", a: "0.6" },
            {
              n: ["men with bunny ears", "men-with-bunny-ears-partying", "man-with-bunny-ears-partying"],
              u: "1f46f-200d-2642-fe0f",
              a: "4.0",
            },
            {
              n: ["women with bunny ears", "women-with-bunny-ears-partying", "woman-with-bunny-ears-partying"],
              u: "1f46f-200d-2640-fe0f",
              a: "4.0",
            },
            {
              n: ["person in steamy room"],
              u: "1f9d6",
              v: ["1f9d6-1f3fb", "1f9d6-1f3fc", "1f9d6-1f3fd", "1f9d6-1f3fe", "1f9d6-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man in steamy room"],
              u: "1f9d6-200d-2642-fe0f",
              v: [
                "1f9d6-1f3fb-200d-2642-fe0f",
                "1f9d6-1f3fc-200d-2642-fe0f",
                "1f9d6-1f3fd-200d-2642-fe0f",
                "1f9d6-1f3fe-200d-2642-fe0f",
                "1f9d6-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["woman in steamy room"],
              u: "1f9d6-200d-2640-fe0f",
              v: [
                "1f9d6-1f3fb-200d-2640-fe0f",
                "1f9d6-1f3fc-200d-2640-fe0f",
                "1f9d6-1f3fd-200d-2640-fe0f",
                "1f9d6-1f3fe-200d-2640-fe0f",
                "1f9d6-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["person climbing"],
              u: "1f9d7",
              v: ["1f9d7-1f3fb", "1f9d7-1f3fc", "1f9d7-1f3fd", "1f9d7-1f3fe", "1f9d7-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man climbing"],
              u: "1f9d7-200d-2642-fe0f",
              v: [
                "1f9d7-1f3fb-200d-2642-fe0f",
                "1f9d7-1f3fc-200d-2642-fe0f",
                "1f9d7-1f3fd-200d-2642-fe0f",
                "1f9d7-1f3fe-200d-2642-fe0f",
                "1f9d7-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["woman climbing"],
              u: "1f9d7-200d-2640-fe0f",
              v: [
                "1f9d7-1f3fb-200d-2640-fe0f",
                "1f9d7-1f3fc-200d-2640-fe0f",
                "1f9d7-1f3fd-200d-2640-fe0f",
                "1f9d7-1f3fe-200d-2640-fe0f",
                "1f9d7-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            { n: ["fencer"], u: "1f93a", a: "3.0" },
            {
              n: ["horse racing"],
              u: "1f3c7",
              v: ["1f3c7-1f3fb", "1f3c7-1f3fc", "1f3c7-1f3fd", "1f3c7-1f3fe", "1f3c7-1f3ff"],
              a: "1.0",
            },
            { n: ["skier"], u: "26f7-fe0f", a: "0.7" },
            {
              n: ["snowboarder"],
              u: "1f3c2",
              v: ["1f3c2-1f3fb", "1f3c2-1f3fc", "1f3c2-1f3fd", "1f3c2-1f3fe", "1f3c2-1f3ff"],
              a: "0.6",
            },
            {
              n: ["golfer", "person golfing"],
              u: "1f3cc-fe0f",
              v: ["1f3cc-1f3fb", "1f3cc-1f3fc", "1f3cc-1f3fd", "1f3cc-1f3fe", "1f3cc-1f3ff"],
              a: "0.7",
            },
            {
              n: ["man golfing", "man-golfing"],
              u: "1f3cc-fe0f-200d-2642-fe0f",
              v: [
                "1f3cc-1f3fb-200d-2642-fe0f",
                "1f3cc-1f3fc-200d-2642-fe0f",
                "1f3cc-1f3fd-200d-2642-fe0f",
                "1f3cc-1f3fe-200d-2642-fe0f",
                "1f3cc-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman golfing", "woman-golfing"],
              u: "1f3cc-fe0f-200d-2640-fe0f",
              v: [
                "1f3cc-1f3fb-200d-2640-fe0f",
                "1f3cc-1f3fc-200d-2640-fe0f",
                "1f3cc-1f3fd-200d-2640-fe0f",
                "1f3cc-1f3fe-200d-2640-fe0f",
                "1f3cc-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["surfer"],
              u: "1f3c4",
              v: ["1f3c4-1f3fb", "1f3c4-1f3fc", "1f3c4-1f3fd", "1f3c4-1f3fe", "1f3c4-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man surfing", "man-surfing"],
              u: "1f3c4-200d-2642-fe0f",
              v: [
                "1f3c4-1f3fb-200d-2642-fe0f",
                "1f3c4-1f3fc-200d-2642-fe0f",
                "1f3c4-1f3fd-200d-2642-fe0f",
                "1f3c4-1f3fe-200d-2642-fe0f",
                "1f3c4-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman surfing", "woman-surfing"],
              u: "1f3c4-200d-2640-fe0f",
              v: [
                "1f3c4-1f3fb-200d-2640-fe0f",
                "1f3c4-1f3fc-200d-2640-fe0f",
                "1f3c4-1f3fd-200d-2640-fe0f",
                "1f3c4-1f3fe-200d-2640-fe0f",
                "1f3c4-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["rowboat"],
              u: "1f6a3",
              v: ["1f6a3-1f3fb", "1f6a3-1f3fc", "1f6a3-1f3fd", "1f6a3-1f3fe", "1f6a3-1f3ff"],
              a: "1.0",
            },
            {
              n: ["man rowing boat", "man-rowing-boat"],
              u: "1f6a3-200d-2642-fe0f",
              v: [
                "1f6a3-1f3fb-200d-2642-fe0f",
                "1f6a3-1f3fc-200d-2642-fe0f",
                "1f6a3-1f3fd-200d-2642-fe0f",
                "1f6a3-1f3fe-200d-2642-fe0f",
                "1f6a3-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman rowing boat", "woman-rowing-boat"],
              u: "1f6a3-200d-2640-fe0f",
              v: [
                "1f6a3-1f3fb-200d-2640-fe0f",
                "1f6a3-1f3fc-200d-2640-fe0f",
                "1f6a3-1f3fd-200d-2640-fe0f",
                "1f6a3-1f3fe-200d-2640-fe0f",
                "1f6a3-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["swimmer"],
              u: "1f3ca",
              v: ["1f3ca-1f3fb", "1f3ca-1f3fc", "1f3ca-1f3fd", "1f3ca-1f3fe", "1f3ca-1f3ff"],
              a: "0.6",
            },
            {
              n: ["man swimming", "man-swimming"],
              u: "1f3ca-200d-2642-fe0f",
              v: [
                "1f3ca-1f3fb-200d-2642-fe0f",
                "1f3ca-1f3fc-200d-2642-fe0f",
                "1f3ca-1f3fd-200d-2642-fe0f",
                "1f3ca-1f3fe-200d-2642-fe0f",
                "1f3ca-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman swimming", "woman-swimming"],
              u: "1f3ca-200d-2640-fe0f",
              v: [
                "1f3ca-1f3fb-200d-2640-fe0f",
                "1f3ca-1f3fc-200d-2640-fe0f",
                "1f3ca-1f3fd-200d-2640-fe0f",
                "1f3ca-1f3fe-200d-2640-fe0f",
                "1f3ca-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["person with ball", "person bouncing ball"],
              u: "26f9-fe0f",
              v: ["26f9-1f3fb", "26f9-1f3fc", "26f9-1f3fd", "26f9-1f3fe", "26f9-1f3ff"],
              a: "0.7",
            },
            {
              n: ["man bouncing ball", "man-bouncing-ball"],
              u: "26f9-fe0f-200d-2642-fe0f",
              v: [
                "26f9-1f3fb-200d-2642-fe0f",
                "26f9-1f3fc-200d-2642-fe0f",
                "26f9-1f3fd-200d-2642-fe0f",
                "26f9-1f3fe-200d-2642-fe0f",
                "26f9-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman bouncing ball", "woman-bouncing-ball"],
              u: "26f9-fe0f-200d-2640-fe0f",
              v: [
                "26f9-1f3fb-200d-2640-fe0f",
                "26f9-1f3fc-200d-2640-fe0f",
                "26f9-1f3fd-200d-2640-fe0f",
                "26f9-1f3fe-200d-2640-fe0f",
                "26f9-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["weight lifter", "person lifting weights"],
              u: "1f3cb-fe0f",
              v: ["1f3cb-1f3fb", "1f3cb-1f3fc", "1f3cb-1f3fd", "1f3cb-1f3fe", "1f3cb-1f3ff"],
              a: "0.7",
            },
            {
              n: ["man lifting weights", "man-lifting-weights"],
              u: "1f3cb-fe0f-200d-2642-fe0f",
              v: [
                "1f3cb-1f3fb-200d-2642-fe0f",
                "1f3cb-1f3fc-200d-2642-fe0f",
                "1f3cb-1f3fd-200d-2642-fe0f",
                "1f3cb-1f3fe-200d-2642-fe0f",
                "1f3cb-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman lifting weights", "woman-lifting-weights"],
              u: "1f3cb-fe0f-200d-2640-fe0f",
              v: [
                "1f3cb-1f3fb-200d-2640-fe0f",
                "1f3cb-1f3fc-200d-2640-fe0f",
                "1f3cb-1f3fd-200d-2640-fe0f",
                "1f3cb-1f3fe-200d-2640-fe0f",
                "1f3cb-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["bicyclist"],
              u: "1f6b4",
              v: ["1f6b4-1f3fb", "1f6b4-1f3fc", "1f6b4-1f3fd", "1f6b4-1f3fe", "1f6b4-1f3ff"],
              a: "1.0",
            },
            {
              n: ["man biking", "man-biking"],
              u: "1f6b4-200d-2642-fe0f",
              v: [
                "1f6b4-1f3fb-200d-2642-fe0f",
                "1f6b4-1f3fc-200d-2642-fe0f",
                "1f6b4-1f3fd-200d-2642-fe0f",
                "1f6b4-1f3fe-200d-2642-fe0f",
                "1f6b4-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman biking", "woman-biking"],
              u: "1f6b4-200d-2640-fe0f",
              v: [
                "1f6b4-1f3fb-200d-2640-fe0f",
                "1f6b4-1f3fc-200d-2640-fe0f",
                "1f6b4-1f3fd-200d-2640-fe0f",
                "1f6b4-1f3fe-200d-2640-fe0f",
                "1f6b4-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["mountain bicyclist"],
              u: "1f6b5",
              v: ["1f6b5-1f3fb", "1f6b5-1f3fc", "1f6b5-1f3fd", "1f6b5-1f3fe", "1f6b5-1f3ff"],
              a: "1.0",
            },
            {
              n: ["man mountain biking", "man-mountain-biking"],
              u: "1f6b5-200d-2642-fe0f",
              v: [
                "1f6b5-1f3fb-200d-2642-fe0f",
                "1f6b5-1f3fc-200d-2642-fe0f",
                "1f6b5-1f3fd-200d-2642-fe0f",
                "1f6b5-1f3fe-200d-2642-fe0f",
                "1f6b5-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman mountain biking", "woman-mountain-biking"],
              u: "1f6b5-200d-2640-fe0f",
              v: [
                "1f6b5-1f3fb-200d-2640-fe0f",
                "1f6b5-1f3fc-200d-2640-fe0f",
                "1f6b5-1f3fd-200d-2640-fe0f",
                "1f6b5-1f3fe-200d-2640-fe0f",
                "1f6b5-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["person doing cartwheel"],
              u: "1f938",
              v: ["1f938-1f3fb", "1f938-1f3fc", "1f938-1f3fd", "1f938-1f3fe", "1f938-1f3ff"],
              a: "3.0",
            },
            {
              n: ["man cartwheeling", "man-cartwheeling"],
              u: "1f938-200d-2642-fe0f",
              v: [
                "1f938-1f3fb-200d-2642-fe0f",
                "1f938-1f3fc-200d-2642-fe0f",
                "1f938-1f3fd-200d-2642-fe0f",
                "1f938-1f3fe-200d-2642-fe0f",
                "1f938-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman cartwheeling", "woman-cartwheeling"],
              u: "1f938-200d-2640-fe0f",
              v: [
                "1f938-1f3fb-200d-2640-fe0f",
                "1f938-1f3fc-200d-2640-fe0f",
                "1f938-1f3fd-200d-2640-fe0f",
                "1f938-1f3fe-200d-2640-fe0f",
                "1f938-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            { n: ["wrestlers"], u: "1f93c", a: "3.0" },
            { n: ["men wrestling", "man-wrestling"], u: "1f93c-200d-2642-fe0f", a: "4.0" },
            { n: ["women wrestling", "woman-wrestling"], u: "1f93c-200d-2640-fe0f", a: "4.0" },
            {
              n: ["water polo"],
              u: "1f93d",
              v: ["1f93d-1f3fb", "1f93d-1f3fc", "1f93d-1f3fd", "1f93d-1f3fe", "1f93d-1f3ff"],
              a: "3.0",
            },
            {
              n: ["man playing water polo", "man-playing-water-polo"],
              u: "1f93d-200d-2642-fe0f",
              v: [
                "1f93d-1f3fb-200d-2642-fe0f",
                "1f93d-1f3fc-200d-2642-fe0f",
                "1f93d-1f3fd-200d-2642-fe0f",
                "1f93d-1f3fe-200d-2642-fe0f",
                "1f93d-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman playing water polo", "woman-playing-water-polo"],
              u: "1f93d-200d-2640-fe0f",
              v: [
                "1f93d-1f3fb-200d-2640-fe0f",
                "1f93d-1f3fc-200d-2640-fe0f",
                "1f93d-1f3fd-200d-2640-fe0f",
                "1f93d-1f3fe-200d-2640-fe0f",
                "1f93d-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["handball"],
              u: "1f93e",
              v: ["1f93e-1f3fb", "1f93e-1f3fc", "1f93e-1f3fd", "1f93e-1f3fe", "1f93e-1f3ff"],
              a: "3.0",
            },
            {
              n: ["man playing handball", "man-playing-handball"],
              u: "1f93e-200d-2642-fe0f",
              v: [
                "1f93e-1f3fb-200d-2642-fe0f",
                "1f93e-1f3fc-200d-2642-fe0f",
                "1f93e-1f3fd-200d-2642-fe0f",
                "1f93e-1f3fe-200d-2642-fe0f",
                "1f93e-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman playing handball", "woman-playing-handball"],
              u: "1f93e-200d-2640-fe0f",
              v: [
                "1f93e-1f3fb-200d-2640-fe0f",
                "1f93e-1f3fc-200d-2640-fe0f",
                "1f93e-1f3fd-200d-2640-fe0f",
                "1f93e-1f3fe-200d-2640-fe0f",
                "1f93e-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["juggling"],
              u: "1f939",
              v: ["1f939-1f3fb", "1f939-1f3fc", "1f939-1f3fd", "1f939-1f3fe", "1f939-1f3ff"],
              a: "3.0",
            },
            {
              n: ["man juggling", "man-juggling"],
              u: "1f939-200d-2642-fe0f",
              v: [
                "1f939-1f3fb-200d-2642-fe0f",
                "1f939-1f3fc-200d-2642-fe0f",
                "1f939-1f3fd-200d-2642-fe0f",
                "1f939-1f3fe-200d-2642-fe0f",
                "1f939-1f3ff-200d-2642-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["woman juggling", "woman-juggling"],
              u: "1f939-200d-2640-fe0f",
              v: [
                "1f939-1f3fb-200d-2640-fe0f",
                "1f939-1f3fc-200d-2640-fe0f",
                "1f939-1f3fd-200d-2640-fe0f",
                "1f939-1f3fe-200d-2640-fe0f",
                "1f939-1f3ff-200d-2640-fe0f",
              ],
              a: "4.0",
            },
            {
              n: ["person in lotus position"],
              u: "1f9d8",
              v: ["1f9d8-1f3fb", "1f9d8-1f3fc", "1f9d8-1f3fd", "1f9d8-1f3fe", "1f9d8-1f3ff"],
              a: "5.0",
            },
            {
              n: ["man in lotus position"],
              u: "1f9d8-200d-2642-fe0f",
              v: [
                "1f9d8-1f3fb-200d-2642-fe0f",
                "1f9d8-1f3fc-200d-2642-fe0f",
                "1f9d8-1f3fd-200d-2642-fe0f",
                "1f9d8-1f3fe-200d-2642-fe0f",
                "1f9d8-1f3ff-200d-2642-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["woman in lotus position"],
              u: "1f9d8-200d-2640-fe0f",
              v: [
                "1f9d8-1f3fb-200d-2640-fe0f",
                "1f9d8-1f3fc-200d-2640-fe0f",
                "1f9d8-1f3fd-200d-2640-fe0f",
                "1f9d8-1f3fe-200d-2640-fe0f",
                "1f9d8-1f3ff-200d-2640-fe0f",
              ],
              a: "5.0",
            },
            {
              n: ["bath"],
              u: "1f6c0",
              v: ["1f6c0-1f3fb", "1f6c0-1f3fc", "1f6c0-1f3fd", "1f6c0-1f3fe", "1f6c0-1f3ff"],
              a: "0.6",
            },
            {
              n: ["sleeping accommodation"],
              u: "1f6cc",
              v: ["1f6cc-1f3fb", "1f6cc-1f3fc", "1f6cc-1f3fd", "1f6cc-1f3fe", "1f6cc-1f3ff"],
              a: "1.0",
            },
            {
              n: ["people holding hands"],
              u: "1f9d1-200d-1f91d-200d-1f9d1",
              v: [
                "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",
                "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc",
                "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd",
                "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe",
                "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff",
                "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb",
                "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",
                "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd",
                "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe",
                "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff",
                "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb",
                "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc",
                "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",
                "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe",
                "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff",
                "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb",
                "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc",
                "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd",
                "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",
                "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff",
                "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb",
                "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc",
                "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd",
                "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe",
                "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff",
              ],
              a: "12.0",
            },
            {
              n: ["women holding hands", "two women holding hands"],
              u: "1f46d",
              v: [
                "1f46d-1f3fb",
                "1f46d-1f3fc",
                "1f46d-1f3fd",
                "1f46d-1f3fe",
                "1f46d-1f3ff",
                "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc",
                "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd",
                "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe",
                "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff",
                "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb",
                "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd",
                "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe",
                "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff",
                "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb",
                "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc",
                "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe",
                "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff",
                "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb",
                "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc",
                "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd",
                "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff",
                "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb",
                "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc",
                "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd",
                "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe",
              ],
              a: "1.0",
            },
            {
              n: ["couple", "man and woman holding hands", "woman and man holding hands"],
              u: "1f46b",
              v: [
                "1f46b-1f3fb",
                "1f46b-1f3fc",
                "1f46b-1f3fd",
                "1f46b-1f3fe",
                "1f46b-1f3ff",
                "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc",
                "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd",
                "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe",
                "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff",
                "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb",
                "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd",
                "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe",
                "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff",
                "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb",
                "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc",
                "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe",
                "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff",
                "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb",
                "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc",
                "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd",
                "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff",
                "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb",
                "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc",
                "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd",
                "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe",
              ],
              a: "0.6",
            },
            {
              n: ["men holding hands", "two men holding hands"],
              u: "1f46c",
              v: [
                "1f46c-1f3fb",
                "1f46c-1f3fc",
                "1f46c-1f3fd",
                "1f46c-1f3fe",
                "1f46c-1f3ff",
                "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc",
                "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd",
                "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe",
                "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff",
                "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb",
                "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd",
                "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe",
                "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff",
                "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb",
                "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc",
                "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe",
                "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff",
                "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb",
                "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc",
                "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd",
                "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff",
                "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb",
                "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc",
                "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd",
                "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe",
              ],
              a: "1.0",
            },
            {
              n: ["kiss", "couplekiss"],
              u: "1f48f",
              v: [
                "1f48f-1f3fb",
                "1f48f-1f3fc",
                "1f48f-1f3fd",
                "1f48f-1f3fe",
                "1f48f-1f3ff",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
              ],
              a: "0.6",
            },
            {
              n: ["woman-kiss-man", "kiss: woman, man"],
              u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",
              v: [
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
              ],
              a: "2.0",
            },
            {
              n: ["man-kiss-man", "kiss: man, man"],
              u: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",
              v: [
                "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
              ],
              a: "2.0",
            },
            {
              n: ["woman-kiss-woman", "kiss: woman, woman"],
              u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",
              v: [
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
              ],
              a: "2.0",
            },
            {
              n: ["couple with heart"],
              u: "1f491",
              v: [
                "1f491-1f3fb",
                "1f491-1f3fc",
                "1f491-1f3fd",
                "1f491-1f3fe",
                "1f491-1f3ff",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe",
                "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe",
                "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe",
                "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd",
                "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd",
                "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe",
              ],
              a: "0.6",
            },
            {
              n: ["woman-heart-man", "couple with heart: woman, man"],
              u: "1f469-200d-2764-fe0f-200d-1f468",
              v: [
                "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",
              ],
              a: "2.0",
            },
            {
              n: ["man-heart-man", "couple with heart: man, man"],
              u: "1f468-200d-2764-fe0f-200d-1f468",
              v: [
                "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",
                "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",
              ],
              a: "2.0",
            },
            {
              n: ["woman-heart-woman", "couple with heart: woman, woman"],
              u: "1f469-200d-2764-fe0f-200d-1f469",
              v: [
                "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe",
                "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe",
                "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe",
                "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe",
                "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe",
                "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff",
              ],
              a: "2.0",
            },
            { n: ["family"], u: "1f46a", a: "0.6" },
            { n: ["man-woman-boy", "family: man, woman, boy"], u: "1f468-200d-1f469-200d-1f466", a: "2.0" },
            { n: ["man-woman-girl", "family: man, woman, girl"], u: "1f468-200d-1f469-200d-1f467", a: "2.0" },
            {
              n: ["man-woman-girl-boy", "family: man, woman, girl, boy"],
              u: "1f468-200d-1f469-200d-1f467-200d-1f466",
              a: "2.0",
            },
            {
              n: ["man-woman-boy-boy", "family: man, woman, boy, boy"],
              u: "1f468-200d-1f469-200d-1f466-200d-1f466",
              a: "2.0",
            },
            {
              n: ["man-woman-girl-girl", "family: man, woman, girl, girl"],
              u: "1f468-200d-1f469-200d-1f467-200d-1f467",
              a: "2.0",
            },
            { n: ["man-man-boy", "family: man, man, boy"], u: "1f468-200d-1f468-200d-1f466", a: "2.0" },
            { n: ["man-man-girl", "family: man, man, girl"], u: "1f468-200d-1f468-200d-1f467", a: "2.0" },
            {
              n: ["man-man-girl-boy", "family: man, man, girl, boy"],
              u: "1f468-200d-1f468-200d-1f467-200d-1f466",
              a: "2.0",
            },
            {
              n: ["man-man-boy-boy", "family: man, man, boy, boy"],
              u: "1f468-200d-1f468-200d-1f466-200d-1f466",
              a: "2.0",
            },
            {
              n: ["man-man-girl-girl", "family: man, man, girl, girl"],
              u: "1f468-200d-1f468-200d-1f467-200d-1f467",
              a: "2.0",
            },
            { n: ["woman-woman-boy", "family: woman, woman, boy"], u: "1f469-200d-1f469-200d-1f466", a: "2.0" },
            { n: ["woman-woman-girl", "family: woman, woman, girl"], u: "1f469-200d-1f469-200d-1f467", a: "2.0" },
            {
              n: ["woman-woman-girl-boy", "family: woman, woman, girl, boy"],
              u: "1f469-200d-1f469-200d-1f467-200d-1f466",
              a: "2.0",
            },
            {
              n: ["woman-woman-boy-boy", "family: woman, woman, boy, boy"],
              u: "1f469-200d-1f469-200d-1f466-200d-1f466",
              a: "2.0",
            },
            {
              n: ["woman-woman-girl-girl", "family: woman, woman, girl, girl"],
              u: "1f469-200d-1f469-200d-1f467-200d-1f467",
              a: "2.0",
            },
            { n: ["man-boy", "family: man, boy"], u: "1f468-200d-1f466", a: "4.0" },
            { n: ["man-boy-boy", "family: man, boy, boy"], u: "1f468-200d-1f466-200d-1f466", a: "4.0" },
            { n: ["man-girl", "family: man, girl"], u: "1f468-200d-1f467", a: "4.0" },
            { n: ["man-girl-boy", "family: man, girl, boy"], u: "1f468-200d-1f467-200d-1f466", a: "4.0" },
            { n: ["man-girl-girl", "family: man, girl, girl"], u: "1f468-200d-1f467-200d-1f467", a: "4.0" },
            { n: ["woman-boy", "family: woman, boy"], u: "1f469-200d-1f466", a: "4.0" },
            { n: ["woman-boy-boy", "family: woman, boy, boy"], u: "1f469-200d-1f466-200d-1f466", a: "4.0" },
            { n: ["woman-girl", "family: woman, girl"], u: "1f469-200d-1f467", a: "4.0" },
            { n: ["woman-girl-boy", "family: woman, girl, boy"], u: "1f469-200d-1f467-200d-1f466", a: "4.0" },
            { n: ["woman-girl-girl", "family: woman, girl, girl"], u: "1f469-200d-1f467-200d-1f467", a: "4.0" },
            { n: ["speaking head", "speaking head in silhouette"], u: "1f5e3-fe0f", a: "0.7" },
            { n: ["bust in silhouette"], u: "1f464", a: "0.6" },
            { n: ["busts in silhouette"], u: "1f465", a: "1.0" },
            { n: ["people hugging"], u: "1fac2", a: "13.0" },
            { n: ["footprints"], u: "1f463", a: "0.6" },
          ],
          animals_nature: [
            { n: ["monkey face"], u: "1f435", a: "0.6" },
            { n: ["monkey"], u: "1f412", a: "0.6" },
            { n: ["gorilla"], u: "1f98d", a: "3.0" },
            { n: ["orangutan"], u: "1f9a7", a: "12.0" },
            { n: ["dog", "dog face"], u: "1f436", a: "0.6" },
            { n: ["dog", "dog2"], u: "1f415", a: "0.7" },
            { n: ["guide dog"], u: "1f9ae", a: "12.0" },
            { n: ["service dog"], u: "1f415-200d-1f9ba", a: "12.0" },
            { n: ["poodle"], u: "1f429", a: "0.6" },
            { n: ["wolf", "wolf face"], u: "1f43a", a: "0.6" },
            { n: ["fox face"], u: "1f98a", a: "3.0" },
            { n: ["raccoon"], u: "1f99d", a: "11.0" },
            { n: ["cat", "cat face"], u: "1f431", a: "0.6" },
            { n: ["cat", "cat2"], u: "1f408", a: "0.7" },
            { n: ["black cat"], u: "1f408-200d-2b1b", a: "13.0" },
            { n: ["lion face"], u: "1f981", a: "1.0" },
            { n: ["tiger", "tiger face"], u: "1f42f", a: "0.6" },
            { n: ["tiger", "tiger2"], u: "1f405", a: "1.0" },
            { n: ["leopard"], u: "1f406", a: "1.0" },
            { n: ["horse", "horse face"], u: "1f434", a: "0.6" },
            { n: ["horse", "racehorse"], u: "1f40e", a: "0.6" },
            { n: ["unicorn face"], u: "1f984", a: "1.0" },
            { n: ["zebra face"], u: "1f993", a: "5.0" },
            { n: ["deer"], u: "1f98c", a: "3.0" },
            { n: ["bison"], u: "1f9ac", a: "13.0" },
            { n: ["cow", "cow face"], u: "1f42e", a: "0.6" },
            { n: ["ox"], u: "1f402", a: "1.0" },
            { n: ["water buffalo"], u: "1f403", a: "1.0" },
            { n: ["cow", "cow2"], u: "1f404", a: "1.0" },
            { n: ["pig", "pig face"], u: "1f437", a: "0.6" },
            { n: ["pig", "pig2"], u: "1f416", a: "1.0" },
            { n: ["boar"], u: "1f417", a: "0.6" },
            { n: ["pig nose"], u: "1f43d", a: "0.6" },
            { n: ["ram"], u: "1f40f", a: "1.0" },
            { n: ["sheep"], u: "1f411", a: "0.6" },
            { n: ["goat"], u: "1f410", a: "1.0" },
            { n: ["dromedary camel"], u: "1f42a", a: "1.0" },
            { n: ["camel", "bactrian camel"], u: "1f42b", a: "0.6" },
            { n: ["llama"], u: "1f999", a: "11.0" },
            { n: ["giraffe face"], u: "1f992", a: "5.0" },
            { n: ["elephant"], u: "1f418", a: "0.6" },
            { n: ["mammoth"], u: "1f9a3", a: "13.0" },
            { n: ["rhinoceros"], u: "1f98f", a: "3.0" },
            { n: ["hippopotamus"], u: "1f99b", a: "11.0" },
            { n: ["mouse", "mouse face"], u: "1f42d", a: "0.6" },
            { n: ["mouse", "mouse2"], u: "1f401", a: "1.0" },
            { n: ["rat"], u: "1f400", a: "1.0" },
            { n: ["hamster", "hamster face"], u: "1f439", a: "0.6" },
            { n: ["rabbit", "rabbit face"], u: "1f430", a: "0.6" },
            { n: ["rabbit", "rabbit2"], u: "1f407", a: "1.0" },
            { n: ["chipmunk"], u: "1f43f-fe0f", a: "0.7" },
            { n: ["beaver"], u: "1f9ab", a: "13.0" },
            { n: ["hedgehog"], u: "1f994", a: "5.0" },
            { n: ["bat"], u: "1f987", a: "3.0" },
            { n: ["bear", "bear face"], u: "1f43b", a: "0.6" },
            { n: ["polar bear"], u: "1f43b-200d-2744-fe0f", a: "13.0" },
            { n: ["koala"], u: "1f428", a: "0.6" },
            { n: ["panda face"], u: "1f43c", a: "0.6" },
            { n: ["sloth"], u: "1f9a5", a: "12.0" },
            { n: ["otter"], u: "1f9a6", a: "12.0" },
            { n: ["skunk"], u: "1f9a8", a: "12.0" },
            { n: ["kangaroo"], u: "1f998", a: "11.0" },
            { n: ["badger"], u: "1f9a1", a: "11.0" },
            { n: ["feet", "paw prints"], u: "1f43e", a: "0.6" },
            { n: ["turkey"], u: "1f983", a: "1.0" },
            { n: ["chicken"], u: "1f414", a: "0.6" },
            { n: ["rooster"], u: "1f413", a: "1.0" },
            { n: ["hatching chick"], u: "1f423", a: "0.6" },
            { n: ["baby chick"], u: "1f424", a: "0.6" },
            { n: ["hatched chick", "front-facing baby chick"], u: "1f425", a: "0.6" },
            { n: ["bird"], u: "1f426", a: "0.6" },
            { n: ["penguin"], u: "1f427", a: "0.6" },
            { n: ["dove", "dove of peace"], u: "1f54a-fe0f", a: "0.7" },
            { n: ["eagle"], u: "1f985", a: "3.0" },
            { n: ["duck"], u: "1f986", a: "3.0" },
            { n: ["swan"], u: "1f9a2", a: "11.0" },
            { n: ["owl"], u: "1f989", a: "3.0" },
            { n: ["dodo"], u: "1f9a4", a: "13.0" },
            { n: ["feather"], u: "1fab6", a: "13.0" },
            { n: ["flamingo"], u: "1f9a9", a: "12.0" },
            { n: ["peacock"], u: "1f99a", a: "11.0" },
            { n: ["parrot"], u: "1f99c", a: "11.0" },
            { n: ["frog", "frog face"], u: "1f438", a: "0.6" },
            { n: ["crocodile"], u: "1f40a", a: "1.0" },
            { n: ["turtle"], u: "1f422", a: "0.6" },
            { n: ["lizard"], u: "1f98e", a: "3.0" },
            { n: ["snake"], u: "1f40d", a: "0.6" },
            { n: ["dragon face"], u: "1f432", a: "0.6" },
            { n: ["dragon"], u: "1f409", a: "1.0" },
            { n: ["sauropod"], u: "1f995", a: "5.0" },
            { n: ["t-rex"], u: "1f996", a: "5.0" },
            { n: ["whale", "spouting whale"], u: "1f433", a: "0.6" },
            { n: ["whale", "whale2"], u: "1f40b", a: "1.0" },
            { n: ["dolphin", "flipper"], u: "1f42c", a: "0.6" },
            { n: ["seal"], u: "1f9ad", a: "13.0" },
            { n: ["fish"], u: "1f41f", a: "0.6" },
            { n: ["tropical fish"], u: "1f420", a: "0.6" },
            { n: ["blowfish"], u: "1f421", a: "0.6" },
            { n: ["shark"], u: "1f988", a: "3.0" },
            { n: ["octopus"], u: "1f419", a: "0.6" },
            { n: ["shell", "spiral shell"], u: "1f41a", a: "0.6" },
            { n: ["coral"], u: "1fab8", a: "14.0" },
            { n: ["snail"], u: "1f40c", a: "0.6" },
            { n: ["butterfly"], u: "1f98b", a: "3.0" },
            { n: ["bug"], u: "1f41b", a: "0.6" },
            { n: ["ant"], u: "1f41c", a: "0.6" },
            { n: ["bee", "honeybee"], u: "1f41d", a: "0.6" },
            { n: ["beetle"], u: "1fab2", a: "13.0" },
            { n: ["ladybug", "lady beetle"], u: "1f41e", a: "0.6" },
            { n: ["cricket"], u: "1f997", a: "5.0" },
            { n: ["cockroach"], u: "1fab3", a: "13.0" },
            { n: ["spider"], u: "1f577-fe0f", a: "0.7" },
            { n: ["spider web"], u: "1f578-fe0f", a: "0.7" },
            { n: ["scorpion"], u: "1f982", a: "1.0" },
            { n: ["mosquito"], u: "1f99f", a: "11.0" },
            { n: ["fly"], u: "1fab0", a: "13.0" },
            { n: ["worm"], u: "1fab1", a: "13.0" },
            { n: ["microbe"], u: "1f9a0", a: "11.0" },
            { n: ["bouquet"], u: "1f490", a: "0.6" },
            { n: ["cherry blossom"], u: "1f338", a: "0.6" },
            { n: ["white flower"], u: "1f4ae", a: "0.6" },
            { n: ["lotus"], u: "1fab7", a: "14.0" },
            { n: ["rosette"], u: "1f3f5-fe0f", a: "0.7" },
            { n: ["rose"], u: "1f339", a: "0.6" },
            { n: ["wilted flower"], u: "1f940", a: "3.0" },
            { n: ["hibiscus"], u: "1f33a", a: "0.6" },
            { n: ["sunflower"], u: "1f33b", a: "0.6" },
            { n: ["blossom"], u: "1f33c", a: "0.6" },
            { n: ["tulip"], u: "1f337", a: "0.6" },
            { n: ["seedling"], u: "1f331", a: "0.6" },
            { n: ["potted plant"], u: "1fab4", a: "13.0" },
            { n: ["evergreen tree"], u: "1f332", a: "1.0" },
            { n: ["deciduous tree"], u: "1f333", a: "1.0" },
            { n: ["palm tree"], u: "1f334", a: "0.6" },
            { n: ["cactus"], u: "1f335", a: "0.6" },
            { n: ["ear of rice"], u: "1f33e", a: "0.6" },
            { n: ["herb"], u: "1f33f", a: "0.6" },
            { n: ["shamrock"], u: "2618-fe0f", a: "1.0" },
            { n: ["four leaf clover"], u: "1f340", a: "0.6" },
            { n: ["maple leaf"], u: "1f341", a: "0.6" },
            { n: ["fallen leaf"], u: "1f342", a: "0.6" },
            { n: ["leaves", "leaf fluttering in wind"], u: "1f343", a: "0.6" },
            { n: ["empty nest"], u: "1fab9", a: "14.0" },
            { n: ["nest with eggs"], u: "1faba", a: "14.0" },
          ],
          food_drink: [
            { n: ["grapes"], u: "1f347", a: "0.6" },
            { n: ["melon"], u: "1f348", a: "0.6" },
            { n: ["watermelon"], u: "1f349", a: "0.6" },
            { n: ["tangerine"], u: "1f34a", a: "0.6" },
            { n: ["lemon"], u: "1f34b", a: "1.0" },
            { n: ["banana"], u: "1f34c", a: "0.6" },
            { n: ["pineapple"], u: "1f34d", a: "0.6" },
            { n: ["mango"], u: "1f96d", a: "11.0" },
            { n: ["apple", "red apple"], u: "1f34e", a: "0.6" },
            { n: ["green apple"], u: "1f34f", a: "0.6" },
            { n: ["pear"], u: "1f350", a: "1.0" },
            { n: ["peach"], u: "1f351", a: "0.6" },
            { n: ["cherries"], u: "1f352", a: "0.6" },
            { n: ["strawberry"], u: "1f353", a: "0.6" },
            { n: ["blueberries"], u: "1fad0", a: "13.0" },
            { n: ["kiwifruit"], u: "1f95d", a: "3.0" },
            { n: ["tomato"], u: "1f345", a: "0.6" },
            { n: ["olive"], u: "1fad2", a: "13.0" },
            { n: ["coconut"], u: "1f965", a: "5.0" },
            { n: ["avocado"], u: "1f951", a: "3.0" },
            { n: ["eggplant", "aubergine"], u: "1f346", a: "0.6" },
            { n: ["potato"], u: "1f954", a: "3.0" },
            { n: ["carrot"], u: "1f955", a: "3.0" },
            { n: ["corn", "ear of maize"], u: "1f33d", a: "0.6" },
            { n: ["hot pepper"], u: "1f336-fe0f", a: "0.7" },
            { n: ["bell pepper"], u: "1fad1", a: "13.0" },
            { n: ["cucumber"], u: "1f952", a: "3.0" },
            { n: ["leafy green"], u: "1f96c", a: "11.0" },
            { n: ["broccoli"], u: "1f966", a: "5.0" },
            { n: ["garlic"], u: "1f9c4", a: "12.0" },
            { n: ["onion"], u: "1f9c5", a: "12.0" },
            { n: ["mushroom"], u: "1f344", a: "0.6" },
            { n: ["peanuts"], u: "1f95c", a: "3.0" },
            { n: ["beans"], u: "1fad8", a: "14.0" },
            { n: ["chestnut"], u: "1f330", a: "0.6" },
            { n: ["bread"], u: "1f35e", a: "0.6" },
            { n: ["croissant"], u: "1f950", a: "3.0" },
            { n: ["baguette bread"], u: "1f956", a: "3.0" },
            { n: ["flatbread"], u: "1fad3", a: "13.0" },
            { n: ["pretzel"], u: "1f968", a: "5.0" },
            { n: ["bagel"], u: "1f96f", a: "11.0" },
            { n: ["pancakes"], u: "1f95e", a: "3.0" },
            { n: ["waffle"], u: "1f9c7", a: "12.0" },
            { n: ["cheese wedge"], u: "1f9c0", a: "1.0" },
            { n: ["meat on bone"], u: "1f356", a: "0.6" },
            { n: ["poultry leg"], u: "1f357", a: "0.6" },
            { n: ["cut of meat"], u: "1f969", a: "5.0" },
            { n: ["bacon"], u: "1f953", a: "3.0" },
            { n: ["hamburger"], u: "1f354", a: "0.6" },
            { n: ["fries", "french fries"], u: "1f35f", a: "0.6" },
            { n: ["pizza", "slice of pizza"], u: "1f355", a: "0.6" },
            { n: ["hotdog", "hot dog"], u: "1f32d", a: "1.0" },
            { n: ["sandwich"], u: "1f96a", a: "5.0" },
            { n: ["taco"], u: "1f32e", a: "1.0" },
            { n: ["burrito"], u: "1f32f", a: "1.0" },
            { n: ["tamale"], u: "1fad4", a: "13.0" },
            { n: ["stuffed flatbread"], u: "1f959", a: "3.0" },
            { n: ["falafel"], u: "1f9c6", a: "12.0" },
            { n: ["egg"], u: "1f95a", a: "3.0" },
            { n: ["cooking", "fried egg"], u: "1f373", a: "0.6" },
            { n: ["shallow pan of food"], u: "1f958", a: "3.0" },
            { n: ["stew", "pot of food"], u: "1f372", a: "0.6" },
            { n: ["fondue"], u: "1fad5", a: "13.0" },
            { n: ["bowl with spoon"], u: "1f963", a: "5.0" },
            { n: ["green salad"], u: "1f957", a: "3.0" },
            { n: ["popcorn"], u: "1f37f", a: "1.0" },
            { n: ["butter"], u: "1f9c8", a: "12.0" },
            { n: ["salt", "salt shaker"], u: "1f9c2", a: "11.0" },
            { n: ["canned food"], u: "1f96b", a: "5.0" },
            { n: ["bento", "bento box"], u: "1f371", a: "0.6" },
            { n: ["rice cracker"], u: "1f358", a: "0.6" },
            { n: ["rice ball"], u: "1f359", a: "0.6" },
            { n: ["rice", "cooked rice"], u: "1f35a", a: "0.6" },
            { n: ["curry", "curry and rice"], u: "1f35b", a: "0.6" },
            { n: ["ramen", "steaming bowl"], u: "1f35c", a: "0.6" },
            { n: ["spaghetti"], u: "1f35d", a: "0.6" },
            { n: ["sweet potato", "roasted sweet potato"], u: "1f360", a: "0.6" },
            { n: ["oden"], u: "1f362", a: "0.6" },
            { n: ["sushi"], u: "1f363", a: "0.6" },
            { n: ["fried shrimp"], u: "1f364", a: "0.6" },
            { n: ["fish cake", "fish cake with swirl design"], u: "1f365", a: "0.6" },
            { n: ["moon cake"], u: "1f96e", a: "11.0" },
            { n: ["dango"], u: "1f361", a: "0.6" },
            { n: ["dumpling"], u: "1f95f", a: "5.0" },
            { n: ["fortune cookie"], u: "1f960", a: "5.0" },
            { n: ["takeout box"], u: "1f961", a: "5.0" },
            { n: ["crab"], u: "1f980", a: "1.0" },
            { n: ["lobster"], u: "1f99e", a: "11.0" },
            { n: ["shrimp"], u: "1f990", a: "3.0" },
            { n: ["squid"], u: "1f991", a: "3.0" },
            { n: ["oyster"], u: "1f9aa", a: "12.0" },
            { n: ["icecream", "soft ice cream"], u: "1f366", a: "0.6" },
            { n: ["shaved ice"], u: "1f367", a: "0.6" },
            { n: ["ice cream"], u: "1f368", a: "0.6" },
            { n: ["doughnut"], u: "1f369", a: "0.6" },
            { n: ["cookie"], u: "1f36a", a: "0.6" },
            { n: ["birthday", "birthday cake"], u: "1f382", a: "0.6" },
            { n: ["cake", "shortcake"], u: "1f370", a: "0.6" },
            { n: ["cupcake"], u: "1f9c1", a: "11.0" },
            { n: ["pie"], u: "1f967", a: "5.0" },
            { n: ["chocolate bar"], u: "1f36b", a: "0.6" },
            { n: ["candy"], u: "1f36c", a: "0.6" },
            { n: ["lollipop"], u: "1f36d", a: "0.6" },
            { n: ["custard"], u: "1f36e", a: "0.6" },
            { n: ["honey pot"], u: "1f36f", a: "0.6" },
            { n: ["baby bottle"], u: "1f37c", a: "1.0" },
            { n: ["glass of milk"], u: "1f95b", a: "3.0" },
            { n: ["coffee", "hot beverage"], u: "2615", a: "0.6" },
            { n: ["teapot"], u: "1fad6", a: "13.0" },
            { n: ["tea", "teacup without handle"], u: "1f375", a: "0.6" },
            { n: ["sake", "sake bottle and cup"], u: "1f376", a: "0.6" },
            { n: ["champagne", "bottle with popping cork"], u: "1f37e", a: "1.0" },
            { n: ["wine glass"], u: "1f377", a: "0.6" },
            { n: ["cocktail", "cocktail glass"], u: "1f378", a: "0.6" },
            { n: ["tropical drink"], u: "1f379", a: "0.6" },
            { n: ["beer", "beer mug"], u: "1f37a", a: "0.6" },
            { n: ["beers", "clinking beer mugs"], u: "1f37b", a: "0.6" },
            { n: ["clinking glasses"], u: "1f942", a: "3.0" },
            { n: ["tumbler glass"], u: "1f943", a: "3.0" },
            { n: ["pouring liquid"], u: "1fad7", a: "14.0" },
            { n: ["cup with straw"], u: "1f964", a: "5.0" },
            { n: ["bubble tea"], u: "1f9cb", a: "13.0" },
            { n: ["beverage box"], u: "1f9c3", a: "12.0" },
            { n: ["mate drink"], u: "1f9c9", a: "12.0" },
            { n: ["ice cube"], u: "1f9ca", a: "12.0" },
            { n: ["chopsticks"], u: "1f962", a: "5.0" },
            { n: ["knife fork plate", "fork and knife with plate"], u: "1f37d-fe0f", a: "0.7" },
            { n: ["fork and knife"], u: "1f374", a: "0.6" },
            { n: ["spoon"], u: "1f944", a: "3.0" },
            { n: ["hocho", "knife"], u: "1f52a", a: "0.6" },
            { n: ["jar"], u: "1fad9", a: "14.0" },
            { n: ["amphora"], u: "1f3fa", a: "1.0" },
          ],
          travel_places: [
            { n: ["earth africa", "earth globe europe-africa"], u: "1f30d", a: "0.7" },
            { n: ["earth americas", "earth globe americas"], u: "1f30e", a: "0.7" },
            { n: ["earth asia", "earth globe asia-australia"], u: "1f30f", a: "0.6" },
            { n: ["globe with meridians"], u: "1f310", a: "1.0" },
            { n: ["world map"], u: "1f5fa-fe0f", a: "0.7" },
            { n: ["japan", "silhouette of japan"], u: "1f5fe", a: "0.6" },
            { n: ["compass"], u: "1f9ed", a: "11.0" },
            { n: ["snow-capped mountain", "snow capped mountain"], u: "1f3d4-fe0f", a: "0.7" },
            { n: ["mountain"], u: "26f0-fe0f", a: "0.7" },
            { n: ["volcano"], u: "1f30b", a: "0.6" },
            { n: ["mount fuji"], u: "1f5fb", a: "0.6" },
            { n: ["camping"], u: "1f3d5-fe0f", a: "0.7" },
            { n: ["beach with umbrella"], u: "1f3d6-fe0f", a: "0.7" },
            { n: ["desert"], u: "1f3dc-fe0f", a: "0.7" },
            { n: ["desert island"], u: "1f3dd-fe0f", a: "0.7" },
            { n: ["national park"], u: "1f3de-fe0f", a: "0.7" },
            { n: ["stadium"], u: "1f3df-fe0f", a: "0.7" },
            { n: ["classical building"], u: "1f3db-fe0f", a: "0.7" },
            { n: ["building construction"], u: "1f3d7-fe0f", a: "0.7" },
            { n: ["brick", "bricks"], u: "1f9f1", a: "11.0" },
            { n: ["rock"], u: "1faa8", a: "13.0" },
            { n: ["wood"], u: "1fab5", a: "13.0" },
            { n: ["hut"], u: "1f6d6", a: "13.0" },
            { n: ["houses", "house buildings"], u: "1f3d8-fe0f", a: "0.7" },
            { n: ["derelict house", "derelict house building"], u: "1f3da-fe0f", a: "0.7" },
            { n: ["house", "house building"], u: "1f3e0", a: "0.6" },
            { n: ["house with garden"], u: "1f3e1", a: "0.6" },
            { n: ["office", "office building"], u: "1f3e2", a: "0.6" },
            { n: ["post office", "japanese post office"], u: "1f3e3", a: "0.6" },
            { n: ["european post office"], u: "1f3e4", a: "1.0" },
            { n: ["hospital"], u: "1f3e5", a: "0.6" },
            { n: ["bank"], u: "1f3e6", a: "0.6" },
            { n: ["hotel"], u: "1f3e8", a: "0.6" },
            { n: ["love hotel"], u: "1f3e9", a: "0.6" },
            { n: ["convenience store"], u: "1f3ea", a: "0.6" },
            { n: ["school"], u: "1f3eb", a: "0.6" },
            { n: ["department store"], u: "1f3ec", a: "0.6" },
            { n: ["factory"], u: "1f3ed", a: "0.6" },
            { n: ["japanese castle"], u: "1f3ef", a: "0.6" },
            { n: ["european castle"], u: "1f3f0", a: "0.6" },
            { n: ["wedding"], u: "1f492", a: "0.6" },
            { n: ["tokyo tower"], u: "1f5fc", a: "0.6" },
            { n: ["statue of liberty"], u: "1f5fd", a: "0.6" },
            { n: ["church"], u: "26ea", a: "0.6" },
            { n: ["mosque"], u: "1f54c", a: "1.0" },
            { n: ["hindu temple"], u: "1f6d5", a: "12.0" },
            { n: ["synagogue"], u: "1f54d", a: "1.0" },
            { n: ["shinto shrine"], u: "26e9-fe0f", a: "0.7" },
            { n: ["kaaba"], u: "1f54b", a: "1.0" },
            { n: ["fountain"], u: "26f2", a: "0.6" },
            { n: ["tent"], u: "26fa", a: "0.6" },
            { n: ["foggy"], u: "1f301", a: "0.6" },
            { n: ["night with stars"], u: "1f303", a: "0.6" },
            { n: ["cityscape"], u: "1f3d9-fe0f", a: "0.7" },
            { n: ["sunrise over mountains"], u: "1f304", a: "0.6" },
            { n: ["sunrise"], u: "1f305", a: "0.6" },
            { n: ["city sunset", "cityscape at dusk"], u: "1f306", a: "0.6" },
            { n: ["city sunrise", "sunset over buildings"], u: "1f307", a: "0.6" },
            { n: ["bridge at night"], u: "1f309", a: "0.6" },
            { n: ["hotsprings", "hot springs"], u: "2668-fe0f", a: "0.6" },
            { n: ["carousel horse"], u: "1f3a0", a: "0.6" },
            { n: ["playground slide"], u: "1f6dd", a: "14.0" },
            { n: ["ferris wheel"], u: "1f3a1", a: "0.6" },
            { n: ["roller coaster"], u: "1f3a2", a: "0.6" },
            { n: ["barber", "barber pole"], u: "1f488", a: "0.6" },
            { n: ["circus tent"], u: "1f3aa", a: "0.6" },
            { n: ["steam locomotive"], u: "1f682", a: "1.0" },
            { n: ["railway car"], u: "1f683", a: "0.6" },
            { n: ["high-speed train", "bullettrain side"], u: "1f684", a: "0.6" },
            { n: ["bullettrain front", "high-speed train with bullet nose"], u: "1f685", a: "0.6" },
            { n: ["train", "train2"], u: "1f686", a: "1.0" },
            { n: ["metro"], u: "1f687", a: "0.6" },
            { n: ["light rail"], u: "1f688", a: "1.0" },
            { n: ["station"], u: "1f689", a: "0.6" },
            { n: ["tram"], u: "1f68a", a: "1.0" },
            { n: ["monorail"], u: "1f69d", a: "1.0" },
            { n: ["mountain railway"], u: "1f69e", a: "1.0" },
            { n: ["train", "tram car"], u: "1f68b", a: "1.0" },
            { n: ["bus"], u: "1f68c", a: "0.6" },
            { n: ["oncoming bus"], u: "1f68d", a: "0.7" },
            { n: ["trolleybus"], u: "1f68e", a: "1.0" },
            { n: ["minibus"], u: "1f690", a: "1.0" },
            { n: ["ambulance"], u: "1f691", a: "0.6" },
            { n: ["fire engine"], u: "1f692", a: "0.6" },
            { n: ["police car"], u: "1f693", a: "0.6" },
            { n: ["oncoming police car"], u: "1f694", a: "0.7" },
            { n: ["taxi"], u: "1f695", a: "0.6" },
            { n: ["oncoming taxi"], u: "1f696", a: "1.0" },
            { n: ["car", "red car", "automobile"], u: "1f697", a: "0.6" },
            { n: ["oncoming automobile"], u: "1f698", a: "0.7" },
            { n: ["blue car", "recreational vehicle"], u: "1f699", a: "0.6" },
            { n: ["pickup truck"], u: "1f6fb", a: "13.0" },
            { n: ["truck", "delivery truck"], u: "1f69a", a: "0.6" },
            { n: ["articulated lorry"], u: "1f69b", a: "1.0" },
            { n: ["tractor"], u: "1f69c", a: "1.0" },
            { n: ["racing car"], u: "1f3ce-fe0f", a: "0.7" },
            { n: ["motorcycle", "racing motorcycle"], u: "1f3cd-fe0f", a: "0.7" },
            { n: ["motor scooter"], u: "1f6f5", a: "3.0" },
            { n: ["manual wheelchair"], u: "1f9bd", a: "12.0" },
            { n: ["motorized wheelchair"], u: "1f9bc", a: "12.0" },
            { n: ["auto rickshaw"], u: "1f6fa", a: "12.0" },
            { n: ["bike", "bicycle"], u: "1f6b2", a: "0.6" },
            { n: ["scooter"], u: "1f6f4", a: "3.0" },
            { n: ["skateboard"], u: "1f6f9", a: "11.0" },
            { n: ["roller skate"], u: "1f6fc", a: "13.0" },
            { n: ["busstop", "bus stop"], u: "1f68f", a: "0.6" },
            { n: ["motorway"], u: "1f6e3-fe0f", a: "0.7" },
            { n: ["railway track"], u: "1f6e4-fe0f", a: "0.7" },
            { n: ["oil drum"], u: "1f6e2-fe0f", a: "0.7" },
            { n: ["fuelpump", "fuel pump"], u: "26fd", a: "0.6" },
            { n: ["wheel"], u: "1f6de", a: "14.0" },
            { n: ["rotating light", "police cars revolving light"], u: "1f6a8", a: "0.6" },
            { n: ["traffic light", "horizontal traffic light"], u: "1f6a5", a: "0.6" },
            { n: ["vertical traffic light"], u: "1f6a6", a: "1.0" },
            { n: ["octagonal sign"], u: "1f6d1", a: "3.0" },
            { n: ["construction", "construction sign"], u: "1f6a7", a: "0.6" },
            { n: ["anchor"], u: "2693", a: "0.6" },
            { n: ["ring buoy"], u: "1f6df", a: "14.0" },
            { n: ["boat", "sailboat"], u: "26f5", a: "0.6" },
            { n: ["canoe"], u: "1f6f6", a: "3.0" },
            { n: ["speedboat"], u: "1f6a4", a: "0.6" },
            { n: ["passenger ship"], u: "1f6f3-fe0f", a: "0.7" },
            { n: ["ferry"], u: "26f4-fe0f", a: "0.7" },
            { n: ["motor boat"], u: "1f6e5-fe0f", a: "0.7" },
            { n: ["ship"], u: "1f6a2", a: "0.6" },
            { n: ["airplane"], u: "2708-fe0f", a: "0.6" },
            { n: ["small airplane"], u: "1f6e9-fe0f", a: "0.7" },
            { n: ["airplane departure"], u: "1f6eb", a: "1.0" },
            { n: ["airplane arriving"], u: "1f6ec", a: "1.0" },
            { n: ["parachute"], u: "1fa82", a: "12.0" },
            { n: ["seat"], u: "1f4ba", a: "0.6" },
            { n: ["helicopter"], u: "1f681", a: "1.0" },
            { n: ["suspension railway"], u: "1f69f", a: "1.0" },
            { n: ["mountain cableway"], u: "1f6a0", a: "1.0" },
            { n: ["aerial tramway"], u: "1f6a1", a: "1.0" },
            { n: ["satellite"], u: "1f6f0-fe0f", a: "0.7" },
            { n: ["rocket"], u: "1f680", a: "0.6" },
            { n: ["flying saucer"], u: "1f6f8", a: "5.0" },
            { n: ["bellhop bell"], u: "1f6ce-fe0f", a: "0.7" },
            { n: ["luggage"], u: "1f9f3", a: "11.0" },
            { n: ["hourglass"], u: "231b", a: "0.6" },
            { n: ["hourglass flowing sand", "hourglass with flowing sand"], u: "23f3", a: "0.6" },
            { n: ["watch"], u: "231a", a: "0.6" },
            { n: ["alarm clock"], u: "23f0", a: "0.6" },
            { n: ["stopwatch"], u: "23f1-fe0f", a: "1.0" },
            { n: ["timer clock"], u: "23f2-fe0f", a: "1.0" },
            { n: ["mantelpiece clock"], u: "1f570-fe0f", a: "0.7" },
            { n: ["clock12", "clock face twelve oclock"], u: "1f55b", a: "0.6" },
            { n: ["clock1230", "clock face twelve-thirty"], u: "1f567", a: "0.7" },
            { n: ["clock1", "clock face one oclock"], u: "1f550", a: "0.6" },
            { n: ["clock130", "clock face one-thirty"], u: "1f55c", a: "0.7" },
            { n: ["clock2", "clock face two oclock"], u: "1f551", a: "0.6" },
            { n: ["clock230", "clock face two-thirty"], u: "1f55d", a: "0.7" },
            { n: ["clock3", "clock face three oclock"], u: "1f552", a: "0.6" },
            { n: ["clock330", "clock face three-thirty"], u: "1f55e", a: "0.7" },
            { n: ["clock4", "clock face four oclock"], u: "1f553", a: "0.6" },
            { n: ["clock430", "clock face four-thirty"], u: "1f55f", a: "0.7" },
            { n: ["clock5", "clock face five oclock"], u: "1f554", a: "0.6" },
            { n: ["clock530", "clock face five-thirty"], u: "1f560", a: "0.7" },
            { n: ["clock6", "clock face six oclock"], u: "1f555", a: "0.6" },
            { n: ["clock630", "clock face six-thirty"], u: "1f561", a: "0.7" },
            { n: ["clock7", "clock face seven oclock"], u: "1f556", a: "0.6" },
            { n: ["clock730", "clock face seven-thirty"], u: "1f562", a: "0.7" },
            { n: ["clock8", "clock face eight oclock"], u: "1f557", a: "0.6" },
            { n: ["clock830", "clock face eight-thirty"], u: "1f563", a: "0.7" },
            { n: ["clock9", "clock face nine oclock"], u: "1f558", a: "0.6" },
            { n: ["clock930", "clock face nine-thirty"], u: "1f564", a: "0.7" },
            { n: ["clock10", "clock face ten oclock"], u: "1f559", a: "0.6" },
            { n: ["clock1030", "clock face ten-thirty"], u: "1f565", a: "0.7" },
            { n: ["clock11", "clock face eleven oclock"], u: "1f55a", a: "0.6" },
            { n: ["clock1130", "clock face eleven-thirty"], u: "1f566", a: "0.7" },
            { n: ["new moon", "new moon symbol"], u: "1f311", a: "0.6" },
            { n: ["waxing crescent moon", "waxing crescent moon symbol"], u: "1f312", a: "1.0" },
            { n: ["first quarter moon", "first quarter moon symbol"], u: "1f313", a: "0.6" },
            { n: ["moon", "waxing gibbous moon", "waxing gibbous moon symbol"], u: "1f314", a: "0.6" },
            { n: ["full moon", "full moon symbol"], u: "1f315", a: "0.6" },
            { n: ["waning gibbous moon", "waning gibbous moon symbol"], u: "1f316", a: "1.0" },
            { n: ["last quarter moon", "last quarter moon symbol"], u: "1f317", a: "1.0" },
            { n: ["waning crescent moon", "waning crescent moon symbol"], u: "1f318", a: "1.0" },
            { n: ["crescent moon"], u: "1f319", a: "0.6" },
            { n: ["new moon with face"], u: "1f31a", a: "1.0" },
            { n: ["first quarter moon with face"], u: "1f31b", a: "0.6" },
            { n: ["last quarter moon with face"], u: "1f31c", a: "0.7" },
            { n: ["thermometer"], u: "1f321-fe0f", a: "0.7" },
            { n: ["sunny", "black sun with rays"], u: "2600-fe0f", a: "0.6" },
            { n: ["full moon with face"], u: "1f31d", a: "1.0" },
            { n: ["sun with face"], u: "1f31e", a: "1.0" },
            { n: ["ringed planet"], u: "1fa90", a: "12.0" },
            { n: ["star", "white medium star"], u: "2b50", a: "0.6" },
            { n: ["star2", "glowing star"], u: "1f31f", a: "0.6" },
            { n: ["stars", "shooting star"], u: "1f320", a: "0.6" },
            { n: ["milky way"], u: "1f30c", a: "0.6" },
            { n: ["cloud"], u: "2601-fe0f", a: "0.6" },
            { n: ["partly sunny", "sun behind cloud"], u: "26c5", a: "0.6" },
            { n: ["thunder cloud and rain", "cloud with lightning and rain"], u: "26c8-fe0f", a: "0.7" },
            { n: ["mostly sunny", "sun small cloud", "sun behind small cloud"], u: "1f324-fe0f", a: "0.7" },
            { n: ["barely sunny", "sun behind cloud", "sun behind large cloud"], u: "1f325-fe0f", a: "0.7" },
            { n: ["partly sunny rain", "sun behind rain cloud"], u: "1f326-fe0f", a: "0.7" },
            { n: ["rain cloud", "cloud with rain"], u: "1f327-fe0f", a: "0.7" },
            { n: ["snow cloud", "cloud with snow"], u: "1f328-fe0f", a: "0.7" },
            { n: ["lightning", "lightning cloud", "cloud with lightning"], u: "1f329-fe0f", a: "0.7" },
            { n: ["tornado", "tornado cloud"], u: "1f32a-fe0f", a: "0.7" },
            { n: ["fog"], u: "1f32b-fe0f", a: "0.7" },
            { n: ["wind face", "wind blowing face"], u: "1f32c-fe0f", a: "0.7" },
            { n: ["cyclone"], u: "1f300", a: "0.6" },
            { n: ["rainbow"], u: "1f308", a: "0.6" },
            { n: ["closed umbrella"], u: "1f302", a: "0.6" },
            { n: ["umbrella"], u: "2602-fe0f", a: "0.7" },
            { n: ["umbrella with rain drops"], u: "2614", a: "0.6" },
            { n: ["umbrella on ground"], u: "26f1-fe0f", a: "0.7" },
            { n: ["zap", "high voltage sign"], u: "26a1", a: "0.6" },
            { n: ["snowflake"], u: "2744-fe0f", a: "0.6" },
            { n: ["snowman"], u: "2603-fe0f", a: "0.7" },
            { n: ["snowman without snow"], u: "26c4", a: "0.6" },
            { n: ["comet"], u: "2604-fe0f", a: "1.0" },
            { n: ["fire"], u: "1f525", a: "0.6" },
            { n: ["droplet"], u: "1f4a7", a: "0.6" },
            { n: ["ocean", "water wave"], u: "1f30a", a: "0.6" },
          ],
          activities: [
            { n: ["jack-o-lantern", "jack o lantern"], u: "1f383", a: "0.6" },
            { n: ["christmas tree"], u: "1f384", a: "0.6" },
            { n: ["fireworks"], u: "1f386", a: "0.6" },
            { n: ["sparkler", "firework sparkler"], u: "1f387", a: "0.6" },
            { n: ["firecracker"], u: "1f9e8", a: "11.0" },
            { n: ["sparkles"], u: "2728", a: "0.6" },
            { n: ["balloon"], u: "1f388", a: "0.6" },
            { n: ["tada", "party popper"], u: "1f389", a: "0.6" },
            { n: ["confetti ball"], u: "1f38a", a: "0.6" },
            { n: ["tanabata tree"], u: "1f38b", a: "0.6" },
            { n: ["bamboo", "pine decoration"], u: "1f38d", a: "0.6" },
            { n: ["dolls", "japanese dolls"], u: "1f38e", a: "0.6" },
            { n: ["flags", "carp streamer"], u: "1f38f", a: "0.6" },
            { n: ["wind chime"], u: "1f390", a: "0.6" },
            { n: ["rice scene", "moon viewing ceremony"], u: "1f391", a: "0.6" },
            { n: ["red envelope", "red gift envelope"], u: "1f9e7", a: "11.0" },
            { n: ["ribbon"], u: "1f380", a: "0.6" },
            { n: ["gift", "wrapped present"], u: "1f381", a: "0.6" },
            { n: ["reminder ribbon"], u: "1f397-fe0f", a: "0.7" },
            { n: ["admission tickets"], u: "1f39f-fe0f", a: "0.7" },
            { n: ["ticket"], u: "1f3ab", a: "0.6" },
            { n: ["medal", "military medal"], u: "1f396-fe0f", a: "0.7" },
            { n: ["trophy"], u: "1f3c6", a: "0.6" },
            { n: ["sports medal"], u: "1f3c5", a: "1.0" },
            { n: ["first place medal"], u: "1f947", a: "3.0" },
            { n: ["second place medal"], u: "1f948", a: "3.0" },
            { n: ["third place medal"], u: "1f949", a: "3.0" },
            { n: ["soccer", "soccer ball"], u: "26bd", a: "0.6" },
            { n: ["baseball"], u: "26be", a: "0.6" },
            { n: ["softball"], u: "1f94e", a: "11.0" },
            { n: ["basketball", "basketball and hoop"], u: "1f3c0", a: "0.6" },
            { n: ["volleyball"], u: "1f3d0", a: "1.0" },
            { n: ["football", "american football"], u: "1f3c8", a: "0.6" },
            { n: ["rugby football"], u: "1f3c9", a: "1.0" },
            { n: ["tennis", "tennis racquet and ball"], u: "1f3be", a: "0.6" },
            { n: ["flying disc"], u: "1f94f", a: "11.0" },
            { n: ["bowling"], u: "1f3b3", a: "0.6" },
            { n: ["cricket bat and ball"], u: "1f3cf", a: "1.0" },
            { n: ["field hockey stick and ball"], u: "1f3d1", a: "1.0" },
            { n: ["ice hockey stick and puck"], u: "1f3d2", a: "1.0" },
            { n: ["lacrosse", "lacrosse stick and ball"], u: "1f94d", a: "11.0" },
            { n: ["table tennis paddle and ball"], u: "1f3d3", a: "1.0" },
            { n: ["badminton racquet and shuttlecock"], u: "1f3f8", a: "1.0" },
            { n: ["boxing glove"], u: "1f94a", a: "3.0" },
            { n: ["martial arts uniform"], u: "1f94b", a: "3.0" },
            { n: ["goal net"], u: "1f945", a: "3.0" },
            { n: ["golf", "flag in hole"], u: "26f3", a: "0.6" },
            { n: ["ice skate"], u: "26f8-fe0f", a: "0.7" },
            { n: ["fishing pole and fish"], u: "1f3a3", a: "0.6" },
            { n: ["diving mask"], u: "1f93f", a: "12.0" },
            { n: ["running shirt with sash"], u: "1f3bd", a: "0.6" },
            { n: ["ski", "ski and ski boot"], u: "1f3bf", a: "0.6" },
            { n: ["sled"], u: "1f6f7", a: "5.0" },
            { n: ["curling stone"], u: "1f94c", a: "5.0" },
            { n: ["dart", "direct hit"], u: "1f3af", a: "0.6" },
            { n: ["yo-yo"], u: "1fa80", a: "12.0" },
            { n: ["kite"], u: "1fa81", a: "12.0" },
            { n: ["8ball", "billiards"], u: "1f3b1", a: "0.6" },
            { n: ["crystal ball"], u: "1f52e", a: "0.6" },
            { n: ["magic wand"], u: "1fa84", a: "13.0" },
            { n: ["nazar amulet"], u: "1f9ff", a: "11.0" },
            { n: ["hamsa"], u: "1faac", a: "14.0" },
            { n: ["video game"], u: "1f3ae", a: "0.6" },
            { n: ["joystick"], u: "1f579-fe0f", a: "0.7" },
            { n: ["slot machine"], u: "1f3b0", a: "0.6" },
            { n: ["game die"], u: "1f3b2", a: "0.6" },
            { n: ["jigsaw", "jigsaw puzzle piece"], u: "1f9e9", a: "11.0" },
            { n: ["teddy bear"], u: "1f9f8", a: "11.0" },
            { n: ["pinata"], u: "1fa85", a: "13.0" },
            { n: ["mirror ball"], u: "1faa9", a: "14.0" },
            { n: ["nesting dolls"], u: "1fa86", a: "13.0" },
            { n: ["spades", "black spade suit"], u: "2660-fe0f", a: "0.6" },
            { n: ["hearts", "black heart suit"], u: "2665-fe0f", a: "0.6" },
            { n: ["diamonds", "black diamond suit"], u: "2666-fe0f", a: "0.6" },
            { n: ["clubs", "black club suit"], u: "2663-fe0f", a: "0.6" },
            { n: ["chess pawn"], u: "265f-fe0f", a: "11.0" },
            { n: ["black joker", "playing card black joker"], u: "1f0cf", a: "0.6" },
            { n: ["mahjong", "mahjong tile red dragon"], u: "1f004", a: "0.6" },
            { n: ["flower playing cards"], u: "1f3b4", a: "0.6" },
            { n: ["performing arts"], u: "1f3ad", a: "0.6" },
            { n: ["framed picture", "frame with picture"], u: "1f5bc-fe0f", a: "0.7" },
            { n: ["art", "artist palette"], u: "1f3a8", a: "0.6" },
            { n: ["thread", "spool of thread"], u: "1f9f5", a: "11.0" },
            { n: ["sewing needle"], u: "1faa1", a: "13.0" },
            { n: ["yarn", "ball of yarn"], u: "1f9f6", a: "11.0" },
            { n: ["knot"], u: "1faa2", a: "13.0" },
          ],
          objects: [
            { n: ["eyeglasses"], u: "1f453", a: "0.6" },
            { n: ["sunglasses", "dark sunglasses"], u: "1f576-fe0f", a: "0.7" },
            { n: ["goggles"], u: "1f97d", a: "11.0" },
            { n: ["lab coat"], u: "1f97c", a: "11.0" },
            { n: ["safety vest"], u: "1f9ba", a: "12.0" },
            { n: ["necktie"], u: "1f454", a: "0.6" },
            { n: ["shirt", "tshirt", "t-shirt"], u: "1f455", a: "0.6" },
            { n: ["jeans"], u: "1f456", a: "0.6" },
            { n: ["scarf"], u: "1f9e3", a: "5.0" },
            { n: ["gloves"], u: "1f9e4", a: "5.0" },
            { n: ["coat"], u: "1f9e5", a: "5.0" },
            { n: ["socks"], u: "1f9e6", a: "5.0" },
            { n: ["dress"], u: "1f457", a: "0.6" },
            { n: ["kimono"], u: "1f458", a: "0.6" },
            { n: ["sari"], u: "1f97b", a: "12.0" },
            { n: ["one-piece swimsuit"], u: "1fa71", a: "12.0" },
            { n: ["briefs"], u: "1fa72", a: "12.0" },
            { n: ["shorts"], u: "1fa73", a: "12.0" },
            { n: ["bikini"], u: "1f459", a: "0.6" },
            { n: ["womans clothes"], u: "1f45a", a: "0.6" },
            { n: ["purse"], u: "1f45b", a: "0.6" },
            { n: ["handbag"], u: "1f45c", a: "0.6" },
            { n: ["pouch"], u: "1f45d", a: "0.6" },
            { n: ["shopping bags"], u: "1f6cd-fe0f", a: "0.7" },
            { n: ["school satchel"], u: "1f392", a: "0.6" },
            { n: ["thong sandal"], u: "1fa74", a: "13.0" },
            { n: ["shoe", "mans shoe"], u: "1f45e", a: "0.6" },
            { n: ["athletic shoe"], u: "1f45f", a: "0.6" },
            { n: ["hiking boot"], u: "1f97e", a: "11.0" },
            { n: ["flat shoe", "womans flat shoe"], u: "1f97f", a: "11.0" },
            { n: ["high heel", "high-heeled shoe"], u: "1f460", a: "0.6" },
            { n: ["sandal", "womans sandal"], u: "1f461", a: "0.6" },
            { n: ["ballet shoes"], u: "1fa70", a: "12.0" },
            { n: ["boot", "womans boots"], u: "1f462", a: "0.6" },
            { n: ["crown"], u: "1f451", a: "0.6" },
            { n: ["womans hat"], u: "1f452", a: "0.6" },
            { n: ["tophat", "top hat"], u: "1f3a9", a: "0.6" },
            { n: ["mortar board", "graduation cap"], u: "1f393", a: "0.6" },
            { n: ["billed cap"], u: "1f9e2", a: "5.0" },
            { n: ["military helmet"], u: "1fa96", a: "13.0" },
            { n: ["rescue worker\u2019s helmet", "helmet with white cross"], u: "26d1-fe0f", a: "0.7" },
            { n: ["prayer beads"], u: "1f4ff", a: "1.0" },
            { n: ["lipstick"], u: "1f484", a: "0.6" },
            { n: ["ring"], u: "1f48d", a: "0.6" },
            { n: ["gem", "gem stone"], u: "1f48e", a: "0.6" },
            { n: ["mute", "speaker with cancellation stroke"], u: "1f507", a: "1.0" },
            { n: ["speaker"], u: "1f508", a: "0.7" },
            { n: ["sound", "speaker with one sound wave"], u: "1f509", a: "1.0" },
            { n: ["loud sound", "speaker with three sound waves"], u: "1f50a", a: "0.6" },
            { n: ["loudspeaker", "public address loudspeaker"], u: "1f4e2", a: "0.6" },
            { n: ["mega", "cheering megaphone"], u: "1f4e3", a: "0.6" },
            { n: ["postal horn"], u: "1f4ef", a: "1.0" },
            { n: ["bell"], u: "1f514", a: "0.6" },
            { n: ["no bell", "bell with cancellation stroke"], u: "1f515", a: "1.0" },
            { n: ["musical score"], u: "1f3bc", a: "0.6" },
            { n: ["musical note"], u: "1f3b5", a: "0.6" },
            { n: ["notes", "multiple musical notes"], u: "1f3b6", a: "0.6" },
            { n: ["studio microphone"], u: "1f399-fe0f", a: "0.7" },
            { n: ["level slider"], u: "1f39a-fe0f", a: "0.7" },
            { n: ["control knobs"], u: "1f39b-fe0f", a: "0.7" },
            { n: ["microphone"], u: "1f3a4", a: "0.6" },
            { n: ["headphone", "headphones"], u: "1f3a7", a: "0.6" },
            { n: ["radio"], u: "1f4fb", a: "0.6" },
            { n: ["saxophone"], u: "1f3b7", a: "0.6" },
            { n: ["accordion"], u: "1fa97", a: "13.0" },
            { n: ["guitar"], u: "1f3b8", a: "0.6" },
            { n: ["musical keyboard"], u: "1f3b9", a: "0.6" },
            { n: ["trumpet"], u: "1f3ba", a: "0.6" },
            { n: ["violin"], u: "1f3bb", a: "0.6" },
            { n: ["banjo"], u: "1fa95", a: "12.0" },
            { n: ["drum with drumsticks"], u: "1f941", a: "3.0" },
            { n: ["long drum"], u: "1fa98", a: "13.0" },
            { n: ["iphone", "mobile phone"], u: "1f4f1", a: "0.6" },
            { n: ["calling", "mobile phone with rightwards arrow at left"], u: "1f4f2", a: "0.6" },
            { n: ["phone", "telephone", "black telephone"], u: "260e-fe0f", a: "0.6" },
            { n: ["telephone receiver"], u: "1f4de", a: "0.6" },
            { n: ["pager"], u: "1f4df", a: "0.6" },
            { n: ["fax", "fax machine"], u: "1f4e0", a: "0.6" },
            { n: ["battery"], u: "1f50b", a: "0.6" },
            { n: ["low battery"], u: "1faab", a: "14.0" },
            { n: ["electric plug"], u: "1f50c", a: "0.6" },
            { n: ["computer", "personal computer"], u: "1f4bb", a: "0.6" },
            { n: ["desktop computer"], u: "1f5a5-fe0f", a: "0.7" },
            { n: ["printer"], u: "1f5a8-fe0f", a: "0.7" },
            { n: ["keyboard"], u: "2328-fe0f", a: "1.0" },
            { n: ["computer mouse", "three button mouse"], u: "1f5b1-fe0f", a: "0.7" },
            { n: ["trackball"], u: "1f5b2-fe0f", a: "0.7" },
            { n: ["minidisc"], u: "1f4bd", a: "0.6" },
            { n: ["floppy disk"], u: "1f4be", a: "0.6" },
            { n: ["cd", "optical disc"], u: "1f4bf", a: "0.6" },
            { n: ["dvd"], u: "1f4c0", a: "0.6" },
            { n: ["abacus"], u: "1f9ee", a: "11.0" },
            { n: ["movie camera"], u: "1f3a5", a: "0.6" },
            { n: ["film frames"], u: "1f39e-fe0f", a: "0.7" },
            { n: ["film projector"], u: "1f4fd-fe0f", a: "0.7" },
            { n: ["clapper", "clapper board"], u: "1f3ac", a: "0.6" },
            { n: ["tv", "television"], u: "1f4fa", a: "0.6" },
            { n: ["camera"], u: "1f4f7", a: "0.6" },
            { n: ["camera with flash"], u: "1f4f8", a: "1.0" },
            { n: ["video camera"], u: "1f4f9", a: "0.6" },
            { n: ["vhs", "videocassette"], u: "1f4fc", a: "0.6" },
            { n: ["mag", "left-pointing magnifying glass"], u: "1f50d", a: "0.6" },
            { n: ["mag right", "right-pointing magnifying glass"], u: "1f50e", a: "0.6" },
            { n: ["candle"], u: "1f56f-fe0f", a: "0.7" },
            { n: ["bulb", "electric light bulb"], u: "1f4a1", a: "0.6" },
            { n: ["flashlight", "electric torch"], u: "1f526", a: "0.6" },
            { n: ["lantern", "izakaya lantern"], u: "1f3ee", a: "0.6" },
            { n: ["diya lamp"], u: "1fa94", a: "12.0" },
            { n: ["notebook with decorative cover"], u: "1f4d4", a: "0.6" },
            { n: ["closed book"], u: "1f4d5", a: "0.6" },
            { n: ["book", "open book"], u: "1f4d6", a: "0.6" },
            { n: ["green book"], u: "1f4d7", a: "0.6" },
            { n: ["blue book"], u: "1f4d8", a: "0.6" },
            { n: ["orange book"], u: "1f4d9", a: "0.6" },
            { n: ["books"], u: "1f4da", a: "0.6" },
            { n: ["notebook"], u: "1f4d3", a: "0.6" },
            { n: ["ledger"], u: "1f4d2", a: "0.6" },
            { n: ["page with curl"], u: "1f4c3", a: "0.6" },
            { n: ["scroll"], u: "1f4dc", a: "0.6" },
            { n: ["page facing up"], u: "1f4c4", a: "0.6" },
            { n: ["newspaper"], u: "1f4f0", a: "0.6" },
            { n: ["rolled-up newspaper", "rolled up newspaper"], u: "1f5de-fe0f", a: "0.7" },
            { n: ["bookmark tabs"], u: "1f4d1", a: "0.6" },
            { n: ["bookmark"], u: "1f516", a: "0.6" },
            { n: ["label"], u: "1f3f7-fe0f", a: "0.7" },
            { n: ["moneybag", "money bag"], u: "1f4b0", a: "0.6" },
            { n: ["coin"], u: "1fa99", a: "13.0" },
            { n: ["yen", "banknote with yen sign"], u: "1f4b4", a: "0.6" },
            { n: ["dollar", "banknote with dollar sign"], u: "1f4b5", a: "0.6" },
            { n: ["euro", "banknote with euro sign"], u: "1f4b6", a: "1.0" },
            { n: ["pound", "banknote with pound sign"], u: "1f4b7", a: "1.0" },
            { n: ["money with wings"], u: "1f4b8", a: "0.6" },
            { n: ["credit card"], u: "1f4b3", a: "0.6" },
            { n: ["receipt"], u: "1f9fe", a: "11.0" },
            { n: ["chart", "chart with upwards trend and yen sign"], u: "1f4b9", a: "0.6" },
            { n: ["email", "envelope"], u: "2709-fe0f", a: "0.6" },
            { n: ["e-mail", "e-mail symbol"], u: "1f4e7", a: "0.6" },
            { n: ["incoming envelope"], u: "1f4e8", a: "0.6" },
            { n: ["envelope with arrow", "envelope with downwards arrow above"], u: "1f4e9", a: "0.6" },
            { n: ["outbox tray"], u: "1f4e4", a: "0.6" },
            { n: ["inbox tray"], u: "1f4e5", a: "0.6" },
            { n: ["package"], u: "1f4e6", a: "0.6" },
            { n: ["mailbox", "closed mailbox with raised flag"], u: "1f4eb", a: "0.6" },
            { n: ["mailbox closed", "closed mailbox with lowered flag"], u: "1f4ea", a: "0.6" },
            { n: ["mailbox with mail", "open mailbox with raised flag"], u: "1f4ec", a: "0.7" },
            { n: ["mailbox with no mail", "open mailbox with lowered flag"], u: "1f4ed", a: "0.7" },
            { n: ["postbox"], u: "1f4ee", a: "0.6" },
            { n: ["ballot box with ballot"], u: "1f5f3-fe0f", a: "0.7" },
            { n: ["pencil", "pencil2"], u: "270f-fe0f", a: "0.6" },
            { n: ["black nib"], u: "2712-fe0f", a: "0.6" },
            { n: ["fountain pen", "lower left fountain pen"], u: "1f58b-fe0f", a: "0.7" },
            { n: ["pen", "lower left ballpoint pen"], u: "1f58a-fe0f", a: "0.7" },
            { n: ["paintbrush", "lower left paintbrush"], u: "1f58c-fe0f", a: "0.7" },
            { n: ["crayon", "lower left crayon"], u: "1f58d-fe0f", a: "0.7" },
            { n: ["memo", "pencil"], u: "1f4dd", a: "0.6" },
            { n: ["briefcase"], u: "1f4bc", a: "0.6" },
            { n: ["file folder"], u: "1f4c1", a: "0.6" },
            { n: ["open file folder"], u: "1f4c2", a: "0.6" },
            { n: ["card index dividers"], u: "1f5c2-fe0f", a: "0.7" },
            { n: ["date", "calendar"], u: "1f4c5", a: "0.6" },
            { n: ["calendar", "tear-off calendar"], u: "1f4c6", a: "0.6" },
            { n: ["spiral notepad", "spiral note pad"], u: "1f5d2-fe0f", a: "0.7" },
            { n: ["spiral calendar", "spiral calendar pad"], u: "1f5d3-fe0f", a: "0.7" },
            { n: ["card index"], u: "1f4c7", a: "0.6" },
            { n: ["chart with upwards trend"], u: "1f4c8", a: "0.6" },
            { n: ["chart with downwards trend"], u: "1f4c9", a: "0.6" },
            { n: ["bar chart"], u: "1f4ca", a: "0.6" },
            { n: ["clipboard"], u: "1f4cb", a: "0.6" },
            { n: ["pushpin"], u: "1f4cc", a: "0.6" },
            { n: ["round pushpin"], u: "1f4cd", a: "0.6" },
            { n: ["paperclip"], u: "1f4ce", a: "0.6" },
            { n: ["linked paperclips"], u: "1f587-fe0f", a: "0.7" },
            { n: ["straight ruler"], u: "1f4cf", a: "0.6" },
            { n: ["triangular ruler"], u: "1f4d0", a: "0.6" },
            { n: ["scissors", "black scissors"], u: "2702-fe0f", a: "0.6" },
            { n: ["card file box"], u: "1f5c3-fe0f", a: "0.7" },
            { n: ["file cabinet"], u: "1f5c4-fe0f", a: "0.7" },
            { n: ["wastebasket"], u: "1f5d1-fe0f", a: "0.7" },
            { n: ["lock"], u: "1f512", a: "0.6" },
            { n: ["unlock", "open lock"], u: "1f513", a: "0.6" },
            { n: ["lock with ink pen"], u: "1f50f", a: "0.6" },
            { n: ["closed lock with key"], u: "1f510", a: "0.6" },
            { n: ["key"], u: "1f511", a: "0.6" },
            { n: ["old key"], u: "1f5dd-fe0f", a: "0.7" },
            { n: ["hammer"], u: "1f528", a: "0.6" },
            { n: ["axe"], u: "1fa93", a: "12.0" },
            { n: ["pick"], u: "26cf-fe0f", a: "0.7" },
            { n: ["hammer and pick"], u: "2692-fe0f", a: "1.0" },
            { n: ["hammer and wrench"], u: "1f6e0-fe0f", a: "0.7" },
            { n: ["dagger", "dagger knife"], u: "1f5e1-fe0f", a: "0.7" },
            { n: ["crossed swords"], u: "2694-fe0f", a: "1.0" },
            { n: ["gun", "pistol"], u: "1f52b", a: "0.6" },
            { n: ["boomerang"], u: "1fa83", a: "13.0" },
            { n: ["bow and arrow"], u: "1f3f9", a: "1.0" },
            { n: ["shield"], u: "1f6e1-fe0f", a: "0.7" },
            { n: ["carpentry saw"], u: "1fa9a", a: "13.0" },
            { n: ["wrench"], u: "1f527", a: "0.6" },
            { n: ["screwdriver"], u: "1fa9b", a: "13.0" },
            { n: ["nut and bolt"], u: "1f529", a: "0.6" },
            { n: ["gear"], u: "2699-fe0f", a: "1.0" },
            { n: ["clamp", "compression"], u: "1f5dc-fe0f", a: "0.7" },
            { n: ["scales", "balance scale"], u: "2696-fe0f", a: "1.0" },
            { n: ["probing cane"], u: "1f9af", a: "12.0" },
            { n: ["link", "link symbol"], u: "1f517", a: "0.6" },
            { n: ["chains"], u: "26d3-fe0f", a: "0.7" },
            { n: ["hook"], u: "1fa9d", a: "13.0" },
            { n: ["toolbox"], u: "1f9f0", a: "11.0" },
            { n: ["magnet"], u: "1f9f2", a: "11.0" },
            { n: ["ladder"], u: "1fa9c", a: "13.0" },
            { n: ["alembic"], u: "2697-fe0f", a: "1.0" },
            { n: ["test tube"], u: "1f9ea", a: "11.0" },
            { n: ["petri dish"], u: "1f9eb", a: "11.0" },
            { n: ["dna", "dna double helix"], u: "1f9ec", a: "11.0" },
            { n: ["microscope"], u: "1f52c", a: "1.0" },
            { n: ["telescope"], u: "1f52d", a: "1.0" },
            { n: ["satellite antenna"], u: "1f4e1", a: "0.6" },
            { n: ["syringe"], u: "1f489", a: "0.6" },
            { n: ["drop of blood"], u: "1fa78", a: "12.0" },
            { n: ["pill"], u: "1f48a", a: "0.6" },
            { n: ["adhesive bandage"], u: "1fa79", a: "12.0" },
            { n: ["crutch"], u: "1fa7c", a: "14.0" },
            { n: ["stethoscope"], u: "1fa7a", a: "12.0" },
            { n: ["x-ray"], u: "1fa7b", a: "14.0" },
            { n: ["door"], u: "1f6aa", a: "0.6" },
            { n: ["elevator"], u: "1f6d7", a: "13.0" },
            { n: ["mirror"], u: "1fa9e", a: "13.0" },
            { n: ["window"], u: "1fa9f", a: "13.0" },
            { n: ["bed"], u: "1f6cf-fe0f", a: "0.7" },
            { n: ["couch and lamp"], u: "1f6cb-fe0f", a: "0.7" },
            { n: ["chair"], u: "1fa91", a: "12.0" },
            { n: ["toilet"], u: "1f6bd", a: "0.6" },
            { n: ["plunger"], u: "1faa0", a: "13.0" },
            { n: ["shower"], u: "1f6bf", a: "1.0" },
            { n: ["bathtub"], u: "1f6c1", a: "1.0" },
            { n: ["mouse trap"], u: "1faa4", a: "13.0" },
            { n: ["razor"], u: "1fa92", a: "12.0" },
            { n: ["lotion bottle"], u: "1f9f4", a: "11.0" },
            { n: ["safety pin"], u: "1f9f7", a: "11.0" },
            { n: ["broom"], u: "1f9f9", a: "11.0" },
            { n: ["basket"], u: "1f9fa", a: "11.0" },
            { n: ["roll of paper"], u: "1f9fb", a: "11.0" },
            { n: ["bucket"], u: "1faa3", a: "13.0" },
            { n: ["soap", "bar of soap"], u: "1f9fc", a: "11.0" },
            { n: ["bubbles"], u: "1fae7", a: "14.0" },
            { n: ["toothbrush"], u: "1faa5", a: "13.0" },
            { n: ["sponge"], u: "1f9fd", a: "11.0" },
            { n: ["fire extinguisher"], u: "1f9ef", a: "11.0" },
            { n: ["shopping trolley"], u: "1f6d2", a: "3.0" },
            { n: ["smoking", "smoking symbol"], u: "1f6ac", a: "0.6" },
            { n: ["coffin"], u: "26b0-fe0f", a: "1.0" },
            { n: ["headstone"], u: "1faa6", a: "13.0" },
            { n: ["funeral urn"], u: "26b1-fe0f", a: "1.0" },
            { n: ["moyai"], u: "1f5ff", a: "0.6" },
            { n: ["placard"], u: "1faa7", a: "13.0" },
            { n: ["identification card"], u: "1faaa", a: "14.0" },
          ],
          symbols: [
            { n: ["atm", "automated teller machine"], u: "1f3e7", a: "0.6" },
            { n: ["put litter in its place", "put litter in its place symbol"], u: "1f6ae", a: "1.0" },
            { n: ["potable water", "potable water symbol"], u: "1f6b0", a: "1.0" },
            { n: ["wheelchair", "wheelchair symbol"], u: "267f", a: "0.6" },
            { n: ["mens", "mens symbol"], u: "1f6b9", a: "0.6" },
            { n: ["womens", "womens symbol"], u: "1f6ba", a: "0.6" },
            { n: ["restroom"], u: "1f6bb", a: "0.6" },
            { n: ["baby symbol"], u: "1f6bc", a: "0.6" },
            { n: ["wc", "water closet"], u: "1f6be", a: "0.6" },
            { n: ["passport control"], u: "1f6c2", a: "1.0" },
            { n: ["customs"], u: "1f6c3", a: "1.0" },
            { n: ["baggage claim"], u: "1f6c4", a: "1.0" },
            { n: ["left luggage"], u: "1f6c5", a: "1.0" },
            { n: ["warning", "warning sign"], u: "26a0-fe0f", a: "0.6" },
            { n: ["children crossing"], u: "1f6b8", a: "1.0" },
            { n: ["no entry"], u: "26d4", a: "0.6" },
            { n: ["no entry sign"], u: "1f6ab", a: "0.6" },
            { n: ["no bicycles"], u: "1f6b3", a: "1.0" },
            { n: ["no smoking", "no smoking symbol"], u: "1f6ad", a: "0.6" },
            { n: ["do not litter", "do not litter symbol"], u: "1f6af", a: "1.0" },
            { n: ["non-potable water", "non-potable water symbol"], u: "1f6b1", a: "1.0" },
            { n: ["no pedestrians"], u: "1f6b7", a: "1.0" },
            { n: ["no mobile phones"], u: "1f4f5", a: "1.0" },
            { n: ["underage", "no one under eighteen symbol"], u: "1f51e", a: "0.6" },
            { n: ["radioactive", "radioactive sign"], u: "2622-fe0f", a: "1.0" },
            { n: ["biohazard", "biohazard sign"], u: "2623-fe0f", a: "1.0" },
            { n: ["arrow up", "upwards black arrow"], u: "2b06-fe0f", a: "0.6" },
            { n: ["north east arrow", "arrow upper right"], u: "2197-fe0f", a: "0.6" },
            { n: ["arrow right", "black rightwards arrow"], u: "27a1-fe0f", a: "0.6" },
            { n: ["south east arrow", "arrow lower right"], u: "2198-fe0f", a: "0.6" },
            { n: ["arrow down", "downwards black arrow"], u: "2b07-fe0f", a: "0.6" },
            { n: ["south west arrow", "arrow lower left"], u: "2199-fe0f", a: "0.6" },
            { n: ["arrow left", "leftwards black arrow"], u: "2b05-fe0f", a: "0.6" },
            { n: ["north west arrow", "arrow upper left"], u: "2196-fe0f", a: "0.6" },
            { n: ["up down arrow", "arrow up down"], u: "2195-fe0f", a: "0.6" },
            { n: ["left right arrow"], u: "2194-fe0f", a: "0.6" },
            { n: ["leftwards arrow with hook"], u: "21a9-fe0f", a: "0.6" },
            { n: ["arrow right hook", "rightwards arrow with hook"], u: "21aa-fe0f", a: "0.6" },
            { n: ["arrow heading up", "arrow pointing rightwards then curving upwards"], u: "2934-fe0f", a: "0.6" },
            { n: ["arrow heading down", "arrow pointing rightwards then curving downwards"], u: "2935-fe0f", a: "0.6" },
            { n: ["arrows clockwise", "clockwise downwards and upwards open circle arrows"], u: "1f503", a: "0.6" },
            {
              n: ["arrows counterclockwise", "anticlockwise downwards and upwards open circle arrows"],
              u: "1f504",
              a: "1.0",
            },
            { n: ["back", "back with leftwards arrow above"], u: "1f519", a: "0.6" },
            { n: ["end", "end with leftwards arrow above"], u: "1f51a", a: "0.6" },
            { n: ["on", "on with exclamation mark with left right arrow above"], u: "1f51b", a: "0.6" },
            { n: ["soon", "soon with rightwards arrow above"], u: "1f51c", a: "0.6" },
            { n: ["top", "top with upwards arrow above"], u: "1f51d", a: "0.6" },
            { n: ["place of worship"], u: "1f6d0", a: "1.0" },
            { n: ["atom symbol"], u: "269b-fe0f", a: "1.0" },
            { n: ["om", "om symbol"], u: "1f549-fe0f", a: "0.7" },
            { n: ["star of david"], u: "2721-fe0f", a: "0.7" },
            { n: ["wheel of dharma"], u: "2638-fe0f", a: "0.7" },
            { n: ["yin yang"], u: "262f-fe0f", a: "0.7" },
            { n: ["latin cross"], u: "271d-fe0f", a: "0.7" },
            { n: ["orthodox cross"], u: "2626-fe0f", a: "1.0" },
            { n: ["star and crescent"], u: "262a-fe0f", a: "0.7" },
            { n: ["peace symbol"], u: "262e-fe0f", a: "1.0" },
            { n: ["menorah with nine branches"], u: "1f54e", a: "1.0" },
            { n: ["six pointed star", "six pointed star with middle dot"], u: "1f52f", a: "0.6" },
            { n: ["aries"], u: "2648", a: "0.6" },
            { n: ["taurus"], u: "2649", a: "0.6" },
            { n: ["gemini"], u: "264a", a: "0.6" },
            { n: ["cancer"], u: "264b", a: "0.6" },
            { n: ["leo"], u: "264c", a: "0.6" },
            { n: ["virgo"], u: "264d", a: "0.6" },
            { n: ["libra"], u: "264e", a: "0.6" },
            { n: ["scorpius"], u: "264f", a: "0.6" },
            { n: ["sagittarius"], u: "2650", a: "0.6" },
            { n: ["capricorn"], u: "2651", a: "0.6" },
            { n: ["aquarius"], u: "2652", a: "0.6" },
            { n: ["pisces"], u: "2653", a: "0.6" },
            { n: ["ophiuchus"], u: "26ce", a: "0.6" },
            { n: ["twisted rightwards arrows"], u: "1f500", a: "1.0" },
            { n: ["repeat", "clockwise rightwards and leftwards open circle arrows"], u: "1f501", a: "1.0" },
            {
              n: ["repeat one", "clockwise rightwards and leftwards open circle arrows with circled one overlay"],
              u: "1f502",
              a: "1.0",
            },
            { n: ["arrow forward", "black right-pointing triangle"], u: "25b6-fe0f", a: "0.6" },
            { n: ["fast forward", "black right-pointing double triangle"], u: "23e9", a: "0.6" },
            {
              n: ["next track button", "black right pointing double triangle with vertical bar"],
              u: "23ed-fe0f",
              a: "0.7",
            },
            {
              n: ["play or pause button", "black right pointing triangle with double vertical bar"],
              u: "23ef-fe0f",
              a: "1.0",
            },
            { n: ["arrow backward", "black left-pointing triangle"], u: "25c0-fe0f", a: "0.6" },
            { n: ["rewind", "black left-pointing double triangle"], u: "23ea", a: "0.6" },
            {
              n: ["last track button", "black left pointing double triangle with vertical bar"],
              u: "23ee-fe0f",
              a: "0.7",
            },
            { n: ["arrow up small", "up-pointing small red triangle"], u: "1f53c", a: "0.6" },
            { n: ["arrow double up", "black up-pointing double triangle"], u: "23eb", a: "0.6" },
            { n: ["arrow down small", "down-pointing small red triangle"], u: "1f53d", a: "0.6" },
            { n: ["arrow double down", "black down-pointing double triangle"], u: "23ec", a: "0.6" },
            { n: ["pause button", "double vertical bar"], u: "23f8-fe0f", a: "0.7" },
            { n: ["stop button", "black square for stop"], u: "23f9-fe0f", a: "0.7" },
            { n: ["record button", "black circle for record"], u: "23fa-fe0f", a: "0.7" },
            { n: ["eject", "eject button"], u: "23cf-fe0f", a: "1.0" },
            { n: ["cinema"], u: "1f3a6", a: "0.6" },
            { n: ["low brightness", "low brightness symbol"], u: "1f505", a: "1.0" },
            { n: ["high brightness", "high brightness symbol"], u: "1f506", a: "1.0" },
            { n: ["signal strength", "antenna with bars"], u: "1f4f6", a: "0.6" },
            { n: ["vibration mode"], u: "1f4f3", a: "0.6" },
            { n: ["mobile phone off"], u: "1f4f4", a: "0.6" },
            { n: ["female sign"], u: "2640-fe0f", a: "4.0" },
            { n: ["male sign"], u: "2642-fe0f", a: "4.0" },
            { n: ["transgender symbol"], u: "26a7-fe0f", a: "13.0" },
            { n: ["heavy multiplication x"], u: "2716-fe0f", a: "0.6" },
            { n: ["heavy plus sign"], u: "2795", a: "0.6" },
            { n: ["heavy minus sign"], u: "2796", a: "0.6" },
            { n: ["heavy division sign"], u: "2797", a: "0.6" },
            { n: ["heavy equals sign"], u: "1f7f0", a: "14.0" },
            { n: ["infinity"], u: "267e-fe0f", a: "11.0" },
            { n: ["bangbang", "double exclamation mark"], u: "203c-fe0f", a: "0.6" },
            { n: ["interrobang", "exclamation question mark"], u: "2049-fe0f", a: "0.6" },
            { n: ["question", "black question mark ornament"], u: "2753", a: "0.6" },
            { n: ["grey question", "white question mark ornament"], u: "2754", a: "0.6" },
            { n: ["grey exclamation", "white exclamation mark ornament"], u: "2755", a: "0.6" },
            { n: ["exclamation", "heavy exclamation mark", "heavy exclamation mark symbol"], u: "2757", a: "0.6" },
            { n: ["wavy dash"], u: "3030-fe0f", a: "0.6" },
            { n: ["currency exchange"], u: "1f4b1", a: "0.6" },
            { n: ["heavy dollar sign"], u: "1f4b2", a: "0.6" },
            { n: ["medical symbol", "staff of aesculapius"], u: "2695-fe0f", a: "4.0" },
            { n: ["recycle", "black universal recycling symbol"], u: "267b-fe0f", a: "0.6" },
            { n: ["fleur-de-lis", "fleur de lis"], u: "269c-fe0f", a: "1.0" },
            { n: ["trident", "trident emblem"], u: "1f531", a: "0.6" },
            { n: ["name badge"], u: "1f4db", a: "0.6" },
            { n: ["beginner", "japanese symbol for beginner"], u: "1f530", a: "0.6" },
            { n: ["o", "heavy large circle"], u: "2b55", a: "0.6" },
            { n: ["white check mark", "white heavy check mark"], u: "2705", a: "0.6" },
            { n: ["ballot box with check"], u: "2611-fe0f", a: "0.6" },
            { n: ["heavy check mark"], u: "2714-fe0f", a: "0.6" },
            { n: ["x", "cross mark"], u: "274c", a: "0.6" },
            { n: ["negative squared cross mark"], u: "274e", a: "0.6" },
            { n: ["curly loop"], u: "27b0", a: "0.6" },
            { n: ["loop", "double curly loop"], u: "27bf", a: "1.0" },
            { n: ["part alternation mark"], u: "303d-fe0f", a: "0.6" },
            { n: ["eight spoked asterisk"], u: "2733-fe0f", a: "0.6" },
            { n: ["eight pointed black star"], u: "2734-fe0f", a: "0.6" },
            { n: ["sparkle"], u: "2747-fe0f", a: "0.6" },
            { n: ["copyright", "copyright sign"], u: "00a9-fe0f", a: "0.6" },
            { n: ["registered", "registered sign"], u: "00ae-fe0f", a: "0.6" },
            { n: ["tm", "trade mark sign"], u: "2122-fe0f", a: "0.6" },
            { n: ["hash", "hash key"], u: "0023-fe0f-20e3", a: "0.6" },
            { n: ["keycap: *", "keycap star"], u: "002a-fe0f-20e3", a: "2.0" },
            { n: ["zero", "keycap 0"], u: "0030-fe0f-20e3", a: "0.6" },
            { n: ["one", "keycap 1"], u: "0031-fe0f-20e3", a: "0.6" },
            { n: ["two", "keycap 2"], u: "0032-fe0f-20e3", a: "0.6" },
            { n: ["three", "keycap 3"], u: "0033-fe0f-20e3", a: "0.6" },
            { n: ["four", "keycap 4"], u: "0034-fe0f-20e3", a: "0.6" },
            { n: ["five", "keycap 5"], u: "0035-fe0f-20e3", a: "0.6" },
            { n: ["six", "keycap 6"], u: "0036-fe0f-20e3", a: "0.6" },
            { n: ["seven", "keycap 7"], u: "0037-fe0f-20e3", a: "0.6" },
            { n: ["eight", "keycap 8"], u: "0038-fe0f-20e3", a: "0.6" },
            { n: ["nine", "keycap 9"], u: "0039-fe0f-20e3", a: "0.6" },
            { n: ["keycap ten"], u: "1f51f", a: "0.6" },
            { n: ["capital abcd", "input symbol for latin capital letters"], u: "1f520", a: "0.6" },
            { n: ["abcd", "input symbol for latin small letters"], u: "1f521", a: "0.6" },
            { n: ["1234", "input symbol for numbers"], u: "1f522", a: "0.6" },
            { n: ["symbols", "input symbol for symbols"], u: "1f523", a: "0.6" },
            { n: ["abc", "input symbol for latin letters"], u: "1f524", a: "0.6" },
            { n: ["a", "negative squared latin capital letter a"], u: "1f170-fe0f", a: "0.6" },
            { n: ["ab", "negative squared ab"], u: "1f18e", a: "0.6" },
            { n: ["b", "negative squared latin capital letter b"], u: "1f171-fe0f", a: "0.6" },
            { n: ["cl", "squared cl"], u: "1f191", a: "0.6" },
            { n: ["cool", "squared cool"], u: "1f192", a: "0.6" },
            { n: ["free", "squared free"], u: "1f193", a: "0.6" },
            { n: ["information source"], u: "2139-fe0f", a: "0.6" },
            { n: ["id", "squared id"], u: "1f194", a: "0.6" },
            { n: ["m", "circled latin capital letter m"], u: "24c2-fe0f", a: "0.6" },
            { n: ["new", "squared new"], u: "1f195", a: "0.6" },
            { n: ["ng", "squared ng"], u: "1f196", a: "0.6" },
            { n: ["o2", "negative squared latin capital letter o"], u: "1f17e-fe0f", a: "0.6" },
            { n: ["ok", "squared ok"], u: "1f197", a: "0.6" },
            { n: ["parking", "negative squared latin capital letter p"], u: "1f17f-fe0f", a: "0.6" },
            { n: ["sos", "squared sos"], u: "1f198", a: "0.6" },
            { n: ["up", "squared up with exclamation mark"], u: "1f199", a: "0.6" },
            { n: ["vs", "squared vs"], u: "1f19a", a: "0.6" },
            { n: ["koko", "squared katakana koko"], u: "1f201", a: "0.6" },
            { n: ["sa", "squared katakana sa"], u: "1f202-fe0f", a: "0.6" },
            { n: ["u6708", "squared cjk unified ideograph-6708"], u: "1f237-fe0f", a: "0.6" },
            { n: ["u6709", "squared cjk unified ideograph-6709"], u: "1f236", a: "0.6" },
            { n: ["u6307", "squared cjk unified ideograph-6307"], u: "1f22f", a: "0.6" },
            { n: ["ideograph advantage", "circled ideograph advantage"], u: "1f250", a: "0.6" },
            { n: ["u5272", "squared cjk unified ideograph-5272"], u: "1f239", a: "0.6" },
            { n: ["u7121", "squared cjk unified ideograph-7121"], u: "1f21a", a: "0.6" },
            { n: ["u7981", "squared cjk unified ideograph-7981"], u: "1f232", a: "0.6" },
            { n: ["accept", "circled ideograph accept"], u: "1f251", a: "0.6" },
            { n: ["u7533", "squared cjk unified ideograph-7533"], u: "1f238", a: "0.6" },
            { n: ["u5408", "squared cjk unified ideograph-5408"], u: "1f234", a: "0.6" },
            { n: ["u7a7a", "squared cjk unified ideograph-7a7a"], u: "1f233", a: "0.6" },
            { n: ["congratulations", "circled ideograph congratulation"], u: "3297-fe0f", a: "0.6" },
            { n: ["secret", "circled ideograph secret"], u: "3299-fe0f", a: "0.6" },
            { n: ["u55b6", "squared cjk unified ideograph-55b6"], u: "1f23a", a: "0.6" },
            { n: ["u6e80", "squared cjk unified ideograph-6e80"], u: "1f235", a: "0.6" },
            { n: ["red circle", "large red circle"], u: "1f534", a: "0.6" },
            { n: ["large orange circle"], u: "1f7e0", a: "12.0" },
            { n: ["large yellow circle"], u: "1f7e1", a: "12.0" },
            { n: ["large green circle"], u: "1f7e2", a: "12.0" },
            { n: ["large blue circle"], u: "1f535", a: "0.6" },
            { n: ["large purple circle"], u: "1f7e3", a: "12.0" },
            { n: ["large brown circle"], u: "1f7e4", a: "12.0" },
            { n: ["black circle", "medium black circle"], u: "26ab", a: "0.6" },
            { n: ["white circle", "medium white circle"], u: "26aa", a: "0.6" },
            { n: ["large red square"], u: "1f7e5", a: "12.0" },
            { n: ["large orange square"], u: "1f7e7", a: "12.0" },
            { n: ["large yellow square"], u: "1f7e8", a: "12.0" },
            { n: ["large green square"], u: "1f7e9", a: "12.0" },
            { n: ["large blue square"], u: "1f7e6", a: "12.0" },
            { n: ["large purple square"], u: "1f7ea", a: "12.0" },
            { n: ["large brown square"], u: "1f7eb", a: "12.0" },
            { n: ["black large square"], u: "2b1b", a: "0.6" },
            { n: ["white large square"], u: "2b1c", a: "0.6" },
            { n: ["black medium square"], u: "25fc-fe0f", a: "0.6" },
            { n: ["white medium square"], u: "25fb-fe0f", a: "0.6" },
            { n: ["black medium small square"], u: "25fe", a: "0.6" },
            { n: ["white medium small square"], u: "25fd", a: "0.6" },
            { n: ["black small square"], u: "25aa-fe0f", a: "0.6" },
            { n: ["white small square"], u: "25ab-fe0f", a: "0.6" },
            { n: ["large orange diamond"], u: "1f536", a: "0.6" },
            { n: ["large blue diamond"], u: "1f537", a: "0.6" },
            { n: ["small orange diamond"], u: "1f538", a: "0.6" },
            { n: ["small blue diamond"], u: "1f539", a: "0.6" },
            { n: ["small red triangle", "up-pointing red triangle"], u: "1f53a", a: "0.6" },
            { n: ["small red triangle down", "down-pointing red triangle"], u: "1f53b", a: "0.6" },
            { n: ["diamond shape with a dot inside"], u: "1f4a0", a: "0.6" },
            { n: ["radio button"], u: "1f518", a: "0.6" },
            { n: ["white square button"], u: "1f533", a: "0.6" },
            { n: ["black square button"], u: "1f532", a: "0.6" },
          ],
          flags: [
            { n: ["chequered flag", "checkered flag"], u: "1f3c1", a: "0.6" },
            { n: ["triangular flag on post"], u: "1f6a9", a: "0.6" },
            { n: ["crossed flags"], u: "1f38c", a: "0.6" },
            { n: ["waving black flag"], u: "1f3f4", a: "1.0" },
            { n: ["white flag", "waving white flag"], u: "1f3f3-fe0f", a: "0.7" },
            { n: ["rainbow flag", "rainbow-flag"], u: "1f3f3-fe0f-200d-1f308", a: "4.0" },
            { n: ["transgender flag"], u: "1f3f3-fe0f-200d-26a7-fe0f", a: "13.0" },
            { n: ["pirate flag"], u: "1f3f4-200d-2620-fe0f", a: "11.0" },
            { n: ["flag-ac", "ascension island flag"], u: "1f1e6-1f1e8", a: "2.0" },
            { n: ["flag-ad", "andorra flag"], u: "1f1e6-1f1e9", a: "2.0" },
            { n: ["flag-ae", "united arab emirates flag"], u: "1f1e6-1f1ea", a: "2.0" },
            { n: ["flag-af", "afghanistan flag"], u: "1f1e6-1f1eb", a: "2.0" },
            { n: ["flag-ag", "antigua & barbuda flag"], u: "1f1e6-1f1ec", a: "2.0" },
            { n: ["flag-ai", "anguilla flag"], u: "1f1e6-1f1ee", a: "2.0" },
            { n: ["flag-al", "albania flag"], u: "1f1e6-1f1f1", a: "2.0" },
            { n: ["flag-am", "armenia flag"], u: "1f1e6-1f1f2", a: "2.0" },
            { n: ["flag-ao", "angola flag"], u: "1f1e6-1f1f4", a: "2.0" },
            { n: ["flag-aq", "antarctica flag"], u: "1f1e6-1f1f6", a: "2.0" },
            { n: ["flag-ar", "argentina flag"], u: "1f1e6-1f1f7", a: "2.0" },
            { n: ["flag-as", "american samoa flag"], u: "1f1e6-1f1f8", a: "2.0" },
            { n: ["flag-at", "austria flag"], u: "1f1e6-1f1f9", a: "2.0" },
            { n: ["flag-au", "australia flag"], u: "1f1e6-1f1fa", a: "2.0" },
            { n: ["flag-aw", "aruba flag"], u: "1f1e6-1f1fc", a: "2.0" },
            { n: ["flag-ax", "\xe5land islands flag"], u: "1f1e6-1f1fd", a: "2.0" },
            { n: ["flag-az", "azerbaijan flag"], u: "1f1e6-1f1ff", a: "2.0" },
            { n: ["flag-ba", "bosnia & herzegovina flag"], u: "1f1e7-1f1e6", a: "2.0" },
            { n: ["flag-bb", "barbados flag"], u: "1f1e7-1f1e7", a: "2.0" },
            { n: ["flag-bd", "bangladesh flag"], u: "1f1e7-1f1e9", a: "2.0" },
            { n: ["flag-be", "belgium flag"], u: "1f1e7-1f1ea", a: "2.0" },
            { n: ["flag-bf", "burkina faso flag"], u: "1f1e7-1f1eb", a: "2.0" },
            { n: ["flag-bg", "bulgaria flag"], u: "1f1e7-1f1ec", a: "2.0" },
            { n: ["flag-bh", "bahrain flag"], u: "1f1e7-1f1ed", a: "2.0" },
            { n: ["flag-bi", "burundi flag"], u: "1f1e7-1f1ee", a: "2.0" },
            { n: ["flag-bj", "benin flag"], u: "1f1e7-1f1ef", a: "2.0" },
            { n: ["flag-bl", "st. barth\xe9lemy flag"], u: "1f1e7-1f1f1", a: "2.0" },
            { n: ["flag-bm", "bermuda flag"], u: "1f1e7-1f1f2", a: "2.0" },
            { n: ["flag-bn", "brunei flag"], u: "1f1e7-1f1f3", a: "2.0" },
            { n: ["flag-bo", "bolivia flag"], u: "1f1e7-1f1f4", a: "2.0" },
            { n: ["flag-bq", "caribbean netherlands flag"], u: "1f1e7-1f1f6", a: "2.0" },
            { n: ["flag-br", "brazil flag"], u: "1f1e7-1f1f7", a: "2.0" },
            { n: ["flag-bs", "bahamas flag"], u: "1f1e7-1f1f8", a: "2.0" },
            { n: ["flag-bt", "bhutan flag"], u: "1f1e7-1f1f9", a: "2.0" },
            { n: ["flag-bv", "bouvet island flag"], u: "1f1e7-1f1fb", a: "2.0" },
            { n: ["flag-bw", "botswana flag"], u: "1f1e7-1f1fc", a: "2.0" },
            { n: ["flag-by", "belarus flag"], u: "1f1e7-1f1fe", a: "2.0" },
            { n: ["flag-bz", "belize flag"], u: "1f1e7-1f1ff", a: "2.0" },
            { n: ["flag-ca", "canada flag"], u: "1f1e8-1f1e6", a: "2.0" },
            { n: ["flag-cc", "cocos (keeling) islands flag"], u: "1f1e8-1f1e8", a: "2.0" },
            { n: ["flag-cd", "congo - kinshasa flag"], u: "1f1e8-1f1e9", a: "2.0" },
            { n: ["flag-cf", "central african republic flag"], u: "1f1e8-1f1eb", a: "2.0" },
            { n: ["flag-cg", "congo - brazzaville flag"], u: "1f1e8-1f1ec", a: "2.0" },
            { n: ["flag-ch", "switzerland flag"], u: "1f1e8-1f1ed", a: "2.0" },
            { n: ["flag-ci", "c\xf4te d\u2019ivoire flag"], u: "1f1e8-1f1ee", a: "2.0" },
            { n: ["flag-ck", "cook islands flag"], u: "1f1e8-1f1f0", a: "2.0" },
            { n: ["flag-cl", "chile flag"], u: "1f1e8-1f1f1", a: "2.0" },
            { n: ["flag-cm", "cameroon flag"], u: "1f1e8-1f1f2", a: "2.0" },
            { n: ["cn", "flag-cn", "china flag"], u: "1f1e8-1f1f3", a: "0.6" },
            { n: ["flag-co", "colombia flag"], u: "1f1e8-1f1f4", a: "2.0" },
            { n: ["flag-cp", "clipperton island flag"], u: "1f1e8-1f1f5", a: "2.0" },
            { n: ["flag-cr", "costa rica flag"], u: "1f1e8-1f1f7", a: "2.0" },
            { n: ["flag-cu", "cuba flag"], u: "1f1e8-1f1fa", a: "2.0" },
            { n: ["flag-cv", "cape verde flag"], u: "1f1e8-1f1fb", a: "2.0" },
            { n: ["flag-cw", "cura\xe7ao flag"], u: "1f1e8-1f1fc", a: "2.0" },
            { n: ["flag-cx", "christmas island flag"], u: "1f1e8-1f1fd", a: "2.0" },
            { n: ["flag-cy", "cyprus flag"], u: "1f1e8-1f1fe", a: "2.0" },
            { n: ["flag-cz", "czechia flag"], u: "1f1e8-1f1ff", a: "2.0" },
            { n: ["de", "flag-de", "germany flag"], u: "1f1e9-1f1ea", a: "0.6" },
            { n: ["flag-dg", "diego garcia flag"], u: "1f1e9-1f1ec", a: "2.0" },
            { n: ["flag-dj", "djibouti flag"], u: "1f1e9-1f1ef", a: "2.0" },
            { n: ["flag-dk", "denmark flag"], u: "1f1e9-1f1f0", a: "2.0" },
            { n: ["flag-dm", "dominica flag"], u: "1f1e9-1f1f2", a: "2.0" },
            { n: ["flag-do", "dominican republic flag"], u: "1f1e9-1f1f4", a: "2.0" },
            { n: ["flag-dz", "algeria flag"], u: "1f1e9-1f1ff", a: "2.0" },
            { n: ["flag-ea", "ceuta & melilla flag"], u: "1f1ea-1f1e6", a: "2.0" },
            { n: ["flag-ec", "ecuador flag"], u: "1f1ea-1f1e8", a: "2.0" },
            { n: ["flag-ee", "estonia flag"], u: "1f1ea-1f1ea", a: "2.0" },
            { n: ["flag-eg", "egypt flag"], u: "1f1ea-1f1ec", a: "2.0" },
            { n: ["flag-eh", "western sahara flag"], u: "1f1ea-1f1ed", a: "2.0" },
            { n: ["flag-er", "eritrea flag"], u: "1f1ea-1f1f7", a: "2.0" },
            { n: ["es", "flag-es", "spain flag"], u: "1f1ea-1f1f8", a: "0.6" },
            { n: ["flag-et", "ethiopia flag"], u: "1f1ea-1f1f9", a: "2.0" },
            { n: ["flag-eu", "european union flag"], u: "1f1ea-1f1fa", a: "2.0" },
            { n: ["flag-fi", "finland flag"], u: "1f1eb-1f1ee", a: "2.0" },
            { n: ["flag-fj", "fiji flag"], u: "1f1eb-1f1ef", a: "2.0" },
            { n: ["flag-fk", "falkland islands flag"], u: "1f1eb-1f1f0", a: "2.0" },
            { n: ["flag-fm", "micronesia flag"], u: "1f1eb-1f1f2", a: "2.0" },
            { n: ["flag-fo", "faroe islands flag"], u: "1f1eb-1f1f4", a: "2.0" },
            { n: ["fr", "flag-fr", "france flag"], u: "1f1eb-1f1f7", a: "0.6" },
            { n: ["flag-ga", "gabon flag"], u: "1f1ec-1f1e6", a: "2.0" },
            { n: ["gb", "uk", "flag-gb", "united kingdom flag"], u: "1f1ec-1f1e7", a: "0.6" },
            { n: ["flag-gd", "grenada flag"], u: "1f1ec-1f1e9", a: "2.0" },
            { n: ["flag-ge", "georgia flag"], u: "1f1ec-1f1ea", a: "2.0" },
            { n: ["flag-gf", "french guiana flag"], u: "1f1ec-1f1eb", a: "2.0" },
            { n: ["flag-gg", "guernsey flag"], u: "1f1ec-1f1ec", a: "2.0" },
            { n: ["flag-gh", "ghana flag"], u: "1f1ec-1f1ed", a: "2.0" },
            { n: ["flag-gi", "gibraltar flag"], u: "1f1ec-1f1ee", a: "2.0" },
            { n: ["flag-gl", "greenland flag"], u: "1f1ec-1f1f1", a: "2.0" },
            { n: ["flag-gm", "gambia flag"], u: "1f1ec-1f1f2", a: "2.0" },
            { n: ["flag-gn", "guinea flag"], u: "1f1ec-1f1f3", a: "2.0" },
            { n: ["flag-gp", "guadeloupe flag"], u: "1f1ec-1f1f5", a: "2.0" },
            { n: ["flag-gq", "equatorial guinea flag"], u: "1f1ec-1f1f6", a: "2.0" },
            { n: ["flag-gr", "greece flag"], u: "1f1ec-1f1f7", a: "2.0" },
            { n: ["flag-gs", "south georgia & south sandwich islands flag"], u: "1f1ec-1f1f8", a: "2.0" },
            { n: ["flag-gt", "guatemala flag"], u: "1f1ec-1f1f9", a: "2.0" },
            { n: ["flag-gu", "guam flag"], u: "1f1ec-1f1fa", a: "2.0" },
            { n: ["flag-gw", "guinea-bissau flag"], u: "1f1ec-1f1fc", a: "2.0" },
            { n: ["flag-gy", "guyana flag"], u: "1f1ec-1f1fe", a: "2.0" },
            { n: ["flag-hk", "hong kong sar china flag"], u: "1f1ed-1f1f0", a: "2.0" },
            { n: ["flag-hm", "heard & mcdonald islands flag"], u: "1f1ed-1f1f2", a: "2.0" },
            { n: ["flag-hn", "honduras flag"], u: "1f1ed-1f1f3", a: "2.0" },
            { n: ["flag-hr", "croatia flag"], u: "1f1ed-1f1f7", a: "2.0" },
            { n: ["flag-ht", "haiti flag"], u: "1f1ed-1f1f9", a: "2.0" },
            { n: ["flag-hu", "hungary flag"], u: "1f1ed-1f1fa", a: "2.0" },
            { n: ["flag-ic", "canary islands flag"], u: "1f1ee-1f1e8", a: "2.0" },
            { n: ["flag-id", "indonesia flag"], u: "1f1ee-1f1e9", a: "2.0" },
            { n: ["flag-ie", "ireland flag"], u: "1f1ee-1f1ea", a: "2.0" },
            { n: ["flag-il", "israel flag"], u: "1f1ee-1f1f1", a: "2.0" },
            { n: ["flag-im", "isle of man flag"], u: "1f1ee-1f1f2", a: "2.0" },
            { n: ["flag-in", "india flag"], u: "1f1ee-1f1f3", a: "2.0" },
            { n: ["flag-io", "british indian ocean territory flag"], u: "1f1ee-1f1f4", a: "2.0" },
            { n: ["flag-iq", "iraq flag"], u: "1f1ee-1f1f6", a: "2.0" },
            { n: ["flag-ir", "iran flag"], u: "1f1ee-1f1f7", a: "2.0" },
            { n: ["flag-is", "iceland flag"], u: "1f1ee-1f1f8", a: "2.0" },
            { n: ["it", "flag-it", "italy flag"], u: "1f1ee-1f1f9", a: "0.6" },
            { n: ["flag-je", "jersey flag"], u: "1f1ef-1f1ea", a: "2.0" },
            { n: ["flag-jm", "jamaica flag"], u: "1f1ef-1f1f2", a: "2.0" },
            { n: ["flag-jo", "jordan flag"], u: "1f1ef-1f1f4", a: "2.0" },
            { n: ["jp", "flag-jp", "japan flag"], u: "1f1ef-1f1f5", a: "0.6" },
            { n: ["flag-ke", "kenya flag"], u: "1f1f0-1f1ea", a: "2.0" },
            { n: ["flag-kg", "kyrgyzstan flag"], u: "1f1f0-1f1ec", a: "2.0" },
            { n: ["flag-kh", "cambodia flag"], u: "1f1f0-1f1ed", a: "2.0" },
            { n: ["flag-ki", "kiribati flag"], u: "1f1f0-1f1ee", a: "2.0" },
            { n: ["flag-km", "comoros flag"], u: "1f1f0-1f1f2", a: "2.0" },
            { n: ["flag-kn", "st. kitts & nevis flag"], u: "1f1f0-1f1f3", a: "2.0" },
            { n: ["flag-kp", "north korea flag"], u: "1f1f0-1f1f5", a: "2.0" },
            { n: ["kr", "flag-kr", "south korea flag"], u: "1f1f0-1f1f7", a: "0.6" },
            { n: ["flag-kw", "kuwait flag"], u: "1f1f0-1f1fc", a: "2.0" },
            { n: ["flag-ky", "cayman islands flag"], u: "1f1f0-1f1fe", a: "2.0" },
            { n: ["flag-kz", "kazakhstan flag"], u: "1f1f0-1f1ff", a: "2.0" },
            { n: ["flag-la", "laos flag"], u: "1f1f1-1f1e6", a: "2.0" },
            { n: ["flag-lb", "lebanon flag"], u: "1f1f1-1f1e7", a: "2.0" },
            { n: ["flag-lc", "st. lucia flag"], u: "1f1f1-1f1e8", a: "2.0" },
            { n: ["flag-li", "liechtenstein flag"], u: "1f1f1-1f1ee", a: "2.0" },
            { n: ["flag-lk", "sri lanka flag"], u: "1f1f1-1f1f0", a: "2.0" },
            { n: ["flag-lr", "liberia flag"], u: "1f1f1-1f1f7", a: "2.0" },
            { n: ["flag-ls", "lesotho flag"], u: "1f1f1-1f1f8", a: "2.0" },
            { n: ["flag-lt", "lithuania flag"], u: "1f1f1-1f1f9", a: "2.0" },
            { n: ["flag-lu", "luxembourg flag"], u: "1f1f1-1f1fa", a: "2.0" },
            { n: ["flag-lv", "latvia flag"], u: "1f1f1-1f1fb", a: "2.0" },
            { n: ["flag-ly", "libya flag"], u: "1f1f1-1f1fe", a: "2.0" },
            { n: ["flag-ma", "morocco flag"], u: "1f1f2-1f1e6", a: "2.0" },
            { n: ["flag-mc", "monaco flag"], u: "1f1f2-1f1e8", a: "2.0" },
            { n: ["flag-md", "moldova flag"], u: "1f1f2-1f1e9", a: "2.0" },
            { n: ["flag-me", "montenegro flag"], u: "1f1f2-1f1ea", a: "2.0" },
            { n: ["flag-mf", "st. martin flag"], u: "1f1f2-1f1eb", a: "2.0" },
            { n: ["flag-mg", "madagascar flag"], u: "1f1f2-1f1ec", a: "2.0" },
            { n: ["flag-mh", "marshall islands flag"], u: "1f1f2-1f1ed", a: "2.0" },
            { n: ["flag-mk", "north macedonia flag"], u: "1f1f2-1f1f0", a: "2.0" },
            { n: ["flag-ml", "mali flag"], u: "1f1f2-1f1f1", a: "2.0" },
            { n: ["flag-mm", "myanmar (burma) flag"], u: "1f1f2-1f1f2", a: "2.0" },
            { n: ["flag-mn", "mongolia flag"], u: "1f1f2-1f1f3", a: "2.0" },
            { n: ["flag-mo", "macao sar china flag"], u: "1f1f2-1f1f4", a: "2.0" },
            { n: ["flag-mp", "northern mariana islands flag"], u: "1f1f2-1f1f5", a: "2.0" },
            { n: ["flag-mq", "martinique flag"], u: "1f1f2-1f1f6", a: "2.0" },
            { n: ["flag-mr", "mauritania flag"], u: "1f1f2-1f1f7", a: "2.0" },
            { n: ["flag-ms", "montserrat flag"], u: "1f1f2-1f1f8", a: "2.0" },
            { n: ["flag-mt", "malta flag"], u: "1f1f2-1f1f9", a: "2.0" },
            { n: ["flag-mu", "mauritius flag"], u: "1f1f2-1f1fa", a: "2.0" },
            { n: ["flag-mv", "maldives flag"], u: "1f1f2-1f1fb", a: "2.0" },
            { n: ["flag-mw", "malawi flag"], u: "1f1f2-1f1fc", a: "2.0" },
            { n: ["flag-mx", "mexico flag"], u: "1f1f2-1f1fd", a: "2.0" },
            { n: ["flag-my", "malaysia flag"], u: "1f1f2-1f1fe", a: "2.0" },
            { n: ["flag-mz", "mozambique flag"], u: "1f1f2-1f1ff", a: "2.0" },
            { n: ["flag-na", "namibia flag"], u: "1f1f3-1f1e6", a: "2.0" },
            { n: ["flag-nc", "new caledonia flag"], u: "1f1f3-1f1e8", a: "2.0" },
            { n: ["flag-ne", "niger flag"], u: "1f1f3-1f1ea", a: "2.0" },
            { n: ["flag-nf", "norfolk island flag"], u: "1f1f3-1f1eb", a: "2.0" },
            { n: ["flag-ng", "nigeria flag"], u: "1f1f3-1f1ec", a: "2.0" },
            { n: ["flag-ni", "nicaragua flag"], u: "1f1f3-1f1ee", a: "2.0" },
            { n: ["flag-nl", "netherlands flag"], u: "1f1f3-1f1f1", a: "2.0" },
            { n: ["flag-no", "norway flag"], u: "1f1f3-1f1f4", a: "2.0" },
            { n: ["flag-np", "nepal flag"], u: "1f1f3-1f1f5", a: "2.0" },
            { n: ["flag-nr", "nauru flag"], u: "1f1f3-1f1f7", a: "2.0" },
            { n: ["flag-nu", "niue flag"], u: "1f1f3-1f1fa", a: "2.0" },
            { n: ["flag-nz", "new zealand flag"], u: "1f1f3-1f1ff", a: "2.0" },
            { n: ["flag-om", "oman flag"], u: "1f1f4-1f1f2", a: "2.0" },
            { n: ["flag-pa", "panama flag"], u: "1f1f5-1f1e6", a: "2.0" },
            { n: ["flag-pe", "peru flag"], u: "1f1f5-1f1ea", a: "2.0" },
            { n: ["flag-pf", "french polynesia flag"], u: "1f1f5-1f1eb", a: "2.0" },
            { n: ["flag-pg", "papua new guinea flag"], u: "1f1f5-1f1ec", a: "2.0" },
            { n: ["flag-ph", "philippines flag"], u: "1f1f5-1f1ed", a: "2.0" },
            { n: ["flag-pk", "pakistan flag"], u: "1f1f5-1f1f0", a: "2.0" },
            { n: ["flag-pl", "poland flag"], u: "1f1f5-1f1f1", a: "2.0" },
            { n: ["flag-pm", "st. pierre & miquelon flag"], u: "1f1f5-1f1f2", a: "2.0" },
            { n: ["flag-pn", "pitcairn islands flag"], u: "1f1f5-1f1f3", a: "2.0" },
            { n: ["flag-pr", "puerto rico flag"], u: "1f1f5-1f1f7", a: "2.0" },
            { n: ["flag-ps", "palestinian territories flag"], u: "1f1f5-1f1f8", a: "2.0" },
            { n: ["flag-pt", "portugal flag"], u: "1f1f5-1f1f9", a: "2.0" },
            { n: ["flag-pw", "palau flag"], u: "1f1f5-1f1fc", a: "2.0" },
            { n: ["flag-py", "paraguay flag"], u: "1f1f5-1f1fe", a: "2.0" },
            { n: ["flag-qa", "qatar flag"], u: "1f1f6-1f1e6", a: "2.0" },
            { n: ["flag-re", "r\xe9union flag"], u: "1f1f7-1f1ea", a: "2.0" },
            { n: ["flag-ro", "romania flag"], u: "1f1f7-1f1f4", a: "2.0" },
            { n: ["flag-rs", "serbia flag"], u: "1f1f7-1f1f8", a: "2.0" },
            { n: ["ru", "flag-ru", "russia flag"], u: "1f1f7-1f1fa", a: "0.6" },
            { n: ["flag-rw", "rwanda flag"], u: "1f1f7-1f1fc", a: "2.0" },
            { n: ["flag-sa", "saudi arabia flag"], u: "1f1f8-1f1e6", a: "2.0" },
            { n: ["flag-sb", "solomon islands flag"], u: "1f1f8-1f1e7", a: "2.0" },
            { n: ["flag-sc", "seychelles flag"], u: "1f1f8-1f1e8", a: "2.0" },
            { n: ["flag-sd", "sudan flag"], u: "1f1f8-1f1e9", a: "2.0" },
            { n: ["flag-se", "sweden flag"], u: "1f1f8-1f1ea", a: "2.0" },
            { n: ["flag-sg", "singapore flag"], u: "1f1f8-1f1ec", a: "2.0" },
            { n: ["flag-sh", "st. helena flag"], u: "1f1f8-1f1ed", a: "2.0" },
            { n: ["flag-si", "slovenia flag"], u: "1f1f8-1f1ee", a: "2.0" },
            { n: ["flag-sj", "svalbard & jan mayen flag"], u: "1f1f8-1f1ef", a: "2.0" },
            { n: ["flag-sk", "slovakia flag"], u: "1f1f8-1f1f0", a: "2.0" },
            { n: ["flag-sl", "sierra leone flag"], u: "1f1f8-1f1f1", a: "2.0" },
            { n: ["flag-sm", "san marino flag"], u: "1f1f8-1f1f2", a: "2.0" },
            { n: ["flag-sn", "senegal flag"], u: "1f1f8-1f1f3", a: "2.0" },
            { n: ["flag-so", "somalia flag"], u: "1f1f8-1f1f4", a: "2.0" },
            { n: ["flag-sr", "suriname flag"], u: "1f1f8-1f1f7", a: "2.0" },
            { n: ["flag-ss", "south sudan flag"], u: "1f1f8-1f1f8", a: "2.0" },
            { n: ["flag-st", "s\xe3o tom\xe9 & pr\xedncipe flag"], u: "1f1f8-1f1f9", a: "2.0" },
            { n: ["flag-sv", "el salvador flag"], u: "1f1f8-1f1fb", a: "2.0" },
            { n: ["flag-sx", "sint maarten flag"], u: "1f1f8-1f1fd", a: "2.0" },
            { n: ["flag-sy", "syria flag"], u: "1f1f8-1f1fe", a: "2.0" },
            { n: ["flag-sz", "eswatini flag"], u: "1f1f8-1f1ff", a: "2.0" },
            { n: ["flag-ta", "tristan da cunha flag"], u: "1f1f9-1f1e6", a: "2.0" },
            { n: ["flag-tc", "turks & caicos islands flag"], u: "1f1f9-1f1e8", a: "2.0" },
            { n: ["flag-td", "chad flag"], u: "1f1f9-1f1e9", a: "2.0" },
            { n: ["flag-tf", "french southern territories flag"], u: "1f1f9-1f1eb", a: "2.0" },
            { n: ["flag-tg", "togo flag"], u: "1f1f9-1f1ec", a: "2.0" },
            { n: ["flag-th", "thailand flag"], u: "1f1f9-1f1ed", a: "2.0" },
            { n: ["flag-tj", "tajikistan flag"], u: "1f1f9-1f1ef", a: "2.0" },
            { n: ["flag-tk", "tokelau flag"], u: "1f1f9-1f1f0", a: "2.0" },
            { n: ["flag-tl", "timor-leste flag"], u: "1f1f9-1f1f1", a: "2.0" },
            { n: ["flag-tm", "turkmenistan flag"], u: "1f1f9-1f1f2", a: "2.0" },
            { n: ["flag-tn", "tunisia flag"], u: "1f1f9-1f1f3", a: "2.0" },
            { n: ["flag-to", "tonga flag"], u: "1f1f9-1f1f4", a: "2.0" },
            { n: ["flag-tr", "turkey flag"], u: "1f1f9-1f1f7", a: "2.0" },
            { n: ["flag-tt", "trinidad & tobago flag"], u: "1f1f9-1f1f9", a: "2.0" },
            { n: ["flag-tv", "tuvalu flag"], u: "1f1f9-1f1fb", a: "2.0" },
            { n: ["flag-tw", "taiwan flag"], u: "1f1f9-1f1fc", a: "2.0" },
            { n: ["flag-tz", "tanzania flag"], u: "1f1f9-1f1ff", a: "2.0" },
            { n: ["flag-ua", "ukraine flag"], u: "1f1fa-1f1e6", a: "2.0" },
            { n: ["flag-ug", "uganda flag"], u: "1f1fa-1f1ec", a: "2.0" },
            { n: ["flag-um", "u.s. outlying islands flag"], u: "1f1fa-1f1f2", a: "2.0" },
            { n: ["flag-un", "united nations flag"], u: "1f1fa-1f1f3", a: "4.0" },
            { n: ["us", "flag-us", "united states flag"], u: "1f1fa-1f1f8", a: "0.6" },
            { n: ["flag-uy", "uruguay flag"], u: "1f1fa-1f1fe", a: "2.0" },
            { n: ["flag-uz", "uzbekistan flag"], u: "1f1fa-1f1ff", a: "2.0" },
            { n: ["flag-va", "vatican city flag"], u: "1f1fb-1f1e6", a: "2.0" },
            { n: ["flag-vc", "st. vincent & grenadines flag"], u: "1f1fb-1f1e8", a: "2.0" },
            { n: ["flag-ve", "venezuela flag"], u: "1f1fb-1f1ea", a: "2.0" },
            { n: ["flag-vg", "british virgin islands flag"], u: "1f1fb-1f1ec", a: "2.0" },
            { n: ["flag-vi", "u.s. virgin islands flag"], u: "1f1fb-1f1ee", a: "2.0" },
            { n: ["flag-vn", "vietnam flag"], u: "1f1fb-1f1f3", a: "2.0" },
            { n: ["flag-vu", "vanuatu flag"], u: "1f1fb-1f1fa", a: "2.0" },
            { n: ["flag-wf", "wallis & futuna flag"], u: "1f1fc-1f1eb", a: "2.0" },
            { n: ["flag-ws", "samoa flag"], u: "1f1fc-1f1f8", a: "2.0" },
            { n: ["flag-xk", "kosovo flag"], u: "1f1fd-1f1f0", a: "2.0" },
            { n: ["flag-ye", "yemen flag"], u: "1f1fe-1f1ea", a: "2.0" },
            { n: ["flag-yt", "mayotte flag"], u: "1f1fe-1f1f9", a: "2.0" },
            { n: ["flag-za", "south africa flag"], u: "1f1ff-1f1e6", a: "2.0" },
            { n: ["flag-zm", "zambia flag"], u: "1f1ff-1f1f2", a: "2.0" },
            { n: ["flag-zw", "zimbabwe flag"], u: "1f1ff-1f1fc", a: "2.0" },
            { n: ["england flag", "flag-england"], u: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f", a: "5.0" },
            { n: ["scotland flag", "flag-scotland"], u: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f", a: "5.0" },
            { n: ["wales flag", "flag-wales"], u: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f", a: "5.0" },
          ],
        },
        ao = [Ui.NEUTRAL, Ui.LIGHT, Ui.MEDIUM_LIGHT, Ui.MEDIUM, Ui.MEDIUM_DARK, Ui.DARK],
        ro = Object.entries(Ui).reduce(function (e, n) {
          var t = n[0];
          return (e[n[1]] = t), e;
        }, {}),
        io = ao.reduce(function (e, n) {
          var t;
          return Object.assign(e, (((t = {})[n] = n), t));
        }, {});
      !(function (e) {
        (e.name = "n"), (e.unified = "u"), (e.variations = "v"), (e.added_in = "a"), (e.imgUrl = "imgUrl");
      })(to || (to = {}));
      var oo = {};
      function uo(e) {
        so(e)
          .flat()
          .join("")
          .toLowerCase()
          .replace(/[^a-zA-Z\d]/g, "")
          .split("")
          .forEach(function (n) {
            var t;
            (oo[n] = null != (t = oo[n]) ? t : {}), (oo[n][po(e)] = e);
          });
      }
      function so(e) {
        var n;
        return null != (n = e[to.name]) ? n : [];
      }
      function lo(e) {
        return e ? so(e)[0] : "";
      }
      function co(e) {
        var n = e.split("-"),
          t = n.splice(1, 1)[0];
        return io[t] ? n.join("-") : e;
      }
      function po(e, n) {
        var t,
          f = e[to.unified];
        return n &&
          wo(e) &&
          null !=
            (t = (function (e, n) {
              return n
                ? mo(e).find(function (e) {
                    return e.includes(n);
                  })
                : po(e);
            })(e, n))
          ? t
          : f;
      }
      function go(e) {
        var n;
        return null != (n = null == fo ? void 0 : fo[e]) ? n : [];
      }
      function ho(e, n) {
        return (
          "" +
          (function (e) {
            switch (e) {
              case Qi.TWITTER:
                return eo;
              case Qi.GOOGLE:
                return no;
              case Qi.FACEBOOK:
                return $i;
              case Qi.APPLE:
              default:
                return qi;
            }
          })(n) +
          e +
          ".png"
        );
      }
      function mo(e) {
        var n;
        return null != (n = e[to.variations]) ? n : [];
      }
      function wo(e) {
        return mo(e).length > 0;
      }
      function bo(e) {
        if (e) {
          if (Mo[e]) return Mo[e];
          var n = co(e);
          return Mo[n];
        }
      }
      setTimeout(function () {
        yo.reduce(function (e, n) {
          return uo(n), e;
        }, oo);
      });
      var yo = Object.values(fo).flat();
      function Lo(e) {
        (fo[Bi.CUSTOM].length = 0),
          e.forEach(function (e) {
            var n = (function (e) {
              var n;
              return (
                ((n = {})[to.name] = e.names.map(function (e) {
                  return e.toLowerCase();
                })),
                (n[to.unified] = e.id.toLowerCase()),
                (n[to.added_in] = "0"),
                (n[to.imgUrl] = e.imgUrl),
                n
              );
            })(e);
            fo[Bi.CUSTOM].push(n), Mo[n[to.unified]] || (yo.push(n), (Mo[n[to.unified]] = n), uo(n));
          });
      }
      var Mo = {};
      setTimeout(function () {
        yo.reduce(function (e, n) {
          return (
            (e[po(n)] = n),
            wo(n) &&
              mo(n).forEach(function (t) {
                e[t] = n;
              }),
            e
          );
        }, Mo);
      });
      var vo = ["2640-fe0f", "2642-fe0f", "2695-fe0f"],
        Co = "Search",
        jo = "No results found",
        ko = " found. Use up and down arrow keys to navigate.",
        Io = "1 result" + ko,
        So = "%n results" + ko;
      function No(e) {
        var n, t;
        void 0 === e && (e = {});
        var f = To(),
          a = Object.assign(f.previewConfig, null != (n = e.previewConfig) ? n : {}),
          r = Object.assign(f, e),
          i = (function (e, n) {
            var t;
            void 0 === e && (e = []), void 0 === n && (n = {});
            var f = {};
            n.suggestionMode === Ri.RECENT && (f[Bi.SUGGESTED] = Hi);
            var a = Wi(f);
            return null != (t = e) && t.length
              ? e.map(function (e) {
                  return "string" === typeof e ? Xi(e, f[e]) : ji({}, Xi(e.category, f[e.category]), e);
                })
              : a;
          })(e.categories, { suggestionMode: r.suggestedEmojisMode });
        r.hiddenEmojis.forEach(function (e) {
          r.unicodeToHide.add(e);
        }),
          Lo(null != (t = r.customEmojis) ? t : []);
        var o = r.searchDisabled ? Ji.PREVIEW : r.skinTonePickerLocation;
        return ji({}, r, { categories: i, previewConfig: a, skinTonePickerLocation: o });
      }
      function To() {
        return {
          autoFocusSearch: !0,
          categories: Wi(),
          className: "",
          customEmojis: [],
          defaultSkinTone: Ui.NEUTRAL,
          emojiStyle: Qi.APPLE,
          emojiVersion: null,
          getEmojiUrl: ho,
          height: 450,
          lazyLoadEmojis: !1,
          previewConfig: ji({}, Eo),
          searchDisabled: !1,
          searchPlaceHolder: Co,
          searchPlaceholder: Co,
          skinTonePickerLocation: Ji.SEARCH,
          skinTonesDisabled: !1,
          style: {},
          suggestedEmojisMode: Ri.FREQUENT,
          theme: Yi.LIGHT,
          unicodeToHide: new Set(vo),
          width: 350,
          reactionsDefaultOpen: !1,
          reactions: Gi,
          open: !0,
          allowExpandReactions: !0,
          hiddenEmojis: [],
        };
      }
      var Eo = { defaultEmoji: "1f60a", defaultCaption: "What's your mood?", showPreview: !0 },
        Do = ["children"],
        xo = (0, f.createContext)(To());
      function zo(e) {
        var n = e.children,
          t = (function (e) {
            var n,
              t = (0, f.useState)(function () {
                return No(e);
              }),
              a = t[0],
              r = t[1];
            return (
              (0, f.useEffect)(
                function () {
                  Oi(a, e) || r(No(e));
                },
                [
                  null == (n = e.customEmojis) ? void 0 : n.length,
                  e.open,
                  e.emojiVersion,
                  e.reactionsDefaultOpen,
                  e.searchPlaceHolder,
                  e.searchPlaceholder,
                  e.defaultSkinTone,
                  e.skinTonesDisabled,
                  e.autoFocusSearch,
                  e.emojiStyle,
                  e.theme,
                  e.suggestedEmojisMode,
                  e.lazyLoadEmojis,
                  e.className,
                  e.height,
                  e.width,
                  e.searchDisabled,
                  e.skinTonePickerLocation,
                  e.allowExpandReactions,
                ]
              ),
              a
            );
          })(Ii(e, Do));
        return (0, f.createElement)(xo.Provider, { value: t }, n);
      }
      function Ao() {
        return (0, f.useContext)(xo);
      }
      var Po,
        Oo = f.createContext({});
      function Ro() {
        return f.useContext(Oo);
      }
      function Qo() {}
      function Yo() {
        return Ao().allowExpandReactions;
      }
      function Uo() {
        return Ao().skinTonesDisabled;
      }
      function Bo() {
        return Ao().emojiStyle;
      }
      function Jo() {
        return Ao().categories;
      }
      function _o() {
        return Ao().previewConfig;
      }
      function Go() {
        return Ao().searchDisabled;
      }
      function Zo() {
        return Ao().skinTonePickerLocation;
      }
      function Ho() {
        return Ao().getEmojiUrl;
      }
      function Fo(e) {
        return "number" === typeof e ? e + "px" : e;
      }
      function Wo(e, n) {
        void 0 === n && (n = 0);
        var t = (0, f.useState)(e),
          a = t[0],
          r = t[1],
          i = (0, f.useRef)(null);
        return [
          a,
          function (e) {
            return new Promise(function (t) {
              var f;
              i.current && clearTimeout(i.current),
                (i.current =
                  null == (f = window)
                    ? void 0
                    : f.setTimeout(function () {
                        r(e), t(e);
                      }, n));
            });
          },
        ];
      }
      function Vo() {
        var e = Ao().unicodeToHide;
        return function (n) {
          return e.has(n);
        };
      }
      function Ko() {
        var e = (0, f.useRef)({}),
          n = Ao().emojiVersion;
        return (0, f.useMemo)(
          function () {
            var t = parseFloat("" + n);
            return !n || Number.isNaN(t)
              ? e.current
              : yo.reduce(function (e, n) {
                  return (
                    (function (e, n) {
                      return (
                        (function (e) {
                          return parseFloat(e[to.added_in]);
                        })(e) > n
                      );
                    })(n, t) && (e[po(n)] = !0),
                    e
                  );
                }, e.current);
          },
          [n]
        );
      }
      function Xo(e) {
        var n,
          t = e.children,
          a = Ko(),
          r = Ao().defaultSkinTone,
          i = Ao().reactionsDefaultOpen,
          o = (0, f.useRef)(oo),
          u = (0, f.useRef)(!1),
          s = (0, f.useRef)(!1),
          l = (0, f.useRef)(a),
          c = Wo(Date.now(), 200),
          d = Wo("", 100),
          p = (0, f.useState)(!1),
          g = (0, f.useState)(r),
          h = (0, f.useState)(null),
          m = (0, f.useState)(new Set()),
          w = (0, f.useState)(null),
          b = (0, f.useState)(i),
          y = (0, f.useState)(!1),
          L = y[0],
          M = y[1];
        return (
          (n = M),
          (0, f.useEffect)(
            function () {
              n(!0);
            },
            [n]
          ),
          (0, f.createElement)(
            qo.Provider,
            {
              value: {
                activeCategoryState: h,
                activeSkinTone: g,
                disallowClickRef: u,
                disallowMouseRef: s,
                disallowedEmojisRef: l,
                emojiVariationPickerState: w,
                emojisThatFailedToLoadState: m,
                filterRef: o,
                isPastInitialLoad: L,
                searchTerm: d,
                skinToneFanOpenState: p,
                suggestedUpdateState: c,
                reactionsModeState: b,
              },
            },
            t
          )
        );
      }
      !(function (e) {
        (e.REACTIONS = "reactions"), (e.PICKER = "picker");
      })(Po || (Po = {}));
      var qo = (0, f.createContext)({
        activeCategoryState: [null, function () {}],
        activeSkinTone: [Ui.NEUTRAL, function () {}],
        disallowClickRef: { current: !1 },
        disallowMouseRef: { current: !1 },
        disallowedEmojisRef: { current: {} },
        emojiVariationPickerState: [null, function () {}],
        emojisThatFailedToLoadState: [new Set(), function () {}],
        filterRef: { current: {} },
        isPastInitialLoad: !0,
        searchTerm: [
          "",
          function () {
            return new Promise(function () {});
          },
        ],
        skinToneFanOpenState: [!1, function () {}],
        suggestedUpdateState: [Date.now(), function () {}],
        reactionsModeState: [!1, function () {}],
      });
      function $o() {
        return (0, f.useContext)(qo).filterRef;
      }
      function eu() {
        return (0, f.useContext)(qo).disallowMouseRef;
      }
      function nu() {
        return (0, f.useContext)(qo).reactionsModeState;
      }
      function tu() {
        return (0, f.useContext)(qo).searchTerm;
      }
      function fu() {
        return (0, f.useContext)(qo).activeSkinTone;
      }
      function au() {
        return (0, f.useContext)(qo).emojisThatFailedToLoadState;
      }
      function ru() {
        return (0, f.useContext)(qo).emojiVariationPickerState;
      }
      function iu() {
        return (0, f.useContext)(qo).skinToneFanOpenState;
      }
      function ou() {
        var e = (0, f.useContext)(qo).suggestedUpdateState,
          n = e[0],
          t = e[1];
        return [
          n,
          function () {
            t(Date.now());
          },
        ];
      }
      function uu() {
        return !!tu()[0];
      }
      function su(e) {
        e &&
          requestAnimationFrame(function () {
            e.focus();
          });
      }
      function lu(e) {
        e && su(e.previousElementSibling);
      }
      function cu(e) {
        e && su(e.nextElementSibling);
      }
      function du(e) {
        e && su(e.firstElementChild);
      }
      function pu() {
        return document.activeElement;
      }
      function gu(e) {
        var n = e.children,
          t = (0, f.useRef)(null),
          a = (0, f.useRef)(null),
          r = (0, f.useRef)(null),
          i = (0, f.useRef)(null),
          o = (0, f.useRef)(null),
          u = (0, f.useRef)(null),
          s = (0, f.useRef)(null),
          l = (0, f.useRef)(null);
        return (0, f.createElement)(
          mu.Provider,
          {
            value: {
              AnchoredEmojiRef: a,
              BodyRef: r,
              CategoryNavigationRef: u,
              PickerMainRef: t,
              SearchInputRef: i,
              SkinTonePickerRef: o,
              VariationPickerRef: s,
              ReactionsRef: l,
            },
          },
          n
        );
      }
      var hu,
        mu = (0, f.createContext)({
          AnchoredEmojiRef: (0, f.createRef)(),
          BodyRef: (0, f.createRef)(),
          CategoryNavigationRef: (0, f.createRef)(),
          PickerMainRef: (0, f.createRef)(),
          SearchInputRef: (0, f.createRef)(),
          SkinTonePickerRef: (0, f.createRef)(),
          VariationPickerRef: (0, f.createRef)(),
          ReactionsRef: (0, f.createRef)(),
        });
      function wu() {
        return (0, f.useContext)(mu);
      }
      function bu() {
        return wu().PickerMainRef;
      }
      function yu() {
        return wu().AnchoredEmojiRef;
      }
      function Lu() {
        var e = yu();
        return function (n) {
          null === n && null !== e.current && su(e.current), (e.current = n);
        };
      }
      function Mu() {
        return wu().BodyRef;
      }
      function vu() {
        return wu().SearchInputRef;
      }
      function Cu() {
        return wu().SkinTonePickerRef;
      }
      function ju() {
        return wu().CategoryNavigationRef;
      }
      function ku(e, n) {
        void 0 === n && (n = 0);
        var t = bs(e);
        t &&
          requestAnimationFrame(function () {
            t.scrollTop = n;
          });
      }
      function Iu(e) {
        if (
          e &&
          (function (e) {
            if (!e) return !1;
            return ys(e) < ws(Ps(e));
          })(e) &&
          !e.closest(Ti(hi.variationPicker))
        ) {
          var n = Ls(e),
            t = ys(e);
          !(function (e, n) {
            var t = bs(e);
            t &&
              requestAnimationFrame(function () {
                t.scrollTop = t.scrollTop + n;
              });
          })(n, -(ws(Ps(e)) - t));
        }
      }
      function Su(e) {
        var n = xs(e);
        su(n), Iu(n);
      }
      function Nu(e) {
        if (e) {
          var n = Es(e);
          if (!n) return Su(As(e));
          su(n), Iu(n);
        }
      }
      function Tu(e) {
        if (e) {
          var n = Ds(e);
          if (n) su(n), Iu(n);
          else su(Ts(zs(e)));
        }
      }
      function Eu(e, n) {
        if (e) {
          var t = (function (e) {
            if (!e) return null;
            var n = Os(e),
              t = Ps(n),
              f = is(n, e),
              a = os(n, e),
              r = rs(n, e);
            if (0 === a) {
              var i = zs(t);
              return i ? ss(Ns(i), -1, r, f) : null;
            }
            return (function (e, n, t, f) {
              var a = us(e, n - 1, t);
              return a[f] || a[a.length - 1] || null;
            })(Ns(n), a, r, f);
          })(e);
          if (!t) return n();
          su(t), Iu(t);
        }
      }
      function Du(e) {
        if (e) {
          var n = (function (e) {
            if (!e) return null;
            var n = Os(e),
              t = Ps(n),
              f = is(n, e),
              a = os(n, e),
              r = rs(n, e);
            if (
              !(function (e, n) {
                if (!e || !n) return !1;
                var t = n.getBoundingClientRect().height,
                  f = n.getBoundingClientRect().top,
                  a = e.getBoundingClientRect().top,
                  r = e.getBoundingClientRect().height;
                return Math.round(f - a + t) < r;
              })(n, e)
            ) {
              var i = As(t);
              return i ? ss(Ns(i), 0, r, f) : null;
            }
            return (function (e, n, t, f) {
              var a = (function (e, n, t) {
                var f = n + 1;
                if (f * t > e.length) return [];
                return us(e, f, t);
              })(e, n, t);
              return a[f] || a[a.length - 1] || null;
            })(Ns(n), a, r, f);
          })(e);
          return su(n);
        }
      }
      function xu() {
        var e = ru(),
          n = e[0],
          t = e[1],
          a = iu(),
          r = a[0],
          i = a[1];
        return (0, f.useCallback)(
          function () {
            n && t(null), r && i(!1);
          },
          [n, r, t, i]
        );
      }
      function zu() {
        var e = ru()[0],
          n = iu()[0];
        return function () {
          return !!e || n;
        };
      }
      function Au() {
        var e = eu();
        return function () {
          e.current = !1;
        };
      }
      function Pu() {
        var e = eu();
        return function () {
          return e.current;
        };
      }
      function Ou() {
        var e = vu();
        return (0, f.useCallback)(
          function () {
            su(e.current);
          },
          [e]
        );
      }
      function Ru() {
        var e = ju();
        return (0, f.useCallback)(
          function () {
            e.current && du(e.current);
          },
          [e]
        );
      }
      function Qu() {
        var e = Uu(),
          n = vu(),
          t = Ou();
        return function () {
          n.current && (n.current.value = ""), e(""), t();
        };
      }
      function Yu() {
        var e = vu(),
          n = $o(),
          t = (function () {
            var e = $o();
            return function n(t) {
              if ("function" === typeof t) return n(t(e.current));
              e.current = t;
            };
          })(),
          f = Uu(),
          a = tu()[0],
          r = (function (e, n) {
            var t;
            if (null == e || !e[n]) return "";
            var f = (null == (t = Object.entries(null == e ? void 0 : e[n])) ? void 0 : t.length) || 0;
            return (function (e) {
              return e > 0 ? (e > 1 ? So.replace("%n", e.toString()) : Io) : jo;
            })(f);
          })(n.current, a);
        return {
          onChange: function (e) {
            var a = n.current,
              r = e.toLowerCase();
            if ((null != a && a[r]) || r.length <= 1) return f(r);
            var i = (function (e, n) {
              if (!n) return null;
              if (n[e]) return n[e];
              var t = Object.keys(n)
                .sort(function (e, n) {
                  return n.length - e.length;
                })
                .find(function (n) {
                  return e.includes(n);
                });
              if (t) return n[t];
              return null;
            })(r, a);
            if (!i) return f(r);
            t(function (e) {
              var n;
              return Object.assign(
                e,
                (((n = {})[r] = (function (e, n) {
                  var t = {};
                  for (var f in e) {
                    var a = e[f];
                    Bu(a, n) && (t[f] = a);
                  }
                  return t;
                })(i, r)),
                n)
              );
            }),
              f(r);
          },
          searchTerm: a,
          SearchInputRef: e,
          statusSearchResults: r,
        };
      }
      function Uu() {
        var e = tu()[1],
          n = bu();
        return function (t) {
          requestAnimationFrame(function () {
            e(t ? (null == t ? void 0 : t.toLowerCase()) : t).then(function () {
              ku(n.current, 0);
            });
          });
        };
      }
      function Bu(e, n) {
        return so(e).some(function (e) {
          return e.includes(n);
        });
      }
      function Ju(e) {
        return e && "string" === typeof e ? e.trim().toLowerCase() : "";
      }
      function _u() {
        var e = Lu(),
          n = ru()[1];
        return function (t) {
          var f = gs(t)[0];
          f && (e(t), n(f));
        };
      }
      function Gu() {
        return Zo() === Ji.SEARCH;
      }
      function Zu() {
        return Zo() === Ji.PREVIEW;
      }
      function Hu() {
        !(function () {
          var e = bu(),
            n = Qu(),
            t = (function () {
              var e = Mu();
              return (0, f.useCallback)(
                function (n) {
                  requestAnimationFrame(function () {
                    e.current && (e.current.scrollTop = n);
                  });
                },
                [e]
              );
            })(),
            a = vu(),
            r = Ou(),
            i = zu(),
            o = (function () {
              var e = eu();
              return function () {
                e.current = !0;
              };
            })(),
            u = xu(),
            s = (0, f.useMemo)(
              function () {
                return function (e) {
                  var f = e.key;
                  if ((o(), f === hu.Escape)) {
                    if ((e.preventDefault(), i())) return void u();
                    n(), t(0), r();
                  }
                };
              },
              [t, n, u, r, i, o]
            );
          (0, f.useEffect)(
            function () {
              var n = e.current;
              if (n)
                return (
                  n.addEventListener("keydown", s),
                  function () {
                    n.removeEventListener("keydown", s);
                  }
                );
            },
            [e, a, t, s]
          );
        })(),
          (function () {
            var e = (function () {
                var e = Cu();
                return (0, f.useCallback)(
                  function () {
                    e.current && du(e.current);
                  },
                  [e]
                );
              })(),
              n = bu(),
              t = Mu(),
              a = vu(),
              r = iu()[1],
              i = Fu(),
              o = Gu(),
              u = (0, f.useMemo)(
                function () {
                  return function (n) {
                    switch (n.key) {
                      case hu.ArrowRight:
                        if (!o) return;
                        n.preventDefault(), r(!0), e();
                        break;
                      case hu.ArrowDown:
                        n.preventDefault(), i();
                        break;
                      case hu.Enter:
                        n.preventDefault(),
                          (function (e) {
                            var n = xs(e);
                            su(n), null == n || n.click();
                          })(t.current);
                    }
                  };
                },
                [e, i, r, t, o]
              );
            (0, f.useEffect)(
              function () {
                var e = a.current;
                if (e)
                  return (
                    e.addEventListener("keydown", u),
                    function () {
                      e.removeEventListener("keydown", u);
                    }
                  );
              },
              [n, a, u]
            );
          })(),
          (function () {
            var e = Cu(),
              n = Ou(),
              t = vu(),
              a = Fu(),
              r = iu(),
              i = r[0],
              o = r[1],
              u = Zu(),
              s = Gu(),
              l = Ku(),
              c = (0, f.useMemo)(
                function () {
                  return function (e) {
                    var t = e.key;
                    if (s)
                      switch (t) {
                        case hu.ArrowLeft:
                          if ((e.preventDefault(), !i)) return n();
                          Wu(n);
                          break;
                        case hu.ArrowRight:
                          if ((e.preventDefault(), !i)) return n();
                          Vu();
                          break;
                        case hu.ArrowDown:
                          e.preventDefault(), i && o(!1), a();
                          break;
                        default:
                          l(e);
                      }
                    if (u)
                      switch (t) {
                        case hu.ArrowUp:
                          if ((e.preventDefault(), !i)) return n();
                          Wu(n);
                          break;
                        case hu.ArrowDown:
                          if ((e.preventDefault(), !i)) return n();
                          Vu();
                          break;
                        default:
                          l(e);
                      }
                  };
                },
                [i, n, o, a, l, u, s]
              );
            (0, f.useEffect)(
              function () {
                var n = e.current;
                if (n)
                  return (
                    n.addEventListener("keydown", c),
                    function () {
                      n.removeEventListener("keydown", c);
                    }
                  );
              },
              [e, t, i, c]
            );
          })(),
          (function () {
            var e = Ou(),
              n = ju(),
              t = Mu(),
              a = Ku(),
              r = (0, f.useMemo)(
                function () {
                  return function (n) {
                    switch (n.key) {
                      case hu.ArrowUp:
                        n.preventDefault(), e();
                        break;
                      case hu.ArrowRight:
                        n.preventDefault(), cu(pu());
                        break;
                      case hu.ArrowLeft:
                        n.preventDefault(), lu(pu());
                        break;
                      case hu.ArrowDown:
                        n.preventDefault(), Su(t.current);
                        break;
                      default:
                        a(n);
                    }
                  };
                },
                [t, e, a]
              );
            (0, f.useEffect)(
              function () {
                var e = n.current;
                if (e)
                  return (
                    e.addEventListener("keydown", r),
                    function () {
                      e.removeEventListener("keydown", r);
                    }
                  );
              },
              [n, t, r]
            );
          })(),
          (function () {
            var e = Mu(),
              n = (function () {
                var e = Ou(),
                  n = Ru(),
                  t = uu();
                return (0, f.useCallback)(
                  function () {
                    return t ? e() : n();
                  },
                  [e, t, n]
                );
              })(),
              t = _u(),
              a = zu(),
              r = xu(),
              i = Ku(),
              o = (0, f.useMemo)(
                function () {
                  return function (e) {
                    var f = e.key,
                      o = ps(pu());
                    switch (f) {
                      case hu.ArrowRight:
                        e.preventDefault(), Nu(o);
                        break;
                      case hu.ArrowLeft:
                        e.preventDefault(), Tu(o);
                        break;
                      case hu.ArrowDown:
                        if ((e.preventDefault(), a())) {
                          r();
                          break;
                        }
                        Du(o);
                        break;
                      case hu.ArrowUp:
                        if ((e.preventDefault(), a())) {
                          r();
                          break;
                        }
                        Eu(o, n);
                        break;
                      case hu.Space:
                        e.preventDefault(), t(e.target);
                        break;
                      default:
                        i(e);
                    }
                  };
                },
                [n, i, t, a, r]
              );
            (0, f.useEffect)(
              function () {
                var n = e.current;
                if (n)
                  return (
                    n.addEventListener("keydown", o),
                    function () {
                      n.removeEventListener("keydown", o);
                    }
                  );
              },
              [e, o]
            );
          })();
      }
      function Fu() {
        var e = Ru(),
          n = uu(),
          t = Mu();
        return (0, f.useCallback)(
          function () {
            return n ? Su(t.current) : e();
          },
          [t, e, n]
        );
      }
      function Wu(e) {
        var n = pu();
        n && (n.nextElementSibling || e(), cu(n));
      }
      function Vu() {
        var e = pu();
        e && lu(e);
      }
      function Ku() {
        var e = (function () {
            var e = vu(),
              n = Uu();
            return function (t) {
              e.current ? ((e.current.value = "" + e.current.value + t), n(Ju(e.current.value))) : n(Ju(t));
            };
          })(),
          n = Ou(),
          t = Go(),
          f = xu();
        return function (a) {
          var r = a.key;
          (function (e) {
            var n = e.metaKey,
              t = e.ctrlKey,
              f = e.altKey;
            return n || t || f;
          })(a) ||
            t ||
            (r.match(/(^[a-zA-Z0-9]$){1}/) && (a.preventDefault(), f(), n(), e(r)));
        };
      }
      function Xu(e, n, t) {
        if (n && t !== Qi.NATIVE) {
          var f = po(n);
          qu.has(f) ||
            (mo(n).forEach(function (n) {
              !(function (e) {
                new Image().src = e;
              })(e(n, t));
            }),
            qu.add(f));
        }
      }
      !(function (e) {
        (e.ArrowDown = "ArrowDown"),
          (e.ArrowUp = "ArrowUp"),
          (e.ArrowLeft = "ArrowLeft"),
          (e.ArrowRight = "ArrowRight"),
          (e.Escape = "Escape"),
          (e.Enter = "Enter"),
          (e.Space = " ");
      })(hu || (hu = {}));
      var qu = new Set();
      var $u = ["width", "height"],
        es = 40;
      function ns(e) {
        var n = e.children;
        return (0, f.createElement)(Xo, null, (0, f.createElement)(ts, null, n));
      }
      function ts(e) {
        var n,
          t = e.children,
          a = nu()[0],
          r = Ao().theme,
          i = uu(),
          o = bu(),
          u = Ao().className,
          s = (function () {
            var e = Ao(),
              n = e.height,
              t = e.width,
              f = e.style;
            return ji({ height: Fo(n), width: Fo(t) }, f);
          })();
        Hu(),
          (function () {
            var e = Mu(),
              n = Bo(),
              t = Ho();
            (0, f.useEffect)(
              function () {
                if (n !== Qi.NATIVE) {
                  var f = e.current;
                  return (
                    null == f || f.addEventListener("focusin", a),
                    function () {
                      null == f || f.removeEventListener("focusin", a);
                    }
                  );
                }
                function a(e) {
                  var f = ps(e.target);
                  if (f) {
                    var a = gs(f)[0];
                    a && wo(a) && Xu(t, a, n);
                  }
                }
              },
              [e, n, t]
            );
          })();
        var l = s || {},
          c = l.width,
          d = l.height,
          p = Ii(l, $u);
        return (0, f.createElement)(
          "aside",
          {
            className: yi(
              as.main,
              as.baseVariables,
              r === Yi.DARK && as.darkTheme,
              r === Yi.AUTO && as.autoThemeDark,
              ((n = {}), (n[hi.searchActive] = i), n),
              a && as.reactionsMenu,
              u
            ),
            ref: o,
            style: ji({}, p, !a && { height: d, width: c }),
          },
          t
        );
      }
      var fs = {
          "--epr-emoji-variation-picker-bg-color": "var(--epr-dark-emoji-variation-picker-bg-color)",
          "--epr-hover-bg-color-reduced-opacity": "var(--epr-dark-hover-bg-color-reduced-opacity)",
          "--epr-highlight-color": "var(--epr-dark-highlight-color)",
          "--epr-text-color": "var(--epr-dark-text-color)",
          "--epr-hover-bg-color": "var(--epr-dark-hover-bg-color)",
          "--epr-focus-bg-color": "var(--epr-dark-focus-bg-color)",
          "--epr-search-input-bg-color": "var(--epr-dark-search-input-bg-color)",
          "--epr-category-label-bg-color": "var(--epr-dark-category-label-bg-color)",
          "--epr-picker-border-color": "var(--epr-dark-picker-border-color)",
          "--epr-bg-color": "var(--epr-dark-bg-color)",
          "--epr-reactions-bg-color": "var(--epr-dark-reactions-bg-color)",
          "--epr-search-input-bg-color-active": "var(--epr-dark-search-input-bg-color-active)",
          "--epr-emoji-variation-indicator-color": "var(--epr-dark-emoji-variation-indicator-color)",
          "--epr-category-icon-active-color": "var(--epr-dark-category-icon-active-color)",
          "--epr-skin-tone-picker-menu-color": "var(--epr-dark-skin-tone-picker-menu-color)",
        },
        as = Ei.create({
          main: {
            ".": ["epr-main", hi.emojiPicker],
            position: "relative",
            display: "flex",
            flexDirection: "column",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "var(--epr-picker-border-radius)",
            borderColor: "var(--epr-picker-border-color)",
            backgroundColor: "var(--epr-bg-color)",
            overflow: "hidden",
            transition: "all 0.3s ease-in-out, background-color 0.1s ease-in-out",
            "*": { boxSizing: "border-box", fontFamily: "sans-serif" },
          },
          baseVariables: {
            "--": {
              "--epr-highlight-color": "#007aeb",
              "--epr-hover-bg-color": "#f1f8ff",
              "--epr-hover-bg-color-reduced-opacity": "#f1f8ff80",
              "--epr-focus-bg-color": "#e0f0ff",
              "--epr-text-color": "#858585",
              "--epr-search-input-bg-color": "#f6f6f6",
              "--epr-picker-border-color": "#e7e7e7",
              "--epr-bg-color": "#fff",
              "--epr-reactions-bg-color": "#ffffff90",
              "--epr-category-icon-active-color": "#6aa8de",
              "--epr-skin-tone-picker-menu-color": "#ffffff95",
              "--epr-horizontal-padding": "10px",
              "--epr-picker-border-radius": "8px",
              "--epr-search-border-color": "var(--epr-highlight-color)",
              "--epr-header-padding": "15px var(--epr-horizontal-padding)",
              "--epr-active-skin-tone-indicator-border-color": "var(--epr-highlight-color)",
              "--epr-active-skin-hover-color": "var(--epr-hover-bg-color)",
              "--epr-search-input-bg-color-active": "var(--epr-search-input-bg-color)",
              "--epr-search-input-padding": "0 30px",
              "--epr-search-input-border-radius": "8px",
              "--epr-search-input-height": "40px",
              "--epr-search-input-text-color": "var(--epr-text-color)",
              "--epr-search-input-placeholder-color": "var(--epr-text-color)",
              "--epr-search-bar-inner-padding": "var(--epr-horizontal-padding)",
              "--epr-category-navigation-button-size": "30px",
              "--epr-emoji-variation-picker-height": "45px",
              "--epr-emoji-variation-picker-bg-color": "var(--epr-bg-color)",
              "--epr-preview-height": "70px",
              "--epr-preview-text-size": "14px",
              "--epr-preview-text-padding": "0 var(--epr-horizontal-padding)",
              "--epr-preview-border-color": "var(--epr-picker-border-color)",
              "--epr-preview-text-color": "var(--epr-text-color)",
              "--epr-category-padding": "0 var(--epr-horizontal-padding)",
              "--epr-category-label-bg-color": "#ffffffe6",
              "--epr-category-label-text-color": "var(--epr-text-color)",
              "--epr-category-label-padding": "0 var(--epr-horizontal-padding)",
              "--epr-category-label-height": es + "px",
              "--epr-emoji-size": "30px",
              "--epr-emoji-padding": "5px",
              "--epr-emoji-fullsize": "calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)",
              "--epr-emoji-hover-color": "var(--epr-hover-bg-color)",
              "--epr-emoji-variation-indicator-color": "var(--epr-picker-border-color)",
              "--epr-emoji-variation-indicator-color-hover": "var(--epr-text-color)",
              "--epr-header-overlay-z-index": "3",
              "--epr-emoji-variations-indictator-z-index": "1",
              "--epr-category-label-z-index": "2",
              "--epr-skin-variation-picker-z-index": "5",
              "--epr-preview-z-index": "6",
              "--epr-dark": "#000",
              "--epr-dark-emoji-variation-picker-bg-color": "var(--epr-dark)",
              "--epr-dark-highlight-color": "#c0c0c0",
              "--epr-dark-text-color": "var(--epr-highlight-color)",
              "--epr-dark-hover-bg-color": "#363636f6",
              "--epr-dark-hover-bg-color-reduced-opacity": "#36363680",
              "--epr-dark-focus-bg-color": "#474747",
              "--epr-dark-search-input-bg-color": "#333333",
              "--epr-dark-category-label-bg-color": "#222222e6",
              "--epr-dark-picker-border-color": "#151617",
              "--epr-dark-bg-color": "#222222",
              "--epr-dark-reactions-bg-color": "#22222290",
              "--epr-dark-search-input-bg-color-active": "var(--epr-dark)",
              "--epr-dark-emoji-variation-indicator-color": "#444",
              "--epr-dark-category-icon-active-color": "#3271b7",
              "--epr-dark-skin-tone-picker-menu-color": "#22222295",
            },
          },
          autoThemeDark: { ".": hi.autoTheme, "@media (prefers-color-scheme: dark)": { "--": fs } },
          darkTheme: { ".": hi.darkTheme, "--": fs },
          reactionsMenu: {
            ".": "epr-reactions",
            height: "50px",
            display: "inline-flex",
            backgroundColor: "var(--epr-reactions-bg-color)",
            backdropFilter: "blur(8px)",
            "--": { "--epr-picker-border-radius": "50px" },
          },
        });
      function rs(e, n) {
        if (!e || !n) return 0;
        var t = e.getBoundingClientRect().width,
          f = n.getBoundingClientRect().width;
        return Math.floor(t / f);
      }
      function is(e, n) {
        if (!e || !n) return 0;
        var t = n.getBoundingClientRect().width,
          f = n.getBoundingClientRect().left,
          a = e.getBoundingClientRect().left;
        return Math.floor((f - a) / t);
      }
      function os(e, n) {
        if (!e || !n) return 0;
        var t = n.getBoundingClientRect().height,
          f = n.getBoundingClientRect().top,
          a = e.getBoundingClientRect().top;
        return Math.round((f - a) / t);
      }
      function us(e, n, t) {
        if (-1 === n) {
          var f = Math.floor((e.length - 1) / t) * t,
            a = e.length - 1;
          return e.slice(f, a + 1);
        }
        return e.slice(n * t, (n + 1) * t);
      }
      function ss(e, n, t, f) {
        var a = us(e, n, t);
        return a[f] || a[a.length - 1] || null;
      }
      function ls(e, n, t) {
        if ((void 0 === t && (t = 0), !e || !n.length)) return null;
        var f = e.getBoundingClientRect().top,
          a = e.getBoundingClientRect().bottom,
          r =
            f +
            (function (e) {
              for (var n = Array.from(e.querySelectorAll(Ti(hi.label))), t = 0, f = n; t < f.length; t++) {
                var a = f[t].getBoundingClientRect().height;
                if (a > 0) return a;
              }
              return es;
            })(e);
        return (
          n.find(function (e) {
            var n = e.getBoundingClientRect().top,
              i = e.getBoundingClientRect().bottom,
              o = e.clientHeight * t,
              u = n + o,
              s = i - o;
            return !(u < r) && ((u >= f && u <= a) || (s >= f && s <= a));
          }) || null
        );
      }
      var cs = "button" + Ti(hi.emoji),
        ds = [cs, Ti(hi.visible), ":not(" + Ti(hi.hidden) + ")"].join("");
      function ps(e) {
        var n;
        return null != (n = null == e ? void 0 : e.closest(cs)) ? n : null;
      }
      function gs(e) {
        var n = js(e),
          t = Cs(e);
        if (!n) return [];
        var f = bo(null != t ? t : n);
        return f ? [f, t] : [];
      }
      function hs(e) {
        var n;
        return null != (n = null == e ? void 0 : e.clientHeight) ? n : 0;
      }
      function ms(e) {
        if (!e) return 0;
        var n = ps(e),
          t = Ps(n),
          f = ws(t);
        return Ms(n) + Ms(t) + f;
      }
      function ws(e) {
        var n, t;
        if (!e) return 0;
        var f = e.querySelector(Ti(hi.categoryContent));
        return (
          (null != (n = null == e ? void 0 : e.clientHeight) ? n : 0) -
          (null != (t = null == f ? void 0 : f.clientHeight) ? t : 0)
        );
      }
      function bs(e) {
        return e ? (e.matches(Ti(hi.scrollBody)) ? e : e.querySelector(Ti(hi.scrollBody))) : null;
      }
      function ys(e) {
        var n, t;
        return e ? ms(e) - (null != (n = null == (t = Ls(e)) ? void 0 : t.scrollTop) ? n : 0) : 0;
      }
      function Ls(e) {
        var n;
        return e && null != (n = e.closest(Ti(hi.scrollBody))) ? n : null;
      }
      function Ms(e) {
        var n;
        return null != (n = null == e ? void 0 : e.offsetTop) ? n : 0;
      }
      function vs(e) {
        var n;
        return null != (n = null == e ? void 0 : e.offsetLeft) ? n : 0;
      }
      function Cs(e) {
        var n;
        return null !=
          (n = (function (e, n) {
            var t;
            return null !=
              (t = (function (e) {
                var n;
                return null != (n = null == e ? void 0 : e.dataset) ? n : {};
              })(e)[n])
              ? t
              : null;
          })(ps(e), "unified"))
          ? n
          : null;
      }
      function js(e) {
        var n = Cs(e);
        return n ? co(n) : null;
      }
      function ks(e) {
        return e ? { unified: Cs(e), originalUnified: js(e) } : { unified: null, originalUnified: null };
      }
      function Is(e) {
        return e.classList.contains(hi.visible);
      }
      function Ss(e) {
        return !e || e.classList.contains(hi.hidden);
      }
      function Ns(e) {
        return e ? Array.from(e.querySelectorAll(ds)) : [];
      }
      function Ts(e) {
        if (!e) return null;
        var n = Ns(e).slice(-1)[0];
        return n ? (Is(n) ? n : Ds(n)) : null;
      }
      function Es(e) {
        var n = e.nextElementSibling;
        return n ? (Is(n) ? n : Es(n)) : xs(As(e));
      }
      function Ds(e) {
        var n = e.previousElementSibling;
        return n ? (Is(n) ? n : Ds(n)) : Ts(zs(e));
      }
      function xs(e) {
        return e ? ls(e, Ns(e), 0.1) : null;
      }
      function zs(e) {
        var n = Ps(e);
        if (!n) return null;
        var t = n.previousElementSibling;
        return t ? (Ss(t) ? zs(t) : t) : null;
      }
      function As(e) {
        var n = Ps(e);
        if (!n) return null;
        var t = n.nextElementSibling;
        return t ? (Ss(t) ? As(t) : t) : null;
      }
      function Ps(e) {
        return e ? e.closest(Ti(hi.category)) : null;
      }
      function Os(e) {
        return e ? e.closest(Ti(hi.categoryContent)) : null;
      }
      function Rs(e) {
        return e
          .split("-")
          .map(function (e) {
            return String.fromCodePoint(parseInt(e, 16));
          })
          .join("");
      }
      var Qs = "epr_suggested";
      function Ys(e) {
        try {
          var n, t, f;
          if (null == (n = window) || !n.localStorage) return [];
          var a = JSON.parse(null != (t = null == (f = window) ? void 0 : f.localStorage.getItem(Qs)) ? t : "[]");
          return e === Ri.FREQUENT
            ? a.sort(function (e, n) {
                return n.count - e.count;
              })
            : a;
        } catch (r) {
          return [];
        }
      }
      function Us(e) {
        return void 0 !== e.imgUrl;
      }
      function Bs(e, n) {
        var t = (0, f.useRef)(),
          a = _u(),
          r = (0, f.useContext)(qo).disallowClickRef,
          i = ru()[1],
          o = xu(),
          u = fu()[0],
          s = (function (e) {
            var n,
              t = Ro().current;
            return (
              (null != (n = e === Po.REACTIONS ? t.onReactionClick : t.onEmojiClick) ? n : t.onEmojiClick) ||
              function () {}
            );
          })(n),
          l = ou()[1],
          c = Ho(),
          d = Bo(),
          p = (0, f.useCallback)(
            function (e) {
              if (!r.current) {
                o();
                var n = Js(e),
                  t = n[0],
                  f = n[1];
                if (t && f) {
                  var a =
                    (function (e) {
                      var n = e.split("-")[1];
                      return ao.includes(n) ? n : null;
                    })(f) || u;
                  l(),
                    (function (e, n) {
                      var t,
                        f = Ys(),
                        a = po(e, n),
                        r = po(e),
                        i = f.find(function (e) {
                          return e.unified === a;
                        });
                      (t = i
                        ? [i].concat(
                            f.filter(function (e) {
                              return e !== i;
                            })
                          )
                        : [(i = { unified: a, original: r, count: 0 })].concat(f)),
                        i.count++,
                        (t.length = Math.min(t.length, 14));
                      try {
                        var o;
                        null == (o = window) || o.localStorage.setItem(Qs, JSON.stringify(t));
                      } catch (u) {}
                    })(t, a),
                    s(
                      (function (e, n, t, f) {
                        var a = so(e);
                        if (Us(e)) {
                          var r = po(e);
                          return {
                            activeSkinTone: n,
                            emoji: r,
                            getImageUrl: function () {
                              return e.imgUrl;
                            },
                            imageUrl: e.imgUrl,
                            isCustom: !0,
                            names: a,
                            unified: r,
                            unifiedWithoutSkinTone: r,
                          };
                        }
                        var i = po(e, n);
                        return {
                          activeSkinTone: n,
                          emoji: Rs(i),
                          getImageUrl: function (e) {
                            return void 0 === e && (e = null != t ? t : Qi.APPLE), f(i, e);
                          },
                          imageUrl: f(i, null != t ? t : Qi.APPLE),
                          isCustom: !1,
                          names: a,
                          unified: i,
                          unifiedWithoutSkinTone: po(e),
                        };
                      })(t, a, d, c),
                      e
                    );
                }
              }
            },
            [u, o, r, s, l, c, d]
          ),
          g = (0, f.useCallback)(
            function (e) {
              var n;
              t.current && clearTimeout(t.current);
              var f = Js(e)[0];
              f &&
                wo(f) &&
                (t.current =
                  null == (n = window)
                    ? void 0
                    : n.setTimeout(function () {
                        (r.current = !0), (t.current = void 0), o(), a(e.target), i(f);
                      }, 500));
            },
            [r, o, a, i]
          ),
          h = (0, f.useCallback)(
            function () {
              t.current
                ? (clearTimeout(t.current), (t.current = void 0))
                : r.current &&
                  requestAnimationFrame(function () {
                    r.current = !1;
                  });
            },
            [r]
          );
        (0, f.useEffect)(
          function () {
            if (e.current) {
              var n = e.current;
              return (
                n.addEventListener("click", p, { passive: !0 }),
                n.addEventListener("mousedown", g, { passive: !0 }),
                n.addEventListener("mouseup", h, { passive: !0 }),
                function () {
                  null == n || n.removeEventListener("click", p),
                    null == n || n.removeEventListener("mousedown", g),
                    null == n || n.removeEventListener("mouseup", h);
                }
              );
            }
          },
          [e, p, g, h]
        );
      }
      function Js(e) {
        var n = null == e ? void 0 : e.target;
        return (function (e) {
          var n;
          return Boolean(
            (null == e ? void 0 : e.matches(cs)) ||
              (null == e || null == (n = e.parentElement) ? void 0 : n.matches(cs))
          );
        })(n)
          ? gs(n)
          : [];
      }
      function _s(e) {
        return (0, f.createElement)(
          "button",
          Object.assign({ type: "button" }, e, { className: yi(Gs.button, e.className) }),
          e.children
        );
      }
      var Gs = Ei.create({
        button: { ".": "epr-btn", cursor: "pointer", border: "0", background: "none", outline: "none" },
      });
      function Zs(e) {
        var n,
          t = e.emojiNames,
          a = e.unified,
          r = e.hidden,
          i = e.hiddenOnSearch,
          o = e.showVariations,
          u = void 0 === o || o,
          s = e.hasVariations,
          l = e.children,
          c = e.className,
          d = e.noBackground,
          p = void 0 !== d && d;
        return (0, f.createElement)(
          _s,
          {
            className: yi(
              Fs.emoji,
              r && xi.hidden,
              i && Ai.hiddenOnSearch,
              ((n = {}), (n[hi.visible] = !r && !i), n),
              !(!s || !u) && Fs.hasVariations,
              p && Fs.noBackground,
              c
            ),
            "data-unified": a,
            "aria-label": Hs(t),
            "data-full-name": t,
          },
          l
        );
      }
      function Hs(e) {
        var n;
        return e[0].match("flag-") && null != (n = e[1]) ? n : e[0];
      }
      var Fs = Ei.create({
          emoji: {
            ".": hi.emoji,
            position: "relative",
            width: "var(--epr-emoji-fullsize)",
            height: "var(--epr-emoji-fullsize)",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "var(--epr-emoji-fullsize)",
            maxHeight: "var(--epr-emoji-fullsize)",
            borderRadius: "8px",
            overflow: "hidden",
            transition: "background-color 0.2s",
            ":hover": { backgroundColor: "var(--epr-emoji-hover-color)" },
            ":focus": { backgroundColor: "var(--epr-focus-bg-color)" },
          },
          noBackground: {
            background: "none",
            ":hover": { backgroundColor: "transparent", background: "none" },
            ":focus": { backgroundColor: "transparent", background: "none" },
          },
          hasVariations: {
            ".": hi.emojiHasVariations,
            ":after": {
              content: "",
              display: "block",
              width: "0",
              height: "0",
              right: "0px",
              bottom: "1px",
              position: "absolute",
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              transform: "rotate(135deg)",
              borderBottom: "4px solid var(--epr-emoji-variation-indicator-color)",
              zIndex: "var(--epr-emoji-variations-indictator-z-index)",
            },
            ":hover:after": { borderBottom: "4px solid var(--epr-emoji-variation-indicator-color-hover)" },
          },
        }),
        Ws = Ei.create({
          external: { ".": hi.external, fontSize: "0" },
          common: { alignSelf: "center", justifySelf: "center", display: "block" },
        });
      function Vs(e) {
        var n = e.emojiName,
          t = e.style,
          a = e.lazyLoad,
          r = void 0 !== a && a,
          i = e.imgUrl,
          o = e.onError,
          u = e.className;
        return (0, f.createElement)("img", {
          src: i,
          alt: n,
          className: yi(Ks.emojiImag, Ws.external, Ws.common, u),
          loading: r ? "lazy" : "eager",
          onError: o,
          style: t,
        });
      }
      var Ks = Ei.create({
        emojiImag: {
          ".": "epr-emoji-img",
          maxWidth: "var(--epr-emoji-fullsize)",
          maxHeight: "var(--epr-emoji-fullsize)",
          minWidth: "var(--epr-emoji-fullsize)",
          minHeight: "var(--epr-emoji-fullsize)",
          padding: "var(--epr-emoji-padding)",
        },
      });
      function Xs(e) {
        var n = e.unified,
          t = e.style,
          a = e.className;
        return (0, f.createElement)(
          "span",
          { className: yi(qs.nativeEmoji, Ws.common, Ws.external, a), "data-unified": n, style: t },
          Rs(n)
        );
      }
      var qs = Ei.create({
        nativeEmoji: {
          ".": "epr-emoji-native",
          fontFamily:
            '"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',
          position: "relative",
          lineHeight: "100%",
          fontSize: "var(--epr-emoji-size)",
          textAlign: "center",
          alignSelf: "center",
          justifySelf: "center",
          letterSpacing: "0",
          padding: "var(--epr-emoji-padding)",
        },
      });
      function $s(e) {
        var n = e.emoji,
          t = e.unified,
          a = e.emojiStyle,
          r = e.size,
          i = e.lazyLoad,
          o = e.getEmojiUrl,
          u = void 0 === o ? ho : o,
          s = e.className,
          l = au()[1],
          c = {};
        r && (c.width = c.height = c.fontSize = r + "px");
        var d = n || bo(t);
        return d
          ? Us(d)
            ? (0, f.createElement)(Vs, {
                style: c,
                emojiName: t,
                emojiStyle: Qi.NATIVE,
                lazyLoad: i,
                imgUrl: d.imgUrl,
                onError: p,
                className: s,
              })
            : (0, f.createElement)(
                f.Fragment,
                null,
                a === Qi.NATIVE
                  ? (0, f.createElement)(Xs, { unified: t, style: c, className: s })
                  : (0, f.createElement)(Vs, {
                      style: c,
                      emojiName: lo(d),
                      emojiStyle: a,
                      lazyLoad: i,
                      imgUrl: u(t, a),
                      onError: p,
                      className: s,
                    })
              )
          : null;
        function p() {
          l(function (e) {
            return new Set(e).add(t);
          });
        }
      }
      function el(e) {
        var n = e.emoji,
          t = e.unified,
          a = e.hidden,
          r = e.hiddenOnSearch,
          i = e.emojiStyle,
          o = e.showVariations,
          u = void 0 === o || o,
          s = e.size,
          l = e.lazyLoad,
          c = e.getEmojiUrl,
          d = e.className,
          p = e.noBackground,
          g = void 0 !== p && p,
          h = wo(n);
        return (0, f.createElement)(
          Zs,
          {
            hasVariations: h,
            showVariations: u,
            hidden: a,
            hiddenOnSearch: r,
            emojiNames: so(n),
            unified: t,
            noBackground: g,
          },
          (0, f.createElement)($s, {
            unified: t,
            emoji: n,
            size: s,
            emojiStyle: i,
            lazyLoad: l,
            getEmojiUrl: c,
            className: d,
          })
        );
      }
      function nl() {
        var e = nu()[1];
        return (0, f.createElement)(_s, {
          "aria-label": "Show all Emojis",
          title: "Show all Emojis",
          tabIndex: 0,
          className: yi(tl.plusSign),
          onClick: function () {
            return e(!1);
          },
        });
      }
      var tl = Ei.create(
        ji(
          {
            plusSign: {
              fontSize: "20px",
              padding: "17px",
              color: "var(--epr-text-color)",
              borderRadius: "50%",
              textAlign: "center",
              lineHeight: "100%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "background-color 0.2s ease-in-out",
              ":after": {
                content: "",
                minWidth: "20px",
                minHeight: "20px",
                backgroundImage:
                  "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=)",
                backgroundColor: "transparent",
                backgroundRepeat: "no-repeat",
                backgroundSize: "20px",
                backgroundPositionY: "0",
              },
              ":hover": {
                color: "var(--epr-highlight-color)",
                backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
                ":after": { backgroundPositionY: "-20px" },
              },
              ":focus": {
                color: "var(--epr-highlight-color)",
                backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
                ":after": { backgroundPositionY: "-40px" },
              },
            },
          },
          Pi("plusSign", {
            ":after": { backgroundPositionY: "-40px" },
            ":hover:after": { backgroundPositionY: "-60px" },
          })
        )
      );
      function fl() {
        var e = nu()[0],
          n = wu().ReactionsRef,
          t = Ao().reactions;
        Bs(n, Po.REACTIONS);
        var a = Bo(),
          r = Yo(),
          i = Ho();
        return e
          ? (0, f.createElement)(
              "ul",
              { className: yi(al.list, !e && xi.hidden), ref: n },
              t.map(function (e) {
                return (0,
                f.createElement)("li", { key: e }, (0, f.createElement)(el, { emoji: bo(e), emojiStyle: a, unified: e, showVariations: !1, className: yi(al.emojiButton), noBackground: !0, getEmojiUrl: i }));
              }),
              r ? (0, f.createElement)("li", null, (0, f.createElement)(nl, null)) : null
            )
          : null;
      }
      var al = Ei.create({
        list: {
          listStyle: "none",
          margin: "0",
          padding: "0 5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        },
        emojiButton: {
          ":hover": { transform: "scale(1.2)" },
          ":focus": { transform: "scale(1.2)" },
          ":active": { transform: "scale(1.1)" },
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)",
        },
      });
      function rl() {
        var e = au()[0],
          n = (function () {
            var e = $o().current,
              n = tu()[0];
            return function (t) {
              return (function (e, n, t) {
                var f;
                return !(!n || !t) && !(null != (f = n[t]) && f[e]);
              })(t, e, n);
            };
          })();
        return function (t) {
          var f = po(t),
            a = e.has(f),
            r = n(f);
          return { failedToLoad: a, filteredOut: r, hidden: a || r };
        };
      }
      function il(e) {
        var n = e.categoryConfig,
          t = e.children,
          a = e.hidden,
          r = e.hiddenOnSearch,
          i = Vi(n),
          o = Ki(n);
        return (0, f.createElement)(
          "li",
          { className: yi(ol.category, a && xi.hidden, r && Ai.hiddenOnSearch), "data-name": i, "aria-label": o },
          (0, f.createElement)("h2", { className: yi(ol.label) }, o),
          (0, f.createElement)("div", { className: yi(ol.categoryContent) }, t)
        );
      }
      var ol = Ei.create({
          category: { ".": hi.category, ":not(:has(.epr-visible))": { display: "none" } },
          categoryContent: {
            ".": hi.categoryContent,
            display: "grid",
            gridGap: "0",
            gridTemplateColumns: "repeat(auto-fill, var(--epr-emoji-fullsize))",
            justifyContent: "space-between",
            margin: "var(--epr-category-padding)",
            position: "relative",
          },
          label: {
            ".": hi.label,
            alignItems: "center",
            backdropFilter: "blur(3px)",
            backgroundColor: "var(--epr-category-label-bg-color)",
            color: "var(--epr-category-label-text-color)",
            display: "flex",
            fontSize: "16px",
            fontWeight: "bold",
            height: "var(--epr-category-label-height)",
            margin: "0",
            padding: "var(--epr-category-label-padding)",
            position: "sticky",
            textTransform: "capitalize",
            top: "0",
            width: "100%",
            zIndex: "var(--epr-category-label-z-index)",
          },
        }),
        ul = !1;
      function sl(e) {
        var n = e.categoryConfig,
          t = ou()[0],
          a = (function () {
            var e = (0, f.useState)(ul),
              n = e[0],
              t = e[1];
            return (
              (0, f.useEffect)(function () {
                t(!0), (ul = !0);
              }, []),
              n || ul
            );
          })(),
          r = Ao().suggestedEmojisMode,
          i = Ho(),
          o = (0, f.useMemo)(
            function () {
              var e;
              return null != (e = Ys(r)) ? e : [];
            },
            [t, r]
          ),
          u = Bo();
        return a
          ? (0, f.createElement)(
              il,
              { categoryConfig: n, hiddenOnSearch: !0, hidden: 0 === o.length },
              o.map(function (e) {
                var n = bo(e.original);
                return n
                  ? (0, f.createElement)(el, {
                      showVariations: !1,
                      unified: e.unified,
                      emojiStyle: u,
                      emoji: n,
                      key: e.unified,
                      getEmojiUrl: i,
                    })
                  : null;
              })
            )
          : null;
      }
      function ll() {
        var e = Jo(),
          n = (0, f.useRef)(0);
        return (0, f.createElement)(
          "ul",
          { className: yi(pl.emojiList) },
          e.map(function (e) {
            var t = Vi(e);
            return t === Bi.SUGGESTED
              ? (0, f.createElement)(sl, { key: t, categoryConfig: e })
              : (0, f.createElement)(
                  f.Suspense,
                  { key: t },
                  (0, f.createElement)(cl, { category: t, categoryConfig: e, renderdCategoriesCountRef: n })
                );
          })
        );
      }
      function cl(e) {
        var n = e.category,
          t = e.categoryConfig,
          a = e.renderdCategoriesCountRef,
          r = rl(),
          i = Ao().lazyLoadEmojis,
          o = Bo(),
          u = (0, f.useContext)(qo).isPastInitialLoad,
          s = fu()[0],
          l = (function () {
            var e = Ko(),
              n = Vo();
            return function (t) {
              var f = co(po(t));
              return Boolean(e[f] || n(f));
            };
          })(),
          c = Ho(),
          d = !Uo(),
          p = !u && a.current > 0 ? [] : go(n);
        p.length > 0 && a.current++;
        var g = 0,
          h = p.map(function (e) {
            var n = po(e, s),
              t = r(e),
              a = t.failedToLoad,
              u = t.filteredOut,
              p = t.hidden,
              h = l(e);
            return (
              (p || h) && g++,
              h
                ? null
                : (0, f.createElement)(el, {
                    showVariations: d,
                    key: n,
                    emoji: e,
                    unified: n,
                    hidden: a,
                    hiddenOnSearch: u,
                    emojiStyle: o,
                    lazyLoad: i,
                    getEmojiUrl: c,
                  })
            );
          });
        return (0, f.createElement)(il, { categoryConfig: t, hidden: g === h.length }, h);
      }
      var dl,
        pl = Ei.create({ emojiList: { ".": hi.emojiList, listStyle: "none", margin: "0", padding: "0" } });
      function gl() {
        var e,
          n,
          t = yu(),
          a = wu().VariationPickerRef,
          r = ru()[0],
          i = Bo(),
          o = (function (e) {
            var n = yu(),
              t = Mu(),
              f = dl.Up;
            return { getMenuDirection: a, getTop: r };
            function a() {
              return f;
            }
            function r() {
              f = dl.Up;
              var a = 0;
              if (!e.current) return 0;
              var r = hs(e.current);
              if (n.current) {
                var i,
                  o = t.current,
                  u = ps(n.current),
                  s = hs(u);
                (a = ms(u)),
                  (null != (i = null == o ? void 0 : o.scrollTop) ? i : 0) > a - r && ((f = dl.Down), (a += s + r));
              }
              return a - r;
            }
          })(a),
          u = o.getTop,
          s = o.getMenuDirection,
          l = Lu(),
          c = (function (e) {
            var n = yu();
            return function () {
              var t = {};
              if (!e.current) return t;
              if (n.current) {
                var f = ps(n.current),
                  a = (function (e) {
                    var n = ps(e),
                      t = Ps(n);
                    return vs(n) + vs(t);
                  })(f);
                if (!f) return t;
                t.left = a + (null == f ? void 0 : f.clientWidth) / 2;
              }
              return t;
            };
          })(a),
          d = Ho(),
          p = ps(t.current),
          g = Boolean(r && p && wo(r) && p.classList.contains(hi.emojiHasVariations));
        return (
          (0, f.useEffect)(
            function () {
              g && Su(a.current);
            },
            [a, g, t]
          ),
          !g && t.current ? l(null) : ((e = u()), (n = c())),
          (0, f.createElement)(
            "div",
            {
              ref: a,
              className: yi(hl.variationPicker, s() === dl.Down && hl.pointingUp, g && hl.visible),
              style: { top: e },
            },
            g && r
              ? [po(r)]
                  .concat(mo(r))
                  .slice(0, 6)
                  .map(function (e) {
                    return (0,
                    f.createElement)(el, { key: e, emoji: r, unified: e, emojiStyle: i, showVariations: !1, getEmojiUrl: d });
                  })
              : null,
            (0, f.createElement)("div", { className: yi(hl.pointer), style: n })
          )
        );
      }
      !(function (e) {
        (e[(e.Up = 0)] = "Up"), (e[(e.Down = 1)] = "Down");
      })(dl || (dl = {}));
      var hl = Ei.create(
        ji(
          {
            variationPicker: {
              ".": hi.variationPicker,
              position: "absolute",
              right: "15px",
              left: "15px",
              padding: "5px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              opacity: "0",
              visibility: "hidden",
              pointerEvents: "none",
              top: "-100%",
              border: "1px solid var(--epr-picker-border-color)",
              height: "var(--epr-emoji-variation-picker-height)",
              zIndex: "var(--epr-skin-variation-picker-z-index)",
              background: "var(--epr-emoji-variation-picker-bg-color)",
              transform: "scale(0.9)",
              transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
            },
            visible: { opacity: "1", visibility: "visible", pointerEvents: "all", transform: "scale(1)" },
            pointingUp: { ".": "pointing-up", transformOrigin: "center 0%", transform: "scale(0.9)" },
            ".pointing-up": { pointer: { top: "0", transform: "rotate(180deg) translateY(100%) translateX(18px)" } },
            pointer: {
              ".": "epr-emoji-pointer",
              content: "",
              position: "absolute",
              width: "25px",
              height: "15px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 0",
              backgroundSize: "50px 15px",
              top: "100%",
              transform: "translateX(-18px)",
              backgroundImage:
                "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=)",
            },
          },
          Pi("pointer", { backgroundPosition: "-25px 0" })
        )
      );
      function ml() {
        var e = Mu();
        return (
          (function (e) {
            var n = xu();
            (0, f.useEffect)(
              function () {
                var t = e.current;
                if (t)
                  return (
                    t.addEventListener("scroll", f, { passive: !0 }),
                    function () {
                      null == t || t.removeEventListener("scroll", f);
                    }
                  );
                function f() {
                  n();
                }
              },
              [e, n]
            );
          })(e),
          Bs(e, Po.PICKER),
          (function () {
            var e = Mu(),
              n = Au(),
              t = Pu();
            (0, f.useEffect)(
              function () {
                var f = e.current;
                function a() {
                  t() && n();
                }
                return (
                  null == f || f.addEventListener("mousemove", a, { passive: !0 }),
                  function () {
                    null == f || f.removeEventListener("mousemove", a);
                  }
                );
              },
              [e, n, t]
            );
          })(),
          (0, f.createElement)(
            "div",
            { className: yi(yl.body, Ai.hiddenOnReactions), ref: e },
            (0, f.createElement)(gl, null),
            (0, f.createElement)(ll, null)
          )
        );
      }
      var wl,
        bl,
        yl = Ei.create({
          body: { ".": hi.scrollBody, flex: "1", overflowY: "scroll", overflowX: "hidden", position: "relative" },
        });
      function Ll(e, n) {
        var t = Mu(),
          a = Pu(),
          r = Au();
        (0, f.useEffect)(
          function () {
            if (e) {
              var f = t.current;
              return (
                null == f || f.addEventListener("keydown", o, { passive: !0 }),
                null == f || f.addEventListener("mouseover", u, !0),
                null == f || f.addEventListener("focus", r, !0),
                null == f || f.addEventListener("mouseout", i, { passive: !0 }),
                null == f || f.addEventListener("blur", i, !0),
                function () {
                  null == f || f.removeEventListener("mouseover", u),
                    null == f || f.removeEventListener("mouseout", i),
                    null == f || f.removeEventListener("focus", r, !0),
                    null == f || f.removeEventListener("blur", i, !0),
                    null == f || f.removeEventListener("keydown", o);
                }
              );
            }
            function r(e) {
              var t = ps(e.target);
              if (!t) return i();
              var f = ks(t),
                a = f.unified,
                r = f.originalUnified;
              if (!a || !r) return i();
              n({ unified: a, originalUnified: r });
            }
            function i(e) {
              if (e && !ps(e.relatedTarget)) return n(null);
              n(null);
            }
            function o(e) {
              "Escape" === e.key && n(null);
            }
            function u(e) {
              if (!a()) {
                var t = ps(e.target);
                if (t) {
                  var r = (function (e, n) {
                    if (!e || !n) return 0;
                    var t = e.getBoundingClientRect(),
                      f = n.getBoundingClientRect();
                    return f.height - (t.y - f.y);
                  })(t, f);
                  if (r < t.getBoundingClientRect().height)
                    return (function (e, n) {
                      var t,
                        f = ks(e),
                        a = f.unified,
                        r = f.originalUnified;
                      if (!a || !r) return;
                      null == (t = document.activeElement) || null == t.blur || t.blur(),
                        n({ unified: a, originalUnified: r });
                    })(t, n);
                  su(t);
                }
              }
            }
          },
          [t, e, n, a, r]
        );
      }
      function Ml(e) {
        var n = e.children,
          t = e.className,
          a = e.style,
          r = void 0 === a ? {} : a,
          i = e.direction,
          o = void 0 === i ? bl.ROW : i;
        return (0, f.createElement)("div", { style: ji({}, r), className: yi(vl.flex, t, vl[o]) }, n);
      }
      !(function (e) {
        (e.ROW = "FlexRow"), (e.COLUMN = "FlexColumn");
      })(bl || (bl = {}));
      var vl = Ei.create(
        (((wl = { flex: { display: "flex" } })[bl.ROW] = { flexDirection: "row" }),
        (wl[bl.COLUMN] = { flexDirection: "column" }),
        wl)
      );
      function Cl(e) {
        var n = e.className,
          t = e.style,
          a = void 0 === t ? {} : t;
        return (0, f.createElement)("div", { style: ji({ flex: 1 }, a), className: yi(n) });
      }
      function jl(e) {
        var n = e.children,
          t = e.className,
          a = e.style;
        return (0, f.createElement)("div", { style: ji({}, a, { position: "absolute" }), className: t }, n);
      }
      function kl(e) {
        var n = e.children,
          t = e.className,
          a = e.style;
        return (0, f.createElement)("div", { style: ji({}, a, { position: "relative" }), className: t }, n);
      }
      function Il(e) {
        var n = e.isOpen,
          t = e.onClick,
          a = e.isActive,
          r = e.skinToneVariation,
          i = e.style;
        return (0, f.createElement)(_s, {
          style: i,
          onClick: t,
          className: yi("epr-tone-" + r, Nl.tone, !n && Nl.closedTone, a && Nl.active),
          tabIndex: n ? 0 : -1,
          "aria-pressed": a,
          "aria-label": "Skin tone " + ro[r],
        });
      }
      var Sl,
        Nl = Ei.create({
          closedTone: { opacity: "0", zIndex: "0" },
          active: { ".": "epr-active", zIndex: "1", opacity: "1" },
          tone: {
            ".": "epr-tone",
            ":hover": { boxShadow: "0 0 0 3px var(--epr-active-skin-hover-color)" },
            ":focus": { boxShadow: "0 0 0 3px var(--epr-focus-bg-color)" },
            "&.epr-tone-neutral": { backgroundColor: "#ffd225" },
            "&.epr-tone-1f3fb": { backgroundColor: "#ffdfbd" },
            "&.epr-tone-1f3fc": { backgroundColor: "#e9c197" },
            "&.epr-tone-1f3fd": { backgroundColor: "#c88e62" },
            "&.epr-tone-1f3fe": { backgroundColor: "#a86637" },
            "&.epr-tone-1f3ff": { backgroundColor: "#60463a" },
          },
        }),
        Tl = 28;
      function El() {
        return (0, f.createElement)(
          kl,
          { style: { height: Tl } },
          (0, f.createElement)(
            jl,
            { style: { bottom: 0, right: 0 } },
            (0, f.createElement)(Dl, { direction: Sl.VERTICAL })
          )
        );
      }
      function Dl(e) {
        var n = e.direction,
          t = void 0 === n ? Sl.HORIZONTAL : n,
          a = Cu(),
          r = Uo(),
          i = iu(),
          o = i[0],
          u = i[1],
          s = fu(),
          l = s[0],
          c = s[1],
          d = Ro().current.onSkinToneChange || function () {},
          p = xu(),
          g = Ou();
        if (r) return null;
        var h = Tl * ao.length + "px",
          m = o ? h : Tl + "px",
          w = t === Sl.VERTICAL;
        return (0, f.createElement)(
          kl,
          {
            className: yi(xl.skinTones, w && xl.vertical, o && xl.open, w && o && xl.verticalShadow),
            style: w ? { flexBasis: m, height: m } : { flexBasis: m },
          },
          (0, f.createElement)(
            "div",
            { className: yi(xl.select), ref: a },
            ao.map(function (e, n) {
              var t = e === l;
              return (0, f.createElement)(Il, {
                key: e,
                skinToneVariation: e,
                isOpen: o,
                style: {
                  transform: yi(
                    w ? "translateY(-" + n * (o ? Tl : 0) + "px)" : "translateX(-" + n * (o ? Tl : 0) + "px)",
                    o && t && "scale(1.3)"
                  ),
                },
                isActive: t,
                onClick: function () {
                  o ? (c(e), d(e), g()) : u(!0), p();
                },
              });
            })
          )
        );
      }
      !(function (e) {
        (e.VERTICAL = "epr-vertical"), (e.HORIZONTAL = "epr-horizontal");
      })(Sl || (Sl = {}));
      var xl = Ei.create({
        skinTones: {
          ".": "epr-skin-tones",
          "--": { "--epr-skin-tone-size": "15px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          transition: "all 0.3s ease-in-out",
          padding: "10px 0",
        },
        vertical: {
          padding: "9px",
          alignItems: "flex-end",
          flexDirection: "column",
          borderRadius: "6px",
          border: "1px solid var(--epr-bg-color)",
        },
        verticalShadow: { boxShadow: "0px 0 7px var(--epr-picker-border-color)" },
        open: {
          backdropFilter: "blur(5px)",
          background: "var(--epr-skin-tone-picker-menu-color)",
          ".epr-active:after": {
            content: "",
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: "-2px",
            borderRadius: "5px",
            border: "1px solid var(--epr-active-skin-tone-indicator-border-color)",
          },
        },
        select: {
          ".": "epr-skin-tone-select",
          position: "relative",
          width: "var(--epr-skin-tone-size)",
          height: "var(--epr-skin-tone-size)",
          "> button": {
            width: "var(--epr-skin-tone-size)",
            display: "block",
            cursor: "pointer",
            borderRadius: "4px",
            height: "var(--epr-skin-tone-size)",
            position: "absolute",
            right: "0",
            transition: "transform 0.3s ease-in-out, opacity 0.35s ease-in-out",
            zIndex: "0",
            boxShadow: "0 0 0 0px var(--epr-active-skin-hover-color)",
          },
        },
      });
      function zl() {
        var e = _o(),
          n = Zu();
        return e.showPreview
          ? (0, f.createElement)(
              Ml,
              { className: yi(Pl.preview, Ai.hiddenOnReactions) },
              (0, f.createElement)(Al, null),
              (0, f.createElement)(Cl, null),
              n ? (0, f.createElement)(El, null) : null
            )
          : null;
      }
      function Al() {
        var e,
          n = _o(),
          t = (0, f.useState)(null),
          a = t[0],
          r = t[1],
          i = Bo(),
          o = ru()[0],
          u = Ho();
        Ll(n.showPreview, r);
        var s = bo(null != (e = null == a ? void 0 : a.unified) ? e : null == a ? void 0 : a.originalUnified),
          l = null != s && null != a;
        return (0, f.createElement)(function () {
          var e = null != o ? o : bo(n.defaultEmoji);
          if (!e) return null;
          var t = o ? lo(o) : n.defaultCaption;
          return (0,
          f.createElement)(f.Fragment, null, (0, f.createElement)("div", null, l ? (0, f.createElement)($s, { unified: null == a ? void 0 : a.unified, emoji: s, emojiStyle: i, size: 45, getEmojiUrl: u, className: yi(Pl.emoji) }) : e ? (0, f.createElement)($s, { unified: po(e), emoji: e, emojiStyle: i, size: 45, getEmojiUrl: u, className: yi(Pl.emoji) }) : null), (0, f.createElement)("div", { className: yi(Pl.label) }, l ? lo(s) : t));
        }, null);
      }
      var Pl = Ei.create({
        preview: {
          alignItems: "center",
          borderTop: "1px solid var(--epr-preview-border-color)",
          height: "var(--epr-preview-height)",
          padding: "0 var(--epr-horizontal-padding)",
          position: "relative",
          zIndex: "var(--epr-preview-z-index)",
        },
        label: {
          color: "var(--epr-preview-text-color)",
          fontSize: "var(--epr-preview-text-size)",
          padding: "var(--epr-preview-text-padding)",
          textTransform: "capitalize",
        },
        emoji: { padding: "0" },
      });
      function Ol(e) {
        var n;
        return null != (n = null == e ? void 0 : e.getAttribute("data-name")) ? n : null;
      }
      function Rl() {
        var e = Ao().customEmojis;
        return !!e && 0 === e.length;
      }
      function Ql(e) {
        var n,
          t = e.isActiveCategory,
          a = e.category,
          r = e.allowNavigation,
          i = e.categoryConfig,
          o = e.onClick;
        return (0, f.createElement)(_s, {
          tabIndex: r ? 0 : -1,
          className: yi(Jl.catBtn, Ai.categoryBtn, "epr-icn-" + a, ((n = {}), (n[hi.active] = t), n)),
          onClick: o,
          "aria-label": Ki(i),
          "aria-selected": t,
          role: "tab",
          "aria-controls": "epr-category-nav-id",
        });
      }
      var Yl = { backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 3)" },
        Ul = { backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 2)" },
        Bl = { ":not(.epr-search-active)": { catBtn: { ":hover": Yl, "&.epr-active": Yl } } },
        Jl = Ei.create(
          ji(
            {
              catBtn: {
                ".": "epr-cat-btn",
                display: "inline-block",
                transition: "opacity 0.2s ease-in-out",
                position: "relative",
                height: "var(--epr-category-navigation-button-size)",
                width: "var(--epr-category-navigation-button-size)",
                backgroundSize: "calc(var(--epr-category-navigation-button-size) * 10)",
                outline: "none",
                backgroundPosition: "0 0",
                backgroundImage:
                  "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+)",
                ":focus:before": {
                  content: "",
                  position: "absolute",
                  top: "-2px",
                  left: "-2px",
                  right: "-2px",
                  bottom: "-2px",
                  border: "2px solid var(--epr-category-icon-active-color)",
                  borderRadius: "50%",
                },
                "&.epr-icn-suggested": { backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -8)" },
                "&.epr-icn-custom": { backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -9)" },
                "&.epr-icn-activities": {
                  backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -4)",
                },
                "&.epr-icn-animals_nature": {
                  backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -1)",
                },
                "&.epr-icn-flags": { backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -7)" },
                "&.epr-icn-food_drink": {
                  backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -2)",
                },
                "&.epr-icn-objects": { backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -5)" },
                "&.epr-icn-smileys_people": { backgroundPositionX: "0px" },
                "&.epr-icn-symbols": { backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -6)" },
                "&.epr-icn-travel_places": {
                  backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -3)",
                },
              },
            },
            Pi("catBtn", Ul),
            { ".epr-dark-theme": ji({}, Bl), ".epr-auto-theme": ji({}, Bl) }
          )
        );
      function _l() {
        var e = (0, f.useState)(null),
          n = e[0],
          t = e[1],
          a = (function () {
            var e = Mu(),
              n = bu();
            return function (t) {
              var f;
              if (e.current) {
                var a = null == (f = e.current) ? void 0 : f.querySelector('[data-name="' + t + '"]');
                if (a) {
                  var r = a.offsetTop || 0;
                  ku(n.current, r);
                }
              }
            };
          })();
        !(function (e) {
          var n = Mu();
          (0, f.useEffect)(
            function () {
              var t = new Map(),
                f = n.current,
                a = new IntersectionObserver(
                  function (n) {
                    if (f) {
                      for (var a, r = Ni(n); !(a = r()).done; ) {
                        var i = a.value,
                          o = Ol(i.target);
                        t.set(o, i.intersectionRatio);
                      }
                      var u = Array.from(t),
                        s = u[u.length - 1];
                      if (1 == s[1]) return e(s[0]);
                      for (var l = 0, c = u; l < c.length; l++) {
                        var d = c[l],
                          p = d[0];
                        if (d[1]) {
                          e(p);
                          break;
                        }
                      }
                    }
                  },
                  { threshold: [0, 1] }
                );
              null == f ||
                f.querySelectorAll(Ti(hi.category)).forEach(function (e) {
                  a.observe(e);
                });
            },
            [n, e]
          );
        })(t);
        var r = uu(),
          i = Jo(),
          o = ju(),
          u = Rl();
        return (0, f.createElement)(
          "div",
          {
            className: yi(Gl.nav),
            role: "tablist",
            "aria-label": "Category navigation",
            id: "epr-category-nav-id",
            ref: o,
          },
          i.map(function (e) {
            var i = Vi(e),
              o = i === n;
            if (
              (function (e) {
                return e.category === Bi.CUSTOM;
              })(e) &&
              u
            )
              return null;
            var s = !r && !o;
            return (0, f.createElement)(Ql, {
              key: i,
              category: i,
              isActiveCategory: o,
              allowNavigation: s,
              categoryConfig: e,
              onClick: function () {
                t(i), a(i);
              },
            });
          })
        );
      }
      var Gl = Ei.create({
          nav: {
            ".": "epr-category-nav",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "var(--epr-header-padding)",
          },
          ".epr-search-active": { nav: { opacity: "0.3", cursor: "default", pointerEvents: "none" } },
          ".epr-main:has(input:not(:placeholder-shown))": {
            nav: { opacity: "0.3", cursor: "default", pointerEvents: "none" },
          },
        }),
        Zl =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+";
      function Hl() {
        var e = Qu();
        return (0, f.createElement)(
          _s,
          {
            className: yi(Wl.btnClearSearch, Ai.visibleOnSearchOnly),
            onClick: e,
            "aria-label": "Clear",
            title: "Clear",
          },
          (0, f.createElement)("div", { className: yi(Wl.icnClearnSearch) })
        );
      }
      var Fl = { ":hover": { "> .epr-icn-clear-search": { backgroundPositionY: "-60px" } } },
        Wl = Ei.create(
          ji(
            {
              btnClearSearch: {
                ".": "epr-btn-clear-search",
                position: "absolute",
                right: "var(--epr-search-bar-inner-padding)",
                height: "30px",
                width: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "0",
                borderRadius: "50%",
                ":hover": { background: "var(--epr-hover-bg-color)" },
                ":focus": { background: "var(--epr-hover-bg-color)" },
              },
              icnClearnSearch: {
                ".": "epr-icn-clear-search",
                backgroundColor: "transparent",
                backgroundRepeat: "no-repeat",
                backgroundSize: "20px",
                height: "20px",
                width: "20px",
                backgroundImage: "url(" + Zl + ")",
                ":hover": { backgroundPositionY: "-20px" },
                ":focus": { backgroundPositionY: "-20px" },
              },
            },
            Pi("icnClearnSearch", { backgroundPositionY: "-40px" }),
            Pi("btnClearSearch", Fl)
          )
        ),
        Vl = Ti(hi.emojiPicker) + " " + Ti(hi.emojiList),
        Kl = ["button", Ti(hi.emoji)].join(""),
        Xl = Ti(hi.category);
      function ql(e) {
        var n = e.value;
        if (!n) return null;
        var t = (function (e) {
          return [Kl, '[data-full-name*="', Ju(e), '"]'].join("");
        })(n);
        return (0, f.createElement)(
          "style",
          null,
          "\n    " +
            Vl +
            " " +
            Kl +
            " {\n      display: none;\n    }\n\n\n    " +
            Vl +
            " " +
            t +
            " {\n      display: flex;\n    }\n\n    " +
            Vl +
            " " +
            Xl +
            ":not(:has(" +
            t +
            ")) {\n      display: none;\n    }\n  "
        );
      }
      function $l() {
        return (0, f.createElement)("div", { className: yi(ec.icnSearch) });
      }
      var ec = Ei.create(
        ji(
          {
            icnSearch: {
              ".": "epr-icn-search",
              content: "",
              position: "absolute",
              top: "50%",
              left: "var(--epr-search-bar-inner-padding)",
              transform: "translateY(-50%)",
              width: "20px",
              height: "20px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 0",
              backgroundSize: "20px",
              backgroundImage:
                "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+)",
            },
          },
          Pi("icnSearch", { backgroundPositionY: "-20px" })
        )
      );
      function nc() {
        var e = Go(),
          n = Gu();
        return e
          ? null
          : (0, f.createElement)(
              Ml,
              { className: yi(fc.overlay) },
              (0, f.createElement)(tc, null),
              n ? (0, f.createElement)(Dl, null) : null
            );
      }
      function tc() {
        var e = (0, f.useState)(0),
          n = e[0],
          t = e[1],
          a = xu(),
          r = vu(),
          i = (function () {
            var e,
              n = Ao();
            return null !=
              (e = [n.searchPlaceHolder, n.searchPlaceholder].find(function (e) {
                return e !== Co;
              }))
              ? e
              : Co;
          })(),
          o = Ao().autoFocusSearch,
          u = Yu(),
          s = u.statusSearchResults,
          l = u.searchTerm,
          c = u.onChange,
          d = null == r ? void 0 : r.current,
          p = null == d ? void 0 : d.value;
        return (0, f.createElement)(
          kl,
          { className: yi(fc.searchContainer) },
          (0, f.createElement)(ql, { value: p }),
          (0, f.createElement)("input", {
            autoFocus: o,
            "aria-label": "Type to search for an emoji",
            onFocus: a,
            className: yi(fc.search),
            type: "text",
            "aria-controls": "epr-search-id",
            placeholder: i,
            onChange: function (e) {
              t(n + 1),
                setTimeout(function () {
                  var n, t;
                  c(null != (n = null == e || null == (t = e.target) ? void 0 : t.value) ? n : p);
                });
            },
            ref: r,
          }),
          l
            ? (0, f.createElement)(
                "div",
                {
                  role: "status",
                  className: yi("epr-status-search-results", fc.visuallyHidden),
                  "aria-live": "polite",
                  id: "epr-search-id",
                  "aria-atomic": "true",
                },
                s
              )
            : null,
          (0, f.createElement)($l, null),
          (0, f.createElement)(Hl, null)
        );
      }
      var fc = Ei.create(
        ji(
          {
            overlay: { padding: "var(--epr-header-padding)", zIndex: "var(--epr-header-overlay-z-index)" },
            searchContainer: { ".": "epr-search-container", flex: "1", display: "block", minWidth: "0" },
            visuallyHidden: {
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: "1px",
              overflow: "hidden",
              position: "absolute",
              whiteSpace: "nowrap",
              width: "1px",
            },
            search: {
              outline: "none",
              transition: "all 0.2s ease-in-out",
              color: "var(--epr-search-input-text-color)",
              borderRadius: "var(--epr-search-input-border-radius)",
              padding: "var(--epr-search-input-padding)",
              height: "var(--epr-search-input-height)",
              backgroundColor: "var(--epr-search-input-bg-color)",
              border: "1px solid var(--epr-search-input-bg-color)",
              width: "100%",
              ":focus": {
                backgroundColor: "var(--epr-search-input-bg-color-active)",
                border: "1px solid var(--epr-search-border-color)",
              },
              "::placeholder": { color: "var(--epr-search-input-placeholder-color)" },
            },
            btnClearSearch: {
              ".": "epr-btn-clear-search",
              position: "absolute",
              right: "var(--epr-search-bar-inner-padding)",
              height: "30px",
              width: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: "50%",
              transform: "translateY(-50%)",
              padding: "0",
              borderRadius: "50%",
              ":hover": { background: "var(--epr-hover-bg-color)" },
              ":focus": { background: "var(--epr-hover-bg-color)" },
            },
            icnClearnSearch: {
              ".": "epr-icn-clear-search",
              backgroundColor: "transparent",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px",
              height: "20px",
              width: "20px",
              backgroundImage: "url(" + Zl + ")",
              ":hover": { backgroundPositionY: "-20px" },
              ":focus": { backgroundPositionY: "-20px" },
            },
          },
          Pi("icnClearnSearch", { backgroundPositionY: "-40px" }),
          Pi("btnClearSearch", { ":hover > .epr-icn-clear-search": { backgroundPositionY: "-60px" } })
        )
      );
      function ac() {
        return (0, f.createElement)(
          kl,
          { className: yi("epr-header", Ai.hiddenOnReactions) },
          (0, f.createElement)(nc, null),
          (0, f.createElement)(_l, null)
        );
      }
      function rc(e) {
        return (0, f.createElement)(
          gu,
          null,
          (0, f.createElement)(zi, null),
          (0, f.createElement)(zo, Object.assign({}, e), (0, f.createElement)(ic, null))
        );
      }
      function ic() {
        var e = nu()[0],
          n = Yo(),
          t = (0, f.useState)(!e),
          a = t[0],
          r = t[1],
          i = Ao().open;
        return (
          (0, f.useEffect)(
            function () {
              (e && !n) || a || r(!0);
            },
            [a, n, e]
          ),
          i
            ? (0, f.createElement)(ns, null, (0, f.createElement)(fl, null), (0, f.createElement)(oc, { renderAll: a }))
            : null
        );
      }
      function oc(e) {
        return e.renderAll
          ? (0, f.createElement)(
              f.Fragment,
              null,
              (0, f.createElement)(ac, null),
              (0, f.createElement)(ml, null),
              (0, f.createElement)(zl, null)
            )
          : null;
      }
      var uc = (0, f.memo)(rc, Oi),
        sc = (function (e) {
          var n, t;
          function f(n) {
            var t;
            return ((t = e.call(this, n) || this).state = { hasError: !1 }), t;
          }
          (t = e),
            ((n = f).prototype = Object.create(t.prototype)),
            (n.prototype.constructor = n),
            ki(n, t),
            (f.getDerivedStateFromError = function () {
              return { hasError: !0 };
            });
          var a = f.prototype;
          return (
            (a.componentDidCatch = function (e, n) {
              console.error("Emoji Picker React failed to render:", e, n);
            }),
            (a.render = function () {
              return this.state.hasError ? null : this.props.children;
            }),
            f
          );
        })(f.Component);
      const lc = function (e) {
          var n = (function (e) {
            var n = f.useRef({
              onEmojiClick: e.onEmojiClick || Qo,
              onReactionClick: e.onReactionClick || e.onEmojiClick,
              onSkinToneChange: e.onSkinToneChange || Qo,
            });
            return (
              f.useEffect(
                function () {
                  (n.current.onEmojiClick = e.onEmojiClick || Qo),
                    (n.current.onReactionClick = e.onReactionClick || e.onEmojiClick);
                },
                [e.onEmojiClick, e.onReactionClick]
              ),
              f.useEffect(
                function () {
                  n.current.onSkinToneChange = e.onSkinToneChange || Qo;
                },
                [e.onSkinToneChange]
              ),
              n
            );
          })({
            onEmojiClick: e.onEmojiClick,
            onReactionClick: e.onReactionClick,
            onSkinToneChange: e.onSkinToneChange,
          });
          return (0, f.createElement)(
            sc,
            null,
            (0, f.createElement)(Oo.Provider, { value: n }, (0, f.createElement)(uc, Object.assign({}, e)))
          );
        },
        cc = Vt("https://socket-deploy-testing.onrender.com"),
        dc = Jr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`,
        pc = () => {
          const [e, n] = (0, f.useState)([]),
            [t, a] = (0, f.useState)([]),
            [r, i] = (0, f.useState)(""),
            [o, u] = (0, f.useState)(""),
            [s, l] = (0, f.useState)(null),
            [c, d] = (0, f.useState)({}),
            [p, g] = (0, f.useState)(null),
            [h, m] = (0, f.useState)(!1),
            w = JSON.parse(localStorage.getItem("user")),
            b = (0, f.useRef)(null);
          (0, f.useEffect)(
            () => (
              (async () => {
                try {
                  const e = await jn.get("https://socket-deploy-testing.onrender.com/users");
                  if (e.data.success) {
                    n(e.data.users);
                    const t = {};
                    e.data.users.forEach((e) => {
                      e.userId !== w.userId && (t[e.userId] = 0);
                    }),
                      d(t);
                  }
                } catch (e) {
                  console.error("Error fetching users:", e);
                }
              })(),
              cc.emit("addUser", w.userId),
              cc.on("getMessage", (e) => {
                e.receiverId === w.userId &&
                  (a((n) => [...n, e]), d((n) => ({ ...n, [e.senderId]: (n[e.senderId] || 0) + 1 })));
              }),
              cc.on("getUsers", (e) => {
                n(e);
              }),
              () => {
                cc.off("getMessage"), cc.off("getUsers");
              }
            ),
            []
          ),
            (0, f.useEffect)(() => {
              var e;
              null === (e = b.current) || void 0 === e || e.scrollIntoView({ behavior: "smooth" });
            }, [t]);
          return (0, kn.jsxs)("div", {
            children: [
              (0, kn.jsx)("button", {
                onClick: () => {
                  localStorage.clear(), (window.location.href = "/login");
                },
                style: { margin: "10px" },
                children: "Log out",
              }),
              (0, kn.jsx)("h1", { style: { display: "flex", justifyContent: "center" }, children: "Chat" }),
              (0, kn.jsx)("div", {
                id: "users",
                style: { border: "2px solid black", float: "left", width: "250px" },
                children: e.map((e) =>
                  e.userId !== w.userId
                    ? (0, kn.jsxs)(
                        "button",
                        {
                          style: { margin: "10px", width: "225px", height: "40px", position: "relative" },
                          onClick: () =>
                            (async (e) => {
                              u(e), l(e);
                              try {
                                const n = await jn.post("https://socket-deploy-testing.onrender.com/msg", {
                                  senderId: w.userId,
                                  receiverId: e,
                                });
                                n.data.success && (a(n.data.data), d((n) => ({ ...n, [e]: 0 })));
                              } catch (n) {
                                console.error("Error fetching messages:", n);
                              }
                            })(e.userId),
                          children: [
                            e.userId,
                            c[e.userId] > 0 &&
                              (0, kn.jsx)("span", {
                                style: {
                                  position: "absolute",
                                  top: "0",
                                  right: "0",
                                  background: "red",
                                  color: "white",
                                  borderRadius: "50%",
                                  padding: "5px",
                                  fontSize: "12px",
                                  textAlign: "center",
                                  width: "20px",
                                  height: "20px",
                                  lineHeight: "20px",
                                },
                                children: c[e.userId],
                              }),
                          ],
                        },
                        e.userId
                      )
                    : null
                ),
              }),
              (0, kn.jsxs)("div", {
                style: { marginLeft: "250px" },
                children: [
                  s &&
                    (0, kn.jsx)("div", {
                      style: {
                        position: "fixed",
                        top: 0,
                        left: "250px",
                        width: "1000px",
                        background: "white",
                        borderBottom: "2px solid black",
                        padding: "10px",
                        zIndex: 1e3,
                      },
                      children: (0, kn.jsxs)("h2", { children: ["Chatting with: ", s] }),
                    }),
                  (0, kn.jsxs)("div", {
                    id: "msg",
                    style: {
                      border: "2px solid black",
                      height: "600px",
                      width: "1000px",
                      padding: "10px",
                      paddingTop: "0px",
                      overflowY: "auto",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: s ? "60px" : "0px",
                    },
                    children: [
                      o
                        ? t.map((e, n) => {
                            return (0, kn.jsx)(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  justifyContent: e.senderId === w.userId ? "flex-end" : "flex-start",
                                  marginBottom: "10px",
                                },
                                children: (0, kn.jsxs)("div", {
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: "10px",
                                    borderRadius: "20px",
                                    maxWidth: "60%",
                                    wordWrap: "break-word",
                                    overflowWrap: "break-word",
                                    backgroundColor:
                                      e.senderId === w.userId ? "rgba(202, 255, 206, 0.8)" : "rgba(186, 199, 255, 0.8)",
                                    borderRadius: e.senderId === w.userId ? "20px 20px 20px 0px" : "20px 20px 0px 20px",
                                  },
                                  children: [
                                    e.images &&
                                      e.images.map((e, n) =>
                                        e.match(/\.(jpeg|jpg|gif|png|webp)$/i)
                                          ? (0, kn.jsx)(
                                              "img",
                                              {
                                                src: `https://socket-deploy-testing.onrender.com${e}`,
                                                alt: `attachment ${n}`,
                                                style: { maxWidth: "100%", borderRadius: "10px", marginTop: "5px" },
                                              },
                                              n
                                            )
                                          : (0, kn.jsxs)(
                                              "a",
                                              {
                                                href: `https://socket-deploy-testing.onrender.com${e}`,
                                                download: !0,
                                                style: {
                                                  display: "block",
                                                  marginTop: "5px",
                                                  textDecoration: "underline",
                                                  color: "#007bff",
                                                },
                                                target: "_blocke",
                                                children: ["Download attachment ", e],
                                              },
                                              n
                                            )
                                      ),
                                    e.text &&
                                      (0, kn.jsx)("p", {
                                        style: { margin: 0, fontSize: "20px", letterSpacing: "2px" },
                                        children: e.text,
                                      }),
                                    (0, kn.jsx)("span", {
                                      style: { fontSize: "12px", color: "gray", marginTop: "5px" },
                                      children: ((t = e.createdAt), new Date(t).toLocaleTimeString()),
                                    }),
                                  ],
                                }),
                              },
                              n
                            );
                            var t;
                          })
                        : (0, kn.jsx)(kn.Fragment, {
                            children: (0, kn.jsxs)(dc, {
                              children: [
                                (0, kn.jsx)("img", { src: _r, alt: "" }),
                                (0, kn.jsxs)("h1", {
                                  style: { color: "black" },
                                  children: ["Welcome, ", (0, kn.jsxs)("span", { children: [w.username, "!"] })],
                                }),
                                (0, kn.jsx)("h3", {
                                  style: { color: "black" },
                                  children: "Select a user to start messaging",
                                }),
                              ],
                            }),
                          }),
                      (0, kn.jsx)("div", { ref: b }),
                    ],
                  }),
                  o &&
                    (0, kn.jsxs)("div", {
                      style: { display: "flex", marginTop: "20px" },
                      children: [
                        (0, kn.jsx)("button", {
                          onClick: () => {
                            m(!h);
                          },
                          style: { background: "transparent", border: "none" },
                          children: (0, kn.jsx)(ni, {
                            style: { color: "#ff6e6e", fontSize: "2rem", marginLeft: "5px" },
                          }),
                        }),
                        (0, kn.jsx)("input", {
                          type: "text",
                          value: r,
                          onChange: (e) => i(e.target.value),
                          placeholder: "Type a message...",
                          style: {
                            height: "30px",
                            width: "300px",
                            marginRight: "10px",
                            padding: "10px",
                            borderRadius: "5px",
                            fontSize: "20px",
                            letterSpacing: "2px",
                          },
                        }),
                        h &&
                          (0, kn.jsx)(lc, {
                            onEmojiClick: (e) => {
                              console.log(e), i((n) => n + e.emoji);
                            },
                            emojiStyle: Qi.APPLE,
                            pickerStyle: { position: "absolute", bottom: "60px", left: "10px", zIndex: 1e3 },
                          }),
                        (0, kn.jsx)("input", {
                          type: "file",
                          onChange: (e) => {
                            g(e.target.files[0]);
                          },
                        }),
                        (0, kn.jsx)("button", {
                          onClick: () => {
                            if (o) {
                              if (p) {
                                const e = new FormData();
                                e.append("file", p),
                                  e.append("senderId", w.userId),
                                  e.append("receiverId", o),
                                  e.append("text", r),
                                  jn
                                    .post("https://socket-deploy-testing.onrender.com/upload", e)
                                    .then((e) => {
                                      e.data.success && (a((n) => [...n, e.data.data]), g(null), i(""));
                                    })
                                    .catch((e) => {
                                      console.error("Error uploading file:", e);
                                    });
                              } else if (r) {
                                const e = {
                                  receiverId: o,
                                  senderId: w.userId,
                                  text: r,
                                  createdAt: new Date().toISOString(),
                                };
                                cc.emit("sendMessage", e), a((n) => [...n, e]), i("");
                              }
                            } else alert("Select a user to send a message.");
                          },
                          style: { padding: "10px", borderRadius: "5px", height: "40px" },
                          children: "Send",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        },
        gc = () => {
          const [e, n] = (0, f.useState)(!!localStorage.getItem("user"));
          return (0, kn.jsx)("div", { children: e ? (0, kn.jsx)(pc, {}) : (0, kn.jsx)(In, { onLogin: () => n(!0) }) });
        },
        hc = (e) => {
          e &&
            e instanceof Function &&
            t
              .e(453)
              .then(t.bind(t, 453))
              .then((n) => {
                let { getCLS: t, getFID: f, getFCP: a, getLCP: r, getTTFB: i } = n;
                t(e), f(e), a(e), r(e), i(e);
              });
        };
      a
        .createRoot(document.getElementById("root"))
        .render((0, kn.jsx)(f.StrictMode, { children: (0, kn.jsx)(gc, {}) })),
        hc();
    })();
})();
//# sourceMappingURL=main.25479188.js.map

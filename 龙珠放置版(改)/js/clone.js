"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * vConsole v3.3.4 (https://github.com/Tencent/vConsole)
 * 
 * Tencent is pleased to support the open source community by making vConsole available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define("VConsole", [], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports.VConsole = t() : e.VConsole = t();
}(window, function () {
  return function (e) {
    var t = {};function n(o) {
      if (t[o]) return t[o].exports;var r = t[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof2(e)) && e && e.__esModule) return e;var o = Object.create(null);if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) {
        n.d(o, r, function (t) {
          return e[t];
        }.bind(null, r));
      }return o;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 6);
  }([function (e, t, n) {
    var o, r, i;r = [t], void 0 === (i = "function" == typeof (o = function o(e) {
      "use strict";
      function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        })(e);
      }function n(e) {
        return "[object Number]" == Object.prototype.toString.call(e);
      }function o(e) {
        return "[object String]" == Object.prototype.toString.call(e);
      }function r(e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      }function i(e) {
        return "[object Boolean]" == Object.prototype.toString.call(e);
      }function a(e) {
        return void 0 === e;
      }function l(e) {
        return null === e;
      }function c(e) {
        return "[object Symbol]" == Object.prototype.toString.call(e);
      }function s(e) {
        return !("[object Object]" != Object.prototype.toString.call(e) && (n(e) || o(e) || i(e) || r(e) || l(e) || d(e) || a(e) || c(e)));
      }function d(e) {
        return "[object Function]" == Object.prototype.toString.call(e);
      }function u(e) {
        var t = Object.prototype.toString.call(e);return "[object global]" == t || "[object Window]" == t || "[object DOMWindow]" == t;
      }function f(e) {
        if (!s(e) && !r(e)) return [];if (r(e)) {
          var t = [];return e.forEach(function (e, n) {
            t.push(n);
          }), t;
        }return Object.getOwnPropertyNames(e).sort();
      }Object.defineProperty(e, "__esModule", { value: !0 }), e.getDate = function (e) {
        var t = e > 0 ? new Date(e) : new Date(),
            n = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
            o = t.getMonth() < 9 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
            r = t.getFullYear(),
            i = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
            a = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
            l = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds(),
            c = t.getMilliseconds() < 10 ? "0" + t.getMilliseconds() : t.getMilliseconds();return c < 100 && (c = "0" + c), { time: +t, year: r, month: o, day: n, hour: i, minute: a, second: l, millisecond: c };
      }, e.isNumber = n, e.isString = o, e.isArray = r, e.isBoolean = i, e.isUndefined = a, e.isNull = l, e.isSymbol = c, e.isObject = s, e.isFunction = d, e.isElement = function (e) {
        return "object" === ("undefined" == typeof HTMLElement ? "undefined" : t(HTMLElement)) ? e instanceof HTMLElement : e && "object" === t(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
      }, e.isWindow = u, e.isPlainObject = function (e) {
        var n,
            o = Object.prototype.hasOwnProperty;if (!e || "object" !== t(e) || e.nodeType || u(e)) return !1;try {
          if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (e) {
          return !1;
        }for (n in e) {}return void 0 === n || o.call(e, n);
      }, e.htmlEncode = function (e) {
        return document.createElement("a").appendChild(document.createTextNode(e)).parentNode.innerHTML;
      }, e.JSONStringify = function (e) {
        if (!s(e) && !r(e)) return JSON.stringify(e);var t = "{",
            n = "}";r(e) && (t = "[", n = "]");for (var o = t, i = f(e), a = 0; a < i.length; a++) {
          var l = i[a],
              u = e[l];try {
            r(e) || (s(l) || r(l) || c(l) ? o += Object.prototype.toString.call(l) : o += l, o += ": "), r(u) ? o += "Array[" + u.length + "]" : s(u) || c(u) || d(u) ? o += Object.prototype.toString.call(u) : o += JSON.stringify(u), a < i.length - 1 && (o += ", ");
          } catch (e) {
            continue;
          }
        }return o += n;
      }, e.getObjAllKeys = f, e.getObjName = function (e) {
        return Object.prototype.toString.call(e).replace("[object ", "").replace("]", "");
      }, e.setStorage = function (e, t) {
        window.localStorage && (e = "vConsole_" + e, localStorage.setItem(e, t));
      }, e.getStorage = function (e) {
        if (window.localStorage) return e = "vConsole_" + e, localStorage.getItem(e);
      };
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t, n) {
    var o, r, i;r = [t, n(0), n(11)], void 0 === (i = "function" == typeof (o = function o(n, _o, r) {
      "use strict";
      var i;Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, r = (i = r) && i.__esModule ? i : { default: i };var a = {};Array.from || (Array.from = function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          t.push(e[n]);
        }return t;
      }), a.one = function (e, t) {
        try {
          return (t || document).querySelector(e) || void 0;
        } catch (e) {
          return;
        }
      }, a.all = function (e, t) {
        try {
          var n = (t || document).querySelectorAll(e);return Array.from(n);
        } catch (e) {
          return [];
        }
      }, a.addClass = function (e, t) {
        if (e) {
          (0, _o.isArray)(e) || (e = [e]);for (var n = 0; n < e.length; n++) {
            var r = (e[n].className || "").split(" ");r.indexOf(t) > -1 || (r.push(t), e[n].className = r.join(" "));
          }
        }
      }, a.removeClass = function (e, t) {
        if (e) {
          (0, _o.isArray)(e) || (e = [e]);for (var n = 0; n < e.length; n++) {
            for (var r = e[n].className.split(" "), i = 0; i < r.length; i++) {
              r[i] == t && (r[i] = "");
            }e[n].className = r.join(" ").trim();
          }
        }
      }, a.hasClass = function (e, t) {
        return !(!e || !e.classList) && e.classList.contains(t);
      }, a.bind = function (e, t, n, r) {
        e && ((0, _o.isArray)(e) || (e = [e]), e.forEach(function (e) {
          e.addEventListener(t, n, !!r);
        }));
      }, a.delegate = function (e, t, n, o) {
        e && e.addEventListener(t, function (t) {
          var r = a.all(n, e);if (r) e: for (var i = 0; i < r.length; i++) {
            for (var l = t.target; l;) {
              if (l == r[i]) {
                o.call(l, t);break e;
              }if ((l = l.parentNode) == e) break;
            }
          }
        }, !1);
      }, a.render = r.default;var l = a;n.default = l, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t, n) {
    var o, r, i;r = [t], void 0 === (i = "function" == typeof (o = function o(n) {
      "use strict";
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;var r = function () {
        function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "newPlugin";!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.id = t, this.name = n, this.isReady = !1, this.eventList = {};
        }var t, n, r;return t = e, (n = [{ key: "on", value: function value(e, t) {
            return this.eventList[e] = t, this;
          } }, { key: "trigger", value: function value(e, t) {
            if ("function" == typeof this.eventList[e]) this.eventList[e].call(this, t);else {
              var n = "on" + e.charAt(0).toUpperCase() + e.slice(1);"function" == typeof this[n] && this[n].call(this, t);
            }return this;
          } }, { key: "id", get: function get() {
            return this._id;
          }, set: function set(e) {
            if (!e) throw "Plugin ID cannot be empty";this._id = e.toLowerCase();
          } }, { key: "name", get: function get() {
            return this._name;
          }, set: function set(e) {
            if (!e) throw "Plugin name cannot be empty";this._name = e;
          } }, { key: "vConsole", get: function get() {
            return this._vConsole || void 0;
          }, set: function set(e) {
            if (!e) throw "vConsole cannot be empty";this._vConsole = e;
          } }]) && o(t.prototype, n), r && o(t, r), e;
      }();n.default = r, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t, n) {
    var o, r, i;r = [t, n(0), n(1), n(2), n(19), n(20), n(21)], void 0 === (i = "function" == typeof (o = function o(n, _o2, r, i, a, l, c) {
      "use strict";
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }function d() {
        if ("function" != typeof WeakMap) return null;var e = new WeakMap();return d = function d() {
          return e;
        }, e;
      }function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        })(e);
      }function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }function v(e, t) {
        return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
        }(e) : t;
      }function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }function h(e, t) {
        return (h = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, _o2 = function (e) {
        if (e && e.__esModule) return e;var t = d();if (t && t.has(e)) return t.get(e);var n = {};if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
            }
          }
        }return n.default = e, t && t.set(e, n), n;
      }(_o2), r = s(r), i = s(i), a = s(a), l = s(l), c = s(c);var b = 1e3,
          m = [],
          g = {},
          y = function (e) {
        function t() {
          var e, n;!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) {
            r[i] = arguments[i];
          }return n = v(this, (e = p(t)).call.apply(e, [this].concat(r))), m.push(n.id), n.tplTabbox = "", n.allowUnformattedLog = !0, n.isReady = !1, n.isShow = !1, n.$tabbox = null, n.console = {}, n.logList = [], n.isInBottom = !0, n.maxLogNumber = b, n.logNumber = 0, n.mockConsole(), n;
        }var n, i, s;return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && h(e, t);
        }(t, e), n = t, (i = [{ key: "onInit", value: function value() {
            this.$tabbox = r.default.render(this.tplTabbox, {}), this.updateMaxLogNumber();
          } }, { key: "onRenderTab", value: function value(e) {
            e(this.$tabbox);
          } }, { key: "onAddTopBar", value: function value(e) {
            for (var t = this, n = ["All", "Log", "Info", "Warn", "Error"], o = [], i = 0; i < n.length; i++) {
              o.push({ name: n[i], data: { type: n[i].toLowerCase() }, className: "", onClick: function onClick() {
                  if (r.default.hasClass(this, "vc-actived")) return !1;t.showLogType(this.dataset.type || "all");
                } });
            }o[0].className = "vc-actived", e(o);
          } }, { key: "onAddTool", value: function value(e) {
            var t = this;e([{ name: "Clear", global: !1, onClick: function onClick() {
                t.clearLog(), t.vConsole.triggerEvent("clearLog");
              } }]);
          } }, { key: "onReady", value: function value() {
            var e = this;e.isReady = !0;var t = r.default.all(".vc-subtab", e.$tabbox);r.default.bind(t, "click", function (n) {
              if (n.preventDefault(), r.default.hasClass(this, "vc-actived")) return !1;r.default.removeClass(t, "vc-actived"), r.default.addClass(this, "vc-actived");var o = this.dataset.type,
                  i = r.default.one(".vc-log", e.$tabbox);r.default.removeClass(i, "vc-log-partly-log"), r.default.removeClass(i, "vc-log-partly-info"), r.default.removeClass(i, "vc-log-partly-warn"), r.default.removeClass(i, "vc-log-partly-error"), "all" == o ? r.default.removeClass(i, "vc-log-partly") : (r.default.addClass(i, "vc-log-partly"), r.default.addClass(i, "vc-log-partly-" + o));
            });var n = r.default.one(".vc-content");r.default.bind(n, "scroll", function (t) {
              e.isShow && (n.scrollTop + n.offsetHeight >= n.scrollHeight ? e.isInBottom = !0 : e.isInBottom = !1);
            });for (var o = 0; o < e.logList.length; o++) {
              e.printLog(e.logList[o]);
            }e.logList = [];
          } }, { key: "onRemove", value: function value() {
            window.console.log = this.console.log, window.console.info = this.console.info, window.console.warn = this.console.warn, window.console.debug = this.console.debug, window.console.error = this.console.error, window.console.time = this.console.time, window.console.timeEnd = this.console.timeEnd, window.console.clear = this.console.clear, this.console = {};var e = m.indexOf(this.id);e > -1 && m.splice(e, 1);
          } }, { key: "onShow", value: function value() {
            this.isShow = !0, 1 == this.isInBottom && this.autoScrollToBottom();
          } }, { key: "onHide", value: function value() {
            this.isShow = !1;
          } }, { key: "onShowConsole", value: function value() {
            1 == this.isInBottom && this.autoScrollToBottom();
          } }, { key: "onUpdateOption", value: function value() {
            this.vConsole.option.maxLogNumber != this.maxLogNumber && (this.updateMaxLogNumber(), this.limitMaxLogs());
          } }, { key: "updateMaxLogNumber", value: function value() {
            this.maxLogNumber = this.vConsole.option.maxLogNumber || b, this.maxLogNumber = Math.max(1, this.maxLogNumber);
          } }, { key: "limitMaxLogs", value: function value() {
            if (this.isReady) for (; this.logNumber > this.maxLogNumber;) {
              var e = r.default.one(".vc-item", this.$tabbox);if (!e) break;e.parentNode.removeChild(e), this.logNumber--;
            }
          } }, { key: "showLogType", value: function value(e) {
            var t = r.default.one(".vc-log", this.$tabbox);r.default.removeClass(t, "vc-log-partly-log"), r.default.removeClass(t, "vc-log-partly-info"), r.default.removeClass(t, "vc-log-partly-warn"), r.default.removeClass(t, "vc-log-partly-error"), "all" == e ? r.default.removeClass(t, "vc-log-partly") : (r.default.addClass(t, "vc-log-partly"), r.default.addClass(t, "vc-log-partly-" + e));
          } }, { key: "autoScrollToBottom", value: function value() {
            this.vConsole.option.disableLogScrolling || this.scrollToBottom();
          } }, { key: "scrollToBottom", value: function value() {
            var e = r.default.one(".vc-content");e && (e.scrollTop = e.scrollHeight - e.offsetHeight);
          } }, { key: "mockConsole", value: function value() {
            var e = this,
                t = this,
                n = ["log", "info", "warn", "debug", "error"];window.console ? (n.map(function (e) {
              t.console[e] = window.console[e];
            }), t.console.time = window.console.time, t.console.timeEnd = window.console.timeEnd, t.console.clear = window.console.clear) : window.console = {}, n.map(function (t) {
              window.console[t] = function () {
                for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) {
                  o[r] = arguments[r];
                }e.printLog({ logType: t, logs: o });
              };
            });var o = {};window.console.time = function (e) {
              o[e] = Date.now();
            }, window.console.timeEnd = function (e) {
              var t = o[e];t ? (console.log(e + ":", Date.now() - t + "ms"), delete o[e]) : console.log(e + ": 0ms");
            }, window.console.clear = function () {
              t.clearLog();for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) {
                n[o] = arguments[o];
              }t.console.clear.apply(window.console, n);
            };
          } }, { key: "clearLog", value: function value() {
            r.default.one(".vc-log", this.$tabbox).innerHTML = "", this.logNumber = 0, g = {};
          } }, { key: "printOriginLog", value: function value(e) {
            "function" == typeof this.console[e.logType] && this.console[e.logType].apply(window.console, e.logs);
          } }, { key: "printLog", value: function value(e) {
            var t = e.logs || [];if (t.length || e.content) {
              t = [].slice.call(t || []);var n = /^\[(\w+)\]$/i,
                  r = "",
                  i = !1;if (_o2.isString(t[0])) {
                var a = t[0].match(n);null !== a && a.length > 0 && (r = a[1].toLowerCase(), i = m.indexOf(r) > -1);
              }if (r === this.id || !0 !== i && "default" === this.id) {
                if (e._id || (e._id = "__vc_" + Math.random().toString(36).substring(2, 8)), e.date || (e.date = +new Date()), this.isReady) {
                  _o2.isString(t[0]) && i && (t[0] = t[0].replace(n, ""), "" === t[0] && t.shift());for (var l = { _id: e._id, logType: e.logType, logText: [], hasContent: !!e.content, count: 1 }, c = 0; c < t.length; c++) {
                    _o2.isFunction(t[c]) ? l.logText.push(t[c].toString()) : _o2.isObject(t[c]) || _o2.isArray(t[c]) ? l.logText.push(_o2.JSONStringify(t[c])) : l.logText.push(t[c]);
                  }l.logText = l.logText.join(" "), l.hasContent || g.logType !== l.logType || g.logText !== l.logText ? (this.printNewLog(e, t), g = l) : this.printRepeatLog(), this.isInBottom && this.isShow && this.autoScrollToBottom(), e.noOrigin || this.printOriginLog(e);
                } else this.logList.push(e);
              } else e.noOrigin || this.printOriginLog(e);
            }
          } }, { key: "printRepeatLog", value: function value() {
            var e = r.default.one("#" + g._id),
                t = r.default.one(".vc-item-repeat", e);t || ((t = document.createElement("i")).className = "vc-item-repeat", e.insertBefore(t, e.lastChild)), g.count, g.count++, t.innerHTML = g.count;
          } }, { key: "printNewLog", value: function value(e, t) {
            var n = r.default.render(a.default, { _id: e._id, logType: e.logType, style: e.style || "" }),
                i = /(\%c )|( \%c)/g,
                l = [];if (_o2.isString(t[0]) && i.test(t[0])) {
              for (var c = t[0].split(i).filter(function (e) {
                return void 0 !== e && "" !== e && !/ ?\%c ?/.test(e);
              }), s = t[0].match(i), d = 0; d < s.length; d++) {
                _o2.isString(t[d + 1]) && l.push(t[d + 1]);
              }for (var f = s.length + 1; f < t.length; f++) {
                c.push(t[f]);
              }t = c;
            }for (var v = r.default.one(".vc-item-content", n), p = 0; p < t.length; p++) {
              var h = void 0;try {
                if ("" === t[p]) continue;h = _o2.isFunction(t[p]) ? "<span> " + t[p].toString() + "</span>" : _o2.isObject(t[p]) || _o2.isArray(t[p]) ? this.getFoldedLine(t[p]) : (l[p] ? '<span style="'.concat(l[p], '"> ') : "<span> ") + _o2.htmlEncode(t[p]).replace(/\n/g, "<br/>") + "</span>";
              } catch (e) {
                h = "<span> [" + u(t[p]) + "]</span>";
              }h && ("string" == typeof h ? v.insertAdjacentHTML("beforeend", h) : v.insertAdjacentElement("beforeend", h));
            }_o2.isObject(e.content) && v.insertAdjacentElement("beforeend", e.content), this.formatLine && (n = this.formatLine(n)), r.default.one(".vc-log", this.$tabbox).insertAdjacentElement("beforeend", n), this.logNumber++, this.limitMaxLogs();
          } }, { key: "getFoldedLine", value: function value(e, t) {
            var n = this;if (!t) {
              var i = _o2.JSONStringify(e),
                  a = i.substr(0, 36);t = _o2.getObjName(e), i.length > 36 && (a += "..."), t += " " + a;
            }var s = r.default.render(l.default, { outer: t, lineType: "obj" });return r.default.bind(r.default.one(".vc-fold-outer", s), "click", function (t) {
              t.preventDefault(), t.stopPropagation(), r.default.hasClass(s, "vc-toggle") ? (r.default.removeClass(s, "vc-toggle"), r.default.removeClass(r.default.one(".vc-fold-inner", s), "vc-toggle"), r.default.removeClass(r.default.one(".vc-fold-outer", s), "vc-toggle")) : (r.default.addClass(s, "vc-toggle"), r.default.addClass(r.default.one(".vc-fold-inner", s), "vc-toggle"), r.default.addClass(r.default.one(".vc-fold-outer", s), "vc-toggle"));var i = r.default.one(".vc-fold-inner", s);return setTimeout(function () {
                if (0 == i.children.length && e) {
                  for (var t = _o2.getObjAllKeys(e), a = 0; a < t.length; a++) {
                    var s = void 0,
                        d = "undefined",
                        u = "";try {
                      s = e[t[a]];
                    } catch (e) {
                      continue;
                    }_o2.isString(s) ? (d = "string", s = '"' + s + '"') : _o2.isNumber(s) ? d = "number" : _o2.isBoolean(s) ? d = "boolean" : _o2.isNull(s) ? (d = "null", s = "null") : _o2.isUndefined(s) ? (d = "undefined", s = "undefined") : _o2.isFunction(s) ? (d = "function", s = "function()") : _o2.isSymbol(s) && (d = "symbol");var f = void 0;if (_o2.isArray(s)) {
                      var v = _o2.getObjName(s) + "[" + s.length + "]";f = n.getFoldedLine(s, r.default.render(c.default, { key: t[a], keyType: u, value: v, valueType: "array" }, !0));
                    } else if (_o2.isObject(s)) {
                      var p = _o2.getObjName(s);f = n.getFoldedLine(s, r.default.render(c.default, { key: _o2.htmlEncode(t[a]), keyType: u, value: p, valueType: "object" }, !0));
                    } else {
                      e.hasOwnProperty && !e.hasOwnProperty(t[a]) && (u = "private");var h = { lineType: "kv", key: _o2.htmlEncode(t[a]), keyType: u, value: _o2.htmlEncode(s), valueType: d };f = r.default.render(l.default, h);
                    }i.insertAdjacentElement("beforeend", f);
                  }if (_o2.isObject(e)) {
                    var b,
                        m = e.__proto__;b = _o2.isObject(m) ? n.getFoldedLine(m, r.default.render(c.default, { key: "__proto__", keyType: "private", value: _o2.getObjName(m), valueType: "object" }, !0)) : r.default.render(c.default, { key: "__proto__", keyType: "private", value: "null", valueType: "null" }), i.insertAdjacentElement("beforeend", b);
                  }
                }
              }), !1;
            }), s;
          } }]) && f(n.prototype, i), s && f(n, s), t;
      }(i.default);y.AddedLogID = [];var _ = y;n.default = _, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];return t.toString = function () {
        return this.map(function (t) {
          var n = function (e, t) {
            var n = e[1] || "",
                o = e[3];if (!o) return n;if (t && "function" == typeof btoa) {
              var r = function (e) {
                var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
                    n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return "/*# ".concat(n, " */");
              }(o),
                  i = o.sources.map(function (e) {
                return "/*# sourceURL=".concat(o.sourceRoot).concat(e, " */");
              });return [n].concat(i).concat([r]).join("\n");
            }return [n].join("\n");
          }(t, e);return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
        }).join("");
      }, t.i = function (e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
          var i = this[r][0];null != i && (o[i] = !0);
        }for (var a = 0; a < e.length; a++) {
          var l = e[a];null != l[0] && o[l[0]] || (n && !l[2] ? l[2] = n : n && (l[2] = "(".concat(l[2], ") and (").concat(n, ")")), t.push(l));
        }
      }, t;
    };
  }, function (e, t, n) {
    "use strict";
    var o,
        r = {},
        i = function i() {
      return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
    },
        a = function () {
      var e = {};return function (t) {
        if (void 0 === e[t]) {
          var n = document.querySelector(t);if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (e) {
            n = null;
          }e[t] = n;
        }return e[t];
      };
    }();function l(e, t) {
      for (var n = [], o = {}, r = 0; r < e.length; r++) {
        var i = e[r],
            a = t.base ? i[0] + t.base : i[0],
            l = { css: i[1], media: i[2], sourceMap: i[3] };o[a] ? o[a].parts.push(l) : n.push(o[a] = { id: a, parts: [l] });
      }return n;
    }function c(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n],
            i = r[o.id],
            a = 0;if (i) {
          for (i.refs++; a < i.parts.length; a++) {
            i.parts[a](o.parts[a]);
          }for (; a < o.parts.length; a++) {
            i.parts.push(b(o.parts[a], t));
          }
        } else {
          for (var l = []; a < o.parts.length; a++) {
            l.push(b(o.parts[a], t));
          }r[o.id] = { id: o.id, refs: 1, parts: l };
        }
      }
    }function s(e) {
      var t = document.createElement("style");if (void 0 === e.attributes.nonce) {
        var o = n.nc;o && (e.attributes.nonce = o);
      }if (Object.keys(e.attributes).forEach(function (n) {
        t.setAttribute(n, e.attributes[n]);
      }), "function" == typeof e.insert) e.insert(t);else {
        var r = a(e.insert || "head");if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t);
      }return t;
    }var d,
        u = (d = [], function (e, t) {
      return d[e] = t, d.filter(Boolean).join("\n");
    });function f(e, t, n, o) {
      var r = n ? "" : o.css;if (e.styleSheet) e.styleSheet.cssText = u(t, r);else {
        var i = document.createTextNode(r),
            a = e.childNodes;a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }function v(e, t, n) {
      var o = n.css,
          r = n.media,
          i = n.sourceMap;if (r && e.setAttribute("media", r), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = o;else {
        for (; e.firstChild;) {
          e.removeChild(e.firstChild);
        }e.appendChild(document.createTextNode(o));
      }
    }var p = null,
        h = 0;function b(e, t) {
      var n, o, r;if (t.singleton) {
        var i = h++;n = p || (p = s(t)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0);
      } else n = s(t), o = v.bind(null, n, t), r = function r() {
        !function (e) {
          if (null === e.parentNode) return !1;e.parentNode.removeChild(e);
        }(n);
      };return o(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;o(e = t);
        } else r();
      };
    }e.exports = function (e, t) {
      (t = t || {}).attributes = "object" == _typeof2(t.attributes) ? t.attributes : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());var n = l(e, t);return c(n, t), function (e) {
        for (var o = [], i = 0; i < n.length; i++) {
          var a = n[i],
              s = r[a.id];s && (s.refs--, o.push(s));
        }e && c(l(e, t), t);for (var d = 0; d < o.length; d++) {
          var u = o[d];if (0 === u.refs) {
            for (var f = 0; f < u.parts.length; f++) {
              u.parts[f]();
            }delete r[u.id];
          }
        }
      };
    };
  }, function (e, t, n) {
    var o, r, i;r = [t, n(7), n(8)], void 0 === (i = "function" == typeof (o = function o(n, _o3, r) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;var i,
          a = (i = r, r = i && i.__esModule ? i : { default: i }).default;n.default = a, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t, n) {
    var o, r, i;r = [], void 0 === (i = "function" == typeof (o = function o() {
      "use strict";
      if ("undefined" == typeof Symbol) {
        window.Symbol = function () {};var e = "__symbol_iterator_key";window.Symbol.iterator = e, Array.prototype[e] = function () {
          var e = this,
              t = 0;return { next: function next() {
              return { done: e.length === t, value: e.length === t ? void 0 : e[t++] };
            } };
        };
      }
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t, n) {
    var o, r, i;r = [t, n(9), n(10), n(0), n(1), n(12), n(14), n(15), n(16), n(17), n(18), n(2), n(3), n(22), n(25), n(27), n(31), n(39)], void 0 === (i = "function" == typeof (o = function o(n, _o4, r, i, a, l, c, s, d, u, f, v, p, h, b, m, g, y) {
      "use strict";
      function _() {
        if ("function" != typeof WeakMap) return null;var e = new WeakMap();return _ = function _() {
          return e;
        }, e;
      }function w(e) {
        return e && e.__esModule ? e : { default: e };
      }function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, r = w(r), i = function (e) {
        if (e && e.__esModule) return e;var t = _();if (t && t.has(e)) return t.get(e);var n = {};if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
            }
          }
        }return n.default = e, t && t.set(e, n), n;
      }(i), a = w(a), c = w(c), s = w(s), d = w(d), u = w(u), f = w(f), v = w(v), p = w(p), h = w(h), b = w(b), m = w(m), g = w(g), y = w(y);var x = "#__vconsole",
          k = function () {
        function e(t) {
          if (function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), a.default.one(x)) console.debug("vConsole is already exists.");else {
            var n = this;if (this.version = r.default.version, this.$dom = null, this.isInited = !1, this.option = { defaultPlugins: ["system", "network", "element", "storage"] }, this.activedTab = "", this.tabList = [], this.pluginList = {}, this.switchPos = { x: 10, y: 10, startX: 0, startY: 0, endX: 0, endY: 0 }, this.tool = i, this.$ = a.default, i.isObject(t)) for (var o in t) {
              this.option[o] = t[o];
            }this._addBuiltInPlugins();var l,
                c = function c() {
              n.isInited || (n._render(), n._mockTap(), n._bindEvent(), n._autoRun());
            };if (void 0 !== document) "loading" === document.readyState ? a.default.bind(window, "DOMContentLoaded", c) : c();else l = setTimeout(function e() {
              document && "complete" == document.readyState ? (l && clearTimeout(l), c()) : l = setTimeout(e, 1);
            }, 1);
          }
        }var t, n, o;return t = e, (n = [{ key: "_addBuiltInPlugins", value: function value() {
            this.addPlugin(new h.default("default", "Log"));var e = this.option.defaultPlugins,
                t = { system: { proto: b.default, name: "System" }, network: { proto: m.default, name: "Network" }, element: { proto: g.default, name: "Element" }, storage: { proto: y.default, name: "Storage" } };if (e && i.isArray(e)) for (var n = 0; n < e.length; n++) {
              var o = t[e[n]];o ? this.addPlugin(new o.proto(e[n], o.name)) : console.debug("Unrecognized default plugin ID:", e[n]);
            }
          } }, { key: "_render", value: function value() {
            if (!a.default.one(x)) {
              var e = document.createElement("div");e.innerHTML = c.default, document.documentElement.insertAdjacentElement("beforeend", e.children[0]);
            }this.$dom = a.default.one(x);var t = a.default.one(".vc-switch", this.$dom),
                n = 1 * i.getStorage("switch_x"),
                o = 1 * i.getStorage("switch_y");(n || o) && (n + t.offsetWidth > document.documentElement.offsetWidth && (n = document.documentElement.offsetWidth - t.offsetWidth), o + t.offsetHeight > document.documentElement.offsetHeight && (o = document.documentElement.offsetHeight - t.offsetHeight), n < 0 && (n = 0), o < 0 && (o = 0), this.switchPos.x = n, this.switchPos.y = o, a.default.one(".vc-switch").style.right = n + "px", a.default.one(".vc-switch").style.bottom = o + "px");var r = window.devicePixelRatio || 1,
                l = document.querySelector('[name="viewport"]');if (l && l.content) {
              var s = l.content.match(/initial\-scale\=\d+(\.\d+)?/);(s ? parseFloat(s[0].split("=")[1]) : 1) < 1 && (this.$dom.style.fontSize = 13 * r + "px");
            }a.default.one(".vc-mask", this.$dom).style.display = "none", this.option.theme && this.$dom.setAttribute("data-theme", this.option.theme);
          } }, { key: "_mockTap", value: function value() {
            var e,
                t,
                n,
                o = !1,
                r = null;this.$dom.addEventListener("touchstart", function (o) {
              if (void 0 === e) {
                var i = o.targetTouches[0];t = i.pageX, n = i.pageY, e = o.timeStamp, r = o.target.nodeType === Node.TEXT_NODE ? o.target.parentNode : o.target;
              }
            }, !1), this.$dom.addEventListener("touchmove", function (e) {
              var r = e.changedTouches[0];(Math.abs(r.pageX - t) > 10 || Math.abs(r.pageY - n) > 10) && (o = !0);
            }), this.$dom.addEventListener("touchend", function (t) {
              if (!1 === o && t.timeStamp - e < 700 && null != r) {
                var n = !1;switch (r.tagName.toLowerCase()) {case "textarea":
                    n = !0;break;case "input":
                    switch (r.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
                        n = !1;break;default:
                        n = !r.disabled && !r.readOnly;}}n ? r.focus() : "function" == typeof window.getSelection && getSelection().rangeCount || t.preventDefault();var i = t.changedTouches[0],
                    a = document.createEvent("MouseEvents");a.initMouseEvent("click", !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), a.forwardedTouchEvent = !0, a.initEvent("click", !0, !0), r.dispatchEvent(a);
              }e = void 0, o = !1, r = null;
            }, !1);
          } }, { key: "_bindEvent", value: function value() {
            var e = this,
                t = a.default.one(".vc-switch", e.$dom);a.default.bind(t, "touchstart", function (t) {
              e.switchPos.startX = t.touches[0].pageX, e.switchPos.startY = t.touches[0].pageY;
            }), a.default.bind(t, "touchend", function (t) {
              e.switchPos.x = e.switchPos.endX, e.switchPos.y = e.switchPos.endY, e.switchPos.startX = 0, e.switchPos.startY = 0, i.setStorage("switch_x", e.switchPos.x), i.setStorage("switch_y", e.switchPos.y);
            }), a.default.bind(t, "touchmove", function (n) {
              if (n.touches.length > 0) {
                var o = n.touches[0].pageX - e.switchPos.startX,
                    r = n.touches[0].pageY - e.switchPos.startY,
                    i = e.switchPos.x - o,
                    a = e.switchPos.y - r;i + t.offsetWidth > document.documentElement.offsetWidth && (i = document.documentElement.offsetWidth - t.offsetWidth), a + t.offsetHeight > document.documentElement.offsetHeight && (a = document.documentElement.offsetHeight - t.offsetHeight), i < 0 && (i = 0), a < 0 && (a = 0), t.style.right = i + "px", t.style.bottom = a + "px", e.switchPos.endX = i, e.switchPos.endY = a, n.preventDefault();
              }
            }), a.default.bind(a.default.one(".vc-switch", e.$dom), "click", function () {
              e.show();
            }), a.default.bind(a.default.one(".vc-hide", e.$dom), "click", function () {
              e.hide();
            });var n = a.default.one(".vc-mask", this.$dom),
                o = a.default.one(".vc-panel", this.$dom),
                r = window.transitionEnd(n).whichTransitionEnd(),
                l = function l() {
              n.style.display = "none", o.style.display = "none";
            };r ? a.default.bind(n, r, l) : l(), a.default.bind(n, "click", function (t) {
              if (t.target != a.default.one(".vc-mask")) return !1;e.hide();
            }), a.default.delegate(a.default.one(".vc-tabbar", e.$dom), "click", ".vc-tab", function (t) {
              var n = this.dataset.tab;n != e.activedTab && e.showTab(n);
            });var c = function c(t) {
              a.default.hasClass(e.$dom, "vc-toggle") || (t.style.display = "none");
            };r ? a.default.bind(o, r, function (e) {
              if (e.target != o) return !1;c(e.target);
            }) : c(o);var s = a.default.one(".vc-content", e.$dom),
                d = !1;a.default.bind(s, "touchstart", function (e) {
              var t = s.scrollTop,
                  n = s.scrollHeight,
                  o = t + s.offsetHeight;0 === t ? (s.scrollTop = 1, 0 === s.scrollTop && (a.default.hasClass(e.target, "vc-cmd-input") || (d = !0))) : o === n && (s.scrollTop = t - 1, s.scrollTop === t && (a.default.hasClass(e.target, "vc-cmd-input") || (d = !0)));
            }), a.default.bind(s, "touchmove", function (e) {
              d && e.preventDefault();
            }), a.default.bind(s, "touchend", function (e) {
              d = !1;
            });
          } }, { key: "_autoRun", value: function value() {
            for (var e in this.isInited = !0, this.pluginList) {
              this._initPlugin(this.pluginList[e]);
            }this.tabList.length > 0 && this.showTab(this.tabList[0]), this.triggerEvent("ready");
          } }, { key: "triggerEvent", value: function value(e, t) {
            e = "on" + e.charAt(0).toUpperCase() + e.slice(1), i.isFunction(this.option[e]) && this.option[e].apply(this, t);
          } }, { key: "_initPlugin", value: function value(e) {
            var t = this;e.vConsole = this, e.trigger("init"), e.trigger("renderTab", function (n) {
              t.tabList.push(e.id);var o = a.default.render(s.default, { id: e.id, name: e.name });a.default.one(".vc-tabbar", t.$dom).insertAdjacentElement("beforeend", o);var r = a.default.render(d.default, { id: e.id });n && (i.isString(n) ? r.innerHTML += n : i.isFunction(n.appendTo) ? n.appendTo(r) : i.isElement(n) && r.insertAdjacentElement("beforeend", n)), a.default.one(".vc-content", t.$dom).insertAdjacentElement("beforeend", r);
            }), e.trigger("addTopBar", function (n) {
              if (n) for (var o = a.default.one(".vc-topbar", t.$dom), r = function r(t) {
                var r = n[t],
                    l = a.default.render(u.default, { name: r.name || "Undefined", className: r.className || "", pluginID: e.id });if (r.data) for (var c in r.data) {
                  l.dataset[c] = r.data[c];
                }i.isFunction(r.onClick) && a.default.bind(l, "click", function (t) {
                  !1 === r.onClick.call(l) || (a.default.removeClass(a.default.all(".vc-topbar-" + e.id), "vc-actived"), a.default.addClass(l, "vc-actived"));
                }), o.insertAdjacentElement("beforeend", l);
              }, l = 0; l < n.length; l++) {
                r(l);
              }
            }), e.trigger("addTool", function (n) {
              if (n) for (var o = a.default.one(".vc-tool-last", t.$dom), r = function r(t) {
                var r = n[t],
                    l = a.default.render(f.default, { name: r.name || "Undefined", pluginID: e.id });1 == r.global && a.default.addClass(l, "vc-global-tool"), i.isFunction(r.onClick) && a.default.bind(l, "click", function (e) {
                  r.onClick.call(l);
                }), o.parentNode.insertBefore(l, o);
              }, l = 0; l < n.length; l++) {
                r(l);
              }
            }), e.isReady = !0, e.trigger("ready");
          } }, { key: "_triggerPluginsEvent", value: function value(e) {
            for (var t in this.pluginList) {
              this.pluginList[t].isReady && this.pluginList[t].trigger(e);
            }
          } }, { key: "_triggerPluginEvent", value: function value(e, t) {
            var n = this.pluginList[e];n && n.isReady && n.trigger(t);
          } }, { key: "addPlugin", value: function value(e) {
            return void 0 !== this.pluginList[e.id] ? (console.debug("Plugin " + e.id + " has already been added."), !1) : (this.pluginList[e.id] = e, this.isInited && (this._initPlugin(e), 1 == this.tabList.length && this.showTab(this.tabList[0])), !0);
          } }, { key: "removePlugin", value: function value(e) {
            e = (e + "").toLowerCase();var t = this.pluginList[e];if (void 0 === t) return console.debug("Plugin " + e + " does not exist."), !1;if (t.trigger("remove"), this.isInited) {
              var n = a.default.one("#__vc_tab_" + e);n && n.parentNode.removeChild(n);for (var o = a.default.all(".vc-topbar-" + e, this.$dom), r = 0; r < o.length; r++) {
                o[r].parentNode.removeChild(o[r]);
              }var i = a.default.one("#__vc_log_" + e);i && i.parentNode.removeChild(i);for (var l = a.default.all(".vc-tool-" + e, this.$dom), c = 0; c < l.length; c++) {
                l[c].parentNode.removeChild(l[c]);
              }
            }var s = this.tabList.indexOf(e);s > -1 && this.tabList.splice(s, 1);try {
              delete this.pluginList[e];
            } catch (t) {
              this.pluginList[e] = void 0;
            }return this.activedTab == e && this.tabList.length > 0 && this.showTab(this.tabList[0]), !0;
          } }, { key: "show", value: function value() {
            if (this.isInited) {
              var e = this;a.default.one(".vc-panel", this.$dom).style.display = "block", setTimeout(function () {
                a.default.addClass(e.$dom, "vc-toggle"), e._triggerPluginsEvent("showConsole"), a.default.one(".vc-mask", e.$dom).style.display = "block";
              }, 10);
            }
          } }, { key: "hide", value: function value() {
            this.isInited && (a.default.removeClass(this.$dom, "vc-toggle"), this._triggerPluginsEvent("hideConsole"));
          } }, { key: "showSwitch", value: function value() {
            this.isInited && (a.default.one(".vc-switch", this.$dom).style.display = "block");
          } }, { key: "hideSwitch", value: function value() {
            this.isInited && (a.default.one(".vc-switch", this.$dom).style.display = "none");
          } }, { key: "showTab", value: function value(e) {
            if (this.isInited) {
              var t = a.default.one("#__vc_log_" + e);a.default.removeClass(a.default.all(".vc-tab", this.$dom), "vc-actived"), a.default.addClass(a.default.one("#__vc_tab_" + e), "vc-actived"), a.default.removeClass(a.default.all(".vc-logbox", this.$dom), "vc-actived"), a.default.addClass(t, "vc-actived");var n = a.default.all(".vc-topbar-" + e, this.$dom);a.default.removeClass(a.default.all(".vc-toptab", this.$dom), "vc-toggle"), a.default.addClass(n, "vc-toggle"), n.length > 0 ? a.default.addClass(a.default.one(".vc-content", this.$dom), "vc-has-topbar") : a.default.removeClass(a.default.one(".vc-content", this.$dom), "vc-has-topbar"), a.default.removeClass(a.default.all(".vc-tool", this.$dom), "vc-toggle"), a.default.addClass(a.default.all(".vc-tool-" + e, this.$dom), "vc-toggle"), this.activedTab && this._triggerPluginEvent(this.activedTab, "hide"), this.activedTab = e, this._triggerPluginEvent(this.activedTab, "show");
            }
          } }, { key: "setOption", value: function value(e, t) {
            if (i.isString(e)) this.option[e] = t, this._triggerPluginsEvent("updateOption");else if (i.isObject(e)) {
              for (var n in e) {
                this.option[n] = e[n];
              }this._triggerPluginsEvent("updateOption");
            } else console.debug("The first parameter of vConsole.setOption() must be a string or an object.");
          } }, { key: "destroy", value: function value() {
            if (this.isInited) {
              for (var e = Object.keys(this.pluginList), t = e.length - 1; t >= 0; t--) {
                this.removePlugin(e[t]);
              }this.$dom.parentNode.removeChild(this.$dom), this.isInited = !1;
            }
          } }]) && C(t.prototype, n), o && C(t, o), e;
      }();k.VConsolePlugin = v.default, k.VConsoleLogPlugin = p.default, k.VConsoleDefaultPlugin = h.default, k.VConsoleSystemPlugin = b.default, k.VConsoleNetworkPlugin = m.default, k.VConsoleElementPlugin = g.default, k.VConsoleStoragePlugin = y.default;var O = k;n.default = O, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t) {
    !function (e) {
      "use strict";
      var t = function t(e, _t) {
        this.element = e, this.type = _t;
      };t.prototype = { add: function add(e) {
          this.callback = e, this.element.addEventListener(this.type, this.callback, !1);
        }, remove: function remove() {
          this.element.removeEventListener(this.type, this.callback, !1);
        } };var n = function n(e) {
        this.element = e, this.transitionEnd = this.whichTransitionEnd(), this.event = new t(this.element, this.transitionEnd);
      };n.prototype = { whichTransitionEnd: function whichTransitionEnd() {
          var e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var t in e) {
            if (void 0 !== this.element.style[t]) return e[t];
          }
        }, bind: function bind(e) {
          this.event.add(e);
        }, unbind: function unbind() {
          this.event.remove();
        } };var o = { list: [], getPosition: function getPosition(e) {
          if (Array.prototype.indexOf) return this.list.indexOf(e);for (var t = 0, n = this.list.length; t < n; t++) {
            if (this.list[t] === e) return t;
          }return -1;
        }, insert: function insert(e) {
          var t = this.getPosition(e);return -1 !== t || (this.list.push(e), this.list.push(new n(e)), t = this.getPosition(e)), this.list[t + 1];
        } };e.transitionEnd = function (e) {
        if (!e) throw "You need to pass an element as parameter!";var t = e[0] || e;return o.insert(t);
      };
    }(window);
  }, function (e) {
    e.exports = JSON.parse('{"name":"vconsole","version":"3.3.4","description":"A lightweight, extendable front-end developer tool for mobile web page.","homepage":"https://github.com/Tencent/vConsole","main":"dist/vconsole.min.js","typings":"dist/vconsole.min.d.ts","scripts":{"test":"mocha","build":"webpack","dev":"webpack-dev-server --config webpack.dev.config"},"keywords":["console","debug","mobile"],"repository":{"type":"git","url":"git+https://github.com/Tencent/vConsole.git"},"dependencies":{"mutation-observer":"^1.0.3","transitionEnd":"^1.0.2"},"devDependencies":{"@babel/core":"^7.6.2","@babel/plugin-proposal-class-properties":"^7.5.5","@babel/plugin-proposal-export-namespace-from":"^7.5.2","@babel/plugin-proposal-object-rest-spread":"^7.6.2","@babel/preset-env":"^7.6.2","babel-loader":"^8.0.6","babel-plugin-add-module-exports":"^1.0.2","chai":"^4.2.0","copy-webpack-plugin":"^5.1.1","css-loader":"^3.2.0","html-loader":"^0.5.5","html-webpack-plugin":"^3.2.0","jsdom":"^15.1.1","json-loader":"^0.5.7","less":"^3.10.3","less-loader":"^5.0.0","mocha":"^5.2.0","style-loader":"^1.0.0","webpack":"^4.41.0","webpack-cli":"^3.3.9","webpack-dev-server":"^3.10.1","webpack-merge":"^4.2.2"},"author":"Tencent","license":"MIT"}');
  }, function (e, t, n) {
    var o, r, i;r = [t], void 0 === (i = "function" == typeof (o = function o(n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), n.default = function (e, t, n) {
        var o = /\{\{([^\}]+)\}\}/g,
            r = "",
            i = "",
            a = 0,
            l = [],
            c = function c(e, t) {
          "" !== e && (t ? e.match(/^ ?else/g) ? r += "} " + e + " {\n" : e.match(/\/(if|for|switch)/g) ? r += "}\n" : e.match(/^ ?if|for|switch/g) ? r += e + " {\n" : e.match(/^ ?(break|continue) ?$/g) ? r += e + ";\n" : e.match(/^ ?(case|default)/g) ? r += e + ":\n" : r += "arr.push(" + e + ");\n" : r += 'arr.push("' + e.replace(/"/g, '\\"') + '");\n');
        };for (window.__mito_data = t, window.__mito_code = "", window.__mito_result = "", e = (e = e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g, "$1{{")).replace(/^[\r\n]/, "").replace(/\n/g, "\\\n").replace(/\r/g, "\\\r"), i = "(function(){\n", r = "var arr = [];\n"; l = o.exec(e);) {
          c(e.slice(a, l.index), !1), c(l[1], !0), a = l.index + l[0].length;
        }c(e.substr(a, e.length - a), !1), i += r = "with (__mito_data) {\n" + (r += '__mito_result = arr.join("");') + "\n}", i += "})();";var s = document.getElementsByTagName("script"),
            d = "";s.length > 0 && (d = s[0].nonce || "");var u = document.createElement("SCRIPT");u.innerHTML = i, u.setAttribute("nonce", d), document.documentElement.appendChild(u);var f = __mito_result;if (document.documentElement.removeChild(u), !n) {
          var v = document.createElement("DIV");v.innerHTML = f, f = v.children[0];
        }return f;
      }, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t, n) {
    var o = n(13);"string" == typeof o && (o = [[e.i, o, ""]]);var r = { insert: "head", singleton: !1 };n(5)(o, r);o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    (e.exports = n(4)(!1)).push([e.i, '#__vconsole {\n  --VC-BG-0: #ededed;\n  --VC-BG-1: #f7f7f7;\n  --VC-BG-2: #fff;\n  --VC-BG-3: #f7f7f7;\n  --VC-BG-4: #4c4c4c;\n  --VC-BG-5: #fff;\n  --VC-FG-0: rgba(0, 0, 0, 0.9);\n  --VC-FG-HALF: rgba(0, 0, 0, 0.9);\n  --VC-FG-1: rgba(0, 0, 0, 0.5);\n  --VC-FG-2: rgba(0, 0, 0, 0.3);\n  --VC-FG-3: rgba(0, 0, 0, 0.1);\n  --VC-RED: #fa5151;\n  --VC-ORANGE: #fa9d3b;\n  --VC-YELLOW: #ffc300;\n  --VC-GREEN: #91d300;\n  --VC-LIGHTGREEN: #95ec69;\n  --VC-BRAND: #07c160;\n  --VC-BLUE: #10aeff;\n  --VC-INDIGO: #1485ee;\n  --VC-PURPLE: #6467f0;\n  --VC-LINK: #576b95;\n  --VC-TEXTGREEN: #06ae56;\n  --VC-FG: black;\n  --VC-BG: white;\n  --VC-BG-COLOR-ACTIVE: #ececec;\n  --VC-WARN-BG: #fff3cc;\n  --VC-WARN-BORDER: #ffe799;\n  --VC-ERROR-BG: #fedcdc;\n  --VC-ERROR-BORDER: #fdb9b9;\n  --VC-DOM-TAG-NAME-COLOR: #881280;\n  --VC-DOM-ATTRIBUTE-NAME-COLOR: #994500;\n  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #1a1aa6;\n  --VC-CODE-KEY-FG: #881391;\n  --VC-CODE-PRIVATE-KEY-FG: #cfa1d3;\n  --VC-CODE-FUNC-FG: #0d22aa;\n  --VC-CODE-NUMBER-FG: #1c00cf;\n  --VC-CODE-STR-FG: #c41a16;\n  --VC-CODE-NULL-FG: #808080;\n  color: var(--VC-FG-0);\n  font-size: 13px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  -webkit-user-select: auto;\n  /* global */\n  /* compoment */\n}\n#__vconsole .vc-max-height {\n  max-height: 19.23076923em;\n}\n#__vconsole .vc-max-height-line {\n  max-height: 3.38461538em;\n}\n#__vconsole .vc-min-height {\n  min-height: 3.07692308em;\n}\n#__vconsole dd,\n#__vconsole dl,\n#__vconsole pre {\n  margin: 0;\n}\n#__vconsole .vc-switch {\n  display: block;\n  position: fixed;\n  right: 0.76923077em;\n  bottom: 0.76923077em;\n  color: #FFF;\n  background-color: var(--VC-BRAND);\n  line-height: 1;\n  font-size: 1.07692308em;\n  padding: 0.61538462em 1.23076923em;\n  z-index: 10000;\n  border-radius: 0.30769231em;\n  box-shadow: 0 0 0.61538462em rgba(0, 0, 0, 0.4);\n}\n#__vconsole .vc-mask {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0);\n  z-index: 10001;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s;\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n}\n#__vconsole .vc-panel {\n  display: none;\n  position: fixed;\n  min-height: 85%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10002;\n  background-color: var(--VC-BG-0);\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n}\n#__vconsole .vc-tabbar {\n  border-bottom: 1px solid var(--VC-FG-3);\n  overflow-x: auto;\n  height: 3em;\n  width: auto;\n  white-space: nowrap;\n}\n#__vconsole .vc-tabbar .vc-tab {\n  display: inline-block;\n  line-height: 3em;\n  padding: 0 1.15384615em;\n  border-right: 1px solid var(--VC-FG-3);\n  text-decoration: none;\n  color: var(--VC-FG-0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-tabbar .vc-tab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-tabbar .vc-tab.vc-actived {\n  background-color: var(--VC-BG-1);\n}\n#__vconsole .vc-content {\n  background-color: var(--VC-BG-2);\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  top: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 3.07692308em;\n  -webkit-overflow-scrolling: touch;\n  margin-bottom: constant(safe-area-inset-bottom);\n  margin-bottom: env(safe-area-inset-bottom);\n}\n#__vconsole .vc-content.vc-has-topbar {\n  top: 5.46153846em;\n}\n#__vconsole .vc-topbar {\n  background-color: var(--VC-BG-1);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  width: 100%;\n}\n#__vconsole .vc-topbar .vc-toptab {\n  display: none;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  line-height: 2.30769231em;\n  padding: 0 1.15384615em;\n  border-bottom: 1px solid var(--VC-FG-3);\n  text-decoration: none;\n  text-align: center;\n  color: var(--VC-FG-0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-topbar .vc-toptab.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-topbar .vc-toptab:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-topbar .vc-toptab.vc-actived {\n  border-bottom: 1px solid var(--VC-INDIGO);\n}\n#__vconsole .vc-logbox {\n  display: none;\n  position: relative;\n  min-height: 100%;\n}\n#__vconsole .vc-logbox i {\n  font-style: normal;\n}\n#__vconsole .vc-logbox .vc-log {\n  padding-bottom: 6em;\n  -webkit-tap-highlight-color: transparent;\n}\n#__vconsole .vc-logbox .vc-log:empty:before {\n  content: "Empty";\n  color: var(--VC-FG-1);\n  position: absolute;\n  top: 45%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 1.15384615em;\n  text-align: center;\n}\n#__vconsole .vc-logbox .vc-item {\n  margin: 0;\n  padding: 0.46153846em 0.61538462em;\n  overflow: hidden;\n  line-height: 1.3;\n  border-bottom: 1px solid var(--VC-FG-3);\n  word-break: break-word;\n}\n#__vconsole .vc-logbox .vc-item-info {\n  color: var(--VC-PURPLE);\n}\n#__vconsole .vc-logbox .vc-item-debug {\n  color: var(--VC-YELLOW);\n}\n#__vconsole .vc-logbox .vc-item-warn {\n  color: var(--VC-ORANGE);\n  border-color: var(--VC-WARN-BORDER);\n  background-color: var(--VC-WARN-BG);\n}\n#__vconsole .vc-logbox .vc-item-error {\n  color: var(--VC-RED);\n  border-color: var(--VC-ERROR-BORDER);\n  background-color: var(--VC-ERROR-BG);\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item {\n  display: none;\n}\n#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn,\n#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item.hide {\n  display: none;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-content {\n  margin-right: 4.61538462em;\n  display: inline-block;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-repeat {\n  display: inline-block;\n  margin-right: 0.30769231em;\n  padding: 0 6.5px;\n  color: #D7E0EF;\n  background-color: #42597F;\n  border-radius: 8.66666667px;\n}\n#__vconsole .vc-logbox .vc-item.vc-item-error .vc-item-repeat {\n  color: #901818;\n  background-color: var(--VC-RED);\n}\n#__vconsole .vc-logbox .vc-item.vc-item-warn .vc-item-repeat {\n  color: #987D20;\n  background-color: #F4BD02;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code {\n  display: block;\n  white-space: pre-wrap;\n  overflow: auto;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output {\n  padding-left: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: "›";\n  position: absolute;\n  top: -0.23076923em;\n  left: 0;\n  font-size: 1.23076923em;\n  color: #6A5ACD;\n}\n#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before {\n  content: "‹";\n}\n#__vconsole .vc-logbox .vc-item .vc-fold {\n  display: block;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer {\n  display: block;\n  font-style: italic;\n  padding-left: 0.76923077em;\n  position: relative;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active {\n  background-color: var(--VC-BG-COLOR-ACTIVE);\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before {\n  content: "";\n  position: absolute;\n  top: 0.30769231em;\n  left: 0.15384615em;\n  width: 0;\n  height: 0;\n  border: transparent solid 0.30769231em;\n  border-left-color: var(--VC-FG-1);\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before {\n  top: 0.46153846em;\n  left: 0;\n  border-top-color: var(--VC-FG-1);\n  border-left-color: transparent;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner {\n  display: none;\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle {\n  display: block;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key {\n  margin-left: 0.76923077em;\n}\n#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key {\n  margin-left: 0;\n}\n#__vconsole .vc-logbox .vc-code-key {\n  color: var(--VC-CODE-KEY-FG);\n}\n#__vconsole .vc-logbox .vc-code-private-key {\n  color: var(--VC-CODE-PRIVATE-KEY-FG);\n}\n#__vconsole .vc-logbox .vc-code-function {\n  color: var(--VC-CODE-FUNC-FG);\n  font-style: italic;\n}\n#__vconsole .vc-logbox .vc-code-number,\n#__vconsole .vc-logbox .vc-code-boolean {\n  color: var(--VC-CODE-NUMBER-FG);\n}\n#__vconsole .vc-logbox .vc-code-string {\n  color: var(--VC-CODE-STR-FG);\n}\n#__vconsole .vc-logbox .vc-code-null,\n#__vconsole .vc-logbox .vc-code-undefined {\n  color: var(--VC-CODE-NULL-FG);\n}\n#__vconsole .vc-logbox .vc-cmd {\n  position: absolute;\n  height: 3.07692308em;\n  left: 0;\n  right: 0;\n  bottom: 41px;\n  border-top: 1px solid var(--VC-FG-3);\n  display: block!important;\n}\n#__vconsole .vc-logbox .vc-cmd.vc-filter {\n  bottom: 0;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap {\n  display: block;\n  height: 2.15384615em;\n  margin-right: 3.07692308em;\n  padding: 0.46153846em 0.61538462em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input {\n  width: 100%;\n  border: none;\n  resize: none;\n  outline: none;\n  padding: 0;\n  font-size: 0.92307692em;\n  background-color: transparent;\n  color: var(--VC-FG-0);\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder {\n  line-height: 2.15384615em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 3.07692308em;\n  border: none;\n  background-color: var(--VC-BG-0);\n  color: var(--VC-FG-0);\n  outline: none;\n  -webkit-touch-callout: none;\n  font-size: 1em;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted {\n  position: fixed;\n  width: 100%;\n  background-color: var(--VC-BG-3);\n  border: 1px solid var(--VC-FG-3);\n  overflow-x: scroll;\n  display: none;\n}\n#__vconsole .vc-logbox .vc-cmd .vc-cmd-prompted li {\n  list-style: none;\n  line-height: 30px;\n  padding: 0 0.46153846em;\n  border-bottom: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview {\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-logbox .vc-group .vc-group-preview:active {\n  background-color: var(--VC-BG-COLOR-ACTIVE);\n}\n#__vconsole .vc-logbox .vc-group .vc-group-detail {\n  display: none;\n  padding: 0 0 0.76923077em 1.53846154em;\n  border-bottom: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail {\n  display: block;\n  background-color: var(--VC-BG-1);\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row {\n  background-color: var(--VC-BG-2);\n}\n#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview {\n  background-color: var(--VC-BG-1);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  overflow: hidden;\n  border-bottom: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border {\n  border-left: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  padding: 0.23076923em 0.30769231em;\n  border-left: 1px solid var(--VC-FG-3);\n  overflow: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  /*white-space: nowrap;\n        text-overflow: ellipsis;*/\n  -webkit-overflow-scrolling: touch;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col:first-child {\n  border: none;\n}\n#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col {\n  padding: 0 0.30769231em;\n  font-size: 0.92307692em;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-2 {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n  -moz-box-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-3 {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n  -moz-box-flex: 3;\n  -ms-flex: 3;\n  flex: 3;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-4 {\n  -webkit-box-flex: 4;\n  -webkit-flex: 4;\n  -moz-box-flex: 4;\n  -ms-flex: 4;\n  flex: 4;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-5 {\n  -webkit-box-flex: 5;\n  -webkit-flex: 5;\n  -moz-box-flex: 5;\n  -ms-flex: 5;\n  flex: 5;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-6 {\n  -webkit-box-flex: 6;\n  -webkit-flex: 6;\n  -moz-box-flex: 6;\n  -ms-flex: 6;\n  flex: 6;\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error {\n  border-color: var(--VC-ERROR-BORDER);\n  background-color: var(--VC-ERROR-BG);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col {\n  color: var(--VC-RED);\n  border-color: var(--VC-ERROR-BORDER);\n}\n#__vconsole .vc-logbox .vc-table .vc-table-col-title {\n  font-weight: bold;\n}\n#__vconsole .vc-logbox.vc-actived {\n  display: block;\n}\n#__vconsole .vc-toolbar {\n  border-top: 1px solid var(--VC-FG-3);\n  line-height: 3em;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n#__vconsole .vc-toolbar .vc-tool {\n  display: none;\n  text-decoration: none;\n  color: var(--VC-FG-0);\n  width: 50%;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  position: relative;\n  -webkit-touch-callout: none;\n}\n#__vconsole .vc-toolbar .vc-tool.vc-toggle,\n#__vconsole .vc-toolbar .vc-tool.vc-global-tool {\n  display: block;\n}\n#__vconsole .vc-toolbar .vc-tool:active {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n#__vconsole .vc-toolbar .vc-tool:after {\n  content: " ";\n  position: absolute;\n  top: 0.53846154em;\n  bottom: 0.53846154em;\n  right: 0;\n  border-left: 1px solid var(--VC-FG-3);\n}\n#__vconsole .vc-toolbar .vc-tool-last:after {\n  border: none;\n}\n@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {\n  #__vconsole .vc-toolbar,\n  #__vconsole .vc-switch {\n    bottom: constant(safe-area-inset-bottom);\n    bottom: env(safe-area-inset-bottom);\n  }\n}\n#__vconsole.vc-toggle .vc-switch {\n  display: none;\n}\n#__vconsole.vc-toggle .vc-mask {\n  background: rgba(0, 0, 0, 0.6);\n  display: block;\n}\n#__vconsole.vc-toggle .vc-panel {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n@media (prefers-color-scheme: dark) {\n  #__vconsole:not([data-theme="light"]) {\n    --VC-BG-0: #191919;\n    --VC-BG-1: #1f1f1f;\n    --VC-BG-2: #232323;\n    --VC-BG-3: #2f2f2f;\n    --VC-BG-4: #606060;\n    --VC-BG-5: #2c2c2c;\n    --VC-FG-0: rgba(255, 255, 255, 0.8);\n    --VC-FG-HALF: rgba(255, 255, 255, 0.6);\n    --VC-FG-1: rgba(255, 255, 255, 0.5);\n    --VC-FG-2: rgba(255, 255, 255, 0.3);\n    --VC-FG-3: rgba(255, 255, 255, 0.05);\n    --VC-RED: #fa5151;\n    --VC-ORANGE: #c87d2f;\n    --VC-YELLOW: #cc9c00;\n    --VC-GREEN: #74a800;\n    --VC-LIGHTGREEN: #28b561;\n    --VC-BRAND: #07c160;\n    --VC-BLUE: #10aeff;\n    --VC-INDIGO: #1196ff;\n    --VC-PURPLE: #8183ff;\n    --VC-LINK: #7d90a9;\n    --VC-TEXTGREEN: #259c5c;\n    --VC-FG: white;\n    --VC-BG: black;\n    --VC-BG-COLOR-ACTIVE: #282828;\n    --VC-WARN-BG: #332700;\n    --VC-WARN-BORDER: #664e00;\n    --VC-ERROR-BG: #321010;\n    --VC-ERROR-BORDER: #642020;\n    --VC-DOM-TAG-NAME-COLOR: #5DB0D7;\n    --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;\n    --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;\n    --VC-CODE-KEY-FG: #e36eec;\n    --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;\n    --VC-CODE-FUNC-FG: #556af2;\n    --VC-CODE-NUMBER-FG: #9980ff;\n    --VC-CODE-STR-FG: #e93f3b;\n    --VC-CODE-NULL-FG: #808080;\n  }\n}\n#__vconsole[data-theme="dark"] {\n  --VC-BG-0: #191919;\n  --VC-BG-1: #1f1f1f;\n  --VC-BG-2: #232323;\n  --VC-BG-3: #2f2f2f;\n  --VC-BG-4: #606060;\n  --VC-BG-5: #2c2c2c;\n  --VC-FG-0: rgba(255, 255, 255, 0.8);\n  --VC-FG-HALF: rgba(255, 255, 255, 0.6);\n  --VC-FG-1: rgba(255, 255, 255, 0.5);\n  --VC-FG-2: rgba(255, 255, 255, 0.3);\n  --VC-FG-3: rgba(255, 255, 255, 0.05);\n  --VC-RED: #fa5151;\n  --VC-ORANGE: #c87d2f;\n  --VC-YELLOW: #cc9c00;\n  --VC-GREEN: #74a800;\n  --VC-LIGHTGREEN: #28b561;\n  --VC-BRAND: #07c160;\n  --VC-BLUE: #10aeff;\n  --VC-INDIGO: #1196ff;\n  --VC-PURPLE: #8183ff;\n  --VC-LINK: #7d90a9;\n  --VC-TEXTGREEN: #259c5c;\n  --VC-FG: white;\n  --VC-BG: black;\n  --VC-BG-COLOR-ACTIVE: #282828;\n  --VC-WARN-BG: #332700;\n  --VC-WARN-BORDER: #664e00;\n  --VC-ERROR-BG: #321010;\n  --VC-ERROR-BORDER: #642020;\n  --VC-DOM-TAG-NAME-COLOR: #5DB0D7;\n  --VC-DOM-ATTRIBUTE-NAME-COLOR: #9BBBDC;\n  --VC-DOM-ATTRIBUTE-VALUE-COLOR: #f29766;\n  --VC-CODE-KEY-FG: #e36eec;\n  --VC-CODE-PRIVATE-KEY-FG: #f4c5f7;\n  --VC-CODE-FUNC-FG: #556af2;\n  --VC-CODE-NUMBER-FG: #9980ff;\n  --VC-CODE-STR-FG: #e93f3b;\n  --VC-CODE-NULL-FG: #808080;\n}\n', ""]);
  }, function (e, t) {
    e.exports = '<div id="__vconsole" class="">\n  <div class="vc-switch">vConsole</div>\n  <div class="vc-mask">\n  </div>\n  <div class="vc-panel">\n    <div class="vc-tabbar">\n    </div>\n    <div class="vc-topbar">\n    </div>\n    <div class="vc-content">\n    </div>\n    <div class="vc-toolbar">\n      <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a>\n    </div>\n  </div>\n</div>';
  }, function (e, t) {
    e.exports = '<a class="vc-tab" data-tab="{{id}}" id="__vc_tab_{{id}}">{{name}}</a>';
  }, function (e, t) {
    e.exports = '<div class="vc-logbox" id="__vc_log_{{id}}">\n  \n</div>';
  }, function (e, t) {
    e.exports = '<a class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>';
  }, function (e, t) {
    e.exports = '<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>';
  }, function (e, t) {
    e.exports = '<div id="{{_id}}" class="vc-item vc-item-{{logType}} {{style}}">\n\t<div class="vc-item-content"></div>\n</div>';
  }, function (e, t) {
    e.exports = '<div class="vc-fold">\n  {{if (lineType == \'obj\')}}\n    <i class="vc-fold-outer">{{outer}}</i>\n    <div class="vc-fold-inner"></div>\n  {{else if (lineType == \'value\')}}\n    <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{else if (lineType == \'kv\')}}\n    <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{/if}}\n</div>';
  }, function (e, t) {
    e.exports = '<span>\n  <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n</span>';
  }, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, factory;factory = function factory(_exports, _query, tool, _log, _tabbox_default, _item_code) {
      "use strict";
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;var e = new WeakMap();return _getRequireWildcardCache = function _getRequireWildcardCache() {
          return e;
        }, e;
      }function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;var t = _getRequireWildcardCache();if (t && t.has(e)) return t.get(e);var n = {};if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
            }
          }
        }return n.default = e, t && t.set(e, n), n;
      }function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        })(e);
      }function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
      }function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
      }function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
      }function _get(e, t, n) {
        return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
          var o = _superPropBase(e, t);if (o) {
            var r = Object.getOwnPropertyDescriptor(o, t);return r.get ? r.get.call(n) : r.value;
          }
        })(e, t, n || e);
      }function _superPropBase(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e));) {}return e;
      }function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _setPrototypeOf(e, t);
      }function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }Object.defineProperty(_exports, "__esModule", { value: !0 }), _exports.default = void 0, _query = _interopRequireDefault(_query), tool = _interopRequireWildcard(tool), _log = _interopRequireDefault(_log), _tabbox_default = _interopRequireDefault(_tabbox_default), _item_code = _interopRequireDefault(_item_code);var filterText = "",
          checkFilterInLine = function checkFilterInLine(e) {
        return -1 === e.innerHTML.toUpperCase().indexOf(filterText.toUpperCase());
      },
          VConsoleDefaultTab = function (_VConsoleLogTab) {
        function VConsoleDefaultTab() {
          var e, t;_classCallCheck(this, VConsoleDefaultTab);for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) {
            o[r] = arguments[r];
          }return (t = _possibleConstructorReturn(this, (e = _getPrototypeOf(VConsoleDefaultTab)).call.apply(e, [this].concat(o)))).tplTabbox = _tabbox_default.default, t;
        }return _inherits(VConsoleDefaultTab, _VConsoleLogTab), _createClass(VConsoleDefaultTab, [{ key: "formatLine", value: function value(e) {
            return checkFilterInLine(e) ? _query.default.addClass(e, "hide") : _query.default.removeClass(e, "hide"), e;
          } }, { key: "onReady", value: function onReady() {
            var that = this;_get(_getPrototypeOf(VConsoleDefaultTab.prototype), "onReady", this).call(this), window.winKeys = Object.getOwnPropertyNames(window).sort(), window.keyTypes = {};for (var i = 0; i < winKeys.length; i++) {
              keyTypes[winKeys[i]] = _typeof(window[winKeys[i]]);
            }var cacheObj = {},
                ID_REGEX = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/,
                retrievePrecedingIdentifier = function retrievePrecedingIdentifier(e, t, n) {
              n = n || ID_REGEX;for (var o = [], r = t - 1; r >= 0 && n.test(e[r]); r--) {
                o.push(e[r]);
              }if (0 == o.length) {
                n = /\./;for (var i = t - 1; i >= 0 && n.test(e[i]); i--) {
                  o.push(e[i]);
                }
              }if (0 === o.length) {
                var a = e.match(/[\(\)\[\]\{\}]/gi) || [];return a[a.length - 1];
              }return o.reverse().join("");
            };_query.default.bind(_query.default.one(".vc-cmd-input"), "keyup", function (e) {
              var isDeleteKeyCode = 8 === e.keyCode || 46 === e.keyCode,
                  $prompted = _query.default.one(".vc-cmd-prompted");$prompted.style.display = "none", $prompted.innerHTML = "";var tempValue = this.value,
                  value = retrievePrecedingIdentifier(this.value, this.value.length);if (value && value.length > 0) {
                if (/\(/.test(value) && !isDeleteKeyCode) return void (_query.default.one(".vc-cmd-input").value += ")");if (/\[/.test(value) && !isDeleteKeyCode) return void (_query.default.one(".vc-cmd-input").value += "]");if (/\{/.test(value) && !isDeleteKeyCode) return void (_query.default.one(".vc-cmd-input").value += "}");if ("." === value) {
                  var key = retrievePrecedingIdentifier(tempValue, tempValue.length - 1);if (!cacheObj[key]) try {
                    cacheObj[key] = Object.getOwnPropertyNames(eval("(" + key + ")")).sort();
                  } catch (e) {}try {
                    for (var _i3 = 0; _i3 < cacheObj[key].length; _i3++) {
                      var $li = document.createElement("li"),
                          _key = cacheObj[key][_i3];$li.innerHTML = _key, $li.onclick = function () {
                        _query.default.one(".vc-cmd-input").value = "", _query.default.one(".vc-cmd-input").value = tempValue + this.innerHTML, $prompted.style.display = "none";
                      }, $prompted.appendChild($li);
                    }
                  } catch (e) {}
                } else if ("." !== value.substring(value.length - 1) && value.indexOf(".") < 0) {
                  for (var _i4 = 0; _i4 < winKeys.length; _i4++) {
                    if (winKeys[_i4].toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                      var _$li = document.createElement("li");_$li.innerHTML = winKeys[_i4], _$li.onclick = function () {
                        _query.default.one(".vc-cmd-input").value = "", _query.default.one(".vc-cmd-input").value = this.innerHTML, "function" == keyTypes[this.innerHTML] && (_query.default.one(".vc-cmd-input").value += "()"), $prompted.style.display = "none";
                      }, $prompted.appendChild(_$li);
                    }
                  }
                } else {
                  var arr = value.split(".");if (cacheObj[arr[0]]) {
                    cacheObj[arr[0]].sort();for (var _i5 = 0; _i5 < cacheObj[arr[0]].length; _i5++) {
                      var _$li2 = document.createElement("li"),
                          _key3 = cacheObj[arr[0]][_i5];_key3.indexOf(arr[1]) >= 0 && (_$li2.innerHTML = _key3, _$li2.onclick = function () {
                        _query.default.one(".vc-cmd-input").value = "", _query.default.one(".vc-cmd-input").value = tempValue + this.innerHTML, $prompted.style.display = "none";
                      }, $prompted.appendChild(_$li2));
                    }
                  }
                }if ($prompted.children.length > 0) {
                  var m = Math.min(200, 31 * $prompted.children.length);$prompted.style.display = "block", $prompted.style.height = m + "px", $prompted.style.marginTop = -m + "px";
                }
              } else $prompted.style.display = "none";
            }), _query.default.bind(_query.default.one(".vc-cmd", this.$tabbox), "submit", function (e) {
              e.preventDefault();var t = _query.default.one(".vc-cmd-input", e.target),
                  n = t.value;t.value = "", "" !== n && that.evalCommand(n);var o = _query.default.one(".vc-cmd-prompted");o && (o.style.display = "none");
            }), _query.default.bind(_query.default.one(".vc-cmd.vc-filter", this.$tabbox), "submit", function (e) {
              e.preventDefault();var t = _query.default.one(".vc-cmd.vc-filter .vc-cmd-input", e.target);filterText = t.value, _query.default.all(".vc-log>.vc-item").forEach(function (e) {
                checkFilterInLine(e) ? _query.default.addClass(e, "hide") : _query.default.removeClass(e, "hide");
              });
            });var code = "";code += "if (!!window) {", code += "window.__vConsole_cmd_result = undefined;", code += "window.__vConsole_cmd_error = false;", code += "}";var scriptList = document.getElementsByTagName("script"),
                nonce = "";scriptList.length > 0 && (nonce = scriptList[0].nonce || "");var script = document.createElement("SCRIPT");script.innerHTML = code, script.setAttribute("nonce", nonce), document.documentElement.appendChild(script), document.documentElement.removeChild(script);
          } }, { key: "mockConsole", value: function value() {
            _get(_getPrototypeOf(VConsoleDefaultTab.prototype), "mockConsole", this).call(this);var e = this;tool.isFunction(window.onerror) && (this.windowOnError = window.onerror), window.onerror = function (t, n, o, r, i) {
              var a = t;n && (a += "\n" + n.replace(location.origin, "")), (o || r) && (a += ":" + o + ":" + r);var l = !!i && !!i.stack && i.stack.toString() || "";e.printLog({ logType: "error", logs: [a, l], noOrigin: !0 }), tool.isFunction(e.windowOnError) && e.windowOnError.call(window, t, n, o, r, i);
            };
          } }, { key: "evalCommand", value: function value(e) {
            this.printLog({ logType: "log", content: _query.default.render(_item_code.default, { content: e, type: "input" }), style: "" });var t,
                n = void 0;try {
              n = eval.call(window, "(" + e + ")");
            } catch (t) {
              try {
                n = eval.call(window, e);
              } catch (e) {}
            }tool.isArray(n) || tool.isObject(n) ? t = this.getFoldedLine(n) : (tool.isNull(n) ? n = "null" : tool.isUndefined(n) ? n = "undefined" : tool.isFunction(n) ? n = "function()" : tool.isString(n) && (n = '"' + n + '"'), t = _query.default.render(_item_code.default, { content: n, type: "output" })), this.printLog({ logType: "log", content: t, style: "" }), window.winKeys = Object.getOwnPropertyNames(window).sort();
          } }]), VConsoleDefaultTab;
      }(_log.default),
          _default = VConsoleDefaultTab;_exports.default = _default, module.exports = exports.default;
    }, __WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(0), __webpack_require__(3), __webpack_require__(23), __webpack_require__(24)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
  }, function (e, t) {
    e.exports = '<div>\n  <div class="vc-log"></div>\n  <form class="vc-cmd">\n    <button class="vc-cmd-btn" type="submit">OK</button>\n    <ul class=\'vc-cmd-prompted\'></ul>\n    <div class="vc-cmd-input-wrap">\n      <textarea class="vc-cmd-input" placeholder="command..."></textarea>\n    </div>\n  </form>\n  <form class="vc-cmd vc-filter">\n    <button class="vc-cmd-btn" type="submit">filter</button>\n    <ul class=\'vc-cmd-prompted\'></ul>\n    <div class="vc-cmd-input-wrap">\n      <textarea class="vc-cmd-input" placeholder="filter..."></textarea>\n    </div>\n  </form>\n</div>\n';
  }, function (e, t) {
    e.exports = '<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>';
  }, function (e, t, n) {
    var o, r, i;r = [t, n(3), n(26)], void 0 === (i = "function" == typeof (o = function o(n, _o5, r) {
      "use strict";
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        })(e);
      }function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }function c(e, t) {
        return !t || "object" !== a(t) && "function" != typeof t ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
        }(e) : t;
      }function s(e, t, n) {
        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
          var o = function (e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e));) {}return e;
          }(e, t);if (o) {
            var r = Object.getOwnPropertyDescriptor(o, t);return r.get ? r.get.call(n) : r.value;
          }
        })(e, t, n || e);
      }function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }function u(e, t) {
        return (u = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, _o5 = i(_o5), r = i(r);var f = function (e) {
        function t() {
          var e, n;!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) {
            i[a] = arguments[a];
          }return (n = c(this, (e = d(t)).call.apply(e, [this].concat(i)))).tplTabbox = r.default, n.allowUnformattedLog = !1, n;
        }var n, o, i;return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && u(e, t);
        }(t, e), n = t, (o = [{ key: "onInit", value: function value() {
            s(d(t.prototype), "onInit", this).call(this), this.printSystemInfo();
          } }, { key: "printSystemInfo", value: function value() {
            var e = navigator.userAgent,
                t = "",
                n = e.match(/(ipod).*\s([\d_]+)/i),
                o = e.match(/(ipad).*\s([\d_]+)/i),
                r = e.match(/(iphone)\sos\s([\d_]+)/i),
                i = e.match(/(android)\s([\d\.]+)/i);t = "Unknown", i ? t = "Android " + i[2] : r ? t = "iPhone, iOS " + r[2].replace(/_/g, ".") : o ? t = "iPad, iOS " + o[2].replace(/_/g, ".") : n && (t = "iPod, iOS " + n[2].replace(/_/g, "."));var a = t,
                l = e.match(/MicroMessenger\/([\d\.]+)/i);t = "Unknown", l && l[1] ? (a += ", WeChat " + (t = l[1]), console.info("[system]", "System:", a)) : console.info("[system]", "System:", a), t = "Unknown", a = t = "https:" == location.protocol ? "HTTPS" : "http:" == location.protocol ? "HTTP" : location.protocol.replace(":", "");var c = e.toLowerCase().match(/ nettype\/([^ ]+)/g);t = "Unknown", c && c[0] ? (a += ", " + (t = (c = c[0].split("/"))[1]), console.info("[system]", "Network:", a)) : console.info("[system]", "Protocol:", a), console.info("[system]", "UA:", e), setTimeout(function () {
              var e = window.performance || window.msPerformance || window.webkitPerformance;if (e && e.timing) {
                var t = e.timing;t.navigationStart && console.info("[system]", "navigationStart:", t.navigationStart), t.navigationStart && t.domainLookupStart && console.info("[system]", "navigation:", t.domainLookupStart - t.navigationStart + "ms"), t.domainLookupEnd && t.domainLookupStart && console.info("[system]", "dns:", t.domainLookupEnd - t.domainLookupStart + "ms"), t.connectEnd && t.connectStart && (t.connectEnd && t.secureConnectionStart ? console.info("[system]", "tcp (ssl):", t.connectEnd - t.connectStart + "ms (" + (t.connectEnd - t.secureConnectionStart) + "ms)") : console.info("[system]", "tcp:", t.connectEnd - t.connectStart + "ms")), t.responseStart && t.requestStart && console.info("[system]", "request:", t.responseStart - t.requestStart + "ms"), t.responseEnd && t.responseStart && console.info("[system]", "response:", t.responseEnd - t.responseStart + "ms"), t.domComplete && t.domLoading && (t.domContentLoadedEventStart && t.domLoading ? console.info("[system]", "domComplete (domLoaded):", t.domComplete - t.domLoading + "ms (" + (t.domContentLoadedEventStart - t.domLoading) + "ms)") : console.info("[system]", "domComplete:", t.domComplete - t.domLoading + "ms")), t.loadEventEnd && t.loadEventStart && console.info("[system]", "loadEvent:", t.loadEventEnd - t.loadEventStart + "ms"), t.navigationStart && t.loadEventEnd && console.info("[system]", "total (DOM):", t.loadEventEnd - t.navigationStart + "ms (" + (t.domComplete - t.navigationStart) + "ms)");
              }
            }, 0);
          } }]) && l(n.prototype, o), i && l(n, i), t;
      }(_o5.default);n.default = f, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t) {
    e.exports = '<div>\n  <div class="vc-log"></div>\n</div>';
  }, function (e, t, n) {
    var o, r, i;r = [t, n(1), n(0), n(2), n(28), n(29), n(30)], void 0 === (i = "function" == typeof (o = function o(n, _o6, r, i, a, l, c) {
      "use strict";
      function s() {
        if ("function" != typeof WeakMap) return null;var e = new WeakMap();return s = function s() {
          return e;
        }, e;
      }function d(e) {
        return e && e.__esModule ? e : { default: e };
      }function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        })(e);
      }function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }function v(e, t) {
        return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
        }(e) : t;
      }function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }function h(e, t) {
        return (h = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, _o6 = d(_o6), r = function (e) {
        if (e && e.__esModule) return e;var t = s();if (t && t.has(e)) return t.get(e);var n = {};if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
            }
          }
        }return n.default = e, t && t.set(e, n), n;
      }(r), i = d(i), a = d(a), l = d(l), c = d(c);var b = function (e) {
        function t() {
          var e, n;!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) {
            i[l] = arguments[l];
          }return (n = v(this, (e = p(t)).call.apply(e, [this].concat(i)))).$tabbox = _o6.default.render(a.default, {}), n.$header = null, n.reqList = {}, n.domList = {}, n.isReady = !1, n.isShow = !1, n.isInBottom = !0, n._open = void 0, n._send = void 0, n.mockAjax(), n.mockFetch(), n;
        }var n, i, s;return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && h(e, t);
        }(t, e), n = t, (i = [{ key: "onRenderTab", value: function value(e) {
            e(this.$tabbox);
          } }, { key: "onAddTool", value: function value(e) {
            var t = this;e([{ name: "Clear", global: !1, onClick: function onClick(e) {
                t.clearLog();
              } }]);
          } }, { key: "onReady", value: function value() {
            var e = this;e.isReady = !0, this.renderHeader(), _o6.default.delegate(_o6.default.one(".vc-log", this.$tabbox), "click", ".vc-group-preview", function (t) {
              var n = this.dataset.reqid,
                  r = this.parentNode;_o6.default.hasClass(r, "vc-actived") ? (_o6.default.removeClass(r, "vc-actived"), e.updateRequest(n, { actived: !1 })) : (_o6.default.addClass(r, "vc-actived"), e.updateRequest(n, { actived: !0 })), t.preventDefault();
            });var t = _o6.default.one(".vc-content");for (var n in _o6.default.bind(t, "scroll", function (n) {
              e.isShow && (t.scrollTop + t.offsetHeight >= t.scrollHeight ? e.isInBottom = !0 : e.isInBottom = !1);
            }), e.reqList) {
              e.updateRequest(n, {});
            }
          } }, { key: "onRemove", value: function value() {
            window.XMLHttpRequest && (window.XMLHttpRequest.prototype.open = this._open, window.XMLHttpRequest.prototype.send = this._send, this._open = void 0, this._send = void 0);
          } }, { key: "onShow", value: function value() {
            this.isShow = !0, 1 == this.isInBottom && this.scrollToBottom();
          } }, { key: "onHide", value: function value() {
            this.isShow = !1;
          } }, { key: "onShowConsole", value: function value() {
            1 == this.isInBottom && this.scrollToBottom();
          } }, { key: "scrollToBottom", value: function value() {
            var e = _o6.default.one(".vc-content");e.scrollTop = e.scrollHeight - e.offsetHeight;
          } }, { key: "clearLog", value: function value() {
            for (var e in this.reqList = {}, this.domList) {
              this.domList[e].parentNode.removeChild(this.domList[e]), this.domList[e] = void 0;
            }this.domList = {}, this.renderHeader();
          } }, { key: "renderHeader", value: function value() {
            var e = Object.keys(this.reqList).length,
                t = _o6.default.render(l.default, { count: e }),
                n = _o6.default.one(".vc-log", this.$tabbox);this.$header ? this.$header.parentNode.replaceChild(t, this.$header) : n.parentNode.insertBefore(t, n), this.$header = t;
          } }, { key: "updateRequest", value: function value(e, t) {
            var n = Object.keys(this.reqList).length,
                i = this.reqList[e] || {};for (var a in t) {
              i[a] = t[a];
            }if (this.reqList[e] = i, this.isReady) {
              var l = { id: e, url: i.url, status: i.status, method: i.method || "-", costTime: i.costTime > 0 ? i.costTime + "ms" : "-", header: i.header || null, getData: i.getData || null, postData: i.postData || null, response: null, actived: !!i.actived };switch (i.responseType) {case "":case "text":
                  if (r.isString(i.response)) try {
                    l.response = JSON.parse(i.response), l.response = JSON.stringify(l.response, null, 1), l.response = r.htmlEncode(l.response);
                  } catch (e) {
                    l.response = r.htmlEncode(i.response);
                  } else void 0 !== i.response && (l.response = Object.prototype.toString.call(i.response));break;case "json":
                  void 0 !== i.response && (l.response = JSON.stringify(i.response, null, 1), l.response = r.htmlEncode(l.response));break;case "blob":case "document":case "arraybuffer":default:
                  void 0 !== i.response && (l.response = Object.prototype.toString.call(i.response));}0 == i.readyState || 1 == i.readyState ? l.status = "Pending" : 2 == i.readyState || 3 == i.readyState ? l.status = "Loading" : 4 == i.readyState || (l.status = "Unknown");var s = _o6.default.render(c.default, l),
                  d = this.domList[e];i.status >= 400 && _o6.default.addClass(_o6.default.one(".vc-group-preview", s), "vc-table-row-error"), d ? d.parentNode.replaceChild(s, d) : _o6.default.one(".vc-log", this.$tabbox).insertAdjacentElement("beforeend", s), this.domList[e] = s, Object.keys(this.reqList).length != n && this.renderHeader(), this.isInBottom && this.scrollToBottom();
            }
          } }, { key: "mockAjax", value: function value() {
            if (window.XMLHttpRequest) {
              var e = this,
                  t = window.XMLHttpRequest.prototype.open,
                  n = window.XMLHttpRequest.prototype.send;e._open = t, e._send = n, window.XMLHttpRequest.prototype.open = function () {
                var n = this,
                    o = [].slice.call(arguments),
                    r = o[0],
                    i = o[1],
                    a = e.getUniqueID(),
                    l = null;n._requestID = a, n._method = r, n._url = i;var c = n.onreadystatechange || function () {},
                    s = function s() {
                  var t = e.reqList[a] || {};if (t.readyState = n.readyState, t.status = 0, n.readyState > 1 && (t.status = n.status), t.responseType = n.responseType, 0 == n.readyState) t.startTime || (t.startTime = +new Date());else if (1 == n.readyState) t.startTime || (t.startTime = +new Date());else if (2 == n.readyState) {
                    t.header = {};for (var o = n.getAllResponseHeaders() || "", r = o.split("\n"), i = 0; i < r.length; i++) {
                      var s = r[i];if (s) {
                        var d = s.split(": "),
                            u = d[0],
                            f = d.slice(1).join(": ");t.header[u] = f;
                      }
                    }
                  } else 3 == n.readyState || (4 == n.readyState ? (clearInterval(l), t.endTime = +new Date(), t.costTime = t.endTime - (t.startTime || t.endTime), t.response = n.response) : clearInterval(l));return n._noVConsole || e.updateRequest(a, t), c.apply(n, arguments);
                };n.onreadystatechange = s;var d = -1;return l = setInterval(function () {
                  d != n.readyState && (d = n.readyState, s.call(n));
                }, 10), t.apply(n, o);
              }, window.XMLHttpRequest.prototype.send = function () {
                var t = this,
                    o = [].slice.call(arguments),
                    i = o[0],
                    a = e.reqList[t._requestID] || {};a.method = t._method.toUpperCase();var l = t._url.split("?");if (a.url = l.shift(), l.length > 0) {
                  a.getData = {}, l = (l = l.join("?")).split("&");var c = !0,
                      s = !1,
                      d = void 0;try {
                    for (var u, f = l[Symbol.iterator](); !(c = (u = f.next()).done); c = !0) {
                      var v = u.value;v = v.split("="), a.getData[v[0]] = decodeURIComponent(v[1]);
                    }
                  } catch (e) {
                    s = !0, d = e;
                  } finally {
                    try {
                      c || null == f.return || f.return();
                    } finally {
                      if (s) throw d;
                    }
                  }
                }if ("POST" == a.method) if (r.isString(i)) {
                  var p = i.split("&");a.postData = {};var h = !0,
                      b = !1,
                      m = void 0;try {
                    for (var g, y = p[Symbol.iterator](); !(h = (g = y.next()).done); h = !0) {
                      var _ = g.value;_ = _.split("="), a.postData[_[0]] = _[1];
                    }
                  } catch (e) {
                    b = !0, m = e;
                  } finally {
                    try {
                      h || null == y.return || y.return();
                    } finally {
                      if (b) throw m;
                    }
                  }
                } else r.isPlainObject(i) && (a.postData = i);return t._noVConsole || e.updateRequest(t._requestID, a), n.apply(t, o);
              };
            }
          } }, { key: "mockFetch", value: function value() {
            var e = window.fetch;if (e) {
              var t = this;window.fetch = function (n, o) {
                var i = t.getUniqueID();t.reqList[i] = {};var a = t.reqList[i] || {},
                    l = n.split("?");if (a.id = i, a.method = o.method || "GET", a.url = l.shift(), l.length > 0) {
                  a.getData = {}, l = (l = l.join("?")).split("&");var c = !0,
                      s = !1,
                      d = void 0;try {
                    for (var u, f = l[Symbol.iterator](); !(c = (u = f.next()).done); c = !0) {
                      var v = u.value;v = v.split("="), a.getData[v[0]] = v[1];
                    }
                  } catch (e) {
                    s = !0, d = e;
                  } finally {
                    try {
                      c || null == f.return || f.return();
                    } finally {
                      if (s) throw d;
                    }
                  }
                }if ("POST" == a.method) if (r.isString(data)) {
                  var p = data.split("&");a.postData = {};var h = !0,
                      b = !1,
                      m = void 0;try {
                    for (var g, y = p[Symbol.iterator](); !(h = (g = y.next()).done); h = !0) {
                      var _ = g.value;_ = _.split("="), a.postData[_[0]] = _[1];
                    }
                  } catch (e) {
                    b = !0, m = e;
                  } finally {
                    try {
                      h || null == y.return || y.return();
                    } finally {
                      if (b) throw m;
                    }
                  }
                } else r.isPlainObject(data) && (a.postData = data);return a.startTime || (a.startTime = +new Date()), e(n, o).then(function (e) {
                  return e.clone().json().then(function (t) {
                    a.endTime = +new Date(), a.costTime = a.endTime - (a.startTime || a.endTime), a.status = e.status, a.header = {};var n = !0,
                        o = !1,
                        r = void 0;try {
                      for (var i, l = e.headers.entries()[Symbol.iterator](); !(n = (i = l.next()).done); n = !0) {
                        var c = i.value;a.header[c[0]] = c[1];
                      }
                    } catch (e) {
                      o = !0, r = e;
                    } finally {
                      try {
                        n || null == l.return || l.return();
                      } finally {
                        if (o) throw r;
                      }
                    }a.response = t, a.readyState = 4;var s = e.headers.get("content-type");return a.responseType = s.includes("application/json") ? "json" : s.includes("text/html") ? "text" : "", t;
                  }), t.updateRequest(i, a), e;
                });
              };
            }
          } }, { key: "getUniqueID", value: function value() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
              var t = 16 * Math.random() | 0;return ("x" == e ? t : 3 & t | 8).toString(16);
            });
          } }]) && f(n.prototype, i), s && f(n, s), t;
      }(i.default);n.default = b, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t) {
    e.exports = '<div class="vc-table">\n  <div class="vc-log"></div>\n</div>';
  }, function (e, t) {
    e.exports = '<dl class="vc-table-row">\n  <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\n  <dd class="vc-table-col">Method</dd>\n  <dd class="vc-table-col">Status</dd>\n  <dd class="vc-table-col">Time</dd>\n</dl>';
  }, function (e, t) {
    e.exports = '<div class="vc-group {{actived ? \'vc-actived\' : \'\'}}">\n  <dl class="vc-table-row vc-group-preview" data-reqid="{{id}}">\n    <dd class="vc-table-col vc-table-col-4">{{url}}</dd>\n    <dd class="vc-table-col">{{method}}</dd>\n    <dd class="vc-table-col">{{status}}</dd>\n    <dd class="vc-table-col">{{costTime}}</dd>\n  </dl>\n  <div class="vc-group-detail">\n    {{if (header !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Headers</dt>\n      </dl>\n      {{for (var key in header)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (getData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Query String Parameters</dt>\n      </dl>\n      {{for (var key in getData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{getData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (postData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Form Data</dt>\n      </dl>\n      {{for (var key in postData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{postData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Response</dt>\n      </dl>\n      <div class="vc-table-row vc-left-border vc-small">\n        <pre class="vc-table-col vc-max-height vc-min-height">{{response || \'\'}}</pre>\n      </div>\n    </div>\n  </div>\n</div>';
  }, function (e, t, n) {
    var o, r, i;r = [t, n(32), n(33), n(2), n(35), n(36), n(0), n(1)], void 0 === (i = "function" == typeof (o = function o(n, _o7, r, i, a, l, c, s) {
      "use strict";
      function d() {
        if ("function" != typeof WeakMap) return null;var e = new WeakMap();return d = function d() {
          return e;
        }, e;
      }function u(e) {
        return e && e.__esModule ? e : { default: e };
      }function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        })(e);
      }function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
      }function b(e, t) {
        return (b = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, _o7 = u(_o7), i = u(i), a = u(a), l = u(l), c = function (e) {
        if (e && e.__esModule) return e;var t = d();if (t && t.has(e)) return t.get(e);var n = {};if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
            }
          }
        }return n.default = e, t && t.set(e, n), n;
      }(c), s = u(s);var m = function (e) {
        function t() {
          var e, n, r, i;!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);for (var l = arguments.length, c = new Array(l), d = 0; d < l; d++) {
            c[d] = arguments[d];
          }r = this, n = !(i = (e = p(t)).call.apply(e, [this].concat(c))) || "object" !== f(i) && "function" != typeof i ? h(r) : i;var u = h(n);return u.isInited = !1, u.node = {}, u.$tabbox = s.default.render(a.default, {}), u.nodes = [], u.activedElem = {}, u.observer = new _o7.default(function (e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t];u._isInVConsole(n.target) || u.onMutation(n);
            }
          }), n;
        }var n, r, i;return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && b(e, t);
        }(t, e), n = t, (r = [{ key: "onRenderTab", value: function value(e) {
            e(this.$tabbox);
          } }, { key: "onAddTool", value: function value(e) {
            var t = this;e([{ name: "Expand", global: !1, onClick: function onClick(e) {
                if (t.activedElem) if (s.default.hasClass(t.activedElem, "vc-toggle")) for (var n = 0; n < t.activedElem.childNodes.length; n++) {
                  var o = t.activedElem.childNodes[n];if (s.default.hasClass(o, "vcelm-l") && !s.default.hasClass(o, "vcelm-noc") && !s.default.hasClass(o, "vc-toggle")) {
                    s.default.one(".vcelm-node", o).click();break;
                  }
                } else s.default.one(".vcelm-node", t.activedElem).click();
              } }, { name: "Collapse", global: !1, onClick: function onClick(e) {
                t.activedElem && (s.default.hasClass(t.activedElem, "vc-toggle") ? s.default.one(".vcelm-node", t.activedElem).click() : t.activedElem.parentNode && s.default.hasClass(t.activedElem.parentNode, "vcelm-l") && s.default.one(".vcelm-node", t.activedElem.parentNode).click());
              } }]);
          } }, { key: "onShow", value: function value() {
            if (!this.isInited) {
              this.isInited = !0, this.node = this.getNode(document.documentElement);var e = this.renderView(this.node, s.default.one(".vc-log", this.$tabbox)),
                  t = s.default.one(".vcelm-node", e);t && t.click && t.click(), this.observer.observe(document.documentElement, { attributes: !0, childList: !0, characterData: !0, subtree: !0 });
            }
          } }, { key: "onRemove", value: function value() {
            this.observer.disconnect();
          } }, { key: "onMutation", value: function value(e) {
            switch (e.type) {case "childList":
                e.removedNodes.length > 0 && this.onChildRemove(e), e.addedNodes.length > 0 && this.onChildAdd(e);break;case "attributes":
                this.onAttributesChange(e);break;case "characterData":
                this.onCharacterDataChange(e);}
          } }, { key: "onChildRemove", value: function value(e) {
            var t = e.target;if (t.__vconsole_node) {
              for (var n = 0; n < e.removedNodes.length; n++) {
                var o = e.removedNodes[n].__vconsole_node;o && o.view && o.view.parentNode.removeChild(o.view);
              }this.getNode(t);
            }
          } }, { key: "onChildAdd", value: function value(e) {
            var t = e.target,
                n = t.__vconsole_node;if (n) {
              this.getNode(t), n.view && s.default.removeClass(n.view, "vcelm-noc");for (var o = 0; o < e.addedNodes.length; o++) {
                var r = e.addedNodes[o].__vconsole_node;if (r) if (null !== e.nextSibling) {
                  var i = e.nextSibling.__vconsole_node;i.view && this.renderView(r, i.view, "insertBefore");
                } else n.view && (n.view.lastChild ? this.renderView(r, n.view.lastChild, "insertBefore") : this.renderView(r, n.view));
              }
            }
          } }, { key: "onAttributesChange", value: function value(e) {
            var t = e.target.__vconsole_node;t && (t = this.getNode(e.target)).view && this.renderView(t, t.view, !0);
          } }, { key: "onCharacterDataChange", value: function value(e) {
            var t = e.target.__vconsole_node;t && (t = this.getNode(e.target)).view && this.renderView(t, t.view, !0);
          } }, { key: "renderView", value: function value(e, t, n) {
            var o = this,
                r = new l.default(e).get();switch (e.view = r, s.default.delegate(r, "click", ".vcelm-node", function (t) {
              t.stopPropagation();var n = this.parentNode;if (!s.default.hasClass(n, "vcelm-noc")) {
                o.activedElem = n, s.default.hasClass(n, "vc-toggle") ? s.default.removeClass(n, "vc-toggle") : s.default.addClass(n, "vc-toggle");for (var r = -1, i = 0; i < n.children.length; i++) {
                  var a = n.children[i];s.default.hasClass(a, "vcelm-l") && (r++, a.children.length > 0 || (e.childNodes[r] ? o.renderView(e.childNodes[r], a, "replace") : a.style.display = "none"));
                }
              }
            }), n) {case "replace":
                t.parentNode.replaceChild(r, t);break;case "insertBefore":
                t.parentNode.insertBefore(r, t);break;default:
                t.appendChild(r);}return r;
          } }, { key: "getNode", value: function value(e) {
            if (!this._isIgnoredElement(e)) {
              var t = e.__vconsole_node || {};if (t.nodeType = e.nodeType, t.nodeName = e.nodeName, t.tagName = e.tagName || "", t.textContent = "", t.nodeType != e.TEXT_NODE && t.nodeType != e.DOCUMENT_TYPE_NODE || (t.textContent = e.textContent), t.id = e.id || "", t.className = e.className || "", t.attributes = [], e.hasAttributes && e.hasAttributes()) for (var n = 0; n < e.attributes.length; n++) {
                t.attributes.push({ name: e.attributes[n].name, value: e.attributes[n].value || "" });
              }if (t.childNodes = [], e.childNodes.length > 0) for (var o = 0; o < e.childNodes.length; o++) {
                var r = this.getNode(e.childNodes[o]);r && t.childNodes.push(r);
              }return e.__vconsole_node = t, t;
            }
          } }, { key: "_isIgnoredElement", value: function value(e) {
            return e.nodeType == e.TEXT_NODE && "" == e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g, "");
          } }, { key: "_isInVConsole", value: function value(e) {
            for (var t = e; null != t;) {
              if ("__vconsole" == t.id) return !0;t = t.parentNode || void 0;
            }return !1;
          } }]) && v(n.prototype, r), i && v(n, i), t;
      }(i.default);n.default = m, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t) {
    var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        o = window.WeakMap;if (void 0 === o) {
      var r = Object.defineProperty,
          i = Date.now() % 1e9;(o = function o() {
        this.name = "__st" + (1e9 * Math.random() >>> 0) + i++ + "__";
      }).prototype = { set: function set(e, t) {
          var n = e[this.name];return n && n[0] === e ? n[1] = t : r(e, this.name, { value: [e, t], writable: !0 }), this;
        }, get: function get(e) {
          var t;return (t = e[this.name]) && t[0] === e ? t[1] : void 0;
        }, delete: function _delete(e) {
          var t = e[this.name];if (!t) return !1;var n = t[0] === e;return t[0] = t[1] = void 0, n;
        }, has: function has(e) {
          var t = e[this.name];return !!t && t[0] === e;
        } };
    }var a = new o(),
        l = window.msSetImmediate;if (!l) {
      var c = [],
          s = String(Math.random());window.addEventListener("message", function (e) {
        if (e.data === s) {
          var t = c;c = [], t.forEach(function (e) {
            e();
          });
        }
      }), l = function l(e) {
        c.push(e), window.postMessage(s, "*");
      };
    }var d = !1,
        u = [];function f() {
      d = !1;var e = u;u = [], e.sort(function (e, t) {
        return e.uid_ - t.uid_;
      });var t = !1;e.forEach(function (e) {
        var n = e.takeRecords();!function (e) {
          e.nodes_.forEach(function (t) {
            var n = a.get(t);n && n.forEach(function (t) {
              t.observer === e && t.removeTransientObservers();
            });
          });
        }(e), n.length && (e.callback_(n, e), t = !0);
      }), t && f();
    }function v(e, t) {
      for (var n = e; n; n = n.parentNode) {
        var o = a.get(n);if (o) for (var r = 0; r < o.length; r++) {
          var i = o[r],
              l = i.options;if (n === e || l.subtree) {
            var c = t(l);c && i.enqueue(c);
          }
        }
      }
    }var p,
        h,
        b = 0;function m(e) {
      this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++b;
    }function g(e, t) {
      this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
    }function y(e, t) {
      return p = new g(e, t);
    }function _(e) {
      return h || ((n = new g((t = p).type, t.target)).addedNodes = t.addedNodes.slice(), n.removedNodes = t.removedNodes.slice(), n.previousSibling = t.previousSibling, n.nextSibling = t.nextSibling, n.attributeName = t.attributeName, n.attributeNamespace = t.attributeNamespace, n.oldValue = t.oldValue, (h = n).oldValue = e, h);var t, n;
    }function w(e, t) {
      return e === t ? e : h && ((n = e) === h || n === p) ? h : null;var n;
    }function C(e, t, n) {
      this.observer = e, this.target = t, this.options = n, this.transientObservedNodes = [];
    }m.prototype = { observe: function observe(e, t) {
        var n;if (n = e, e = window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(n) || n, !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError();var o,
            r = a.get(e);r || a.set(e, r = []);for (var i = 0; i < r.length; i++) {
          if (r[i].observer === this) {
            (o = r[i]).removeListeners(), o.options = t;break;
          }
        }o || (o = new C(this, e, t), r.push(o), this.nodes_.push(e)), o.addListeners();
      }, disconnect: function disconnect() {
        this.nodes_.forEach(function (e) {
          for (var t = a.get(e), n = 0; n < t.length; n++) {
            var o = t[n];if (o.observer === this) {
              o.removeListeners(), t.splice(n, 1);break;
            }
          }
        }, this), this.records_ = [];
      }, takeRecords: function takeRecords() {
        var e = this.records_;return this.records_ = [], e;
      } }, C.prototype = { enqueue: function enqueue(e) {
        var t,
            n = this.observer.records_,
            o = n.length;if (n.length > 0) {
          var r = w(n[o - 1], e);if (r) return void (n[o - 1] = r);
        } else t = this.observer, u.push(t), d || (d = !0, l(f));n[o] = e;
      }, addListeners: function addListeners() {
        this.addListeners_(this.target);
      }, addListeners_: function addListeners_(e) {
        var t = this.options;t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0);
      }, removeListeners: function removeListeners() {
        this.removeListeners_(this.target);
      }, removeListeners_: function removeListeners_(e) {
        var t = this.options;t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0);
      }, addTransientObserver: function addTransientObserver(e) {
        if (e !== this.target) {
          this.addListeners_(e), this.transientObservedNodes.push(e);var t = a.get(e);t || a.set(e, t = []), t.push(this);
        }
      }, removeTransientObservers: function removeTransientObservers() {
        var e = this.transientObservedNodes;this.transientObservedNodes = [], e.forEach(function (e) {
          this.removeListeners_(e);for (var t = a.get(e), n = 0; n < t.length; n++) {
            if (t[n] === this) {
              t.splice(n, 1);break;
            }
          }
        }, this);
      }, handleEvent: function handleEvent(e) {
        switch (e.stopImmediatePropagation(), e.type) {case "DOMAttrModified":
            var t = e.attrName,
                n = e.relatedNode.namespaceURI,
                o = e.target;(i = new y("attributes", o)).attributeName = t, i.attributeNamespace = n;var r = null;"undefined" != typeof MutationEvent && e.attrChange === MutationEvent.ADDITION || (r = e.prevValue), v(o, function (e) {
              if (e.attributes && (!e.attributeFilter || !e.attributeFilter.length || -1 !== e.attributeFilter.indexOf(t) || -1 !== e.attributeFilter.indexOf(n))) return e.attributeOldValue ? _(r) : i;
            });break;case "DOMCharacterDataModified":
            var i = y("characterData", o = e.target);r = e.prevValue;v(o, function (e) {
              if (e.characterData) return e.characterDataOldValue ? _(r) : i;
            });break;case "DOMNodeRemoved":
            this.addTransientObserver(e.target);case "DOMNodeInserted":
            o = e.relatedNode;var a,
                l,
                c = e.target;"DOMNodeInserted" === e.type ? (a = [c], l = []) : (a = [], l = [c]);var s = c.previousSibling,
                d = c.nextSibling;(i = y("childList", o)).addedNodes = a, i.removedNodes = l, i.previousSibling = s, i.nextSibling = d, v(o, function (e) {
              if (e.childList) return i;
            });}p = h = void 0;
      } }, n || (n = m), e.exports = n;
  }, function (e, t, n) {
    var o = n(34);"string" == typeof o && (o = [[e.i, o, ""]]);var r = { insert: "head", singleton: !1 };n(5)(o, r);o.locals && (e.exports = o.locals);
  }, function (e, t, n) {
    (e.exports = n(4)(!1)).push([e.i, '/* color */\n.vcelm-node {\n  color: var(--VC-DOM-TAG-NAME-COLOR);\n}\n.vcelm-k {\n  color: var(--VC-DOM-ATTRIBUTE-NAME-COLOR);\n}\n.vcelm-v {\n  color: var(--VC-DOM-ATTRIBUTE-VALUE-COLOR);\n}\n/* layout */\n.vcelm-l {\n  padding-left: 8px;\n  position: relative;\n  word-wrap: break-word;\n  line-height: 1;\n}\n/*.vcelm-l.vcelm-noc {\n  padding-left: 0;\n}*/\n.vcelm-l.vc-toggle > .vcelm-node {\n  display: block;\n}\n.vcelm-l .vcelm-node:active {\n  background-color: var(--VC-BG-COLOR-ACTIVE);\n}\n.vcelm-l.vcelm-noc .vcelm-node:active {\n  background-color: transparent;\n}\n.vcelm-t {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/* level */\n.vcelm-l .vcelm-l {\n  display: none;\n}\n.vcelm-l.vc-toggle > .vcelm-l {\n  margin-left: 4px;\n  display: block;\n}\n/* arrow */\n.vcelm-l:before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 6px;\n  left: 3px;\n  width: 0;\n  height: 0;\n  border: transparent solid 3px;\n  border-left-color: var(--VC-FG-1);\n}\n.vcelm-l.vc-toggle:before {\n  display: block;\n  top: 6px;\n  left: 0;\n  border-top-color: var(--VC-FG-1);\n  border-left-color: transparent;\n}\n.vcelm-l.vcelm-noc:before {\n  display: none;\n}\n', ""]);
  }, function (e, t) {
    e.exports = '<div>\n  <div class="vc-log"></div>\n</div>';
  }, function (e, t, n) {
    var o, r, i;r = [t, n(37), n(38), n(0), n(1)], void 0 === (i = "function" == typeof (o = function o(n, _o8, r, i, a) {
      "use strict";
      function l() {
        if ("function" != typeof WeakMap) return null;var e = new WeakMap();return l = function l() {
          return e;
        }, e;
      }function c(e) {
        return e && e.__esModule ? e : { default: e };
      }function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, _o8 = c(_o8), r = c(r), i = function (e) {
        if (e && e.__esModule) return e;var t = l();if (t && t.has(e)) return t.get(e);var n = {};if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
            }
          }
        }return n.default = e, t && t.set(e, n), n;
      }(i), a = c(a);var d = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.node = t, this.view = this._create(this.node);
        }var t, n, i;return t = e, (n = [{ key: "get", value: function value() {
            return this.view;
          } }, { key: "_create", value: function value(e, t) {
            var n = document.createElement("DIV");switch (a.default.addClass(n, "vcelm-l"), e.nodeType) {case n.ELEMENT_NODE:
                this._createElementNode(e, n);break;case n.TEXT_NODE:
                this._createTextNode(e, n);break;case n.COMMENT_NODE:case n.DOCUMENT_NODE:case n.DOCUMENT_TYPE_NODE:case n.DOCUMENT_FRAGMENT_NODE:}return n;
          } }, { key: "_createTextNode", value: function value(e, t) {
            a.default.addClass(t, "vcelm-t vcelm-noc"), e.textContent && t.appendChild(function (e) {
              return document.createTextNode(e);
            }(e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")));
          } }, { key: "_createElementNode", value: function value(e, t) {
            var n,
                i = (n = (n = e.tagName) ? n.toLowerCase() : "", ["br", "hr", "img", "input", "link", "meta"].indexOf(n) > -1),
                l = i;0 == e.childNodes.length && (l = !0);var c = a.default.render(_o8.default, { node: e }),
                s = a.default.render(r.default, { node: e });if (l) a.default.addClass(t, "vcelm-noc"), t.appendChild(c), i || t.appendChild(s);else {
              t.appendChild(c);for (var d = 0; d < e.childNodes.length; d++) {
                var u = document.createElement("DIV");a.default.addClass(u, "vcelm-l"), t.appendChild(u);
              }i || t.appendChild(s);
            }
          } }]) && s(t.prototype, n), i && s(t, i), e;
      }();n.default = d, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t) {
    e.exports = '<span class="vcelm-node">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\n  <i class="vcelm-k">\n    {{for (var i = 0; i < node.attributes.length; i++)}}\n      {{if (node.attributes[i].value !== \'\')}}\n        {{node.attributes[i].name}}="<i class="vcelm-v">{{node.attributes[i].value}}</i>"{{else}}\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>';
  }, function (e, t) {
    e.exports = '<span class="vcelm-node">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>';
  }, function (e, t, n) {
    var o, r, i;r = [t, n(2), n(40), n(41), n(0), n(1)], void 0 === (i = "function" == typeof (o = function o(n, _o9, r, i, a, l) {
      "use strict";
      function c() {
        if ("function" != typeof WeakMap) return null;var e = new WeakMap();return c = function c() {
          return e;
        }, e;
      }function s(e) {
        return e && e.__esModule ? e : { default: e };
      }function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return typeof e === "undefined" ? "undefined" : _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
        })(e);
      }function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }function f(e, t) {
        return !t || "object" !== d(t) && "function" != typeof t ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
        }(e) : t;
      }function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }function p(e, t) {
        return (p = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, _o9 = s(_o9), r = s(r), i = s(i), a = function (e) {
        if (e && e.__esModule) return e;var t = c();if (t && t.has(e)) return t.get(e);var n = {};if (null != e) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var r in e) {
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;i && (i.get || i.set) ? Object.defineProperty(n, r, i) : n[r] = e[r];
            }
          }
        }return n.default = e, t && t.set(e, n), n;
      }(a), l = s(l);var h = function (e) {
        function t() {
          var e, n;!function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) {
            i[a] = arguments[a];
          }return (n = f(this, (e = v(t)).call.apply(e, [this].concat(i)))).$tabbox = l.default.render(r.default, {}), n.currentType = "", n.typeNameMap = { cookies: "Cookies", localstorage: "LocalStorage", sessionstorage: "SessionStorage" }, n;
        }var n, o, c;return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && p(e, t);
        }(t, e), n = t, (o = [{ key: "onRenderTab", value: function value(e) {
            e(this.$tabbox);
          } }, { key: "onAddTopBar", value: function value(e) {
            for (var t = this, n = ["Cookies", "LocalStorage", "SessionStorage"], o = [], r = 0; r < n.length; r++) {
              o.push({ name: n[r], data: { type: n[r].toLowerCase() }, className: "", onClick: function onClick() {
                  if (l.default.hasClass(this, "vc-actived")) return !1;t.currentType = this.dataset.type, t.renderStorage();
                } });
            }o[0].className = "vc-actived", e(o);
          } }, { key: "onAddTool", value: function value(e) {
            var t = this;e([{ name: "Refresh", global: !1, onClick: function onClick(e) {
                t.renderStorage();
              } }, { name: "Clear", global: !1, onClick: function onClick(e) {
                t.clearLog();
              } }]);
          } }, { key: "onReady", value: function value() {} }, { key: "onShow", value: function value() {
            "" == this.currentType && (this.currentType = "cookies", this.renderStorage());
          } }, { key: "clearLog", value: function value() {
            if (this.currentType && window.confirm && !window.confirm("Remove all " + this.typeNameMap[this.currentType] + "?")) return !1;switch (this.currentType) {case "cookies":
                this.clearCookieList();break;case "localstorage":
                this.clearLocalStorageList();break;case "sessionstorage":
                this.clearSessionStorageList();break;default:
                return !1;}this.renderStorage();
          } }, { key: "renderStorage", value: function value() {
            var e = [];switch (this.currentType) {case "cookies":
                e = this.getCookieList();break;case "localstorage":
                e = this.getLocalStorageList();break;case "sessionstorage":
                e = this.getSessionStorageList();break;default:
                return !1;}var t = l.default.one(".vc-log", this.$tabbox);if (0 == e.length) t.innerHTML = "";else {
              for (var n = 0; n < e.length; n++) {
                e[n].name = a.htmlEncode(e[n].name), e[n].value = a.htmlEncode(e[n].value);
              }t.innerHTML = l.default.render(i.default, { list: e }, !0);
            }
          } }, { key: "getCookieList", value: function value() {
            if (!document.cookie || !navigator.cookieEnabled) return [];for (var e = [], t = document.cookie.split(";"), n = 0; n < t.length; n++) {
              var o = t[n].split("="),
                  r = o.shift().replace(/^ /, ""),
                  i = o.join("=");try {
                r = decodeURIComponent(r), i = decodeURIComponent(i);
              } catch (e) {
                console.log(e, r, i);
              }e.push({ name: r, value: i });
            }return e;
          } }, { key: "getLocalStorageList", value: function value() {
            if (!window.localStorage) return [];try {
              for (var e = [], t = 0; t < localStorage.length; t++) {
                var n = localStorage.key(t),
                    o = localStorage.getItem(n);e.push({ name: n, value: o });
              }return e;
            } catch (e) {
              return [];
            }
          } }, { key: "getSessionStorageList", value: function value() {
            if (!window.sessionStorage) return [];try {
              for (var e = [], t = 0; t < sessionStorage.length; t++) {
                var n = sessionStorage.key(t),
                    o = sessionStorage.getItem(n);e.push({ name: n, value: o });
              }return e;
            } catch (e) {
              return [];
            }
          } }, { key: "clearCookieList", value: function value() {
            if (document.cookie && navigator.cookieEnabled) {
              for (var e = window.location.hostname, t = this.getCookieList(), n = 0; n < t.length; n++) {
                var o = t[n].name;document.cookie = "".concat(o, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"), document.cookie = "".concat(o, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"), document.cookie = "".concat(o, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.").concat(e.split(".").slice(-2).join("."));
              }this.renderStorage();
            }
          } }, { key: "clearLocalStorageList", value: function value() {
            if (window.localStorage) try {
              localStorage.clear(), this.renderStorage();
            } catch (e) {
              alert("localStorage.clear() fail.");
            }
          } }, { key: "clearSessionStorageList", value: function value() {
            if (window.sessionStorage) try {
              sessionStorage.clear(), this.renderStorage();
            } catch (e) {
              alert("sessionStorage.clear() fail.");
            }
          } }]) && u(n.prototype, o), c && u(n, c), t;
      }(_o9.default);n.default = h, e.exports = t.default;
    }) ? o.apply(t, r) : o) || (e.exports = i);
  }, function (e, t) {
    e.exports = '<div class="vc-table">\n  <div class="vc-log"></div>\n</div>';
  }, function (e, t) {
    e.exports = '<div>\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">Name</dd>\n    <dd class="vc-table-col vc-table-col-2">Value</dd>\n  </dl>\n  {{for (var i = 0; i < list.length; i++)}}\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">{{list[i].name}}</dd>\n    <dd class="vc-table-col vc-table-col-2">{{list[i].value}}</dd>\n  </dl>\n  {{/for}}\n</div>';
  }]);
});
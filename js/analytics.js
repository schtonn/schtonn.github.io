'use strict';
var _typeof2 = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t;
    } : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, _typeof = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (t) {
        return void 0 === t ? 'undefined' : _typeof2(t);
    } : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : void 0 === t ? 'undefined' : _typeof2(t);
    };
!function () {
    function t(t, e) {
        t = t.split('.');
        var n, r = d;
        t[0] in r || void 0 === r.execScript || r.execScript('var ' + t[0]);
        for (; t.length && (n = t.shift());)
            t.length || void 0 === e ? r = r[n] && r[n] !== Object.prototype[n] ? r[n] : r[n] = {} : r[n] = e;
    }
    function u(t, e) {
        for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]);
    }
    function i(t) {
        for (var e in t)
            if (t.hasOwnProperty(e))
                return 1;
    }
    function o(t, e) {
        v.addEventListener ? v.addEventListener(t, e, !1) : v.attachEvent && v.attachEvent('on' + t, e);
    }
    function a() {
        e.TAGGING = e.TAGGING || [], e.TAGGING[1] = !0;
    }
    function s(t, e) {
        'protocol' !== (e = e && String(e).toLowerCase()) && 'port' !== e || (t.protocol = l(t.protocol) || l(p.location.protocol)), 'port' === e ? t.port = String(Number(t.hostname ? t.port : p.location.port) || ('http' == t.protocol ? 80 : 'https' == t.protocol ? 443 : '')) : 'host' === e && (t.hostname = (t.hostname || p.location.hostname).replace(w, '').toLowerCase());
        var n = l(t.protocol);
        switch (e = e && String(e).toLowerCase()) {
        case 'url_no_fragment':
            e = '', t && t.href && (e = (e = t.href.indexOf('#')) < 0 ? t.href : t.href.substr(0, e)), t = e;
            break;
        case 'protocol':
            t = n;
            break;
        case 'host':
            t = t.hostname.replace(w, '').toLowerCase();
            break;
        case 'port':
            t = String(Number(t.port) || ('http' == n ? 80 : 'https' == n ? 443 : ''));
            break;
        case 'path':
            t.pathname || t.hostname || a();
            t:
                if (e = (t = (t = '/' == t.pathname.substr(0, 1) ? t.pathname : '/' + t.pathname).split('/'))[t.length - 1], n = [], Array.prototype.indexOf)
                    e = n.indexOf(e), e = 'number' == typeof e ? e : -1;
                else {
                    for (var r = 0; r < n.length; r++)
                        if (n[r] === e) {
                            e = r;
                            break t;
                        }
                    e = -1;
                }
            0 <= e && (t[t.length - 1] = ''), t = t.join('/');
            break;
        case 'query':
            t = t.search.replace('?', '');
            break;
        case 'extension':
            t = (t = 1 < (t = t.pathname.split('.')).length ? t[t.length - 1] : '').split('/')[0];
            break;
        case 'fragment':
            t = t.hash.replace('#', '');
            break;
        default:
            t = t && t.href;
        }
        return t;
    }
    function c(t) {
        var e = v.createElement('a');
        t && (e.href = t);
        var n = e.pathname;
        return '/' !== n[0] && (t || a(), n = '/' + n), t = e.hostname.replace(w, ''), {
            href: e.href,
            protocol: e.protocol,
            host: e.host,
            hostname: t,
            pathname: n,
            search: e.search,
            hash: e.hash,
            port: e.port
        };
    }
    function l(t) {
        return t ? t.replace(':', '').toLowerCase() : '';
    }
    var f, g, h, d = this || self, p = window, v = document, m = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, e = {}, w = /:[0-9]+$/;
    function y() {
        for (var t = f, e = {}, n = 0; n < t.length; ++n)
            e[t[n]] = n;
        return e;
    }
    function b() {
        var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return (t += t.toLowerCase() + '0123456789-_') + '.';
    }
    function _(t) {
        f = f || b(), g = g || y();
        for (var e = [], n = 0; n < t.length; n += 3) {
            var r = n + 1 < t.length, a = n + 2 < t.length, o = t.charCodeAt(n), i = r ? t.charCodeAt(n + 1) : 0, s = a ? t.charCodeAt(n + 2) : 0, c = o >> 2;
            o = (3 & o) << 4 | i >> 4, i = (15 & i) << 2 | s >> 6, s &= 63, a || (s = 64, r || (i = 64)), e.push(f[c], f[o], f[i], f[s]);
        }
        return e.join('');
    }
    function k(r) {
        function t(t) {
            for (; a < r.length;) {
                var e = r.charAt(a++), n = g[e];
                if (null != n)
                    return n;
                if (!/^[\s\xa0]*$/.test(e))
                    throw Error('Unknown base64 encoding at char: ' + e);
            }
            return t;
        }
        f = f || b(), g = g || y();
        for (var e = '', a = 0;;) {
            var n = t(-1), o = t(0), i = t(64), s = t(64);
            if (64 === s && -1 === n)
                return e;
            e += String.fromCharCode(n << 2 | o >> 4), 64 != i && (e += String.fromCharCode(o << 4 & 240 | i >> 2), 64 != s && (e += String.fromCharCode(i << 6 & 192 | s)));
        }
    }
    function O(t, e, n) {
        for (var r = x().decorators, a = {}, o = 0; o < r.length; ++o) {
            var i, s = r[o];
            if (i = !n || s.forms)
                t: {
                    var c = t;
                    if ((i = s.domains) && (s.sameHost || c !== v.location.hostname))
                        for (var l = 0; l < i.length; l++)
                            if (i[l] instanceof RegExp) {
                                if (i[l].test(c)) {
                                    i = !0;
                                    break t;
                                }
                            } else if (0 <= c.indexOf(i[l])) {
                                i = !0;
                                break t;
                            }
                    i = !1;
                }
            i && (null == (i = s.placement) && (i = s.fragment ? 2 : 1), i === e && u(a, s.callback()));
        }
        return a;
    }
    var x = function () {
            var t = {}, e = p.google_tag_data;
            return p.google_tag_data = void 0 === e ? t : e, (e = (t = p.google_tag_data).gl) && e.decorators || (e = { decorators: [] }, t.gl = e), e;
        }, S = /(.*?)\*(.*?)\*(.*)/, T = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function C(t) {
        return new RegExp('(.*?)(^|&)' + t + '=([^&]*)&?(.*)');
    }
    function j(t) {
        var e, n = [];
        for (e in t)
            if (t.hasOwnProperty(e)) {
                var r = t[e];
                void 0 !== r && r == r && null !== r && '[object Object]' !== r.toString() && (n.push(e), n.push(_(String(r))));
            }
        return t = n.join('*'), ["1",A(t),t].join('*');
    }
    var A = function (t, e) {
        if (t = [window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1e3)-(void 0===e?0:e),t].join('*'), !(e = h)) {
            e = Array(256);
            for (var n = 0; n < 256; n++) {
                for (var r = n, a = 0; a < 8; a++)
                    r = 1 & r ? r >>> 1 ^ 3988292384 : r >>> 1;
                e[n] = r;
            }
        }
        for (h = e, e = 4294967295, n = 0; n < t.length; n++)
            e = e >>> 8 ^ h[255 & (e ^ t.charCodeAt(n))];
        return ((-1 ^ e) >>> 0).toString(36);
    };
    function N(t, e) {
        if (t = C(t).exec(e)) {
            var n = t[2], r = t[4];
            e = t[1], r && (e = e + n + r);
        }
        return e;
    }
    function E(t) {
        var e = void 0 === e ? 3 : e;
        try {
            if (t) {
                t: {
                    for (var n = 0; n < 3; ++n) {
                        var r = S.exec(t);
                        if (r) {
                            var a = r;
                            break t;
                        }
                        t = decodeURIComponent(t);
                    }
                    a = void 0;
                }
                if (a && '1' === a[1]) {
                    var o = a[2], i = a[3];
                    t: {
                        for (a = 0; a < e; ++a)
                            if (o === A(i, a)) {
                                var s = !0;
                                break t;
                            }
                        s = !1;
                    }
                    if (s) {
                        e = {};
                        var c = i ? i.split('*') : [];
                        for (i = 0; i < c.length; i += 2)
                            e[c[i]] = k(c[i + 1]);
                        return e;
                    }
                }
            }
        } catch (t) {
        }
    }
    function I(n, t, e, r) {
        function a(t) {
            var e = (t = N(n, t)).charAt(t.length - 1);
            return t && '&' !== e && (t += '&'), t + s;
        }
        r = void 0 !== r && r;
        var o = T.exec(e);
        if (!o)
            return '';
        e = o[1];
        var i = o[2] || '';
        o = o[3] || '';
        var s = n + '=' + t;
        return r ? o = '#' + a(o.substring(1)) : i = '?' + a(i.substring(1)), '' + e + i + o;
    }
    function R(t, e) {
        var n = 'FORM' === (t.tagName || '').toUpperCase(), r = O(e, 1, n), a = O(e, 2, n);
        for (var o in (e = O(e, 3, n), i(r) && (r = j(r), n ? P('_gl', r, t) : $('_gl', r, t, !1)), !n && i(a) && $('_gl', n = j(a), t, !0), e))
            e.hasOwnProperty(o) && L(o, e[o], t);
    }
    function L(t, e, n, r) {
        if (n.tagName) {
            if ('a' === n.tagName.toLowerCase())
                return $(t, e, n, r);
            if ('form' === n.tagName.toLowerCase())
                return P(t, e, n);
        }
        if ('string' == typeof n)
            return I(t, e, n, r);
    }
    function $(t, e, n, r) {
        n.href && (t = I(t, e, n.href, void 0 !== r && r), m.test(t) && (n.href = t));
    }
    function P(t, e, n) {
        if (n && n.action) {
            var r = (n.method || '').toLowerCase();
            if ('get' === r) {
                r = n.childNodes || [];
                for (var a = !1, o = 0; o < r.length; o++) {
                    var i = r[o];
                    if (i.name === t) {
                        i.setAttribute('value', e), a = !0;
                        break;
                    }
                }
                a || ((r = v.createElement('input')).setAttribute('type', 'hidden'), r.setAttribute('name', t), r.setAttribute('value', e), n.appendChild(r));
            } else
                'post' === r && (t = I(t, e, n.action), m.test(t) && (n.action = t));
        }
    }
    var M = function (t) {
            try {
                t: {
                    for (var e = 100; t && 0 < e;) {
                        if (t.href && t.nodeName.match(/^a(?:rea)?$/i)) {
                            var n = t;
                            break t;
                        }
                        t = t.parentNode, e--;
                    }
                    n = null;
                }
                if (n) {
                    var r = n.protocol;
                    'http:' !== r && 'https:' !== r || R(n, n.hostname);
                }
            } catch (t) {
            }
        }, U = function (t) {
            try {
                t.action && R(t, s(c(t.action), 'host'));
            } catch (t) {
            }
        };
    t('google_tag_data.glBridge.auto', function (t, e, n, r) {
        (function () {
            function t(t) {
                e(t.target || t.srcElement || {});
            }
            var e = M, n = U, r = x();
            if (!r.init) {
                o('mousedown', t), o('keyup', t), o('submit', function (t) {
                    n(t.target || t.srcElement || {});
                });
                var a = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function () {
                    n(this), a.call(this);
                }, r.init = !0;
            }
        }(), t = {
            callback: t,
            domains: e,
            fragment: 2 == (n = 'fragment' === n ? 2 : 1),
            placement: n,
            forms: !!r,
            sameHost: !1
        }, x().decorators.push(t));
    }), t('google_tag_data.glBridge.decorate', function (t, e, n) {
        return L('_gl', t = j(t), e, !!n);
    }), t('google_tag_data.glBridge.generate', j), t('google_tag_data.glBridge.get', function (t, e) {
        var i, n = (i = !!e, function (t) {
                var e = c(p.location.href), n = e.search.replace('?', '');
                t: {
                    for (var r = n.split('&'), a = 0; a < r.length; a++) {
                        var o = r[a].split('=');
                        if ('_gl' === decodeURIComponent(o[0]).replace(/\+/g, ' ')) {
                            r = o.slice(1).join('=');
                            break t;
                        }
                    }
                    r = void 0;
                }
                t.query = E(r || '') || {}, a = (r = s(e, 'fragment')).match(C('_gl')), t.fragment = E(a && a[3] || '') || {}, i && function (t, e, n) {
                    function r(t, e) {
                        return (t = N('_gl', t)).length && (t = e + t), t;
                    }
                    if (p.history && p.history.replaceState) {
                        var a = C('_gl');
                        (a.test(e) || a.test(n)) && (t = s(t, 'path'), e = r(e, '?'), n = r(n, '#'), p.history.replaceState({}, void 0, '' + t + e + n));
                    }
                }(e, n, r);
            });
        return (e = x()).data || (e.data = {
            query: {},
            fragment: {}
        }, n(e.data)), n = {}, (e = e.data) && (u(n, e.query), t && u(n, e.fragment)), n;
    });
}(window), function () {
    function s(t) {
        var e, n = 1;
        if (t)
            for (n = 0, e = t.length - 1; 0 <= e; e--) {
                var r = t.charCodeAt(e);
                n = 0 != (r = 266338304 & (n = (n << 6 & 268435455) + r + (r << 14))) ? n ^ r >> 21 : n;
            }
        return n;
    }
    function a(t) {
        this.w = t || [];
    }
    a.prototype.set = function (t) {
        this.w[t] = !0;
    }, a.prototype.encode = function () {
        for (var t = [], e = 0; e < this.w.length; e++)
            this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
        for (e = 0; e < t.length; e++)
            t[e] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(t[e] || 0);
        return t.join('') + '~';
    };
    var t, e, n = window.GoogleAnalyticsObject;
    if ((t = null != n) && (t = -1 < (n.constructor + '').indexOf('String')), e = t) {
        var r = window.GoogleAnalyticsObject;
        e = r ? r.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : '';
    }
    var o = e || 'ga', c = /^(?:utma\.)?\d+\.\d+$/, l = /^amp-[\w.-]{22,64}$/, i = !1, u = new a();
    function f(t) {
        u.set(t);
    }
    function g(t) {
        t = new a(t = S(t));
        for (var e = u.w.slice(), n = 0; n < t.w.length; n++)
            e[n] = e[n] || t.w[n];
        return new a(e).encode();
    }
    function h(t) {
        return 'function' == typeof t;
    }
    function d(t) {
        return null != t && -1 < (t.constructor + '').indexOf('String');
    }
    function p() {
        for (var t = Y.navigator.userAgent + (J.cookie ? J.cookie : '') + (J.referrer ? J.referrer : ''), e = t.length, n = Y.history.length; 0 < n;)
            t += n-- ^ e++;
        return [St()^2147483647&s(t),Math.round((new Date).getTime()/1e3)].join('.');
    }
    function v(t) {
        var e = J.createElement('img');
        return e.width = 1, e.height = 1, e.src = t, e;
    }
    function m() {
    }
    function w(t) {
        return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (f(28), t);
    }
    function y(t, e, n, r) {
        try {
            t.addEventListener ? t.addEventListener(e, n, !!r) : t.attachEvent && t.attachEvent('on' + e, n);
        } catch (t) {
            f(27);
        }
    }
    function b(t, e) {
        return N(J.location[e ? 'href' : 'search'], t);
    }
    function _() {
        var t = '' + J.location.hostname;
        return 0 == t.indexOf('www.') ? t.substring(4) : t;
    }
    function k(t, e) {
        var n = t.indexOf(e);
        return !(5 != n && 6 != n || '/' != (t = t.charAt(n + e.length)) && '?' != t && '' != t && ':' != t);
    }
    function O(t, e) {
        if (1 == e.length && null != e[0] && 'object' === _typeof(e[0]))
            return e[0];
        for (var n = {}, r = Math.min(t.length + 1, e.length), a = 0; a < r; a++) {
            if ('object' === _typeof(e[a])) {
                for (var o in e[a])
                    e[a].hasOwnProperty(o) && (n[o] = e[a][o]);
                break;
            }
            a < t.length && (n[t[a]] = e[a]);
        }
        return n;
    }
    function x() {
        this.keys = [], this.values = {}, this.m = {};
    }
    var S = function (t) {
            return t = t.get(Ue), T(t) || (t = []), t;
        }, T = function (t) {
            return '[object Array]' == Object.prototype.toString.call(Object(t));
        }, C = function (t, e) {
            return 0 == t.indexOf(e);
        }, j = /^[\w\-:/.?=&%!\[\]]+$/, A = /^[\w+/_-]+[=]{0,2}$/, N = function (t, e) {
            return (t = t.match('(?:&|#|\\?)' + w(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1') + '=([^&#]*)')) && 2 == t.length ? t[1] : '';
        };
    function E(t, e) {
        return setTimeout(t, e);
    }
    function I(t) {
        var e = Q._gaUserPrefs;
        if (e && e.ioo && e.ioo() || t && !0 === Q['ga-disable-' + t])
            return 1;
        try {
            var n = Q.external;
            if (n && n._gaUserPrefs && 'oo' == n._gaUserPrefs)
                return 1;
        } catch (t) {
        }
        for (t = [], e = String(tt.cookie || document.cookie).split(';'), n = 0; n < e.length; n++) {
            var r = e[n].split('='), a = r[0].replace(/^\s*|\s*$/g, '');
            a && 'AMP_TOKEN' == a && ((r = r.slice(1).join('=').replace(/^\s*|\s*$/g, '')) && (r = decodeURIComponent(r)), t.push(r));
        }
        for (e = 0; e < t.length; e++)
            if ('$OPT_OUT' == t[e])
                return 1;
        return tt.getElementById('__gaOptOutExtension');
    }
    function R(t) {
        var e = [], n = J.cookie.split(';');
        t = new RegExp('^\\s*' + t + '=\\s*(.*?)\\s*$');
        for (var r = 0; r < n.length; r++) {
            var a = n[r].match(t);
            a && e.push(a[1]);
        }
        return e;
    }
    function L(t, e, n, r, a, o, i) {
        if (a = !I(a) && !(nt.test(J.location.hostname) || '/' == n && et.test(r))) {
            if (e && 1200 < e.length && (e = e.substring(0, 1200)), n = t + '=' + e + '; path=' + n + '; ', o && (n += 'expires=' + new Date(new Date().getTime() + o).toGMTString() + '; '), r && 'none' !== r && (n += 'domain=' + r + ';'), i && (n += i + ';'), r = J.cookie, J.cookie = n, !(r = r != J.cookie))
                t: {
                    for (t = R(t), r = 0; r < t.length; r++)
                        if (e == t[r]) {
                            r = !0;
                            break t;
                        }
                    r = !1;
                }
            return r;
        }
    }
    function $(t) {
        return encodeURIComponent ? encodeURIComponent(t).replace(/\(/g, '%28').replace(/\)/g, '%29') : t;
    }
    function P() {
        if (void 0 !== Y.__ga4__)
            return Y.__ga4__;
        if (void 0 === z) {
            var t = Y.navigator.userAgent;
            if (t) {
                var e = t;
                try {
                    e = decodeURIComponent(t);
                } catch (t) {
                }
                (t = !(0 <= e.indexOf('Chrome') || 0 <= e.indexOf('CriOS') || !(0 <= e.indexOf('Safari/') || 0 <= e.indexOf('Safari,')))) && (t = 11 <= ((e = rt.exec(e)) ? Number(e[1]) : -1)), z = t;
            } else
                z = !1;
        }
        return z;
    }
    function M(t) {
        return (t || i || 'https:' == J.location.protocol ? 'https:' : 'http:') + '//www.google-analytics.com';
    }
    function U(t) {
        this.name = 'len', this.message = t + '-8192';
    }
    function D(t, e, n) {
        if (n = n || m, e.length <= 2036)
            ft(t, e, n);
        else {
            if (!(e.length <= 8192))
                throw dt('len', e.length), new U(e.length);
            ht(t, e, n) || gt(t, e, n) || ft(t, e, n);
        }
    }
    function G(t, e, n, r) {
        gt(t + '?' + e, '', r = r || m, n);
    }
    function q() {
        return Y.gaData = Y.gaData || {};
    }
    function V(t) {
        var e = q();
        return e[t] = e[t] || {};
    }
    function F() {
        this.M = [];
    }
    x.prototype.set = function (t, e, n) {
        this.keys.push(t), n ? this.m[':' + t] = e : this.values[':' + t] = e;
    }, x.prototype.get = function (t) {
        return this.m.hasOwnProperty(':' + t) ? this.m[':' + t] : this.values[':' + t];
    }, x.prototype.map = function (t) {
        for (var e = 0; e < this.keys.length; e++) {
            var n = this.keys[e], r = this.get(n);
            r && t(n, r);
        }
    };
    function H() {
        Zr.D([m]);
    }
    function B(t) {
        t: {
            if (at.test(J.referrer)) {
                var e = J.location.hostname.replace(ot, '');
                e: {
                    var n = J.referrer, r = (n = n.replace(/^https?:\/\//, '')).replace(/^[^/]+/, '').split('/'), a = r[2];
                    if (!(r = (r = 's' == a ? r[3] : a) ? decodeURIComponent(r) : r)) {
                        if (0 == n.indexOf('xn--')) {
                            n = '';
                            break e;
                        }
                        (n = n.match(/(.*)\.cdn\.ampproject\.org\/?$/)) && 2 == n.length && (r = n[1].replace(/-/g, '.').replace(/\.\./g, '-'));
                    }
                    n = r ? r.replace(ot, '') : '';
                }
                if ((r = e === n) || (n = '.' + n, r = e.substring(e.length - n.length, e.length) === n), r) {
                    e = !0;
                    break t;
                }
                f(78);
            }
            e = !1;
        }
        return e && !1 !== t;
    }
    var z, K, X, W, Z, Y = window, J = document, Q = window, tt = document, et = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, nt = /(^|\.)doubleclick\.net$/i, rt = /^.*Version\/?(\d+)[^\d].*$/i, at = /^https?:\/\/[^/]*cdn\.ampproject\.org\//, ot = /^(?:www\.|m\.|amp\.)+/, it = [], st = function e(n, r, a) {
            if (!window.JSON)
                return f(58), !1;
            var t = Y.XMLHttpRequest;
            if (!t)
                return f(59), !1;
            var o = new t();
            return 'withCredentials' in o ? (o.open('POST', (a || 'https://ampcid.google.com/v1/publisher:getClientId') + '?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM', !0), o.withCredentials = !0, o.setRequestHeader('Content-Type', 'text/plain'), o.onload = function () {
                if (K = !1, 4 == o.readyState) {
                    try {
                        200 != o.status && (f(61), ut('', '$ERROR', 30000));
                        var t = JSON.parse(o.responseText);
                        t.optOut ? (f(63), ut('', '$OPT_OUT', 31536000000)) : t.clientId ? ut(t.clientId, t.securityToken, 31536000000) : !a && t.alternateUrl ? (X && clearTimeout(X), K = !0, e(n, r, t.alternateUrl)) : (f(64), ut('', '$NOT_FOUND', 3600000));
                    } catch (t) {
                        f(65), ut('', '$ERROR', 30000);
                    }
                    o = null;
                }
            }, t = { originScope: 'AMP_ECID_GOOGLE' }, n && (t.securityToken = n), o.send(JSON.stringify(t)), X = E(function () {
                f(66), ut('', '$ERROR', 30000);
            }, 10000), !0) : (f(60), !1);
        }, ct = function () {
            K = !1;
        }, lt = function (t, e) {
            if (void 0 === W) {
                W = '';
                for (var n = tr(), r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (L('AMP_TOKEN', encodeURIComponent(t), '/', a, '', e))
                        return void (W = a);
                }
            }
            L('AMP_TOKEN', encodeURIComponent(t), '/', W, '', e);
        }, ut = function (t, e, n) {
            for (X && clearTimeout(X), e && lt(e, n), Z = t, e = it, it = [], n = 0; n < e.length; n++)
                e[n](t);
        }, ft = function (t, e, n) {
            var r = v(t + '?' + e);
            r.onload = r.onerror = function () {
                r.onload = null, r.onerror = null, n();
            };
        }, gt = function (t, e, r, a) {
            var n = Y.XMLHttpRequest;
            if (!n)
                return !1;
            var o = new n();
            return 'withCredentials' in o && (t = t.replace(/^http:/, 'https:'), o.open('POST', t, !0), o.withCredentials = !0, o.setRequestHeader('Content-Type', 'text/plain'), o.onreadystatechange = function () {
                if (4 == o.readyState) {
                    if (a)
                        try {
                            var t = o.responseText;
                            if (t.length < 1)
                                dt('xhr', 'ver', '0'), r();
                            else if ('1' != t.charAt(0))
                                dt('xhr', 'ver', String(t.length)), r();
                            else if (3 < a.count++)
                                dt('xhr', 'tmr', '' + a.count), r();
                            else if (1 == t.length)
                                r();
                            else {
                                var e = t.charAt(1);
                                if ('d' == e)
                                    G('https://stats.g.doubleclick.net/j/collect', a.U, a, r);
                                else if ('g' == e) {
                                    ft('https://www.google.%/ads/ga-audiences'.replace('%', 'com'), a.google, r);
                                    var n = t.substring(2);
                                    n && (/^[a-z.]{1,6}$/.test(n) ? ft('https://www.google.%/ads/ga-audiences'.replace('%', n), a.google, m) : dt('tld', 'bcc', n));
                                } else
                                    dt('xhr', 'brc', e), r();
                            }
                        } catch (t) {
                            dt('xhr', 'rsp'), r();
                        }
                    else
                        r();
                    o = null;
                }
            }, o.send(e), !0);
        }, ht = function (t, e, n) {
            return !!Y.navigator.sendBeacon && !!Y.navigator.sendBeacon(t, e) && (n(), !0);
        }, dt = function (t, e, n) {
            1 <= 100 * Math.random() || I('?') || (t = ["t=error","_e="+t,"_v=j81","sr=1"], e && t.push('_f=' + e), n && t.push('_m=' + w(n.substring(0, 100))), t.push('aip=1'), t.push('z=' + St()), ft(M(!0) + '/u/d', t.join('&'), m));
        };
    function pt(t) {
        if (100 != t.get(bn) && s(jt(t, rn)) % 10000 >= 100 * At(t, bn))
            throw 'abort';
    }
    function vt(t) {
        if (I(jt(t, cn)))
            throw 'abort';
    }
    function mt() {
        var t = J.location.protocol;
        if ('http:' != t && 'https:' != t)
            throw 'abort';
    }
    function wt(n) {
        try {
            Y.navigator.sendBeacon ? f(42) : Y.XMLHttpRequest && 'withCredentials' in new Y.XMLHttpRequest() && f(40);
        } catch (t) {
        }
        n.set(Me, g(n), !0), n.set(Kt, At(n, Kt) + 1);
        var r = [];
        Pt.map(function (t, e) {
            e.F && null != (t = n.get(t)) && t != e.defaultValue && ('boolean' == typeof t && (t *= 1), r.push(e.F + '=' + w('' + t)));
        }), !1 === n.get(Mn) && r.push('npa=1'), r.push('z=' + xt()), n.set(Ht, r.join('&'), !0);
    }
    function yt(t) {
        var e = jt(t, zt);
        !e && t.get(Bt) && (e = 'beacon');
        var n = jt(t, In), r = jt(t, En), a = n || (r ? r + '/3' : M(!1) + '/collect');
        switch (jt(t, $n)) {
        case 'd':
            a = n || (r ? r + '/32' : M(!1) + '/j/collect'), e = t.get(Ln) || void 0, G(a, jt(t, Ht), e, t.Z(Ft));
            break;
        case 'b':
            a = n || (r ? r + '/31' : M(!1) + '/r/collect');
        default:
            e ? (n = jt(t, Ht), r = (r = t.Z(Ft)) || m, 'image' == e ? ft(a, n, r) : 'xhr' == e && gt(a, n, r) || 'beacon' == e && ht(a, n, r) || D(a, n, r)) : D(a, jt(t, Ht), t.Z(Ft));
        }
        e = (a = V(a = jt(t, cn))).hitcount, a.hitcount = e ? e + 1 : 1, delete V(a = jt(t, cn)).pending_experiments, t.set(Ft, m, !0);
    }
    function bt(t) {
        q().expId && t.set(Ce, q().expId), q().expVar && t.set(je, q().expVar);
        var e = jt(t, cn);
        if (e = V(e).pending_experiments) {
            var n = [];
            for (r in e)
                e.hasOwnProperty(r) && e[r] && n.push(encodeURIComponent(r) + '.' + encodeURIComponent(e[r]));
            var r = n.join('!');
        } else
            r = void 0;
        r && t.set(Ae, r, !0);
    }
    function _t() {
        if (Y.navigator && 'preview' == Y.navigator.loadPurpose)
            throw 'abort';
    }
    function kt(t) {
        var e = Y.gaDevIds;
        T(e) && 0 != e.length && t.set('&did', e.join(','), !0);
    }
    function Ot(t) {
        if (!t.get(cn))
            throw 'abort';
    }
    function xt() {
        try {
            var t = new Uint32Array(1);
            return Y.crypto.getRandomValues(t), 2147483647 & t[0];
        } catch (t) {
            return St();
        }
    }
    F.prototype.add = function (t) {
        this.M.push(t);
    }, F.prototype.D = function (t) {
        try {
            for (var e = 0; e < this.M.length; e++) {
                var n = t.get(this.M[e]);
                n && h(n) && n.call(Y, t);
            }
        } catch (t) {
        }
        (e = t.get(Ft)) != m && h(e) && (t.set(Ft, m, !0), setTimeout(e, 10));
    };
    var St = function () {
        return Math.round(2147483647 * Math.random());
    };
    function Tt(t) {
        var e = At(t, Re);
        500 <= e && f(15);
        var n = jt(t, Vt);
        if ('transaction' != n && 'item' != n) {
            n = At(t, $e);
            var r = new Date().getTime(), a = At(t, Le);
            if (0 == a && t.set(Le, r), 0 < (a = Math.round(2 * (r - a) / 1000)) && (n = Math.min(n + a, 20), t.set(Le, r)), n <= 0)
                throw 'abort';
            t.set($e, --n);
        }
        t.set(Re, ++e);
    }
    function Ct() {
        this.data = new x();
    }
    function jt(t, e) {
        return null == (t = t.get(e)) ? '' : '' + t;
    }
    function At(t, e) {
        return null == (t = t.get(e)) || '' === t ? 0 : Number(t);
    }
    function Nt(t, e, n, r, a) {
        this.name = t, this.F = e, this.Z = r, this.o = a, this.defaultValue = n;
    }
    function Et(t, e, n, r, a) {
        return t = new Nt(t, e, n, r, a), Pt.set(t.name, t), t.name;
    }
    function It(t, e) {
        Mt.push([new RegExp("^"+t+"$"),e]);
    }
    function Rt(t, e, n) {
        return Et(t, e, n, void 0, Lt);
    }
    Ct.prototype.get = function (t) {
        var e = Ut(t), n = this.data.get(t);
        return e && null == n && (n = h(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n;
    }, Ct.prototype.Z = function (t) {
        return (t = this.get(t)) && h(t) ? t : m;
    }, Ct.prototype.set = function (t, e, n) {
        if (t)
            if ('object' == (void 0 === t ? 'undefined' : _typeof(t)))
                for (var r in t)
                    t.hasOwnProperty(r) && $t(this, r, t[r], n);
            else
                $t(this, t, e, n);
    };
    function Lt() {
    }
    var $t = function (t, e, n, r) {
            if (null != n)
                switch (e) {
                case cn:
                    Rr.test(n);
                }
            var a = Ut(e);
            a && a.o ? a.o(t, e, n, r) : t.data.set(e, n, r);
        }, Pt = new x(), Mt = [], Ut = function (t) {
            var e = Pt.get(t);
            if (!e)
                for (var n = 0; n < Mt.length; n++) {
                    var r = Mt[n], a = r[0].exec(t);
                    if (a) {
                        e = r[1](a), Pt.set(e.name, e);
                        break;
                    }
                }
            return e;
        }, Dt = Rt('apiVersion', 'v'), Gt = Rt('clientVersion', '_v');
    Et('anonymizeIp', 'aip');
    var qt = Et('adSenseId', 'a'), Vt = Et('hitType', 't'), Ft = Et('hitCallback'), Ht = Et('hitPayload');
    Et('nonInteraction', 'ni'), Et('currencyCode', 'cu'), Et('dataSource', 'ds');
    var Bt = Et('useBeacon', void 0, !1), zt = Et('transport');
    Et('sessionControl', 'sc', ''), Et('sessionGroup', 'sg'), Et('queueTime', 'qt');
    var Kt = Et('_s', '_s');
    Et('screenName', 'cd');
    var Xt = Et('location', 'dl', ''), Wt = Et('referrer', 'dr'), Zt = Et('page', 'dp', '');
    Et('hostname', 'dh');
    var Yt = Et('language', 'ul'), Jt = Et('encoding', 'de');
    Et('title', 'dt', function () {
        return J.title || void 0;
    }), It('contentGroup([0-9]+)', function (t) {
        return new Nt(t[0], 'cg' + t[1]);
    });
    var Qt = Et('screenColors', 'sd'), te = Et('screenResolution', 'sr'), ee = Et('viewportSize', 'vp'), ne = Et('javaEnabled', 'je'), re = Et('flashVersion', 'fl');
    Et('campaignId', 'ci'), Et('campaignName', 'cn'), Et('campaignSource', 'cs'), Et('campaignMedium', 'cm'), Et('campaignKeyword', 'ck'), Et('campaignContent', 'cc');
    var ae = Et('eventCategory', 'ec'), oe = Et('eventAction', 'ea'), ie = Et('eventLabel', 'el'), se = Et('eventValue', 'ev'), ce = Et('socialNetwork', 'sn'), le = Et('socialAction', 'sa'), ue = Et('socialTarget', 'st'), fe = Et('l1', 'plt'), ge = Et('l2', 'pdt'), he = Et('l3', 'dns'), de = Et('l4', 'rrt'), pe = Et('l5', 'srt'), ve = Et('l6', 'tcp'), me = Et('l7', 'dit'), we = Et('l8', 'clt'), ye = Et('l9', '_gst'), be = Et('l10', '_gbt'), _e = Et('l11', '_cst'), ke = Et('l12', '_cbt'), Oe = Et('timingCategory', 'utc'), xe = Et('timingVar', 'utv'), Se = Et('timingLabel', 'utl'), Te = Et('timingValue', 'utt');
    Et('appName', 'an'), Et('appVersion', 'av', ''), Et('appId', 'aid', ''), Et('appInstallerId', 'aiid', ''), Et('exDescription', 'exd'), Et('exFatal', 'exf');
    var Ce = Et('expId', 'xid'), je = Et('expVar', 'xvar'), Ae = Et('exp', 'exp'), Ne = Et('_utma', '_utma'), Ee = Et('_utmz', '_utmz'), Ie = Et('_utmht', '_utmht'), Re = Et('_hc', void 0, 0), Le = Et('_ti', void 0, 0), $e = Et('_to', void 0, 20);
    It('dimension([0-9]+)', function (t) {
        return new Nt(t[0], 'cd' + t[1]);
    }), It('metric([0-9]+)', function (t) {
        return new Nt(t[0], 'cm' + t[1]);
    }), Et('linkerParam', void 0, void 0, function (t) {
        if (t.get(Pe))
            return f(35), sr.generate(mr(t));
        var e = jt(t, rn), n = jt(t, On) || '';
        return (e = '_ga=2.' + w(fr(n + e, 0) + '.' + n + '-' + e)) + (t = (t = wr(t)) ? (f(44), '&_gac=1.' + w([fr(t.qa,0),t.timestamp,t.qa].join('.'))) : '');
    }, Lt);
    var Pe = Rt('_cd2l', void 0, !1), Me = Et('usage', '_u'), Ue = Et('_um');
    Et('forceSSL', void 0, void 0, function () {
        return i;
    }, function (t, e, n) {
        f(34), i = !!n;
    });
    var De = Et('_j1', 'jid'), Ge = Et('_j2', 'gjid');
    It('\\&(.*)', function (t) {
        var n, r, e = new Nt(t[0], t[1]), a = (n = t[0].substring(1), Pt.map(function (t, e) {
                e.F == n && (r = e);
            }), r && r.name);
        return a && (e.Z = function (t) {
            return t.get(a);
        }, e.o = function (t, e, n, r) {
            t.set(a, n, r);
        }, e.F = void 0), e;
    });
    var qe = Rt('_oot'), Ve = Et('previewTask'), Fe = Et('checkProtocolTask'), He = Et('validationTask'), Be = Et('checkStorageTask'), ze = Et('historyImportTask'), Ke = Et('samplerTask'), Xe = Et('_rlt'), We = Et('buildHitTask'), Ze = Et('sendHitTask'), Ye = Et('ceTask'), Je = Et('devIdTask'), Qe = Et('timingTask'), tn = Et('displayFeaturesTask'), en = Et('customTask'), nn = Rt('name'), rn = Rt('clientId', 'cid'), an = Rt('clientIdTime'), on = Rt('storedClientId'), sn = Et('userId', 'uid'), cn = Rt('trackingId', 'tid'), ln = Rt('cookieName', void 0, '_ga'), un = Rt('cookieDomain'), fn = Rt('cookiePath', void 0, '/'), gn = Rt('cookieExpires', void 0, 63072000), hn = Rt('cookieUpdate', void 0, !0), dn = Rt('cookieFlags', void 0, ''), pn = Rt('legacyCookieDomain'), vn = Rt('legacyHistoryImport', void 0, !0), mn = Rt('storage', void 0, 'cookie'), wn = Rt('allowLinker', void 0, !1), yn = Rt('allowAnchor', void 0, !0), bn = Rt('sampleRate', 'sf', 100), _n = Rt('siteSpeedSampleRate', void 0, 1), kn = Rt('alwaysSendReferrer', void 0, !1), On = Rt('_gid', '_gid'), xn = Rt('_gcn'), Sn = Rt('useAmpClientId'), Tn = Rt('_gclid'), Cn = Rt('_gt'), jn = Rt('_ge', void 0, 7776000000), An = Rt('_gclsrc'), Nn = Rt('storeGac', void 0, !0), En = Et('_x_19'), In = Et('transportUrl'), Rn = Et('_r', '_r'), Ln = Et('_dp'), $n = Et('_jt', void 0, 'n'), Pn = Et('allowAdFeatures', void 0, !0), Mn = Et('allowAdPersonalizationSignals', void 0, !0);
    function Un(e, t, n, r) {
        t[e] = function () {
            try {
                return r && f(r), n.apply(this, arguments);
            } catch (t) {
                throw dt('exc', e, t && t.name), t;
            }
        };
    }
    function Dn() {
        this.V = 100, this.$ = this.fa = !1, this.oa = 'detourexp', this.groups = 1;
    }
    function Gn(t) {
        if ('cookie' == jt(t, mn)) {
            if (t.get(hn) || jt(t, on) != jt(t, rn)) {
                var e = 1000 * At(t, gn);
                Kn(t, rn, ln, e);
            }
            if (!t.get(hn) && Xn(t) == jt(t, On) || Kn(t, On, xn, 86400000), t.get(Nn)) {
                var n = jt(t, Tn);
                if (n) {
                    var r = Math.min(At(t, jn), 1000 * At(t, gn));
                    r = Math.min(r, 1000 * At(t, Cn) + r - new Date().getTime()), t.data.set(jn, r), e = {};
                    var a = jt(t, Cn), o = jt(t, An), i = er(jt(t, fn)), s = Qn(jt(t, un)), c = jt(t, cn);
                    t = jt(t, dn), o && 'aw.ds' != o ? e && (e.ua = !0) : (n = ["1",a,$(n)].join('.'), 0 < r && (e && (e.ta = !0), L('_gac_' + $(c), n, i, s, c, r, t))), rr(e);
                }
            } else
                f(75);
        }
    }
    function qn(t) {
        if ('cookie' == jt(t, mn) && !zn && (Gn(t), !zn))
            throw 'abort';
    }
    function Vn(t) {
        if (t.get(vn)) {
            var e = jt(t, un), n = jt(t, pn) || _(), r = ar('__utma', n, e);
            r && (f(19), t.set(Ie, new Date().getTime(), !0), t.set(Ne, r.R), (e = ar('__utmz', n, e)) && r.hash == e.hash && t.set(Ee, e.R));
        }
    }
    var Fn = function (t) {
            var e = Y.performance || Y.webkitPerformance;
            if (!(e = e && e.timing))
                return !1;
            var n = e.navigationStart;
            return 0 != n && (t[fe] = e.loadEventStart - n, t[he] = e.domainLookupEnd - e.domainLookupStart, t[ve] = e.connectEnd - e.connectStart, t[pe] = e.responseStart - e.requestStart, t[ge] = e.responseEnd - e.responseStart, t[de] = e.fetchStart - n, t[me] = e.domInteractive - n, t[we] = e.domContentLoadedEventStart - n, t[ye] = Yr.L - n, t[be] = Yr.ya - n, Y.google_tag_manager && Y.google_tag_manager._li && (e = Y.google_tag_manager._li, t[_e] = e.cst, t[ke] = e.cbt), !0);
        }, Hn = function (t) {
            if (Y.top != Y)
                return !1;
            var e = Y.external, n = e && e.onloadT;
            return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), null != n && (t[fe] = n, !0);
        }, Bn = function (t, e) {
            var n = t[e];
            (isNaN(n) || 1 / 0 == n || n < 0) && (t[e] = void 0);
        }, zn = !1, Kn = function (t, e, n, r) {
            var a = Wn(t, e);
            if (a) {
                n = jt(t, n);
                var o = er(jt(t, fn)), i = Qn(jt(t, un)), s = jt(t, dn), c = jt(t, cn);
                if ('auto' != i)
                    L(n, a, o, i, c, r, s) && (zn = !0);
                else {
                    f(32);
                    for (var l = tr(), u = 0; u < l.length; u++)
                        if (i = l[u], t.data.set(un, i), L(n, a = Wn(t, e), o, i, c, r, s))
                            return void (zn = !0);
                    t.data.set(un, 'auto');
                }
            }
        }, Xn = function (t) {
            var e = R(jt(t, xn));
            return Zn(t, e);
        }, Wn = function (t, e) {
            e = $(jt(t, e));
            var n = Qn(jt(t, un)).split('.').length;
            return 1 < (t = nr(jt(t, fn))) && (n += '-' + t), e ? ["GA1",n,e].join('.') : '';
        }, Zn = function (t, e) {
            return Yn(e, jt(t, un), jt(t, fn));
        }, Yn = function (t, e, n) {
            if (!t || t.length < 1)
                f(12);
            else {
                for (var r = [], a = 0; a < t.length; a++) {
                    var o = t[a], i = o.split('.'), s = i.shift();
                    (i = ('GA1' == s || '1' == s) && 1 < i.length ? (1 == (o = i.shift().split('-')).length && (o[1] = '1'), o[0] *= 1, o[1] *= 1, {
                        H: o,
                        s: i.join('.')
                    }) : l.test(o) ? {
                        H: [0,0],
                        s: o
                    } : void 0) && r.push(i);
                }
                if (1 == r.length)
                    return f(13), r[0].s;
                if (0 != r.length)
                    return f(14), 1 == (r = Jn(r, Qn(e).split('.').length, 0)).length ? r[0].s : (1 < (r = Jn(r, nr(n), 1)).length && f(41), r[0] && r[0].s);
                f(12);
            }
        }, Jn = function (t, e, n) {
            for (var r, a = [], o = [], i = 0; i < t.length; i++) {
                var s = t[i];
                s.H[n] == e ? a.push(s) : null == r || s.H[n] < r ? (o = [s], r = s.H[n]) : s.H[n] == r && o.push(s);
            }
            return 0 < a.length ? a : o;
        }, Qn = function (t) {
            return 0 == t.indexOf('.') ? t.substr(1) : t;
        }, tr = function () {
            var t = [], e = _().split('.');
            if (4 == e.length) {
                var n = e[e.length - 1];
                if (parseInt(n, 10) == n)
                    return ["none"];
            }
            for (n = e.length - 2; 0 <= n; n--)
                t.push(e.slice(n).join('.'));
            return e = J.location.hostname, nt.test(e) || et.test(e) || t.push('none'), t;
        }, er = function (t) {
            return t ? (1 < t.length && t.lastIndexOf('/') == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf('/') && (t = '/' + t), t) : '/';
        }, nr = function (t) {
            return '/' == (t = er(t)) ? 1 : t.split('/').length;
        }, rr = function (t) {
            t.ta && f(77), t.na && f(74), t.pa && f(73), t.ua && f(69);
        };
    function ar(t, e, n) {
        'none' == e && (e = '');
        var r = [], a = R(t);
        t = '__utma' == t ? 6 : 2;
        for (var o = 0; o < a.length; o++) {
            var i = ('' + a[o]).split('.');
            i.length >= t && r.push({
                hash: i[0],
                R: a[o],
                O: i
            });
        }
        if (0 != r.length)
            return 1 != r.length && (or(e, r) || or(n, r) || or(null, r)) || r[0];
    }
    function or(t, e) {
        if (null == t)
            var n = t = 1;
        else
            n = s(t), t = s(C(t, '.') ? t.substring(1) : '.' + t);
        for (var r = 0; r < e.length; r++)
            if (e[r].hash == n || e[r].hash == t)
                return e[r];
    }
    var ir = new RegExp(/^https?:\/\/([^\/:]+)/), sr = Y.google_tag_data.glBridge, cr = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/, lr = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;
    function ur(t, e) {
        var n = new Date(), r = Y.navigator, a = r.plugins || [];
        for (t = [t,r.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e], e = 0; e < a.length; ++e)
            t.push(a[e].description);
        return s(t.join('.'));
    }
    function fr(t, e) {
        var n = new Date(), r = Y.navigator, a = n.getHours() + Math.floor((n.getMinutes() + e) / 60);
        return s([t,r.userAgent,r.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate()+Math.floor(a/24),(24+a)%24,(60+n.getMinutes()+e)%60].join('.'));
    }
    function gr(t) {
        f(48), this.target = t, this.T = !1;
    }
    gr.prototype.ca = function (t, e) {
        if (t) {
            if (this.target.get(Pe))
                return sr.decorate(mr(this.target), t, e);
            if (t.tagName) {
                if ('a' == t.tagName.toLowerCase())
                    return void (t.href && (t.href = hr(this, t.href, e)));
                if ('form' == t.tagName.toLowerCase())
                    return dr(this, t);
            }
            if ('string' == typeof t)
                return hr(this, t, e);
        }
    };
    var hr = function (t, e, n) {
            var r = cr.exec(e);
            r && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : '')), (r = lr.exec(e)) && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : '')), t = t.target.get('linkerParam');
            var a = e.indexOf('?');
            return r = e.indexOf('#'), n ? e += (-1 == r ? '#' : '&') + t : (n = -1 == a ? '?' : '&', e = -1 == r ? e + (n + t) : e.substring(0, r) + n + t + e.substring(r)), (e = e.replace(/&+_ga=/, '&_ga=')).replace(/&+_gac=/, '&_gac=');
        }, dr = function (t, e) {
            if (e && e.action)
                if ('get' == e.method.toLowerCase()) {
                    t = t.target.get('linkerParam').split('&');
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n].split('='), a = r[1];
                        r = r[0];
                        for (var o = e.childNodes || [], i = !1, s = 0; s < o.length; s++)
                            if (o[s].name == r) {
                                o[s].setAttribute('value', a), i = !0;
                                break;
                            }
                        i || ((o = J.createElement('input')).setAttribute('type', 'hidden'), o.setAttribute('name', r), o.setAttribute('value', a), e.appendChild(o));
                    }
                } else
                    'post' == e.method.toLowerCase() && (e.action = hr(t, e.action));
        };
    function pr(t, e) {
        if (e != J.location.hostname)
            for (var n = 0; n < t.length; n++)
                if (t[n] instanceof RegExp) {
                    if (t[n].test(e))
                        return 1;
                } else if (0 <= e.indexOf(t[n]))
                    return 1;
    }
    function vr(t, e) {
        return e != ur(t, 0) && e != ur(t, -1) && e != ur(t, -2) && e != fr(t, 0) && e != fr(t, -1) && e != fr(t, -2);
    }
    function mr(t) {
        var e = wr(t);
        return {
            _ga: t.get(rn),
            _gid: t.get(On) || void 0,
            _gac: e ? [e.qa,e.timestamp].join('.') : void 0
        };
    }
    function wr(t) {
        function e(t) {
            return null == t || '' === t ? 0 : Number(t);
        }
        var n = t.get(Tn);
        if (n && t.get(Nn)) {
            var r = e(t.get(Cn));
            if (!(1000 * r + e(t.get(jn)) <= new Date().getTime()))
                return {
                    timestamp: r,
                    qa: n
                };
            f(76);
        }
    }
    function yr(t, e, n) {
        this.aa = e, (e = n) || (e = (e = jt(t, nn)) && 't0' != e ? Ir.test(e) ? '_gat_' + $(jt(t, cn)) : '_gat_' + $(e) : '_gat'), this.Y = e, this.ra = null;
    }
    function br(t, e) {
        if (!(t = t.b).get('dcLoaded')) {
            var n, r = new a(S(t));
            r.set(29), t.set(Ue, r.w), (e = e || {})[ln] && (n = $(e[ln])), function (r, t) {
                var n = t.get(We);
                t.set(We, function (t) {
                    Cr(r, t, De), Cr(r, t, Ge);
                    var e = n(t);
                    return jr(r, t), e;
                });
                var a = t.get(Ze);
                t.set(Ze, function (t) {
                    var e = a(t);
                    if (Ar(t)) {
                        if (P() !== Er(r, t)) {
                            f(80);
                            var n = {
                                U: Nr(r, t, 1),
                                google: Nr(r, t, 2),
                                count: 0
                            };
                            G('https://stats.g.doubleclick.net/j/collect', n.U, n);
                        } else
                            v(Nr(r, t, 0));
                        t.set(De, '', !0);
                    }
                    return e;
                });
            }(e = new yr(t, 'https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&', n), t), t.set('dcLoaded', !0);
        }
    }
    function _r(t) {
        if (!t.get('dcLoaded') && 'cookie' == t.get(mn)) {
            var e = new yr(t);
            if (Cr(e, t, De), Cr(e, t, Ge), jr(e, t), Ar(t)) {
                var n = P() !== Er(e, t);
                t.set(Rn, 1, !0), n ? (f(79), t.set($n, 'd', !0), t.set(Ln, {
                    U: Nr(e, t, 1),
                    google: Nr(e, t, 2),
                    count: 0
                }, !0)) : t.set($n, 'b', !0);
            }
        }
    }
    function kr(t) {
        function n(t, e) {
            i.b.data.set(t, e);
        }
        function e(t, e) {
            n(t, e), i.filters.add(t);
        }
        var r, a, o, i = this;
        this.b = new Ct(), this.filters = new F(), n(nn, t[nn]), n(cn, (r = t[cn]) ? r.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : ''), n(ln, t[ln]), n(un, t[un] || _()), n(fn, t[fn]), n(gn, t[gn]), n(hn, t[hn]), n(dn, t[dn]), n(pn, t[pn]), n(vn, t[vn]), n(wn, t[wn]), n(yn, t[yn]), n(bn, t[bn]), n(_n, t[_n]), n(kn, t[kn]), n(mn, t[mn]), n(sn, t[sn]), n(an, t[an]), n(Sn, t[Sn]), n(Nn, t[Nn]), n(Pe, t[Pe]), n(En, t[En]), n(Dt, 1), n(Gt, 'j81'), e(qe, vt), e(en, m), e(Ve, _t), e(Fe, mt), e(He, Ot), e(Be, qn), e(ze, Vn), e(Ke, pt), e(Xe, Tt), e(Ye, bt), e(Je, kt), e(tn, _r), e(We, wt), e(Ze, yt), e(Qe, (o = this, function (t) {
            if ('pageview' == t.get(Vt) && !o.I) {
                o.I = !0;
                var e = (r = t, a = Math.min(At(r, _n), 100), !(s(jt(r, rn)) % 100 >= a)), n = 0 < N(jt(t, Xt), 'gclid').length;
                (e || n) && function t(e) {
                    var n = {};
                    if (Fn(n) || Hn(n)) {
                        var r = n[fe];
                        null == r || 1 / 0 == r || isNaN(r) || (0 < r ? (Bn(n, he), Bn(n, ve), Bn(n, pe), Bn(n, ge), Bn(n, de), Bn(n, me), Bn(n, we), Bn(n, ye), Bn(n, be), Bn(n, _e), Bn(n, ke), E(function () {
                            e(n);
                        }, 10)) : y(Y, 'load', function () {
                            t(e);
                        }, !1));
                    }
                }(function (t) {
                    e && o.send('timing', t), n && o.send('adtiming', t);
                });
            }
            var r, a;
        })), function (t) {
            var e = Y.navigator, n = Y.screen, r = J.location;
            if (t.set(Wt, function (t, e) {
                    var n = J.referrer;
                    if (/^(https?|android-app):\/\//i.test(n)) {
                        if (t)
                            return n;
                        if (t = '//' + J.location.hostname, !k(n, t))
                            return e && (e = t.replace(/\./g, '-') + '.cdn.ampproject.org', k(n, e)) ? void 0 : n;
                    }
                }(!!t.get(kn), !!t.get(Sn))), r) {
                var a = r.pathname || '';
                '/' != a.charAt(0) && (f(31), a = '/' + a), t.set(Xt, r.protocol + '//' + r.hostname + a + r.search);
            }
            n && t.set(te, n.width + 'x' + n.height), n && t.set(Qt, n.colorDepth + '-bit'), n = J.documentElement;
            var o = (a = J.body) && a.clientWidth && a.clientHeight, i = [];
            if (n && n.clientWidth && n.clientHeight && ('CSS1Compat' === J.compatMode || !o) ? i = [n.clientWidth,n.clientHeight] : o && (i = [a.clientWidth,a.clientHeight]), n = i[0] <= 0 || i[1] <= 0 ? '' : i.join('x'), t.set(ee, n), t.set(re, function () {
                    var t, e;
                    if ((e = (e = Y.navigator) ? e.plugins : null) && e.length)
                        for (var n = 0; n < e.length && !t; n++) {
                            var r = e[n];
                            -1 < r.name.indexOf('Shockwave Flash') && (t = r.description);
                        }
                    if (!t)
                        try {
                            var a = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7');
                            t = a.GetVariable('$version');
                        } catch (t) {
                        }
                    if (!t)
                        try {
                            a = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6'), t = 'WIN 6,0,21,0', a.AllowScriptAccess = 'always', t = a.GetVariable('$version');
                        } catch (t) {
                        }
                    if (!t)
                        try {
                            t = (a = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version');
                        } catch (t) {
                        }
                    return t && (a = t.match(/[\d]+/g)) && 3 <= a.length && (t = a[0] + '.' + a[1] + ' r' + a[2]), t || void 0;
                }()), t.set(Jt, J.characterSet || J.charset), t.set(ne, e && 'function' == typeof e.javaEnabled && e.javaEnabled() || !1), t.set(Yt, (e && (e.language || e.browserLanguage) || '').toLowerCase()), t.data.set(Tn, b('gclid', !0)), t.data.set(An, b('gclsrc', !0)), t.data.set(Cn, Math.round(new Date().getTime() / 1000)), r && t.get(yn) && (e = J.location.hash)) {
                for (e = e.split(/[?&#]+/), r = [], n = 0; n < e.length; ++n) {
                    (C(e[n], 'utm_id') || C(e[n], 'utm_campaign') || C(e[n], 'utm_source') || C(e[n], 'utm_medium') || C(e[n], 'utm_term') || C(e[n], 'utm_content') || C(e[n], 'gclid') || C(e[n], 'dclid') || C(e[n], 'gclsrc')) && r.push(e[n]);
                }
                0 < r.length && (e = '#' + r.join('&'), t.set(Xt, t.get(Xt) + e));
            }
        }(this.b), function (t, e) {
            var n = jt(t, ln);
            if (t.data.set(xn, '_ga' == n ? '_gid' : n + '_gid'), 'cookie' == jt(t, mn)) {
                if (zn = !1, n = R(jt(t, ln)), !(n = Zn(t, n))) {
                    n = jt(t, un);
                    var r = jt(t, pn) || _();
                    n = null != (n = ar('__utma', r, n)) ? (f(10), n.O[1] + '.' + n.O[2]) : void 0;
                }
                if (n && (zn = !0), r = n && !t.get(hn))
                    if (2 != (r = n.split('.')).length)
                        r = !1;
                    else if (r = Number(r[1])) {
                        var a = At(t, gn);
                        r = r + a < new Date().getTime() / 1000;
                    } else
                        r = !1;
                if (r && (n = void 0), n && (t.data.set(on, n), t.data.set(rn, n), (n = Xn(t)) && t.data.set(On, n)), t.get(Nn) && (n = t.get(Tn), r = t.get(An), !n || r && 'aw.ds' != r)) {
                    if (n = {}, J) {
                        r = [], a = J.cookie.split(';');
                        for (var o = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, i = 0; i < a.length; i++) {
                            var s = a[i].match(o);
                            s && r.push({
                                ja: s[1],
                                value: s[2]
                            });
                        }
                        if (a = {}, r && r.length)
                            for (o = 0; o < r.length; o++) {
                                '1' != (i = r[o].value.split('.'))[0] || 3 != i.length ? n && (n.na = !0) : i[1] && (a[r[o].ja] ? n && (n.pa = !0) : a[r[o].ja] = [], a[r[o].ja].push({
                                    timestamp: i[1],
                                    qa: i[2]
                                }));
                            }
                        r = a;
                    } else
                        r = {};
                    r = r[jt(t, cn)], rr(n), r && 0 != r.length && (n = r[0], t.data.set(Cn, n.timestamp), t.data.set(Tn, n.qa));
                }
            }
            if (t.get(hn) && (n = b('_ga', !!t.get(yn)), o = b('_gl', !!t.get(yn)), a = (r = sr.get(t.get(yn)))._ga, o && 0 < o.indexOf('_ga*') && !a && f(30), o = r.gclid, i = r._gac, n || a || o || i))
                if (n && a && f(36), t.get(wn) || B(t.get(Sn))) {
                    if (a && (f(38), t.data.set(rn, a), r._gid && (f(51), t.data.set(On, r._gid))), o ? (f(82), t.data.set(Tn, o), r.gclsrc && t.data.set(An, r.gclsrc)) : i && (r = i.split('.')) && 2 === r.length && (f(37), t.data.set(Tn, r[0]), t.data.set(Cn, r[1])), n)
                        t:
                            if (r = n.indexOf('.'), -1 == r)
                                f(22);
                            else {
                                if (a = n.substring(0, r), r = (o = n.substring(r + 1)).indexOf('.'), n = o.substring(0, r), o = o.substring(r + 1), '1' == a) {
                                    if (vr(r = o, n)) {
                                        f(23);
                                        break t;
                                    }
                                } else {
                                    if ('2' != a) {
                                        f(22);
                                        break t;
                                    }
                                    if (a = '', r = 0 < (r = o.indexOf('-')) ? (a = o.substring(0, r), o.substring(r + 1)) : o.substring(1), vr(a + r, n)) {
                                        f(53);
                                        break t;
                                    }
                                    a && (f(2), t.data.set(On, a));
                                }
                                f(11), t.data.set(rn, r), (n = b('_gac', !!t.get(yn))) && ('1' != (n = n.split('.'))[0] || 4 != n.length ? f(72) : vr(n[3], n[1]) ? f(71) : (t.data.set(Tn, n[3]), t.data.set(Cn, n[2]), f(70)));
                            }
                } else
                    f(21);
            e && (f(9), t.data.set(rn, w(e))), t.get(rn) || ((e = (e = Y.gaGlobal && Y.gaGlobal.vid) && -1 != e.search(c) ? e : void 0) ? (f(17), t.data.set(rn, e)) : (f(8), t.data.set(rn, p()))), t.get(On) || (f(3), t.data.set(On, p())), Gn(t);
        }(this.b, t[rn]), this.b.set(qt, (a = Y.gaGlobal = Y.gaGlobal || {}).hid = a.hid || St());
    }
    gr.prototype.S = function (r, a, t) {
        function e(t) {
            try {
                t = t || Y.event;
                t: {
                    var e = t.target || t.srcElement;
                    for (t = 100; e && 0 < t;) {
                        if (e.href && e.nodeName.match(/^a(?:rea)?$/i)) {
                            var n = e;
                            break t;
                        }
                        e = e.parentNode, t--;
                    }
                    n = {};
                }
                ('http:' == n.protocol || 'https:' == n.protocol) && pr(r, n.hostname || '') && n.href && (n.href = hr(o, n.href, a));
            } catch (t) {
                f(26);
            }
        }
        var o = this;
        this.target.get(Pe) ? sr.auto(function () {
            return mr(o.target);
        }, r, a ? 'fragment' : '', t) : (this.T || (this.T = !0, y(J, 'mousedown', e, !1), y(J, 'keyup', e, !1)), t && y(J, 'submit', function (t) {
            if ((t = (t = t || Y.event).target || t.srcElement) && t.action) {
                var e = t.action.match(ir);
                e && pr(r, e[1]) && dr(o, t);
            }
        }));
    };
    var Or = /^(GTM|OPT)-[A-Z0-9]+$/, xr = /;_gaexp=[^;]*/g, Sr = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g, Tr = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/, Cr = function (t, e, n) {
            !1 === e.get(Pn) || e.get(n) || ('1' == R(t.Y)[0] ? e.set(n, '', !0) : e.set(n, '' + St(), !0));
        }, jr = function (t, e) {
            Ar(e) && L(t.Y, '1', jt(e, fn), jt(e, un), jt(e, cn), 60000, jt(e, dn));
        }, Ar = function (t) {
            return !!t.get(De) && !1 !== t.get(Pn);
        }, Nr = function (t, e, n) {
            function r(t) {
                Ut(t).F && a.set(Ut(t).F, e.get(t));
            }
            var a = new x();
            r(Dt), r(Gt), r(cn), r(rn), r(De), 0 != n && 1 != n || (r(sn), r(Ge), r(On)), a.set(Ut(Me).F, g(e));
            var o = '';
            return a.map(function (t, e) {
                o += w(t) + '=', o += w('' + e) + '&';
            }), o += 'z=' + St(), 0 == n ? o = t.aa + o : 1 == n ? o = 't=dc&aip=1&_r=3&' + o : 2 == n && (o = 't=sr&aip=1&_r=4&slf_rd=1&' + o), o;
        }, Er = function (t, e) {
            return null === t.ra && (t.ra = 1 === function (t) {
                var e, n = new Dn();
                if (n.fa && n.$)
                    return 0;
                if (n.$ = !0, t) {
                    if (n.oa && void 0 !== t.get(n.oa))
                        return At(t, n.oa);
                    if (0 == t.get(_n))
                        return 0;
                }
                return 0 == n.V ? 0 : (void 0 === e && (e = xt()), 0 == e % n.V ? Math.floor(e / n.V) % n.groups + 1 : 0);
            }(e), t.ra && f(33)), t.ra;
        }, Ir = /^gtm\d+$/, Rr = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/;
    kr.prototype.get = function (t) {
        return this.b.get(t);
    }, kr.prototype.set = function (t, e) {
        this.b.set(t, e);
    };
    var Lr = {
        pageview: [Zt],
        event: [ae,oe,ie,se],
        social: [ce,le,ue],
        timing: [Oe,xe,Te,Se]
    };
    function $r(t) {
        return 'prerender' != J.visibilityState && (t(), 1);
    }
    function Pr(r) {
        if (!$r(r)) {
            f(16);
            var a = !1;
            y(J, 'visibilitychange', function t() {
                if (!a && $r(r)) {
                    a = !0;
                    var e = t, n = J;
                    n.removeEventListener ? n.removeEventListener('visibilitychange', e, !1) : n.detachEvent && n.detachEvent('onvisibilitychange', e);
                }
            });
        }
    }
    function Mr(t) {
        if (h(t[0]))
            this.u = t[0];
        else {
            var e = Vr.exec(t[0]);
            if (null != e && 4 == e.length && (this.c = e[1] || 't0', this.K = e[2] || '', this.methodName = e[3], this.a = [].slice.call(t, 1), this.K || (this.A = 'create' == this.methodName, this.i = 'require' == this.methodName, this.g = 'provide' == this.methodName, this.ba = 'remove' == this.methodName), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (d(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.methodName)
                throw 'abort';
            if (this.i && (!d(e) || '' == e))
                throw 'abort';
            if (this.g && (!d(e) || '' == e || !h(t)))
                throw 'abort';
            if (Fr(this.c) || Fr(this.K))
                throw 'abort';
            if (this.g && 't0' != this.c)
                throw 'abort';
        }
    }
    kr.prototype.send = function (t) {
        if (!(arguments.length < 1)) {
            if ('string' == typeof t)
                var e = t, n = [].slice.call(arguments, 1);
            else
                e = t && t[Vt], n = arguments;
            e && ((n = O(Lr[e] || [], n))[Vt] = e, this.b.set(n, void 0, !0), this.filters.D(this.b), this.b.data.m = {});
        }
    }, kr.prototype.ma = function (t, e) {
        var n = this;
        Br(t, n, e) || (Kr(t, function () {
            Br(t, n, e);
        }), zr(String(n.get(nn)), t, void 0, e, !0));
    };
    var Ur, Dr, Gr, qr, Vr = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/;
    function Fr(t) {
        return 0 <= t.indexOf('.') || 0 <= t.indexOf(':');
    }
    function Hr(t, e) {
        Ur.set(t, e), e = qr.get(t) || [];
        for (var n = 0; n < e.length; n++)
            e[n]();
        qr.set(t, []);
    }
    Ur = new x(), Gr = new x(), qr = new x(), Dr = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    var Br = function (t, e, n) {
            e == Yr || e.get(nn);
            var r = Ur.get(t);
            return !!h(r) && (e.plugins_ = e.plugins_ || new x(), e.plugins_.get(t) || e.plugins_.set(t, new r(e, n || {})), !0);
        }, zr = function (t, e, n, r, a) {
            if (!h(Ur.get(e)) && !Gr.get(e)) {
                if (Dr.hasOwnProperty(e) && f(Dr[e]), t = Yr.j(t), Or.test(e)) {
                    if (f(52), !t)
                        return !0;
                    r = {
                        id: e,
                        B: (n = r || {}).dataLayer || 'dataLayer',
                        ia: !!t.get('anonymizeIp'),
                        sync: a,
                        G: !1
                    }, t.get('&gtm') == e && (r.G = !0);
                    var o = String(t.get('name'));
                    't0' != o && (r.target = o), I(String(t.get('trackingId'))) || (r.clientId = String(t.get(rn)), r.ka = Number(t.get(an)), n = n.palindrome ? Sr : xr, n = (n = J.cookie.replace(/^|(; +)/g, ';').match(n)) ? n.sort().join('').substring(1) : void 0, r.la = n, r.qa = N(t.b.get(Xt) || '', 'gclid')), n = r.B, o = new Date().getTime(), Y[n] = Y[n] || [], o = { 'gtm.start': o }, a || (o.event = 'gtm.js'), Y[n].push(o), l = 'https://www.google-analytics.com/gtm/js?id=' + w((c = r).id), 'dataLayer' != c.B && s('l', c.B), s('t', c.target), s('cid', c.clientId), s('cidt', c.ka), s('gac', c.la), s('aip', c.ia), c.sync && s('m', 'sync'), s('cycle', c.G), c.qa && s('gclid', c.qa), Tr.test(J.referrer) && s('cb', String(St())), n = l;
                }
                if (!n && Dr.hasOwnProperty(e) ? (f(39), n = e + '.js') : f(43), n) {
                    if (t) {
                        var i = t.get(En);
                        d(i) || (i = void 0);
                    }
                    n && 0 <= n.indexOf('/') || (n = (i ? i + '/34' : M(!1) + '/plugins/ua/') + n), t = (i = Wr(n)).protocol, r = J.location.protocol, ('https:' == t || t == r || 'http:' == t && 'http:' == r) && Xr(i) && ((i = i.url) && (t = (t = J.querySelector && J.querySelector('script[nonce]') || null) && (t.nonce || t.getAttribute && t.getAttribute('nonce')) || '', a ? (a = '', t && A.test(t) && (a = ' nonce="' + t + '"'), j.test(i) && J.write('<script' + a + ' src="' + i + '"></script>')) : ((a = J.createElement('script')).type = 'text/javascript', a.async = !0, a.src = i, t && a.setAttribute('nonce', t), (i = J.getElementsByTagName('script')[0]).parentNode.insertBefore(a, i))), Gr.set(e, !0));
                }
            }
            function s(t, e) {
                e && (l += '&' + t + '=' + w(e));
            }
            var c, l;
        }, Kr = function (t, e) {
            var n = qr.get(t) || [];
            n.push(e), qr.set(t, n);
        }, Xr = function (t) {
            var e = Wr(J.location.href);
            return !(!C(t.url, 'https://www.google-analytics.com/gtm/js?id=') && (t.query || 0 <= t.url.indexOf('?') || 0 <= t.path.indexOf('://') || (t.host != e.host || t.port != e.port) && (e = 'http:' == t.protocol ? 80 : 443, 'www.google-analytics.com' != t.host || (t.port || e) != e || !C(t.path, '/plugins/'))));
        }, Wr = function (t) {
            function e(t) {
                var e = t.hostname || '', n = 0 <= e.indexOf(']');
                return e = e.split(n ? ']' : ':')[0].toLowerCase(), n && (e += ']'), n = (t.protocol || '').toLowerCase(), n = +t.port || ('http:' == n ? 80 : 'https:' == n ? 443 : ''), t = t.pathname || '', C(t, '/') || (t = '/' + t), [e,""+n,t];
            }
            var n = J.createElement('a');
            n.href = J.location.href;
            var r = (n.protocol || '').toLowerCase(), a = e(n), o = n.search || '', i = r + '//' + a[0] + (a[1] ? ':' + a[1] : '');
            return C(t, '//') ? t = r + t : C(t, '/') ? t = i + t : !t || C(t, '?') ? t = i + a[2] + (t || o) : t.split('/')[0].indexOf(':') < 0 && (t = i + a[2].substring(0, a[2].lastIndexOf('/')) + '/' + t), n.href = t, r = e(n), {
                protocol: (n.protocol || '').toLowerCase(),
                host: r[0],
                port: r[1],
                path: r[2],
                query: n.search || '',
                url: t || ''
            };
        }, Zr = {
            ga: function () {
                Zr.f = [];
            }
        };
    Zr.ga(), Zr.D = function (t) {
        var e = Zr.J.apply(Zr, arguments);
        for (e = Zr.f.concat(e), Zr.f = []; 0 < e.length && !Zr.v(e[0]) && (e.shift(), !(0 < Zr.f.length)););
        Zr.f = Zr.f.concat(e);
    }, Zr.J = function (t) {
        for (var e = [], n = 0; n < arguments.length; n++)
            try {
                var r = new Mr(arguments[n]);
                r.g ? Hr(r.a[0], r.a[1]) : (r.i && (r.ha = zr(r.c, r.a[0], r.X, r.W)), e.push(r));
            } catch (t) {
            }
        return e;
    }, Zr.v = function (t) {
        try {
            if (t.u)
                t.u.call(Y, Yr.j('t0'));
            else {
                var e = t.c == o ? Yr : Yr.j(t.c);
                if (t.A) {
                    if ('t0' == t.c && null === (e = Yr.create.apply(Yr, t.a)))
                        return !0;
                } else if (t.ba)
                    Yr.remove(t.c);
                else if (e)
                    if (t.i) {
                        if (t.ha && (t.ha = zr(t.c, t.a[0], t.X, t.W)), !Br(t.a[0], e, t.W))
                            return !0;
                    } else if (t.K) {
                        var n = t.methodName, r = t.a, a = e.plugins_.get(t.K);
                        a[n].apply(a, r);
                    } else
                        e[t.methodName].apply(e, t.a);
            }
        } catch (t) {
        }
    };
    var Yr = function (t) {
        f(1), Zr.D.apply(Zr, [arguments]);
    };
    Yr.h = {}, Yr.P = [], Yr.L = 0, Yr.ya = 0, Yr.answer = 42;
    var Jr = [cn,un,nn];
    Yr.create = function (t) {
        var e = O(Jr, [].slice.call(arguments));
        e[nn] || (e[nn] = 't0');
        var n = '' + e[nn];
        if (Yr.h[n])
            return Yr.h[n];
        if (function (t) {
                var e;
                if (B(t[Sn]) && (void 0 === Z && (e = (e = sr.get()) && e._ga || void 0) && (Z = e, f(81)), void 0 !== Z))
                    return t[rn] || (t[rn] = Z), 0;
                if (t[Sn]) {
                    if (f(67), t[mn] && 'cookie' != t[mn])
                        return;
                    if (void 0 !== Z)
                        t[rn] || (t[rn] = Z);
                    else {
                        t: {
                            e = String(t[un] || _());
                            var n = String(t[fn] || '/'), r = R(String(t[ln] || '_ga'));
                            if (!(e = Yn(r, e, n)) || c.test(e))
                                e = !0;
                            else if (0 == (e = R('AMP_TOKEN')).length)
                                e = !0;
                            else {
                                if (1 == e.length && ('$RETRIEVING' == (e = decodeURIComponent(e[0])) || '$OPT_OUT' == e || '$ERROR' == e || '$NOT_FOUND' == e)) {
                                    e = !0;
                                    break t;
                                }
                                e = !1;
                            }
                        }
                        if (e && function t(e, n) {
                                var r = R('AMP_TOKEN');
                                return 1 < r.length ? (f(55), !1) : '$OPT_OUT' == (r = decodeURIComponent(r[0] || '')) || '$ERROR' == r || I(n) ? (f(62), !1) : at.test(J.referrer) || '$NOT_FOUND' != r ? void 0 !== Z ? (f(56), E(function () {
                                    e(Z);
                                }, 0), !0) : K ? (it.push(e), !0) : '$RETRIEVING' == r ? (f(57), E(function () {
                                    t(e, n);
                                }, 10000), !0) : (K = !0, r && '$' != r[0] || (lt('$RETRIEVING', 30000), setTimeout(ct, 30000), r = ''), !!st(r, n) && (it.push(e), !0)) : (f(68), !1);
                            }(H, String(t[cn])))
                            return 1;
                    }
                }
            }(e))
            return null;
        if (e = new kr(e), Yr.h[n] = e, Yr.P.push(e), h(n = q().tracker_created))
            try {
                n(e);
            } catch (t) {
            }
        return e;
    }, Yr.remove = function (t) {
        for (var e = 0; e < Yr.P.length; e++)
            if (Yr.P[e].get(nn) == t) {
                Yr.P.splice(e, 1), Yr.h[t] = null;
                break;
            }
    }, Yr.j = function (t) {
        return Yr.h[t];
    }, Yr.getAll = function () {
        return Yr.P.slice(0);
    }, Yr.N = function () {
        'ga' != o && f(49);
        var t = Y[o];
        if (!t || 42 != t.answer) {
            Yr.L = t && t.l, Yr.ya = +new Date(), Yr.loaded = !0;
            var e = Y[o] = Yr;
            if (Un('create', e, e.create), Un('remove', e, e.remove), Un('getByName', e, e.j, 5), Un('getAll', e, e.getAll, 6), Un('get', e = kr.prototype, e.get, 7), Un('set', e, e.set, 4), Un('send', e, e.send), Un('requireSync', e, e.ma), Un('get', e = Ct.prototype, e.get), Un('set', e, e.set), 'https:' != J.location.protocol && !i) {
                t: {
                    e = J.getElementsByTagName('script');
                    for (var n = 0; n < e.length && n < 100; n++) {
                        var r = e[n].src;
                        if (r && 0 == r.indexOf(M(!0) + '/analytics')) {
                            e = !0;
                            break t;
                        }
                    }
                    e = !1;
                }
                e && (i = !0);
            }
            e = ((Y.gaplugins = Y.gaplugins || {}).Linker = gr).prototype, Hr('linker', gr), Un('decorate', e, e.ca, 20), Un('autoLink', e, e.S, 25), Hr('displayfeatures', br), Hr('adfeatures', br), t = t && t.q, T(t) ? Zr.D.apply(Yr, t) : f(50);
        }
    }, Yr.da = function () {
        for (var t = Yr.getAll(), e = 0; e < t.length; e++)
            t[e].get(nn);
    };
    var Qr = Yr.N, ta = Y[o];
    ta && ta.r ? Qr() : Pr(Qr), Pr(function () {
        Zr.D(["provide","render",m]);
    });
}(window);
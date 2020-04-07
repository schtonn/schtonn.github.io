'use strict';
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
    return typeof t;
} : function (t) {
    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
};
!function () {
    function t(t, e) {
        t = t.split('.');
        var n, r = h;
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
        p.addEventListener ? p.addEventListener(t, e, !1) : p.attachEvent && p.attachEvent('on' + t, e);
    }
    function a() {
        e.TAGGING = e.TAGGING || [], e.TAGGING[1] = !0;
    }
    function s(t, e) {
        'protocol' !== (e = e && String(e).toLowerCase()) && 'port' !== e || (t.protocol = w(t.protocol) || w(d.location.protocol)), 'port' === e ? t.port = String(Number(t.hostname ? t.port : d.location.port) || ('http' == t.protocol ? 80 : 'https' == t.protocol ? 443 : '')) : 'host' === e && (t.hostname = (t.hostname || d.location.hostname).replace(m, '').toLowerCase());
        var n = w(t.protocol);
        switch (e = e && String(e).toLowerCase()) {
        case 'url_no_fragment':
            e = '', t && t.href && (e = (e = t.href.indexOf('#')) < 0 ? t.href : t.href.substr(0, e)), t = e;
            break;
        case 'protocol':
            t = n;
            break;
        case 'host':
            t = t.hostname.replace(m, '').toLowerCase();
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
        var e = p.createElement('a');
        t && (e.href = t);
        var n = e.pathname;
        return '/' !== n[0] && (t || a(), n = '/' + n), t = e.hostname.replace(m, ''), {
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
    var l, f, g, h = this || self, d = window, p = document, v = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, e = {}, m = /:[0-9]+$/, w = function (t) {
            return t ? t.replace(':', '').toLowerCase() : '';
        };
    function _() {
        for (var t = l, e = {}, n = 0; n < t.length; ++n)
            e[t[n]] = n;
        return e;
    }
    function b() {
        var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return (t += t.toLowerCase() + '0123456789-_') + '.';
    }
    function y(t) {
        l = l || b(), f = f || _();
        for (var e = [], n = 0; n < t.length; n += 3) {
            var r = n + 1 < t.length, a = n + 2 < t.length, o = t.charCodeAt(n), i = r ? t.charCodeAt(n + 1) : 0, s = a ? t.charCodeAt(n + 2) : 0, c = o >> 2;
            o = (3 & o) << 4 | i >> 4, i = (15 & i) << 2 | s >> 6, s &= 63, a || (s = 64, r || (i = 64)), e.push(l[c], l[o], l[i], l[s]);
        }
        return e.join('');
    }
    function k(r) {
        function t(t) {
            for (; a < r.length;) {
                var e = r.charAt(a++), n = f[e];
                if (null != n)
                    return n;
                if (!/^[\s\xa0]*$/.test(e))
                    throw Error('Unknown base64 encoding at char: ' + e);
            }
            return t;
        }
        l = l || b(), f = f || _();
        for (var e = '', a = 0;;) {
            var n = t(-1), o = t(0), i = t(64), s = t(64);
            if (64 === s && -1 === n)
                return e;
            e += String.fromCharCode(n << 2 | o >> 4), 64 != i && (e += String.fromCharCode(o << 4 & 240 | i >> 2), 64 != s && (e += String.fromCharCode(i << 6 & 192 | s)));
        }
    }
    function O() {
        function t(t) {
            e(t.target || t.srcElement || {});
        }
        var e = D, n = G, r = S();
        if (!r.init) {
            o('mousedown', t), o('keyup', t), o('submit', function (t) {
                n(t.target || t.srcElement || {});
            });
            var a = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                n(this), a.call(this);
            }, r.init = !0;
        }
    }
    function x(t, e, n) {
        for (var r = S().decorators, a = {}, o = 0; o < r.length; ++o) {
            var i, s = r[o];
            if (i = !n || s.forms)
                t: {
                    var c = t;
                    if ((i = s.domains) && (s.sameHost || c !== p.location.hostname))
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
    var S = function () {
            var t = {}, e = d.google_tag_data;
            return d.google_tag_data = void 0 === e ? t : e, (e = (t = d.google_tag_data).gl) && e.decorators || (e = { decorators: [] }, t.gl = e), e;
        }, T = /(.*?)\*(.*?)\*(.*)/, C = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function j(t) {
        return new RegExp('(.*?)(^|&)' + t + '=([^&]*)&?(.*)');
    }
    function A(t) {
        var e, n = [];
        for (e in t)
            if (t.hasOwnProperty(e)) {
                var r = t[e];
                void 0 !== r && r == r && null !== r && '[object Object]' !== r.toString() && (n.push(e), n.push(y(String(r))));
            }
        return t = n.join('*'), ["1",N(t),t].join('*');
    }
    var N = function (t, e) {
        if (t = [window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1e3)-(void 0===e?0:e),t].join('*'), !(e = g)) {
            e = Array(256);
            for (var n = 0; n < 256; n++) {
                for (var r = n, a = 0; a < 8; a++)
                    r = 1 & r ? r >>> 1 ^ 3988292384 : r >>> 1;
                e[n] = r;
            }
        }
        for (g = e, e = 4294967295, n = 0; n < t.length; n++)
            e = e >>> 8 ^ g[255 & (e ^ t.charCodeAt(n))];
        return ((-1 ^ e) >>> 0).toString(36);
    };
    function E(t, e) {
        if (t = j(t).exec(e)) {
            var n = t[2], r = t[4];
            e = t[1], r && (e = e + n + r);
        }
        return e;
    }
    var I = function (t, e, n) {
            function r(t, e) {
                return (t = E('_gl', t)).length && (t = e + t), t;
            }
            if (d.history && d.history.replaceState) {
                var a = j('_gl');
                (a.test(e) || a.test(n)) && (t = s(t, 'path'), e = r(e, '?'), n = r(n, '#'), d.history.replaceState({}, void 0, '' + t + e + n));
            }
        }, R = function (t) {
            var e = void 0 === e ? 3 : e;
            try {
                if (t) {
                    t: {
                        for (var n = 0; n < 3; ++n) {
                            var r = T.exec(t);
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
                                if (o === N(i, a)) {
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
        };
    function L(n, t, e, r) {
        function a(t) {
            var e = (t = E(n, t)).charAt(t.length - 1);
            return t && '&' !== e && (t += '&'), t + s;
        }
        r = void 0 !== r && r;
        var o = C.exec(e);
        if (!o)
            return '';
        e = o[1];
        var i = o[2] || '';
        o = o[3] || '';
        var s = n + '=' + t;
        return r ? o = '#' + a(o.substring(1)) : i = '?' + a(i.substring(1)), '' + e + i + o;
    }
    function $(t, e) {
        var n = 'FORM' === (t.tagName || '').toUpperCase(), r = x(e, 1, n), a = x(e, 2, n);
        for (var o in (e = x(e, 3, n), i(r) && (r = A(r), n ? U('_gl', r, t) : M('_gl', r, t, !1)), !n && i(a) && M('_gl', n = A(a), t, !0), e))
            e.hasOwnProperty(o) && P(o, e[o], t);
    }
    function P(t, e, n, r) {
        if (n.tagName) {
            if ('a' === n.tagName.toLowerCase())
                return M(t, e, n, r);
            if ('form' === n.tagName.toLowerCase())
                return U(t, e, n);
        }
        if ('string' == typeof n)
            return L(t, e, n, r);
    }
    function M(t, e, n, r) {
        n.href && (t = L(t, e, n.href, void 0 !== r && r), v.test(t) && (n.href = t));
    }
    function U(t, e, n) {
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
                a || ((r = p.createElement('input')).setAttribute('type', 'hidden'), r.setAttribute('name', t), r.setAttribute('value', e), n.appendChild(r));
            } else
                'post' === r && (t = L(t, e, n.action), v.test(t) && (n.action = t));
        }
    }
    var D = function (t) {
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
                    'http:' !== r && 'https:' !== r || $(n, n.hostname);
                }
            } catch (t) {
            }
        }, G = function (t) {
            try {
                if (t.action)
                    $(t, s(c(t.action), 'host'));
            } catch (t) {
            }
        };
    t('google_tag_data.glBridge.auto', function (t, e, n, r) {
        O(), t = {
            callback: t,
            domains: e,
            fragment: 2 === (n = 'fragment' === n ? 2 : 1),
            placement: n,
            forms: !!r,
            sameHost: !1
        }, S().decorators.push(t);
    }), t('google_tag_data.glBridge.decorate', function (t, e, n) {
        return P('_gl', t = A(t), e, !!n);
    }), t('google_tag_data.glBridge.generate', A), t('google_tag_data.glBridge.get', function (t, e) {
        var i, n = (i = !!e, function (t) {
                var e = c(d.location.href), n = e.search.replace('?', '');
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
                t.query = R(r || '') || {}, a = (r = s(e, 'fragment')).match(j('_gl')), t.fragment = R(a && a[3] || '') || {}, i && I(e, n, r);
            });
        return (e = S()).data || (e.data = {
            query: {},
            fragment: {}
        }, n(e.data)), n = {}, (e = e.data) && (u(n, e.query), t && u(n, e.fragment)), n;
    });
}(window), function () {
    function i(t) {
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
    var o = e || 'ga', c = /^(?:utma\.)?\d+\.\d+$/, l = /^amp-[\w.-]{22,64}$/, s = !1, u = new a();
    function f(t) {
        u.set(t);
    }
    function g(t) {
        t = S(t), t = new a(t);
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
        for (var t = W.navigator.userAgent + (Z.cookie ? Z.cookie : '') + (Z.referrer ? Z.referrer : ''), e = t.length, n = W.history.length; 0 < n;)
            t += n-- ^ e++;
        return [Tt()^2147483647&i(t),Math.round((new Date).getTime()/1e3)].join('.');
    }
    function v(t) {
        var e = Z.createElement('img');
        return e.width = 1, e.height = 1, e.src = t, e;
    }
    function m() {
    }
    function w(t) {
        return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (f(28), t);
    }
    function _(t, e, n, r) {
        try {
            t.addEventListener ? t.addEventListener(e, n, !!r) : t.attachEvent && t.attachEvent('on' + e, n);
        } catch (t) {
            f(27);
        }
    }
    function b(t, e) {
        return N(Z.location[e ? 'href' : 'search'], t);
    }
    function y() {
        var t = '' + Z.location.hostname;
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
            return t = t.get(De), T(t) || (t = []), t;
        }, T = function (t) {
            return '[object Array]' == Object.prototype.toString.call(Object(t));
        }, C = function (t, e) {
            return 0 == t.indexOf(e);
        }, j = /^[\w\-:/.?=&%!\[\]]+$/, A = /^[\w+/_-]+[=]{0,2}$/, N = function (t, e) {
            return (t = t.match('(?:&|#|\\?)' + w(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1') + '=([^&#]*)')) && 2 == t.length ? t[1] : '';
        };
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
    function E(t, e) {
        return setTimeout(t, e);
    }
    function I(t) {
        var e = Y._gaUserPrefs;
        if (e && e.ioo && e.ioo() || t && !0 === Y['ga-disable-' + t])
            return 1;
        try {
            var n = Y.external;
            if (n && n._gaUserPrefs && 'oo' == n._gaUserPrefs)
                return 1;
        } catch (t) {
        }
        for (t = [], e = String(J.cookie || document.cookie).split(';'), n = 0; n < e.length; n++) {
            var r = e[n].split('='), a = r[0].replace(/^\s*|\s*$/g, '');
            a && 'AMP_TOKEN' == a && ((r = r.slice(1).join('=').replace(/^\s*|\s*$/g, '')) && (r = decodeURIComponent(r)), t.push(r));
        }
        for (e = 0; e < t.length; e++)
            if ('$OPT_OUT' == t[e])
                return 1;
        return !!J.getElementById('__gaOptOutExtension');
    }
    function R(t) {
        var e = [], n = Z.cookie.split(';');
        t = new RegExp('^\\s*' + t + '=\\s*(.*?)\\s*$');
        for (var r = 0; r < n.length; r++) {
            var a = n[r].match(t);
            a && e.push(a[1]);
        }
        return e;
    }
    function L(t, e, n, r, a, o, i) {
        if (a = !I(a) && !(tt.test(Z.location.hostname) || '/' == n && Q.test(r))) {
            if (e && 1200 < e.length && (e = e.substring(0, 1200)), n = t + '=' + e + '; path=' + n + '; ', o && (n += 'expires=' + new Date(new Date().getTime() + o).toGMTString() + '; '), r && 'none' !== r && (n += 'domain=' + r + ';'), i && (n += i + ';'), r = Z.cookie, Z.cookie = n, !(r = r != Z.cookie))
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
        if (void 0 !== W.__ga4__)
            return W.__ga4__;
        if (void 0 === H) {
            var t = W.navigator.userAgent;
            if (t) {
                var e = t;
                try {
                    e = decodeURIComponent(t);
                } catch (t) {
                }
                (t = !(0 <= e.indexOf('Chrome') || 0 <= e.indexOf('CriOS') || !(0 <= e.indexOf('Safari/') || 0 <= e.indexOf('Safari,')))) && (t = 11 <= ((e = et.exec(e)) ? Number(e[1]) : -1)), H = t;
            } else
                H = !1;
        }
        return H;
    }
    function M(t) {
        return (t || s || 'https:' == Z.location.protocol ? 'https:' : 'http:') + '//www.google-analytics.com';
    }
    function U(t) {
        this.name = 'len', this.message = t + '-8192';
    }
    function D(t, e, n) {
        if (n = n || m, e.length <= 2036)
            gt(t, e, n);
        else {
            if (!(e.length <= 8192))
                throw pt('len', e.length), new U(e.length);
            dt(t, e, n) || ht(t, e, n) || gt(t, e, n);
        }
    }
    function G(t, e, n, r) {
        ht(t + '?' + e, '', r = r || m, n);
    }
    function q() {
        return W.gaData = W.gaData || {};
    }
    function V(t) {
        var e = q();
        return e[t] = e[t] || {};
    }
    function F() {
        this.M = [];
    }
    var H, B, z, K, X, W = window, Z = document, Y = window, J = document, Q = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, tt = /(^|\.)doubleclick\.net$/i, et = /^.*Version\/?(\d+)[^\d].*$/i, nt = /^https?:\/\/[^/]*cdn\.ampproject\.org\//, rt = /^(?:www\.|m\.|amp\.)+/, at = [], ot = function () {
            ta.D([m]);
        }, it = function t(e, n) {
            var r = R('AMP_TOKEN');
            return 1 < r.length ? (f(55), !1) : '$OPT_OUT' == (r = decodeURIComponent(r[0] || '')) || '$ERROR' == r || I(n) ? (f(62), !1) : nt.test(Z.referrer) || '$NOT_FOUND' != r ? void 0 !== X ? (f(56), E(function () {
                e(X);
            }, 0), !0) : B ? (at.push(e), !0) : '$RETRIEVING' == r ? (f(57), E(function () {
                t(e, n);
            }, 10000), !0) : (B = !0, r && '$' != r[0] || (lt('$RETRIEVING', 30000), setTimeout(ct, 30000), r = ''), !!st(r, n) && (at.push(e), !0)) : (f(68), !1);
        }, st = function e(n, r, a) {
            if (!window.JSON)
                return f(58), !1;
            var t = W.XMLHttpRequest;
            if (!t)
                return f(59), !1;
            var o = new t();
            return 'withCredentials' in o ? (o.open('POST', (a || 'https://ampcid.google.com/v1/publisher:getClientId') + '?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM', !0), o.withCredentials = !0, o.setRequestHeader('Content-Type', 'text/plain'), o.onload = function () {
                if (B = !1, 4 == o.readyState) {
                    try {
                        200 != o.status && (f(61), ut('', '$ERROR', 30000));
                        var t = JSON.parse(o.responseText);
                        t.optOut ? (f(63), ut('', '$OPT_OUT', 31536000000)) : t.clientId ? ut(t.clientId, t.securityToken, 31536000000) : !a && t.alternateUrl ? (z && clearTimeout(z), B = !0, e(n, r, t.alternateUrl)) : (f(64), ut('', '$NOT_FOUND', 3600000));
                    } catch (t) {
                        f(65), ut('', '$ERROR', 30000);
                    }
                    o = null;
                }
            }, t = { originScope: 'AMP_ECID_GOOGLE' }, n && (t.securityToken = n), o.send(JSON.stringify(t)), z = E(function () {
                f(66), ut('', '$ERROR', 30000);
            }, 10000), !0) : (f(60), !1);
        }, ct = function () {
            B = !1;
        }, lt = function (t, e) {
            if (void 0 === K) {
                K = '';
                for (var n = nr(), r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (L('AMP_TOKEN', encodeURIComponent(t), '/', a, '', e))
                        return void (K = a);
                }
            }
            L('AMP_TOKEN', encodeURIComponent(t), '/', K, '', e);
        }, ut = function (t, e, n) {
            for (z && clearTimeout(z), e && lt(e, n), X = t, e = at, at = [], n = 0; n < e.length; n++)
                e[n](t);
        }, ft = function (t) {
            t: {
                if (nt.test(Z.referrer)) {
                    var e = Z.location.hostname.replace(rt, '');
                    e: {
                        var n = Z.referrer, r = (n = n.replace(/^https?:\/\//, '')).replace(/^[^/]+/, '').split('/'), a = r[2];
                        if (!(r = (r = 's' == a ? r[3] : a) ? decodeURIComponent(r) : r)) {
                            if (0 == n.indexOf('xn--')) {
                                n = '';
                                break e;
                            }
                            (n = n.match(/(.*)\.cdn\.ampproject\.org\/?$/)) && 2 == n.length && (r = n[1].replace(/-/g, '.').replace(/\.\./g, '-'));
                        }
                        n = r ? r.replace(rt, '') : '';
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
        }, gt = function (t, e, n) {
            var r = v(t + '?' + e);
            r.onload = r.onerror = function () {
                r.onload = null, r.onerror = null, n();
            };
        }, ht = function (t, e, r, a) {
            var n = W.XMLHttpRequest;
            if (!n)
                return !1;
            var o = new n();
            return 'withCredentials' in o && (t = t.replace(/^http:/, 'https:'), o.open('POST', t, !0), o.withCredentials = !0, o.setRequestHeader('Content-Type', 'text/plain'), o.onreadystatechange = function () {
                if (4 == o.readyState) {
                    if (a)
                        try {
                            var t = o.responseText;
                            if (t.length < 1)
                                pt('xhr', 'ver', '0'), r();
                            else if ('1' != t.charAt(0))
                                pt('xhr', 'ver', String(t.length)), r();
                            else if (3 < a.count++)
                                pt('xhr', 'tmr', '' + a.count), r();
                            else if (1 == t.length)
                                r();
                            else {
                                var e = t.charAt(1);
                                if ('d' == e)
                                    G('https://stats.g.doubleclick.net/j/collect', a.U, a, r);
                                else if ('g' == e) {
                                    gt('https://www.google.%/ads/ga-audiences'.replace('%', 'com'), a.google, r);
                                    var n = t.substring(2);
                                    n && (/^[a-z.]{1,6}$/.test(n) ? gt('https://www.google.%/ads/ga-audiences'.replace('%', n), a.google, m) : pt('tld', 'bcc', n));
                                } else
                                    pt('xhr', 'brc', e), r();
                            }
                        } catch (t) {
                            pt('xhr', 'rsp'), r();
                        }
                    else
                        r();
                    o = null;
                }
            }, o.send(e), !0);
        }, dt = function (t, e, n) {
            return !!W.navigator.sendBeacon && (!!W.navigator.sendBeacon(t, e) && (n(), !0));
        }, pt = function (t, e, n) {
            1 <= 100 * Math.random() || I('?') || (t = ["t=error","_e="+t,"_v=j81","sr=1"], e && t.push('_f=' + e), n && t.push('_m=' + w(n.substring(0, 100))), t.push('aip=1'), t.push('z=' + Tt()), gt(M(!0) + '/u/d', t.join('&'), m));
        };
    function vt(t) {
        if (100 != t.get(yn) && i(At(t, an)) % 10000 >= 100 * Nt(t, yn))
            throw 'abort';
    }
    function mt(t) {
        if (I(At(t, ln)))
            throw 'abort';
    }
    function wt() {
        var t = Z.location.protocol;
        if ('http:' != t && 'https:' != t)
            throw 'abort';
    }
    function _t(n) {
        try {
            W.navigator.sendBeacon ? f(42) : W.XMLHttpRequest && 'withCredentials' in new W.XMLHttpRequest() && f(40);
        } catch (t) {
        }
        n.set(Ue, g(n), !0), n.set(Xt, Nt(n, Xt) + 1);
        var r = [];
        Pt.map(function (t, e) {
            e.F && (null != (t = n.get(t)) && t != e.defaultValue && ('boolean' == typeof t && (t *= 1), r.push(e.F + '=' + w('' + t))));
        }), !1 === n.get(Un) && r.push('npa=1'), r.push('z=' + St()), n.set(Bt, r.join('&'), !0);
    }
    function bt(t) {
        var e = At(t, Kt);
        !e && t.get(zt) && (e = 'beacon');
        var n = At(t, Rn), r = At(t, In), a = n || (r ? r + '/3' : M(!1) + '/collect');
        switch (At(t, Pn)) {
        case 'd':
            a = n || (r ? r + '/32' : M(!1) + '/j/collect'), e = t.get($n) || void 0, G(a, At(t, Bt), e, t.Z(Ht));
            break;
        case 'b':
            a = n || (r ? r + '/31' : M(!1) + '/r/collect');
        default:
            e ? (n = At(t, Bt), r = (r = t.Z(Ht)) || m, 'image' == e ? gt(a, n, r) : 'xhr' == e && ht(a, n, r) || 'beacon' == e && dt(a, n, r) || D(a, n, r)) : D(a, At(t, Bt), t.Z(Ht));
        }
        a = At(t, ln), e = (a = V(a)).hitcount, a.hitcount = e ? e + 1 : 1, a = At(t, ln), delete V(a).pending_experiments, t.set(Ht, m, !0);
    }
    function yt(t) {
        q().expId && t.set(je, q().expId), q().expVar && t.set(Ae, q().expVar);
        var e = At(t, ln);
        if (e = V(e).pending_experiments) {
            var n = [];
            for (r in e)
                e.hasOwnProperty(r) && e[r] && n.push(encodeURIComponent(r) + '.' + encodeURIComponent(e[r]));
            var r = n.join('!');
        } else
            r = void 0;
        r && t.set(Ne, r, !0);
    }
    function kt() {
        if (W.navigator && 'preview' == W.navigator.loadPurpose)
            throw 'abort';
    }
    function Ot(t) {
        var e = W.gaDevIds;
        T(e) && 0 != e.length && t.set('&did', e.join(','), !0);
    }
    function xt(t) {
        if (!t.get(ln))
            throw 'abort';
    }
    F.prototype.add = function (t) {
        this.M.push(t);
    }, F.prototype.D = function (t) {
        try {
            for (var e = 0; e < this.M.length; e++) {
                var n = t.get(this.M[e]);
                n && h(n) && n.call(W, t);
            }
        } catch (t) {
        }
        (e = t.get(Ht)) != m && h(e) && (t.set(Ht, m, !0), setTimeout(e, 10));
    };
    function St() {
        try {
            var t = new Uint32Array(1);
            return W.crypto.getRandomValues(t), 2147483647 & t[0];
        } catch (t) {
            return Tt();
        }
    }
    var Tt = function () {
        return Math.round(2147483647 * Math.random());
    };
    function Ct(t) {
        var e = Nt(t, Le);
        500 <= e && f(15);
        var n = At(t, Ft);
        if ('transaction' != n && 'item' != n) {
            n = Nt(t, Pe);
            var r = new Date().getTime(), a = Nt(t, $e);
            if (0 == a && t.set($e, r), 0 < (a = Math.round(2 * (r - a) / 1000)) && (n = Math.min(n + a, 20), t.set($e, r)), n <= 0)
                throw 'abort';
            t.set(Pe, --n);
        }
        t.set(Le, ++e);
    }
    function jt() {
        this.data = new x();
    }
    jt.prototype.get = function (t) {
        var e = Ut(t), n = this.data.get(t);
        return e && null == n && (n = h(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, n) : n;
    };
    function At(t, e) {
        return null == (t = t.get(e)) ? '' : '' + t;
    }
    function Nt(t, e) {
        return null == (t = t.get(e)) || '' === t ? 0 : Number(t);
    }
    jt.prototype.Z = function (t) {
        return (t = this.get(t)) && h(t) ? t : m;
    }, jt.prototype.set = function (t, e, n) {
        if (t)
            if ('object' == (void 0 === t ? 'undefined' : _typeof(t)))
                for (var r in t)
                    t.hasOwnProperty(r) && $t(this, r, t[r], n);
            else
                $t(this, t, e, n);
    };
    function Et(t, e, n, r, a) {
        this.name = t, this.F = e, this.Z = r, this.o = a, this.defaultValue = n;
    }
    function It(t, e, n, r, a) {
        return t = new Et(t, e, n, r, a), Pt.set(t.name, t), t.name;
    }
    function Rt(t, e) {
        Mt.push([new RegExp("^"+t+"$"),e]);
    }
    function Lt(t, e, n) {
        return It(t, e, n, void 0, Dt);
    }
    var $t = function (t, e, n, r) {
            if (null != n)
                switch (e) {
                case ln:
                    $r.test(n);
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
        }, Dt = function () {
        }, Gt = Lt('apiVersion', 'v'), qt = Lt('clientVersion', '_v');
    It('anonymizeIp', 'aip');
    var Vt = It('adSenseId', 'a'), Ft = It('hitType', 't'), Ht = It('hitCallback'), Bt = It('hitPayload');
    It('nonInteraction', 'ni'), It('currencyCode', 'cu'), It('dataSource', 'ds');
    var zt = It('useBeacon', void 0, !1), Kt = It('transport');
    It('sessionControl', 'sc', ''), It('sessionGroup', 'sg'), It('queueTime', 'qt');
    var Xt = It('_s', '_s');
    It('screenName', 'cd');
    var Wt = It('location', 'dl', ''), Zt = It('referrer', 'dr'), Yt = It('page', 'dp', '');
    It('hostname', 'dh');
    var Jt = It('language', 'ul'), Qt = It('encoding', 'de');
    It('title', 'dt', function () {
        return Z.title || void 0;
    }), Rt('contentGroup([0-9]+)', function (t) {
        return new Et(t[0], 'cg' + t[1]);
    });
    var te = It('screenColors', 'sd'), ee = It('screenResolution', 'sr'), ne = It('viewportSize', 'vp'), re = It('javaEnabled', 'je'), ae = It('flashVersion', 'fl');
    It('campaignId', 'ci'), It('campaignName', 'cn'), It('campaignSource', 'cs'), It('campaignMedium', 'cm'), It('campaignKeyword', 'ck'), It('campaignContent', 'cc');
    var oe = It('eventCategory', 'ec'), ie = It('eventAction', 'ea'), se = It('eventLabel', 'el'), ce = It('eventValue', 'ev'), le = It('socialNetwork', 'sn'), ue = It('socialAction', 'sa'), fe = It('socialTarget', 'st'), ge = It('l1', 'plt'), he = It('l2', 'pdt'), de = It('l3', 'dns'), pe = It('l4', 'rrt'), ve = It('l5', 'srt'), me = It('l6', 'tcp'), we = It('l7', 'dit'), _e = It('l8', 'clt'), be = It('l9', '_gst'), ye = It('l10', '_gbt'), ke = It('l11', '_cst'), Oe = It('l12', '_cbt'), xe = It('timingCategory', 'utc'), Se = It('timingVar', 'utv'), Te = It('timingLabel', 'utl'), Ce = It('timingValue', 'utt');
    It('appName', 'an'), It('appVersion', 'av', ''), It('appId', 'aid', ''), It('appInstallerId', 'aiid', ''), It('exDescription', 'exd'), It('exFatal', 'exf');
    var je = It('expId', 'xid'), Ae = It('expVar', 'xvar'), Ne = It('exp', 'exp'), Ee = It('_utma', '_utma'), Ie = It('_utmz', '_utmz'), Re = It('_utmht', '_utmht'), Le = It('_hc', void 0, 0), $e = It('_ti', void 0, 0), Pe = It('_to', void 0, 20);
    Rt('dimension([0-9]+)', function (t) {
        return new Et(t[0], 'cd' + t[1]);
    }), Rt('metric([0-9]+)', function (t) {
        return new Et(t[0], 'cm' + t[1]);
    }), It('linkerParam', void 0, void 0, function (t) {
        if (t.get(Me))
            return f(35), lr.generate(_r(t));
        var e = At(t, an), n = At(t, xn) || '';
        return e = '_ga=2.' + w(hr(n + e, 0) + '.' + n + '-' + e), t = (t = br(t)) ? (f(44), '&_gac=1.' + w([hr(t.qa,0),t.timestamp,t.qa].join('.'))) : '', e + t;
    }, Dt);
    var Me = Lt('_cd2l', void 0, !1), Ue = It('usage', '_u'), De = It('_um');
    It('forceSSL', void 0, void 0, function () {
        return s;
    }, function (t, e, n) {
        f(34), s = !!n;
    });
    var Ge = It('_j1', 'jid'), qe = It('_j2', 'gjid');
    Rt('\\&(.*)', function (t) {
        var n, r, e = new Et(t[0], t[1]), a = (n = t[0].substring(1), Pt.map(function (t, e) {
                e.F == n && (r = e);
            }), r && r.name);
        return a && (e.Z = function (t) {
            return t.get(a);
        }, e.o = function (t, e, n, r) {
            t.set(a, n, r);
        }, e.F = void 0), e;
    });
    var Ve = Lt('_oot'), Fe = It('previewTask'), He = It('checkProtocolTask'), Be = It('validationTask'), ze = It('checkStorageTask'), Ke = It('historyImportTask'), Xe = It('samplerTask'), We = It('_rlt'), Ze = It('buildHitTask'), Ye = It('sendHitTask'), Je = It('ceTask'), Qe = It('devIdTask'), tn = It('timingTask'), en = It('displayFeaturesTask'), nn = It('customTask'), rn = Lt('name'), an = Lt('clientId', 'cid'), on = Lt('clientIdTime'), sn = Lt('storedClientId'), cn = It('userId', 'uid'), ln = Lt('trackingId', 'tid'), un = Lt('cookieName', void 0, '_ga'), fn = Lt('cookieDomain'), gn = Lt('cookiePath', void 0, '/'), hn = Lt('cookieExpires', void 0, 63072000), dn = Lt('cookieUpdate', void 0, !0), pn = Lt('cookieFlags', void 0, ''), vn = Lt('legacyCookieDomain'), mn = Lt('legacyHistoryImport', void 0, !0), wn = Lt('storage', void 0, 'cookie'), _n = Lt('allowLinker', void 0, !1), bn = Lt('allowAnchor', void 0, !0), yn = Lt('sampleRate', 'sf', 100), kn = Lt('siteSpeedSampleRate', void 0, 1), On = Lt('alwaysSendReferrer', void 0, !1), xn = Lt('_gid', '_gid'), Sn = Lt('_gcn'), Tn = Lt('useAmpClientId'), Cn = Lt('_gclid'), jn = Lt('_gt'), An = Lt('_ge', void 0, 7776000000), Nn = Lt('_gclsrc'), En = Lt('storeGac', void 0, !0), In = It('_x_19'), Rn = It('transportUrl'), Ln = It('_r', '_r'), $n = It('_dp'), Pn = It('_jt', void 0, 'n'), Mn = It('allowAdFeatures', void 0, !0), Un = It('allowAdPersonalizationSignals', void 0, !0);
    function Dn(e, t, n, r) {
        t[e] = function () {
            try {
                return r && f(r), n.apply(this, arguments);
            } catch (t) {
                throw pt('exc', e, t && t.name), t;
            }
        };
    }
    function Gn() {
        this.V = 100, this.$ = this.fa = !1, this.oa = 'detourexp', this.groups = 1;
    }
    function qn(o) {
        return function (t) {
            if ('pageview' == t.get(Ft) && !o.I) {
                o.I = !0;
                var e = (r = t, a = Math.min(Nt(r, kn), 100), !(i(At(r, an)) % 100 >= a)), n = 0 < N(At(t, Wt), 'gclid').length;
                (e || n) && function t(e) {
                    var n = {};
                    if (Bn(n) || zn(n)) {
                        var r = n[ge];
                        null == r || 1 / 0 == r || isNaN(r) || (0 < r ? (Kn(n, de), Kn(n, me), Kn(n, ve), Kn(n, he), Kn(n, pe), Kn(n, we), Kn(n, _e), Kn(n, be), Kn(n, ye), Kn(n, ke), Kn(n, Oe), E(function () {
                            e(n);
                        }, 10)) : _(W, 'load', function () {
                            t(e);
                        }, !1));
                    }
                }(function (t) {
                    e && o.send('timing', t), n && o.send('adtiming', t);
                });
            }
            var r, a;
        };
    }
    function Vn(t) {
        if ('cookie' == At(t, wn)) {
            if (t.get(dn) || At(t, sn) != At(t, an)) {
                var e = 1000 * Nt(t, hn);
                Wn(t, an, un, e);
            }
            if (!t.get(dn) && Zn(t) == At(t, xn) || Wn(t, xn, Sn, 86400000), t.get(En)) {
                var n = At(t, Cn);
                if (n) {
                    var r = Math.min(Nt(t, An), 1000 * Nt(t, hn));
                    r = Math.min(r, 1000 * Nt(t, jn) + r - new Date().getTime()), t.data.set(An, r), e = {};
                    var a = At(t, jn), o = At(t, Nn), i = rr(At(t, gn)), s = er(At(t, fn)), c = At(t, ln);
                    t = At(t, pn), o && 'aw.ds' != o ? e && (e.ua = !0) : (n = ["1",a,$(n)].join('.'), 0 < r && (e && (e.ta = !0), L('_gac_' + $(c), n, i, s, c, r, t))), or(e);
                }
            } else
                f(75);
        }
    }
    function Fn(t) {
        if ('cookie' == At(t, wn) && !Xn && (Vn(t), !Xn))
            throw 'abort';
    }
    function Hn(t) {
        if (t.get(mn)) {
            var e = At(t, fn), n = At(t, vn) || y(), r = ir('__utma', n, e);
            r && (f(19), t.set(Re, new Date().getTime(), !0), t.set(Ee, r.R), (e = ir('__utmz', n, e)) && r.hash == e.hash && t.set(Ie, e.R));
        }
    }
    var Bn = function (t) {
            var e = W.performance || W.webkitPerformance;
            if (!(e = e && e.timing))
                return !1;
            var n = e.navigationStart;
            return 0 != n && (t[ge] = e.loadEventStart - n, t[de] = e.domainLookupEnd - e.domainLookupStart, t[me] = e.connectEnd - e.connectStart, t[ve] = e.responseStart - e.requestStart, t[he] = e.responseEnd - e.responseStart, t[pe] = e.fetchStart - n, t[we] = e.domInteractive - n, t[_e] = e.domContentLoadedEventStart - n, t[be] = ea.L - n, t[ye] = ea.ya - n, W.google_tag_manager && W.google_tag_manager._li && (e = W.google_tag_manager._li, t[ke] = e.cst, t[Oe] = e.cbt), !0);
        }, zn = function (t) {
            if (W.top != W)
                return !1;
            var e = W.external, n = e && e.onloadT;
            return e && !e.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && e.setPageReadyTime(), null != n && (t[ge] = n, !0);
        }, Kn = function (t, e) {
            var n = t[e];
            (isNaN(n) || 1 / 0 == n || n < 0) && (t[e] = void 0);
        }, Xn = !1, Wn = function (t, e, n, r) {
            var a = Yn(t, e);
            if (a) {
                n = At(t, n);
                var o = rr(At(t, gn)), i = er(At(t, fn)), s = At(t, pn), c = At(t, ln);
                if ('auto' != i)
                    L(n, a, o, i, c, r, s) && (Xn = !0);
                else {
                    f(32);
                    for (var l = nr(), u = 0; u < l.length; u++)
                        if (i = l[u], t.data.set(fn, i), a = Yn(t, e), L(n, a, o, i, c, r, s))
                            return void (Xn = !0);
                    t.data.set(fn, 'auto');
                }
            }
        }, Zn = function (t) {
            var e = R(At(t, Sn));
            return Jn(t, e);
        }, Yn = function (t, e) {
            e = $(At(t, e));
            var n = er(At(t, fn)).split('.').length;
            return 1 < (t = ar(At(t, gn))) && (n += '-' + t), e ? ["GA1",n,e].join('.') : '';
        }, Jn = function (t, e) {
            return Qn(e, At(t, fn), At(t, gn));
        }, Qn = function (t, e, n) {
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
                    return f(14), 1 == (r = tr(r, er(e).split('.').length, 0)).length ? r[0].s : (1 < (r = tr(r, ar(n), 1)).length && f(41), r[0] && r[0].s);
                f(12);
            }
        }, tr = function (t, e, n) {
            for (var r, a = [], o = [], i = 0; i < t.length; i++) {
                var s = t[i];
                s.H[n] == e ? a.push(s) : null == r || s.H[n] < r ? (o = [s], r = s.H[n]) : s.H[n] == r && o.push(s);
            }
            return 0 < a.length ? a : o;
        }, er = function (t) {
            return 0 == t.indexOf('.') ? t.substr(1) : t;
        }, nr = function () {
            var t = [], e = y().split('.');
            if (4 == e.length) {
                var n = e[e.length - 1];
                if (parseInt(n, 10) == n)
                    return ["none"];
            }
            for (n = e.length - 2; 0 <= n; n--)
                t.push(e.slice(n).join('.'));
            return e = Z.location.hostname, tt.test(e) || Q.test(e) || t.push('none'), t;
        }, rr = function (t) {
            return t ? (1 < t.length && t.lastIndexOf('/') == t.length - 1 && (t = t.substr(0, t.length - 1)), 0 != t.indexOf('/') && (t = '/' + t), t) : '/';
        }, ar = function (t) {
            return '/' == (t = rr(t)) ? 1 : t.split('/').length;
        }, or = function (t) {
            t.ta && f(77), t.na && f(74), t.pa && f(73), t.ua && f(69);
        };
    function ir(t, e, n) {
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
            return 1 != r.length && (sr(e, r) || sr(n, r) || sr(null, r)) || r[0];
    }
    function sr(t, e) {
        if (null == t)
            var n = t = 1;
        else
            n = i(t), t = i(C(t, '.') ? t.substring(1) : '.' + t);
        for (var r = 0; r < e.length; r++)
            if (e[r].hash == n || e[r].hash == t)
                return e[r];
    }
    var cr = new RegExp(/^https?:\/\/([^\/:]+)/), lr = W.google_tag_data.glBridge, ur = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/, fr = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;
    function gr(t, e) {
        var n = new Date(), r = W.navigator, a = r.plugins || [];
        for (t = [t,r.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e], e = 0; e < a.length; ++e)
            t.push(a[e].description);
        return i(t.join('.'));
    }
    function hr(t, e) {
        var n = new Date(), r = W.navigator, a = n.getHours() + Math.floor((n.getMinutes() + e) / 60);
        return i([t,r.userAgent,r.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate()+Math.floor(a/24),(24+a)%24,(60+n.getMinutes()+e)%60].join('.'));
    }
    function dr(t) {
        f(48), this.target = t, this.T = !1;
    }
    dr.prototype.ca = function (t, e) {
        if (t) {
            if (this.target.get(Me))
                return lr.decorate(_r(this.target), t, e);
            if (t.tagName) {
                if ('a' == t.tagName.toLowerCase())
                    return void (t.href && (t.href = pr(this, t.href, e)));
                if ('form' == t.tagName.toLowerCase())
                    return vr(this, t);
            }
            if ('string' == typeof t)
                return pr(this, t, e);
        }
    };
    var pr = function (t, e, n) {
            var r = ur.exec(e);
            r && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : '')), (r = fr.exec(e)) && 3 <= r.length && (e = r[1] + (r[3] ? r[2] + r[3] : '')), t = t.target.get('linkerParam');
            var a = e.indexOf('?');
            return r = e.indexOf('#'), n ? e += (-1 == r ? '#' : '&') + t : (n = -1 == a ? '?' : '&', e = -1 == r ? e + (n + t) : e.substring(0, r) + n + t + e.substring(r)), (e = e.replace(/&+_ga=/, '&_ga=')).replace(/&+_gac=/, '&_gac=');
        }, vr = function (t, e) {
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
                        i || ((o = Z.createElement('input')).setAttribute('type', 'hidden'), o.setAttribute('name', r), o.setAttribute('value', a), e.appendChild(o));
                    }
                } else
                    'post' == e.method.toLowerCase() && (e.action = pr(t, e.action));
        };
    function mr(t, e) {
        if (e != Z.location.hostname)
            for (var n = 0; n < t.length; n++)
                if (t[n] instanceof RegExp) {
                    if (t[n].test(e))
                        return 1;
                } else if (0 <= e.indexOf(t[n]))
                    return 1;
    }
    function wr(t, e) {
        return e != gr(t, 0) && e != gr(t, -1) && e != gr(t, -2) && e != hr(t, 0) && e != hr(t, -1) && e != hr(t, -2);
    }
    function _r(t) {
        var e = br(t);
        return {
            _ga: t.get(an),
            _gid: t.get(xn) || void 0,
            _gac: e ? [e.qa,e.timestamp].join('.') : void 0
        };
    }
    function br(t) {
        function e(t) {
            return null == t || '' === t ? 0 : Number(t);
        }
        var n = t.get(Cn);
        if (n && t.get(En)) {
            var r = e(t.get(jn));
            if (!(1000 * r + e(t.get(An)) <= new Date().getTime()))
                return {
                    timestamp: r,
                    qa: n
                };
            f(76);
        }
    }
    dr.prototype.S = function (r, a, t) {
        function e(t) {
            try {
                t = t || W.event;
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
                ('http:' == n.protocol || 'https:' == n.protocol) && mr(r, n.hostname || '') && n.href && (n.href = pr(o, n.href, a));
            } catch (t) {
                f(26);
            }
        }
        var o = this;
        this.target.get(Me) ? lr.auto(function () {
            return _r(o.target);
        }, r, a ? 'fragment' : '', t) : (this.T || (this.T = !0, _(Z, 'mousedown', e, !1), _(Z, 'keyup', e, !1)), t && _(Z, 'submit', function (t) {
            if ((t = (t = t || W.event).target || t.srcElement) && t.action) {
                var e = t.action.match(cr);
                e && mr(r, e[1]) && vr(o, t);
            }
        }));
    };
    function yr(t, e, n) {
        this.aa = e, (e = n) || (e = (e = At(t, rn)) && 't0' != e ? Lr.test(e) ? '_gat_' + $(At(t, ln)) : '_gat_' + $(e) : '_gat'), this.Y = e, this.ra = null;
    }
    function kr(t, e) {
        if (!(t = t.b).get('dcLoaded')) {
            var n, r = new a(S(t));
            r.set(29), t.set(De, r.w), (e = e || {})[un] && (n = $(e[un])), function (r, t) {
                var n = t.get(Ze);
                t.set(Ze, function (t) {
                    Ar(r, t, Ge), Ar(r, t, qe);
                    var e = n(t);
                    return Nr(r, t), e;
                });
                var a = t.get(Ye);
                t.set(Ye, function (t) {
                    var e = a(t);
                    if (Er(t)) {
                        if (P() !== Rr(r, t)) {
                            f(80);
                            var n = {
                                U: Ir(r, t, 1),
                                google: Ir(r, t, 2),
                                count: 0
                            };
                            G('https://stats.g.doubleclick.net/j/collect', n.U, n);
                        } else
                            v(Ir(r, t, 0));
                        t.set(Ge, '', !0);
                    }
                    return e;
                });
            }(e = new yr(t, 'https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&', n), t), t.set('dcLoaded', !0);
        }
    }
    function Or(t) {
        if (!t.get('dcLoaded') && 'cookie' == t.get(wn)) {
            var e = new yr(t);
            if (Ar(e, t, Ge), Ar(e, t, qe), Nr(e, t), Er(t)) {
                var n = P() !== Rr(e, t);
                t.set(Ln, 1, !0), n ? (f(79), t.set(Pn, 'd', !0), t.set($n, {
                    U: Ir(e, t, 1),
                    google: Ir(e, t, 2),
                    count: 0
                }, !0)) : t.set(Pn, 'b', !0);
            }
        }
    }
    function xr(t) {
        function n(t, e) {
            o.b.data.set(t, e);
        }
        function e(t, e) {
            n(t, e), o.filters.add(t);
        }
        var r, a, o = this;
        this.b = new jt(), this.filters = new F(), n(rn, t[rn]), n(ln, (r = t[ln]) ? r.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : ''), n(un, t[un]), n(fn, t[fn] || y()), n(gn, t[gn]), n(hn, t[hn]), n(dn, t[dn]), n(pn, t[pn]), n(vn, t[vn]), n(mn, t[mn]), n(_n, t[_n]), n(bn, t[bn]), n(yn, t[yn]), n(kn, t[kn]), n(On, t[On]), n(wn, t[wn]), n(cn, t[cn]), n(on, t[on]), n(Tn, t[Tn]), n(En, t[En]), n(Me, t[Me]), n(In, t[In]), n(Gt, 1), n(qt, 'j81'), e(Ve, mt), e(nn, m), e(Fe, kt), e(He, wt), e(Be, xt), e(ze, Fn), e(Ke, Hn), e(Xe, vt), e(We, Ct), e(Je, yt), e(Qe, Ot), e(en, Or), e(Ze, _t), e(Ye, bt), e(tn, qn(this)), Mr(this.b), Pr(this.b, t[an]), this.b.set(Vt, (a = W.gaGlobal = W.gaGlobal || {}).hid = a.hid || Tt());
    }
    var Sr = /^(GTM|OPT)-[A-Z0-9]+$/, Tr = /;_gaexp=[^;]*/g, Cr = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g, jr = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/, Ar = function (t, e, n) {
            !1 === e.get(Mn) || e.get(n) || ('1' == R(t.Y)[0] ? e.set(n, '', !0) : e.set(n, '' + Tt(), !0));
        }, Nr = function (t, e) {
            Er(e) && L(t.Y, '1', At(e, gn), At(e, fn), At(e, ln), 60000, At(e, pn));
        }, Er = function (t) {
            return !!t.get(Ge) && !1 !== t.get(Mn);
        }, Ir = function (t, e, n) {
            function r(t) {
                Ut(t).F && a.set(Ut(t).F, e.get(t));
            }
            var a = new x();
            r(Gt), r(qt), r(ln), r(an), r(Ge), 0 != n && 1 != n || (r(cn), r(qe), r(xn)), a.set(Ut(Ue).F, g(e));
            var o = '';
            return a.map(function (t, e) {
                o += w(t) + '=', o += w('' + e) + '&';
            }), o += 'z=' + Tt(), 0 == n ? o = t.aa + o : 1 == n ? o = 't=dc&aip=1&_r=3&' + o : 2 == n && (o = 't=sr&aip=1&_r=4&slf_rd=1&' + o), o;
        }, Rr = function (t, e) {
            return null === t.ra && (t.ra = 1 === function (t) {
                var e, n = new Gn();
                if (n.fa && n.$)
                    return 0;
                if (n.$ = !0, t) {
                    if (n.oa && void 0 !== t.get(n.oa))
                        return Nt(t, n.oa);
                    if (0 == t.get(kn))
                        return 0;
                }
                return 0 == n.V ? 0 : (void 0 === e && (e = St()), 0 == e % n.V ? Math.floor(e / n.V) % n.groups + 1 : 0);
            }(e), t.ra && f(33)), t.ra;
        }, Lr = /^gtm\d+$/, $r = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/, Pr = function (t, e) {
            var n = At(t, un);
            if (t.data.set(Sn, '_ga' == n ? '_gid' : n + '_gid'), 'cookie' == At(t, wn)) {
                if (Xn = !1, n = R(At(t, un)), !(n = Jn(t, n))) {
                    n = At(t, fn);
                    var r = At(t, vn) || y();
                    n = null != (n = ir('__utma', r, n)) ? (f(10), n.O[1] + '.' + n.O[2]) : void 0;
                }
                if (n && (Xn = !0), r = n && !t.get(dn))
                    if (2 != (r = n.split('.')).length)
                        r = !1;
                    else if (r = Number(r[1])) {
                        var a = Nt(t, hn);
                        r = r + a < new Date().getTime() / 1000;
                    } else
                        r = !1;
                if (r && (n = void 0), n && (t.data.set(sn, n), t.data.set(an, n), (n = Zn(t)) && t.data.set(xn, n)), t.get(En) && (n = t.get(Cn), r = t.get(Nn), !n || r && 'aw.ds' != r)) {
                    if (n = {}, Z) {
                        r = [], a = Z.cookie.split(';');
                        for (var o = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, i = 0; i < a.length; i++) {
                            var s = a[i].match(o);
                            s && r.push({
                                ja: s[1],
                                value: s[2]
                            });
                        }
                        if (a = {}, r && r.length)
                            for (o = 0; o < r.length; o++)
                                '1' != (i = r[o].value.split('.'))[0] || 3 != i.length ? n && (n.na = !0) : i[1] && (a[r[o].ja] ? n && (n.pa = !0) : a[r[o].ja] = [], a[r[o].ja].push({
                                    timestamp: i[1],
                                    qa: i[2]
                                }));
                        r = a;
                    } else
                        r = {};
                    r = r[At(t, ln)], or(n), r && 0 != r.length && (n = r[0], t.data.set(jn, n.timestamp), t.data.set(Cn, n.qa));
                }
            }
            if (t.get(dn) && (n = b('_ga', !!t.get(bn)), o = b('_gl', !!t.get(bn)), a = (r = lr.get(t.get(bn)))._ga, o && 0 < o.indexOf('_ga*') && !a && f(30), o = r.gclid, i = r._gac, n || a || o || i))
                if (n && a && f(36), t.get(_n) || ft(t.get(Tn))) {
                    if (a && (f(38), t.data.set(an, a), r._gid && (f(51), t.data.set(xn, r._gid))), o ? (f(82), t.data.set(Cn, o), r.gclsrc && t.data.set(Nn, r.gclsrc)) : i && (r = i.split('.')) && 2 === r.length && (f(37), t.data.set(Cn, r[0]), t.data.set(jn, r[1])), n)
                        t:
                            if (r = n.indexOf('.'), -1 == r)
                                f(22);
                            else {
                                if (a = n.substring(0, r), r = (o = n.substring(r + 1)).indexOf('.'), n = o.substring(0, r), o = o.substring(r + 1), '1' == a) {
                                    if (wr(r = o, n)) {
                                        f(23);
                                        break t;
                                    }
                                } else {
                                    if ('2' != a) {
                                        f(22);
                                        break t;
                                    }
                                    if (a = '', r = 0 < (r = o.indexOf('-')) ? (a = o.substring(0, r), o.substring(r + 1)) : o.substring(1), wr(a + r, n)) {
                                        f(53);
                                        break t;
                                    }
                                    a && (f(2), t.data.set(xn, a));
                                }
                                f(11), t.data.set(an, r), (n = b('_gac', !!t.get(bn))) && ('1' != (n = n.split('.'))[0] || 4 != n.length ? f(72) : wr(n[3], n[1]) ? f(71) : (t.data.set(Cn, n[3]), t.data.set(jn, n[2]), f(70)));
                            }
                } else
                    f(21);
            e && (f(9), t.data.set(an, w(e))), t.get(an) || ((e = (e = W.gaGlobal && W.gaGlobal.vid) && -1 != e.search(c) ? e : void 0) ? (f(17), t.data.set(an, e)) : (f(8), t.data.set(an, p()))), t.get(xn) || (f(3), t.data.set(xn, p())), Vn(t);
        }, Mr = function (t) {
            var e = W.navigator, n = W.screen, r = Z.location;
            if (t.set(Zt, function (t, e) {
                    var n = Z.referrer;
                    if (/^(https?|android-app):\/\//i.test(n)) {
                        if (t)
                            return n;
                        if (t = '//' + Z.location.hostname, !k(n, t))
                            return e && (e = t.replace(/\./g, '-') + '.cdn.ampproject.org', k(n, e)) ? void 0 : n;
                    }
                }(!!t.get(On), !!t.get(Tn))), r) {
                var a = r.pathname || '';
                '/' != a.charAt(0) && (f(31), a = '/' + a), t.set(Wt, r.protocol + '//' + r.hostname + a + r.search);
            }
            n && t.set(ee, n.width + 'x' + n.height), n && t.set(te, n.colorDepth + '-bit'), n = Z.documentElement;
            var o = (a = Z.body) && a.clientWidth && a.clientHeight, i = [];
            if (n && n.clientWidth && n.clientHeight && ('CSS1Compat' === Z.compatMode || !o) ? i = [n.clientWidth,n.clientHeight] : o && (i = [a.clientWidth,a.clientHeight]), n = i[0] <= 0 || i[1] <= 0 ? '' : i.join('x'), t.set(ne, n), t.set(ae, function () {
                    var t, e;
                    if ((e = (e = W.navigator) ? e.plugins : null) && e.length)
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
                }()), t.set(Qt, Z.characterSet || Z.charset), t.set(re, e && 'function' == typeof e.javaEnabled && e.javaEnabled() || !1), t.set(Jt, (e && (e.language || e.browserLanguage) || '').toLowerCase()), t.data.set(Cn, b('gclid', !0)), t.data.set(Nn, b('gclsrc', !0)), t.data.set(jn, Math.round(new Date().getTime() / 1000)), r && t.get(bn) && (e = Z.location.hash)) {
                for (e = e.split(/[?&#]+/), r = [], n = 0; n < e.length; ++n)
                    (C(e[n], 'utm_id') || C(e[n], 'utm_campaign') || C(e[n], 'utm_source') || C(e[n], 'utm_medium') || C(e[n], 'utm_term') || C(e[n], 'utm_content') || C(e[n], 'gclid') || C(e[n], 'dclid') || C(e[n], 'gclsrc')) && r.push(e[n]);
                0 < r.length && (e = '#' + r.join('&'), t.set(Wt, t.get(Wt) + e));
            }
        };
    xr.prototype.get = function (t) {
        return this.b.get(t);
    }, xr.prototype.set = function (t, e) {
        this.b.set(t, e);
    };
    var Ur = {
        pageview: [Yt],
        event: [oe,ie,se,ce],
        social: [le,ue,fe],
        timing: [xe,Se,Ce,Te]
    };
    xr.prototype.send = function (t) {
        if (!(arguments.length < 1)) {
            if ('string' == typeof t)
                var e = t, n = [].slice.call(arguments, 1);
            else
                e = t && t[Ft], n = arguments;
            e && ((n = O(Ur[e] || [], n))[Ft] = e, this.b.set(n, void 0, !0), this.filters.D(this.b), this.b.data.m = {});
        }
    }, xr.prototype.ma = function (t, e) {
        var n = this;
        Wr(t, n, e) || (Yr(t, function () {
            Wr(t, n, e);
        }), Zr(String(n.get(rn)), t, void 0, e, !0));
    };
    function Dr(t) {
        return 'prerender' != Z.visibilityState && (t(), !0);
    }
    function Gr(r) {
        if (!Dr(r)) {
            f(16);
            var a = !1;
            _(Z, 'visibilitychange', function t() {
                if (!a && Dr(r)) {
                    a = !0;
                    var e = t, n = Z;
                    n.removeEventListener ? n.removeEventListener('visibilitychange', e, !1) : n.detachEvent && n.detachEvent('onvisibilitychange', e);
                }
            });
        }
    }
    function qr(t) {
        if (h(t[0]))
            this.u = t[0];
        else {
            var e = zr.exec(t[0]);
            if (null != e && 4 == e.length && (this.c = e[1] || 't0', this.K = e[2] || '', this.methodName = e[3], this.a = [].slice.call(t, 1), this.K || (this.A = 'create' == this.methodName, this.i = 'require' == this.methodName, this.g = 'provide' == this.methodName, this.ba = 'remove' == this.methodName), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (d(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), e = t[1], t = t[2], !this.methodName)
                throw 'abort';
            if (this.i && (!d(e) || '' == e))
                throw 'abort';
            if (this.g && (!d(e) || '' == e || !h(t)))
                throw 'abort';
            if (Kr(this.c) || Kr(this.K))
                throw 'abort';
            if (this.g && 't0' != this.c)
                throw 'abort';
        }
    }
    var Vr, Fr, Hr, Br, zr = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/;
    function Kr(t) {
        return 0 <= t.indexOf('.') || 0 <= t.indexOf(':');
    }
    Vr = new x(), Hr = new x(), Br = new x(), Fr = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    function Xr(t, e) {
        Vr.set(t, e), e = Br.get(t) || [];
        for (var n = 0; n < e.length; n++)
            e[n]();
        Br.set(t, []);
    }
    var Wr = function (t, e, n) {
            e == ea || e.get(rn);
            var r = Vr.get(t);
            return !!h(r) && (e.plugins_ = e.plugins_ || new x(), e.plugins_.get(t) || e.plugins_.set(t, new r(e, n || {})), !0);
        }, Zr = function (t, e, n, r, a) {
            if (!h(Vr.get(e)) && !Hr.get(e)) {
                if (Fr.hasOwnProperty(e) && f(Fr[e]), t = ea.j(t), Sr.test(e)) {
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
                    't0' != o && (r.target = o), I(String(t.get('trackingId'))) || (r.clientId = String(t.get(an)), r.ka = Number(t.get(on)), n = n.palindrome ? Cr : Tr, n = (n = Z.cookie.replace(/^|(; +)/g, ';').match(n)) ? n.sort().join('').substring(1) : void 0, r.la = n, r.qa = N(t.b.get(Wt) || '', 'gclid')), n = r.B, o = new Date().getTime(), W[n] = W[n] || [], o = { 'gtm.start': o }, a || (o.event = 'gtm.js'), W[n].push(o), l = 'https://www.google-analytics.com/gtm/js?id=' + w((c = r).id), 'dataLayer' != c.B && s('l', c.B), s('t', c.target), s('cid', c.clientId), s('cidt', c.ka), s('gac', c.la), s('aip', c.ia), c.sync && s('m', 'sync'), s('cycle', c.G), c.qa && s('gclid', c.qa), jr.test(Z.referrer) && s('cb', String(Tt())), n = l;
                }
                if (!n && Fr.hasOwnProperty(e) ? (f(39), n = e + '.js') : f(43), n) {
                    if (t) {
                        var i = t.get(In);
                        d(i) || (i = void 0);
                    }
                    n && 0 <= n.indexOf('/') || (n = (i ? i + '/34' : M(!1) + '/plugins/ua/') + n), t = (i = Qr(n)).protocol, r = Z.location.protocol, ('https:' == t || t == r || 'http:' == t && 'http:' == r) && Jr(i) && ((i = i.url) && (t = (t = Z.querySelector && Z.querySelector('script[nonce]') || null) && (t.nonce || t.getAttribute && t.getAttribute('nonce')) || '', a ? (a = '', t && A.test(t) && (a = ' nonce="' + t + '"'), j.test(i) && Z.write('<script' + a + ' src="' + i + '"></script>')) : ((a = Z.createElement('script')).type = 'text/javascript', a.async = !0, a.src = i, t && a.setAttribute('nonce', t), (i = Z.getElementsByTagName('script')[0]).parentNode.insertBefore(a, i))), Hr.set(e, !0));
                }
            }
            function s(t, e) {
                e && (l += '&' + t + '=' + w(e));
            }
            var c, l;
        }, Yr = function (t, e) {
            var n = Br.get(t) || [];
            n.push(e), Br.set(t, n);
        }, Jr = function (t) {
            var e = Qr(Z.location.href);
            return !!C(t.url, 'https://www.google-analytics.com/gtm/js?id=') || !(t.query || 0 <= t.url.indexOf('?') || 0 <= t.path.indexOf('://')) && (t.host == e.host && t.port == e.port || (e = 'http:' == t.protocol ? 80 : 443, !('www.google-analytics.com' != t.host || (t.port || e) != e || !C(t.path, '/plugins/'))));
        }, Qr = function (t) {
            function e(t) {
                var e = t.hostname || '', n = 0 <= e.indexOf(']');
                return e = e.split(n ? ']' : ':')[0].toLowerCase(), n && (e += ']'), n = (t.protocol || '').toLowerCase(), n = +t.port || ('http:' == n ? 80 : 'https:' == n ? 443 : ''), t = t.pathname || '', C(t, '/') || (t = '/' + t), [e,""+n,t];
            }
            var n = Z.createElement('a');
            n.href = Z.location.href;
            var r = (n.protocol || '').toLowerCase(), a = e(n), o = n.search || '', i = r + '//' + a[0] + (a[1] ? ':' + a[1] : '');
            return C(t, '//') ? t = r + t : C(t, '/') ? t = i + t : !t || C(t, '?') ? t = i + a[2] + (t || o) : t.split('/')[0].indexOf(':') < 0 && (t = i + a[2].substring(0, a[2].lastIndexOf('/')) + '/' + t), n.href = t, r = e(n), {
                protocol: (n.protocol || '').toLowerCase(),
                host: r[0],
                port: r[1],
                path: r[2],
                query: n.search || '',
                url: t || ''
            };
        }, ta = {
            ga: function () {
                ta.f = [];
            }
        };
    ta.ga(), ta.D = function (t) {
        var e = ta.J.apply(ta, arguments);
        for (e = ta.f.concat(e), ta.f = []; 0 < e.length && !ta.v(e[0]) && (e.shift(), !(0 < ta.f.length)););
        ta.f = ta.f.concat(e);
    }, ta.J = function (t) {
        for (var e = [], n = 0; n < arguments.length; n++)
            try {
                var r = new qr(arguments[n]);
                r.g ? Xr(r.a[0], r.a[1]) : (r.i && (r.ha = Zr(r.c, r.a[0], r.X, r.W)), e.push(r));
            } catch (t) {
            }
        return e;
    }, ta.v = function (t) {
        try {
            if (t.u)
                t.u.call(W, ea.j('t0'));
            else {
                var e = t.c == o ? ea : ea.j(t.c);
                if (t.A) {
                    if ('t0' == t.c && null === (e = ea.create.apply(ea, t.a)))
                        return !0;
                } else if (t.ba)
                    ea.remove(t.c);
                else if (e)
                    if (t.i) {
                        if (t.ha && (t.ha = Zr(t.c, t.a[0], t.X, t.W)), !Wr(t.a[0], e, t.W))
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
    var ea = function (t) {
        f(1), ta.D.apply(ta, [arguments]);
    };
    ea.h = {}, ea.P = [], ea.L = 0, ea.ya = 0, ea.answer = 42;
    var na = [ln,fn,rn];
    ea.create = function (t) {
        var e = O(na, [].slice.call(arguments));
        e[rn] || (e[rn] = 't0');
        var n = '' + e[rn];
        if (ea.h[n])
            return ea.h[n];
        if (function (t) {
                if (ft(t[Tn])) {
                    var e;
                    if (void 0 === X)
                        (e = (e = lr.get()) && e._ga || void 0) && (X = e, f(81));
                    if (void 0 !== X)
                        return t[an] || (t[an] = X), !1;
                }
                if (t[Tn]) {
                    if (f(67), t[wn] && 'cookie' != t[wn])
                        return !1;
                    if (void 0 !== X)
                        t[an] || (t[an] = X);
                    else {
                        t: {
                            e = String(t[fn] || y());
                            var n = String(t[gn] || '/'), r = R(String(t[un] || '_ga'));
                            if (!(e = Qn(r, e, n)) || c.test(e))
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
                        if (e && it(ot, String(t[ln])))
                            return !0;
                    }
                }
                return !1;
            }(e))
            return null;
        if (e = new xr(e), ea.h[n] = e, ea.P.push(e), n = q().tracker_created, h(n))
            try {
                n(e);
            } catch (t) {
            }
        return e;
    }, ea.remove = function (t) {
        for (var e = 0; e < ea.P.length; e++)
            if (ea.P[e].get(rn) == t) {
                ea.P.splice(e, 1), ea.h[t] = null;
                break;
            }
    }, ea.j = function (t) {
        return ea.h[t];
    }, ea.getAll = function () {
        return ea.P.slice(0);
    }, ea.N = function () {
        'ga' != o && f(49);
        var t = W[o];
        if (!t || 42 != t.answer) {
            ea.L = t && t.l, ea.ya = +new Date(), ea.loaded = !0;
            var e = W[o] = ea;
            if (Dn('create', e, e.create), Dn('remove', e, e.remove), Dn('getByName', e, e.j, 5), Dn('getAll', e, e.getAll, 6), Dn('get', e = xr.prototype, e.get, 7), Dn('set', e, e.set, 4), Dn('send', e, e.send), Dn('requireSync', e, e.ma), Dn('get', e = jt.prototype, e.get), Dn('set', e, e.set), 'https:' != Z.location.protocol && !s) {
                t: {
                    e = Z.getElementsByTagName('script');
                    for (var n = 0; n < e.length && n < 100; n++) {
                        var r = e[n].src;
                        if (r && 0 == r.indexOf(M(!0) + '/analytics')) {
                            e = !0;
                            break t;
                        }
                    }
                    e = !1;
                }
                e && (s = !0);
            }
            e = ((W.gaplugins = W.gaplugins || {}).Linker = dr).prototype, Xr('linker', dr), Dn('decorate', e, e.ca, 20), Dn('autoLink', e, e.S, 25), Xr('displayfeatures', kr), Xr('adfeatures', kr), t = t && t.q, T(t) ? ta.D.apply(ea, t) : f(50);
        }
    }, ea.da = function () {
        for (var t = ea.getAll(), e = 0; e < t.length; e++)
            t[e].get(rn);
    };
    var ra = ea.N, aa = W[o];
    aa && aa.r ? ra() : Gr(ra), Gr(function () {
        ta.D(["provide","render",m]);
    });
}(window);
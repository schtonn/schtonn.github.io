'use strict';
var aa, ba, ca, da, fa, ga, ha, ja, z, la, ma, na, pa, qa, sa, ta, ua, va, wa, xa, ya, za, Ba, A, Da, Fa, Ha, Ia, Ja, G, Ka, La, Ma, Na, Oa, Pa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t;
    } : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
    }, jc = {};
'function' != typeof Object.getPrototypeOf && (Object.getPrototypeOf = 'object' === _typeof('test'.__proto__) ? function (t) {
    return t.__proto__;
} : function (t) {
    return t.constructor.prototype;
}), function () {
    function t(t, i, s, h) {
        this.set(t, i, s, h);
    }
    function i() {
        this.ab = this.$a = this.cb = this.bb = this.ob = this.nb = this.Ga = this.Fa = 0;
    }
    function s(t, i, s, h) {
        d = t < i ? s < h ? (b = t < s ? t : s, h < i ? i : h) : (b = t < h ? t : h, s < i ? i : s) : s < h ? (b = i < s ? i : s, h < t ? t : h) : (b = i < h ? i : h, s < t ? t : s);
    }
    function h() {
        this.items = this.Fd = null, this.Nh = 0, w && (this.Fd = new Set()), this.Ug = [], this.ue = !0;
    }
    function e(t) {
        k[x++] = t;
    }
    function n() {
        this.Z = this.Vk = this.y = this.Il = 0;
    }
    function o(t) {
        this.lb = [], this.gj = this.ij = this.jj = this.hj = 0, this.oi(t);
    }
    function r(t, i) {
        this.Ml = t, this.Ll = i, this.cells = {};
    }
    function a(t, i) {
        this.Ml = t, this.Ll = i, this.cells = {};
    }
    function c(t, i, s) {
        var h;
        return T.length ? ((h = T.pop()).rm = t, h.x = i, h.y = s, h) : new ba(t, i, s);
    }
    function p(t, i, s) {
        this.rm = t, this.x = i, this.y = s, this.sb = new ca();
    }
    function u(t, i, s) {
        var h;
        return E.length ? ((h = E.pop()).rm = t, h.x = i, h.y = s, h) : new da(t, i, s);
    }
    function f(t, i, s) {
        this.rm = t, this.x = i, this.y = s, this.sb = [], this.mg = !0, this.Cd = new ca(), this.eh = !1;
    }
    function l(t, i) {
        return t.pd - i.pd;
    }
    fa = function (t) {
        window.console && window.console.log && window.console.log(t);
    }, ga = function (t) {
        window.console && window.console.error && window.console.error(t);
    }, aa = function (t) {
        return t;
    }, ha = function (t) {
        return void 0 === t;
    }, ja = function (t) {
        return 'number' == typeof t;
    }, z = function (t) {
        return 'string' == typeof t;
    }, la = function (t) {
        return 0 < t && 0 == (t - 1 & t);
    }, ma = function (t) {
        --t;
        for (var i = 1; i < 32; i <<= 1)
            t |= t >> i;
        return t + 1;
    }, na = function (t) {
        return t < 0 ? -t : t;
    }, pa = function (t, i) {
        return i < t ? t : i;
    }, qa = function (t, i) {
        return t < i ? t : i;
    }, sa = Math.PI, ta = function (t) {
        return 0 <= t ? 0 | t : (0 | t) - 1;
    }, ua = function (t) {
        var i = 0 | t;
        return i === t ? i : 1 + i;
    }, va = function (t, i, s, h, e, n, o, r) {
        var a, c, p, u;
        return p = e < o ? (u = e, o) : (u = o, e), !((a = t < s ? (c = t, s) : (c = s, t)) < u || p < c) && (p = n < r ? (u = n, r) : (u = r, n), !((a = i < h ? (c = i, h) : (c = h, i)) < u || p < c) && (a = e - t + o - s, c = n - i + r - h, r = na((i = h - i) * (e = o - e) - (n = r - n) * (t = s - t)), !(na(e * c - n * a) > r) && na(t * c - i * a) <= r));
    }, t.prototype.set = function (t, i, s, h) {
        this.left = t, this.top = i, this.right = s, this.bottom = h;
    }, t.prototype.Vf = function (t) {
        this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom;
    }, t.prototype.width = function () {
        return this.right - this.left;
    }, t.prototype.height = function () {
        return this.bottom - this.top;
    }, t.prototype.offset = function (t, i) {
        return this.left += t, this.top += i, this.right += t, this.bottom += i, this;
    }, t.prototype.normalize = function () {
        var t = 0;
        this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t);
    }, t.prototype.Ww = function (t) {
        return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom);
    }, t.prototype.Xw = function (t, i, s) {
        return !(t.right + i < this.left || t.bottom + s < this.top || t.left + i > this.right || t.top + s > this.bottom);
    }, t.prototype.Ib = function (t, i) {
        return t >= this.left && t <= this.right && i >= this.top && i <= this.bottom;
    }, t.prototype.oh = function (t) {
        return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom;
    }, wa = t, i.prototype.ni = function (t) {
        this.Fa = t.left, this.Ga = t.top, this.nb = t.right, this.ob = t.top, this.bb = t.right, this.cb = t.bottom, this.$a = t.left, this.ab = t.bottom;
    }, i.prototype.Br = function (t, i) {
        if (0 === i)
            this.ni(t);
        else {
            var s = Math.sin(i), h = Math.cos(i), e = t.left * s, n = t.top * s, o = t.right * s, r = (s = t.bottom * s, t.left * h), a = t.top * h, c = t.right * h;
            h = t.bottom * h;
            this.Fa = r - n, this.Ga = a + e, this.nb = c - n, this.ob = a + o, this.bb = c - s, this.cb = h + o, this.$a = r - s, this.ab = h + e;
        }
    }, i.prototype.offset = function (t, i) {
        return this.Fa += t, this.Ga += i, this.nb += t, this.ob += i, this.bb += t, this.cb += i, this.$a += t, this.ab += i, this;
    };
    var b = 0, d = 0;
    i.prototype.To = function (t) {
        s(this.Fa, this.nb, this.bb, this.$a), t.left = b, t.right = d, s(this.Ga, this.ob, this.cb, this.ab), t.top = b, t.bottom = d;
    }, i.prototype.Ib = function (t, i) {
        var s = this.Fa, h = this.Ga, e = this.nb - s, n = this.ob - h, o = this.bb - s, r = this.cb - h, a = t - s, c = i - h, p = e * o + n * r, u = o * o + r * r, f = o * a + r * c, l = 1 / ((b = e * e + n * n) * u - p * p), b = (b * f - p * (n = e * a + n * c)) * l;
        return 0 <= (e = (u * n - p * f) * l) && 0 < b && e + b < 1 || (b = ((b = (e = this.$a - s) * e + (n = this.ab - h) * n) * f - (p = e * o + n * r) * (n = e * a + n * c)) * (l = 1 / (b * u - p * p)), 0 <= (e = (u * n - p * f) * l) && 0 < b && e + b < 1);
    }, i.prototype.pc = function (t, i) {
        if (i)
            switch (t) {
            case 0:
                return this.Fa;
            case 1:
                return this.nb;
            case 2:
                return this.bb;
            case 3:
                return this.$a;
            case 4:
            default:
                return this.Fa;
            }
        else
            switch (t) {
            case 0:
                return this.Ga;
            case 1:
                return this.ob;
            case 2:
                return this.cb;
            case 3:
                return this.ab;
            case 4:
            default:
                return this.Ga;
            }
    }, i.prototype.Cq = function () {
        return (this.Fa + this.nb + this.bb + this.$a) / 4;
    }, i.prototype.Dq = function () {
        return (this.Ga + this.ob + this.cb + this.ab) / 4;
    }, i.prototype.Kp = function (t) {
        var i, s, h, e, n, o, r, a, c = t.Cq(), p = t.Dq();
        if (this.Ib(c, p))
            return !0;
        if (c = this.Cq(), p = this.Dq(), t.Ib(c, p))
            return !0;
        for (r = 0; r < 4; r++)
            for (a = 0; a < 4; a++)
                if (c = this.pc(r, !0), p = this.pc(r, !1), i = this.pc(r + 1, !0), s = this.pc(r + 1, !1), h = t.pc(a, !0), e = t.pc(a, !1), n = t.pc(a + 1, !0), o = t.pc(a + 1, !1), va(c, p, i, s, h, e, n, o))
                    return !0;
        return !1;
    }, xa = i, ya = function (t, i) {
        for (var s in i)
            i.hasOwnProperty(s) && (t[s] = i[s]);
        return t;
    }, za = function (t, i) {
        var s, h;
        if (!((i = ta(i)) < 0 || i >= t.length)) {
            for (s = i, h = t.length - 1; s < h; s++)
                t[s] = t[s + 1];
            Ba(t, h);
        }
    }, Ba = function (t, i) {
        t.length = i;
    }, A = function (t) {
        Ba(t, 0);
    }, Da = function (t, i) {
        var s, h;
        for (A(t), s = 0, h = i.length; s < h; ++s)
            t[s] = i[s];
    }, Fa = function (t, i) {
        t.push.apply(t, i);
    }, Ha = function (t, i) {
        var s, h;
        for (s = 0, h = t.length; s < h; ++s)
            if (t[s] === i)
                return s;
        return -1;
    }, Ia = function (t, i) {
        var s = Ha(t, i);
        -1 !== s && za(t, s);
    }, Ja = function (t, i, s) {
        return t < i ? i : s < t ? s : t;
    }, G = function (t) {
        return t / (180 / sa);
    }, Ka = function (t) {
        return 180 / sa * t;
    }, La = function (t) {
        return (t %= 360) < 0 && (t += 360), t;
    }, Ma = function (t) {
        return (t %= 2 * sa) < 0 && (t += 2 * sa), t;
    }, Na = function (t) {
        return La(Ka(t));
    }, Oa = function (t) {
        return Ma(G(t));
    }, Pa = function (t, i, s, h) {
        return Math.atan2(h - i, s - t);
    }, Ra = function (t, i) {
        if (t === i)
            return 0;
        var s = Math.sin(t), h = Math.cos(t);
        return 1 <= (s = s * Math.sin(i) + h * Math.cos(i)) ? 0 : s <= -1 ? sa : Math.acos(s);
    }, Sa = function (t, i, s) {
        var h = Math.sin(t), e = Math.cos(t), n = Math.sin(i), o = Math.cos(i);
        return Math.acos(h * n + e * o) > s ? Ma(0 < e * n - h * o ? t + s : t - s) : Ma(i);
    }, Ta = function (t, i) {
        var s = Math.sin(t);
        return Math.cos(t) * Math.sin(i) - s * Math.cos(i) <= 0;
    }, Ua = function (t, i, s, h, e, n) {
        if (0 === s)
            return n ? t : i;
        var o = Math.sin(s), r = (t -= h) * o;
        return t = t * (s = Math.cos(s)) - (i -= e) * o, i = i * s + r, n ? t + h : i + e;
    }, Va = function (t, i, s, h) {
        return t = s - t, i = h - i, Math.sqrt(t * t + i * i);
    }, Wa = function (t, i) {
        return !t != !i;
    }, Xa = function (t) {
        for (var i in t)
            if (t.hasOwnProperty(i))
                return !0;
        return !1;
    }, Ya = function (t) {
        for (var i in t)
            t.hasOwnProperty(i) && delete t[i];
    };
    var g = +new Date(), y = !(Za = function () {
            if (void 0 !== window.performance) {
                var t = window.performance;
                if (void 0 !== t.now)
                    return t.now();
                if (void 0 !== t.webkitNow)
                    return t.webkitNow();
                if (void 0 !== t.mozNow)
                    return t.mozNow();
                if (void 0 !== t.msNow)
                    return t.msNow();
            }
            return Date.now() - g;
        }), v = y = !1, m = !1;
    'undefined' != typeof window && (y = !(y = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && /safari/i.test(navigator.userAgent), v = /(iphone|ipod|ipad)/i.test(navigator.userAgent), m = window.c2ejecta);
    var w = !y && !m && !v && 'undefined' != typeof Set && void 0 !== Set.prototype.forEach;
    h.prototype.contains = function (t) {
        return !this.Yd() && (w ? this.Fd.has(t) : this.items && this.items.hasOwnProperty(t));
    }, h.prototype.add = function (t) {
        if (w)
            this.Fd.has(t) || (this.Fd.add(t), this.ue = !1);
        else {
            var i = t.toString(), s = this.items;
            s ? s.hasOwnProperty(i) || (s[i] = t, this.Nh++, this.ue = !1) : (this.items = {}, this.items[i] = t, this.Nh = 1, this.ue = !1);
        }
    }, h.prototype.remove = function (t) {
        if (!this.Yd())
            if (w)
                this.Fd.has(t) && (this.Fd.delete(t), this.ue = !1);
            else if (this.items) {
                t = t.toString();
                var i = this.items;
                i.hasOwnProperty(t) && (delete i[t], this.Nh--, this.ue = !1);
            }
    }, h.prototype.clear = function () {
        this.Yd() || (w ? this.Fd.clear() : (this.items = null, this.Nh = 0), A(this.Ug), this.ue = !0);
    }, h.prototype.Yd = function () {
        return 0 === this.count();
    }, h.prototype.count = function () {
        return w ? this.Fd.size : this.Nh;
    };
    var k = null, x = 0;
    h.prototype.My = function () {
        if (!this.ue) {
            if (w)
                A(this.Ug), k = this.Ug, x = 0, this.Fd.forEach(e), k = null, x = 0;
            else {
                var t = this.Ug;
                A(t);
                var i, s = 0, h = this.items;
                if (h)
                    for (i in h)
                        h.hasOwnProperty(i) && (t[s++] = h[i]);
            }
            this.ue = !0;
        }
    }, h.prototype.We = function () {
        return this.My(), this.Ug;
    }, new (ca = h)(), $a = function (t, i) {
        w ? cb(t, i.Fd) : db(t, i.We());
    }, cb = function (t, i) {
        var s, h, e, n;
        for (h = s = 0, e = t.length; s < e; ++s)
            n = t[s], i.has(n) || (t[h++] = n);
        Ba(t, h);
    }, db = function (t, i) {
        var s, h, e, n;
        for (h = s = 0, e = t.length; s < e; ++s)
            n = t[s], -1 === Ha(i, n) && (t[h++] = n);
        Ba(t, h);
    }, n.prototype.add = function (t) {
        this.y = t - this.Il, this.Vk = this.Z + this.y, this.Il = this.Vk - this.Z - this.y, this.Z = this.Vk;
    }, n.prototype.reset = function () {
        this.Z = this.Vk = this.y = this.Il = 0;
    }, eb = n, fb = function (t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }, o.prototype.oi = function (t) {
        this.hr = t, this.kd = t.length / 2, this.lb.length = t.length, this.lj = this.mj = -1, this.Wo = 0;
    }, o.prototype.jg = function () {
        return !this.hr.length;
    }, o.prototype.Aa = function () {
        for (var t, i, s = this.lb, h = s[0], e = h, n = s[1], o = n, r = 1, a = this.kd; r < a; ++r)
            (t = s[i = 2 * r]) < h && (h = t), e < t && (e = t), (i = s[i + 1]) < n && (n = i), o < i && (o = i);
        this.hj = h, this.ij = e, this.jj = n, this.gj = o;
    }, o.prototype.ni = function (t, i, s) {
        this.lb.length = 8, this.kd = 4;
        var h = this.lb;
        h[0] = t.left - i, h[1] = t.top - s, h[2] = t.right - i, h[3] = t.top - s, h[4] = t.right - i, h[5] = t.bottom - s, h[6] = t.left - i, h[7] = t.bottom - s, this.mj = t.right - t.left, this.lj = t.bottom - t.top, this.Aa();
    }, o.prototype.Lg = function (t, i, s, h, e) {
        this.lb.length = 8, this.kd = 4;
        var n = this.lb;
        n[0] = t.Fa - i, n[1] = t.Ga - s, n[2] = t.nb - i, n[3] = t.ob - s, n[4] = t.bb - i, n[5] = t.cb - s, n[6] = t.$a - i, n[7] = t.ab - s, this.mj = h, this.lj = e, this.Aa();
    }, o.prototype.Ar = function (t) {
        this.kd = t.kd, Da(this.lb, t.lb), this.hj = t.hj, this.jj, t.jj, this.ij = t.ij, this.gj = t.gj;
    }, o.prototype.Sf = function (t, i, s) {
        if (this.mj !== t || this.lj !== i || this.Wo !== s) {
            this.mj = t, this.lj = i, this.Wo = s;
            var h, e, n, o, r, a = 0, c = 1, p = this.hr, u = this.lb;
            for (0 !== s && (a = Math.sin(s), c = Math.cos(s)), s = 0, n = this.kd; s < n; s++)
                e = 1 + (h = 2 * s), o = p[h] * t, r = p[e] * i, u[h] = o * c - r * a, u[e] = r * c + o * a;
            this.Aa();
        }
    }, o.prototype.Ib = function (t, i) {
        var s = this.lb;
        if (t === s[0] && i === s[1])
            return !0;
        var h, e, n, o, r, a = this.kd, c = this.hj - 110, p = this.jj - 101, u = this.ij + 131, f = this.gj + 120, l = 0, b = 0;
        for (h = 0; h < a; h++)
            n = (h + 1) % a * 2, o = s[e = 2 * h], e = s[e + 1], r = s[n], n = s[n + 1], va(c, p, t, i, o, e, r, n) && l++, va(u, f, t, i, o, e, r, n) && b++;
        return 1 == l % 2 || 1 == b % 2;
    }, o.prototype.Ch = function (t, i, s) {
        var h, e, n, o, r, a, c, p, u, f, l, b, d = t.lb, g = this.lb;
        if (this.Ib(d[0] + i, d[1] + s) || t.Ib(g[0] - i, g[1] - s))
            return !0;
        for (h = 0, o = this.kd; h < o; h++)
            for (n = (h + 1) % o * 2, p = g[e = 2 * h], e = g[e + 1], u = g[n], f = g[n + 1], n = 0, c = t.kd; n < c; n++)
                if (a = (n + 1) % c * 2, l = d[r = 2 * n] + i, r = d[r + 1] + s, b = d[a] + i, a = d[a + 1] + s, va(p, e, u, f, l, r, b, a))
                    return !0;
        return !1;
    }, gb = o, r.prototype.Ge = function (t, i, s) {
        var h;
        return (h = this.cells[t]) ? (h = h[i]) ? h : s ? (h = c(this, t, i), this.cells[t][i] = h) : null : s ? (h = c(this, t, i), this.cells[t] = {}, this.cells[t][i] = h) : null;
    }, r.prototype.Ub = function (t) {
        return ta(t / this.Ml);
    }, r.prototype.Vb = function (t) {
        return ta(t / this.Ll);
    }, r.prototype.update = function (t, i, s) {
        var h, e, n, o, r;
        if (i)
            for (h = i.left, e = i.right; h <= e; ++h)
                for (n = i.top, o = i.bottom; n <= o; ++n)
                    s && s.Ib(h, n) || (r = this.Ge(h, n, !1)) && (r.remove(t), r.Yd() && (r.sb.clear(), T.length < 1000 && T.push(r), this.cells[h][n] = null));
        if (s)
            for (h = s.left, e = s.right; h <= e; ++h)
                for (n = s.top, o = s.bottom; n <= o; ++n)
                    i && i.Ib(h, n) || this.Ge(h, n, !0).zm(t);
    }, r.prototype.Fk = function (t, i) {
        var s, h, e, n, o, r;
        for (s = this.Ub(t.left), e = this.Vb(t.top), h = this.Ub(t.right), o = this.Vb(t.bottom); s <= h; ++s)
            for (n = e; n <= o; ++n)
                (r = this.Ge(s, n, !1)) && r.dump(i);
    }, hb = r, a.prototype.Ge = function (t, i, s) {
        var h;
        return (h = this.cells[t]) ? (h = h[i]) ? h : s ? (h = u(this, t, i), this.cells[t][i] = h) : null : s ? (h = u(this, t, i), this.cells[t] = {}, this.cells[t][i] = h) : null;
    }, a.prototype.Ub = function (t) {
        return ta(t / this.Ml);
    }, a.prototype.Vb = function (t) {
        return ta(t / this.Ll);
    }, a.prototype.update = function (t, i, s) {
        var h, e, n, o, r;
        if (i)
            for (h = i.left, e = i.right; h <= e; ++h)
                for (n = i.top, o = i.bottom; n <= o; ++n)
                    s && s.Ib(h, n) || (r = this.Ge(h, n, !1)) && (r.remove(t), r.Yd() && (r.reset(), E.length < 1000 && E.push(r), this.cells[h][n] = null));
        if (s)
            for (h = s.left, e = s.right; h <= e; ++h)
                for (n = s.top, o = s.bottom; n <= o; ++n)
                    i && i.Ib(h, n) || this.Ge(h, n, !0).zm(t);
    }, a.prototype.Fk = function (t, i, s, h, e) {
        var n, o;
        for (t = this.Ub(t), i = this.Vb(i), s = this.Ub(s), n = this.Vb(h); t <= s; ++t)
            for (h = i; h <= n; ++h)
                (o = this.Ge(t, h, !1)) && o.dump(e);
    }, a.prototype.vx = function (t) {
        var i, s, h, e, n;
        for (i = t.left, h = t.top, s = t.right, e = t.bottom; i <= s; ++i)
            for (t = h; t <= e; ++t)
                (n = this.Ge(i, t, !1)) && (n.mg = !1);
    }, ib = a;
    var T = [];
    p.prototype.Yd = function () {
        return this.sb.Yd();
    }, p.prototype.zm = function (t) {
        this.sb.add(t);
    }, p.prototype.remove = function (t) {
        this.sb.remove(t);
    }, p.prototype.dump = function (t) {
        Fa(t, this.sb.We());
    }, ba = p;
    var E = [];
    f.prototype.Yd = function () {
        return !this.sb.length || !(this.sb.length > this.Cd.count()) && (this.fm(), !0);
    }, f.prototype.zm = function (t) {
        this.Cd.contains(t) ? (this.Cd.remove(t), this.Cd.Yd() && (this.eh = !1)) : this.sb.length ? (this.sb[this.sb.length - 1].wd() > t.wd() && (this.mg = !1), this.sb.push(t)) : (this.sb.push(t), this.mg = !0);
    }, f.prototype.remove = function (t) {
        this.Cd.add(t), this.eh = !0, 30 <= this.Cd.count() && this.fm();
    }, f.prototype.fm = function () {
        this.eh && (this.Cd.count() === this.sb.length ? this.reset() : ($a(this.sb, this.Cd), this.Cd.clear(), this.eh = !1));
    }, f.prototype.Av = function () {
        this.mg || (this.sb.sort(l), this.mg = !0);
    }, f.prototype.reset = function () {
        A(this.sb), this.mg = !0, this.Cd.clear(), this.eh = !1;
    }, f.prototype.dump = function (t) {
        this.fm(), this.Av(), this.sb.length && t.push(this.sb);
    }, da = f;
    var j = 'lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop'.split(' ');
    jb = function (t) {
        return t <= 0 || 11 <= t ? 'source-over' : j[t - 1];
    }, kb = function (t, i, s) {
        if (s)
            switch (t.Pb = s.ONE, t.Jb = s.ONE_MINUS_SRC_ALPHA, i) {
            case 1:
                t.Pb = s.ONE, t.Jb = s.ONE;
                break;
            case 3:
                t.Pb = s.ONE, t.Jb = s.ZERO;
                break;
            case 4:
                t.Pb = s.ONE_MINUS_DST_ALPHA, t.Jb = s.ONE;
                break;
            case 5:
                t.Pb = s.DST_ALPHA, t.Jb = s.ZERO;
                break;
            case 6:
                t.Pb = s.ZERO, t.Jb = s.SRC_ALPHA;
                break;
            case 7:
                t.Pb = s.ONE_MINUS_DST_ALPHA, t.Jb = s.ZERO;
                break;
            case 8:
                t.Pb = s.ZERO, t.Jb = s.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                t.Pb = s.DST_ALPHA, t.Jb = s.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                t.Pb = s.ONE_MINUS_DST_ALPHA, t.Jb = s.SRC_ALPHA;
            }
    }, lb = function (t) {
        return Math.round(1000000 * t) / 1000000;
    }, mb = function (t, i) {
        return 'string' == typeof t && 'string' == typeof i && t.length === i.length && (t === i || t.toLowerCase() === i.toLowerCase());
    }, pb = function (t) {
        return !!(!(t = t.target) || t === document || t === window || document && document.body && t === document.body || mb(t.tagName, 'canvas'));
    };
}();
var kc = 'undefined' != typeof Float32Array ? Float32Array : Array;
function lc(t) {
    var i = new kc(3);
    return t && (i[0] = t[0], i[1] = t[1], i[2] = t[2]), i;
}
function mc(t) {
    var i = new kc(16);
    return t && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]), i;
}
function nc(t, i) {
    i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15];
}
function oc(t, i) {
    var s = i[0], h = i[1];
    i = i[2], t[0] *= s, t[1] *= s, t[2] *= s, t[3] *= s, t[4] *= h, t[5] *= h, t[6] *= h, t[7] *= h, t[8] *= i, t[9] *= i, t[10] *= i, t[11] *= i;
}
function pc(t, i, s, h) {
    h = h || mc();
    var e, n, o, r, a, c, p, u, f = t[0], l = t[1];
    t = t[2], n = s[0], o = s[1], e = s[2], s = i[1], c = i[2], f === i[0] && l === s && t === c ? ((t = h)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1) : (s = f - i[0], c = l - i[1], p = t - i[2], i = o * (p *= u = 1 / Math.sqrt(s * s + c * c + p * p)) - e * (c *= u), e = e * (s *= u) - n * p, n = n * c - o * s, (u = Math.sqrt(i * i + e * e + n * n)) ? (i *= u = 1 / u, e *= u, n *= u) : n = e = i = 0, o = c * n - p * e, r = p * i - s * n, a = s * e - c * i, (u = Math.sqrt(o * o + r * r + a * a)) ? (o *= u = 1 / u, r *= u, a *= u) : a = r = o = 0, h[0] = i, h[1] = o, h[2] = s, h[3] = 0, h[4] = e, h[5] = r, h[6] = c, h[7] = 0, h[8] = n, h[9] = a, h[10] = p, h[11] = 0, h[12] = -(i * f + e * l + n * t), h[13] = -(o * f + r * l + a * t), h[14] = -(s * f + c * l + p * t), h[15] = 1);
}
function T(t) {
    this.b = t, this.fc = [];
}
!function () {
    function t(t, i, s) {
        this.Je = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.height = this.width = 0, this.ya = !!s, this.Yj = this.Eh = !1, this.Ul = 0, this.il = 1, this.Xn = 1000, this.Uy = (this.Xn - this.il) / 32768, this.Jl = lc([0,0,100]), this.kq = lc([0,0,0]), this.Vr = lc([0,1,0]), this.Li = lc([1,1,1]), this.fp = !0, this.ok = mc(), this.zc = mc(), this.Km = mc(), this.Tl = mc(), this.u = t, this.version = 0 === this.u.getParameter(this.u.VERSION).indexOf('WebGL 2') ? 2 : 1, this.Gp();
    }
    function o(t, i, s) {
        this.u = t, this.pi = i, this.name = s, this.Nc = t.getAttribLocation(i, 'aPos'), this.Oe = t.getAttribLocation(i, 'aTex'), this.iq = t.getUniformLocation(i, 'matP'), this.kk = t.getUniformLocation(i, 'matMV'), this.vg = t.getUniformLocation(i, 'opacity'), this.Qm = t.getUniformLocation(i, 'colorFill'), this.jq = t.getUniformLocation(i, 'samplerFront'), this.Th = t.getUniformLocation(i, 'samplerBack'), this.Bf = t.getUniformLocation(i, 'destStart'), this.Af = t.getUniformLocation(i, 'destEnd'), this.Vh = t.getUniformLocation(i, 'seconds'), this.Sm = t.getUniformLocation(i, 'pixelWidth'), this.Rm = t.getUniformLocation(i, 'pixelHeight'), this.Sh = t.getUniformLocation(i, 'layerScale'), this.Rh = t.getUniformLocation(i, 'layerAngle'), this.Wh = t.getUniformLocation(i, 'viewOrigin'), this.Uh = t.getUniformLocation(i, 'scrollPos'), this.Qw = !!(this.Sm || this.Rm || this.Vh || this.Th || this.Bf || this.Af || this.Sh || this.Rh || this.Wh || this.Uh), this.sq = this.tq = -999, this.nk = 1, this.oq = this.nq = 0, this.qq = this.mq = this.lq = 1, this.wq = this.vq = this.uq = this.yq = this.xq = this.pq = 0, this.Jm = [], this.rq = mc(), this.vg && t.uniform1f(this.vg, 1), this.Qm && t.uniform4f(this.Qm, 1, 1, 1, 1), this.jq && t.uniform1i(this.jq, 0), this.Th && t.uniform1i(this.Th, 1), this.Bf && t.uniform2f(this.Bf, 0, 0), this.Af && t.uniform2f(this.Af, 1, 1), this.Sh && t.uniform1f(this.Sh, 1), this.Rh && t.uniform1f(this.Rh, 0), this.Wh && t.uniform2f(this.Wh, 0, 0), this.Uh && t.uniform2f(this.Uh, 0, 0), this.Vh && t.uniform1f(this.Vh, 0), this.pf = !1;
    }
    function i(t, i) {
        return t[0] === i[0] && t[1] === i[1] && t[2] === i[2] && t[3] === i[3] && t[4] === i[4] && t[5] === i[5] && t[6] === i[6] && t[7] === i[7] && t[8] === i[8] && t[9] === i[9] && t[10] === i[10] && t[11] === i[11] && t[12] === i[12] && t[13] === i[13] && t[14] === i[14] && t[15] === i[15];
    }
    function s(t, i) {
        this.type = t, this.k = i, this.u = i.u, this.xd = this.Tb = this.Tq = 0, this.T = this.Vc = null, this.Cr = [];
    }
    var h = mc();
    t.prototype.Gp = function () {
        var t, i = this.u;
        for (this.Yp = 1, this.wf = this.vf = null, this.wj = 1, i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.enable(i.BLEND), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA), i.disable(i.CULL_FACE), i.disable(i.STENCIL_TEST), i.disable(i.DITHER), this.ya ? (i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL)) : i.disable(i.DEPTH_TEST), this.$p = i.ONE, this.Wp = i.ONE_MINUS_SRC_ALPHA, this.fl = new Float32Array(8000 * (this.ya ? 3 : 2)), this.Xk = new Float32Array(16000), this.er = new Float32Array(32000), this.hn = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.hn), i.bufferData(i.ARRAY_BUFFER, this.er.byteLength, i.DYNAMIC_DRAW), this.Gi = Array(4), this.vi = Array(4), t = 0; t < 4; t++)
            this.Gi[t] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.Gi[t]), i.bufferData(i.ARRAY_BUFFER, this.fl.byteLength, i.DYNAMIC_DRAW), this.vi[t] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.vi[t]), i.bufferData(i.ARRAY_BUFFER, this.Xk.byteLength, i.DYNAMIC_DRAW);
        this.Pd = 0, this.Tw = i.createBuffer(), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.Tw);
        for (var s = new Uint16Array(12000), h = t = 0; t < 12000;)
            s[t++] = h, s[t++] = h + 1, s[t++] = h + 2, s[t++] = h, s[t++] = h + 2, s[t++] = h + 3, h += 4;
        for (var e in (i.bufferData(i.ELEMENT_ARRAY_BUFFER, s, i.STATIC_DRAW), this.jn = this.Pg = this.ne = 0, this.La = [], t = this.ya ? 'attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}' : 'attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}', s = this.kh({ src: 'varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}' }, t, '<default>'), this.La.push(s), s = this.kh({ src: 'uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}' }, 'attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}', '<point>'), this.La.push(s), s = this.kh({ src: 'varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}' }, t, '<earlyz>'), this.La.push(s), s = this.kh({ src: 'uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}' }, t, '<fill>'), this.La.push(s), qc))
            qc.hasOwnProperty(e) && this.La.push(this.kh(qc[e], t, e));
        i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, null), this.te = [], this.Od = 0, this.Mb = !1, this.bp = this.Oh = -1, this.Xf = null, this.dm = i.createFramebuffer(), this.Aj = this.Gk = null, this.Qo = !1, this.ya && (this.Aj = i.createRenderbuffer()), this.Ve = lc([0,0,0]), this.zq = i.getParameter(i.ALIASED_POINT_SIZE_RANGE)[1], 2048 < this.zq && (this.zq = 2048), this.ec(0);
    }, o.prototype.Sn = function (t) {
        i(this.rq, t) || (nc(t, this.rq), this.u.uniformMatrix4fv(this.kk, !1, t));
    }, t.prototype.kh = function (t, i, s) {
        var h = this.u, e = h.createShader(h.FRAGMENT_SHADER);
        if (h.shaderSource(e, t.src), h.compileShader(e), !h.getShaderParameter(e, h.COMPILE_STATUS))
            throw t = h.getShaderInfoLog(e), h.deleteShader(e), Error('error compiling fragment shader: ' + t);
        var n = h.createShader(h.VERTEX_SHADER);
        if (h.shaderSource(n, i), h.compileShader(n), !h.getShaderParameter(n, h.COMPILE_STATUS))
            throw t = h.getShaderInfoLog(n), h.deleteShader(e), h.deleteShader(n), Error('error compiling vertex shader: ' + t);
        if (i = h.createProgram(), h.attachShader(i, e), h.attachShader(i, n), h.linkProgram(i), !h.getProgramParameter(i, h.LINK_STATUS))
            throw t = h.getProgramInfoLog(i), h.deleteShader(e), h.deleteShader(n), h.deleteProgram(i), Error('error linking shader program: ' + t);
        for (h.useProgram(i), h.deleteShader(e), h.deleteShader(n), (e = new o(h, i, s)).Ej = t.Ej || 0, e.Fj = t.Fj || 0, e.Sl = !!t.Sl, e.Rc = !!t.Rc, e.Cl = !!t.Cl, e.O = t.O || [], t = 0, n = e.O.length; t < n; t++)
            e.O[t][1] = h.getUniformLocation(i, e.O[t][0]), e.Jm.push(0), h.uniform1f(e.O[t][1], 0);
        return e;
    }, t.prototype.pm = function (t) {
        var i, s;
        for (i = 0, s = this.La.length; i < s; i++)
            if (this.La[i].name === t)
                return i;
        return -1;
    }, t.prototype.gr = function (t, i, s) {
        var h = this.zc, e = this.ok, n = [0,0,0,0,0,0,0,0];
        n[0] = h[0] * t + h[4] * i + h[12], n[1] = h[1] * t + h[5] * i + h[13], n[2] = h[2] * t + h[6] * i + h[14], n[3] = h[3] * t + h[7] * i + h[15], n[4] = e[0] * n[0] + e[4] * n[1] + e[8] * n[2] + e[12] * n[3], n[5] = e[1] * n[0] + e[5] * n[1] + e[9] * n[2] + e[13] * n[3], n[6] = e[2] * n[0] + e[6] * n[1] + e[10] * n[2] + e[14] * n[3], n[7] = -n[2], 0 !== n[7] && (n[7] = 1 / n[7], n[4] *= n[7], n[5] *= n[7], n[6] *= n[7], s[0] = (0.5 * n[4] + 0.5) * this.width, s[1] = (0.5 * n[5] + 0.5) * this.height);
    }, t.prototype.ge = function (t, i, s) {
        if (this.width !== t || this.height !== i || s) {
            if (this.gf(), s = this.u, this.width = t, this.height = i, s.viewport(0, 0, t, i), pc(this.Jl, this.kq, this.Vr, this.zc), this.ya) {
                var h = -t / 2;
                t /= 2;
                var e = i / 2;
                i = -i / 2;
                var n = this.il, o = this.Xn, r = this.ok, a = t - h, c = i - e, p = o - n;
                (r = r || mc())[0] = 2 / a, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 2 / c, r[6] = 0, r[7] = 0, r[8] = 0, r[9] = 0, r[10] = -2 / p, r[11] = 0, r[12] = -(h + t) / a, r[13] = -(i + e) / c, r[14] = -(o + n) / p, r[15] = 1, this.Li[0] = 1, this.Li[1] = 1;
            } else
                i = t / i, h = this.il, t = this.Xn, r = this.ok, a = (i *= o = h * Math.tan(45 * Math.PI / 360)) - (e = -i), c = o - (n = -o), p = t - h, (r = r || mc())[0] = 2 * h / a, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 0, r[5] = 2 * h / c, r[6] = 0, r[7] = 0, r[8] = (i + e) / a, r[9] = (o + n) / c, r[10] = -(t + h) / p, r[11] = -1, r[12] = 0, r[13] = 0, r[14] = -t * h * 2 / p, h = [r[15]=0,0], t = [0,0], this.gr(0, 0, h), this.gr(1, 1, t), this.Li[0] = 1 / (t[0] - h[0]), this.Li[1] = -1 / (t[1] - h[1]);
            for (h = 0, t = this.La.length; h < t; h++)
                (e = this.La[h]).pf = !1, e.iq && (s.useProgram(e.pi), s.uniformMatrix4fv(e.iq, !1, this.ok));
            s.useProgram(this.La[this.Oh].pi), s.bindTexture(s.TEXTURE_2D, null), s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, null), s.activeTexture(s.TEXTURE0), this.wf = this.vf = null, this.Aj && (s.bindFramebuffer(s.FRAMEBUFFER, this.dm), s.bindRenderbuffer(s.RENDERBUFFER, this.Aj), s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_COMPONENT16, this.width, this.height), this.Qo || (s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, this.Aj), this.Qo = !0), s.bindRenderbuffer(s.RENDERBUFFER, null), s.bindFramebuffer(s.FRAMEBUFFER, null), this.Gk = null);
        }
    }, t.prototype.Ed = function () {
        pc(this.Jl, this.kq, this.Vr, this.zc), oc(this.zc, this.Li);
    }, t.prototype.translate = function (t, i) {
        if (0 !== t || 0 !== i) {
            this.Ve[0] = t, this.Ve[1] = i, this.Ve[2] = 0;
            var s = this.zc, h = (n = this.Ve)[0], e = n[1], n = n[2];
            s[12] = s[0] * h + s[4] * e + s[8] * n + s[12], s[13] = s[1] * h + s[5] * e + s[9] * n + s[13], s[14] = s[2] * h + s[6] * e + s[10] * n + s[14], s[15] = s[3] * h + s[7] * e + s[11] * n + s[15];
        }
    }, t.prototype.scale = function (t, i) {
        1 === t && 1 === i || (this.Ve[0] = t, this.Ve[1] = i, this.Ve[2] = 1, oc(this.zc, this.Ve));
    }, t.prototype.xn = function (t) {
        if (0 !== t) {
            var i, s = this.zc, h = Math.sin(t);
            t = Math.cos(t);
            var e = s[0], n = s[1], o = s[2], r = s[3], a = s[4], c = s[5], p = s[6], u = s[7];
            i ? s !== i && (i[8] = s[8], i[9] = s[9], i[10] = s[10], i[11] = s[11], i[12] = s[12], i[13] = s[13], i[14] = s[14], i[15] = s[15]) : i = s, i[0] = e * t + a * h, i[1] = n * t + c * h, i[2] = o * t + p * h, i[3] = r * t + u * h, i[4] = e * -h + a * t, i[5] = n * -h + c * t, i[6] = o * -h + p * t, i[7] = r * -h + u * t;
        }
    }, t.prototype.od = function () {
        if (!i(this.Km, this.zc)) {
            var t = this.mc();
            t.type = 5, t.T ? nc(this.zc, t.T) : t.T = mc(this.zc), nc(this.zc, this.Km), this.Mb = !1;
        }
    }, t.prototype.Ok = function (t) {
        this.ya && (32760 < t && (t = 32760), this.Ul = this.Jl[2] - this.il - t * this.Uy);
    }, s.prototype.jv = function () {
        var t = this.u, i = this.k;
        0 !== this.Tb ? (t.depthMask(!0), t.colorMask(!1, !1, !1, !1), t.disable(t.BLEND), t.bindFramebuffer(t.FRAMEBUFFER, i.dm), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.clear(t.DEPTH_BUFFER_BIT), t.bindFramebuffer(t.FRAMEBUFFER, null), i.Yj = !0) : (t.depthMask(!1), t.colorMask(!0, !0, !0, !0), t.enable(t.BLEND), i.Yj = !1);
    }, s.prototype.nv = function () {
        this.u.bindTexture(this.u.TEXTURE_2D, this.Vc);
    }, s.prototype.ov = function () {
        var t = this.u;
        t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this.Vc), t.activeTexture(t.TEXTURE0);
    }, s.prototype.kv = function () {
        var t = this.Tq, i = this.k;
        i.wj = t, (i = i.Xf).vg && i.nk !== t && (i.nk = t, this.u.uniform1f(i.vg, t));
    }, s.prototype.bv = function () {
        this.u.drawElements(this.u.TRIANGLES, this.xd, this.u.UNSIGNED_SHORT, this.Tb);
    }, s.prototype.gv = function () {
        this.u.blendFunc(this.Tb, this.xd);
    }, s.prototype.pv = function () {
        var t, i, s, h = this.k.La, e = this.k.bp;
        for (t = 0, i = h.length; t < i; t++)
            s = h[t], t === e && s.kk ? (s.Sn(this.T), s.pf = !0) : s.pf = !1;
        nc(this.T, this.k.Tl);
    }, s.prototype.cv = function () {
        var t = this.u, i = this.k;
        this.Vc ? (i.wf === this.Vc && (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), i.wf = null, t.activeTexture(t.TEXTURE0)), t.bindFramebuffer(t.FRAMEBUFFER, i.dm), i.Yj || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.Vc, 0)) : (i.ya || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.bindFramebuffer(t.FRAMEBUFFER, null));
    }, s.prototype.Zu = function () {
        var t = this.u, i = this.Tb;
        0 === i ? (t.clearColor(this.T[0], this.T[1], this.T[2], this.T[3]), t.clear(t.COLOR_BUFFER_BIT)) : 1 === i ? (t.enable(t.SCISSOR_TEST), t.scissor(this.T[0], this.T[1], this.T[2], this.T[3]), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT);
    }, s.prototype.iv = function () {
        var t = this.u;
        0 !== this.Tb ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST);
    }, s.prototype.av = function () {
        var t = this.u, i = this.k;
        i.ya && t.disable(t.DEPTH_TEST);
        var s = i.La[1];
        t.useProgram(s.pi), !s.pf && s.kk && (s.Sn(i.Tl), s.pf = !0), t.enableVertexAttribArray(s.Nc), t.bindBuffer(t.ARRAY_BUFFER, i.hn), t.vertexAttribPointer(s.Nc, 4, t.FLOAT, !1, 0, 0), t.drawArrays(t.POINTS, this.Tb / 4, this.xd), s = i.Xf, t.useProgram(s.pi), 0 <= s.Nc && (t.enableVertexAttribArray(s.Nc), t.bindBuffer(t.ARRAY_BUFFER, i.Gi[i.Pd]), t.vertexAttribPointer(s.Nc, i.ya ? 3 : 2, t.FLOAT, !1, 0, 0)), 0 <= s.Oe && (t.enableVertexAttribArray(s.Oe), t.bindBuffer(t.ARRAY_BUFFER, i.vi[i.Pd]), t.vertexAttribPointer(s.Oe, 2, t.FLOAT, !1, 0, 0)), i.ya && t.enable(t.DEPTH_TEST);
    }, s.prototype.lv = function () {
        var t = this.u, i = this.k, s = i.La[this.Tb];
        i.bp = this.Tb, i.Xf = s, t.useProgram(s.pi), !s.pf && s.kk && (s.Sn(i.Tl), s.pf = !0), s.vg && s.nk !== i.wj && (s.nk = i.wj, t.uniform1f(s.vg, i.wj)), 0 <= s.Nc && (t.enableVertexAttribArray(s.Nc), t.bindBuffer(t.ARRAY_BUFFER, i.Gi[i.Pd]), t.vertexAttribPointer(s.Nc, i.ya ? 3 : 2, t.FLOAT, !1, 0, 0)), 0 <= s.Oe && (t.enableVertexAttribArray(s.Oe), t.bindBuffer(t.ARRAY_BUFFER, i.vi[i.Pd]), t.vertexAttribPointer(s.Oe, 2, t.FLOAT, !1, 0, 0));
    }, s.prototype.hv = function () {
        var t = this.T;
        this.u.uniform4f(this.k.Xf.Qm, t[0], t[1], t[2], t[3]);
    }, s.prototype.mv = function () {
        var t, i, s = this.k.Xf, h = this.u;
        t = this.T, s.Th && this.k.wf !== this.Vc && (h.activeTexture(h.TEXTURE1), h.bindTexture(h.TEXTURE_2D, this.Vc), this.k.wf = this.Vc, h.activeTexture(h.TEXTURE0));
        var e = t[0];
        if (s.Sm && e !== s.tq && (s.tq = e, h.uniform1f(s.Sm, e)), e = t[1], s.Rm && e !== s.sq && (s.sq = e, h.uniform1f(s.Rm, e)), e = t[2], i = t[3], !s.Bf || e === s.nq && i === s.oq || (s.nq = e, s.oq = i, h.uniform2f(s.Bf, e, i)), e = t[4], i = t[5], !s.Af || e === s.lq && i === s.mq || (s.lq = e, s.mq = i, h.uniform2f(s.Af, e, i)), e = t[6], s.Sh && e !== s.qq && (s.qq = e, h.uniform1f(s.Sh, e)), e = t[7], s.Rh && e !== s.pq && (s.pq = e, h.uniform1f(s.Rh, e)), e = t[8], i = t[9], !s.Wh || e === s.xq && i === s.yq || (s.xq = e, s.yq = i, h.uniform2f(s.Wh, e, i)), e = t[10], i = t[11], !s.Uh || e === s.uq && i === s.vq || (s.uq = e, s.vq = i, h.uniform2f(s.Uh, e, i)), e = t[12], s.Vh && e !== s.wq && (s.wq = e, h.uniform1f(s.Vh, e)), s.O.length)
            for (t = 0, i = s.O.length; t < i; t++)
                (e = this.Cr[t]) !== s.Jm[t] && (s.Jm[t] = e, h.uniform1f(s.O[t][1], e));
    }, t.prototype.mc = function () {
        return this.Od === this.te.length && this.te.push(new s(0, this)), this.te[this.Od++];
    }, t.prototype.gf = function () {
        if (0 !== this.Od && !this.u.isContextLost()) {
            var t = this.u;
            if (0 < this.jn && (t.bindBuffer(t.ARRAY_BUFFER, this.hn), t.bufferSubData(t.ARRAY_BUFFER, 0, this.er.subarray(0, this.jn)), i && 0 <= i.Nc && '<point>' === i.name && t.vertexAttribPointer(i.Nc, 4, t.FLOAT, !1, 0, 0)), 0 < this.ne) {
                var i = this.Xf;
                t.bindBuffer(t.ARRAY_BUFFER, this.Gi[this.Pd]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.fl.subarray(0, this.ne)), i && 0 <= i.Nc && '<point>' !== i.name && t.vertexAttribPointer(i.Nc, this.ya ? 3 : 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.vi[this.Pd]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.Xk.subarray(0, this.Pg)), i && 0 <= i.Oe && '<point>' !== i.name && t.vertexAttribPointer(i.Oe, 2, t.FLOAT, !1, 0, 0);
            }
            var s;
            for (t = 0, i = this.Od; t < i; t++)
                switch ((s = this.te[t]).type) {
                case 1:
                    s.bv();
                    break;
                case 2:
                    s.nv();
                    break;
                case 3:
                    s.kv();
                    break;
                case 4:
                    s.gv();
                    break;
                case 5:
                    s.pv();
                    break;
                case 6:
                    s.cv();
                    break;
                case 7:
                    s.Zu();
                    break;
                case 8:
                    s.av();
                    break;
                case 9:
                    s.lv();
                    break;
                case 10:
                    s.mv();
                    break;
                case 11:
                    s.ov();
                    break;
                case 12:
                    s.hv();
                    break;
                case 13:
                    s.iv();
                    break;
                case 14:
                    s.jv();
                }
            this.jn = this.Pg = this.ne = this.Od = 0, this.Yj = this.Mb = !1, this.Pd++, 4 <= this.Pd && (this.Pd = 0);
        }
    }, t.prototype.Se = function (t) {
        if (t !== this.Yp && !this.Eh) {
            var i = this.mc();
            i.type = 3, this.Yp = i.Tq = t, this.Mb = !1;
        }
    }, t.prototype.Rb = function (t) {
        if (t !== this.vf) {
            var i = this.mc();
            i.type = 2, this.vf = i.Vc = t, this.Mb = !1;
        }
    }, t.prototype.Re = function (t, i) {
        if ((t !== this.$p || i !== this.Wp) && !this.Eh) {
            var s = this.mc();
            s.type = 4, s.Tb = t, s.xd = i, this.$p = t, this.Wp = i, this.Mb = !1;
        }
    }, t.prototype.rr = function () {
        this.Re(this.u.ONE, this.u.ONE_MINUS_SRC_ALPHA);
    }, t.prototype.ji = function (t, i, s, h, e, n, o, r) {
        15992 <= this.ne && this.gf();
        var a = this.ne, c = this.Pg, p = this.fl, u = this.Xk, f = this.Ul;
        if (this.Mb)
            this.te[this.Od - 1].xd += 6;
        else {
            var l = this.mc();
            l.type = 1, l.Tb = this.ya ? a : a / 2 * 3, l.xd = 6, this.Mb = !0;
        }
        this.ya ? (p[a++] = t, p[a++] = i, p[a++] = f, p[a++] = s, p[a++] = h, p[a++] = f, p[a++] = e, p[a++] = n, p[a++] = f, p[a++] = o, p[a++] = r, p[a++] = f) : (p[a++] = t, p[a++] = i, p[a++] = s, p[a++] = h, p[a++] = e, p[a++] = n, p[a++] = o, p[a++] = r), u[c++] = 0, u[c++] = 0, u[c++] = 1, u[c++] = 0, u[c++] = 1, u[c++] = 1, u[c++] = 0, u[c++] = 1, this.ne = a, this.Pg = c;
    }, t.prototype.Sc = function (t, i, s, h, e, n, o, r, a) {
        15992 <= this.ne && this.gf();
        var c = this.ne, p = this.Pg, u = this.fl, f = this.Xk, l = this.Ul;
        this.Mb ? this.te[this.Od - 1].xd += 6 : ((b = this.mc()).type = 1, b.Tb = this.ya ? c : c / 2 * 3, b.xd = 6, this.Mb = !0);
        var b = a.left, d = a.top, g = a.right;
        a = a.bottom, this.ya ? (u[c++] = t, u[c++] = i, u[c++] = l, u[c++] = s, u[c++] = h, u[c++] = l, u[c++] = e, u[c++] = n, u[c++] = l, u[c++] = o, u[c++] = r, u[c++] = l) : (u[c++] = t, u[c++] = i, u[c++] = s, u[c++] = h, u[c++] = e, u[c++] = n, u[c++] = o, u[c++] = r), f[p++] = b, f[p++] = d, f[p++] = g, f[p++] = d, f[p++] = g, f[p++] = a, f[p++] = b, f[p++] = a, this.ne = c, this.Pg = p;
    }, t.prototype.ec = function (t) {
        if (this.Oh !== t) {
            if (!this.La[t]) {
                if (0 === this.Oh)
                    return;
                t = 0;
            }
            var i = this.mc();
            i.type = 9, this.Oh = i.Tb = t, this.Mb = !1;
        }
    }, t.prototype.hi = function (t) {
        return !(!(t = this.La[t]).Bf && !t.Af);
    }, t.prototype.nn = function (t) {
        return !!((t = this.La[t]).Bf || t.Af || t.Sl);
    }, t.prototype.mn = function (t) {
        return this.La[t].Rc;
    }, t.prototype.$x = function (t) {
        return 0 !== (t = this.La[t]).Ej || 0 !== t.Fj;
    }, t.prototype.yw = function (t) {
        return this.La[t].Ej;
    }, t.prototype.zw = function (t) {
        return this.La[t].Fj;
    }, t.prototype.Aw = function (t, i) {
        return this.La[t].O[i][2];
    }, t.prototype.Dk = function (t) {
        return this.La[t].Cl;
    }, t.prototype.Jg = function (t, i, s, h, e, n, o, r, a, c, p, u, f, l, b) {
        var d, g, y = this.La[this.Oh];
        if (y.Qw || b.length) {
            if ((d = this.mc()).type = 10, d.T ? nc(this.zc, d.T) : d.T = mc(), (g = d.T)[0] = i, g[1] = s, g[2] = h, g[3] = e, g[4] = n, g[5] = o, g[6] = r, g[7] = a, g[8] = c, g[9] = p, g[10] = u, g[11] = f, g[12] = l, y.Th ? d.Vc = t : d.Vc = null, b.length)
                for ((s = d.Cr).length = b.length, t = 0, i = b.length; t < i; t++)
                    s[t] = b[t];
            this.Mb = !1;
        }
    }, t.prototype.clear = function (t, i, s, h) {
        var e = this.mc();
        e.type = 7, e.Tb = 0, e.T || (e.T = mc()), e.T[0] = t, e.T[1] = i, e.T[2] = s, e.T[3] = h, this.Mb = !1;
    }, t.prototype.clearRect = function (t, i, s, h) {
        if (!(s < 0 || h < 0)) {
            var e = this.mc();
            e.type = 7, e.Tb = 1, e.T || (e.T = mc()), e.T[0] = t, e.T[1] = i, e.T[2] = s, e.T[3] = h, this.Mb = !1;
        }
    }, t.prototype.ur = function (t) {
        if (this.ya && (t = !!t, this.Eh !== t)) {
            var i = this.mc();
            i.type = 14, i.Tb = t ? 1 : 0, this.Mb = !1, this.Eh = t, this.Gk = null, this.Eh ? this.ec(2) : this.ec(0);
        }
    }, t.prototype.tr = function (t) {
        if (this.ya) {
            var i = this.mc();
            i.type = 13, i.Tb = t ? 1 : 0, this.Mb = !1;
        }
    }, t.prototype.rp = function () {
        nc(this.Km, h), this.Ed(), this.od();
        var t = this.width / 2, i = this.height / 2;
        this.ji(-t, i, t, i, t, -i, -t, -i), nc(h, this.zc), this.od();
    }, t.prototype.sr = function (t, i, s) {
        this.ec(3);
        var h = this.mc();
        h.type = 12, h.T || (h.T = mc()), h.T[0] = t, h.T[1] = i, h.T[2] = s, h.T[3] = 1, this.Mb = !1;
    }, t.prototype.yy = function () {
        this.ec(0);
    }, t.prototype.hy = function () {
        this.ec(2);
    }, t.prototype.Zx = function () {
        this.gf(), this.u.flush();
    };
    var l = [], b = {};
    t.prototype.Pu = function () {
        A(l), b = {};
    }, t.prototype.yc = function (t, i, s, h, e) {
        i = !!i, s = !!s;
        var n = t.src + ',' + i + ',' + s + (i ? ',' + e : ''), o = null;
        if (void 0 !== t.src && b.hasOwnProperty(n))
            return (o = b[n]).kj++, o;
        this.gf();
        var r = this.u, a = la(t.width) && la(t.height);
        o = r.createTexture();
        r.bindTexture(r.TEXTURE_2D, o), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var c = r.RGBA, p = r.RGBA, u = r.UNSIGNED_BYTE;
        if (h && !this.Je)
            switch (h) {
            case 1:
                p = c = r.RGB;
                break;
            case 2:
                u = r.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                u = r.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                p = c = r.RGB, u = r.UNSIGNED_SHORT_5_6_5;
            }
        if (1 === this.version && !a && i) {
            (h = document.createElement('canvas')).width = ma(t.width), h.height = ma(t.height);
            var f = h.getContext('2d');
            void 0 !== f.imageSmoothingEnabled ? f.imageSmoothingEnabled = s : (f.webkitImageSmoothingEnabled = s, f.mozImageSmoothingEnabled = s, f.msImageSmoothingEnabled = s), f.drawImage(t, 0, 0, t.width, t.height, 0, 0, h.width, h.height), r.texImage2D(r.TEXTURE_2D, 0, c, p, u, h);
        } else
            r.texImage2D(r.TEXTURE_2D, 0, c, p, u, t);
        return i ? 'repeat-x' === e ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.REPEAT), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE)) : ('repeat-y' === e ? r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE) : r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.REPEAT), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.REPEAT)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE)), s ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), (a || 2 <= this.version) && this.fp ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR), r.generateMipmap(r.TEXTURE_2D)) : r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST)), r.bindTexture(r.TEXTURE_2D, null), this.vf = null, o.bd = t.width, o.ad = t.height, o.kj = 1, o.Vo = n, l.push(o), b[n] = o;
    }, t.prototype.Ic = function (t, i, s) {
        var h;
        this.gf();
        var e = this.u;
        this.Je && (h = !1);
        var n = e.createTexture();
        return e.bindTexture(e.TEXTURE_2D, n), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, t, i, 0, e.RGBA, h ? e.UNSIGNED_SHORT_4_4_4_4 : e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, s ? e.LINEAR : e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, s ? e.LINEAR : e.NEAREST), e.bindTexture(e.TEXTURE_2D, null), this.vf = null, n.bd = t, n.ad = i, l.push(n), n;
    }, t.prototype.deleteTexture = function (t) {
        t && (void 0 !== t.kj && 1 < t.kj ? t.kj-- : (this.gf(), t === this.vf && (this.u.bindTexture(this.u.TEXTURE_2D, null), this.vf = null), t === this.wf && (this.u.activeTexture(this.u.TEXTURE1), this.u.bindTexture(this.u.TEXTURE_2D, null), this.u.activeTexture(this.u.TEXTURE0), this.wf = null), Ia(l, t), void 0 !== t.Vo && delete b[t.Vo], this.u.deleteTexture(t)));
    }, t.prototype.Tc = function (t) {
        if (t !== this.Gk) {
            var i = this.mc();
            i.type = 6, this.Gk = i.Vc = t, this.Mb = !1;
        }
    }, qb = t;
}(), function () {
    function s(t) {
        if (t && (t.getContext || t.dc) && !t.c2runtime) {
            var i = t.c2runtime = this;
            this.vc = (this.Zj = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !(void 0 === window.c2isCrosswalk || !window.c2isCrosswalk)) || void 0 !== window.device && (void 0 !== window.device.cordova || void 0 !== window.device.phonegap) || void 0 !== window.c2iscordova && window.c2iscordova, this.pb = !!t.dc, this.Np = void 0 !== window.AppMobi || this.pb, this.Mc = !!window.c2cocoonjs, this.gd = !!window.c2ejecta, this.Mc && (CocoonJS.App.onSuspended.addEventListener(function () {
                i.setSuspended(!0);
            }), CocoonJS.App.onActivated.addEventListener(function () {
                i.setSuspended(!1);
            })), this.gd && (document.addEventListener('pagehide', function () {
                i.setSuspended(!0);
            }), document.addEventListener('pageshow', function () {
                i.setSuspended(!1);
            }), document.addEventListener('resize', function () {
                i.setSize(window.innerWidth, window.innerHeight);
            })), this.pa = this.pb || this.Mc || this.gd, this.Gh = /edge\//i.test(navigator.userAgent), this.Je = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Gh, this.Pp = /tizen/i.test(navigator.userAgent), this.Dh = /android/i.test(navigator.userAgent) && !this.Pp && !this.Je && !this.Gh, this.Up = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Je && !this.Gh, this.kx = /ipad/i.test(navigator.userAgent), this.pg = this.Up || this.kx || this.gd, this.Bm = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Je && !this.Gh, this.Mp = /amazonwebappplatform/i.test(navigator.userAgent), this.ax = /firefox/i.test(navigator.userAgent), this.hx = /safari/i.test(navigator.userAgent) && !this.Bm && !this.Je && !this.Gh, this.ix = /windows/i.test(navigator.userAgent), this.gx = this.Hh = void 0 !== window.c2nodewebkit || void 0 !== window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.Rp = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.Sp = !(void 0 === window.c2isWindows8Capable || !window.c2isWindows8Capable), this.Ke = !(void 0 === window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.Hm = !(void 0 === window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.$j = !!window.cr_windows10, this.Qp = this.Rp || this.Sp || this.Hm || this.$j, this.Yw = !(void 0 === window.c2isBlackberry10 || !window.c2isBlackberry10), this.Xj = this.Dh && !this.Bm && !this.Zj && !this.ax && !this.Mp && !this.pa, this.devicePixelRatio = 1, this.sf = this.vc || this.Zj || this.Np || this.Mc || this.Dh || this.pg || this.Ke || this.Hm || this.Yw || this.Pp || this.gd, this.sf || (this.sf = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), this.Jh = !!(this.pg && this.vc && window.webkit), 'undefined' == typeof cr_is_preview || this.Hh || '?nw' !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Hh = !0), this.$w = 'undefined' != typeof cr_is_preview && -1 < window.location.search.indexOf('debug'), this.canvas = t, this.nj = document.getElementById('c2canvasdiv'), this.k = this.u = null, this.qm = '(unavailable)', this.ya = !1, this.ef = 0, this.Ba = null, this.Kj = !1, this.Mq = this.Nq = 0, this.canvas.oncontextmenu = function (t) {
                return t.preventDefault && t.preventDefault(), !1;
            }, this.canvas.onselectstart = function (t) {
                return t.preventDefault && t.preventDefault(), !1;
            }, this.canvas.ontouchstart = function (t) {
                return t.preventDefault && t.preventDefault(), !1;
            }, this.pb && (window.c2runtime = this), this.Hh && (window.ondragover = function (t) {
                return t.preventDefault(), !1;
            }, window.ondrop = function (t) {
                return t.preventDefault(), !1;
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()), this.Xj && 'undefined' != typeof jQuery && jQuery('canvas').parents('*').css('overflow', 'visible'), this.width = t.width, this.height = t.height, this.G = this.width, this.F = this.height, this.uj = this.width, this.nh = this.height, this.tg = window.innerWidth, this.sg = window.innerHeight, this.fa = !0, this.Ih = !1, Date.now || (Date.now = function () {
                return +new Date();
            }), this.plugins = [], this.types = {}, this.p = [], this.Ha = [], this.Nm = {}, this.hd = [], this.cm = {}, this.Ud = [], this.Wg = [], this.bl = [], this.Fu = [], this.Gu = [], this.cf = {}, this.Dm = this.He = !1, this.wc = 0, this.Cm = this.Gm = !1, this.cd = [], this.Fh = !1, this.gk = this.Bn = '', this.kb = null, this.Zd = '', this.si = this.Fr = !1, this.Jj = [], this.df = this.De = 0, this.Eq = 30, this.Pl = this.Xh = 0, this.Jf = 1, this.Bb = new eb(), this.oe = new eb(), this.rk = this.Mj = this.kf = this.Rg = this.yf = this.gm = this.dk = 0, this.ih = null, this.Yl = [], this.am = [], this.Dj = -1, this.Tm = [[]], this.On = this.lk = 0, this.Ek(null), this.Yh = [], this.Zh = -1, this.qh = this.Hq = this.bi = 0, this.ti = [], this.Kn = this.rn = -1, this.Mh = !0, this.jk = 0, this.gg = !1, this.Ay = 0, this.Rf = null, this.xc = this.Bp = !1, this.Lq = new ca(), this.$m = new ca(), this.an = new ca(), this.lr = [], this.md = new gb([]), this.In = new gb([]), this.Qf = [], this.wh = {}, this.ye = {}, this.se = {}, this.Vg = {}, this.Ro = {}, this.gq = this.fk = this.Ua = this.jb = this.fq = this.ek = this.ba = null, this.Tg = this.Im = !1, this.hm = [null,null], this.Fe = 0, this.rh = '', this.be = {}, this.qi = this.Me = null, this.Hr = '', this.qk = [], this.gy();
        }
    }
    function u(t, i) {
        return i <= 128 ? t[3] : i <= 256 ? t[2] : i <= 512 ? t[1] : t[0];
    }
    function n() {
        try {
            return window.indexedDB;
        } catch (t) {
            return;
        }
    }
    function o(t) {
        t.target.result.createObjectStore('saves', { keyPath: 'slot' });
    }
    function r() {
        fa('Reloading for continuous preview'), window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf('continuous') ? window.location.reload(!0) : window.location = window.location + '?continuous';
    }
    function a(t) {
        var i, s = {};
        for (i in t)
            !t.hasOwnProperty(i) || t[i] instanceof ca || t[i] && void 0 !== t[i].pz || 'spriteCreatedDestroyCallback' !== i && (s[i] = t[i]);
        return s;
    }
    var f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    s.prototype.gy = function () {
        var i = this;
        if (this.Jh)
            this.lp('data.js', function (t) {
                i.Qh(JSON.parse(t));
            }, function () {
                alert('Error fetching data.js');
            });
        else {
            var s;
            s = this.Ke ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
            var h = 'data.js';
            (this.Rp || this.Ke || this.Hm || this.$j) && (h = 'data.json'), s.open('GET', h, !0);
            var e = !1;
            if (!this.pa && 'response' in s && 'responseType' in s)
                try {
                    s.responseType = 'json', e = 'json' === s.responseType;
                } catch (t) {
                    e = !1;
                }
            if (!e && 'responseType' in s)
                try {
                    s.responseType = 'text';
                } catch (t) {
                }
            if ('overrideMimeType' in s)
                try {
                    s.overrideMimeType('application/json; charset=utf-8');
                } catch (t) {
                }
            this.Ke ? s.onreadystatechange = function () {
                4 === s.readyState && i.Qh(JSON.parse(s.responseText));
            } : (s.onload = function () {
                if (e)
                    i.Qh(s.response);
                else if (i.gd) {
                    var t = (t = s.responseText).substr(t.indexOf('{'));
                    i.Qh(JSON.parse(t));
                } else
                    i.Qh(JSON.parse(s.responseText));
            }, s.onerror = function (t) {
                ga('Error requesting ' + h + ':'), ga(t);
            }), s.send();
        }
    }, s.prototype.Vw = function () {
        var t, i, s, h, e, n, o, r, a, c = this;
        this.tf = (!this.pa || this.gd || this.vc) && this.Py && !this.Xj, 0 === this.Yb && this.pg && (this.tf = !1), this.devicePixelRatio = this.tf && (window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio) || 1, 'object' === _typeof(window.StatusBar) && window.StatusBar.hide(), this.Gb(), 0 < this.Yb && this.setSize(window.innerWidth, window.innerHeight, !0), this.canvas.addEventListener('webglcontextlost', function (t) {
            t.preventDefault(), c.Bx(), fa('[Construct 2] WebGL context lost'), window.cr_setSuspended(!0);
        }, !1), this.canvas.addEventListener('webglcontextrestored', function () {
            c.k.Gp(), c.k.ge(c.k.width, c.k.height, !0), c.jb = null, c.Ua = null, c.hm[0] = null, c.hm[1] = null, c.Cx(), c.fa = !0, fa('[Construct 2] WebGL context restored'), window.cr_setSuspended(!1);
        }, !1);
        try {
            this.yv && (this.Mc || this.gd || !this.pa) && (t = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: 'high-performance',
                failIfMajorPerformanceCaveat: !0
            }, this.Dh || (this.u = this.canvas.getContext('webgl2', t)), this.u || (this.u = this.canvas.getContext('webgl', t) || this.canvas.getContext('experimental-webgl', t)));
        } catch (t) {
        }
        if (this.u) {
            for ((t = this.u.getExtension('WEBGL_debug_renderer_info')) && (this.qm = this.u.getParameter(t.UNMASKED_RENDERER_WEBGL) + ' [' + this.u.getParameter(t.UNMASKED_VENDOR_WEBGL) + ']'), this.ya && (this.qm += ' [front-to-back enabled]'), this.pa || (this.Db = document.createElement('canvas'), jQuery(this.Db).appendTo(this.canvas.parentNode), this.Db.oncontextmenu = function () {
                    return !1;
                }, this.Db.onselectstart = function () {
                    return !1;
                }, this.Db.width = Math.round(this.uj * this.devicePixelRatio), this.Db.height = Math.round(this.nh * this.devicePixelRatio), jQuery(this.Db).css({
                    width: this.uj + 'px',
                    height: this.nh + 'px'
                }), this.fr(), this.gn = this.Db.getContext('2d')), this.k = new qb(this.u, this.sf, this.ya), this.k.ge(this.canvas.width, this.canvas.height), this.k.fp = 0 !== this.qv, this.Ba = null, t = 0, i = this.p.length; t < i; t++)
                for (s = 0, h = (e = this.p[t]).M.length; s < h; s++)
                    (o = e.M[s]).Za = this.k.pm(o.id), o.Rc = this.k.mn(o.Za), this.Tg = this.Tg || this.k.hi(o.Za);
            for (t = 0, i = this.hd.length; t < i; t++) {
                for (s = 0, h = (r = this.hd[t]).M.length; s < h; s++)
                    (o = r.M[s]).Za = this.k.pm(o.id), o.Rc = this.k.mn(o.Za);
                for (r.nd(), s = 0, h = r.P.length; s < h; s++) {
                    for (e = 0, n = (a = r.P[s]).M.length; e < n; e++)
                        (o = a.M[e]).Za = this.k.pm(o.id), o.Rc = this.k.mn(o.Za), this.Tg = this.Tg || this.k.hi(o.Za);
                    a.nd();
                }
            }
        } else {
            if (0 < this.Yb && this.pb) {
                this.canvas = null, document.oncontextmenu = function () {
                    return !1;
                }, document.onselectstart = function () {
                    return !1;
                }, this.Ba = AppMobi.canvas.getContext('2d');
                try {
                    this.Ba.samplingMode = this.qa ? 'smooth' : 'sharp', this.Ba.globalScale = 1, this.Ba.HTML5CompatibilityMode = !0, this.Ba.imageSmoothingEnabled = this.qa;
                } catch (t) {
                }
                0 !== this.width && 0 !== this.height && (this.Ba.width = this.width, this.Ba.height = this.height);
            }
            this.Ba || (t = this.Mc ? {
                antialias: !!this.qa,
                alpha: !0
            } : { alpha: !0 }, this.Ba = this.canvas.getContext('2d', t), this.Nk(this.Ba, this.qa)), this.gn = this.Db = null;
        }
        this.Nr = function (t) {
            c.mb(!1, t);
        }, window == window.top || this.pa || this.Qp || this.Ke || (document.addEventListener('mousedown', function () {
            window.focus();
        }, !0), document.addEventListener('touchstart', function () {
            window.focus();
        }, !0)), 'undefined' != typeof cr_is_preview && (this.Mc && console.log('[Construct 2] In preview-over-wifi via CocoonJS mode'), -1 < window.location.search.indexOf('continuous') && (fa('Reloading for continuous preview'), this.gk = '__c2_continuouspreview', this.si = !0), this.Qx && !this.sf && (jQuery(window).focus(function () {
            c.setSuspended(!1);
        }), jQuery(window).blur(function () {
            var t = window.parent;
            t && t.document.hasFocus() || c.setSuspended(!0);
        }))), window.addEventListener('blur', function () {
            c.Cg();
        }), this.pa || (t = function (t) {
            if (pb(t) && document.activeElement && document.activeElement !== document.getElementsByTagName('body')[0] && document.activeElement.blur)
                try {
                    document.activeElement.blur();
                } catch (t) {
                }
        }, 'undefined' != typeof PointerEvent ? document.addEventListener('pointerdown', t) : window.navigator.msPointerEnabled ? document.addEventListener('MSPointerDown', t) : document.addEventListener('touchstart', t), document.addEventListener('mousedown', t)), 0 === this.Yb && this.tf && 1 < this.devicePixelRatio && this.setSize(this.Wa, this.Va, !0), this.Sr(), this.Nw(), this.go(), this.ja = {};
    }, s.prototype.setSize = function (t, i, s) {
        var h = 0, e = 0, n = 0, o = 0;
        o = 0;
        if (this.tg !== t || this.sg !== i || s) {
            this.tg = t, this.sg = i;
            var r = this.Yb;
            ((n = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.gg) && !this.vc) || 0 !== this.Yb || s) && (n && (r = this.Fe), s = this.devicePixelRatio, 4 <= r ? (5 === r && 1 !== s && (t += 1, i += 1), (n = this.Wa / this.Va) < t / i ? (n *= i, 5 === r ? (1 < (o = n * s / this.Wa) ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), h = (t - (n = this.Wa * o / s)) / 2, e = (i - (o = this.Va * o / s)) / 2, t = n, i = o) : (h = (t - n) / 2, t = n)) : (o = t / n, 5 === r ? (1 < (o = o * s / this.Va) ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), h = (t - (n = this.Wa * o / s)) / 2, e = (i - (o = this.Va * o / s)) / 2, t = n) : e = (i - o) / 2, i = o)) : n && 0 === r && (h = Math.floor((t - this.Wa) / 2), e = Math.floor((i - this.Va) / 2), t = this.Wa, i = this.Va), r < 2 && (this.gh = s), this.uj = Math.round(t), this.nh = Math.round(i), this.width = Math.round(t * s), this.height = Math.round(i * s), this.fa = !0, this.ds || this.width < this.Wa && this.height < this.Va || 1 === r ? (this.G = this.width, this.F = this.height, this.sc = !0) : (this.G = this.Wa, this.F = this.Va, this.sc = !1, 2 === r ? (n = this.Wa / this.Va, (r = this.tg / this.sg) < n ? this.G = this.F * r : n < r && (this.F = this.G / r)) : 3 === r && ((n = this.Wa / this.Va) < (r = this.tg / this.sg) ? this.G = this.F * r : r < n && (this.F = this.G / r))), this.nj && !this.pa && (jQuery(this.nj).css({
                width: Math.round(t) + 'px',
                height: Math.round(i) + 'px',
                'margin-left': Math.floor(h) + 'px',
                'margin-top': Math.floor(e) + 'px'
            }), 'undefined' != typeof cr_is_preview && jQuery('#borderwrap').css({
                width: Math.round(t) + 'px',
                height: Math.round(i) + 'px'
            })), this.canvas && (this.canvas.width = Math.round(t * s), this.canvas.height = Math.round(i * s), this.gd ? (this.canvas.style.left = Math.floor(h) + 'px', this.canvas.style.top = Math.floor(e) + 'px', this.canvas.style.width = Math.round(t) + 'px', this.canvas.style.height = Math.round(i) + 'px') : this.tf && !this.pa && (this.canvas.style.width = Math.round(t) + 'px', this.canvas.style.height = Math.round(i) + 'px')), this.Db && (this.Db.width = Math.round(t * s), this.Db.height = Math.round(i * s), this.Db.style.width = this.uj + 'px', this.Db.style.height = this.nh + 'px'), this.k && this.k.ge(Math.round(t * s), Math.round(i * s)), this.pb && this.Ba && (this.Ba.width = Math.round(t), this.Ba.height = Math.round(i)), this.Ba && this.Nk(this.Ba, this.qa), this.Sr(), this.Up && !this.vc && window.scrollTo(0, 0));
        }
    }, s.prototype.Sr = function () {
        if (this.Iu && 0 !== this.en) {
            var t = 'portrait';
            2 === this.en && (t = 'landscape');
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(t).catch(function () {
                }) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t);
            } catch (t) {
                console && console.warn && console.warn('Failed to lock orientation: ', t);
            }
        }
    }, s.prototype.Bx = function () {
        var t, i, s;
        for (this.k.Pu(), this.Im = !0, t = 0, i = this.p.length; t < i; t++)
            (s = this.p[t]).ei && s.ei();
    }, s.prototype.Cx = function () {
        var t, i, s;
        for (this.Im = !1, t = 0, i = this.p.length; t < i; t++)
            (s = this.p[t]).fi && s.fi();
    }, s.prototype.fr = function () {
        if (!this.pa) {
            var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.gg) && !this.vc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            t.position = 'absolute', jQuery(this.Db).css(t);
        }
    };
    var h = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    s.prototype.setSuspended = function (t) {
        var i;
        if (t && !this.Ih)
            for (fa('[Construct 2] Suspending'), this.Ih = !0, -1 !== this.rn && h && h(this.rn), -1 !== this.Kn && clearTimeout(this.Kn), t = 0, i = this.ti.length; t < i; t++)
                this.ti[t](!0);
        else if (!t && this.Ih) {
            for (fa('[Construct 2] Resuming'), this.Ih = !1, this.dk = Za(), this.yf = Za(), t = this.Xh = this.Mj = 0, i = this.ti.length; t < i; t++)
                this.ti[t](!1);
            this.mb(!1);
        }
    }, s.prototype.No = function (t) {
        this.ti.push(t);
    }, s.prototype.qe = function (t) {
        return this.qk[t];
    };
    var l = !(s.prototype.Qh = function (t) {
            if (t && t.project || ga('Project model unavailable'), t = t.project, this.name = t[0], this.np = t[1], this.Yb = t[12], this.Wa = t[10], this.Va = t[11], this.$q = this.Wa / 2, this.br = this.Va / 2, this.pa && !this.gd && (4 <= t[12] || 0 === t[12]) && (fa('[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to \'Scale outer\''), this.Yb = 3), this.Un = t[18], this.Ne = t[19], 0 === this.Ne) {
                var i = new Image();
                i.crossOrigin = 'anonymous', this.wr(i, 'loading-logo.png'), this.Me = { mk: i };
            } else if (4 === this.Ne) {
                (i = new Image()).src = '';
                var s = new Image();
                s.src = '';
                var h = new Image();
                h.src = '';
                var e = new Image();
                e.src = '';
                var n = new Image();
                n.src = '';
                var o = new Image();
                o.src = '';
                var r = new Image();
                r.src = '';
                var a = new Image();
                a.src = '';
                var c = new Image();
                c.src = '';
                var p = new Image();
                p.src = '';
                var u = new Image();
                u.src = '';
                var f = new Image();
                f.src = '', this.Me = {
                    mk: [i,s,h,e],
                    Wx: [n,o,r,a],
                    Sy: [c,p,u,f]
                };
            }
            for (this.bi = t[21], this.qk = rc(), this.Hd = new T(this), i = 0, s = t[2].length; i < s; i++)
                r = t[2][i], h = this.qe(r[0]), rb(r, h.prototype), (a = new h(this)).Rk = r[1], a.Le = r[2], a.wz = r[5], a.Fq = r[9], a.D && a.D(), this.plugins.push(a);
            for (this.qk = rc(), i = 0, s = t[3].length; i < s; i++) {
                for (r = t[3][i], n = this.qe(r[1]), a = null, h = 0, e = this.plugins.length; h < e; h++)
                    if (this.plugins[h] instanceof n) {
                        a = this.plugins[h];
                        break;
                    }
                for ((c = new a.W(a)).name = r[0], c.B = r[2], c.Am = r[3].slice(0), c.Ry = r[3].length, c.Ju = r[4], c.iw = r[5], c.Y = r[11], c.B ? (c.yg = [], c.Vd = this.qh++, c.Da = null) : (c.yg = null, c.Vd = -1, c.Da = []), c.Hj = null, c.Zf = null, c.gp = null, c.Ab = !1, c.hc = null, r[6] ? (c.wi = r[6][0], c.Yk = r[6][1], c.Ue = r[6][2]) : (c.wi = null, c.Yk = 0, c.Ue = 0), r[7] ? c.gc = r[7] : c.gc = null, c.index = i, c.d = [], c.yj = [], c.ke = [new sb(c)], c.sd = 0, c.Jc = null, c.Wu = 0, c.Ng = !0, c.cl = tb, c.qw = ub, c.ww = vb, c.N = wb, c.ii = xb, c.Qe = yb, c.jd = zb, c.Pj = Ab, c.im = Bb, c.lm = Cb, c.Gc = Hb, c.mm = Ib, c.rj = new hb(this.Wa, this.Va), c.ej = !0, c.fj = !1, c.ja = {}, c.toString = Jb, c.Ha = [], h = 0, e = r[8].length; h < e; h++) {
                    for (p = r[8][h], u = this.qe(p[1]), f = null, n = 0, o = this.Ha.length; n < o; n++)
                        if (this.Ha[n] instanceof u) {
                            f = this.Ha[n];
                            break;
                        }
                    f || ((f = new u(this)).Gq = [], f.Ym = new ca(), f.D && f.D(), this.Ha.push(f)), -1 === f.Gq.indexOf(c) && f.Gq.push(c), (n = new f.W(f, c)).name = p[0], n.Y = p[2], n.D(), c.Ha.push(n);
                }
                for (c.global = r[9], c.Fm = r[10], c.M = [], h = 0, e = r[12].length; h < e; h++)
                    c.M.push({
                        id: r[12][h][0],
                        name: r[12][h][1],
                        Za: -1,
                        Rc: !1,
                        nc: !0,
                        index: h
                    });
                c.Lz = r[13], this.Un && !c.B && !c.Fm && a.Le || c.D(), c.name && (this.types[c.name] = c), this.p.push(c), a.Rk && ((h = new a.S(c)).uid = this.bi++, h.ir = this.Hq++, h.rf = 0, h.uh = Kb, h.toString = Lb, h.A = r[14], h.D(), c.d.push(h), this.be[h.uid.toString()] = h);
            }
            for (i = 0, s = t[4].length; i < s; i++)
                for (n = t[4][i], o = this.p[n[0]], h = 1, e = n.length; h < e; h++)
                    (r = this.p[n[h]]).Da.push(o), o.yg.push(r);
            for (i = 0, s = t[28].length; i < s; i++) {
                for (o = [], h = 0, e = (n = t[28][i]).length; h < e; h++)
                    o.push(this.p[n[h]]);
                for (h = 0, e = o.length; h < e; h++)
                    o[h].Ab = !0, o[h].hc = o;
            }
            if (0 < this.qh)
                for (i = 0, s = this.p.length; i < s; i++)
                    if (!(r = this.p[i]).B && r.Da.length) {
                        for (r.Hj = Array(this.qh), r.Zf = Array(this.qh), r.gp = Array(this.qh), c = [], h = f = u = p = 0, e = r.Da.length; h < e; h++)
                            for (a = r.Da[h], r.Hj[a.Vd] = p, p += a.Ry, r.Zf[a.Vd] = u, u += a.Ju, r.gp[a.Vd] = f, f += a.iw, n = 0, o = a.M.length; n < o; n++)
                                c.push(ya({}, a.M[n]));
                        for (r.M = c.concat(r.M), h = 0, e = r.M.length; h < e; h++)
                            r.M[h].index = h;
                    }
            for (i = 0, s = t[5].length; i < s; i++)
                r = t[5][i], h = new Mb(this, r), this.Nm[h.name] = h, this.hd.push(h);
            for (i = 0, s = t[6].length; i < s; i++)
                r = t[6][i], h = new Nb(this, r), this.cm[h.name] = h, this.Ud.push(h);
            for (i = 0, s = this.Ud.length; i < s; i++)
                this.Ud[i].Pa();
            for (i = 0, s = this.Ud.length; i < s; i++)
                this.Ud[i].Rn();
            for (i = 0, s = this.bl.length; i < s; i++)
                this.bl[i].Pa();
            A(this.bl), this.Hu = t[7], this.rh = t[8], this.Ac = t[9], this.gh = 1, this.yv = t[13], this.qa = t[14], this.Zo = t[15], this.Py = t[17], this.en = t[20], this.Iu = 0 < this.en, this.Qx = t[22], this.sc = this.ds = t[23], this.qv = t[24], this.Xx = t[25], this.ya = t[27] && !this.Je, this.Sk = Date.now(), A(this.qk), this.Vw();
        }), e = 0, c = [];
    s.prototype.by = function (t, i) {
        function s() {
            e--, h.Aq();
        }
        var h = this;
        t.addEventListener('load', s), t.addEventListener('error', s), c.push([t,i]), this.Aq();
    }, s.prototype.Aq = function () {
        for (var t; c.length && e < 100;)
            e++, t = c.shift(), this.wr(t[0], t[1]);
    }, s.prototype.gl = function (i, s) {
        i.cocoonLazyLoad = !0, i.onerror = function (t) {
            l = i.Uo = !0, console && console.error && console.error('Error loading image \'' + i.src + '\': ', t);
        }, this.gd ? i.src = s : i.src || ('undefined' != typeof XAPKReader ? XAPKReader.get(s, function (t) {
            i.src = t;
        }, function (t) {
            l = i.Uo = !0, console && console.error && console.error('Error extracting image \'' + s + '\' from expansion file: ', t);
        }) : (i.crossOrigin = 'anonymous', this.by(i, s))), this.Wg.push(i);
    };
    var p = 0, b = !(s.prototype.gw = function (t) {
            var i, s;
            for (i = 0, s = this.Wg.length; i < s; i++)
                if (this.Wg[i].Qu === t)
                    return this.Wg[i];
            return null;
        });
    s.prototype.Nw = function () {
        this.Rf && (p = this.Rf.wy(this.Hu));
    };
    var d = !(s.prototype.Po = function () {
        var t, i, s = p, h = 0, e = 0, n = !0;
        e = 0;
        for (t = this.Wg.length; e < t; e++) {
            var o = (i = this.Wg[e]).Ql;
            (!o || o <= 0) && (o = 50000), s += o, i.src && (i.complete || i.loaded) && !i.Uo ? h += o : n = !1;
        }
        return n && this.Xx && this.Rf && (b || (this.Rf.By(), b = !0), h += e = this.Rf.xw(), e < p && (n = !1)), this.$b = 0 == s ? 1 : h / s, n;
    });
    s.prototype.go = function () {
        if (this.Ba || this.k) {
            var t = this.Ba || this.gn;
            this.Db && this.fr();
            var i = window.innerWidth, s = window.innerHeight;
            this.tg === i && this.sg === s || this.setSize(i, s), this.$b = 0, this.dq = -1;
            var h = this;
            if (this.Po() && (4 !== this.Ne || d))
                this.Ow();
            else {
                if (s = Date.now() - this.Sk, t) {
                    var e = this.width, n = this.height;
                    i = this.devicePixelRatio;
                    if (this.Ne < 3 && (this.Mc || 500 <= s && this.dq != this.$b)) {
                        t.clearRect(0, 0, e, n);
                        s = e / 2, n = n / 2;
                        var o, r = 40 * i, a = 0, c = 80 * i;
                        if (e = 0 === this.Ne && this.Me.mk.complete) {
                            var p = this.Me.mk;
                            r = (c = p.width * i) / 2, a = (o = p.height * i) / 2, t.drawImage(p, ta(s - r), ta(n - a), c, o);
                        }
                        this.Ne <= 1 ? (s = ta(s - r) + 0.5, n = ta(n + (a + (e ? 12 * i : 0))) + 0.5, t.fillStyle = l ? 'red' : 'DodgerBlue', t.fillRect(s, n, Math.floor(c * this.$b), 6 * i), t.strokeStyle = 'black', t.strokeRect(s, n, c, 6 * i), t.strokeStyle = 'white', t.strokeRect(s - i, n - i, c + 2 * i, 8 * i)) : 2 === this.Ne && (t.font = this.gd ? '12pt ArialMT' : '12pt Arial', t.fillStyle = l ? '#f00' : '#999', t.Kz = 'middle', i = Math.round(100 * this.$b) + '%', e = t.measureText ? t.measureText(i) : null, t.fillText(i, s - (e ? e.width : 0) / 2, n)), this.dq = this.$b;
                    } else if (4 === this.Ne)
                        return this.vv(t), void (f ? f(function () {
                            h.go();
                        }) : setTimeout(function () {
                            h.go();
                        }, 16));
                }
                setTimeout(function () {
                    h.go();
                }, this.Mc ? 10 : 100);
            }
        }
    };
    var g = -1, y = 'undefined' == typeof cr_is_preview ? 200 : 0, v = !0, m = !1, w = 0, k = 0, x = 'undefined' == typeof cr_is_preview ? 3000 : 0, E = null, j = null, R = 0;
    s.prototype.vv = function (t) {
        if (!d) {
            for (var i = Math.ceil(this.width), s = Math.ceil(this.height), h = this.Me.mk, e = this.Me.Wx, n = this.Me.Sy, o = 0; o < 4; ++o)
                if (!h[o].complete || !e[o].complete || !n[o].complete)
                    return;
            0 === R && (g = Date.now());
            o = Date.now();
            var r, a, c = !1, p = t;
            v || m ? (t.clearRect(0, 0, i, s), E && E.width === i && E.height === s || ((E = document.createElement('canvas')).width = i, E.height = s, j = E.getContext('2d')), p = j, c = !0, v && 1 === R && (g = Date.now())) : t.globalAlpha = 1, p.fillStyle = '#333333', p.fillRect(0, 0, i, s), 256 < this.nh ? (a = 0.25 * (r = Ja(0.22 * s, 105, 0.6 * i)), p.drawImage(u(e, r), 0.5 * i - r / 2, 0.2 * s - a / 2, r, a), a = r = Math.min(0.395 * s, 0.95 * i), p.drawImage(u(h, r), 0.5 * i - r / 2, 0.485 * s - a / 2, r, a), a = 0.25 * (r = Ja(0.22 * s, 105, 0.6 * i)), p.drawImage(u(n, r), 0.5 * i - r / 2, 0.868 * s - a / 2, r, a), p.fillStyle = '#3C3C3C', r = i, a = Math.max(0.005 * s, 2), p.fillRect(0, 0.8 * s - a / 2, r, a), p.fillStyle = l ? 'red' : '#E0FF65', r = i * this.$b, p.fillRect(0.5 * i - r / 2, 0.8 * s - a / 2, r, a)) : (a = r = 0.55 * s, p.drawImage(u(h, r), 0.5 * i - r / 2, 0.45 * s - a / 2, r, a), p.fillStyle = '#3C3C3C', r = i, a = Math.max(0.005 * s, 2), p.fillRect(0, 0.85 * s - a / 2, r, a), p.fillStyle = l ? 'red' : '#E0FF65', r = i * this.$b, p.fillRect(0.5 * i - r / 2, 0.85 * s - a / 2, r, a)), c && (v ? t.globalAlpha = 0 === R ? 0 : Math.min((o - g) / 300, 1) : m && (t.globalAlpha = Math.max(1 - (o - k) / 300, 0)), t.drawImage(E, 0, 0, i, s)), v && 300 <= o - g && 2 <= R && (v = !1, w = o), !v && x <= o - w && !m && 1 <= this.$b && (m = !0, k = o), (m && 300 + y <= o - k || 'undefined' != typeof cr_is_preview && 1 <= this.$b && Date.now() - g < 500) && (m = v = !(d = !0), this.Me = j = E = null), ++R;
        }
    }, s.prototype.Ow = function () {
        var t, i, s;
        if (this.Db && (this.canvas.parentNode.removeChild(this.Db), this.Db = this.gn = null), this.Sk = Date.now(), this.yf = Za(), this.Un)
            for (t = 0, i = this.p.length; t < i; t++)
                (s = this.p[t]).B || s.Fm || !s.X.Le || s.D();
        else
            this.Mh = !1;
        for (t = 0, i = this.hd.length; t < i; t++)
            this.hd[t].Ru();
        for (2 <= this.Yb && (t = this.Wa / this.Va, i = this.width / this.height, this.gh = 2 !== this.Yb && t < i || 2 === this.Yb && i < t ? this.height / this.Va : this.width / this.Wa), this.np ? this.Nm[this.np].Gn() : this.hd[0].Gn(), this.Un || (this.jk = 1, this.trigger(T.prototype.c.uo, null), window.C2_RegisterSW && window.C2_RegisterSW()), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, i = this.p.length; t < i; t++)
            (s = this.p[t]).Oq && s.Oq();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.mb(!1), this.pb && AppMobi.webview.execute('onGameReady();');
    }, s.prototype.mb = function (t, i, s) {
        if (this.ba) {
            var h = Za();
            if (s || !this.Ih || t) {
                t || (f ? this.rn = f(this.Nr) : this.Kn = setTimeout(this.Nr, this.sf ? 1 : 16)), i = i || h;
                var e = this.Yb;
                if (((s = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.vc) || this.gg) && 0 < this.Fe && (e = this.Fe), 0 < e) {
                    e = window.innerWidth;
                    var n = window.innerHeight;
                    this.tg === e && this.sg === n || this.setSize(e, n);
                }
                this.pa || (s ? this.Kj || (this.Kj = !0) : this.Kj ? (this.Kj = !1, 0 === this.Yb && this.setSize(Math.round(this.Nq / this.devicePixelRatio), Math.round(this.Mq / this.devicePixelRatio), !0)) : (this.Nq = this.width, this.Mq = this.height)), this.Mh && (s = this.Po(), this.jk = this.$b, s && (this.Mh = !1, this.$b = 1, this.trigger(T.prototype.c.uo, null), window.C2_RegisterSW && window.C2_RegisterSW())), this.tx(i), !this.fa && !this.Mc || this.Im || this.si || t || (this.fa = !1, this.k ? this.Kb() : this.ed(), this.qi && (this.canvas && this.canvas.toDataURL && (this.Hr = this.canvas.toDataURL(this.qi[0], this.qi[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Hr), this.trigger(T.prototype.c.jt, null)), this.qi = null)), this.vz || (this.Rg++, this.kf++, this.Mj++), this.Xh += Za() - h;
            }
        }
    }, s.prototype.tx = function (t) {
        var i, s, h, e, n, o, r, a;
        for (1000 <= t - this.yf && (this.yf += 1000, 1000 <= t - this.yf && (this.yf = t), this.gm = this.Mj, this.Mj = 0, this.Pl = this.Xh, this.Xh = 0), (i = 0) !== this.dk && ((i = t - this.dk) < 0 && (i = 0), this.df = i /= 1000, 0.5 < this.df ? this.df = 0 : this.df > 1 / this.Eq && (this.df = 1 / this.Eq)), this.dk = t, this.De = this.df * this.Jf, this.Bb.add(this.De), this.oe.add(i), t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.gg) && !this.vc, 2 <= this.Yb || t && 0 < this.Fe ? (i = this.Wa / this.Va, s = this.width / this.height, h = this.Yb, t && 0 < this.Fe && (h = this.Fe), this.gh = 2 !== h && i < s || 2 === h && s < i ? this.height / this.Va : this.width / this.Wa, this.ba && (this.ba.Kk(this.ba.scrollX), this.ba.Lk(this.ba.scrollY))) : this.gh = this.tf ? this.devicePixelRatio : 1, this.Gb(), this.wc++, this.Hd.jy(), this.wc--, this.Gb(), this.wc++, t = 0, i = (s = this.Lq.We()).length; t < i; t++)
            s[t].Ez();
        for (t = 0, i = this.p.length; t < i; t++)
            if (!(o = this.p[t]).B && (o.Ha.length || o.Da.length))
                for (s = 0, h = o.d.length; s < h; s++)
                    for (e = 0, n = (r = o.d[s]).L.length; e < n; e++)
                        r.L[e].mb();
        for (t = 0, i = this.p.length; t < i; t++)
            if (!(o = this.p[t]).B && (o.Ha.length || o.Da.length))
                for (s = 0, h = o.d.length; s < h; s++)
                    for (e = 0, n = (r = o.d[s]).L.length; e < n; e++)
                        (a = r.L[e]).Vx && a.Vx();
        for (t = 0, i = (s = this.$m.We()).length; t < i; t++)
            s[t].mb();
        for (this.wc--, this.Pw(), t = 0; this.ih && t++ < 10;)
            this.ep(this.ih);
        for (t = 0, i = this.Ud.length; t < i; t++)
            this.Ud[t].um = !1;
        for (this.ba.hf && this.ba.hf.Ya(), A(this.lr), this.wc++, t = 0, i = this.p.length; t < i; t++)
            if (!(o = this.p[t]).B && (o.Ha.length || o.Da.length))
                for (s = 0, h = o.d.length; s < h; s++)
                    for (e = 0, n = (r = o.d[s]).L.length; e < n; e++)
                        (a = r.L[e]).Jn && a.Jn();
        for (t = 0, i = (s = this.an.We()).length; t < i; t++)
            s[t].Jn();
        this.wc--;
    }, s.prototype.Cg = function () {
        var t, i, s, h, e, n, o, r, a;
        for (t = 0, i = this.p.length; t < i; t++)
            if (!(o = this.p[t]).B)
                for (s = 0, h = o.d.length; s < h; s++)
                    if ((r = o.d[s]).Cg && r.Cg(), r.L)
                        for (e = 0, n = r.L.length; e < n; e++)
                            (a = r.L[e]).Cg && a.Cg();
    }, s.prototype.ep = function (t) {
        var i, s, h, e = this.ba;
        if (this.ba.Cy(), this.k)
            for (i = 0, s = this.p.length; i < s; i++)
                (h = this.p[i]).B || !h.Ai || h.global && 0 !== h.d.length || -1 !== t.Bh.indexOf(h) || h.Ai();
        e == t && A(this.Hd.fc), A(this.lr), this.or(!0), t.Gn(), this.or(!1), this.fa = !0, this.Gb();
    }, s.prototype.or = function (t) {
        var i, s, h, e, n, o, r, a, c;
        for (i = 0, s = this.Ha.length; i < s; i++)
            h = this.Ha[i], t ? h.ci && h.ci() : h.di && h.di();
        for (i = 0, s = this.p.length; i < s; i++)
            if ((h = this.p[i]).global || h.X.Rk)
                for (e = 0, n = h.d.length; e < n; e++)
                    if (o = h.d[e], t ? o.ci && o.ci() : o.di && o.di(), o.L)
                        for (r = 0, a = o.L.length; r < a; r++)
                            c = o.L[r], t ? c.ci && c.ci() : c.di && c.di();
    }, s.prototype.If = function (t) {
        this.$m.add(t);
    }, s.prototype.Fy = function (t) {
        this.an.add(t);
    }, s.prototype.Rj = function (t) {
        return t && -1 !== t.ai ? this.df * t.ai : this.De;
    }, s.prototype.ed = function () {
        this.ba.ed(this.Ba), this.pb && this.Ba.present();
    }, s.prototype.Kb = function () {
        this.ya && (this.ef = 1, this.ba.Ce(this.k)), this.ba.Kb(this.k), this.k.Zx();
    }, s.prototype.Du = function (t) {
        t && this.Yl.push(t);
    }, s.prototype.Uj = function (t) {
        return t = t.toString(), this.be.hasOwnProperty(t) ? this.be[t] : null;
    };
    var S = [];
    s.prototype.Xe = function (t) {
        var i, s;
        i = t.type.name;
        var h = null;
        if (this.cf.hasOwnProperty(i)) {
            if ((h = this.cf[i]).contains(t))
                return;
        } else
            h = S.length ? S.pop() : new ca(), this.cf[i] = h;
        if (h.add(t), this.He = !0, t.Ab)
            for (i = 0, s = t.siblings.length; i < s; i++)
                this.Xe(t.siblings[i]);
        this.Dm && h.Ug.push(t), this.Cm || (this.wc++, this.trigger(Object.getPrototypeOf(t.type.X).c.po, t), this.wc--);
    }, s.prototype.Gb = function () {
        if (this.He) {
            var t, i, s, h, e, n;
            for (this.Dm = !0, s = 0, e = this.cd.length; s < e; ++s)
                for ((i = (t = this.cd[s]).type).d.push(t), h = 0, n = i.Da.length; h < n; ++h)
                    i.Da[h].d.push(t), i.Da[h].Ng = !0;
            A(this.cd), this.Ys(), Ya(this.cf), this.He = this.Dm = !1;
        }
    }, s.prototype.Ys = function () {
        for (var t in this.cf)
            this.cf.hasOwnProperty(t) && this.ps(this.cf[t]);
    }, s.prototype.ps = function (t) {
        var i, s, h, e, n, o, r = t.We(), a = r[0].type;
        for ($a(a.d, t), a.Ng = !0, 0 === a.d.length && (a.fj = !1), i = 0, s = a.Da.length; i < s; ++i)
            o = a.Da[i], $a(o.d, t), o.Ng = !0;
        for (i = 0, s = this.Hd.fc.length; i < s; ++i)
            if ((n = this.Hd.fc[i]).Sb.hasOwnProperty(a.index) && $a(n.Sb[a.index].Xd, t), !a.B)
                for (h = 0, e = a.Da.length; h < e; ++h)
                    o = a.Da[h], n.Sb.hasOwnProperty(o.index) && $a(n.Sb[o.index].Xd, t);
        if (n = r[0].j) {
            if (n.Ec)
                for (i = 0, s = (h = n.d).length; i < s; ++i)
                    e = h[i], t.contains(e) && (e.Aa(), n.Eb.update(e, e.ac, null), e.ac.set(0, 0, -1, -1));
            $a(n.d, t), n.mi(0);
        }
        for (i = 0; i < r.length; ++i)
            this.os(r[i], a);
        t.clear(), S.push(t), this.fa = !0;
    }, s.prototype.os = function (t, i) {
        var s, h, e;
        for (s = 0, h = this.Yl.length; s < h; ++s)
            this.Yl[s](t);
        if (t.ze && i.rj.update(t, t.ze, null), (s = t.j) && s.Gg(t, !0), t.L)
            for (s = 0, h = t.L.length; s < h; ++s)
                (e = t.L[s]).Ef && e.Ef(), e.behavior.Ym.remove(t);
        this.Lq.remove(t), this.$m.remove(t), this.an.remove(t), t.Ef && t.Ef(), this.be.hasOwnProperty(t.uid.toString()) && delete this.be[t.uid.toString()], this.rk--, i.yj.length < 100 && i.yj.push(t);
    }, s.prototype.Rl = function (t, i, s, h) {
        if (t.B) {
            var e = ta(Math.random() * t.yg.length);
            return this.Rl(t.yg[e], i, s, h);
        }
        return t.Jc ? this.Ae(t.Jc, i, !1, s, h, !1) : null;
    };
    var M = [];
    s.prototype.Ae = function (t, i, s, h, e, n) {
        var o, r, a, c;
        if (!t)
            return null;
        var p = this.p[t[1]], u = p.X.Le;
        if (this.Mh && u && !p.Fm || u && !this.k && 11 === t[0][11])
            return null;
        var f, l, b = i;
        for (u || (i = null), p.yj.length ? ((f = p.yj.pop()).Bc = !0, p.X.S.call(f, p)) : (f = new p.X.S(p)).Bc = !1, !s || n || this.be.hasOwnProperty(t[2].toString()) ? f.uid = this.bi++ : f.uid = t[2], (this.be[f.uid.toString()] = f).ir = this.Hq++, f.rf = p.d.length, o = 0, r = this.cd.length; o < r; ++o)
            this.cd[o].type === p && f.rf++;
        if (f.uh = Kb, f.toString = Lb, a = t[3], f.Bc)
            Ya(f.ja);
        else {
            if (f.ja = {}, 'undefined' != typeof cr_is_preview)
                for (f.Jp = [], f.Jp.length = a.length, o = 0, r = a.length; o < r; o++)
                    f.Jp[o] = a[o][1];
            f.hb = [], f.hb.length = a.length;
        }
        for (o = 0, r = a.length; o < r; o++)
            f.hb[o] = a[o][0];
        if (u) {
            var d = t[0];
            if (f.x = ha(h) ? d[0] : h, f.y = ha(e) ? d[1] : e, f.z = d[2], f.width = d[3], f.height = d[4], f.depth = d[5], f.m = d[6], f.opacity = d[7], f.Nb = d[8], f.Ob = d[9], f.Hb = d[10], o = d[11], !this.k && p.M.length && (f.Hb = o), f.jh = jb(f.Hb), this.u && kb(f, f.Hb, this.u), f.Bc) {
                for (o = 0, r = d[12].length; o < r; o++)
                    for (a = 0, c = d[12][o].length; a < c; a++)
                        f.Ja[o][a] = d[12][o][a];
                f.Qa.set(0, 0, 0, 0), f.ze.set(0, 0, -1, -1), f.ac.set(0, 0, -1, -1), f.Xb.ni(f.Qa), A(f.Gl);
            } else {
                for (f.Ja = d[12].slice(0), o = 0, r = f.Ja.length; o < r; o++)
                    f.Ja[o] = d[12][o].slice(0);
                f.ea = [], f.re = [], f.re.length = p.M.length, f.Qa = new wa(0, 0, 0, 0), f.ze = new wa(0, 0, -1, -1), f.ac = new wa(0, 0, -1, -1), f.Xb = new xa(), f.Gl = [], f.za = Ob, f.oz = Pb, f.Ib = Qb, f.Aa = Rb, f.Ny = Sb, f.$r = Tb, f.wd = Ub;
            }
            for (f.Sg = !1, f.Iy = 0, f.Hy = 0, f.Gy = null, 14 === d.length && (f.Sg = !0, f.Iy = d[13][0], f.Hy = d[13][1], f.Gy = d[13][2]), o = 0, r = p.M.length; o < r; o++)
                f.re[o] = !0;
            f.ie = !0, f.nd = Vb, f.nd(), f.as = !!f.ea.length, f.Fl = !0, f.Kl = !0, p.ej = !0, f.visible = !0, f.ai = -1, f.j = i, f.pd = i.d.length, void (f.ef = 0) === f.ga && (f.ga = null), this.fa = f.$e = !0;
        }
        for (A(M), o = 0, r = p.Da.length; o < r; o++)
            M.push.apply(M, p.Da[o].Ha);
        if (M.push.apply(M, p.Ha), f.Bc)
            for (o = 0, r = M.length; o < r; o++) {
                var g = M[o];
                for ((l = f.L[o]).Bc = !0, g.behavior.S.call(l, g, f), a = 0, c = (d = t[4][o]).length; a < c; a++)
                    l.A[a] = d[a];
                l.D(), g.behavior.Ym.add(f);
            }
        else
            for (f.L = [], o = 0, r = M.length; o < r; o++)
                (l = new (g = M[o]).behavior.S(g, f)).Bc = !1, l.A = t[4][o].slice(0), l.D(), f.L.push(l), g.behavior.Ym.add(f);
        if (d = t[5], f.Bc)
            for (o = 0, r = d.length; o < r; o++)
                f.A[o] = d[o];
        else
            f.A = d.slice(0);
        if (this.cd.push(f), this.He = !0, i && (i.fh(f, !0), 1 !== i.Pc || 1 !== i.Qc) && (p.fj = !0), this.rk++, p.Ab) {
            if (f.Ab = !0, f.Bc ? A(f.siblings) : f.siblings = [], !s && !n) {
                for (o = 0, r = p.hc.length; o < r; o++)
                    if (p.hc[o] !== p) {
                        if (!p.hc[o].Jc)
                            return null;
                        f.siblings.push(this.Ae(p.hc[o].Jc, b, !1, u ? f.x : h, u ? f.y : e, !0));
                    }
                for (o = 0, r = f.siblings.length; o < r; o++)
                    for (f.siblings[o].siblings.push(f), a = 0; a < r; a++)
                        o !== a && f.siblings[o].siblings.push(f.siblings[a]);
            }
        } else
            f.Ab = !1, f.siblings = null;
        for (f.D(), o = 0, r = f.L.length; o < r; o++)
            f.L[o].Ux && f.L[o].Ux();
        return f;
    }, s.prototype.Sj = function (t) {
        var i, s;
        for (i = 0, s = this.ba.P.length; i < s; i++) {
            var h = this.ba.P[i];
            if (mb(h.name, t))
                return h;
        }
        return null;
    }, s.prototype.ag = function (t) {
        return (t = ta(t)) < 0 && (t = 0), t >= this.ba.P.length && (t = this.ba.P.length - 1), this.ba.P[t];
    }, s.prototype.wp = function (t) {
        return ja(t) ? this.ag(t) : this.Sj(t.toString());
    }, s.prototype.Nl = function (t) {
        var i, s;
        for (i = 0, s = t.length; i < s; i++)
            t[i].N().R = !0;
    }, s.prototype.ii = function (t) {
        var i, s;
        for (i = 0, s = t.length; i < s; i++)
            t[i].ii();
    }, s.prototype.Qe = function (t) {
        var i, s;
        for (i = 0, s = t.length; i < s; i++)
            t[i].Qe();
    }, s.prototype.jd = function (t) {
        var i, s;
        for (i = 0, s = t.length; i < s; i++)
            t[i].jd();
    }, s.prototype.Xr = function (t) {
        if (t.ej) {
            var i, s, h = t.d;
            for (i = 0, s = h.length; i < s; ++i)
                h[i].$r();
            for (i = 0, s = (h = this.cd).length; i < s; ++i)
                h[i].type === t && h[i].$r();
            t.ej = !1;
        }
    }, s.prototype.ow = function (t, i, s, h) {
        var e, n, o = !!t && (1 !== t.Pc || 1 !== t.Qc);
        if (i.B)
            for (t = 0, e = i.yg.length; t < e; ++t)
                n = i.yg[t], o || n.fj ? Fa(h, n.d) : (this.Xr(n), n.rj.Fk(s, h));
        else
            o || i.fj ? Fa(h, i.d) : (this.Xr(i), i.rj.Fk(s, h));
    }, s.prototype.Wk = function (t, i, s) {
        var h, e, n, o, r, a, c, p = t.N(), u = this.Ea().Ia.kc;
        if (p.R)
            for (p.R = !1, A(p.d), h = 0, o = t.d.length; h < o; h++)
                (n = t.d[h]).Aa(), r = n.j.ub(i, s, !0), a = n.j.ub(i, s, !1), n.Ib(r, a) ? p.d.push(n) : u && p.I.push(n);
        else {
            for (h = e = 0, o = (c = u ? p.I : p.d).length; h < o; h++)
                (n = c[h]).Aa(), r = n.j.ub(i, s, !0), a = n.j.ub(i, s, !1), n.Ib(r, a) && (u ? p.d.push(n) : (p.d[e] = p.d[h], e++));
            c.length = e;
        }
        return t.Gc(), p.tm();
    }, s.prototype.Ey = function (t, i) {
        if (!(t && i && t !== i && t.$e && i.$e))
            return !1;
        t.Aa(), i.Aa();
        var s, h, e, n, o, r, a, c, p = t.j, u = i.j;
        if (p === u || p.Pc === u.Pc && u.Qc == u.Qc && p.scale === u.scale && p.m === u.m && p.qd === u.qd)
            return !(!t.Qa.Ww(i.Qa) || !t.Xb.Kp(i.Xb) || t.Sg && i.Sg) && (t.Sg ? this.Lr(t, i) : i.Sg ? this.Lr(i, t) : (a = t.ga && !t.ga.jg(), s = i.ga && !i.ga.jg(), !a && !s || (a = a ? (t.ga.Sf(t.width, t.height, t.m), t.ga) : (this.md.Lg(t.Xb, t.x, t.y, t.width, t.height), this.md), c = s ? (i.ga.Sf(i.width, i.height, i.m), i.ga) : (this.md.Lg(i.Xb, i.x, i.y, i.width, i.height), this.md), a.Ch(c, i.x - t.x, i.y - t.y))));
        for (a = t.ga && !t.ga.jg(), s = i.ga && !i.ga.jg(), a ? (t.ga.Sf(t.width, t.height, t.m), this.md.Ar(t.ga)) : this.md.Lg(t.Xb, t.x, t.y, t.width, t.height), a = this.md, s ? (i.ga.Sf(i.width, i.height, i.m), this.In.Ar(i.ga)) : this.In.Lg(i.Xb, i.x, i.y, i.width, i.height), c = this.In, s = 0, h = a.kd; s < h; s++)
            n = (e = 2 * s) + 1, o = a.lb[e], r = a.lb[n], a.lb[e] = p.ib(o + t.x, r + t.y, !0), a.lb[n] = p.ib(o + t.x, r + t.y, !1);
        for (a.Aa(), s = 0, h = c.kd; s < h; s++)
            n = (e = 2 * s) + 1, o = c.lb[e], r = c.lb[n], c.lb[e] = u.ib(o + i.x, r + i.y, !0), c.lb[n] = u.ib(o + i.x, r + i.y, !1);
        return c.Aa(), a.Ch(c, 0, 0);
    };
    var P = new xa();
    new wa(0, 0, 0, 0);
    var q = [];
    s.prototype.Lr = function (t, i) {
        var s, h, e, n, o = i.Qa, r = t.x, a = t.y;
        t.sz(o, q);
        var c = i.ga && !i.ga.jg();
        for (s = 0, h = q.length; s < h; ++s)
            if (n = (e = q[s]).Hz, o.Xw(n, r, a) && (P.ni(n), P.offset(r, a), P.Kp(i.Xb)))
                if (c) {
                    if (i.ga.Sf(i.width, i.height, i.m), e.kn) {
                        if (e.kn.Ch(i.ga, i.x - (r + n.left), i.y - (a + n.top)))
                            return A(q), !0;
                    } else if (this.md.Lg(P, 0, 0, n.right - n.left, n.bottom - n.top), this.md.Ch(i.ga, i.x, i.y))
                        return A(q), !0;
                } else {
                    if (!e.kn)
                        return A(q), !0;
                    if (this.md.Lg(i.Xb, 0, 0, i.width, i.height), e.kn.Ch(this.md, -(r + n.left), -(a + n.top)))
                        return A(q), !0;
                }
        return A(q), !1;
    }, s.prototype.Tr = function (t, i) {
        if (!i)
            return !1;
        var s, h, e, n, o;
        for (s = 0, h = t.Ha.length; s < h; s++)
            if (t.Ha[s].behavior instanceof i)
                return !0;
        if (!t.B)
            for (s = 0, h = t.Da.length; s < h; s++)
                for (e = 0, n = (o = t.Da[s]).Ha.length; e < n; e++)
                    if (o.Ha[e].behavior instanceof i)
                        return !0;
        return !1;
    }, s.prototype.Pn = function (t) {
        return this.Tr(t, jc.cz);
    }, s.prototype.Qn = function (t) {
        return this.Tr(t, jc.dz);
    };
    var O = -1;
    s.prototype.trigger = function (t, i, s) {
        if (!this.ba)
            return !1;
        var h = this.ba.hf;
        if (!h)
            return !1;
        var e, n, o, r = !1;
        O++;
        var a = h.Wl;
        for (n = 0, o = a.length; n < o; ++n)
            e = this.Qr(t, i, a[n], s), r = r || e;
        return e = this.Qr(t, i, h, s), O--, r || e;
    }, s.prototype.Qr = function (t, i, s, h) {
        var e, n, o, r, a = !1;
        if (i)
            for (o = this.Nn(t, i, i.type.name, s, h), a = a || o, e = 0, n = (r = i.type.Da).length; e < n; ++e)
                o = this.Nn(t, i, r[e].name, s, h), a = a || o;
        else
            o = this.Nn(t, i, 'system', s, h), a = a || o;
        return a;
    }, s.prototype.Nn = function (t, i, s, h, e) {
        var n, o = !1, r = !1, a = ((r = void 0 !== e) ? h.ip : h.Rr)[s];
        if (!a)
            return o;
        var c, p = null;
        for (h = 0, n = a.length; h < n; ++h)
            if (a[h].method == t) {
                p = a[h].ph;
                break;
            }
        if (!p)
            return o;
        if (!(c = r ? p[e] : p))
            return null;
        for (h = 0, n = c.length; h < n; h++)
            t = c[h][0], e = c[h][1], r = this.ew(i, s, t, e), o = o || r;
        return o;
    }, s.prototype.ew = function (t, i, s, h) {
        var e, n, o = !1;
        this.On++;
        var r = this.Ea().Ia;
        r && this.ii(r.Te);
        var a = 1 < this.On;
        this.ii(s.Te), a && this.ay();
        var c = this.Ek(s);
        if (c.Ia = s, t && ((e = this.types[i].N()).R = !1, A(e.d), e.d[0] = t, this.types[i].Gc()), t = !0, s.parent) {
            for (i = c.Kr, e = s.parent; e;)
                i.push(e), e = e.parent;
            for (i.reverse(), e = 0, n = i.length; e < n; e++)
                if (!i[e].ly()) {
                    t = !1;
                    break;
                }
        }
        return t && (this.kf++, s.kc ? s.ky(h) : s.Ya(), o = o || c.xf), this.zk(), a && this.Tx(), this.jd(s.Te), r && this.jd(r.Te), this.He && 0 === this.wc && 0 === O && !this.Gm && this.Gb(), this.On--, o;
    }, s.prototype.Qj = function () {
        var t = this.Ea();
        return t.Ia.eb[t.Ra];
    }, s.prototype.Zw = function () {
        return 0 === this.Ea().Ra;
    }, s.prototype.pw = function () {
        var t = this.Ea();
        return t.Ia.Fc[t.Wb];
    }, s.prototype.ay = function () {
        this.lk++, this.lk >= this.Tm.length && this.Tm.push([]);
    }, s.prototype.Tx = function () {
        this.lk--;
    }, s.prototype.tp = function () {
        return this.Tm[this.lk];
    }, s.prototype.Ek = function (t) {
        this.Dj++, this.Dj >= this.am.length && this.am.push(new Wb());
        var i = this.Ea();
        return i.reset(t), i;
    }, s.prototype.zk = function () {
        this.Dj--;
    }, s.prototype.Ea = function () {
        return this.am[this.Dj];
    }, s.prototype.pn = function (t) {
        this.Zh++, this.Zh >= this.Yh.length && this.Yh.push(aa({
            name: t,
            index: 0,
            ta: !1
        }));
        var i = this.up();
        return i.name = t, i.index = 0, i.ta = !1, i;
    }, s.prototype.ln = function () {
        this.Zh--;
    }, s.prototype.up = function () {
        return this.Yh[this.Zh];
    }, s.prototype.vp = function (t, i) {
        for (var s, h, e, n, o, r; i;) {
            for (s = 0, h = i.Uc.length; s < h; s++)
                if ((r = i.Uc[s]) instanceof Xb && mb(t, r.name))
                    return r;
            i = i.parent;
        }
        for (s = 0, h = this.Ud.length; s < h; s++)
            for (e = 0, n = (o = this.Ud[s]).Ee.length; e < n; e++)
                if ((r = o.Ee[e]) instanceof Xb && mb(t, r.name))
                    return r;
        return null;
    }, s.prototype.xp = function (t) {
        var i, s;
        for (i = 0, s = this.hd.length; i < s; i++)
            if (this.hd[i].Y === t)
                return this.hd[i];
        return null;
    }, s.prototype.Vj = function (t) {
        var i, s;
        for (i = 0, s = this.p.length; i < s; i++)
            if (this.p[i].Y === t)
                return this.p[i];
        return null;
    }, s.prototype.rw = function (t) {
        var i, s;
        for (i = 0, s = this.Qf.length; i < s; i++)
            if (this.Qf[i].Y === t)
                return this.Qf[i];
        return null;
    }, s.prototype.Yu = function (t, i) {
        this.qi = [t,i], this.fa = !0;
    }, s.prototype.Pw = function () {
        var s = this, t = this.Bn, h = this.Zd, i = this.gk, e = !1;
        if (this.Fr && (e = !0, t = '__c2_continuouspreview', this.Fr = !1), t.length) {
            if (this.Gb(), h = this.qy(), n() && !this.Mc)
                !function (i, s, h, e) {
                    try {
                        var t = indexedDB.open('_C2SaveStates');
                        t.onupgradeneeded = o, t.onerror = e, t.onsuccess = function (t) {
                            (t = t.target.result).onerror = e, t.transaction(["saves"], 'readwrite').objectStore('saves').put({
                                slot: i,
                                data: s
                            }).onsuccess = h;
                        };
                    } catch (t) {
                        e(t);
                    }
                }(t, h, function () {
                    fa('Saved state to IndexedDB storage (' + h.length + ' bytes)'), s.Zd = h, s.trigger(T.prototype.c.ql, null), h = s.Zd = '', e && r();
                }, function (i) {
                    try {
                        localStorage.setItem('__c2save_' + t, h), fa('Saved state to WebStorage (' + h.length + ' bytes)'), s.Zd = h, s.trigger(T.prototype.c.ql, null), h = s.Zd = '', e && r();
                    } catch (t) {
                        fa('Failed to save game state: ' + i + '; ' + t), s.trigger(T.prototype.c.zo, null);
                    }
                });
            else
                try {
                    localStorage.setItem('__c2save_' + t, h), fa('Saved state to WebStorage (' + h.length + ' bytes)'), s.Zd = h, this.trigger(T.prototype.c.ql, null), h = s.Zd = '', e && r();
                } catch (t) {
                    fa('Error saving to WebStorage: ' + t), s.trigger(T.prototype.c.zo, null);
                }
            this.gk = this.Bn = '', this.kb = null;
        }
        if (i.length) {
            if (n() && !this.Mc)
                !function (s, h, e) {
                    try {
                        var t = indexedDB.open('_C2SaveStates');
                        t.onupgradeneeded = o, t.onerror = e, t.onsuccess = function (t) {
                            (t = t.target.result).onerror = e;
                            var i = t.transaction(["saves"]).objectStore('saves').get(s);
                            i.onsuccess = function () {
                                i.result ? h(i.result.data) : h(null);
                            };
                        };
                    } catch (t) {
                        e(t);
                    }
                }(i, function (t) {
                    t ? (s.kb = t, fa('Loaded state from IndexedDB storage (' + s.kb.length + ' bytes)')) : (s.kb = localStorage.getItem('__c2save_' + i) || '', fa('Loaded state from WebStorage (' + s.kb.length + ' bytes)')), s.si = !1, s.kb || (s.kb = null, s.trigger(T.prototype.c.Vi, null));
                }, function () {
                    s.kb = localStorage.getItem('__c2save_' + i) || '', fa('Loaded state from WebStorage (' + s.kb.length + ' bytes)'), s.si = !1, s.kb || (s.kb = null, s.trigger(T.prototype.c.Vi, null));
                });
            else {
                try {
                    this.kb = localStorage.getItem('__c2save_' + i) || '', fa('Loaded state from WebStorage (' + this.kb.length + ' bytes)');
                } catch (t) {
                    this.kb = null;
                }
                this.si = !1, s.kb || (s.kb = null, s.trigger(T.prototype.c.Vi, null));
            }
            this.Bn = this.gk = '';
        }
        null !== this.kb && (this.Gb(), this.rx(this.kb) ? (this.Zd = this.kb, this.trigger(T.prototype.c.ut, null), this.Zd = '') : s.trigger(T.prototype.c.Vi, null), this.kb = null);
    }, s.prototype.qy = function () {
        var t, i, s, h, e, n, o, r = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.Bb.Z,
                    walltime: this.oe.Z,
                    timescale: this.Jf,
                    tickcount: this.Rg,
                    execcount: this.kf,
                    next_uid: this.bi,
                    running_layout: this.ba.Y,
                    start_time_offset: Date.now() - this.Sk
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
        for (t = 0, i = this.p.length; t < i; t++)
            if (!(e = this.p[t]).B && !this.Pn(e)) {
                for (n = { instances: [] }, Xa(e.ja) && (n.ex = a(e.ja)), s = 0, h = e.d.length; s < h; s++)
                    n.instances.push(this.An(e.d[s]));
                r.types[e.Y.toString()] = n;
            }
        for (t = 0, i = this.hd.length; t < i; t++)
            s = this.hd[t], r.layouts[s.Y.toString()] = s.Fb();
        for (h = r.events.groups, t = 0, i = this.Qf.length; t < i; t++)
            h[(s = this.Qf[t]).Y.toString()] = this.wh[s.vh].dg;
        for (o in (i = r.events.cnds, this.ye))
            this.ye.hasOwnProperty(o) && (t = this.ye[o], Xa(t.ja) && (i[o] = { ex: a(t.ja) }));
        for (o in (i = r.events.acts, this.se))
            this.se.hasOwnProperty(o) && (t = this.se[o], Xa(t.ja) && (i[o] = { ex: a(t.ja) }));
        for (o in (i = r.events.vars, this.Vg))
            this.Vg.hasOwnProperty(o) && ((t = this.Vg[o]).ak || t.parent && !t.Lh || (i[o] = t.data));
        return r.system = this.Hd.Fb(), JSON.stringify(r);
    }, s.prototype.kr = function () {
        var t, i, s, h, e, n;
        for (this.be = {}, t = 0, i = this.p.length; t < i; t++)
            if (!(s = this.p[t]).B)
                for (h = 0, e = s.d.length; h < e; h++)
                    n = s.d[h], this.be[n.uid.toString()] = n;
    }, s.prototype.rx = function (t) {
        var i;
        try {
            i = JSON.parse(t);
        } catch (t) {
            return !1;
        }
        if (!i.c2save || 1 < i.version)
            return !1;
        this.Fh = !0, t = i.rt, this.Bb.reset(), this.Bb.Z = t.time, this.oe.reset(), this.oe.Z = t.walltime || 0, this.Jf = t.timescale, this.Rg = t.tickcount, this.kf = t.execcount, this.Sk = Date.now() - t.start_time_offset;
        var s, h, e, n, o, r, a, c = t.running_layout;
        if (c !== this.ba.Y) {
            if (!(c = this.xp(c)))
                return;
            this.ep(c);
        }
        for (h in r = i.types)
            if (r.hasOwnProperty(h) && (n = this.Vj(parseInt(h, 10))) && !n.B && !this.Pn(n)) {
                for (r[h].ex ? n.ja = r[h].ex : Ya(n.ja), o = n.d, e = r[h].instances, c = 0, s = qa(o.length, e.length); c < s; c++)
                    this.hk(o[c], e[c]);
                for (c = e.length, s = o.length; c < s; c++)
                    this.Xe(o[c]);
                for (c = o.length, s = e.length; c < s; c++)
                    o = null, n.X.Le && !(o = this.ba.Tj(e[c].w.l)) || (o = this.Ae(n.Jc, o, !1, 0, 0, !0), this.hk(o, e[c]));
                n.Ng = !0;
            }
        for (h in (this.Gb(), this.kr(), s = i.layouts))
            s.hasOwnProperty(h) && (c = this.xp(parseInt(h, 10))) && c.Qb(s[h]);
        for (h in s = i.events.groups)
            s.hasOwnProperty(h) && (c = this.rw(parseInt(h, 10))) && this.wh[c.vh] && this.wh[c.vh].ty(s[h]);
        for (h in (c = i.events.cnds, this.ye))
            this.ye.hasOwnProperty(h) && (c.hasOwnProperty(h) ? this.ye[h].ja = c[h].ex : this.ye[h].ja = {});
        for (h in (c = i.events.acts, this.se))
            this.se.hasOwnProperty(h) && (c.hasOwnProperty(h) ? this.se[h].ja = c[h].ex : this.se[h].ja = {});
        for (h in c = i.events.vars)
            c.hasOwnProperty(h) && this.Vg.hasOwnProperty(h) && (this.Vg[h].data = c[h]);
        for (this.bi = t.next_uid, this.Fh = !1, c = 0, s = this.Jj.length; c < s; ++c)
            o = this.Jj[c], this.trigger(Object.getPrototypeOf(o.type.X).c.Jd, o);
        for (A(this.Jj), this.Hd.Qb(i.system), c = 0, s = this.p.length; c < s; c++)
            if (!(n = this.p[c]).B && !this.Pn(n))
                for (i = 0, h = n.d.length; i < h; i++) {
                    if (o = n.d[i], n.Ab)
                        for (r = o.uh(), A(o.siblings), t = 0, e = n.hc.length; t < e; t++)
                            n !== (a = n.hc[t]) && o.siblings.push(a.d[r]);
                    if (o.Kd && o.Kd(), o.L)
                        for (t = 0, e = o.L.length; t < e; t++)
                            (r = o.L[t]).Kd && r.Kd();
                }
        return this.fa = !0;
    }, s.prototype.An = function (t, i) {
        var s, h, e, n, o;
        e = (n = t.type).X;
        var r = {};
        if (i ? r.c2 = !0 : r.uid = t.uid, Xa(t.ja) && (r.ex = a(t.ja)), t.hb && t.hb.length)
            for (r.ivs = {}, s = 0, h = t.hb.length; s < h; s++)
                r.ivs[t.type.Am[s].toString()] = t.hb[s];
        if (e.Le) {
            if (e = {
                    x: t.x,
                    y: t.y,
                    w: t.width,
                    h: t.height,
                    l: t.j.Y,
                    zi: t.wd()
                }, 0 !== t.m && (e.a = t.m), 1 !== t.opacity && (e.o = t.opacity), 0.5 !== t.Nb && (e.hX = t.Nb), 0.5 !== t.Ob && (e.hY = t.Ob), 0 !== t.Hb && (e.bm = t.Hb), t.visible || (e.v = t.visible), t.$e || (e.ce = t.$e), -1 !== t.ai && (e.mts = t.ai), n.M.length)
                for (e.fx = [], s = 0, h = n.M.length; s < h; s++)
                    o = n.M[s], e.fx.push({
                        name: o.name,
                        active: t.re[o.index],
                        params: t.Ja[o.index]
                    });
            r.w = e;
        }
        if (t.L && t.L.length)
            for (r.behs = {}, s = 0, h = t.L.length; s < h; s++)
                (n = t.L[s]).Fb && (r.behs[n.type.Y.toString()] = n.Fb());
        return t.Fb && (r.data = t.Fb()), r;
    }, s.prototype.uw = function (t, i) {
        var s, h;
        for (s = 0, h = t.Am.length; s < h; s++)
            if (t.Am[s] === i)
                return s;
        return -1;
    }, s.prototype.mw = function (t, i) {
        var s, h;
        for (s = 0, h = t.L.length; s < h; s++)
            if (t.L[s].type.Y === i)
                return s;
        return -1;
    }, s.prototype.hk = function (t, i, s) {
        var h, e, n, o, r, a = (r = t.type).X;
        if (s) {
            if (!i.c2)
                return;
        } else
            t.uid = i.uid;
        if (i.ex ? t.ja = i.ex : Ya(t.ja), e = i.ivs)
            for (h in e)
                e.hasOwnProperty(h) && ((n = this.uw(r, parseInt(h, 10))) < 0 || n >= t.hb.length || (null === (o = e[h]) && (o = NaN), t.hb[n] = o));
        if (a.Le) {
            if (n = i.w, t.j.Y !== n.l && (e = t.j, t.j = this.ba.Tj(n.l), t.j ? (e.Gg(t, !0), t.j.fh(t, !0), t.za(), t.j.mi(0)) : (t.j = e, s || this.Xe(t))), t.x = n.x, t.y = n.y, t.width = n.w, t.height = n.h, t.pd = n.zi, t.m = n.hasOwnProperty('a') ? n.a : 0, t.opacity = n.hasOwnProperty('o') ? n.o : 1, t.Nb = n.hasOwnProperty('hX') ? n.hX : 0.5, t.Ob = n.hasOwnProperty('hY') ? n.hY : 0.5, t.visible = !n.hasOwnProperty('v') || n.v, t.$e = !n.hasOwnProperty('ce') || n.ce, t.ai = n.hasOwnProperty('mts') ? n.mts : -1, t.Hb = n.hasOwnProperty('bm') ? n.bm : 0, t.jh = jb(t.Hb), this.u && kb(t, t.Hb, this.u), t.za(), n.hasOwnProperty('fx'))
                for (s = 0, e = n.fx.length; s < e; s++)
                    (o = r.lm(n.fx[s].name)) < 0 || (t.re[o] = n.fx[s].active, t.Ja[o] = n.fx[s].params);
            t.nd();
        }
        if (r = i.behs)
            for (h in r)
                r.hasOwnProperty(h) && ((s = this.mw(t, parseInt(h, 10))) < 0 || t.L[s].Qb(r[h]));
        i.data && t.Qb(i.data);
    }, s.prototype.jp = function (t, i, s) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + 'www/' + t, function (t) {
            t.file(i, s);
        }, s);
    }, s.prototype.lp = function (t, s, h) {
        this.jp(t, function (t) {
            var i = new FileReader();
            i.onload = function (t) {
                s(t.target.result);
            }, i.onerror = h, i.readAsText(t);
        }, h);
    };
    var L = [], D = 0;
    s.prototype.Vm = function () {
        if (L.length && !(8 <= D)) {
            D++;
            var t = L.shift();
            this.$u(t.filename, t.Dy, t.Bv);
        }
    }, s.prototype.kp = function (t, i, s) {
        var h = this;
        L.push({
            filename: t,
            Dy: function (t) {
                D--, h.Vm(), i(t);
            },
            Bv: function (t) {
                D--, h.Vm(), s(t);
            }
        }), this.Vm();
    }, s.prototype.$u = function (t, s, i) {
        this.jp(t, function (t) {
            var i = new FileReader();
            i.onload = function (t) {
                s(t.target.result);
            }, i.readAsArrayBuffer(t);
        }, i);
    }, s.prototype.fw = function (t, i, s) {
        var h = '', e = (n = t.toLowerCase()).substr(n.length - 4), n = n.substr(n.length - 5);
        '.mp4' === e ? h = 'video/mp4' : '.webm' === n ? h = 'video/webm' : '.m4a' === e ? h = 'audio/mp4' : '.mp3' === e && (h = 'audio/mpeg'), this.kp(t, function (t) {
            t = URL.createObjectURL(new Blob([t], { type: h })), i(t);
        }, s);
    }, s.prototype.Lp = function (t) {
        return /^(?:[a-z]+:)?\/\//.test(t) || 'data:' === t.substr(0, 5) || 'blob:' === t.substr(0, 5);
    }, s.prototype.wr = function (i, t) {
        this.Jh && !this.Lp(t) ? this.fw(t, function (t) {
            i.src = t;
        }, function (t) {
            alert('Failed to load image: ' + t);
        }) : i.src = t;
    }, s.prototype.Nk = function (t, i) {
        void 0 !== t.imageSmoothingEnabled ? t.imageSmoothingEnabled = i : (t.webkitImageSmoothingEnabled = i, t.mozImageSmoothingEnabled = i, t.msImageSmoothingEnabled = i);
    }, Yb = function (t) {
        return new s(document.getElementById(t));
    }, Zb = function (t, i) {
        return new s({
            dc: !0,
            width: t,
            height: i
        });
    }, window.cr_createRuntime = Yb, window.cr_createDCRuntime = Zb, window.createCocoonJSRuntime = function () {
        window.c2cocoonjs = !0;
        var t = document.createElement('screencanvas') || document.createElement('canvas');
        return t.El = !0, document.body.appendChild(t), t = new s(t), window.c2runtime = t, window.addEventListener('orientationchange', function () {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), t;
    }, window.createEjectaRuntime = function () {
        var t = new s(document.getElementById('canvas'));
        return window.c2runtime = t, window.c2runtime.setSize(window.innerWidth, window.innerHeight), t;
    };
}(), window.cr_getC2Runtime = function () {
    var t = document.getElementById('c2canvas');
    return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null;
}, window.cr_getSnapshot = function (t, i) {
    var s = window.cr_getC2Runtime();
    s && s.Yu(t, i);
}, window.cr_sizeCanvas = function (t, i) {
    if (0 !== t && 0 !== i) {
        var s = window.cr_getC2Runtime();
        s && s.setSize(t, i);
    }
}, window.cr_setSuspended = function (t) {
    var i = window.cr_getC2Runtime();
    i && i.setSuspended(t);
}, function () {
    function t(t, i) {
        this.b = t, this.hf = null, this.scrollX = this.b.Wa / 2, this.scrollY = this.b.Va / 2, this.scale = 1, this.m = 0, this.$f = !0, this.name = i[0], this.Nx = i[1], this.Mx = i[2], this.width = i[1], this.height = i[2], this.Ur = i[3], this.Dr = i[4], this.Y = i[5];
        var s, h, e = i[6];
        for (this.P = [], this.Bh = [], s = 0, h = e.length; s < h; s++) {
            (n = new $b(this, e[s])).Jq = s, this.P.push(n);
        }
        for (e = i[7], this.Ie = [], s = 0, h = e.length; s < h; s++) {
            var n = e[s], o = this.b.p[n[1]];
            o.Jc || (o.Jc = n), this.Ie.push(n), -1 === this.Bh.indexOf(o) && this.Bh.push(o);
        }
        for (this.M = [], this.ea = [], this.ie = !0, this.Ja = [], s = 0, h = i[8].length; s < h; s++)
            this.M.push({
                id: i[8][s][0],
                name: i[8][s][1],
                Za: -1,
                Rc: !1,
                nc: !0,
                index: s
            }), this.Ja.push(i[8][s][2].slice(0));
        this.nd(), this.de = new wa(0, 0, 1, 1), this.sn = new wa(0, 0, 1, 1), this.Pe = {};
    }
    function a(t, i) {
        return t.pd - i.pd;
    }
    function i(t, i) {
        this.rb = t, this.b = t.b, this.d = [], this.scale = 1, this.m = 0, this.Sd = !1, this.le = new wa(0, 0, 0, 0), this.Or = new xa(), this.ua = this.na = this.wa = this.ma = 0, this.Lf = !1, this.pe = -1, this.Ol = 0, this.name = i[0], this.index = i[1], this.Y = i[2], this.visible = i[3], this.Zc = i[4], this.Dc = i[5], this.Pc = i[6], this.Qc = i[7], this.opacity = i[8], this.Lj = i[9], this.Ec = i[10], this.qd = i[11], this.Hb = i[12], this.xv = i[13], this.jh = 'source-over', this.Jb = this.Pb = 0, this.Eb = null, this.$d = y(), this.ld = !0, this.ug = new wa(0, 0, -1, -1), this.wb = new wa(0, 0, -1, -1), this.Ec && (this.Eb = new ib(this.b.Wa, this.b.Va)), this.Dd = !1;
        var s, h, e = i[14];
        for (this.Ir = [], this.uc = [], this.mh = [], s = 0, h = e.length; s < h; s++) {
            var n = e[s], o = this.b.p[n[1]];
            o.Jc || (o.Jc = n, o.Wu = this.index), this.uc.push(n), -1 === this.rb.Bh.indexOf(o) && this.rb.Bh.push(o);
        }
        for (Da(this.Ir, this.uc), this.M = [], this.ea = [], this.ie = !0, this.Ja = [], s = 0, h = i[15].length; s < h; s++)
            this.M.push({
                id: i[15][s][0],
                name: i[15][s][1],
                Za: -1,
                Rc: !1,
                nc: !0,
                index: s
            }), this.Ja.push(i[15][s][2].slice(0));
        this.nd(), this.de = new wa(0, 0, 1, 1), this.sn = new wa(0, 0, 1, 1);
    }
    function y() {
        return s.length ? s.pop() : [];
    }
    function v(t) {
        A(t), s.push(t);
    }
    t.prototype.oy = function (t) {
        var i = t.type.Y.toString();
        this.Pe.hasOwnProperty(i) || (this.Pe[i] = []), this.Pe[i].push(this.b.An(t));
    }, t.prototype.Cp = function () {
        var t = this.P[0];
        return !t.Dc && 1 === t.opacity && !t.Lj && t.visible;
    }, t.prototype.nd = function () {
        var t, i, s;
        for (A(this.ea), this.ie = !0, t = 0, i = this.M.length; t < i; t++)
            (s = this.M[t]).nc && (this.ea.push(s), s.Rc || (this.ie = !1));
    }, t.prototype.km = function (t) {
        var i, s, h;
        for (i = 0, s = this.M.length; i < s; i++)
            if ((h = this.M[i]).name === t)
                return h;
        return null;
    };
    var c = [], p = !0;
    t.prototype.Gn = function () {
        var t, i, s, h, e, n, o;
        for (this.Dr && (this.hf = this.b.cm[this.Dr], this.hf.Rn()), (this.b.ba = this).width = this.Nx, this.height = this.Mx, this.scrollX = this.b.Wa / 2, this.scrollY = this.b.Va / 2, t = 0, s = this.b.p.length; t < s; t++)
            if (!(i = this.b.p[t]).B)
                for (e = i.d, i = 0, h = e.length; i < h; i++)
                    if ((n = e[i]).j) {
                        var r = n.j.Jq;
                        r >= this.P.length && (r = this.P.length - 1), n.j = this.P[r], -1 === n.j.d.indexOf(n) && n.j.d.push(n), n.j.Lf = !0;
                    }
        if (!p)
            for (t = 0, s = this.P.length; t < s; ++t)
                this.P[t].d.sort(a);
        for (A(c), this.Ku(), t = 0, s = this.P.length; t < s; t++)
            (n = this.P[t]).Su(), n.dl();
        if (e = !1, !this.$f) {
            for (o in this.Pe)
                if (this.Pe.hasOwnProperty(o) && (i = this.b.Vj(parseInt(o, 10))) && !i.B && this.b.Qn(i)) {
                    for (t = 0, s = (h = this.Pe[o]).length; t < s; t++)
                        n = null, i.X.Le && !(n = this.Tj(h[t].w.l)) || (n = this.b.Ae(i.Jc, n, !1, 0, 0, !0), this.b.hk(n, h[t]), e = !0, c.push(n));
                    A(h);
                }
            for (t = 0, s = this.P.length; t < s; t++)
                this.P[t].d.sort(a), this.P[t].Lf = !0;
        }
        for (e && (this.b.Gb(), this.b.kr()), t = 0; t < c.length; t++)
            if ((n = c[t]).type.Ab)
                for (s = n.uh(), i = 0, h = n.type.hc.length; i < h; i++)
                    o = n.type.hc[i], n.type !== o && (o.d.length > s ? n.siblings.push(o.d[s]) : o.Jc && (e = this.b.Ae(o.Jc, n.j, !0, n.x, n.y, !0), this.b.Gb(), o.cl(), n.siblings.push(e), c.push(e)));
        for (t = 0, s = this.Ie.length; t < s; t++)
            n = this.Ie[t], (i = this.b.p[n[1]]).Ab || this.b.Ae(this.Ie[t], null, !0);
        if (this.b.ih = null, this.b.Gb(), this.b.Ba && !this.b.pa)
            for (t = 0, s = this.b.p.length; t < s; t++)
                !(o = this.b.p[t]).B && o.d.length && o.Ck && o.Ck(this.b.Ba);
        if (this.b.Fh)
            Da(this.b.Jj, c);
        else
            for (t = 0, s = c.length; t < s; t++)
                n = c[t], this.b.trigger(Object.getPrototypeOf(n.type.X).c.Jd, n);
        A(c), this.b.Fh || this.b.trigger(T.prototype.c.to, null), this.$f = !1;
    }, t.prototype.Ru = function () {
        var t, i, s, h, e;
        for (i = t = 0, s = this.Ie.length; t < s; t++)
            h = this.Ie[t], (e = this.b.p[h[1]]).global ? e.Ab || this.b.Ae(h, null, !0) : (this.Ie[i] = h, i++);
        Ba(this.Ie, i);
    }, t.prototype.Cy = function () {
        var t, i, s, h, e, n;
        if (this.b.Fh || this.b.trigger(T.prototype.c.so, null), this.b.Cm = !0, A(this.b.Hd.fc), !this.$f)
            for (t = 0, i = this.P.length; t < i; t++)
                for (this.P[t].Tn(), s = 0, h = (e = this.P[t].d).length; s < h; s++)
                    (n = e[s]).type.global || this.b.Qn(n.type) && this.oy(n);
        for (t = 0, i = this.P.length; t < i; t++) {
            for (s = 0, h = (e = this.P[t].d).length; s < h; s++)
                (n = e[s]).type.global || this.b.Xe(n);
            this.b.Gb(), A(e), this.P[t].Lf = !0;
        }
        for (t = 0, i = this.b.p.length; t < i; t++)
            if (!((e = this.b.p[t]).global || e.X.Le || e.X.Rk || e.B)) {
                for (s = 0, h = e.d.length; s < h; s++)
                    this.b.Xe(e.d[s]);
                this.b.Gb();
            }
        p = !1, this.b.Cm = !1;
    }, new wa(0, 0, 0, 0), t.prototype.ed = function (t) {
        var i, s = t, h = !1, e = !this.b.sc;
        e && (this.b.fk || (this.b.fk = document.createElement('canvas'), (i = this.b.fk).width = this.b.G, i.height = this.b.F, this.b.gq = i.getContext('2d'), h = !0), i = this.b.fk, s = this.b.gq, i.width !== this.b.G && (i.width = this.b.G, h = !0), i.height !== this.b.F && (i.height = this.b.F, h = !0), h && this.b.Nk(s, this.b.qa)), s.globalAlpha = 1, s.globalCompositeOperation = 'source-over', this.b.Zo && !this.Cp() && s.clearRect(0, 0, this.b.G, this.b.F);
        var n, o;
        h = 0;
        for (n = this.P.length; h < n; h++)
            (o = this.P[h]).visible && 0 < o.opacity && 11 !== o.Hb && (o.d.length || !o.Dc) ? o.ed(s) : o.dl();
        e && t.drawImage(i, 0, 0, this.b.width, this.b.height);
    }, t.prototype.Ce = function (t) {
        var i, s;
        for (t.ur(!0), this.b.Ua || (this.b.Ua = t.Ic(this.b.G, this.b.F, this.b.qa)), this.b.Ua.bd === this.b.G && this.b.Ua.ad === this.b.F || (t.deleteTexture(this.b.Ua), this.b.Ua = t.Ic(this.b.G, this.b.F, this.b.qa)), t.Tc(this.b.Ua), this.b.sc || t.ge(this.b.G, this.b.F), i = this.P.length - 1; 0 <= i; --i)
            (s = this.P[i]).visible && 1 === s.opacity && s.ie && 0 === s.Hb && (s.d.length || !s.Dc) ? s.Ce(t) : s.dl();
        t.ur(!1);
    }, t.prototype.Kb = function (t) {
        var i, s, h, e = 0 < this.ea.length || this.b.Tg || !this.b.sc || this.b.ya;
        for (e ? (this.b.Ua || (this.b.Ua = t.Ic(this.b.G, this.b.F, this.b.qa)), this.b.Ua.bd === this.b.G && this.b.Ua.ad === this.b.F || (t.deleteTexture(this.b.Ua), this.b.Ua = t.Ic(this.b.G, this.b.F, this.b.qa)), t.Tc(this.b.Ua), this.b.sc || t.ge(this.b.G, this.b.F)) : this.b.Ua && (t.Tc(null), t.deleteTexture(this.b.Ua), this.b.Ua = null), this.b.Zo && !this.Cp() && t.clear(0, 0, 0, 0), i = 0, s = this.P.length; i < s; i++)
            (h = this.P[i]).visible && 0 < h.opacity && (h.d.length || !h.Dc) ? h.Kb(t) : h.dl();
        e && (0 === this.ea.length || 1 === this.ea.length && this.b.sc ? (1 === this.ea.length ? (e = this.ea[0].index, t.ec(this.ea[0].Za), t.Jg(null, 1 / this.b.G, 1 / this.b.F, 0, 0, 1, 1, this.scale, this.m, 0, 0, this.b.G / 2, this.b.F / 2, this.b.Bb.Z, this.Ja[e]), t.Dk(this.ea[0].Za) && (this.b.fa = !0)) : t.ec(0), this.b.sc || t.ge(this.b.width, this.b.height), t.Tc(null), t.tr(!1), t.Se(1), t.Rb(this.b.Ua), t.rr(), t.Ed(), t.od(), e = this.b.width / 2, i = this.b.height / 2, t.ji(-e, i, e, i, e, -i, -e, -i), t.Rb(null), t.tr(!0)) : this.tn(t, null, null, null));
    }, t.prototype.sh = function () {
        return 0 < this.ea.length || this.b.Tg || !this.b.sc || this.b.ya ? this.b.Ua : null;
    }, t.prototype.yp = function () {
        var t, i, s, h = this.P[0].Lc();
        for (t = 1, i = this.P.length; t < i; t++)
            (0 !== (s = this.P[t]).Pc || 0 !== s.Qc) && s.Lc() < h && (h = s.Lc());
        return h;
    }, t.prototype.Kk = function (t) {
        if (!this.Ur) {
            var i = 1 / this.yp() * this.b.G / 2;
            t > this.width - i && (t = this.width - i), t < i && (t = i);
        }
        this.scrollX !== t && (this.scrollX = t, this.b.fa = !0);
    }, t.prototype.Lk = function (t) {
        if (!this.Ur) {
            var i = 1 / this.yp() * this.b.F / 2;
            t > this.height - i && (t = this.height - i), t < i && (t = i);
        }
        this.scrollY !== t && (this.scrollY = t, this.b.fa = !0);
    }, t.prototype.Ku = function () {
        this.Kk(this.scrollX), this.Lk(this.scrollY);
    }, t.prototype.tn = function (t, i, s, h) {
        var e = s ? s.ea : i ? i.ea : this.ea, n = 1, o = 0, r = 0, a = 0, c = this.b.G, p = this.b.F;
        s ? (n = s.j.Lc(), o = s.j.gb(), r = s.j.ma, a = s.j.na, c = s.j.wa, p = s.j.ua) : i && (n = i.Lc(), o = i.gb(), r = i.ma, a = i.na, c = i.wa, p = i.ua);
        var u, f, l, b, d, g, y = this.b.hm, v = 0, m = 1, w = this.b.G, k = this.b.F, x = w / 2, T = k / 2, E = i ? i.de : this.de, A = i ? i.sn : this.sn, j = 0, R = 0, S = 0, M = 0, P = w, q = w, O = k, L = k, D = l = 0;
        if (b = s ? s.j.gb() : 0, s) {
            for (u = 0, f = e.length; u < f; u++)
                l += t.yw(e[u].Za), D += t.zw(e[u].Za);
            M = s.Qa, j = i.ib(M.left, M.top, !0, !0), S = i.ib(M.left, M.top, !1, !0), P = i.ib(M.right, M.bottom, !0, !0), O = i.ib(M.right, M.bottom, !1, !0), 0 !== b && (u = i.ib(M.right, M.top, !0, !0), f = i.ib(M.right, M.top, !1, !0), R = i.ib(M.left, M.bottom, !0, !0), M = i.ib(M.left, M.bottom, !1, !0), b = Math.min(j, P, u, R), P = Math.max(j, P, u, R), j = b, b = Math.min(S, O, f, M), O = Math.max(S, O, f, M), S = b), j -= l, S -= D, P += l, O += D, A.left = j / w, A.top = 1 - S / k, A.right = P / w, A.bottom = 1 - O / k, R = j = ta(j), M = S = ta(S), q = P = ua(P), L = O = ua(O), j < 0 && (j = 0), S < 0 && (S = 0), w < P && (P = w), k < O && (O = k), (R -= l) < 0 && (R = 0), (M -= D) < 0 && (M = 0), w < (q += l) && (q = w), k < (L += D) && (L = k), E.left = j / w, E.top = 1 - S / k, E.right = P / w, E.bottom = 1 - O / k;
        } else
            E.left = A.left = 0, E.top = A.top = 0, E.right = A.right = 1, E.bottom = A.bottom = 1;
        D = s && (t.hi(e[0].Za) || 0 !== l || 0 !== D || 1 !== s.opacity || s.type.X.Fq) || i && !s && 1 !== i.opacity, t.rr(), D && (y[v] || (y[v] = t.Ic(w, k, this.b.qa)), y[v].bd === w && y[v].ad === k || (t.deleteTexture(y[v]), y[v] = t.Ic(w, k, this.b.qa)), t.ec(0), t.Tc(y[v]), g = L - M, t.clearRect(R, k - M - g, q - R, g), s ? s.Kb(t) : (t.Rb(this.b.jb), t.Se(i.opacity), t.Ed(), t.translate(-x, -T), t.od(), t.Sc(j, O, P, O, P, S, j, S, E)), A.left = A.top = 0, A.right = A.bottom = 1, s && (b = E.top, E.top = E.bottom, E.bottom = b), v = 1, m = 0), t.Se(1), l = e.length - 1;
        var F = t.nn(e[l].Za) || !i && !s && !this.b.sc;
        for (u = b = 0, f = e.length; u < f; u++)
            y[v] || (y[v] = t.Ic(w, k, this.b.qa)), y[v].bd === w && y[v].ad === k || (t.deleteTexture(y[v]), y[v] = t.Ic(w, k, this.b.qa)), t.ec(e[u].Za), b = e[u].index, t.Dk(e[u].Za) && (this.b.fa = !0), 0 != u || D ? (t.Jg(h, 1 / w, 1 / k, A.left, A.top, A.right, A.bottom, n, o, r, a, (r + c) / 2, (a + p) / 2, this.b.Bb.Z, s ? s.Ja[b] : i ? i.Ja[b] : this.Ja[b]), t.Rb(null), u !== l || F ? (t.Tc(y[v]), d = k - M - (g = L - M), t.clearRect(R, d, q - R, g)) : (s ? t.Re(s.Pb, s.Jb) : i && t.Re(i.Pb, i.Jb), t.Tc(h)), t.Rb(y[m]), t.Ed(), t.translate(-x, -T), t.od(), t.Sc(j, O, P, O, P, S, j, S, E), u !== l || F || t.Rb(null)) : (t.Tc(y[v]), d = k - M - (g = L - M), t.clearRect(R, d, q - R, g), s ? (d = s.Sa && s.Sa.q ? (m = 1 / (d = s.Sa.q).width, 1 / d.height) : (m = 1 / s.width, 1 / s.height), t.Jg(h, m, d, A.left, A.top, A.right, A.bottom, n, o, r, a, (r + c) / 2, (a + p) / 2, this.b.Bb.Z, s.Ja[b]), s.Kb(t)) : (t.Jg(h, 1 / w, 1 / k, 0, 0, 1, 1, n, o, r, a, (r + c) / 2, (a + p) / 2, this.b.Bb.Z, i ? i.Ja[b] : this.Ja[b]), t.Rb(i ? this.b.jb : this.b.Ua), t.Ed(), t.translate(-x, -T), t.od(), t.Sc(j, O, P, O, P, S, j, S, E)), A.left = A.top = 0, A.right = A.bottom = 1, s && !F && (b = O, O = S, S = b)), m = 0 === (v = 0 === v ? 1 : 0) ? 1 : 0;
        F && (t.ec(0), s ? t.Re(s.Pb, s.Jb) : i ? t.Re(i.Pb, i.Jb) : this.b.sc || (t.ge(this.b.width, this.b.height), x = this.b.width / 2, T = this.b.height / 2, S = j = 0, P = this.b.width, O = this.b.height), t.Tc(h), t.Rb(y[m]), t.Ed(), t.translate(-x, -T), t.od(), s && 1 === e.length && !D ? t.Sc(j, S, P, S, P, O, j, O, E) : t.Sc(j, O, P, O, P, S, j, S, E), t.Rb(null));
    }, t.prototype.Tj = function (t) {
        var i, s;
        for (i = 0, s = this.P.length; i < s; i++)
            if (this.P[i].Y === t)
                return this.P[i];
        return null;
    }, t.prototype.Fb = function () {
        var t, i, s, h = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.m,
                w: this.width,
                h: this.height,
                fv: this.$f,
                persist: this.Pe,
                fx: [],
                layers: {}
            };
        for (t = 0, i = this.M.length; t < i; t++)
            s = this.M[t], h.fx.push({
                name: s.name,
                active: s.nc,
                params: this.Ja[s.index]
            });
        for (t = 0, i = this.P.length; t < i; t++)
            s = this.P[t], h.layers[s.Y.toString()] = s.Fb();
        return h;
    }, t.prototype.Qb = function (t) {
        var i, s, h, e;
        this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.m = t.a, this.width = t.w, this.height = t.h, this.Pe = t.persist, void 0 !== t.fv && (this.$f = t.fv);
        var n = t.fx;
        for (i = 0, s = n.length; i < s; i++)
            (h = this.km(n[i].name)) && (h.nc = n[i].active, this.Ja[h.index] = n[i].params);
        for (e in (this.nd(), i = t.layers))
            i.hasOwnProperty(e) && (t = this.Tj(parseInt(e, 10))) && t.Qb(i[e]);
    }, Mb = t, i.prototype.nd = function () {
        var t, i, s;
        for (A(this.ea), this.ie = !0, t = 0, i = this.M.length; t < i; t++)
            (s = this.M[t]).nc && (this.ea.push(s), s.Rc || (this.ie = !1));
    }, i.prototype.km = function (t) {
        var i, s, h;
        for (i = 0, s = this.M.length; i < s; i++)
            if ((h = this.M[i]).name === t)
                return h;
        return null;
    }, i.prototype.Su = function () {
        var t, i, s, h, e, n;
        for (i = t = 0, s = this.uc.length; t < s; t++) {
            if (h = this.uc[t], e = this.b.p[h[1]], n = this.b.Qn(e), e = !0, !n || this.rb.$f) {
                if (!(h = this.b.Ae(h, this, !0)))
                    continue;
                c.push(h), h.type.global && (e = !1, this.mh.push(h.uid));
            }
            e && (this.uc[i] = this.uc[t], i++);
        }
        this.uc.length = i, this.b.Gb(), !this.b.k && this.M.length && (this.Hb = this.xv), this.jh = jb(this.Hb), this.b.u && kb(this, this.Hb, this.b.u), this.ld = !0;
    }, i.prototype.Gg = function (t, i) {
        var s = Ha(this.d, t);
        s < 0 || (i && this.Ec && t.ac && t.ac.right >= t.ac.left && (t.Aa(), this.Eb.update(t, t.ac, null), t.ac.set(0, 0, -1, -1)), s === this.d.length - 1 ? this.d.pop() : (za(this.d, s), this.mi(s)), this.ld = !0);
    }, i.prototype.fh = function (t, i) {
        t.pd = this.d.length, this.d.push(t), i && this.Ec && t.ac && t.za(), this.ld = !0;
    }, i.prototype.Yx = function (t) {
        this.d.unshift(t), this.mi(0);
    }, i.prototype.zx = function (t, i, s) {
        var h = t.wd();
        i = i.wd(), za(this.d, h), h < i && i--, s && i++, i === this.d.length ? this.d.push(t) : this.d.splice(i, 0, t), this.mi(h < i ? h : i);
    }, i.prototype.mi = function (t) {
        (-1 === this.pe || t < this.pe) && (this.pe = t), this.ld = this.Lf = !0;
    }, i.prototype.Tn = function () {
        if (this.Lf) {
            var t, i, s;
            if (-1 === this.pe && (this.pe = 0), this.Ec)
                for (t = this.pe, i = this.d.length; t < i; ++t)
                    (s = this.d[t]).pd = t, this.Eb.vx(s.ac);
            else
                for (t = this.pe, i = this.d.length; t < i; ++t)
                    this.d[t].pd = t;
            this.Lf = !1, this.pe = -1;
        }
    }, i.prototype.Lc = function (t) {
        return this.vw() * (this.b.sc || t ? this.b.gh : 1);
    }, i.prototype.vw = function () {
        return (this.scale * this.rb.scale - 1) * this.qd + 1;
    }, i.prototype.gb = function () {
        return this.Sd ? 0 : Ma(this.rb.m + this.m);
    };
    var s = [], m = [], w = [];
    i.prototype.om = function () {
        if (this.Tn(), this.Eb.Fk(this.ma, this.na, this.wa, this.ua, w), !w.length)
            return y();
        if (1 === w.length) {
            var t = y();
            return Da(t, w[0]), A(w), t;
        }
        for (var i = !0; 1 < w.length;) {
            for (var s = void 0, h = void 0, e = void 0, n = void 0, o = (s = 0, (t = w).length); s < o - 1; s += 2) {
                var r = h = t[s], a = e = t[s + 1], c = n = y(), p = 0, u = 0, f = 0, l = r.length, b = a.length, d = void 0, g = void 0;
                for (c.length = l + b; p < l && u < b; ++f)
                    d = r[p], g = a[u], d.pd < g.pd ? (c[f] = d, ++p) : (c[f] = g, ++u);
                for (; p < l; ++p, ++f)
                    c[f] = r[p];
                for (; u < b; ++u, ++f)
                    c[f] = a[u];
                i || (v(h), v(e)), m.push(n);
            }
            1 == o % 2 && (i ? (h = y(), Da(h, t[o - 1]), m.push(h)) : m.push(t[o - 1])), Da(t, m), A(m), i = !1;
        }
        return t = w[0], A(w), t;
    }, i.prototype.ed = function (t) {
        this.Dd = this.Lj || 1 !== this.opacity || 0 !== this.Hb;
        var i = this.b.canvas, s = t, h = !1;
        this.Dd && (this.b.ek || (this.b.ek = document.createElement('canvas'), (i = this.b.ek).width = this.b.G, i.height = this.b.F, this.b.fq = i.getContext('2d'), h = !0), i = this.b.ek, s = this.b.fq, i.width !== this.b.G && (i.width = this.b.G, h = !0), i.height !== this.b.F && (i.height = this.b.F, h = !0), h && this.b.Nk(s, this.b.qa), this.Dc && s.clearRect(0, 0, this.b.G, this.b.F)), s.globalAlpha = 1, s.globalCompositeOperation = 'source-over', this.Dc || (s.fillStyle = 'rgb(' + this.Zc[0] + ',' + this.Zc[1] + ',' + this.Zc[2] + ')', s.fillRect(0, 0, this.b.G, this.b.F)), s.save(), this.Sd = !0;
        h = this.ub(0, 0, !0, !0);
        var e = this.ub(0, 0, !1, !0);
        this.Sd = !1, this.b.Ac && (h = Math.round(h), e = Math.round(e)), this.Hk(h, e, s);
        var n = this.Lc();
        s.scale(n, n), s.translate(-h, -e), this.Ec ? (this.wb.left = this.Eb.Ub(this.ma), this.wb.top = this.Eb.Vb(this.na), this.wb.right = this.Eb.Ub(this.wa), this.wb.bottom = this.Eb.Vb(this.ua), this.ld || !this.wb.oh(this.ug) ? (v(this.$d), h = this.om(), this.ld = !1, this.ug.Vf(this.wb)) : h = this.$d) : h = this.d;
        var o, r = null;
        for (e = 0, n = h.length; e < n; ++e)
            (o = h[e]) !== r && (this.rv(o, s), r = o);
        this.Ec && (this.$d = h), s.restore(), this.Dd && (t.globalCompositeOperation = this.jh, t.globalAlpha = this.opacity, t.drawImage(i, 0, 0));
    }, i.prototype.rv = function (t, i) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.Aa();
            var s = t.Qa;
            s.right < this.ma || s.bottom < this.na || s.left > this.wa || s.top > this.ua || (i.globalCompositeOperation = t.jh, t.ed(i));
        }
    }, i.prototype.dl = function () {
        this.Sd = !0;
        var t = this.ub(0, 0, !0, !0), i = this.ub(0, 0, !1, !0);
        this.Sd = !1, this.b.Ac && (t = Math.round(t), i = Math.round(i)), this.Hk(t, i, null);
    }, i.prototype.Hk = function (t, i, s) {
        var h = this.Lc();
        this.ma = t, this.na = i, this.wa = t + 1 / h * this.b.G, this.ua = i + 1 / h * this.b.F, this.ma > this.wa && (t = this.ma, this.ma = this.wa, this.wa = t), this.na > this.ua && (t = this.na, this.na = this.ua, this.ua = t), 0 !== (t = this.gb()) && (s && (s.translate(this.b.G / 2, this.b.F / 2), s.rotate(-t), s.translate(this.b.G / -2, this.b.F / -2)), this.le.set(this.ma, this.na, this.wa, this.ua), this.le.offset((this.ma + this.wa) / -2, (this.na + this.ua) / -2), this.Or.Br(this.le, t), this.Or.To(this.le), this.le.offset((this.ma + this.wa) / 2, (this.na + this.ua) / 2), this.ma = this.le.left, this.na = this.le.top, this.wa = this.le.right, this.ua = this.le.bottom);
    }, i.prototype.Ce = function (t) {
        (this.Dd = this.Lj) && (this.b.jb || (this.b.jb = t.Ic(this.b.G, this.b.F, this.b.qa)), this.b.jb.bd === this.b.G && this.b.jb.ad === this.b.F || (t.deleteTexture(this.b.jb), this.b.jb = t.Ic(this.b.G, this.b.F, this.b.qa)), t.Tc(this.b.jb)), this.Sd = !0;
        var i = this.ub(0, 0, !0, !0), s = this.ub(0, 0, !1, !0);
        this.Sd = !1, this.b.Ac && (i = Math.round(i), s = Math.round(s)), this.Hk(i, s, null), i = this.Lc(), t.Ed(), t.scale(i, i), t.xn(-this.gb()), t.translate((this.ma + this.wa) / -2, (this.na + this.ua) / -2), t.od(), this.Ec ? (this.wb.left = this.Eb.Ub(this.ma), this.wb.top = this.Eb.Vb(this.na), this.wb.right = this.Eb.Ub(this.wa), this.wb.bottom = this.Eb.Vb(this.ua), this.ld || !this.wb.oh(this.ug) ? (v(this.$d), i = this.om(), this.ld = !1, this.ug.Vf(this.wb)) : i = this.$d) : i = this.d;
        var h, e = null;
        for (s = i.length - 1; 0 <= s; --s)
            (h = i[s]) !== e && (this.tv(i[s], t), e = h);
        this.Ec && (this.$d = i), this.Dc || (this.Ol = this.b.ef++, t.Ok(this.Ol), t.sr(1, 1, 1), t.rp(), t.hy());
    }, i.prototype.Kb = function (t) {
        var i = 0, s = 0;
        (this.Dd = this.Lj || 1 !== this.opacity || 0 < this.ea.length || 0 !== this.Hb) && (this.b.jb || (this.b.jb = t.Ic(this.b.G, this.b.F, this.b.qa)), this.b.jb.bd === this.b.G && this.b.jb.ad === this.b.F || (t.deleteTexture(this.b.jb), this.b.jb = t.Ic(this.b.G, this.b.F, this.b.qa)), t.Tc(this.b.jb), this.Dc && t.clear(0, 0, 0, 0)), this.Dc || (this.b.ya ? (t.Ok(this.Ol), t.sr(this.Zc[0] / 255, this.Zc[1] / 255, this.Zc[2] / 255), t.rp(), t.yy()) : t.clear(this.Zc[0] / 255, this.Zc[1] / 255, this.Zc[2] / 255, 1)), this.Sd = !0;
        var h = this.ub(0, 0, !0, !0);
        i = this.ub(0, 0, !1, !0);
        this.Sd = !1, this.b.Ac && (h = Math.round(h), i = Math.round(i)), this.Hk(h, i, null), h = this.Lc(), t.Ed(), t.scale(h, h), t.xn(-this.gb()), t.translate((this.ma + this.wa) / -2, (this.na + this.ua) / -2), t.od(), this.Ec ? (this.wb.left = this.Eb.Ub(this.ma), this.wb.top = this.Eb.Vb(this.na), this.wb.right = this.Eb.Ub(this.wa), this.wb.bottom = this.Eb.Vb(this.ua), this.ld || !this.wb.oh(this.ug) ? (v(this.$d), i = this.om(), this.ld = !1, this.ug.Vf(this.wb)) : i = this.$d) : i = this.d;
        var e, n, o = null;
        s = 0;
        for (e = i.length; s < e; ++s)
            (n = i[s]) !== o && (this.sv(i[s], t), o = n);
        this.Ec && (this.$d = i), this.Dd && (i = this.ea.length ? this.ea[0].Za : 0, s = this.ea.length ? this.ea[0].index : 0, 0 === this.ea.length || 1 === this.ea.length && !t.nn(i) && 1 === this.opacity ? (1 === this.ea.length ? (t.ec(i), t.Jg(this.rb.sh(), 1 / this.b.G, 1 / this.b.F, 0, 0, 1, 1, h, this.gb(), this.ma, this.na, (this.ma + this.wa) / 2, (this.na + this.ua) / 2, this.b.Bb.Z, this.Ja[s]), t.Dk(i) && (this.b.fa = !0)) : t.ec(0), t.Tc(this.rb.sh()), t.Se(this.opacity), t.Rb(this.b.jb), t.Re(this.Pb, this.Jb), t.Ed(), t.od(), h = this.b.G / 2, i = this.b.F / 2, t.ji(-h, i, h, i, h, -i, -h, -i), t.Rb(null)) : this.rb.tn(t, this, null, this.rb.sh()));
    }, i.prototype.sv = function (t, i) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.Aa();
            var s = t.Qa;
            s.right < this.ma || s.bottom < this.na || s.left > this.wa || s.top > this.ua || (i.Ok(t.ef), t.as ? this.uv(t, i) : (i.ec(0), i.Re(t.Pb, t.Jb), t.Kb(i)));
        }
    }, i.prototype.tv = function (t, i) {
        if (t.visible && 0 !== t.width && 0 !== t.height) {
            t.Aa();
            var s = t.Qa;
            s.right < this.ma || s.bottom < this.na || s.left > this.wa || s.top > this.ua || (t.ef = this.b.ef++, 0 === t.Hb && 1 === t.opacity && t.ie && t.Ce && (i.Ok(t.ef), t.Ce(i)));
        }
    }, i.prototype.uv = function (t, i) {
        var s = t.ea[0].Za, h = t.ea[0].index, e = this.Lc();
        if (1 !== t.ea.length || i.nn(s) || i.$x(s) || (t.m || t.j.gb()) && i.hi(s) || 1 !== t.opacity || t.type.X.Fq)
            this.rb.tn(i, this, t, this.Dd ? this.b.jb : this.rb.sh()), i.Ed(), i.scale(e, e), i.xn(-this.gb()), i.translate((this.ma + this.wa) / -2, (this.na + this.ua) / -2), i.od();
        else {
            i.ec(s), i.Re(t.Pb, t.Jb), i.Dk(s) && (this.b.fa = !0);
            var n, o = 0, r = 0, a = 0, c = 0;
            i.hi(s) && (c = t.Qa, o = this.ib(c.left, c.top, !0, !0), r = this.ib(c.left, c.top, !1, !0), a = this.ib(c.right, c.bottom, !0, !0), c = this.ib(c.right, c.bottom, !1, !0), o /= windowWidth, r = 1 - r / windowHeight, a /= windowWidth, c = 1 - c / windowHeight), n = t.Sa && t.Sa.q ? (s = 1 / (n = t.Sa.q).width, 1 / n.height) : (s = 1 / t.width, 1 / t.height), i.Jg(this.Dd ? this.b.jb : this.rb.sh(), s, n, o, r, a, c, e, this.gb(), this.ma, this.na, (this.ma + this.wa) / 2, (this.na + this.ua) / 2, this.b.Bb.Z, t.Ja[h]), t.Kb(i);
        }
    }, i.prototype.ub = function (t, i, s, h) {
        var e = this.b.devicePixelRatio;
        this.b.tf && (t *= e, i *= e);
        e = this.b.$q;
        var n = this.b.br, o = e = (this.rb.scrollX - e) * this.Pc + e, r = n = (this.rb.scrollY - n) * this.Qc + n, a = 1 / this.Lc(!h);
        return h ? (o -= this.b.G * a / 2, r -= this.b.F * a / 2) : (o -= this.b.width * a / 2, r -= this.b.height * a / 2), o += t * a, r += i * a, 0 !== (i = this.gb()) && (r -= n, h = (o -= e) * (t = Math.cos(i)) - r * (i = Math.sin(i)), r = r * t + o * i, o = h + e, r += n), s ? o : r;
    }, i.prototype.ib = function (t, i, s, h) {
        var e = this.b.$q, n = this.b.br, o = (this.rb.scrollX - e) * this.Pc + e, r = (this.rb.scrollY - n) * this.Qc + n;
        n = o, e = r;
        if (0 !== (a = this.gb())) {
            t -= o, i -= r;
            var a, c = Math.cos(-a), p = t * c - i * (a = Math.sin(-a));
            i = i * c + t * a, t = p + o, i += r;
        }
        return o = 1 / this.Lc(!h), h ? (n -= this.b.G * o / 2, e -= this.b.F * o / 2) : (n -= this.b.width * o / 2, e -= this.b.height * o / 2), n = (t - n) / o, e = (i - e) / o, t = this.b.devicePixelRatio, this.b.tf && !h && (n /= t, e /= t), s ? n : e;
    }, i.prototype.Fb = function () {
        var t, i, s, h = {
                s: this.scale,
                a: this.m,
                vl: this.ma,
                vt: this.na,
                vr: this.wa,
                vb: this.ua,
                v: this.visible,
                bc: this.Zc,
                t: this.Dc,
                px: this.Pc,
                py: this.Qc,
                o: this.opacity,
                zr: this.qd,
                fx: [],
                cg: this.mh,
                instances: []
            };
        for (t = 0, i = this.M.length; t < i; t++)
            s = this.M[t], h.fx.push({
                name: s.name,
                active: s.nc,
                params: this.Ja[s.index]
            });
        return h;
    }, i.prototype.Qb = function (t) {
        var i, s, h;
        this.scale = t.s, this.m = t.a, this.ma = t.vl, this.na = t.vt, this.wa = t.vr, this.ua = t.vb, this.visible = t.v, this.Zc = t.bc, this.Dc = t.t, this.Pc = t.px, this.Qc = t.py, this.opacity = t.o, this.qd = t.zr, this.mh = t.cg || [], Da(this.uc, this.Ir);
        var e = new ca();
        for (i = 0, h = this.mh.length; i < h; ++i)
            e.add(this.mh[i]);
        for (s = i = 0, h = this.uc.length; i < h; ++i)
            e.contains(this.uc[i][2]) || (this.uc[s] = this.uc[i], ++s);
        for (Ba(this.uc, s), i = 0, h = (s = t.fx).length; i < h; i++)
            (t = this.km(s[i].name)) && (t.nc = s[i].active, this.Ja[t.index] = s[i].params);
        this.nd(), this.d.sort(a), this.Lf = !0;
    }, $b = i;
}(), function () {
    function n(t, i) {
        var s, h = t.length;
        switch (h) {
        case 0:
            return 1;
        case 1:
            return t[0] === i[0];
        case 2:
            return t[0] === i[0] && t[1] === i[1];
        default:
            for (s = 0; s < h; s++)
                if (t[s] !== i[s])
                    return;
            return 1;
        }
    }
    function o(t, i) {
        return t.index - i.index;
    }
    function h(t) {
        var i, s, h, e;
        for (2 === t.length ? t[0].index > t[1].index && (i = t[0], t[0] = t[1], t[1] = i) : 2 < t.length && t.sort(o), t.length >= b.length && (b.length = t.length + 1), b[t.length] || (b[t.length] = []), i = 0, s = (e = b[t.length]).length; i < s; i++)
            if (n(t, h = e[i]))
                return h;
        return e.push(t), t;
    }
    function t(t, i) {
        this.b = t, this.Rr = {}, this.ip = {}, this.um = !1, this.Fp = new ca(), this.Wl = [], this.Bl = [], this.name = i[0];
        var s, h, e = i[1];
        for (this.Ee = [], s = 0, h = e.length; s < h; s++)
            this.Hp(e[s], null, this.Ee);
    }
    function i(t) {
        this.type = t, this.d = [], this.I = [], this.R = !0;
    }
    function s(t, i, s) {
        this.sheet = t, this.parent = i, this.b = t.b, this.V = [], this.Te = [], this.Dp = this.$k = this.Mn = this.ym = this.group = this.Fn = !1, this.eb = [], this.Fc = [], this.Uc = [], this.vh = '', this.dg = this.ym = this.group = !1, this.sj = null, s[1] && (this.vh = s[1][1].toLowerCase(), this.group = !0, this.ym = !!s[1][0], this.sj = [], this.dg = this.ym, this.b.Qf.push(this), this.b.wh[this.vh] = this), this.kc = s[2], this.Y = s[4], this.group || (this.b.Ro[this.Y.toString()] = this);
        var h = s[5];
        for (t = 0, i = h.length; t < i; t++) {
            var e = new ac(this, h[t]);
            e.index = t, this.eb.push(e), this.Mo(e.type);
        }
        for (t = 0, i = (h = s[6]).length; t < i; t++)
            (e = new bc(this, h[t])).index = t, this.Fc.push(e);
        if (8 === s.length)
            for (t = 0, i = (s = s[7]).length; t < i; t++)
                this.sheet.Hp(s[t], this, this.Uc);
        this.bk = !1, this.eb.length && (this.bk = null == this.eb[0].type && this.eb[0].zb == T.prototype.c.ho);
    }
    function e(t, i) {
        var s, h, e;
        if (t && (-1 === i.indexOf(t) && i.push(t), t.Ab))
            for (s = 0, h = t.hc.length; s < h; s++)
                t !== (e = t.hc[s]) && -1 === i.indexOf(e) && i.push(e);
    }
    function r(t, i) {
        if (this.qc = t, this.sheet = t.sheet, this.b = t.b, this.O = [], this.Ka = [], this.ja = {}, this.index = -1, this.dh = !1, this.zb = this.b.qe(i[1]), this.trigger = 0 < i[3], this.hp = 2 === i[3], this.Ad = i[4], this.fg = i[5], this.lx = i[6], this.Y = i[7], this.b.ye[this.Y.toString()] = this, -1 === i[0] ? (this.type = null, this.Ya = this.zn, this.Ze = null, this.$c = -1) : (this.type = this.b.p[i[0]], this.Ya = this.lx ? this.my : this.yn, i[2] ? (this.Ze = this.type.Pj(i[2]), this.$c = this.type.im(i[2])) : (this.Ze = null, this.$c = -1), this.qc.parent && this.qc.parent.Qk()), this.hp && (this.Ya = this.ny), 10 === i.length) {
            var s, h, e = i[9];
            for (s = 0, h = e.length; s < h; s++) {
                var n = new cc(this, e[s]);
                this.O.push(n);
            }
            this.Ka.length = e.length;
        }
    }
    function a(t, i) {
        if (this.qc = t, this.sheet = t.sheet, this.b = t.b, this.O = [], this.Ka = [], this.ja = {}, this.index = -1, this.dh = !1, this.zb = this.b.qe(i[1]), -1 === i[0] ? (this.type = null, this.Ya = this.zn, this.Ze = null, this.$c = -1) : (this.type = this.b.p[i[0]], this.Ya = this.yn, i[2] ? (this.Ze = this.type.Pj(i[2]), this.$c = this.type.im(i[2])) : (this.Ze = null, this.$c = -1)), this.Y = i[3], this.b.se[this.Y.toString()] = this, 6 === i.length) {
            var s, h, e = i[5];
            for (s = 0, h = e.length; s < h; s++) {
                var n = new cc(this, e[s]);
                this.O.push(n);
            }
            this.Ka.length = e.length;
        }
    }
    function c() {
        return g++, d.length === g && d.push(new dc()), d[g];
    }
    function p(t, i) {
        var s, h, e;
        switch (this.Oc = t, this.qc = t.qc, this.sheet = t.sheet, this.b = t.b, this.type = i[0], this.td = null, this.je = 0, this.get = null, this.$o = 0, this.rb = null, this.key = 0, this.object = null, this.index = 0, this.Di = this.Ff = this.Di = this.Ff = this.mp = this.jf = this.Ei = null, this.Wc = !1, i[0]) {
        case 0:
        case 7:
            this.td = new ec(this, i[1]), this.je = 0, this.get = this.Ew;
            break;
        case 1:
            this.td = new ec(this, i[1]), this.je = 0, this.get = this.Fw;
            break;
        case 5:
            this.td = new ec(this, i[1]), this.je = 0, this.get = this.Jw;
            break;
        case 3:
        case 8:
            this.$o = i[1], this.get = this.Cw;
            break;
        case 6:
            this.rb = this.b.Nm[i[1]], this.get = this.Kw;
            break;
        case 9:
            this.key = i[1], this.get = this.Iw;
            break;
        case 4:
            this.object = this.b.p[i[1]], this.get = this.Lw, this.qc.Mo(this.object), this.Oc instanceof bc ? this.qc.Qk() : this.qc.parent && this.qc.parent.Qk();
            break;
        case 10:
            this.index = i[1], t.type && t.type.B ? (this.get = this.Gw, this.Wc = !0) : this.get = this.Hw;
            break;
        case 11:
            this.Ei = i[1], this.jf = null, this.get = this.Dw;
            break;
        case 2:
        case 12:
            this.mp = i[1], this.get = this.Bw;
            break;
        case 13:
            for (this.get = this.Mw, this.Ff = [], this.Di = [], s = 1, h = i.length; s < h; s++)
                e = new cc(this.Oc, i[s]), this.Ff.push(e), this.Di.push(0);
        }
    }
    function u(t, i, s) {
        this.sheet = t, this.parent = i, this.b = t.b, this.V = [], this.name = s[1], this.Fi = s[2], this.xm = s[3], this.Lh = !!s[4], this.ak = !!s[5], this.Y = s[6], (this.b.Vg[this.Y.toString()] = this).data = this.xm, this.parent ? (this.Cf = this.Lh || this.ak ? -1 : this.b.Ay++, this.b.Gu.push(this)) : (this.Cf = -1, this.b.Fu.push(this));
    }
    function f(t, i, s) {
        this.sheet = t, this.parent = i, this.b = t.b, this.V = [], this.Ah = null, this.Sw = s[1], this.nc = !0;
    }
    function l() {
        this.Kr = [], this.reset(null);
    }
    var b = [];
    t.prototype.toString = function () {
        return this.name;
    }, t.prototype.Hp = function (t, i, s) {
        switch (t[0]) {
        case 0:
            if ((t = new fc(this, i, t)).kc)
                for (s.push(t), s = 0, i = t.eb.length; s < i; s++)
                    t.eb[s].trigger && this.Ip(t, s);
            else
                t.Tp() ? this.Ip(t, 0) : s.push(t);
            break;
        case 1:
            t = new Xb(this, i, t), s.push(t);
            break;
        case 2:
            t = new gc(this, i, t), s.push(t);
        }
    }, t.prototype.Pa = function () {
        var t, i;
        for (t = 0, i = this.Ee.length; t < i; t++)
            this.Ee[t].Pa(t < i - 1 && this.Ee[t + 1].bk);
    }, t.prototype.Rn = function () {
        A(this.Wl), A(this.Bl), this.Lo(this), A(this.Bl);
    }, t.prototype.Lo = function (t) {
        var i, s, h, e, n = t.Wl, o = t.Bl, r = this.Fp.We();
        for (i = 0, s = r.length; i < s; ++i)
            e = (h = r[i]).Ah, !h.nc || t === e || -1 < o.indexOf(e) || (o.push(e), e.Lo(t), n.push(e));
    }, t.prototype.Ya = function (t) {
        var i, s;
        for (this.b.Iz || (this.um = !0, t || (this.b.Gm = !0)), i = 0, s = this.Ee.length; i < s; i++) {
            var h = this.Ee[i];
            h.Ya(), this.b.Nl(h.V), this.b.He && this.b.Gb();
        }
        t || (this.b.Gm = !1);
    }, t.prototype.Ip = function (t, i) {
        t.kc || this.b.bl.push(t);
        var s, h, e, n = t.eb[i];
        e = n.type ? n.type.name : 'system';
        var o = (s = n.hp) ? this.ip : this.Rr;
        if (o[e] || (o[e] = []), e = o[e], o = n.zb, s) {
            if (n.O.length && (1 === (n = n.O[0]).type && 2 === n.td.type)) {
                for (n = n.td.value.toLowerCase(), s = 0, h = e.length; s < h; s++)
                    if (e[s].method == o)
                        return void ((s = e[s].ph)[n] ? s[n].push([t,i]) : s[n] = [[t,i]]);
                (s = {})[n] = [[t,i]], e.push({
                    method: o,
                    ph: s
                });
            }
        } else {
            for (s = 0, h = e.length; s < h; s++)
                if (e[s].method == o)
                    return void e[s].ph.push([t,i]);
            V && o === V.prototype.c.Of ? e.unshift({
                method: o,
                ph: [[t,i]]
            }) : e.push({
                method: o,
                ph: [[t,i]]
            });
        }
    }, Nb = t, i.prototype.tm = function () {
        return this.R ? this.type.d.length : this.d.length;
    }, i.prototype.Zb = function () {
        return this.R ? this.type.d : this.d;
    }, i.prototype.Fg = function (t) {
        t && (t.b.Ea().Ia.kc ? (this.R && (A(this.d), Da(this.I, t.type.d), this.R = !1), -1 !== (t = this.I.indexOf(t)) && (this.d.push(this.I[t]), this.I.splice(t, 1))) : (this.R = !1, A(this.d), this.d[0] = t));
    }, sb = i, window._c2hh_ = '452B435306E1242151A43DBBE2F7065CB487A3E9', s.prototype.Pa = function (t) {
        var i, s = this.parent;
        if (this.group)
            for (this.$k = !0; s;) {
                if (!s.group) {
                    this.$k = !1;
                    break;
                }
                s = s.parent;
            }
        for (this.Mn = !this.Tp() && (!this.parent || this.parent.group && this.parent.$k), this.Dp = !!t, this.Te = this.V.slice(0), s = this.parent; s;) {
            for (t = 0, i = s.V.length; t < i; t++)
                this.Eu(s.V[t]);
            s = s.parent;
        }
        for (this.V = h(this.V), this.Te = h(this.Te), t = 0, i = this.eb.length; t < i; t++)
            this.eb[t].Pa();
        for (t = 0, i = this.Fc.length; t < i; t++)
            this.Fc[t].Pa();
        for (t = 0, i = this.Uc.length; t < i; t++)
            this.Uc[t].Pa(t < i - 1 && this.Uc[t + 1].bk);
    }, s.prototype.ty = function (t) {
        if (this.dg !== !!t) {
            var i;
            for (this.dg = !!t, t = 0, i = this.sj.length; t < i; ++t)
                this.sj[t].Wr();
            0 < i && this.b.ba.hf && this.b.ba.hf.Rn();
        }
    }, s.prototype.Mo = function (t) {
        e(t, this.V);
    }, s.prototype.Eu = function (t) {
        e(t, this.Te);
    }, s.prototype.Qk = function () {
        this.Fn = !0, this.parent && this.parent.Qk();
    }, s.prototype.Tp = function () {
        return !!this.eb.length && this.eb[0].trigger;
    }, s.prototype.Ya = function () {
        var t, i, s = !1, h = this.b, e = this.b.Ea(), n = (e.Ia = this).eb;
        if (this.bk || (e.$l = !1), this.kc) {
            for (0 === n.length && (s = !0), e.Ra = 0, t = n.length; e.Ra < t; e.Ra++)
                (i = n[e.Ra]).trigger || (i = i.Ya()) && (s = !0);
            (e.xf = s) && this.Ik();
        } else {
            for (e.Ra = 0, t = n.length; e.Ra < t; e.Ra++)
                if (!(i = n[e.Ra].Ya()))
                    return e.xf = !1, void (this.Mn && h.He && h.Gb());
            e.xf = !0, this.Ik();
        }
        this.zv(e);
    }, s.prototype.zv = function (t) {
        t.xf && this.Dp && (t.$l = !0), this.Mn && this.b.He && this.b.Gb();
    }, s.prototype.ky = function (t) {
        (this.b.Ea().Ia = this).eb[t].Ya() && (this.Ik(), this.b.Ea().xf = !0);
    }, s.prototype.Ik = function () {
        var t, i = this.b.Ea();
        for (i.Wb = 0, t = this.Fc.length; i.Wb < t; i.Wb++)
            if (this.Fc[i.Wb].Ya())
                return;
        this.pr();
    }, s.prototype.iy = function () {
        var t, i = this.b.Ea();
        for (t = this.Fc.length; i.Wb < t; i.Wb++)
            if (this.Fc[i.Wb].Ya())
                return;
        this.pr();
    }, s.prototype.pr = function () {
        if (this.Uc.length) {
            var t, i, s, h, e = this.Uc.length - 1;
            if (this.b.Ek(this), this.Fn)
                for (t = 0, i = this.Uc.length; t < i; t++)
                    s = this.Uc[t], (h = !this.$k || !this.group && t < e) && this.b.Qe(s.V), s.Ya(), h ? this.b.jd(s.V) : this.b.Nl(s.V);
            else
                for (t = 0, i = this.Uc.length; t < i; t++)
                    this.Uc[t].Ya();
            this.b.zk();
        }
    }, s.prototype.ly = function () {
        var t = this.b.Ea();
        t.Ia = this;
        var i, s = !1;
        for (t.Ra = 0, i = this.eb.length; t.Ra < i; t.Ra++)
            if (this.eb[t.Ra].Ya())
                s = !0;
            else if (!this.kc)
                return !1;
        return !this.kc || s;
    }, s.prototype.ee = function () {
        this.b.kf++;
        var t = this.b.Ea().Ra, i = this.b.Ek(this);
        if (!this.kc)
            for (i.Ra = t + 1, t = this.eb.length; i.Ra < t; i.Ra++)
                if (!this.eb[i.Ra].Ya())
                    return this.b.zk(), !1;
        return this.Ik(), this.b.zk(), !0;
    }, s.prototype.bx = function (t) {
        var i = t.index;
        if (0 === i)
            return !0;
        for (--i; 0 <= i; --i)
            if (this.eb[i].type === t.type)
                return !1;
        return !0;
    }, fc = s, r.prototype.Pa = function () {
        var t, i, s;
        for (t = 0, i = this.O.length; t < i; t++)
            (s = this.O[t]).Pa(), s.Wc && (this.dh = !0);
    }, r.prototype.ny = function () {
        return !0;
    }, r.prototype.zn = function () {
        var t, i;
        for (t = 0, i = this.O.length; t < i; t++)
            this.Ka[t] = this.O[t].get();
        return Wa(this.zb.apply(this.b.Hd, this.Ka), this.fg);
    }, r.prototype.my = function () {
        var t, i;
        for (t = 0, i = this.O.length; t < i; t++)
            this.Ka[t] = this.O[t].get();
        return t = this.zb.apply(this.Ze ? this.Ze : this.type, this.Ka), this.type.Gc(), t;
    }, r.prototype.yn = function () {
        var t, i, s, h, e, n, o, r, a = this.type, c = a.N(), p = this.qc.kc && !this.trigger;
        i = 0;
        var u, f = a.Ab, l = a.B, b = a.Vd, d = this.$c, g = -1 < d, y = this.dh, v = this.O, m = this.Ka, w = this.fg, k = this.zb;
        if (y)
            for (i = 0, e = v.length; i < e; ++i)
                (n = v[i]).Wc || (m[i] = n.get(0));
        else
            for (i = 0, e = v.length; i < e; ++i)
                m[i] = v[i].get(0);
        if (c.R) {
            for (A(c.d), A(c.I), t = 0, h = (u = a.d).length; t < h; ++t) {
                if (r = u[t], y)
                    for (i = 0, e = v.length; i < e; ++i)
                        (n = v[i]).Wc && (m[i] = n.get(t));
                i = g ? (i = 0, l && (i = r.type.Zf[b]), k.apply(r.L[d + i], m)) : k.apply(r, m), (o = Wa(i, w)) ? c.d.push(r) : p && c.I.push(r);
            }
            return a.finish && a.finish(!0), c.R = !1, a.Gc(), c.tm();
        }
        var x = !1;
        for (t = s = 0, h = (u = (o = p && !this.qc.bx(this)) ? c.I : c.d).length; t < h; ++t) {
            if (r = u[t], y)
                for (i = 0, e = v.length; i < e; ++i)
                    (n = v[i]).Wc && (m[i] = n.get(t));
            if (i = g ? (i = 0, l && (i = r.type.Zf[b]), k.apply(r.L[d + i], m)) : k.apply(r, m), Wa(i, w))
                if (x = !0, o) {
                    if (c.d.push(r), f)
                        for (i = 0, e = r.siblings.length; i < e; i++)
                            (n = r.siblings[i]).type.N().d.push(n);
                } else {
                    if (u[s] = r, f)
                        for (i = 0, e = r.siblings.length; i < e; i++)
                            (n = r.siblings[i]).type.N().d[s] = n;
                    s++;
                }
            else if (o) {
                if (u[s] = r, f)
                    for (i = 0, e = r.siblings.length; i < e; i++)
                        (n = r.siblings[i]).type.N().I[s] = n;
                s++;
            } else if (p && (c.I.push(r), f))
                for (i = 0, e = r.siblings.length; i < e; i++)
                    (n = r.siblings[i]).type.N().I.push(n);
        }
        if (Ba(u, s), f)
            for (t = 0, h = (l = a.hc).length; t < h; t++)
                r = l[t].N(), Ba(o ? r.I : r.d, s);
        if (s = x, o && !x)
            for (t = 0, h = c.d.length; t < h; t++) {
                if (r = c.d[t], y)
                    for (i = 0, e = v.length; i < e; i++)
                        (n = v[i]).Wc && (m[i] = n.get(t));
                if (i = g ? k.apply(r.L[d], m) : k.apply(r, m), Wa(i, w)) {
                    x = !0;
                    break;
                }
            }
        return a.finish && a.finish(s || p), p ? x : c.tm();
    }, ac = r, a.prototype.Pa = function () {
        var t, i, s;
        for (t = 0, i = this.O.length; t < i; t++)
            (s = this.O[t]).Pa(), s.Wc && (this.dh = !0);
    }, a.prototype.zn = function () {
        var t, i, s = this.b, h = this.O, e = this.Ka;
        for (t = 0, i = h.length; t < i; ++t)
            e[t] = h[t].get();
        return this.zb.apply(s.Hd, e);
    }, a.prototype.yn = function () {
        var t, i, s, h, e, n, o = this.type, r = this.$c, a = o.Vd, c = this.dh, p = this.O, u = this.Ka, f = this.zb, l = o.N().Zb(), b = (o = o.B, -1 < r);
        if (c)
            for (i = 0, h = p.length; i < h; ++i)
                (e = p[i]).Wc || (u[i] = e.get(0));
        else
            for (i = 0, h = p.length; i < h; ++i)
                u[i] = p[i].get(0);
        for (t = 0, s = l.length; t < s; ++t) {
            if (n = l[t], c)
                for (i = 0, h = p.length; i < h; ++i)
                    (e = p[i]).Wc && (u[i] = e.get(t));
            b ? (i = 0, o && (i = n.type.Zf[a]), f.apply(n.L[r + i], u)) : f.apply(n, u);
        }
        return !1;
    }, bc = a;
    var d = [], g = -1;
    p.prototype.Pa = function () {
        var t, i;
        if (11 === this.type)
            this.jf = this.b.vp(this.Ei, this.qc.parent);
        else if (13 === this.type)
            for (t = 0, i = this.Ff.length; t < i; t++)
                this.Ff[t].Pa();
        this.td && this.td.Pa();
    }, p.prototype.xx = function (t) {
        this.Wc || !t || t.X.Rk || (this.Wc = !0);
    }, p.prototype.yr = function () {
        this.Wc = !0;
    }, p.prototype.Ew = function (t) {
        return this.je = t || 0, t = c(), this.td.get(t), g--, t.data;
    }, p.prototype.Fw = function (t) {
        return this.je = t || 0, t = c(), this.td.get(t), g--, z(t.data) ? t.data : '';
    }, p.prototype.Lw = function () {
        return this.object;
    }, p.prototype.Cw = function () {
        return this.$o;
    }, p.prototype.Jw = function (t) {
        return this.je = t || 0, t = c(), this.td.get(t), g--, t.qb() ? this.b.ag(t.data) : this.b.Sj(t.data);
    }, p.prototype.Kw = function () {
        return this.rb;
    }, p.prototype.Iw = function () {
        return this.key;
    }, p.prototype.Hw = function () {
        return this.index;
    }, p.prototype.Gw = function (t) {
        t = t || 0;
        var i = this.Oc.type, s = null, h = (s = i.N()).Zb();
        if (h.length)
            s = h[t % h.length].type;
        else if (s.I.length)
            s = s.I[t % s.I.length].type;
        else {
            if (!i.d.length)
                return 0;
            s = i.d[t % i.d.length].type;
        }
        return this.index + s.Hj[i.Vd];
    }, p.prototype.Dw = function () {
        return this.jf;
    }, p.prototype.Bw = function () {
        return this.mp;
    }, p.prototype.Mw = function () {
        var t, i;
        for (t = 0, i = this.Ff.length; t < i; t++)
            this.Di[t] = this.Ff[t].get();
        return this.Di;
    }, cc = p, u.prototype.Pa = function () {
        this.V = h(this.V);
    }, u.prototype.he = function (t) {
        var i = this.b.tp();
        this.parent && !this.Lh && i ? (this.Cf >= i.length && (i.length = this.Cf + 1), i[this.Cf] = t) : this.data = t;
    }, u.prototype.of = function () {
        var t = this.b.tp();
        return !this.parent || this.Lh || !t || this.ak ? this.data : this.Cf >= t.length || void 0 === t[this.Cf] ? this.xm : t[this.Cf];
    }, u.prototype.Ya = function () {
        !this.parent || this.Lh || this.ak || this.he(this.xm);
    }, Xb = u, f.prototype.toString = function () {
        return 'include:' + this.Ah.toString();
    }, f.prototype.Pa = function () {
        this.Ah = this.b.cm[this.Sw], this.sheet.Fp.add(this), this.V = h(this.V);
        for (var t = this.parent; t;)
            t.group && t.sj.push(this), t = t.parent;
        this.Wr();
    }, f.prototype.Ya = function () {
        this.parent && this.b.ii(this.b.p), this.Ah.um || this.Ah.Ya(!0), this.parent && this.b.jd(this.b.p);
    }, f.prototype.Wr = function () {
        for (var t = this.parent; t;) {
            if (t.group && !t.dg)
                return void (this.nc = !1);
            t = t.parent;
        }
        this.nc = !0;
    }, gc = f, l.prototype.reset = function (t) {
        this.Ia = t, this.Wb = this.Ra = 0, A(this.Kr), this.$l = this.xf = !1;
    }, l.prototype.Em = function () {
        return !!this.Ia.Fn || this.Ra < this.Ia.eb.length - 1 && !!this.Ia.V.length;
    }, Wb = l;
}(), function () {
    function t(t, i) {
        this.Oc = t, this.b = t.b, this.type = i[0], this.get = [this.Rv,this.Nv,this.$v,this.dw,this.Cv,this.aw,this.Vv,this.Kv,this.Uv,this.Zv,this.Dv,this.Yv,this.Lv,this.Wv,this.Sv,this.Tv,this.Ov,this.Pv,this.Jv,this.bw,this.Xv,this.Qv,this.Iv,this.Mv][this.type];
        var s, h, e = null;
        switch (this.ae = this.O = this.Ka = this.zb = this.Zk = this.second = this.first = this.value = null, this.$c = -1, this.fd = null, this.bs = -1, this.jf = this.Ei = null, this.Ig = !1, this.type) {
        case 0:
        case 1:
        case 2:
            this.value = i[1];
            break;
        case 3:
            this.first = new ec(t, i[1]);
            break;
        case 18:
            this.first = new ec(t, i[1]), this.second = new ec(t, i[2]), this.Zk = new ec(t, i[3]);
            break;
        case 19:
            this.zb = this.b.qe(i[1]), this.zb !== T.prototype.g.random && this.zb !== T.prototype.g.Yo || this.Oc.yr(), this.Ka = [], this.O = [], 3 === i.length ? (e = i[2], this.Ka.length = e.length + 1) : this.Ka.length = 1;
            break;
        case 20:
            this.ae = this.b.p[i[1]], this.$c = -1, this.zb = this.b.qe(i[2]), this.Ig = i[3], sc && this.zb === sc.prototype.g.bo && this.Oc.yr(), i[4] ? this.fd = new ec(t, i[4]) : this.fd = null, this.Ka = [], this.O = [], 6 === i.length ? (e = i[5], this.Ka.length = e.length + 1) : this.Ka.length = 1;
            break;
        case 21:
            this.ae = this.b.p[i[1]], this.Ig = i[2], i[3] ? this.fd = new ec(t, i[3]) : this.fd = null, this.bs = i[4];
            break;
        case 22:
            this.ae = this.b.p[i[1]], this.ae.Pj(i[2]), this.$c = this.ae.im(i[2]), this.zb = this.b.qe(i[3]), this.Ig = i[4], i[5] ? this.fd = new ec(t, i[5]) : this.fd = null, this.Ka = [], this.O = [], 7 === i.length ? (e = i[6], this.Ka.length = e.length + 1) : this.Ka.length = 1;
            break;
        case 23:
            this.Ei = i[1], this.jf = null;
        }
        if (this.Oc.xx(this.ae), 4 <= this.type && this.type <= 17 && (this.first = new ec(t, i[1]), this.second = new ec(t, i[2])), e)
            for (s = 0, h = e.length; s < h; s++)
                this.O.push(new ec(t, e[s]));
    }
    function p() {
        return ++f, s.length === f && s.push(new dc()), s[f];
    }
    function u(t, i, s) {
        var h, e;
        for (h = 0, e = t.length; h < e; ++h)
            t[h].get(s), i[h + 1] = s.data;
    }
    function i(t, i) {
        this.type = t || hc.Nf, this.data = i || 0, this.Df = null, this.type == hc.Nf && (this.data = Math.floor(this.data));
    }
    t.prototype.Pa = function () {
        var t, i;
        if (23 === this.type && (this.jf = this.Oc.b.vp(this.Ei, this.Oc.qc.parent)), this.first && this.first.Pa(), this.second && this.second.Pa(), this.Zk && this.Zk.Pa(), this.fd && this.fd.Pa(), this.O)
            for (t = 0, i = this.O.length; t < i; t++)
                this.O[t].Pa();
    };
    var s = [], f = -1;
    t.prototype.bw = function (t) {
        var i = this.O, s = this.Ka;
        s[0] = t, u(i, s, t = p()), --f, this.zb.apply(this.b.Hd, s);
    }, t.prototype.Xv = function (t) {
        var i = this.ae, s = this.Ka, h = this.O, e = this.fd, n = this.zb, o = this.Oc.je, r = i.N(), a = r.Zb();
        if (!a.length) {
            if (!r.I.length)
                return void (this.Ig ? t.la('') : t.H(0));
            a = r.I;
        }
        (s[0] = t).Df = i, u(h, s, t = p()), e && (e.get(t), t.qb() && (o = t.data, a = i.d)), --f, ((i = a.length) <= o || o <= -i) && (o %= i), o < 0 && (o += i), n.apply(a[o], s);
    }, t.prototype.Iv = function (t) {
        var i = this.ae, s = this.Ka, h = this.O, e = this.fd, n = this.$c, o = this.zb, r = this.Oc.je, a = i.N(), c = a.Zb();
        if (!c.length) {
            if (!a.I.length)
                return void (this.Ig ? t.la('') : t.H(0));
            c = a.I;
        }
        (s[0] = t).Df = i, u(h, s, t = p()), e && (e.get(t), t.qb() && (r = t.data, c = i.d)), --f, ((h = c.length) <= r || r <= -h) && (r %= h), r < 0 && (r += h), r = c[r], c = 0, i.B && (c = r.type.Zf[i.Vd]), o.apply(r.L[n + c], s);
    }, t.prototype.Qv = function (t) {
        var i = this.fd, s = this.ae, h = this.bs, e = this.Oc.je, n = s.N(), o = n.Zb();
        if (!o.length) {
            if (!n.I.length)
                return void (this.Ig ? t.la('') : t.H(0));
            o = n.I;
        }
        if (i) {
            if (n = p(), i.get(n), n.qb())
                return e = n.data, 0 !== (o = s.d).length && ((e %= o.length) < 0 && (e += o.length)), s = (e = s.mm(e)).hb[h], z(s) ? t.la(s) : t.n(s), void --f;
            --f;
        }
        ((i = o.length) <= e || e <= -i) && (e %= i), e < 0 && (e += i), e = o[e], o = 0, s.B && (o = e.type.Hj[s.Vd]), s = e.hb[h + o], z(s) ? t.la(s) : t.n(s);
    }, t.prototype.Rv = function (t) {
        t.type = hc.Nf, t.data = this.value;
    }, t.prototype.Nv = function (t) {
        t.type = hc.Mf, t.data = this.value;
    }, t.prototype.$v = function (t) {
        t.type = hc.String, t.data = this.value;
    }, t.prototype.dw = function (t) {
        this.first.get(t), t.qb() && (t.data = -t.data);
    }, t.prototype.Cv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.qb() && i.qb() && (t.data += i.data, i.kg() && t.wg()), --f;
    }, t.prototype.aw = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.qb() && i.qb() && (t.data -= i.data, i.kg() && t.wg()), --f;
    }, t.prototype.Vv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.qb() && i.qb() && (t.data *= i.data, i.kg() && t.wg()), --f;
    }, t.prototype.Kv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.qb() && i.qb() && (t.data /= i.data, t.wg()), --f;
    }, t.prototype.Uv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.qb() && i.qb() && (t.data %= i.data, i.kg() && t.wg()), --f;
    }, t.prototype.Zv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.qb() && i.qb() && (t.data = Math.pow(t.data, i.data), i.kg() && t.wg()), --f;
    }, t.prototype.Dv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), i.ng() || t.ng() ? this.Fv(t, i) : this.Ev(t, i), --f;
    }, t.prototype.Fv = function (t, i) {
        t.ng() && i.ng() ? this.Hv(t, i) : this.Gv(t, i);
    }, t.prototype.Hv = function (t, i) {
        t.data += i.data;
    }, t.prototype.Gv = function (t, i) {
        t.ng() ? t.data += (Math.round(10000000000 * i.data) / 10000000000).toString() : t.la(t.data.toString() + i.data);
    }, t.prototype.Ev = function (t, i) {
        t.H(t.data && i.data ? 1 : 0);
    }, t.prototype.Yv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.qb() && i.qb() && (t.data || i.data ? t.H(1) : t.H(0)), --f;
    }, t.prototype.Jv = function (t) {
        this.first.get(t), t.data ? this.second.get(t) : this.Zk.get(t);
    }, t.prototype.Lv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.H(t.data === i.data ? 1 : 0), --f;
    }, t.prototype.Wv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.H(t.data !== i.data ? 1 : 0), --f;
    }, t.prototype.Sv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.H(t.data < i.data ? 1 : 0), --f;
    }, t.prototype.Tv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.H(t.data <= i.data ? 1 : 0), --f;
    }, t.prototype.Ov = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.H(t.data > i.data ? 1 : 0), --f;
    }, t.prototype.Pv = function (t) {
        this.first.get(t);
        var i = p();
        this.second.get(i), t.H(t.data >= i.data ? 1 : 0), --f;
    }, t.prototype.Mv = function (t) {
        var i = this.jf.of();
        ja(i) ? t.n(i) : t.la(i);
    }, ec = t, i.prototype.kg = function () {
        return this.type === hc.Mf;
    }, i.prototype.qb = function () {
        return this.type === hc.Nf || this.type === hc.Mf;
    }, i.prototype.ng = function () {
        return this.type === hc.String;
    }, i.prototype.wg = function () {
        this.kg() || (this.ng() && (this.data = parseFloat(this.data)), this.type = hc.Mf);
    }, i.prototype.H = function (t) {
        this.type = hc.Nf, this.data = Math.floor(t);
    }, i.prototype.n = function (t) {
        this.type = hc.Mf, this.data = t;
    }, i.prototype.la = function (t) {
        this.type = hc.String, this.data = t;
    }, i.prototype.Kg = function (t) {
        ja(t) ? (this.type = hc.Mf, this.data = t) : z(t) ? (this.type = hc.String, this.data = t.toString()) : (this.type = hc.Nf, this.data = 0);
    }, dc = i, hc = {
        Nf: 0,
        Mf: 1,
        String: 2
    };
}(), T.prototype.Fb = function () {
    var t, i, s, h, e, n, o, r, a = {};
    a.waits = [];
    var c, p = a.waits;
    for (t = 0, i = this.fc.length; t < i; t++) {
        for (c = {
                t: (n = this.fc[t]).time,
                st: n.Gr,
                s: n.En,
                ev: n.Yf.Y,
                sm: [],
                sols: {}
            }, n.Yf.Fc[n.Wb] && (c.act = n.Yf.Fc[n.Wb].Y), s = 0, h = n.V.length; s < h; s++)
            c.sm.push(n.V[s].Y);
        for (e in n.Sb)
            if (n.Sb.hasOwnProperty(e)) {
                for (o = this.b.p[parseInt(e, 10)], r = {
                        sa: n.Sb[e].Jk,
                        insts: []
                    }, s = 0, h = n.Sb[e].Xd.length; s < h; s++)
                    r.insts.push(n.Sb[e].Xd[s].uid);
                c.sols[o.Y.toString()] = r;
            }
        p.push(c);
    }
    return a;
}, T.prototype.Qb = function (t) {
    var i, s, h, e, n, o, r, a, c, p, u;
    for (t = t.waits, A(this.fc), i = 0, s = t.length; i < s; i++)
        if (o = t[i], a = this.b.Ro[o.ev.toString()]) {
            for (c = -1, h = 0, e = a.Fc.length; h < e; h++)
                if (a.Fc[h].Y === o.act) {
                    c = h;
                    break;
                }
            if (-1 !== c) {
                for ((r = {
                        Sb: {},
                        V: [],
                        Xl: !1
                    }).time = o.t, r.Gr = o.st || '', r.En = !!o.s, r.Yf = a, r.Wb = c, h = 0, e = o.sm.length; h < e; h++)
                    (a = this.b.Vj(o.sm[h])) && r.V.push(a);
                for (n in o.sols)
                    if (o.sols.hasOwnProperty(n) && (a = this.b.Vj(parseInt(n, 10)))) {
                        for (p = {
                                Jk: (c = o.sols[n]).sa,
                                Xd: []
                            }, h = 0, e = c.insts.length; h < e; h++)
                            (u = this.b.Uj(c.insts[h])) && p.Xd.push(u);
                        r.Sb[a.index.toString()] = p;
                    }
                this.fc.push(r);
            }
        }
}, function () {
    function t() {
    }
    function i() {
    }
    function s() {
    }
    var h = T.prototype;
    t.prototype.Ds = function () {
        return !0;
    }, t.prototype.to = function () {
        return !0;
    }, t.prototype.so = function () {
        return !0;
    }, t.prototype.qs = function (t, i, s) {
        return ic(t, i, s);
    }, t.prototype.wu = function () {
        var t = (s = this.b.Ea()).Ia, i = s.Em(), s = this.b.pn();
        if (i)
            for (i = 0; !s.ta; i++)
                this.b.Qe(t.V), s.index = i, t.ee() || (s.ta = !0), this.b.jd(t.V);
        else
            for (i = 0; !s.ta; i++)
                s.index = i, t.ee() || (s.ta = !0);
        return this.b.ln(), !1;
    }, t.prototype.Fs = function (t, i, s) {
        var h = (e = this.b.Ea()).Ia, e = e.Em();
        if (t = this.b.pn(t), s < i)
            if (e)
                for (; s <= i && !t.ta; --i)
                    this.b.Qe(h.V), t.index = i, h.ee(), this.b.jd(h.V);
            else
                for (; s <= i && !t.ta; --i)
                    t.index = i, h.ee();
        else if (e)
            for (; i <= s && !t.ta; ++i)
                this.b.Qe(h.V), t.index = i, h.ee(), this.b.jd(h.V);
        else
            for (; i <= s && !t.ta; ++i)
                t.index = i, h.ee();
        return this.b.ln(), !1;
    };
    var l = [], b = -1;
    t.prototype.Gs = function (t) {
        var i = t.N();
        b++, l.length === b && l.push([]);
        var s = l[b];
        Da(s, i.Zb());
        var h, e, n, o, r, a, c = (u = this.b.Ea()).Ia, p = u.Em(), u = this.b.pn(), f = t.Ab;
        if (p)
            for (p = 0, h = s.length; p < h && !u.ta; p++) {
                if (this.b.Qe(c.V), o = s[p], (i = t.N()).R = !1, A(i.d), i.d[0] = o, f)
                    for (e = 0, n = o.siblings.length; e < n; e++)
                        (a = (r = o.siblings[e]).type.N()).R = !1, A(a.d), a.d[0] = r;
                u.index = p, c.ee(), this.b.jd(c.V);
            }
        else
            for (i.R = !1, A(i.d), p = 0, h = s.length; p < h && !u.ta; p++) {
                if (o = s[p], i.d[0] = o, f)
                    for (e = 0, n = o.siblings.length; e < n; e++)
                        (a = (r = o.siblings[e]).type.N()).R = !1, A(a.d), a.d[0] = r;
                u.index = p, c.ee();
            }
        return A(s), this.b.ln(), b--, !1;
    }, t.prototype.Ht = function (t, i, s, h) {
        var e, n, o, r;
        if (t) {
            b++, l.length === b && l.push([]);
            var a = l[b], c = t.N();
            Da(a, c.Zb()), c.R && A(c.I);
            var p = this.b.Qj();
            for (o = e = 0, n = a.length; e < n; e++)
                r = a[e], a[o] = r, i = p.O[1].get(e), h = p.O[3].get(e), ic(i, s, h) ? o++ : c.I.push(r);
            return Ba(a, o), c.R = !1, Da(c.d, a), A(a), b--, t.Gc(), !!c.d.length;
        }
    }, t.prototype.It = function (t, i) {
        if (!t)
            return !1;
        var s = t.N(), h = s.Zb();
        return !((i = ta(i)) < 0 || i >= h.length) && (s.Fg(h[i]), t.Gc(), !0);
    }, t.prototype.ws = function (t, i, s) {
        return ic(t.of(), i, s);
    }, t.prototype.Qs = function (t) {
        return (t = this.b.wh[t.toLowerCase()]) && t.dg;
    }, t.prototype.Ws = function () {
        return 'undefined' != typeof cr_is_preview;
    }, t.prototype.Gt = function (t) {
        return !(!t || !t.d.length) && (t.N().R = !0, t.Gc(), !0);
    }, t.prototype.Ss = function () {
        return this.b.sf;
    }, t.prototype.ho = function () {
        var t = this.b.Ea();
        return !t.$l && !t.xf;
    }, t.prototype.uo = function () {
        return !0;
    }, t.prototype.jt = function () {
        return !0;
    }, t.prototype.Cs = function () {
        return !!this.b.k;
    }, t.prototype.ql = function () {
        return !0;
    }, t.prototype.zo = function () {
        return !0;
    }, t.prototype.ut = function () {
        return !0;
    }, t.prototype.Vi = function () {
        return !0;
    };
    var e = null, n = '', o = '';
    t.prototype.Qt = function (t, i, s) {
        return e && i === n && s === o || (e = new RegExp(i, s), n = i, o = s), e.lastIndex = 0, e.test(t);
    };
    var a = [];
    t.prototype.Jt = function (t, i, s) {
        if (!t)
            return !1;
        var h, e = t.N(), n = e.Zb(), o = this.b.Ea().Ia.kc, r = this.b.Qj();
        for (e.R ? (Da(a, n), A(e.I), e.R = !1, A(e.d)) : o ? (Da(a, e.I), A(e.I)) : (Da(a, n), A(e.d)), n = 0, o = a.length; n < o; ++n)
            (h = a[n]).Aa(), Wa(h.Ib(i, s), r.fg) ? e.d.push(h) : e.I.push(h);
        return t.Gc(), Wa(!!e.d.length, r.fg);
    }, t.prototype.kl = function (t, i, s) {
        return Ra(G(t), G(s)) <= G(i);
    }, t.prototype.Ps = function (t, i) {
        return Ta(G(t), G(i));
    }, t.prototype.Ns = function (t, i, s) {
        return t = Oa(t), i = Oa(i), s = Oa(s), Ta(s, i) ? Ta(t, i) && !Ta(t, s) : !(!Ta(t, i) && Ta(t, s));
    }, h.c = new t(), i.prototype.Is = function (t) {
        this.b.Mh || this.b.ih || (this.b.ih = t);
    }, i.prototype.As = function (t, i, s, h) {
        if (i && t && (i = this.b.Rl(t, i, s, h))) {
            var e;
            if (this.b.wc++, this.b.trigger(Object.getPrototypeOf(t.X).c.Jd, i), i.Ab)
                for (s = 0, h = i.siblings.length; s < h; s++)
                    e = i.siblings[s], this.b.trigger(Object.getPrototypeOf(e.type.X).c.Jd, e);
            if (this.b.wc--, (t = t.N()).R = !1, A(t.d), (t.d[0] = i).Ab)
                for (s = 0, h = i.siblings.length; s < h; s++)
                    (t = (e = i.siblings[s]).type.N()).R = !1, A(t.d), t.d[0] = e;
        }
    }, i.prototype.Ut = function (t) {
        this.b.ba.Kk(t);
    }, i.prototype.Vt = function (t) {
        this.b.ba.Lk(t);
    }, i.prototype.Tt = function (t, i) {
        this.b.ba.Kk(t), this.b.ba.Lk(i);
    }, i.prototype.ku = function (t, i) {
        0 === t.Fi ? ja(i) ? t.he(i) : t.he(parseFloat(i)) : 1 === t.Fi && t.he(i.toString());
    }, i.prototype.ks = function (t, i) {
        0 === t.Fi ? ja(i) ? t.he(t.of() + i) : t.he(t.of() + parseFloat(i)) : 1 === t.Fi && t.he(t.of() + i.toString());
    }, i.prototype.su = function (t, i) {
        0 === t.Fi && (ja(i) ? t.he(t.of() - i) : t.he(t.of() - parseFloat(i)));
    }, i.prototype.ju = function (t) {
        t < 0 && (t = 0), this.b.Jf = t;
    };
    var r = [], c = [];
    i.prototype.vu = function (t) {
        if (!(t < 0)) {
            var i, s, h, e, n = this.b.Ea();
            for ((e = r.length ? r.pop() : {
                    Sb: {},
                    V: []
                }).Xl = !1, e.time = this.b.Bb.Z + t, e.Gr = '', e.En = !1, e.Yf = n.Ia, e.Wb = n.Wb + 1, t = 0, i = this.b.p.length; t < i; t++)
                (s = (h = this.b.p[t]).N()).R && -1 === n.Ia.V.indexOf(h) || (e.V.push(h), h = void 0, (h = c.length ? c.pop() : { Xd: [] }).Jk = !1, h.Jk = s.R, Da(h.Xd, s.d), e.Sb[t.toString()] = h);
            return this.fc.push(e), !0;
        }
    }, i.prototype.cu = function (t, i) {
        t && !!i != !!t.Dc && (t.Dc = !!i, this.b.fa = !0);
    }, h.e = new i(), s.prototype.int = function (t, i) {
        z(i) ? (t.H(parseInt(i, 10)), isNaN(t.data) && (t.data = 0)) : t.H(i);
    }, s.prototype.float = function (t, i) {
        z(i) ? (t.n(parseFloat(i)), isNaN(t.data) && (t.data = 0)) : t.n(i);
    }, s.prototype.qx = function (t, i) {
        t.H(i.length || 0);
    }, s.prototype.random = function (t, i, s) {
        void 0 === s ? t.n(Math.random() * i) : t.n(Math.random() * (s - i) + i);
    }, s.prototype.sqrt = function (t, i) {
        t.n(Math.sqrt(i));
    }, s.prototype.abs = function (t, i) {
        t.n(Math.abs(i));
    }, s.prototype.round = function (t, i) {
        t.H(Math.round(i));
    }, s.prototype.floor = function (t, i) {
        t.H(Math.floor(i));
    }, s.prototype.ceil = function (t, i) {
        t.H(Math.ceil(i));
    }, s.prototype.sin = function (t, i) {
        t.n(Math.sin(G(i)));
    }, s.prototype.cos = function (t, i) {
        t.n(Math.cos(G(i)));
    }, s.prototype.tan = function (t, i) {
        t.n(Math.tan(G(i)));
    }, s.prototype.asin = function (t, i) {
        t.n(Ka(Math.asin(i)));
    }, s.prototype.acos = function (t, i) {
        t.n(Ka(Math.acos(i)));
    }, s.prototype.atan = function (t, i) {
        t.n(Ka(Math.atan(i)));
    }, s.prototype.exp = function (t, i) {
        t.n(Math.exp(i));
    }, s.prototype.log10 = function (t, i) {
        t.n(Math.log(i) / Math.LN10);
    }, s.prototype.max = function (t) {
        var i, s, h, e = arguments[1];
        for ('number' != typeof e && (e = 0), i = 2, s = arguments.length; i < s; i++)
            'number' == typeof (h = arguments[i]) && e < h && (e = h);
        t.n(e);
    }, s.prototype.min = function (t) {
        var i, s, h, e = arguments[1];
        for ('number' != typeof e && (e = 0), i = 2, s = arguments.length; i < s; i++)
            'number' == typeof (h = arguments[i]) && h < e && (e = h);
        t.n(e);
    }, s.prototype.De = function (t) {
        t.n(this.b.De);
    }, s.prototype.Jf = function (t) {
        t.n(this.b.Jf);
    }, s.prototype.time = function (t) {
        t.n(this.b.Bb.Z);
    }, s.prototype.Rg = function (t) {
        t.H(this.b.Rg);
    }, s.prototype.rk = function (t) {
        t.H(this.b.rk);
    }, s.prototype.gm = function (t) {
        t.H(this.b.gm);
    }, s.prototype.ux = function (t, i) {
        var s, h;
        if (this.b.Yh.length)
            if (i) {
                for (h = this.b.Zh; 0 <= h; --h)
                    if ((s = this.b.Yh[h]).name === i)
                        return void t.H(s.index);
                t.H(0);
            } else
                s = this.b.up(), t.H(s ? s.index : -1);
        else
            t.H(0);
    }, s.prototype.Xu = function (t, i, s, h, e) {
        t.n(Va(i, s, h, e));
    }, s.prototype.m = function (t, i, s, h, e) {
        t.n(Ka(Pa(i, s, h, e)));
    }, s.prototype.Ax = function (t) {
        t.la('\n');
    }, s.prototype.Oy = function (t, i) {
        t.la(z(i) ? i.toUpperCase() : '');
    }, s.prototype.ox = function (t) {
        t.H(this.b.ba.width);
    }, s.prototype.nx = function (t) {
        t.H(this.b.ba.height);
    }, s.prototype.left = function (t, i, s) {
        t.la(z(i) ? i.substr(0, s) : '');
    }, s.prototype.right = function (t, i, s) {
        t.la(z(i) ? i.substr(i.length - s) : '');
    }, s.prototype.yx = function (t, i, s, h) {
        t.la(z(i) ? i.substr(s, h) : '');
    }, s.prototype.Jy = function (t, i, s, h) {
        z(i) && z(h) ? (i = i.split(h), (s = ta(s)) < 0 || s >= i.length ? t.la('') : t.la(i[s])) : t.la('');
    }, s.prototype.Ky = function (t, i, s) {
        z(i) && i.length ? t.H(i.split(s).length) : t.H(0);
    }, s.prototype.replace = function (t, i, s, h) {
        z(i) && z(s) && z(h) ? t.la(i.replace(new RegExp(fb(s), 'gi'), h)) : t.la(z(i) ? i : '');
    }, s.prototype.trim = function (t, i) {
        t.la(z(i) ? i.trim() : '');
    }, s.prototype.Rx = function (t) {
        t.n(sa);
    }, s.prototype.Yo = function (t) {
        var i = ta(Math.random() * (arguments.length - 1));
        t.Kg(arguments[i + 1]);
    }, s.prototype.Vy = function (t, i, s) {
        var h = i < 0 ? '-' : '';
        i < 0 && (i = -i), s -= i.toString().length;
        for (var e = 0; e < s; e++)
            h += '0';
        t.la(h + i.toString());
    }, s.prototype.Pl = function (t) {
        t.n(this.b.Pl / 1000);
    }, s.prototype.jk = function (t) {
        t.n(this.b.jk);
    }, s.prototype.Nu = function (t, i, s, h) {
        i = this.b.wp(i), t.n(i ? i.ub(s, h, !0) : 0);
    }, s.prototype.Ou = function (t, i, s, h) {
        i = this.b.wp(i), t.n(i ? i.ub(s, h, !1) : 0);
    }, s.prototype.Uw = function (t) {
        t.n(1 / 0);
    }, s.prototype.Px = function (t) {
        t.H(this.b.Wa);
    }, s.prototype.Ox = function (t) {
        t.H(this.b.Va);
    }, h.g = new s(), h.jy = function () {
        var t, i, s, h, e, n, o = this.b.Ea();
        for (t = 0, s = this.fc.length; t < s; t++) {
            if (-1 === (h = this.fc[t]).time) {
                if (!h.En)
                    continue;
            } else if (h.time > this.b.Bb.Z)
                continue;
            for (i in (o.Ia = h.Yf, o.Wb = h.Wb, o.Ra = 0, h.Sb))
                h.Sb.hasOwnProperty(i) && (e = this.b.p[parseInt(i, 10)].N(), n = h.Sb[i], e.R = n.Jk, Da(e.d, n.Xd), A((e = n).Xd), c.push(e));
            h.Yf.iy(), this.b.Nl(h.V), h.Xl = !0;
        }
        for (i = t = 0, s = this.fc.length; t < s; t++)
            h = this.fc[t], (this.fc[i] = h).Xl ? (Ya(h.Sb), A(h.V), r.push(h)) : i++;
        Ba(this.fc, i);
    };
}(), function () {
    rb = function (t, i) {
        var s = t[1], h = t[3], e = t[4], n = t[5], o = t[6], r = t[7], a = t[8];
        i.c || (i.c = {}), i.e || (i.e = {}), i.g || (i.g = {});
        var c = i.c, p = i.e, u = i.g;
        h && (c.Ni = function (t, i) {
            return ic(this.x, t, i);
        }, c.fo = function (t, i) {
            return ic(this.y, t, i);
        }, c.Zy = function () {
            var t = this.j;
            this.Aa();
            var i = this.Qa;
            return !(i.right < t.ma || i.bottom < t.na || i.left > t.wa || i.top > t.ua);
        }, c.ko = function () {
            this.Aa();
            var t = this.Qa, i = this.b.ba;
            return t.right < 0 || t.bottom < 0 || t.left > i.width || t.top > i.height;
        }, c.ez = function (t, i, s) {
            var h = this.N(), e = h.Zb();
            if (!e.length)
                return !1;
            var n, o, r, a = e[0], c = a, p = Va(a.x, a.y, i, s);
            for (n = 1, o = e.length; n < o; n++)
                a = e[n], r = Va(a.x, a.y, i, s), (0 === t && r < p || 1 === t && p < r) && (p = r, c = a);
            return h.Fg(c), !0;
        }, p.Pf = function (t) {
            this.x !== t && (this.x = t, this.za());
        }, p.$i = function (t) {
            this.y !== t && (this.y = t, this.za());
        }, p.fu = function (t, i) {
            this.x === t && this.y === i || (this.x = t, this.y = i, this.za());
        }, p.Eo = function (t, i) {
            var s, h = t.ww(this);
            h && (h = h.nf ? (s = h.nf(i, !0), h.nf(i, !1)) : (s = h.x, h.y), this.x === s && this.y === h || (this.x = s, this.y = h, this.za()));
        }, p.bz = function (t) {
            0 !== t && (this.x += Math.cos(this.m) * t, this.y += Math.sin(this.m) * t, this.za());
        }, p.az = function (t, i) {
            0 !== i && (this.x += Math.cos(G(t)) * i, this.y += Math.sin(G(t)) * i, this.za());
        }, u.aj = function (t) {
            t.n(this.x);
        }, u.Al = function (t) {
            t.n(this.y);
        }, u.De = function (t) {
            t.n(this.b.Rj(this));
        }), e && (c.Wy = function (t, i) {
            return ic(this.width, t, i);
        }, c.ss = function (t, i) {
            return ic(this.height, t, i);
        }, p.Zi = function (t) {
            this.width !== t && (this.width = t, this.za());
        }, p.Xi = function (t) {
            this.height !== t && (this.height = t, this.za());
        }, p.$g = function (t, i) {
            this.width === t && this.height === i || (this.width = t, this.height = i, this.za());
        }, u.bh = function (t) {
            t.n(this.width);
        }, u.Oi = function (t) {
            t.n(this.height);
        }, u.Zn = function (t) {
            this.Aa(), t.n(this.Qa.left);
        }, u.ao = function (t) {
            this.Aa(), t.n(this.Qa.top);
        }, u.$n = function (t) {
            this.Aa(), t.n(this.Qa.right);
        }, u.Yn = function (t) {
            this.Aa(), t.n(this.Qa.bottom);
        }), n && (c.kl = function (t, i) {
            return Ra(this.m, G(i)) <= G(t);
        }, c.Ps = function (t) {
            return Ta(this.m, G(t));
        }, c.Ns = function (t, i) {
            var s = Oa(t), h = Oa(i), e = Ma(this.m);
            return Ta(h, s) ? Ta(e, s) && !Ta(e, h) : !(!Ta(e, s) && Ta(e, h));
        }, p.Co = function (t) {
            t = G(La(t)), isNaN(t) || this.m === t || (this.m = t, this.za());
        }, p.hz = function (t) {
            0 === t || isNaN(t) || (this.m += G(t), this.m = Ma(this.m), this.za());
        }, p.iz = function (t) {
            0 === t || isNaN(t) || (this.m -= G(t), this.m = Ma(this.m), this.za());
        }, p.jz = function (t, i) {
            var s = Sa(this.m, G(i), G(t));
            isNaN(s) || this.m === s || (this.m = s, this.za());
        }, p.kz = function (t, i, s) {
            t = Sa(this.m, Math.atan2(s - this.y, i - this.x), G(t)), isNaN(t) || this.m === t || (this.m = t, this.za());
        }, p.lz = function (t, i) {
            var s = Math.atan2(i - this.y, t - this.x);
            isNaN(s) || this.m === s || (this.m = s, this.za());
        }, u.ls = function (t) {
            t.n(Na(this.m));
        }), s || (c.Mi = function (t, i, s) {
            return ic(this.hb[t], i, s);
        }, c.ml = function (t) {
            return this.hb[t];
        }, c.fz = function (t, i) {
            var s = this.N(), h = s.Zb();
            if (!h.length)
                return !1;
            var e, n, o, r = h[0], a = r, c = r.hb[i];
            for (e = 1, n = h.length; e < n; e++)
                o = (r = h[e]).hb[i], (0 === t && o < c || 1 === t && c < o) && (c = o, a = r);
            return s.Fg(a), !0;
        }, c.Bo = function (t) {
            var i, s, h, e, n;
            if (this.b.Qj().fg) {
                if ((n = this.N()).R)
                    for (n.R = !1, A(n.d), A(n.I), i = 0, s = (h = this.d).length; i < s; i++)
                        (e = h[i]).uid === t ? n.I.push(e) : n.d.push(e);
                else {
                    for (h = i = 0, s = n.d.length; i < s; i++)
                        e = n.d[i], (n.d[h] = e).uid === t ? n.I.push(e) : h++;
                    Ba(n.d, h);
                }
                return this.Gc(), !!n.d.length;
            }
            if (!(e = this.b.Uj(t)))
                return !1;
            if (!(n = this.N()).R && -1 === n.d.indexOf(e))
                return !1;
            if (this.B) {
                for (i = 0, s = (t = e.type.Da).length; i < s; i++)
                    if (t[i] === this)
                        return n.Fg(e), this.Gc(), !0;
            } else if (e.type === this)
                return n.Fg(e), this.Gc(), !0;
            return !1;
        }, c.Jd = function () {
            return !0;
        }, c.po = function () {
            return !0;
        }, p.Yi = function (t, i) {
            var s = this.hb;
            ja(s[t]) ? s[t] = ja(i) ? i : parseFloat(i) : z(s[t]) && (s[t] = z(i) ? i : i.toString());
        }, p.jl = function (t, i) {
            var s = this.hb;
            ja(s[t]) ? s[t] = ja(i) ? s[t] + i : s[t] + parseFloat(i) : z(s[t]) && (s[t] = z(i) ? s[t] + i : s[t] + i.toString());
        }, p.zl = function (t, i) {
            var s = this.hb;
            ja(s[t]) && (s[t] = ja(i) ? s[t] - i : s[t] - parseFloat(i));
        }, p.ul = function (t, i) {
            this.hb[t] = i ? 1 : 0;
        }, p.mz = function (t) {
            this.hb[t] = 1 - this.hb[t];
        }, p.Yg = function () {
            this.b.Xe(this);
        }, p.ct || (p.ct = function (t) {
            var i, s;
            try {
                i = JSON.parse(t);
            } catch (t) {
                return;
            }
            if (this.b.hk(this, i, !0), this.Kd && this.Kd(), this.L)
                for (t = 0, i = this.L.length; t < i; ++t)
                    (s = this.L[t]).Kd && s.Kd();
        }), u.zs = function (t) {
            var i, s, h, e = t.Df.d.length;
            for (i = 0, s = this.b.cd.length; i < s; i++)
                h = this.b.cd[i], t.Df.B ? 0 <= h.type.Da.indexOf(t.Df) && e++ : h.type === t.Df && e++;
            t.H(e);
        }, u.Kt = function (t) {
            t.H(t.Df.N().Zb().length);
        }, u.Go = function (t) {
            t.H(this.uid);
        }, u.Xy = function (t) {
            t.H(this.uh());
        }, u.ll || (u.ll = function (t) {
            t.la(JSON.stringify(this.b.An(this, !0)));
        })), o && (c.lo = function () {
            return this.visible;
        }, p.ah = function (t) {
            !t != !this.visible && (this.visible = !!t, this.b.fa = !0);
        }, c.eo = function (t, i) {
            return ic(lb(100 * this.opacity), t, i);
        }, p.Do = function (t) {
            (t /= 100) < 0 ? t = 0 : 1 < t && (t = 1), t !== this.opacity && (this.opacity = t, this.b.fa = !0);
        }, u.Opacity = function (t) {
            t.n(lb(100 * this.opacity));
        }), r && (c.Yy = function (t) {
            return !!t && this.j === t;
        }, c.gz = function (t) {
            var i = this.N(), s = i.Zb();
            if (!s.length)
                return !1;
            var h, e, n = s[0], o = n;
            for (h = 1, e = s.length; h < e; h++)
                n = s[h], 0 === t ? (n.j.index > o.j.index || n.j.index === o.j.index && n.wd() > o.wd()) && (o = n) : (n.j.index < o.j.index || n.j.index === o.j.index && n.wd() < o.wd()) && (o = n);
            return i.Fg(o), !0;
        }, p.ft = function () {
            var t = this.j, i = t.d;
            i.length && i[i.length - 1] === this || (t.Gg(this, !1), t.fh(this, !1), this.b.fa = !0);
        }, p.dt = function () {
            var t = this.j, i = t.d;
            i.length && i[0] === this || (t.Gg(this, !1), t.Yx(this), this.b.fa = !0);
        }, p.et = function (t) {
            t && t != this.j && (this.j.Gg(this, !0), (this.j = t).fh(this, !0), this.b.fa = !0);
        }, p.Ho = function (t, i) {
            var s = 0 === t;
            if (i) {
                var h = i.qw(this);
                h && h.uid !== this.uid && (this.j.index !== h.j.index && (this.j.Gg(this, !0), this.j = h.j, h.j.fh(this, !0)), this.j.zx(this, h, s), this.b.fa = !0);
            }
        }, u.bt = function (t) {
            t.H(this.j.Jq);
        }, u.$y = function (t) {
            t.la(this.j.name);
        }, u.nz = function (t) {
            t.H(this.wd());
        }), a && (p.au = function (t, i) {
            if (this.b.k) {
                var s = this.type.lm(i);
                if (!(s < 0)) {
                    var h = 1 === t;
                    this.re[s] !== h && (this.re[s] = h, this.nd(), this.b.fa = !0);
                }
            }
        }, p.wl = function (t, i, s) {
            if (this.b.k) {
                var h = this.type.lm(t);
                h < 0 || (t = this.type.M[h], h = this.Ja[h], (i = Math.floor(i)) < 0 || i >= h.length || (1 === this.b.k.Aw(t.Za, i) && (s /= 100), h[i] !== s && (h[i] = s, t.nc && (this.b.fa = !0))));
            }
        });
    }, Ob = function () {
        this.Kl = this.Fl = !0, this.type.ej = !0, this.b.fa = !0;
        var t, i, s = this.Gl;
        for (t = 0, i = s.length; t < i; ++t)
            s[t](this);
        this.j.Ec && this.Aa();
    }, Pb = function (t) {
        t && this.Gl.push(t);
    }, Rb = function () {
        if (this.Fl) {
            var t = this.Qa, i = this.Xb;
            t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.Nb * this.width, -this.Ob * this.height), this.m ? (t.offset(-this.x, -this.y), i.Br(t, this.m), i.offset(this.x, this.y), i.To(t)) : i.ni(t), t.normalize(), this.Fl = !1, this.Ny();
        }
    };
    var s = new wa(0, 0, 0, 0);
    Sb = function () {
        if (this.j.Ec) {
            var t = this.j.Eb, i = this.Qa;
            s.set(t.Ub(i.left), t.Vb(i.top), t.Ub(i.right), t.Vb(i.bottom)), this.ac.oh(s) || (this.ac.right < this.ac.left ? t.update(this, null, s) : t.update(this, this.ac, s), this.ac.Vf(s), this.j.ld = !0);
        }
    }, Tb = function () {
        if (this.Kl && this.$e) {
            this.Aa();
            var t = this.type.rj, i = this.Qa;
            s.set(t.Ub(i.left), t.Vb(i.top), t.Ub(i.right), t.Vb(i.bottom)), this.ze.oh(s) || (this.ze.right < this.ze.left ? t.update(this, null, s) : t.update(this, this.ze, s), this.ze.Vf(s), this.Kl = !1);
        }
    }, Qb = function (t, i) {
        return !(!this.Qa.Ib(t, i) || !this.Xb.Ib(t, i)) && (this.Sg ? this.Jz(t, i) : !(this.ga && !this.ga.jg()) || (this.ga.Sf(this.width, this.height, this.m), this.ga.Ib(t - this.x, i - this.y)));
    }, Kb = function () {
        return this.type.cl(), this.rf;
    }, Ub = function () {
        return this.j.Tn(), this.pd;
    }, Vb = function () {
        A(this.ea);
        var t, i, s, h = !0;
        for (t = 0, i = this.re.length; t < i; t++)
            this.re[t] && (s = this.type.M[t], this.ea.push(s), s.Rc || (h = !1));
        this.as = !!this.ea.length, this.ie = h;
    }, Lb = function () {
        return 'Inst' + this.ir;
    }, ub = function (t) {
        var i, s, h;
        if (t && t.Ab && t.type != this)
            for (i = 0, s = t.siblings.length; i < s; i++)
                if ((h = t.siblings[i]).type == this)
                    return h;
        return (t = this.N().Zb()).length ? t[0] : null;
    }, vb = function (t) {
        var i = this.N().Zb();
        return i.length ? i[t.uh() % i.length] : null;
    }, tb = function () {
        if (this.Ng && !this.B) {
            var t, i;
            for (t = 0, i = this.d.length; t < i; t++)
                this.d[t].rf = t;
            var s = t, h = this.b.cd;
            for (t = 0, i = h.length; t < i; ++t)
                h[t].type === this && (h[t].rf = s++);
            this.Ng = !1;
        }
    }, Ib = function (t) {
        if (t < this.d.length)
            return this.d[t];
        t -= this.d.length;
        var i, s, h = this.b.cd;
        for (i = 0, s = h.length; i < s; ++i)
            if (h[i].type === this) {
                if (0 === t)
                    return h[i];
                --t;
            }
        return null;
    }, wb = function () {
        return this.ke[this.sd];
    }, xb = function () {
        this.sd++, this.sd === this.ke.length ? this.ke.push(new sb(this)) : (this.ke[this.sd].R = !0, A(this.ke[this.sd].I));
    }, yb = function () {
        this.sd++, this.sd === this.ke.length && this.ke.push(new sb(this));
        var t = this.ke[this.sd], i = this.ke[this.sd - 1];
        i.R ? t.R = !0 : (t.R = !1, Da(t.d, i.d)), A(t.I);
    }, zb = function () {
        this.sd--;
    }, Ab = function (t) {
        var i, s, h, e, n, o = 0;
        if (!this.B)
            for (i = 0, s = this.Da.length; i < s; i++)
                for (h = 0, e = (n = this.Da[i]).Ha.length; h < e; h++) {
                    if (t === n.Ha[h].name)
                        return this.ja.lastBehIndex = o, n.Ha[h];
                    o++;
                }
        for (i = 0, s = this.Ha.length; i < s; i++) {
            if (t === this.Ha[i].name)
                return this.ja.lastBehIndex = o, this.Ha[i];
            o++;
        }
        return null;
    }, Bb = function (t) {
        return this.Pj(t) ? this.ja.lastBehIndex : -1;
    }, Cb = function (t) {
        var i, s;
        for (i = 0, s = this.M.length; i < s; i++)
            if (this.M[i].name === t)
                return i;
        return -1;
    }, Hb = function () {
        if (this.Ab && !this.B) {
            var t, i, s, h, e, n, o;
            this.cl();
            var r = (n = this.N()).R, a = (t = this.b.Ea()) && t.Ia && t.Ia.kc;
            for (t = 0, i = this.hc.length; t < i; t++)
                if ((e = this.hc[t]) !== this && (e.cl(), !((o = e.N()).R = r))) {
                    for (A(o.d), s = 0, h = n.d.length; s < h; ++s)
                        o.d[s] = e.mm(n.d[s].rf);
                    if (a)
                        for (A(o.I), s = 0, h = n.I.length; s < h; ++s)
                            o.I[s] = e.mm(n.I[s].rf);
                }
        }
    }, Jb = function () {
        return 'Type' + this.Y;
    }, ic = function (t, i, s) {
        if (void 0 === t || void 0 === s)
            return !1;
        switch (i) {
        case 0:
            return t === s;
        case 1:
            return t !== s;
        case 2:
            return t < s;
        case 3:
            return t <= s;
        case 4:
            return s < t;
        case 5:
            return s <= t;
        default:
            return !1;
        }
    };
}();
var qc = {
    tint: {
        src: 'varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp float red;\nuniform lowp float green;\nuniform lowp float blue;\nvoid main(void)\n{\nlowp vec4 front = texture2D(samplerFront, vTex);\ngl_FragColor = front * vec4(red, green, blue, 1.0);\n}',
        Ej: 0,
        Fj: 0,
        Sl: !1,
        Rc: !0,
        Cl: !1,
        O: [["red",0,1],["green",0,1],["blue",0,1]]
    }
};
function X(t) {
    this.b = t;
}
function tc(t) {
    this.b = t;
}
function uc(t) {
    this.b = t;
}
function vc(t) {
    this.b = t;
}
function wc(t) {
    this.b = t;
}
function sc(t) {
    this.b = t;
}
function xc(t) {
    this.b = t;
}
function Y(t) {
    this.b = t;
}
function V(t) {
    this.b = t;
}
function yc(t) {
    this.b = t;
}
function zc(t) {
    this.b = t;
}
function Z(t) {
    this.b = t;
}
function Ac(t) {
    this.b = t;
}
function Bc(t) {
    this.b = t;
}
function Cc(t) {
    this.b = t;
}
function Ic(t) {
    this.b = t;
}
function Jc(t) {
    this.b = t;
}
function rc() {
    return [Y,X,wc,tc,uc,Ac,sc,vc,xc,Bc,V,Z,yc,zc,Jc,Ic,Cc,T.prototype.c.to,tc.prototype.e.$g,tc.prototype.e.Ot,sc.prototype.e.CallFunction,T.prototype.e.ku,T.prototype.e.cu,V.prototype.e.Xt,yc.prototype.c.Mi,yc.prototype.e.iu,T.prototype.g.Oy,T.prototype.c.ws,uc.prototype.e.Nt,uc.prototype.e.Play,V.prototype.e.Yi,T.prototype.e.As,yc.prototype.e.Yi,yc.prototype.e.Zi,yc.prototype.e.Xi,sc.prototype.c.Ui,yc.prototype.e.Yg,T.prototype.c.Ds,sc.prototype.g.Ft,T.prototype.c.qs,wc.prototype.g.Zs,tc.prototype.g.bh,T.prototype.c.Cs,T.prototype.c.ho,V.prototype.c.Mi,T.prototype.e.vu,V.prototype.e.Yg,V.prototype.e.Pf,wc.prototype.g.Hs,Cc.prototype.e.xl,Cc.prototype.e.hu,V.prototype.g.zs,V.prototype.e.jl,T.prototype.g.Yo,uc.prototype.e.du,uc.prototype.e.Fo,Y.prototype.e.Yg,V.prototype.e.ah,Y.prototype.e.Yi,uc.prototype.c.Xs,Y.prototype.g.Zn,Y.prototype.g.ao,Y.prototype.g.$n,Y.prototype.g.Yn,uc.prototype.e.pu,T.prototype.e.Is,uc.prototype.e.Lt,sc.prototype.c.ts,uc.prototype.e.eu,T.prototype.g.float,T.prototype.g.int,Y.prototype.e.ah,T.prototype.c.Qs,yc.prototype.e.$g,yc.prototype.e.yl,T.prototype.c.Gs,V.prototype.g.aj,V.prototype.g.Al,V.prototype.e.ul,tc.prototype.c.Ni,V.prototype.e.ft,T.prototype.g.floor,T.prototype.g.random,V.prototype.e.qu,T.prototype.g.cos,T.prototype.g.De,V.prototype.c.Ni,yc.prototype.e.wl,V.prototype.e.ou,V.prototype.e.yl,V.prototype.e.$i,V.prototype.e.Zi,V.prototype.g.bh,V.prototype.e.Do,V.prototype.g.Opacity,V.prototype.c.eo,V.prototype.c.mo,yc.prototype.e.ul,tc.prototype.c.us,T.prototype.c.Fs,T.prototype.g.min,T.prototype.g.ux,tc.prototype.g.ms,tc.prototype.c.xs,T.prototype.e.ks,T.prototype.g.Ax,tc.prototype.e.Bs,tc.prototype.g.ns,T.prototype.c.Gt,V.prototype.e.Eo,Y.prototype.e.Pf,Y.prototype.e.$i,Y.prototype.e.Zi,Y.prototype.e.ul,Cc.prototype.e.Wt,Y.prototype.e.dt,Y.prototype.g.bh,Y.prototype.e.Ho,T.prototype.g.sin,Y.prototype.g.aj,Y.prototype.g.Al,Y.prototype.c.ml,Y.prototype.c.Mi,T.prototype.c.Ht,V.prototype.e.Co,V.prototype.e.wl,V.prototype.g.ls,sc.prototype.e.gu,V.prototype.c.Vs,V.prototype.c.kl,Y.prototype.c.fo,Cc.prototype.g.yb,V.prototype.g.Yn,sc.prototype.g.bo,Cc.prototype.g.xb,Cc.prototype.c.ol,V.prototype.c.ml,T.prototype.g.abs,T.prototype.e.su,Cc.prototype.c.vs,Cc.prototype.e.ru,Cc.prototype.c.pl,Y.prototype.e.Xi,T.prototype.g.Rx,Y.prototype.c.Ni,T.prototype.g.ox,T.prototype.g.nx,Y.prototype.g.Oi,Y.prototype.e.$g,Y.prototype.g.Go,Y.prototype.c.Bo,Y.prototype.e.zl,T.prototype.c.kl,T.prototype.g.m,Y.prototype.c.ko,zc.prototype.e.Ho,zc.prototype.e.Yi,V.prototype.c.fo,V.prototype.g.jo,V.prototype.e.Xi,V.prototype.g.io,V.prototype.e.zl,zc.prototype.e.ah,V.prototype.c.ss,V.prototype.c.ko,zc.prototype.c.lo,zc.prototype.e.jl,zc.prototype.c.Mi,V.prototype.g.Oi,zc.prototype.e.Do,zc.prototype.c.eo,zc.prototype.e.Xi,zc.prototype.e.Pf,zc.prototype.e.$i,zc.prototype.e.Co,zc.prototype.e.Zi,zc.prototype.g.Opacity,V.prototype.g.$n,V.prototype.g.Zn,V.prototype.c.Us,V.prototype.g.ao,T.prototype.c.It,zc.prototype.e.fu,zc.prototype.e.$g,V.prototype.c.Ms,V.prototype.e.Yt,V.prototype.g.Ks,V.prototype.g.Ls,V.prototype.c.lo,V.prototype.g.bt,T.prototype.g.time,Y.prototype.c.Jd,Y.prototype.e.au,Y.prototype.e.wl,V.prototype.c.Bo,V.prototype.g.Go,V.prototype.g.Kt,Cc.prototype.c.Ts,V.prototype.e.et,zc.prototype.e.Yg,V.prototype.e.mu,Cc.prototype.e.hs,zc.prototype.e.Eo,zc.prototype.g.Oi,zc.prototype.g.bh,T.prototype.g.ceil,zc.prototype.g.aj,T.prototype.g.Vy,T.prototype.g.Px,T.prototype.g.Ox,T.prototype.e.Tt,T.prototype.e.Ut,T.prototype.e.Vt,T.prototype.c.so,T.prototype.c.Ws,Bc.prototype.c.rs,Bc.prototype.c.Os,xc.prototype.c.Rs,T.prototype.c.Ss,Z.prototype.c.tl,vc.prototype.e.St,Z.prototype.g.es,Z.prototype.g.uu,Z.prototype.g.gs,T.prototype.g.Nu,T.prototype.g.Ou,T.prototype.c.Jt,Z.prototype.c.sl,Z.prototype.c.rl,wc.prototype.e.co,wc.prototype.e.js,T.prototype.g.Ky,T.prototype.g.Jy,T.prototype.g.left,T.prototype.g.yx,T.prototype.c.wu,T.prototype.c.Qt,wc.prototype.c.Js,T.prototype.e.ju,yc.prototype.c.Jd,yc.prototype.e.$t,yc.prototype.e.jl,T.prototype.g.qx,yc.prototype.e.zl,yc.prototype.c.ml,yc.prototype.c.po,yc.prototype.e.Pf,yc.prototype.e.$i,V.prototype.c.Jd,tc.prototype.c.nl,tc.prototype.e.lu,wc.prototype.c.nl,X.prototype.e.Rt,X.prototype.c.Zg,X.prototype.g.$s,yc.prototype.e.ah,vc.prototype.c.Ao,vc.prototype.e.ys,vc.prototype.c.Wi,yc.prototype.e.bu,Ac.prototype.e.Yg,Ac.prototype.c.oo,Ac.prototype.g.Es,vc.prototype.g.Pt,tc.prototype.e.Pf,T.prototype.g.Uw,T.prototype.g.Xu,T.prototype.g.Rg,tc.prototype.e.Mt];
}
!function () {
    function t() {
    }
    function i() {
    }
    function s() {
    }
    var r = !1, h = null, a = null, c = '', e = X.prototype;
    e.W = function (t) {
        this.X = t, this.b = t.b;
    }, e.W.prototype.D = function () {
    }, e.S = function (t) {
        this.type = t, this.b = t.b, this.rc = this.zd = '', this.$b = 0, this.timeout = -1, (r = this.b.Hh) && (h = require('path'), a = require('fs'), c = h.dirname((window.process || nw.process).execPath) + '\\');
    };
    var n = e.S.prototype, o = null;
    window.C2_AJAX_DCSide = function (t, i, s) {
        o && ('success' === t ? (o.rc = i, o.zd = s, o.b.trigger(X.prototype.c.Pi, o), o.b.trigger(X.prototype.c.Zg, o)) : 'error' === t ? (o.rc = i, o.b.trigger(X.prototype.c.Qi, o), o.b.trigger(X.prototype.c.Ti, o)) : 'progress' === t && (o.$b = s, o.rc = i, o.b.trigger(X.prototype.c.yo, o)));
    }, n.D = function () {
        o = this;
    }, n.Fb = function () {
        return { lastData: this.zd };
    }, n.Qb = function (t) {
        this.zd = t.lastData, this.rc = '', this.$b = 0;
    };
    var p = {}, u = '';
    n.dv = function (s, i) {
        if (this.b.pb)
            AppMobi.webview.execute('C2_AJAX_WebSide("' + s + '", "' + i + '", "GET", null);');
        else {
            var h = this, t = null, e = function () {
                    h.rc = s, h.b.trigger(X.prototype.c.Qi, h), h.b.trigger(X.prototype.c.Ti, h);
                }, n = function () {
                    if (r) {
                        var t = c + i;
                        a.existsSync(t) ? a.readFile(t, { encoding: 'utf8' }, function (t, i) {
                            t ? e() : (h.rc = s, h.zd = i.replace(/\r\n/g, '\n'), h.b.trigger(X.prototype.c.Pi, h), h.b.trigger(X.prototype.c.Zg, h));
                        }) : e();
                    } else
                        e();
                };
            try {
                (t = this.b.Ke ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest()).onreadystatechange = function () {
                    4 === t.readyState && (h.rc = s, t.responseText ? h.zd = t.responseText.replace(/\r\n/g, '\n') : h.zd = '', 400 <= t.status ? (h.b.trigger(X.prototype.c.Qi, h), h.b.trigger(X.prototype.c.Ti, h)) : r && !h.zd.length || !r && 0 === t.status && !h.zd.length || (h.b.trigger(X.prototype.c.Pi, h), h.b.trigger(X.prototype.c.Zg, h)));
                }, this.b.Ke || (t.onerror = n, t.ontimeout = n, t.onabort = n, t.onprogress = function (t) {
                    t.lengthComputable && (h.$b = t.loaded / t.total, h.rc = s, h.b.trigger(X.prototype.c.yo, h));
                }), t.open('GET', i), !this.b.Ke && 0 <= this.timeout && void 0 !== t.timeout && (t.timeout = this.timeout);
                try {
                    t.responseType = 'text';
                } catch (t) {
                }
                if (t.setRequestHeader) {
                    for (var o in p)
                        if (p.hasOwnProperty(o))
                            try {
                                t.setRequestHeader(o, p[o]);
                            } catch (t) {
                            }
                    p = {};
                }
                if (u && t.overrideMimeType) {
                    try {
                        t.overrideMimeType(u);
                    } catch (t) {
                    }
                    u = '';
                }
                t.send();
            } catch (t) {
                n();
            }
        }
    }, t.prototype.Zg = function (t) {
        return mb(t, this.rc);
    }, t.prototype.Pi = function () {
        return !0;
    }, t.prototype.Ti = function (t) {
        return mb(t, this.rc);
    }, t.prototype.Qi = function () {
        return !0;
    }, t.prototype.yo = function (t) {
        return mb(t, this.rc);
    }, e.c = new t(), i.prototype.Rt = function (i, t) {
        var s = this;
        this.b.Jh && !this.b.Lp(t) ? this.b.lp(t, function (t) {
            s.rc = i, s.zd = t.replace(/\r\n/g, '\n'), s.b.trigger(X.prototype.c.Pi, s), s.b.trigger(X.prototype.c.Zg, s);
        }, function () {
            s.rc = i, s.b.trigger(X.prototype.c.Qi, s), s.b.trigger(X.prototype.c.Ti, s);
        }) : this.dv(i, t);
    }, e.e = new i(), s.prototype.$s = function (t) {
        t.la(this.zd);
    }, e.g = new s();
}(), function () {
    function r() {
        return o.length ? o.pop() : [];
    }
    function n(t) {
        var i, s;
        for (i = 0, s = t.length; i < s; i++)
            Array.isArray(t[i]) && n(t[i]);
        A(t), o.push(t);
    }
    function t() {
    }
    function i() {
    }
    function s() {
    }
    var h = tc.prototype;
    h.W = function (t) {
        this.X = t, this.b = t.b;
    }, h.W.prototype.D = function () {
    }, h.S = function (t) {
        this.type = t, this.b = t.b;
    };
    var e = h.S.prototype, o = [];
    Array.isArray || (Array.isArray = function (t) {
        return '[object Array]' === Object.prototype.toString.call(t);
    }), e.D = function () {
        this.ra = this.A[0], this.Ca = this.A[1], this.Ma = this.A[2], this.Bc || (this.oc = r());
        var t, i, s, h = this.oc;
        for (h.length = this.ra, t = 0; t < this.ra; t++)
            for (h[t] || (h[t] = r()), h[t].length = this.Ca, i = 0; i < this.Ca; i++)
                for (h[t][i] || (h[t][i] = r()), h[t][i].length = this.Ma, s = 0; s < this.Ma; s++)
                    h[t][i][s] = 0;
        this.op = [], this.pp = [], this.qp = [], this.Wd = -1;
    }, e.Ef = function () {
        var t;
        for (t = 0; t < this.ra; t++)
            n(this.oc[t]);
        A(this.oc);
    }, e.pc = function (t, i, s) {
        return t = Math.floor(t), i = Math.floor(i), s = Math.floor(s), isNaN(t) || t < 0 || t > this.ra - 1 || isNaN(i) || i < 0 || i > this.Ca - 1 || isNaN(s) || s < 0 || s > this.Ma - 1 ? 0 : this.oc[t][i][s];
    }, e.set = function (t, i, s, h) {
        t = Math.floor(t), i = Math.floor(i), s = Math.floor(s), isNaN(t) || t < 0 || t > this.ra - 1 || isNaN(i) || i < 0 || i > this.Ca - 1 || isNaN(s) || s < 0 || s > this.Ma - 1 || (this.oc[t][i][s] = h);
    }, e.lw = function () {
        return JSON.stringify({
            c2array: !0,
            size: [this.ra,this.Ca,this.Ma],
            data: this.oc
        });
    }, e.Fb = function () {
        return {
            size: [this.ra,this.Ca,this.Ma],
            data: this.oc
        };
    }, e.Qb = function (t) {
        var i = t.size;
        this.ra = i[0], this.Ca = i[1], this.Ma = i[2], this.oc = t.data;
    }, e.ge = function (t, i, s) {
        if (t < 0 && (t = 0), i < 0 && (i = 0), s < 0 && (s = 0), this.ra !== t || this.Ca !== i || this.Ma !== s) {
            this.ra = t, this.Ca = i, this.Ma = s;
            var h, e, n = this.oc;
            for (n.length = t, t = 0; t < this.ra; t++)
                for (ha(n[t]) && (n[t] = r()), n[t].length = i, h = 0; h < this.Ca; h++)
                    for (ha(n[t][h]) && (n[t][h] = r()), n[t][h].length = s, e = 0; e < this.Ma; e++)
                        ha(n[t][h][e]) && (n[t][h][e] = 0);
        }
    }, e.Uu = function () {
        return 0 <= this.Wd && this.Wd < this.op.length ? this.op[this.Wd] : 0;
    }, e.wv = function () {
        return 0 <= this.Wd && this.Wd < this.pp.length ? this.pp[this.Wd] : 0;
    }, e.rz = function () {
        return 0 <= this.Wd && this.Wd < this.qp.length ? this.qp[this.Wd] : 0;
    }, t.prototype.Ni = function (t, i, s) {
        return ic(this.pc(t, 0, 0), i, s);
    }, t.prototype.xs = function (t, i, s, h) {
        return ic(this.pc(t, i, 0), s, h);
    }, e.El = function (t) {
        this.b.Qe(t.V), t.ee(), this.b.jd(t.V);
    }, t.prototype.nl = function () {
        return 0 === this.ra || 0 === this.Ca || 0 === this.Ma;
    }, t.prototype.us = function (t, i, s) {
        var h = 0;
        switch (t) {
        case 0:
            h = this.ra;
            break;
        case 1:
            h = this.Ca;
            break;
        case 2:
            h = this.Ma;
        }
        return ic(h, i, s);
    }, h.c = new t(), i.prototype.co = function () {
        var t, i, s;
        for (t = 0; t < this.ra; t++)
            for (i = 0; i < this.Ca; i++)
                for (s = 0; s < this.Ma; s++)
                    this.oc[t][i][s] = 0;
    }, i.prototype.$g = function (t, i, s) {
        this.ge(t, i, s);
    }, i.prototype.Pf = function (t, i) {
        this.set(t, 0, 0, i);
    }, i.prototype.lu = function (t, i, s) {
        this.set(t, i, 0, s);
    }, i.prototype.Ot = function (t, i, s) {
        var h = 0, e = 0, n = 0, o = this.oc;
        switch (s) {
        case 0:
            for (0 === t ? (h = o.length, o.push(r())) : (h = 0, o.unshift(r())), o[h].length = this.Ca; e < this.Ca; e++)
                for (o[h][e] = r(), o[h][e].length = this.Ma, n = 0; n < this.Ma; n++)
                    o[h][e][n] = i;
            this.ra++;
            break;
        case 1:
            for (; h < this.ra; h++)
                for (0 === t ? (e = o[h].length, o[h].push(r())) : (e = 0, o[h].unshift(r())), o[h][e].length = this.Ma, n = 0; n < this.Ma; n++)
                    o[h][e][n] = i;
            this.Ca++;
            break;
        case 2:
            for (; h < this.ra; h++)
                for (e = 0; e < this.Ca; e++)
                    0 === t ? o[h][e].push(i) : o[h][e].unshift(i);
            this.Ma++;
        }
    }, i.prototype.Mt = function (t, i) {
        var s = 0, h = 0, e = this.oc;
        switch (i) {
        case 0:
            if (0 === this.ra)
                break;
            n(0 === t ? e.pop() : e.shift()), this.ra--;
            break;
        case 1:
            if (0 === this.Ca)
                break;
            for (; s < this.ra; s++)
                n(0 === t ? e[s].pop() : e[s].shift());
            this.Ca--;
            break;
        case 2:
            if (0 === this.Ma)
                break;
            for (; s < this.ra; s++)
                for (h = 0; h < this.Ca; h++)
                    0 === t ? e[s][h].pop() : e[s][h].shift();
            this.Ma--;
        }
    }, i.prototype.Bs = function (t, i) {
        var s = 0, h = 0;
        t = Math.floor(t);
        var e = this.oc;
        if (!(t < 0))
            switch (i) {
            case 0:
                if (t >= this.ra)
                    break;
                n(e[t]), e.splice(t, 1), this.ra--;
                break;
            case 1:
                if (t >= this.Ca)
                    break;
                for (; s < this.ra; s++)
                    n(e[s][t]), e[s].splice(t, 1);
                this.Ca--;
                break;
            case 2:
                if (t >= this.Ma)
                    break;
                for (; s < this.ra; s++)
                    for (h = 0; h < this.Ca; h++)
                        e[s][h].splice(t, 1);
                this.Ma--;
            }
    }, h.e = new i(), s.prototype.ms = function (t, i, s, h) {
        t.Kg(this.pc(i, s || 0, h || 0));
    }, s.prototype.bh = function (t) {
        t.H(this.ra);
    }, s.prototype.Oi = function (t) {
        t.H(this.Ca);
    }, s.prototype.ns = function (t) {
        t.Kg(this.pc(this.ra - 1, 0, 0));
    }, s.prototype.ll = function (t) {
        t.la(this.lw());
    }, h.g = new s();
}(), function () {
    function n(t) {
        -1 === st.indexOf(t) && st.push(t);
    }
    function o(i) {
        var t, s = i.i;
        try {
            t = s.play();
        } catch (t) {
            return void n(i);
        }
        t ? t.catch(function () {
            n(i);
        }) : it && !q.xc && n(i);
    }
    function t() {
        var t, i, s, h;
        et || V || !C || (function () {
            if ('suspended' === C.state && C.resume && C.resume(), C.createBuffer) {
                var t = C.createBuffer(1, 220, 22050), i = C.createBufferSource();
                i.buffer = t, i.connect(C.destination), u(i);
            }
        }(), 'running' === C.state && (et = !0));
        var e = st.slice(0);
        if (A(st), !z)
            for (t = 0, i = e.length; t < i; ++t)
                (s = e[t]).ta || s.ic || (h = s.i.play()) && h.catch(function () {
                    n(s);
                });
    }
    function r(t) {
        return t = Math.pow(10, t / 20), isFinite(t) || (t = 0), t < 0 && (t = 0), 1 < t && (t = 1), t;
    }
    function e(t) {
        return t < 0 && (t = 0), 1 < t && (t = 1), Math.log(t) / Math.log(10) * 20;
    }
    function a(t) {
        return t = t.toLowerCase(), nt.hasOwnProperty(t) && nt[t].length ? nt[t][0].tc() : C.destination;
    }
    function c() {
        return C.createGain ? C.createGain() : C.createGainNode();
    }
    function p(t) {
        return C.createDelay ? C.createDelay(t) : C.createDelayNode(t);
    }
    function u(t, i) {
        t.start ? t.start(i || 0) : t.noteOn(i || 0);
    }
    function f(t, i, s, h) {
        t.start ? t.start(h || 0, i) : t.noteGrainOn(h || 0, i, s - i);
    }
    function i(t) {
        try {
            t.stop ? t.stop(0) : t.noteOff(0);
        } catch (t) {
        }
    }
    function b(t, i, s, h, e, n) {
        this.type = 'filter', this.Oa = [t,i,s,h,e,n], this.aa = c(), this.K = c(), this.K.gain.value = n, this.J = c(), this.J.gain.value = 1 - n, this.Ta = C.createBiquadFilter(), this.Ta.type = 'number' == typeof this.Ta.type ? t : ot[t], this.Ta.frequency.value = i, this.Ta.detune && (this.Ta.detune.value = s), this.Ta.Q.value = h, this.Ta.gain.value = e, this.aa.connect(this.Ta), this.aa.connect(this.J), this.Ta.connect(this.K);
    }
    function d(t, i, s) {
        this.type = 'delay', this.Oa = [t,i,s], this.aa = c(), this.K = c(), this.K.gain.value = s, this.J = c(), this.J.gain.value = 1 - s, this.$h = c(), this.Kc = p(t), this.Kc.delayTime.value = t, this.zj = c(), this.zj.gain.value = i, this.aa.connect(this.$h), this.aa.connect(this.J), this.$h.connect(this.K), this.$h.connect(this.Kc), this.Kc.connect(this.zj), this.zj.connect(this.$h);
    }
    function g(t, i, s, h) {
        this.type = 'convolve', this.Oa = [i,s,h], this.aa = c(), this.K = c(), this.K.gain.value = s, this.J = c(), this.J.gain.value = 1 - s, this.bf = C.createConvolver(), t && (this.bf.normalize = i, this.bf.buffer = t), this.aa.connect(this.bf), this.aa.connect(this.J), this.bf.connect(this.K);
    }
    function y(t, i, s, h, e) {
        this.type = 'flanger', this.Oa = [t,i,s,h,e], this.aa = c(), this.J = c(), this.J.gain.value = 1 - e / 2, this.K = c(), this.K.gain.value = e / 2, this.Ij = c(), this.Ij.gain.value = h, this.Kc = p(t + i), this.Kc.delayTime.value = t, this.tb = C.createOscillator(), this.tb.frequency.value = s, this.lc = c(), this.lc.gain.value = i, this.aa.connect(this.Kc), this.aa.connect(this.J), this.Kc.connect(this.K), this.Kc.connect(this.Ij), this.Ij.connect(this.Kc), this.tb.connect(this.lc), this.lc.connect(this.Kc.delayTime), u(this.tb);
    }
    function v(t, i, s, h, e, n) {
        this.type = 'phaser', this.Oa = [t,i,s,h,e,n], this.aa = c(), this.J = c(), this.J.gain.value = 1 - n / 2, this.K = c(), this.K.gain.value = n / 2, this.Ta = C.createBiquadFilter(), this.Ta.type = 'number' == typeof this.Ta.type ? 7 : 'allpass', this.Ta.frequency.value = t, this.Ta.detune && (this.Ta.detune.value = i), this.Ta.Q.value = s, this.tb = C.createOscillator(), this.tb.frequency.value = e, this.lc = c(), this.lc.gain.value = h, this.aa.connect(this.Ta), this.aa.connect(this.J), this.Ta.connect(this.K), this.tb.connect(this.lc), this.lc.connect(this.Ta.frequency), u(this.tb);
    }
    function m(t) {
        this.type = 'gain', this.Oa = [t], this.da = c(), this.da.gain.value = t;
    }
    function w(t, i) {
        this.type = 'tremolo', this.Oa = [t,i], this.da = c(), this.da.gain.value = 1 - i / 2, this.tb = C.createOscillator(), this.tb.frequency.value = t, this.lc = c(), this.lc.gain.value = i / 2, this.tb.connect(this.lc), this.lc.connect(this.da.gain), u(this.tb);
    }
    function k(t, i) {
        this.type = 'ringmod', this.Oa = [t,i], this.aa = c(), this.K = c(), this.K.gain.value = i, this.J = c(), this.J.gain.value = 1 - i, this.ki = c(), this.ki.gain.value = 0, this.tb = C.createOscillator(), this.tb.frequency.value = t, this.tb.connect(this.ki.gain), u(this.tb), this.aa.connect(this.ki), this.aa.connect(this.J), this.ki.connect(this.K);
    }
    function x(t, i, s, h, e) {
        this.type = 'distortion', this.Oa = [t,i,s,h,e], this.aa = c(), this.Bk = c(), this.Ak = c(), this.ry(s, Math.pow(10, h / 20)), this.K = c(), this.K.gain.value = e, this.J = c(), this.J.gain.value = 1 - e, this.hl = C.createWaveShaper(), this.xj = new Float32Array(65536), this.jw(t, i), this.hl.xj = this.xj, this.aa.connect(this.Bk), this.aa.connect(this.J), this.Bk.connect(this.hl), this.hl.connect(this.Ak), this.Ak.connect(this.K);
    }
    function T(t, i, s, h, e) {
        this.type = 'compressor', this.Oa = [t,i,s,h,e], this.da = C.createDynamicsCompressor();
        try {
            this.da.threshold.value = t, this.da.knee.value = i, this.da.ratio.value = s, this.da.attack.value = h, this.da.release.value = e;
        } catch (t) {
        }
    }
    function E(t, i) {
        this.type = 'analyser', this.Oa = [t,i], this.da = C.createAnalyser(), this.da.fftSize = t, this.da.smoothingTimeConstant = i, this.hw = new Float32Array(this.da.frequencyBinCount), this.Er = new Uint8Array(t), this.gi = 0;
    }
    function j() {
        this.ka = null, this.ik = 0;
    }
    function l(t, i) {
        this.src = t, this.U = F, this.yd = i, this.dj = !1;
        var s, h = this;
        switch (this.xg = this.Dg = null, this.Eg = [], this.Mk = 0, this.Wn = this.Gj = this.Jr = this.wk = !1, 1 === F && i && !ht && (this.U = 0, this.Dg = c()), this.Nd = this.ca = null, this.U) {
        case 0:
            this.ca = new Audio(), this.ca.crossOrigin = 'anonymous', this.ca.addEventListener('canplaythrough', function () {
                h.Wn = !0;
            }), 1 === F && C.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Jr = !0, this.ca.addEventListener('canplay', function () {
                !h.xg && h.ca && (h.xg = C.createMediaElementSource(h.ca), h.xg.connect(h.Dg));
            })), this.ca.autoplay = !1, this.ca.Dz = 'auto', this.ca.src = t;
            break;
        case 1:
            q.Jh ? q.kp(t, function (t) {
                h.Nd = t, h.cp();
            }, function () {
                h.Gj = !0;
            }) : ((s = new XMLHttpRequest()).open('GET', t, !0), s.responseType = 'arraybuffer', s.onload = function () {
                h.Nd = s.response, h.cp();
            }, s.onerror = function () {
                h.Gj = !0;
            }, s.send());
            break;
        case 2:
            this.ca = !0;
            break;
        case 3:
            this.ca = !0;
        }
    }
    function R(t, i) {
        var s = this;
        this.tag = i, this.ta = this.vd = !0, this.src = t.src, this.buffer = t, this.U = F, this.yd = t.yd, this.playbackRate = 1, this.eg = !0, this.ic = this.Cc = !1, this.cc = 0, this.Kh = this.lg = this.Ad = !1, this.volume = 1, this.dn = function (t) {
            if (!s.ic && !s.Cc) {
                var i = this;
                (i = i || t.target) === s.cj && (s.eg = !0, s.ta = !0, L = s.tag, q.trigger(uc.prototype.c.Si, O));
            }
        }, this.cj = null, this.ig = 1 === _ && !this.yd || 2 === _, this.zg = 1, this.startTime = this.ig ? q.Bb.Z : q.oe.Z, this.Xa = this.fb = null, this.Bd = !1, this.Cb = null, this.Xq = this.Wq = this.Vq = this.Uq = this.Zq = this.Yq = 0, this.i = null;
        var h = !1;
        switch (1 !== this.U || 0 !== this.buffer.U || this.buffer.Jr || (this.U = 0), this.U) {
        case 0:
            this.yd ? (this.i = t.ca, h = !t.dj, t.dj = !0) : (this.i = new Audio(), this.i.crossOrigin = 'anonymous', this.i.autoplay = !1, this.i.src = t.ca.src, h = !0), h && this.i.addEventListener('ended', function () {
                L = s.tag, s.ta = !0, q.trigger(uc.prototype.c.Si, O);
            });
            break;
        case 1:
            this.fb = c(), this.fb.connect(a(i)), 1 === this.buffer.U ? t.ca && (this.i = C.createBufferSource(), this.i.buffer = t.ca, this.i.connect(this.fb)) : (this.i = this.buffer.ca, this.buffer.Dg.connect(this.fb), this.buffer.dj || (this.buffer.dj = !0, this.buffer.ca.addEventListener('ended', function () {
                L = s.tag, s.ta = !0, q.trigger(uc.prototype.c.Si, O);
            })));
            break;
        case 2:
            this.i = new window.Media(D + this.src, null, null, function (t) {
                t === window.Media.MEDIA_STOPPED && (s.eg = !0, s.ta = !0, L = s.tag, q.trigger(uc.prototype.c.Si, O));
            });
            break;
        case 3:
            this.i = !0;
        }
    }
    function S(t) {
        var i, s, h;
        if (A(pt), t.length)
            for (i = 0, s = U.length; i < s; i++)
                h = U[i], mb(t, h.tag) && pt.push(h);
        else
            B && !B.qf() && (A(pt), pt[0] = B);
    }
    function M(t, i) {
        nt.hasOwnProperty(t) ? nt[t].push(i) : nt[t] = [i];
        var s, h, e, n, o = C.destination;
        if (nt.hasOwnProperty(t) && (e = nt[t]).length)
            for (o = e[0].tc(), s = 0, h = e.length; s < h; s++)
                n = e[s], s + 1 === h ? n.Hc(C.destination) : n.Hc(e[s + 1].tc());
        for (S(t), s = 0, h = pt.length; s < h; s++)
            pt[s].cy(o);
        $ && tt === t && ($.disconnect(), $.connect(o));
    }
    function s() {
    }
    function h() {
    }
    var P = uc.prototype;
    P.W = function (t) {
        this.X = t, this.b = t.b;
    }, P.W.prototype.D = function () {
    };
    var q = null, O = null, L = '', D = '', F = 0, C = null, I = [], U = [], B = null, N = !1, _ = 0, z = !1, X = 1, Y = 0, H = 0, V = !1, W = 1, Z = 1, J = 10, K = 10000, Q = 1, $ = null, tt = '', it = !1, st = [], ht = !1, et = !1;
    document.addEventListener('pointerup', t, !0), document.addEventListener('touchend', t, !0), document.addEventListener('click', t, !0), document.addEventListener('keydown', t, !0), document.addEventListener('gamepadconnected', t, !0);
    var nt = {}, ot = 'lowpass highpass bandpass lowshelf highshelf peaking notch allpass'.split(' ');
    b.prototype.Hc = function (t) {
        this.K.disconnect(), this.K.connect(t), this.J.disconnect(), this.J.connect(t);
    }, b.prototype.remove = function () {
        this.aa.disconnect(), this.Ta.disconnect(), this.K.disconnect(), this.J.disconnect();
    }, b.prototype.tc = function () {
        return this.aa;
    }, d.prototype.Hc = function (t) {
        this.K.disconnect(), this.K.connect(t), this.J.disconnect(), this.J.connect(t);
    }, d.prototype.remove = function () {
        this.aa.disconnect(), this.$h.disconnect(), this.Kc.disconnect(), this.zj.disconnect(), this.K.disconnect(), this.J.disconnect();
    }, d.prototype.tc = function () {
        return this.aa;
    }, g.prototype.Hc = function (t) {
        this.K.disconnect(), this.K.connect(t), this.J.disconnect(), this.J.connect(t);
    }, g.prototype.remove = function () {
        this.aa.disconnect(), this.bf.disconnect(), this.K.disconnect(), this.J.disconnect();
    }, g.prototype.tc = function () {
        return this.aa;
    }, y.prototype.Hc = function (t) {
        this.J.disconnect(), this.J.connect(t), this.K.disconnect(), this.K.connect(t);
    }, y.prototype.remove = function () {
        this.aa.disconnect(), this.Kc.disconnect(), this.tb.disconnect(), this.lc.disconnect(), this.J.disconnect(), this.K.disconnect(), this.Ij.disconnect();
    }, y.prototype.tc = function () {
        return this.aa;
    }, v.prototype.Hc = function (t) {
        this.J.disconnect(), this.J.connect(t), this.K.disconnect(), this.K.connect(t);
    }, v.prototype.remove = function () {
        this.aa.disconnect(), this.Ta.disconnect(), this.tb.disconnect(), this.lc.disconnect(), this.J.disconnect(), this.K.disconnect();
    }, v.prototype.tc = function () {
        return this.aa;
    }, m.prototype.Hc = function (t) {
        this.da.disconnect(), this.da.connect(t);
    }, m.prototype.remove = function () {
        this.da.disconnect();
    }, m.prototype.tc = function () {
        return this.da;
    }, w.prototype.Hc = function (t) {
        this.da.disconnect(), this.da.connect(t);
    }, w.prototype.remove = function () {
        this.tb.disconnect(), this.lc.disconnect(), this.da.disconnect();
    }, w.prototype.tc = function () {
        return this.da;
    }, k.prototype.Hc = function (t) {
        this.K.disconnect(), this.K.connect(t), this.J.disconnect(), this.J.connect(t);
    }, k.prototype.remove = function () {
        this.tb.disconnect(), this.ki.disconnect(), this.aa.disconnect(), this.K.disconnect(), this.J.disconnect();
    }, k.prototype.tc = function () {
        return this.aa;
    }, x.prototype.ry = function (t, i) {
        t < 0.01 && (t = 0.01), this.Bk.gain.value = t, this.Ak.gain.value = Math.pow(1 / t, 0.6) * i;
    }, x.prototype.shape = function (t, i, s) {
        var h = 1.05 * s * i - i;
        return s = t < 0 ? -1 : 1, (i = (t = t < 0 ? -t : t) < i ? t : i + h * (1 - Math.exp(-1 / h * (t - i)))) * s;
    }, x.prototype.jw = function (t, i) {
        for (var s = Math.pow(10, t / 20), h = Math.pow(10, i / 20), e = 0, n = 0; n < 32768; ++n)
            e = n / 32768, e = this.shape(e, s, h), this.xj[32768 + n] = e, this.xj[32768 - n - 1] = -e;
    }, x.prototype.Hc = function (t) {
        this.K.disconnect(), this.K.connect(t), this.J.disconnect(), this.J.connect(t);
    }, x.prototype.remove = function () {
        this.aa.disconnect(), this.Bk.disconnect(), this.hl.disconnect(), this.Ak.disconnect(), this.K.disconnect(), this.J.disconnect();
    }, x.prototype.tc = function () {
        return this.aa;
    }, T.prototype.Hc = function (t) {
        this.da.disconnect(), this.da.connect(t);
    }, T.prototype.remove = function () {
        this.da.disconnect();
    }, T.prototype.tc = function () {
        return this.da;
    }, E.prototype.mb = function () {
        this.da.getFloatFrequencyData(this.hw), this.da.getByteTimeDomainData(this.Er);
        for (var t = this.da.fftSize, i = 0, s = this.gi = 0, h = 0; i < t; i++)
            (h = (this.Er[i] - 128) / 128) < 0 && (h = -h), this.gi < h && (this.gi = h), s += h * h;
        this.gi = e(this.gi), e(Math.sqrt(s / t));
    }, E.prototype.Hc = function (t) {
        this.da.disconnect(), this.da.connect(t);
    }, E.prototype.remove = function () {
        this.da.disconnect();
    }, E.prototype.tc = function () {
        return this.da;
    }, j.prototype.li = function (t) {
        this.ka = t;
    }, j.prototype.Wj = function () {
        return !!this.ka;
    }, j.prototype.mb = function () {
    }, l.prototype.ey = function () {
        var t, i, s, h;
        for (s = t = 0, i = U.length; t < i; ++t)
            h = U[t], (U[s] = h).buffer === this ? h.stop() : ++s;
        U.length = s, this.xg && (this.xg.disconnect(), this.xg = null), this.Dg && (this.Dg.disconnect(), this.Dg = null), this.Nd = this.ca = null;
    }, l.prototype.cp = function () {
        if (!this.ca && this.Nd) {
            var o = this;
            if (C.decodeAudioData)
                C.decodeAudioData(this.Nd, function (t) {
                    var i, s, h;
                    if (o.ca = t, o.Nd = null, ha(o.xk) || z)
                        ha(o.tj) || ((i = o.tj.bf).normalize = o.Iq, i.buffer = t);
                    else if (o.Eg.length) {
                        for (i = 0, s = o.Eg.length; i < s; i++)
                            if (t = o.Eg[i], (h = new R(o, t.Mr)).Pk(!0), void 0 === t.Kq || (t.ka = q.Uj(t.Kq), t.ka)) {
                                if (t.ka) {
                                    var e = Ua(t.ka.x, t.ka.y, -t.ka.j.gb(), Y, H, !0), n = Ua(t.ka.x, t.ka.y, -t.ka.j.gb(), Y, H, !1);
                                    h.Cn(e, n, Ka(t.ka.m - t.ka.j.gb()), t.vm, t.Zm, t.bn), h.li(t.ka);
                                } else
                                    h.Cn(t.x, t.y, t.zu, t.vm, t.Zm, t.bn);
                                h.play(o.Um, o.Vn, o.Mk), o.wk && h.pause(), U.push(h);
                            }
                        A(o.Eg);
                    } else
                        (h = new R(o, o.xk || '')).play(o.Um, o.Vn, o.Mk), o.wk && h.pause(), U.push(h);
                }, function () {
                    o.Gj = !0;
                });
            else if (this.ca = C.createBuffer(this.Nd, !1), this.Nd = null, ha(this.xk) || z)
                ha(this.tj) || ((t = this.tj.bf).normalize = this.Iq, t.buffer = this.ca);
            else {
                var t = new R(this, this.xk);
                t.play(this.Um, this.Vn, this.Mk), this.wk && t.pause(), U.push(t);
            }
        }
    }, l.prototype.Op = function () {
        switch (this.U) {
        case 0:
            var t = 4 <= this.ca.readyState;
            return t && (this.Wn = !0), t || this.Wn;
        case 1:
            return !!this.Nd || !!this.ca;
        case 2:
        case 3:
            return !0;
        }
        return !1;
    }, l.prototype.cx = function () {
        switch (this.U) {
        case 0:
            return this.Op();
        case 1:
            return !!this.ca;
        case 2:
        case 3:
            return !0;
        }
        return !1;
    }, l.prototype.Rw = function () {
        switch (this.U) {
        case 0:
            return !!this.ca.error;
        case 1:
            return this.Gj;
        }
        return !1;
    }, R.prototype.qf = function () {
        switch (this.U) {
        case 0:
            return this.i.ended;
        case 1:
            return 1 === this.buffer.U ? !(!this.vd && !this.ta && this.i.loop || this.ic) && this.eg : this.i.ended;
        case 2:
            return this.eg;
        }
        return !0;
    }, R.prototype.Mu = function () {
        return !(!this.vd && !this.ta) || this.qf();
    }, R.prototype.Pk = function (t) {
        1 === F && (!this.Bd && t ? this.fb && (this.Xa || (this.Xa = C.createPanner(), this.Xa.panningModel = 'number' == typeof this.Xa.panningModel ? W : ["equalpower","HRTF","soundfield"][W], this.Xa.distanceModel = 'number' == typeof this.Xa.distanceModel ? Z : ["linear","inverse","exponential"][Z], this.Xa.refDistance = J, this.Xa.maxDistance = K, this.Xa.rolloffFactor = Q), this.fb.disconnect(), this.fb.connect(this.Xa), this.Xa.connect(a(this.tag)), this.Bd = !0) : this.Bd && !t && this.fb && (this.Xa.disconnect(), this.fb.disconnect(), this.fb.connect(a(this.tag)), this.Bd = !1));
    }, R.prototype.Cn = function (t, i, s, h, e, n) {
        this.Bd && 1 === F && (this.Xa.setPosition(t, i, 0), this.Xa.setOrientation(Math.cos(G(s)), Math.sin(G(s)), 0), this.Xa.coneInnerAngle = h, this.Xa.coneOuterAngle = e, this.Xa.coneOuterGain = n, this.Yq = t, this.Zq = i, this.Uq = s, this.Vq = h, this.Wq = e, this.Xq = n);
    }, R.prototype.li = function (t) {
        this.Bd && 1 === F && (this.Cb || (this.Cb = new j()), this.Cb.li(t));
    }, R.prototype.mb = function (t) {
        if (this.Bd && 1 === F && this.Cb && this.Cb.Wj() && this.hg()) {
            this.Cb.mb(t), t = this.Cb.ka;
            var i = Ua(t.x, t.y, -t.j.gb(), Y, H, !0), s = Ua(t.x, t.y, -t.j.gb(), Y, H, !1);
            this.Xa.setPosition(i, s, 0), void (i = 0) !== this.Cb.ka.m && (i = t.m - t.j.gb(), this.Xa.setOrientation(Math.cos(i), Math.sin(i), 0));
        }
    }, R.prototype.play = function (t, i, s, h) {
        var e = this.i;
        switch (this.Ad = t, this.volume = i, s = s || 0, h = h || 0, this.U) {
        case 0:
            if (1 !== e.playbackRate && (e.playbackRate = 1), e.volume !== i * X && (e.volume = i * X), e.loop !== t && (e.loop = t), e.muted && (e.muted = !1), e.currentTime !== s)
                try {
                    e.currentTime = s;
                } catch (t) {
                }
            o(this);
            break;
        case 1:
            if (this.muted = !1, (this.zg = 1) === this.buffer.U)
                this.fb.gain.value = i * X, this.vd || (this.i = C.createBufferSource(), this.i.buffer = this.buffer.ca, this.i.connect(this.fb)), this.i.onended = this.dn, this.cj = this.i, this.i.loop = t, this.eg = !1, 0 === s ? u(this.i, h) : f(this.i, s, this.mf(), h);
            else {
                if (1 !== e.playbackRate && (e.playbackRate = 1), e.loop !== t && (e.loop = t), e.volume = i * X, e.currentTime !== s)
                    try {
                        e.currentTime = s;
                    } catch (t) {
                    }
                o(this);
            }
            break;
        case 2:
            (!this.vd && this.ta || 0 !== s) && e.seekTo(s), e.play(), this.eg = !1;
            break;
        case 3:
            q.pb ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t);
        }
        this.playbackRate = 1, this.startTime = (this.ig ? q.Bb.Z : q.oe.Z) - s, this.ic = this.ta = this.vd = !1;
    }, R.prototype.stop = function () {
        switch (this.U) {
        case 0:
            this.i.paused || this.i.pause();
            break;
        case 1:
            1 === this.buffer.U ? i(this.i) : this.i.paused || this.i.pause();
            break;
        case 2:
            this.i.stop();
            break;
        case 3:
            q.pb && AppMobi.context.stopSound(this.src);
        }
        this.ta = !0, this.ic = !1;
    }, R.prototype.pause = function () {
        if (!(this.vd || this.ta || this.qf() || this.ic)) {
            switch (this.U) {
            case 0:
                this.i.paused || this.i.pause();
                break;
            case 1:
                1 === this.buffer.U ? (this.cc = this.nm(!0), this.Ad && (this.cc = this.cc % this.mf()), this.ic = !0, i(this.i)) : this.i.paused || this.i.pause();
                break;
            case 2:
                this.i.pause();
                break;
            case 3:
                q.pb && AppMobi.context.stopSound(this.src);
            }
            this.ic = !0;
        }
    }, R.prototype.mr = function () {
        if (!(this.vd || this.ta || this.qf()) && this.ic) {
            switch (this.U) {
            case 0:
                o(this);
                break;
            case 1:
                1 === this.buffer.U ? (this.i = C.createBufferSource(), this.i.buffer = this.buffer.ca, this.i.connect(this.fb), this.i.onended = this.dn, this.cj = this.i, this.i.loop = this.Ad, this.fb.gain.value = X * this.volume * this.zg, this.Bi(), this.startTime = (this.ig ? q.Bb.Z : q.oe.Z) - this.cc / (this.playbackRate || 0.001), f(this.i, this.cc, this.mf())) : o(this);
                break;
            case 2:
                this.i.play();
                break;
            case 3:
                q.pb && AppMobi.context.resumeSound(this.src);
            }
            this.ic = !1;
        }
    }, R.prototype.seek = function (t) {
        if (!(this.vd || this.ta || this.qf()))
            switch (this.U) {
            case 0:
                try {
                    this.i.currentTime = t;
                } catch (t) {
                }
                break;
            case 1:
                if (1 === this.buffer.U)
                    this.ic ? this.cc = t : (this.pause(), this.cc = t, this.mr());
                else
                    try {
                        this.i.currentTime = t;
                    } catch (t) {
                    }
                break;
            case 3:
                q.pb && AppMobi.context.seekSound(this.src, t);
            }
    }, R.prototype.cy = function (t) {
        1 === this.U && (this.Bd ? (this.Xa.disconnect(), this.Xa.connect(t)) : (this.fb.disconnect(), this.fb.connect(t)));
    }, R.prototype.mf = function () {
        var t = 0;
        switch (this.U) {
        case 0:
            void 0 !== this.i.duration && (t = this.i.duration);
            break;
        case 1:
            t = this.buffer.ca.duration;
            break;
        case 2:
            t = this.i.getDuration();
            break;
        case 3:
            q.pb && (t = AppMobi.context.getDurationSound(this.src));
        }
        return t;
    }, R.prototype.nm = function (t) {
        var i = this.mf(), s = 0;
        switch (this.U) {
        case 0:
            void 0 !== this.i.currentTime && (s = this.i.currentTime);
            break;
        case 1:
            if (1 === this.buffer.U) {
                if (this.ic)
                    return this.cc;
                s = (this.ig ? q.Bb.Z : q.oe.Z) - this.startTime;
            } else
                void 0 !== this.i.currentTime && (s = this.i.currentTime);
            break;
        case 3:
            q.pb && (s = AppMobi.context.getPlaybackTimeSound(this.src));
        }
        return t && (s *= this.playbackRate), !this.Ad && i < s && (s = i), s;
    }, R.prototype.hg = function () {
        return !(this.ic || this.vd || this.ta || this.qf());
    }, R.prototype.zy = function () {
        return !this.vd && !this.ta && !this.qf();
    }, R.prototype.Ly = function () {
        var t = this.volume * X;
        switch (isFinite(t) || (t = 0), this.U) {
        case 0:
            void 0 !== this.i.volume && this.i.volume !== t && (this.i.volume = t);
            break;
        case 1:
            1 === this.buffer.U ? this.fb.gain.value = t * this.zg : void 0 !== this.i.volume && this.i.volume !== t && (this.i.volume = t);
        }
    }, R.prototype.Bj = function (t) {
        switch (this.U) {
        case 0:
            this.i.muted !== !!t && (this.i.muted = !!t);
            break;
        case 1:
            1 === this.buffer.U ? (this.zg = t ? 0 : 1, this.fb.gain.value = X * this.volume * this.zg) : this.i.muted !== !!t && (this.i.muted = !!t);
        }
    }, R.prototype.uy = function () {
        this.lg = !0, this.Bj(this.lg || this.Kh);
    }, R.prototype.xr = function (t) {
        this.Kh = !!t, this.Bj(this.lg || this.Kh);
    }, R.prototype.vy = function (t) {
        this.playbackRate = t, this.Bi();
    }, R.prototype.Bi = function () {
        var t = this.playbackRate;
        switch (this.ig && (t *= q.Jf), this.U) {
        case 0:
            this.i.playbackRate !== t && (this.i.playbackRate = t);
            break;
        case 1:
            1 === this.buffer.U ? this.i.playbackRate.value !== t && (this.i.playbackRate.value = t) : this.i.playbackRate !== t && (this.i.playbackRate = t);
        }
    }, R.prototype.xy = function (t) {
        switch (this.U) {
        case 0:
            t ? this.hg() ? (this.Cc = !0, this.i.pause()) : this.Cc = !1 : this.Cc && (this.i.play(), this.Cc = !1);
            break;
        case 1:
            t ? this.hg() ? (this.Cc = !0, 1 === this.buffer.U ? (this.cc = this.nm(!0), this.Ad && (this.cc = this.cc % this.mf()), i(this.i)) : this.i.pause()) : this.Cc = !1 : this.Cc && (1 === this.buffer.U ? (this.i = C.createBufferSource(), this.i.buffer = this.buffer.ca, this.i.connect(this.fb), this.i.onended = this.dn, this.cj = this.i, this.i.loop = this.Ad, this.fb.gain.value = X * this.volume * this.zg, this.Bi(), this.startTime = (this.ig ? q.Bb.Z : q.oe.Z) - this.cc / (this.playbackRate || 0.001), f(this.i, this.cc, this.mf())) : this.i.play(), this.Cc = !1);
            break;
        case 2:
            t ? this.hg() ? (this.i.pause(), this.Cc = !0) : this.Cc = !1 : this.Cc && (this.Cc = !1, this.i.play());
        }
    }, P.S = function (t) {
        if (this.type = t, q = this.b = t.b, (O = this).jc = null, this.Ph = -600, this.b.Jh && (ht = !0), !(this.b.pg || this.b.Dh && (this.b.Bm || this.b.Xj)) || this.b.Zj || this.b.pa || this.b.Mp || ht || (it = !0), C = null, 'undefined' != typeof AudioContext ? (F = 1, C = new AudioContext()) : 'undefined' != typeof webkitAudioContext && (F = 1, C = new webkitAudioContext()), this.b.pg && C && (C.close && C.close(), 'undefined' != typeof AudioContext ? C = new AudioContext() : 'undefined' != typeof webkitAudioContext && (C = new webkitAudioContext())), 1 !== F && (this.b.vc && void 0 !== window.Media ? F = 2 : this.b.Np && (F = 3)), 2 === F && (-1 < (t = (D = location.href).lastIndexOf('/')) && (D = D.substr(0, t + 1)), D = D.replace('file://', '')), this.b.hx && this.b.ix && 'undefined' == typeof Audio)
            alert('It looks like you\'re using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed.'), this.b.Xe(this);
        else {
            if (this.b.pb)
                N = this.b.Dh;
            else
                try {
                    N = !!new Audio().canPlayType('audio/ogg; codecs="vorbis"') && !this.b.$j;
                } catch (t) {
                    N = !1;
                }
            this.b.If(this);
        }
    };
    var rt = P.S.prototype;
    rt.D = function () {
        this.b.Rf = this, _ = this.A[0], this.fe = this.A[1], this.Sx = 0 !== this.A[2], this.pk = 0, W = this.A[3], Z = this.A[4], this.Ph = -this.A[5], J = this.A[6], K = this.A[7], Q = this.A[8], this.jc = new j();
        var t = this.b.G || this.b.width, i = this.b.F || this.b.height;
        1 === F && (C.listener.setPosition(t / 2, i / 2, this.Ph), C.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function (t, i) {
            $ && $.disconnect(), tt = i.toLowerCase(), ($ = C.createMediaStreamSource(t)).connect(a(tt));
        }), this.b.No(function (t) {
            O.Lx(t);
        });
        var s = this;
        this.b.Du(function (t) {
            s.Dx(t);
        });
    }, rt.Dx = function (t) {
        var i, s, h;
        for (i = 0, s = U.length; i < s; i++)
            (h = U[i]).Cb && h.Cb.ka === t && (h.Cb.ka = null, h.Bd && h.hg() && h.Ad && h.stop());
        this.jc.ka === t && (this.jc.ka = null);
    }, rt.Fb = function () {
        var t, i, s, h, e, n, o = {
                silent: z,
                masterVolume: X,
                listenerZ: this.Ph,
                listenerUid: this.jc.Wj() ? this.jc.ka.uid : -1,
                playing: [],
                effects: {}
            }, r = o.playing;
        for (t = 0, i = U.length; t < i; t++)
            !(s = U[t]).zy() || 3 === this.fe || s.yd && 1 === this.fe || !s.yd && 2 === this.fe || (h = s.nm(), s.Ad && (h %= s.mf()), h = {
                tag: s.tag,
                buffersrc: s.buffer.src,
                is_music: s.yd,
                playbackTime: h,
                volume: s.volume,
                looping: s.Ad,
                muted: s.lg,
                playbackRate: s.playbackRate,
                paused: s.ic,
                resume_position: s.cc
            }, s.Bd && (h.pan = {}, n = h.pan, s.Cb && s.Cb.Wj() ? n.objUid = s.Cb.ka.uid : (n.x = s.Yq, n.y = s.Zq, n.a = s.Uq), n.ia = s.Vq, n.oa = s.Wq, n.og = s.Xq), r.push(h));
        for (e in (r = o.effects, nt))
            if (nt.hasOwnProperty(e)) {
                for (s = [], t = 0, i = nt[e].length; t < i; t++)
                    s.push({
                        type: nt[e][t].type,
                        params: nt[e][t].Oa
                    });
                r[e] = s;
            }
        return o;
    };
    var at = [];
    rt.Qb = function (t) {
        var i = t.silent;
        X = t.masterVolume, this.Ph = t.listenerZ, this.jc.li(null), -1 !== (l = t.listenerUid) && (this.jc.ik = l, at.push(this.jc));
        var s, h, e, n, o, r, a, c, p, u, f, l = t.playing;
        if (3 !== this.fe)
            for (s = 0, h = U.length; s < h; s++)
                (p = U[s]).yd && 1 === this.fe || !p.yd && 2 === this.fe || p.stop();
        for (o in nt)
            if (nt.hasOwnProperty(o))
                for (s = 0, h = nt[o].length; s < h; s++)
                    nt[o][s].remove();
        for (o in (Ya(nt), t.effects))
            if (t.effects.hasOwnProperty(o))
                for (s = 0, h = (r = t.effects[o]).length; s < h; s++)
                    switch (e = r[s].type, u = r[s].params, e) {
                    case 'filter':
                        M(o, new b(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case 'delay':
                        M(o, new d(u[0], u[1], u[2]));
                        break;
                    case 'convolve':
                        e = u[2], (p = this.Nj(e, !1)).ca ? e = new g(p.ca, u[0], u[1], e) : (e = new g(null, u[0], u[1], e), p.Iq = u[0], p.tj = e), M(o, e);
                        break;
                    case 'flanger':
                        M(o, new y(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case 'phaser':
                        M(o, new v(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case 'gain':
                        M(o, new m(u[0]));
                        break;
                    case 'tremolo':
                        M(o, new w(u[0], u[1]));
                        break;
                    case 'ringmod':
                        M(o, new k(u[0], u[1]));
                        break;
                    case 'distortion':
                        M(o, new x(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case 'compressor':
                        M(o, new T(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case 'analyser':
                        M(o, new E(u[0], u[1]));
                    }
        for (s = 0, h = l.length; s < h; s++)
            3 === this.fe || (e = (t = l[s]).buffersrc, n = t.is_music, o = t.tag, r = t.playbackTime, a = t.looping, c = t.volume, f = (u = t.pan) && u.hasOwnProperty('objUid') ? u.objUid : -1, n && 1 === this.fe) || !n && 2 === this.fe || ((p = this.Oj(e, o, n, a, c)) ? (p.cc = t.resume_position, p.Pk(!!u), p.play(a, c, r), p.Bi(), p.Ly(), p.Bj(p.lg || p.Kh), t.paused && p.pause(), t.muted && p.uy(), p.Bj(p.lg || p.Kh), u && (-1 !== f ? (p.Cb = p.Cb || new j(), p.Cb.ik = f, at.push(p.Cb)) : p.Cn(u.x, u.y, u.a, u.ia, u.oa, u.og))) : ((p = this.Nj(e, n)).Mk = r, p.wk = t.paused, u && (-1 !== f ? p.Eg.push({
                Kq: f,
                vm: u.ia,
                Zm: u.oa,
                bn: u.og,
                Mr: o
            }) : p.Eg.push({
                x: u.x,
                y: u.y,
                zu: u.a,
                vm: u.ia,
                Zm: u.oa,
                bn: u.og,
                Mr: o
            }))));
        if (i && !z) {
            for (s = 0, h = U.length; s < h; s++)
                U[s].xr(!0);
            z = !0;
        } else if (!i && z) {
            for (s = 0, h = U.length; s < h; s++)
                U[s].xr(!1);
            z = !1;
        }
    }, rt.Kd = function () {
        var t, i, s, h;
        for (t = 0, i = at.length; t < i; t++)
            s = at[t], h = this.b.Uj(s.ik), s.li(h), s.ik = -1, h && (Y = h.x, H = h.y);
        A(at);
    }, rt.Lx = function (t) {
        if (!this.Sx) {
            var i, s;
            for (!t && C && C.resume && (C.resume(), V = !1), i = 0, s = U.length; i < s; i++)
                U[i].xy(t);
            t && C && C.suspend && (C.suspend(), V = !0);
        }
    }, rt.mb = function () {
        var t, i, s, h, e, n = this.b.De;
        for (t = 0, i = U.length; t < i; t++)
            (s = U[t]).mb(n), 0 !== _ && s.Bi();
        for (h in nt)
            if (nt.hasOwnProperty(h))
                for (t = 0, i = (s = nt[h]).length; t < i; t++)
                    (e = s[t]).mb && e.mb();
        1 === F && this.jc.Wj() && (this.jc.mb(n), Y = this.jc.ka.x, H = this.jc.ka.y, C.listener.setPosition(this.jc.ka.x, this.jc.ka.y, this.Ph));
    };
    var ct = [];
    rt.wy = function (t) {
        var i, s, h, e, n, o = 0;
        for (i = 0, s = t.length; i < s; ++i)
            e = (h = t[i])[0], h = 2 * h[1], ((n = 4 < e.length && '.ogg' === e.substr(e.length - 4)) && N || !n && !N) && (ct.push({
                filename: e,
                size: h,
                ka: null
            }), o += h);
        return o;
    }, rt.By = function () {
        var t, i, s, h;
        for (t = 0, i = ct.length; t < i; ++t)
            s = ct[t], h = this.b.rh + s.filename, s.ka = this.Nj(h, !1);
    }, rt.xw = function () {
        var t, i, s, h = 0;
        for (t = 0, i = ct.length; t < i; ++t)
            (s = ct[t]).ka.cx() || s.ka.Rw() || this.b.pa || this.b.Xj ? h += s.size : s.ka.Op() && (h += Math.floor(s.size / 2));
        return h;
    }, rt.fy = function () {
        var t, i, s, h;
        for (s = t = 0, i = I.length; t < i; ++t)
            h = I[t], (I[s] = h).yd ? h.ey() : ++s;
        I.length = s;
    }, rt.Nj = function (t, i) {
        var s, h, e, n = null;
        for (s = 0, h = I.length; s < h; s++)
            if ((e = I[s]).src === t) {
                n = e;
                break;
            }
        return n || (ht && i && this.fy(), n = new l(t, i), I.push(n)), n;
    }, rt.Oj = function (t, i, s, h, e) {
        var n, o, r;
        for (n = 0, o = U.length; n < o; n++)
            if ((r = U[n]).src === t && (r.Mu() || s))
                return r.tag = i, r;
        return (t = this.Nj(t, s)).ca ? (r = new R(t, i), U.push(r), r) : ('<preload>' !== i && (t.xk = i, t.Um = h, t.Vn = e), null);
    };
    var pt = [];
    s.prototype.Si = function (t) {
        return mb(L, t);
    }, s.prototype.Xs = function (t) {
        var i;
        for (S(t), t = 0, i = pt.length; t < i; t++)
            if (pt[t].hg())
                return !0;
        return !1;
    }, P.c = new s(), h.prototype.Play = function (t, i, s, h) {
        !z && (s = r(s), B = this.Oj(this.b.rh + t[0] + (N ? '.ogg' : '.m4a'), h, t[1], 0 !== i, s)) && (B.Pk(!1), B.play(0 !== i, s, 0, this.pk), this.pk = 0);
    }, h.prototype.Lt = function (t, i, s, h, e) {
        !z && (h = r(h), B = this.Oj(this.b.rh + i.toLowerCase() + (N ? '.ogg' : '.m4a'), e, 1 === t, 0 !== s, h)) && (B.Pk(!1), B.play(0 !== s, h, 0, this.pk), this.pk = 0);
    }, h.prototype.Nt = function (t) {
        if (!z) {
            var i = t[1];
            t = this.b.rh + t[0] + (N ? '.ogg' : '.m4a'), 3 === F ? this.b.pb ? AppMobi.context.loadSound(t) : AppMobi.player.loadSound(t) : 2 !== F && this.Oj(t, '<preload>', i, !1);
        }
    }, h.prototype.eu = function (t, i) {
        var s, h;
        for (S(t), i < 0 && (i = 0), s = 0, h = pt.length; s < h; s++)
            pt[s].vy(i);
    }, h.prototype.Fo = function (t) {
        var i;
        for (S(t), t = 0, i = pt.length; t < i; t++)
            pt[t].stop();
    }, h.prototype.pu = function () {
        var t, i;
        for (t = 0, i = U.length; t < i; t++)
            U[t].stop();
    }, h.prototype.du = function (t, i) {
        var s, h;
        for (S(t), s = 0, h = pt.length; s < h; s++)
            0 === i ? pt[s].pause() : pt[s].mr();
    }, P.e = new h(), P.g = new function () {
    }();
}(), function () {
    function i() {
        r && a && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function (t) {
            c.Jx(t);
        });
    }
    function t() {
    }
    function s() {
    }
    function h(t) {
        console && console.warn && console.warn('Fullscreen request failed: ', t), u.setSize(window.innerWidth, window.innerHeight);
    }
    function e() {
    }
    var n = vc.prototype;
    n.W = function (t) {
        this.X = t, this.b = t.b;
    };
    var o = n.W.prototype, r = !(o.D = function () {
        }), a = !1;
    document.addEventListener('DOMContentLoaded', function () {
        if (window.C2_RegisterSW && navigator.serviceWorker) {
            var t = document.createElement('script');
            t.onload = function () {
                r = !0, i();
            }, t.src = 'offlineClient.js', document.head.appendChild(t);
        }
    });
    var c = null;
    o.Oq = function () {
        a = !0, i();
    }, n.S = function (t) {
        this.type = t, this.b = t.b;
    }, (o = n.S.prototype).D = function () {
        var i = this;
        window.addEventListener('resize', function () {
            i.b.trigger(vc.prototype.c.Bt, i);
        }), c = this, void 0 !== navigator.onLine && (window.addEventListener('online', function () {
            i.b.trigger(vc.prototype.c.yt, i);
        }), window.addEventListener('offline', function () {
            i.b.trigger(vc.prototype.c.wt, i);
        })), this.b.pb || (document.addEventListener('appMobi.device.update.available', function () {
            i.b.trigger(vc.prototype.c.Wi, i);
        }), document.addEventListener('backbutton', function () {
            i.b.trigger(vc.prototype.c.Ri, i);
        }), document.addEventListener('menubutton', function () {
            i.b.trigger(vc.prototype.c.vo, i);
        }), document.addEventListener('searchbutton', function () {
            i.b.trigger(vc.prototype.c.Ct, i);
        }), document.addEventListener('tizenhwkey', function (t) {
            switch (t.keyName) {
            case 'back':
                !i.b.trigger(vc.prototype.c.Ri, i) && window.tizen && window.tizen.application.getCurrentApplication().exit();
                break;
            case 'menu':
                i.b.trigger(vc.prototype.c.vo, i) || t.preventDefault();
            }
        })), this.b.$j && 'undefined' != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener('backrequested', function (t) {
            i.b.trigger(vc.prototype.c.Ri, i) && (t.handled = !0);
        }) : this.b.Qp && WinJS.Application && (WinJS.Application.onbackclick = function () {
            return !!i.b.trigger(vc.prototype.c.Ri, i);
        }), this.b.No(function (t) {
            t ? i.b.trigger(vc.prototype.c.zt, i) : i.b.trigger(vc.prototype.c.At, i);
        });
    }, o.Jx = function (t) {
        'downloading-update' === (t = t.data.type) ? this.b.trigger(vc.prototype.c.Ao, this) : 'update-ready' === t || 'update-pending' === t ? this.b.trigger(vc.prototype.c.Wi, this) : 'offline-ready' === t && this.b.trigger(vc.prototype.c.xt, this);
    }, t.prototype.yt = function () {
        return !0;
    }, t.prototype.wt = function () {
        return !0;
    }, t.prototype.Wi = function () {
        return !0;
    }, t.prototype.At = function () {
        return !0;
    }, t.prototype.zt = function () {
        return !0;
    }, t.prototype.Bt = function () {
        return !0;
    }, t.prototype.Ri = function () {
        return !0;
    }, t.prototype.vo = function () {
        return !0;
    }, t.prototype.Ct = function () {
        return !0;
    }, t.prototype.Ao = function () {
        return !0;
    }, t.prototype.Wi = function () {
        return !0;
    }, t.prototype.xt = function () {
        return !0;
    }, n.c = new t();
    var p = !0, u = null;
    s.prototype.St = function (t) {
        this.b.pa ? fa('[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored') : (2 <= t && (t += 1), 6 === t && (t = 2), this.b.gx ? this.b.$w ? debuggerFullscreen(!0) : !this.b.gg && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.b.gg = !0, this.b.Fe = 2 <= t ? t : 0) : document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement || (this.b.Fe = 2 <= t ? t : 0, t = document.documentElement, p && (p = !1, u = this.b, t.addEventListener('mozfullscreenerror', h), t.addEventListener('webkitfullscreenerror', h), t.addEventListener('MSFullscreenError', h), t.addEventListener('fullscreenerror', h)), t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.webkitRequestFullScreen && ('undefined' != typeof Element && void 0 !== Element.ALLOW_KEYBOARD_INPUT ? t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : t.webkitRequestFullScreen())));
    }, s.prototype.ys = function (t, i) {
        'undefined' != typeof console && (0 === t && console.log && console.log(i.toString()), 1 === t && console.warn && console.warn(i.toString()), 2 === t && console.error && console.error(i.toString()));
    }, n.e = new s(), e.prototype.Pt = function (t, i) {
        if (this.b.pa)
            t.la('');
        else {
            var s = RegExp('[?&]' + i + '=([^&]*)').exec(window.location.search);
            s ? t.la(decodeURIComponent(s[1].replace(/\+/g, ' '))) : t.la('');
        }
    }, n.g = new e();
}(), function () {
    function t() {
    }
    function i() {
    }
    function s() {
    }
    var h = wc.prototype;
    h.W = function (t) {
        this.X = t, this.b = t.b;
    }, h.W.prototype.D = function () {
    }, h.S = function (t) {
        this.type = t, this.b = t.b;
    };
    var e = h.S.prototype;
    e.D = function () {
        this.dd = {}, this.rg = 0;
    }, e.Fb = function () {
        return this.dd;
    }, e.Qb = function (t) {
        for (var i in (this.dd = t, this.rg = 0, this.dd))
            this.dd.hasOwnProperty(i) && this.rg++;
    }, t.prototype.Js = function (t) {
        return this.dd.hasOwnProperty(t);
    }, t.prototype.nl = function () {
        return 0 === this.rg;
    }, h.c = new t(), i.prototype.js = function (t, i) {
        this.dd.hasOwnProperty(t) || this.rg++, this.dd[t] = i;
    }, i.prototype.co = function () {
        Ya(this.dd), this.rg = 0;
    }, h.e = new i(), s.prototype.Hs = function (t, i) {
        this.dd.hasOwnProperty(i) ? t.Kg(this.dd[i]) : t.H(0);
    }, s.prototype.Zs = function (t) {
        t.H(this.rg);
    }, s.prototype.ll = function (t) {
        t.la(JSON.stringify({
            c2dictionary: !0,
            data: this.dd
        }));
    }, h.g = new s();
}(), function () {
    function t() {
        this.name = '', this.Hg = 0, this.Oa = [];
    }
    function r() {
        return ++a === o.length && o.push(new t()), o[a];
    }
    function e() {
        return a < 0 ? null : o[a];
    }
    function i() {
    }
    function s() {
    }
    function h() {
    }
    var n = sc.prototype;
    n.W = function (t) {
        this.X = t, this.b = t.b;
    }, n.W.prototype.D = function () {
    }, n.S = function (t) {
        this.type = t, this.b = t.b;
    };
    var o = [], a = -1;
    n.S.prototype.D = function () {
        var o = this;
        window.c2_callFunction = function (t, i) {
            var s, h, e, n = r();
            if (n.name = t.toLowerCase(), n.Hg = 0, i)
                for (n.Oa.length = i.length, s = 0, h = i.length; s < h; ++s)
                    e = i[s], n.Oa[s] = 'number' == typeof e || 'string' == typeof e ? e : 'boolean' == typeof e && e ? 1 : 0;
            else
                A(n.Oa);
            return o.b.trigger(sc.prototype.c.Ui, o, n.name), a--, n.Hg;
        };
    }, i.prototype.Ui = function (t) {
        var i = e();
        return !!i && mb(t, i.name);
    }, i.prototype.ts = function (t, i, s) {
        var h = e();
        return !!h && (!((t = ta(t)) < 0 || t >= h.Oa.length) && ic(h.Oa[t], i, s));
    }, n.c = new i(), s.prototype.CallFunction = function (t, i) {
        var s = r();
        s.name = t.toLowerCase(), s.Hg = 0, Da(s.Oa, i), this.b.trigger(sc.prototype.c.Ui, this, s.name), a--;
    }, s.prototype.gu = function (t) {
        var i = e();
        i && (i.Hg = t);
    }, n.e = new s(), h.prototype.Ft = function (t, i) {
        i = ta(i);
        var s = e();
        s && 0 <= i && i < s.Oa.length ? t.Kg(s.Oa[i]) : t.H(0);
    }, h.prototype.bo = function (t, i) {
        var s, h, e = r();
        for (e.name = i.toLowerCase(), e.Hg = 0, A(e.Oa), s = 2, h = arguments.length; s < h; s++)
            e.Oa.push(arguments[s]);
        this.b.trigger(sc.prototype.c.Ui, this, e.name), a--, t.Kg(e.Hg);
    }, n.g = new h();
}(), function () {
    function t() {
    }
    var i = xc.prototype;
    i.W = function (t) {
        this.X = t, this.b = t.b;
    }, i.W.prototype.D = function () {
    }, i.S = function (t) {
        this.type = t, this.b = t.b, this.qg = Array(256), this.Ci = Array(256), this.me = 0;
    };
    var s = i.S.prototype;
    s.D = function () {
        var i = this;
        this.b.pa || (jQuery(document).keydown(function (t) {
            i.Ex(t);
        }), jQuery(document).keyup(function (t) {
            i.Fx(t);
        }));
    };
    var e = [32,33,34,35,36,37,38,39,40,44];
    s.Ex = function (t) {
        var i = !1;
        if (window != window.top && -1 < e.indexOf(t.which) && (t.preventDefault(), i = !0, t.stopPropagation()), this.qg[t.which])
            this.Ci[t.which] && !i && t.preventDefault();
        else {
            this.qg[t.which] = !0, this.me = t.which, this.b.xc = !0, this.b.trigger(xc.prototype.c.ht, this);
            var s = this.b.trigger(xc.prototype.c.qt, this), h = this.b.trigger(xc.prototype.c.tt, this);
            this.b.xc = !1, (s || h) && (this.Ci[t.which] = !0, i || t.preventDefault());
        }
    }, s.Fx = function (t) {
        this.qg[t.which] = !1, this.me = t.which, this.b.xc = !0, this.b.trigger(xc.prototype.c.no, this);
        var i = this.b.trigger(xc.prototype.c.ro, this), s = this.b.trigger(xc.prototype.c.qo, this);
        this.b.xc = !1, (i || s || this.Ci[t.which]) && (this.Ci[t.which] = !0, t.preventDefault());
    }, s.Cg = function () {
        var t;
        for (t = 0; t < 256; ++t)
            if (this.qg[t]) {
                this.qg[t] = !1, this.me = t, this.b.trigger(xc.prototype.c.no, this);
                var i = this.b.trigger(xc.prototype.c.ro, this), s = this.b.trigger(xc.prototype.c.qo, this);
                (i || s) && (this.Ci[t] = !0);
            }
    }, s.Fb = function () {
        return { triggerKey: this.me };
    }, s.Qb = function (t) {
        this.me = t.triggerKey;
    }, t.prototype.Rs = function (t) {
        return this.qg[t];
    }, t.prototype.qt = function (t) {
        return t === this.me;
    }, t.prototype.ht = function () {
        return !0;
    }, t.prototype.no = function () {
        return !0;
    }, t.prototype.ro = function (t) {
        return t === this.me;
    }, t.prototype.tt = function (t) {
        return t === this.me;
    }, t.prototype.qo = function (t) {
        return t === this.me;
    }, i.c = new t(), i.e = new function () {
    }(), i.g = new function () {
    }();
}(), function () {
    function v(t, i, s, h, e, n, o, r, a, c) {
        t.save(), t.fillStyle = i;
        var p = n % h;
        (i = e % s) < 0 && (i += s), p < 0 && (p += h), t.translate(i + a, p + c), t.fillRect(e - i - a, n - p - c, o, r), t.restore();
    }
    var t = Y.prototype;
    t.W = function (t) {
        this.X = t, this.b = t.b;
    };
    var i = t.W.prototype;
    i.D = function () {
        this.B || (this.q = new Image(), this.q.Ql = this.Yk, this.b.gl(this.q, this.wi), this.Hi = this.Ki = this.Ji = this.Ii = this.Xg = this.r = this.So = this.Pr = this.nr = this.hq = this.em = null);
    }, i.ei = function () {
        this.B || (this.Hi = this.Ki = this.Ji = this.Ii = this.Xg = this.r = null);
    }, i.fi = function () {
        this.B || !this.d.length || this.r || (this.r = this.b.k.yc(this.q, !0, this.b.qa, this.Ue));
    }, i.Ai = function () {
        this.B || this.d.length || !this.b.k || (this.b.k.deleteTexture(this.r), this.b.k.deleteTexture(this.Xg), this.b.k.deleteTexture(this.Ii), this.b.k.deleteTexture(this.Ji), this.b.k.deleteTexture(this.Ki), this.b.k.deleteTexture(this.Hi), this.Hi = this.Ki = this.Ji = this.Ii = this.Xg = this.r = null);
    }, i.Gd = function (t, i, s, h) {
        var e = document.createElement('canvas');
        return s -= t, h -= i, e.width = s, e.height = h, e.getContext('2d').drawImage(this.q, t, i, s, h, 0, 0, s, h), e;
    }, i.Tu = function (t, i, s, h) {
        var e = this.q.width, n = this.q.height, o = e - i, r = n - h;
        if (this.b.k) {
            if (!this.Xg) {
                var a = this.b.k, c = this.b.qa, p = this.Ue;
                t < o && s < r && (this.Xg = a.yc(this.Gd(t, s, o, r), !0, c, p)), 0 < t && s < r && (this.Ii = a.yc(this.Gd(0, s, t, r), !0, c, p, 'repeat-y')), 0 < i && s < r && (this.Ji = a.yc(this.Gd(o, s, e, r), !0, c, p, 'repeat-y')), 0 < s && t < o && (this.Ki = a.yc(this.Gd(t, 0, o, s), !0, c, p, 'repeat-x')), 0 < h && t < o && (this.Hi = a.yc(this.Gd(t, r, o, n), !0, c, p, 'repeat-x'));
            }
        } else
            this.em || (a = this.b.Ba, t < o && s < r && (this.em = a.createPattern(this.Gd(t, s, o, r), 'repeat')), 0 < t && s < r && (this.hq = a.createPattern(this.Gd(0, s, t, r), 'repeat')), 0 < i && s < r && (this.nr = a.createPattern(this.Gd(o, s, e, r), 'repeat')), 0 < s && t < o && (this.Pr = a.createPattern(this.Gd(t, 0, o, s), 'repeat')), 0 < h && t < o && (this.So = a.createPattern(this.Gd(t, r, o, n), 'repeat')));
    }, t.S = function (t) {
        this.type = t, this.b = t.b;
    }, (i = t.S.prototype).D = function () {
        this.Om = this.A[0], this.wn = this.A[1], this.Ln = this.A[2], this.Hl = this.A[3], this.Cj = this.A[4], this.fill = this.A[5], this.visible = 0 === this.A[6], this.qr = 0 !== this.A[8], this.Bc ? this.de.set(0, 0, 0, 0) : this.de = new wa(0, 0, 0, 0), this.b.k && !this.type.r && (this.type.r = this.b.k.yc(this.type.q, !1, this.b.qa, this.type.Ue)), this.type.Tu(this.Om, this.wn, this.Ln, this.Hl);
    }, i.ed = function (t) {
        var i = this.type.q, s = this.Om, h = this.wn, e = this.Ln, n = this.Hl, o = i.width, r = i.height, a = o - h, c = r - n;
        t.globalAlpha = this.opacity, t.save();
        var p = this.x, u = this.y, f = this.width, l = this.height;
        this.b.Ac && (p = Math.round(p), u = Math.round(u));
        var b = -(this.Nb * this.width), d = -(this.Ob * this.height), g = b % o, y = d % r;
        g < 0 && (g += o), y < 0 && (y += r), t.translate(p + g, u + y), o = b - g, d -= y, y = this.qr ? 1 : 0, 0 < s && 0 < e && t.drawImage(i, 0, 0, s + y, e + y, o, d, s + y, e + y), 0 < h && 0 < e && t.drawImage(i, a - y, 0, h + y, e + y, o + f - h - y, d, h + y, e + y), 0 < h && 0 < n && t.drawImage(i, a - y, c - y, h + y, n + y, o + f - h - y, d + l - n - y, h + y, n + y), 0 < s && 0 < n && t.drawImage(i, 0, c - y, s + y, n + y, o, d + l - n - y, s + y, n + y), 0 === this.Cj ? (y = 2 === this.fill ? 0 : y, 0 < s && e < c && v(t, this.type.hq, s, c - e, o, d + e, s + y, l - e - n, 0, 0), 0 < h && e < c && v(t, this.type.nr, h, c - e, o + f - h - y, d + e, h + y, l - e - n, y, 0), 0 < e && s < a && v(t, this.type.Pr, a - s, e, o + s, d, f - s - h, e + y, 0, 0), 0 < n && s < a && v(t, this.type.So, a - s, n, o + s, d + l - n - y, f - s - h, n + y, 0, y)) : 1 === this.Cj && (0 < s && e < c && 0 < l - e - n && t.drawImage(i, 0, e, s, c - e, o, d + e, s, l - e - n), 0 < h && e < c && 0 < l - e - n && t.drawImage(i, a, e, h, c - e, o + f - h, d + e, h, l - e - n), 0 < e && s < a && 0 < f - s - h && t.drawImage(i, s, 0, a - s, e, o + s, d, f - s - h, e), 0 < n && s < a && 0 < f - s - h && t.drawImage(i, s, c, a - s, n, o + s, d + l - n, f - s - h, n)), e < c && s < a && (0 === this.fill ? v(t, this.type.em, a - s, c - e, o + s, d + e, f - s - h, l - e - n, 0, 0) : 1 === this.fill && 0 < f - s - h && 0 < l - e - n && t.drawImage(i, s, e, a - s, c - e, o + s, d + e, f - s - h, l - e - n)), t.restore();
    }, i.Td = function (t, i, s, h, e, n, o, r, a, c) {
        t.Rb(i);
        var p = this.de;
        p.left = s / i.bd, p.top = h / i.ad, p.right = (s + e) / i.bd, p.bottom = (h + n) / i.ad, t.Sc(o, r, o + a, r, o + a, r + c, o, r + c, p);
    }, i.xi = function (t, i, s, h, e, n, o, r) {
        t.Rb(i);
        var a = this.de;
        a.left = -o / i.bd, a.top = -r / i.ad, a.right = (e - o) / i.bd, a.bottom = (n - r) / i.ad, t.Sc(s, h, s + e, h, s + e, h + n, s, h + n, a);
    }, i.Ce = function (t) {
        this.Kb(t);
    }, i.Kb = function (t) {
        var i = this.Om, s = this.wn, h = this.Ln, e = this.Hl, n = this.type.q.width - s, o = this.type.q.height - e;
        t.Se(this.opacity);
        var r = (a = this.Xb).Fa, a = a.Ga, c = this.width, p = this.height;
        this.b.Ac && (r = Math.round(r), a = Math.round(a));
        var u = this.qr ? 1 : 0;
        0 < i && 0 < h && this.Td(t, this.type.r, 0, 0, i + u, h + u, r, a, i + u, h + u), 0 < s && 0 < h && this.Td(t, this.type.r, n - u, 0, s + u, h + u, r + c - s - u, a, s + u, h + u), 0 < s && 0 < e && this.Td(t, this.type.r, n - u, o - u, s + u, e + u, r + c - s - u, a + p - e - u, s + u, e + u), 0 < i && 0 < e && this.Td(t, this.type.r, 0, o - u, i + u, e + u, r, a + p - e - u, i + u, e + u), 0 === this.Cj ? (u = 2 === this.fill ? 0 : u, 0 < i && h < o && this.xi(t, this.type.Ii, r, a + h, i + u, p - h - e, 0, 0), 0 < s && h < o && this.xi(t, this.type.Ji, r + c - s - u, a + h, s + u, p - h - e, u, 0), 0 < h && i < n && this.xi(t, this.type.Ki, r + i, a, c - i - s, h + u, 0, 0), 0 < e && i < n && this.xi(t, this.type.Hi, r + i, a + p - e - u, c - i - s, e + u, 0, u)) : 1 === this.Cj && (0 < i && h < o && this.Td(t, this.type.r, 0, h, i, o - h, r, a + h, i, p - h - e), 0 < s && h < o && this.Td(t, this.type.r, n, h, s, o - h, r + c - s, a + h, s, p - h - e), 0 < h && i < n && this.Td(t, this.type.r, i, 0, n - i, h, r + i, a, c - i - s, h), 0 < e && i < n && this.Td(t, this.type.r, i, o, n - i, e, r + i, a + p - e, c - i - s, e)), h < o && i < n && (0 === this.fill ? this.xi(t, this.type.Xg, r + i, a + h, c - i - s, p - h - e, 0, 0) : 1 === this.fill && this.Td(t, this.type.r, i, h, n - i, o - h, r + i, a + h, c - i - s, p - h - e));
    }, t.c = new function () {
    }(), t.e = new function () {
    }(), t.g = new function () {
    }();
}(), function () {
    function c() {
        if (0 === this.Vl.length) {
            var t = document.createElement('canvas');
            t.width = this.width, t.height = this.height;
            var i = t.getContext('2d');
            this.Mg ? i.drawImage(this.q, this.Ag, this.Bg, this.width, this.height, 0, 0, this.width, this.height) : i.drawImage(this.q, 0, 0, this.width, this.height), this.Vl = t.toDataURL('image/png');
        }
        return this.Vl;
    }
    function t() {
    }
    function h(t, i, s) {
        if (!t)
            return !1;
        var h, e, n, o = 0 !== i || 0 !== s, r = !1, a = (c = this.b.Qj()).type, c = c.fg, p = t.N();
        for (n = this.b.Ea().Ia.kc, p = p.R ? (this.Aa(), d.Vf(this.Qa), d.offset(i, s), this.b.ow(this.j, t, d, b), b) : !n || this.b.Zw() && !p.I.length && p.d.length ? p.d : p.I, l = a !== (u = t) && !c, o && (h = this.x, e = this.y, this.x += i, this.y += s, this.za()), i = 0, s = p.length; i < s; i++)
            if (n = p[i], this.b.Ey(this, n)) {
                if (r = !0, c)
                    break;
                a !== t && f.add(n);
            }
        return o && (this.x = h, this.y = e, this.za()), A(b), r;
    }
    function i() {
    }
    function s() {
    }
    var e = V.prototype;
    e.W = function (t) {
        this.X = t, this.b = t.b;
    };
    var n = e.W.prototype;
    n.D = function () {
        var t, i, s, h, e, n, o, r, a;
        if (!this.B)
            for (this.Xc = [], this.yh = !1, t = 0, i = this.gc.length; t < i; t++) {
                for (e = this.gc[t], (o = {}).name = e[0], o.speed = e[1], o.loop = e[2], o.un = e[3], o.vn = e[4], o.cr = e[5], o.Y = e[6], o.frames = [], s = 0, h = e[7].length; s < h; s++)
                    n = e[7][s], (r = {}).wi = n[0], r.Yk = n[1], r.Ag = n[2], r.Bg = n[3], r.width = n[4], r.height = n[5], r.duration = n[6], r.Nb = n[7], r.Ob = n[8], r.wm = n[9], r.yk = n[10], r.dr = n[11], r.Mg = 0 !== r.width, r.Vl = '', r.uz = c, a = {
                        left: 0,
                        top: 0,
                        right: 1,
                        bottom: 1
                    }, r.Dn = a, r.r = null, (a = this.b.gw(n[0])) ? r.q = a : (r.q = new Image(), r.q.Qu = n[0], r.q.Ql = n[1], r.q.Lu = null, this.b.gl(r.q, n[0])), o.frames.push(r), this.Xc.push(r);
                this.gc[t] = o;
            }
    }, n.Yr = function () {
        var t, i, s;
        for (t = 0, i = this.d.length; t < i; t++)
            (s = this.d[t]).vj = s.Sa.r;
    }, n.ei = function () {
        if (!this.B) {
            var t, i, s;
            for (t = 0, i = this.Xc.length; t < i; ++t)
                (s = this.Xc[t]).q.Lu = null, s.r = null;
            this.yh = !1, this.Yr();
        }
    }, n.fi = function () {
        if (!this.B && this.d.length) {
            var t, i, s;
            for (t = 0, i = this.Xc.length; t < i; ++t)
                (s = this.Xc[t]).r = this.b.k.yc(s.q, !1, this.b.qa, s.dr);
            this.Yr();
        }
    }, n.Pm = function () {
        if (!this.B && !this.yh && this.b.k) {
            var t, i, s;
            for (t = 0, i = this.Xc.length; t < i; ++t)
                (s = this.Xc[t]).r = this.b.k.yc(s.q, !1, this.b.qa, s.dr);
            this.yh = !0;
        }
    }, n.Ai = function () {
        if (!this.B && !this.d.length && this.yh) {
            var t, i, s;
            for (t = 0, i = this.Xc.length; t < i; ++t)
                s = this.Xc[t], this.b.k.deleteTexture(s.r), s.r = null;
            this.yh = !1;
        }
    };
    var o = [];
    n.Ck = function (t) {
        var i, s, h;
        for (A(o), i = 0, s = this.Xc.length; i < s; ++i)
            h = this.Xc[i].q, -1 === o.indexOf(h) && (t.drawImage(h, 0, 0), o.push(h));
    }, e.S = function (t) {
        this.type = t, this.b = t.b, t = this.type.gc[0].frames[0].yk, this.Bc ? this.ga.oi(t) : this.ga = new gb(t);
    };
    var r = e.S.prototype;
    r.D = function () {
        this.visible = 0 === this.A[0], this.zh = this.uf = !1, this.$e = 0 !== this.A[3], this.xa = this.sp(this.A[1]) || this.type.gc[0], this.C = this.A[2], this.C < 0 && (this.C = 0), this.C >= this.xa.frames.length && (this.C = this.xa.frames.length - 1);
        var t = this.xa.frames[this.C];
        this.ga.oi(t.yk), this.Nb = t.Nb, this.Ob = t.Ob, this.Wf = this.xa.speed, this.Be = this.xa.vn, 1 === this.type.gc.length && 1 === this.type.gc[0].frames.length || 0 === this.Wf || (this.b.If(this), this.uf = !0), this.Bc ? this.Yc.reset() : this.Yc = new eb(), this.ud = this.Yc.Z, this.Ld = !0, this.Md = 0, this.Ye = !0, this.Tf = this.Oo = '', this.Xo = 0, this.hh = -1, this.type.Pm();
        var i, s, h, e, n, o, r;
        t = 0;
        for (i = this.type.gc.length; t < i; t++)
            for (s = 0, h = (e = this.type.gc[t]).frames.length; s < h; s++)
                0 === (n = e.frames[s]).width && (n.width = n.q.width, n.height = n.q.height), n.Mg && (r = n.q, (o = n.Dn).left = n.Ag / r.width, o.top = n.Bg / r.height, o.right = (n.Ag + n.width) / r.width, o.bottom = (n.Bg + n.height) / r.height, 0 === n.Ag && 0 === n.Bg && n.width === r.width && n.height === r.height && (n.Mg = !1));
        this.Sa = this.xa.frames[this.C], this.vj = this.Sa.r;
    }, r.Fb = function () {
        var t = {
            a: this.xa.Y,
            f: this.C,
            cas: this.Wf,
            fs: this.ud,
            ar: this.Md,
            at: this.Yc.Z,
            rt: this.Be
        };
        return this.Ld || (t.ap = this.Ld), this.Ye || (t.af = this.Ye), t;
    }, r.Qb = function (t) {
        var i = this.kw(t.a);
        i && (this.xa = i), this.C = t.f, this.C < 0 && (this.C = 0), this.C >= this.xa.frames.length && (this.C = this.xa.frames.length - 1), this.Wf = t.cas, this.ud = t.fs, this.Md = t.ar, this.Yc.reset(), this.Yc.Z = t.at, this.Ld = !t.hasOwnProperty('ap') || t.ap, this.Ye = !t.hasOwnProperty('af') || t.af, t.hasOwnProperty('rt') ? this.Be = t.rt : this.Be = this.xa.vn, this.Sa = this.xa.frames[this.C], this.vj = this.Sa.r, this.ga.oi(this.Sa.yk), this.Nb = this.Sa.Nb, this.Ob = this.Sa.Ob;
    }, r.Dl = function (t) {
        this.C = t ? 0 : this.xa.frames.length - 1, this.Ld = !1, this.Oo = this.xa.name, this.zh = !0, this.b.trigger(V.prototype.c.gt, this), this.b.trigger(V.prototype.c.mo, this), this.zh = !1, this.Md = 0;
    }, r.El = function () {
        return this.Yc.Z;
    }, r.mb = function () {
        this.Yc.add(this.b.Rj(this)), this.Tf.length && this.dp(), 0 <= this.hh && this.Zl();
        var t = this.Yc.Z, i = this.xa, s = i.frames[this.C], h = s.duration / this.Wf;
        this.Ld && t >= this.ud + h && (this.Ye ? this.C++ : this.C--, this.ud += h, this.C >= i.frames.length && (i.cr ? (this.Ye = !1, this.C = i.frames.length - 2) : i.loop ? this.C = this.Be : (this.Md++, this.Md >= i.un ? this.Dl(!1) : this.C = this.Be)), this.C < 0 && (i.cr ? (this.C = 1, this.Ye = !0, i.loop || (this.Md++, this.Md >= i.un && this.Dl(!0))) : i.loop ? this.C = this.Be : (this.Md++, this.Md >= i.un ? this.Dl(!0) : this.C = this.Be)), this.C < 0 ? this.C = 0 : this.C >= i.frames.length && (this.C = i.frames.length - 1), t > this.ud + i.frames[this.C].duration / this.Wf && (this.ud = t), t = i.frames[this.C], this.Of(s, t), this.b.fa = !0);
    }, r.sp = function (t) {
        var i, s, h;
        for (i = 0, s = this.type.gc.length; i < s; i++)
            if (h = this.type.gc[i], mb(h.name, t))
                return h;
        return null;
    }, r.kw = function (t) {
        var i, s, h;
        for (i = 0, s = this.type.gc.length; i < s; i++)
            if ((h = this.type.gc[i]).Y === t)
                return h;
        return null;
    }, r.dp = function () {
        var t = this.xa.frames[this.C], i = this.sp(this.Tf);
        this.Tf = '', !i || mb(i.name, this.xa.name) && this.Ld || (this.xa = i, this.Wf = i.speed, this.Be = i.vn, this.C < 0 && (this.C = 0), this.C >= this.xa.frames.length && (this.C = this.xa.frames.length - 1), 1 === this.Xo && (this.C = 0), this.Ld = !0, this.ud = this.Yc.Z, this.Ye = !0, this.Of(t, this.xa.frames[this.C]), this.b.fa = !0);
    }, r.Zl = function () {
        var t = this.xa.frames[this.C], i = this.C;
        this.C = ta(this.hh), this.C < 0 && (this.C = 0), this.C >= this.xa.frames.length && (this.C = this.xa.frames.length - 1), i !== this.C && (this.Of(t, this.xa.frames[this.C]), this.ud = this.Yc.Z, this.b.fa = !0), this.hh = -1;
    }, r.Of = function (t, i) {
        var s = t.width, h = t.height, e = i.width, n = i.height;
        for (s != e && (this.width *= e / s), h != n && (this.height *= n / h), this.Nb = i.Nb, this.Ob = i.Ob, this.ga.oi(i.yk), this.za(), this.Sa = i, this.vj = i.r, s = 0, h = this.L.length; s < h; s++)
            (e = this.L[s]).Kx && e.Kx(t, i);
        this.b.trigger(V.prototype.c.Of, this);
    }, r.ed = function (t) {
        t.globalAlpha = this.opacity;
        var i = this.Sa, s = i.Mg, h = i.q, e = this.x, n = this.y, o = this.width, r = this.height;
        if (0 === this.m && 0 <= o && 0 <= r)
            e -= this.Nb * o, n -= this.Ob * r, this.b.Ac && (e = Math.round(e), n = Math.round(n)), s ? t.drawImage(h, i.Ag, i.Bg, i.width, i.height, e, n, o, r) : t.drawImage(h, e, n, o, r);
        else {
            this.b.Ac && (e = Math.round(e), n = Math.round(n)), t.save();
            var a = 0 < o ? 1 : -1, c = 0 < r ? 1 : -1;
            t.translate(e, n), 1 == a && 1 == c || t.scale(a, c), t.rotate(this.m * a * c), e = 0 - this.Nb * na(o), n = 0 - this.Ob * na(r), s ? t.drawImage(h, i.Ag, i.Bg, i.width, i.height, e, n, na(o), na(r)) : t.drawImage(h, e, n, na(o), na(r)), t.restore();
        }
    }, r.Ce = function (t) {
        this.Kb(t);
    }, r.Kb = function (t) {
        t.Rb(this.vj), t.Se(this.opacity);
        var i = this.Sa, s = this.Xb;
        if (this.b.Ac) {
            var h = Math.round(this.x) - this.x, e = Math.round(this.y) - this.y;
            i.Mg ? t.Sc(s.Fa + h, s.Ga + e, s.nb + h, s.ob + e, s.bb + h, s.cb + e, s.$a + h, s.ab + e, i.Dn) : t.ji(s.Fa + h, s.Ga + e, s.nb + h, s.ob + e, s.bb + h, s.cb + e, s.$a + h, s.ab + e);
        } else
            i.Mg ? t.Sc(s.Fa, s.Ga, s.nb, s.ob, s.bb, s.cb, s.$a, s.ab, i.Dn) : t.ji(s.Fa, s.Ga, s.nb, s.ob, s.bb, s.cb, s.$a, s.ab);
    }, r.sw = function (t) {
        var i, s, h = this.Sa;
        for (i = 0, s = h.wm.length; i < s; i++)
            if (mb(t, h.wm[i][0]))
                return i;
        return -1;
    }, r.nf = function (t, i) {
        var s, h = (e = this.Sa).wm;
        if (s = z(t) ? this.sw(t) : t - 1, (s = ta(s)) < 0 || s >= h.length)
            return i ? this.x : this.y;
        var e, n = (h[s][1] - e.Nb) * this.width, o = (h = ((h = h[s][2]) - e.Ob) * this.height, n * (e = Math.cos(this.m)) - h * (s = Math.sin(this.m)));
        h = h * e + n * s, n = o + this.x, h += this.y;
        return i ? n : h;
    };
    var u = null, f = new ca(), l = !1, b = [], d = new wa(0, 0, 0, 0);
    n.finish = function (t) {
        if (l) {
            if (t) {
                var i = this.b.Ea().Ia.kc;
                t = u.N();
                var s, h, e = f.We();
                if (t.R) {
                    for (t.R = !1, A(t.d), s = 0, h = e.length; s < h; ++s)
                        t.d[s] = e[s];
                    if (i)
                        for (A(t.I), s = 0, h = u.d.length; s < h; ++s)
                            e = u.d[s], f.contains(e) || t.I.push(e);
                } else if (i)
                    for (i = t.d.length, s = 0, h = e.length; s < h; ++s)
                        t.d[i + s] = e[s], Ia(t.I, e[s]);
                else
                    Da(t.d, e);
                u.Gc();
            }
            f.clear(), l = !1;
        }
    }, t.prototype.Us = function (t) {
        return h.call(this, t, 0, 0);
    }, t.prototype.Vs = function (t, i, s) {
        return h.call(this, t, i, s);
    }, t.prototype.Ms = function (t) {
        return this.Tf.length ? mb(this.Tf, t) : mb(this.xa.name, t);
    }, t.prototype.mo = function (t) {
        return mb(this.Oo, t);
    }, t.prototype.gt = function () {
        return !0;
    }, t.prototype.Of = function () {
        return !0;
    }, e.c = new t(), i.prototype.mu = function (t, i, s) {
        if (t && i && (i = this.b.Rl(t, i, this.nf(s, !0), this.nf(s, !1)))) {
            var h, e, n;
            if (void 0 !== i.m && (i.m = this.m, i.za()), this.b.wc++, this.b.trigger(Object.getPrototypeOf(t.X).c.Jd, i), i.Ab)
                for (h = 0, e = i.siblings.length; h < e; h++)
                    n = i.siblings[h], this.b.trigger(Object.getPrototypeOf(n.type.X).c.Jd, n);
            if (this.b.wc--, h = this.b.pw(), s = !1, (ha(h.ja.Spawn_LastExec) || h.ja.Spawn_LastExec < this.b.kf) && (s = !0, h.ja.Spawn_LastExec = this.b.kf), t != this.type && ((t = t.N()).R = !1, s ? (A(t.d), t.d[0] = i) : t.d.push(i), i.Ab))
                for (h = 0, e = i.siblings.length; h < e; h++)
                    (t = (n = i.siblings[h]).type.N()).R = !1, s ? (A(t.d), t.d[0] = n) : t.d.push(n);
        }
    }, i.prototype.qu = function () {
        this.Ld = !1;
    }, i.prototype.ou = function (t) {
        this.Ld = !0, this.ud = this.Yc.Z, 1 === t && 0 !== this.C && (this.hh = 0, this.zh || this.Zl()), this.uf || (this.b.If(this), this.uf = !0);
    }, i.prototype.Xt = function (t, i) {
        this.Tf = t, this.Xo = i, this.uf || (this.b.If(this), this.uf = !0), this.zh || this.dp();
    }, i.prototype.Yt = function (t) {
        this.hh = t, this.uf || (this.b.If(this), this.uf = !0), this.zh || this.Zl();
    }, i.prototype.yl = function (t) {
        var i = this.Sa, s = i.width * t * (this.width < 0 ? -1 : 1);
        t = i.height * t * (this.height < 0 ? -1 : 1), this.width === s && this.height === t || (this.width = s, this.height = t, this.za());
    }, e.e = new i(), s.prototype.Ks = function (t, i) {
        t.n(this.nf(i, !0));
    }, s.prototype.Ls = function (t, i) {
        t.n(this.nf(i, !1));
    }, s.prototype.jo = function (t) {
        t.n(this.Sa.width);
    }, s.prototype.io = function (t) {
        t.n(this.Sa.height);
    }, e.g = new s();
}(), function () {
    function b(t, i) {
        return t.length ? t.pop() : new i();
    }
    function o(t, i, s) {
        if (s) {
            var h;
            for (s = 0, h = i.length; s < h; s++)
                t.length < u && t.push(i[s]);
            A(i);
        } else
            for (h in i)
                Object.prototype.hasOwnProperty.call(i, h) && (t.length < u && t.push(i[h]), delete i[h]);
    }
    function p(t, i, s) {
        var h = t.zf;
        s = s.replace(/\s\s*$/, ''), i >= h.length && h.push(b(f, Object)), (i = h[i]).text = s, i.width = t.Wm(s), t.Qg = pa(t.Qg, i.width);
    }
    function t() {
    }
    var i = yc.prototype;
    i.D = function () {
    }, i.W = function (t) {
        this.X = t, this.b = t.b;
    };
    var s = i.W.prototype;
    s.D = function () {
        this.B || (this.q = new Image(), this.b.gl(this.q, this.wi), this.r = null);
    }, s.ei = function () {
        this.B || (this.r = null);
    }, s.fi = function () {
        var t, i;
        if (!this.B && this.d.length)
            for (this.r || (this.r = this.b.k.yc(this.q, !1, this.b.qa, this.Ue)), t = 0, i = this.d.length; t < i; t++)
                this.d[t].r = this.r;
    }, s.Ai = function () {
        this.B || this.d.length || !this.r || (this.b.k.deleteTexture(this.r), this.r = null);
    }, s.Ck = function (t) {
        t.drawImage(this.q, 0, 0);
    }, i.S = function (t) {
        this.type = t, this.b = t.b;
    }, (s = i.S.prototype).Ef = function () {
        o(f, this.zf, !0), o(d, this.pj, !1), o(g, this.qj, !1), Ya(this.xe);
    }, s.D = function () {
        this.q = this.type.q, this.oj = this.A[0], this.we = this.A[1], this.characterSet = this.A[2], this.text = this.A[3], this.rd = this.A[4], this.visible = 0 === this.A[5], this.xh = this.A[6] / 2, this.el = this.A[7] / 2, this.Ty = 0 === this.A[9], this.Uf = this.A[10], this.lineHeight = this.A[11], this.Gf = this.Qg = 0, this.Bc ? (A(this.zf), Ya(this.pj), Ya(this.qj), Ya(this.xe)) : (this.zf = [], this.pj = {}, this.qj = {}, this.xe = {}), this.Hf = !0, this.Mm = this.width, this.b.k && (this.type.r || (this.type.r = this.b.k.yc(this.type.q, !1, this.b.qa, this.type.Ue)), this.r = this.type.r), this.nu();
    }, s.Fb = function () {
        var t, i = {
                t: this.text,
                csc: this.rd,
                csp: this.Uf,
                lh: this.lineHeight,
                tw: this.Qg,
                th: this.Gf,
                lrt: this.mx,
                ha: this.xh,
                va: this.el,
                cw: {}
            };
        for (t in this.xe)
            i.cw[t] = this.xe[t];
        return i;
    }, s.Qb = function (t) {
        for (var i in (this.text = t.t, this.rd = t.csc, this.Uf = t.csp, this.lineHeight = t.lh, this.Qg = t.tw, this.Gf = t.th, this.mx = t.lrt, t.hasOwnProperty('ha') && (this.xh = t.ha), t.hasOwnProperty('va') && (this.el = t.va), t.cw))
            this.xe[i] = t.cw[i];
        this.Hf = !0, this.Mm = this.width;
    };
    var u = 1000, f = [], d = [], g = [];
    s.nu = function () {
        for (var t = (s = this.q).width, i = s.height, s = this.oj, h = this.we, e = s / t, n = h / i, o = this.characterSet, r = (t = Math.floor(t / s), i = Math.floor(i / h), 0); r < o.length && !(t * i <= r); r++) {
            var a = r % t, c = Math.floor(r / t), p = o.charAt(r);
            if (this.b.k) {
                var u = this.qj, f = a * e, l = c * n;
                a = (a + 1) * e, c = (c + 1) * n;
                void 0 === u[p] && (u[p] = b(g, wa)), u[p].left = f, u[p].top = l, u[p].right = a, u[p].bottom = c;
            } else
                a *= s, c *= h, f = s, l = h, void 0 === (u = this.pj)[p] && (u[p] = b(d, Object)), u[p].x = a, u[p].y = c, u[p].cs = f, u[p].Ap = l;
        }
    };
    var l = [];
    i.tu = function (t) {
        A(l);
        for (var i, s = '', h = 0; h < t.length;)
            if ('\n' === (i = t.charAt(h)))
                s.length && (l.push(s), s = ''), l.push('\n'), ++h;
            else if (' ' === i || '\t' === i || '-' === i) {
                for (; s += t.charAt(h), ++h < t.length && (' ' === t.charAt(h) || '\t' === t.charAt(h)););
                l.push(s), s = '';
            } else
                h < t.length && (s += i, h++);
        s.length && l.push(s);
    }, i.xu = function (t) {
        var i = t.text, s = t.zf;
        if (i && i.length) {
            var h = t.width;
            if (h <= 2)
                o(f, s, !0);
            else {
                var e = t.rd, n = t.Uf;
                if (i.length * (t.oj * e + n) - n <= h && -1 === i.indexOf('\n') && (n = t.Wm(i)) <= h)
                    return o(f, s, !0), s.push(b(f, Object)), s[0].text = i, s[0].width = n, t.Qg = n, void (t.Gf = t.we * e + t.lineHeight);
                this.yu(t), t.Gf = s.length * (t.we * e + t.lineHeight);
            }
        } else
            o(f, s, !0);
    }, i.yu = function (t) {
        var i = t.Ty, s = t.text, h = t.zf, e = t.width;
        i && (this.tu(s), s = l);
        var n, o, r = '', a = 0, c = !1;
        for (o = 0; o < s.length; o++)
            '\n' === s[o] ? (!0 === c ? c = !1 : (p(t, a, r), a++), r = '') : (c = !1, n = r, r += s[o], e < t.Wm(r.replace(/\s\s*$/, '')) && ('' === n ? (p(t, a, r), c = !(r = '')) : (p(t, a, n), r = s[o]), a++, i || ' ' !== r || (r = '')));
        for (r.replace(/\s\s*$/, '').length && (p(t, a, r), a++), o = a; o < h.length; o++)
            f.length < u && f.push(h[o]);
        h.length = a;
    }, s.Wm = function (t) {
        for (var i = this.Uf, s = t.length, h = 0, e = 0; e < s; e++)
            h += this.jm(t.charAt(e)) * this.rd + i;
        return h - (0 < h ? i : 0);
    }, s.jm = function (t) {
        var i = this.xe;
        return void 0 !== i[t] ? i[t] : this.oj;
    }, s.jr = function () {
        !this.Hf && this.width === this.Mm || (this.Gf = this.Qg = 0, this.type.X.xu(this), this.Hf = !1, this.Mm = this.width);
    }, s.ed = function (t) {
        var i = this.q;
        if ('' !== this.text && null != i && (this.jr(), !(this.height < this.we * this.rd + this.lineHeight))) {
            t.globalAlpha = this.opacity;
            i = this.x;
            var s = this.y;
            this.b.Ac && (i = Math.round(i), s = Math.round(s));
            var h = this.j.ma, e = this.j.na, n = this.j.wa, o = this.j.ua;
            t.save(), t.translate(i, s), t.rotate(this.m);
            for (var r, a, c, p, u = this.m, f = this.xh, l = this.rd, b = this.we * l, d = this.lineHeight, g = this.Uf, y = this.zf, v = -(this.Nb * this.width), m = (m = -(this.Ob * this.height)) + this.el * pa(0, this.height - this.Gf), w = 0; w < y.length; w++) {
                var k = y[w].text;
                if (a = v + (r = f * pa(0, this.width - y[w].width)), m += d, 0 === u && s + m + b < e)
                    m += b;
                else {
                    for (var x = 0; x < k.length; x++) {
                        c = k.charAt(x), r = this.jm(c);
                        var T = this.pj[c];
                        if (0 === u && i + a + r * l + g < h)
                            a += r * l + g;
                        else {
                            if (a + r * l > this.width + 0.00001)
                                break;
                            if (void 0 !== T && (c = a, p = m, 0 === u && 1 === l && (c = Math.round(c), p = Math.round(p)), t.drawImage(this.q, T.x, T.y, T.cs, T.Ap, c, p, T.cs * l, T.Ap * l)), a += r * l + g, 0 === u && n < i + a)
                                break;
                        }
                    }
                    if (m += b, 0 === u && (m + b + d > this.height || o < s + m))
                        break;
                }
            }
            t.restore();
        }
    };
    var R = new xa();
    s.Kb = function (t) {
        if (t.Rb(this.r), t.Se(this.opacity), this.text && (this.jr(), !(this.height < this.we * this.rd + this.lineHeight))) {
            this.Aa();
            var i = this.Xb, s = 0, h = 0;
            this.b.Ac && (s = Math.round(this.x) - this.x, h = Math.round(this.y) - this.y);
            var e, n, o, r = this.j.ma, a = this.j.na, c = this.j.wa, p = this.j.ua, u = this.m, f = this.xh, l = this.el, b = this.rd, d = this.we * b, g = this.lineHeight, y = this.Uf, v = this.zf, m = this.Gf;
            0 !== u && (n = Math.cos(u), o = Math.sin(u));
            var w, k, x;
            for (s = i.Fa + s, i = i.Ga + h, l = l * pa(0, this.height - m), m = 0; m < v.length; m++)
                if (h = v[m].text, w = e = f * pa(0, this.width - v[m].width), l += g, 0 === u && i + l + d < a)
                    l += d;
                else {
                    for (var T = 0; T < h.length; T++) {
                        var E = h.charAt(T);
                        if (e = this.jm(E), E = this.qj[E], 0 === u && s + w + e * b + y < r)
                            w += e * b + y;
                        else {
                            if (w + e * b > this.width + 0.00001)
                                break;
                            if (void 0 !== E) {
                                var A = this.oj * b, j = this.we * b;
                                k = w, x = l, 0 === u && 1 === b && (k = Math.round(k), x = Math.round(x)), R.Fa = k, R.Ga = x, R.nb = k + A, R.ob = x, R.$a = k, R.ab = x + j, R.bb = k + A, R.cb = x + j, 0 !== u && (x = n, A = o, j = void 0, j = (k = R).Fa * x - k.Ga * A, k.Ga = k.Ga * x + k.Fa * A, k.Fa = j, j = k.nb * x - k.ob * A, k.ob = k.ob * x + k.nb * A, k.nb = j, j = k.$a * x - k.ab * A, k.ab = k.ab * x + k.$a * A, k.$a = j, j = k.bb * x - k.cb * A, k.cb = k.cb * x + k.bb * A, k.bb = j), R.offset(s, i), t.Sc(R.Fa, R.Ga, R.nb, R.ob, R.bb, R.cb, R.$a, R.ab, E);
                            }
                            if (w += e * b + y, 0 === u && c < s + w)
                                break;
                        }
                    }
                    if (l += d, 0 === u && (l + d + g > this.height || p < i + l))
                        break;
                }
        }
    }, i.c = new function () {
    }(), t.prototype.iu = function (t) {
        ja(t) && t < 1000000000 && (t = Math.round(10000000000 * t) / 10000000000), t = t.toString(), this.text !== t && (this.text = t, this.Hf = !0, this.b.fa = !0);
    }, t.prototype.yl = function (t) {
        t !== this.rd && (this.rd = t, this.Hf = !0, this.b.fa = !0);
    }, s.Zt = function (t, i) {
        var s = parseInt(i, 10);
        this.xe[t] !== s && (this.xe[t] = s, this.Hf = !0, this.b.fa = !0);
    }, t.prototype.$t = function (t, i) {
        if ('' !== t)
            for (var s = 0; s < t.length; s++)
                this.Zt(t.charAt(s), i);
    }, t.prototype.bu = function (t) {
        this.xh = t / 2, this.Hf = !0, this.b.fa = !0;
    }, i.e = new t(), i.g = new function () {
    }();
}(), function () {
    function t() {
    }
    var i = zc.prototype;
    i.W = function (t) {
        this.X = t, this.b = t.b;
    };
    var s = i.W.prototype;
    s.D = function () {
        this.B || (this.q = new Image(), this.q.Ql = this.Yk, this.b.gl(this.q, this.wi), this.r = this.pattern = null);
    }, s.ei = function () {
        this.B || (this.r = null);
    }, s.fi = function () {
        var t, i;
        if (!this.B && this.d.length)
            for (this.r || (this.r = this.b.k.yc(this.q, !0, this.b.qa, this.Ue)), t = 0, i = this.d.length; t < i; t++)
                this.d[t].r = this.r;
    }, s.Pm = function () {
        this.B || this.r || !this.b.k || (this.r = this.b.k.yc(this.q, !0, this.b.qa, this.Ue));
    }, s.Ai = function () {
        this.B || this.d.length || !this.r || (this.b.k.deleteTexture(this.r), this.r = null);
    }, s.Ck = function (t) {
        t.drawImage(this.q, 0, 0);
    }, i.S = function (t) {
        this.type = t, this.b = t.b;
    }, (s = i.S.prototype).D = function () {
        this.visible = 0 === this.A[0], this.de = new wa(0, 0, 0, 0), this.Ep = !1, this.q = this.type.q, this.b.k ? (this.type.Pm(), this.r = this.type.r) : (this.type.pattern || (this.type.pattern = this.b.Ba.createPattern(this.type.q, 'repeat')), this.pattern = this.type.pattern);
    }, s.Kd = function () {
        this.Ep = !1, this.q = this.type.q;
    }, s.Ef = function () {
        this.b.k && this.Ep && this.r && (this.b.k.deleteTexture(this.r), this.r = null);
    }, s.ed = function (t) {
        t.globalAlpha = this.opacity, t.save(), t.fillStyle = this.pattern;
        var i = this.x, s = this.y;
        this.b.Ac && (i = Math.round(i), s = Math.round(s));
        var h = -(this.Nb * this.width), e = -(this.Ob * this.height), n = h % this.q.width, o = e % this.q.height;
        n < 0 && (n += this.q.width), o < 0 && (o += this.q.height), t.translate(i, s), t.rotate(this.m), t.translate(n, o), t.fillRect(h - n, e - o, this.width, this.height), t.restore();
    }, s.Ce = function (t) {
        this.Kb(t);
    }, s.Kb = function (t) {
        t.Rb(this.r), t.Se(this.opacity);
        var i = this.de;
        i.right = this.width / this.q.width, i.bottom = this.height / this.q.height;
        var s = this.Xb;
        if (this.b.Ac) {
            var h = Math.round(this.x) - this.x, e = Math.round(this.y) - this.y;
            t.Sc(s.Fa + h, s.Ga + e, s.nb + h, s.ob + e, s.bb + h, s.cb + e, s.$a + h, s.ab + e, i);
        } else
            t.Sc(s.Fa, s.Ga, s.nb, s.ob, s.bb, s.cb, s.$a, s.ab, i);
    }, i.c = new function () {
    }(), i.e = new function () {
    }(), t.prototype.jo = function (t) {
        t.n(this.q.width);
    }, t.prototype.io = function (t) {
        t.n(this.q.height);
    }, i.g = new t();
}(), function () {
    function r(t) {
        o = t.x, p = t.y, u = t.z;
    }
    function a(t, i, s, h) {
        var e;
        return (e = f.length ? f.pop() : new n()).init(t, i, s, h), e;
    }
    function n() {
        this.ri = this.id = this.y = this.x = this.Uk = this.Tk = this.Lm = this.time = this.Hn = 0, this.yi = this.al = !1;
    }
    function i(t) {
        return t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || t.originalEvent && t.originalEvent.sourceCapabilities && t.originalEvent.sourceCapabilities.firesTouchEvents;
    }
    function t() {
    }
    function s() {
    }
    var h = Z.prototype;
    h.W = function (t) {
        this.X = t, this.b = t.b;
    }, h.W.prototype.D = function () {
    }, h.S = function (t) {
        this.type = t, this.b = t.b, this.touches = [], this.Xm = !1;
    };
    var e = h.S.prototype, c = {
            left: 0,
            top: 0
        };
    e.lf = function (t) {
        var i, s;
        for (i = 0, s = this.touches.length; i < s; i++)
            if (this.touches[i].id === t)
                return i;
        return -1;
    };
    var o = 0, p = 0, u = 0, f = [];
    n.prototype.init = function (t, i, s, h) {
        var e = Za();
        this.Hn = this.Lm = this.time = e, this.Tk = t, this.Uk = i, this.x = t, this.y = i, this.pressure = this.height = this.width = 0, this.id = s, this.ri = h, this.yi = this.al = !1;
    }, n.prototype.update = function (t, i, s, h, e, n) {
        this.Lm = this.time, this.time = t, this.x = i, this.y = s, this.width = h, this.height = e, this.pressure = n, !this.yi && 15 <= Va(this.Tk, this.Uk, this.x, this.y) && (this.yi = !0);
    }, n.prototype.wx = function (t, i) {
        !this.al && 500 <= Za() - this.Hn && !this.yi && Va(this.Tk, this.Uk, this.x, this.y) < 15 && (this.al = !0, t.Id = this.ri, t.Kf = this.id, t.bg = i, t.b.trigger(Z.prototype.c.ot, t), t.Qd = this.x, t.Rd = this.y, t.b.trigger(Z.prototype.c.pt, t), t.bg = 0);
    };
    var l = -1000, b = -1000, d = -10000;
    n.prototype.Bq = function (t, i) {
        if (!this.al) {
            var s = Za();
            s - this.Hn <= 333 && !this.yi && Va(this.Tk, this.Uk, this.x, this.y) < 15 && (t.Id = this.ri, t.Kf = this.id, t.bg = i, d = s - d <= 666 && Va(l, b, this.x, this.y) < 25 ? (t.b.trigger(Z.prototype.c.kt, t), t.Qd = this.x, t.Rd = this.y, t.b.trigger(Z.prototype.c.lt, t), b = l = -1000, -10000) : (t.b.trigger(Z.prototype.c.Dt, t), t.Qd = this.x, t.Rd = this.y, t.b.trigger(Z.prototype.c.Et, t), l = this.x, b = this.y, s), t.bg = 0);
        }
    }, e.D = function () {
        this.jx = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.bg = this.Kf = this.Id = this.Rd = this.Qd = this.Ko = this.Jo = this.Io = this.Cu = this.Bu = this.Au = this.vk = this.uk = this.tk = 0, this.Qy = 0 !== this.A[0];
        var t = 0 < this.b.Yb ? document : this.b.canvas, i = document;
        this.b.pb ? i = t = window.Canvas : this.b.Mc && (i = t = window);
        var s = this;
        if ('undefined' != typeof PointerEvent ? (t.addEventListener('pointerdown', function (t) {
                s.Qq(t);
            }, !1), t.addEventListener('pointermove', function (t) {
                s.Pq(t);
            }, !1), i.addEventListener('pointerup', function (t) {
                s.sk(t, !1);
            }, !1), i.addEventListener('pointercancel', function (t) {
                s.sk(t, !0);
            }, !1), this.b.canvas && (this.b.canvas.addEventListener('MSGestureHold', function (t) {
                t.preventDefault();
            }, !1), document.addEventListener('MSGestureHold', function (t) {
                t.preventDefault();
            }, !1), this.b.canvas.addEventListener('gesturehold', function (t) {
                t.preventDefault();
            }, !1), document.addEventListener('gesturehold', function (t) {
                t.preventDefault();
            }, !1))) : window.navigator.msPointerEnabled ? (t.addEventListener('MSPointerDown', function (t) {
                s.Qq(t);
            }, !1), t.addEventListener('MSPointerMove', function (t) {
                s.Pq(t);
            }, !1), i.addEventListener('MSPointerUp', function (t) {
                s.sk(t, !1);
            }, !1), i.addEventListener('MSPointerCancel', function (t) {
                s.sk(t, !0);
            }, !1), this.b.canvas && (this.b.canvas.addEventListener('MSGestureHold', function (t) {
                t.preventDefault();
            }, !1), document.addEventListener('MSGestureHold', function (t) {
                t.preventDefault();
            }, !1))) : (t.addEventListener('touchstart', function (t) {
                s.Sq(t);
            }, !1), t.addEventListener('touchmove', function (t) {
                s.Rq(t);
            }, !1), i.addEventListener('touchend', function (t) {
                s.cn(t, !1);
            }, !1), i.addEventListener('touchcancel', function (t) {
                s.cn(t, !0);
            }, !1)), this.jx) {
            var h = function (t) {
                    t = t.reading, s.Io = t.accelerationX, s.Jo = t.accelerationY, s.Ko = t.accelerationZ;
                }, e = function (t) {
                    t = t.reading, s.tk = t.yawDegrees, s.uk = t.pitchDegrees, s.vk = t.rollDegrees;
                }, n = Windows.Devices.Sensors.Accelerometer.getDefault();
            n && (n.reportInterval = Math.max(n.minimumReportInterval, 16), n.addEventListener('readingchanged', h));
            var o = Windows.Devices.Sensors.Inclinometer.getDefault();
            o && (o.reportInterval = Math.max(o.minimumReportInterval, 16), o.addEventListener('readingchanged', e)), document.addEventListener('visibilitychange', function () {
                document.hidden || document.msHidden ? (n && n.removeEventListener('readingchanged', h), o && o.removeEventListener('readingchanged', e)) : (n && n.addEventListener('readingchanged', h), o && o.addEventListener('readingchanged', e));
            }, !1);
        } else
            window.addEventListener('deviceorientation', function (t) {
                s.tk = t.alpha || 0, s.uk = t.beta || 0, s.vk = t.gamma || 0;
            }, !1), window.addEventListener('devicemotion', function (t) {
                t.accelerationIncludingGravity && (s.Au = t.accelerationIncludingGravity.x || 0, s.Bu = t.accelerationIncludingGravity.y || 0, s.Cu = t.accelerationIncludingGravity.z || 0), t.acceleration && (s.Io = t.acceleration.x || 0, s.Jo = t.acceleration.y || 0, s.Ko = t.acceleration.z || 0);
            }, !1);
        this.Qy && !this.b.pa && (jQuery(document).mousemove(function (t) {
            s.Hx(t);
        }), jQuery(document).mousedown(function (t) {
            s.Gx(t);
        }), jQuery(document).mouseup(function (t) {
            s.Ix(t);
        })), !this.b.pg && this.b.vc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(r, null, { frequency: 40 }), this.b.Fy(this);
    }, e.Pq = function (t) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && 'mouse' !== t.pointerType) {
            t.preventDefault && t.preventDefault();
            var i = this.lf(t.pointerId), s = Za();
            if (0 <= i) {
                var h = this.b.pa ? c : jQuery(this.b.canvas).offset();
                s - (i = this.touches[i]).time < 2 || i.update(s, t.pageX - h.left, t.pageY - h.top, t.width || 0, t.height || 0, t.pressure || 0);
            }
        }
    }, e.Qq = function (t) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && 'mouse' !== t.pointerType) {
            t.preventDefault && pb(t) && t.preventDefault();
            var i = this.b.pa ? c : jQuery(this.b.canvas).offset(), s = t.pageX - i.left;
            i = t.pageY - i.top;
            Za(), this.Id = this.touches.length, this.Kf = t.pointerId, this.touches.push(a(s, i, t.pointerId, this.Id)), this.b.xc = !0, this.b.trigger(Z.prototype.c.xo, this), this.b.trigger(Z.prototype.c.tl, this), this.Qd = s, this.Rd = i, this.b.trigger(Z.prototype.c.sl, this), this.b.xc = !1;
        }
    }, e.sk = function (t, i) {
        if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && 'mouse' !== t.pointerType) {
            t.preventDefault && pb(t) && t.preventDefault();
            var s = this.lf(t.pointerId);
            this.Id = 0 <= s ? this.touches[s].ri : -1, this.Kf = 0 <= s ? this.touches[s].id : -1, this.b.xc = !0, this.b.trigger(Z.prototype.c.wo, this), this.b.trigger(Z.prototype.c.rl, this), 0 <= s && (i || this.touches[s].Bq(this, s), f.length < 100 && f.push(this.touches[s]), this.touches.splice(s, 1)), this.b.xc = !1;
        }
    }, e.Rq = function (t) {
        t.preventDefault && t.preventDefault();
        var i, s, h, e, n = Za();
        for (i = 0, s = t.changedTouches.length; i < s; i++)
            if (h = t.changedTouches[i], 0 <= (e = this.lf(h.identifier))) {
                var o = this.b.pa ? c : jQuery(this.b.canvas).offset();
                n - (e = this.touches[e]).time < 2 || e.update(n, h.pageX - o.left, h.pageY - o.top, 2 * (h.Fz || h.Nz || h.yz || h.Bz || 0), 2 * (h.Gz || h.Oz || h.zz || h.Cz || 0), h.qz || h.Mz || h.xz || h.Az || 0);
            }
    }, e.Sq = function (t) {
        t.preventDefault && pb(t) && t.preventDefault();
        var i, s, h, e, n = this.b.pa ? c : jQuery(this.b.canvas).offset();
        for (Za(), this.b.xc = !0, i = 0, s = t.changedTouches.length; i < s; i++)
            if (h = t.changedTouches[i], -1 === (e = this.lf(h.identifier))) {
                e = h.pageX - n.left;
                var o = h.pageY - n.top;
                this.Id = this.touches.length, this.Kf = h.identifier, this.touches.push(a(e, o, h.identifier, this.Id)), this.b.trigger(Z.prototype.c.xo, this), this.b.trigger(Z.prototype.c.tl, this), this.Qd = e, this.Rd = o, this.b.trigger(Z.prototype.c.sl, this);
            }
        this.b.xc = !1;
    }, e.cn = function (t, i) {
        var s, h, e;
        for (t.preventDefault && pb(t) && t.preventDefault(), this.b.xc = !0, s = 0, h = t.changedTouches.length; s < h; s++)
            e = t.changedTouches[s], 0 <= (e = this.lf(e.identifier)) && (this.Id = this.touches[e].ri, this.Kf = this.touches[e].id, this.b.trigger(Z.prototype.c.wo, this), this.b.trigger(Z.prototype.c.rl, this), i || this.touches[e].Bq(this, e), f.length < 100 && f.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.xc = !1;
    }, e.El = function () {
        return this.b.vc && 0 === this.tk && 0 !== u ? 90 * u : this.tk;
    }, e.Uu = function () {
        return this.b.vc && 0 === this.uk && 0 !== p ? 90 * p : this.uk;
    }, e.wv = function () {
        return this.b.vc && 0 === this.vk && 0 !== o ? 90 * o : this.vk;
    }, e.Gx = function (t) {
        i(t) || (this.Sq({ changedTouches: [{pageX:t.pageX,pageY:t.pageY,identifier:0}] }), this.Xm = !0);
    }, e.Hx = function (t) {
        this.Xm && !i(t) && this.Rq({ changedTouches: [{pageX:t.pageX,pageY:t.pageY,identifier:0}] });
    }, e.Ix = function (t) {
        t.preventDefault && this.b.Bp && !this.b.sf && t.preventDefault(), this.b.Bp = !0, i(t) || (this.cn({ changedTouches: [{pageX:t.pageX,pageY:t.pageY,identifier:0}] }), this.Xm = !1);
    }, e.Jn = function () {
        var t, i, s, h = Za();
        for (t = 0, i = this.touches.length; t < i; ++t)
            (s = this.touches[t]).time <= h - 50 && (s.Lm = h), s.wx(this, t);
    }, t.prototype.tl = function () {
        return !0;
    }, t.prototype.rl = function () {
        return !0;
    }, t.prototype.sl = function (t) {
        return !!t && this.b.Wk(t, this.Qd, this.Rd);
    }, t.prototype.xo = function (t) {
        return (t = Math.floor(t)) === this.Id;
    }, t.prototype.wo = function (t) {
        return (t = Math.floor(t)) === this.Id;
    }, t.prototype.ot = function () {
        return !0;
    }, t.prototype.Dt = function () {
        return !0;
    }, t.prototype.kt = function () {
        return !0;
    }, t.prototype.pt = function (t) {
        return !!t && this.b.Wk(t, this.Qd, this.Rd);
    }, t.prototype.Et = function (t) {
        return !!t && this.b.Wk(t, this.Qd, this.Rd);
    }, t.prototype.lt = function (t) {
        return !!t && this.b.Wk(t, this.Qd, this.Rd);
    }, h.c = new t(), h.e = new function () {
    }(), s.prototype.aj = function (t, i) {
        var s, h, e, n, o, r = this.bg;
        r < 0 || r >= this.touches.length ? t.n(0) : ha(i) ? (h = (s = this.b.ag(0)).scale, e = s.qd, n = s.Pc, o = s.m, s.scale = 1, s.qd = 1, s.Pc = 1, s.m = 0, t.n(s.ub(this.touches[r].x, this.touches[r].y, !0)), s.scale = h, s.qd = e, s.Pc = n, s.m = o) : (s = ja(i) ? this.b.ag(i) : this.b.Sj(i)) ? t.n(s.ub(this.touches[r].x, this.touches[r].y, !0)) : t.n(0);
    }, s.prototype.Al = function (t, i) {
        var s, h, e, n, o, r = this.bg;
        r < 0 || r >= this.touches.length ? t.n(0) : ha(i) ? (h = (s = this.b.ag(0)).scale, e = s.qd, n = s.Qc, o = s.m, s.scale = 1, s.qd = 1, s.Qc = 1, s.m = 0, t.n(s.ub(this.touches[r].x, this.touches[r].y, !1)), s.scale = h, s.qd = e, s.Qc = n, s.m = o) : (s = ja(i) ? this.b.ag(i) : this.b.Sj(i)) ? t.n(s.ub(this.touches[r].x, this.touches[r].y, !1)) : t.n(0);
    }, s.prototype.es = function (t, i) {
        var s = this.lf(i);
        s < 0 ? t.n(0) : t.n(this.touches[s].x);
    }, s.prototype.gs = function (t, i) {
        var s = this.lf(i);
        s < 0 ? t.n(0) : t.n(this.touches[s].y);
    }, s.prototype.uu = function (t) {
        t.n(this.Kf);
    }, h.g = new s();
}(), function () {
    function t() {
    }
    function i() {
    }
    function s() {
    }
    var h = Ac.prototype;
    h.W = function (t) {
        this.X = t, this.b = t.b;
    }, h.W.prototype.D = function () {
    }, h.S = function (t) {
        this.type = t, this.b = t.b;
    };
    var e = h.S.prototype, n = window.URL || window.webkitURL || window.mozURL || window.msURL;
    e.D = function () {
        if (this.b.pa)
            fa('[Construct 2] File Chooser plugin not supported on this platform - the object will not be created');
        else {
            this.Lb = document.createElement('input'), this.Lb.type = 'file', this.Lb.setAttribute('accept', this.A[0]), 0 !== this.A[1] && this.Lb.setAttribute('multiple', ''), this.Lb.id = this.A[3], jQuery(this.Lb).appendTo(this.b.nj ? this.b.nj : 'body'), this.ff = !1, 0 === this.A[2] && (jQuery(this.Lb).hide(), this.visible = !1, this.ff = !0);
            var t = this;
            this.Lb.onchange = function () {
                t.b.trigger(Ac.prototype.c.oo, t);
            }, this.bq = this.cq = this.Vp = this.Zp = this.aq = this.Xp = 0, this.Zr(!0), this.b.If(this);
        }
    }, e.Ef = function () {
        this.b.pa || (jQuery(this.Lb).remove(), this.Lb = null);
    }, e.mb = function () {
        this.Zr();
    }, e.Zr = function (t) {
        if (!this.b.pa) {
            var i = this.j.ib(this.x, this.y, !0), s = this.j.ib(this.x, this.y, !1), h = this.j.ib(this.x + this.width, this.y + this.height, !0), e = this.j.ib(this.x + this.width, this.y + this.height, !1), n = this.b.width / this.b.devicePixelRatio, o = this.b.height / this.b.devicePixelRatio;
            !this.visible || !this.j.visible || h <= 0 || e <= 0 || n <= i || o <= s ? (this.ff || jQuery(this.Lb).hide(), this.ff = !0) : (i < 1 && (i = 1), s < 1 && (s = 1), n <= h && (h = n - 1), o <= e && (e = o - 1), n = window.innerWidth, o = window.innerHeight, t || this.Xp !== i || this.aq !== s || this.Zp !== h || this.Vp !== e || this.cq !== n || this.bq !== o ? (this.Xp = i, this.aq = s, this.Zp = h, this.Vp = e, this.cq = n, this.bq = o, this.ff && (jQuery(this.Lb).show(), this.ff = !1), t = Math.round(i) + jQuery(this.b.canvas).offset().left, n = Math.round(s) + jQuery(this.b.canvas).offset().top, jQuery(this.Lb).css('position', 'absolute'), jQuery(this.Lb).offset({
                left: t,
                top: n
            }), jQuery(this.Lb).width(Math.round(h - i)), jQuery(this.Lb).height(Math.round(e - s))) : this.ff && (jQuery(this.Lb).show(), this.ff = !1));
        }
    }, e.ed = function () {
    }, e.Kb = function () {
    }, t.prototype.oo = function () {
        return !0;
    }, h.c = new t(), i.prototype.ah = function (t) {
        this.b.pa || (this.visible = 0 !== t);
    }, h.e = new i(), s.prototype.Es = function (t, i) {
        var s;
        if (this.b.pa)
            s = null;
        else {
            var h = i;
            s = (s = this.Lb.files) ? (h = Math.floor(h)) < 0 || h >= s.length ? null : s[h] : null;
        }
        s ? s.c2url ? t.la(s.c2url) : n && n.createObjectURL ? (s.c2url = n.createObjectURL(s), t.la(s.c2url)) : t.la('') : t.la('');
    }, h.g = new s();
}(), function () {
    function f(t) {
        var i;
        if (!g[t])
            for (g[t] = Array(20), i = 0; i < 20; ++i)
                g[t][i] = 0;
        return g[t];
    }
    function l(t) {
        var i;
        if (!y[t])
            for (y[t] = Array(20), i = 0; i < 20; ++i)
                y[t][i] = 0;
        return y[t];
    }
    function b(t, i) {
        return i ? 4 <= t ? -1 : t + 16 : 16 <= t ? -1 : t;
    }
    function i(t) {
        d[t.gamepad.index] = t.gamepad, e.trigger(Bc.prototype.c.mt, n);
    }
    function s(t) {
        e.trigger(Bc.prototype.c.nt, n), d[t.gamepad.index] = null;
    }
    function t() {
    }
    var h = Bc.prototype;
    h.W = function (t) {
        this.X = t, this.b = t.b;
    }, h.W.prototype.D = function () {
    };
    var e = null, n = null, d = Array(16), g = Array(16), y = Array(16), o = '', r = '', v = null, a = { windows: {} };
    a.windows.firefox = {};
    var c = [0,1,2,3,4,5,8,9,10,11], p = [0,1,[7,6],2,3,[14,15],[12,13]];
    a.windows.firefox.xbox360 = function (t, i) {
        return i ? p.length <= t ? -1 : ja(p[t]) ? p[t] + 16 : p[t] : c.length <= t ? -1 : c[t];
    };
    var u = [2,0,1,3,4,6,5,7,8,9], m = [0,1,2,3,[14,15],[12,13]];
    a.windows.firefox.logitechdualaction = function (t, i) {
        return i ? m.length <= t ? -1 : ja(m[t]) ? m[t] + 16 : m[t] : u.length <= t ? -1 : u[t];
    }, h.S = function (t) {
        this.type = t, e = this.b = t.b, n = this;
    };
    var w = h.S.prototype;
    w.D = function () {
        this.Vu = this.A[0], this.ck = 0;
        var t = navigator.userAgent;
        o = 'windows', /mac/i.test(t) && (o = 'mac'), v = a[o], r = 'chrome', /firefox/i.test(t) && (r = 'firefox'), v = v && v[r], window.addEventListener('webkitgamepadconnected', i, !1), window.addEventListener('webkitgamepaddisconnected', s, !1), window.addEventListener('MozGamepadConnected', i, !1), window.addEventListener('MozGamepadDisconnected', s, !1), window.addEventListener('gamepadconnected', i, !1), window.addEventListener('gamepaddisconnected', s, !1), this.b.If(this), this.bj = [];
    }, w.mb = function () {
        this.bj.length = 0;
        var t = null, i = !1;
        if (navigator.getGamepads ? t = navigator.getGamepads() : navigator.webkitGetGamepads ? t = navigator.webkitGetGamepads() : navigator.mozGetGamepads ? t = navigator.mozGetGamepads() : navigator.msGetGamepads ? t = navigator.msGetGamepads() : this.b.Sp && window.cr_getGamepads ? (t = window.cr_getGamepads(), i = !0) : t = navigator.gamepads || navigator.webkitGamepads || navigator.MozGamepads || d, t) {
            var s, h, e, n, o, r, a;
            for (s = 0, h = t.length; s < h; s++) {
                var c = t[s];
                if (c) {
                    var p = f(s), u = l(s);
                    for (e = f(n = s), n = l(n), o = void 0, o = 0; o < 20; ++o)
                        n[o] = e[o];
                    for (o = e = !i && v ? (e = '', -1 < (n = c.id.toLowerCase()).indexOf('xbox 360') ? e = 'xbox360' : -1 < n.indexOf('logitech dual action') && (e = 'logitechdualaction'), v[e] || b) : b, e = 0, n = c.buttons.length; e < n; e++)
                        0 <= (r = o(e, !1, a = void 0 !== c.buttons[e].value ? c.buttons[e].value : c.buttons[e])) && r < 20 && (p[r] = 100 * a, 50 <= p[r] && u[r] < 50 && (this.ck = r));
                    for (e = 0, n = c.axes.length; e < n; e++)
                        r = o(e, !0, a = c.axes[e]), ja(r) ? 0 <= r && r < 20 && (p[r] = 100 * a) : (p[r[0]] = 0, a <= (p[r[1]] = 0) ? p[r[0]] = Math.abs(100 * a) : p[r[1]] = Math.abs(100 * a));
                    this.bj.push(c);
                } else
                    g[c = s] = null, y[c] = null;
            }
            for (; s < 20; ++s)
                g[t = s] = null, y[t] = null;
        }
    }, w.Fb = function () {
        return { lastButton: this.ck };
    }, w.Qb = function (t) {
        this.ck = t.lastButton;
    }, t.prototype.mt = function () {
        return !0;
    }, t.prototype.nt = function () {
        return !0;
    }, t.prototype.Os = function (t, i) {
        if ((t = Math.floor(t)) < 0 || t >= this.bj.length)
            return !1;
        var s = f(t);
        return !!s && ((s = 50 <= s[i]) && (this.ck = i), s);
    }, t.prototype.rs = function (t, i, s, h) {
        if (t = Math.floor(t), i = Math.floor(i), t < 0 || t >= this.bj.length)
            return !1;
        if (t = f(t)) {
            var e = t[i + 16], n = 0 == i % 2 ? t[i + 16 + 1] : t[i + 16 - 1];
            return Math.sqrt(e * e + n * n) <= this.Vu && (e = 0), ic(e, s, h);
        }
    }, h.c = new t(), h.e = new function () {
    }(), h.g = new function () {
    }();
}(), function () {
    function t() {
    }
    function i() {
    }
    function s() {
    }
    var h = Cc.prototype;
    h.W = function (t) {
        this.behavior = t, this.b = t.b;
    }, h.W.prototype.D = function () {
    }, h.S = function (t, i) {
        this.type = t, this.behavior = t.behavior, this.Na = i, this.b = t.b, this.ve = this.yb = this.xb = 0;
    };
    var e = h.S.prototype;
    e.D = function () {
        this.Og = this.A[0], this.qn = this.A[1], this.enabled = 0 !== this.A[2];
    }, e.Fb = function () {
        return {
            dx: this.xb,
            dy: this.yb,
            cancelStep: this.ve,
            enabled: this.enabled,
            stepMode: this.Og,
            pxPerStep: this.qn
        };
    }, e.Qb = function (t) {
        this.xb = t.dx, this.yb = t.dy, this.ve = t.cancelStep, this.enabled = t.enabled, this.Og = t.stepMode, this.qn = t.pxPerStep;
    }, e.zp = function () {
        return Math.sqrt(this.xb * this.xb + this.yb * this.yb);
    }, e.gb = function () {
        return Math.atan2(this.yb, this.xb);
    }, e.step = function (t, i, s) {
        if (0 !== t || 0 !== i) {
            var h, e, n = this.Na.x, o = this.Na.y, r = Math.round(Math.sqrt(t * t + i * i) / this.qn);
            for (0 === r && (r = 1), e = 1; e <= r; e++) {
                if (h = e / r, this.Na.x = n + t * h, this.Na.y = o + i * h, this.Na.za(), this.b.trigger(s, this.Na), 1 === this.ve) {
                    h = --e / r, this.Na.x = n + t * h, this.Na.y = o + i * h, this.Na.za();
                    break;
                }
                if (2 === this.ve)
                    break;
            }
        }
    }, e.mb = function () {
        var t = this.b.Rj(this.Na), i = this.xb * t;
        t = this.yb * t;
        0 === this.xb && 0 === this.yb || !this.enabled || ((this.ve = 0) === this.Og ? (this.Na.x += i, this.Na.y += t) : 1 === this.Og ? this.step(i, t, Cc.prototype.c.it) : 2 === this.Og ? (this.step(i, 0, Cc.prototype.c.ol), this.ve = 0, this.step(0, t, Cc.prototype.c.pl)) : 3 === this.Og && (this.step(0, t, Cc.prototype.c.pl), this.ve = 0, this.step(i, 0, Cc.prototype.c.ol)), this.Na.za());
    }, t.prototype.Ts = function () {
        return 0 != this.xb || 0 != this.yb;
    }, t.prototype.vs = function (t, i, s) {
        var h;
        switch (t) {
        case 0:
            h = this.zp();
            break;
        case 1:
            h = this.xb;
            break;
        case 2:
            h = this.yb;
        }
        return ic(h, i, s);
    }, t.prototype.it = function () {
        return !0;
    }, t.prototype.ol = function () {
        return !0;
    }, t.prototype.pl = function () {
        return !0;
    }, h.c = new t(), i.prototype.Fo = function () {
        this.yb = this.xb = 0;
    }, i.prototype.hu = function (t, i) {
        var s;
        switch (t) {
        case 0:
            s = this.gb(), this.xb = Math.cos(s) * i, this.yb = Math.sin(s) * i;
            break;
        case 1:
            this.xb = i;
            break;
        case 2:
            this.yb = i;
        }
    }, i.prototype.hs = function (t, i) {
        var s = t * this.b.Rj(this.Na), h = G(i);
        this.xb += Math.cos(h) * s, this.yb += Math.sin(h) * s;
    }, i.prototype.Wt = function (t) {
        t = G(t);
        var i = this.zp();
        this.xb = Math.cos(t) * i, this.yb = Math.sin(t) * i;
    }, i.prototype.ru = function (t) {
        this.ve = t + 1;
    }, i.prototype.xl = function (t) {
        this.enabled = 1 === t;
    }, h.e = new i(), s.prototype.xb = function (t) {
        t.n(this.xb);
    }, s.prototype.yb = function (t) {
        t.n(this.yb);
    }, h.g = new s();
}(), function () {
    function t() {
    }
    var i = Ic.prototype;
    i.W = function (t) {
        this.behavior = t, this.b = t.b;
    }, i.W.prototype.D = function () {
    }, i.S = function (t, i) {
        this.type = t, this.behavior = t.behavior, this.Na = i, this.b = t.b;
    };
    var s = i.S.prototype;
    s.D = function () {
        this.Na.ja.jumpthruEnabled = 0 !== this.A[0];
    }, s.mb = function () {
    }, i.c = new function () {
    }(), t.prototype.xl = function (t) {
        this.Na.ja.jumpthruEnabled = !!t;
    }, i.e = new t();
}(), function () {
    function t() {
    }
    var i = Jc.prototype;
    i.W = function (t) {
        this.behavior = t, this.b = t.b;
    }, i.W.prototype.D = function () {
    }, i.S = function (t, i) {
        this.type = t, this.behavior = t.behavior, this.Na = i, this.b = t.b;
    };
    var s = i.S.prototype;
    s.D = function () {
        this.Na.ja.solidEnabled = 0 !== this.A[0];
    }, s.mb = function () {
    }, i.c = new function () {
    }(), t.prototype.xl = function (t) {
        this.Na.ja.solidEnabled = !!t;
    }, i.e = new t();
}();
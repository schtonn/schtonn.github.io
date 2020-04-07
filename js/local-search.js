'use strict';
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n;
    }
    return Array.from(e);
}
window.addEventListener('DOMContentLoaded', function () {
    var t = !1, n = void 0, r = !0, e = CONFIG.path;
    0 === e.length ? e = 'search.xml' : e.endsWith('json') && (r = !1);
    function T(e, t, n) {
        if (CONFIG.localsearch.unescape) {
            var r = document.createElement('div');
            r.innerText = e, e = r.innerHTML;
        }
        var o = e.length;
        if (0 === o)
            return [];
        var i = 0, a = [], c = [];
        for (n || (t = t.toLowerCase(), e = e.toLowerCase()); -1 < (a = t.indexOf(e, i));)
            c.push({
                position: a,
                word: e
            }), i = a + o;
        return c;
    }
    function S(e, t, n, r) {
        for (var o = n[n.length - 1], i = o.position, a = o.word, c = [], s = 0; i + a.length <= t && 0 !== n.length;) {
            a === r && s++, c.push({
                position: i,
                length: a.length
            });
            var l = i + a.length;
            for (n.pop(); 0 !== n.length && (i = (o = n[n.length - 1]).position, a = o.word, i < l);)
                n.pop();
        }
        return {
            hits: c,
            start: e,
            end: t,
            searchTextCount: s
        };
    }
    function q(n, e) {
        var r = '', o = e.start;
        return e.hits.forEach(function (e) {
            r += n.substring(o, e.position);
            var t = e.position + e.length;
            r += '<b class="search-keyword">' + n.substring(e.position, t) + '</b>', o = t;
        }), r += n.substring(o, e.end);
    }
    function o() {
        if (t) {
            var w = a.value.trim().toLowerCase(), L = w.split(/[-\s]+/);
            1 < L.length && L.push(w);
            var E = [];
            0 < w.length && n.forEach(function (e) {
                var t = e.title, n = e.content, r = e.url, o = t.toLowerCase(), i = n.toLowerCase(), a = [], c = [], s = 0;
                if (L.forEach(function (e) {
                        a = a.concat(T(e, o, !1)), c = c.concat(T(e, i, !1));
                    }), 0 < a.length || 0 < c.length) {
                    var l = a.length + c.length;
                    [a,c].forEach(function (e) {
                        e.sort(function (e, t) {
                            return t.position !== e.position ? t.position - e.position : e.word.length - t.word.length;
                        });
                    });
                    var u = [];
                    if (0 !== a.length) {
                        var h = S(0, t.length, a, w);
                        s += h.searchTextCountInSlice, u.push(h);
                    }
                    for (var d = []; 0 !== c.length;) {
                        var f = c[c.length - 1], p = f.position, g = f.word, v = p - 20, C = p + 80;
                        v < 0 && (v = 0), C < p + g.length && (C = p + g.length), C > n.length && (C = n.length);
                        var y = S(v, C, c, w);
                        s += y.searchTextCountInSlice, d.push(y);
                    }
                    d.sort(function (e, t) {
                        return e.searchTextCount !== t.searchTextCount ? t.searchTextCount - e.searchTextCount : e.hits.length !== t.hits.length ? t.hits.length - e.hits.length : e.start - t.start;
                    });
                    var m = parseInt(CONFIG.localsearch.top_n_per_article, 10);
                    0 <= m && (d = d.slice(0, m));
                    var x = '';
                    0 !== u.length ? x += '<li><a href="' + r + '" class="search-result-title">' + q(t, u[0]) + '</a>' : x += '<li><a href="' + r + '" class="search-result-title">' + t + '</a>', d.forEach(function (e) {
                        x += '<a href="' + r + '"><p class="search-result">' + q(n, e) + '...</p></a>';
                    }), x += '</li>', E.push({
                        item: x,
                        id: E.length,
                        hitCount: l,
                        searchTextCount: s
                    });
                }
            }), 1 === L.length && '' === L[0] ? c.innerHTML = '<div id="no-result"><i class="fa fa-search fa-5x"></i></div>' : 0 === E.length ? c.innerHTML = '<div id="no-result"><i class="fa fa-frown-o fa-5x"></i></div>' : (E.sort(function (e, t) {
                return e.searchTextCount !== t.searchTextCount ? t.searchTextCount - e.searchTextCount : e.hitCount !== t.hitCount ? t.hitCount - e.hitCount : t.id - e.id;
            }), c.innerHTML = '<ul class="search-result-list">' + E.map(function (e) {
                return e.item;
            }).join('') + '</ul>', window.pjax && window.pjax.refresh(c));
        }
    }
    function i() {
        fetch(CONFIG.root + e).then(function (e) {
            return e.text();
        }).then(function (e) {
            t = !0, n = (n = r ? [].concat(_toConsumableArray(new DOMParser().parseFromString(e, 'text/xml').querySelectorAll('entry'))).map(function (e) {
                return {
                    title: e.querySelector('title').textContent,
                    content: e.querySelector('content').textContent,
                    url: e.querySelector('url').textContent
                };
            }) : JSON.parse(e)).filter(function (e) {
                return e.title;
            }).map(function (e) {
                return e.title = e.title.trim(), e.content = e.content ? e.content.trim().replace(/<[^>]+>/g, '') : '', e.url = decodeURIComponent(e.url).replace(/\/{2,}/g, '/'), e;
            }), document.getElementById('no-result').innerHTML = '<i class="fa fa-search fa-5x"></i>', o();
        });
    }
    var a = document.querySelector('.search-input'), c = document.getElementById('search-result');
    CONFIG.localsearch.preload && i(), 'auto' === CONFIG.localsearch.trigger ? a.addEventListener('input', o) : (document.querySelector('.search-icon').addEventListener('click', o), a.addEventListener('keypress', function (e) {
        'Enter' === e.key && o();
    })), document.querySelectorAll('.popup-trigger').forEach(function (e) {
        e.addEventListener('click', function () {
            document.body.style.overflow = 'hidden', document.querySelector('.search-pop-overlay').classList.add('search-active'), a.focus(), t || i();
        });
    });
    function s() {
        document.body.style.overflow = '', document.querySelector('.search-pop-overlay').classList.remove('search-active');
    }
    document.querySelector('.search-pop-overlay').addEventListener('click', function (e) {
        e.target === document.querySelector('.search-pop-overlay') && s();
    }), document.querySelector('.popup-btn-close').addEventListener('click', s), window.addEventListener('pjax:success', s), window.addEventListener('keyup', function (e) {
        'Escape' === e.key && s();
    });
});
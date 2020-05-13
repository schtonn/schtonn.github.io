'use strict';
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n;
    }
    return Array.from(e);
}
HTMLElement.prototype.wrap = function (e) {
    this.parentNode.insertBefore(e, this), this.parentNode.removeChild(this), e.appendChild(this);
}, NexT.utils = {
    wrapImageWithFancyBox: function () {
        document.querySelectorAll('.post-body :not(a) > img, .post-body > img').forEach(function (e) {
            var t = $(e), n = t.attr('data-src') || t.attr('src'), a = t.wrap('<a class="fancybox fancybox.image" href="' + n + '" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent('a');
            t.is('.post-gallery img') ? a.attr('data-fancybox', 'gallery').attr('rel', 'gallery') : t.is('.group-picture img') ? a.attr('data-fancybox', 'group').attr('rel', 'group') : a.attr('data-fancybox', 'default').attr('rel', 'default');
            var r = t.attr('title') || t.attr('alt');
            r && (a.append('<p class="image-caption">' + r + '</p>'), a.attr('title', r).attr('data-caption', r));
        }), $.fancybox.defaults.hash = !1, $('.fancybox').fancybox({
            loop: !0,
            helpers: { overlay: { locked: !1 } }
        });
    },
    registerExtURL: function () {
        document.querySelectorAll('span.exturl').forEach(function (e) {
            var t = document.createElement('a');
            t.href = decodeURIComponent(atob(e.dataset.url).split('').map(function (e) {
                return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
            }).join('')), t.rel = 'noopener external nofollow noreferrer', t.target = '_blank', t.className = e.className, t.innerHTML = e.innerHTML, e.parentNode.replaceChild(t, e);
        });
    },
    registerCopyCode: function () {
        document.querySelectorAll('figure.highlight').forEach(function (e) {
            var t = document.createElement('div');
            e.wrap(t), t.classList.add('highlight-container'), t.insertAdjacentHTML('beforeend', '<div class="copy-btn"><i class="fa fa-clipboard"></i></div>');
            var n = e.parentNode.querySelector('.copy-btn');
            n.addEventListener('click', function (e) {
                var t = e.currentTarget, n = [].concat(_toConsumableArray(t.parentNode.querySelectorAll('.code .line'))).map(function (e) {
                        return e.innerText;
                    }).join('\n'), a = document.createElement('textarea');
                a.style.top = window.scrollY + 'px', a.style.position = 'absolute', a.style.opacity = '0', a.readOnly = !0, a.value = n, document.body.append(a);
                var r = document.getSelection(), o = 0 < r.rangeCount && r.getRangeAt(0);
                a.select(), a.setSelectionRange(0, n.length), a.readOnly = !1;
                var i = document.execCommand('copy');
                CONFIG.copycode.show_result && (t.querySelector('i').className = i ? 'fa fa-check' : 'fa fa-times'), a.blur(), t.blur(), o && (r.removeAllRanges(), r.addRange(o)), document.body.removeChild(a);
            }), n.addEventListener('mouseleave', function (e) {
                setTimeout(function () {
                    e.target.querySelector('i').className = 'fa fa-clipboard';
                }, 300);
            });
        });
    },
    wrapTableWithBox: function () {
        document.querySelectorAll('table').forEach(function (e) {
            var t = document.createElement('div');
            t.className = 'table-container', e.wrap(t);
        });
    },
    registerVideoIframe: function () {
        document.querySelectorAll('iframe').forEach(function (t) {
            if (["www.youtube.com","player.vimeo.com","player.youku.com","player.bilibili.com","www.tudou.com"].some(function (e) {
                    return t.src.includes(e);
                }) && !t.parentNode.matches('.video-container')) {
                var e = document.createElement('div');
                e.className = 'video-container', t.wrap(e);
                var n = Number(t.width), a = Number(t.height);
                n && a && (t.parentNode.style.paddingTop = a / n * 100 + '%');
            }
        });
    },
    registerScrollPercent: function () {
        var r = document.querySelector('.back-to-top'), o = document.querySelector('.reading-progress-bar');
        window.addEventListener('scroll', function () {
            if (r || o) {
                var e = document.querySelector('.container').offsetHeight, t = window.innerHeight, n = t < e ? e - t : document.body.scrollHeight - t, a = Math.min(100 * window.scrollY / n, 100);
                r && (r.classList.toggle('back-to-top-on', 50 < window.scrollY), r.querySelector('span').innerText = Math.round(a) + '%'), o && (o.style.width = a.toFixed(2) + '%');
            }
        }), r && r.addEventListener('click', function () {
            window.anime({
                targets: document.scrollingElement,
                duration: 500,
                easing: 'linear',
                scrollTop: 0
            });
        });
    },
    registerTabsTag: function () {
        document.querySelectorAll('.tabs ul.nav-tabs .tab').forEach(function (e) {
            e.addEventListener('click', function (e) {
                e.preventDefault();
                var t = e.currentTarget;
                if (!t.classList.contains('active')) {
                    [].concat(_toConsumableArray(t.parentNode.children)).forEach(function (e) {
                        e.classList.remove('active');
                    }), t.classList.add('active');
                    var n = document.getElementById(t.querySelector('a').getAttribute('href').replace('#', ''));
                    [].concat(_toConsumableArray(n.parentNode.children)).forEach(function (e) {
                        e.classList.remove('active');
                    }), n.classList.add('active'), n.dispatchEvent(new Event('tabs:click', { bubbles: !0 }));
                }
            });
        }), window.dispatchEvent(new Event('tabs:register'));
    },
    registerCanIUseTag: function () {
        window.addEventListener('message', function (e) {
            var t = e.data;
            if ('string' == typeof t && t.includes('ciu_embed')) {
                var n = t.split(':')[1], a = t.split(':')[2];
                document.querySelector('iframe[data-feature=' + n + ']').style.height = parseInt(a, 10) + 5 + 'px';
            }
        }, !1);
    },
    registerActiveMenuItem: function () {
        document.querySelectorAll('.menu-item').forEach(function (e) {
            var t = e.querySelector('a[href]');
            if (t) {
                var n = t.pathname === location.pathname || t.pathname === location.pathname.replace('index.html', ''), a = !CONFIG.root.startsWith(t.pathname) && location.pathname.startsWith(t.pathname);
                e.classList.toggle('menu-item-active', t.hostname === location.hostname && (n || a));
            }
        });
    },
    registerLangSelect: function () {
        var n = document.querySelector('.lang-select');
        n && (n.value = CONFIG.page.lang, n.addEventListener('change', function () {
            var e = n.options[n.selectedIndex];
            document.querySelector('.lang-select-label span').innerText = e.text;
            var t = e.dataset.href;
            window.pjax ? window.pjax.loadUrl(t) : window.location.href = t;
        }));
    },
    registerSidebarTOC: function () {
        var i = document.querySelectorAll('.post-toc li'), c = [].concat(_toConsumableArray(i)).map(function (e) {
                var t = e.querySelector('a.nav-link');
                return t.addEventListener('click', function (e) {
                    e.preventDefault();
                    var t = document.getElementById(e.currentTarget.getAttribute('href').replace('#', '')).getBoundingClientRect().top + window.scrollY;
                    window.anime({
                        targets: document.scrollingElement,
                        duration: 500,
                        easing: 'linear',
                        scrollTop: t + 10
                    });
                }), document.getElementById(t.getAttribute('href').replace('#', ''));
            }), l = document.querySelector('.post-toc-wrap');
        !function r(o) {
            o = Math.floor(o + 10000);
            var t = new IntersectionObserver(function (e, t) {
                var n = document.documentElement.scrollHeight + 100;
                if (o < n)
                    return t.disconnect(), void r(n);
                var a = function (e) {
                    var t = 0, n = e[t];
                    if (0 < n.boundingClientRect.top)
                        return 0 === (t = c.indexOf(n.target)) ? 0 : t - 1;
                    for (; t < e.length; t++) {
                        if (!(e[t].boundingClientRect.top <= 0))
                            return c.indexOf(n.target);
                        n = e[t];
                    }
                    return c.indexOf(n.target);
                }(e);
                !function (e) {
                    if (!e.classList.contains('active-current')) {
                        document.querySelectorAll('.post-toc .active').forEach(function (e) {
                            e.classList.remove('active', 'active-current');
                        }), e.classList.add('active', 'active-current');
                        for (var t = e.parentNode; !t.matches('.post-toc');)
                            t.matches('li') && t.classList.add('active'), t = t.parentNode;
                        window.anime({
                            targets: l,
                            duration: 200,
                            easing: 'linear',
                            scrollTop: l.scrollTop - l.offsetHeight / 2 + e.getBoundingClientRect().top - l.getBoundingClientRect().top
                        });
                    }
                }(i[a]);
            }, {
                rootMargin: o + 'px 0px -100% 0px',
                threshold: 0
            });
            c.forEach(function (e) {
                e && t.observe(e);
            });
        }(document.documentElement.scrollHeight);
    },
    hasMobileUA: function () {
        var e = navigator.userAgent;
        return /iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e);
    },
    isTablet: function () {
        return window.screen.width < 992 && 767 < window.screen.width && this.hasMobileUA();
    },
    isMobile: function () {
        return window.screen.width < 767 && this.hasMobileUA();
    },
    isDesktop: function () {
        return !this.isTablet() && !this.isMobile();
    },
    supportsPDFs: function () {
        var e = navigator.userAgent, t = e.includes('irefox') && 18 < parseInt(e.split('rv:')[1].split('.')[0], 10), n = void 0 !== navigator.mimeTypes['application/pdf'], a = /iphone|ipad|ipod/i.test(e.toLowerCase());
        return t || n && !a;
    },
    initSidebarDimension: function () {
        var e = document.querySelector('.sidebar-nav'), t = 'none' !== e.style.display ? e.offsetHeight : 0, n = CONFIG.sidebar.offset || 12, a = CONFIG.back2top.enable && CONFIG.back2top.sidebar ? document.querySelector('.back-to-top').offsetHeight : 0, r = 2 * CONFIG.sidebar.padding + t + a;
        'Pisces' !== CONFIG.scheme && 'Gemini' !== CONFIG.scheme || (r += 2 * n - 22);
        var o = document.body.offsetHeight - r + 'px';
        document.querySelector('.site-overview-wrap').style.maxHeight = o, document.querySelector('.post-toc-wrap').style.maxHeight = o;
    },
    updateSidebarPosition: function () {
        var e = document.querySelector('.sidebar-nav'), t = document.querySelector('.post-toc');
        if (t ? (e.style.display = '', e.classList.add('motion-element'), document.querySelector('.sidebar-nav-toc').click()) : (e.style.display = 'none', e.classList.remove('motion-element'), document.querySelector('.sidebar-nav-overview').click()), NexT.utils.initSidebarDimension(), this.isDesktop() && 'Pisces' !== CONFIG.scheme && 'Gemini' !== CONFIG.scheme) {
            var n = CONFIG.page.sidebar;
            'boolean' != typeof n && (n = 'always' === CONFIG.sidebar.display || 'post' === CONFIG.sidebar.display && t), n && window.dispatchEvent(new Event('sidebar:show'));
        }
    },
    getScript: function (e, n, t) {
        if (t)
            n();
        else {
            var a = document.createElement('script');
            a.onload = a.onreadystatechange = function (e, t) {
                !t && a.readyState && !/loaded|complete/.test(a.readyState) || (a.onload = a.onreadystatechange = null, a = void 0, !t && n && setTimeout(n, 0));
            }, a.src = e, document.head.appendChild(a);
        }
    },
    loadComments: function (e, n) {
        if (CONFIG.comments.lazyload && e) {
            var t = new IntersectionObserver(function (e, t) {
                e[0].isIntersecting && (n(), t.disconnect());
            });
            return t.observe(e), t;
        }
        n();
    }
};
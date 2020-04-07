'use strict';
window.addEventListener('DOMContentLoaded', function () {
    var t = CONFIG.algolia, e = t.indexName, a = t.appID, i = t.apiKey, s = instantsearch({
            indexName: e,
            searchClient: algoliasearch(a, i),
            searchFunction: function (e) {
                document.querySelector('.search-input').value && e.search();
            }
        });
    window.pjax && s.on('render', function () {
        window.pjax.refresh(document.getElementById('algolia-hits'));
    }), s.addWidgets([instantsearch.widgets.configure({hitsPerPage:t.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:t.labels.input_placeholder,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#algolia-stats",templates:{text:function(e){return t.labels.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)+'\n            <span class="algolia-powered">\n              <img src="'+CONFIG.root+'images/algolia_logo.svg" alt="Algolia">\n            </span>\n            <hr>'}}}),instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(e){return'<a href="'+(e.permalink?e.permalink:CONFIG.root+e.path)+'" class="algolia-hit-item-link">'+e._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="algolia-hits-empty">\n              '+t.labels.hits_empty.replace(/\$\{query}/,e.query)+"\n            </div>"}},cssClasses:{item:"algolia-hit-item"}}),instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:!1,showFirst:!1,showLast:!1,templates:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]), s.start(), document.querySelectorAll('.popup-trigger').forEach(function (e) {
        e.addEventListener('click', function () {
            document.body.style.overflow = 'hidden', document.querySelector('.search-pop-overlay').classList.add('search-active'), document.querySelector('.search-input').focus();
        });
    });
    function n() {
        document.body.style.overflow = '', document.querySelector('.search-pop-overlay').classList.remove('search-active');
    }
    document.querySelector('.search-pop-overlay').addEventListener('click', function (e) {
        e.target === document.querySelector('.search-pop-overlay') && n();
    }), document.querySelector('.popup-btn-close').addEventListener('click', n), window.addEventListener('pjax:success', n), window.addEventListener('keyup', function (e) {
        'Escape' === e.key && n();
    });
});
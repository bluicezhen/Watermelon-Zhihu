// ==UserScript==
// @name         Watermelon Zhihu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function removeZhuanLan() {
        for (let i = window.cardListLength; i < eCardList.children.length; i++) {
            let eMetaList = eCardList.children[i].getElementsByTagName('meta');
            for (let j = 0; j < eMetaList.length; j++) {
                if (eMetaList[j].getAttribute('itemprop') === 'url' && eMetaList[j].getAttribute('content').match('zhuanlan')) {
                    eCardList.children[i].hidden = true;
                }
            }
        }
    }

    window.cardListLength = 0;
    let eCardList = document.getElementsByClassName("TopstoryMain")[0].children[0];


    eCardList.addEventListener('DOMNodeInserted', function () {
        if (window.cardListLength !== eCardList.children.length) {
            removeZhuanLan();
        }
    })
})();

// ==UserScript==
// @name         BBS默认宽版
// @namespace    https://github.com/Cappuccin0/bbs_auto_widescreen
// @version      0.1
// @description  自动识别页面上文字为『切换为宽版』的链接并模拟点击
// @author       H.G
// @match        http://*/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var getText = function( elems ) {
        var ret = "", elem;
        for ( var i = 0; elems[i]; i++ )
        {
            elem = elems[i];
            // Get the text from text nodes and CDATA nodes
            if ( elem.nodeType === 3 || elem.nodeType === 4 )
                ret += elem.nodeValue;
            // Traverse everything else, except comment nodes
            else if ( elem.nodeType !== 8 )
                ret += getText( elem.childNodes );
        }
        return ret;
    };

    var checkAndToggle = function(ls)
    {
        if (!ls || !ls.length)
            return;

        for (var i=0; i < ls.length; i++)
        {
            if (getText([ls[i]]) == "切换到宽版")
                ls[i].click();
        }
    };

    checkAndToggle(document.getElementsByTagName("a"));
    //checkAndToggle(document.getElementsByTagName("span"));

})();

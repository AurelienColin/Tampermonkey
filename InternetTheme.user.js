// ==UserScript==
// @name         InternetTheme
// @include	     *google.*
// @include      *wikipedia.*
// @version      5.0
// @author       Rignak
// ==/UserScript==
// CSS
function addGlobalStyle(css) {
var head, style;
head = document.getElementsByTagName('head')[0];
if (!head) { return; }
style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css;
head.appendChild(style);
}


var index, bodybg;
if (window.location.href.indexOf("wikipedia") >= 0) {
    index = Math.floor(Math.random() * 15) + 1;
    bodybg = ["chrome-extension://jooekinjmmfngaakmjldmbddeoooefme/wikipedia/", index, ".jpg"].join('');
    addGlobalStyle('body { background: transparent url(" '+bodybg+' ") no-repeat bottom left fixed !important; z-index: 1 !important;}');}
else {
    index = Math.floor(Math.random() * 39) + 1;
    bodybg = ["chrome-extension://jooekinjmmfngaakmjldmbddeoooefme/google2/", index, ".jpg"].join('');
    addGlobalStyle('body { background: transparent url(" '+bodybg+' ") no-repeat bottom right fixed !important; z-index: 1 !important;}');}


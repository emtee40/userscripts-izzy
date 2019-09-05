// ==UserScript==
// @name        YT2Invidio
// @namespace   http://projects.izzysoft.de/
// @author      IzzySoft
// @description Point YouTube links to Invidio -- and Twitter links to Nitter
// @license     CC BY-NC-SA
// @include     *
// @exclude     https://invidio.us/*
// @version     1.1.0
// @run-at      document-idle
// @grant       unsafeWindow
// @homepage    https://codeberg.org/izzy/userscripts
// @updateURL   https://codeberg.org/izzy/userscripts/raw/branch/master/yt2invidio.user.js
// ==/UserScript==

for(var i = 0; i < document.links.length; i++) {
  var elem = document.links[i];
  // Youtube: https://www.youtube.com/watch?v=cRRA2xRRgl8 || https://www.youtube.com/channel/dfqwfhqQ34er
  if (elem.href.match(/(www\.)?youtube.com(\/watch\?v=[a-z0-9_-]+)/i) || elem.href.match(/(www\.)?youtube.com(\/channel\/[a-z0-9_-]+)/i)) {
    elem.href='https://invidio.us'+RegExp.$2;
  } else if (elem.href.match(/(www\.)?youtu.be\/([a-z0-9_-]+)/i)) {
    elem.href='https://invidio.us/watch?v='+RegExp.$2;
  // Twitter
  } else if (elem.href.match(/(mobile\.)?twitter\.com\/([^&#]+)/i)) {
    elem.href='https://nitter.net/'+RegExp.$2;
  }
}

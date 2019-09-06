// ==UserScript==
// @name        YT2Invidio
// @namespace   http://projects.izzysoft.de/
// @author      IzzySoft
// @description Point YouTube links to Invidio -- and Twitter links to Nitter
// @license     CC BY-NC-SA
// @include     *
// @version     1.1.1
// @run-at      document-idle
// @grant       unsafeWindow
// @homepageURL https://codeberg.org/izzy/userscripts
// @downloadURL https://codeberg.org/izzy/userscripts/raw/branch/master/yt2invidio.user.js
// ==/UserScript==

for(var i = 0; i < document.links.length; i++) {
  var elem = document.links[i];

  // Youtube: https://www.youtube.com/watch?v=cRRA2xRRgl8 || https://www.youtube.com/channel/dfqwfhqQ34er
  // only rewrite if we're not on Invidio already (too keep the "watch this on YouTube" links intact)
  if (elem.href.match(/(www\.)?youtube.com(\/watch\?v=[a-z0-9_-]+)/i) || elem.href.match(/(www\.)?youtube.com(\/channel\/[a-z0-9_-]+)/i)) {
    if (location.hostname != 'invidio.us') { elem.href='https://invidio.us'+RegExp.$2; }
  } else if (elem.href.match(/(www\.)?youtu.be\/([a-z0-9_-]+)/i)) {
    if (location.hostname != 'invidio.us') { elem.href='https://invidio.us/watch?v='+RegExp.$2; }

  // Twitter
  } else if (elem.href.match(/(mobile\.)?twitter\.com\/([^&#]+)/i)) {
    elem.href='https://nitter.net/'+RegExp.$2;
  }
}

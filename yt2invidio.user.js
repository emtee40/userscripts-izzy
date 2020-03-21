// ==UserScript==
// @name        YT2Invidio
// @namespace   de.izzysoft
// @author      Izzy
// @description Point YouTube links to Invidious, Twitter to Nitter, Instagram to Bibliogram
// @license     CC BY-NC-SA
// @include     *
// @version     1.3.1
// @run-at      document-idle
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @grant       GM_openInTab
// @grant       GM.openInTab
// @grant       unsafeWindow
// @homepageURL https://codeberg.org/izzy/userscripts
// @downloadURL https://codeberg.org/izzy/userscripts/raw/branch/master/yt2invidio.user.js
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// ==/UserScript==

// Default Config
const defaultConfig = {
  hosts: {invidious: "invidio.us", nitter: "nitter.net", bibliogram: "bibliogram.art"}
};
/*
console.log(defaultConfig.hosts);
console.log(obj.hosts.hasOwnProperty('bibliogram')); // true
*/

// Get the Invidious instance to use for rewrite
GM.getValue('YT2IConfig',JSON.stringify(defaultConfig)).then(function(result) {
  rewriteLinks(result);
});


// Do the actual rewrite
function rewriteLinks(config) {
  console.log(`Using '${config}' for rewrite`);
  var cfg = JSON.parse(config);
  var videohost = cfg.hosts.invidious;
  var nitterhost = cfg.hosts.nitter;
  var bibliogramhost = cfg.hosts.bibliogram;
  console.log('Invidious: '+videohost)
  console.log('Nitter: '+nitterhost)
  console.log('Bibliogram: '+bibliogramhost)
  for(var i = 0; i < document.links.length; i++) {
    var elem = document.links[i];

    // Youtube: https://www.youtube.com/watch?v=cRRA2xRRgl8 || https://www.youtube.com/channel/dfqwfhqQ34er || https://www.youtube.com/playlist?list=PLjV3HijScGMynGvjJrvNNd5Q9pPy255dL
    // only rewrite if we're not on Invidious already (too keep the "watch this on YouTube" links intact)
    if (elem.href.match(/((www|m)\.)?youtube.com(\/(watch\?v|playlist\?list)=[a-z0-9_-]+)/i) || elem.href.match(/((www|m)\.)?youtube.com(\/channel\/[a-z0-9_-]+)/i)) {
      if (location.hostname != videohost) { elem.href='https://'+videohost+RegExp.$3; }
    } else if (elem.href.match(/((www|m)\.)?youtu.be\/([a-z0-9_-]+)/i)) {
      if (location.hostname != videohost) { elem.href='https://'+videohost+'/watch?v='+RegExp.$3; }

    // Twitter
    } else if (nitterhost != '' && elem.href.match(/(mobile\.)?twitter\.com\/([^&#]+)/i)) {
      if (location.hostname != nitterhost) elem.href='https://'+nitterhost+'/'+RegExp.$2;
    }

    // Bibliogram
    else if (elem.href.match(/(www\.)?instagram\.com\/p\/([^&#/]+)/i)) { // profile
      if (location.hostname != bibliogramhost) {
        elem.href = 'https://'+bibliogramhost+'/p/' + RegExp.$2;
      }
    } else if (elem.href.match(/(www\.)?instagram\.com\/([^&#/]+)/i)) { // image or video
      if (location.hostname != bibliogramhost) {
        elem.href = 'https://'+bibliogramhost+'/u/' + RegExp.$2;
      }
    }
  }
  console.log('Rewrite done.')
}


// Give the user the possibility to set a different preferred instance
// A list of available instances can be found at
// https://github.com/omarroth/invidious/wiki/Invidious-Instances
// https://github.com/zedeus/nitter/wiki/Instances
// https://github.com/cloudrac3r/bibliogram/wiki/Instances
async function setInvidiousInstance() {
  let cfgs = await GM.getValue('YT2IConfig',JSON.stringify(defaultConfig));
  cfg = JSON.parse(cfgs);
  var vhost = prompt('Set Invidious instance to:', cfg.hosts.invidious);
  if (vhost != null) {
    cfg.hosts.invidious = vhost;
    GM.setValue('YT2IConfig',JSON.stringify(cfg));
  }
}
async function setNitterInstance() {
  let cfgs = await GM.getValue('YT2IConfig',JSON.stringify(defaultConfig));
  cfg = JSON.parse(cfgs);
  var vhost = prompt('Set Nitter instance to:', cfg.hosts.nitter);
  if (vhost != null) {
    cfg.hosts.nitter = vhost;
    GM.setValue('YT2IConfig',JSON.stringify(cfg));
  }
}
async function setBibliogramInstance() {
  let cfgs = await GM.getValue('YT2IConfig',JSON.stringify(defaultConfig));
  cfg = JSON.parse(cfgs);
  var vhost = prompt('Set Bibliogram instance to:', cfg.hosts.bibliogram);
  if (vhost != null) {
    cfg.hosts.bibliogram = vhost;
    GM.setValue('YT2IConfig',JSON.stringify(cfg));
  }
}


// open tab with instance list from Invidious/Nitter/Bibliogram wiki
function openInvidiousList() {
  GM.openInTab('https://github.com/omarroth/invidious/wiki/Invidious-Instances', { active: true, insert: true });
}
function openNitterList() {
  GM.openInTab('https://github.com/zedeus/nitter/wiki/Instances', { active: true, insert: true });
}
function openBibliogramList() {
  GM.openInTab('https://github.com/cloudrac3r/bibliogram/wiki/Instances', { active: true, insert: true });
}

GM_registerMenuCommand('Set Invidious instance',setInvidiousInstance);
GM_registerMenuCommand('Show list of known Invidious instances', openInvidiousList );
GM_registerMenuCommand('Set Nitter instance',setNitterInstance);
GM_registerMenuCommand('Show list of known Nitter instances', openNitterList );
GM_registerMenuCommand('Set Bibliogram instance',setBibliogramInstance);
GM_registerMenuCommand('Show list of known Bibliogram instances', openBibliogramList );

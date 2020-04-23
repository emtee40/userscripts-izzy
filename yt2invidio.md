### What does this script do?
For a little more privacy: rewrite YouTube links to point to your favorite Invidious instance. Details on the „why" can be found [here](https://www.kuketz-blog.de/empfehlungsecke/#youtube).

If you are using the [Mouseover Popup Image Viewer](https://greasyfork.org/de/scripts/404-mouseover-popup-image-viewer) (MPIV), here's the rule for the preview image:

    {"r":"(invidio\\.us/watch.+?v=|v/)([a-z0-9_-]+)", "s":"https://invidio.us/vi/$2/mqdefault.jpg"}

Additionally, since version 1.1.0 (2019-09-05) also rewrites Twitter links to Nitter.Net – and starting with v1.2.6 (2020-03-14) also Instagram links to Bibliogram. Reasoning is the same – and Nitter is to Twitter what Invidio.us is to YouTube, etc.

### How to select your preferred instance?
If you don't like the pre-configured one, you can simply change it via the UserScript menu. A list of instances can be found [in the Invidious Wiki](https://github.com/omarroth/invidious/wiki/Invidious-Instances), another one at [instances.invidio.us](https://instances.invidio.us/). Similarly, the Nitter project has [a list in its wiki](https://github.com/zedeus/nitter/wiki/Instances), as [does Bibliogram](https://github.com/cloudrac3r/bibliogram/wiki/Instances). The userscript menu offers to open those pages in a new tab, next to the one you currently have focused.

### Script history:
* v1.4.1 (2020-04-23): Insta2Biblio: honor "/tv/" links
* v1.4.0 (2020-04-16): added support for embedded (YT) videos
* v1.3.2 (2020-03-23): setInstance: filtering hostname from input values (when user e.g. adds a full url instead just the hostname)
* v1.3.1 (2020-03-21): Bibliogram doesn't like trailing slashes (fixed)
* v1.3.0 (2020-03-14): Add support to rewrite Instagram links to Bibliogram
* v1.2.5 (2020-03-14): Rewrite to also allow setting Nitter instance. If you switched your Invidious instance, you need to set that again (once) as settings structure changed.
* v1.2.4 (2020-02-20): YT: also catch playlist links
* v1.2.3 (2020-01-27): YT: also catch m.youtube.com
* v1.2.2 (2020-01-17): exempt Twitter links on nitter.net from being rewritten
* v1.2.1 (2019-12-06): add menu item to open Invidious Wiki page with list of instances
* v1.2.0 (2019-10-30): rewrite. Now you can set the Invidious instance to be used via menu command, no script edit needed.
* v1.1.2 (2019-10-07): make it easier to switch to your favorite Invidious instance (just change a single variable); make invidious.snopyta.org the default
* v1.1.1 (2019-09-06): do not exclude invidio.us but just ignore YT links there instead
* v1.1.0 (2019-09-05): add Twitter2Nitter
* v1.0.4 (2019-07-27): add update URL
* v1.0.3 (26.07.2019): also deal with YT channels
* v1.0.2 (20.03.2019): excluding Invidious itself from link rewriting so one can follow their YT links if needed
* v1.0.1 (30.11.2018): also cover youtu.be
* v1.0.0 (26.11.2018): initial version

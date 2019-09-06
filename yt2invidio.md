For a little more privacy: rewrite YouTube links to point to invidio.us. Details on the „why" can be found [here](https://www.kuketz-blog.de/empfehlungsecke/#youtube).

If you are using the [Mouseover Popup Image Viewer](https://greasyfork.org/de/scripts/404-mouseover-popup-image-viewer) (MPIV), here's the rule for the preview image:

    {"r":"(invidio\\.us/watch.+?v=|v/)([a-z0-9_-]+)", "s":"https://invidio.us/vi/$2/mqdefault.jpg"}

Additionally, since version 1.1.0 (2019-09-05) also rewrites Twitter links to Nitter.Net. Reasoning is the same – and Nitter is to Twitter what Invidio.us is to YouTube.
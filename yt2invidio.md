### What does this script do?
For a little more privacy: rewrite YouTube links to point to your favorite Invidious instance. Details on the „why" can be found [here](https://www.kuketz-blog.de/empfehlungsecke/#youtube).

If you are using the [Mouseover Popup Image Viewer](https://greasyfork.org/de/scripts/404-mouseover-popup-image-viewer) (MPIV), here's the rule for the preview image:

    {"r":"(invidio\\.us/watch.+?v=|v/)([a-z0-9_-]+)", "s":"https://invidio.us/vi/$2/mqdefault.jpg"}

Additionally, since version 1.1.0 (2019-09-05) also rewrites Twitter links to Nitter.Net. Reasoning is the same – and Nitter is to Twitter what Invidio.us is to YouTube.

### How to select your preferred instance?
If you don't like the pre-configured one, you can simply change the `videohost` variable at the top of the script. Note that by editing the script inside Greasemonkey, the monkey will stop updating to preserve your changes – so you will then need to update the script manually.

### Script history:
* v1.1.2 (2019-10-07): make it easier to switch to your favorite Invidious instance (just change a single variable); make invidious.snopyta.org the default
* v1.1.1 (2019-09-06): do not exclude invidio.us but just ignore YT links there instead
* v1.1.0 (2019-09-05): add Twitter2Nitter
* v1.0.4 (2019-07-27): add update URL
* v1.0.3 (26.07.2019): also deal with YT channels
* v1.0.2 (20.03.2019): excluding Invidious itself from link rewriting so one can follow their YT links if needed
* v1.0.1 (30.11.2018): also cover youtu.be
* v1.0.0 (26.11.2018): initial version

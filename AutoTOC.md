*AutoTOC* automatically creates a table of contents for all HTML-headers on a web page.

### Background
This script was originally written by *Rune Skaug* (see: [UserScripts-Mirror](http://userscripts-mirror.org/scripts/show/1301), [UserJS.org](http://userjs.org/scripts/browser/enhancements/auto-toc), [his blog](https://electricdevelopment.blogspot.com/)).

I use this script for years, and though it was last updated in 2006, it still does a great job: it adds a TOC (table-of-contents) to each page, making long pages much easier to navigate. For the TOC not eating screen space unnecessarily, Rune had implemented a „toggle“ so you could switch it on and off. I decided it was much easier to generally hide the TOC to 95% – leaving just an indicator un-hiding it on mouse over; so I wrote a UserStyle for that purpose and uploaded it to UserStyles.Org ([Hide/unHide AutoTOC navigation bar](https://userstyles.org/styles/22265/hide-unhide-autotoc-navigation-bar)). With that site having become much too bloated, and Rune no longer working on the script (his last update was in 2006, as pointed out already), I've now integrated the CSS directly with the script for your convenience and started improving the script in other regards (see changelog below).

### Note on header levels
Currently, the script only covers `h1` to `h4` – which is fine with most sites, and I never felt the need for more. I've been asked, though, why not adding `h5` and `h6` as well. The answer is the „drop-up“ would become much too large with some sites.

If you want those two additional levels, it's probably achieved as easy as editing the 3 places in the script and extend them. You see by the history that updates are few (the script works and does what it should, so I hardly feel the need to update), so the danger of collision is quite low. I'd however accept PRs adding this if it's optional – e.g. by having a check-box next to the „drop-up“ which the user can tick – or untick, and which then persists its state until (un)ticked again.

### History
* 1.9.2 (2024-06-20)
    - make sure script is not run before the page is fully loaded (should make it work again on recent Firefox versions)
* 1.9.1 (2021-02-14)
    - quick fix to make the script work with GreaseMonkey 4.x
* 1.9 (2020-01-29)
    - adding fallback to „inline styles“ when injection of CSS rules failed. Should now work everywhere (please report with URL if it still fails somewhere)
* 1.8 (2020-01-28)  
  Making the script work with more sites (having stricter [CSP](https://en.wikipedia.org/wiki/Content_Security_Policy). Note that there are still some left with even stricter rules where AutoTOC doesn't yet work. I'm looking to fix that, but no ETA yet.
    - minor cleanup
    - fixed CSS using GM_addStyle (to circumvent CSP on some sites), so now TOC also shows up on e.g. Github
    - fix SELECT onChange for CSP, so TOC now also *works* on sites like Github
    - fix „x“ hide button onClick to work with stricter CSP (like on Github). Bring back the closed TOC via GM menu („AutoTOC: Toggle display“).
* 1.7.66 (2020-01-20)
    - first version by Izzy
    - integrated my previously separate UserStyle to hide the TOC unless hovered
* 1.7.65 (2006-12-25)
    - last version by Rune Skaug
* 1.7
    - Minor fixes
    - screen-only stylesheet
* 1.6
    - Xpath search replaces treewalker, FF1,1.5,Opera9
* 1.5
    - Minor adjustments for GM 0.6/FF1.5
    - Moved closebutton to the left
    - Flash on select
* 1.4
    - Disables adding of menu item
    - Choose your own string pattern to match (RXmatch)
* 1.3
    - Sets a session cookie for TOC hiding (per domain)
* 1.2 
    - Only show visible headings (Firefox); Work around Firefox rendering bugs; Adds Menu item: AutoTOC: Toggle display (Firefox)
* 1.1
    - Adds Hide TOC button
* 1.0 (2005-07-06) - Basic version

/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared with history (2811), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 3);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Firefox Home (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
user_pref("browser.startup.homepage", "about:home");
/* 0104: set NEWTAB page
 * true=Firefox Home (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs ***/
user_pref("browser.newtabpage.enabled", true);
/* 0701: disable IPv6
 * IPv6 can be abused, especially with MAC addresses, and can leak with VPNs: assuming
 * your ISP and/or router and/or website is IPv6 capable. Most sites will fall back to IPv4
 * [STATS] Firefox telemetry (Sept 2022) shows ~8% of successful connections are IPv6
 * [NOTE] This is an application level fallback. Disabling IPv6 is best done at an
 * OS/network level, and/or configured properly in VPN setups. If you are not masking your IP,
 * then this won't make much difference. If you are masking your IP, then it can only help.
 * [NOTE] PHP defaults to IPv6 with "localhost". Use "php -S 127.0.0.1:PORT"
 * [TEST] https://ipleak.org/
 * [1] https://www.internetsociety.org/tag/ipv6-security/ (Myths 2,4,5,6) ***/
user_pref("network.dns.disableIPv6", false);
/* 0801: disable location bar using search
 * Don't leak URL typos to a search engine, give an error message instead
 * Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com"
 * [NOTE] This does not affect explicit user action such as using search buttons in the
 * dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo)
 * [SETUP-CHROME] Override this if you trust and use a privacy respecting search engine ***/
user_pref("keyword.enabled", true);
/* 0804: disable live search suggestions
 * [NOTE] Both must be true for the location bar to work
 * [SETUP-CHROME] Override these if you trust and use a privacy respecting search engine
 * [SETTING] Search>Provide search suggestions | Show search suggestions in address bar results ***/
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
/* 2022: disable all DRM content (EME: Encryption Media Extension)
 * Optionally hide the setting which also disables the DRM prompt
 * [SETUP-WEB] e.g. Netflix, Amazon Prime, Hulu, HBO, Disney+, Showtime, Starz, DirectTV
 * [SETTING] General>DRM Content>Play DRM-controlled content
 * [TEST] https://bitmovin.com/demos/drm
 * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next ***/
user_pref("media.eme.enabled", true);
   // user_pref("browser.eme.ui.enabled", false);
/* 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME]
 * [NOTE] If "history" is true, downloads will also be cleared
 * [NOTE] "sessions": Active Logins: refers to HTTP Basic Authentication [1], not logins via cookies
 * [1] https://en.wikipedia.org/wiki/Basic_access_authentication ***/
user_pref("privacy.clearOnShutdown.cache", true);     // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.downloads", false); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.formdata", true);  // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", false);   // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.sessions", true);  // [DEFAULT: true]
   // user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT: false]
/* 4501: enable privacy.resistFingerprinting [FF41+]
 * [SETUP-WEB] RFP can cause some website breakage: mainly canvas, use a site exception via the urlbar
 * RFP also has a few side effects: mainly timezone is UTC0, and websites will prefer light theme
 * [1] https://bugzilla.mozilla.org/418986 ***/
user_pref("privacy.resistFingerprinting", false);
/* 4504: enable RFP letterboxing [FF67+]
 * Dynamically resizes the inner window by applying margins in stepped ranges [2]
 * If you use the dimension pref, then it will only apply those resolutions.
 * The format is "width1xheight1, width2xheight2, ..." (e.g. "800x600, 1000x1000")
 * [SETUP-WEB] This is independent of RFP (4501). If you're not using RFP, or you are but
 * dislike the margins, then flip this pref, keeping in mind that it is effectively fingerprintable
 * [WARNING] DO NOT USE: the dimension pref is only meant for testing
 * [1] https://bugzilla.mozilla.org/1407366
 * [2] https://hg.mozilla.org/mozilla-central/rev/6d2d7856e468#l2.32 ***/
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]
/* 4520: disable WebGL (Web Graphics Library)
 * [SETUP-WEB] If you need it then override it. RFP still randomizes canvas for naive scripts ***/
user_pref("webgl.disabled", false);
/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);

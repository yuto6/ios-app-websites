# Rollout and measurement

## Confirmed resources

One dedicated Firebase project and its default Hosting site were created: `yuto-ios-app-websites`. Firebase `hosting:sites:list` confirmed default URL `https://yuto-ios-app-websites.web.app`. No billing upgrade was requested. `yuto-apps.web.app` returned 404 in a public check; a 404 does not establish availability and that ID was never reserved by this work.

## Verify before changing any App Store destination

1. Audit current Marketing, Support and Privacy URLs for every localization in App Store Connect. Public developer/privacy links were captured; Support URL fields are not exposed on the current public pages and require authenticated ASC access.
2. Confirm the new site's HTTPS and all 20 routes, images, unique title/description, canonical, sitemap, robots and root plain-text seller line. Check iPhone and desktop layout.
3. Confirm account-admin-approved AdMob seller line and actual app-ads.txt authorization status for all five advertising apps after crawler refresh. Existing public files and app configuration agree on the seller ID; admin verification is still pending. OKN Viewer has no advertising/behavior Analytics.
4. Resolve existing shared-policy inconsistencies (several App Store policies describe only older apps and generic AdMob usage) with app-specific legal review. Do not silently rewrite them. Existing policy links remain active.
5. Only then perform a separately reviewed Marketing URL migration. Do not delete or redirect legacy hosts or their app-ads.txt files prematurely. Support/Privacy replacement has its own acceptance gate.

## Search and conversion measurement

- Add the HTTPS URL-prefix property in Google Search Console, verify ownership and submit `/sitemap.xml`. Verification credentials/tokens are not yet configured.
- Compare complete 28/90-day windows with coverage: impressions, clicks, queries, pages/index status.
- The site emits a browser-local `app-store-cta` event with only fixed app and placement IDs. It does not transmit/store this event. Outbound clicks are therefore **not currently measured**.
- Add a consent/privacy-reviewed analytics adapter and valid App Store Connect campaign tokens when available. No dummy campaign/provider ID is used. Never claim a local event is an Analytics measurement.
- Downloads, retention and proceeds require independent App Store/portfolio evidence; do not infer revenue or SEO success from publication.

## Stop conditions

Stop destination migration if ASC inventory, legal support continuity, seller approval/AdMob verification, TLS, privacy separation or permission checks remain incomplete. Existing sites and application code are out of scope for edits. Do not publish any `generated/` export.

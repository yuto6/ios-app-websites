# Rollout and measurement

## Current state — 2026-10-17 JST

- Dedicated Firebase project/site: `yuto-ios-app-websites`; production: https://yuto-ios-app-websites.web.app/.
- [PR #1](https://github.com/yuto6/ios-app-websites/pull/1) merged on 2026-10-11 JST. Bilingual app-specific policies and Android disclosures subsequently landed on main.
- Audited main: `149a57e980214b762bc49bdcd1766c32e102498d`. [Production deployment](https://github.com/yuto6/ios-app-websites/actions/runs/38657206694) and [checks](https://github.com/yuto6/ios-app-websites/actions/runs/38657206767) succeeded. This is the audit baseline, not a claim about later revisions.
- All 21 sitemap HTML routes returned 200 with unique titles/descriptions, matching canonical URLs and one H1. Robots allows crawling; an unknown URL returned 404/noindex. Crawl eligibility does not establish Google indexing.
- Policy routes render Japanese/English text and app-specific disclosures. The initial link-only implementation is historical.

## Existing destinations and seller files

Public Japanese App Store pages for Simple PFC, Kuropuru, CodeStock, Car Assignments and Study Log already link to their new app landing/privacy pages. OKN still exposed the legacy shared privacy link; no developer website was extracted. Authenticated ASC Support URL values and all localization variants remain unconfirmed. Do not repeat a completed destination change based on the initial audit.

All five advertising iOS apps showed “app-ads.txt found and verified” in AdMob on 2026-10-17. The observed crawler destinations differ:

| App | Verified seller-file host |
|---|---|
| CodeStock | giga-sapo.web.app |
| Car Assignments | stonesurume.github.io |
| Simple PFC | stonesurume.github.io |
| Kuropuru | stonesurume.github.io |
| Study Log | yuto-ios-app-websites.web.app |

The new root `/app-ads.txt` returns 200/plain text with the same seller line as the three legacy roots. This does **not** establish five-app authorization on the new host. Legacy roots and seller files remain available and are used by other apps too. Do not delete or redirect them.

Before any further destination change, inventory current Marketing/Support/Privacy URLs per locale, verify the exact new route and policy appropriateness, and confirm the crawler destination per app. OKN's legacy shared policy and its no-advertising/no-behavior-Analytics policy require reconciliation before a separately approved replacement.

## Search and conversion measurement

- The existing HTTPS URL-prefix property is listed as **unverified** for the account inspected on 2026-10-17. Direct access is denied and the ownership-verification flow is available. Do not create a duplicate property. No verification was completed by the audit.
- Sitemap submission, indexing, impressions, clicks, pages and queries remain unknown until ownership/access is resolved. Missing access is not zero traffic.
- `public/site.js` emits only a browser-local `app-store-cta` event with fixed app and placement IDs. It does not transmit/store the event. Outbound clicks are **not measured**; the website has no GA4 collection adapter.
- Before adding measurement, define the recipient, retention, consent behavior, fixed parameter allowlist and privacy disclosure. Keep OKN excluded initially pending explicit review of its non-collection boundary. Do not collect arbitrary URLs, query strings, food/health content, codes or user identifiers. Validate disabled/declined behavior, avoid duplicate events and keep CTA navigation working.
- The current site privacy notice and CSP must stay consistent with any separately approved adapter. Do not add dummy campaign/provider IDs.
- Start a complete 28-day baseline only after measurement is valid. Compare 28/90-day search windows with coverage, and report App Store web-referrer downloads separately. Do not infer site-specific downloads, revenue or causality from publication or clicks.

## Remaining rollout boundaries

No further App Store destination changes, legacy redirects/deletions or iOS code edits are included in a site-copy PR. Keep current policy bodies, App Store IDs, routes and seller lines stable. Do not publish private portfolio exports or `generated/` data.

The original 2026-10-11 observations are retained in `docs/public-content-audit.md` as history; its dated findings must not override the current state above.

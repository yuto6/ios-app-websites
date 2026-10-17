# Public content audit — 2026-10-11 JST

> Historical baseline. Current state as of 2026-10-17 is recorded in [rollout](rollout.md). PR #1 is merged; app-specific policies are implemented; five Japanese listings already link to this site, and the five advertising iOS apps have verified seller files on a mix of legacy/new hosts. Do not use the older destination and verification statements below as current state.

Public Apple lookup and listing links were compared with current repository main and `config/features/*.yaml`. Public copy only: no private analytics, financial data or source code.

| App | App Store ID | Live version / minimum iOS | Existing developer website | Existing privacy link | Current code commit |
|---|---|---|---|---|---|
| Simple PFC | [6754586320](https://apps.apple.com/jp/app/id6754586320) | 2.0 / 17.0 | https://website-develop-371a8.web.app/ | [Policy](https://website-develop-371a8.web.app/plivacyPolicy.html) | [c3a78ed7](https://github.com/yuto6/PFCRecords/commit/c3a78ed7de496c4fcc294e65f387e831384efb81) |
| クロプル家計簿 | [6479568956](https://apps.apple.com/jp/app/id6479568956) | 2.3 / 17.0 | https://stonesurume.github.io/ | [Policy](https://raw.githubusercontent.com/stoneSurume/createSchedules/main/privacy%20policy) | [f4174d0f](https://github.com/yuto6/SynchroSimpleExpenses/commit/f4174d0f438301218e35014a757066f36288e589) |
| ギガ活サポーター | [6446580313](https://apps.apple.com/jp/app/id6446580313) | 4.3 / 15.0 | https://giga-sapo.web.app/ | [Policy](https://raw.githubusercontent.com/stoneSurume/createSchedules/main/privacy%20policy) | [1f21a2f2](https://github.com/yuto6/gigaHelper/commit/1f21a2f236a8136ec733806b97021693f940a1c4) |
| Car Assignments | [1627910277](https://apps.apple.com/jp/app/id1627910277) | 2.7 / 16.0 | https://stonesurume.github.io/ | [Policy](https://raw.githubusercontent.com/stoneSurume/createSchedules/main/privacy%20policy) | [4f713919](https://github.com/yuto6/newCarSplit/commit/4f71391968d1319fa77a0aaffeb3cc8d645d8f20) |
| Simple Study Log | [6757193095](https://apps.apple.com/jp/app/id6757193095) | 1.1 / 18.0 | https://stonesurume.github.io/ | [Policy](https://raw.githubusercontent.com/stoneSurume/createSchedules/main/privacy%20policy) | [41f0d062](https://github.com/yuto6/StudyRecord/commit/41f0d0622b1854875aa86f6a6b91aade43ab27be) |
| OKN Viewer | [6695726882](https://apps.apple.com/jp/app/id6695726882) | 1.5 / 16.0 | Not present in public lookup | [Policy](https://raw.githubusercontent.com/stoneSurume/createSchedules/main/privacy%20policy) | [d14999bb](https://github.com/yuto6/nystagmusTest/commit/d14999bbf5156981e52ef699c11193936575d043) |

## Support

The public App Store pages do not expose an authoritative Support URL field. Its exact current ASC value is **unconfirmed for all six apps**, including localizations. Public support email `develop.stone.2022@gmail.com` is present in all six current implementations / linked support text. The new support routes use this verified email and FAQs whose capabilities are corroborated by public descriptions and current code. No messages were sent.

## Seller line

All three existing roots returned HTTP 200 text/plain with the same real seller line:

```text
google.com, pub-9365795276850353, DIRECT, f08c47fec0942fa0
```

Sources: https://website-develop-371a8.web.app/app-ads.txt, https://giga-sapo.web.app/app-ads.txt, https://stonesurume.github.io/app-ads.txt. Publisher ID matches the five current app `Info.plist` GADApplicationIdentifier values. The exact line is copied; no dummy ID is used. AdMob admin-generated line and authorization status are not independently verified; destination migration remains blocked.

## URL and policy checks

All 32 unique App Store links, privacy destinations, icons and screenshots returned HTTP 200 during this audit. Legacy developer hosts and Giga privacy URL also returned 200. Policies are linked unchanged. The shared raw policy mentions older apps and AdMob; treat completeness/app-specific appropriateness as a legal review gap, especially OKN Viewer. Do not claim an app-specific new policy has been approved.

## Claim boundaries

No ratings/testimonials, download/revenue claims, health outcome promises, hardcoded pricing, unreleased main-only functionality, fabricated screenshots or SEO improvement claims. FAQ statements are restricted to published capabilities. OKN is presented as an educational observation tool, with its published medical-use and visual-discomfort boundaries.

## Implementation provenance

Portfolio source paths read: `config/code_repositories.yaml`, `config/app_store_apps.yaml`, `config/features/*.yaml`, `config/execution.yaml`, `managed/backlog/backlog.yaml`, `managed/insights/2026-10-11-portfolio-public-web-acquisition.md` from approved Draft PR #82. These private inputs are not copied into the public build.

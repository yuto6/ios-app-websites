# Six iOS apps — public website

Mobile-first static Japanese website, delivered to one Firebase Hosting site.

- Firebase project/site: `yuto-ios-app-websites` (created and confirmed through Firebase API, 2026-10-11 JST)
- Production origin: https://yuto-ios-app-websites.web.app/
- Public source: https://github.com/yuto6/ios-app-websites
- No private portfolio exports, application source, third-party tracking SDK or analytics cookie is shipped.

## Edit and verify

Requires Node 22; no package installation is needed.

```sh
npm test
npm run build
npm run dev
```

Local builds default to noindex, disallow crawling and omit canonical URLs. For deployment:

```sh
FIREBASE_PROJECT_ID=yuto-ios-app-websites FIREBASE_SITE_ID=yuto-ios-app-websites node scripts/configure-hosting.mjs
SITE_URL=https://yuto-ios-app-websites.web.app DEPLOYMENT=true npm run build
firebase hosting:channel:deploy review --project yuto-ios-app-websites --expires 7d
firebase deploy --only hosting --project yuto-ios-app-websites
```

`data/apps.json` contains only reviewed public copy, public Apple images, canonical App Store IDs and provenance. Policy routes link to the existing App Store policy destinations; they do not replace policy text. Images load directly from Apple's CDN and are disclosed in `/privacy/`.

## GitHub Actions

Checks run on pushes and PRs. Same-repository PRs deploy a seven-day preview; fork PRs only run checks. A push to main publishes to the one site. Manual deployment defaults to preview; selecting live publishes the checked revision. Repository variables: `FIREBASE_PROJECT_ID` and `FIREBASE_SITE_ID`. Encrypted repository secret: `FIREBASE_SERVICE_ACCOUNT`, populated with the dedicated project service account after explicit user approval. That account has only Hosting Admin and API Keys Viewer in this website-only project. Never commit a key. Rotate it through IAM and GitHub Secrets.

Configure production environment required reviewers to add a release approval gate if desired. The initial implementation stays on a feature branch and a Draft PR; no default-branch merge is performed here.

## Migration gates and remaining work

See [audit](docs/public-content-audit.md) and [rollout](docs/rollout.md). Keep old Hosting sites and App Store Marketing/Support/Privacy URLs until the complete gate passes. Site publication alone does not verify AdMob or demonstrate SEO impact.

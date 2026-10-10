# Bilingual privacy publication — 2026-10-11

Six `/apps/<app_id>/privacy/` routes render full Japanese/English text from the user-supplied shared AdMob/Analytics/Crashlytics policy and dedicated OKN draft. `/privacy/` stays website-specific.

Code-aligned adjustments:
- OKN: local camera recordings/settings, deletion and optional photo-library copies are disclosed. The draft's absolute no-storage claim is removed. No advertising, Firebase or user-behavior Analytics.
- Five apps: no developer account registration, rather than no personal input. Car Assignments records member names/attributes. App-specific recording, existing CloudKit synchronization and user-directed CSV/share handling are described.
- PFC: user-triggered photos/text sent via Firebase AI Logic to Gemini Developer API; App Check; provider terms govern retention/data use. No immediate deletion/no-training promise.
- Unverified UMP/CMP implementation and in-app consent controls are not asserted. All five apps have ATT calls; web copy does not implement a missing consent feature or certify compliance.

Sources: nystagmusTest ContentView/VideoListView/app entry and camera implementation; PFCRecords Services/GeminiNutritionAnalyzer.swift and PFCRecordsApp.swift; current CloudKit/record/sharing implementations in gigaHelper, SynchroSimpleExpenses, StudyRecord and newCarSplit. Contact/retention/request handling/change terms follow user-supplied text.

Official references checked: https://developers.google.com/admob/ios/privacy/data-disclosure, https://firebase.google.com/support/privacy, https://firebase.google.com/docs/ai-logic/data-governance, https://ai.google.dev/gemini-api/terms.

Remaining account review: AI billing/contract data-use controls and regional CMP/UMP operation. No App Store privacy labels, in-app links, iOS code or legacy hosts changed.

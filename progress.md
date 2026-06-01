# AMFAJ Travels and Tours - Progress

## 2026-05-19

### Completed

- Initialized B.L.A.S.T. project memory structure.
- Created `task_plan.md`, `findings.md`, `progress.md`, `claude.md`, and `gemini.md`.
- Created `architecture/`, `tools/`, and `.tmp/` folders.
- Recorded Blueprint discovery answers.
- Updated `gemini.md` with a draft input/output schema for approval.
- Updated `findings.md` with business rules, target audience, requested deliverables, and constraints.
- Researched current platform feasibility for Instagram/Facebook publishing, WhatsApp messaging, Google Sheets, Meta lead capture, n8n workflows, and design automation resources.
- User approved the `gemini.md` schema.
- Created Blueprint deliverables:
  - `launch_strategy.md`
  - `30_day_content_calendar.md`
  - `viral_campaign_plan.md`
  - `lead_funnel_map.md`
  - `social_media_sop.md`
  - `automation_blueprint.md`
  - `architecture/social_media_sop.md`
- Created `flyer_content_day_1_7.md` for launch-ready flyer text, captions, WhatsApp Status copy, hashtags, and design notes for Days 1-7.
- Rewrote `flyer_content_day_1_7.md` using the copywriting skill after copy brief confirmation. Added stronger hooks, conversion-focused captions, TikTok conversion context, short video overlays, headline alternatives, CTA alternatives, and copy rationale.

### Current State

Blueprint and revised first 7 days of launch content are ready for user review. No scripts have been created in `tools/`.

### Research Result

The proposed design-and-posting tool is feasible as a staged system with human approval, Meta account/API setup, Google Sheets control data, and scheduled publishing. It should not promise guaranteed virality.

### Errors

None.

### Tests

No tests required yet because implementation has not started.

## 2026-05-21

### Completed

- Converted `flyer_content_day_1_7.md` into `AMFAJ_Flyer_Content_Day_1_7.docx` for Google Docs-compatible editing and sharing.

### Current State

- The `.docx` document is ready to upload to Google Drive and open as a Google Doc.
- A direct Google Docs creation connector was not available in this session.

### Tests

- Verified the generated `.docx` exists.
- Verified the document can be opened with `python-docx` and contains 702 paragraphs with the expected title and subtitle.

## 2026-05-30

### Completed

- Started website planning for AMFAJ Travels and Tours.
- Created `website_plan.md`.
- Created `architecture/website_sop.md`.
- Updated `gemini.md` with website MVP schema, CTA rules, lead capture path, and claim-safety boundaries.
- Updated `task_plan.md` with website planning status.
- Saved user-provided Umrah package direction for website and flyers:
  - Nigeria package: 3.5m NGN.
  - Diaspora package: 1750 USD.
  - Departure window: September 29 or 30, 2026.
  - Arrival window: October 10 or 11, 2026.
  - Departure locations: Lagos and Abuja.
  - Package inclusions recorded in `gemini.md`, `website_plan.md`, and `findings.md`.
- Created `package_direction.md` as the dedicated package reference.
- Updated older strategy, website, calendar, and flyer guardrail wording to avoid conflict with the new package direction.

### Current State

- Website is planned as a trust-first, WhatsApp-led lead capture site for Umrah prospects.
- No website code has been created yet.

### New Content Deliverable

- Created `flyer_content_day_8_14.md` for the next week of AMFAJ campaign content using the updated package direction.
- Added richer creative dimensions: audience segment, flyer copy, carousel copy, Reel/TikTok concept, caption copy, WhatsApp Status copy, package tie-in, hashtags, testing ideas, and compliance checklist.
- Exported the next-week content pack to `AMFAJ_Next_Week_Content_Day_8_14.docx`.
- Updated package direction with scholar-led guidance: Dr. Sharafuddeen Gbadebo Raaji is planned to join the coming Umrah as a scholar, with pilgrims under his tutelage, In Sha Allah.
- Reworked Days 8-14 to remove Week 1 repetition and shift into package-led content: package reveal, scholar-led tutelage, Nigeria package inclusions, Diaspora package, Lagos/Abuja departure, sponsorship, and full package recap.

### Tests

- Verified `AMFAJ_Next_Week_Content_Day_8_14.docx` exists.
- Verified the regenerated `.docx` opens with `python-docx` and contains 936 paragraphs.
- Scanned the source content for package-sensitive and scholar-sensitive language. Visa wording remains an inclusion, not an approval guarantee, and scholar-led tutelage does not promise worship acceptance or error-free worship.

## 2026-05-31

### Completed

- Used the `site-architecture` skill to create the website information architecture and sitemap.
- Created `website_information_architecture.md` with page hierarchy, visual sitemap, URL map, navigation spec, breadcrumb rules, page-level architecture, and internal linking plan.
- Updated `website_plan.md` to reference the IA deliverable and final MVP URL set.
- Updated `architecture/website_sop.md` to make `website_information_architecture.md` the canonical source for page hierarchy and URL decisions.

### Current State

- Website is ready for copywriting and design planning.
- No website code has been created yet.

### Clarification

- Updated package and website architecture language to treat scholar-led tutelage as a universal AMFAJ package value, not as a separate package tier or a perk tied to only one package.
- Moved scholar-led guidance architecture from `/umrah/scholar-led` to the trust/company layer at `/about/scholar-led-guidance`.
- Compressed the website map to Home, Packages, Guidance, FAQ, Contact, and Legal.
- Changed package navigation to `/packages` with dropdown children for active Umrah packages and inactive Hajj packages.
- Removed standalone Hajj and About pages from the MVP; About content now lives on the homepage, and Hajj lives under Packages/Guidance with empty-state treatment.
- Updated homepage direction to introduce AMFAJ first, then show active Umrah package, package split, comprehensive breakdown, About section, FAQ, and final CTA.
- Updated `gemini.md`, `architecture/website_sop.md`, and `website_ux_research_direction.md` to match the compressed sitemap and new CTAs: Start Registration and Browse Packages.

### Website UX Research

- Researched product/package page UX, mobile landing page UX, Core Web Vitals, official Nusuk context, and Umrah competitor patterns.
- Created `website_ux_research_direction.md`.
- Updated `website_plan.md` to reference the UX research direction.

### Design Direction

- Reviewed the Zemtura Webflow reference site for interaction and layout inspiration.
- Created `design.md` to translate the useful reference patterns into AMFAJ's own visual direction.
- Updated `website_plan.md` and `architecture/website_sop.md` to reference `design.md`.
- Extracted AMFAJ brand colors from the provided SVG logos:
  - Brand Navy: `#030C35`
  - Brand Orange: `#FE7202`
  - White: `#FFFFFF`
- Updated `design.md` and `website_ux_research_direction.md` to replace generic green/gold assumptions with the logo-derived AMFAJ color system.
- Added approved typography to `design.md`: Sora for headings and Host Grotesk for body copy.
## 2026-06-01 00:24 WAT - Website Development Started

- Used the frontend-design and copywriting skills to start the AMFAJ website MVP.
- Created a React + Vite + TypeScript frontend with React Router, Lucide icons, and Framer Motion.
- Added the approved AMFAJ logo assets into `public/`.
- Built routed pages for Home, Packages, Umrah Package, Hajj empty state, Guidance, Umrah Guidance, Hajj Guidance empty state, FAQ, Contact, Privacy, and Terms.
- Implemented AMFAJ brand colors, Sora headings, Host Grotesk body typography, WhatsApp-led CTAs, package cards, scholar-led guidance copy, and claim-safe FAQ/legal copy.
- Ran `npm install`; no vulnerabilities reported.
- Ran `npm run build`; production build passed after adding React/Node typings and modern TypeScript config.
- Started the Vite dev server for review at `http://localhost:5174/`.
- Local shell/browser verification against the dev server is blocked by the sandbox with localhost `EPERM`, but Vite reports the server as ready and the production build passes.

## 2026-06-01 06:26 WAT - Hero Direction Updated

- Reworked the homepage hero to match the user's preferred reference layout: centered headline/CTA, then three cards below.
- Added a stamped scholar-guidance card stressing that AMFAJ journeys are planned under a reputable scholar or certified student of knowledge.
- Added a second AMFAJ introduction card focused on honesty, hospitality, financial integrity, and zero hidden fees.
- Added a large placeholder video card for Ka'bah/pilgrimage visuals, with copy noting that the CEO intro video will live there later.
- Implemented a video preview interaction: clicking play expands the video viewport and scrolls into the package section.
- Ran `npm run build`; production build passed.

## 2026-06-01 06:34 WAT - Hero/Nav Refinement

- Confirmed user direction: Zemtura-style clean nav, pure white page background, shorter hero cards, and scroll-based video expansion.
- Updated the header from a floating rounded pill to a full-width white top bar with centered navigation rhythm and active nav marker.
- Removed the orange-tinted page background and replaced it with pure white.
- Shortened the hero cards and video card so the first viewport feels less tall.
- Added a scroll video bridge: the small hero video leads into a large rounded video viewport before the Umrah package section.
- Ran `npm run build`; production build passed.

## 2026-06-01 06:47 WAT - Hero Motion Corrected

- Rebuilt the hero motion model after user feedback: the video is no longer a separate duplicate bridge after the cards.
- Added a Framer Motion scroll sequence where the actual third-column video card starts inside the card row, then scales and translates over the row while scrolling.
- Increased the initial card row size to better match the reference screenshots.
- Added spring smoothing to the scroll transforms for a less static transition.
- Disabled the complex scroll transform on smaller screens so mobile remains stable.
- Ran `npm run build`; production build passed.

## 2026-06-01 06:56 WAT - Hero Motion and CTA Fixes

- Used the user's latest screenshot plus the Zemtura reference to correct the CTA/footer and button direction.
- Changed the site typography to Host Grotesk only.
- Refined the video scroll motion so the actual third-column video card starts scaling earlier, moves left toward center, and grows more visibly with spring smoothing.
- Added video-card shadow and caption fade transforms tied to scroll progress.
- Fixed button padding so only Zemtura-style arrow-pill buttons use the circular end cap spacing.
- Updated the final CTA button to a white pill with navy circular arrow cap.
- Added bottom margin under the final CTA so it no longer sits on the footer section.
- Ran `npm run build`; production build passed.

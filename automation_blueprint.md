# AMFAJ Travels and Tours - Automation Blueprint

## Goal

Build a reliable system that helps AMFAJ maintain brand consistency, publish approved content on schedule, capture WhatsApp leads, and measure campaign performance.

## Recommended Tool Vision

Build a staged Campaign Operating System, not a one-button virality machine.

The system should:

- Generate brand-consistent campaign assets from approved templates.
- Store all campaign data in Google Sheets.
- Require human approval before publishing.
- Schedule approved posts to Instagram and Facebook.
- Push leads into WhatsApp Business and Google Sheets.
- Track performance and recommend what to test next.

## Why This Is Feasible

- Instagram and Facebook publishing can be automated through Meta APIs for professional accounts.
- WhatsApp lead capture and follow-up can be automated with WhatsApp Business Platform rules.
- Google Sheets can serve as the first source of truth.
- Template-based design generation can preserve brand consistency.
- n8n or custom Python tools can orchestrate the process later.

## Why It Should Be Staged

AMFAJ operates in a trust-sensitive religious and travel domain. Fully autonomous publishing could accidentally create unverified claims, weak wording, or design inconsistency.

The correct approach is:

1. Automate structure.
2. Keep human approval.
3. Measure results.
4. Improve the templates.
5. Add more automation only after the process is stable.

## Proposed System Components

### 1. Google Sheets Control Center

Tabs:

- Content Calendar.
- Leads.
- Claim Review.
- Asset Library.
- Publishing Log.
- Weekly Metrics.

### 2. Brand Template Engine

Inputs:

- Campaign topic.
- Post format.
- Approved headline.
- Caption.
- CTA.
- Brand colors.
- Logo.
- Footer/contact details.

Outputs:

- Square flyer.
- Story format.
- Carousel slides.
- WhatsApp Status version.

### 3. Approval Gate

Status options:

- Draft.
- Needs Claim Review.
- Ready for Design.
- Ready for Approval.
- Approved.
- Scheduled.
- Published.
- Failed.

Only "Approved" content may be scheduled.

### 4. Publisher

Future integrations:

- Instagram Graph API.
- Facebook Page publishing.
- Google Drive or asset CDN for public media URLs.

### 5. WhatsApp Lead Capture

Methods:

- WhatsApp click links from posts.
- Meta Ads click-to-WhatsApp.
- WhatsApp Business quick replies/templates later.

Leads must be saved to Google Sheets.

### 6. Analytics Loop

Track:

- Published post URL.
- Format.
- Topic.
- Hook.
- Reach.
- Saves.
- Shares.
- Comments.
- WhatsApp clicks.
- Leads.
- Cost per lead for ads.

## Tool Build Recommendation

Phase 1 tool:

- Google Sheets campaign tracker and approval workflow.
- Manual design upload.
- Manual posting or scheduling using native Meta tools.

Phase 2 tool:

- Template-based flyer/carousel generator.
- Outputs image assets into a controlled folder.

Phase 3 tool:

- Scheduled publishing for approved posts.
- Failure logging and retry queue.

Phase 4 tool:

- WhatsApp lead capture and follow-up templates.
- Meta Ads lead sync into Google Sheets.

Phase 5 tool:

- Analytics dashboard and weekly recommendation engine.

## Non-Negotiable Safety Rules

- No auto-publishing without approval.
- No unverified religious, visa, travel, price, flight, or immigration claims.
- No automated WhatsApp spam.
- No guarantee of virality.
- Every failure must be logged and reviewed.

## Link Phase Requirements

Before scripts are created in `tools/`, AMFAJ needs:

- Instagram professional account.
- Facebook Page linked to Meta Business Suite.
- WhatsApp Business setup.
- Google Cloud project for Sheets API.
- Google Sheet created with required tabs.
- Meta Developer app if direct publishing is needed.
- Access tokens and app permissions recorded in `.env`.

# AMFAJ Travels and Tours - Findings

## Discovery Notes

- Brand: AMFAJ Travels and Tours.
- Current priority: Drive awareness, go viral, build a strong social media presence, and attract potential customers who may travel through the platform.
- Future priority: Build a website and digital products later.
- Current execution constraint: No scripts or automation tools should be written until discovery answers, schema, and Blueprint are approved.
- North Star: Get 10,000 targeted followers, generate 500 WhatsApp leads, and become known for affordable travel packages from Nigeria.
- Required channels/integrations: Instagram, Facebook, WhatsApp Business, Google Sheets, Meta Ads.
- Source of truth: Google Sheets.
- Requested payloads: Launch strategy doc, 30-day content calendar, viral campaign plan, lead funnel map, social media SOP, automation blueprint.
- Religious/brand orientation: Sunni platform guided by the Qur'an and Sunnah upon the understanding of the pious predecessors.
- Audience: People who love the Sunnah and want Hajj and Umrah in compliance with the Sunnah.
- Current travel focus: Hajj and Umrah, starting with Umrah planned for departure on September 29 or 30, 2026 and arrival on October 10 or 11, 2026.
- Approved brand promise: honesty with promises, bespoke personalized hospitality for every pilgrim, total financial integrity, and zero hidden fees.
- Do-not-say rules: No street language, foul words, vulgarity, indecent statements, unverified statements, or misleading claims.
- User-provided Nigeria Umrah package: 3.5m NGN, including return ticket, Umrah visa, 2 meals, accommodation in Madeenah and Makkah, Umrah guide, Ziyarah, and 5 litre Zam Zam water.
- User-provided Diaspora Umrah package: 1750 USD, including Umrah visa, 2 meals, accommodation in Madeenah and Makkah, Ziyarah, Umrah guide, and 5 litre Zam Zam water.
- Departure locations: Lagos and Abuja.
- Worship guidance claim: The journey is expected to be under the tutelage of honored Shaykh Ad-Doctur Sharafud-deen Gbadebo Raaji, hafizahuLlahu. Exact public wording requires approval.

## Research Log

Initial external research completed in Phase 1. Priority research topics:

- Instagram/Facebook publishing API capabilities and restrictions.
- WhatsApp Business lead capture and messaging rules.
- Google Sheets as source of truth for leads, content calendar, and reporting.
- Meta Ads lead forms and conversion tracking.
- Open-source design automation and social publishing resources.

## Platform Feasibility Findings

- Instagram and Facebook auto-publishing is feasible for professional/business accounts through Meta Graph API publishing flows, but it requires correct Meta app permissions, account setup, public media URLs, token handling, and platform review.
- Instagram publishing should be treated as a scheduled publishing pipeline, not an unreviewed content generator. Containers can expire, media processing can fail, and permissions/tokens can break.
- WhatsApp automation is feasible for lead capture and follow-up, but outbound messaging is regulated. Business-initiated messages outside the customer service window require approved templates and opt-in.
- Google Sheets is feasible as the first source of truth for leads, content calendar, approvals, and reporting. Sheets can be written to using append/update API calls.
- Meta Lead Ads can capture leads directly from Facebook/Instagram ads, but webhooks should have a backup polling or manual export path because delivery failures and outages can happen.
- Brand-consistent design automation is feasible using template-based generation. It should start with controlled templates and human approval rather than fully autonomous AI design.

## Useful Resources

- Meta Instagram content publishing documentation: https://developers.facebook.com/docs/instagram-platform/content-publishing/
- Google Sheets API values append documentation: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append
- n8n workflow example for Google Sheets to Instagram/Facebook scheduling: https://n8n.io/workflows/11964-schedule-and-auto-post-images-to-instagram-with-google-sheets-drive-and-ai-captions/
- n8n workflow example for AI content creation and Instagram publishing from Google Sheets: https://n8n.io/workflows/3840-automated-ai-content-creation-and-instagram-publishing-from-google-sheets/
- n8n Instagram Graph API community node: https://github.com/MookieLian/n8n-nodes-instagram
- n8n automation template collection: https://github.com/enescingoz/awesome-n8n-templates
- Carousel-as-code design resource: https://pypi.org/project/kalve/

## Constraints

- Awareness comes before product build.
- Strategy should support later website and digital-product expansion.
- Business logic and automation must be deterministic once implementation begins.
- Religious, travel, visa, and pricing claims require verification before publication.
- Automation must include human approval before content is posted publicly.
- Virality cannot be guaranteed by automation. Automation can improve consistency, testing speed, response time, and measurement.

## Blueprint Decision

- User approved the schema on 2026-05-19.
- Blueprint deliverables were created as Markdown documents.
- Tool creation remains blocked until the Blueprint is reviewed and approved.

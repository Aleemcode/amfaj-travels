# AMFAJ Travels and Tours - Website Design Direction

Reference inspiration:

- Zemtura Webflow template: https://zemtura.webflow.io/

Important rule:

This document borrows interaction and layout principles only. Do not copy Zemtura's branding, course content, exact layouts, images, code, or assets. AMFAJ must feel like a dignified Hajj and Umrah travel brand, not an education template.

## Design Goal

Create a mobile-first, package-led website that feels:

- Clear.
- Trustworthy.
- Dignified.
- Calm.
- Premium without excess.
- Sunni and sincere.
- Conversion-focused through WhatsApp.

The visitor should understand who AMFAJ Travels and Tours is within the first screen, then see the active September Umrah package immediately after.

## Reference Site Observations

Zemtura uses these helpful patterns:

- Strong hero headline with a direct CTA.
- Media-led hero with play/pause video affordance.
- Floating visual cards around the hero.
- Rounded content modules.
- Social proof near the first screen.
- Category cards that make options easy to scan.
- Repeated CTA sections.
- Step-by-step process section.
- Blog/resource cards for education.
- Footer grouped into clear navigation columns.

AMFAJ adaptation:

- Hero introduces AMFAJ Travels and Tours first, with clear registration and package-browsing CTAs.
- Floating cards become package facts: price, departure, arrival, Lagos/Abuja, scholar-led guidance.
- Course cards become package cards and guidance resource cards.
- Learning steps become the Umrah inquiry journey.
- Student feedback becomes future pilgrim testimonials when available.
- Newsletter becomes WhatsApp list / intending pilgrims list.

## Brand Feel

### Visual Personality

AMFAJ should feel like organized sacred travel, not flashy tourism.

Use:

- Spacious layouts.
- Calm image treatment.
- Strong but restrained typography.
- Package cards that are easy to compare.
- Subtle motion.
- Trust-focused microcopy.

Avoid:

- Loud sales banners.
- Overcrowded flyer-style screens.
- Dark blurry hero overlays.
- Excessive animation.
- Generic airplane-only travel visuals.
- Design that makes price/inclusions hard to read.

## Color Direction

AMFAJ's logo SVGs define the core brand palette:

- Brand Navy: `#030C35`
- Brand Orange: `#FE7202`
- White: `#FFFFFF`

### Core Palette

Brand Navy `#030C35`

Role:

- Primary brand color.
- Main text on light backgrounds.
- Header/footer background.
- Trust sections.
- Deep overlay on media.

Brand Orange `#FE7202`

Role:

- Primary accent.
- CTA highlight.
- Price badges.
- Important package chips.
- Small icon accents.
- Active nav states.

White `#FFFFFF`

Role:

- Inverted logo use.
- Text on navy backgrounds.
- Card backgrounds.
- Clean spacing.

### Supporting Neutrals

Use supporting neutrals to prevent the site from feeling too heavy:

- Warm Off-White: `#FFF8F2`
- Soft Sand: `#F7EFE6`
- Light Mist: `#F5F7FA`
- Border Gray: `#E5E7EB`
- Body Gray: `#4B5563`
- Muted Gray: `#6B7280`

### Functional Colors

- Success/WhatsApp Green: `#25D366`
- Dark Success: `#128C7E`
- Warning Amber: `#F59E0B`
- Error Red: `#DC2626`

Use WhatsApp Green only for WhatsApp-specific buttons or icons. Do not let it become a main AMFAJ brand color.

### Suggested Roles

- Primary background: `#FFF8F2` or `#FFFFFF`
- Primary text: `#030C35`
- Secondary text: `#4B5563`
- Header background: `#FFFFFF` or `#030C35`
- Footer background: `#030C35`
- Primary CTA: `#FE7202` with `#FFFFFF` text
- Secondary CTA: `#030C35` with `#FFFFFF` text, or outlined navy
- WhatsApp CTA: `#25D366` where the button explicitly opens WhatsApp
- Price badge: `#FE7202`
- Package card border/accent: `#FE7202`
- Trust band: `#030C35` with white text, or soft off-white with navy text
- Disclaimer text: `#6B7280`

### Color Usage Rules

- Navy should carry trust and structure.
- Orange should guide attention, not dominate every surface.
- Keep large reading areas light.
- Avoid large blocks of orange behind body text.
- Use navy hero sections only when the image/video remains readable.
- Maintain accessible contrast for all CTA text.
- Do not introduce green/gold as main brand colors unless a later flyer direction proves they are part of the brand system.

### Example CSS Variables

```css
:root {
  --color-brand-navy: #030C35;
  --color-brand-orange: #FE7202;
  --color-white: #FFFFFF;
  --color-warm-off-white: #FFF8F2;
  --color-soft-sand: #F7EFE6;
  --color-light-mist: #F5F7FA;
  --color-border: #E5E7EB;
  --color-body: #4B5563;
  --color-muted: #6B7280;
  --color-whatsapp: #25D366;
  --color-whatsapp-dark: #128C7E;
}
```

### Logo Usage

Use `Amfaj logo.svg` on light backgrounds.

Use `Amfaj logo-inverted.svg` on navy or dark media backgrounds.

Do not recolor the logo casually. If a monochrome version is needed, create it as an approved asset.

## Typography Direction

Use AMFAJ's approved type pairing:

- Headings: Sora.
- Body: Host Grotesk.
- Numbers/prices: Sora or Host Grotesk with strong weight and clear spacing.

### Font Roles

Sora:

- H1-H6 headings.
- Package prices.
- CTA labels.
- Section eyebrows.
- Stat/fact chips.

Host Grotesk:

- Body text.
- Captions.
- FAQ answers.
- Package inclusion lists.
- Navigation items.
- Form labels and helper text.

Type rules:

- Hero headline should be strong but not oversized on mobile.
- Package prices must be easy to scan.
- Avoid tiny inclusion text.
- Use short paragraphs and bullet lists.
- No negative letter spacing.
- Keep line height generous for readability.
- Do not use more than these two families unless a special campaign need is approved.

### Suggested CSS Variables

```css
:root {
  --font-heading: "Sora", system-ui, sans-serif;
  --font-body: "Host Grotesk", system-ui, sans-serif;
}
```

### Suggested Type Scale

Desktop:

- H1: 56-72px, Sora, 700.
- H2: 40-48px, Sora, 700.
- H3: 28-32px, Sora, 600.
- Body: 17-18px, Host Grotesk, 400.
- Small: 14-15px, Host Grotesk, 400.

Mobile:

- H1: 36-44px, Sora, 700.
- H2: 28-34px, Sora, 700.
- H3: 22-26px, Sora, 600.
- Body: 16px, Host Grotesk, 400.
- Small: 14px, Host Grotesk, 400.

## Motion Philosophy

Motion should create calm guidance, not spectacle.

Use:

- Gentle fade-up on section entrance.
- Slow, subtle image reveal in hero.
- Small hover lift on package and guidance cards.
- Sticky WhatsApp CTA on mobile.
- Video hero with visible play/pause control.
- Subtle progress or step animation for inquiry journey.

Avoid:

- Fast parallax that distracts from package details.
- Autoplay audio.
- Excessive scroll-jacking.
- Animations that hide important package information.
- Infinite moving objects near CTAs.

Accessibility rule:

Respect reduced-motion preferences. If a visitor has reduced motion enabled, disable non-essential animation.

## Hero Direction

The hero should be inspired by Zemtura's media-led feel but adapted for AMFAJ.

### Hero Content

Headline:

AMFAJ Travels and Tours

Subheadline:

Hajj and Umrah travel support from Nigeria with honesty, personalized hospitality, financial integrity, zero hidden fees, and guidance upon the Sunnah.

Fact chips:

- Nigeria: 3.5m NGN.
- Diaspora: 1750 USD.
- Departure: Sept 29/30, 2026.
- Arrival: Oct 10/11, 2026.
- Lagos and Abuja.

Primary CTA:

Start Registration

Secondary CTA:

Browse Packages

### Hero Video Concept

Use a short, silent, respectful hero video loop:

- Slow shot of pilgrims walking respectfully.
- Calm Haram/Madeenah exterior atmosphere.
- Close-up of travel preparation: passport, notebook, prayer beads, luggage.
- Subtle overlay of package facts.

Controls:

- Visible play/pause button.
- Muted by default.
- No autoplay audio.
- Poster image fallback for slow networks.

If custom video is unavailable:

- Use a still hero image with slow image reveal and floating package cards.

## Floating Card System

Inspired by Zemtura's layered hero cards, but adapted to AMFAJ.

Use small floating cards for:

- Nigeria Package: 3.5m NGN.
- Diaspora Package: 1750 USD.
- Lagos and Abuja departure.
- Scholar-led guidance.
- Zero hidden fees.

Rules:

- Cards must not cover important text.
- Cards should be readable on mobile or collapse into a stacked fact row.
- Do not animate cards constantly. Use one gentle entrance animation.

## Page Layout System

### Home

Recommended section order:

1. Header with WhatsApp CTA.
2. Hero introducing AMFAJ Travels and Tours.
3. Active Umrah package section.
4. Nigeria and Diaspora package split cards.
5. Comprehensive package breakdown.
6. About AMFAJ section.
7. Universal scholar-led guidance standard.
8. FAQ preview.
9. Final CTA.
10. Footer.

### Packages Page

Recommended section order:

1. Packages hero.
2. Umrah package category card.
3. Hajj package category card with inactive empty state.
4. CTA to active Umrah package.

### Umrah Packages Page

Recommended section order:

1. Package hero.
2. Fast facts strip.
3. Nigeria package card.
4. Diaspora package card.
5. Comprehensive package breakdown.
6. Departure and arrival details.
7. Universal scholar-led guidance.
8. What to prepare before registration.
9. FAQ.
10. Start Registration CTA.

### Hajj Packages Page

Recommended section order:

1. Hajj Packages hero.
2. Empty state: not active yet.
3. Join Hajj Interest List CTA.
4. Link to Hajj Guidance.
5. Link to active Umrah package.

### About Page

No standalone About page in MVP. Include this content as a homepage section:

1. AMFAJ mission.
2. Religious orientation.
3. Universal scholar-led guidance standard.
4. Honesty and financial integrity.
5. Personalized hospitality.
6. CTA.

### Guidance Page

Recommended section order:

1. Guidance intro.
2. Umrah Guidance category.
3. Hajj Guidance category.
4. Featured Umrah resources.
5. Hajj empty/early guidance state.
6. CTA to active Umrah package.

## Component Direction

### Header

Desktop:

- Logo left.
- Nav center/right.
- WhatsApp CTA button right.

Mobile:

- Logo left.
- Menu icon right.
- Sticky bottom WhatsApp CTA.

Header nav:

- Home.
- Umrah Package.
- Guidance.
- About.
- FAQ.
- Contact.

### Package Cards

Each package card should include:

- Package name.
- Price.
- Best-for label.
- Inclusion list.
- CTA.

Nigeria package card:

- 3.5m NGN.
- Best for Nigeria-based pilgrims departing from Lagos or Abuja.

Diaspora package card:

- 1750 USD.
- Best for Diaspora pilgrims joining AMFAJ's September Umrah.

### Scholar-Led Guidance Band

Position this as a universal AMFAJ standard:

"AMFAJ is intentional about scholar-led guidance across its packages. For this coming Umrah, Dr. Sharafuddeen Gbadebo Raaji is planned to join as a scholar, with pilgrims under his tutelage, In Sha Allah."

Design:

- Calm section band.
- Scholar/guidance icon or subtle manuscript/mosque detail.
- CTA: Ask about AMFAJ's guidance standard.

### Trust Promise Band

Four compact cards:

- Honesty with promises.
- Personalized hospitality.
- Total financial integrity.
- Zero hidden fees.

### Inquiry Steps

Inspired by Zemtura's step section, adapted to AMFAJ:

Step 01:

Send "UMRAH" on WhatsApp.

Step 02:

Receive package breakdown.

Step 03:

Ask your questions and confirm readiness.

Step 04:

Proceed with AMFAJ's registration guidance.

### Guidance Resource Cards

Cards:

- Umrah Readiness Checklist.
- Before You Pay For Umrah.
- What To Pack For Umrah.
- Group Travel Adab.
- Sponsor An Umrah Journey.

Each card should link to `/guidance` anchors or future pages.

## Interaction Patterns

### CTA Interactions

- WhatsApp buttons should show a small WhatsApp icon.
- Hover state: subtle lift or color deepening.
- Mobile sticky button should remain visible but not block content.

### Card Interactions

- Package cards: small hover lift on desktop.
- Guidance cards: image or icon slightly scales on hover.
- Trust cards: no dramatic motion; keep them stable.

### FAQ Interactions

- Accordion pattern.
- First 1-2 high-priority questions can be open by default.
- Keep answers concise with WhatsApp CTA where relevant.

### Video Interaction

- Muted loop by default.
- Visible play/pause.
- Do not cover package chips.
- Use poster fallback.
- Disable motion where reduced-motion is requested.

## Content Hierarchy

The most important information should appear in this order:

1. September Umrah package exists.
2. Nigeria and Diaspora pricing.
3. Departure and arrival windows.
4. Lagos and Abuja departure.
5. Package inclusions.
6. Universal scholar-led guidance.
7. WhatsApp inquiry.
8. Trust promises.
9. Guidance resources.

## Design Do-Not Rules

- Do not copy Zemtura's exact layout.
- Do not use education/course language.
- Do not use fake testimonials.
- Do not bury price below long introduction text.
- Do not make scholar-led guidance look like an upsell tier.
- Do not imply visa approval is guaranteed.
- Do not imply worship acceptance is guaranteed.
- Do not use heavy animations that slow mobile load.

## Technical UX Requirements

- Mobile-first.
- Fast load.
- Responsive images.
- No heavy homepage carousel.
- Sticky WhatsApp CTA on mobile.
- Prefilled WhatsApp message.
- Accessible color contrast.
- Keyboard-accessible navigation.
- Reduced-motion support.
- Core Web Vitals-conscious build.

## Preferred Hero Implementation

Option A: Video hero.

- Use compressed MP4/WebM.
- Muted autoplay loop if acceptable.
- Visible play/pause.
- Poster image fallback.
- Package chips over or beside the video.

Option B: Image hero with motion.

- Use a high-quality still image.
- Gentle fade and scale on load.
- Floating package cards.
- Better if video assets are not ready.

Recommendation:

Start with Option B if no custom AMFAJ video exists. Upgrade to Option A when a respectful, brand-owned video is available.

## References

- Zemtura reference site: https://zemtura.webflow.io/
- AMFAJ website IA: `website_information_architecture.md`
- AMFAJ UX research: `website_ux_research_direction.md`
- AMFAJ package direction: `package_direction.md`

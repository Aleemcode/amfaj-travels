# AMFAJ Travels and Tours - Data Schema and Maintenance Law

## Status

Schema state: Approved
Approval state: Approved by user on 2026-05-19

## Data-First Rule

No tools or automation scripts may be built until the input and output payload schemas below are confirmed.

## Draft Input Schema

```json
{
  "brand": {
    "name": "AMFAJ Travels and Tours",
    "markets": ["Nigeria"],
    "primary_locations": ["Nigeria", "Makkah", "Madinah"],
    "brand_voice": "Sunni, dignified, verified, respectful, sincere, clear",
    "religious_orientation": "Guided by the Qur'an and Sunnah upon the understanding of the pious predecessors",
    "approved_promises": [
      "Honesty with promises",
      "Bespoke personalized hospitality for every pilgrim",
      "Total financial integrity",
      "Zero hidden fees"
    ],
    "do_not_rules": [
      "No street language",
      "No foul words",
      "No vulgar or indecent statements",
      "No unverified claims",
      "No misleading travel, visa, price, worship, or immigration guarantees"
    ]
  },
  "audience": {
    "segments": [
      "Muslims in Nigeria who love the Sunnah",
      "Prospective Umrah pilgrims",
      "Prospective Hajj pilgrims",
      "Families and groups seeking guided pilgrimage"
    ],
    "pain_points": [
      "Fear of incorrect worship during pilgrimage",
      "Need for trustworthy religious guidance",
      "Need for organized travel support",
      "Concern about affordability and reliability",
      "Concern about hidden fees"
    ],
    "desired_destinations": ["Makkah", "Madinah"],
    "budget_ranges": ["Nigeria Umrah package: 3.5m NGN", "Diaspora Umrah package: 1750 USD"]
  },
  "offer": {
    "travel_services": ["Umrah", "Hajj"],
    "near_term_campaign": {
      "service": "Umrah",
      "target_departure_window": "2026-09-29 or 2026-09-30",
      "arrival_window": "2026-10-10 or 2026-10-11",
      "departure_locations": ["Lagos", "Abuja"],
      "scholar_tutelage": "Scholar-led guidance is a general AMFAJ package value. The coming Umrah is planned with Dr. Sharafuddeen Gbadebo Raaji joining as a scholar and providing tutelage.",
      "date_status": "User-provided for website and flyer direction"
    },
    "packages": {
      "nigeria_umrah_package": {
        "price": "3.5m NGN",
        "currency": "NGN",
        "audience": "Nigeria-based pilgrims",
        "inclusions": [
          "Return ticket",
          "Umrah visa",
          "2 meals",
          "Accommodation in Madeenah and Makkah",
          "Umrah guide",
          "Ziyarah",
          "5 litre Zam Zam water"
        ],
        "status": "User-provided for website and flyer direction"
      },
      "diaspora_umrah_package": {
        "price": "1750 USD",
        "currency": "USD",
        "audience": "Diaspora pilgrims",
        "inclusions": [
          "Umrah visa",
          "2 meals",
          "Accommodation in Madeenah and Makkah",
          "Ziyarah",
          "Umrah guide",
          "5 litre Zam Zam water"
        ],
        "status": "User-provided for website and flyer direction"
      }
    },
    "lead_magnets": [
      "Umrah readiness checklist",
      "Sunnah-compliant Umrah preparation guide",
      "WhatsApp consultation/intending pilgrim list"
    ],
    "campaign_hooks": [
      "Perform Umrah with AMFAJ's scholar-led guidance standard",
      "Travel with organized support and religious tutelage",
      "Prepare your journey before registration",
      "Clear promises, personalized hospitality, and zero hidden fees"
    ]
  },
  "channels": {
    "platforms": ["Instagram", "Facebook", "TikTok", "WhatsApp Business", "Meta Ads"],
    "posting_frequency": "To be defined in 30-day calendar",
    "content_formats": ["Reels", "carousel posts", "static flyers", "stories", "WhatsApp broadcast posts", "lead forms"]
  },
  "operations": {
    "source_of_truth": "Google Sheets",
    "integrations": ["Instagram", "Facebook", "TikTok", "WhatsApp Business", "Google Sheets", "Meta Ads"],
    "delivery_destination": "Google Sheets and strategy documents",
    "approval_workflow": "All public-facing claims must be reviewed and verified before publishing"
  },
  "website": {
    "phase": "Planning",
    "primary_goal": "Convert social and ad traffic into qualified WhatsApp leads",
    "primary_cta": "Start Registration",
    "secondary_cta": "Browse Packages",
    "mvp_pages": ["Home", "Packages", "Umrah Packages", "Hajj Packages", "Guidance", "Umrah Guidance", "Hajj Guidance", "FAQ", "Contact", "Privacy Policy", "Terms and Conditions"],
    "future_pages": ["Registration", "Testimonials", "Blog", "Resources"],
    "lead_capture": ["WhatsApp click", "Google Sheets lead tracker", "future form submission"],
    "claim_rules": [
      "Use only user-provided package pricing, dates, departure locations, and inclusions unless changed by AMFAJ",
      "Do not add extra inclusions not listed in the approved package direction",
      "Do not add visa outcome guarantees beyond stating Umrah visa as an inclusion",
      "No worship acceptance guarantee",
      "All religious and operational claims require review"
    ]
  }
}
```

## Draft Output Schema

```json
{
  "strategy": {
    "north_star": "Get 10,000 targeted followers, generate 500 WhatsApp leads, and become known for affordable travel packages from Nigeria",
    "positioning": "",
    "viral_growth_thesis": "",
    "campaign_pillars": [],
    "content_series": [],
    "lead_capture_path": ""
  },
  "content_plan": {
    "calendar": [],
    "formats": [],
    "hooks": [],
    "cta_library": []
  },
  "measurement": {
    "kpis": [],
    "reporting_frequency": "",
    "decision_rules": []
  },
  "execution": {
    "sops": [
      "Social media publishing SOP",
      "Claim verification SOP",
      "Lead handling SOP",
      "Campaign reporting SOP"
    ],
    "automation_candidates": [
      "Campaign asset generation",
      "Content scheduling",
      "WhatsApp lead capture",
      "Google Sheets analytics and lead tracking",
      "Meta Ads reporting"
    ],
    "risks": [],
    "next_actions": []
  }
}
```

## Behavioral Rules

- Strategy must prioritize awareness and trust before conversion.
- Recommendations must support future website and digital product expansion.
- Claims about visas, pricing, travel requirements, and immigration rules must be verified before publishing.
- The brand should not publish misleading travel guarantees.
- AMFAJ's public voice must remain Sunni, dignified, modest, and compliant with the stated religious orientation.
- The core audience is people who love the Sunnah and want Hajj or Umrah support aligned with the Sunnah.
- Current public campaign focus is Umrah, with user-provided departure window of September 29 or 30, 2026 and arrival window of October 10 or 11, 2026.
- AMFAJ may promise honesty with promises, bespoke personalized hospitality, total financial integrity, and zero hidden fees.
- The worship guidance claim may mention that the journey is intended to be under the tutelage of honored Shaykh Ad-Doctur Sharafud-deen Gbadebo Raaji, hafizahuLlahu, but exact wording must be approved before publication.
- Scholar-led tutelage is a universal AMFAJ value across packages, not a separate package tier or a benefit tied to only one package.
- The package direction may state that Dr. Sharafuddeen Gbadebo Raaji is planned to join the coming Umrah as a scholar and that pilgrims will be under his tutelage.
- Package pricing, inclusions, departure locations, and dates may use only the user-provided package direction recorded in this file unless changed by AMFAJ.
- Conversion may come from Instagram, Facebook, TikTok, and WhatsApp. WhatsApp remains the primary lead capture destination.
- Website MVP must prioritize trust, Umrah education, WhatsApp lead capture, and claim safety before online payments or complex booking flows.
- The Nigeria Umrah package is 3.5m NGN and includes return ticket, Umrah visa, 2 meals, accommodation in Madeenah and Makkah, Umrah guide, Ziyarah, and 5 litre Zam Zam water.
- The Diaspora Umrah package is 1750 USD and includes Umrah visa, 2 meals, accommodation in Madeenah and Makkah, Ziyarah, Umrah guide, and 5 litre Zam Zam water.
- Departure locations are Lagos and Abuja.
- The coming Umrah should make the package obvious in public-facing copy: price, inclusions, departure locations, travel window, and AMFAJ's universal scholar-led guidance standard.

## Maintenance Log

### 2026-05-19

- Initialized draft schemas and operating rules.
- Awaiting discovery answers before schema finalization.
- Recorded discovery answers and converted them into a draft schema for approval.
- User approved the schema. Blueprint production may proceed. Tool creation remains blocked until Blueprint approval.
- Added TikTok as a conversion channel and clarified that WhatsApp remains the primary lead capture destination.
- Added website planning schema for MVP pages, CTA rules, lead capture, and claim-safety boundaries.

### 2026-05-30

- Added user-provided Umrah package direction for website and flyers: Nigeria package, Diaspora package, inclusions, departure/arrival windows, and departure locations.
- Added scholar-led direction: Dr. Sharafuddeen Gbadebo Raaji is planned to join the coming Umrah as a scholar and provide tutelage.
- Clarified that scholar-led tutelage is a universal AMFAJ package value, not a separate package tier.

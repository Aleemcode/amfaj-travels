# AMFAJ Travels and Tours - Project Constitution

## Identity

This project follows the B.L.A.S.T. protocol: Blueprint, Link, Architect, Stylize, Trigger.

The operator is the System Pilot. The mission is to build reliable, deterministic launch strategy assets and, later, automation systems for AMFAJ Travels and Tours.

## Current Business Goal

AMFAJ Travels and Tours is in an awareness-first phase. The current focus is to build a strong social media presence, create viral momentum, and attract potential customers who may travel through the platform.

The project has now moved into website MVP development for AMFAJ Travels and Tours. The website is a React/Vite frontend focused on Umrah package awareness, WhatsApp-led registration interest, guidance content, and trust-building.

## Operating Invariants

- Reliability comes before speed.
- Business logic is never guessed.
- The Blueprint must be approved before implementation begins.
- `gemini.md` is the source of truth for schemas, behavioral rules, and architecture changes.
- `task_plan.md`, `findings.md`, and `progress.md` are project memory.
- No scripts may be written in `tools/` until discovery questions are answered, data schema is confirmed, and Blueprint is approved.
- Temporary files belong in `.tmp/`.
- Durable SOPs belong in `architecture/`.
- External credentials belong in `.env`.

## Initial Architecture

### Layer 1: Architecture

Markdown SOPs in `architecture/` define goals, inputs, process logic, edge cases, and maintenance rules.

### Layer 2: Navigation

The reasoning layer routes work between SOPs and deterministic tools. It should not hide business rules inside ad hoc reasoning.

### Layer 3: Tools

Python scripts in `tools/` are atomic, deterministic, and testable. Tool creation is blocked until the Blueprint and schemas are approved.

## Current Folder Reality

Last updated: 2026-06-09.

The workspace currently contains both strategy/planning documents and an active website implementation.

```text
.
├── .agents/                  # Installed local skills for this workspace
├── .tmp/                     # Temporary workbench for ephemeral files
├── architecture/             # SOPs and architecture notes
│   ├── social_media_sop.md
│   └── website_sop.md
├── dist/                     # Generated Vite production build output
├── node_modules/             # Installed npm dependencies
├── public/                   # Static website assets
│   ├── amfaj-logo.svg
│   ├── amfaj-logo-inverted.svg
│   ├── kaaba-bg.png
│   ├── kaaba-detail.png
│   ├── umrah-banner.png
│   ├── guidance-banner.png
│   ├── packages-banner.png
│   ├── contact-banner.png
│   ├── faq-banner.png
│   ├── tawaf-guide-infographic.png
│   ├── ihram_step.png
│   ├── tawaf_step.png
│   ├── say_step.png
│   ├── halq_step.png
│   ├── footer-cta-bg.png
│   └── welcome.m4a
├── scratch/                  # Experimental/local utility scripts, not production tools
├── src/                      # React/Vite website source
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── index.html                # Vite HTML entry
├── package.json              # Website scripts and dependencies
├── package-lock.json         # Locked npm dependency tree
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript app configuration
├── tsconfig.node.json        # TypeScript Node/Vite configuration
├── vercel.json               # Vercel deployment configuration
├── gemini.md                 # Data schema, behavioral rules, and maintenance law
├── claude.md                 # Project constitution and state map
├── task_plan.md              # B.L.A.S.T. phase plan and checklists
├── findings.md               # Research discoveries and constraints
├── progress.md               # Work log, errors, tests, and results
├── design.md                 # Website visual direction and design rules
├── package_direction.md      # Approved Umrah package facts
├── website_plan.md           # Website planning blueprint
├── website_information_architecture.md
├── website_ux_research_direction.md
├── launch_strategy.md
├── viral_campaign_plan.md
├── lead_funnel_map.md
├── social_media_sop.md
├── automation_blueprint.md
├── 30_day_content_calendar.md
├── flyer_content_day_1_7.md
├── flyer_content_day_8_14.md
├── AMFAJ_Flyer_Content_Day_1_7.docx
└── AMFAJ_Next_Week_Content_Day_8_14.docx
```

### Folder Rules

- `src/` is the source of truth for website UI code.
- `public/` stores static frontend assets used by the website.
- `dist/` is generated build output and should not be manually edited.
- `node_modules/` is dependency output and should not be manually edited.
- `scratch/` may contain experimental helper scripts used during design/image inspection. These are not production automation tools.
- `tools/` does not currently exist. Production deterministic automation tools remain blocked until the relevant Blueprint, schemas, SOPs, and Link checks are approved.
- `architecture/` remains the durable SOP layer.
- `gemini.md` remains the governing schema/rules file.
- `progress.md` should be updated after meaningful implementation, verification, or error-resolution work.

## Governance

When logic changes, update the relevant SOP before changing implementation.

When a tool fails, use the self-annealing loop:

1. Analyze the exact error.
2. Patch the script.
3. Test the fix.
4. Update the relevant architecture note so the failure pattern is captured.

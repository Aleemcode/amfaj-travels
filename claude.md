# AMFAJ Travels and Tours - Project Constitution

## Identity

This project follows the B.L.A.S.T. protocol: Blueprint, Link, Architect, Stylize, Trigger.

The operator is the System Pilot. The mission is to build reliable, deterministic launch strategy assets and, later, automation systems for AMFAJ Travels and Tours.

## Current Business Goal

AMFAJ Travels and Tours is in an awareness-first phase. The current focus is to build a strong social media presence, create viral momentum, and attract potential customers who may travel through the platform.

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

## Governance

When logic changes, update the relevant SOP before changing implementation.

When a tool fails, use the self-annealing loop:

1. Analyze the exact error.
2. Patch the script.
3. Test the fix.
4. Update the relevant architecture note so the failure pattern is captured.

# Architecture SOP - Social Media Operations

## Purpose

Define the deterministic social media workflow for AMFAJ Travels and Tours.

## Inputs

- Approved schema from `gemini.md`.
- Content rows from Google Sheets.
- Brand kit assets.
- Reviewed captions and claims.
- Scheduled post time.

## Process

1. Read content row.
2. Confirm status is approved.
3. Confirm required fields are complete.
4. Confirm claim review status.
5. Generate or attach asset.
6. Publish or schedule.
7. Write result back to Google Sheets.
8. Log errors for review.

## Edge Cases

- Missing CTA: block publishing.
- Unconfirmed price/visa/date claim: block publishing.
- Missing asset: block publishing.
- API token failure: log and alert.
- Media upload failure: mark row as failed and retry only after review.

## Rule

If this workflow changes, update this SOP before changing any tool.

# Visual layout correction — 2026-11-11

The user-provided 15-page browser print/PDF exposed oversized overlapping
book covers, clipped horizontal carousels, and long blank print pages.

## Changes
- Added a dedicated `@media print` stylesheet section to `styles.css`.
- Constrained printed hero, featured, series, and book images while preserving proportions.
- Changed horizontal carousels to a two-column grid in print only, so books remain visible and do not overflow the page.
- Removed sticky header behavior, decorative badges, and rotations in print.
- Made printed calls to action wrap normally and reduced section padding.

## Scope
- No image files, book content, purchase links, metadata, page paths, or GitHub Pages configuration changed.
- Screen styling remains unchanged; these rules apply only when printing or saving as PDF.

## Validation limitation
- Print-specific CSS reviewed and added. Automated Chromium rendering was blocked by the current sandbox environment, so browser-level visual confirmation remains necessary.

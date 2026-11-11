# Image and layout rollback — 2026-11-11

This package starts from **yokstories-site-amazon-links-corrected-2026-11-11.zip**.

- Restored original image tags from the 2026-11-10 website for corresponding book covers and other existing images.
- Preserved every original image asset byte for byte.
- Restored the original CSS layout rules and responsive image styling (including homepage hero covers and book carousels).
- Preserved the new homepage discovery section, resource filters, corrected Amazon links, publication statuses, and other content improvements.
- Removed the experimental print-specific CSS from the later print-fix version; that CSS was not proven to fix the on-screen distortion.
- New related-book images without a matching original element have no injected image dimension attributes.

**Verification:** automated comparison of original artwork and image tag restoration and local file-path validation. **Browser visual verification was unavailable in this runtime**, so review desktop/mobile views before pushing.

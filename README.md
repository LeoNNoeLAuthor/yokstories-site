# Yok Stories author website

Static author website for **LéoN NoèL** and the **Yok Stories** picture-book series.

## Included

- `index.html` — complete responsive homepage with hero, ten-book series section, searchable downloads library, bonus printables, grown-up guidance, author/contact sections.
- `privacy.html` — simple privacy notes suitable for a static child-adjacent author site, with the same responsive navigation as the homepage.
- `assets/covers/` — book cover images.
- `assets/downloads/` — all uploaded Storytime Kit, Coloring Book, and bonus printable PDFs.
- `assets/previews/` — first-page WebP thumbnails generated from the current PDFs, including bonus printables.
- `books/` — ten individual SEO book landing pages.
- `assets/social/yok-open-graph.png` — sitewide Open Graph / social-share image.
- `styles.css`, `script.js`, `_headers`, `robots.txt`, `sitemap.xml`, `site.webmanifest`.

## PDF download inventory

- Book 1: Yok’s First Friend — `yoks-first-friend-storytime-kit.pdf` and `yoks-first-friend-coloring-book.pdf`
- Book 2: Yok’s Brave First Day — `yoks-brave-first-day-storytime-kit.pdf` and `yoks-brave-first-day-coloring-book.pdf`
- Book 3: Yok’s Tiny Roar — `yoks-tiny-roar-storytime-kit.pdf` and `yoks-tiny-roar-coloring-book.pdf`
- Book 4: Yok and the Big Mistake — `yok-and-the-big-mistake-storytime-kit.pdf` and `yok-and-the-big-mistake-coloring-book.pdf`
- Book 5: Yok and the New Kid — `yok-and-the-new-kid-storytime-kit.pdf` and `yok-and-the-new-kid-coloring-book.pdf`
- Book 6: Yok’s Kindness Club — `yoks-kindness-club-storytime-kit.pdf` and `yoks-kindness-club-coloring-book.pdf`
- Book 7: Yok and the Little Not-True — `yok-and-the-little-not-true-storytime-kit.pdf` and `yok-and-the-little-not-true-coloring-book.pdf`
- Book 8: Yok Learns to Wait — `yok-learns-to-wait-storytime-kit.pdf` and `yok-learns-to-wait-coloring-book.pdf`
- Book 9: Yok’s Big Feelings — `yoks-big-feelings-storytime-kit.pdf` and `yoks-big-feelings-coloring-book.pdf`
- Book 10: Yok Tries Again — `yok-tries-again-storytime-kit.pdf` and `yok-tries-again-coloring-book.pdf`

## Bonus printable inventory

- Yok & Rabbit Coloring Page — `yok-rabbit-coloring-page.pdf`
- Red Ball Park Coloring Page — `red-ball-park-coloring-page.pdf`
- Feelings Weather Chart — `feelings-weather-chart.pdf`
- Kindness Hearts — `kindness-hearts-badge.pdf`

## SEO pages

The `books/` folder contains one static landing page per book. Each page includes a canonical URL, Open Graph/Twitter metadata, a `Book` JSON-LD block, cover art, ISBN, thematic copy, and direct links to the companion PDFs.

## Newsletter signup setup

The "Notify me" form on the launch section submits to a Google Form (free, no third-party service needed). To activate it:

1. Go to [forms.google.com](https://forms.google.com) and create a new form.
2. Add a single "Short answer" question — label it "Email address".
3. Click the three-dot menu (⋮) → **Get pre-filled link**.
4. Type anything in the email field → click **Get link** → copy the URL.
5. From the URL, extract:
   - The **form action**: everything up to `?` → e.g. `https://docs.google.com/forms/d/e/XXXXX/formResponse`
   - The **field name**: the `entry.XXXXXXXXX=` part (just `entry.XXXXXXXXX`)
6. Open `script.js` and replace the two placeholder values:
   - `GOOGLE_FORM_ACTION_URL` = your form action URL
   - `GOOGLE_FORM_FIELD` = your `entry.XXXXXXXXX` field name

Submitted emails appear in your Google Form **Responses** tab. You can export to a Google Sheet (one click) to manage the list and send biweekly updates from your email client.

## Before launch

1. Add Amazon/KDP purchase URLs as each book becomes live.
2. Confirm `https://www.yokstories.com/` is the final domain. If not, update `sitemap.xml`, the canonical URL, and Open Graph image URLs in `index.html`.
3. Review every PDF before public release. See `QA-NOTES.md` for the current production checklist.
4. Update `privacy.html` if analytics, forms, newsletter tools, ads, or embedded widgets are added.
5. Test all download links after uploading to your host.

## Deployment

Upload the full contents of this folder to a static host such as Cloudflare Pages, Netlify, Vercel, GitHub Pages, or a standard web host.

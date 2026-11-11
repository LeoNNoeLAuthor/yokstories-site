# Deploy the refined website to GitHub Pages

1. **Back up:** Open the existing `leonnoelauthor/yokstories-site` repository on GitHub and choose **Code → Download ZIP**. Save this copy before making changes.
2. **Unzip** `yokstories-site-improved-2026-11-11.zip`. Its top level contains `index.html`, `styles.css`, `public/`, `books/`, `resources/`, and the other website folders. Do **not** upload the ZIP itself or place its contents into an extra nested folder.
3. **Upload files:** In the repository on GitHub, use **Add file → Upload files** (or a Git desktop client) to add/replace the revised files **at the repository root**, preserving every subfolder. GitHub's browser uploader may be inconvenient for the number of directories, so GitHub Desktop is often easier: clone the repository, copy the contents of the extracted ZIP into the local clone, and review the changes.
4. **Commit:** Use a message such as `Refine discovery, resources, SEO, and accessibility`, then commit (and push if using GitHub Desktop). Do not delete unrelated files without reviewing them.
5. **Publication:** In the repository **Settings → Pages**, retain the existing deployment source/branch and folder. GitHub Pages publishes the changes after the push or commit completes; check **Actions** if publication fails.
6. **Verify:** Visit https://leonnoelauthor.github.io/yokstories-site/ and test the six discovery cards, Books, Free resources filters, three sample book details, PDFs, release calendar, and navigation on a phone and desktop.
7. **Roll back:** If needed, use GitHub's commit history to revert the update commit (or restore the saved backup via GitHub Desktop), push the revert, and check Pages again.

Do not change the GitHub Pages repository base path `/yokstories-site/`. This package has static files only and requires no build step, paid services, API keys or runtime backend.

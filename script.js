
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
for (const card of document.querySelectorAll('.book-card, .resource-card, .about-panel, .theme-pathways article')) {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--y', `${event.clientY - rect.top}px`);
  });
}
const searchInput = document.querySelector('#resource-search');
const resourceCards = [...document.querySelectorAll('.resource-card')];
const resourceCount = document.querySelector('[data-resource-count]');
const clearSearch = document.querySelector('[data-clear-search]');
function updateResourceFilter() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let shown = 0;
  for (const card of resourceCards) {
    const text = card.getAttribute('data-title') || card.textContent.toLowerCase();
    const isMatch = !query || text.includes(query);
    card.classList.toggle('is-hidden', !isMatch);
    if (isMatch) shown += 1;
  }
  if (resourceCount) {
    resourceCount.textContent = query
      ? `Showing ${shown} of ${resourceCards.length} book resource sets.`
      : `Showing all ${resourceCards.length} book resource sets.`;
  }
}
searchInput?.addEventListener('input', updateResourceFilter);
clearSearch?.addEventListener('click', () => {
  if (searchInput) searchInput.value = '';
  updateResourceFilter();
  searchInput?.focus();
});

// ── Newsletter signup ───────────────────────────────────────────────────
// HOW TO SET UP:
// 1. Create a Google Form with a single "Short answer" question (e.g. "Email").
// 2. Click the three-dot menu → "Get pre-filled link".
// 3. Type anything in the email field, click "Get link".
// 4. Copy the URL — it looks like:
//    https://docs.google.com/forms/d/e/XXXXX/formResponse?entry.123456789=test
// 5. Paste the form action URL below (GOOGLE_FORM_ACTION_URL) and the
//    field name (entry.XXXXXXXXX) as GOOGLE_FORM_FIELD.
//
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe--19YuxprrIMdFdllXVp7Mnodp5R88U8-C4vF5LtSozsGCA/formResponse';
const GOOGLE_FORM_FIELD = 'entry.2030358186';

const newsletterSubmit = document.getElementById('newsletter-submit');
const newsletterEmail  = document.getElementById('newsletter-email');
const newsletterForm   = document.getElementById('newsletter-form-wrap');
const newsletterThanks = document.getElementById('newsletter-thanks');

if (newsletterSubmit && newsletterEmail) {
  newsletterSubmit.addEventListener('click', async () => {
    const email = newsletterEmail.value.trim();
    if (!email || !newsletterEmail.checkValidity()) {
      newsletterEmail.reportValidity();
      return;
    }
    newsletterSubmit.disabled = true;
    newsletterSubmit.textContent = 'Sending…';

    // Submit to Google Form via a hidden iframe (no CORS issues)
    const body = new FormData();
    body.append(GOOGLE_FORM_FIELD, email);
    try {
      // Google Forms doesn't return CORS-safe response; we fire and move on.
      await fetch(GOOGLE_FORM_ACTION_URL, { method: 'POST', body, mode: 'no-cors' });
    } catch (_) {
      // Expected with no-cors — treat as success
    }
    newsletterForm.classList.add('is-hidden');
    newsletterThanks.classList.remove('is-hidden');
  });

  // Allow Enter key in input
  newsletterEmail.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') newsletterSubmit.click();
  });
}

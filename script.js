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
    const text = (card.getAttribute('data-title') || card.textContent || '').toLowerCase();
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
// Google Form setup:
// Form title: Yok Stories Launch Updates
// First name field: optional
// Email field: required
//
// The website uses a custom form and submits to Google Forms in the background.
// Keep "First name" optional in Google Forms, otherwise blank first-name submissions may fail.
//
const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe--19YuxprrIMdFdllXVp7Mnodp5R88U8-C4vF5LtSozsGCA/formResponse';

const GOOGLE_FORM_FIRST_NAME_FIELD = 'entry.1884265043';
const GOOGLE_FORM_EMAIL_FIELD = 'entry.2030358186';

const newsletterSubmit = document.getElementById('newsletter-submit');
const newsletterFirstName = document.getElementById('newsletter-first-name');
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterForm = document.getElementById('newsletter-form-wrap');
const newsletterThanks = document.getElementById('newsletter-thanks');

async function submitNewsletterSignup() {
  const firstName = newsletterFirstName?.value.trim() || '';
  const email = newsletterEmail?.value.trim() || '';

  if (!newsletterEmail || !email || !newsletterEmail.checkValidity()) {
    newsletterEmail?.reportValidity();
    return;
  }

  newsletterSubmit.disabled = true;
  newsletterSubmit.textContent = 'Sending…';

  const body = new FormData();

  if (firstName) {
    body.append(GOOGLE_FORM_FIRST_NAME_FIELD, firstName);
  }

  body.append(GOOGLE_FORM_EMAIL_FIELD, email);

  try {
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      body,
      mode: 'no-cors'
    });
  } catch (_) {
    // Google Forms does not return a CORS-readable response.
    // With no-cors, treat this as success after submission is attempted.
  }

  newsletterForm?.classList.add('is-hidden');
  newsletterThanks?.classList.remove('is-hidden');
}

if (newsletterSubmit && newsletterEmail) {
  newsletterSubmit.addEventListener('click', submitNewsletterSignup);

  newsletterEmail.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitNewsletterSignup();
    }
  });

  newsletterFirstName?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitNewsletterSignup();
    }
  });
}

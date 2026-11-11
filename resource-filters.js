/* Progressive enhancement: without JavaScript, every resource remains visible. */
(() => {
 const type = document.getElementById('resource-filter-type');
 const theme = document.getElementById('resource-filter-theme');
 const status = document.getElementById('filter-status');
 if (!type || !theme || !status) return;
 const cards = [...document.querySelectorAll('article.resource-card')];
 const groups = [...new Set(cards.map(c => c.closest('section')))];
 const update = () => {
   let visible = 0;
   for (const card of cards) {
     const matches = (!type.value || card.dataset.resourceType === type.value) &&
       (!theme.value || (card.dataset.resourceThemes || '').split('|').includes(theme.value));
     card.hidden = !matches;
     if (matches) visible++;
   }
   for (const group of groups) {
     // Hide only category sections with zero visible cards; retain the filter bar and page intro.
     if (group && group.querySelector('.resource-card'))
       group.hidden = ![...group.querySelectorAll('.resource-card')].some(c => !c.hidden);
   }
   status.textContent = `Showing ${visible} of ${cards.length} free resources.`;
 };
 type.addEventListener('change', update);
 theme.addEventListener('change', update);
 update();
})();

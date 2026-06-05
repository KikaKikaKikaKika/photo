/* ============================================================
   KRISTINA FOTÓGRAFA — blog.js
   ============================================================ */

/* ── Language toggle ─────────────────────────────────────────── */
const langToggle = document.getElementById('lang-toggle');
let lang = localStorage.getItem('kf-lang') || 'es';

function setLang(l) {
  lang = l;
  localStorage.setItem('kf-lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('[data-en][data-es]').forEach(el => {
    el.textContent = el.dataset[l];
  });
  langToggle.textContent = l === 'es' ? 'EN' : 'ES';
  renderPosts();
}
langToggle.addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));


/* ── Mobile menu ─────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);


/* ── Header shadow ───────────────────────────────────────────── */
const headerEl = document.getElementById('header');
window.addEventListener('scroll', () => {
  headerEl.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(26,18,16,0.07)'
    : 'none';
}, { passive: true });


/* ── Render post list ────────────────────────────────────────── */
const blogGrid = document.getElementById('blog-grid');

setLang(lang);

function renderPosts() {
  blogGrid.innerHTML = '';

  if (BLOG_POSTS.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'blog-empty';
    empty.textContent = lang === 'es' ? 'Próximamente.' : 'Coming soon.';
    blogGrid.appendChild(empty);
    return;
  }

  BLOG_POSTS.forEach(post => {
    const title    = lang === 'es' ? post.title    : (post.titleEn    || post.title);
    const subtitle = lang === 'es' ? post.subtitle : (post.subtitleEn || post.subtitle);
    const date     = lang === 'es' ? post.date     : (post.dateEn     || post.date);

    const card = document.createElement('a');
    card.className = 'blog-card';
    card.href = `post.html?id=${post.id}`;
    card.innerHTML = `
      <div class="blog-card-info">
        <p class="blog-card-meta">${date} &middot; ${post.author}</p>
        <h2 class="blog-card-title">${title}</h2>
        <p class="blog-card-subtitle">${subtitle}</p>
      </div>
      <div class="blog-card-thumb">
        <img src="${post.thumbnail}" alt="${title}" loading="lazy">
      </div>
    `;
    blogGrid.appendChild(card);
  });
}

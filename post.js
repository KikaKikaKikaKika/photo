/* ============================================================
   KRISTINA FOTÓGRAFA — post.js
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
  renderPost();
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


/* ── Load post ───────────────────────────────────────────────── */
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const post   = BLOG_POSTS.find(p => p.id === postId);

function renderPost() {
  if (!post) {
    document.getElementById('post-title').textContent =
      lang === 'es' ? 'Artículo no encontrado.' : 'Post not found.';
    return;
  }

  const title    = lang === 'es' ? post.title    : (post.titleEn    || post.title);
  const subtitle = lang === 'es' ? post.subtitle : (post.subtitleEn || post.subtitle);
  const date     = lang === 'es' ? post.date     : (post.dateEn     || post.date);

  // page title
  document.title = `Kristina Fotógrafa — ${title}`;

  // cover image
  const coverWrap = document.getElementById('post-cover');
  const coverImg  = document.getElementById('post-cover-img');
  if (post.cover) {
    coverImg.src = post.cover;
    coverImg.alt = title;
    coverWrap.style.display = '';
  }

  // header
  document.getElementById('post-meta').textContent     = `${date} · ${post.author}`;
  document.getElementById('post-title').textContent    = title;
  document.getElementById('post-subtitle').textContent = subtitle;

  // content
  const contentEl = document.getElementById('post-content');
  contentEl.innerHTML = '';

  (post.content || []).forEach(block => {
    if (block.type === 'text') {
      const p = document.createElement('p');
      p.className = 'post-text';
      p.innerHTML = lang === 'es' ? block.es : (block.en || block.es);
      contentEl.appendChild(p);

    } else if (block.type === 'image') {
      const figure = document.createElement('figure');
      figure.className = 'post-figure';
      figure.innerHTML = `<img src="${block.src}" alt="${block.alt || ''}">`;
      if (block.caption) {
        const cap = document.createElement('figcaption');
        cap.textContent = lang === 'es' ? block.caption : (block.captionEn || block.caption);
        figure.appendChild(cap);
      }
      contentEl.appendChild(figure);

    } else if (block.type === 'images') {
      const grid = document.createElement('div');
      grid.className = 'post-image-pair';
      block.srcs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        grid.appendChild(img);
      });
      contentEl.appendChild(grid);

    } else if (block.type === 'gallery') {
      const strip = document.createElement('div');
      strip.className = 'post-gallery';
      block.srcs.forEach((src, i) => {
        const thumb = document.createElement('div');
        thumb.className = 'post-gallery-thumb';
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        thumb.appendChild(img);
        thumb.addEventListener('click', () => openLightbox(block.srcs, i));
        strip.appendChild(thumb);
      });
      contentEl.appendChild(strip);
    }
  });

  // credits
  const creditsEl = document.getElementById('post-credits');
  if (post.credits && post.credits.length > 0) {
    const heading = document.createElement('h3');
    heading.className = 'credits-heading';
    heading.textContent = lang === 'es' ? 'Créditos' : 'Credits';
    creditsEl.appendChild(heading);

    const list = document.createElement('dl');
    list.className = 'credits-list';
    post.credits.forEach(c => {
      if (!c.value) return;
      const dt = document.createElement('dt');
      dt.textContent = lang === 'es' ? c.labelEs : (c.labelEn || c.labelEs);
      const dd = document.createElement('dd');
      if (c.instagram) {
        dd.innerHTML = `${c.value} <a class="credits-ig" href="https://instagram.com/${c.instagram}" target="_blank" rel="noopener">@${c.instagram}</a>`;
      } else {
        dd.textContent = c.value;
      }
      list.appendChild(dt);
      list.appendChild(dd);
    });
    creditsEl.appendChild(list);
  }
}

setLang(lang);


/* ── Comments form ───────────────────────────────────────────── */
const commentsForm   = document.getElementById('comments-form');
const commentsThanks = document.getElementById('comments-thanks');

commentsForm.addEventListener('submit', async e => {
  e.preventDefault();
  const FORM_ID = '1FAIpQLScT6WLm4OneJj0BA2trtths3ljwGpoCUO4Wm2bciiC3qhg-ew';
  const data = new FormData();
  data.append('entry.1420414429', commentsForm.querySelector('[name="name"]').value);
  data.append('entry.31897132',   commentsForm.querySelector('[name="email"]').value);
  data.append('entry.1073640126', commentsForm.querySelector('[name="message"]').value);
  try {
    await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
      method: 'POST', body: data, mode: 'no-cors'
    });
  } catch (_) {}
  commentsForm.style.display = 'none';
  commentsThanks.style.display = '';
  commentsThanks.textContent = commentsThanks.dataset[lang];
});


/* ── Lightbox ────────────────────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');

let lbSrcs  = [];
let lbIndex = 0;

function openLightbox(srcs, index) {
  lbSrcs  = srcs;
  lbIndex = index;
  lbImg.src = lbSrcs[lbIndex];
  lbImg.style.display = 'block';
  document.getElementById('lb-video').style.display = 'none';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function moveLight(dir) {
  lbIndex = (lbIndex + dir + lbSrcs.length) % lbSrcs.length;
  lbImg.src = lbSrcs[lbIndex];
}

document.addEventListener('keydown', e => {
  if (!lightbox?.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') moveLight(1);
  if (e.key === 'ArrowLeft')  moveLight(-1);
});

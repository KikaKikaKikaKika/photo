/* ============================================================
   KRISTINA FOTÓGRAFA — script.js
   ============================================================ */

/* ── Language toggle ───────────────────────────────────────── */
const langToggle = document.getElementById('lang-toggle');
let lang = localStorage.getItem('kf-lang') || 'es';

function setLang(l) {
  lang = l;
  localStorage.setItem('kf-lang', l);
  document.documentElement.lang = l;

  document.querySelectorAll('[data-en][data-es]').forEach(el => {
    el.textContent = el.dataset[l];
  });

  // button always shows the other language (what you can switch TO)
  langToggle.textContent = l === 'es' ? 'EN' : 'ES';
}

langToggle.addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));
setLang(lang); // init


/* ── Mobile menu ───────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);


/* ── Header shadow on scroll ───────────────────────────────── */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(26,18,16,0.07)'
    : 'none';
}, { passive: true });


/* ── Gallery lightbox ───────────────────────────────────────── */
const galleryBoard = document.getElementById('gallery-board');
let activeMedia = [];
let currentLightboxIndex = 0;

function buildMediaList() {
  return [...galleryBoard.querySelectorAll('.gallery-item')].map(el => {
    const video = el.querySelector('video');
    if (video) return { src: video.getAttribute('src'), isVideo: true };
    const img = el.querySelector('img');
    return { src: img ? img.getAttribute('src') : '', isVideo: false };
  });
}

function openLightbox() {
  const { src, isVideo } = activeMedia[currentLightboxIndex];
  const lbImg   = document.getElementById('lb-img');
  const lbVideo = document.getElementById('lb-video');
  if (isVideo) {
    lbImg.style.display   = 'none';
    lbVideo.style.display = 'block';
    lbVideo.src = src;
    lbVideo.load();
  } else {
    lbVideo.style.display = 'none';
    lbVideo.pause();
    lbImg.style.display = 'block';
    lbImg.src = src;
  }
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  const lbVideo = document.getElementById('lb-video');
  lbVideo.pause();
  lbVideo.src = '';
}

function moveLight(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + activeMedia.length) % activeMedia.length;
  openLightbox();
}

if (galleryBoard) {
  galleryBoard.querySelectorAll('.gallery-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      activeMedia = buildMediaList();
      currentLightboxIndex = [...galleryBoard.querySelectorAll('.gallery-item')].indexOf(item);
      openLightbox();
    });
  });
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox')?.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') moveLight(1);
  if (e.key === 'ArrowLeft')  moveLight(-1);
});


/* ── Reshuffle ──────────────────────────────────────────────── */
const reshuffleBtn = document.getElementById('reshuffle-btn');
if (reshuffleBtn && galleryBoard) {
  reshuffleBtn.addEventListener('click', () => {
    const items = [...galleryBoard.querySelectorAll('.gallery-item')];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach(item => galleryBoard.appendChild(item));
  });
}

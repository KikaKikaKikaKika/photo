/* ============================================================
   KRISTINA FOTÓGRAFA — galerias.js
   ============================================================ */

/* ─── GOOGLE DRIVE API KEY ───────────────────────────────────
   Required to load images automatically from Drive folders.
   Get yours FREE (takes ~5 min):

     1. Go to: console.cloud.google.com
     2. Create a new project (any name)
     3. Left menu → "APIs & Services" → "Library"
     4. Search "Google Drive API" → click it → Enable
     5. Left menu → "Credentials" → "Create credentials" → "API key"
     6. Copy the key and paste it below

   Make sure each Drive folder is shared:
   Right-click folder → Share → "Anyone with the link" → Viewer
   ──────────────────────────────────────────────────────────── */
const DRIVE_API_KEY = 'AIzaSyBBrP6Qw2uZW3jsi2lpAQL_51Cf-0wKjB0';


/* ─── GALLERY CONFIG ─────────────────────────────────────────
   Password convention: WomansNameYMansNameYY  (e.g. LuciaYAngel26)

   To add a gallery:
     1. Upload photos to a Drive folder, share as "Anyone with the link"
     2. Folder ID = the string after /folders/ in the Drive URL
     3. Add an entry below
   ──────────────────────────────────────────────────────────── */
const GALLERIES = [
  {
    id:          'ana-xabi-mayo-2026',
    name:        'Ana y Xabi',
    date:        '23 Mayo 2026',
    dateEn:      '23 May 2026',
    location:    'O Grove',
    password:    'AnaYXabi26',
    driveFolder: null,                              // ← add Drive folder ID when ready
    thumbnail:   'images/ana-xabi-thumb.jpg',
  },
  {
    id:          'lucia-angel-mayo-2026',
    name:        'Lucía y Ángel',
    date:        '2 Mayo 2026',
    dateEn:      '2 May 2026',
    location:    'Pontevedra',
    password:    'LuciaYAngel26',
    driveFolder: '1r5pwsVhT6Gjhvq4Fa_vsmfKYJFRvplFi',
    thumbnail:   'images/lucia-angel-thumb.jpg',
  },
  {
    id:      'legacy',
    legacy:  true,
    name:    'Sesiones anteriores',
    nameEn:  'Older galleries',
    date:    'Antes de 2026',
    dateEn:  'Before 2026',
    location: '',
  },
];


/* ─── Drive URL helpers ──────────────────────────────────────── */
const driveThumb     = (id, sz = 'w600') => `https://drive.google.com/thumbnail?id=${id}&sz=${sz}`;
const driveImgFull   = (id)              => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
const driveFolderUrl = (folderId)        => `https://drive.google.com/drive/folders/${folderId}`;

async function fetchFolderImages(folderId, firstOnly = false) {
  if (!DRIVE_API_KEY) throw new Error('no-api-key');
  const q      = encodeURIComponent(`'${folderId}' in parents and mimeType contains 'image/' and trashed = false`);
  const fields = firstOnly ? 'files(id)' : 'files(id,name)';
  const size   = firstOnly ? 1 : 1000;
  const url    = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&orderBy=name&pageSize=${size}&key=${DRIVE_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const msg = body?.error?.message || res.status;
    throw new Error(`drive-api-${res.status}: ${msg}`);
  }
  const data = await res.json();
  return data.files || [];
}


/* ─── Language toggle ────────────────────────────────────────── */
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

  const esInfo = document.querySelector('.pw-info-es');
  const enInfo = document.querySelector('.pw-info-en');
  if (esInfo) esInfo.style.display = l === 'es' ? '' : 'none';
  if (enInfo) enInfo.style.display = l === 'en' ? '' : 'none';

  const pwErr = document.getElementById('pw-error');
  if (pwErr && pwErr.textContent) {
    pwErr.textContent = l === 'es' ? 'Contraseña incorrecta' : 'Incorrect password';
  }
}
langToggle.addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));
setLang(lang);



/* ─── Mobile menu ────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('open'))
);


/* ─── Header shadow ──────────────────────────────────────────── */
const headerEl = document.getElementById('header');
window.addEventListener('scroll', () => {
  headerEl.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(26,18,16,0.07)'
    : 'none';
}, { passive: true });


/* ─── Session unlock store ───────────────────────────────────── */
const isUnlocked    = id => sessionStorage.getItem(`kf-gal-${id}`) === '1';
const unlockGallery = id => sessionStorage.setItem(`kf-gal-${id}`, '1');


/* ─── Render gallery cards ───────────────────────────────────── */
const galGrid = document.getElementById('galleries-grid');

if (GALLERIES.length === 0) {
  const empty = document.createElement('p');
  empty.className = 'galleries-empty';
  empty.textContent = lang === 'es' ? 'Próximamente.' : 'Coming soon.';
  galGrid.appendChild(empty);
} else {
  GALLERIES.forEach(g => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    if (g.legacy) {
      card.className = 'gallery-card gallery-card--legacy';
      card.innerHTML = `
        <div class="gallery-card-thumb gallery-card-thumb--legacy">
          <img src="images/legacy-thumb.jpg" alt="">
        </div>
        <div class="gallery-card-info">
          <p class="gallery-card-name" data-es="${g.name}" data-en="${g.nameEn}">${lang === 'es' ? g.name : g.nameEn}</p>
          <p class="gallery-card-meta" data-es="${g.date}" data-en="${g.dateEn}">${lang === 'es' ? g.date : g.dateEn}</p>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="gallery-card-thumb">
          <img alt="${g.name}">
          <div class="gallery-card-overlay">
            <svg class="gallery-card-lock-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
        </div>
        <div class="gallery-card-info">
          <p class="gallery-card-name">${g.name}</p>
          <p class="gallery-card-meta" data-es="${g.date} · ${g.location}" data-en="${g.dateEn} · ${g.location}">${lang === 'es' ? g.date : g.dateEn} · ${g.location}</p>
        </div>
      `;
    }

    // load thumbnail (skip for legacy card)
    if (!g.legacy) {
      const thumbImg = card.querySelector('.gallery-card-thumb img');
      if (g.thumbnail) {
        thumbImg.src = g.thumbnail;
      } else {
        fetchFolderImages(g.driveFolder, true)
          .then(files => {
            if (files.length > 0) thumbImg.src = driveThumb(files[0].id, 'w600');
          })
          .catch(() => { /* stays as blush placeholder */ });
      }
    }

    card.addEventListener('click', () => handleCardClick(g));
    galGrid.appendChild(card);
  });
}


/* ─── Card click ─────────────────────────────────────────────── */
function handleCardClick(g) {
  if (g.legacy) {
    openLegacyModal();
  } else if (isUnlocked(g.id)) {
    openGalleryView(g);
  } else {
    openPasswordModal(g);
  }
}


/* ─── Legacy modal ───────────────────────────────────────────── */
const legacyModal = document.getElementById('legacy-modal');
const legacyClose = document.getElementById('legacy-close');

function openLegacyModal() {
  document.querySelector('.legacy-info-es').style.display = lang === 'es' ? '' : 'none';
  document.querySelector('.legacy-info-en').style.display = lang === 'en' ? '' : 'none';
  legacyModal.classList.add('open');
}
legacyClose.addEventListener('click', () => legacyModal.classList.remove('open'));
legacyModal.addEventListener('click', () => legacyModal.classList.remove('open'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') legacyModal.classList.remove('open');
});


/* ─── Password modal ─────────────────────────────────────────── */
const pwModal   = document.getElementById('pw-modal');
const pwInput   = document.getElementById('pw-input');
const pwError   = document.getElementById('pw-error');
const pwSubmit  = document.getElementById('pw-submit');
const pwClose   = document.getElementById('pw-close');
const pwGalName = document.getElementById('pw-gallery-name');

let pendingGallery = null;

function openPasswordModal(g) {
  pendingGallery = g;
  pwGalName.textContent = g.name;
  pwInput.value = '';
  pwError.textContent = '';
  pwModal.classList.add('open');
  setTimeout(() => pwInput.focus(), 80);
}

function closePasswordModal() {
  pwModal.classList.remove('open');
  pendingGallery = null;
}

pwClose.addEventListener('click', closePasswordModal);
pwModal.addEventListener('click', closePasswordModal);
pwSubmit.addEventListener('click', checkPassword);
pwInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkPassword(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && pwModal.classList.contains('open')) closePasswordModal();
});

function checkPassword() {
  if (!pendingGallery) return;
  if (pwInput.value === pendingGallery.password) {
    unlockGallery(pendingGallery.id);
    const g = pendingGallery;
    closePasswordModal();
    openGalleryView(g);
  } else {
    pwError.textContent = lang === 'es' ? 'Contraseña incorrecta' : 'Incorrect password';
    pwInput.value = '';
    pwInput.focus();
  }
}


/* ─── Gallery view ───────────────────────────────────────────── */
const pageGalleries  = document.getElementById('page-galleries');
const galleryView    = document.getElementById('gallery-view');
const gvName         = document.getElementById('gv-name');
const gvMeta         = document.getElementById('gv-meta');
const gvGrid         = document.getElementById('gallery-view-grid');
const downloadAllBtn = document.getElementById('download-all-btn');
const backBtn        = document.getElementById('back-btn');

let lightboxMedia = [];
let lightboxIndex = 0;

async function openGalleryView(g) {
  gvName.textContent = g.name;
  gvMeta.dataset.es  = `${g.date} · ${g.location}`;
  gvMeta.dataset.en  = `${g.dateEn} · ${g.location}`;
  gvMeta.textContent = lang === 'es' ? gvMeta.dataset.es : gvMeta.dataset.en;
  downloadAllBtn.href = driveFolderUrl(g.driveFolder);

  pageGalleries.style.display = 'none';
  galleryView.style.display   = 'block';
  window.scrollTo(0, 0);

  // show loading state
  if (!g.driveFolder) {
    gvGrid.innerHTML = `<p class="gv-loading">${lang === 'es' ? 'Próximamente…' : 'Coming soon…'}</p>`;
    return;
  }

  gvGrid.innerHTML = `<p class="gv-loading">${lang === 'es' ? 'Cargando imágenes…' : 'Loading images…'}</p>`;

  try {
    const files = await fetchFolderImages(g.driveFolder);

    if (files.length === 0) {
      gvGrid.innerHTML = `<p class="gv-loading">${lang === 'es' ? 'No hay imágenes todavía.' : 'No images yet.'}</p>`;
      return;
    }

    lightboxMedia = files.map(f => ({ src: driveImgFull(f.id), isVideo: false }));
    gvGrid.innerHTML = '';

    files.forEach((f, i) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.style.cursor = 'pointer';

      const img = document.createElement('img');
      img.src     = driveThumb(f.id, 'w600');
      img.alt     = '';
      img.loading = 'lazy';
      img.addEventListener('load',  () => img.classList.add('img-ready'));
      img.addEventListener('error', () => img.classList.add('img-ready'));

      item.appendChild(img);
      item.addEventListener('click', () => openLightbox(i));
      gvGrid.appendChild(item);
    });

  } catch (err) {
    const msg = err.message === 'no-api-key'
      ? (lang === 'es' ? 'Falta la clave de API de Google Drive. Añádela en galerias.js.' : 'Google Drive API key missing. Add it in galerias.js.')
      : (lang === 'es' ? 'Error al cargar las imágenes. Comprueba que la carpeta está compartida.' : 'Error loading images. Check that the folder is shared publicly.');
    gvGrid.innerHTML = `<p class="gv-loading gv-error">${msg}<br><small style="opacity:0.6">${err.message}</small></p>`;
  }
}

backBtn.addEventListener('click', () => {
  galleryView.style.display   = 'none';
  pageGalleries.style.display = '';
  window.scrollTo(0, 0);
});


/* ─── Lightbox ───────────────────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbVideo  = document.getElementById('lb-video');

function openLightbox(index) {
  lightboxIndex = index;
  lbImg.src = lightboxMedia[lightboxIndex].src;
  lbImg.style.display   = 'block';
  lbVideo.style.display = 'none';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function moveLight(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxMedia.length) % lightboxMedia.length;
  lbImg.src = lightboxMedia[lightboxIndex].src;
}

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') moveLight(1);
  if (e.key === 'ArrowLeft')  moveLight(-1);
});

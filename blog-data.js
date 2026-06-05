/* ============================================================
   KRISTINA FOTÓGRAFA — blog-data.js

   To add a post:
   1. Create a folder: posts/your-slug/
   2. Add images there
   3. Add an entry below (newest first)
   4. Content blocks:
        { type: 'text',   es: '...', en: '...' }
        { type: 'image',  src: 'posts/slug/filename.jpg' }
        { type: 'images', srcs: ['posts/slug/a.jpg', 'posts/slug/b.jpg'] }
   ============================================================ */

const BLOG_POSTS = [

  {
    id:         'ana-xabi-atlantic-2026',
    title:      'La boda atlántica de Ana y Xabi',
    titleEn:    "Ana and Xabi's Atlantic Coast Wedding",
    subtitle:   'Una reunión bañada de sol entre familia, amistad y alegría pura',
    subtitleEn: 'A Sun-Drenched Gathering of Family, Friendship, and Pure Joy',
    date:       'Junio 2026',
    dateEn:     'June 2026',
    author:     'Kristina',
    thumbnail:  'images/ana-xabi-thumb.jpg',
    cover:      'posts/ana-xabi-2026/ceremony5.jpg',
    content: [

      { type: 'gallery', srcs: [
        'posts/ana-xabi-2026/ceremony1.jpg',
        'posts/ana-xabi-2026/ceremony3.jpg',
        'posts/ana-xabi-2026/ceremony4.jpg',
        'posts/ana-xabi-2026/ceremony8.jpg',
      ]},

      {
        type: 'text',
        es:   "Perched above one of Galicia's most breathtaking Atlantic beaches, Finca La Atlántida was the kind of setting that needed no decoration. And yet on this particular May afternoon, Ana and Xabi filled it with something no venue ever comes with — an atmosphere of pure, uncontainable joy that swept up every single person who walked through the door.",
        en:   "Perched above one of Galicia's most breathtaking Atlantic beaches, Finca La Atlántida was the kind of setting that needed no decoration. And yet on this particular May afternoon, Ana and Xabi filled it with something no venue ever comes with — an atmosphere of pure, uncontainable joy that swept up every single person who walked through the door.",
      },

      {
        type: 'text',
        es:   "For the occasion, guests arrived from Argentina, Germany, Austria, and across Spain — a beautifully international gathering united by their love for this couple, and by the unmistakable sense that something special was about to unfold.",
        en:   "For the occasion, guests arrived from Argentina, Germany, Austria, and across Spain — a beautifully international gathering united by their love for this couple, and by the unmistakable sense that something special was about to unfold.",
      },

      // { type: 'image', src: 'posts/ana-xabi-2026/ceremony.jpg' },

      {
        type: 'text',
        es:   "The ceremony was held outdoors, with the beach shimmering below and the sky stretching wide overhead. There was no rigid script, no performative formality — just the people who knew them best, standing up to say so. Friends told stories that made people cry and then laugh in the same breath.",
        en:   "The ceremony was held outdoors, with the beach shimmering below and the sky stretching wide overhead. There was no rigid script, no performative formality — just the people who knew them best, standing up to say so. Friends told stories that made people cry and then laugh in the same breath.",
      },

      { type: 'gallery', srcs: [
        'posts/ana-xabi-2026/ceremony2.jpg',
        'posts/ana-xabi-2026/ceremony6.jpg',
        'posts/ana-xabi-2026/ceremony7.jpg',
      ]},

      {
        type: 'text',
        es:   "Cocktail hour arrived, and with it, a live concert that made absolutely clear what kind of day this was going to be. Music filled the air, guests sang along without hesitation, and the dance floor — such as it was, outdoors, under an open Galician sky — needed no formal invitation. There is always something quietly extraordinary about photographing people from different continents and cultures discover one another, and here, it happened naturally, effortlessly, somewhere between the first glass and the second song.",
        en:   "Cocktail hour arrived, and with it, a live concert that made absolutely clear what kind of day this was going to be. Music filled the air, guests sang along without hesitation, and the dance floor — such as it was, outdoors, under an open Galician sky — needed no formal invitation. There is always something quietly extraordinary about photographing people from different continents and cultures discover one another, and here, it happened naturally, effortlessly, somewhere between the first glass and the second song.",
      },

      { type: 'gallery', srcs: [
        'posts/ana-xabi-2026/cocktail1.jpg',
        'posts/ana-xabi-2026/cocktail2.jpg',
      ]},

      {
        type: 'text',
        es:   "Lunch was served indoors, the round tables doing what round tables do best: dissolving hierarchy and encouraging intimacy. But this particular afternoon was not one for sitting still. Dance battles erupted between tables. Friendly competitions brought out an unexpected competitive streak in the most unsuspecting guests. Spontaneous singalongs moved through the room like warm weather. At a certain point, remaining seated became simply beside the point.",
        en:   "Lunch was served indoors, the round tables doing what round tables do best: dissolving hierarchy and encouraging intimacy. But this particular afternoon was not one for sitting still. Dance battles erupted between tables. Friendly competitions brought out an unexpected competitive streak in the most unsuspecting guests. Spontaneous singalongs moved through the room like warm weather. At a certain point, remaining seated became simply beside the point.",
      },

      { type: 'gallery', srcs: [
        'posts/ana-xabi-2026/lunch1.jpg',
        'posts/ana-xabi-2026/lunch2.jpg',
      ]},

      {
        type: 'text',
        es:   "The DJs kept the music alive and the afternoon flowed — from toasts to dancing, from laughter to those quieter, more tender moments that sneak up on you at weddings and remind you what it all means.",
        en:   "The DJs kept the music alive and the afternoon flowed — from toasts to dancing, from laughter to those quieter, more tender moments that sneak up on you at weddings and remind you what it all means.",
      },

      {
        type: 'text',
        es:   "And then came the cake — which is to say, then came the moment. What began as a cutting ceremony became, within minutes, something considerably more joyful and considerably less contained. Sugar flew. Guests descended. It was chaos of the most photogenic kind, and it was absolutely them.",
        en:   "And then came the cake — which is to say, then came the moment. What began as a cutting ceremony became, within minutes, something considerably more joyful and considerably less contained. Sugar flew. Guests descended. It was chaos of the most photogenic kind, and it was absolutely them.",
      },

      { type: 'gallery', srcs: ['posts/ana-xabi-2026/cake2.jpg', 'posts/ana-xabi-2026/cake3.jpg', 'posts/ana-xabi-2026/cake1.jpg', 'posts/ana-xabi-2026/cake4.jpg'] },

      {
        type: 'text',
        es:   "As golden hour settled, Ana reappeared in a short party dress and cowboy boots — a studied nonchalance that signalled, unmistakably, that the evening had only just begun. The party moved to the villa on the property, and with it came a full shift in atmosphere: the wedding had given way to something looser, louder, and entirely wonderful.",
        en:   "As golden hour settled, Ana reappeared in a short party dress and cowboy boots — a studied nonchalance that signalled, unmistakably, that the evening had only just begun. The party moved to the villa on the property, and with it came a full shift in atmosphere: the wedding had given way to something looser, louder, and entirely wonderful.",
      },

      // { type: 'images', srcs: ['posts/ana-xabi-2026/party-1.jpg', 'posts/ana-xabi-2026/party-2.jpg'] },

      {
        type: 'text',
        es:   "A new DJ stepped in. Then Ana emerged wearing illuminated wings that caught the night air and glowed against the darkening sky, while Xabi arrived in a striking mask that met her theatrical energy perfectly.",
        en:   "A new DJ stepped in. Then Ana emerged wearing illuminated wings that caught the night air and glowed against the darkening sky, while Xabi arrived in a striking mask that met her theatrical energy perfectly.",
      },

      { type: 'gallery', srcs: [
        'posts/ana-xabi-2026/party1.jpg',
        'posts/ana-xabi-2026/party2.jpg',
      ]},

      {
        type: 'text',
        es:   "The dancing and laughter continued until 1 a.m., the guests unwilling, and seemingly unable, to let the evening end. As their photographer, I had the privilege of being present for every chapter — from the quiet anticipation of the morning preparations to the final song of the after-party — more than fourteen hours of one of the most joyful days I have ever had the honour of documenting.",
        en:   "The dancing and laughter continued until 1 a.m., the guests unwilling, and seemingly unable, to let the evening end. As their photographer, I had the privilege of being present for every chapter — from the quiet anticipation of the morning preparations to the final song of the after-party — more than fourteen hours of one of the most joyful days I have ever had the honour of documenting.",
      },

    ],
    credits: [
      { labelEs: 'Lugar',             labelEn: 'Venue',        value: 'Finca La Atlántida', instagram: 'fincalaatlantida' },
      { labelEs: 'Fotografía',        labelEn: 'Photography',  value: 'Kristina',           instagram: 'kristina_fotografa' },
      { labelEs: 'Zapatos de novia',  labelEn: 'Bridal Shoes', value: 'Greta & Él',         instagram: 'gretayel' },
      { labelEs: 'Tarta',             labelEn: 'Cake',         value: 'Habaziro',           instagram: 'habaziroconcept' },
      { labelEs: 'Flores',            labelEn: 'Florals',      value: '' },
      { labelEs: 'Banda',             labelEn: 'Band',         value: 'Jugones',        instagram: 'jugonesss' },
      { labelEs: 'DJs',               labelEn: 'DJs',          value: 'DJ Braulio GZ',  instagram: 'dj_brauliogz' },
      { labelEs: 'Catering',          labelEn: 'Catering',     value: '' },
    ],
  },

];

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
      { labelEs: 'Vestido de novia',  labelEn: 'Dress',        value: 'Rosa Carla',         instagram: 'rosa_carla' },
      { labelEs: 'Zapatos de novia',  labelEn: 'Bridal Shoes', value: 'Greta & Él',         instagram: 'gretayel' },
      { labelEs: 'Tarta',             labelEn: 'Cake',         value: 'Habaziro',           instagram: 'habaziroconcept' },
      { labelEs: 'Flores',            labelEn: 'Florals',      value: '' },
      { labelEs: 'Banda',             labelEn: 'Band',         value: 'Jugones',            instagram: 'jugonesss' },
      { labelEs: 'DJs',               labelEn: 'DJs',          value: 'DJ Braulio GZ',      instagram: 'dj_brauliogz' },
      { labelEs: 'Catering',          labelEn: 'Catering',     value: '' },
    ],
  },


  {
    id:         'mi-boda-no-tradicional-galicia-2023',
    title:      'Mi boda no tradicional en Galicia',
    titleEn:    'My Non-Traditional Wedding in Galicia',
    subtitle:   'A wedding that felt more like our favourite summer day.',
    subtitleEn: 'A wedding that felt more like our favourite summer day.',
    date:       'Julio 2023',
    dateEn:     'July 2023',
    author:     'Kristina',
    thumbnail:  'posts/mi-boda-galicia-2023/cover.jpg',
    cover:      'posts/mi-boda-galicia-2023/cover.jpg',
    content: [

      {
        type: 'text',
        es:   "When we decided to get married, we made one rule: no over-planning, no overthinking. We wanted the day to feel relaxed and fun. So instead of filling it with things people normally do at weddings, we filled it with things we already love, at places we enjoy.",
        en:   "When we decided to get married, we made one rule: no over-planning, no overthinking. We wanted the day to feel relaxed and fun. So instead of filling it with things people normally do at weddings, we filled it with things we already love, at places we enjoy.",
      },

      { type: 'gallery', srcs: [
        'posts/mi-boda-galicia-2023/intro1.jpg',
        'posts/mi-boda-galicia-2023/intro2.jpg',
        'posts/mi-boda-galicia-2023/intro3.jpg',
      ]},

      {
        type: 'text',
        es:   "I bought a simple white dress from a local boutique, paired it with my dream shoes, and wore the jewellery Emilio had gifted me over the years. On top, I threw on a bohemian coat I'd picked up during a trip to Thailand — it somehow made the whole outfit feel a little more sophisticated. I did my own hair and makeup, keeping everything natural. Then, at the very last minute, I grabbed a big, beautiful bouquet that was simple in the best possible way. Emilio, meanwhile, chose comfort over tradition: elegant shoes, casual trousers, a dark shirt, and sunglasses ready to go whenever the Spanish sun demanded them.",
        en:   "I bought a simple white dress from a local boutique, paired it with my dream shoes, and wore the jewellery Emilio had gifted me over the years. On top, I threw on a bohemian coat I'd picked up during a trip to Thailand — it somehow made the whole outfit feel a little more sophisticated. I did my own hair and makeup, keeping everything natural. Then, at the very last minute, I grabbed a big, beautiful bouquet that was simple in the best possible way. Emilio, meanwhile, chose comfort over tradition: elegant shoes, casual trousers, a dark shirt, and sunglasses ready to go whenever the Spanish sun demanded them.",
      },

      {
        type: 'text',
        es:   "And off we went.",
        en:   "And off we went.",
      },

      { type: 'gallery', srcs: [
        'posts/mi-boda-galicia-2023/cocktail1.jpg',
        'posts/mi-boda-galicia-2023/cocktail3.jpg',
        'posts/mi-boda-galicia-2023/cocktail4.jpg',
      ]},

      {
        type: 'text',
        es:   "Instead of hiding away before the ceremony, we invited everyone to meet us for a drink. Normally, this is the part where the guests meet and have fun while the couple is stressing over last-minute details and trying not to sweat through their fancy clothes. We wanted none of that. We wanted to be there, soaking in the atmosphere, hugging everyone, catching up, having an Aperol (or whatever was calling your name), and enjoying a little anti-stress snack before saying \"I do.\"",
        en:   "Instead of hiding away before the ceremony, we invited everyone to meet us for a drink. Normally, this is the part where the guests meet and have fun while the couple is stressing over last-minute details and trying not to sweat through their fancy clothes. We wanted none of that. We wanted to be there, soaking in the atmosphere, hugging everyone, catching up, having an Aperol (or whatever was calling your name), and enjoying a little anti-stress snack before saying \"I do.\"",
      },

      {
        type: 'text',
        es:   "From there, we simply walked together to the gallery where we had the ceremony. Yeeees, we got married surrounded by loved ones and art.",
        en:   "From there, we simply walked together to the gallery where we had the ceremony. Yeeees, we got married surrounded by loved ones and art.",
      },

      { type: 'gallery', srcs: [
        'posts/mi-boda-galicia-2023/ceremony1.jpg',
        'posts/mi-boda-galicia-2023/ceremony2.jpg',
        'posts/mi-boda-galicia-2023/ceremony3.jpg',
      ]},

      {
        type: 'text',
        es:   "The moment I found out that was even an option, there was no competition. The gallery sits in a gorgeous old building overlooking Vigo's main square — the very same one where we'd just been having cocktails. And honestly, if anyone somehow got bored during the ceremony, there were plenty of paintings to admire. Not that boredom was likely.",
        en:   "The moment I found out that was even an option, there was no competition. The gallery sits in a gorgeous old building overlooking Vigo's main square — the very same one where we'd just been having cocktails. And honestly, if anyone somehow got bored during the ceremony, there were plenty of paintings to admire. Not that boredom was likely.",
      },

      { type: 'image', src: 'posts/mi-boda-galicia-2023/ceremony-inside.jpg' },

      {
        type: 'text',
        es:   "A friend played guitar as we walked in, choosing a beautiful romantic song. A lovely officiant led the ceremony, while another friend translated everything into Slovak on the spot. Besides saving me from missing half the Spanish, the live translation added so many unexpected laughs.",
        en:   "A friend played guitar as we walked in, choosing a beautiful romantic song. A lovely officiant led the ceremony, while another friend translated everything into Slovak on the spot. Besides saving me from missing half the Spanish, the live translation added so many unexpected laughs.",
      },

      { type: 'image', src: 'posts/mi-boda-galicia-2023/rings.jpg' },

      {
        type: 'text',
        es:   "Then came the rings. That's when we discovered that in Galicia and Slovakia, wedding rings belong on different hands. After a brief international discussion involving half the guests, we decided to follow Galician tradition. Right hand it is. We signed the paperwork that officially sealed the love deal and, as a lovely surprise, the gallery gifted us a limited-edition print that will always hang on our wall to remind us of the day. Not a bad wedding favour.",
        en:   "Then came the rings. That's when we discovered that in Galicia and Slovakia, wedding rings belong on different hands. After a brief international discussion involving half the guests, we decided to follow Galician tradition. Right hand it is. We signed the paperwork that officially sealed the love deal and, as a lovely surprise, the gallery gifted us a limited-edition print that will always hang on our wall to remind us of the day. Not a bad wedding favour.",
      },

      {
        type: 'text',
        es:   "After the ceremony, we split the group. Friends were set free to explore the town while we took just our families for lunch. We knew this would probably be the only moment all of them would ever sit together around one table, undistracted, so we wanted to make it count. We booked an incredible restaurant where the chef personally came out to explain each course. It turned into one of the best meals we've ever had, with conversation bouncing between Spanish, Slovak, and English as everyone translated for everyone else. Somehow, all eighteen of us managed to understand enough to laugh at the same jokes.",
        en:   "After the ceremony, we split the group. Friends were set free to explore the town while we took just our families for lunch. We knew this would probably be the only moment all of them would ever sit together around one table, undistracted, so we wanted to make it count. We booked an incredible restaurant where the chef personally came out to explain each course. It turned into one of the best meals we've ever had, with conversation bouncing between Spanish, Slovak, and English as everyone translated for everyone else. Somehow, all eighteen of us managed to understand enough to laugh at the same jokes.",
      },

      { type: 'image', src: 'posts/mi-boda-galicia-2023/beach-toast.jpg' },

      {
        type: 'text',
        es:   "At 6 p.m., everyone reunited at our favourite beach — or, as we call it, Sexy Beach (somehow it's always full of ridiculously attractive people). Our only dress code was <strong>Ibizenco: everyone in white.</strong> Seeing fifty of our favourite people dressed in the same colour created this lovely feeling of unity. It was especially striking because the beach wasn't private. We were surrounded by sunbathers, swimmers, and curious onlookers, yet our little all-white crowd felt like its own tiny world.",
        en:   "At 6 p.m., everyone reunited at our favourite beach — or, as we call it, Sexy Beach (somehow it's always full of ridiculously attractive people). Our only dress code was <strong>Ibizenco: everyone in white.</strong> Seeing fifty of our favourite people dressed in the same colour created this lovely feeling of unity. It was especially striking because the beach wasn't private. We were surrounded by sunbathers, swimmers, and curious onlookers, yet our little all-white crowd felt like its own tiny world.",
      },

      { type: 'gallery', srcs: [
        'posts/mi-boda-galicia-2023/beach2.jpg',
        'posts/mi-boda-galicia-2023/beach3.jpg',
        'posts/mi-boda-galicia-2023/beach4.jpg',
      ]},

      {
        type: 'text',
        es:   "We'd rented the terrace of our favourite chiringuito—the little beach bar where we've spent countless summer days since moving to Galicia.",
        en:   "We'd rented the terrace of our favourite chiringuito—the little beach bar where we've spent countless summer days since moving to Galicia.",
      },

      {
        type: 'text',
        es:   "With the help of friends, we decorated the terrace ourselves, picked up the food that very morning, and laid out a generous buffet. We had exactly one catering rule: <strong>no one goes hungry. At any point. Ever.</strong>",
        en:   "With the help of friends, we decorated the terrace ourselves, picked up the food that very morning, and laid out a generous buffet. We had exactly one catering rule: <strong>no one goes hungry. At any point. Ever.</strong>",
      },

      {
        type: 'text',
        es:   "We also managed to get our favourite cheesecake by asking a restaurant if they would sell us the entire tray instead of individual slices. To our delight, they said yes. Several kilos and about half a metre of cheesecake later, we can confirm it was an excellent decision.",
        en:   "We also managed to get our favourite cheesecake by asking a restaurant if they would sell us the entire tray instead of individual slices. To our delight, they said yes. Several kilos and about half a metre of cheesecake later, we can confirm it was an excellent decision.",
      },

      {
        type: 'text',
        es:   "The only thing we paid the venue for was the bar, and our instructions were wonderfully simple: <strong>order whatever you want.</strong>",
        en:   "The only thing we paid the venue for was the bar, and our instructions were wonderfully simple: <strong>order whatever you want.</strong>",
      },

      {
        type: 'text',
        es:   "The bill is the proof.",
        en:   "The bill is the proof.",
      },

      { type: 'image', src: 'posts/mi-boda-galicia-2023/bill.jpg' },

      {
        type: 'text',
        es:   "It wasn't fancy. It wasn't perfectly styled. But it felt as we planned: relaxed, welcoming, and much more like hosting our favourite beach party than a traditional wedding.",
        en:   "It wasn't fancy. It wasn't perfectly styled. But it felt as we planned: relaxed, welcoming, and much more like hosting our favourite beach party than a traditional wedding.",
      },

      {
        type: 'text',
        es:   "Then our DJ took over. He was one of our absolute non-negotiables. I distinctly remember saying, <em>\"If we can have our wedding at this chiringuito and DJ Surda says yes, then we're getting married.\"</em> Years ago, when we lived in Barcelona, we'd heard him play and instantly fell in love with his music. So much so that we asked him to fly over for our party — even though he doesn't actually do weddings. Luckily for us, he said yes. And he absolutely nailed it. The music was perfect from the very first track, the dance floor stayed full, and it felt much less like a wedding reception and much more like the kind of beach party we'd happily go to any summer weekend.",
        en:   "Then our DJ took over. He was one of our absolute non-negotiables. I distinctly remember saying, <em>\"If we can have our wedding at this chiringuito and DJ Surda says yes, then we're getting married.\"</em> Years ago, when we lived in Barcelona, we'd heard him play and instantly fell in love with his music. So much so that we asked him to fly over for our party — even though he doesn't actually do weddings. Luckily for us, he said yes. And he absolutely nailed it. The music was perfect from the very first track, the dance floor stayed full, and it felt much less like a wedding reception and much more like the kind of beach party we'd happily go to any summer weekend.",
      },

      { type: 'image', src: 'posts/mi-boda-galicia-2023/party.jpg' },

      {
        type: 'text',
        es:   "We danced barefoot, sang in several languages, swam in the ocean, talked, danced some more, drank, smoked, and celebrated exactly as much as we felt like. The party did have one limit, though: 1 a.m. Before everything went quiet again, we asked a friend to perform a queimada. It's not a wedding tradition, but a Galician ritual where a flaming punch is prepared while a spell is recited to chase away bad spirits. It felt like the perfect way to show our travelling guests a little piece of local magic. Standing there in the dark, watching the blue flames dance, was the calmest moment of the whole day.",
        en:   "We danced barefoot, sang in several languages, swam in the ocean, talked, danced some more, drank, smoked, and celebrated exactly as much as we felt like. The party did have one limit, though: 1 a.m. Before everything went quiet again, we asked a friend to perform a queimada. It's not a wedding tradition, but a Galician ritual where a flaming punch is prepared while a spell is recited to chase away bad spirits. It felt like the perfect way to show our travelling guests a little piece of local magic. Standing there in the dark, watching the blue flames dance, was the calmest moment of the whole day.",
      },

      { type: 'gallery', srcs: [
        'posts/mi-boda-galicia-2023/beach1.jpg',
        'posts/mi-boda-galicia-2023/beach5.jpg',
      ]},

      { type: 'gallery', srcs: [
        'posts/mi-boda-galicia-2023/beach6.jpg',
        'posts/mi-boda-galicia-2023/beach7.jpg',
      ]},

      {
        type: 'text',
        es:   "Looking back, I think the best wedding advice is simple: don't plan the perfect wedding. Plan a day you'll genuinely enjoy.",
        en:   "Looking back, I think the best wedding advice is simple: don't plan the perfect wedding. Plan a day you'll genuinely enjoy.",
      },

      {
        type: 'text',
        es:   "For us, that meant spending the day in our favourite places with our favourite people—starting with cocktails, getting married in an art gallery, sharing an incredible meal with our families, and ending barefoot on a beach with unlimited food, drinks, several kilos of cheesecake, and our favourite DJ.",
        en:   "For us, that meant spending the day in our favourite places with our favourite people—starting with cocktails, getting married in an art gallery, sharing an incredible meal with our families, and ending barefoot on a beach with unlimited food, drinks, several kilos of cheesecake, and our favourite DJ.",
      },


      { type: 'image', src: 'posts/mi-boda-galicia-2023/final.jpg' },

    ],
    credits: [
      { labelEs: 'Cócteles',          labelEn: 'Cocktails',   value: 'Restaurante Cañaveral',                    instagram: '' },
      { labelEs: 'Ceremonia',         labelEn: 'Ceremony',    value: 'Pinacoteca Francisco Fernández del Riego', instagram: '' },
      { labelEs: 'Fiesta',            labelEn: 'Party',       value: 'Playa de Area Fofa',                       instagram: '' },
      { labelEs: 'DJ',                labelEn: 'DJ',          value: 'DJ Surda',                                 instagram: 'djsurda' },
      { labelEs: 'Vestido de novia',  labelEn: 'Bride Dress', value: 'Coosy',                                    instagram: 'coosy' },
      { labelEs: 'Zapatos de novia',  labelEn: 'Bride Shoes', value: 'SJP',                                      instagram: '' },
    ],
  },

];

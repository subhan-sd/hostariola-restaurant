export const images = {
  hero: 'photo-1517248135467-4c7edcad34c4',
  storyMain: 'photo-1466978913421-dad2ebd01d17',
  storySecondary: 'photo-1552566626-52f8b828add9',
  dishAperitivo: 'photo-1504674900247-0877df9cc836',
  dishPrimo: 'photo-1414235077428-338989a2e8c0',
  dishSecondo: 'photo-1600891964092-4316c288032e',
  dishDolce: 'photo-1550966871-3ed3cdb5ed0c',
  experienceMain: 'photo-1555396273-367ea4eb4db5',
  experienceSecondary: 'photo-1514933651103-005eec06c04b',
};

export const galleryImages = [
  'photo-1476224203421-9ac39bcb3327',
  'photo-1547573854-74d2a71d0826',
  'photo-1424847651672-bf20a4b0982b',
  'photo-1565299624946-b28f40a0ae38',
  'photo-1551183053-bf91a1d81141',
  'photo-1559339352-11d035aa65de',
];

const src = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75`;

export const img = (id: string, w: number) => `${src(id)}&w=${w}`;

export interface Dish {
  name: string;
  desc: string;
  category: string;
  image: string;
}

export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export type Dict = typeof en;

export const en = {
  lang: 'en',
  brand: 'Hostariola',
  brandLine: 'Ristorante · Colorno',
  nav: {
    home: 'Home',
    story: 'Our Story',
    menu: 'Menu',
    gallery: 'Gallery',
    contact: 'Contact',
    book: 'Book a Table',
  },
  hero: {
    kicker: 'Ristorante Italiano',
    titlePart1: 'A Taste of Emilia,',
    titlePart2: 'at the Heart of Colorno.',
    sub: 'Traditional flavors, local ingredients and the warmth of Italian hospitality.',
    ctaPrimary: 'Discover Our Menu',
    ctaSecondary: 'Book a Table',
    location: 'Colorno · Parma · Emilia-Romagna',
    scroll: 'Scroll',
  },
  story: {
    label: 'Our Story',
    title: 'Where tradition meets the pleasure of being together.',
    p1: 'Hostariola sits quietly in Colorno, in the heart of the emulsioned countryside of Parma. Here the season sets the table: vegetables from nearby fields, La Parmigiana from the dairies of the lowlands, and cured meats that have been aged, for generations, in the cellars of these lands.',
    p2: 'Our kitchen keeps the rhythm of Emilia — handmade pasta rolled each morning, slow braises that wait all day for the evening, and a dining room that fills slowly with conversation and the sound of glasses. We cook the way we were taught, and we serve it the way it has always been best enjoyed: shared.',
    p3: 'A table at Hostariola is not a transaction. It is an invitation to slow down, to sit a little longer, to taste what this region has spent a lifetime perfecting.',
    quote: 'Piacere, slow down and enjoy.',
  },
  dishes: {
    label: 'Signature Dishes',
    title: 'The Flavors of Emilia',
    sub: 'A selection we prepare with care — starting from the recipe book of our territory.',
    items: [
      {
        dish: {
          name: 'Tortelli d\u2019Erbetta',
          desc: 'Handmade parcels of spinach and ricotta, dressed simply with melted butter and Parmigiano Reggiano.',
          category: 'Primo Piatti',
        } as Dish,
        image: img('photo-1414235077428-338989a2e8c0', 900),
      },
      {
        dish: {
          name: 'Anolini in Brodo',
          desc: 'Filled pasta served in a golden beef broth, the quiet, slow classic of the houses of Parma.',
          category: 'Primo Piatti',
        } as Dish,
        image: img('photo-1504674900247-0877df9cc836', 900),
      },
      {
        dish: {
          name: 'Stracotto al Vino Rosso',
          desc: 'Beef braised for hours in red wine until it yields to the touch, served with its own rich reduction.',
          category: 'Secondi',
        } as Dish,
        image: img('photo-1600891964092-4316c288032e', 900),
      },
      {
        dish: {
          name: 'Zuppa Inglese',
          desc: 'A layered Emilian trifle of soft cake, custard and a generous veil of local liqueur.',
          category: 'Dolci',
        } as Dish,
        image: img('photo-1550966871-3ed3cdb5ed0c', 900),
      },
    ] as { dish: Dish; image: string }[],
    cta: 'Explore the Menu',
  },
  experience: {
    label: 'The Experience',
    title: 'More Than a Meal',
    sub: 'Come for the flavors. Stay for the atmosphere.',
    p1: 'By the evening, Hostariola becomes something more than a kitchen. Candles are lit, the wine is opened, and the table begins to gather people — old friends, new neighbors, families passing through the Po valley. A dinner here is slow by design: courses arrive one by one, and nothing is rushed.',
    p2: 'We believe hospitality is not a service but an instinct. You are not a guest for an hour; you are, for the evening, part of the house.',
    cta: 'Reserve your evening',
  },
  gallery: {
    label: 'Gallery',
    title: 'Moments at the Table',
    sub: 'The room, the light, the food and the people who make an evening at Hostariola.',
    captions: ['Handmade pasta of the day', 'Wine of Emilia, by the glass and by the bottle', 'The table is set', 'Dishes that come to share', 'From the kitchen to the table', 'Evening light'],
  },
  menu: {
    label: 'The Menu',
    title: 'From the Kitchen, with the Season',
    sub: 'An illustrative menu for this presentation. Dishes and prices are placeholders and will follow the season.',
    sections: [
      {
        title: 'Antipasti',
        items: [
          { name: 'Affettati della Casa', desc: 'A board of local cured meats with crescentine and a touch of mostarda.', price: '€ XX' },
          { name: 'Carpaccio di Manzo', desc: 'Thinly sliced beef, lemon, young parmesan and rocket.', price: '€ XX' },
          { name: 'Parmigiana di Melanzane', desc: 'Baked aubergine, tomato and fior di latte, served warm.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Primi',
        items: [
          { name: 'Tortelli d\u2019Erbetta', desc: 'Butter, sage and Parmigiano Reggiano.', price: '€ XX' },
          { name: 'Anolini in Brodo', desc: 'Filled pasta in a long-simmered beef broth.', price: '€ XX' },
          { name: 'Tagliatelle al Rag\u00f9', desc: 'The slow sauce of Emilia on fresh hand-cut noodles.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Secondi',
        items: [
          { name: 'Stracotto al Vino Rosso', desc: 'Braise of beef in red wine, soft polenta on the side.', price: '€ XX' },
          { name: 'Pollo al Mattone', desc: 'Chicken pressed under the brick, rosemary and lemon.', price: '€ XX' },
          { name: 'Fritto Misto del Po', desc: 'A crisp selection of the river\u2019s fish, with grilled vegetables.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Dolci',
        items: [
          { name: 'Zuppa Inglese', desc: 'The Emilian trifle, layered and generous.', price: '€ XX' },
          { name: 'Torta di Mele', desc: 'Warm apple cake with cream fresh from the dairy.', price: '€ XX' },
          { name: 'Gelato Artigianale', desc: 'Three seasonal flavors, made in the house.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Vini',
        items: [
          { name: 'Lambrusco', desc: 'The wine of Emilia — lively, red, lightly sparkling.', price: '€ XX' },
          { name: 'Malvasia di Candia', desc: 'A dry white of the Parma province, citrus and herbal.', price: '€ XX' },
          { name: 'Gutturnio DOC', desc: 'A structured red from the neighboring hills of Piacenza.', price: '€ XX' },
        ] as MenuItem[],
      },
    ] as { title: string; items: MenuItem[] }[],
    note: 'Demonstration menu — prices and dishes may vary.',
    cta: 'View Full Menu',
  },
  reserve: {
    label: 'Reservations',
    title: 'Your Table Awaits',
    sub: 'Join us for an authentic taste of Emilia and a warm Italian dining experience.',
    form: {
      name: 'Name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@example.com',
      date: 'Date',
      time: 'Time',
      guests: 'Guests',
      guestOne: '1 guest',
      guestMany: (n: number) => `${n} guests`,
      submit: 'Book a Table',
      success: 'Grazie! Your request has been received. We will confirm shortly.',
      demo: 'Demo form — details are placeholders.',
    },
    ctaCall: 'Call the Restaurant',
  },
  location: {
    label: 'Find Us',
    title: 'Colorno, on the Edge of the Po Valley',
    sub: 'In the streets of the old center of Colorno, a short walk from the Ducal Palace.',
    addressLabel: 'Address',
    address: 'Via \u2014\u2014\u2014\u2014\u2014, Colorno (PR)',
    hoursLabel: 'Opening Hours',
    hours: [
      ['Tuesday – Sunday', '12:30 – 14:30 · 19:30 – 22:30'],
      ['Monday', 'Closed'],
    ],
    contactLabel: 'Contact',
    phone: '+39 000 000 0000',
    email: 'hello@hostariola.it',
    mapCta: 'Open in Google Maps',
    reserveCta: 'Book a Table',
    placeholder: 'Contact details are placeholders for the presentation.',
  },
  footer: {
    tagline: 'Traditional Italian Cuisine',
    place: 'Colorno · Parma · Emilia-Romagna',
    cuisine: 'Handmade pasta · Local cured meats · Wines of Emilia',
    legal: ['Privacy Policy', 'Cookie Policy'],
    credits: 'Presentation website — for demonstration purposes.',
  },
} as const;

export const it: Dict = {
  lang: 'it',
  brand: 'Hostariola',
  brandLine: 'Ristorante · Colorno',
  nav: {
    home: 'Home',
    story: 'La Nostra Storia',
    menu: 'Menu',
    gallery: 'Galleria',
    contact: 'Contatti',
    book: 'Prenota un Tavolo',
  },
  hero: {
    kicker: 'Ristorante Italiano',
    titlePart1: 'Un Gusto d\u2019Emilia,',
    titlePart2: 'nel Cuore di Colorno.',
    sub: 'Sapori tradizionali, ingredienti del territorio e il calore dell\u2019ospitalit\u00e0 italiana.',
    ctaPrimary: 'Scopri il Menu',
    ctaSecondary: 'Prenota un Tavolo',
    location: 'Colorno · Parma · Emilia-Romagna',
    scroll: 'Scorri',
  },
  story: {
    label: 'La Nostra Storia',
    title: 'Dove la tradizione incontra il piacere di stare insieme.',
    p1: 'Hostariola sorge tranquilla a Colorno, nel cuore della campagna parmigiana. Qui \u00e8 la stagione a mettere la tavola: ortaggi dai campi vicini, la Parmigiana dalle latterie della bassa e salumi stagionati da generazioni nelle cantine di queste terre.',
    p2: 'La nostra cucina segue il ritmo dell\u2019Emilia \u2014 pasta fatta a mano ogni mattina, cotture lente che aspettano la sera, e una sala che si riempie piano di conversazioni e di brindisi. Cuciniamo come ci hanno insegnato e serviamo come si fa da sempre: condividendo.',
    p3: 'Un tavolo da Hostariola non \u00e8 una transazione. \u00c8 un invito a rallentare, a restare un po\u2019 pi\u00f9 a lungo, ad assaggiare quello che questa terra ha perfezionato in una vita.',
    quote: 'Piacere: mangiate e godetevi.',
  },
  dishes: {
    label: 'Piatti Signature',
    title: 'I Sapori dell\u2019Emilia',
    sub: 'Una selezione preparata con cura, partendo dal ricettario del nostro territorio.',
    items: [
      {
        dish: {
          name: 'Tortelli d\u2019Erbetta',
          desc: 'Pasta fresca ripiena di spinaci e ricotta, condita solo con burro fuso e Parmigiano Reggiano.',
          category: 'Primo Piatti',
        } as Dish,
        image: img('photo-1414235077428-338989a2e8c0', 900),
      },
      {
        dish: {
          name: 'Anolini in Brodo',
          desc: 'Pasta ripiena servita in un brodo di manzo dorato: il grande classico delle case di Parma.',
          category: 'Primo Piatti',
        } as Dish,
        image: img('photo-1504674900247-0877df9cc836', 900),
      },
      {
        dish: {
          name: 'Stracotto al Vino Rosso',
          desc: 'Manzo brasato per ore nel vino rosso finch\u00e9 si scioglie, servito con il suo fondo.',
          category: 'Secondi',
        } as Dish,
        image: img('photo-1600891964092-4316c288032e', 900),
      },
      {
        dish: {
          name: 'Zuppa Inglese',
          desc: 'Il dolce al cucchiaio dell\u2019Emilia: pan di Spagna, crema e un velo generoso di liquore.',
          category: 'Dolci',
        } as Dish,
        image: img('photo-1550966871-3ed3cdb5ed0c', 900),
      },
    ] as { dish: Dish; image: string }[],
    cta: 'Esplora il Menu',
  },
  experience: {
    label: 'L\u2019Esperienza',
    title: 'Pi\u00f9 di un Pasto',
    sub: 'Vieni per i sapori. Resta per l\u2019atmosfera.',
    p1: 'Con la sera, Hostariola diventa qualcosa di pi\u00f9 di una cucina. Si accendono le candele, si apre il vino e la tavola comincia a riunire le persone \u2014 vecchi amici, nuovi vicini, famiglie di passaggio nella pianura del Po. Una cena qui \u00e8 lenta per scelta: le portate arrivano una a una e niente ha fretta.',
    p2: 'Crediamo che l\u2019ospitalit\u00e0 non sia un servizio ma un istinto. Non siete ospiti per un\u2019ora: per la serata siete parte della casa.',
    cta: 'Prenota la tua serata',
  },
  gallery: {
    label: 'Galleria',
    title: 'Momenti a Tavola',
    sub: 'La sala, la luce, il cibo e le persone che rendono speciale una serata da Hostariola.',
    captions: ['La pasta fatta in casa', 'I vini dell\u2019Emilia', 'La tavola \u00e8 pronta', 'Portate da condividere', 'Dalla cucina alla tavola', 'La luce della sera'],
  },
  menu: {
    label: 'Il Menu',
    title: 'Dalla Cucina, Con la Stagione',
    sub: 'Un menu illustrativo per questa presentazione. Piatti e prezzi sono segnaposto e seguiranno la stagione.',
    sections: [
      {
        title: 'Antipasti',
        items: [
          { name: 'Affettati della Casa', desc: 'Salumi del territorio con crescentine e un tocco di mostarda.', price: '€ XX' },
          { name: 'Carpaccio di Manzo', desc: 'Fettine di manzo, limone, parmigiano giovane e rucola.', price: '€ XX' },
          { name: 'Parmigiana di Melanzane', desc: 'Melanzane al forno, pomodoro e fior di latte.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Primi',
        items: [
          { name: 'Tortelli d\u2019Erbetta', desc: 'Burro e salvia, Parmigiano Reggiano.', price: '€ XX' },
          { name: 'Anolini in Brodo', desc: 'Pasta ripiena in un brodo di manzo lungo.', price: '€ XX' },
          { name: 'Tagliatelle al Rag\u00f9', desc: 'Il rag\u00f9 d\u2019Emilia su tagliatelle fresche.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Secondi',
        items: [
          { name: 'Stracotto al Vino Rosso', desc: 'Brasato di manzo al vino rosso, polenta morbida.', price: '€ XX' },
          { name: 'Pollo al Mattone', desc: 'Pollo al mattone, rosmarino e limone.', price: '€ XX' },
          { name: 'Fritto Misto del Po', desc: 'Pesce di fiume croccante, verdure alla griglia.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Dolci',
        items: [
          { name: 'Zuppa Inglese', desc: 'Il dolce dell\u2019Emilia, stratificato e generoso.', price: '€ XX' },
          { name: 'Torta di Mele', desc: 'Torta di mele calda con crema fresca.', price: '€ XX' },
          { name: 'Gelato Artigianale', desc: 'Tre gusti di stagione, fatti in casa.', price: '€ XX' },
        ] as MenuItem[],
      },
      {
        title: 'Vini',
        items: [
          { name: 'Lambrusco', desc: 'Il vino dell\u2019Emilia: rosso vivo, leggero, frizzante.', price: '€ XX' },
          { name: 'Malvasia di Candia', desc: 'Bianco secco della provincia di Parma, agrumato ed erbaceo.', price: '€ XX' },
          { name: 'Gutturnio DOC', desc: 'Un rosso strutturato dei colli piacentini.', price: '€ XX' },
        ] as MenuItem[],
      },
    ] as { title: string; items: MenuItem[] }[],
    note: 'Menu dimostrativo \u2014 prezzi e piatti possono variare.',
    cta: 'Visualizza il Menu Completo',
  },
  reserve: {
    label: 'Prenotazioni',
    title: 'Il Tuo Tavolo Ti Aspetta',
    sub: 'Unisciti a noi per un autentico assaggio dell\u2019Emilia e una calorosa esperienza italiana.',
    form: {
      name: 'Nome',
      namePh: 'Il tuo nome',
      email: 'Email',
      emailPh: 'nome@esempio.it',
      date: 'Data',
      time: 'Ora',
      guests: 'Ospiti',
      guestOne: '1 ospite',
      guestMany: (n: number) => `${n} ospiti`,
      submit: 'Prenota un Tavolo',
      success: 'Grazie! La tua richiesta \u00e8 stata ricevuta. Ti confermeremo a breve.',
      demo: 'Modulo dimostrativo \u2014 dati segnaposto.',
    },
    ctaCall: 'Chiama il Ristorante',
  },
  location: {
    label: 'Dove Siamo',
    title: 'Colorno, sull\u2019Orlo della Bassa',
    sub: 'Nel centro storico di Colorno, a due passi dalla Reggia.',
    addressLabel: 'Indirizzo',
    address: 'Via \u2014\u2014\u2014\u2014\u2014, Colorno (PR)',
    hoursLabel: 'Orari',
    hours: [
      ['Marted\u00ec \u2013 Domenica', '12:30 \u2013 14:30 · 19:30 \u2013 22:30'],
      ['Luned\u00ec', 'Chiuso'],
    ],
    contactLabel: 'Contatti',
    phone: '+39 000 000 0000',
    email: 'hello@hostariola.it',
    mapCta: 'Apri in Google Maps',
    reserveCta: 'Prenota un Tavolo',
    placeholder: 'I dati di contatto sono segnaposto per la presentazione.',
  },
  footer: {
    tagline: 'Cucina Tradizionale Italiana',
    place: 'Colorno · Parma · Emilia-Romagna',
    cuisine: 'Pasta fatta a mano · Salumi locali · Vini dell\u2019Emilia',
    legal: ['Privacy Policy', 'Cookie Policy'],
    credits: 'Sito dimostrativo \u2014 a scopo di presentazione.',
  },
} satisfies Dict;
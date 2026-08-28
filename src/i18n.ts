export const images = {
  hero: "hero.webp",
  storyMain: "story-main.webp",
  storySecondary: "story-detail.webp",
  dishAperitivo: "dish-antipasto.webp",
  dishPrimo: "dish-primo.jpg",
  dishSecondo: "dish-secondo.jpg",
  dishDolce: "dish-dolce.jpg",
  experienceMain: "exp-main.webp",
  experienceSecondary: "exp-detail.webp",
};

export const galleryImages = [
  "gal-1.webp",
  "gal-2.webp",
  "gal-3.jpg",
  "gal-4.webp",
  "gal-5.webp",
  "gal-6.jpg",
];

export const img = (id: string) => `/images/${id}`;

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
  lang: "en",
  brand: "Hostariola",
  brandLine: "Ristorante · Colorno",
  nav: {
    home: "Home",
    story: "Our Story",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    book: "Book a Table",
  },
  hero: {
    kicker: "Ristorante Italiano",
    titlePart1: "A Taste of Emilia,",
    titlePart2: "at the Heart of Colorno.",
    sub: "Traditional flavors, local ingredients and the warmth of Italian hospitality.",
    ctaPrimary: "Discover Our Menu",
    ctaSecondary: "Book a Table",
    location: "Colorno · Parma · Emilia-Romagna",
    scroll: "Scroll",
  },
  story: {
    label: "Our Story",
    title: "Where tradition meets the pleasure of being together.",
    p1: "Hostariola sits quietly in Colorno, on the edge of the Emilian countryside of Parma, where the land arrives at the table still warm from the day.",
    p2: "A place to discover the flavors of Emilia-Romagna, enjoy good food, and share time around the table.",
    quote: "Piacere, slow down and enjoy.",
  },
  ingredients: {
    claim: "Seasonal ingredients, traditional flavors, and the spirit of Emilia-Romagna.",
    tags: ["Seasonal", "Traditional", "Local"],
  },
  dishes: {
    label: "Signature Dishes",
    title: "The Flavors of Emilia",
    sub: "A selection we prepare with care — starting from the recipe book of our territory.",
    items: [
      {
        dish: {
          name: "Tagliolini ai Funghi Porcini",
          desc: "Fresh tagliolini with porcini mushrooms and a touch of parsley — a taste of the autumn woods in a single plate.",
          category: "Primi",
        } as Dish,
        image: img(images.dishPrimo),
      },
      {
        dish: {
          name: "Prosciutto e Salumi del Territorio",
          desc: "Aged local cured meats served with warm gnocco fritto — the classic Emilian beginning.",
          category: "Antipasti",
        } as Dish,
        image: img(images.dishAperitivo),
      },
      {
        dish: {
          name: "Carne alla Brace",
          desc: "Grilled over the embers and finished simply — meat at its most honest, served with the season.",
          category: "Secondi",
        } as Dish,
        image: img(images.dishSecondo),
      },
      {
        dish: {
          name: "Sbrisolona con Zabaione",
          desc: "The crumbly almond cake of the Emilia borderlands, served warm with a spoon of zabaione.",
          category: "Dolci",
        } as Dish,
        image: img(images.dishDolce),
      },
    ] as { dish: Dish; image: string }[],
    cta: "Explore the Menu",
  },
  experience: {
    label: "The Experience",
    title: "More Than a Meal",
    sub: "Come for the flavors. Stay for the atmosphere.",
    p1: "By the evening, Hostariola becomes something more than a kitchen. Candles are lit, the wine is opened, and the table begins to gather people — old friends, new neighbors, families passing through the Po valley. A dinner here is slow by design: courses arrive one by one, and nothing is rushed.",
    p2: "We believe hospitality is not a service but an instinct. You are not a guest for an hour; you are, for the evening, part of the house.",
    cta: "Reserve your evening",
  },
  gallery: {
    label: "Gallery",
    title: "Moments at the Table",
    sub: "The room, the light, the food and the people who make an evening at Hostariola.",
    captions: [
      "Spaghetti alla Carbonara",
      "Ravioli della Casa",
      "Bistecca alla Fiorentina",
      "Carpaccio di Manzo",
      "Panna Cotta di stagione",
      "Trippa alla Parmigiana",
    ],
  },
  menu: {
    label: "The Menu",
    title: "From the Kitchen, with the Season",
    sub: "A sample selection for this concept. Final dishes and prices can be updated by Hostariola.",
    sections: [
      {
        title: "Antipasti",
        items: [
          {
            name: "Prosciutto e Salumi",
            desc: "Aged local cured meats with warm gnocco fritto and mostarda.",
            price: "€ XX",
          },
          {
            name: "Carpaccio di Manzo",
            desc: "Thinly sliced beef, lemon, young parmesan and rocket.",
            price: "€ XX",
          },
          {
            name: "Gnocco Fritto",
            desc: "Fried Emilian dough, served warm to share.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Primi",
        items: [
          {
            name: "Tagliolini ai Funghi Porcini",
            desc: "Fresh tagliolini with porcini, a touch of parsley.",
            price: "€ XX",
          },
          {
            name: "Carbonara",
            desc: "Spaghetti with egg, guanciale, pecorino and pepper.",
            price: "€ XX",
          },
          {
            name: "Spaghetti All\u2019Alberto",
            desc: "The house recipe, from our kitchen\u2019s notebook.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Secondi",
        items: [
          {
            name: "Bistecca Fiorentina",
            desc: "Grilled over the embers, seasoned simply.",
            price: "€ XX",
          },
          {
            name: "Carne alla Brace",
            desc: "Grigliata \u2014 the way Emilia grills: slow, over the fire.",
            price: "€ XX",
          },
          {
            name: "Trippa alla Parmigiana",
            desc: "Tripe slow-cooked with Parmigiano, potatoes and herbs.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Dolci",
        items: [
          {
            name: "Sbrisolona con Zabaione",
            desc: "The crumbly almond cake, served warm with zabaione.",
            price: "€ XX",
          },
          {
            name: "Panna Cotta",
            desc: "Cream set simply, with fruit of the season.",
            price: "€ XX",
          },
          {
            name: "Dolce della Casa",
            desc: "The dessert of the day, from our kitchen.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Vini",
        items: [
          {
            name: "Lambrusco",
            desc: "The wine of Emilia — lively, red, lightly sparkling.",
            price: "€ XX",
          },
          {
            name: "Malvasia di Candia",
            desc: "A dry white of the Parma province, citrus and herbal.",
            price: "€ XX",
          },
          {
            name: "Gutturnio DOC",
            desc: "A structured red from the neighboring hills of Piacenza.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
    ] as { title: string; items: MenuItem[] }[],
    note: "A sample selection for this concept. Final dishes and prices can be updated by Hostariola.",
    cta: "View Full Menu",
  },
  reserve: {
    label: "Reservations",
    title: "Request a Table",
    sub: "Join us for an authentic taste of Emilia and a warm Italian dining experience.",
    form: {
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@example.com",
      date: "Date",
      time: "Time",
      guests: "Guests",
      guestOne: "1 guest",
      guestMany: (n: number) => `${n} guests`,
      submit: "Book a Table",
      success:
        "Grazie! Your request has been received. We will confirm shortly.",
      demo: "Reservation integration can be connected to your preferred booking system.",
    },
    ctaCall: "Call the Restaurant",
  },
  location: {
    label: "Find Us",
    title: "Colorno, on the Edge of the Po Valley",
    sub: "In the streets of the old center of Colorno, a short walk from the Ducal Palace.",
    addressLabel: "Address",
    address: "Strada Provinciale per Torrile, 50 — Colorno (PR)",
    hoursLabel: "Opening Hours",
    hours: [
      ["Tuesday – Sunday", "12:30 – 14:30 · 19:30 – 22:30"],
      ["Monday", "Closed"],
    ],
    contactLabel: "Contact",
    phone: "+39 0521 815541",
    whatsapp: "+393318045883",
    whatsappCta: "WhatsApp",
    email: "hostariola@libero.it",
    mapsCta: "Open in Google Maps",
    reserveCta: "Book a Table",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Strada+Provinciale+per+Torrile+50,+Colorno,+Parma,+Italy",
  },
  footer: {
    tagline: "Traditional Italian Cuisine",
    place: "Colorno · Parma · Emilia-Romagna",
    cuisine: "Handmade pasta · Local cured meats · Wines of Emilia",
    legal: ["Privacy Policy", "Cookie Policy"],
    credits: "Presentation website — for demonstration purposes.",
  },
} as const;

export const it: Dict = {
  lang: "it",
  brand: "Hostariola",
  brandLine: "Ristorante · Colorno",
  nav: {
    home: "Home",
    story: "La Nostra Storia",
    menu: "Menu",
    gallery: "Galleria",
    contact: "Contatti",
    book: "Prenota un Tavolo",
  },
  hero: {
    kicker: "Ristorante Italiano",
    titlePart1: "Un Gusto d\u2019Emilia,",
    titlePart2: "nel Cuore di Colorno.",
    sub: "Sapori tradizionali, ingredienti del territorio e il calore dell\u2019ospitalit\u00e0 italiana.",
    ctaPrimary: "Scopri il Menu",
    ctaSecondary: "Prenota un Tavolo",
    location: "Colorno · Parma · Emilia-Romagna",
    scroll: "Scorri",
  },
  story: {
    label: "La Nostra Storia",
    title: "Dove la tradizione incontra il piacere di stare insieme.",
    p1: "Hostariola sorge tranquilla a Colorno, sulle falde della campagna parmigiana, dove la terra arriva a tavola ancora tiepida della giornata.",
    p2: "Un posto per scoprire i sapori dell\u2019Emilia-Romagna, gustare cibo buono e condividere tempo attorno al tavolo.",
    quote: "Piacere: mangiate e godetevi.",
  },
  ingredients: {
    claim: "Ingredienti di stagione, sapori tradizionali e lo spirito dell\u2019Emilia-Romagna.",
    tags: ["Stagionali", "Tradizionali", "Locali"],
  },
  dishes: {
    label: "Piatti Signature",
    title: "I Sapori dell\u2019Emilia",
    sub: "Una selezione preparata con cura, partendo dal ricettario del nostro territorio.",
    items: [
      {
        dish: {
          name: "Tagliolini ai Funghi Porcini",
          desc: "Tagliolini freschi ai funghi porcini con un tocco di prezzemolo: il bosco d\u2019autunno in un piatto.",
          category: "Primi",
        } as Dish,
        image: img(images.dishPrimo),
      },
      {
        dish: {
          name: "Prosciutto e Salumi del Territorio",
          desc: "Salumi locali stagionati con gnocco fritto caldo: il classico inizio emiliano.",
          category: "Antipasti",
        } as Dish,
        image: img(images.dishAperitivo),
      },
      {
        dish: {
          name: "Carne alla Brace",
          desc: "Cottura sulla brace e finitura semplice: la carne nella sua forma pi\u00f9 onesta, con la stagione.",
          category: "Secondi",
        } as Dish,
        image: img(images.dishSecondo),
      },
      {
        dish: {
          name: "Sbrisolona con Zabaione",
          desc: "La torta sbriciolata delle terre dell\u2019Emilia, servita calda con un cucchiaio di zabaione.",
          category: "Dolci",
        } as Dish,
        image: img(images.dishDolce),
      },
    ] as { dish: Dish; image: string }[],
    cta: "Esplora il Menu",
  },
  experience: {
    label: "L\u2019Esperienza",
    title: "Pi\u00f9 di un Pasto",
    sub: "Vieni per i sapori. Resta per l\u2019atmosfera.",
    p1: "Con la sera, Hostariola diventa qualcosa di pi\u00f9 di una cucina. Si accendono le candele, si apre il vino e la tavola comincia a riunire le persone \u2014 vecchi amici, nuovi vicini, famiglie di passaggio nella pianura del Po. Una cena qui \u00e8 lenta per scelta: le portate arrivano una a una e niente ha fretta.",
    p2: "Crediamo che l\u2019ospitalit\u00e0 non sia un servizio ma un istinto. Non siete ospiti per un\u2019ora: per la serata siete parte della casa.",
    cta: "Prenota la tua serata",
  },
  gallery: {
    label: "Galleria",
    title: "Momenti a Tavola",
    sub: "La sala, la luce, il cibo e le persone che rendono speciale una serata da Hostariola.",
    captions: [
      "Spaghetti alla Carbonara",
      "I Ravioli della Casa",
      "Bistecca alla Fiorentina",
      "Carpaccio di Manzo",
      "La Panna Cotta di stagione",
      "Trippa alla Parmigiana",
    ],
  },
  menu: {
    label: "Il Menu",
    title: "Dalla Cucina, Con la Stagione",
    sub: "Un menu illustrativo per questa presentazione. Piatti e prezzi sono segnaposto e seguiranno la stagione.",
    sections: [
      {
        title: "Antipasti",
        items: [
          {
            name: "Prosciutto e Salumi",
            desc: "Salumi locali stagionati con gnocco fritto caldo e mostarda.",
            price: "€ XX",
          },
          {
            name: "Carpaccio di Manzo",
            desc: "Fettine di manzo, limone, parmigiano giovane e rucola.",
            price: "€ XX",
          },
          {
            name: "Gnocco Fritto",
            desc: "Impasto emiliano fritto, servito caldo da condividere.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Primi",
        items: [
          {
            name: "Tagliolini ai Funghi Porcini",
            desc: "Tagliolini freschi ai porcini, un tocco di prezzemolo.",
            price: "€ XX",
          },
          {
            name: "Carbonara",
            desc: "Spaghetti con uovo, guanciale, pecorino e pepe.",
            price: "€ XX",
          },
          {
            name: "Spaghetti All\u2019Alberto",
            desc: "La ricetta della casa, dal ricettario della nostra cucina.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Secondi",
        items: [
          {
            name: "Bistecca Fiorentina",
            desc: "Cotta sulla brace, condita semplicemente.",
            price: "€ XX",
          },
          {
            name: "Carne alla Brace",
            desc: "Come griglia l\u2019Emilia: lenta, sul fuoco vivo.",
            price: "€ XX",
          },
          {
            name: "Trippa alla Parmigiana",
            desc: "Trippa cotta lentamente con Parmigiano, patate ed erbe.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Dolci",
        items: [
          {
            name: "Sbrisolona con Zabaione",
            desc: "La torta sbriciolata, servita calda con zabaione.",
            price: "€ XX",
          },
          {
            name: "Panna Cotta",
            desc: "Crema delicata, con frutta di stagione.",
            price: "€ XX",
          },
          {
            name: "Dolce della Casa",
            desc: "Il dolce del giorno, dalla nostra cucina.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
      {
        title: "Vini",
        items: [
          {
            name: "Lambrusco",
            desc: "Il vino dell\u2019Emilia: rosso vivo, leggero, frizzante.",
            price: "€ XX",
          },
          {
            name: "Malvasia di Candia",
            desc: "Bianco secco della provincia di Parma, agrumato ed erbaceo.",
            price: "€ XX",
          },
          {
            name: "Gutturnio DOC",
            desc: "Un rosso strutturato dei colli piacentini.",
            price: "€ XX",
          },
        ] as MenuItem[],
      },
    ] as { title: string; items: MenuItem[] }[],
    note: "Una selezione campione per questo concept. I piatti e i prezzi finali possono essere aggiornati da Hostariola.",
    cta: "Visualizza il Menu Completo",
  },
  reserve: {
    label: "Prenotazioni",
    title: "Richiedi un Tavolo",
    sub: "Unisciti a noi per un autentico assaggio dell\u2019Emilia e una calorosa esperienza italiana.",
    form: {
      name: "Nome",
      namePh: "Il tuo nome",
      email: "Email",
      emailPh: "nome@esempio.it",
      date: "Data",
      time: "Ora",
      guests: "Ospiti",
      guestOne: "1 ospite",
      guestMany: (n: number) => `${n} ospiti`,
      submit: "Prenota un Tavolo",
      success:
        "Grazie! La tua richiesta \u00e8 stata ricevuta. Ti confermeremo a breve.",
      demo: "L\u2019integrazione per le prenotazioni può essere collegata al tuo sistema preferito.",
    },
    ctaCall: "Chiama il Ristorante",
  },
  location: {
    label: "Dove Siamo",
    title: "Colorno, sull\u2019Orlo della Bassa",
    sub: "Nel centro storico di Colorno, a due passi dalla Reggia.",
    addressLabel: "Indirizzo",
    address: "Strada Provinciale per Torrile, 50 — Colorno (PR)",
    hoursLabel: "Orari",
    hours: [
      [
        "Marted\u00ec \u2013 Domenica",
        "12:30 \u2013 14:30 · 19:30 \u2013 22:30",
      ],
      ["Luned\u00ec", "Chiuso"],
    ],
    contactLabel: "Contatti",
    phone: "+39 0521 815541",
    whatsapp: "+393318045883",
    whatsappCta: "WhatsApp",
    email: "hostariola@libero.it",
    mapsCta: "Apri in Google Maps",
    reserveCta: "Prenota un Tavolo",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Strada+Provinciale+per+Torrile+50,+Colorno,+Parma,+Italy",
  },
  footer: {
    tagline: "Cucina Tradizionale Italiana",
    place: "Colorno · Parma · Emilia-Romagna",
    cuisine: "Pasta fatta a mano · Salumi locali · Vini dell\u2019Emilia",
    legal: ["Privacy Policy", "Cookie Policy"],
    credits: "Sito dimostrativo \u2014 a scopo di presentazione.",
  },
} satisfies Dict;

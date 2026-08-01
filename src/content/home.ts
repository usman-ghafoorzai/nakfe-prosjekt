import type { HomePageContent } from "@/types/home";
import type { LocalizedContent } from "@/types/locale";

export const homeContent = {
  seo: {
    title: "Forside",
    description:
      "Kvinner for Endring er en ideell organisasjon som styrker kvinner gjennom utdanning, arbeid, entreprenørskap og fellesskap i Norge og Afghanistan.",
  },

  hero: {
    eyebrow: "Kvinner for Endring",
    title: "Styrker kvinner gjennom kunnskap, arbeid og fellesskap.",
    description:
      "En ideell organisasjon etablert i Norge i april 2021, med arbeid i Norge og Afghanistan.",
    rotatingWordsLabel: "Arbeidet vårt handler om",
    rotatingWords: ["Utdanning", "Arbeid", "Entreprenørskap", "Fellesskap"],
    backgroundImage: {
      src: "/images/hero/hero-background.jpg",
      alt: "",
      position: "center",
      isDecorative: true,
    },
  },

  impactBrief: {
    eyebrow: "Etablert i Norge i april 2021",
    title: "Lokalt forankret arbeid i Norge og Afghanistan.",
    description:
      "Kvinner for Endring tilpasser arbeidet til lokale forhold og har et tydelig fokus på verdighet, bærekraft og deltakelse.",
    primaryAction: {
      label: "Les om organisasjonen",
      href: "/om-oss",
      ariaLabel: "Les om Kvinner for Endring",
    },
    secondaryAction: {
      label: "Se nøkkelpunkter",
      ariaLabel: "Åpne dokumenterte nøkkelpunkter om organisasjonen",
    },
    highlights: [
      {
        value: "Norge",
        label: "Integrering og inkludering",
        description:
          "Arbeidet støtter kvinner med minoritetsbakgrunn i møtet med samfunnet og arbeidslivet.",
      },
      {
        value: "Afghanistan",
        label: "Utdanning og inntektsrettede ferdigheter",
        description:
          "Programmene gir kvinner og jenter tilgang til læring og ferdigheter under krevende forhold.",
      },
    ],
    statisticsDialog: {
      eyebrow: "Dokumentert arbeid",
      title: "Fra etablering til konkrete programmer.",
      description:
        "Nøkkelpunktene viser organisasjonens etablering, geografiske arbeid og den dokumenterte sømopplæringen i Kabul.",
      educationHeading: "Organisasjonen",
      citationsHeading: "Les mer",
      closeLabel: "Lukk nøkkelpunkter",
      percentageLabel: "prosent",
      statistics: [
        {
          value: "April 2021",
          label: "Etablert i Norge",
          description:
            "Kvinner for Endring ble etablert som en ideell organisasjon i Norge.",
        },
        {
          value: "To land",
          label: "Norge og Afghanistan",
          description:
            "Organisasjonen driver prosjekter i begge land og tilpasser arbeidet til lokale forhold.",
        },
        {
          value: "4–6 mnd.",
          label: "Sømopplæring",
          description:
            "Deltakerne i sømprogrammene gjennomfører et opplæringsløp på mellom fire og seks måneder.",
        },
        {
          value: "To sentre",
          label: "Opplæring i Kabul",
          description:
            "Sømopplæringen gjennomføres ved organisasjonens to opplæringssentre i Kabul.",
        },
      ],
      citations: [],
    },
  },

  intro: {
    header: {
      eyebrow: "Om organisasjonen",
      title: "Muligheter for langsiktig økonomisk selvstendighet og deltakelse.",
      description:
        "Kvinner for Endring arbeider gjennom utdanning, arbeid, entreprenørskap og fellesskap.",
    },
    body: [
      "I Norge arbeider organisasjonen med integrering og inkludering av kvinner med minoritetsbakgrunn i samfunnet og arbeidslivet.",
      "I Afghanistan driver organisasjonen utdannings- og inntektsrettede programmer for kvinner og jenter under krevende forhold.",
    ],
    image: {
      src: "/images/about/community.jpg",
      alt: "Kvinner samlet i et fellesskap",
      position: "center",
      caption:
        "Fellesskap og praktiske muligheter står sentralt i arbeidet.",
    },
    action: {
      label: "Les mer om Kvinner for Endring",
      href: "/om-oss",
    },
    visual: {
      tone: "warm",
      imagePlacement: "end",
    },
  },

  featuredAreas: {
    header: {
      eyebrow: "Arbeidet vårt",
      title: "Utdanning, arbeid, entreprenørskap og fellesskap.",
      description:
        "Arbeidet er tilpasset ulike behov i Norge og Afghanistan.",
    },
    variant: "editorial",
    items: [
      {
        eyebrow: "Norge",
        title: "Integrering og inkludering",
        description:
          "Programmer for jobbførhet, utdanning og kompetanse, entreprenørskap samt psykisk helse og livskvalitet.",
        meta: "Arbeid i Norge",
        image: {
          src: "/images/page-hero/fellesskap-kvinner.png",
          alt: "Illustrasjon av kvinner i fellesskap",
          position: "center",
        },
        action: {
          label: "Les om organisasjonen",
          href: "/om-oss",
        },
      },
      {
        eyebrow: "Afghanistan",
        title: "Utdanning og ferdigheter",
        description:
          "Utdannings- og inntektsrettede programmer med blant annet engelskkurs, entreprenørskap og sømopplæring.",
        meta: "Arbeid i Afghanistan",
        image: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Illustrasjon av kvinner samlet til opplæring",
          position: "center",
        },
        action: {
          label: "Se prosjektene",
          href: "/vart-arbeid",
        },
      },
      {
        eyebrow: "Prosjekter og programmer",
        title: "Vårt arbeid",
        description:
          "Les om de dokumenterte prosjektene i Norge, Kabul og Faryab.",
        meta: "Norge og Afghanistan",
        image: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Illustrasjon knyttet til Kvinner for Endring",
          position: "center",
        },
        action: {
          label: "Se vårt arbeid",
          href: "/vart-arbeid",
        },
      },
    ],
  },

  finalCta: {
    eyebrow: "Neste steg",
    title: "Vil du vite mer, støtte arbeidet eller utforske samarbeid?",
    description:
      "Ta kontakt med Kvinner for Endring for spørsmål om organisasjonen, støtte eller samarbeid.",
    primaryAction: {
      label: "Kontakt Kvinner for Endring",
      href: "/kontakt",
    },
    secondaryAction: {
      label: "Spørsmål og svar",
      href: "/faq",
    },
    fallbackText: "Kunnskap. Arbeid. Fellesskap.",
  },
} satisfies HomePageContent;

const englishHomeContent = {
  seo: {
    title: "Home",
    description:
      "Women for Change is a non-profit organisation that empowers women through education, employment, entrepreneurship and community in Norway and Afghanistan.",
  },

  hero: {
    eyebrow: "Women for Change",
    title: "Empowering women through knowledge, employment and community.",
    description:
      "A non-profit organisation established in Norway in April 2021, working in Norway and Afghanistan.",
    rotatingWordsLabel: "Our work is about",
    rotatingWords: ["Education", "Employment", "Entrepreneurship", "Community"],
    backgroundImage: {
      src: "/images/hero/hero-background.jpg",
      alt: "",
      position: "center",
      isDecorative: true,
    },
  },

  impactBrief: {
    eyebrow: "Established in Norway in April 2021",
    title: "Locally grounded work in Norway and Afghanistan.",
    description:
      "Women for Change adapts its work to local contexts with a strong focus on dignity, sustainability and participation.",
    primaryAction: {
      label: "About the organisation",
      href: "/om-oss",
      ariaLabel: "Learn about Women for Change",
    },
    secondaryAction: {
      label: "View key facts",
      ariaLabel: "Open documented key facts about the organisation",
    },
    highlights: [
      {
        value: "Norway",
        label: "Integration and inclusion",
        description:
          "The work supports women with minority backgrounds in society and the labour market.",
      },
      {
        value: "Afghanistan",
        label: "Education and livelihood skills",
        description:
          "The programmes give women and girls access to learning and skills under challenging conditions.",
      },
    ],
    statisticsDialog: {
      eyebrow: "Documented work",
      title: "From establishment to practical programmes.",
      description:
        "These key facts cover the organisation's establishment, geographic work and documented tailoring programmes in Kabul.",
      educationHeading: "The organisation",
      citationsHeading: "Read more",
      closeLabel: "Close key facts",
      percentageLabel: "percent",
      statistics: [
        {
          value: "April 2021",
          label: "Established in Norway",
          description:
            "Women for Change was established as a non-profit organisation in Norway.",
        },
        {
          value: "Two countries",
          label: "Norway and Afghanistan",
          description:
            "The organisation runs projects in both countries and adapts its work to local contexts.",
        },
        {
          value: "4–6 months",
          label: "Tailoring training",
          description:
            "Participants in the tailoring programmes complete a training period of between four and six months.",
        },
        {
          value: "Two centres",
          label: "Training in Kabul",
          description:
            "The tailoring training is delivered at the organisation's two training centres in Kabul.",
        },
      ],
      citations: [],
    },
  },

  intro: {
    header: {
      eyebrow: "About the organisation",
      title: "Opportunities for long-term financial independence and participation.",
      description:
        "Women for Change works through education, employment, entrepreneurship and community.",
    },
    body: [
      "In Norway, the organisation works to integrate and include women with minority backgrounds in society and the labour market.",
      "In Afghanistan, the organisation runs education and livelihood-focused programmes for women and girls under challenging conditions.",
    ],
    image: {
      src: "/images/about/community.jpg",
      alt: "Women gathered in a community",
      position: "center",
      caption:
        "Community and practical opportunities are central to the work.",
    },
    action: {
      label: "Learn more about Women for Change",
      href: "/om-oss",
    },
    visual: {
      tone: "warm",
      imagePlacement: "end",
    },
  },

  featuredAreas: {
    header: {
      eyebrow: "Our work",
      title: "Education, employment, entrepreneurship and community.",
      description:
        "The work is adapted to different needs in Norway and Afghanistan.",
    },
    variant: "editorial",
    items: [
      {
        eyebrow: "Norway",
        title: "Integration and inclusion",
        description:
          "Programmes for job readiness, education and skills, entrepreneurship, and mental health and well-being.",
        meta: "Work in Norway",
        image: {
          src: "/images/page-hero/fellesskap-kvinner.png",
          alt: "Illustration of women in a community",
          position: "center",
        },
        action: {
          label: "About the organisation",
          href: "/om-oss",
        },
      },
      {
        eyebrow: "Afghanistan",
        title: "Education and skills",
        description:
          "Education and livelihood-focused programmes including English courses, entrepreneurship and tailoring training.",
        meta: "Work in Afghanistan",
        image: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Illustration of women gathered for training",
          position: "center",
        },
        action: {
          label: "View the projects",
          href: "/vart-arbeid",
        },
      },
      {
        eyebrow: "Projects and programmes",
        title: "Our work",
        description:
          "Read about the documented projects in Norway, Kabul and Faryab.",
        meta: "Norway and Afghanistan",
        image: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Illustration related to Women for Change",
          position: "center",
        },
        action: {
          label: "View our work",
          href: "/vart-arbeid",
        },
      },
    ],
  },

  finalCta: {
    eyebrow: "Next step",
    title: "Would you like to learn more, support the work or explore collaboration?",
    description:
      "Contact Women for Change with questions about the organisation, support or collaboration.",
    primaryAction: {
      label: "Contact Women for Change",
      href: "/kontakt",
    },
    secondaryAction: {
      label: "Questions and answers",
      href: "/faq",
    },
    fallbackText: "Knowledge. Employment. Community.",
  },
} satisfies HomePageContent;

export const homeContentByLocale = {
  no: homeContent,
  en: englishHomeContent,
} satisfies LocalizedContent<HomePageContent>;

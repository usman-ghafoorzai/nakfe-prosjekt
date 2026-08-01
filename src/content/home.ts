import type { HomePageContent } from "@/types/home";

export const homeContent = {
  seo: {
    title: "Startsiden",
    description:
      "NAKFE er en frivillig organisasjon som arbeider for integrering, inkludering, likestilling og endring.",
  },

  hero: {
    eyebrow: "NAKFE · Kvinner for Endring",
    title: "Sammen skaper vi muligheter for kvinner som er fratatt sine.",
    description:
      "Et fellesskap for kunnskap, deltakelse og verdighet — bygget av kvinner, for kvinner og lokalsamfunnet rundt dem.",
    rotatingWords: ["Integrering", "Inkludering", "Likestilling", "Endring"],
    backgroundImage: {
      src: "/images/hero/hero-background.jpg",
      alt: "",
      position: "center",
      isDecorative: true,
    },
  },

  impactBrief: {
    eyebrow: "Hvorfor arbeidet haster",
    title: "Når jenter mister skolegangen, mister samfunnet framtiden sin.",
    description:
      "Situasjonen i Afghanistan viser hvorfor møteplasser, kunnskap og solidaritet betyr noe. NAKFE skal være et sted hvor engasjement kan bli til handling — også her i Norge.",
    primaryAction: {
      label: "Les FN-saken",
      href: "https://fn.no/nyheter/afghanistan-1-4-millioner-jenter-nektet-skolegang",
      ariaLabel: "Les FN-sambandets sak om jenter nektet skolegang i Afghanistan",
      isExternal: true,
    },
    secondaryAction: {
      label: "Se statistikken",
      ariaLabel: "Åpne statistikk om utdanning og arbeid for afghanske kvinner",
    },
    highlights: [
      {
        value: "1,4 mill.",
        label: "jenter nektet videregående opplæring",
        description:
          "FN-sambandet viser til UNESCO-tall om jenter som er fratatt skolegang etter Talibans maktovertakelse.",
      },
      {
        value: "78 %",
        label: "unge kvinner utenfor utdanning, arbeid og opplæring",
        description:
          "UN Women beskriver dette som nesten fire ganger høyere enn for unge afghanske menn.",
      },
    ],
    statisticsDialog: {
      title: "Når tilgang til skole og arbeid forsvinner, forsvinner også valgmuligheter.",
      description:
          "Dette er ikke bare store tall. Det handler om jenter og unge kvinner som mister skolegang, arbeidserfaring, inntekt, nettverk og muligheten til å påvirke sin egen framtid.",
      statistics: [
        {
          value: "78 %",
          label: "unge kvinner",
          description:
              "Andel unge afghanske kvinner som står utenfor utdanning, arbeid og opplæring.",
          barLabel: "Utenfor utdanning, arbeid og opplæring",
          barValue: 78,
        },
        {
          value: "≈20 %",
          label: "unge menn",
          description:
              "Nivået for unge menn er langt lavere. UN Women beskriver kvinners andel som nesten fire ganger høyere.",
          barLabel: "Sammenlignbart nivå for unge menn",
          barValue: 20,
        },
        {
          value: "1,4 mill.",
          label: "jenter nektet videregående skole",
          description:
              "Minst 1,4 millioner jenter er nektet tilgang til videregående opplæring siden Talibans maktovertakelse.",
        },
        {
          value: "2,5 mill.",
          label: "jenter fratatt utdanning",
          description:
              "Nesten 2,5 millioner jenter er fratatt retten til utdanning. FN-sambandet beskriver dette som 80 prosent av afghanske jenter i skolealder.",
          barLabel: "Jenter i skolealder uten rett til utdanning",
          barValue: 80,
        },
        {
          value: "24 %",
          label: "kvinner i arbeidsstyrken",
          description:
              "UN Women peker på et av verdens største kjønnsgap i arbeidsdeltakelse.",
          barLabel: "Kvinner i arbeidsstyrken",
          barValue: 24,
        },
        {
          value: "89 %",
          label: "menn i arbeidsstyrken",
          description:
              "Tilsvarende andel for menn i arbeidsstyrken i UN Womens gjennomgang.",
          barLabel: "Menn i arbeidsstyrken",
          barValue: 89,
        },
      ],
      citations: [
        {
          label: "FN-sambandet",
          text: "FN-sambandet: Afghanistan: 1,4 millioner jenter nektet skolegang",
          href: "https://fn.no/nyheter/afghanistan-1-4-millioner-jenter-nektet-skolegang",
        },
        {
          label: "UN Women",
          text: "UN Women: Afghanistan Gender Index 2024",
          href: "https://www.unwomen.org/en/digital-library/publications/2025/06/afghanistan-gender-index-2024",
        },
        {
          label: "UN Women Australia",
          text: "UN Women: Nearly eight out of 10 young Afghan women are excluded from education, jobs and training",
          href: "https://unwomen.org.au/nearly-eight-out-of-10-young-afghan-women-are-excluded-from-education-jobs-and-training/",
        },
      ],
    },
  },

  intro: {
    header: {
      eyebrow: "Hva vi bygger",
      title: "Et fellesskap med plass til både kulturarv og nye muligheter.",
      description:
        "NAKFE skal være et tydelig og varmt sted for kvinner, familier og frivillige som vil bidra til deltakelse, mestring og fellesskap.",
    },
    body: [
      "Arbeidet handler ikke bare om arrangementer. Det handler om å skape rom hvor mennesker kan møtes, dele erfaringer, lære av hverandre og finne veier videre.",
      "Nettsiden er bygget med et redigerbart content-lag. Det betyr at artikler, nyheter, aktiviteter, bilder og tekster senere kan flyttes til Supabase, CMS eller et admin-panel uten at komponentene må skrives om.",
    ],
    image: {
      src: "/images/about/community.jpg",
      alt: "Kvinner samlet i et varmt fellesskap",
      position: "center",
      caption: "Fellesskap, kunnskap og deltakelse skal være lett å finne — både digitalt og fysisk.",
    },
    action: {
      label: "Les mer om NAKFE",
      href: "/om-oss",
    },
    visual: {
      tone: "warm",
      imagePlacement: "end",
    },
  },

  featuredAreas: {
    header: {
      eyebrow: "Innhold som kan vokse",
      title: "Et nettsted organisasjonen kan eie selv.",
      description:
        "Seksjonene under er strukturert som redigerbart innhold. Senere kan søstera di publisere nyheter, prosjekter og aktiviteter uten å kode.",
    },
    variant: "editorial",
    items: [
      {
        eyebrow: "Organisasjonen",
        title: "Om NAKFE",
        description:
          "Kort inngang til organisasjonens bakgrunn, verdier og arbeid for kvinner og fellesskap.",
        meta: "Fast side",
        image: {
          src: "/images/page-hero/fellesskap-kvinner.png",
          alt: "Illustrasjon av kvinner i fellesskap",
          position: "center",
        },
        action: {
          label: "Les mer",
          href: "/om-oss",
        },
      },
      {
        eyebrow: "Møteplasser",
        title: "Aktiviteter",
        description:
          "Et sted for arrangementer, kurs, møteplasser og frivillig arbeid som kan publiseres fortløpende.",
        meta: "Publiserbart",
        image: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Illustrasjon av kvinner samlet til arrangement",
          position: "center",
        },
        action: {
          label: "Se aktiviteter",
          href: "/aktiviteter",
        },
      },
      {
        eyebrow: "Historier",
        title: "Vårt arbeid",
        description:
          "Prosjekter og programmer fra NAKFEs arbeid i Afghanistan og Norge.",
        meta: "Prosjekter",
        image: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Illustrasjon knyttet til kvinner for endring",
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
    title: "Vil du vite mer eller bidra?",
    description:
      "Ta kontakt med NAKFE dersom du har spørsmål, ønsker samarbeid eller vil bidra som frivillig.",
    primaryAction: {
      label: "Kontakt NAKFE",
      href: "/kontakt",
    },
    secondaryAction: {
      label: "Spørsmål og svar",
      href: "/faq",
    },
  },
} satisfies HomePageContent;

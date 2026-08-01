import type { HomePageContent } from "@/types/home";
import type { LocalizedContent } from "@/types/locale";

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
    rotatingWordsLabel: "Arbeidet vårt handler om",
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
      eyebrow: "Tallene bak arbeidet",
      title: "Når tilgang til skole og arbeid forsvinner, forsvinner også valgmuligheter.",
      description:
          "Dette er ikke bare store tall. Det handler om jenter og unge kvinner som mister skolegang, arbeidserfaring, inntekt, nettverk og muligheten til å påvirke sin egen framtid.",
      educationHeading: "Utdanning, arbeid og opplæring",
      citationsHeading: "Tallgrunnlag",
      closeLabel: "Lukk statistikk",
      percentageLabel: "prosent",
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
    eyebrow: "Neste steg",
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
    fallbackText: "Kunnskap. Fellesskap. Handling.",
  },
} satisfies HomePageContent;

const englishHomeContent = {
  seo: {
    title: "Home",
    description:
      "NAKFE is a voluntary organisation working for integration, inclusion, equality and change.",
  },

  hero: {
    eyebrow: "NAKFE · Kvinner for Endring",
    title: "Together, we create opportunities for women who have been denied theirs.",
    description:
      "A community for knowledge, participation and dignity — built by women, for women and the communities around them.",
    rotatingWordsLabel: "Our work is about",
    rotatingWords: ["Integration", "Inclusion", "Equality", "Change"],
    backgroundImage: {
      src: "/images/hero/hero-background.jpg",
      alt: "",
      position: "center",
      isDecorative: true,
    },
  },

  impactBrief: {
    eyebrow: "Why this work is urgent",
    title: "When girls lose access to education, society loses its future.",
    description:
      "The situation in Afghanistan shows why meeting places, knowledge and solidarity matter. NAKFE aims to be a place where commitment can turn into action — here in Norway as well.",
    primaryAction: {
      label: "Read the UN article",
      href: "https://fn.no/nyheter/afghanistan-1-4-millioner-jenter-nektet-skolegang",
      ariaLabel: "Read the UN Association of Norway article about girls denied schooling in Afghanistan",
      isExternal: true,
    },
    secondaryAction: {
      label: "View the statistics",
      ariaLabel: "Open statistics about education and employment for Afghan women",
    },
    highlights: [
      {
        value: "1.4 million",
        label: "girls denied secondary education",
        description:
          "The UN Association of Norway cites UNESCO figures on girls deprived of schooling since the Taliban takeover.",
      },
      {
        value: "78%",
        label: "young women outside education, employment and training",
        description:
          "UN Women describes this as almost four times the rate for young Afghan men.",
      },
    ],
    statisticsDialog: {
      eyebrow: "The figures behind the work",
      title: "When access to education and employment disappears, choices disappear too.",
      description:
        "These are not just large figures. They represent girls and young women losing education, work experience, income, networks and the opportunity to shape their own future.",
      educationHeading: "Education, employment and training",
      citationsHeading: "Sources",
      closeLabel: "Close statistics",
      percentageLabel: "percent",
      statistics: [
        {
          value: "78%",
          label: "young women",
          description:
            "The share of young Afghan women outside education, employment and training.",
          barLabel: "Outside education, employment and training",
          barValue: 78,
        },
        {
          value: "≈20%",
          label: "young men",
          description:
            "The rate for young men is far lower. UN Women describes the share for women as almost four times higher.",
          barLabel: "Comparable rate for young men",
          barValue: 20,
        },
        {
          value: "1.4 million",
          label: "girls denied secondary school",
          description:
            "At least 1.4 million girls have been denied access to secondary education since the Taliban takeover.",
        },
        {
          value: "2.5 million",
          label: "girls deprived of education",
          description:
            "Nearly 2.5 million girls have been deprived of the right to education. The UN Association of Norway describes this as 80 percent of school-age Afghan girls.",
          barLabel: "School-age girls without the right to education",
          barValue: 80,
        },
        {
          value: "24%",
          label: "women in the workforce",
          description:
            "UN Women points to one of the world's largest gender gaps in workforce participation.",
          barLabel: "Women in the workforce",
          barValue: 24,
        },
        {
          value: "89%",
          label: "men in the workforce",
          description:
            "The corresponding share for men in the workforce in UN Women's review.",
          barLabel: "Men in the workforce",
          barValue: 89,
        },
      ],
      citations: [
        {
          label: "UN Association of Norway",
          text: "UN Association of Norway: Afghanistan: 1.4 million girls denied schooling",
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
      eyebrow: "What we are building",
      title: "A community with room for both cultural heritage and new opportunities.",
      description:
        "NAKFE aims to be a clear and welcoming place for women, families and volunteers who want to contribute to participation, achievement and community.",
    },
    body: [
      "The work is not only about events. It is about creating spaces where people can meet, share experiences, learn from one another and find ways forward.",
      "The website is built with an editable content layer. This means that articles, news, activities, images and text can later be moved to Supabase, a CMS or an admin panel without rewriting the components.",
    ],
    image: {
      src: "/images/about/community.jpg",
      alt: "Women gathered in a welcoming community",
      position: "center",
      caption: "Community, knowledge and participation should be easy to find — both digitally and in person.",
    },
    action: {
      label: "Learn more about NAKFE",
      href: "/om-oss",
    },
    visual: {
      tone: "warm",
      imagePlacement: "end",
    },
  },

  featuredAreas: {
    header: {
      eyebrow: "Content that can grow",
      title: "A website the organisation can manage itself.",
      description:
        "The sections below are structured as editable content. Later, your sister can publish news, projects and activities without writing code.",
    },
    variant: "editorial",
    items: [
      {
        eyebrow: "The organisation",
        title: "About NAKFE",
        description:
          "A brief introduction to the organisation's background, values and work for women and communities.",
        meta: "Permanent page",
        image: {
          src: "/images/page-hero/fellesskap-kvinner.png",
          alt: "Illustration of women in a community",
          position: "center",
        },
        action: {
          label: "Learn more",
          href: "/om-oss",
        },
      },
      {
        eyebrow: "Meeting places",
        title: "Activities",
        description:
          "A place for events, courses, meeting places and volunteer work that can be published continuously.",
        meta: "Publishable",
        image: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Illustration of women gathered at an event",
          position: "center",
        },
        action: {
          label: "View activities",
          href: "/aktiviteter",
        },
      },
      {
        eyebrow: "Stories",
        title: "Our work",
        description:
          "Projects and programmes from NAKFE's work in Afghanistan and Norway.",
        meta: "Projects",
        image: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Illustration related to Kvinner for Endring",
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
    title: "Would you like to learn more or contribute?",
    description:
      "Contact NAKFE if you have questions, would like to collaborate or want to volunteer.",
    primaryAction: {
      label: "Contact NAKFE",
      href: "/kontakt",
    },
    secondaryAction: {
      label: "Questions and answers",
      href: "/faq",
    },
    fallbackText: "Knowledge. Community. Action.",
  },
} satisfies HomePageContent;

export const homeContentByLocale = {
  no: homeContent,
  en: englishHomeContent,
} satisfies LocalizedContent<HomePageContent>;

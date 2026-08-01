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
      src: "/images/report-2026/norway-fundraising-presentation.jpeg",
      alt: "Presentasjon under et innsamlingsarrangement i Norge for prosjektene i Kabul",
      position: "center",
      caption:
        "Et innsamlingsarrangement i Norge bidrar til å finansiere organisasjonens prosjekter i Kabul.",
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
          src: "/images/social-2026/norway-roundtable-event.png",
          alt: "Deltakere samlet rundt et bord under et møte eller arrangement i Norge",
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
          src: "/images/social-2026/digital-classes-projection.png",
          alt: "Undervisningssituasjon brukt i forbindelse med organisasjonens digitale undervisningsinitiativ for jenter i Kabul og Faryab",
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
          src: "/images/report-2026/kabul-training-centre-practical-work.jpeg",
          alt: "Deltakere samlet til praktisk arbeid ved et av organisasjonens sentre i Kabul",
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
      src: "/images/report-2026/norway-fundraising-presentation.jpeg",
      alt: "Presentation at a fundraising event in Norway for the projects in Kabul",
      position: "center",
      caption:
        "A fundraising event in Norway helps finance the organisation's projects in Kabul.",
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
          src: "/images/social-2026/norway-roundtable-event.png",
          alt: "Participants gathered around a table during a meeting or event in Norway",
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
          src: "/images/social-2026/digital-classes-projection.png",
          alt: "A teaching scene shared in connection with the organisation's digital education initiative for girls in Kabul and Faryab",
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
          src: "/images/report-2026/kabul-training-centre-practical-work.jpeg",
          alt: "Participants gathered for practical work at one of the organisation's centres in Kabul",
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

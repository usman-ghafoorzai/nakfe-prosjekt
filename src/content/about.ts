import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import type { AboutPageContent } from "@/types/about";
import type { LocalizedContent } from "@/types/locale";

const sharedPurposeImage = {
  src: "/images/about/community.jpg",
  alt: "Kvinner samlet i et fellesskap knyttet til NAKFE",
  position: "center",
} as const;

const valueMedia = {
  integration: {
    type: "video",
    src: "/videos/values/integrering.mp4",
    poster: "/images/page-hero/kvinner-fellesskap.png",
    alt: "Kvinner samlet i et fellesskap",
    position: "center",
  },
  inclusion: {
    type: "video",
    src: "/videos/values/inkludering.mp4",
    poster: "/images/page-hero/arrangementer.png",
    alt: "Deltakere i en aktivitet og samtale",
    position: "center",
  },
  equality: {
    type: "video",
    src: "/videos/values/likestilling.mp4",
    poster: "/images/page-hero/afghansk-kulturarv.png",
    alt: "Kvinner som markerer gjennomført opplæring",
    position: "center",
  },
  change: {
    type: "video",
    src: "/videos/values/endring.mp4",
    poster: "/images/page-hero/kvinner-for-endring.png",
    alt: "Kvinner samlet på et arrangement med NAKFE",
    position: "center",
  },
} as const;

export const aboutContent = {
  seo: {
    title: "Om oss",
    description:
      "Les mer om NAKFE, organisasjonens formål, arbeid og fellesskap.",
  },

  hero: {
    eyebrow: "Om oss",
    title: "Et fellesskap for kvinner, kulturarv og endring.",
    description:
      "NAKFE arbeider for at flere kvinner skal oppleve tilhørighet, mestring og mulighet til å delta i samfunnet rundt seg.",
    backgroundImages: pageHeroBackgroundImages,
  },

  purpose: {
    header: {
      eyebrow: "Formål",
      title: "Muligheter vokser når kvinner får rom til å delta.",
      description:
        "NAKFE styrker kvinner gjennom utdanning, praktiske ferdigheter og fellesskap – i Norge og Afghanistan.",
    },
    contextNavigationLabel: "Velg hvor du vil lese om arbeidet",
    highlightsLabel: "Sentrale områder",
    contexts: [
      {
        id: "norway",
        label: "I Norge",
        description:
          "Vi arbeider for integrering og inkludering av kvinner med minoritetsbakgrunn i det norske samfunnet og arbeidslivet.",
        highlights: [
          "Arbeid og jobbførhet",
          "Utdanning og kompetanse",
          "Entreprenørskap",
        ],
      },
      {
        id: "afghanistan",
        label: "I Afghanistan",
        description:
          "Vi tilbyr utdannings- og ferdighetsprogrammer for kvinner, med mål om inntekt, trygghet og større økonomisk selvstendighet.",
        highlights: ["Engelskkurs", "Søm og ferdigheter", "Entreprenørskap"],
      },
    ],
    image: sharedPurposeImage,
  },

  values: {
    header: {
      eyebrow: "Verdier",
      title: "Fire ord som skal merkes i praksis.",
      description:
        "Verdiene skal ikke bare stå på en side. De skal prege aktiviteter, kommunikasjon og måten organisasjonen møter mennesker på.",
    },
    carousel: {
      label: "NAKFEs verdier",
      roleDescription: "karusell",
      showItemLabel: "Vis",
      previousItemLabel: "Vis forrige verdi",
      nextItemLabel: "Vis neste verdi",
    },
    items: [
      {
        title: "Integrering",
        description:
          "Vi vil gjøre det lettere å forstå samfunnet, finne informasjon og delta i fellesskap på egne premisser.",
        media: valueMedia.integration,
      },
      {
        title: "Inkludering",
        description:
          "Vi vil senke terskelen for å møte opp, bidra og høre til — uansett språk, bakgrunn eller livssituasjon.",
        media: valueMedia.inclusion,
      },
      {
        title: "Likestilling",
        description:
          "Vi vil løfte fram kvinners rettigheter, stemmer og muligheter gjennom kunnskap, støtte og synlighet.",
        media: valueMedia.equality,
      },
      {
        title: "Endring",
        description:
          "Vi tror små handlinger kan bli til varig endring når mennesker får møteplasser, informasjon og støtte.",
        media: valueMedia.change,
      },
    ],
  },
} satisfies AboutPageContent;

const englishSharedPurposeImage = {
  ...sharedPurposeImage,
  alt: "Women gathered in a community connected to NAKFE",
} as const;

const englishValueMedia = {
  integration: {
    ...valueMedia.integration,
    alt: "Women gathered in a community",
  },
  inclusion: {
    ...valueMedia.inclusion,
    alt: "Participants in an activity and conversation",
  },
  equality: {
    ...valueMedia.equality,
    alt: "Women marking the completion of training",
  },
  change: {
    ...valueMedia.change,
    alt: "Women gathered at an event with NAKFE",
  },
} as const;

const englishAboutContent = {
  seo: {
    title: "About us",
    description:
      "Learn more about NAKFE, the organisation's purpose, work and community.",
  },

  hero: {
    eyebrow: "About us",
    title: "A community for women, cultural heritage and change.",
    description:
      "NAKFE works so that more women can experience belonging, achievement and the opportunity to participate in the society around them.",
    backgroundImages: pageHeroBackgroundImages,
  },

  purpose: {
    header: {
      eyebrow: "Purpose",
      title: "Opportunities grow when women have room to participate.",
      description:
        "NAKFE strengthens women through education, practical skills and community — in Norway and Afghanistan.",
    },
    contextNavigationLabel: "Choose where you want to read about the work",
    highlightsLabel: "Key areas",
    contexts: [
      {
        id: "norway",
        label: "In Norway",
        description:
          "We work for the integration and inclusion of women from minority backgrounds in Norwegian society and working life.",
        highlights: [
          "Employment and job readiness",
          "Education and skills",
          "Entrepreneurship",
        ],
      },
      {
        id: "afghanistan",
        label: "In Afghanistan",
        description:
          "We offer education and skills programmes for women, with the goal of income, security and greater financial independence.",
        highlights: [
          "English courses",
          "Sewing and practical skills",
          "Entrepreneurship",
        ],
      },
    ],
    image: englishSharedPurposeImage,
  },

  values: {
    header: {
      eyebrow: "Values",
      title: "Four words that should be felt in practice.",
      description:
        "The values should not merely appear on a page. They should shape activities, communication and the way the organisation meets people.",
    },
    carousel: {
      label: "NAKFE's values",
      roleDescription: "carousel",
      showItemLabel: "Show",
      previousItemLabel: "Show previous value",
      nextItemLabel: "Show next value",
    },
    items: [
      {
        title: "Integration",
        description:
          "We want to make it easier to understand society, find information and participate in communities on your own terms.",
        media: englishValueMedia.integration,
      },
      {
        title: "Inclusion",
        description:
          "We want to lower the threshold for showing up, contributing and belonging — regardless of language, background or life situation.",
        media: englishValueMedia.inclusion,
      },
      {
        title: "Equality",
        description:
          "We want to highlight women's rights, voices and opportunities through knowledge, support and visibility.",
        media: englishValueMedia.equality,
      },
      {
        title: "Change",
        description:
          "We believe small actions can lead to lasting change when people have meeting places, information and support.",
        media: englishValueMedia.change,
      },
    ],
  },
} satisfies AboutPageContent;

export const aboutContentByLocale = {
  no: aboutContent,
  en: englishAboutContent,
} satisfies LocalizedContent<AboutPageContent>;

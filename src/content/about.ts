import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import type { AboutPageContent } from "@/types/about";
import type { LocalizedContent } from "@/types/locale";

const sharedPurposeImage = {
  src: "/images/about/community.jpg",
  alt: "Kvinner samlet i et fellesskap knyttet til Kvinner for Endring",
  position: "center",
} as const;

const valueMedia = {
  integration: {
    type: "image",
    src: "/images/page-hero/kvinner-fellesskap.png",
    alt: "Kvinner samlet i et fellesskap",
    position: "center",
  },
  inclusion: {
    type: "image",
    src: "/images/page-hero/arrangementer.png",
    alt: "Deltakere samlet til aktivitet og samtale",
    position: "center",
  },
  dignity: {
    type: "image",
    src: "/images/page-hero/afghansk-kulturarv.png",
    alt: "Kvinner samlet etter gjennomført opplæring",
    position: "center",
  },
  sustainability: {
    type: "image",
    src: "/images/page-hero/kvinner-for-endring.png",
    alt: "Kvinner samlet i arbeid og fellesskap",
    position: "center",
  },
} as const;

export const aboutContent = {
  seo: {
    title: "Om oss",
    description:
      "Les om Kvinner for Endring, en ideell organisasjon etablert i Norge i april 2021 med arbeid i Norge og Afghanistan.",
  },

  hero: {
    eyebrow: "Om oss",
    title: "En ideell organisasjon med arbeid i Norge og Afghanistan.",
    description:
      "Kvinner for Endring ble etablert i Norge i april 2021 for å styrke kvinner gjennom utdanning, arbeid og entreprenørskap.",
    backgroundImages: pageHeroBackgroundImages,
  },

  purpose: {
    header: {
      eyebrow: "Formål",
      title: "Langsiktig økonomisk selvstendighet og deltakelse.",
      description:
        "Organisasjonen styrker kvinner gjennom utdanning, arbeid, entreprenørskap og fellesskap og tilpasser arbeidet til lokale forhold.",
    },
    contextNavigationLabel: "Velg hvor du vil lese om arbeidet",
    highlightsLabel: "Sentrale områder",
    contexts: [
      {
        id: "norway",
        label: "I Norge",
        description:
          "Kvinner for Endring arbeider med integrering og inkludering av kvinner med minoritetsbakgrunn i det norske samfunnet og arbeidslivet.",
        highlights: [
          "Arbeid og jobbførhet",
          "Utdanning og kompetanse",
          "Entreprenørskap",
          "Psykisk helse og livskvalitet",
        ],
      },
      {
        id: "afghanistan",
        label: "I Afghanistan",
        description:
          "Organisasjonen driver utdannings- og inntektsrettede programmer for kvinner og jenter under krevende forhold.",
        highlights: [
          "Engelskkurs i Kabul",
          "Entreprenørskap og inntektsrettede ferdigheter",
          "Sømopplæring",
        ],
      },
    ],
    image: sharedPurposeImage,
  },

  values: {
    header: {
      eyebrow: "Prinsipper i arbeidet",
      title: "Verdighet, bærekraft og deltakelse i praksis.",
      description:
        "Arbeidet tilpasses lokale forhold med et tydelig fokus på verdighet, bærekraft og virkning.",
    },
    carousel: {
      label: "Prinsipper i arbeidet til Kvinner for Endring",
      roleDescription: "karusell",
      showItemLabel: "Vis",
      previousItemLabel: "Vis forrige prinsipp",
      nextItemLabel: "Vis neste prinsipp",
    },
    items: [
      {
        title: "Integrering",
        description:
          "I Norge skal arbeidet gjøre det lettere for kvinner med minoritetsbakgrunn å delta i samfunnet og arbeidslivet.",
        media: valueMedia.integration,
      },
      {
        title: "Inkludering",
        description:
          "Programmer og møteplasser skal bidra til sosial deltakelse, fellesskap og tilhørighet.",
        media: valueMedia.inclusion,
      },
      {
        title: "Verdighet",
        description:
          "Arbeidet i Norge og Afghanistan tilpasses lokale forhold og skal møte kvinner og jenter med verdighet.",
        media: valueMedia.dignity,
      },
      {
        title: "Bærekraft",
        description:
          "Utdanning, arbeid og entreprenørskap skal gi grunnlag for langsiktig økonomisk selvstendighet og varige muligheter.",
        media: valueMedia.sustainability,
      },
    ],
  },
} satisfies AboutPageContent;

const englishSharedPurposeImage = {
  ...sharedPurposeImage,
  alt: "Women gathered in a community connected to Women for Change",
} as const;

const englishValueMedia = {
  integration: {
    ...valueMedia.integration,
    alt: "Women gathered in a community",
  },
  inclusion: {
    ...valueMedia.inclusion,
    alt: "Participants gathered for an activity and conversation",
  },
  dignity: {
    ...valueMedia.dignity,
    alt: "Women gathered after completing training",
  },
  sustainability: {
    ...valueMedia.sustainability,
    alt: "Women gathered through work and community",
  },
} as const;

const englishAboutContent = {
  seo: {
    title: "About us",
    description:
      "Learn about Women for Change, a non-profit organisation established in Norway in April 2021 and working in Norway and Afghanistan.",
  },

  hero: {
    eyebrow: "About us",
    title: "A non-profit organisation working in Norway and Afghanistan.",
    description:
      "Women for Change was established in Norway in April 2021 to empower women through education, employment and entrepreneurship.",
    backgroundImages: pageHeroBackgroundImages,
  },

  purpose: {
    header: {
      eyebrow: "Purpose",
      title: "Long-term financial independence and participation.",
      description:
        "The organisation empowers women through education, employment, entrepreneurship and community and adapts its work to local contexts.",
    },
    contextNavigationLabel: "Choose where you want to read about the work",
    highlightsLabel: "Key areas",
    contexts: [
      {
        id: "norway",
        label: "In Norway",
        description:
          "Women for Change works to integrate and include women with minority backgrounds in Norwegian society and the labour market.",
        highlights: [
          "Employment and job readiness",
          "Education and skills",
          "Entrepreneurship",
          "Mental health and well-being",
        ],
      },
      {
        id: "afghanistan",
        label: "In Afghanistan",
        description:
          "The organisation runs education and livelihood-focused programmes for women and girls under challenging conditions.",
        highlights: [
          "English courses in Kabul",
          "Entrepreneurship and livelihood skills",
          "Tailoring training",
        ],
      },
    ],
    image: englishSharedPurposeImage,
  },

  values: {
    header: {
      eyebrow: "Principles in practice",
      title: "Dignity, sustainability and participation in practice.",
      description:
        "The work is adapted to local contexts with a strong focus on dignity, sustainability and impact.",
    },
    carousel: {
      label: "Principles guiding the work of Women for Change",
      roleDescription: "carousel",
      showItemLabel: "Show",
      previousItemLabel: "Show previous principle",
      nextItemLabel: "Show next principle",
    },
    items: [
      {
        title: "Integration",
        description:
          "In Norway, the work aims to make it easier for women with minority backgrounds to participate in society and the labour market.",
        media: englishValueMedia.integration,
      },
      {
        title: "Inclusion",
        description:
          "Programmes and meeting places are intended to support social participation, community and belonging.",
        media: englishValueMedia.inclusion,
      },
      {
        title: "Dignity",
        description:
          "The work in Norway and Afghanistan is adapted to local contexts and should meet women and girls with dignity.",
        media: englishValueMedia.dignity,
      },
      {
        title: "Sustainability",
        description:
          "Education, employment and entrepreneurship should provide a basis for long-term financial independence and lasting opportunities.",
        media: englishValueMedia.sustainability,
      },
    ],
  },
} satisfies AboutPageContent;

export const aboutContentByLocale = {
  no: aboutContent,
  en: englishAboutContent,
} satisfies LocalizedContent<AboutPageContent>;

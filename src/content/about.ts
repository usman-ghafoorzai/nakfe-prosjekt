import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import type { AboutPageContent } from "@/types/content";

const sharedValueImage = {
  src: "/images/about/community.jpg",
  alt: "Kvinner samlet i et fellesskap knyttet til NAKFE",
  position: "center",
} as const;

export const aboutContent = {
  seo: {
    title: "Om oss | NAKFE",
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
    image: sharedValueImage,
  },

  values: {
    header: {
      eyebrow: "Verdier",
      title: "Fire ord som skal merkes i praksis.",
      description:
        "Verdiene skal ikke bare stå på en side. De skal prege aktiviteter, kommunikasjon og måten organisasjonen møter mennesker på.",
    },
    items: [
      {
        title: "Integrering",
        description:
          "Vi vil gjøre det lettere å forstå samfunnet, finne informasjon og delta i fellesskap på egne premisser.",
        image: sharedValueImage,
      },
      {
        title: "Inkludering",
        description:
          "Vi vil senke terskelen for å møte opp, bidra og høre til — uansett språk, bakgrunn eller livssituasjon.",
        image: sharedValueImage,
      },
      {
        title: "Likestilling",
        description:
          "Vi vil løfte fram kvinners rettigheter, stemmer og muligheter gjennom kunnskap, støtte og synlighet.",
        image: sharedValueImage,
      },
      {
        title: "Endring",
        description:
          "Vi tror små handlinger kan bli til varig endring når mennesker får møteplasser, informasjon og støtte.",
        image: sharedValueImage,
      },
    ],
  },
} satisfies AboutPageContent;

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

  intro: {
    header: {
      eyebrow: "Formål",
      title: "Vi bygger rom hvor kvinner kan bli sett, hørt og styrket.",
      description:
        "NAKFE skal være en trygg møteplass for fellesskap, kulturformidling, kunnskap og praktisk engasjement.",
    },
    body: [
      "Mange kvinner bærer både ressurser, erfaringer og ansvar — men mangler arenaer der dette blir synlig. NAKFE vil gjøre terskelen lavere for å møte andre, delta i aktiviteter og finne informasjon som faktisk er tilgjengelig.",
      "Arbeidet vårt handler om integrering, inkludering, likestilling og endring. Det handler også om å ta vare på kulturarv, språk og fellesskap på en måte som gir styrke i hverdagen her i Norge.",
    ],
    image: {
      src: "/images/about/community.jpg",
      alt: "Kvinner samlet i et fellesskap knyttet til NAKFE",
      position: "center",
      caption:
        "NAKFE skal være et varmt og tydelig samlingspunkt — ikke bare en nettside.",
    },
    visual: {
      tone: "warm",
      imagePlacement: "end",
    },
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

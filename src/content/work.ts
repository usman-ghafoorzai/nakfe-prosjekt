import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateWorkPageContent } from "@/lib/work-projects";
import type { WorkPageContent } from "@/types/content";

const workContentDraft = {
  seo: {
    title: "Vårt arbeid | NAKFE",
    description:
      "Les om NAKFEs prosjekter og programmer i Afghanistan og Norge.",
  },

  hero: {
    eyebrow: "Vårt arbeid",
    title: "Prosjekter og programmer som skaper muligheter.",
    description:
      "Her samler vi arbeidet vårt i Afghanistan og Norge – fra opplæring og ferdigheter til deltakelse, kompetanse og entreprenørskap.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Prosjekter og programmer",
      title: "Arbeid som får vokse over tid.",
      description:
        "Velg et land for å se prosjekter og programmer NAKFE arbeider med.",
    },
    countryNavigationLabel: "Velg land",
    defaultCountry: "afghanistan",
    filters: [
      {
        id: "afghanistan",
        label: "Afghanistan",
        emptyState: {
          title: "Ingen prosjekter er publisert ennå.",
          description:
            "Nye prosjekter og historier fra Afghanistan vil bli lagt til her.",
        },
      },
      {
        id: "norway",
        label: "Norge",
        emptyState: {
          title: "Ingen prosjekter er publisert ennå.",
          description:
            "Nye prosjekter og historier fra Norge vil bli lagt til her.",
        },
      },
    ],
    items: [
      {
        slug: "engelskkurs-i-kabul-og-faryab",
        country: "afghanistan",
        title: "Engelskkurs i Kabul og Faryab",
        summary:
          "Engelskkurs som gir kvinner tilgang til kunnskap, språk og nye muligheter for videre læring.",
        coverImage: {
          src: "/images/page-hero/afghansk-kulturarv.png",
          alt: "Kvinner samlet i et læringsfellesskap",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "NAKFE tilbyr engelskkurs i Kabul og Faryab som en del av arbeidet med utdanning og kompetanseheving for kvinner.",
          },
          {
            id: "malet",
            text: "Målet er å gi deltakerne språkferdigheter som kan åpne for videre læring, mer informasjon og større muligheter i hverdagen.",
          },
        ],
      },
      {
        slug: "entreprenorskap-og-somopplaering",
        country: "afghanistan",
        title: "Entreprenørskap og sømopplæring",
        summary:
          "Ferdighetsopplæring som kan hjelpe kvinner med å skape inntekt og større økonomisk selvstendighet.",
        coverImage: {
          src: "/images/page-hero/kvinner-fellesskap.png",
          alt: "Kvinner samlet i et fellesskap",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "NAKFEs entreprenørskaps- og ferdighetsopplæring er utviklet for å gi kvinner markedsrelevante ferdigheter og mulighet til å skape inntekt.",
          },
          {
            id: "somopplaering",
            text: "Søm er ett av områdene organisasjonen løfter frem. Deltakerne kan gjennomføre opplæring over flere måneder og bruke ferdighetene til å ta kundeoppdrag etterpå.",
          },
        ],
      },
      {
        slug: "arbeid-og-jobbforhet",
        country: "norway",
        title: "Arbeid og jobbførhet",
        summary:
          "Støtte og kunnskap som kan gjøre veien inn i arbeidslivet mer oversiktlig for kvinner med minoritetsbakgrunn.",
        coverImage: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Kvinner samlet til et arrangement",
          position: "center 40%",
        },
        body: [
          {
            id: "arbeid-i-norge",
            text: "I Norge arbeider NAKFE med integrering og inkludering av kvinner med minoritetsbakgrunn i samfunnet og arbeidslivet.",
          },
          {
            id: "programmet",
            text: "Arbeid og jobbførhet er ett av programmene som skal bidra til mer kunnskap, trygghet og mulighet til å delta.",
          },
        ],
      },
      {
        slug: "utdanning-og-kompetanseutvikling",
        country: "norway",
        title: "Utdanning og kompetanseutvikling",
        summary:
          "Kunnskap og kompetanse som kan styrke deltakelse, mestring og muligheter i det norske samfunnet.",
        coverImage: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Kvinner som samarbeider om kunnskap og læring",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "Utdanning og kompetanseutvikling er en del av NAKFEs arbeid i Norge.",
          },
          {
            id: "malet",
            text: "Programmet handler om å støtte kvinner med minoritetsbakgrunn i å bygge kunnskap og erfaring som kan brukes videre i utdanning, arbeidsliv og hverdagsliv.",
          },
        ],
      },
      {
        slug: "entreprenorskap-i-norge",
        country: "norway",
        title: "Entreprenørskap",
        summary:
          "Inspirasjon og kunnskap for kvinner som ønsker å utvikle egne idéer og økonomiske muligheter.",
        coverImage: {
          src: "/images/page-hero/fellesskap-kvinner.png",
          alt: "Kvinner samlet i et fellesskap",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "Entreprenørskap er ett av NAKFEs programmer i Norge.",
          },
          {
            id: "malet",
            text: "Arbeidet skal gi kvinner mulighet til å utforske egne idéer, bygge relevant kunnskap og finne nye veier til deltakelse og selvstendighet.",
          },
        ],
      },
    ],
  },

  detail: {
    backLinkLabel: "Vårt arbeid",
    backLinkAriaLabel: "Tilbake til oversikten over Vårt arbeid",
  },
} satisfies WorkPageContent;

validateWorkPageContent(workContentDraft);

export const workContent = workContentDraft;

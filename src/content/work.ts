import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateWorkPageContent } from "@/lib/work-projects";
import type { LocalizedContent } from "@/types/locale";
import type { WorkPageContent } from "@/types/work";

const workContentDraft = {
  seo: {
    title: "Vårt arbeid",
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
    detailsActionLabel: "Les mer",
    detailsActionAriaLabelPrefix: "Les mer om",
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
    videoAriaLabelPrefix: "Video fra",
    videoFallbackText: "Nettleseren din støtter ikke videoavspilling.",
  },
} satisfies WorkPageContent;

validateWorkPageContent(workContentDraft);

export const workContent = workContentDraft;

const englishWorkContent = {
  seo: {
    title: "Our work",
    description:
      "Read about NAKFE's projects and programmes in Afghanistan and Norway.",
  },

  hero: {
    eyebrow: "Our work",
    title: "Projects and programmes that create opportunities.",
    description:
      "Here we bring together our work in Afghanistan and Norway — from training and practical skills to participation, expertise and entrepreneurship.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Projects and programmes",
      title: "Work that can grow over time.",
      description:
        "Choose a country to view projects and programmes NAKFE works with.",
    },
    countryNavigationLabel: "Choose country",
    defaultCountry: "afghanistan",
    filters: [
      {
        id: "afghanistan",
        label: "Afghanistan",
        emptyState: {
          title: "No projects have been published yet.",
          description:
            "New projects and stories from Afghanistan will be added here.",
        },
      },
      {
        id: "norway",
        label: "Norway",
        emptyState: {
          title: "No projects have been published yet.",
          description:
            "New projects and stories from Norway will be added here.",
        },
      },
    ],
    detailsActionLabel: "Read more",
    detailsActionAriaLabelPrefix: "Read more about",
    items: [
      {
        slug: "engelskkurs-i-kabul-og-faryab",
        country: "afghanistan",
        title: "English Courses in Kabul and Faryab",
        summary:
          "English courses that give women access to knowledge, language skills and new opportunities for further learning.",
        coverImage: {
          src: "/images/page-hero/afghansk-kulturarv.png",
          alt: "Women gathered in a learning community",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "NAKFE offers English courses in Kabul and Faryab as part of its work on education and skills development for women.",
          },
          {
            id: "malet",
            text: "The goal is to give participants language skills that can open the way to further learning, more information and greater opportunities in everyday life.",
          },
        ],
      },
      {
        slug: "entreprenorskap-og-somopplaering",
        country: "afghanistan",
        title: "Entrepreneurship and Sewing Training",
        summary:
          "Skills training that can help women generate income and achieve greater financial independence.",
        coverImage: {
          src: "/images/page-hero/kvinner-fellesskap.png",
          alt: "Women gathered in a community",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "NAKFE's entrepreneurship and skills training is designed to give women market-relevant skills and the opportunity to generate income.",
          },
          {
            id: "somopplaering",
            text: "Sewing is one of the areas highlighted by the organisation. Participants can complete training over several months and use their skills to take on customer assignments afterwards.",
          },
        ],
      },
      {
        slug: "arbeid-og-jobbforhet",
        country: "norway",
        title: "Employment and Job Readiness",
        summary:
          "Support and knowledge that can make the path into working life clearer for women from minority backgrounds.",
        coverImage: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Women gathered at an event",
          position: "center 40%",
        },
        body: [
          {
            id: "arbeid-i-norge",
            text: "In Norway, NAKFE works for the integration and inclusion of women from minority backgrounds in society and working life.",
          },
          {
            id: "programmet",
            text: "Employment and job readiness is one of the programmes intended to contribute to greater knowledge, confidence and opportunities to participate.",
          },
        ],
      },
      {
        slug: "utdanning-og-kompetanseutvikling",
        country: "norway",
        title: "Education and Skills Development",
        summary:
          "Knowledge and skills that can strengthen participation, achievement and opportunities in Norwegian society.",
        coverImage: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Women collaborating on knowledge and learning",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "Education and skills development is part of NAKFE's work in Norway.",
          },
          {
            id: "malet",
            text: "The programme is about supporting women from minority backgrounds in building knowledge and experience that can be used in further education, working life and everyday life.",
          },
        ],
      },
      {
        slug: "entreprenorskap-i-norge",
        country: "norway",
        title: "Entrepreneurship",
        summary:
          "Inspiration and knowledge for women who want to develop their own ideas and financial opportunities.",
        coverImage: {
          src: "/images/page-hero/fellesskap-kvinner.png",
          alt: "Women gathered in a community",
          position: "center",
        },
        body: [
          {
            id: "programmet",
            text: "Entrepreneurship is one of NAKFE's programmes in Norway.",
          },
          {
            id: "malet",
            text: "The work aims to give women the opportunity to explore their own ideas, build relevant knowledge and find new paths to participation and independence.",
          },
        ],
      },
    ],
  },

  detail: {
    backLinkLabel: "Our work",
    backLinkAriaLabel: "Back to the overview of Our work",
    videoAriaLabelPrefix: "Video from",
    videoFallbackText: "Your browser does not support video playback.",
  },
} satisfies WorkPageContent;

validateWorkPageContent(englishWorkContent);

export const workContentByLocale = {
  no: workContent,
  en: englishWorkContent,
} satisfies LocalizedContent<WorkPageContent>;

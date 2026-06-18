import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import type { ProjectsPageContent } from "@/types/content";

export const projectsContent = {
  seo: {
    title: "Prosjekter | NAKFE",
    description:
      "Les om prosjekter, initiativer, nyheter og arbeid NAKFE er involvert i.",
  },

  hero: {
    eyebrow: "Prosjekter",
    title: "Prosjekter, saker og initiativer",
    description:
      "Et publiseringsklart område for arbeid, nyhetssaker og historier organisasjonen ønsker å løfte frem.",
    backgroundImages: pageHeroBackgroundImages,
  },

  projects: {
    header: {
      eyebrow: "Arbeid og initiativer",
      title: "Saker som kan vokse med organisasjonen.",
      description:
        "Dette er bygget som redigerbart innhold. Senere kan hver sak komme fra Supabase, et CMS eller et admin-panel uten at komponenten må skrives om.",
    },
    variant: "editorial",
    items: [
      {
        eyebrow: "Kulturarbeid",
        title: "Kulturarv som ressurs",
        description:
          "Her kan NAKFE publisere prosjekter knyttet til kultur, identitet, språk, arrangementer og formidling.",
        meta: "Prosjekt",
        image: {
          src: "/images/page-hero/afghansk-kulturarv.png",
          alt: "Illustrasjon av afghansk kulturarv",
          position: "center",
        },
      },
      {
        eyebrow: "Fellesskap",
        title: "Møteplasser som senker terskelen",
        description:
          "Her kan organisasjonen beskrive initiativer som skaper tilhørighet, deltakelse og sosiale møteplasser.",
        meta: "Initiativ",
        image: {
          src: "/images/page-hero/fellesskap-kvinner.png",
          alt: "Illustrasjon av kvinner samlet i fellesskap",
          position: "center",
        },
      },
      {
        eyebrow: "Kunnskap",
        title: "Informasjon som blir tilgjengelig",
        description:
          "Her kan NAKFE publisere ressurser, veiledning, nyheter eller kunnskapsdeling som hjelper målgruppen videre.",
        meta: "Nyhet",
        image: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Illustrasjon av kvinner og endring",
          position: "center",
        },
      },
    ],
  },
} satisfies ProjectsPageContent;

import type { ProjectsPageContent } from "@/types/content";

export const projectsContent = {
  seo: {
    title: "Prosjekter | NAKFE",
    description:
      "Les om prosjekter, initiativer og arbeid NAKFE er involvert i.",
  },

  hero: {
    eyebrow: "Prosjekter",
    title: "Prosjekter og initiativer",
    description:
      "Her kommer informasjon om prosjekter, initiativer og arbeid organisasjonen ønsker å synliggjøre.",
    primaryAction: {
      label: "Kontakt oss",
      href: "/kontakt",
    },
  },

  projects: {
    header: {
      eyebrow: "Arbeid og initiativer",
      title: "Prosjekter som kan løftes frem",
      description:
        "Denne seksjonen kan senere fylles inn med prosjekter fra admin, CMS eller Supabase.",
    },
    items: [
      {
        title: "Kulturarbeid",
        description:
          "Her kan NAKFE beskrive prosjekter knyttet til kultur, identitet, arrangementer og formidling.",
      },
      {
        title: "Fellesskap og møteplasser",
        description:
          "Her kan organisasjonen beskrive initiativer som skaper tilhørighet, deltakelse og sosiale møteplasser.",
      },
      {
        title: "Informasjonsarbeid",
        description:
          "Her kan organisasjonen beskrive arbeid med ressurser, veiledning eller kunnskapsdeling.",
      },
    ],
  },
} satisfies ProjectsPageContent;

import type { PageHeroContent, SeoContent } from "@/types/content";

export const projectsContent = {
  seo: {
    title: "Prosjekter | NAKFE",
    description:
      "Les om prosjekter, initiativer og arbeid NAKFE er involvert i.",
  } satisfies SeoContent,

  hero: {
    eyebrow: "Prosjekter",
    title: "Prosjekter og initiativer",
    description:
      "Her kommer informasjon om prosjekter, initiativer og arbeid organisasjonen ønsker å synliggjøre.",
    primaryAction: {
      label: "Kontakt oss",
      href: "/kontakt",
    },
  } satisfies PageHeroContent,
};

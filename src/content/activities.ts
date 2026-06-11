import type { PageHeroContent, SeoContent } from "@/types/content";

export const activitiesContent = {
  seo: {
    title: "Aktiviteter | NAKFE",
    description:
      "Se aktiviteter, arrangementer og møteplasser i regi av NAKFE.",
  } satisfies SeoContent,

  hero: {
    eyebrow: "Aktiviteter",
    title: "Aktiviteter og møteplasser",
    description:
      "Her kommer informasjon om kommende og tidligere aktiviteter, arrangementer og samlinger.",
    primaryAction: {
      label: "Kontakt oss",
      href: "/kontakt",
    },
  } satisfies PageHeroContent,
};

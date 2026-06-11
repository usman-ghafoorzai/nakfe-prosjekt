import type { PageHeroContent, SeoContent } from "@/types/content";

export const aboutContent = {
  seo: {
    title: "Om oss | NAKFE",
    description:
      "Les mer om NAKFE, organisasjonens formål, arbeid og fellesskap.",
  } satisfies SeoContent,

  hero: {
    eyebrow: "Om oss",
    title: "Om NAKFE",
    description:
      "Her kommer en kort introduksjon til organisasjonen, hvem NAKFE er, og hva organisasjonen jobber for.",
    primaryAction: {
      label: "Kontakt oss",
      href: "/kontakt",
    },
  } satisfies PageHeroContent,
};

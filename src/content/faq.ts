import type { PageHeroContent, SeoContent } from "@/types/content";

export const faqContent = {
  seo: {
    title: "FAQ | NAKFE",
    description:
      "Finn svar på vanlige spørsmål om NAKFE, aktiviteter og kontaktmuligheter.",
  } satisfies SeoContent,

  hero: {
    eyebrow: "FAQ",
    title: "Spørsmål og svar",
    description:
      "Her kommer svar på vanlige spørsmål om organisasjonen, aktiviteter, kontakt og praktisk informasjon.",
    primaryAction: {
      label: "Kontakt oss",
      href: "/kontakt",
    },
  } satisfies PageHeroContent,
};

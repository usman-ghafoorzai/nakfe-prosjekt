import type { PageHeroContent, SeoContent } from "@/types/content";

export const contactContent = {
  seo: {
    title: "Kontakt | NAKFE",
    description:
      "Kontakt NAKFE for spørsmål, samarbeid, aktiviteter eller annen informasjon.",
  } satisfies SeoContent,

  hero: {
    eyebrow: "Kontakt",
    title: "Kontakt NAKFE",
    description:
      "Her kommer kontaktinformasjon, lenker til relevante kanaler og eventuelt kontaktskjema.",
  } satisfies PageHeroContent,
};

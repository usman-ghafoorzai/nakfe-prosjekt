import type { HomeHeroContent } from "@/types/content";

export const homeContent = {
  hero: {
    eyebrow: "NAKFE",
    title: "En møteplass for kultur, fellesskap og engasjement.",
    description:
        "NAKFE jobber for å gjøre informasjon, aktiviteter og kontaktmuligheter mer tilgjengelig for medlemmer, frivillige og andre interesserte.",
    primaryAction: {
      label: "Les mer om NAKFE",
      href: "/om-oss",
    },
    secondaryAction: {
      label: "Kontakt oss",
      href: "/kontakt",
    },
    backgroundImage: {
      src: "/images/hero/hero-background.jpg",
      alt: "",
      position: "center",
    },
  } satisfies HomeHeroContent,
};
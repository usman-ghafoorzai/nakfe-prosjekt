import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateFaqPageContent } from "@/lib/faq";
import type { FaqPageContent } from "@/types/content";

const faqContentDraft = {
  seo: {
    title: "FAQ",
    description:
      "Finn svar på vanlige spørsmål om NAKFE, aktiviteter og kontaktmuligheter.",
  },

  hero: {
    eyebrow: "FAQ",
    title: "Spørsmål og svar",
    description:
      "Her samler vi svar på vanlige spørsmål om NAKFE, aktiviteter og hvordan du kommer i kontakt.",
    backgroundImages: pageHeroBackgroundImages,
  },

  faq: {
    header: {
      eyebrow: "FAQ",
      title: "Vanlige spørsmål",
      description:
        "Svar på spørsmål om NAKFE, aktiviteter og samarbeid publiseres her når innholdet er kvalitetssikret.",
    },
    categories: [],
    emptyState: {
      title: "Har du spørsmål?",
      description:
        "Ta kontakt med oss, så hjelper vi deg videre med informasjonen du trenger.",
      action: {
        label: "Kontakt oss",
        href: "/kontakt",
        ariaLabel: "Gå til kontaktsiden",
      },
    },
    reviewedAtLabel: "Sist gjennomgått",
    contactCta: {
      eyebrow: "Kontakt",
      title: "Finner du ikke det du lurer på?",
      description: "Ta kontakt med oss, så hjelper vi deg videre.",
      action: {
        label: "Kontakt oss",
        href: "/kontakt",
        ariaLabel: "Gå til kontaktsiden",
      },
    },
  },
} satisfies FaqPageContent;

validateFaqPageContent(faqContentDraft);

export const faqContent = faqContentDraft;

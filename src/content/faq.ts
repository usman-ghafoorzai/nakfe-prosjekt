import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateFaqPageContent } from "@/lib/faq";
import type { FaqPageContent } from "@/types/faq";
import type { LocalizedContent } from "@/types/locale";

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

const englishFaqContent = {
  seo: {
    title: "FAQ",
    description:
      "Find answers to frequently asked questions about NAKFE, activities and ways to get in touch.",
  },

  hero: {
    eyebrow: "FAQ",
    title: "Questions and answers",
    description:
      "Here we collect answers to frequently asked questions about NAKFE, activities and how to get in touch.",
    backgroundImages: pageHeroBackgroundImages,
  },

  faq: {
    header: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      description:
        "Answers to questions about NAKFE, activities and collaboration will be published here once the content has been quality assured.",
    },
    categories: [],
    emptyState: {
      title: "Do you have questions?",
      description:
        "Contact us and we will help you find the information you need.",
      action: {
        label: "Contact us",
        href: "/kontakt",
        ariaLabel: "Go to the contact page",
      },
    },
    reviewedAtLabel: "Last reviewed",
    contactCta: {
      eyebrow: "Contact",
      title: "Cannot find what you are looking for?",
      description: "Contact us and we will help you further.",
      action: {
        label: "Contact us",
        href: "/kontakt",
        ariaLabel: "Go to the contact page",
      },
    },
  },
} satisfies FaqPageContent;

validateFaqPageContent(englishFaqContent);

export const faqContentByLocale = {
  no: faqContent,
  en: englishFaqContent,
} satisfies LocalizedContent<FaqPageContent>;

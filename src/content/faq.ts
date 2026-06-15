import type { FaqPageContent } from "@/types/content";

export const faqContent = {
  seo: {
    title: "FAQ | NAKFE",
    description:
        "Finn svar på vanlige spørsmål om NAKFE, aktiviteter og kontaktmuligheter.",
  },

  hero: {
    eyebrow: "FAQ",
    title: "Spørsmål og svar",
    description:
        "Her kommer svar på vanlige spørsmål om organisasjonen, aktiviteter, kontakt og praktisk informasjon.",
  },

  categories: [
    {
      title: "Generelle spørsmål",
      description:
          "Denne seksjonen kan senere fylles inn med spørsmål og svar via admin, CMS eller Supabase.",
      items: [
        {
          question: "Hva er NAKFE?",
          answer:
              "Her kommer et kort svar om organisasjonen. Dette er midlertidig innhold som ligger i content-layeret.",
          tags: ["organisasjon"],
        },
        {
          question: "Hvordan kan jeg ta kontakt?",
          answer:
              "Her kommer informasjon om kontaktmuligheter, e-post, sosiale medier eller kontaktskjema.",
          tags: ["kontakt"],
        },
      ],
    },
    {
      title: "Aktiviteter",
      description:
          "Spørsmål om arrangementer, møteplasser og praktisk informasjon kan samles her.",
      items: [
        {
          question: "Hvordan finner jeg kommende aktiviteter?",
          answer:
              "Her kan NAKFE forklare hvordan aktiviteter publiseres og hvordan interesserte kan fÃ¸lge med.",
          tags: ["aktiviteter"],
        },
      ],
    },
  ],

  contactCta: {
    title: "Fant du ikke svar?",
    description:
        "Send oss spørsmålet ditt, så hjelper vi deg videre.",
    primaryAction: {
      label: "Send et spørsmål",
      href: "/kontakt",
    },
  },
} satisfies FaqPageContent;

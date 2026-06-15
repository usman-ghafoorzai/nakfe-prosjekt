import type { HomePageContent } from "@/types/content";

export const homeContent = {
  seo: {
    title: "NAKFE",
    description:
        "NAKFE er en ideell organisasjon med fokus på kultur, fellesskap og engasjement.",
  },

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
      label: "Se aktiviteter",
      href: "/aktiviteter",
    },
    backgroundImage: {
      src: "/images/hero/hero-background.jpg",
      alt: "",
      position: "center",
      isDecorative: true,
    },
  },

  intro: {
    header: {
      eyebrow: "Om organisasjonen",
      title: "Informasjon som kan vokse med organisasjonen",
      description:
          "Denne seksjonen er klargjort for innhold som senere kan redigeres via admin, CMS eller Supabase.",
    },
    body: [
      "Her kan NAKFE legge inn en kort introduksjon om organisasjonen, formålet og hvem nettsiden er laget for.",
      "Innholdet ligger i content-layeret, slik at komponentene kan gjenbrukes uten å skrives om når vi senere kobler på en database eller et admin-panel.",
    ],
    action: {
      label: "Les mer om oss",
      href: "/om-oss",
    },
  },

  featuredAreas: {
    header: {
      eyebrow: "Hva du finner her",
      title: "Et tydelig sted for informasjon og aktiviteter",
      description:
          "Disse kortene kan senere styres av redigerbart innhold og brukes til å løfte frem viktige deler av organisasjonen.",
    },
    items: [
      {
        title: "Om NAKFE",
        description:
            "Kort inngang til informasjon om organisasjonen, formål, verdier og arbeid.",
        action: {
          label: "Les mer",
          href: "/om-oss",
        },
      },
      {
        title: "Aktiviteter",
        description:
            "Oversikt over aktiviteter, arrangementer og møteplasser som kan publiseres etter hvert.",
        action: {
          label: "Se aktiviteter",
          href: "/aktiviteter",
        },
      },
      {
        title: "Prosjekter",
        description:
            "Et sted for prosjekter, initiativer og arbeid organisasjonen ønsker å synliggjøre.",
        action: {
          label: "Se prosjekter",
          href: "/prosjekter",
        },
      },
    ],
  },

  finalCta: {
    title: "Vil du vite mer eller komme i kontakt?",
    description:
        "Kontakt NAKFE dersom du har spørsmål, ønsker samarbeid eller vil vite mer om organisasjonen.",
    primaryAction: {
      label: "Kontakt oss",
      href: "/kontakt",
    },
    secondaryAction: {
      label: "Spørsmål og svar",
      href: "/faq",
    },
  },
} satisfies HomePageContent;
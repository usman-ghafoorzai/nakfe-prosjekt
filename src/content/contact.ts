import type { ContactPageContent } from "@/types/content";

export const contactContent = {
  seo: {
    title: "Kontakt | NAKFE",
    description:
        "Kontakt NAKFE for spørsmål, samarbeid, aktiviteter eller annen informasjon.",
  },

  hero: {
    eyebrow: "Kontakt",
    title: "Kontakt NAKFE",
    description:
        "Her kommer kontaktinformasjon, lenker til relevante kanaler og eventuelt kontaktskjema.",
  },

  contact: {
    header: {
      eyebrow: "Kontaktinformasjon",
      title: "Ta kontakt med organisasjonen",
      description:
          "Denne seksjonen kan senere fylles med e-post, telefon, sosiale medier og annen kontaktinformasjon via admin, CMS eller Supabase.",
    },
    methods: [
      {
        label: "E-post",
        value: "E-post kommer",
        href: "mailto:kontakt@nakfe.no",
        description:
            "Her kan organisasjonen legge inn riktig e-postadresse for generelle henvendelser.",
      },
      {
        label: "Telefon",
        value: "Telefonnummer kommer",
        description:
            "Her kan organisasjonen legge inn telefonnummer dersom det skal være offentlig.",
      },
    ],
    socialLinks: [],
    finalNote:
        "Kontaktskjema kan legges til senere når vi bestemmer hvordan henvendelser skal håndteres teknisk.",
  },
} satisfies ContactPageContent;

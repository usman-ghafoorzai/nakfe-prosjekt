import type { AboutPageContent } from "@/types/content";

export const aboutContent = {
  seo: {
    title: "Om oss | NAKFE",
    description:
        "Les mer om NAKFE, organisasjonens formål, arbeid og fellesskap.",
  },

  hero: {
    eyebrow: "Om oss",
    title: "Om NAKFE",
    description:
        "Her kommer en kort introduksjon til organisasjonen, hvem NAKFE er, og hva organisasjonen jobber for.",
  },

  intro: {
    header: {
      eyebrow: "Formål",
      title: "En organisasjon bygget rundt fellesskap",
      description:
          "Denne seksjonen kan senere fylles inn via admin med organisasjonens formål, bakgrunn og arbeid.",
    },
    body: [
      "Her kommer første avsnitt om NAKFE. Dette er midlertidig innhold som ligger i content-layeret, ikke direkte i komponenten.",
      "Her kommer andre avsnitt. Senere kan dette hentes fra Supabase, CMS eller et admin-panel uten at TextSection-komponenten må skrives om.",
    ],
  },

  values: {
    header: {
      eyebrow: "Verdier",
      title: "Hva organisasjonen kan løfte frem",
      description:
          "Disse kortene er midlertidige felter som senere kan fylles inn og redigeres fra et admin-panel.",
    },
    items: [
      {
        title: "Fellesskap",
        description:
            "Her kan organisasjonen beskrive hvordan den skaper møteplasser og tilhørighet.",
      },
      {
        title: "Kultur",
        description:
            "Her kan organisasjonen beskrive arbeid med kulturformidling, arrangementer og identitet.",
      },
      {
        title: "Engasjement",
        description:
            "Her kan organisasjonen beskrive frivillighet, deltakelse og samfunnsrettet arbeid.",
      },
    ],
  },
} satisfies AboutPageContent;
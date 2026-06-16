import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import type { ActivitiesPageContent } from "@/types/content";

export const activitiesContent = {
  seo: {
    title: "Aktiviteter | NAKFE",
    description: "Se aktiviteter, arrangementer og møteplasser i regi av NAKFE.",
  },

  hero: {
    eyebrow: "Aktiviteter",
    title: "Aktiviteter og møteplasser",
    description:
      "Her kommer informasjon om kommende og tidligere aktiviteter, arrangementer og samlinger.",
    backgroundImages: pageHeroBackgroundImages,
  },

  activities: {
    header: {
      eyebrow: "Arrangementer",
      title: "Kommende og tidligere aktiviteter",
      description:
        "Denne seksjonen er klargjort for aktiviteter som senere kan administreres via admin, CMS eller Supabase.",
    },
    items: [
      {
        title: "Eksempelaktivitet",
        description:
          "Her kan NAKFE beskrive en aktivitet, et arrangement eller en møteplass.",
        startDate: "2026-09-01",
        location: "Sted kommer",
        category: "Fellesskap",
        status: "upcoming",
        accessibilityNote:
          "Her kan det stå praktisk informasjon om tilgjengelighet, språk, påmelding eller tilrettelegging.",
        registrationLink: {
          label: "Meld interesse",
          href: "/kontakt",
        },
        isFeatured: true,
      },
      {
        title: "Tidligere aktivitet",
        description:
          "Her kan organisasjonen vise frem tidligere arrangementer eller samlinger.",
        startDate: "2026-05-15",
        location: "Sted kommer",
        category: "Kultur",
        status: "past",
      },
    ],
    emptyState: {
      title: "Ingen aktiviteter publisert ennå",
      description:
        "Når aktiviteter legges inn, vil de vises her. Ta gjerne kontakt for mer informasjon.",
      action: {
        label: "Foreslå en aktivitet",
        href: "/kontakt",
      },
    },
  },
} satisfies ActivitiesPageContent;

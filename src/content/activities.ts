import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateActivitiesPageContent } from "@/lib/activities";
import type { ActivitiesPageContent } from "@/types/activities";
import type { LocalizedContent } from "@/types/locale";

const activitiesContentDraft = {
  seo: {
    title: "Aktiviteter",
    description:
      "Se publiserte aktiviteter og arrangementer fra Kvinner for Endring.",
  },

  hero: {
    eyebrow: "Aktiviteter",
    title: "Aktiviteter og arrangementer.",
    description:
      "Her publiserer Kvinner for Endring informasjon om aktiviteter når den er klar.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Aktiviteter",
      title: "Møteplasser og arrangementer.",
      description:
        "Publiserte aktiviteter vises her med praktisk informasjon om deltakelse.",
    },
    featuredHeading: "Neste aktivitet",
    upcomingHeading: "Flere aktiviteter",
    detailsActionLabel: "Se informasjon",
    detailsActionAriaLabelPrefix: "Se informasjon om",
    emptyState: {
      title: "Ingen kommende aktiviteter er publisert akkurat nå.",
      description:
        "Nye aktiviteter og arrangementer publiseres når informasjonen er klar. Ta kontakt med oss for mer informasjon.",
      action: {
        label: "Kontakt oss",
        href: "/kontakt",
        ariaLabel: "Kontakt Kvinner for Endring om aktiviteter",
      },
    },
  },

  detail: {
    backLinkLabel: "Aktiviteter",
    backLinkAriaLabel: "Tilbake til oversikten over aktiviteter",
    practicalInformationHeading: "Praktisk informasjon",
    dateAndTimeLabel: "Dato og tid",
    locationLabel: "Sted",
    formatLabel: "Format",
    audienceLabel: "Passer for",
    accessibilityLabel: "Tilrettelegging",
    registrationHeading: "Påmelding",
    relatedWorkLabel: "Les om det relaterte arbeidet",
    relatedWorkAriaLabelPrefix: "Les om det relaterte arbeidet",
    cancellationHeading: "Denne aktiviteten er avlyst",
    videoAriaLabelPrefix: "Video fra",
    videoFallbackText: "Nettleseren din støtter ikke videoavspilling.",
    formatLabels: {
      "in-person": "Fysisk oppmøte",
      digital: "Digitalt",
      hybrid: "Fysisk og digitalt",
    },
  },

  items: [],
} satisfies ActivitiesPageContent;

validateActivitiesPageContent(activitiesContentDraft);

export const activitiesContent = activitiesContentDraft;

const englishActivitiesContent = {
  seo: {
    title: "Activities",
    description:
      "View published activities and events from Women for Change.",
  },

  hero: {
    eyebrow: "Activities",
    title: "Activities and events.",
    description:
      "Women for Change publishes information about activities here when it is ready.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Activities",
      title: "Meeting places and events.",
      description:
        "Published activities appear here with practical information about participation.",
    },
    featuredHeading: "Next activity",
    upcomingHeading: "More activities",
    detailsActionLabel: "View information",
    detailsActionAriaLabelPrefix: "View information about",
    emptyState: {
      title: "No upcoming activities are currently published.",
      description:
        "New activities and events will be published when the information is ready. Contact us for more information.",
      action: {
        label: "Contact us",
        href: "/kontakt",
        ariaLabel: "Contact Women for Change about activities",
      },
    },
  },

  detail: {
    backLinkLabel: "Activities",
    backLinkAriaLabel: "Back to the activities overview",
    practicalInformationHeading: "Practical information",
    dateAndTimeLabel: "Date and time",
    locationLabel: "Location",
    formatLabel: "Format",
    audienceLabel: "Suitable for",
    accessibilityLabel: "Accessibility",
    registrationHeading: "Registration",
    relatedWorkLabel: "Read about the related work",
    relatedWorkAriaLabelPrefix: "Read about the related work",
    cancellationHeading: "This activity has been cancelled",
    videoAriaLabelPrefix: "Video from",
    videoFallbackText: "Your browser does not support video playback.",
    formatLabels: {
      "in-person": "In person",
      digital: "Online",
      hybrid: "In person and online",
    },
  },

  items: [],
} satisfies ActivitiesPageContent;

validateActivitiesPageContent(englishActivitiesContent);

export const activitiesContentByLocale = {
  no: activitiesContent,
  en: englishActivitiesContent,
} satisfies LocalizedContent<ActivitiesPageContent>;

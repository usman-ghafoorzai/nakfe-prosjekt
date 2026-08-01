import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { workContent, workContentByLocale } from "@/content/work";
import { validateActivitiesPageContent } from "@/lib/activities";
import type { ActivitiesPageContent } from "@/types/activities";
import type { LocalizedContent } from "@/types/locale";

const activitiesContentDraft = {
  seo: {
    title: "Aktiviteter",
    description:
      "Se kommende arrangementer, kurs og møteplasser i regi av NAKFE.",
  },

  hero: {
    eyebrow: "Aktiviteter",
    title: "Møteplasser, kurs og arrangementer.",
    description:
      "Her finner du kommende aktiviteter i regi av NAKFE og praktisk informasjon om hvordan du kan delta.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Kommende aktiviteter",
      title: "Finn neste møteplass.",
      description:
        "Se hva som skjer, hvor det er og hvordan du kan delta.",
    },
    featuredHeading: "Neste aktivitet",
    upcomingHeading: "Flere aktiviteter",
    detailsActionLabel: "Se informasjon",
    detailsActionAriaLabelPrefix: "Se informasjon om",
    emptyState: {
      title: "Ingen aktiviteter er publisert akkurat nå.",
      description:
        "Følg med videre, eller ta kontakt dersom du vil vite mer om kommende møteplasser og arrangementer.",
      action: {
        label: "Kontakt oss",
        href: "/kontakt",
        ariaLabel: "Kontakt NAKFE om kommende aktiviteter",
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

  // Bare publiser aktiviteter med bekreftet dato, tidspunkt, sted og innhold.
  // Det er bevisst ingen eksempler her: usanne arrangementer skal ikke vises på en offentlig side.
  items: [
    {
      slug: "kvinnekafe-og-informasjonskveld",
      title: "Kvinnekafé og informasjonskveld",
      summary:
        "En åpen kveld med samtale, enkel servering og informasjon om hvordan NAKFE arbeider med fellesskap og deltakelse i Norge.",
      startsAt: "2026-09-10T18:00:00+02:00",
      endsAt: "2026-09-10T20:30:00+02:00",
      timeZone: "Europe/Oslo",
      format: "in-person",
      publicationState: "scheduled",
      location: {
        name: "NAKFE, Oslo",
        address: "Oslo",
      },
      coverImage: {
        src: "/images/page-hero/fellesskap-kvinner.png",
        alt: "Illustrasjon av kvinner samlet i fellesskap",
        position: "center",
      },
      body: [
        {
          id: "intro",
          text: "Denne kvelden er laget for kvinner som ønsker å bli bedre kjent med NAKFE, møte andre deltakere og få informasjon om aktiviteter, fellesskap og muligheter videre.",
        },
        {
          id: "program",
          text: "Det blir kort presentasjon av organisasjonen, tid til spørsmål og samtaler i et rolig og inkluderende miljø.",
        },
      ],
      registration: {
        label: "Meld deg på",
        href: "/kontakt",
        ariaLabel: "Meld deg på kvinnekafé og informasjonskveld via kontaktsiden",
      },
      accessibilityNote:
        "Ta kontakt dersom du trenger språkstøtte eller annen tilrettelegging.",
      audience: "Kvinner som ønsker informasjon, fellesskap og nye møteplasser.",
    },
    {
      slug: "workshop-om-jobb-og-kompetanse",
      title: "Workshop om jobb og kompetanse",
      summary:
        "En praktisk samling om arbeid, kompetanse og veier videre for kvinner med minoritetsbakgrunn.",
      startsAt: "2026-10-03T17:30:00+02:00",
      endsAt: "2026-10-03T20:00:00+02:00",
      timeZone: "Europe/Oslo",
      format: "hybrid",
      publicationState: "scheduled",
      location: {
        name: "Oslo og digital deltakelse",
        address: "Oslo",
      },
      coverImage: {
        src: "/images/page-hero/arrangementer.png",
        alt: "Illustrasjon av kvinner samlet til et arrangement",
        position: "center 40%",
      },
      body: [
        {
          id: "tema",
          text: "Workshopen setter fokus på hvordan kvinner kan styrke kompetanse, utforske muligheter i arbeidslivet og få bedre oversikt over relevante steg videre.",
        },
        {
          id: "deltakelse",
          text: "Det blir innlegg, erfaringsdeling og rom for spørsmål både for dem som deltar fysisk og dem som følger digitalt.",
        },
      ],
      registration: {
        label: "Be om plass",
        href: "/kontakt",
        ariaLabel: "Be om plass på workshop om jobb og kompetanse via kontaktsiden",
      },
      accessibilityNote:
        "Digital deltakerlenke sendes etter påmelding. Ta kontakt ved behov for tilrettelegging.",
      audience:
        "Kvinner som ønsker mer kunnskap om arbeid, kompetanse og deltakelse.",
    },
  ],
} satisfies ActivitiesPageContent;

validateActivitiesPageContent(
  activitiesContentDraft,
  workContent.overview.items.map((project) => project.slug),
);

export const activitiesContent = activitiesContentDraft;

const englishActivitiesContent = {
  seo: {
    title: "Activities",
    description:
      "View upcoming events, courses and meeting places organised by NAKFE.",
  },

  hero: {
    eyebrow: "Activities",
    title: "Meeting places, courses and events.",
    description:
      "Here you will find upcoming NAKFE activities and practical information about how to participate.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Upcoming activities",
      title: "Find the next meeting place.",
      description:
        "See what is happening, where it takes place and how you can participate.",
    },
    featuredHeading: "Next activity",
    upcomingHeading: "More activities",
    detailsActionLabel: "View information",
    detailsActionAriaLabelPrefix: "View information about",
    emptyState: {
      title: "No activities are currently published.",
      description:
        "Check back later, or contact us if you would like to learn more about upcoming meeting places and events.",
      action: {
        label: "Contact us",
        href: "/kontakt",
        ariaLabel: "Contact NAKFE about upcoming activities",
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

  items: [
    {
      slug: "kvinnekafe-og-informasjonskveld",
      title: "Women's Café and Information Evening",
      summary:
        "An open evening with conversation, light refreshments and information about how NAKFE works with community and participation in Norway.",
      startsAt: "2026-09-10T18:00:00+02:00",
      endsAt: "2026-09-10T20:30:00+02:00",
      timeZone: "Europe/Oslo",
      format: "in-person",
      publicationState: "scheduled",
      location: {
        name: "NAKFE, Oslo",
        address: "Oslo",
      },
      coverImage: {
        src: "/images/page-hero/fellesskap-kvinner.png",
        alt: "Illustration of women gathered in a community",
        position: "center",
      },
      body: [
        {
          id: "intro",
          text: "This evening is for women who would like to get to know NAKFE better, meet other participants and learn about activities, community and further opportunities.",
        },
        {
          id: "program",
          text: "There will be a short presentation of the organisation, time for questions and conversations in a calm and inclusive environment.",
        },
      ],
      registration: {
        label: "Register",
        href: "/kontakt",
        ariaLabel: "Register for the women's café and information evening through the contact page",
      },
      accessibilityNote:
        "Contact us if you need language support or other accessibility arrangements.",
      audience:
        "Women seeking information, community and new meeting places.",
    },
    {
      slug: "workshop-om-jobb-og-kompetanse",
      title: "Workshop on Employment and Skills",
      summary:
        "A practical session about employment, skills and ways forward for women from minority backgrounds.",
      startsAt: "2026-10-03T17:30:00+02:00",
      endsAt: "2026-10-03T20:00:00+02:00",
      timeZone: "Europe/Oslo",
      format: "hybrid",
      publicationState: "scheduled",
      location: {
        name: "Oslo and online participation",
        address: "Oslo",
      },
      coverImage: {
        src: "/images/page-hero/arrangementer.png",
        alt: "Illustration of women gathered at an event",
        position: "center 40%",
      },
      body: [
        {
          id: "tema",
          text: "The workshop focuses on how women can strengthen their skills, explore opportunities in working life and gain a clearer overview of relevant next steps.",
        },
        {
          id: "deltakelse",
          text: "There will be presentations, shared experiences and time for questions for both in-person and online participants.",
        },
      ],
      registration: {
        label: "Request a place",
        href: "/kontakt",
        ariaLabel: "Request a place at the employment and skills workshop through the contact page",
      },
      accessibilityNote:
        "The online participation link will be sent after registration. Contact us if you need accessibility arrangements.",
      audience:
        "Women who want to learn more about employment, skills and participation.",
    },
  ],
} satisfies ActivitiesPageContent;

validateActivitiesPageContent(
  englishActivitiesContent,
  workContentByLocale.en.overview.items.map((project) => project.slug),
);

export const activitiesContentByLocale = {
  no: activitiesContent,
  en: englishActivitiesContent,
} satisfies LocalizedContent<ActivitiesPageContent>;

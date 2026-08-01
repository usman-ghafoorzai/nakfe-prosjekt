import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { workContent } from "@/content/work";
import { validateActivitiesPageContent } from "@/lib/activities";
import type { ActivitiesPageContent } from "@/types/activities";

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
      relatedWorkProjectSlug: "arbeid-og-jobbforhet",
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
      relatedWorkProjectSlug: "utdanning-og-kompetanseutvikling",
    },
  ],
} satisfies ActivitiesPageContent;

validateActivitiesPageContent(
  activitiesContentDraft,
  workContent.overview.items.map((project) => project.slug),
);

export const activitiesContent = activitiesContentDraft;

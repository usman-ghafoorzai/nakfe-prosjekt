import {
  activityFormats,
  activityPublicationStates,
  activityTimeZones,
  type ActivityContent,
  type ActivityFormat,
  type ActivityPublicationState,
  type ActivitiesPageContent,
} from "@/types/activities";
import {
  defaultLocale,
  getIntlLocale,
  type Locale,
} from "@/types/locale";

function isNonEmptyString(value: string | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function getDate(value: string): Date | undefined {
  const parsedDate = new Date(value);

  return Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate;
}

function hasExplicitTimeZoneOffset(value: string): boolean {
  return /(?:Z|[+-]\d{2}:\d{2})$/.test(value);
}

function isSameCalendarDay(
  first: Date,
  second: Date,
  timeZone: string,
): boolean {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  });

  return formatter.format(first) === formatter.format(second);
}

export function isActivityFormat(value: unknown): value is ActivityFormat {
  return (
    typeof value === "string" &&
    (activityFormats as readonly string[]).includes(value)
  );
}

export function isActivityPublicationState(
  value: unknown,
): value is ActivityPublicationState {
  return (
    typeof value === "string" &&
    (activityPublicationStates as readonly string[]).includes(value)
  );
}

export function getActivityBySlug(
  activities: readonly ActivityContent[],
  slug: string,
): ActivityContent | undefined {
  return activities.find((activity) => activity.slug === slug);
}

export function getActivityHref(slug: string): string {
  return `/aktiviteter/${encodeURIComponent(slug)}`;
}

export function getPublicActivities(
  activities: readonly ActivityContent[],
  now = new Date(),
): ActivityContent[] {
  return activities
    .filter((activity) => {
      if (activity.publicationState !== "scheduled") {
        return false;
      }

      const endsAt = getDate(activity.endsAt);

      return Boolean(endsAt && endsAt.getTime() >= now.getTime());
    })
    .toSorted((first, second) => {
      const firstStart = getDate(first.startsAt)?.getTime() ?? Number.MAX_SAFE_INTEGER;
      const secondStart = getDate(second.startsAt)?.getTime() ?? Number.MAX_SAFE_INTEGER;

      return firstStart - secondStart;
    });
}

export function formatActivityDateDetails(
  activity: ActivityContent,
  locale: Locale = defaultLocale,
) {
  const startsAt = getDate(activity.startsAt);
  const endsAt = getDate(activity.endsAt);

  if (!startsAt || !endsAt) {
    const datePending = locale === "en" ? "Date to be announced" : "Dato kommer";
    const timePending = locale === "en" ? "Time to be announced" : "Tid kommer";

    return {
      day: "–",
      month: datePending,
      dateAndTime: datePending,
      timeRange: timePending,
    };
  }

  const intlLocale = getIntlLocale(locale);
  const timeFormatter = new Intl.DateTimeFormat(intlLocale, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: activity.timeZone,
  });
  const fullDateFormatter = new Intl.DateTimeFormat(intlLocale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: activity.timeZone,
  });
  const shortDateFormatter = new Intl.DateTimeFormat(intlLocale, {
    day: "2-digit",
    month: "short",
    timeZone: activity.timeZone,
  });
  const dayFormatter = new Intl.DateTimeFormat(intlLocale, {
    day: "2-digit",
    timeZone: activity.timeZone,
  });
  const monthFormatter = new Intl.DateTimeFormat(intlLocale, {
    month: "short",
    timeZone: activity.timeZone,
  });

  const sameDay = isSameCalendarDay(startsAt, endsAt, activity.timeZone);
  const startTime = timeFormatter.format(startsAt);
  const endTime = timeFormatter.format(endsAt);
  const timeRange = sameDay
    ? `${startTime}–${endTime}`
    : `${shortDateFormatter.format(startsAt)} ${startTime} – ${shortDateFormatter.format(endsAt)} ${endTime}`;

  return {
    day: dayFormatter.format(startsAt),
    month: monthFormatter
      .format(startsAt)
      .replace(".", "")
      .toLocaleUpperCase(intlLocale),
    dateAndTime: `${fullDateFormatter.format(startsAt)} · ${timeRange}`,
    timeRange,
  };
}

export function getActivityEventJsonLd(
  activity: ActivityContent,
  locale: Locale = defaultLocale,
) {
  const attendanceMode: Record<ActivityFormat, string> = {
    "in-person": "https://schema.org/OfflineEventAttendanceMode",
    digital: "https://schema.org/OnlineEventAttendanceMode",
    hybrid: "https://schema.org/MixedEventAttendanceMode",
  };

  const event: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: activity.title,
    description: activity.summary,
    inLanguage: locale,
    startDate: activity.startsAt,
    endDate: activity.endsAt,
    eventAttendanceMode: attendanceMode[activity.format],
    eventStatus:
      activity.publicationState === "cancelled"
        ? "https://schema.org/EventCancelled"
        : "https://schema.org/EventScheduled",
  };

  if (activity.location) {
    event.location = {
      "@type": "Place",
      name: activity.location.name,
      ...(activity.location.address
        ? { address: activity.location.address }
        : {}),
    };
  }

  return event;
}

export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function validateActivitiesPageContent(
  content: ActivitiesPageContent,
  relatedWorkProjectSlugs: readonly string[] = [],
): void {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const relatedWorkSlugs = new Set(relatedWorkProjectSlugs);

  if (!isNonEmptyString(content.overview.featuredHeading)) {
    errors.push("overview.featuredHeading kan ikke være tom.");
  }

  if (!isNonEmptyString(content.overview.upcomingHeading)) {
    errors.push("overview.upcomingHeading kan ikke være tom.");
  }

  if (!isNonEmptyString(content.overview.detailsActionLabel)) {
    errors.push("overview.detailsActionLabel kan ikke være tom.");
  }

  if (!isNonEmptyString(content.overview.detailsActionAriaLabelPrefix)) {
    errors.push("overview.detailsActionAriaLabelPrefix kan ikke være tom.");
  }

  if (!isNonEmptyString(content.overview.emptyState.title)) {
    errors.push("overview.emptyState.title kan ikke være tom.");
  }

  const detailTextFields = [
    ["detail.backLinkLabel", content.detail.backLinkLabel],
    ["detail.backLinkAriaLabel", content.detail.backLinkAriaLabel],
    ["detail.practicalInformationHeading", content.detail.practicalInformationHeading],
    ["detail.dateAndTimeLabel", content.detail.dateAndTimeLabel],
    ["detail.locationLabel", content.detail.locationLabel],
    ["detail.formatLabel", content.detail.formatLabel],
    ["detail.audienceLabel", content.detail.audienceLabel],
    ["detail.accessibilityLabel", content.detail.accessibilityLabel],
    ["detail.registrationHeading", content.detail.registrationHeading],
    ["detail.relatedWorkLabel", content.detail.relatedWorkLabel],
    ["detail.relatedWorkAriaLabelPrefix", content.detail.relatedWorkAriaLabelPrefix],
    ["detail.cancellationHeading", content.detail.cancellationHeading],
    ["detail.videoAriaLabelPrefix", content.detail.videoAriaLabelPrefix],
  ] as const;

  for (const [field, value] of detailTextFields) {
    if (!isNonEmptyString(value)) {
      errors.push(`${field} kan ikke være tom.`);
    }
  }

  for (const [format, label] of Object.entries(content.detail.formatLabels)) {
    if (!isActivityFormat(format) || !isNonEmptyString(label)) {
      errors.push(`detail.formatLabels har en ugyldig eller tom label for "${format}".`);
    }
  }

  for (const format of activityFormats) {
    if (!isNonEmptyString(content.detail.formatLabels[format])) {
      errors.push(`detail.formatLabels mangler label for "${format}".`);
    }
  }

  for (const activity of content.items) {
    const reference = activity.slug || "uten-slug";
    const startsAt = getDate(activity.startsAt);
    const endsAt = getDate(activity.endsAt);

    if (!isNonEmptyString(activity.slug)) {
      errors.push("En aktivitet mangler slug.");
    } else if (slugs.has(activity.slug)) {
      errors.push(`Aktivitetssluggen "${activity.slug}" er ikke unik.`);
    }

    slugs.add(activity.slug);

    if (!isNonEmptyString(activity.title)) {
      errors.push(`Aktiviteten "${reference}" mangler tittel.`);
    }

    if (!isNonEmptyString(activity.summary)) {
      errors.push(`Aktiviteten "${reference}" mangler introduksjon.`);
    }

    if (!startsAt || !hasExplicitTimeZoneOffset(activity.startsAt)) {
      errors.push(`Aktiviteten "${reference}" har et ugyldig startsAt-tidspunkt med tidssone.`);
    }

    if (!endsAt || !hasExplicitTimeZoneOffset(activity.endsAt)) {
      errors.push(`Aktiviteten "${reference}" har et ugyldig endsAt-tidspunkt med tidssone.`);
    }

    if (startsAt && endsAt && endsAt.getTime() <= startsAt.getTime()) {
      errors.push(`Aktiviteten "${reference}" må slutte etter at den starter.`);
    }

    if (!(activityTimeZones as readonly string[]).includes(activity.timeZone)) {
      errors.push(`Aktiviteten "${reference}" har en ugyldig tidssone.`);
    }

    if (!isActivityFormat(activity.format)) {
      errors.push(`Aktiviteten "${reference}" har et ugyldig format.`);
    }

    if (!isActivityPublicationState(activity.publicationState)) {
      errors.push(`Aktiviteten "${reference}" har en ugyldig publiseringsstatus.`);
    }

    if (
      (activity.format === "in-person" || activity.format === "hybrid") &&
      !activity.location
    ) {
      errors.push(`Aktiviteten "${reference}" mangler sted for fysisk oppmøte.`);
    }

    if (activity.location) {
      if (!isNonEmptyString(activity.location.name)) {
        errors.push(`Aktiviteten "${reference}" har sted uten navn.`);
      }

      if (activity.location.directionsLink) {
        if (!isNonEmptyString(activity.location.directionsLink.label)) {
          errors.push(`Aktiviteten "${reference}" har kartlenke uten label.`);
        }

        if (!isNonEmptyString(activity.location.directionsLink.href)) {
          errors.push(`Aktiviteten "${reference}" har kartlenke uten href.`);
        }
      }
    }

    if (activity.coverImage) {
      if (!isNonEmptyString(activity.coverImage.src)) {
        errors.push(`Aktiviteten "${reference}" har cover-bilde uten src.`);
      }

      if (!isNonEmptyString(activity.coverImage.alt)) {
        errors.push(`Aktiviteten "${reference}" har cover-bilde uten alt-tekst.`);
      }
    }

    if (activity.body.length === 0) {
      errors.push(`Aktiviteten "${reference}" mangler brødtekst.`);
    }

    const blockIds = new Set<string>();

    for (const block of activity.body) {
      if (!isNonEmptyString(block.id)) {
        errors.push(`Aktiviteten "${reference}" har tekstblokk uten id.`);
      } else if (blockIds.has(block.id)) {
        errors.push(`Aktiviteten "${reference}" har duplisert tekstblokk-id "${block.id}".`);
      }

      blockIds.add(block.id);

      if (!isNonEmptyString(block.text)) {
        errors.push(`Aktiviteten "${reference}" har tom tekstblokk${block.id ? ` "${block.id}"` : ""}.`);
      }
    }

    if (activity.registration) {
      if (!isNonEmptyString(activity.registration.label)) {
        errors.push(`Aktiviteten "${reference}" har påmeldingslenke uten label.`);
      }

      if (!isNonEmptyString(activity.registration.href)) {
        errors.push(`Aktiviteten "${reference}" har påmeldingslenke uten href.`);
      }
    }

    if (
      activity.publicationState === "cancelled" &&
      !isNonEmptyString(activity.cancellationMessage)
    ) {
      errors.push(`Den avlyste aktiviteten "${reference}" mangler cancellationMessage.`);
    }

    if (
      activity.relatedWorkProjectSlug &&
      relatedWorkSlugs.size > 0 &&
      !relatedWorkSlugs.has(activity.relatedWorkProjectSlug)
    ) {
      errors.push(`Aktiviteten "${reference}" peker på et ukjent prosjekt under Vårt arbeid.`);
    }

    if (activity.video) {
      if (!isNonEmptyString(activity.video.src)) {
        errors.push(`Aktiviteten "${reference}" har video uten src.`);
      }

      if (!isNonEmptyString(activity.video.poster.src)) {
        errors.push(`Aktiviteten "${reference}" har video uten poster.`);
      }

      if (!isNonEmptyString(activity.video.poster.alt)) {
        errors.push(`Aktiviteten "${reference}" har video-poster uten alt-tekst.`);
      }

      if (activity.video.captionsSrc && !isNonEmptyString(activity.video.captionsLabel)) {
        errors.push(`Aktiviteten "${reference}" har teksting uten captionsLabel.`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Ugyldig innhold for Aktiviteter:\n- ${errors.join("\n- ")}`);
  }
}

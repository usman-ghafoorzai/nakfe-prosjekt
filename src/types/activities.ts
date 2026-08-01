import type {
  ContentImage,
  ContentLink,
  ContentVideo,
  EmptyStateContent,
  PageHeroContent,
  SectionHeaderContent,
  SeoContent,
} from "@/types/common";

export const activityFormats = ["in-person", "digital", "hybrid"] as const;

export type ActivityFormat = (typeof activityFormats)[number];

export const activityPublicationStates = ["scheduled", "cancelled"] as const;

export type ActivityPublicationState =
  (typeof activityPublicationStates)[number];

export const activityTimeZones = ["Europe/Oslo"] as const;

export type ActivityTimeZone = (typeof activityTimeZones)[number];

export type ActivityBodyBlock = {
  id: string;
  text: string;
};

export type ActivityLocationContent = {
  name: string;
  address?: string;
  directionsLink?: ContentLink;
};

export type ActivityContent = {
  slug: string;
  title: string;
  summary: string;
  startsAt: string;
  endsAt: string;
  timeZone: ActivityTimeZone;
  format: ActivityFormat;
  publicationState: ActivityPublicationState;
  location?: ActivityLocationContent;
  coverImage?: ContentImage;
  body: ActivityBodyBlock[];
  registration?: ContentLink;
  accessibilityNote?: string;
  audience?: string;
  cancellationMessage?: string;
  relatedWorkProjectSlug?: string;
  video?: ContentVideo;
};

export type ActivityListContent = {
  header: SectionHeaderContent;
  featuredHeading: string;
  upcomingHeading: string;
  detailsActionLabel: string;
  detailsActionAriaLabelPrefix: string;
  emptyState: EmptyStateContent;
};

export type ActivityDetailContent = {
  backLinkLabel: string;
  backLinkAriaLabel: string;
  practicalInformationHeading: string;
  dateAndTimeLabel: string;
  locationLabel: string;
  formatLabel: string;
  audienceLabel: string;
  accessibilityLabel: string;
  registrationHeading: string;
  relatedWorkLabel: string;
  relatedWorkAriaLabelPrefix: string;
  cancellationHeading: string;
  videoAriaLabelPrefix: string;
  formatLabels: Record<ActivityFormat, string>;
};

export type ActivitiesPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  overview: ActivityListContent;
  detail: ActivityDetailContent;
  items: ActivityContent[];
};

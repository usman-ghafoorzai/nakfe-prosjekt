export type ContentImage = {
  src: string;
  alt: string;
  position?: string;
  caption?: string;
  credit?: string;
  isDecorative?: boolean;
};

export type ContentLink = {
  label: string;
  href: string;
  ariaLabel?: string;
  isExternal?: boolean;
};

export type SeoContent = {
  title: string;
  description: string;
  image?: ContentImage;
};

export type SectionHeaderContent = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type PageHeroContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImages?: ContentImage[];
  image?: ContentImage;
  primaryAction?: ContentLink;
  secondaryAction?: ContentLink;
};

export type CtaSectionContent = {
  title: string;
  description?: string;
  primaryAction?: ContentLink;
  secondaryAction?: ContentLink;
  image?: ContentImage;
};

export type EmptyStateContent = {
  title: string;
  description?: string;
  action?: ContentLink;
};

export type HomeHeroContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  rotatingWords?: string[];
  backgroundImage: ContentImage;
  primaryAction?: ContentLink;
  secondaryAction?: ContentLink;
};

export type CitationContent = {
  label: string;
  text: string;
  href: string;
};

export type ImpactStatisticContent = {
  value: string;
  label: string;
  description: string;
  barLabel?: string;
  barValue?: number;
};

export type ImpactBriefSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ContentLink;
  secondaryAction: {
    label: string;
    ariaLabel?: string;
  };
  highlights: ImpactStatisticContent[];
  statisticsDialog: {
    title: string;
    description: string;
    statistics: ImpactStatisticContent[];
    citations: CitationContent[];
  };
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  showInHeader: boolean;
  showInFooter: boolean;
  order: number;
};

export type FooterContent = {
  organization: {
    name: string;
    description: string;
    logo: ContentImage;
  };
  navigationTitle: string;
  contactTitle: string;
  contactLink: ContentLink;
  contactDescription: string;
  copyright: {
    owner: string;
    rightsText: string;
  };
  developerCredit?: ContentLink;
  qualityNote?: string;
};

export type TextSectionVisualContent = {
  tone?: "warm" | "sage" | "neutral";
  imagePlacement?: "start" | "end";
};

export type TextSectionContent = {
  header: SectionHeaderContent;
  body: string[];
  image?: ContentImage;
  action?: ContentLink;
  visual?: TextSectionVisualContent;
};

export type PurposeContextContent = {
  id: string;
  label: string;
  description: string;
  highlights: string[];
};

export type PurposeSectionContent = {
  header: SectionHeaderContent;
  contexts: PurposeContextContent[];
  image: ContentImage;
};

export type CardItemContent = {
  eyebrow?: string;
  title: string;
  description: string;
  meta?: string;
  image?: ContentImage;
  action?: ContentLink;
};

export type CardGridSectionContent = {
  header: SectionHeaderContent;
  items: CardItemContent[];
  variant?: "editorial" | "compact";
};

export type ValueMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      position?: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      alt: string;
      position?: string;
    };

export type ValueShowcaseItemContent = {
  title: string;
  description: string;
  media: ValueMedia;
};

export type ValueShowcaseSectionContent = {
  header: SectionHeaderContent;
  items: ValueShowcaseItemContent[];
};

export type AboutPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  purpose: PurposeSectionContent;
  values: ValueShowcaseSectionContent;
};

export type ContentVideo = {
  src: string;
  poster: ContentImage;
  captionsSrc?: string;
  captionsLabel?: string;
  captionsLanguage?: string;
  captionsDefault?: boolean;
};

export const workCountries = ["afghanistan", "norway"] as const;

export type WorkCountry = (typeof workCountries)[number];

export type WorkProjectBodyBlock = {
  id: string;
  text: string;
};

export type WorkProjectVideoContent = ContentVideo;

export type WorkProjectContent = {
  slug: string;
  country: WorkCountry;
  title: string;
  summary: string;
  coverImage: ContentImage;
  body: WorkProjectBodyBlock[];
  video?: WorkProjectVideoContent;
};

export type WorkCountryFilterContent = {
  id: WorkCountry;
  label: string;
  emptyState: EmptyStateContent;
};

export type WorkProjectListContent = {
  header: SectionHeaderContent;
  countryNavigationLabel: string;
  defaultCountry: WorkCountry;
  filters: WorkCountryFilterContent[];
  items: WorkProjectContent[];
};

export type WorkProjectDetailContent = {
  backLinkLabel: string;
  backLinkAriaLabel: string;
  videoAriaLabelPrefix: string;
};

export type WorkPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  overview: WorkProjectListContent;
  detail: WorkProjectDetailContent;
};

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

export type FaqAnswerParagraph = {
  id: string;
  text: string;
};

export type FaqAnswerContent = {
  paragraphs: FaqAnswerParagraph[];
  action?: ContentLink;
};

export type FaqItemContent = {
  id: string;
  question: string;
  answer: FaqAnswerContent;
  /**
   * Metadata for future CMS search and RAG retrieval.
   * Keywords are deliberately not rendered as UI tags.
   */
  keywords?: string[];
  /**
   * Date-only value in YYYY-MM-DD format. Render through a formatter,
   * never directly as raw metadata.
   */
  lastReviewedAt?: string;
};

export type FaqCategoryContent = {
  id: string;
  title: string;
  description?: string;
  items: FaqItemContent[];
};

export type FaqContactCtaContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  action: ContentLink;
};

export type FaqSectionContent = {
  header: SectionHeaderContent;
  categories: FaqCategoryContent[];
  emptyState: EmptyStateContent;
  contactCta?: FaqContactCtaContent;
  reviewedAtLabel?: string;
};

export type FaqPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  faq: FaqSectionContent;
};

export const contactMethodKinds = [
  "email",
  "phone",
  "address",
  "other",
] as const;

export type ContactMethodKind = (typeof contactMethodKinds)[number];

export type ContactMethodContent = {
  id: string;
  kind: ContactMethodKind;
  label: string;
  value: string;
  href?: string;
  ariaLabel?: string;
  description?: string;
};

export type ContactSocialSectionContent = {
  title: string;
  description?: string;
  links: ContentLink[];
};

export type ContactSectionContent = {
  header: SectionHeaderContent;
  methods: ContactMethodContent[];
  social?: ContactSocialSectionContent;
  availabilityNote?: string;
  emptyState: EmptyStateContent;
};

export type ContactPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  contact: ContactSectionContent;
};

export type HomePageContent = {
  seo: SeoContent;
  hero: HomeHeroContent;
  impactBrief: ImpactBriefSectionContent;
  intro: TextSectionContent;
  featuredAreas: CardGridSectionContent;
  finalCta: CtaSectionContent;
};

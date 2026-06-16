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
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: ContentImage;
  primaryAction: ContentLink;
  secondaryAction: ContentLink;
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

export type TextSectionContent = {
  header: SectionHeaderContent;
  body: string[];
  image?: ContentImage;
  action?: ContentLink;
};

export type CardItemContent = {
  title: string;
  description: string;
  action?: ContentLink;
};

export type CardGridSectionContent = {
  header: SectionHeaderContent;
  items: CardItemContent[];
};

export type ValueShowcaseItemContent = {
  title: string;
  description: string;
  image: ContentImage;
};

export type ValueShowcaseSectionContent = {
  header: SectionHeaderContent;
  items: ValueShowcaseItemContent[];
};

export type AboutPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  intro: TextSectionContent;
  values: ValueShowcaseSectionContent;
};

export type ProjectsPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  projects: CardGridSectionContent;
};

export type ActivityStatus = "upcoming" | "past" | "cancelled";

export type ActivityItemContent = {
  title: string;
  description: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  category?: string;
  status: ActivityStatus;
  registrationLink?: ContentLink;
  accessibilityNote?: string;
  image?: ContentImage;
  isFeatured?: boolean;
};

export type ActivitySectionContent = {
  header: SectionHeaderContent;
  items: ActivityItemContent[];
  emptyState: EmptyStateContent;
};

export type ActivitiesPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  activities: ActivitySectionContent;
};

export type FaqItemContent = {
  question: string;
  answer: string;
  tags?: string[];
  lastReviewedAt?: string;
};

export type FaqCategoryContent = {
  title: string;
  description?: string;
  items: FaqItemContent[];
};

export type FaqPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  categories: FaqCategoryContent[];
  contactCta?: CtaSectionContent;
};

export type ContactMethodContent = {
  label: string;
  value: string;
  href?: string;
  description?: string;
};

export type SocialLinkContent = {
  label: string;
  href?: string;
  ariaLabel?: string;
};

export type ContactSectionContent = {
  header: SectionHeaderContent;
  methods: ContactMethodContent[];
  socialLinks: SocialLinkContent[];
  finalNote?: string;
};

export type ContactPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  contact: ContactSectionContent;
};

export type HomePageContent = {
  seo: SeoContent;
  hero: HomeHeroContent;
  intro: TextSectionContent;
  featuredAreas: CardGridSectionContent;
  finalCta: CtaSectionContent;
};

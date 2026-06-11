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

export type AboutPageContent = {
  seo: SeoContent;
  hero: PageHeroContent;
  intro: TextSectionContent;
};
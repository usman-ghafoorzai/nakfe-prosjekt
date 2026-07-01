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

export type ContentVideo = {
  src: string;
  poster: ContentImage;
  captionsSrc?: string;
  captionsLabel?: string;
  captionsLanguage?: string;
  captionsDefault?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  showInHeader: boolean;
  showInFooter: boolean;
  order: number;
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

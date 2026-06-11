export type ContentLink = {
  label: string;
  href: string;
};

export type HeroBackgroundImage = {
  src: string;
  alt: string;
  position: string;
};

export type HomeHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ContentLink;
  secondaryAction: ContentLink;
  highlightsLabel: string;
  highlights: string[];
  note: string;
  backgroundImage: HeroBackgroundImage;
};

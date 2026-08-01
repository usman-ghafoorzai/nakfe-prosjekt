import type {
  CardGridSectionContent,
  ContentImage,
  ContentLink,
  CtaSectionContent,
  SeoContent,
  TextSectionContent,
} from "@/types/common";

export type HomeHeroContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  rotatingWordsLabel: string;
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
    eyebrow: string;
    title: string;
    description: string;
    educationHeading: string;
    citationsHeading: string;
    closeLabel: string;
    percentageLabel: string;
    statistics: ImpactStatisticContent[];
    citations: CitationContent[];
  };
};

export type HomePageContent = {
  seo: SeoContent;
  hero: HomeHeroContent;
  impactBrief: ImpactBriefSectionContent;
  intro: TextSectionContent;
  featuredAreas: CardGridSectionContent;
  finalCta: CtaSectionContent;
};

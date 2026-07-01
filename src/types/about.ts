import type {
  ContentImage,
  PageHeroContent,
  SectionHeaderContent,
  SeoContent,
} from "@/types/common";

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

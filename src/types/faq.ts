import type {
  ContentLink,
  EmptyStateContent,
  PageHeroContent,
  SectionHeaderContent,
  SeoContent,
} from "@/types/common";

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
  keywords?: string[];
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

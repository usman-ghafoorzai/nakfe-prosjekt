import type {
  ContentImage,
  ContentVideo,
  EmptyStateContent,
  PageHeroContent,
  SectionHeaderContent,
  SeoContent,
} from "@/types/common";

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

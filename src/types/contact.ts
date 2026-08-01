import type {
  ContentLink,
  EmptyStateContent,
  PageHeroContent,
  SectionHeaderContent,
  SeoContent,
} from "@/types/common";

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

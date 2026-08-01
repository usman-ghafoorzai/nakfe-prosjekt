import type { ContentImage, ContentLink } from "@/types/common";

export type FooterContent = {
  organization: {
    name: string;
    description: string;
    logo: ContentImage;
  };
  homeAriaLabel: string;
  navigationTitle: string;
  contactTitle: string;
  contactLink: ContentLink;
  contactDescription: string;
  copyright: {
    owner: string;
    rightsText: string;
  };
  developerCreditPrefix: string;
  developerCredit?: ContentLink;
  qualityNote?: string;
};

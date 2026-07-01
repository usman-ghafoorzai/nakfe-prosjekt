import type { ContentImage, ContentLink } from "@/types/common";

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

import type { LocalizedContent } from "@/types/locale";

type SiteContent = {
  description: string;
};

export const siteContent = {
  no: {
    description:
      "Kvinner for Endring styrker kvinner gjennom utdanning, arbeid, entreprenørskap og fellesskap i Norge og Afghanistan.",
  },
  en: {
    description:
      "Women for Change empowers women through education, employment, entrepreneurship and community in Norway and Afghanistan.",
  },
} satisfies LocalizedContent<SiteContent>;

import type { LocalizedContent } from "@/types/locale";

type SiteContent = {
  titleSuffix: string;
  description: string;
};

export const siteContent = {
  no: {
    titleSuffix: "Kvinner for Endring",
    description:
      "Kvinner for Endring styrker kvinner gjennom utdanning, arbeid, entreprenørskap og fellesskap i Norge og Afghanistan.",
  },
  en: {
    titleSuffix: "Women for Change",
    description:
      "Women for Change empowers women through education, employment, entrepreneurship and community in Norway and Afghanistan.",
  },
} satisfies LocalizedContent<SiteContent>;

import type { LocalizedContent } from "@/types/locale";

type SiteContent = {
  description: string;
};

export const siteContent = {
  no: {
    description: "Nettside for NAKFE med planlagt RAG-basert chatbot.",
  },
  en: {
    description: "Website for NAKFE with a planned RAG-based chatbot.",
  },
} satisfies LocalizedContent<SiteContent>;

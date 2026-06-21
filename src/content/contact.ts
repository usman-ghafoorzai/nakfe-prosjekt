import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateContactPageContent } from "@/lib/contact";
import type { ContactPageContent } from "@/types/content";

/**
 * Contact details are intentionally empty until NAKFE has approved the public
 * channels. Add only information that the organisation wants to publish.
 */
const contactContentDraft = {
  seo: {
    title: "Kontakt",
    description:
      "Kontakt NAKFE for spørsmål om organisasjonen, samarbeid eller aktiviteter.",
  },

  hero: {
    eyebrow: "Kontakt",
    title: "Ta kontakt",
    description:
      "Har du spørsmål om NAKFE, samarbeid eller aktiviteter? Her finner du organisasjonens offentlige kontaktkanaler.",
    backgroundImages: pageHeroBackgroundImages,
  },

  contact: {
    header: {
      eyebrow: "Kontakt",
      title: "Vi hører gjerne fra deg",
      description:
        "Kontaktinformasjon publiseres her når kanalene er kvalitetssikret og klare for offentlig bruk.",
    },
    methods: [],
    emptyState: {
      title: "Kontaktinformasjon oppdateres",
      description:
        "Vi oppdaterer siden så snart NAKFEs offentlige kontaktkanaler er klare.",
    },
  },
} satisfies ContactPageContent;

validateContactPageContent(contactContentDraft);

export const contactContent = contactContentDraft;

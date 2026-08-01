import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateContactPageContent } from "@/lib/contact";
import type { ContactPageContent } from "@/types/contact";
import type { LocalizedContent } from "@/types/locale";

const contactContentDraft = {
  seo: {
    title: "Kontakt",
    description:
      "Kontakt Kvinner for Endring på e-post, telefon eller gjennom organisasjonens sosiale medier.",
  },

  hero: {
    eyebrow: "Kontakt",
    title: "Ta kontakt med Kvinner for Endring.",
    description:
      "Her finner du organisasjonens offentlige kontaktkanaler for spørsmål, støtte og samarbeid.",
    backgroundImages: pageHeroBackgroundImages,
  },

  contact: {
    header: {
      eyebrow: "Kontakt",
      title: "Kontaktinformasjon",
      description:
        "Du kan kontakte Kvinner for Endring på e-post eller telefon og følge arbeidet i sosiale medier.",
    },
    methods: [
      {
        id: "general-email",
        kind: "email",
        label: "E-post",
        value: "post@nakfe.no",
        href: "mailto:post@nakfe.no",
        ariaLabel: "Send e-post til Kvinner for Endring",
        description:
          "Bruk denne adressen for spørsmål, støtte eller samarbeid.",
      },
      {
        id: "phone",
        kind: "phone",
        label: "Telefon",
        value: "+47 954 69 859",
        href: "tel:+4795469859",
        ariaLabel: "Ring Kvinner for Endring",
        description:
          "Ring oss dersom du ønsker å komme i direkte kontakt med organisasjonen.",
      },
    ],
    social: {
      title: "Sosiale medier",
      description:
        "Følg Kvinner for Endring for oppdateringer fra arbeidet i Norge og Afghanistan.",
      links: [
        {
          label: "Facebook",
          href: "https://www.facebook.com/Kvinnerforendring/",
          ariaLabel: "Besøk Kvinner for Endring på Facebook",
          isExternal: true,
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/nakfe.no/",
          ariaLabel: "Besøk Kvinner for Endring på Instagram",
          isExternal: true,
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/afghan-norwegian-women-for-change/posts/?feedView=all",
          ariaLabel: "Besøk Kvinner for Endring på LinkedIn",
          isExternal: true,
        },
      ],
    },
    emptyState: {
      title: "Ingen kontaktkanaler er publisert.",
      description:
        "Kontaktinformasjon er ikke tilgjengelig akkurat nå.",
    },
  },
} satisfies ContactPageContent;

validateContactPageContent(contactContentDraft);

export const contactContent = contactContentDraft;

const englishContactContent = {
  seo: {
    title: "Contact",
    description:
      "Contact Women for Change by email, phone or through the organisation's social media channels.",
  },

  hero: {
    eyebrow: "Contact",
    title: "Contact Women for Change.",
    description:
      "Here you will find the organisation's public contact channels for questions, support and collaboration.",
    backgroundImages: pageHeroBackgroundImages,
  },

  contact: {
    header: {
      eyebrow: "Contact",
      title: "Contact information",
      description:
        "You can contact Women for Change by email or phone and follow the work on social media.",
    },
    methods: [
      {
        id: "general-email",
        kind: "email",
        label: "Email",
        value: "post@nakfe.no",
        href: "mailto:post@nakfe.no",
        ariaLabel: "Send an email to Women for Change",
        description:
          "Use this address for questions, support or collaboration.",
      },
      {
        id: "phone",
        kind: "phone",
        label: "Phone",
        value: "+47 954 69 859",
        href: "tel:+4795469859",
        ariaLabel: "Call Women for Change",
        description:
          "Call us if you would like to speak directly with the organisation.",
      },
    ],
    social: {
      title: "Social media",
      description:
        "Follow Women for Change for updates from the work in Norway and Afghanistan.",
      links: [
        {
          label: "Facebook",
          href: "https://www.facebook.com/Kvinnerforendring/",
          ariaLabel: "Visit Women for Change on Facebook",
          isExternal: true,
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/nakfe.no/",
          ariaLabel: "Visit Women for Change on Instagram",
          isExternal: true,
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/afghan-norwegian-women-for-change/posts/?feedView=all",
          ariaLabel: "Visit Women for Change on LinkedIn",
          isExternal: true,
        },
      ],
    },
    emptyState: {
      title: "No contact channels are published.",
      description:
        "Contact information is not available at the moment.",
    },
  },
} satisfies ContactPageContent;

validateContactPageContent(englishContactContent);

export const contactContentByLocale = {
  no: contactContent,
  en: englishContactContent,
} satisfies LocalizedContent<ContactPageContent>;

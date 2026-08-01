import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateContactPageContent } from "@/lib/contact";
import type { ContactPageContent } from "@/types/contact";
import type { LocalizedContent } from "@/types/locale";

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
      title: "Kontaktkanaler",
      description:
        "Her finner du NAKFEs offentlige kontaktkanaler for spørsmål, samarbeid og aktiviteter.",
    },
    methods: [
      {
        id: "general-email",
        kind: "email",
        label: "E-post",
        value: "kontakt@nakfe.no",
        href: "mailto:kontakt@nakfe.no",
        ariaLabel: "Send e-post til NAKFE",
        description:
          "Bruk denne adressen for generelle spørsmål om organisasjonen, aktiviteter eller samarbeid.",
      },
      {
        id: "phone",
        kind: "phone",
        label: "Telefon",
        value: "+47 40 00 00 00",
        href: "tel:+4740000000",
        ariaLabel: "Ring NAKFE",
        description:
          "Telefonen kan brukes til korte henvendelser i åpningstiden på hverdager.",
      },
      {
        id: "office-address",
        kind: "address",
        label: "Adresse",
        value: "Storgata 10, 0155 Oslo",
        description:
          "Midlertidig besøksadresse brukt som eksempelinnhold til kontaktsiden.",
      },
    ],
    social: {
      title: "Sosiale medier",
      description:
        "Du kan også følge organisasjonen i sosiale kanaler for oppdateringer og arrangementer.",
      links: [
        {
          label: "Instagram",
          href: "https://instagram.com/nakfe.no",
          ariaLabel: "Besøk NAKFE på Instagram",
          isExternal: true,
        },
        {
          label: "Facebook",
          href: "https://facebook.com/nakfe.no",
          ariaLabel: "Besøk NAKFE på Facebook",
          isExternal: true,
        },
      ],
    },
    emptyState: {
      title: "Kontaktinformasjon oppdateres",
      description:
        "Vi oppdaterer siden så snart NAKFEs offentlige kontaktkanaler er klare.",
    },
  },
} satisfies ContactPageContent;

validateContactPageContent(contactContentDraft);

export const contactContent = contactContentDraft;

const englishContactContent = {
  seo: {
    title: "Contact",
    description:
      "Contact NAKFE with questions about the organisation, collaboration or activities.",
  },

  hero: {
    eyebrow: "Contact",
    title: "Get in touch",
    description:
      "Do you have questions about NAKFE, collaboration or activities? Here you will find the organisation's public contact channels.",
    backgroundImages: pageHeroBackgroundImages,
  },

  contact: {
    header: {
      eyebrow: "Contact",
      title: "Contact channels",
      description:
        "Here you will find NAKFE's public contact channels for questions, collaboration and activities.",
    },
    methods: [
      {
        id: "general-email",
        kind: "email",
        label: "Email",
        value: "kontakt@nakfe.no",
        href: "mailto:kontakt@nakfe.no",
        ariaLabel: "Send an email to NAKFE",
        description:
          "Use this address for general questions about the organisation, activities or collaboration.",
      },
      {
        id: "phone",
        kind: "phone",
        label: "Phone",
        value: "+47 40 00 00 00",
        href: "tel:+4740000000",
        ariaLabel: "Call NAKFE",
        description:
          "The phone can be used for brief enquiries during weekday opening hours.",
      },
      {
        id: "office-address",
        kind: "address",
        label: "Address",
        value: "Storgata 10, 0155 Oslo",
        description:
          "Temporary visitor address used as placeholder content for the contact page.",
      },
    ],
    social: {
      title: "Social media",
      description:
        "You can also follow the organisation on social media for updates and events.",
      links: [
        {
          label: "Instagram",
          href: "https://instagram.com/nakfe.no",
          ariaLabel: "Visit NAKFE on Instagram",
          isExternal: true,
        },
        {
          label: "Facebook",
          href: "https://facebook.com/nakfe.no",
          ariaLabel: "Visit NAKFE on Facebook",
          isExternal: true,
        },
      ],
    },
    emptyState: {
      title: "Contact information is being updated",
      description:
        "We will update the page as soon as NAKFE's public contact channels are ready.",
    },
  },
} satisfies ContactPageContent;

validateContactPageContent(englishContactContent);

export const contactContentByLocale = {
  no: contactContent,
  en: englishContactContent,
} satisfies LocalizedContent<ContactPageContent>;

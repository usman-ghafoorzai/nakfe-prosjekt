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
        "Her finner du midlertidig eksempelinnhold for hvordan offentlige kontaktkanaler kan presenteres.",
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
    availabilityNote:
      "Kontaktinformasjonen her er midlertidig eksempelinnhold og kan erstattes med godkjente offentlige kanaler senere.",
    emptyState: {
      title: "Kontaktinformasjon oppdateres",
      description:
        "Vi oppdaterer siden så snart NAKFEs offentlige kontaktkanaler er klare.",
    },
  },
} satisfies ContactPageContent;

validateContactPageContent(contactContentDraft);

export const contactContent = contactContentDraft;

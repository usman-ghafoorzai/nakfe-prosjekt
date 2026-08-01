import type { FooterContent } from "@/types/footer";
import type { LocalizedContent } from "@/types/locale";

export const footerContent = {
    organization: {
        name: "NAKFE",
        description:
            "Kvinner for Endring styrker kvinner gjennom utdanning, arbeid, entreprenørskap og fellesskap i Norge og Afghanistan.",
        logo: {
            src: "/images/nakfe-logo.jpg",
            alt: "",
            isDecorative: true,
        },
    },
    homeAriaLabel: "NAKFE - gå til forsiden",
    navigationTitle: "Navigasjon",
    contactTitle: "Kontakt",
    contactLink: {
        label: "Kontakt Kvinner for Endring",
        href: "/kontakt",
    },
    contactDescription:
        "Finn e-post, telefon og organisasjonens sosiale medier på kontaktsiden.",
    copyright: {
        owner: "NAKFE",
        rightsText: "Alle rettigheter reservert.",
    },
    developerCreditPrefix: "Nettside utviklet av",
    developerCredit: {
        label: "Usman Ghafoorzai",
        href: "https://www.linkedin.com/in/usman-ghafoorzai/",
        isExternal: true,
    },
} satisfies FooterContent;

const englishFooterContent = {
    organization: {
        name: "NAKFE",
        description:
            "Women for Change empowers women through education, employment, entrepreneurship and community in Norway and Afghanistan.",
        logo: {
            src: "/images/nakfe-logo.jpg",
            alt: "",
            isDecorative: true,
        },
    },
    homeAriaLabel: "NAKFE - go to the home page",
    navigationTitle: "Navigation",
    contactTitle: "Contact",
    contactLink: {
        label: "Contact Women for Change",
        href: "/kontakt",
    },
    contactDescription:
        "Find the organisation's email address, phone number and social media channels on the contact page.",
    copyright: {
        owner: "NAKFE",
        rightsText: "All rights reserved.",
    },
    developerCreditPrefix: "Website developed by",
    developerCredit: {
        label: "Usman Ghafoorzai",
        href: "https://www.linkedin.com/in/usman-ghafoorzai/",
        isExternal: true,
    },
} satisfies FooterContent;

export const footerContentByLocale = {
    no: footerContent,
    en: englishFooterContent,
} satisfies LocalizedContent<FooterContent>;

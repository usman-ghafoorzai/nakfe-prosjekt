import type { FooterContent } from "@/types/footer";
import type { LocalizedContent } from "@/types/locale";

export const footerContent = {
    organization: {
        name: "NAKFE",
        description:
            "NAKFE er en ideell organisasjon. Nettsiden utvikles for å gjøre informasjon om organisasjonen, aktiviteter og kontaktmuligheter mer tilgjengelig.",
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
        label: "Kontakt NAKFE",
        href: "/kontakt",
    },
    contactDescription:
        "Mer kontaktinformasjon og sosiale medier legges til når innholdet er avklart.",
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
    qualityNote:
        "Bygget med fokus på tilgjengelighet, responsivt design og moderne webutvikling.",
} satisfies FooterContent;

const englishFooterContent = {
    organization: {
        name: "NAKFE",
        description:
            "NAKFE is a non-profit organisation. The website is being developed to make information about the organisation, activities and ways to get in touch more accessible.",
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
        label: "Contact NAKFE",
        href: "/kontakt",
    },
    contactDescription:
        "More contact information and social media channels will be added once the content has been confirmed.",
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
    qualityNote:
        "Built with a focus on accessibility, responsive design and modern web development.",
} satisfies FooterContent;

export const footerContentByLocale = {
    no: footerContent,
    en: englishFooterContent,
} satisfies LocalizedContent<FooterContent>;

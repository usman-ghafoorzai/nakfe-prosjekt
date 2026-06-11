import type { FooterContent } from "@/types/content";

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
    developerCredit: {
        label: "Usman Ghafoorzai",
        href: "https://www.linkedin.com/in/usman-ghafoorzai/",
        isExternal: true,
    },
    qualityNote:
        "Bygget med fokus på tilgjengelighet, responsivt design og moderne webutvikling.",
} satisfies FooterContent;
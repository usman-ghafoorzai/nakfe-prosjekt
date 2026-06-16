import type { NavItem } from "@/types/content";

export const navigationItems = [
    {
        label: "Forside",
        href: "/",
        description: "Gå til forsiden",
        showInHeader: true,
        showInFooter: true,
        order: 1,
    },
    {
        label: "Om oss",
        href: "/om-oss",
        description: "Les mer om NAKFE",
        showInHeader: true,
        showInFooter: true,
        order: 2,
    },
    {
        label: "Prosjekter",
        href: "/prosjekter",
        description: "Se prosjekter og initiativer",
        showInHeader: true,
        showInFooter: true,
        order: 3,
    },
    {
        label: "Aktiviteter",
        href: "/aktiviteter",
        description: "Se aktiviteter og arrangementer",
        showInHeader: true,
        showInFooter: true,
        order: 4,
    },
    {
        label: "FAQ",
        href: "/faq",
        description: "Finn svar på vanlige spørsmål",
        showInHeader: true,
        showInFooter: true,
        order: 5,
    },
    {
        label: "Kontakt",
        href: "/kontakt",
        description: "Kontakt NAKFE",
        showInHeader: true,
        showInFooter: false,
        order: 6,
    },
] satisfies NavItem[];

export const headerNavigationItems = navigationItems
    .filter((item) => item.showInHeader)
    .sort((a, b) => a.order - b.order);

export const footerNavigationItems = navigationItems
    .filter((item) => item.showInFooter)
    .sort((a, b) => a.order - b.order);
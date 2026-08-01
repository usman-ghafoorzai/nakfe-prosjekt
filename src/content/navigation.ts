import type { NavItem } from "@/types/common";
import type { LocalizedContent } from "@/types/locale";
import type { NavigationContent } from "@/types/navigation";

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
        label: "Vårt arbeid",
        href: "/vart-arbeid",
        description: "Se NAKFEs prosjekter og programmer",
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

const englishNavigationItems = [
    {
        label: "Home",
        href: "/",
        description: "Go to the home page",
        showInHeader: true,
        showInFooter: true,
        order: 1,
    },
    {
        label: "About us",
        href: "/om-oss",
        description: "Learn more about NAKFE",
        showInHeader: true,
        showInFooter: true,
        order: 2,
    },
    {
        label: "Our work",
        href: "/vart-arbeid",
        description: "View NAKFE's projects and programmes",
        showInHeader: true,
        showInFooter: true,
        order: 3,
    },
    {
        label: "Activities",
        href: "/aktiviteter",
        description: "View activities and events",
        showInHeader: true,
        showInFooter: true,
        order: 4,
    },
    {
        label: "FAQ",
        href: "/faq",
        description: "Find answers to frequently asked questions",
        showInHeader: true,
        showInFooter: true,
        order: 5,
    },
    {
        label: "Contact",
        href: "/kontakt",
        description: "Contact NAKFE",
        showInHeader: true,
        showInFooter: false,
        order: 6,
    },
] satisfies NavItem[];

export const navigationContent = {
    no: {
        items: navigationItems,
        mainNavigationLabel: "Hovednavigasjon",
        mobileNavigationLabel: "Mobil hovednavigasjon",
        homeAriaLabel: "Kvinner for Endring - gå til forsiden",
        openMenuLabel: "Åpne hovedmeny",
        closeMenuLabel: "Lukk hovedmeny",
        languageSwitcherLabel: "Velg språk",
        languageOptionAriaLabels: {
            no: "Vis siden på norsk",
            en: "Vis siden på engelsk",
        },
    },
    en: {
        items: englishNavigationItems,
        mainNavigationLabel: "Main navigation",
        mobileNavigationLabel: "Mobile main navigation",
        homeAriaLabel: "Kvinner for Endring - go to the home page",
        openMenuLabel: "Open main menu",
        closeMenuLabel: "Close main menu",
        languageSwitcherLabel: "Choose language",
        languageOptionAriaLabels: {
            no: "Show the page in Norwegian",
            en: "Show the page in English",
        },
    },
} satisfies LocalizedContent<NavigationContent>;

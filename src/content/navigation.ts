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
        description: "Les mer om Kvinner for Endring",
        showInHeader: true,
        showInFooter: true,
        order: 2,
    },
    {
        label: "Vårt arbeid",
        href: "/vart-arbeid",
        description: "Se prosjektene og programmene til Kvinner for Endring",
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
        description: "Kontakt Kvinner for Endring",
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
        description: "Learn more about Women for Change",
        showInHeader: true,
        showInFooter: true,
        order: 2,
    },
    {
        label: "Our work",
        href: "/vart-arbeid",
        description: "View the projects and programmes run by Women for Change",
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
        description: "Contact Women for Change",
        showInHeader: true,
        showInFooter: false,
        order: 6,
    },
] satisfies NavItem[];

export const navigationContent = {
    no: {
        items: navigationItems,
        brandName: "Kvinner for Endring",
        mainNavigationLabel: "Hovednavigasjon",
        mobileNavigationLabel: "Mobil hovednavigasjon",
        homeAriaLabel: "Kvinner for Endring - gå til forsiden",
        openMenuLabel: "Åpne hovedmeny",
        closeMenuLabel: "Lukk hovedmeny",
        languageSwitcherLabel: "Velg språk",
        languageOptionAriaLabels: {
            no: "Bytt språk til norsk",
            en: "Bytt språk til engelsk",
        },
    },
    en: {
        items: englishNavigationItems,
        brandName: "Women for Change",
        mainNavigationLabel: "Main navigation",
        mobileNavigationLabel: "Mobile main navigation",
        homeAriaLabel: "Women for Change - go to the home page",
        openMenuLabel: "Open main menu",
        closeMenuLabel: "Close main menu",
        languageSwitcherLabel: "Choose language",
        languageOptionAriaLabels: {
            no: "Switch language to Norwegian",
            en: "Switch language to English",
        },
    },
} satisfies LocalizedContent<NavigationContent>;

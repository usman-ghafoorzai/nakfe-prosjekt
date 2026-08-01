import type { NavItem } from "@/types/common";
import type { Locale } from "@/types/locale";

export type NavigationContent = {
  items: NavItem[];
  brandName: string;
  mainNavigationLabel: string;
  mobileNavigationLabel: string;
  homeAriaLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languageSwitcherLabel: string;
  languageOptionAriaLabels: Record<Locale, string>;
};

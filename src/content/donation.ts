import type { DonationContent } from "@/types/donation";
import type { LocalizedContent } from "@/types/locale";

export const donationContentByLocale = {
  no: {
    title: "Støtt Kvinner for Endring",
    introduction:
      "Du kan støtte Kvinner for Endring med disse betalingsopplysningene:",
    fields: [
      {
        id: "vipps",
        label: "Vipps",
        value: "705538",
      },
      {
        id: "kontonummer",
        label: "Kontonummer",
        value: "1506.66.01835",
      },
    ],
    closeLabel: "Lukk",
  },
  en: {
    title: "Support Women for Change",
    introduction:
      "You can support Women for Change using these payment details:",
    fields: [
      {
        id: "vipps",
        label: "Vipps",
        value: "705538",
      },
      {
        id: "bank",
        label: "Bank",
        value: "DNB",
      },
      {
        id: "iban",
        label: "IBAN",
        value: "NO07 1506 6601 835",
      },
      {
        id: "bic-swift",
        label: "BIC/SWIFT",
        value: "DNBANOKKXXX",
      },
    ],
    closeLabel: "Close",
  },
} satisfies LocalizedContent<DonationContent>;

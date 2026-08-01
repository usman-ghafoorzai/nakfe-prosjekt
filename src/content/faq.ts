import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateFaqPageContent } from "@/lib/faq";
import type { FaqPageContent } from "@/types/faq";
import type { LocalizedContent } from "@/types/locale";

const faqContentDraft = {
  seo: {
    title: "FAQ",
    description:
      "Finn svar på vanlige spørsmål om Kvinner for Endring, organisasjonens arbeid, finansiering og kontaktinformasjon.",
  },

  hero: {
    eyebrow: "FAQ",
    title: "Spørsmål og svar.",
    description:
      "Her finner du dokumentert informasjon om Kvinner for Endring og arbeidet i Norge og Afghanistan.",
    backgroundImages: pageHeroBackgroundImages,
  },

  faq: {
    header: {
      eyebrow: "FAQ",
      title: "Vanlige spørsmål",
      description:
        "Kort informasjon om organisasjonen, prosjektene og hvordan du kan ta kontakt.",
    },
    categories: [
      {
        id: "organisasjonen-og-arbeidet",
        title: "Om organisasjonen og arbeidet",
        items: [
          {
            id: "hva-er-kvinner-for-endring",
            question: "Hva er Kvinner for Endring?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Kvinner for Endring er en ideell organisasjon som styrker kvinner gjennom utdanning, arbeid, entreprenørskap og fellesskap, med mål om langsiktig økonomisk selvstendighet og deltakelse i samfunnet.",
                },
              ],
            },
          },
          {
            id: "nar-ble-organisasjonen-etablert",
            question: "Når ble organisasjonen etablert?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Kvinner for Endring ble etablert i Norge i april 2021.",
                },
              ],
            },
          },
          {
            id: "hvor-arbeider-organisasjonen",
            question: "Hvor arbeider organisasjonen?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Organisasjonen driver prosjekter i Norge og Afghanistan og tilpasser arbeidet til lokale forhold.",
                },
              ],
            },
          },
          {
            id: "arbeidet-i-norge",
            question: "Hva gjør organisasjonen i Norge?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "I Norge arbeider Kvinner for Endring med integrering og inkludering av kvinner med minoritetsbakgrunn i samfunnet og arbeidslivet. Arbeidet omfatter jobbførhet, utdanning og kompetanse, entreprenørskap samt psykisk helse og livskvalitet.",
                },
              ],
            },
          },
          {
            id: "arbeidet-i-afghanistan",
            question: "Hva gjør organisasjonen i Afghanistan?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "I Afghanistan driver organisasjonen utdannings- og inntektsrettede programmer for kvinner og jenter under krevende forhold. Arbeidet omfatter blant annet engelskkurs, entreprenørskaps- og ferdighetstrening, sømopplæring og digital undervisning.",
                },
              ],
            },
          },
          {
            id: "prosjekttyper",
            question: "Hvilke typer prosjekter driver organisasjonen?",
            answer: {
              paragraphs: [
                {
                  id: "norge",
                  text: "I Norge omfatter prosjektene entreprenørskapstrening, jobbsøking og økonomisk selvstendighet samt kultur- og fellesskapsarrangementer.",
                },
                {
                  id: "afghanistan",
                  text: "I Afghanistan omfatter prosjektene sømopplæring for økonomisk selvstendighet og digital undervisning for jenter i Kabul og Faryab.",
                },
              ],
              action: {
                label: "Se prosjektene",
                href: "/vart-arbeid",
                ariaLabel: "Se prosjektene til Kvinner for Endring",
              },
            },
          },
          {
            id: "finansiering",
            question: "Hvordan finansieres eller støttes arbeidet?",
            answer: {
              paragraphs: [
                {
                  id: "norge",
                  text: "Prosjektene i Norge finansieres av norske myndigheter.",
                },
                {
                  id: "afghanistan",
                  text: "Arbeidet i Afghanistan finansieres gjennom kulturfestivaler i Norge, blant annet salg av afghansk mat, samt folkefinansiering, innsamlingsaksjoner og private gaver.",
                },
              ],
            },
          },
          {
            id: "kontakt",
            question: "Hvordan kan jeg kontakte Kvinner for Endring?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Du kan sende e-post til post@nakfe.no, ringe +47 954 69 859 eller bruke kontaktsiden.",
                },
              ],
              action: {
                label: "Gå til kontaktsiden",
                href: "/kontakt",
                ariaLabel: "Gå til kontaktsiden for Kvinner for Endring",
              },
            },
          },
          {
            id: "stotte-og-samarbeid",
            question: "Hvordan kan noen støtte eller samarbeide med organisasjonen?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Ta kontakt med Kvinner for Endring for å drøfte støtte eller samarbeid. Organisasjonen søker blant annet akademiske samarbeid som kan gi eller validere dokumentasjon fra utdanningsprogrammene, og arbeidet i Afghanistan støttes også gjennom innsamlinger og private gaver.",
                },
              ],
              action: {
                label: "Kontakt oss",
                href: "/kontakt",
                ariaLabel: "Kontakt Kvinner for Endring om støtte eller samarbeid",
              },
            },
          },
        ],
      },
    ],
    emptyState: {
      title: "Ingen spørsmål er publisert.",
      description: "Kontakt oss dersom du trenger mer informasjon.",
      action: {
        label: "Kontakt oss",
        href: "/kontakt",
        ariaLabel: "Gå til kontaktsiden",
      },
    },
    contactCta: {
      eyebrow: "Kontakt",
      title: "Finner du ikke det du lurer på?",
      description: "Ta kontakt med oss, så hjelper vi deg videre.",
      action: {
        label: "Kontakt oss",
        href: "/kontakt",
        ariaLabel: "Gå til kontaktsiden",
      },
    },
  },
} satisfies FaqPageContent;

validateFaqPageContent(faqContentDraft);

export const faqContent = faqContentDraft;

const englishFaqContent = {
  seo: {
    title: "FAQ",
    description:
      "Find answers to frequently asked questions about Women for Change, its work, funding and contact information.",
  },

  hero: {
    eyebrow: "FAQ",
    title: "Questions and answers.",
    description:
      "Here you will find documented information about Women for Change and its work in Norway and Afghanistan.",
    backgroundImages: pageHeroBackgroundImages,
  },

  faq: {
    header: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      description:
        "Brief information about the organisation, its projects and how to get in touch.",
    },
    categories: [
      {
        id: "organisasjonen-og-arbeidet",
        title: "About the organisation and its work",
        items: [
          {
            id: "hva-er-kvinner-for-endring",
            question: "What is Women for Change?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Women for Change is a non-profit organisation that empowers women through education, employment, entrepreneurship and community, with the aim of long-term financial independence and participation in society.",
                },
              ],
            },
          },
          {
            id: "nar-ble-organisasjonen-etablert",
            question: "When was Women for Change established?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Women for Change was established in Norway in April 2021.",
                },
              ],
            },
          },
          {
            id: "hvor-arbeider-organisasjonen",
            question: "Where does Women for Change work?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "The organisation runs projects in Norway and Afghanistan and adapts its work to local contexts.",
                },
              ],
            },
          },
          {
            id: "arbeidet-i-norge",
            question: "What does Women for Change do in Norway?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "In Norway, Women for Change works to integrate and include women with minority backgrounds in society and the labour market. Its programmes cover job readiness, education and skills, entrepreneurship, and mental health and well-being.",
                },
              ],
            },
          },
          {
            id: "arbeidet-i-afghanistan",
            question: "What does Women for Change do in Afghanistan?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "In Afghanistan, the organisation runs education and livelihood-focused programmes for women and girls under challenging conditions. The work includes English courses, entrepreneurship and skills training, tailoring training and digital education.",
                },
              ],
            },
          },
          {
            id: "prosjekttyper",
            question: "What types of projects does Women for Change run?",
            answer: {
              paragraphs: [
                {
                  id: "norge",
                  text: "In Norway, the projects cover entrepreneurship training, job search and financial independence, and cultural and community events.",
                },
                {
                  id: "afghanistan",
                  text: "In Afghanistan, the projects cover tailoring training for economic empowerment and digital education for girls in Kabul and Faryab.",
                },
              ],
              action: {
                label: "View the projects",
                href: "/vart-arbeid",
                ariaLabel: "View the projects run by Women for Change",
              },
            },
          },
          {
            id: "finansiering",
            question: "How is the work funded or supported?",
            answer: {
              paragraphs: [
                {
                  id: "norge",
                  text: "The projects in Norway are funded by the Norwegian government.",
                },
                {
                  id: "afghanistan",
                  text: "The work in Afghanistan is funded through cultural festivals in Norway, including sales of Afghan food, as well as crowdfunding campaigns, fundraisers and private donations.",
                },
              ],
            },
          },
          {
            id: "kontakt",
            question: "How can I contact Women for Change?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "You can email post@nakfe.no, call +47 954 69 859 or use the contact page.",
                },
              ],
              action: {
                label: "Go to the contact page",
                href: "/kontakt",
                ariaLabel: "Go to the Women for Change contact page",
              },
            },
          },
          {
            id: "stotte-og-samarbeid",
            question: "How can someone support or collaborate with the organisation?",
            answer: {
              paragraphs: [
                {
                  id: "svar",
                  text: "Contact Women for Change to discuss support or collaboration. The organisation is seeking academic partnerships that can provide or validate documentation from its education programmes, and the work in Afghanistan is also supported through fundraising and private donations.",
                },
              ],
              action: {
                label: "Contact us",
                href: "/kontakt",
                ariaLabel: "Contact Women for Change about support or collaboration",
              },
            },
          },
        ],
      },
    ],
    emptyState: {
      title: "No questions are published.",
      description: "Contact us if you need more information.",
      action: {
        label: "Contact us",
        href: "/kontakt",
        ariaLabel: "Go to the contact page",
      },
    },
    contactCta: {
      eyebrow: "Contact",
      title: "Cannot find what you are looking for?",
      description: "Contact us and we will help you further.",
      action: {
        label: "Contact us",
        href: "/kontakt",
        ariaLabel: "Go to the contact page",
      },
    },
  },
} satisfies FaqPageContent;

validateFaqPageContent(englishFaqContent);

export const faqContentByLocale = {
  no: faqContent,
  en: englishFaqContent,
} satisfies LocalizedContent<FaqPageContent>;

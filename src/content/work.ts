import { pageHeroBackgroundImages } from "@/content/pageHeroImages";
import { validateWorkPageContent } from "@/lib/work-projects";
import type { LocalizedContent } from "@/types/locale";
import type { WorkPageContent } from "@/types/work";

const workContentDraft = {
  seo: {
    title: "Vårt arbeid",
    description:
      "Les om NAKFEs prosjekter og programmer i Afghanistan og Norge.",
  },

  hero: {
    eyebrow: "Vårt arbeid",
    title: "Prosjekter og programmer som skaper muligheter.",
    description:
      "Her samler vi arbeidet vårt i Afghanistan og Norge – fra opplæring og ferdigheter til deltakelse, kompetanse og entreprenørskap.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Prosjekter og programmer",
      title: "Arbeid som får vokse over tid.",
      description:
        "Velg et land for å se prosjekter og programmer NAKFE arbeider med.",
    },
    countryNavigationLabel: "Velg land",
    defaultCountry: "afghanistan",
    filters: [
      {
        id: "afghanistan",
        label: "Afghanistan",
        emptyState: {
          title: "Ingen prosjekter er publisert ennå.",
          description:
            "Nye prosjekter og historier fra Afghanistan vil bli lagt til her.",
        },
      },
      {
        id: "norway",
        label: "Norge",
        emptyState: {
          title: "Ingen prosjekter er publisert ennå.",
          description:
            "Nye prosjekter og historier fra Norge vil bli lagt til her.",
        },
      },
    ],
    detailsActionLabel: "Les mer",
    detailsActionAriaLabelPrefix: "Les mer om",
    items: [
      {
        slug: "entreprenorskapstrening-for-kvinner-med-minoritetsbakgrunn",
        country: "norway",
        title: "Entreprenørskapstrening for kvinner med minoritetsbakgrunn",
        summary:
          "Prosjektet gir kvinner kunnskap, verktøy og nettverk for å starte egen virksomhet og skape økonomisk selvstendighet.",
        coverImage: {
          src: "/images/work/entreprenorskapstrening-norge.jpeg",
          alt: "Deltakere på entreprenørskapstrening for kvinner med minoritetsbakgrunn i Norge.",
          caption:
            "Deltakere på entreprenørskapskurs og nettverkssamlinger.",
          credit: "Kvinner for Endring",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Kvinner for Endring tilbyr entreprenørskapstrening for kvinner med minoritetsbakgrunn som ønsker å starte egen virksomhet eller utvikle en forretningsidé.",
          },
          {
            id: "avsnitt-2",
            text: "Gjennom kurs og workshops får deltakerne innsikt i forretningsutvikling, markedsføring, økonomistyring og hvordan man etablerer og driver en virksomhet i Norge.",
          },
          {
            id: "avsnitt-3",
            text: "Prosjektet bidrar til å styrke deltakernes selvtillit og kompetanse, samtidig som det skaper muligheter for økt deltakelse i arbeidslivet og økonomisk selvstendighet.",
          },
          {
            id: "avsnitt-4",
            text: "Målet er å gi kvinner verktøyene de trenger for å bli økonomisk uavhengige og aktive bidragsytere i samfunnet.",
          },
        ],
      },
      {
        slug: "jobbsoking-og-okonomisk-selvstendighet",
        country: "norway",
        title: "Jobbsøking og økonomisk selvstendighet",
        summary:
          "Prosjektet hjelper kvinner med å styrke sine muligheter på arbeidsmarkedet gjennom karriereveiledning, jobbsøkerkurs og økonomisk kompetanse.",
        coverImage: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Illustrasjon knyttet til jobbsøking og økonomisk selvstendighet.",
          caption:
            "Illustrasjon knyttet til jobbsøking og økonomisk selvstendighet.",
          credit: "Kvinner for Endring",
          position: "center 40%",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Mange kvinner med minoritetsbakgrunn møter utfordringer når de skal inn på det norske arbeidsmarkedet. Gjennom dette prosjektet tilbyr vi støtte og veiledning for å øke mulighetene for arbeid.",
          },
          {
            id: "avsnitt-2",
            text: "Deltakerne lærer hvordan man skriver CV og søknad, forbereder seg til jobbintervjuer og bygger profesjonelle nettverk.",
          },
          {
            id: "avsnitt-3",
            text: "Prosjektet inkluderer også seminarer om privatøkonomi, økonomisk planlegging og økonomisk selvstendighet.",
          },
          {
            id: "avsnitt-4",
            text: "Gjennom økt kunnskap og praktiske ferdigheter får deltakerne bedre forutsetninger for å oppnå stabil inntekt og aktiv deltakelse i arbeidslivet.",
          },
        ],
      },
      {
        slug: "kultur-og-fellesskapsarrangementer",
        country: "norway",
        title: "Kultur- og fellesskapsarrangementer",
        summary:
          "Gjennom feiringer av Eid, Nawruz og andre kulturarrangementer skaper vi møteplasser som styrker fellesskap, inkludering og kulturell tilhørighet.",
        coverImage: {
          src: "/images/work/kulturarrangement-norge.jpeg",
          alt: "Deltakere ved matservering på et kulturarrangement i Norge.",
          caption:
            "Deltakere på Eid-feiring, Nawruz-feiring eller andre kulturarrangementer.",
          credit: "Kvinner for Endring",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Kvinner for Endring arrangerer kulturelle møteplasser som samler mennesker med ulik bakgrunn og skaper fellesskap på tvers av kulturer.",
          },
          {
            id: "avsnitt-2",
            text: "Blant aktivitetene er feiring av Eid, Nawruz og andre kulturelle markeringer som gir deltakerne mulighet til å dele tradisjoner, mat og kultur.",
          },
          {
            id: "avsnitt-3",
            text: "Arrangementene bidrar til økt sosial inkludering og styrker følelsen av tilhørighet blant deltakerne.",
          },
          {
            id: "avsnitt-4",
            text: "Prosjektet fremmer forståelse mellom ulike kulturer og bygger broer mellom minoritetsmiljøer og storsamfunnet.",
          },
        ],
      },
      {
        slug: "somopplaering-for-kvinners-okonomiske-selvstendighet",
        country: "afghanistan",
        title: "Sømopplæring for kvinners økonomiske selvstendighet",
        summary:
          "Prosjektet gir kvinner praktiske ferdigheter innen søm og skreddersøm slik at de kan skape egne inntekter og forsørge sine familier.",
        coverImage: {
          src: "/images/work/somopplaering-kabul.jpeg",
          alt: "Kvinner ved en avslutningsseremoni på et sømopplæringssenter i Kabul.",
          caption: "Kvinner som deltar i søm- og skreddersømopplæring.",
          credit: "Kvinner for Endring",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Prosjektet er etablert for å gi kvinner tilgang til yrkesopplæring og muligheter for økonomisk selvstendighet under krevende forhold.",
          },
          {
            id: "avsnitt-2",
            text: "Deltakerne gjennomfører et opplæringsprogram på mellom fire og seks måneder ved organisasjonens opplæringssentre i Kabul.",
          },
          {
            id: "avsnitt-3",
            text: "Gjennom praktisk opplæring lærer kvinnene søm, mønstertilpasning og produksjon av klær som etterspørres i lokalsamfunnet.",
          },
          {
            id: "avsnitt-4",
            text: "Etter fullført kurs kan deltakerne ta kundeoppdrag eller starte små virksomheter som gir inntekt til dem selv og deres familier.",
          },
          {
            id: "avsnitt-5",
            text: "Prosjektet bidrar til økt økonomisk trygghet, større selvtillit og bedre framtidsmuligheter for kvinnene.",
          },
        ],
      },
      {
        slug: "digital-undervisning-for-jenter-i-kabul",
        country: "afghanistan",
        title: "Digital undervisning for jenter i Kabul",
        summary:
          "Prosjektet gir jenter over sjette trinn, som er fratatt retten til utdanning, tilgang til digital opplæring og grunnleggende digitale ferdigheter som kan styrke deres utdannings- og yrkesmuligheter.",
        coverImage: {
          src: "/images/page-hero/afghansk-kulturarv.png",
          alt: "Illustrasjon knyttet til digital undervisning i Kabul.",
          caption: "Illustrasjon knyttet til digital undervisning i Kabul.",
          credit: "Kvinner for Endring",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Kvinner for Endring tilbyr digital undervisning for jenter i Kabul som er fratatt retten til videre utdanning. Prosjektet gir dem mulighet til å fortsette læringen gjennom nettbasert undervisning i trygge omgivelser.",
          },
          {
            id: "avsnitt-2",
            text: "Målgruppen er jenter over sjette trinn som ikke lenger har tilgang til ordinær skolegang. Gjennom digitale klasser får de undervisning i engelsk og matematikk, fag som er viktige for videre utdanning og framtidige muligheter.",
          },
          {
            id: "avsnitt-3",
            text: "Prosjektet er etablert som et svar på de alvorlige begrensningene som mange jenter møter når det gjelder tilgang til utdanning. Digital undervisning bidrar til at de kan opprettholde læring og utvikle kunnskap til tross for utfordrende forhold.",
          },
          {
            id: "avsnitt-4",
            text: "Gjennom undervisningen får deltakerne styrket sine faglige ferdigheter, økt selvtillit og bedre forutsetninger for videre utdanning og aktiv deltakelse i samfunnet. Målet er å gi jentene håp, kunnskap og muligheter for en bedre framtid.",
          },
        ],
      },
      {
        slug: "digital-undervisning-for-jenter-i-faryab",
        country: "afghanistan",
        title: "Digital undervisning for jenter i Faryab",
        summary:
          "Prosjektet gir jenter over sjette trinn som er fratatt retten til videre utdanning, tilgang til digital undervisning i engelsk og matematikk for å styrke deres kunnskap og framtidsmuligheter.",
        coverImage: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Illustrasjon knyttet til digital undervisning i Faryab.",
          caption: "Illustrasjon knyttet til digital undervisning i Faryab.",
          credit: "Kvinner for Endring",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Prosjektet er etablert for å gi jenter i Faryab mulighet til å fortsette utdanningen gjennom digitale undervisningstilbud. Målgruppen er jenter som ikke lenger har tilgang til ordinær skolegang.",
          },
          {
            id: "avsnitt-2",
            text: "Gjennom nettbaserte klasser får deltakerne undervisning i engelsk og matematikk. Fagene er valgt fordi de gir et viktig grunnlag for videre læring og framtidige utdanningsmuligheter.",
          },
          {
            id: "avsnitt-3",
            text: "Digital undervisning er en nødvendig løsning for mange jenter som er fratatt retten til utdanning. Prosjektet bidrar til at de kan opprettholde læringen og fortsette sin faglige utvikling til tross for utfordrende forhold.",
          },
          {
            id: "avsnitt-4",
            text: "Undervisningen styrker deltakernes kunnskap, selvtillit og tro på egne muligheter. Samtidig gir den dem et viktig faglig fundament for framtiden.",
          },
          {
            id: "avsnitt-5",
            text: "Målet med prosjektet er å sikre at jenter i Faryab fortsatt har tilgang til læring, kunnskap og personlig utvikling, og å gi dem bedre forutsetninger for videre utdanning når mulighetene åpner seg.",
          },
        ],
      },
    ],
  },

  detail: {
    backLinkLabel: "Vårt arbeid",
    backLinkAriaLabel: "Tilbake til oversikten over Vårt arbeid",
    videoAriaLabelPrefix: "Video fra",
    videoFallbackText: "Nettleseren din støtter ikke videoavspilling.",
  },
} satisfies WorkPageContent;

validateWorkPageContent(workContentDraft);

export const workContent = workContentDraft;

const englishWorkContent = {
  seo: {
    title: "Our work",
    description:
      "Read about NAKFE's projects and programmes in Afghanistan and Norway.",
  },

  hero: {
    eyebrow: "Our work",
    title: "Projects and programmes that create opportunities.",
    description:
      "Here we bring together our work in Afghanistan and Norway — from training and practical skills to participation, expertise and entrepreneurship.",
    backgroundImages: pageHeroBackgroundImages,
  },

  overview: {
    header: {
      eyebrow: "Projects and programmes",
      title: "Work that can grow over time.",
      description:
        "Choose a country to view projects and programmes NAKFE works with.",
    },
    countryNavigationLabel: "Choose country",
    defaultCountry: "afghanistan",
    filters: [
      {
        id: "afghanistan",
        label: "Afghanistan",
        emptyState: {
          title: "No projects have been published yet.",
          description:
            "New projects and stories from Afghanistan will be added here.",
        },
      },
      {
        id: "norway",
        label: "Norway",
        emptyState: {
          title: "No projects have been published yet.",
          description:
            "New projects and stories from Norway will be added here.",
        },
      },
    ],
    detailsActionLabel: "Read more",
    detailsActionAriaLabelPrefix: "Read more about",
    items: [
      {
        slug: "entreprenorskapstrening-for-kvinner-med-minoritetsbakgrunn",
        country: "norway",
        title: "Entrepreneurship Training for Women with Minority Backgrounds",
        summary:
          "The project provides women with the knowledge, tools, and networks needed to start their own businesses and achieve financial independence.",
        coverImage: {
          src: "/images/work/entreprenorskapstrening-norge.jpeg",
          alt: "Participants in entrepreneurship training for women with minority backgrounds in Norway.",
          caption:
            "Participants attending entrepreneurship workshops and networking events.",
          credit: "Women for Change",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Women for Change offers entrepreneurship training for women with minority backgrounds who wish to start their own businesses or develop a business idea.",
          },
          {
            id: "avsnitt-2",
            text: "Through courses and workshops, participants gain knowledge of business development, marketing, financial management, and the process of establishing and running a business in Norway.",
          },
          {
            id: "avsnitt-3",
            text: "The project helps participants build confidence and skills while creating opportunities for increased participation in the labour market and greater economic independence.",
          },
          {
            id: "avsnitt-4",
            text: "The goal is to provide women with the tools they need to become financially independent and active contributors to society.",
          },
        ],
      },
      {
        slug: "jobbsoking-og-okonomisk-selvstendighet",
        country: "norway",
        title: "Job Search and Financial Independence",
        summary:
          "The project supports women in strengthening their employment opportunities through career guidance, job-search training, and financial literacy.",
        coverImage: {
          src: "/images/page-hero/arrangementer.png",
          alt: "Illustration related to job search and financial independence.",
          caption:
            "Illustration related to job search and financial independence.",
          credit: "Women for Change",
          position: "center 40%",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Many women from minority backgrounds face challenges when entering the Norwegian labour market. Through this project, we provide guidance and support to improve their employment opportunities.",
          },
          {
            id: "avsnitt-2",
            text: "Participants learn how to write professional CVs and job applications, prepare for job interviews, and build professional networks.",
          },
          {
            id: "avsnitt-3",
            text: "The project also includes seminars on personal finance, financial planning, and economic independence.",
          },
          {
            id: "avsnitt-4",
            text: "By developing practical skills and financial knowledge, participants are better equipped to achieve stable incomes and active participation in working life.",
          },
        ],
      },
      {
        slug: "kultur-og-fellesskapsarrangementer",
        country: "norway",
        title: "Cultural and Community Events",
        summary:
          "Through celebrations such as Eid, Nawruz, and other cultural events, we create inclusive meeting places that strengthen community, belonging, and cultural understanding.",
        coverImage: {
          src: "/images/work/kulturarrangement-norge.jpeg",
          alt: "Participants serving food at a cultural event in Norway.",
          caption:
            "Participants attending Eid, Nawruz, or other cultural celebrations.",
          credit: "Women for Change",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Women for Change organizes cultural events that bring people from diverse backgrounds together and promote community engagement.",
          },
          {
            id: "avsnitt-2",
            text: "Activities include Eid celebrations, Nawruz festivities, and other cultural gatherings where participants can share traditions, food, and cultural experiences.",
          },
          {
            id: "avsnitt-3",
            text: "These events contribute to social inclusion and strengthen participants’ sense of belonging within their communities.",
          },
          {
            id: "avsnitt-4",
            text: "The project promotes intercultural understanding and helps build bridges between minority communities and wider Norwegian society.",
          },
        ],
      },
      {
        slug: "somopplaering-for-kvinners-okonomiske-selvstendighet",
        country: "afghanistan",
        title: "Tailoring Training for Women’s Economic Empowerment",
        summary:
          "The project equips women with practical tailoring skills, enabling them to generate income and support themselves and their families.",
        coverImage: {
          src: "/images/work/somopplaering-kabul.jpeg",
          alt: "Women at a graduation ceremony at a tailoring training centre in Kabul.",
          caption: "Women participating in tailoring and dressmaking training.",
          credit: "Women for Change",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "The project was established to provide women with access to vocational training and opportunities for economic independence under challenging conditions.",
          },
          {
            id: "avsnitt-2",
            text: "Participants complete a four-to-six-month training programme at Women for Change vocational training centres in Kabul.",
          },
          {
            id: "avsnitt-3",
            text: "Through hands-on instruction, women learn tailoring, pattern-making, and garment production skills that are in demand within their local communities.",
          },
          {
            id: "avsnitt-4",
            text: "Upon completing the programme, participants can take customer orders or start small businesses that provide income for themselves and their families.",
          },
          {
            id: "avsnitt-5",
            text: "The project contributes to greater financial security, increased self-confidence, and improved future opportunities for women.",
          },
        ],
      },
      {
        slug: "digital-undervisning-for-jenter-i-kabul",
        country: "afghanistan",
        title: "Digital Education for Girls in Kabul",
        summary:
          "The project provides girls above sixth grade, who have been denied access to education, with online learning opportunities in English and mathematics to support their knowledge and future opportunities.",
        coverImage: {
          src: "/images/page-hero/afghansk-kulturarv.png",
          alt: "Illustration related to digital education in Kabul.",
          caption: "Illustration related to digital education in Kabul.",
          credit: "Women for Change",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "Women for Change provides digital education for girls in Kabul who have been denied access to further schooling. The project enables them to continue their education through online classes in a safe learning environment.",
          },
          {
            id: "avsnitt-2",
            text: "The target group consists of girls above sixth grade who no longer have access to formal education. Through online classes, they receive instruction in English and mathematics, subjects that are essential for future educational opportunities.",
          },
          {
            id: "avsnitt-3",
            text: "The project was established in response to the severe restrictions many girls face regarding access to education. Digital learning helps them continue their studies and develop their knowledge despite challenging circumstances.",
          },
          {
            id: "avsnitt-4",
            text: "Through the programme, participants strengthen their academic skills, increase their self-confidence, and improve their prospects for further education and active participation in society. The aim is to provide girls with hope, knowledge, and opportunities for a better future.",
          },
        ],
      },
      {
        slug: "digital-undervisning-for-jenter-i-faryab",
        country: "afghanistan",
        title: "Digital Education for Girls in Faryab",
        summary:
          "The project provides girls above sixth grade, who have been denied access to education, with online instruction in English and mathematics to strengthen their knowledge and future opportunities.",
        coverImage: {
          src: "/images/page-hero/kvinner-for-endring.png",
          alt: "Illustration related to digital education in Faryab.",
          caption: "Illustration related to digital education in Faryab.",
          credit: "Women for Change",
          position: "center",
        },
        body: [
          {
            id: "avsnitt-1",
            text: "The project was established to enable girls in Faryab to continue their education through digital learning opportunities. The target group consists of girls who no longer have access to formal schooling.",
          },
          {
            id: "avsnitt-2",
            text: "Through online classes, participants receive instruction in English and mathematics. These subjects provide an important foundation for further learning and future educational opportunities.",
          },
          {
            id: "avsnitt-3",
            text: "Digital education is a necessary solution for many girls who have been denied access to education. The project helps them continue learning and pursue their academic development despite challenging circumstances.",
          },
          {
            id: "avsnitt-4",
            text: "The classes strengthen participants’ knowledge, self-confidence, and belief in their own potential. At the same time, they provide an important academic foundation for the future.",
          },
          {
            id: "avsnitt-5",
            text: "The goal of the project is to ensure that girls in Faryab continue to have access to learning, knowledge, and personal development, while preparing them for further education when opportunities become available.",
          },
        ],
      },
    ],
  },

  detail: {
    backLinkLabel: "Our work",
    backLinkAriaLabel: "Back to the overview of Our work",
    videoAriaLabelPrefix: "Video from",
    videoFallbackText: "Your browser does not support video playback.",
  },
} satisfies WorkPageContent;

validateWorkPageContent(englishWorkContent);

export const workContentByLocale = {
  no: workContent,
  en: englishWorkContent,
} satisfies LocalizedContent<WorkPageContent>;

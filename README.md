# NAKFE Website

Dette repoet inneholder utviklingen av en ny nettside for NAKFE, en ideell organisasjon. Målet er å lage en moderne, responsiv og tilgjengelig nettside som gjør det enklere å finne informasjon om organisasjonen, aktiviteter, prosjekter og kontaktmuligheter.

Prosjektet bygges også som et porteføljeprosjekt, med fokus på moderne webutvikling, god struktur, tilgjengelighet og etter hvert en RAG-basert chatbot.

## Mål

Første versjon av nettsiden skal være enkel, ryddig og brukervennlig.

Hovedfokus:

* tydelig informasjon om NAKFE
* responsivt design for mobil og desktop
* tilgjengelige komponenter med god tastaturnavigasjon
* moderne, men kontrollert interaktivitet
* strukturert innhold som senere kan brukes av en RAG-chatbot

## Tech-stack

Prosjektet bygges med:

* Next.js
* TypeScript
* Tailwind CSS
* ESLint
* GitHub Actions for CI

Planlagt videre:

* Vercel for deployment
* Supabase Postgres
* pgvector
* OpenAI API
* Vercel AI SDK

## Tilgjengelighet og interaktivitet

Nettsiden skal utvikles med tilgjengelighet som en del av design- og utviklingsprosessen, ikke som noe som legges på til slutt.

Retningslinjer:

* semantisk HTML der det er mulig
* synlige focus states
* tastaturtilgjengelige interaksjoner
* mobilvennlige trykkflater
* tydelig aktiv side i navigasjon
* nok kontrast mellom tekst og bakgrunn
* subtil bevegelse som ikke forstyrrer innholdet
* støtte for brukere som foretrekker redusert bevegelse

Målet er å følge relevante WCAG 2.1-prinsipper gjennom hele prosjektet.


## Content- og CMS-arkitektur

Prosjektet skal ikke blande redigerbart innhold inn i presentasjonskomponentene. For nå ligger innholdet i `src/content/*`, med domenetyper i `src/types/*`. Dette er en midlertidig content-kilde som senere kan erstattes av Supabase, et CMS eller et admin-panel.

Eksempel:

```tsx
<Hero content={homeContent.hero} />
<CardGridSection content={projectsContent.projects} />
```

Dette gjør at organisasjonen senere kan publisere nyheter, prosjekter, aktiviteter, FAQ og kontaktinformasjon uten at React-komponentene må skrives om.

## Designretning

Visuelt skal siden være minimalistisk, redaksjonell og organisasjonell: tydelig typografi, få sterke farger, røde grafiske markører, store menneskelige bilder og tydelige call-to-actions. Interaksjon skal være rolig, tilgjengelig og nyttig, ikke bare pynt.

## RAG-plan

Chatboten bygges ikke i første fase. Først bygges en vanlig nettside med godt strukturert innhold.

Senere skal innholdet kunne brukes som kunnskapsgrunnlag for en RAG-basert chatbot som svarer på spørsmål om NAKFE basert på organisasjonens egne tekster.

Overordnet plan:

```txt
NAKFE-innhold
-> tekst deles i mindre chunks
-> embeddings genereres
-> embeddings lagres i vector database
-> bruker stiller spørsmål
-> relevante tekstbiter hentes
-> språkmodell svarer basert på kontekst
```

## Lokal utvikling

Installer dependencies:

```bash
npm install
```

Start utviklingsserver:

```bash
npm run dev
```

Åpne:

```txt
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Starter lokal utviklingsserver.

```bash
npm run lint
```

Kjører linting.

```bash
npm run typecheck
```

Kjører TypeScript type checking.

```bash
npm run build
```

Bygger prosjektet for produksjon.

## Branch-struktur

Prosjektet bruker en enkel branch-struktur:

```txt
main  = stabil produksjonsbranch
dev   = utviklingsbranch
feature/* = konkrete arbeidsoppgaver
```

Vanlig arbeidsflyt:

```txt
feature branch -> pull request -> dev -> main
```

## Status

Prosjektet er i tidlig utviklingsfase.

Nåværende fokus:

* sette opp grunnstruktur
* bygge tilgjengelig og mobilvennlig navbar
* etablere designretning
* bygge videre side for side

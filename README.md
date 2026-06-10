# NAKFE Website

Dette repoet inneholder utviklingen av en ny nettside for NAKFE. Målet er å bygge en moderne, responsiv og brukervennlig organisasjonsnettside, med mulighet for å koble på en RAG-basert chatbot senere.

Prosjektet utvikles også som et porteføljeprosjekt med fokus på moderne webutvikling, strukturert systemdesign og praktisk bruk av AI/RAG.

## Formål

Nettsiden skal gi besøkende enkel tilgang til informasjon om NAKFE, organisasjonens arbeid, aktiviteter, prosjekter og kontaktinformasjon.

På sikt skal nettsiden også inneholde en chatbot som kan svare på spørsmål basert på organisasjonens eget innhold.

## Tech-stack

Første versjon av prosjektet bygges med:

* Next.js
* TypeScript
* Tailwind CSS
* ESLint
* GitHub Actions for CI
* Vercel for deployment senere

Planlagt videre stack for RAG-funksjonalitet:

* Supabase Postgres
* pgvector
* OpenAI API
* Vercel AI SDK

## Lokal utvikling

Installer dependencies:

```bash
npm install
```

Start utviklingsserver:

```bash
npm run dev
```

Åpne deretter:

```txt
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Starter lokal utviklingsserver.

```bash
npm run build
```

Bygger prosjektet for produksjon.

```bash
npm run lint
```

Kjører linting.

```bash
npm run typecheck
```

Kjører TypeScript type checking uten å bygge prosjektet.

## Branch-struktur

Prosjektet bruker en enkel branch-struktur:

```txt
main  = stabil produksjonsbranch
dev   = utviklingsbranch
feature/* = konkrete arbeidsoppgaver
```

Vanlig arbeidsflyt:

```txt
feature branch -> dev -> main
```

## RAG-plan

Chatboten skal ikke bygges i første fase. Først bygges en vanlig nettside med strukturert innhold. Senere skal innholdet kunne brukes som kunnskapsgrunnlag for en RAG-basert chatbot.

Planlagt RAG-flyt:

```txt
NAKFE-innhold
-> tekst deles i chunks
-> embeddings genereres
-> embeddings lagres i vector database
-> bruker stiller spørsmål
-> relevante chunks hentes
-> språkmodell svarer basert på kontekst
```

## Status

Prosjektet er i tidlig oppstartsfase.

Første mål er å få opp en enkel, responsiv nettside med:

* Forside
* Navbar
* Footer
* Om oss-side
* Kontakt-side
* Enkel innholdsstruktur

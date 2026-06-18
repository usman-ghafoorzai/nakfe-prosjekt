# Content layer

Dette prosjektet er bevisst bygget med et midlertidig, statisk content-lag i `src/content/*`.

Målet er at søstera di senere skal kunne endre innhold, publisere nyhetssaker, aktiviteter, prosjekter, bilder og FAQ-svar gjennom et admin-panel, CMS eller Supabase — uten å kode i React-komponentene.

## Prinsipp

```txt
src/content/*      = midlertidig redigerbart innhold
src/types/*        = kontrakten for innholdet
src/components/*   = presentasjon og interaksjon
src/app/*          = route-komposisjon
```

Komponenter skal få innhold via props:

```tsx
<Hero content={homeContent.hero} />
<CardGridSection content={projectsContent.projects} />
```

Ikke legg sidecopy, knapper, artikler, FAQ-svar eller kontaktinfo direkte inn i komponentene.

## Fremtidig Supabase/CMS-mapping

Disse statiske objektene kan senere erstattes av fetch-funksjoner:

```txt
homeContent.hero              -> cms_home_hero
homeContent.impactBrief       -> cms_featured_fact_box
homeContent.featuredAreas     -> cms_navigation_cards / cms_article_previews
activitiesContent.activities  -> cms_events
projectsContent.projects      -> cms_articles_or_projects
faqContent.categories         -> cms_faq_categories + cms_faq_items
contactContent.contact        -> cms_contact_settings
footerContent                 -> cms_site_settings
```

`CardGridSection` er laget litt mer fleksibel enn en ren kortseksjon. Den kan brukes til faste snarveier nå, og senere til nyhetssaker, prosjekter eller publiserte artikler ved å fylle inn `eyebrow`, `meta`, `image` og `action` fra CMS.

## Designretning

Designet skal være minimalistisk, redaksjonelt og organisasjonelt:

- tydelig typografi
- få, sterke aksentflater
- røde markører som visuell signatur
- store bilder der de faktisk gir verdi
- ingen unødvendig 3D eller fancy animasjon
- tilgjengelig keyboard/focus/mobil først

Dette er inspirert av humanitære organisasjonssider som Røde Kors, Amnesty, Flyktninghjelpen og Kirkens Bymisjon, men NAKFE skal ha sitt eget uttrykk.

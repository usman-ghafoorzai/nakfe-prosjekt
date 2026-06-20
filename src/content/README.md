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
<WorkProjectIndexSection content={workContent.overview} activeCountry="afghanistan" />
```

Ikke legg sidecopy, knapper, artikler, FAQ-svar eller kontaktinfo direkte inn i komponentene.

## Fremtidig Supabase/CMS-mapping

Disse statiske objektene kan senere erstattes av fetch-funksjoner:

```txt
homeContent.hero              -> cms_home_hero
homeContent.impactBrief       -> cms_featured_fact_box
homeContent.featuredAreas     -> cms_navigation_cards / cms_article_previews
activitiesContent.items       -> cms_events
activitiesContent.overview    -> cms_events_page_settings
activitiesContent.detail      -> cms_events_detail_settings
workContent.overview.items     -> cms_work_projects
workContent.detail             -> cms_work_page_settings
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

## Vårt arbeid

`src/content/work.ts` inneholder prosjektene som vises på `/vart-arbeid`. Hvert prosjekt har en unik `slug`, land, stillbilde, kort introduksjon og blokker med artikkeltekst. Video er valgfri og vises bare på detaljsiden.

Landvelgeren bruker URL-en, ikke lokal React-state:

```txt
/vart-arbeid            -> Afghanistan (standard)
/vart-arbeid?land=norge -> Norge
```

For å publisere et nytt prosjekt senere, legg inn ett nytt objekt i `workContent.overview.items`. Validering ved import stopper byggingen dersom en slug, et land, bilde, tekstblokk eller videoposter mangler.


## Aktiviteter

`src/content/activities.ts` inneholder bare aktiviteter som er klare for publisering. Det er bevisst ingen fiktive arrangementer i den offentlige oversikten.

Aktiviteter er for ting brukeren kan delta på nå eller snart. Når noe er gjennomført og skal fortelles som en historie eller et resultat, hører det normalt hjemme under `Vårt arbeid`.

Hver aktivitet trenger en unik `slug`, start- og sluttidspunkt med tidssone, format og publiseringsstatus. `upcoming` og `past` lagres ikke manuelt; oversikten beregner dette fra tidspunktet. Bare `scheduled` og `cancelled` styres redaksjonelt.

```txt
src/content/activities.ts   = publiserte aktiviteter og sidetekst
src/lib/activities.ts       = datoer, sortering, oppslag, Event JSON-LD og validering
src/app/aktiviteter         = oversikt
src/app/aktiviteter/[slug]  = detaljside
```

Når en ny aktivitet skal publiseres, legg inn ett objekt i `activitiesContent.items` med bekreftet tittel, tidspunkt, sted, kort intro, brødtekst og eventuelt påmeldingslenke. Import-valideringen stopper byggingen ved ufullstendige eller ugyldige arrangementer.

# Handleiding website beheren

Deze handleiding is voor het aanpassen van de website via GitHub. Je hoeft bijna altijd maar in één bestand te werken:

[websiteInhoud.ts](orato/app/content/websiteInhoud.ts)

In dat bestand staan grote kopjes zoals `PAGINA 1 — COACHING` en `PAGINA 3 — PRESENTEREN`. Alles wat daaronder tussen aanhalingstekens staat, mag worden aangepast.

## Belangrijkste regel

Pas alleen de tekst tussen de aanhalingstekens aan. Laat de komma’s, haakjes, blokhaken en aanhalingstekens staan. Zij zorgen ervoor dat de website begrijpt waar een tekst, datum of foto hoort.

Voorbeeld: verander alleen `€185` en laat de rest staan.

```ts
tarief: "€185",
```

wordt bijvoorbeeld:

```ts
tarief: "€195",
```

## Een bestand bewerken op GitHub

1. Open de hoofdpagina van de code: [GitHub – Orato](https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main).
2. Open de map `orato`.
3. Open `app` → `content` → `websiteInhoud.ts`.
4. Klik rechtsboven op het potloodje **Edit this file**.
5. Zoek met `Ctrl+F` (Windows) of `⌘+F` (Mac) bijvoorbeeld op `COACHING`, `SPEAKING CIRCLE` of `ARDIE`.
6. Pas de gewenste tekst aan.
7. Scroll naar beneden naar **Commit changes**.
8. Geef kort aan wat je hebt gewijzigd, bijvoorbeeld: `Tarief coaching aangepast`.
9. Kies **Commit changes**.

Daarna wordt de website automatisch opnieuw gebouwd. Wacht een paar minuten en ververs de website om de wijziging te zien.

## Wat betekenen de tekens?

Zie de inspringing als treden van een trap. Dingen die bij dezelfde lijst horen, staan op dezelfde trede.

```ts
referenties: [
  {
    quote: "Eerste referentie",
  },
  {
    quote: "Tweede referentie",
  },
],
```

De twee blokken met `{` staan precies onder elkaar. Dat betekent: beide horen bij de lijst `referenties`.

- `"tekst"` — de tekst die je mag aanpassen.
- `,` — er komt nog iets na deze regel of dit blok.
- `{` en `}` — begin en einde van één blok, bijvoorbeeld één referentie.
- `[` en `]` — begin en einde van een lijst, bijvoorbeeld alle referenties of alle data.

Een veilige manier om iets toe te voegen is altijd: kopieer een volledig bestaand blok, plak het eronder en wijzig alleen de tekst tussen de aanhalingstekens.

## Tarief aanpassen

Zoek naar de juiste pagina in `websiteInhoud.ts`:

- Coaching: `PAGINA 1 — COACHING`
- Supervisie: `PAGINA 2 — SUPERVISIE`
- Presenteren 1-op-1: `PAGINA 3 — PRESENTEREN`

Wijzig alleen het bedrag:

```ts
tarief: "€185",
```

naar bijvoorbeeld:

```ts
tarief: "€195",
```

Bij Speaking Circle zijn er twee bedragen: `investering` voor het grote blok op de pagina en `knopTarief` voor het kleine knopje bovenaan. Pas beide aan als het bedrag verandert.

```ts
investering: "€ 250,-",
knopTarief: "€250",
```

## Een referentie toevoegen

Zoek de sectie `referenties`. Kopieer een volledig bestaand blok van `{` tot en met `},` en plak het vóór de afsluitende `],`.

Gebruik dit als voorbeeld:

```ts
{
  quote: "De tekst van de referentie komt hier.",
  name: "Voornaam Achternaam",
  role: "Functie of organisatie",
},
```

Let op: de komma na `},` is nodig wanneer er nog een referentie onder staat. De laatste referentie mag ook een komma houden; dat is in dit bestand veilig.

## Speaking Circle: datum toevoegen of verwijderen

Zoek naar `SPEAKING CIRCLE: DATA`.

Een datum moet precies deze vorm hebben:

```ts
"Vrijdag 26 juni 2026 | 9.30 - 17.30 u",
```

Voor een nieuwe datum kopieer je één hele regel, plak je die op de volgende trede en wijzig je dag, datum, jaar en tijd. De datum komt daarna automatisch op de pagina én in het inschrijfformulier.

Een oude datum verwijderen? Verwijder de hele regel, inclusief de komma. Laat minstens één toekomstige datum staan, anders kan niemand zich inschrijven.

## PDF uploaden en koppelen

Gebruik PDF voor de Speaking Circle-flyer, Algemene voorwaarden en Privacyverklaring.

1. Open de juiste GitHub-map in een nieuw tabblad:
   - [Speaking Circle-flyers](https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/supervisie)
   - [Algemene voorwaarden en privacy](https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/downloads)
2. Klik op **Add file** → **Upload files**.
3. Sleep de PDF naar het uploadvak of kies hem op je computer.
4. Scroll naar beneden, geef de wijziging een naam (In het bovenste inputveld onder 'commit changes').
5. Select de optie 'select the main branche' en klik **Commit changes**.
6. Kopieer precies de bestandsnaam, inclusief hoofdletters, spaties en `.pdf`
7. Open `websiteInhoud.ts` en vervang alleen de tekst tussen aanhalingstekens bij `flyer`, `algemeneVoorwaardenPdf` of `privacyverklaringPdf`.

### Spaties in een link: `%20`

Na wijzigen van pdf-document en het kopieren van de bestandsnaam: de spaties in de naam veranderen in %20
In een link wordt elke gewone spatie geschreven als `%20`.

| Bestandsnaam op GitHub | Link in `websiteInhoud.ts` |
| --- | --- |
| `Nieuwe flyer 2027.pdf` | `"/supervisie/Nieuwe%20flyer%202027.pdf"` |
| `Privacy ORATO 2027.pdf` | `"/downloads/Privacy%20ORATO%202027.pdf"` |
| `Algemene voorwaarden.pdf` | `"/downloads/Algemene%20voorwaarden.pdf"` |

Voorbeeld voor een nieuwe flyer:

```ts
flyer: "/supervisie/Nieuwe%20flyer%202027.pdf",
```

De map vóór de bestandsnaam moet kloppen: `/supervisie/` voor de flyer en `/downloads/` voor voorwaarden/privacy.

## Foto of video uploaden

Open eerst de juiste map en kies daarna **Add file** → **Upload files**:

- [Coaching-foto’s](https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/coaching)
- [Presenteren-foto’s](https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/presenteren)
- [Supervisie-foto’s en flyer](https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/supervisie)
- [Ardie-foto’s en video’s](https://github.com/ArdieNooijenKuijpers/orato.nl/tree/main/orato/public/Ardie)

**Vergeet niet de oude foto te verwijderen!**

Gebruik bij voorkeur een duidelijke bestandsnaam zonder bijzondere tekens, bijvoorbeeld `Ardie-2027.jpg` of `speaking-circle-2027.pdf`.

Voor een nieuw tijdvak bij Ardie upload je eerst de foto naar de Ardie-map. Daarna kopieer je in `websiteInhoud.ts` het complete blok tussen `KOPIEER VANAF HIER` en `TOT HIER KOPIËREN`. Plak het eronder en pas onder andere dit aan:

```ts
year: "2027",
title: "Titel van dit tijdvak",
summary: "Korte introductie van dit tijdvak.",
images: [{
  src: "/Ardie/Ardie-2027.jpg",
  alt: "Korte omschrijving van wat er op de foto staat.",
  placement: "edge",
}],
```

`alt` is de korte omschrijving van de foto. Die helpt mensen die een schermlezer gebruiken.

## Als iets niet goed gaat

- Zie je een rood foutbericht in GitHub? Kies **Cancel changes** en probeer het opnieuw door een bestaand blok te kopiëren.
- Staat de wijziging niet meteen op de website? Wacht een paar minuten, ververs de pagina en probeer eventueel een privévenster.
- Werkt een PDF of foto niet? Controleer hoofdletters, de bestandsnaam en of elke spatie als `%20` is geschreven.
- Twijfel je? Maak eerst een screenshot van wat je wilt wijzigen of stuur de nieuwe tekst/foto door. Dan kan het veilig worden nagekeken.

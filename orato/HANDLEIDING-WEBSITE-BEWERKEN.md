# Website aanpassen

Alle normale wijzigingen staan in [app/content/websiteInhoud.ts](app/content/websiteInhoud.ts). Open dat bestand op GitHub, kies het potloodje, wijzig alleen de tekst tussen aanhalingstekens en kies **Commit changes**. De website wordt daarna automatisch gepubliceerd.

## Tarief of referentie aanpassen

Zoek in `websiteInhoud.ts` naar `coaching`, `supervisie` of `presenteren`. Een nieuwe referentie maak je door het blok erboven te kopiëren, de tekst, naam en functie te wijzigen en tussen de blokken een komma te laten staan.

## Speaking Circle

Onder `speakingCircle` staan de flyer, data, locatie-tekst en investering. Een nieuwe datum moet bijvoorbeeld deze vorm houden:

`"Vrijdag 26 juni 2026 | 9.30 - 17.30 u"`

De datum verschijnt automatisch op de pagina én in het inschrijfformulier. Oude data mogen uit de lijst worden verwijderd.

## Een PDF vervangen

1. Open op GitHub de map `orato/public/downloads` (voorwaarden/privacy) of `orato/public/supervisie` (flyer).
2. Kies **Add file** → **Upload files** en upload de nieuwe PDF.
3. Kopieer de bestandsnaam en pas die aan bij `documenten` of `speakingCircle.flyer` in `websiteInhoud.ts`. Vervang spaties in de link door `%20`.

## Foto of nieuw jaar bij Ardie

1. Upload de foto naar `orato/public/Ardie` op GitHub.
2. Kopieer onder `ardie.volgendeJaren` het laatste complete blok, inclusief de accolades.
3. Wijzig jaar, titel, tekst en bij `src` de foto. Laat `accentColor` staan als `"blue"`, `"green"` of `"orange"`.

Voor andere foto’s geldt dezelfde werkwijze: upload eerst het bestand in de map van de betreffende pagina. Stuur bij twijfel de bestandsnaam door; dan kan de foto veilig op de juiste plek worden gezet.

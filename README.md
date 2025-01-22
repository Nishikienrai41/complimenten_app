# Compliment Generator

Een eenvoudige webapplicatie waarmee gebruikers willekeurige complimenten kunnen genereren en weergeven door op een knop te klikken.

## Bestandstructuur

Hier is een overzicht van de aanwezige bestanden en mappen:

- **`main.css`**: Bevat de styling van de applicatie.
- **`script.js`**: Bevat de JavaScript-logica voor het ophalen en weergeven van complimenten.
- **`data/complimenten.json`** *(niet aanwezig)*: Een JSON-bestand dat verwacht wordt complimenten te bevatten.
- HTML-bestand *(niet meegeleverd)*: Een eenvoudige HTML-pagina die de basisstructuur van de app zou moeten bevatten.

## Configuratie en Installatie

1. **Voorbereiding**:
   - Zorg ervoor dat je een werkende HTML-pagina hebt die gebruik maakt van `main.css` en `script.js`.
   - Zorg ervoor dat er een bestand `data/complimenten.json` beschikbaar is in een map genaamd `data`. Het bestand moet een JSON-object bevatten met een array van complimenten, bijvoorbeeld:
     ```json
     {
       "complimenten": [
         "Je bent geweldig!",
         "Blijf stralen!",
         "Code met passie!"
       ]
     }
     ```

2. **Installatie**:
   - Download alle bestanden en plaats ze in de juiste structuur.
   - Zorg dat de bestanden worden bediend door een webserver of open het HTML-bestand rechtstreeks in een browser.

3. **Configuratie**:
   - Zorg ervoor dat het pad naar `complimenten.json` correct is ingesteld in `script.js`.

## Documentatie

### Functies

1. **`fetchCompliments()`**:
   - Haalt de lijst van complimenten op uit het bestand `complimenten.json`.
   - Retourneert standaard complimenten als de fetch mislukt.

2. **`displayRandomCompliment(compliments)`**:
   - Toont een willekeurig compliment uit de lijst.

3. **Hoofdprogramma**:
   - Een zelfuitvoerende functie (IIFE) laadt de complimenten bij het starten van de applicatie en voegt een click-event toe aan de knop.

### CSS Stijlen

- **`#mare`**: De container voor de hoofdinhoud.
- **`#mana`**: De knop waarmee gebruikers complimenten genereren.
- **`#staf`**: Het element waarin het compliment wordt weergegeven.

## Gekende Bugs

- Het bestand `complimenten.json` wordt verwacht, maar is niet meegeleverd. Als het ontbreekt, toont de applicatie standaardcomplimenten.
- Geen foutafhandeling bij ontbrekende HTML-elementen zoals de knop (`#mana`) of de tekstcontainer (`#staf`).

## Aanvragen voor Toekomstige Features

- Dynamische ondersteuning voor meerdere talen.
- Geavanceerdere stijlopties en thema's.
- Een backend voor het beheren van complimenten.

## Auteurs

- Ontwikkeling door [Jouw Naam] of een teamlid dat verantwoordelijk is voor dit project.

## Copyright en Licentie

© 2025 [Jouw Naam]. Dit project wordt verspreid onder de MIT-licentie. Zie `LICENSE` voor meer details.

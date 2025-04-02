# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
### Bieb in Bloei
![Schermopname (71)](https://github.com/user-attachments/assets/7aa20e4f-6c57-4294-b64d-b60d58e87020)

Live website: https://the-web-is-for-everyone-interactive-wwpt.onrender.com/
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

## Gebruik
Op de hoofdpagina staan alle stekjes die worden ingeladen uit de database waar de stekjes in staan. Mochten de stekjes niet juist ingeladen worden komt er een error te staan 'Er zijn op dit moment helaas geen stekjes beschikbaar'. Onder elk stekje staat een hartje (like button). Als je op het hartje klikt en dus liked krijg je een loading spinner te zien totdat de like echt is gelukt, dit voorkomt dat de gebruiker niet weet of er echt is geliked, de persoon krijgt dus feedback. 
Het liken word opgeslagen in de database, daar staat onder elk stekje hoeveel likes het heeft. Hoeveel likes een plantje heeft heb ik nog niet kunnen uitwerken in deze website, maar dat ben ik wel van plan.

Als je op een stekje drukt ga je naar de detailpagina van het stekje. Daar staat informatie over dingen als giftigheid, land van herkomst etc..
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

## Kenmerken
De html en css is genest om overzicht te houden in de code
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/1b881faf7d715dde82e948b966c139760bcb1633/public/stekjes.css#L52-L90

De stekjes worden ingeladen door middel van for loops
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/1b881faf7d715dde82e948b966c139760bcb1633/views/stekjes.liquid#L26-L47
Een for loop hoef je maar 1 keer te schrijven en eigenlijk op basis van hoeveel keer iets in de database staat (wat in dit geval stekjes zijn) voert die die code voor elk stekje uit. Dit is handig, omdat als er nu stekjes bij zouden komen in die database die automatisch toe worden gevoegd op de website.

Mochten er geen stekjes ingeladen worden komt er een vervangende tekst te staan inplaats van alle stekjes
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/82bd9e30f4a4826716d4d950491a0cfd0b22a67a/views/stekjes.liquid#L26-L47
Het bovenste word uitgevoerd (alles boven % else %). Mocht dat niet kunnen dan geld het onderste wat in dit geval de tekst toont dat er geen stekjes beschikbaar zijn.



https://github.com/user-attachments/assets/f3c56561-f6be-4e3a-9b95-82d054d391a3


<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

## Installatie
Ga naar de website van Node.js (https://nodejs.org/en) en download de LTS versie.
Allereerst is het belangrijk om de repo te forken en clonen zodat je in je eigen omgeving zit. Ga daarom naar github en als je in de juiste repo zit druk dan fork. Na het forken open je de repo met github desktop door op de groene 'code' button en daarna op 'open with GitHub Desktop' te drukken. In github desktop clone je de repo zodat de code in vscode staat.
Nu open je je terminal en navigeer je naar de juiste map (waar je je repo lokaal hebt staan) en voer " cd 'locatie/pad van repo' " uit. Ook kan dit door in github desktop op 'repository' te drukken en daarna op 'open in command prompt'. Met de laatste manier ben je automatisch al in de juiste locatie/pad in de terminal.
Nu je in je terminal in de juiste map bent voer je 'npm install' uit in terminal om alle benodigde paketten te installeren.
Voer nu 'npm start' uit in terminal om lokaal je 'server' op te starten.
Open het adres wat te zien is na het uitvoeren van stap 4 (http://localhost:'port')
Mocht je dingen veranderen in server.js moet je je lokale 'server' opnieuw starten door 'ctrl + c' of 'cmd + c' te typen in de terminal waar je ook de server hebt opgestart.
Om hem op te starten typ je weer 'npm start' in de terminal. Nu kun je werken in je eigen omgeving doormiddel van node :)
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

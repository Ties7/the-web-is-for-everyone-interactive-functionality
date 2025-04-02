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

Mochten er geen stekjes ingeladen worden komt er een vervangende tekst te staan inplaats van alle stekjes
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/e2f30e90d9d128ed61c6f45d0513b646e9003146/views/stekjes.liquid#L45-L46

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

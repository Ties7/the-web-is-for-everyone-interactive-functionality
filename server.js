// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.get('/', async function (request, response) {
  const stekjesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_stekjes/?fields=id,naam,foto')
  const messagesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_messages/?fields=for,from')

  // const stekjesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_stekjes/?fields=id,naam,foto&filter={"id":"13"}')

  const stekjesResponseJSON = await stekjesResponse.json()
  const messagesReponseJSON = await messagesResponse.json()

  const stekjesData = stekjesResponseJSON.data
  const messagesData = messagesReponseJSON.data

  // Loop door alle stekjes in de stekjes array heen
  for(const stekje of stekjesData) {
    // Zoek naar een message uit de messages array met de juiste stekjes-id
    const message = messagesData.find((msg) => msg.for === `Stekje ${stekje.id}`)
    
    if(message) {
      // Als de message bestaat, stel de likes voor het stekje in
      stekje.likes = parseInt(message.from)
    } else {
      // Anders, stel de likes op 0 in
      stekje.likes = 0
    }
  }
  response.render('stekjes.liquid', { stekjes: stekjesData })
})

// app.get('/stekjes', async function (request, response) {
//   const stekjesResponse = await fetch('https://fdnd-agency.directus.app/items/bib_stekjes/?fields=id,naam,foto')  
//   const stekjesResponseJSON = await stekjesResponse.json()

//   response.render('stekjes.liquid', {stekjes: stekjesResponseJSON.data})

//   // dit snap ik niet

//   // 
// })


app.get('/stekje/:id', async function (request, response) {
  const stekje = request.params.id

  const stekjeResponse = await fetch(`https://fdnd-agency.directus.app/items/bib_stekjes/?filter={"id":"${stekje}"}`)  
  const stekjeResponseJSON = await stekjeResponse.json()  
  console.log(stekjeResponseJSON)

  response.render('stekje.liquid', {stekje: stekjeResponseJSON.data[0]})
})

app.post('/like', async function (request, response) {
  const url = `https://fdnd-agency.directus.app/items/bib_messages?filter={"for":"Stekje ${request.body.stekjeid}"}`

  const stekjesResponse = await fetch(url)
  const stekjesResponseJSON = await stekjesResponse.json()
  

  if(stekjesResponseJSON.data.length > 0) {
    const likes = parseInt(stekjesResponseJSON.data[0].from || '1');
    const newLikes = likes + 1;

    await fetch(`https://fdnd-agency.directus.app/items/bib_messages/${stekjesResponseJSON.data[0].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        from: newLikes,
      }),
    })
  } else {  
    await fetch('https://fdnd-agency.directus.app/items/bib_messages', {
      method: 'POST',
      body: JSON.stringify({
        for: `Stekje ${request.body.stekjeid}`,
        from: 1
      }),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  } 

  // response.redirect(303, `/stekje/${request.body.stekjeid}`)
  response.redirect(303, `/`)

})



/*
// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
app.get(…, async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render(…)
})
*/

/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})

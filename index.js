const express = require('express')
const fs = require('fs')

const server = express()
const userData = {}

//Post Daten in Json umwandeln
server.use(express.json())

//URL_String in Objekt umwandeln
server.use(express.urlencoded({extended:true}))

//Url 
server.get('/my-profile', (req,res) =>{
      
      res.set("Content-Type", "text/html; charset=utf-8")
      res.set("Accept", "application/json")
      res.set("auth-token","xxxx")
      res.set("Access-Control-Allow-Origin", "*")
      res.set("Access-Control-Allow-Methods", "GET, PUT , POST, DELETE, HEAD")
      res.send({name:'Cia'})
})

server.get('/', (req,res) =>{
      res.send(`
          <form actoin='/form-data method='POST'>
          <input type='text' name='firstname'>
          <input type='submit' value='Senden'>
          </form>`)
})

server.post('/form-data',(req,res)=>{
      userData.firstname = req.body.firstname
      res.send('Daten Erhalten' .userData.firstname)
})


server.listen(3000, () =>{
      console.log('Server is running on port 3000')
});


/** 
const server =http.createServer((req, res)=>{
      const url = req.url
      res.setHeader("Content-Type", "text/html; charset=utf-8")
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Methods", "GET, PUT , POST, DELETE, HEAD")


      if( url === '/'){
        // sendFile('./index.html', res)
        const myJSON = {
              //to send my JSNO message =>
              message: "Ich komme aus dem Mars Planet!"
        }
        res.end(JSON.stringify(myJSON))
      } 
      else if (url === "/main"){
            sendFile('./index.html' ,res)
      }
      //this is how to get fbw9 file
      else if( url === "/fbw9"){
         sendFile('./indexFBW.html', res)
            } 
            //this is how to get all images =>
            else if( url.includes ('/images')){
                  console.log("load file", url)
             res.setHeader("Content-Type", "image/jpeg")
             sendFile( '.' + url , res)
            }
            //to save out datas using chun!!!
            else if( url ==='/send-data'){
                  Request.on('data', chunk =>{
                        fs.appendFile('dataStorage.txt' ,chunk)
                  })

            }
            //otherwidse i'll get an error and let youknow to go nback to the main sites!!! 
            else {
                  res.statusCode = 404
                  res.end(`Unter ${url} gibt es keine Seite, geh bitte auf <a href="/">Startseite</a>`)
              }

})

//this is how to set my port!!!
server.listen(port, (err) =>{

      if(err){
            return console.log('fehler', err)
      }
      console.log('Server running at Port' + port)
})
*/
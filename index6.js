import express from 'express'

const app = express();

app.listen(8082, ()=>{
    console.log("Server running..")
})

//query string
//req.query.name
//req.query.age
// localhost:8080/?name=john&age=21

/* and the another way is sending through the params/request params, 
eg, backend having supporting code type,
and client can also send through req.body, 3 ways we can send */

/* the response the server send to the client is also object,
request-esponse cycle - rest api */
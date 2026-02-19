import express from 'express'

const app = express();

app.listen(8082, () => {
    console.log("running..");
})

app.get("/", (req, res) =>{
    console.log(req.url)
    res.send("response from the server")
})

app.get("/home", (req, res) => {
    console.log(req.url)
    res.send("Output from home page")
})

app.get("/home/page1", (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.headers.authorization)
})
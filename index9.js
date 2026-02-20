import express from 'express'

const app = express()

app.listen(8082, () => {
    console.log("Server running..");
})

// const logger = ()=>{

// }

// app.use(logger)

// app.get("/", (req, res) => {

// })

app.get("/", (req, res)=>{
    res.json(req.url)
})
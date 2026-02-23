// sending status code
import express from 'express'
const app = express()

app.listen(8083, ()=>{
    console.log("Server running...");
})

app.get("/", (req, res)=>{
    res.status(201).json({message: "Hello World"})
})
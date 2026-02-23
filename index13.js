import express from "express"
const app = express()
app.listen(8082, ()=>{
    console.log("server started...")
})

app.use(express.json())

const users = [];
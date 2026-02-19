import express from 'express'

const app = express();

app.listen(8082, ()=>{
    console.log("Server running..")
})

app.get("/", (req,res)=>{
    const user = {
        name:"Aditya",
        email:"abc@gmail.com"
    }
    res.send(user);
    // res.json()
})
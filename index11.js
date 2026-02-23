import express from "express"

const app = express()

app.listen(8082, ()=>{
    console.log("Server running...")
})

// app.use("/images", express.static("images"))  //middleware for giving public access to the specific files

app.use("/public", express.static("public"))
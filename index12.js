//router
import express from "express"

const app = express()

app.listen(8082, ()=>{
    console.log("Server running...")
})

// *******
const userRouter = express.Router()
const productRouter = express.Router()

userRouter.get("/", (req,res)=>{
    res.send("Hello World")
})

userRouter.post("/", (req, res)=>{
    res.send("This is post request")
})

productRouter.get("/", (req,res)=>{
    res.send("Hello World")
})

productRouter.post("/", (req, res)=>{
    res.send("This is post request")
})

// Router.use("/api/users", Router)
// *******

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
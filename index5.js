import express from 'express'

const app = express();

app.listen(8082, ()=>{
    console.log("Server running..")
})

/* app.get("/", (req,res)=>{
    console.log(req.headers);
    res.send("Hey there");
}) */

app.get("/", (a,b)=>{
    console.log(a.headers);
    b.send("Hey there");
})

//just to make it more meaningful we write req, res , otherwise 
// we can write anything, any variable of our choice there 
// 


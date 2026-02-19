import express from 'express'

const app = express();

app.listen(8082, ()=>{
    console.log("Server running..")
})

const users = [
    {id:1,name:"John", email:"hjhj", role:"st"},
    {id:2,name:"J2", email:"hjhj", role:"st"},
    {id:3,name:"J3", email:"hjhj", role:"admin"}
]
app.get("/:abc", (req, res) => {
    res.json(users)
})
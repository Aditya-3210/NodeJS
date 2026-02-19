import express from 'express';

const app = express();

app.listen(8082, () => {
    console.log("running..");
})

app.get("/:id1/:id2", (req, res) => {
    // res.send(console.log(`${req.params.id1} + ${req.params.id2}`));
    const a = Number(req.params.id1)
    const b = Number(req.params.id2)

    res.send(a + b);
})

app.get("/x/:id1/y/:id2/z/:id3", (req, res) => {
    // res.send(console.log(`${req.params.id1} + ${req.params.id2}`));
    const a = Number(req.params.id1)
    const b = Number(req.params.id2)
    const c = Number(req.params.id3)

    res.send(a + b + c);
})

// --:a/4/b/5/c/7  will this work?
// :p/q  "

//with colon its params
// with just abcd only

app.get("/:a/:b/:c/:d", (req, res)=>{
    res.send("Hello Students")
})
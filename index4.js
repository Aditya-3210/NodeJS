import express from 'express';

const app = express();

app.listen(8082, () => {
    console.log("running..");
})

/* app.get("/:id", (req, res) => {
    res.send(req.params.id);
});

app.get("/:id/:email", (req, res) => {
    res.send(req.params.id+req.params.email);
}); */

//creating routes
/* app.get("/:id", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id);
}); */

app.get("/:id/:email", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id+req.params.email);
});

app.get("/id/:id/email/:email", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    res.send(req.params.id+req.params.email);
});

app.get("/home", (req, res) => {
    res.send("Hey there")
})

//first and this fourth routes are redundant, this 
// last one will go inside the first routes only and will return the 
// corresponding written results
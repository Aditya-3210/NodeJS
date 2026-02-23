// import express from 'express'

// const app = express();

// app.listen(8082, ()=>{
//     console.log("Server running..")
// })

// const users = [
//     {id:1,name:"John", email:"hjhj", role:"st"},
//     {id:2,name:"J2", email:"hjhj", role:"st"},
//     {id:3,name:"J3", email:"hjhj", role:"admin"}
// ]
// app.get("/:abc", (req, res) => {
//     res.json(users)
// })

import express, { request, response } from "express";
const app = express();
app.listen(8082, () => {
  console.log("Server Started....");
});
app.use(express.json())
let users = [
  { id: 1, name: "avi", email: "avi@mail.com", role: "Student" },

  { id: 2, name: "satyam", email: "satyam@mail.com", role: "admin" },

  { id: 3, name: "vivaan", email: "vivaan@mail.com", role: "Student" },
];

app.get("/", (request, response) => {
  response.json(users);
});

app.post("/", (request, response) => {
//   console.log(request.body);
  const user = request.body
  users.push(user)
  response.json(users);
});
/* here we had used the if else, for failed code and 201 */

app.delete("/:id",(request,response)=>{

})

app.get("/:id", (request, response) => {
  const user = users.find((user) => user.id === Number(request.params.id));
  if (user) {
    response.json(user);
  }
});
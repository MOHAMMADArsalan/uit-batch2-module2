// https://github.com/PegasusWang/books-1/blob/master/express/express-in-action.pdf

//https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=301s
//http://latentflip.com/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const users = [];

app.use(cors("*"));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Content-type", "application/json");
//   next();
// })
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from / URL");
});

app.use((req, res, next) => {
  console.log(`URL ${req.url} , Time ${new Date().toString()}`);
  next();
});
app.use((req, res, next) => {
  //
  // status code
  // 200, 201 - OK
  // 300 - Moved
  // 400 - Validation Error
  // 500 - Server Error

  // content Type - text/plain , text/html , application/json

  //content - "Hello World", "<h1>Hello World</h1>", "{text: "Hello world"}"
  // res.writeHead(200, { "Content-Type": "text/html"});
  // res.end("<h1>Hello World</h1>");

  // const time = new Date().getMinutes();

  // if (time % 2 === 0) {
  //   next();
  // } else {
  //   res.send("UnAuthorized");
  // }

  next();
});


app.get("/abc", (req, res) => {
  res.send("Hello from /abc URL");
});

app.post("/create-user", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send("User Created Successfully");
});

app.put("/update-user/:userId", (req, res) => {
  const id = req.params.userId;
  const body = req.body;
  const user = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email
  }
  users.splice(id, 1, user);
  res.send("User Updated Successfully");
});
app.delete("/delete-user/:userId", (req, res) => {
  const id = req.params.userId;
  users.splice(id, 1);
  res.send("User Delete Successfully");
});

// app.delete()

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(8000);
// https://github.com/PegasusWang/books-1/blob/master/express/express-in-action.pdf

//https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=301s
//http://latentflip.com/

// https://drive.google.com/drive/folders/1kwQVEUiKdaM7-6zocvgtBoE8GnkKxZXQ?usp=sharing
// https://drive.google.com/drive/folders/16x0xnUTgY7HSgp2toWYoM4awjQFX62W1?usp=sharing
// https://drive.google.com/drive/folders/1O4MY2e0M_WPQ4CJUigTl3hzAplVavY9S?usp=sharing


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userModel = require("./user/model");

const url = "mongodb+srv://<username>:<password>@uit-cluster.f1v1v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const users = [];

app.use(cors("*"));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Content-type", "application/json");
//   next();
// })
app.use(bodyParser.json());

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Databased connected"))
  .catch((error) => console.log(error));

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
  const { firstName, lastName, email, password, age } = req.body;
  const body = {
    firstName,
    lastName,
    email,
    password,
    age,
    createdAt: Date.now(),
    isVerified: false
  }
  userModel.create(body)
    .then(() => {
      res.send("User Created Successfully");
    })
    .catch(() => res.send("Failed to create user"));
});

app.put("/update-user/:userId", (req, res) => {
  const id = req.params.userId;
  const body = req.body;
  const user = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email
  };
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
  userModel.find()
    .then((users) => res.send(users))
    .catch(() => res.send("Failed to fetch users"));

});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  userModel.findById(id)
  .then((user) => {
    if(user) {
      res.send(user)
    } else {
      res.send("User Not Found.")
    }
  })
  .catch(() => res.send("Failed to fetch user"))
})

app.listen(8000);



// sql
// no-sql

// table
// row
// column


// const user = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: ""
// }

// collections
// document
//field

/* [
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
]*/


// user table
// |primary id |firstName| lastName | email | Password   
// |   10        | user     | 1       |u@g.com | 9384798g 

// 

// friends table
// |primary id |firstName| lastName | email | Password   | foreign
// |   1        | user     | 1       |u@g.com | 9384798g | 10

//


// Mongo DB
// no sql -> collections -> document -> fields
// javascript
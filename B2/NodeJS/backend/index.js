const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  console.log("Server is ready !");
  res.send("This is first Server");
});

app.get("/test", function (req, res) {
  res.send("This is test page");
});

app.get("/fetch", function (request, response) {
  response.json({ message: "All Ok" });
});

// This is a demo for the nodemon

// POST
app.post("/register", function (request, response) {
  console.log(request.body.username);
  if (request.body.username === "Akash") {
    response.send("Welcome Akash");
  } else {
    response.send("Not Registered !");
  }
});

app.listen(3000, function () {
  console.log("This server is running !");
});

// creating a Node.js application

// import the express module
const express = require("express");

// create an object of express
const app = express();

// middleware
app.use(express.json());

app.listen(3000, () => console.log("Listening on port 3000..."));

// create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;

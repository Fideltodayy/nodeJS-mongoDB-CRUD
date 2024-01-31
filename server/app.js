// creating a Node.js application

// import the express module
const express = require("express");

const cors = require("cors");

// import the mongoose module
const mongoose = require("mongoose");

// create an object of express
const app = express();

// Enable CORS for all origins (for development)
app.use(cors());

// Or, enable CORS for specific origins (for production)
// app.use(cors({
//   origin: 'http://your-frontend-domain.com'
// }));

// ... your routes and other middleware

app.options("*", cors());

// middleware
app.use(express.json());

app.listen(3001, () => console.log("Listening on port 3001..."));

// create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// import the blog routes
const blogRoutes = require("./routes/NoteRoutes");

// use the blog routes
app.use("/api/notes", blogRoutes);

// export the app

module.exports = app;

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://fidelotieno11:zg7f=8GMr>DvuK=@cluster0.y2nouau.mongodb.net/?retryWrites=true&w=majority" ??
      "MONGODB_URI is not defined"
  )
  .then(() => {
    mongoose.Promise = global.Promise;
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

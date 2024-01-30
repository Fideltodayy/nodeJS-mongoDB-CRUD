const mongoose = require("mongoose");
const { Schema } = mongoose;

// create a schema
const blogSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    image: String,
  },
  { timestamps: true }
);

// create a model
const Blog = mongoose.model.Blog || mongoose.model("Blog", blogSchema);

// export the model
module.exports = Blog;

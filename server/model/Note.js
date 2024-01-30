import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://fidelotieno11:zg7f=8GMr>DvuK=@cluster0.y2nouau.mongodb.net/?retryWrites=true&w=majority" ??
      "MONGODB_URI is not defined"
  )
  .then(() => {
    mongoose.Promise = global.Promise;
    console.log("Connected to mongodb");
  });

// create a schema
const noteSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    image: String,
  },
  { timestamps: true }
);

// create a model
const Note = mongoose.model.Note || mongoose.model("Note", noteSchema);

export default Note;

const NoteModel = require("../models/Note");

exports.getAllNotes = async () => {
  return await NoteModel.find();
};

exports.createNote = async (note) => {
  return await NoteModel.create(note);
};
exports.getNoteById = async (id) => {
  return await NoteModel.findById(id);
};

exports.updateNote = async (id, note) => {
  return await NoteModel.findByIdAndUpdate(id, note);
};

exports.deleteNote = async (id) => {
  return await NoteModel.findByIdAndDelete(id);
};

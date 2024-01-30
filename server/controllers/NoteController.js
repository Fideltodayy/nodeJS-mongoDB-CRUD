const noteService = require("../services/NoteService");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json({ data: notes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await noteService.createNote(req.body);
    res.json({ data: note, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await noteService.getNoteById(req.params.id);
    res.json({ data: note, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const note = await noteService.updateNote(req.params.id, req.body);
    res.json({ data: note, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const note = await noteService.deleteNote(req.params.id);
    res.json({ data: note, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

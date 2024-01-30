const {
  getAllNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/NoteController");

const router = require("express").Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;

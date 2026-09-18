const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// GET /api/notes — newest notes first
router.get("/", async (req, res) => {
  try {
    const allNotes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(allNotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/notes — create and persist a new note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content });
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/notes/:id — remove a single note
router.delete("/:id", async (req, res) => {
  try {
    const removedNote = await Note.findByIdAndDelete(req.params.id);
    if (!removedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted", note: removedNote });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

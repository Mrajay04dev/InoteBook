const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Route 1: Get All The Notes Using GET "/api/auth/fetchalluser". Login required
router.get("/fetchalluser", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.newUser.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occurred");
  }
});

// Route 2: Add Notes Using POST "/api/auth/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Please enter a valid Title").isLength({ min: 3 }),
    body("description").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // Validation
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.newUser.id,
      });

      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occurred");
    }
  }
);

// Route 3: Update Notes Using PUT "/api/auth/updatenote". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  // Create a newNote object
  const newNote = {};

  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  // Find the note and update it
  try {
    let note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).send("Note Not Found");
    }

    if (note.user.toString() !== req.newUser.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.json(note); // Send the updated note as a response
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route 4: Delete Notes Using DELETE "/api/auth/deletenote". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  // Find the note and delete it
  try {
    let note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).send("Note Not Found");
    }

    // Allow deletion only if the user owns the note
    if (note.user.toString() !== req.newUser.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json("Note has been deleted"); // Send the updated note as a response
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

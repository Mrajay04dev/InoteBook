const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Route 1 : Get All The Notes Using GET "/api/auth/fetchalluser". login required

router.get("/fetchalluser", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.newUser.id });

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occurred");
  }
});
// Route 2 :Add Notes Using POST "/api/auth/addnote". login required

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

module.exports = router;

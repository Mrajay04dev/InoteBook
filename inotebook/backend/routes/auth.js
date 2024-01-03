const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using : POST ||   "/api/'auth/signup".  No Login Required
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("name")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 5 characters long"),

    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    // If Errors Return Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check weather the user exists or not
    try {
      let newUser = await User.findOne({ email: req.body.email });
      if (newUser) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email  already exists" });
      }
      newUser = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      });
      res.json(newUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

module.exports = router;

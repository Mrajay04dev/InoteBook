const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ajayisgoodboy1@";

//Route:1 Create a User using: POST || "/api/auth/signup". No Login Required
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
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if user with the email already exists
    try {
      let newUser = await User.findOne({ email: req.body.email });

      if (newUser) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }

      // Hash the password and create a new user
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      newUser = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: secPass,
      });

      // Generate JWT and send it in the response
      const data = {
        user: {
          id: newUser.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occurred");
    }
  }
);

//Route:2 Authenticate a user using: POST "/api/auth/login". No Login Required
router.post(
  "/login",
  [
    body("email", "Please enter a valid email address").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let newUser = await User.findOne({ email });

      if (!newUser) {
        return res.status(400).json({ error: "Enter Correct Credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, newUser.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Enter Correct Credentials" });
      }

      const data = {
        user: {
          id: newUser.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;

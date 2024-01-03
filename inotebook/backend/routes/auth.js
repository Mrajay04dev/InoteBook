const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using : POST ||   "/api/'auth/".  Does'nt require auth
router.post(
  "/",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("name")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 5 characters long"),

    body("password").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newUser = User.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    })
      .then((User) => res.json(User))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "Please enter a Unique Email",
          message: err.message,
        });
      });
  }
);

module.exports = router;

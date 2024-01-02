const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    hello: "Hello",
    number: 4,
  };
  res.json(obj);
});

module.exports = router;

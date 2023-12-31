const connectToMongo = require("./db");

connectToMongo();

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello Darling");
});
app.listen(port, () => {
  console.log(`App listening on the http://localhost:${port}`);
});

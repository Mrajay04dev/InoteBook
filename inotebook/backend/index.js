const connectToMongo = require("./db");
const express = require("express");
const app = express();
connectToMongo();

app.use(express.json());
const port = 8080;
// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`App listening on the http://localhost:${port}`);
});

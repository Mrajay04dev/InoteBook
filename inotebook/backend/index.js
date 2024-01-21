const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
connectToMongo();
app.use(cors());
app.use(express.json());
const port = 8080;
// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`INoteBook Backend listening on the http://localhost:${port}`);
});

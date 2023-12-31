const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ajaybro9811:ajaybro9811@cluster0.c1azzdl.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB");
      // Your code here
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectToMongo;

// external imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose"); // Updated import
const cookieParser = require("cookie-parser");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // Removed extra space
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser(process.env.COOKIE_SECRET));

mongoose
  .connect(process.env.APP, {
    // Updated mongoose connection
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Is connected"))
  .catch((err) => console.error("Connection error:", err.message)); // Improved error logging

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});

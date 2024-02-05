require("dotenv").config();
const mongoose = require("mongoose");
// Updated import
mongoose
  .connect(process.env.APP)
  .then(() => console.log("DB Is connected"))
  .catch((err) => console.error("Connection error:", err.message)); // Improved error logging

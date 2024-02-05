const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.APP)
  .then(() => console.log("DB Is connected"))
  .catch((err) => console.log(err.message));

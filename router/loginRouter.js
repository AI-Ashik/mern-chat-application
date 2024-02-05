// external inputs
const express = require("express");

// internal imports
const { getLogin } = require("../controllers/loginController");

const router = express.Router();

// login Page
router.get("/", getLogin);

module.exports = router;

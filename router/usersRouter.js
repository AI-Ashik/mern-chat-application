// external inputs
const express = require("express");

// internal imports
const { getUsers } = require("../controllers/usersController");

const router = express.Router();

// Users Page
router.get("/", getUsers);

module.exports = router;

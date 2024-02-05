// external inputs
const express = require("express");

// internal imports
const { getInbox } = require("../controllers/inboxController");

const router = express.Router();

// login Page
router.get("/", getInbox);

module.exports = router;

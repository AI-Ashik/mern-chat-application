// external inputs
const express = require("express");

// internal imports
const { getInbox } = require("../controllers/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

// login Page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;

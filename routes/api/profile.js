const express = require("express");

const {getProfile} = require("../../controllers/api/profile");

const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get("/", getProfile);

module.exports = router;

const express = require("express");

const {getAuth} = require("../../controllers/api/auth");

const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get("/", getAuth);

module.exports = router;

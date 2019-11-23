const express = require("express");

const {getUsers} = require("../../controllers/api/users");

const router = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get("/", getUsers);

module.exports = router;

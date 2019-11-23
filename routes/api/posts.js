const express = require("express");

const {getPosts} = require("../../controllers/api/posts");

const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get("/", getPosts);

module.exports = router;

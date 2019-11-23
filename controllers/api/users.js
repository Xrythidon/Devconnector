const User = require("../../models/User");

// @route   GET api/users
// @desc    Test route
// @access  Public
exports.getUsers = async (req, res) => {
  console.log(req.body);


  res.send("User route");
};

// @route   POST api/users
// @desc    Test route
// @access  Public
exports.registerUser = (req, res) => {
  console.log(req.body);

  res.send("User route");
};

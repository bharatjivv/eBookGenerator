const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Helper : Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Login User
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get current logged-in user
// @route   GET /api/auth/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update User Profile
// @route   PUT /api/auth/me
// @access  Private
exports.updateUserProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

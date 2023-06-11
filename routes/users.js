const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();
const saltRounds = 10;

router.post("/register", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.username) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const { email, password, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ email, password: hashedPassword, username });
    const result = await user.save();
    res.status(201).json(result);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    // If no user found, return error
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    // If user found, compare passwords
    const result = await bcrypt.compare(password, user.password);
    // If passwords match, return success
    if (!result) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    // If passwords don't match, return error
    res.json({ message: "Login successful", user });
  } catch (error) {}
});

module.exports = router;

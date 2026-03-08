const express = require("express");
const router = express.Router();

let usernames = [];

router.post("/", (req, res) => {
  const { username } = req.body;

  if (!username || username.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Username cannot be empty"
    });
  }

  if (usernames.includes(username)) {
    return res.json({
      success: false,
      available: false,
      message: "Username already taken"
    });
  }

  usernames.push(username);

  res.json({
    success: true,
    available: true,
    message: "Username available"
  });
});

module.exports = router;
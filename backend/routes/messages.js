const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {

  const cursor = req.query.cursor || 999999;
  const limit = parseInt(req.query.limit) || 20;

  const query = `
SELECT id, username, message, created_at
FROM messages
WHERE id < ?
ORDER BY id DESC
LIMIT ?
`;

  db.query(query, [cursor, limit], (err, result) => {

    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message
      });
    }

    res.json(result);
  });

});

module.exports = router;
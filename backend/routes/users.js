const router = require("express").Router();
const db = require("../db");

router.get("/",(req,res)=>{

  db.query(
    "SELECT DISTINCT username FROM messages",
    (err,result)=>{
      res.json(result);
    }
  );

});

module.exports = router;
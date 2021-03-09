const router = require("express").Router();
const Comments = require("../models/Comments");

router.get("/", (req, res) => {
  Comments.find((err, comments) => {
    if (err) return console.error(err);
    res.json(comments);
  });
});

module.exports = router;

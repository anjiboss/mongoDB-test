const router = require("express").Router();
const Comments = require("../models/Comments");

router.get("/", (req, res) => {
  Comments.find((err, comments) => {
    if (err) return console.error(err);
    res.json(comments);
  });
});

router.post("/", (req, res) => {
  const comment = new Comments({
    user: req.body.userName,
    comment: req.body.comment,
  });
  console.log(req.body);
  // console.log(comment);
  comment.save((err) => {
    if (err) {
      console.error(err);
    }
  });
  res.send("ok");
});

module.exports = router;

const router = require("express").Router();
const Comments = require("../models/Comments");

router.get("/:level/:index", (req, res) => {
  console.log(req.params);
  Comments.find(
    {
      level: req.params.level,
      index: req.params.index,
    },
    (err, comments) => {
      if (err) return console.error(err);
      res.json(comments);
    }
  );
});

router.post("/", (req, res) => {
  const comment = new Comments({
    user: req.body.userName,
    level: req.body.level,
    index: req.body.curNum,
    comment: req.body.comment,
  });
  console.log(req.body);
  comment.save((err) => {
    if (err) {
      console.error(err);
    }
    res.send("ok");
  });
});

module.exports = router;

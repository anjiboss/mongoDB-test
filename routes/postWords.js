const router = require("express").Router();
const Words = require("../models/Words");

router.post("/", async (req, res) => {
  const word = new Words({
    kanji: req.body.kanji,
    hanViet: req.body.hanViet,
  });
  console.log(word);
  word.save((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("ok");
});

router.get("/", (req, res) => {
  Words.find((err, words) => {
    if (err) return console.error(err);
    res.json(words);
  });
});

module.exports = router;

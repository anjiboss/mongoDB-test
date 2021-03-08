const router = require("express").Router();
const Words = require("../models/Words");

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

module.exports = router;

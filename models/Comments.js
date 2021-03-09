const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: String,
  comment: String,
});

module.exports = mongoose.model("Comments", commentSchema);

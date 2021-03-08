const mongoose = require("mongoose");

const wordsSchema = new mongoose.Schema({
  kanji: String,
  hanViet: String,
});

module.exports = mongoose.model("Words", wordsSchema);

const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();
//CORS
const cors = require("cors");

app.use(cors());

const mongoose = require("mongoose");

//MiddleWare
app.use(express.static(path.join(__dirname, "static")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import Route
const wordsRoute = require("./routes/postWords");
const commentRoute = require("./routes/comments");

//DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

//Route Middleware

app.use("/api/words/", wordsRoute);
app.use("/api/comments/", commentRoute);

app.get("/comments/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "post-comment.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening on port " + PORT));

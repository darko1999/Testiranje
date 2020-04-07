const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serija = new Schema({
  title: String,
  rating: Number,
  year: Number,
  episodes: Number,
  plot: String,
});
const Serija = mongoose.model("serija", serija);
module.exports = Serija;

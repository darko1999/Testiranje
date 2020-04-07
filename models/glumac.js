const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const glumac = new Schema({
  name: String,
  rating: Number,
  age: Number,
  movies: [String],
});
const Glumac = mongoose.model("glumac", glumac);
module.exports = Glumac;

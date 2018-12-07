const mongoose = require("mongoose");

let ItemSchema = new mongoose.Schema({
  text: String,
  title: String,
  description: String,
  img: String
});

module.exports = mongoose.model('Item', ItemSchema)
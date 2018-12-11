const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  token: String,
  cart: []
});

UserSchema.methods.buy = function() {
  this.cart = [];
  return this.save();
};

UserSchema.methods.addItem = function(fs) {
  this.cart.push(fs);
};

UserSchema.methods.deleteItem = function(fs) {
  this.cart.pop(fs);
};

module.exports = mongoose.model("User", UserSchema);

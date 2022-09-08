const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  friends: [String],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

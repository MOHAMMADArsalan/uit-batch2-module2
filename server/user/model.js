const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: Number,
  isVerified: Boolean,
  createdAt: Date
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },

}, {
    timestamps:true
});

module.exports= mongoose.model('User',userSchema)
const {model,Schema} = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  isAdmin:Boolean
}, {
    timestamps:true
});

module.exports= model('User',userSchema)
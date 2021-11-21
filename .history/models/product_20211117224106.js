const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  username: String,
  password: String,
  email: String,
  isAdmin:Boolean,
  i
}, {
    timestamps:true
});

module.exports= model('Product',productSchema)
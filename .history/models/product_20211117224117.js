const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  username: String,
  password: String,
  email: String,
  isAdmin:Boolean,
  images:[{}]
}, {
    timestamps:true
});

module.exports= model('Product',productSchema)
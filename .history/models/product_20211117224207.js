const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  : String,
  password: String,
  email: String,
  isAdmin:Boolean,
  images:[{url:String}]
}, {
    timestamps:true
});

module.exports= model('Product',productSchema)
const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  name: String,
  desc: String,
  category: String,
  price:String,
  images:Array,
  location:String
}, {
    timestamps:true
});


module.exports= model('Product',productSchema)
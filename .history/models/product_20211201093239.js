const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  name: String,
  desc: String,
  category: String,
  price:String,
  inStock:
  images:Array,
  location:String
}, {
    timestamps:true
});


module.exports= model('Product',productSchema)
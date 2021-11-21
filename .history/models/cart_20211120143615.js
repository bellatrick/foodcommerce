const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: String,
  quantity: Number,
  price:String,
  images:Array,
  location:String
}, {
    timestamps:true
});


module.exports= model('Product',productSchema)
const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: String,
  quantity: "number",

  images:Array,

}, {
    timestamps:true
});


module.exports= model('Product',productSchema)
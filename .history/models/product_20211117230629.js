const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  title: String,
  desc: String,
  category: String,
  price:Boolean,
  images:
}, {
    timestamps:true
});

module.exports= model('Product',productSchema)
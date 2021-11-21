const {model,Schema} = require("mongoose");

const cartSchema = new Schema({
  name: String,
  price: String,
  quantity: Number,
  images:String,
}, {
    timestamps:true
});


module.exports= model('Product',cartSchema)
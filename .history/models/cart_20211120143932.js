const {model,Schema} = require("mongoose");

const cartSchema = new Schema({
  name: String,
  price: String,
  quantity: Number,
  image:String
}, {
    timestamps:true
});


module.exports= model('Product',cartSchema)
const {model,Schema} = require("mongoose");

const shippingCostSchema = new Schema({
  uKToNigeria:String,
  NigeriaToUK:String
}, {
    timestamps:true
});

module.exports= model('Product',shippingCostSchema)

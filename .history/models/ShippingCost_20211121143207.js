const {model,Schema} = require("mongoose");

const shippingCostSchema = new Schema({
  uKToNigeria:String,
  nigeriaToUK:String
}, {
    timestamps:true
});

module.exports= model('Shipping',shippingCostSchema)

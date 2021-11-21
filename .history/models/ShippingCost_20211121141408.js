const {model,Schema} = require("mongoose");

const shippingCostSchema = new Schema({
  UKToNigeria:String,
  NigeriaToUK:String
}, {
    timestamps:true
});

module.exports= model('Product',shippingCostSchema)

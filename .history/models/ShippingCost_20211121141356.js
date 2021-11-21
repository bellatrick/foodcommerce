const {model,Schema} = require("mongoose");

const shippingCostSchema = new Schema({
  UKToNigeria:String
}, {
    timestamps:true
});

module.exports= model('Product',shippingCostSchema)

const {model,Schema} = require("mongoose");

const shippingCostSchema = new Schema({
  UK
}, {
    timestamps:true
});

module.exports= model('Product',shippingCostSchema)

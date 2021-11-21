const {model,Schema} = require("mongoose");

const shippingCostSchema = new Schema({

}, {
    timestamps:true
});

module.exports= model('Product',shippingCostSchema)

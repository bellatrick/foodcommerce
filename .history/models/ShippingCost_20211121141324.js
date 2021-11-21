const {model,Schema} = require("mongoose");

const shippingCostSchema = new Schema({
 products:[{
    name: String,
    price: String,
    quantity: Number,
    image:String,
    productId:String
 }],
 amount:Number
}, {
    timestamps:true
});

module.exports= model('Product',cartSchema)

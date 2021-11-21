const {model,Schema} = require("mongoose");

const cartSchema = new Schema({
 products:{
    name: String,
    price: String,
    quantity: Number,
    image:String
    productId:ID
 }
}, {
    timestamps:true
});


module.exports= model('Product',cartSchema)
const {model,Schema} = require("mongoose");

const messageSchema = new Schema({
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

module.exports= model('Product',messageSchema)

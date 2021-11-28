const {model,Schema} = require("mongoose");

const categorySchema = new Schema({
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

module.exports= model('Category',cartSchema)

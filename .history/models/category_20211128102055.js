const {model,Schema} = require("mongoose");

const categorySchema = new Schema({
 products:[{
    name: String,
 
    image:String,
  
 }],
 amount:Number
}, {
    timestamps:true
});

module.exports= model('Category',categorySchema)

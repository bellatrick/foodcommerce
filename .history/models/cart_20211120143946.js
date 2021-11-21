const {model,Schema} = require("mongoose");

const cartSchema = new Schema([{

}, {
    timestamps:true
});


module.exports= model('Product',cartSchema)
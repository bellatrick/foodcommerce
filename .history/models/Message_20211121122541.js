const {model,Schema} = require("mongoose");

const messageSchema = new Schema({
 name:String,
 email:String,
 message:String
}, {
    timestamps:true
});

module.exports= model('Product',messageSchema)

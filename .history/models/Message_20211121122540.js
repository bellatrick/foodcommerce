const {model,Schema} = require("mongoose");

const messageSchema = new Schema({
 name:String,
 mail:String,
 message:String
}, {
    timestamps:true
});

module.exports= model('Product',messageSchema)

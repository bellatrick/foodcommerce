const {model,Schema} = require("mongoose");

const messageSchema = new Schema({
 name:String,
 Email:String!
}, {
    timestamps:true
});

module.exports= model('Product',messageSchema)

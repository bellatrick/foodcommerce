const {model,Schema} = require("mongoose");

const messageSchema = new Schema({
 
}, {
    timestamps:true
});

module.exports= model('Product',messageSchema)

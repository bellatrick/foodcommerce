const {model,Schema} = require("mongoose");

const categorySchema = new Schema({
    name: String,
    image:String,
}, {
    timestamps:true
});

module.exports= model('Category',categorySchema)

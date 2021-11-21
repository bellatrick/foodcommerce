const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  username: String,
  password: String,
  email: String,
  isAdmin:Boolean,
  images:[{ur}]
}, {
    timestamps:true
});

module.exports= model('Product',productSchema)
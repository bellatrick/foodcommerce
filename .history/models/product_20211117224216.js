const {model,Schema} = require("mongoose");

const productSchema = new Schema({
  title: String,
  describe('', () => {
    
  })
  : String,
  email: String,
  isAdmin:Boolean,
  images:[{url:String}]
}, {
    timestamps:true
});

module.exports= model('Product',productSchema)
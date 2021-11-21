const { UserInputError } = require("apollo-server");

const Product = require("../../models/product");


module.exports = {
  Query:{
    getAllProducts:async()=>{
          try{
            const products = new Product.find()
          return products
          }catch(err){
            console.log(err)
          }
    },
    getProductByLocation:async()=>{
      try{

      }catch(err){
        
      }
    }
  },
  Mutation: {
    postProduct: async (_, {input: {name, desc, category, price, images,location }}) => {
      try {
        const newproduct = new Product({
          name,
          desc,
          category,
          price,
          location,
          images,
        });
        const product = await newproduct.save();
        return  product
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
  },
};

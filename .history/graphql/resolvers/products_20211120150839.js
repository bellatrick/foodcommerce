const { UserInputError, AuthenticationError } = require("apollo-server");
const { ProvidedRequiredArgumentsOnDirectivesRule } = require("graphql/validation/rules/ProvidedRequiredArgumentsRule");
const Product = require("../../models/product");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
  Query:{
    getAllProducts:async()=>{
          const products = new Product.find()
          return products
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

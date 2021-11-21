const { UserInputError } = require("apollo-server");
const Product = require("../../models/product");
module.exports = {
  Query:{
  
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

const { UserInputError, AuthenticationError } = require("apollo-server");
const Product = require("../../models/product");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
  Mutation: {
    postProduct: async (_, {input: {title, desc, category, price, images,location }}) => {
      try {
        const newproduct = new Product({
          title:title,
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

const { UserInputError } = require("apollo-server");
const Cart = require("../../models/product");


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

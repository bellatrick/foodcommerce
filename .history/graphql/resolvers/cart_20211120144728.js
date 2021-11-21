const { UserInputError } = require("apollo-server");
const Cart = require("../../models/cart");


module.exports = {
  Mutation: {
    addToCart: async (_, {input: {quantity,productId,image }}) => {
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

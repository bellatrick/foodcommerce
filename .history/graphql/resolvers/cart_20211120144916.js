const { UserInputError } = require("apollo-server");
const Cart = require("../../models/cart");


module.exports = {
  Mutation: {
    addToCart: async (_,  {quantity,productId }) => {
      try {
        const newcart = new Product({
         quantity,productId
        });
        const product = await newproduct.save();
        return  product
        
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
  },
};

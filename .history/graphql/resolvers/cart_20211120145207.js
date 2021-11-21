const { UserInputError } = require("apollo-server");
const Cart = require("../../models/cart");


module.exports = {
  Mutation: {
    addToCart: async (_,  {quantity,productId }) => {
      try {
        const newcart = new Cart({
         quantity,productId
        });
        Cart.products.push
        const product = await newcart.save();
        return  product
        
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
  },
};

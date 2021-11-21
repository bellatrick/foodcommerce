const { UserInputError } = require("apollo-server");
const Cart = require("../../models/cart");


module.exports = {
  Mutation: {
    addToCart: async (_,  {quantity,productId }) => {
      try {
        const newcart = new Cart({
         quantity,productId
        });
        const 
        Cart.products.push(newcart)
        const product = await Cart.save();
        return  product
        
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
  },
};

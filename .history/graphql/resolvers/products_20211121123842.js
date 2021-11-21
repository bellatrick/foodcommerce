const { UserInputError } = require("apollo-server");
const Product = require("../../models/product");
const Message = require("../../models/Message");
module.exports = {
  Query: {
    getAllProducts: async () => {
      try {
        const products = await Product.find();
        return products;
      } catch (err) {
        console.log(err);
      }
    },
    getProductByLocation: async (_, { location }) => {
      try {
        const products = await Product.find();
        const filteredProduct = products.filter(
          (items) => items.location === location
        );
        if (filteredProduct.length < 0) {
          throw new UserInputError("Location is not valid");
        }
        return filteredProduct;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    postMessage: async (_, { name, email, message }) => {
      try {
        const newMessage = new Message({
          name,
          email,
          message,
        });

        const msg = await newMessage.save();

        return msg;
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
    editProduct:async(_,{ input: { name, desc, category, price, images, location },id })=>{
try{
  const products = await Product.findById(id);
  if(!product){
    throw new Error("Post not found");
  }

}catch(err){
  throw new UserInputError("Something went wrong");
}
    },
    postProduct: async (
      _,
      { input: { name, desc, category, price, images, location } }
    ) => {
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
        return product;
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
  },
};

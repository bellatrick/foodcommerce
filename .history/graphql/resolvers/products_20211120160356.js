const { UserInputError } = require("apollo-server");
const Product = require("../../models/product");
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
    getProductByLocation: async (_,{location}) => {
      try {
        const products = await Product.find();
        const filteredProduct = products.filter(
          (items) => items.location === location
        );
        if()
        return filteredProduct;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
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

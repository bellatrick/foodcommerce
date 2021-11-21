const { UserInputError } = require("apollo-server");
const Product = require("../../models/product");
const Message = require("../../models/Message");
module.exports = {
  Query: {
    getProductByCategory:async(_,{category})=>{
      try {
        const products = await Product.find();
        const filteredProduct = products.filter(
          (items) => items.category === category
        );
        if (filteredProduct.length < 0) {
          throw new UserInputError("Sorry! Category not found");
        }
        return filteredProduct;
      } catch (err) {
        console.log(err);
      }
    },
    getCategories:async()=>{
      try{
        const products = await Product.find();
        const category=[]
        products.forEach(product=>category.push(product.category))
        if(category.length<1){
          return []
        }
      }catch(err){
       throw new UserInputError("Something went wrong");
      }
    },
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
    editProduct: async (
      _,
      { input: { name, desc, category, price, images, location }, id }
    ) => {
      try {
        const products = await Product.findById(id);
        if (!product) {
          throw new Error("Product not found");
        } else {
          products={ name, desc, category, price, images, location }
          await products.save()
        }
        return products
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
    deleteProduct: async (
      _,
      { id }
    ) => {
      try {
        const products = await Product.findById(id);
        if (!product) {
          throw new Error("Product not found");
        } else { 
          await products.delete()
          return "Post deleted successfully";
        }
        
      } catch (err) {
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

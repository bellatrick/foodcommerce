const { UserInputError } = require("apollo-server");
const Product = require("../../models/product");
const Message = require("../../models/Message");
const ShippingCost = require("../../models/ShippingCost");
const Category = require("../../models/category");
const Receipt = require("../../models/receipt");
const filterResults = (list, keyword) => {
  console.log(list);
  return list.filter((x) => {
    const a = x?.name?.toLowerCase().split(" ");
    const b = x?.desc?.toLowerCase().split(" ");
    const arr = [...a, ...b];

    return arr?.some((y) => y.includes(keyword.toLowerCase()));
  });
};
module.exports = {
  Query: {
    filterProductBySearch: async (_, { keyword }) => {
      try {
        const products = await Product.find();
        const filteredProduct = filterResults(products, keyword);
        if (filteredProduct.length < 0) {
          throw new UserInputError(
            "Sorry! not product found with that keyword! Try searching with a more specific term"
          );
        }
        return filteredProduct;
      } catch (err) {
        console.log(err);
      }
    },
    getProductByCategory: async (_, { category }) => {
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
    getCategories: async () => {
      try {
        const products = await Product.find();
        const category = [];
        products.forEach((product) => category.push(product.category));
        if (category.length < 1) {
          return ["Category list is empty"];
        }
        const categoryList = [...new Set(category)];
        return categoryList;
      } catch (err) {
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
    getAllReceipts: async () => {
      try {
        const receipts = await Receipt.find();
        return receipts;
      } catch (err) {
        console.log(err);
      }
    },
    getMessages: async () => {
      try {
        const messages = await Message.find();
        return messages;
      } catch (err) {
        console.log(err);
      }
    },
    getCategory: async () => {
      try {
        const category = await Category.find();
        return category;
      } catch (err) {
        console.log(err);
      }
    },
    getShipping: async () => {
      try {
        const price = await ShippingCost.find();
        return price;
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
    postShippingCost: async (_, { uKToNigeria, nigeriaToUK }) => {
      try {
        const newShipping = new ShippingCost();
        newShipping.uKToNigeria = uKToNigeria;
        newShipping.nigeriaToUK = nigeriaToUK;
        const shipping = await newShipping.save();
        return {
          ...shipping._docs,
          id: shipping._id,
        };
      } catch (err) {
        console.log(err);
      }
    },
    editShipping: async (_, { uKToNigeria, nigeriaToUK, id }) => {
      try {
        const shipping = await ShippingCost.findById(id);
        if (!shipping) {
          throw new UserInputError("Wrong id passed");
        } else {
          shipping.uKToNigeria = uKToNigeria;
          shipping.nigeriaToUK = nigeriaToUK;
          await shipping.save();
        }
        return shipping;
      } catch (err) {
        throw new UserInputError(err);
      }
    },
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
    postReceipt: async (_, { input: { phone, price, date, name, desc } }) => {
      try {
        const newReceipt = new Receipt({
          phone,
          price,
          date,
          name,
          desc,
        });
        const receipt = await newReceipt.save();
        return {
          ...receipt._doc,
          id: receipt._id,
        };
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
    editProduct: async (
      _,
      { name, desc, category, price, images, location, id, inStock }
    ) => {
      try {
        const products = await Product.findById(id);

        if (!products) {
          throw new UserInputError("Product not found");
        } else {
          products.name = name;
          products.desc = desc;
          products.category = category;
          products.price = price;
          products.inStock = inStock;
          products.images = images;
          products.location = location;
          await products.save();
        }
        return products;
      } catch (err) {
        throw new UserInputError(err);
      }
    },
    deleteProduct: async (_, { id }) => {
      try {
        const products = await Product.findById(id);
        if (!products) {
          throw new Error("Product not found");
        } else {
          await products.delete();
          return "Post deleted successfully";
        }
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
    deleteCategory: async (_, { id }) => {
      try {
        const category = await Category.findById(id);
        if (!category) {
          throw new Error("Category not found");
        } else {
          await category.delete();
          return "Category deleted successfully";
        }
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
    postCategory: async (_, { name, image }) => {
      try {
        const newCategory = new Category({
          name,
          image,
        });
        const category = await newCategory.save();
        return {
          ...category._doc,
          id: category._id,
        };
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
    postProduct: async (
      _,
      { input: { name, desc, category, price, images, location, inStock } }
    ) => {
      try {
        const newproduct = new Product({
          name,
          desc,
          category,
          inStock,
          price,
          location,
          images,
        });
        const product = await newproduct.save();
        return {
          ...product._doc,
          id: product._id,
        };
      } catch (err) {
        throw new UserInputError("Something went wrong");
      }
    },
  },
};

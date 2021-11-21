const { UserInputError, AuthenticationError } = require("apollo-server");
const Product = require('../../models/product')
const checkAuth = require("../../utils/checkAuth");

module.exports={
    Mutation:{
        postProduct:async (_, {title,desc,category,price,images})=>{
               const newproduct= new Product({
                   title,desc,category,price,images
               })
               const product= await newproduct.save()
        }
    }
}
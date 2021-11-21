const userResolvers = require("./users");
const productResolver= require('./products')
module.exports = {
  Query:{
    ...productResolver.Query
},
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolver.Mutation,
    
  },
};

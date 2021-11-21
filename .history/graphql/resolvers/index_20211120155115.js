const userResolvers = require("./users");
const productResolver= require('./products')
module.exports = {
  Query:{
    ...postsResolvers.Query,
    // ...userResolvers.Query
},
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolver.Mutation,
    ...productResolver.Query
  },
};

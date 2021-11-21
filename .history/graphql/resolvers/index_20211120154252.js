const userResolvers = require("./users");
const productResolver= require('./products')
module.exports = {
  Mutation: {
    ...userResolvers.Mutation,
    ...productResolver.Mutation,
    ...productResolver.Query
  },
};

const userResolvers = require("./users");
const productResolver
module.exports = {
  Mutation: {
    ...userResolvers.Mutation,
  },
};

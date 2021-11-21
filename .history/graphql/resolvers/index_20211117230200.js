const userResolvers = require("./users");
const product
module.exports = {
  Mutation: {
    ...userResolvers.Mutation,
  },
};

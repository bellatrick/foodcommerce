const userResolvers = require("./users");
const productResolver= require()
module.exports = {
  Mutation: {
    ...userResolvers.Mutation,
  },
};

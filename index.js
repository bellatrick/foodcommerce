const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require('./graphql/typedefs')
const { MONGODB } = require("./config");
const resolvers = require('./graphql/resolvers')

const PORT = process.env.PORT ||PORT
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:({req})=>({req})
});
mongoose
  .connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("mongobd running"), server.listen({ port: PORT }))
  .then(() => {
    console.log("server is running");
  });

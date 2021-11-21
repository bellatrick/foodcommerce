const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require('./graphql/typedefs')
const { MONGODB } = require("./config");
const resolvers = require('./graphql/resolvers')
const pubsub = new PubSub()
const PORT = process.env.PORT ||PORT
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:({req})=>({req,pubsub})
});
mongoose
  .connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("mongobd running"), server.listen({ port: port }))
  .then(() => {
    console.log("server is running");
  });

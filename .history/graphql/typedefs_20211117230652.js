const gql = require("graphql-tag");
module.exports = gql`
  input RegisterInput {
    username: String!
    password: String!
    email: String!
  }
 
  type UserReg {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String
  }
  type Products{
    title: String!
  desc: String!
  category: String!
  price:Boolean!
  images: [Image]!
  }
  input ProductInput{
    title: String!
  desc: String!
  category: String!
  price:Boolean!
  images: [String]!
  }
  type Query {
   getProducts:String!
  }
  type Mutation {
    register(registerInput: RegisterInput): UserReg!
    login(username: String!, password: String!): UserReg!
    postProduct(input:ProductInput):Products!
  }
`;

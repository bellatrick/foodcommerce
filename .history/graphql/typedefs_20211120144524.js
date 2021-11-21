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
  title: String
  desc: String
  category: String
  price:String
  images: [String]
  }
  input ProductInput{
    name: String!
  desc: String!
  category: String!
  price:String!
  location:String
  images: [String]!
  }
  input CartInput{
    name:String!
    quantity:Number!
    image:String!
    price:String!
    productId:ID!
  }
  type Query {
   getProducts:String!
  }
  type Mutation {
    register(registerInput: RegisterInput): UserReg!
    login(username: String!, password: String!): UserReg!
    postProduct(input:ProductInput):Products!
    addToCart(input:Cart)
  }
`;

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
  name: String
  desc: String
  category: String
  price:String
  images: [String]
  location:String
  id:ID
  }
  input ProductInput{
  name: String!
  desc: String!
  category: String!
  price:String!
  location:String!
  images: [String]!
  }
  type ShippingCost{
    uKToNigeria:String!
    nigeriaToUK:String!
  }
type message{
  name:String!
  email:String!
  message:String
}
  type Query {
   getAllProducts:[Products]
   getProductByLocation(location:String):[Products]!
   getProductByCategory(category:String):[Products]!
   filterProductBySearch(keyword:String):[Products]!
   getCategories:[String]!
   getShipping:ShippingCost]

  }
  type Mutation {
    register(registerInput: RegisterInput): UserReg!
    login(username: String!, password: String!): UserReg!
    postProduct(input:ProductInput):Products!
    editProduct(id:ID!,name:String,desc:String,category:String,location:String,price:String, images:[String]):Products!
    deleteProduct(id:ID):String!
    postMessage(name:String,email:String,message:String):message!
    postShippingCost(uKToNigeria:String,nigeriaToUK:String):ShippingCost!
  }
`;

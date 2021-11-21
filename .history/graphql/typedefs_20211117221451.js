const gql = require("graphql-tag");
module.exports = gql`
 
  input RegisterInput {
    username: String!
    password: String!
    email: String!
  }
  input ProfileInput {
    username: String
    bio: String
    website: String
    DOB: String
    profilePic: String
  }
  type ProfileInputType {
    bio: String
    website: String
    DOB: String
  }
  type UserReg {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String
  }
  type Query {
   getProducts():String!
  }
  type Mutation {
    register(registerInput: RegisterInput): UserReg!
    login(username: String!, password: String!): UserReg!
   
  }
`;

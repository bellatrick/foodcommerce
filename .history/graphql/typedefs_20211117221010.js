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
   
  }
  type Mutation {
    register(registerInput: RegisterInput): UserReg!
    login(username: String!, password: String!): UserReg!
    createPosts(body: String!): Post!
    deletePost(id: ID): String!
    likePost(postId: ID): Post!
    retweetPost(postId: ID): Post!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    followUser(userId: ID): UserReg!
    profileUpload(profileInput: ProfileInput): ProfileInputType!
    uploadPhoto(photo:String):String
  }
`;

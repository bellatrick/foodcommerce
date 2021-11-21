
const postsResolvers = require('./post')
const userResolvers=require('./users')
const commentResolvers = require('./comments')
module.exports={
    Query:{
      
    },
    Mutation:{
        ...userResolvers.Mutation,
      
       
    }
}
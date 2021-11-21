
const postsResolvers = require('./post')
const userResolvers=require('./users')
const commentResolvers = require('./comments')
module.exports={
    Query:{
        ...postsResolvers.Query,
        // ...userResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
      
       
    }
}
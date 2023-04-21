const Users = require('./users.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Follows = require('./follows.models')
const Comments = require('./comments.models')
const PostsMultimedia = require('./posts_multimedia.models')

const initModels = () => {
    //? hasOne
    //? hasMany
    //? belongsTo
    //? belongsToMany

    //* Users 1:M Posts
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //* Posts 1:M Comments
    
    //* Users 1:M Comments

    //* Posts 1:M PostsMultimedia



}

module.exports = initModels

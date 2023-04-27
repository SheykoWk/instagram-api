const uuid = require('uuid')

const Comments = require('../models/comments.models')
const Posts = require('../models/posts.models')
const Users = require('../models/users.models')

const findAllCommentsByPostId = async (postId) => {
    const comments = await Comments.findAll({
        where: {
            postId: postId
        },
        include: [
            {
                model: Users
            },
            {
                model: Posts
            }
        ]

    })
    return comments
}

const createComment = async (commentObj) => {
    const newComment = await Comments.create({
        id: uuid.v4(),
        content: commentObj.content,
        postId: commentObj.postId,
        userId: commentObj.userId
    })
    return newComment
}


module.exports = {
    findAllCommentsByPostId,
    createComment
}

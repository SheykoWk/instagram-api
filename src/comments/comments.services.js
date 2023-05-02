const commentsControllers = require('./comments.controllers')

const getAllCommentsByPost = (req, res) => {
    const postId = req.params.id 
    commentsControllers.findAllCommentsByPostId(postId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

const postComment = (req, res) => {
    const { content } = req.body
    const postId = req.params.id
    const userId = req.user.id
    commentsControllers.createComment({content, postId, userId})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}


module.exports = {
    getAllCommentsByPost,
    postComment
}

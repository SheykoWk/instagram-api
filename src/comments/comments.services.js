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



module.exports = {
    getAllCommentsByPost
}

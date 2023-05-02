const likesControllers = require('./likes.controllers')

const getAllLikesByPost = (req, res) => {
    const postId = req.params.id 
    likesControllers.findAllLikesFromPost(postId)
        .then(data => {
            res.status(200).json({
                count: data.count,
                result: data.rows
            })
        })
        .catch(err => res.status(400).json({err: err.message}))
}

const postLike = (req, res) => {
    const postId = req.params.id
    const userId = req.user.id
    likesControllers.createLikes(postId, userId)
        .then(data => {
            res.status(201).json({data})
        })
        .catch(err => res.status(400).json({err: err.message}))
}

module.exports = {
    getAllLikesByPost,
    postLike
}
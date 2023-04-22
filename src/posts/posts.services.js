const postControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    postControllers.findAllPosts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({err})
        })
}

const getPostById = (req, res) => {
    const id = req.params.id
    postControllers.findPostById(id)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Post not found'})
            }
        })
        .catch(err => {
            res.status(400).json({err})
        })
}

const postNewPost = (req, res) => {
    const { content } = req.body
    const userId = req.user.id
    postControllers.createPost({content, userId})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({err})
        })
}

const patchPost = (req, res) => {
    const id = req.params.id 
    const { content } = req.body
    const userId = req.user.id
    postControllers.updatePost(id, userId, {content})
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({message: "Post not found"})
            }
        })
        .catch(err => {
            res.status(400).json({err})
        })
}

const deletePost = (req, res) => {
    const id = req.params.id;
    const userId = req.user.id
    postControllers.deletePost(id, userId)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({message: "Post not found"})
            }
        })
        .catch(err => {
            res.status(400).json({err})
        })
}

module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    patchPost,
    deletePost
}

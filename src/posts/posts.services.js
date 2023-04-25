const postControllers = require('./posts.controllers')
const { host } = require('../../config')
 
const getAllPosts = (req, res) => {

    const offset = Number(req.query.offset) || 0
    const limit = Number(req.query.limit) || 10

    postControllers.findAllPosts(offset, limit)
        .then((data) => {
            
            const nextPageUrl = (data.count - offset) > limit ? `${host}/api/v1/posts?limit=${limit}&offset=${offset + limit}`: null;
            const prevPageUrl = (offset - limit) >= 0 ? `${host}/api/v1/posts?limit=${limit}&offset=${offset - limit}`: null;

            res.status(200).json({
                count: data.count,
                next: nextPageUrl,
                prev: prevPageUrl,
                results: data.rows
            })
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

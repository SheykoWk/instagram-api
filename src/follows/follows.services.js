const Users = require('../models/users.models')
const followsControllers = require('./follows.controllers')

const getAllFollows = (req, res) => {
    const userId = req.user.id
    followsControllers.findAllFollowsByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

const getAllFollowers = (req, res) => {
    const userId = req.user.id
    followsControllers.findAllFollowersByUser(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

const postNewFollow = (req, res) => {
    const userId = req.user.id
    const userId2 = req.params.id
    followsControllers.createFollowToUser(userId, userId2)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

const deleteFollow = (req, res) => {
    const userId = req.user.id
    const userId2 = req.params.id 
    followsControllers.deleteFollow(userId, userId2)
        .then(data => {
            if(!data) return res.status(404).json({message: 'Invalid ID'})

            res.status(200).json({message: 'User unfollowed successfully'})
        })
        .catch(err => {
            res.status(400).json({err: err.message})
        })
}

module.exports = {
    getAllFollowers,
    getAllFollows,
    postNewFollow,
    deleteFollow
}

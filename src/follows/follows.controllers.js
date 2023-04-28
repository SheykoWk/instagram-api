const Follows = require('../models/follows.models')

const findAllFollowsByUser = async (userId) => {
    const follows = await Follows.findAll({
        where: {
            userId: userId //? Follows
        }
    })
    return follows
}

const findAllFollowersByUser = async (userId) => {
    const follows = await Follows.findAll({
        where: {
            userId2: userId //? Followers
        }
    })
    return follows
}

const createFollowToUser = async (userId, userId2) => {
    const newFollow = await Follows.create({
        userId,
        userId2
    })
    return newFollow
}

const deleteFollow = async (userId, userId2) => {
    const deletedFollow = await Follows.destroy({
        where: {
            userId,
            userId2
        }
    })
    return deletedFollow
}

module.exports = {
    findAllFollowersByUser,
    findAllFollowsByUser,
    createFollowToUser,
    deleteFollow
}
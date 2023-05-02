const Likes = require('../models/likes.models')
const Users = require('../models/users.models')

const findAllLikesFromPost = async (postId) => {
    const likes = await Likes.findAndCountAll({
        where: {
            postId: postId
        },
        include: {
            model :Users
        }
    })
    return likes
}

const createLikes = async (postId, userId) => {
    const validateIfLikeExists = await Likes.findOne({
        where: {
            postId,
            userId
        }
    })

    if(validateIfLikeExists){
        await validateIfLikeExists.destroy()
        return false
    }

    await Likes.create({
        postId,
        userId
    })
    return true
}

module.exports = {
    findAllLikesFromPost,
    createLikes
}

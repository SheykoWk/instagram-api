const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')
const Posts = require('./posts.models')

const Likes = db.define('likes', {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        },
    },
    postId: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Posts,
            key: 'id'
        }
    }
})

module.exports = Likes

const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Posts = require('./posts.models')
const Users = require('./users.models')

const Comments = db.define('comments', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Posts,
            key: 'id'
        },
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM('active', 'deleted')
    }
})

module.exports = Comments
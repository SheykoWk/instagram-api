const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
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

module.exports = Posts

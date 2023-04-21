const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {
    userId : {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    },
    userId2: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    }
})

module.exports = Follows

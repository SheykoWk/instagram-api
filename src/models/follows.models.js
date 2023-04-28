const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {
    userId : { //? Usuario que sigue a alguien (follower)
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    },
    userId2: { //? Usuario que es seguido por alguien (following)
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    }
})

module.exports = Follows

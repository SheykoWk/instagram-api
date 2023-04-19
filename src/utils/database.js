const {Sequelize} = require('sequelize')

const config = require('../../config')

const environment = config.nodeEnv

const db = new Sequelize(config.db[environment])

module.exports = db
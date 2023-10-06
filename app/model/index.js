const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize('krisna_test_1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection
const { Sequelize } = require('sequelize');
require('dotenv').config()

// const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
//     host: process.env.MYSQLHOST,
//     port: process.env.MYSQLPORT,
//     dialect: 'mysql'
// });

const sequelize = new Sequelize("revou_jayapura", "root", "", {
        host: "localhost",
        dialect: 'mysql',
        logging: false
    });

module.exports = sequelize;
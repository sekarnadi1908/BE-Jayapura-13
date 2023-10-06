const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Gambar = sequelize.define('Gambar', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
});

module.exports = Gambar
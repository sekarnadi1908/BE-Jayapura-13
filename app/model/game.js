const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Game = sequelize.define('Game', {
    linkGames: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linkPictures: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Game
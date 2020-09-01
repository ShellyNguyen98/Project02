const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Feed extends Model { }

Feed.init ({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'feed' })

module.exports = Feed
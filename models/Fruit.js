const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Fruit extends Model { }

Fruit.init ({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'fruit' })

module.exports = Fruit
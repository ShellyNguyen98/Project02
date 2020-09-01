
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Horse extends Model { }

Horse.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false
  },
  

}, {sequelize, modelName: 'horse'})

module.exports = Horse
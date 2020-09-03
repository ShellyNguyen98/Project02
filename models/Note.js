
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Note extends Model { }

Note.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {sequelize, modelName: 'note'})

module.exports = Note
const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/horse_db')
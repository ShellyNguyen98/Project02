const Sequelize = require('sequelize')

module.exports = new Sequelize (process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost/ranchhand_db')
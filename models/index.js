const Horse = require('./Horse.js')
const Owner = require('./Owner.js')
const Note = require('./Note.js')

Owner.hasMany(Horse)
Horse.hasMany(Note)

Horse.belongsTo(Owner)
Note.belongsTo(Horse)

module.exports = { Owner, Horse, Note }
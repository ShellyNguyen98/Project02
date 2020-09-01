const Horse = require('./Horse.js')
const Owner = require('./Owner.js')
const Note = require('./Note.js')
const Feed = require('./Feed')
const Fruit = require('./Fruit')

Owner.hasMany(Horse)
Horse.hasMany(Note)
Feed.hasMany(Horse)
Fruit.hasMany(Horse)

Horse.belongsTo(Owner)
Note.belongsTo(Horse)
Horse.belongsTo(Feed)
Horse.belongsTo(Fruit)

module.exports = { Owner, Horse, Note,Feed, Fruit }
const Horse = require('./Horse.js')
// const Owner = require('./Owner.js')
const Note = require('./Note.js')
const Feed = require('./Feed.js')
const Fruit = require('./Fruit.js')


Horse.hasMany(Note)
Horse.hasMany(Feed)
Horse.hasMany(Fruit)

Note.belongsTo(Horse)
Feed.belongsTo(Horse)
Fruit.belongsTo(Horse)


module.exports = { Horse, Note, Feed, Fruit }
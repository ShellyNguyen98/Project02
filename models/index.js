const Horse = require('./Horse.js')
// const Owner = require('./Owner.js')
const Note = require('./Note.js')
const Feed = require('./Feed.js')
const Fruit = require('./Fruit.js')


// Note.hasMany(Horse)
Feed.hasOne(Horse)
Fruit.hasOne(Horse)

// Horse.belongsTo(Note)
Horse.belongsTo(Feed)
Horse.belongsTo(Fruit)


module.exports = { Horse, Note, Feed, Fruit }
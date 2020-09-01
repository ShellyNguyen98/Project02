const router = require('express').Router()
const { Horse, Feed } = require('../models')

//GET all feeds
router.get('/feeds', (req, res) => {
  Feed.findAll()
    .then(feeds => res.json(feeds))
    .catch(err => console.log(err))
})

//GET one feed
router.get('/feeds/:id', (req, res) => {
  Feed.findOne({ where: { id: req.params.id }, include: [Horse] })
    .then(feed => res.json(feed))
    .catch(err => console.log(err))
})

//POST one feed
router.post('/feeds', (req, res) => {
  Feed.create(req.body)
    .then(feed => res.json(feed))
    .catch(err => console.log(err))
})

//PUT one feed
router.put('/feeds/:id', (req, res) => {
  Feed.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE one feed
router.delete('/feeds/:id', (req, res) => {
  Feed.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
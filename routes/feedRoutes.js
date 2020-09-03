const router = require('express').Router()
const {Horse, Feed} = require('../models')


//GET all food choices
router.get('/feeds', (req, res) => {
  Feed.findAll()
    .then(feed => res.json(feed))
    .catch(err => console.log(err))
})

//GET one food item
router.get('/feeds/:id', (req, res) => {
  Feed.findOne({where: {id: req.params.id}, include: [Horse]})
    .then(feed => res.json(feed))
    .catch(err => console.log(err))
})

//POST one food
router.post('/feeds', (req, res) => {
  Feed.create(req.body)
    .then(feed => res.json(feed))
    .catch(err => console.log(err))
})

//PUT one food item
router.put('/feeds/:id', (req, res) => {
  Feed.update(req.body, {where: {id:req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE one food item
router.delete('/feeds/:id', (req, res) => {
  Feed.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
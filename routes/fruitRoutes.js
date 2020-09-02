const router = require('express').Router()
const { Horse, Fruit } = require('../models')

//GET all Fruits
router.get('/Fruits', (req, res) => {
  Fruit.findAll()
    .then(Fruits => res.json(Fruits))
    .catch(err => console.log(err))
})

//GET one Fruit
router.get('/Fruits/:id', (req, res) => {
  Fruit.findOne({ where: { id: req.params.id }, include: [Horse] })
    .then(Fruit => res.json(Fruit))
    .catch(err => console.log(err))
})

//POST one Fruit
router.post('/Fruits', (req, res) => {
  Fruit.create(req.body)
    .then(Fruit => res.json(Fruit))
    .catch(err => console.log(err))
})

//PUT one Fruit
router.put('/Fruits/:id', (req, res) => {
  Fruit.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE one Fruit
router.delete('/Fruits/:id', (req, res) => {
  Fruit.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
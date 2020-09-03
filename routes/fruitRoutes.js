const router = require('express').Router()
const {Horse, Fruit} = require('../models')


//GET all fruit choices
router.get('/fruits', (req, res) => {
  Fruit.findAll()
    .then(fruit => res.json(fruit))
    .catch(err => console.log(err))
})

//GET one fruit item
router.get('/fruits/:id', (req, res) => {
  Fruit.findOne({where: {id: req.params.id}, include: [Horse]})
    .then(fruit => res.json(fruit))
    .catch(err => console.log(err))
})

//POST one fruit
router.post('/fruits', (req, res) => {
  Fruit.create(req.body)
    .then(fruit => res.json(fruit))
    .catch(err => console.log(err))
})

//PUT one fruit item
router.put('/fruits/:id', (req, res) => {
  Fruit.update(req.body, {where: {id:req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE one fruit item
router.delete('/fruits/:id', (req, res) => {
  Fruit.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
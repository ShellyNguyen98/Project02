const router = require('express').Router()
const {Horse, Note, Owner} = require('../models')

//GET all horses
router.get('/horses', (req, res) => {
  Horse.findAll()
    .then(horses => res.json(horses))
    .catch(err => console.log(err))
})

//GET one horse
router.get('/horses/:id', (req, res) => {
  Horse.findOne({where: {id: req.params.id}, include: [Owner, Note]})
    .then(horse => res.json(horse))
    .catch(err => console.log(err))
})

//POST one horse
router.post('/horses', (req, res) => {
  Horse.create(req.body)
    .then(horse => res.json(horse))
    .catch(err => console.log(err))
})

//PUT one horse
router.put('/horses/:id', (req, res) => {
  Horse.update(req.body, {where: {id:req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE one horse
router.delete('/horses/:id', (req, res) => {
  Horse.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
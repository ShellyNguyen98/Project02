const router = require('express').Router()
const { Horse, Owner } = require('../models')

//GET all owners
router.get('/owners', (req, res) => {
  Owner.findAll()
    .then(owners => res.json(owners))
    .catch(err => console.log(err))
})

//GET one owner
router.get('/owners/:id', (req, res) => {
  Owner.findOne({ where: { id: req.params.id }, include: [Horse] })
    .then(owner => res.json(owner))
    .catch(err => console.log(err))
})

//POST one owner
router.post('/owners', (req, res) => {
  Owner.create(req.body)
    .then(owner => res.json(owner))
    .catch(err => console.log(err))
})

//PUT one owner
router.put('/owners/:id', (req, res) => {
  Owner.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE one owner
router.delete('/owners/:id', (req, res) => {
  Owner.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
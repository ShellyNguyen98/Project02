const router = require('express').Router()
const { Horse, Note } = require('../models')

//GET all notes
router.get('/notes', (req, res) => {
  Note.findAll()
    .then(notes => res.json(notes))
    .catch(err => console.log(err))
})

//GET one note
router.get('/notes/:id', (req, res) => {
  Note.findOne({ where: { id: req.params.id }, include: [Horse] })
    .then(note => res.json(note))
    .catch(err => console.log(err))
})

//POST one note
router.post('/notes', (req, res) => {
  Note.create(req.body)
    .then(note => res.json(note))
    .catch(err => console.log(err))
})

//PUT one note
router.put('/notes/:id', (req, res) => {
  Note.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

//DELETE one note
router.delete('/notes/:id', (req, res) => {
  Note.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
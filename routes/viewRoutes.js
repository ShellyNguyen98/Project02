
const router = require('express').Router()
const { join } = require('path')

router.get('/todo', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'todo.html'))
})
router.get('/about', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'Aboutus.html'))
})

router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router
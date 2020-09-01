const router = require('express').Router()

router.use('/api', require('./horseRoutes.js'))
// router.use('/api', require('./ownerRoutes.js'))
router.use('/api', require('./noteRoutes.js'))
router.use('/api', require('./feedRoutes.js'))
router.use('/api', require('./fruitRoutes.js'))
router.use('/', require('./viewRoutes.js'))

module.exports = router
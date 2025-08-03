const express = require('express')
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')


//Index
// The one needed but no completed yet 
//router.get('/', dataController.index, viewController.index)

router.get('/', viewController.index)

module.exports = router 
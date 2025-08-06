// In businessOwners/routeController.js

const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const businessViewController = require('../business/viewController')
const businessDataController = require('../business/dataController')

router.post('/', dataController.createBusinessOwner, viewController.redirectLogin)
router.get('/', viewController.signUp)

// FIXED: Login should redirect to user's business, not all businesses
// In businessOwners/routeController.js
router.post('/login', dataController.loginBusinessOwner, businessDataController.index, businessViewController.index)
router.get('/login', viewController.signIn)

router.put('/:id', dataController.updateBusinessOwner)
router.delete('/:id', dataController.auth, dataController.deleteBusinessOwner)

module.exports = router
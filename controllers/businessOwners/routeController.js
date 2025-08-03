const express = require('express')
const router = express.Router()
const dataController  = require('./dataController')
const viewController = require('./viewController')
//More consts to be added


router.post('/', dataController.createBusinessOwner, viewController.redirectLogin)//SignUp Business Owner => Login Page
router.get('/', viewController.signUp)//Show SignUp form


// router.post('/login', dataController.loginBusinessOwner, 'more stuff!! --> need to redirect to page Business Profile page') // Log in Business Owner
router.post('/login', dataController.loginBusinessOwner) // Log in Business Owner
router.get('/login', viewController.signIn) // show up Log in page 


router.put('/:id', dataController.updateBusinessOwner)//Update Business Owner

router.delete('/:id', dataController.auth, dataController.deleteBusinessOwner) //Delete Business Owner

module.exports = router 

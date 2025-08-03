const express = require('express')
const router = express.Router()
const dataController  = require('./dataController')
const viewController = require('./viewController')
//More consts to be added


router.post('/', dataController.createCustomer, viewController.redirectLogin)//SignUp Customer => Login Page
router.get('/', viewController.signUp)//Show SignUp form


router.post('/login', dataController.loginCustomer, 'more stuff!! --> need to redirect to page kayaks booking' ) // Log in Customer
router.get('/login', viewController.signIn) // show up Log in page 


router.put('/:id', dataController.updateCustomer)//Update Customer

router.delete('/:id', dataController.auth, dataController.deleteCustomer) //Delete User 
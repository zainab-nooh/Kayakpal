const express = require('express')
const router = express.Router()

const viewController = require('./viewController')
const dataController = require('./dataController')
const businessOwnerAuthDataController = require('../businessOwners/dataController')


//Index - GET

router.get('/', businessOwnerAuthDataController.auth, 
    dataController.index,
    viewController.index
)

//New - GET
router.get('/new', businessOwnerAuthDataController.auth,
    viewController.newView
)

//Delete - DELETE
router.delete('/:id', businessOwnerAuthDataController.auth,
    dataController.destroy, 
    viewController.redirectHome
)
//Update - PUT
router.put('/:id', businessOwnerAuthDataController.auth,
    dataController.update, 
    viewController.redirectShow
)
//Create - POST
router.post('/', businessOwnerAuthDataController.auth,
    dataController.create,
    viewController.redirectHome
)
//Edit - GET
router.get('/:id/edit', businessOwnerAuthDataController.auth,
    dataController.show,
    viewController.edit
)
//Show - GET
router.get('/:id', businessOwnerAuthDataController.auth,
    dataController.show,
    viewController.show
)
module.exports = router

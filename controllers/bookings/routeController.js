const express = require('express')
const router = express.Router()

const viewController = require('./viewController')
const dataController = require('./dataController')
const customerAuthDataController = require('../customers/dataController')


//Index - GET

router.get('/', customerAuthDataController.auth, 
    dataController.index,
    viewController.index
)

//New - GET
router.get('/new', customerAuthDataController.auth,
    viewController.newView
)

//Delete - DELETE
router.delete('/:id', customerAuthDataController.auth,
    dataController.destroy, 
    viewController.redirectHome
)
//Update - PUT
router.put('/:id', customerAuthDataController.auth,
    dataController.update, 
    viewController.redirectShow
)
//Create - POST
router.post('/', customerAuthDataController.auth,
    dataController.create,
    viewController.redirectHome
)
//Edit - GET
router.get('/:id/edit', customerAuthDataController.auth,
    dataController.show,
    viewController.edit
)
//Show - GET
router.get('/:id', customerAuthDataController.auth,
    dataController.show,
    viewController.show
)
module.exports = router

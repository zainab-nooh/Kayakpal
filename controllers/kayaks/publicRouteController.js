const express =  require('express')
const router  = express.Router()


const viewController = require('./viewController')
const dataController = require('./dataController')
const customerAuth = require('../customers/dataController')

    // Show All Kayaks for a customer 
router.get('/', 
    customerAuth.auth,
    dataController.showAllKayaks,
    viewController.showAllKayaks
)

// Show a specific kayaks By the Business Id 

router.get('/business/:businessId', 
    customerAuth.auth, 
    dataController.showKayaksByBusinessId,
    viewController.showByBusiness
)

module.exports =  router

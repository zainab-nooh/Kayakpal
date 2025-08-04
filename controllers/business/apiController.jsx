const Business = require('../../models/business')

// Returns json Responses 
const apiController = {
    //index - show all Business Profiles
    index(req, res) {
        res.json(res.locals.data.allBusiness)
    },
    //show -  get a single business profile
    show(req, res) {
        res.json(res.locals.data.business)
    },
    // Create a a new Business Profile
    create(req,res) {
        res.status(201).json(res.locals.data.business)
    },
    //Delete a Business Profile
    destroy(req, res) {
        res.status(200).json( { message: 'Business Profile Successfully deleted'} )
    }

}




module.exports = apiController 
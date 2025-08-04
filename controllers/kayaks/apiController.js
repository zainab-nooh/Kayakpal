const Kayak = require('../../models/kayak')

// Returns json Responses 
const apiController = {
    //index - show all Business Profiles
    index(req, res) {
        res.json(res.locals.data.kayaks)
    },
    //show -  get a single business profile
    show(req, res) {
        res.json(res.locals.data.Kayak)
    },
    // Create a a new Business Profile
    create(req,res) {
        res.status(201).json(res.locals.data.Kayak)
    },
    //Delete a Business Profile
    destroy(req, res) {
        res.status(200).json( { message: 'Kayak Profile Successfully deleted'} )
    }

}




module.exports = apiController 
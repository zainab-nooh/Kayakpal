const Booking = require('../../models/booking')

// Returns json Responses 
const apiController = {
    //index - show all Bookings
    index(req, res) {
        res.json(res.locals.data.bookings)
    },
    //show -  get a single Booking
    show(req, res) {
        res.json(res.locals.data.booking)
    },
    // Create a new Booking
    create(req,res) {
        res.status(201).json(res.locals.data.booking)
    },
    //Delete a Booking
    destroy(req, res) {
        res.status(200).json( { message: ' Booking Successfully deleted'} )
    }

}




module.exports = apiController 
const Booking = require('../../models/booking')


const dataController = {}

// Index a Booking
dataController.index = async(req, res, next )=> {
    try {
        const customer  = await req.customer.populate('bookings')
        res.locals.data.bookings = customer.bookings
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message} )
    }
}
// Delete  a Booking
dataController.destroy = async(req, res, next) => {
    try {
        await Booking.findOneAndDelete({_id: req.params.id})
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
}

//Update a Booking
dataController.update = async(req, res, next) => {
    try {
        res.locals.data.booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // Find a business profile by id and update then store 
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
}


//Create a Booking
 dataController.create = async(req, res, next ) => {
    try{
        res.locals.data.booking = await Booking.create( req.body )
         // Create a new Business Profile by taking data from body
         res.customer.bookings.addToSet( { _id: res.locals.data.booking._id} )
         // add created Profile to all pofiles by storing it 
         await req.customer.save()//save last value to show later on 
         next() 
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
 }
//Show a Booking

dataController.show = async(req, res, next ) => {
    try{
        //await for a user to tap on a business profile to show it and then store it in memory 
        res.locals.data.booking = await Booking.findById(req.params.id)
        // if there is no profile with an id in the database , give the user  message indicating that 
        if (!res.locals.data.booking) {
            throw new Error(`Could not locate a Booking with the id ${req.params.id}`)
        }
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.messsage } )
    }
}

module.exports = dataController


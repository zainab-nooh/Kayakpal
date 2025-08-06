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

dataController.create = async (req, res, next) => {
  try {
    const { date, time } = req.body;
    const bookingDateTime = new Date(`${date}T${time}`);

    const booking = await Booking.create({
        // ...req.body
      customer: req.customer._id,
      kayak: req.body.kayakId, // or however you're passing kayak
      bookingDateTime,
    });

    res.locals.data.booking = booking;
    next();
  } catch (err) {
    res.status(400).send(err.message); // <- helpful for debugging
  }
};




// //Create a Booking
// dataController.create = async (req, res, next) => {
//   try {
//     const booking = await Booking.create(req.body);
//     res.locals.data.booking = booking;

//     // Add booking to customer
//     req.customer.bookings.addToSet(booking._id);
//     await req.customer.save();

//     next();
//   } catch (error) {
//     res.status(400).send({ message: error.message });
//   }
// };

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


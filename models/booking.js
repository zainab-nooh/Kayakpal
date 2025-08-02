const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    // customer (ref),
    // kayak (ref),
    date: { type: Date, required: true },
    status: { type: boolean, required: true },

})

module.exports = mongoose.model('Booking',bookingSchema )
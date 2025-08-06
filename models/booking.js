const mongoose = require('mongoose')


const bookingSchema = new mongoose.Schema({
    customer: {type: mongoose.Schema.Types.ObjectId, ref:'Customer'},
    kayak: {type: mongoose.Schema.Types.ObjectId, ref:'Kayak'},
    bookingDateTime: { type: Date, required: true },
    duration: { type: Number, default: 60 }, // Duration in minutes
})
// const bookingSchema = new mongoose.Schema({
//      customer: {type: mongoose.Schema.Types.ObjectId, ref:'Customer'},
//      kayak: {type: mongoose.Schema.Types.ObjectId, ref:'Kayak'},

//     bookingDateTime: { type: Date, required: true },
    


// })

module.exports = mongoose.model('Booking',bookingSchema )
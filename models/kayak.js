const mongoose = require('mongoose')

const kayakSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    // business (refs)
    // bookingS []
})

module.exports = mongoose.model('Kayak',kayakSchema )
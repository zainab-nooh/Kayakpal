const mongoose = require('mongoose')

const kayakSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },

    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    photo: String, // Array of image paths
    // business (refs)
    // bookingS []
})

module.exports = mongoose.model('Kayak', kayakSchema)
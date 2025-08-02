const mongoose = require('mongoose')

const businessSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true },
    location: { type: String, required: true },
    // owner (refs)
    // kayakS []
})

module.exports = mongoose.model('Business', businessSchema)
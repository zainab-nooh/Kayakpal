const mongoose = require('mongoose')

const businessSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'BusinessOwner', 
        required: true,
        unique: true  // This prevents multiple businesses per owner
    },
    kayaks: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Kayak' 
    }]
}, {
    timestamps: true  // Optional: adds createdAt and updatedAt fields
});

// In your Business model (business.js)

// const businessSchema = new mongoose.Schema({
//     name: { type: String, required: true},
//     description: { type: String, required: true },
//     location: { type: String, required: true },
//     kayaks: [{type: mongoose.Schema.Types.ObjectId, ref:'Kayak'}]
//     // owner (refs)
//     // kayakS 
// })

module.exports = mongoose.model('Business', businessSchema)
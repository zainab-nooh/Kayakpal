const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const business = require('./business')

const businessOwnerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  business: {type: mongoose.Schema.Types.ObjectId, ref:'Business'}
// business Profile --> business.js []
// This when populates happen  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref:'Booking'}]
})

// Hide password from JSON responses
businessOwnerSchema.methods.toJSON = function() {
  const user = this.toObject()
  delete user.password
  return user
}

businessOwnerSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

businessOwnerSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id }, 'secret')
  return token
}

const BusinessOwner = mongoose.model('BusinessOwner', businessOwnerSchema)

module.exports = BusinessOwner
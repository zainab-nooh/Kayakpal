const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bookings: [{type: mongoose.Schema.Types.ObjectId, ref:'Booking'}]
// bookingS []
// This when populates happen  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref:'Booking'}]
})

// Hide password from JSON responses
customerSchema.methods.toJSON = function() {
  const user = this.toObject()
  delete user.password
  return user
}

customerSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

customerSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id }, 'secret')
  return token
}

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
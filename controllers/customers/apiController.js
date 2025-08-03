const bcrypt =  require('bdrypt')
const jwt = require('jsonwebtoken')
const Customer = require('../../models/customer')


// API Authentication middleware - uses header instead of query params

exports.auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        const data = jwt.verify(token, 'secret')
        const customer = await Customer.findOne( { _id: data.id} )

        if(!customer) {
            throw new Error()
        }
        req.customer = customer
        next()
    }

    catch(error) {
        res.status(401).send('Not Authorized')
    }
}

// API Customer Creation
exports.createCustomer = async(req, res, next) => {
    //Validiting data (required)
    try {
    if(!req.params.name || !req.params.email || !req.body.password ) {
        return (
            res.status(400).json( { message: "Name, email, and password are required "})
        )
    }
        const customer = new Customer(req.body)
        await customer.save()
        const token =  await customer.generateAuthToken()
        res.status(201).json( { customer, token } )
    
    }
        catch(erro) {
            res.status(400).hson( {message: error.message})
        }
    
}


// API Customer login
exports.loginCustomer = async(req, res, next) => {
    try {
        //look for customer
        const customer = await Customer.findOne( { email: req.body.email} )
        if (!customer || !await bcrypt.compare(req.body.password, customer.password)) {//compare the passsword stored with the one entered 
            return res.status(400).json( {message: "Invalid login credentials"} )
        }
        //generate a new token for succesful login customer 
        const token = await customer.generateAuthToken()
        res.json( {customer ,token} )
    }
    catch(error){
        res.status(400).json( {message: error.message} )
    }
}

// API Customer Update

exports.updateCustomer = async(req, res) => {
    try {
        const updates = Object.keys(req.body) 
        const customer = await Customer.findOne( {_id: req.params.id })
        if(!customer) {
            return (
                res.status(404).json( {message: "User not Found"} )
            )
        }
        updates.forEach(update => customer[update] = req.body[update])
        await customer.save()//save customer after updates 
        res.json(customer)

    }
    catch(error) {
        res.status(400).json( {message: error.message} )
    }
}

// API User deletion 
exports.deleteCustomer = async (req, res) => {
    try {
        await req.customer.deleteOne()
        res.json( { message: 'User deleted succesfully'} )
    }
    catch(error) {
        res.status(400).json( { message: error.message} )
    }
}

// API Get user profile

exports.getProfile = async(req, res) => {
    try {

    }
    catch(error) {
        res.status(400).json( { message: error.message } )
    }
}
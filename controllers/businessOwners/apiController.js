const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')
const BusinessOwner = require('../../models/businessOwner')


// API Authentication middleware - uses header instead of query params

exports.auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        const data = jwt.verify(token, 'secret')
        const businessOwner = await BusinessOwner.findOne( { _id: data.id} )

        if(!businessOwner) {
            throw new Error()
        }
        req.businessOwner = businessOwner
        next()
    }

    catch(error) {
        res.status(401).send('Not Authorized')
    }
}

// API Business Owner Creation
exports.createBusinessOwner = async(req, res, next) => {
    //Validiting data (required)
    try {
    if(!req.params.name || !req.params.email || !req.body.password ) {
        return (
            res.status(400).json( { message: "Name, email, and password are required "})
        )
    }
        const businessOwner = new BusinessOwner(req.body)
        await businessOwner.save()
        const token =  await businessOwner.generateAuthToken()
        res.status(201).json( { businessOwner, token } )
    
    }
        catch(erro) {
            res.status(400).hson( {message: error.message})
        }
    
}


// API Business Owner login
exports.loginBusinessOwner = async(req, res, next) => {
    try {
        //look for business owner
        const businessOwner = await BusinessOwner.findOne( { email: req.body.email} )
        if (!businessOwner || !await bcrypt.compare(req.body.password, businessOwner.password)) {//compare the passsword stored with the one entered 
            return res.status(400).json( {message: "Invalid login credentials"} )
        }
        //generate a new token for succesful login customer 
        const token = await businessOwner.generateAuthToken()
        res.json( {businessOwner ,token} )
    }
    catch(error){
        res.status(400).json( {message: error.message} )
    }
}

// API Business Owner Update

exports.updateBusinessOwner = async(req, res) => {
    try {
        const updates = Object.keys(req.body) 
        const businessOwner = await BusinessOwner.findOne( {_id: req.params.id })
        if(!customer) {
            return (
                res.status(404).json( {message: "User not Found"} )
            )
        }
        updates.forEach(update => businessOwner[update] = req.body[update])
        await businessOwner.save()//save business owner after updates 
        res.json(businessOwner)

    }
    catch(error) {
        res.status(400).json( {message: error.message} )
    }
}

// API User deletion 
exports.deleteBusinessOwner = async (req, res) => {
    try {
        await req.businessOwner.deleteOne()
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
const bcrypt =  require('bdrypt')
const jwt = require('jsonwebtoken')
const BusinessOwner = require('../../models/businessOwner')


//Auth middleware
exports.auth = async( req, res, next) => {
    try {
        let token 
        if(req.query.token) {//from query
            token = req.query.token //save token
        }else if(req.header('Authorization') ) {//from header
            token = req.header('Authorization').replace('Bearer', '')
        }else {
            throw new Error('No token provided')
        }

        const data =  jwt.verify(token, 'secret') 
        const businessOwner = await BusinessOwner.findOne( { _id: req.params.id})
        if (!businessOwner) {
            throw new Error()
        }
        req.businessOwner = businessOwner //save the business owner entered 
        res.locals.data.token = token //save token in locals data and then pass it in another pages and actions  
        next()
    }
    catch(error) {
        res.status(401).send('Not Authorized')
    }
}

//Create Business Owner
exports.createBusinessOwner = async(req, res, next) => {
    try {
        const businessOwner =  new BusinessOwner(req.body)
        await businessOwner.save()//save business owner 
        const token = await businessOwner.generatAuthToken() //generate a token for newly created business owner 
        res.locals.data.token = token //store token 
        req.businessOwner = businessOwner //store business owner 
        next()
    }
    catch(error) {
        res.status(400).json( { message: error.message } )
    }
}

//Login Business Owner
exports.loginBusinessOwner = async(req, res, next) => {
    try {
        const businessOwner = await BusinessOwner.findOne({ email: req.body.email }) 
        if(!businessOwner || !await bcrypt.compare(req.body.password, businessOwner.password)) {//compare password entered and saved password in database 
            res.status(400).send('Invalid login credintials')
        }
        else {
            const token = await businessOwner.generatAuthToken() // generate token for new users (Business Owners) 
            res.locals.data.token = token //store token
            req.businessOwner = businessOwner //store business owner 
            next()
        }
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
}

// Update Business Owner
exports.updateBusinessOwner = async(req, res, next) => {
    try {
        const updates =  Object.keys(req.body) 
        const businessOwner =  await BusinessOwner.findOne( { _id: req.params.id } )
        updates.forEach(update => businessOwner[update] = req.body[update])
        await businessOwner.save()//save business owner after update
        res.json(businessOwner)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
}



// Delete Business Owner 
exports.deleteBusinessOwner = async(req, res, next) => {
    try {
        await req.businessOwner.deleteOne()
        res.json( { message: "User deleted"} )
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
}
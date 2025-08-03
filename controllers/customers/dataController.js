const bcrypt =  require('bdrypt')
const jwt = require('jsonwebtoken')
const Customer = require('../../models/customer')


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
        const customer = await Customer.findOne( { _id: req.params.id})
        if (!customer) {
            throw new Error()
        }
        req.customer = customer //save the customer entered in customer
        res.locals.data.token = token //save token in locals data and then pass it in another pages and actions  
        next()
    }
    catch(error) {
        res.status(401).send('Not Authorized')
    }
}

//Create Customer
exports.createCustomer = async(req, res, next) => {
    try {
        const customer =  new Customer(req.body)
        await customer.save()//save customer 
        const token = await customer.generatAuthToken() //generate a token for newly created customer 
        res.locals.data.token = token //store token 
        req.customer = customer //store customer 
        next()
    }
    catch(error) {
        res.status(400).json( { message: error.message } )
    }
}

//Login Customer 
exports.loginCustomer = async(req, res, next) => {
    try {
        const customer = await Customer.findOne({ email: req.body.email }) 
        if(!customer || !await bcrypt.compare(req.body.password, customer.password)) {//compare password entered and saved password in database 
            res.status(400).send('Invalid login credintials')
        }
        else {
            const token = await customer.generatAuthToken() // generate token for new users 
            res.locals.data.token = token //store token
            req.customer = customer //store customer 
            next()
        }
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
}

// Update Customer 
exports.updateCustomer = async(req, res, next) => {
    try {
        const updates =  Object.keys(req.body) 
        const customer =  await Customer.findOne( { _id: req.params.id } )
        updates.forEach(update => customer[update] = req.body[update])
        await customer.save()//save customer after update
        res.json(customer)
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
}



// Delete Customer 
exports.deleteCustomer = async(req, res, next) => {
    try {
        await req.customer.deleteOne()
        res.json( { message: "User deleted"} )
    }
    catch(error) {
        res.status(400).json({message: error.message})
    }
}
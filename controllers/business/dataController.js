const Business = require('../../models/business')


const dataController = {}

// Index a Business Profile
dataController.index = async(req, res, next )=> {
    try {
        const businessProfiles  = await Business.find({})
        res.locals.data.businessProfiles = businessProfiles
        res.locals.data.token = req.query.token
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message} )
    }
}
// Delete  a Business Profile
dataController.destroy = async(req, res, next) => {
    try {
        await Business.findOneAndDelete({_id: req.params.id})
        res.locals.data.token = req.query.token
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
}

//Update a Business Profile
dataController.update = async(req, res, next) => {
    try {
        res.locals.data.business = await Business.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // Find a business profile by id and update then store 
        res.locals.data.token = req.query.token
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
}


//Create a Business Profile
 dataController.create = async(req, res, next ) => {
    console.log(req.body)
    console.log(res.locals.data)
    try{
        res.locals.data.business = await Business.create( req.body )
         // Create a new Business Profile by taking data from body
         req.businessOwner.business = res.locals.data.business._id;
         // add created Profile to all pofiles by storing it 
         await req.businessOwner.save()//save last value to show later on 
         
        //  res.locals.data.token = req.query.token
         next() 
    }

    
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
 }
//Show a Business Profile

dataController.show = async(req, res, next ) => {
    try{
        //await for a user to tap on a business profile to show it and then store it in memory 
        res.locals.data.business = await Business.findById(req.params.id)
        // if there is no profile with an id in the database , give the user  message indicating that 
        if (!res.locals.data.business) {
            throw new Error(`Could not locate a Business Profile with the id ${req.params.id}`)
        }
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
}

module.exports = dataController


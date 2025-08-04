const Kayak = require('../../models/kayak')


const dataController = {}

// Index a Kayak Profile
dataController.index = async(req, res, next )=> {
    try {
        const business  = await req.business.populate('kayaks')
        res.locals.data.kayaks = business.kayaks
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message} )
    }
}
// Delete  a Kayak Profile
dataController.destroy = async(req, res, next) => {
    try {
        await Kayak.findOneAndDelete({_id: req.params.id})
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
}

//Update a Kayak Profile
dataController.update = async(req, res, next) => {
    try {
        res.locals.data.kayak = await Kayak.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // Find a kayak profile by id and update then store 
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
}


//Create a Kayak Profile
 dataController.create = async(req, res, next ) => {
    try{
        res.locals.data.kayak = await Kayak.create( req.body )
         // Create a new Kayak Profile by taking data from body
         res.business.kayaks.addToSet( { _id: res.locals.data.business._id} )
         // add created Profile to all pofiles by storing it 
         await req.business.save()//save last value to show later on 
         next() 
    }
    catch(error) {
        res.status(400).send( { message: error.message } )
    }
 }
//Show a Kayak Profile

dataController.show = async(req, res, next ) => {
    try{
        //await for a user to tap on a business profile to show it and then store it in memory 
        res.locals.dadta.kayak = await Kayak.findById(req.params.id)
        // if there is no profile with an id in the database , give the user  message indicating that 
        if (!res.locals.data.kayak) {
            throw new Error(`Could not locate a Kayak Profile with the id ${req.params.id}`)
        }
        next()
    }
    catch(error) {
        res.status(400).send( { message: error.messsage } )
    }
}

module.exports = dataController


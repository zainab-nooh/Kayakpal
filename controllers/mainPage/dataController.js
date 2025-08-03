const Kayak =  require('../../models/kayak')

const dataController = {}

//Index Page
dataController.index = async(req, res, next) => {
    try {
     const user =  await req.user.populate('kayaks')
     res.locals.data.kayaks = user.kayaks
     next()   
    }
    catch(error) {
        res.status(400).send( { message: error.message} )
    }
}


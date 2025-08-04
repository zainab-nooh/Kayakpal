const RESOURCE_PATH = '/bookings'
const viewController = {

    //Index
    index(req, res, next) {
        res.render('bookings/Index', res.locals.data)
    },

    //Show
    show(req, res, next) {
        res.render('bookings/Show', res.locals.data)
    },
    //Edit
    edit(req, res, next) {
        res.render('bookings/Edit', res.locals.data)
    },
    //New 
    newView(req, res, next) {
        res.render('bookings/New', res.locals.data)
    },
    //Redirect Home
    redirectHome(req, res, next) {
        if(res.locals.data.token) {
            res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
        } else{
            res.redirect(RESOURCE_PATH)
        }
    },
    //Redirect Show
    redirectShow(req, res, next) {
        if(res.locals.data.token) {
            res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
        } else {
            res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
        }
    }
}

module.exports = viewController
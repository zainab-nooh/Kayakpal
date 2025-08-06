

const RESOURCE_PATH = '/kayaks'
const viewController = {

    //Index
    index(req, res, next) {
        res.render('kayaks/Index', res.locals.data)
    },

    //Show
    show(req, res, next) {
        res.render('kayaks/Show', res.locals.data)
    },
    //Edit
    edit(req, res, next) {
        res.render('kayaks/Edit', {
            kayaks: res.locals.data.kayak,
            business: res.locals.data.business,
            token: res.locals.data.token  
        })
    },
    //New 
    newView(req, res, next) {
        res.render('kayaks/New', res.locals.data)
    },
    //Redirect Home
    redirectHome(req, res, next) {
        if (res.locals.data.token) {
            res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
        } else {
            res.redirect(RESOURCE_PATH)
        }
    },
    //Redirect Show
    redirectShow(req, res, next) {
        if (res.locals.data.token) {
            res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
        } else {
            res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
        }
    }, 

    //Show All kayaks to customers (view)
    
    showAllKayaks(req, res, next) {
        res.render('kayaks/CustomerIndex', {
            kayaks: res.locals.data.kayaks
        })
    },

    //Show kayaks By businedd ID to customers (view)

    showByBusiness(req, res, next) {
        res.render('kayaks/CustomerBusinessKayaks', {
            kayaks: res.locals.data.kayaks
        })
    }
}

module.exports = viewController
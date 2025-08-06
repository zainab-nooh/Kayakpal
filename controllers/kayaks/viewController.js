const RESOURCE_PATH = '/kayaks'
const viewController = {

    //Index
    index(req, res, next) {
        // Extract token from query parameters and add it to the data
        const dataWithToken = {
            ...res.locals.data,
            token: req.query.token
        };
        res.render('kayaks/Index', dataWithToken)
    },

    //Show
    show(req, res, next) {
        // Extract token from query parameters and add it to the data
        const dataWithToken = {
            ...res.locals.data,
            token: req.query.token
        };
        res.render('kayaks/Show', dataWithToken)
    },
    
    //Edit
    edit(req, res, next) {
        res.render('kayaks/Edit', {
            kayaks: res.locals.data.kayak,
            business: res.locals.data.business,
            token: req.query.token || res.locals.data.token  
        })
    },
    
    //New 
    newView(req, res, next) {
        // Extract token from query parameters and add it to the data
        const dataWithToken = {
            ...res.locals.data,
            token: req.query.token
        };
        res.render('kayaks/New', dataWithToken)
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
        // Extract token from query parameters and add it to the data
        const dataWithToken = {
            kayaks: res.locals.data.kayaks,
            token: req.query.token
        };
        res.render('kayaks/CustomerIndex', dataWithToken)
    },

    //Show kayaks By business ID to customers (view)
    showByBusiness(req, res, next) {
        // Extract token from query parameters and add it to the data
        const dataWithToken = {
            kayaks: res.locals.data.kayaks,
            token: req.query.token
        };
        res.render('kayaks/CustomerBusinessKayaks', dataWithToken)
    }
}

module.exports = viewController
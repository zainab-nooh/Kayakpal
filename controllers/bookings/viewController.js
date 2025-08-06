const RESOURCE_PATH = '/bookings'
const viewController = {

    //Index
    index(req, res, next) {
        console.log(res.locals.data.bookings)
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
            const selectedKayak = res.locals.data.kayaks?.find(kayak => 
        kayak._id.toString() === req.params.kayakId
    );
            res.render('bookings/New', {
        customer: req.customer,  // Pass customer data
        props: res.locals.data,
        token: res.locals.data.token   // Pass other data as props
    })
        // res.render('bookings/New', res.locals.data)
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
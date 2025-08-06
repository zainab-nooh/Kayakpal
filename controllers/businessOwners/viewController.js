// // const { sign } = require("jsonwebtoken")

// const viewController = {
//     signUp(req, res, next) {
//         res.render('businessOwners/SignUp')
//     },
//     signIn( req, res, next) {
//         res.render('businessOwners/SignIn')

//     },
//     apiAuth(req, res, next) {
//         res.json( { customer: req.customer, token: res.locals.token} )
//     }, 
//     redirectLogin(req, res, next) {
//         res.redirect('/businessOwners/login')
//     }

// }

// module.exports = viewController

const viewController = {
    signUp(req, res, next) {
        res.render('businessOwners/SignUp')
    },
    
    signIn(req, res, next) {
        res.render('businessOwners/SignIn')
    },
    
    apiAuth(req, res, next) {
        res.json({ customer: req.customer, token: res.locals.token })
    },
    
    redirectLogin(req, res, next) {
        res.redirect('/businessOwners/login')
    },
    
    // NEW: Redirect to user's specific business after login
    redirectToBusiness(req, res, next) {
        const token = res.locals.data.token;
        const businessOwner = req.businessOwner;
        
        if (businessOwner.business) {
            // User has a business - redirect to it
            res.redirect(`/business/${businessOwner.business}?token=${token}`);
        } else {
            // User doesn't have a business yet - redirect to create one
            res.redirect(`/business/new?token=${token}`);
        }
    }
}

module.exports = viewController
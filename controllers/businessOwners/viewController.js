// const { sign } = require("jsonwebtoken")

const viewController = {
    signUp(req, res, next) {
        res.render('businessOwners/SignUp')
    },
    signIn( req, res, next) {
        res.render('businessOwners/SignIn')
    },
    apiAuth(req, res, next) {
        res.json( { customer: req.customer, token: res.locals.token} )
    }, 
    redirectLogin(req, res, next) {
        res.redirect('/businessOwners/login')
    }

}

module.exports = viewController
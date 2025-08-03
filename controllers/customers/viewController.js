// const { sign } = require("jsonwebtoken")

const viewController = {
    signUp(req, res, next) {
        res.render('customers/SignUp')
    },
    signIn( req, res, next) {
        res.render('customers/SignIn')
    },
    apiAuth(req, res, next) {
        res.json( { customer: req.customer, token: res.locals.token} )
    }, 
    redirectLogin(req, res, next) {
        res.redirect('/customers/login')
    }

}

module.exports = viewController
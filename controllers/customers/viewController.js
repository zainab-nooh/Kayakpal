// const { sign } = require("jsonwebtoken")

const RESOURCE_PATH = 'customers'

const viewController = {
    signUp(req, res, next) {
        res.render(`${RESOURCE_PATH}/SignUp`)
    },
    signIn( req, res, next) {
        res.render(`${RESOURCE_PATH}/SignIn`)
    },
    apiAuth(req, res, next) {
        res.json( { customer: req.customer, token: res.locals.token} )
    }, 
    redirectLogin(req, res, next) {
        res.redirect(`${RESOURCE_PATH}/login`)
    }

}

module.exports = viewController
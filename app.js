const express = require('express')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const  customerRoutes = require('./controllers/customers/routeController')
const businessOwnerRoutes = require('./controllers/businessOwners/routeController')
const indexPage = require('./controllers/Home/routeController')
const usersRoute =  require('./controllers/users/routeController')


const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.json()) // this is new this for the api
app.use(express.urlencoded({ extended: true })) // req.body
app.use(methodOverride('_method')) // <====== add method override
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))
app.use(morgan('dev'))

// Web routes (for views)
app.use('/businessOwners', businessOwnerRoutes) //Business Owners Routes connected
app.use('/customers', customerRoutes) //Customers Routes Connected
app.use('/Home', indexPage) //Main Home Page
app.use('/users', usersRoute)//Page after tapping Login in Main home page 
//customers 
//Business Owners


// API routes (for JSON responses)
// app.use('/api', apiRoutes) NOT ready now

module.exports = app
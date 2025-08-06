const express = require('express')
const router = express.Router()

const viewController = require('./viewController')
const dataController = require('./dataController')
const customerAuthDataController = require('../customers/dataController')


//Index - GET

router.get('/', customerAuthDataController.auth, 
    dataController.index,
    viewController.index
)

//New - GET
router.get('/new', customerAuthDataController.auth,
     (req, res, next) => {
    if (!res.locals.data) res.locals.data = {};
    res.locals.data.customer = req.customer; // <- pass customer to views
    next();
  }, viewController.newView
)

//Delete - DELETE
router.delete('/:id', customerAuthDataController.auth,
    dataController.destroy, 
    viewController.redirectHome
)
//Update - PUT
router.put('/:id', customerAuthDataController.auth,
    dataController.update, 
    viewController.redirectShow
)
//Create - POST
router.post('/', customerAuthDataController.auth,
    dataController.create,
    viewController.redirectHome
)
//Edit - GET
router.get('/:id/edit', customerAuthDataController.auth,
    dataController.show,
    viewController.edit
)
//Show - GET
router.get('/:id', customerAuthDataController.auth,
    dataController.show,
    viewController.show
)

// routeController.js
router.post('/bookings/merge-date-time', async (req, res, next) => {
  try {
    const { date, time, kayak } = req.body;

    const bookingDateTime = new Date(`${date}T${time}`);

    req.body.bookingDateTime = bookingDateTime;
    req.body.kayak = kayak;

    delete req.body.date;
    delete req.body.time;

    next(); // forward to your create controller
  } catch (err) {
    res.status(400).send({ message: 'Invalid date or time format' });
  }
}, dataController.create, viewController.redirectShow);

module.exports = router

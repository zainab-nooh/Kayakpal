const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload'); // Folder to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const viewController = require('./viewController');
const dataController = require('./dataController');
const businessOwnerAuthDataController = require('../businessOwners/dataController');

// Index - GET
router.get('/', businessOwnerAuthDataController.auth,
  dataController.index,
  viewController.index
);

// New - GET
router.get('/new', businessOwnerAuthDataController.auth,
  viewController.newView
);

// Delete - DELETE
router.delete('/:id', businessOwnerAuthDataController.auth,
  dataController.destroy,
  viewController.redirectHome
);

// Update - PUT (optional: support re-uploading image)
router.put('/:id', businessOwnerAuthDataController.auth,
  upload.single('photo'), // <-- Add this if PUT form allows image re-upload
  dataController.update,
  viewController.redirectShow
);

// Create - POST
router.post('/', businessOwnerAuthDataController.auth,
  upload.single('photo'), // <-- This enables image upload
  (req, res, next) =>{
    console.log(req.body)
    next()
  } ,
  dataController.create,
  viewController.redirectHome
);

// Edit - GET
router.get('/:id/edit', businessOwnerAuthDataController.auth,
  dataController.show,
  viewController.edit
);

// Show - GET
router.get('/:id', businessOwnerAuthDataController.auth,
  dataController.show,
  viewController.show
);

module.exports = router;

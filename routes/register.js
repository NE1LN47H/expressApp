var express = require('express');
var router = express.Router();
const { validationResult, check } = require('express-validator');
const User = require('../models/userModel');

const { registerValidationRules } = require('../middleware/validator');
const { registerController } = require('../controllers/registerController');

// GET /register
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register', errors: null }); 
});

// POST /register
router.post('/', registerValidationRules, registerController);

module.exports = router;

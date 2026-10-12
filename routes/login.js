var express = require('express');
var router = express.Router();
const User = require('../models/userModel'); 
const { loginController } = require('../controllers/loginController');

// GET /login
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', error: null, success: null });
});

// POST /login
router.post('/', loginController);

module.exports = router;

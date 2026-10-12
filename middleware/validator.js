const { check } = require('express-validator');

// Define validation rules for registration
const registerValidationRules = [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
];

module.exports = {
    registerValidationRules
};

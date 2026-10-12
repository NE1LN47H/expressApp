const User = require('../models/userModel');

const loginController = async function(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    
    // Check if user exists and password matches perfectly
    if (!user || user.password !== password) {
      return res.render('login', { 
        title: 'Login', 
        error: 'Invalid email or password.',
        success: null 
      });
    }

    res.send(`Welcome back! Login successful for ${user.email}.`);

  } catch (error) {
    next(error);
  }
}

module.exports = {
    loginController
}
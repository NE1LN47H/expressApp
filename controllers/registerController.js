const registerController = async function(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('register', { title: 'Register', errors: errors.array() });
    }

    const { email, password } = req.body;

    // Save user with standard text password
    const newUser = new User({ email, password });
    await newUser.save();

    // Render the login page directly with a success notice
    res.render('login', { title: 'Login', error: null, success: 'Registration successful! Please log in.' });

  } catch (error) {
    next(error);
  }
}

module.exports = {
    registerController
};
const mongoose = require('mongoose');

const db = async () => {
  try {
    // 1. Establish initial connection
    // In Mongoose v7/v8/v9, no secondary option objects (like useNewUrlParser) are needed!
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// 2. Handle ongoing connection events after initial setup
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB runtime error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected! Attempting to reconnect...');
});

module.exports = db;

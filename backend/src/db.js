// backend/src/db.js
const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) {
    throw new Error('❌ MONGO_URI is missing! Please check your .env file.');
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

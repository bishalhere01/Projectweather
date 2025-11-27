// backend/src/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(cors({ origin: CORS_ORIGIN }));

// Routes registration (safe to register before DB connect)
app.use('/api/rules', require('./routes/rules'));
app.use('/api/weather', require('./routes/weather'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start app after DB connection
;(async function start() {
  try {
    if (!MONGO_URI) {
      throw new Error('MONGO_URI missing in .env');
    }
    console.log('Connecting to MongoDB...')
    await connectDB(MONGO_URI);
    console.log('MongoDB connected. Starting server...');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err && err.message ? err.message : err);
    process.exit(1); // crash early so you fix config
  }
})();

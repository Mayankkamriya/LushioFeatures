const express = require('express');
const cors = require('cors');
require('dotenv').config();
const emailRoutes = require('./Routes/emailRoutes')

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', emailRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

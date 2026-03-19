'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Import your routes here
// const userRoutes = require('./routes/userRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
// app.use('/api/users', userRoutes);
// app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

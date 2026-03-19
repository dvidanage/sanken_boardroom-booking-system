const express = require('express');
const router = express.Router();

// User Registration Endpoint
router.post('/register', (req, res) => {
    // registration logic here
    res.status(201).send({ message: 'User registered successfully' });
});

// User Login Endpoint
router.post('/login', (req, res) => {
    // login logic here
    res.status(200).send({ message: 'User logged in successfully' });
});

module.exports = router;

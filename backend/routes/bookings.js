const express = require('express');
const router = express.Router();

// Assume we have some kind of data structure to hold bookings
let bookings = [];

// Create a new booking
router.post('/bookings', (req, res) => {
    const { date, time, user } = req.body;
    // Check for double booking
    const isDoubleBooked = bookings.some(booking => booking.date === date && booking.time === time);
    if (isDoubleBooked) {
        return res.status(400).json({ message: 'This time slot is already booked.' });
    }
    const newBooking = { id: bookings.length + 1, date, time, user };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

// Get all bookings
router.get('/bookings', (req, res) => {
    res.json(bookings);
});

// Get a single booking by ID
router.get('/bookings/:id', (req, res) => {
    const booking = bookings.find(b => b.id === parseInt(req.params.id));
    if (!booking) return res.status(404).send('Booking not found.');
    res.json(booking);
});

// Update a booking
router.put('/bookings/:id', (req, res) => {
    const booking = bookings.find(b => b.id === parseInt(req.params.id));
    if (!booking) return res.status(404).send('Booking not found.');
    const { date, time, user } = req.body;
    // Check for double booking
    const isDoubleBooked = bookings.some(b => b.date === date && b.time === time && b.id !== booking.id);
    if (isDoubleBooked) {
        return res.status(400).json({ message: 'This time slot is already booked.' });
    }
    booking.date = date;
    booking.time = time;
    booking.user = user;
    res.json(booking);
});

// Delete a booking
router.delete('/bookings/:id', (req, res) => {
    const bookingIndex = bookings.findIndex(b => b.id === parseInt(req.params.id));
    if (bookingIndex === -1) return res.status(404).send('Booking not found.');
    bookings.splice(bookingIndex, 1);
    res.status(204).send();
});

module.exports = router;
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    roomId: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['confirmed', 'pending', 'cancelled'], default: 'pending' }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
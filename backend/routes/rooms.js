const express = require('express');
const router = express.Router();

// Mock database
let rooms = [];

// CREATE: Add a new room
router.post('/rooms', (req, res) => {
    const { name, capacity } = req.body;
    const newRoom = { id: rooms.length + 1, name, capacity };
    rooms.push(newRoom);
    res.status(201).json(newRoom);
});

// READ: Get all rooms
router.get('/rooms', (req, res) => {
    res.json(rooms);
});

// READ: Get a room by ID
router.get('/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (!room) return res.status(404).send('Room not found');
    res.json(room);
});

// UPDATE: Update a room by ID
router.put('/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (!room) return res.status(404).send('Room not found');

    const { name, capacity } = req.body;
    room.name = name;
    room.capacity = capacity;
    res.json(room);
});

// DELETE: Remove a room by ID
router.delete('/rooms/:id', (req, res) => {
    const roomIndex = rooms.findIndex(r => r.id === parseInt(req.params.id));
    if (roomIndex === -1) return res.status(404).send('Room not found');

    rooms.splice(roomIndex, 1);
    res.status(204).send();
});

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const Logbook = require ('./models/Logbook')
const router = express.Router();

// Log activity
router.post('/new', async (req, res) => {
    try {
        const { username, date, activity, weather, problems, notes } = req.body;

        // Create a new logbook entry
        const newLogEntry = new Logbook({
            username,
            date,
            activity,
            weather,
            problems,
            notes
        });

        // Save the new log entry to the database
        await newLogEntry.save();

        // Send a success response
        res.status(201).json(newLogEntry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get logbook entries
router.get('/entries', async (req, res) => { // Mark the callback as async
    try {
        const logbookEntries = await Logbook.find();
        res.status(200).json(logbookEntries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; 
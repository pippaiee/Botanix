//USER MODEL
const mongoose = require('mongoose');
const LogbookSchema = new mongoose.Schema({

    username : { type: String, required: true, },
    date : {type: String, required: true},
    activity: { type: String, required: true, },
    weather: { type: String, required: true },
    problems: { type: String, required: false, },
    notes: { type: String, required: false },
    });

const Logbook = mongoose.model('Logbook', LogbookSchema);
    module.exports = Logbook;
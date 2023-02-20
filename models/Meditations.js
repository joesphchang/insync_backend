const mongoose = require ('../db/connection');

const MeditationSchema = new mongoose.Schema({
    title: String,
    genre: String,
    description: String,
    photo_url: String,
    audio: String,
    timer: Number,
    liked: Boolean,
})

const Meditations = mongoose.model('Meditations', MeditationSchema);

module.exports = Meditations;
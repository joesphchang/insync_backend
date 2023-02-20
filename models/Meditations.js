const mongoose = require ('../db/connection');

const MeditationSchema = new mongoose.Schema({
    title: String,
    genre: String,
    description: String,
    photo_url: String,
    audio: String,
    liked: Boolean,
})

const Meditation = mongoose.Model('Meditations', MeditationSchema);

module.exports = Meditation;
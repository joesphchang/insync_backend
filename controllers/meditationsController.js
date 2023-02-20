const express = require('express');

const router = express.Router();

const Meditations = require('../models/Meditations');

router.get('/', async (req, res, next) => {
    try {
        const meditations = await Meditations.find({});
        res.json(meditations)
    } catch (error) {
       next(error) 
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const meditations = await Meditations.findById(req.params.id);
        res.json(meditations);
    } catch (error) {
        next(error)
    }
})
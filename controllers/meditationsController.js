const express = require('express');

const router = express.Router();

const Meditations = require('../models/Meditations');

router.get('/', async (req, res, next) => {
    try {
        const meditations = await Meditations.find({});
        if (meditations) {
            res.status(200).json(meditations)
        } else {
            return res.sendStatus(404);
        }
    } catch (error) {
       next(error) 
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const meditations = await Meditations.findById(req.params.id);
        if (meditations) {
            res.status(200).json(meditations);
        } else {
            return res.sendStatus(404);
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;
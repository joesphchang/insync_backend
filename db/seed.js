const Meditations = require('../models/Meditations');
const meditationSeeds = require('./seed.json');

Meditations.deleteMany({})
	.then(() => {
		console.log('Deleted all the meditations');
		return meditationSeeds.map((meditations) => {
			return { ...meditations };
		});
	})
	.then((meditations) => {
        return Meditations.insertMany(meditations);
    })
    .then((newMeditations) => {
        console.log('Created a new meditation', newMeditations);
    })
    .catcH(console.error)
    .finally(() => {
        process.exit();
    });
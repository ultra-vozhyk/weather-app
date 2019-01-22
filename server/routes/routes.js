const express = require('express');
const api = require('../controllers/api');
const router = express.Router();

router.get('/city/:name', (req, res) => res.json(api.findCity(req.params.name)))
    .get('/temperature/:coord', (req, res) => {
        const { coord } = req.params;
        const splitted = coord.split(',');
        console.log(splitted)
        api.temperatureHistory(splitted[0], splitted[1]).then(values => res.json(values)).catch(e => res.status(500));
    });

module.exports = router;
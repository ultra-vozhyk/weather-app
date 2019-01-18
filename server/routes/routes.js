const express = require('express');
const api = require('../controllers/api');
const router = express.Router();

router.get('/city/:name', (req, res) => res.json(api.findCity(req.params.name)))
    .get('/temperature/:id', (req, res) => {
        api.temperatureHistory(req.params.id).then(values => res.json(values)).catch(e => res.status(500));
    });

module.exports = router;
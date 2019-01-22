const fetch = require('node-fetch');
const config = require('../config/config.json');
const apiHelpers = require('../helpers/api-helper');
const cities = require('../static/current.city.list.min.json');

class Api {
    findCity(name) {
        return cities.filter(item => item.name.includes(name));
    }

    async temperatureHistory(lat, lon) {
        const queries = apiHelpers.buildQueries(config.apiUrl, config.apiKey, lat, lon);
        
        return await Promise.all(queries.map(query => fetch(query).then(res => res.json())));
    }
}

module.exports = new Api();
const fetch = require('node-fetch');
const config = require('../config/config.json');
const apiHelpers = require('../helpers/api-helper');
const cities = require('../static/current.city.list.min.json');

class Api {
    findCity(name) {
        console.log(name)
        return cities.filter(item => item.name.includes(name));
    }

    async temperatureHistory(id) {
        const queries = apiHelpers.buildQueries(config.apiUrl, id, config.apiKey);

        return await Promise.all(queries.map((query) => fetch(query).then(res => res.json())));
    }
}

module.exports = new Api();
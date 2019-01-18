export default {
    findCity(name) {
        return fetch(`/city/${name}`).then(res => res.json());
    },

    getTemperatureForCity(city) {
        return fetch(`/temperature/${city}`).then(res => res.json);
    }
}
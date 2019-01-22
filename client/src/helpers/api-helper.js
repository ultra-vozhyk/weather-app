export default {
    findCity(name) {
        return fetch(`/city/${name}`).then(res => res.json());
    },

    getTemperatureForCity(lat, lon) {
        return fetch(`/temperature/${lat},${lon}`).then(res => res.json());
    }
}
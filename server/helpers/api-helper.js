
const buildQueries = (url, id, apiKey) => {
    const queries = [];
    const today = new Date();
    const days = today.getDate();
    today.setHours(0, 0, 0);
    today.setMilliseconds(0);

    for(let i = 0; i < days; i = i + 7) {
        today.setDate(i);

        queries.push(`${url}?id=${id}&type=hour&start=${today.getTime()}&appid=${apiKey}`)
    }

    return queries;
}

module.exports = {
    buildQueries
}

const buildQueries = (url, apiKey, lat, lon) => {
    const queries = [];
    const startDate = new Date();
    const endDate = new Date();
    
    endDate.setDate(0);
    endDate.setMinutes(0, 0, 0);
    startDate.setMonth(startDate.getMonth() - 1);
    startDate.setDate(0);
    startDate.setMinutes(0, 0, 0);
    
    while(startDate < endDate) {
        const date = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDay()) / 1000;
        queries.push(`${url}/${apiKey}/${lat},${lon},${date}?exclude=currently,minutely,hourly,alerts,flags`);

        startDate.setDate(startDate.getDate() + 1);
    }

    return queries;
}

module.exports = {
    buildQueries
}
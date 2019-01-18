const express = require('express');
const routes = require('./routes/routes')
const port = 5000;

express()
    .use('/', routes)
    .listen(port, () => console.log(`Listening on ${port}`))
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const recipesApi = require('./server/routes/api');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/api/', recipesApi);

app.listen(port, function () {
    console.log(`Running server on port ${port}`);
})


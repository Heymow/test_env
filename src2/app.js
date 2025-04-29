const express = require('express');

const app = express();

// Importation des routes
const mainRouter = require('./routes/main');

app.use('/', mainRouter);

// Exporter l'instance d'app
module.exports = app;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue du projet Express!');
});

app.listen(3000, () => {
  console.log('Serveur expres en encours sur port 3000.');
});
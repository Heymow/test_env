const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Tourne du app Node.js!");
});

app.listen(3000, () => {
  console.log("Projet Node.js est en marche le roule, port 3000");
});
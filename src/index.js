const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenue de vos entrer SrV");
});

app.listen(3000, () => {
  console.log("Le serveur journe sur port 3000.");
});
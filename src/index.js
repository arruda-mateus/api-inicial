const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let posicao = 0;

app.get("/", (req, res) => {
  res.send(`É a vez de ${jogadores[posicao]} jogar!`);
  posicao++;
  if (posicao == jogadores.length) {
    posicao = 0;
  }
});

app.listen(3000);

// const Game = require("./game.js");
import Game from "./game.js";

window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext("2d");
  new Game(ctx, canvas);
});
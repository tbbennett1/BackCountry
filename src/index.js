const Game = require("./game.js");

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("were in the event listener")
  const doc = document.getElementById('canvas');
  let ctx = doc.getContext("2d");
  const game = new Game(ctx, doc);

  game.draw();
});
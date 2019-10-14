const BackCountry = require("./backcountry.js");

window.addEventListener('DOMContentLoaded', (event) => {
  console.log("were in the event listener")
  const doc = document.getElementById('canvas');
  let ctx = doc.getContext("2d");
  const backcountry = new BackCountry(ctx, doc);

  backcountry.draw();
});
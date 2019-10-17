import Obstacles from "./obstacles.js";
import Boarder from "./boarder.js";

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.cw = canvas.width = window.innerWidth;
    this.ch = canvas.height = window.innerHeight;
    this.score = 0;
    this.game = false;
    this.obsPosY = this.ch - 50;
    this.boarder = new Boarder(this.cw, this.ch, ctx);
    this.gameObstacles = new Obstacles(this.cw, this.ch, ctx);
    document.addEventListener('keydown', this.handleEvent.bind(this));

    this.draw();
  }
  draw() {
    const cw = this.cw;
    const ch = this.ch;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, cw, ch);
    this.score++;

    const title = ctx.createLinearGradient(0, 0, 0, 170);
    title.addColorStop(0.25, "black");
    title.addColorStop(1, "green");
    ctx.fillStyle = title;

    if (this.score < 2) {
      ctx.textAlign = "center";
      ctx.font = "30px Arial";
      ctx.fillText(`BackCountry`, cw / 2, 60);
      ctx.font = "20px Arial";
      ctx.fillText(`Press the Space Bar to Start`, cw / 2, 100);
      ctx.font = "16px Arial";
      ctx.fillText(`use arrow keys to steer`, cw / 2, 124);
    }
    // Score
    ctx.textAlign = "start";
    ctx.font = "14px Arial";
    ctx.fillStyle = 'darkgreen';
    ctx.fillText(`Score: ${Math.floor((this.score - 1) / 5)} feet`, 40, 50);

    if(this.obsPosY < ch){
      this.obsPosY = this.obsPosY - 5;
    }
    this.boarder.draw();
    this.gameObstacles.draw(this.obsPosY);
  }

  handleEvent(e) {
    const keycode = e.keyCode;
 
    if (keycode === 32 && !this.game) {
      this.start();
      this.game = true;
      //   window.location.reload(true);
    }
  }

  start() {
    setInterval(this.draw.bind(this), 20);
  }

// stop() {
//   if (this.game) {

//     clearInterval(obstacleInterval);
//     clearInterval(gameInterval);
//     // this.keys = false;
//   }
// }
}


export default Game;

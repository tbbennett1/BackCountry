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

    const title = ctx.createLinearGradient(cw / 4, ch / 4, (2/4) * cw, (2/4) * ch);
    title.addColorStop(0.6, "black");
    title.addColorStop(1, "green");
    ctx.fillStyle = title;

    if (this.score < 2) {
      ctx.textAlign = "center";
      ctx.font = "80px Arial";
      ctx.fillText(`BackCountry`, cw / 2, ch / 2);
      ctx.font = "20px Arial";
      ctx.fillText(`Press the Space Bar to Start`, cw / 2, ((ch/2) + 30));
      ctx.font = "16px Arial";
      ctx.fillText(`use arrow keys to steer`, cw / 2, ((ch/2) + 55));
    }
    // Score
    ctx.textAlign = "start";
    ctx.font = "14px Arial";
    ctx.fillStyle = 'darkgreen';
    ctx.fillText(`Score: ${Math.floor((this.score - 1) / 5)} feet`, 40, 50);

    if(this.obsPosY < ch){
      this.obsPosY = this.obsPosY - 2;
    }
    this.boarder.draw();
    this.gameObstacles.draw();
    debugger
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
    setInterval(this.gameObstacles.draw.call(this, this.obsPosY), 200);
    // setInterval(this.draw.bind(this), 20);
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

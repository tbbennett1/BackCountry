import Obstacles from "./obstacles.js";
import Boarder from "./boarder.js";

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.cw = canvas.width = window.innerWidth;
    this.ch = canvas.height = window.innerHeight;
    this.direction = 0;
    this.speed = 1;
    // this.boarderX = this.cw / 2;
    this.obstacles = [];
    this.game = false;
    this.keys = true;
    this.score = 0;
    this.boarder = new Boarder(this.cw, this.ch, ctx, this.direction);
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
    ctx.fillStyle = 'black';
    if (this.score < 2) {
      ctx.textAlign = "center";
      ctx.font = "30px Arial";
      ctx.fillText(`BackCountry`, cw / 2, 60);
      ctx.font = "20px Arial";
      ctx.fillText(`Press an arrow key to start`, cw / 2, 100);
      ctx.font = "16px Arial";
      ctx.fillText(`use arrow keys to steer`, cw / 2, 124);
    }
    // Score
    ctx.textAlign = "start";
    ctx.font = "14px Arial";
    ctx.fillStyle = "green";
    ctx.fillText(`Score: ${Math.floor((this.score - 1) / 4)} feet`, 25, 40);
    // Draw boarder
    // const boarder = new Path2D();
    // boarder.moveTo(this.boarderX - 8 - this.direction * 2, ch / 4);
    // boarder.lineTo(this.boarderX - 1 - this.direction * 2, ch / 4);
    // boarder.lineTo(this.boarderX - 1 + this.direction * 2, ch / 4 + 25);
    // boarder.lineTo(this.boarderX - 8 + this.direction * 2, ch / 4 + 25);
    // boarder.closePath();
    // ctx.fillStyle = 'black';
    // ctx.fill(boarder);
    this.boarder.draw();
    // Keep boarder inside of window
    // if (this.boarderX < 0) {
    //   this.boarderX += Math.abs(this.direction / 2);
    // }
    // else if (this.boarderX > cw) {
    //   this.boarderX -= Math.abs(this.direction / 2);
    // }
    // else {
    //   this.boarderX += this.direction / 2;
    // }
    // // Draw Obstacles
    // let gameObstacles = new Obstacles(cw, ch, ctx);
    // this.gameObstacles.drawObstacle();
  }

  handleEvent(e) {
    const key = e.key;
    const keycode = e.keyCode;
    if (key === "ArrowLeft" && this.direction > -2) {
      this.direction--;
    }
    else if (key === "ArrowRight" && this.direction < 2) {
      debugger;
      this.direction++;
    }
    // else if (key === "ArrowDown"){
    //   this.speed++;
    // }else if (key === "ArrowUp"){
    //   this.speed--;
    // };
    if (key === "ArrowLeft" || "ArrowRight" || "ArrowUp" || "ArrowDown") {
      this.start();
      // this.game = true;
    }
    if (keycode === 32 && this.game === false) {
      window.location.reload(true);
    }
  }

  start() {
    setInterval(this.draw.bind(this), 200);
  }
}






// Game.prototype.stop = function stop() {
//   if (this.game) {

//     clearInterval(obstacleInterval);
//     clearInterval(gameInterval);
//     // this.keys = false;
//   }
// }

export default Game;

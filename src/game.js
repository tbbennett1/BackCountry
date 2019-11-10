import Obstacles from "./obstacles.js";
import Boarder from "./boarder.js";

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.cw = canvas.width = window.innerWidth;
    this.ch = canvas.height = window.innerHeight;
    this.score = 0;
    this.game = true;
    this.obstacles = [];
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
    //Welcome Screen
    const title = ctx.createLinearGradient(cw / 4, ch / 4, (2/4) * cw, (2/4) * ch);
    title.addColorStop(0.6, "black");
    title.addColorStop(1, "darkgreen");
    ctx.fillStyle = title;

    if (this.score < 2) {
      ctx.textAlign = "center";
      ctx.font = "80px Arial";
      ctx.fillText(`BackCountry`, cw / 2, ch / 2);
      ctx.font = "20px Arial";
      ctx.fillStyle = "darkgreen";
      ctx.fillText(`Press the Space Bar to Start`, cw / 2, ((ch/2) + 30));
      ctx.font = "16px Arial";
      ctx.fillText(`use arrow keys to steer`, cw / 2, ((ch/2) + 55));
    }
    // Score
    ctx.textAlign = "start";
    ctx.font = "24px Arial";
    ctx.fillStyle = 'darkgreen';
    ctx.fillText(`Score: ${Math.floor((this.score - 1) / 5)} feet`, 40, 50);

    this.levels();
    this.boarder.draw();
  }

  levels(){
    //Level 1
    for (let i = 0; this.obstacles.length < 5; i++) {
      this.obstacles.push(this.gameObstacles.newObstacle());
    }
    //Delete obstacles that are off screen
    this.obstacles = this.obstacles.filter(obstacle => (obstacle.posY > 0));
    // Move obstacles up and then redraw
    debugger
    this.obstacles.forEach(obstacle => {
      obstacle.posY = obstacle.posY - 1;
      this.gameObstacles.draw(obstacle);
      // detect a crash
      if (this.boarder.posX < (obstacle.posX + 25)
        && this.boarder.posX > (obstacle.posX - 25)
        && this.boarder.posY < (obstacle.posY + 25)
        && this.boarder.posY > (obstacle.posY - 25)) {
        this.handleCrash();
      }
    })
  }

  handleEvent(e) {
    const keycode = e.keyCode;

    if (keycode === 32 || keycode === 40 && this.game) {
      this.start();
    }
  }

  start() {
    if(this.game){
      this.game = false
      this.gameInterval = setInterval(this.draw.bind(this), 500);
    }
  }

  handleCrash() {
    clearInterval(this.gameInterval);
    this.game = true;
    this.ctx.textAlign = "center";
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "darkred";
    this.ctx.fillText(`You Crashed! Tap the Down Arrow to get up!`, (this.cw / 2), (this.ch / 10));
  }

}


export default Game;

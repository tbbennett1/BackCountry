import Obstacles from "./obstacles.js";
import Boarder from "./boarder.js";

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.cw = canvas.width = window.innerWidth;
    this.ch = canvas.height = window.innerHeight;
    this.score = 0;
    this.lives = 4;
    this.game = true;
    this.crash = false;
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
    ctx.fillText(`Score: ${Math.floor(this.score / 5)} feet`, 40, 50);
    // Lives
    ctx.textAlign = "start";
    ctx.font = "24px Arial";
    ctx.fillStyle = 'darkgreen';
    ctx.fillText(`Lives: ${this.lives}`, 40, 80);

    this.levels();
    this.boarder.draw(this.crash);
  }

  levels(){
    let obsAmount = 10;
    let obsSpeed = 3;

    if(this.score < 500 && this.score > 3){
      this.ctx.textAlign = "center";
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "darkgreen";
      this.ctx.fillText(`LEVEL 1`, (this.cw / 2), 40);
    }else if(this.score >= 500 && this.score < 1000){
      this.ctx.textAlign = "center";
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "darkgreen";
      this.ctx.fillText(`LEVEL 2`, (this.cw / 2), 40);
      clearInterval(this.gameInterval);
      this.gameInterval = setInterval(this.draw.bind(this), 20);
      obsAmount = 15;
      obsSpeed = 4;
    }else if(this.score >= 1000 && this.score < 1500){
      this.ctx.textAlign = "center";
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "darkgreen";
      this.ctx.fillText(`LEVEL 3`, (this.cw / 2), 40);
      clearInterval(this.gameInterval);
      this.gameInterval = setInterval(this.draw.bind(this), 15);
      obsAmount = 20;
      obsSpeed = 5;
    }else if(this.score >= 1500 && this.score < 2500){
      this.ctx.textAlign = "center";
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "darkgreen";
      this.ctx.fillText(`LEVEL 4`, (this.cw / 2), 40);
      clearInterval(this.gameInterval);
      this.gameInterval = setInterval(this.draw.bind(this), 12);
      obsAmount = 25;
      obsSpeed = 6;
    }else if(this.score >= 2500){
      this.ctx.textAlign = "center";
      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "darkgreen";
      this.ctx.fillText(`LEVEL 5`, (this.cw / 2), 40);
      clearInterval(this.gameInterval);
      this.gameInterval = setInterval(this.draw.bind(this), 10);
      obsAmount = 30;
      obsSpeed = 7;
    }

    for (let i = 0; this.obstacles.length < obsAmount; i++) {
      this.obstacles.push(this.gameObstacles.newObstacle());
    }
    //Delete obstacles that are off screen
    this.obstacles = this.obstacles.filter(obstacle => (obstacle.posY > 0));
    // Move obstacles up and then redraw
    this.obstacles.forEach(obstacle => {
      obstacle.posY = obstacle.posY - obsSpeed;
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

    if (keycode === 32 && this.game) {
      this.start();
    }else if(keycode === 32 && !this.game){
      location.reload(true);
    }
  }

  start() {
    if(this.game){
      this.game = false;
      this.crash = false;
      this.gameInterval = setInterval(this.draw.bind(this), 25);
    }
  }

  handleCrash() {
    this.crash = true;
    clearInterval(this.gameInterval);
    if(this.lives <= 1){
      this.gameOver();
    }else{
      this.lives--;
      // Move James away from obstacle before restarting
      this.obstacles.forEach(obstacle => {
        this.ctx.textAlign = "center";
        this.ctx.font = "32px Arial bold";
        this.ctx.fillStyle = "darkred";
        this.ctx.fillText(`OUCH!`, (this.cw / 2), (this.ch / 2));
        obstacle.posY = obstacle.posY - 50;
      })
      // this.boarder.crash();
      this.game = true;
      setTimeout(this.start.bind(this), 1000);
    }
  }

  gameOver(){
    clearInterval(this.gameInterval);
    this.game = false;
    this.ctx.textAlign = "center";
    this.ctx.font = "32px Arial bold";
    this.ctx.fillStyle = "darkred";
    this.ctx.fillText(`GAME OVER`, (this.cw / 2), (this.ch / 2));
    this.ctx.textAlign = "center";
    this.ctx.font = "24px Arial bold";
    this.ctx.fillStyle = "darkgreen";
    this.ctx.fillText(`Final Score: ${Math.floor(this.score / 5)} feet`, (this.cw / 2), (this.ch / 2) + 35);
    this.ctx.textAlign = "center";
    this.ctx.font = "20px Arial bold";
    this.ctx.fillStyle = "darkred";
    this.ctx.fillText(`Press Space Bar to Try Again`, (this.cw / 2), (this.ch / 2) + 70);
  }

}


export default Game;

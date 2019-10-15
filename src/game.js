const Obstacles = require("./obstacles.js");

function Game(ctx, canvas){
  this.ctx = ctx;
  this.cw = canvas.width = window.innerWidth;
  this.ch = canvas.height = window.innerHeight;
  this.direction = 0;
  this.speed = 1;
  this.boarderX = this.cw / 2;
  this.obstacles = [];
  this.game = false;
  this.keys = true;
  this.totalY = 0;
  document.addEventListener('keydown', this.handleEvent.bind(this));
  this.draw();
}


Game.prototype.draw = function draw() {
  const cw = this.cw;
  const ch = this.ch;
  const ctx = this.ctx;
  ctx.clearRect(0, 0, cw, ch);
  this.totalY++;


  ctx.fillStyle = '#9B000F';

  if (this.totalY < 10) {
    ctx.textAlign = "center";
    ctx.fillStyle = '#111213';
    ctx.font = "30px Arial";
    ctx.fillText(`BackCountry`, cw / 2, 60);
    ctx.font = "20px Arial";
    ctx.fillText(`Press an arrow key to start`, cw / 2, 100);
    ctx.font = "16px Arial";
    ctx.fillText(`use arrow keys to steer`, cw / 2, 124);
    ctx.fillStyle = '#E8E9EE';
  }

  // Score
  ctx.textAlign = "start";
  ctx.font = "14px Arial";
  ctx.fillText(`Score: ${Math.floor((this.totalY - 1) / 4)} feet`, 25, 40);

  // Draw boarder
  const boarder = new Path2D();
  boarder.moveTo(this.boarderX - 8 - this.direction * 2, ch / 4);
  boarder.lineTo(this.boarderX - 1 - this.direction * 2, ch / 4);
  boarder.lineTo(this.boarderX - 1 + this.direction * 2, ch / 4 + 25);
  boarder.lineTo(this.boarderX - 8 + this.direction * 2, ch / 4 + 25);
  boarder.closePath();

  ctx.fill(boarder);

  // obstacles.createObstacle();

  // Creat some obstacles
  // gameObstacles.createObstacle(obstacles).map(function (obstacle) {
  //   return {
  //     type: obstacle.type,
  //     x: obstacle.x,
  //     y: obstacle.y - speed,
  //     height: obstacle.height,
  //     width: obstacle.width
  //   }
  // });

  // Keep boarder within window
  if (this.boarderX < 0) {
    this.boarderX += Math.abs(this.direction / 2);
  } else if (this.boarderX > cw) {
    this.boarderX -= Math.abs(this.direction / 2);
  } else {
    this.boarderX += this.direction / 2;
  }

  // Instantiate and Draw Obstacles
  let gameObstacles = new Obstacles(cw, ch, ctx);
  this.obstacles.forEach(function (obstacle) {
    gameObstacles.drawObstacle(obstacle.type, obstacle.x, obstacle.y, obstacle.height, obstacle.width)
  });

}

Game.prototype.handleEvent = function handleEvent(e) {
  const key = e.key;
  const keycode = e.keyCode;

  if (this.keys) {
    if (key === "ArrowLeft" && this.direction > -2) {
      this.direction--;
    } else if (key === "ArrowRight" && this.direction < 2) {
      this.direction++;
    }
    else if (key === "ArrowDown"){
      speed++;
    }else if (key === "ArrowUp"){
      speed--;
    };

    if (key === "ArrowLeft" || "ArrowRight" || "ArrowUp" || "ArrowDown") {
      this.start();
      this.game = true;
    }
  }

  if (keycode === 32 && this.game === false) {
    window.location.reload(true);
  }

}


Game.prototype.start = function start() {
  if (!this.game) {
    obstacleInterval = setInterval(Obstacles.createObstacle, 50);
    gameInterval = setInterval(this.draw.bind(this), 1);
  }
}

Game.prototype.stop = function stop() {
  if (this.game) {

    clearInterval(obstacleInterval);
    clearInterval(gameInterval);
    // this.keys = false;
  }
}

// document.addEventListener('keydown', Game.prototype.handleEvent);

module.exports = Game;

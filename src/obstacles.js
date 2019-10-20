class Obstacles {
  constructor(cw, ch, ctx) {
    this.cw = cw;
    this.ch = ch;
    this.ctx = ctx;
    // this.obstacles = [];
  }

  newObstacle() {
    let obsImage = new Image();
    obsImage.src = "../Obstacles.png";
    let frameIndex = Math.floor(Math.random() * 5) * 50;
  
    return ({
      obs: obsImage,
      frame: frameIndex,
      posX: Math.floor(Math.random() * this.cw),
      posY: this.ch + Math.floor(Math.random() * this.ch),
    })

  // if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {
  //   obstacles.shift();
  // }
  }

  draw(obstacle) { 
    this.ctx.drawImage(
      obstacle.obs, 
      obstacle.frame, 
      0, 
      50, 
      50, 
      obstacle.posX, 
      obstacle.posY, 
      75, 
      75);
  }

}

export default Obstacles;
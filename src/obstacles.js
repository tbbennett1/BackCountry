class Obstacles {
  constructor(cw, ch, ctx) {
    this.cw = cw;
    this.ch = ch;
    this.ctx = ctx;
    this.obsImage = new Image();
    this.obsImage.src = "../Obstacles.png";
  }
  
  drawObstacle() {
    // debugger
    let frameIndex = Math.floor(Math.random() * 4) * 50;
    let obsPosX = Math.floor(Math.random() * this.cw);
    let obsPosY = Math.floor(Math.random() * this.ch);
    this.ctx.drawImage(this.obsImage, frameIndex, 0, 50, 50, obsPosX, obsPosY, 50, 50);
  }
}

export default Obstacles;
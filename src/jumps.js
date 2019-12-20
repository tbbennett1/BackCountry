class Jumps {
  constructor(cw, ch, ctx) {
    this.cw = cw;
    this.ch = ch;
    this.ctx = ctx;
  }

  newObstacle() {
    let obsImage = new Image();
    obsImage.src = "./Obstacles.png";
    let frameIndex = Math.floor(Math.random() * 5) * 50;

    return ({
      obs: obsImage,
      frame: frameIndex,
      posX: Math.floor(Math.random() * this.cw),
      posY: this.ch + Math.floor(Math.random() * this.ch),
    })
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

export default Jumps;
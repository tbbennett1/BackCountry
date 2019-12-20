class Jumps {
  constructor(cw, ch, ctx) {
    this.cw = cw;
    this.ch = ch;
    this.ctx = ctx;
  }

  // newJump() {
  //   let jumpImage = new Image();
  //   jumpImage.src = "./Obstacles.png";


  //   return ({
  //     obs: obsImage,
  //     frame: frameIndex,
  //     posX: Math.floor(Math.random() * this.cw),
  //     posY: this.ch + Math.floor(Math.random() * this.ch),
  //   })
  // }

  draw() {
    let jumpImage = new Image();
    jumpImage.src = "./Obstacles.png";
    let posX = Math.floor(Math.random() * this.cw);
    let posY = this.ch + Math.floor(Math.random() * this.ch);

    this.ctx.drawImage(
      jumpImage,
      250,
      0,
      50,
      50,
      posX,
      posY,
      75,
      75);
  }
}

export default Jumps;
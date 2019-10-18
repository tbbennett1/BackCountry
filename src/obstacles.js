class Obstacles {
  constructor(cw, ch, ctx) {
    this.cw = cw;
    this.ch = ch;
    this.ctx = ctx;
    this.obstacles = [];
  }

  draw() { //obsPosY
    let obsImage = new Image();
    obsImage.src = "../Obstacles.png";
    let frameIndex = Math.floor(Math.random() * 4) * 50;
    let obsPosX = Math.floor(Math.random() * this.cw);
    let obsPosY = Math.floor(Math.random() * this.ch);

    obsImage.onload = function() {
      this.ctx.drawImage(
        obsImage, 
        frameIndex, 
        0, 
        50, 
        50, 
        obsPosX, 
        obsPosY, 
        50, 
        50);
    }

    return obsImage;
  }
}

export default Obstacles;
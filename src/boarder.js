class Boarder{
  constructor(cw, ch, ctx) {
    this.ctx = ctx;
    this.cw = cw;
    this.ch = ch;
    this.direction = 0;
    this.posX = this.cw / 2;
    this.posY = this.ch / 6;
    document.addEventListener('keydown', this.handleEvent.bind(this));
  }

  draw(crash) {
    let frame = 0;
    const james = new Image();
    james.src = "./james.png";

    //check if crashed first, if not draw is direction
    if(crash){
      frame = 125;
    }else if(this.direction === 0){
      frame = 0;
    }else if(this.direction < 0 && this.direction > -6){
      frame = 25;
    } else if (this.direction > 0 && this.direction < 6){
      frame = 50;
    }else if (this.direction < -6){
      frame = 75;
    }else if (this.direction > 6) {
      frame = 100;
    }
    // make James 50px for now
    this.ctx.drawImage(
      james,
      frame,
      0,
      25,
      25,
      this.posX,
      this.posY,
      50,
      50);

    // keep boarder in bounds
    if(this.posX < 0) {
      this.posX += Math.abs(this.direction / 2);
    }else if(this.posX > this.cw) {
    this.posX -= Math.abs(this.direction / 2);
    }else {
      this.posX += this.direction / 2;
    }
  }

  handleEvent(e) {
    const key = e.key;
 
    if(key === "ArrowLeft" && this.direction > -6) { 
      this.direction = this.direction - 5;
    }else if(key === "ArrowRight" && this.direction < 6 ) {
      this.direction = this.direction + 5;
    }
  }

  
}

export default Boarder;
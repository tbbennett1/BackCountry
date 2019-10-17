import Game from "./game";

class Boarder{
  constructor(cw, ch, ctx) {
    this.ctx = ctx;
    this.cw = cw;
    this.ch = ch;
    this.direction = 0;
    this.boarderPosX = this.cw / 2;

    document.addEventListener('keydown', this.handleEvent.bind(this));
  }


  draw() {
    // debugger
    const james = new Image();
    james.src = "../james.png";
    let boarderPosY = this.ch / 6;
    // let frameIndex = Math.floor(Math.random() * 4) * 25;
    // let obsPosX = Math.floor(Math.random() * this.cw);
    // let obsPosY = Math.floor(Math.random() * this.ch);

    if(this.direction === 0){
      this.ctx.drawImage(
        james,
        0,
        0,
        25,
        25,
        this.boarderPosX,
        boarderPosY,
        75,
        75);
    }else if(this.direction < 0 && this.direction > -11){
      this.ctx.drawImage(
        james,
        25,
        0,
        25,
        25,
        this.boarderPosX,
        boarderPosY,
        75,
        75);
    } else if (this.direction > 0 && this.direction < 11){
      this.ctx.drawImage(
        james,
        50,
        0,
        25,
        25,
        this.boarderPosX,
        boarderPosY,
        75,
        75);
    }else if (this.direction < -11){
      this.ctx.drawImage(
        james,
        75,
        0,
        25,
        25,
        this.boarderPosX,
        boarderPosY,
        75,
        75);
    }else if (this.direction > 11) {
      this.ctx.drawImage(
        james,
        100,
        0,
        25,
        25,
        this.boarderPosX,
        boarderPosY,
        75,
        75);
    }
    //keep boarder in bounds
    if(this.boarderPosX < 0) {
      this.boarderPosX += Math.abs(this.direction / 2);
    }else if(this.boarderPosX > this.cw) {
    this.boarderPosX -= Math.abs(this.direction / 2);
    }else {
      this.boarderPosX += this.direction / 2;
    }
  }

  handleEvent(e) {
    const key = e.key;
 
    if(key === "ArrowLeft" && this.direction > -11) { 
      this.direction = this.direction - 10;
    }else if(key === "ArrowRight" && this.direction < 11 ) {
      this.direction = this.direction + 10;
    }
  }

  
}

export default Boarder;
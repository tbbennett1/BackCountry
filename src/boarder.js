class Boarder {
  constructor(cw, ch, ctx, direction) {
    this.ctx = ctx;
    this.cw = cw;
    this.ch = ch;
    this.direction = direction;
    this.boarderX = this.cw / 2;
  }


  draw() {
    const boarder = new Path2D();
    boarder.moveTo(this.boarderX - 8 - this.direction * 2, this.ch / 4);
    boarder.lineTo(this.boarderX - 1 - this.direction * 2, this.ch / 4);
    boarder.lineTo(this.boarderX - 1 + this.direction * 2, this.ch / 4 + 25);
    boarder.lineTo(this.boarderX - 8 + this.direction * 2, this.ch / 4 + 25);
    boarder.closePath();
    this.ctx.fillStyle = 'black';
    this.ctx.fill(boarder);
    
    if(this.boarderX < 0) {
      this.boarderX += Math.abs(this.direction / 2);
    }else if(this.boarderX > this.cw) {
    this.boarderX -= Math.abs(this.direction / 2);
    }else {
      this.boarderX += this.direction / 2;
    }
    // Draw Obstacles
    // let gameObstacles = new Obstacles(cw, ch, ctx);
    // this.gameObstacles.drawObstacle();
  }
}

export default Boarder;
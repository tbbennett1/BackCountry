function Obstacles(cw, ch, ctx) {
  // let obstacles = [];

  Obstacles.prototype.drawObstacle = function (type, x, y, h, w) {

    if (type === 'tree') {
      debugger
      ctx.fillStyle = '#624D6E';
      const tree = new Path2D();
      tree.moveTo(x + w / 2, y);
      tree.lineTo(x, y + h * 0.9);
      tree.lineTo(x + w * 0.33, y + h * 0.85);
      tree.lineTo(x + w * 0.33, y + h);
      tree.lineTo(x + w * 0.66, y + h);
      tree.lineTo(x + w * 0.66, y + h * 0.85);
      tree.lineTo(x + w, y + h * 0.9);
      tree.closePath();
      ctx.fill(tree);

      // return tree;
    } else if (type === 'mound') {
      ctx.strokeStyle = '#868999';
      ctx.lineWidth = 1;
      const mound = new Path2D();
      mound.moveTo(x, y);
      mound.quadraticCurveTo(x + w / 2, y - h, x + w, y);
      ctx.stroke(mound);

      // return mound;
    } else {
      console.error('Drawing error');
    }
  }

  Obstacles.prototype.createObstacle = function (obstacles) {
    const obstacleTypes = ['tree', 'mound'];
    const type = obstacleTypes[Math.round(Math.random())];

    if (type === 'tree') {
      const treeHeight = Math.floor(Math.random() * 20) + 25;
      obstacles.push({
        type: 'tree',
        x: Math.round(cw * Math.random()),
        y: ch,
        height: treeHeight,
        width: treeHeight / 2
      });
    } else if (type === 'mound') {
      const moundWidth = Math.floor(Math.random() * 10) + 10;
      obstacles.push({
        type: 'mound',
        x: Math.round(cw * Math.random()),
        y: ch,
        height: moundWidth / 2,
        width: moundWidth
      });
    } else {
      console.error('Error creating obstacle');
    }

    // if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {
    //   obstacles.shift();
    // }

    return obstacles;
  }
}

module.exports = Obstacles;
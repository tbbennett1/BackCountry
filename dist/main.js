/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const canvas = document.querySelector('canvas');\n// const ctx = canvas.getContext('2d');\nconst Obstacles = __webpack_require__(/*! ./obstacles.js */ \"./src/obstacles.js\");\n\nfunction Game(ctx, canvas){\n  const cw = canvas.width = window.innerWidth;\n  const ch = canvas.height = window.innerHeight;\n\n  let direction = 0;\n  let speed = 1;\n  let boarderX = cw / 2;\n  let obstacles = [];\n  let game = false;\n  let keys = true;\n  let totalY = 0;\n\n  // Draw an obstacle\n  // Game.prototype.drawObstacle= function(ctx, type, x, y, h, w) {\n\n  //   if (type === 'tree') {\n\n  //     ctx.fillStyle = '#624D6E';\n  //     const tree = new Path2D();\n  //     tree.moveTo(x + w / 2, y);\n  //     tree.lineTo(x, y + h * 0.9);\n  //     tree.lineTo(x + w * 0.33, y + h * 0.85);\n  //     tree.lineTo(x + w * 0.33, y + h);\n  //     tree.lineTo(x + w * 0.66, y + h);\n  //     tree.lineTo(x + w * 0.66, y + h * 0.85);\n  //     tree.lineTo(x + w, y + h * 0.9);\n  //     tree.closePath();\n  //     ctx.fill(tree);\n\n  //   } else if (type === 'mound') {\n\n  //     ctx.strokeStyle = '#868999';\n  //     ctx.lineWidth = 1;\n  //     const mound = new Path2D();\n  //     mound.moveTo(x, y);\n  //     // mound.quadraticCurveTo(x + w / 2, y - h, x + w, y);\n  //     ctx.stroke(mound);\n\n  //   } else {\n  //     console.error('Drawing error');\n  //   }\n  // }\n\n  // Create a new obstacle\n  // Game.prototype.createObstacle= function() {\n  //   const obstacleTypes = ['tree', 'mound'];\n  //   const type = obstacleTypes[Math.round(Math.random())];\n\n  //   if (type === 'tree') {\n  //     const treeHeight = Math.floor(Math.random() * 20) + 25;\n  //     obstacles.push({\n  //       type: 'tree',\n  //       x: Math.round(cw * Math.random()),\n  //       y: ch,\n  //       height: treeHeight,\n  //       width: treeHeight / 2\n  //     });\n  //   } else if (type === 'mound') {\n  //     const moundWidth = Math.floor(Math.random() * 10) + 10;\n  //     obstacles.push({\n  //       type: 'mound',\n  //       x: Math.round(cw * Math.random()),\n  //       y: ch,\n  //       height: moundWidth / 2,\n  //       width: moundWidth\n  //     });\n  //   } else {\n  //     console.error('Creation error');\n  //   }\n\n  //   if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {\n  //     obstacles.shift();\n  //   }\n\n  // }\n\n  // Draw Canvas\n  Game.prototype.draw = function() {\n    ctx.clearRect(0, 0, cw, ch);\n    totalY++;\n\n    ctx.fillStyle = '#9B000F';\n\n    if (totalY < 10) {\n      ctx.textAlign = \"center\";\n      ctx.fillStyle = '#111213';\n      ctx.font = \"30px Arial\";\n      ctx.fillText(`BackCountry`, cw / 2, 60);\n      ctx.font = \"20px Arial\";\n      ctx.fillText(`Press an arrow key to start`, cw / 2, 100);\n      ctx.font = \"16px Arial\";\n      ctx.fillText(`use arrow keys to steer`, cw / 2, 124);\n      ctx.fillStyle = '#E8E9EE';\n    }\n\n    // Score\n    ctx.textAlign = \"start\";\n    ctx.font = \"14px Arial\";\n    ctx.fillText(`Score: ${Math.floor((totalY - 1) / 4)} feet`, 10, 25);\n\n    // Draw boarder\n    const boarder = new Path2D();\n    boarder.moveTo(boarderX - 8 - direction * 2, ch / 4);\n    boarder.lineTo(boarderX - 1 - direction * 2, ch / 4);\n    boarder.lineTo(boarderX - 1 + direction * 2, ch / 4 + 25);\n    boarder.lineTo(boarderX - 8 + direction * 2, ch / 4 + 25);\n    boarder.closePath();\n\n    ctx.fill(boarder);\n\n    // Instantiate gameObstacles\n    let gameObstacles = new Obstacles(cw, ch, ctx);\n    // obstacles.createObstacle();\n\n    // Creat some obstacles\n    gameObstacles.createObstacle(obstacles).map(function (obstacle) {\n      return {\n        type: obstacle.type,\n        x: obstacle.x,\n        y: obstacle.y - speed,\n        height: obstacle.height,\n        width: obstacle.width\n      }\n    });\n\n    // Update boarder position and make sure it stay in the window\n    if (boarderX < 0) {\n      boarderX += Math.abs(direction / 2);\n    } else if (boarderX > cw) {\n      boarderX -= Math.abs(direction / 2);\n    } else {\n      boarderX += direction / 2;\n    }\n\n    // debugger\n    obstacles.forEach(function (obstacle) {\n      // Draw Obstacles\n      debugger\n      let obs = gameObstacles.drawObstacle(//ctx, \n                              obstacle.type, \n                              obstacle.x, \n                              obstacle.y, \n                              obstacle.height, \n                              obstacle.width)\n      // debugger\n      // ctx.fill(obs);\n      // debugger\n      // Detect Crash\n      // if (obstacle.y + obstacle.height > ch / 4 - 16\n      //   && obstacle.y < ch / 4\n      //   && obstacle.x - obstacle.width / 2 < boarderX\n      //   && obstacle.x + obstacle.width / 2 > boarderX\n      //   && obstacle.type == 'tree') {\n      //   console.log('crash!');\n      //   Game.prototype.stop();\n      //   game = false;\n\n      //   ctx.fillStyle = '#9B000F';\n      //   ctx.font = \"16px Helvetica\";\n      //   ctx.fillText(`Game Over`, 10, 60);\n      //   ctx.fillStyle = '#111213';\n      //   ctx.fillText(`You traveled a total of ${Math.floor((totalY - 1) / 4)} feet.`, 10, 80);\n      //   ctx.fillText(`Press space to restart.`, 10, 100);\n      // }\n    });\n\n  }\n\n  Game.prototype.handleKey = function(e) {\n    const key = e.key;\n    const keycode = e.keyCode;\n\n    if (keys) {\n      if (key === \"ArrowLeft\" && direction > -2) {\n        direction--;\n      } else if (key === \"ArrowRight\" && direction < 2) {\n        direction++;\n      }\n      else if (key === \"ArrowDown\"){\n        speed++;\n      }else if (key === \"ArrowUp\"){\n        speed--;\n      };\n\n      if (key === \"ArrowLeft\" || \"ArrowRight\" || \"ArrowUp\" || \"ArrowDown\") {\n        Game.prototype.start();\n        game = true;\n      }\n    }\n\n    if (keycode === 32 && game === false) {\n      window.location.reload(true);\n    }\n\n  }\n\n  Game.prototype.start = function() {\n    if (!game) {\n      console.log('Here we go');\n      obstacleInterval = setInterval(this.createObstacle, 50);\n      gameInterval = setInterval(this.draw, 1);\n    }\n  }\n\n  Game.prototype.stop= function() {\n    if (game) {\n\n      clearInterval(obstacleInterval);\n      clearInterval(gameInterval);\n      keys = false;\n    }\n  }\n\n  document.addEventListener('keydown', Game.prototype.handleKey);\n\n  this.draw();\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  console.log(\"were in the event listener\")\n  const doc = document.getElementById('canvas');\n  let ctx = doc.getContext(\"2d\");\n  const game = new Game(ctx, doc);\n\n  game.draw();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Obstacles(cw, ch, ctx) {\n  // let obstacles = [];\n\n  Obstacles.prototype.drawObstacle = function (type, x, y, h, w) {\n\n    if (type === 'tree') {\n      debugger\n      ctx.fillStyle = '#624D6E';\n      const tree = new Path2D();\n      tree.moveTo(x + w / 2, y);\n      tree.lineTo(x, y + h * 0.9);\n      tree.lineTo(x + w * 0.33, y + h * 0.85);\n      tree.lineTo(x + w * 0.33, y + h);\n      tree.lineTo(x + w * 0.66, y + h);\n      tree.lineTo(x + w * 0.66, y + h * 0.85);\n      tree.lineTo(x + w, y + h * 0.9);\n      tree.closePath();\n      ctx.fill(tree);\n\n      // return tree;\n    } else if (type === 'mound') {\n      ctx.strokeStyle = '#868999';\n      ctx.lineWidth = 1;\n      const mound = new Path2D();\n      mound.moveTo(x, y);\n      mound.quadraticCurveTo(x + w / 2, y - h, x + w, y);\n      ctx.stroke(mound);\n\n      // return mound;\n    } else {\n      console.error('Drawing error');\n    }\n  }\n\n  Obstacles.prototype.createObstacle = function (obstacles) {\n    const obstacleTypes = ['tree', 'mound'];\n    const type = obstacleTypes[Math.round(Math.random())];\n\n    if (type === 'tree') {\n      const treeHeight = Math.floor(Math.random() * 20) + 25;\n      obstacles.push({\n        type: 'tree',\n        x: Math.round(cw * Math.random()),\n        y: ch,\n        height: treeHeight,\n        width: treeHeight / 2\n      });\n    } else if (type === 'mound') {\n      const moundWidth = Math.floor(Math.random() * 10) + 10;\n      obstacles.push({\n        type: 'mound',\n        x: Math.round(cw * Math.random()),\n        y: ch,\n        height: moundWidth / 2,\n        width: moundWidth\n      });\n    } else {\n      console.error('Error creating obstacle');\n    }\n\n    // if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {\n    //   obstacles.shift();\n    // }\n\n    return obstacles;\n  }\n}\n\nmodule.exports = Obstacles;\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ })

/******/ });
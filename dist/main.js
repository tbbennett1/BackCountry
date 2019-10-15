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

eval("const Obstacles = __webpack_require__(/*! ./obstacles.js */ \"./src/obstacles.js\");\n\nfunction Game(ctx, canvas){\n  this.ctx = ctx;\n  this.cw = canvas.width = window.innerWidth;\n  this.ch = canvas.height = window.innerHeight;\n  this.direction = 0;\n  this.speed = 1;\n  this.boarderX = this.cw / 2;\n  this.obstacles = [];\n  this.game = false;\n  this.keys = true;\n  this.totalY = 0;\n  document.addEventListener('keydown', this.handleEvent.bind(this));\n  this.draw();\n}\n\n\nGame.prototype.draw = function draw() {\n  const cw = this.cw;\n  const ch = this.ch;\n  const ctx = this.ctx;\n  ctx.clearRect(0, 0, cw, ch);\n  this.totalY++;\n\n\n  ctx.fillStyle = '#9B000F';\n\n  if (this.totalY < 10) {\n    ctx.textAlign = \"center\";\n    ctx.fillStyle = '#111213';\n    ctx.font = \"30px Arial\";\n    ctx.fillText(`BackCountry`, cw / 2, 60);\n    ctx.font = \"20px Arial\";\n    ctx.fillText(`Press an arrow key to start`, cw / 2, 100);\n    ctx.font = \"16px Arial\";\n    ctx.fillText(`use arrow keys to steer`, cw / 2, 124);\n    ctx.fillStyle = '#E8E9EE';\n  }\n\n  // Score\n  ctx.textAlign = \"start\";\n  ctx.font = \"14px Arial\";\n  ctx.fillText(`Score: ${Math.floor((this.totalY - 1) / 4)} feet`, 25, 40);\n\n  // Draw boarder\n  const boarder = new Path2D();\n  boarder.moveTo(this.boarderX - 8 - this.direction * 2, ch / 4);\n  boarder.lineTo(this.boarderX - 1 - this.direction * 2, ch / 4);\n  boarder.lineTo(this.boarderX - 1 + this.direction * 2, ch / 4 + 25);\n  boarder.lineTo(this.boarderX - 8 + this.direction * 2, ch / 4 + 25);\n  boarder.closePath();\n\n  ctx.fill(boarder);\n\n  // obstacles.createObstacle();\n\n  // Creat some obstacles\n  // gameObstacles.createObstacle(obstacles).map(function (obstacle) {\n  //   return {\n  //     type: obstacle.type,\n  //     x: obstacle.x,\n  //     y: obstacle.y - speed,\n  //     height: obstacle.height,\n  //     width: obstacle.width\n  //   }\n  // });\n\n  // Keep boarder within window\n  if (this.boarderX < 0) {\n    this.boarderX += Math.abs(this.direction / 2);\n  } else if (this.boarderX > cw) {\n    this.boarderX -= Math.abs(this.direction / 2);\n  } else {\n    this.boarderX += this.direction / 2;\n  }\n\n  // Instantiate and Draw Obstacles\n  let gameObstacles = new Obstacles(cw, ch, ctx);\n  this.obstacles.forEach(function (obstacle) {\n    gameObstacles.drawObstacle(obstacle.type, obstacle.x, obstacle.y, obstacle.height, obstacle.width)\n  });\n\n}\n\nGame.prototype.handleEvent = function handleEvent(e) {\n  const key = e.key;\n  const keycode = e.keyCode;\n\n  if (this.keys) {\n    if (key === \"ArrowLeft\" && this.direction > -2) {\n      this.direction--;\n    } else if (key === \"ArrowRight\" && this.direction < 2) {\n      this.direction++;\n    }\n    else if (key === \"ArrowDown\"){\n      speed++;\n    }else if (key === \"ArrowUp\"){\n      speed--;\n    };\n\n    if (key === \"ArrowLeft\" || \"ArrowRight\" || \"ArrowUp\" || \"ArrowDown\") {\n      this.start();\n      this.game = true;\n    }\n  }\n\n  if (keycode === 32 && this.game === false) {\n    window.location.reload(true);\n  }\n\n}\n\n\nGame.prototype.start = function start() {\n  if (!this.game) {\n    obstacleInterval = setInterval(Obstacles.createObstacle, 50);\n    gameInterval = setInterval(this.draw.bind(this), 1);\n  }\n}\n\nGame.prototype.stop = function stop() {\n  if (this.game) {\n\n    clearInterval(obstacleInterval);\n    clearInterval(gameInterval);\n    // this.keys = false;\n  }\n}\n\n// document.addEventListener('keydown', Game.prototype.handleEvent);\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext(\"2d\");\n  new Game(ctx, canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Obstacles(cw, ch, ctx) {\n  // let obstacles = [];\n\n  Obstacles.prototype.drawObstacle = function (type, x, y, h, w) {\n\n    if (type === 'tree') {\n\n      ctx.fillStyle = '#624D6E';\n      const tree = new Path2D();\n      tree.moveTo(x + w / 2, y);\n      tree.lineTo(x, y + h * 0.9);\n      tree.lineTo(x + w * 0.33, y + h * 0.85);\n      tree.lineTo(x + w * 0.33, y + h);\n      tree.lineTo(x + w * 0.66, y + h);\n      tree.lineTo(x + w * 0.66, y + h * 0.85);\n      tree.lineTo(x + w, y + h * 0.9);\n      tree.closePath();\n      ctx.fill(tree);\n\n      // return tree;\n    } else if (type === 'mound') {\n      ctx.strokeStyle = '#868999';\n      ctx.lineWidth = 1;\n      const mound = new Path2D();\n      mound.moveTo(x, y);\n      mound.quadraticCurveTo(x + w / 2, y - h, x + w, y);\n      ctx.stroke(mound);\n\n      // return mound;\n    } else {\n      console.error('Drawing error');\n    }\n  }\n\n  Obstacles.prototype.createObstacle = function (obstacles) {\n    const obstacleTypes = ['tree', 'mound'];\n    const type = obstacleTypes[Math.round(Math.random())];\n\n    if (type === 'tree') {\n      const treeHeight = Math.floor(Math.random() * 20) + 25;\n      obstacles.push({\n        type: 'tree',\n        x: Math.round(cw * Math.random()),\n        y: ch,\n        height: treeHeight,\n        width: treeHeight / 2\n      });\n    } else if (type === 'mound') {\n      const moundWidth = Math.floor(Math.random() * 10) + 10;\n      obstacles.push({\n        type: 'mound',\n        x: Math.round(cw * Math.random()),\n        y: ch,\n        height: moundWidth / 2,\n        width: moundWidth\n      });\n    } else {\n      console.error('Error creating obstacle');\n    }\n\n    // if (obstacles.length > 0 && obstacles[0].y < 0 - obstacles[0].height) {\n    //   obstacles.shift();\n    // }\n\n    return obstacles;\n  }\n}\n\nmodule.exports = Obstacles;\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ })

/******/ });
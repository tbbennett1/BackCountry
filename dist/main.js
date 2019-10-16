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

/***/ "./src/boarder.js":
/*!************************!*\
  !*** ./src/boarder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Boarder {\n  constructor(cw, ch, ctx, direction) {\n    this.ctx = ctx;\n    this.cw = cw;\n    this.ch = ch;\n    this.direction = direction;\n    this.boarderX = this.cw / 2;\n  }\n\n\n  draw() {\n    const boarder = new Path2D();\n    boarder.moveTo(this.boarderX - 8 - this.direction * 2, this.ch / 4);\n    boarder.lineTo(this.boarderX - 1 - this.direction * 2, this.ch / 4);\n    boarder.lineTo(this.boarderX - 1 + this.direction * 2, this.ch / 4 + 25);\n    boarder.lineTo(this.boarderX - 8 + this.direction * 2, this.ch / 4 + 25);\n    boarder.closePath();\n    this.ctx.fillStyle = 'black';\n    this.ctx.fill(boarder);\n    \n    if(this.boarderX < 0) {\n      this.boarderX += Math.abs(this.direction / 2);\n    }else if(this.boarderX > this.cw) {\n    this.boarderX -= Math.abs(this.direction / 2);\n    }else {\n      this.boarderX += this.direction / 2;\n    }\n    // Draw Obstacles\n    // let gameObstacles = new Obstacles(cw, ch, ctx);\n    // this.gameObstacles.drawObstacle();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boarder);\n\n//# sourceURL=webpack:///./src/boarder.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacles.js */ \"./src/obstacles.js\");\n/* harmony import */ var _boarder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarder.js */ \"./src/boarder.js\");\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.cw = canvas.width = window.innerWidth;\n    this.ch = canvas.height = window.innerHeight;\n    this.direction = 0;\n    this.speed = 1;\n    // this.boarderX = this.cw / 2;\n    this.obstacles = [];\n    this.game = false;\n    this.keys = true;\n    this.score = 0;\n    this.boarder = new _boarder_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.cw, this.ch, ctx, this.direction);\n    this.gameObstacles = new _obstacles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.cw, this.ch, ctx);\n    document.addEventListener('keydown', this.handleEvent.bind(this));\n    this.draw();\n  }\n  draw() {\n    const cw = this.cw;\n    const ch = this.ch;\n    const ctx = this.ctx;\n    ctx.clearRect(0, 0, cw, ch);\n    this.score++;\n    ctx.fillStyle = 'black';\n    if (this.score < 2) {\n      ctx.textAlign = \"center\";\n      ctx.font = \"30px Arial\";\n      ctx.fillText(`BackCountry`, cw / 2, 60);\n      ctx.font = \"20px Arial\";\n      ctx.fillText(`Press an arrow key to start`, cw / 2, 100);\n      ctx.font = \"16px Arial\";\n      ctx.fillText(`use arrow keys to steer`, cw / 2, 124);\n    }\n    // Score\n    ctx.textAlign = \"start\";\n    ctx.font = \"14px Arial\";\n    ctx.fillStyle = \"green\";\n    ctx.fillText(`Score: ${Math.floor((this.score - 1) / 4)} feet`, 25, 40);\n    // Draw boarder\n    // const boarder = new Path2D();\n    // boarder.moveTo(this.boarderX - 8 - this.direction * 2, ch / 4);\n    // boarder.lineTo(this.boarderX - 1 - this.direction * 2, ch / 4);\n    // boarder.lineTo(this.boarderX - 1 + this.direction * 2, ch / 4 + 25);\n    // boarder.lineTo(this.boarderX - 8 + this.direction * 2, ch / 4 + 25);\n    // boarder.closePath();\n    // ctx.fillStyle = 'black';\n    // ctx.fill(boarder);\n    this.boarder.draw();\n    // Keep boarder inside of window\n    // if (this.boarderX < 0) {\n    //   this.boarderX += Math.abs(this.direction / 2);\n    // }\n    // else if (this.boarderX > cw) {\n    //   this.boarderX -= Math.abs(this.direction / 2);\n    // }\n    // else {\n    //   this.boarderX += this.direction / 2;\n    // }\n    // // Draw Obstacles\n    // let gameObstacles = new Obstacles(cw, ch, ctx);\n    // this.gameObstacles.drawObstacle();\n  }\n\n  handleEvent(e) {\n    const key = e.key;\n    const keycode = e.keyCode;\n    if (key === \"ArrowLeft\" && this.direction > -2) {\n      this.direction--;\n    }\n    else if (key === \"ArrowRight\" && this.direction < 2) {\n      debugger;\n      this.direction++;\n    }\n    // else if (key === \"ArrowDown\"){\n    //   this.speed++;\n    // }else if (key === \"ArrowUp\"){\n    //   this.speed--;\n    // };\n    if (key === \"ArrowLeft\" || \"ArrowRight\" || \"ArrowUp\" || \"ArrowDown\") {\n      this.start();\n      // this.game = true;\n    }\n    if (keycode === 32 && this.game === false) {\n      window.location.reload(true);\n    }\n  }\n\n  start() {\n    setInterval(this.draw.bind(this), 200);\n  }\n}\n\n\n\n\n\n\n// Game.prototype.stop = function stop() {\n//   if (this.game) {\n\n//     clearInterval(obstacleInterval);\n//     clearInterval(gameInterval);\n//     // this.keys = false;\n//   }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// const Game = require(\"./game.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext(\"2d\");\n  new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Obstacles {\n  constructor(cw, ch, ctx) {\n    this.cw = cw;\n    this.ch = ch;\n    this.ctx = ctx;\n    this.obsImage = new Image();\n    this.obsImage.src = \"../Obstacles.png\";\n  }\n  \n  drawObstacle() {\n    // debugger\n    let frameIndex = Math.floor(Math.random() * 4) * 50;\n    let obsPosX = Math.floor(Math.random() * this.cw);\n    let obsPosY = Math.floor(Math.random() * this.ch);\n    this.ctx.drawImage(this.obsImage, frameIndex, 0, 50, 50, obsPosX, obsPosY, 50, 50);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacles);\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ })

/******/ });
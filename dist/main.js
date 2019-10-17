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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass Boarder{\n  constructor(cw, ch, ctx) {\n    this.ctx = ctx;\n    this.cw = cw;\n    this.ch = ch;\n    this.direction = 0;\n    this.boarderPosX = this.cw / 2;\n\n    document.addEventListener('keydown', this.handleEvent.bind(this));\n  }\n\n\n  draw() {\n    // debugger\n    const james = new Image();\n    james.src = \"../james.png\";\n    let boarderPosY = this.ch / 6;\n    // let frameIndex = Math.floor(Math.random() * 4) * 25;\n    // let obsPosX = Math.floor(Math.random() * this.cw);\n    // let obsPosY = Math.floor(Math.random() * this.ch);\n\n    if(this.direction === 0){\n      this.ctx.drawImage(\n        james,\n        0,\n        0,\n        25,\n        25,\n        this.boarderPosX,\n        boarderPosY,\n        75,\n        75);\n    }else if(this.direction < 0 && this.direction > -11){\n      this.ctx.drawImage(\n        james,\n        25,\n        0,\n        25,\n        25,\n        this.boarderPosX,\n        boarderPosY,\n        75,\n        75);\n    } else if (this.direction > 0 && this.direction < 11){\n      this.ctx.drawImage(\n        james,\n        50,\n        0,\n        25,\n        25,\n        this.boarderPosX,\n        boarderPosY,\n        75,\n        75);\n    }else if (this.direction < -11){\n      this.ctx.drawImage(\n        james,\n        75,\n        0,\n        25,\n        25,\n        this.boarderPosX,\n        boarderPosY,\n        75,\n        75);\n    }else if (this.direction > 11) {\n      this.ctx.drawImage(\n        james,\n        100,\n        0,\n        25,\n        25,\n        this.boarderPosX,\n        boarderPosY,\n        75,\n        75);\n    }\n    //keep boarder in bounds\n    if(this.boarderPosX < 0) {\n      this.boarderPosX += Math.abs(this.direction / 2);\n    }else if(this.boarderPosX > this.cw) {\n    this.boarderPosX -= Math.abs(this.direction / 2);\n    }else {\n      this.boarderPosX += this.direction / 2;\n    }\n  }\n\n  handleEvent(e) {\n    const key = e.key;\n \n    if(key === \"ArrowLeft\" && this.direction > -11) { \n      this.direction = this.direction - 10;\n    }else if(key === \"ArrowRight\" && this.direction < 11 ) {\n      this.direction = this.direction + 10;\n    }\n  }\n\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boarder);\n\n//# sourceURL=webpack:///./src/boarder.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacles.js */ \"./src/obstacles.js\");\n/* harmony import */ var _boarder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarder.js */ \"./src/boarder.js\");\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.cw = canvas.width = window.innerWidth;\n    this.ch = canvas.height = window.innerHeight;\n    this.score = 0;\n    this.game = false;\n    this.obsPosY = this.ch - 50;\n    this.boarder = new _boarder_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.cw, this.ch, ctx);\n    this.gameObstacles = new _obstacles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.cw, this.ch, ctx);\n    document.addEventListener('keydown', this.handleEvent.bind(this));\n\n    this.draw();\n  }\n  draw() {\n    const cw = this.cw;\n    const ch = this.ch;\n    const ctx = this.ctx;\n    ctx.clearRect(0, 0, cw, ch);\n    this.score++;\n\n    const title = ctx.createLinearGradient(0, 0, 0, 170);\n    title.addColorStop(0.25, \"black\");\n    title.addColorStop(1, \"green\");\n    ctx.fillStyle = title;\n\n    if (this.score < 2) {\n      ctx.textAlign = \"center\";\n      ctx.font = \"30px Arial\";\n      ctx.fillText(`BackCountry`, cw / 2, 60);\n      ctx.font = \"20px Arial\";\n      ctx.fillText(`Press the Space Bar to Start`, cw / 2, 100);\n      ctx.font = \"16px Arial\";\n      ctx.fillText(`use arrow keys to steer`, cw / 2, 124);\n    }\n    // Score\n    ctx.textAlign = \"start\";\n    ctx.font = \"14px Arial\";\n    ctx.fillStyle = 'darkgreen';\n    ctx.fillText(`Score: ${Math.floor((this.score - 1) / 5)} feet`, 40, 50);\n\n    if(this.obsPosY < ch){\n      this.obsPosY = this.obsPosY - 5;\n    }\n    this.boarder.draw();\n    this.gameObstacles.draw(this.obsPosY);\n  }\n\n  handleEvent(e) {\n    const keycode = e.keyCode;\n \n    if (keycode === 32 && !this.game) {\n      this.start();\n      this.game = true;\n      //   window.location.reload(true);\n    }\n  }\n\n  start() {\n    setInterval(this.draw.bind(this), 20);\n  }\n\n// stop() {\n//   if (this.game) {\n\n//     clearInterval(obstacleInterval);\n//     clearInterval(gameInterval);\n//     // this.keys = false;\n//   }\n// }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass Obstacles {\n  constructor(cw, ch, ctx) {\n    this.cw = cw;\n    this.ch = ch;\n    this.ctx = ctx;\n    this.obsImage = new Image();\n    this.obsImage.src = \"../Obstacles.png\";\n  }\n\n  draw(obsPosY) {\n    // debugger\n    let frameIndex = Math.floor(Math.random() * 4) * 50;\n    let obsPosX = Math.floor(Math.random() * this.cw);\n    // let obsPosY = Math.floor(Math.random() * this.ch);\n\n    this.ctx.drawImage(\n      this.obsImage, \n      frameIndex, \n      0, \n      50, \n      50, \n      obsPosX, \n      obsPosY, \n      50, \n      50);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacles);\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ })

/******/ });
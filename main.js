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
eval("__webpack_require__.r(__webpack_exports__);\nclass Boarder{\n  constructor(cw, ch, ctx) {\n    this.ctx = ctx;\n    this.cw = cw;\n    this.ch = ch;\n    this.direction = 0;\n    this.posX = this.cw / 2;\n    this.posY = this.ch / 6;\n    document.addEventListener('keydown', this.handleEvent.bind(this));\n  }\n\n  draw() {\n    let frame = 0;\n    const james = new Image();\n    james.src = \"./james.png\";\n\n    if(this.direction === 0){\n      frame = 0;\n    }else if(this.direction < 0 && this.direction > -6){\n      frame = 25;\n    } else if (this.direction > 0 && this.direction < 6){\n      frame = 50;\n    }else if (this.direction < -6){\n      frame = 75;\n    }else if (this.direction > 6) {\n      frame = 100;\n    }\n    // make James 50px for now\n    this.ctx.drawImage(\n      james,\n      frame,\n      0,\n      25,\n      25,\n      this.posX,\n      this.posY,\n      50,\n      50);\n\n    // keep boarder in bounds\n    if(this.posX < 0) {\n      this.posX += Math.abs(this.direction / 2);\n    }else if(this.posX > this.cw) {\n    this.posX -= Math.abs(this.direction / 2);\n    }else {\n      this.posX += this.direction / 2;\n    }\n  }\n\n  handleEvent(e) {\n    const key = e.key;\n \n    if(key === \"ArrowLeft\" && this.direction > -6) { \n      this.direction = this.direction - 5;\n    }else if(key === \"ArrowRight\" && this.direction < 6 ) {\n      this.direction = this.direction + 5;\n    }\n  }\n\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boarder);\n\n//# sourceURL=webpack:///./src/boarder.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obstacles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacles.js */ \"./src/obstacles.js\");\n/* harmony import */ var _boarder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boarder.js */ \"./src/boarder.js\");\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.cw = canvas.width = window.innerWidth;\n    this.ch = canvas.height = window.innerHeight;\n    this.score = 0;\n    this.lives = 3;\n    this.game = true;\n    this.obstacles = [];\n    this.obsPosY = this.ch - 50;\n    this.boarder = new _boarder_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.cw, this.ch, ctx);\n    this.gameObstacles = new _obstacles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.cw, this.ch, ctx);\n    document.addEventListener('keydown', this.handleEvent.bind(this));\n    \n    this.draw();\n  }\n\n  draw() {\n    const cw = this.cw;\n    const ch = this.ch;\n    const ctx = this.ctx;\n    ctx.clearRect(0, 0, cw, ch);\n    this.score++;\n    //Welcome Screen\n    const title = ctx.createLinearGradient(cw / 4, ch / 4, (2/4) * cw, (2/4) * ch);\n    title.addColorStop(0.6, \"black\");\n    title.addColorStop(1, \"darkgreen\");\n    ctx.fillStyle = title;\n\n    if (this.score < 2) {\n      ctx.textAlign = \"center\";\n      ctx.font = \"80px Arial\";\n      ctx.fillText(`BackCountry`, cw / 2, ch / 2);\n      ctx.font = \"20px Arial\";\n      ctx.fillStyle = \"darkgreen\";\n      ctx.fillText(`Press the Space Bar to Start`, cw / 2, ((ch/2) + 30));\n      ctx.font = \"16px Arial\";\n      ctx.fillText(`use arrow keys to steer`, cw / 2, ((ch/2) + 55));\n    }\n    // Score\n    ctx.textAlign = \"start\";\n    ctx.font = \"24px Arial\";\n    ctx.fillStyle = 'darkgreen';\n    ctx.fillText(`Score: ${Math.floor(this.score / 5)} feet`, 40, 50);\n    // Lives\n    ctx.textAlign = \"start\";\n    ctx.font = \"24px Arial\";\n    ctx.fillStyle = 'darkgreen';\n    ctx.fillText(`Lives: ${this.lives}`, 40, 80);\n\n    this.levels();\n    this.boarder.draw();\n  }\n\n  levels(){\n    let obsAmount = 10;\n    let obsSpeed = 3;\n\n    if(this.score < 500 && this.score > 3){\n      this.ctx.textAlign = \"center\";\n      this.ctx.font = \"20px Arial\";\n      this.ctx.fillStyle = \"darkgreen\";\n      this.ctx.fillText(`LEVEL 1`, (this.cw / 2), 40);\n    }else if(this.score >= 500 && this.score < 1000){\n      this.ctx.textAlign = \"center\";\n      this.ctx.font = \"20px Arial\";\n      this.ctx.fillStyle = \"darkgreen\";\n      this.ctx.fillText(`LEVEL 2`, (this.cw / 2), 40);\n      clearInterval(this.gameInterval);\n      this.gameInterval = setInterval(this.draw.bind(this), 20);\n      obsAmount = 15;\n      obsSpeed = 4;\n    }else if(this.score >= 1000 && this.score < 1500){\n      this.ctx.textAlign = \"center\";\n      this.ctx.font = \"20px Arial\";\n      this.ctx.fillStyle = \"darkgreen\";\n      this.ctx.fillText(`LEVEL 3`, (this.cw / 2), 40);\n      clearInterval(this.gameInterval);\n      this.gameInterval = setInterval(this.draw.bind(this), 15);\n      obsAmount = 20;\n      obsSpeed = 5;\n    }else if(this.score >= 1500 && this.score < 2000){\n      this.ctx.textAlign = \"center\";\n      this.ctx.font = \"20px Arial\";\n      this.ctx.fillStyle = \"darkgreen\";\n      this.ctx.fillText(`LEVEL 4`, (this.cw / 2), 40);\n      clearInterval(this.gameInterval);\n      this.gameInterval = setInterval(this.draw.bind(this), 12);\n      obsAmount = 25;\n      obsSpeed = 6;\n    }else if(this.score >= 2000){\n      this.ctx.textAlign = \"center\";\n      this.ctx.font = \"20px Arial\";\n      this.ctx.fillStyle = \"darkgreen\";\n      this.ctx.fillText(`LEVEL 5`, (this.cw / 2), 40);\n      clearInterval(this.gameInterval);\n      this.gameInterval = setInterval(this.draw.bind(this), 10);\n      obsAmount = 30;\n      obsSpeed = 7;\n    }\n\n    for (let i = 0; this.obstacles.length < obsAmount; i++) {\n      this.obstacles.push(this.gameObstacles.newObstacle());\n    }\n    //Delete obstacles that are off screen\n    this.obstacles = this.obstacles.filter(obstacle => (obstacle.posY > 0));\n    // Move obstacles up and then redraw\n    this.obstacles.forEach(obstacle => {\n      obstacle.posY = obstacle.posY - obsSpeed;\n      this.gameObstacles.draw(obstacle);\n\n      // detect a crash\n      if (this.boarder.posX < (obstacle.posX + 25)\n        && this.boarder.posX > (obstacle.posX - 25)\n        && this.boarder.posY < (obstacle.posY + 25)\n        && this.boarder.posY > (obstacle.posY - 25)) {\n        this.handleCrash();\n      }\n    })\n  }\n\n  handleEvent(e) {\n    const keycode = e.keyCode;\n\n    if (keycode === 32 && this.game) {\n      this.start();\n    }else if(keycode === 32 && !this.game){\n      location.reload(true);\n    }\n  }\n\n  start() {\n    if(this.game){\n      this.game = false\n      this.gameInterval = setInterval(this.draw.bind(this), 25);\n    }\n  }\n\n  handleCrash() {\n    clearInterval(this.gameInterval);\n    if(this.lives <= 1){\n      this.gameOver();\n    }else{\n      this.lives--;\n      clearInterval(this.gameInterval);\n      // Move James away from obstacle before restarting\n      this.obstacles.forEach(obstacle => {\n        this.ctx.textAlign = \"center\";\n        this.ctx.font = \"32px Arial bold\";\n        this.ctx.fillStyle = \"darkred\";\n        this.ctx.fillText(`OUCH!`, (this.cw / 2), (this.ch / 2));\n        obstacle.posY = obstacle.posY - 50;\n      })\n      this.game = true;\n      this.start();\n    }\n  }\n\n  gameOver(){\n    clearInterval(this.gameInterval);\n    this.ctx.textAlign = \"center\";\n    this.ctx.font = \"32px Arial bold\";\n    this.ctx.fillStyle = \"darkred\";\n    this.ctx.fillText(`GAME OVER`, (this.cw / 2), (this.ch / 2));\n    this.ctx.textAlign = \"center\";\n    this.ctx.font = \"24px Arial bold\";\n    this.ctx.fillStyle = \"darkgreen\";\n    this.ctx.fillText(`Final Score: ${Math.floor(this.score / 5)} feet`, (this.cw / 2), (this.ch / 2) + 35);\n    this.ctx.textAlign = \"center\";\n    this.ctx.font = \"20px Arial bold\";\n    this.ctx.fillStyle = \"darkred\";\n    this.ctx.fillText(`Press Space Bar to Try Again`, (this.cw / 2), (this.ch / 2) + 70);\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById('canvas');\n  let ctx = canvas.getContext(\"2d\");\n  new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Obstacles {\n  constructor(cw, ch, ctx) {\n    this.cw = cw;\n    this.ch = ch;\n    this.ctx = ctx;\n  }\n\n  newObstacle() {\n    let obsImage = new Image();\n    obsImage.src = \"./Obstacles.png\";\n    let frameIndex = Math.floor(Math.random() * 5) * 50;\n  \n    return ({\n      obs: obsImage,\n      frame: frameIndex,\n      posX: Math.floor(Math.random() * this.cw),\n      posY: this.ch + Math.floor(Math.random() * this.ch),\n    })\n  }\n\n  draw(obstacle) { \n    this.ctx.drawImage(\n      obstacle.obs, \n      obstacle.frame, \n      0, \n      50, \n      50, \n      obstacle.posX, \n      obstacle.posY, \n      75, \n      75);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Obstacles);\n\n//# sourceURL=webpack:///./src/obstacles.js?");

/***/ })

/******/ });
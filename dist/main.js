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

/***/ "./blobElement.js":
/*!************************!*\
  !*** ./blobElement.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Blob {\r\n\r\n  constructor(position) {\r\n    this.radius = position.z\r\n    this.position = position\r\n    this.velocity = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](Math.random() * 0.009, Math.random() * 0.009, Math.random() * 0.01)\r\n    this.angle = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0,0,0)\r\n\r\n    this.resize(window.innerWidth, window.innerHeight)\r\n    this.random = Math.random()\r\n    this.duration = 700\r\n    this.t = 0\r\n  }\r\n\r\n  resize(width, height) {\r\n    this.amplitude = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](this.random * width/4, this.random * height/8, Math.random() * (width/2) )\r\n    this.anchor = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](width / 2, height / 2, 0)\r\n  }\r\n\r\n  scale(b, c, duration) {\r\n    let t = this.t\r\n     if (t < duration) {\r\n      this.t += 1\r\n      t += 1\r\n      this.position.z = t >= duration ? c : -c *(t/=duration)*(t-2) + b\r\n    }\r\n  }\r\n\r\n  display() {\r\n    this.angle.add(this.velocity)\r\n    this.position.x = Math.sin(this.angle.x) * this.amplitude.x + this.anchor.x\r\n    this.position.y = Math.sin(this.angle.y) * this.amplitude.y + this.anchor.y\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blob);\r\n// module.exports = Blob\r\n\r\n\r\n\r\n// WEBPACK FOOTER //\r\n// ./assets/js/lib/blobs/blobElement.js\n\n//# sourceURL=webpack:///./blobElement.js?");

/***/ }),

/***/ "./blobsCanvas.js":
/*!************************!*\
  !*** ./blobsCanvas.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen */ \"./screen.js\");\n/* harmony import */ var _blobElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blobElement */ \"./blobElement.js\");\n// import Modernizr from 'modernizr';\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => {\r\n\r\n  // Set Shaders\r\n  const vertexShader = document.getElementById( 'vertexShader' ).textContent\r\n  const fragmentShaderContent =\r\n    `#ifdef GL_ES\r\n      precision highp float;\r\n    #endif\r\n\r\n    uniform vec2 u_resolution;\r\n    uniform vec2 u_mouse;\r\n    uniform vec3 u_blobs[3];\r\n    uniform vec3 u_colors[3];\r\n    uniform float u_time;\r\n\r\n    void main(){\r\n      vec2 st = gl_FragCoord.xy/u_resolution;\r\n      vec3 color = vec3(1.);\r\n      const int count = 3;\r\n      float totalV = 0.;\r\n\r\n      for( int i = 0; i < count; i++){\r\n        float d = distance((u_blobs[i].xy/u_resolution), st);\r\n        float v = ((u_blobs[i].z * .3)/u_resolution.x) / pow(d, 3.0);\r\n        color +=  u_colors[i] * (v);\r\n        totalV += v;\r\n      }\r\n      color = color / totalV;\r\n      gl_FragColor = vec4(vec3(color), .88);\r\n    }`\r\n    ;\r\n\r\n  // Create Renderer\r\n  const renderer = new three__WEBPACK_IMPORTED_MODULE_1__[\"WebGLRenderer\"]({ antialias: false, alpha: false})\r\n\r\n  // Create Scene\r\n  const scene = new three__WEBPACK_IMPORTED_MODULE_1__[\"Scene\"]()\r\n\r\n  // Create Camera\r\n  const camera = new three__WEBPACK_IMPORTED_MODULE_1__[\"Camera\"]()\r\n  camera.position.z = 1\r\n\r\n  // Append Element to window\r\n  document.body.appendChild(renderer.domElement)\r\n  renderer.domElement.classList.add('blobs')\r\n\r\n  // Set Variables for blobs\r\n  let blobCount = 3\r\n  let uniforms,\r\n      geometry,\r\n      material,\r\n      mesh\r\n\r\n  let t = 0\r\n  // const blobRadius = [0.0, 0.0, 0.0]\r\n  const blobRadiusAnimate = [26, 90, 48]\r\n  // const rgbColors = [[129, 53, 252], [255, 222, 222], [215, 224, 255]]\r\n  const rgbColors = [[16, 6, 159], [202, 207, 225], [138, 141, 143]]\r\n  const colors = []\r\n  const allBlobs = [new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/2, Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/2, 0), new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/2, Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/2, 0), new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/2, Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/2, 0)]\r\n  const blobElements = []\r\n  let shouldAnimate = true\r\n  let requestId\r\n\r\n  let lastSizeW = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])() + 10\r\n\r\n  let mousePositionX = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/2\r\n  let mousePositionY = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])()/2\r\n  let maxAnchorX = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/4\r\n  let maxAnchorY = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])()/4\r\n\r\n  calculateShaderColors(rgbColors, colors)\r\n  createShader()\r\n  createBlob()\r\n  resize()\r\n\r\n  window.addEventListener('resize', resize);\r\n\r\n  function calculateShaderColors(originalColors, convertedColors) {\r\n    originalColors.forEach((color) => {\r\n      convertedColors.push(new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](color[0]/255, color[1]/255, color[2]/255))\r\n    })\r\n  }\r\n\r\n  document.querySelector('.outer').addEventListener('mouseover', (e) => {\r\n    mousePositionX = e.clientX\r\n    mousePositionY = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])() - e.clientY\r\n  })\r\n\r\n  function mouseEnter (e) {\r\n\r\n    mousePositionX = e.clientX\r\n    mousePositionY = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])() - e.clientY\r\n\r\n  }\r\n\r\n\r\n  function createShader() {\r\n    geometry = new three__WEBPACK_IMPORTED_MODULE_1__[\"PlaneBufferGeometry\"]( 2, 2 )\r\n    uniforms = {\r\n      u_time: { type: \"f\", value: 1.0 },\r\n      u_resolution: { type: \"v2\", value: new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector2\"](Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])(), Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()) },\r\n      u_mouse: { type: \"v2\", value: new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector2\"]() },\r\n      u_blobs: { type: \"v3v\", value: []},\r\n      u_colors: { \"value\": colors}\r\n    }\r\n\r\n    material = new three__WEBPACK_IMPORTED_MODULE_1__[\"ShaderMaterial\"]({\r\n      uniforms: uniforms,\r\n      vertexShader: vertexShader,\r\n      fragmentShader: fragmentShaderContent\r\n    })\r\n    mesh = new three__WEBPACK_IMPORTED_MODULE_1__[\"Mesh\"]( geometry, material)\r\n    scene.add(mesh)\r\n  }\r\n\r\n  function resize () {\r\n\r\n    if ((Math.abs(Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])() - lastSizeW)) >= 10) {\r\n      renderer.setSize(Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])(), (Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])() * 2))\r\n      camera.aspect = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])() / Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])() * 2\r\n\r\n      uniforms.u_resolution.value.x = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()\r\n      uniforms.u_resolution.value.y = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()\r\n      maxAnchorX = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()/ 4\r\n      maxAnchorY = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])() / 2.5\r\n      blobElements.forEach((blob) => {\r\n        blob.resize(Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])(), Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowHeight\"])() * 3)\r\n      })\r\n      lastSizeW = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])()\r\n    }\r\n  }\r\n\r\n  function createBlob(){\r\n    allBlobs.forEach((blob) => {\r\n      blobElements.push(new _blobElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"](blob))\r\n    })\r\n    uniforms.u_blobs.value = allBlobs\r\n    uniforms.u_colors.value = colors\r\n  }\r\n\r\n  function draw() {\r\n    requestId = window.requestAnimationFrame(draw);\r\n    if (shouldAnimate) {\r\n      blobElements.forEach((ball, index) => {\r\n        ball.scale(ball.radius, blobRadiusAnimate[index], 200)\r\n\r\n      })\r\n    }\r\n\r\n    blobElements.forEach((ball, index) => {\r\n      if (mousePositionX >= (Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])() - maxAnchorX)) {\r\n        mousePositionX = Object(_screen__WEBPACK_IMPORTED_MODULE_2__[\"windowWidth\"])() - maxAnchorX\r\n      } else if(mousePositionX <= maxAnchorX) {\r\n        mousePositionX = maxAnchorX\r\n      }\r\n\r\n      ball.anchor.x += (mousePositionX-ball.anchor.x) * 0.0007\r\n      ball.display()\r\n    })\r\n\r\n    uniforms.u_blobs.value = blobElements.map(ball => new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](ball.position.x, ball.position.y, ball.position.z))\r\n    renderer.render( scene, camera )\r\n  }\r\n\r\n  function destroy() {\r\n    window.cancelAnimationFrame(requestId);\r\n    window.removeEventListener('resize', resize);\r\n    renderer.domElement.remove()\r\n  }\r\n\r\n  window.requestAnimationFrame(draw)\r\n\r\n  return {\r\n    destroy,\r\n  };\r\n});\r\n\r\n\r\n\r\n// WEBPACK FOOTER //\r\n// ./assets/js/lib/blobs/blobsCanvas.js\n\n//# sourceURL=webpack:///./blobsCanvas.js?");

/***/ }),

/***/ "./blobsManager.js":
/*!*************************!*\
  !*** ./blobsManager.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blobsCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blobsCanvas */ \"./blobsCanvas.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((options = {}) => {\r\n\r\n  let blobsCanvas;\r\n  let canvas;\r\n\r\n  // private\r\n  function checkCanvas() {\r\n    if (!canvas) console.error('canvas not available');\r\n  }\r\n\r\n  function getShouldRenderBlobs() {\r\n    return document.querySelector('[blobs-enabled]');\r\n  }\r\n\r\n  function pageChange(e) {\r\n    const hasInterstitial = e.detail.interstitial;\r\n\r\n    // has interstitial and no canvas, create and play\r\n    if (hasInterstitial && !canvas) {\r\n      create();\r\n\r\n    // has interstitial with previous canvas, create and play\r\n    } else if (hasInterstitial && canvas) {\r\n     \r\n    }\r\n  }\r\n\r\n  function pageDone() {\r\n\r\n    const shouldRenderBlobs = getShouldRenderBlobs();\r\n\r\n    // should render with previous canvas: refresh\r\n    if (shouldRenderBlobs && canvas) {\r\n      destroy();\r\n      create();\r\n\r\n    // should not render with previous canvas: destroy\r\n    } else if (!shouldRenderBlobs && canvas) {\r\n      destroy();\r\n\r\n    // should render with no previous canvas: create\r\n    } else if (shouldRenderBlobs && !canvas) {\r\n      create();\r\n    }\r\n  }\r\n\r\n  function load() { \r\n      blobsCanvas = _blobsCanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"];          \r\n  }\r\n\r\n  // public\r\n\r\n  function create() {\r\n    if (!blobsCanvas) throw new Error('BlobsCanvas not available');\r\n    canvas = blobsCanvas(options);\r\n  }\r\n\r\n  function destroy() {\r\n    checkCanvas();\r\n    canvas.destroy();\r\n    canvas = null;\r\n  }\r\n\r\n  // bind page events\r\n  window.addEventListener('page:change', pageChange);\r\n  window.addEventListener('page:done', pageDone);\r\n\r\n  //return a promise with the given resolved value  \r\n  let promiseLoad = Promise.resolve(load());\r\n\r\n  //chain to the above promise\r\n  promiseLoad.then(()=>{\r\n    pageDone();\r\n  });\r\n\r\n  // api\r\n  return {\r\n    create,\r\n    destroy,\r\n  };\r\n\r\n});\n\n//# sourceURL=webpack:///./blobsManager.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/debounce.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/now.js?");

/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var debounce = __webpack_require__(/*! ./debounce */ \"./node_modules/lodash/debounce.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a throttled function that only invokes `func` at most once per\n * every `wait` milliseconds. The throttled function comes with a `cancel`\n * method to cancel delayed `func` invocations and a `flush` method to\n * immediately invoke them. Provide `options` to indicate whether `func`\n * should be invoked on the leading and/or trailing edge of the `wait`\n * timeout. The `func` is invoked with the last arguments provided to the\n * throttled function. Subsequent calls to the throttled function return the\n * result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the throttled function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.throttle` and `_.debounce`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to throttle.\n * @param {number} [wait=0] The number of milliseconds to throttle invocations to.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=true]\n *  Specify invoking on the leading edge of the timeout.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new throttled function.\n * @example\n *\n * // Avoid excessively updating the position while scrolling.\n * jQuery(window).on('scroll', _.throttle(updatePosition, 100));\n *\n * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\n * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });\n * jQuery(element).on('click', throttled);\n *\n * // Cancel the trailing throttled invocation.\n * jQuery(window).on('popstate', throttled.cancel);\n */\nfunction throttle(func, wait, options) {\n  var leading = true,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  if (isObject(options)) {\n    leading = 'leading' in options ? !!options.leading : leading;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n  return debounce(func, wait, {\n    'leading': leading,\n    'maxWait': wait,\n    'trailing': trailing\n  });\n}\n\nmodule.exports = throttle;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/throttle.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, JSONLoader, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ImageUtils, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, TangentSpaceNormalMap, ObjectSpaceNormalMap, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, Projector, CanvasRenderer, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./screen.js":
/*!*******************!*\
  !*** ./screen.js ***!
  \*******************/
/*! exports provided: windowWidth, windowHeight, documentWidth, documentHeight, scrollTop, scrollLeft, devicePixelRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowWidth\", function() { return windowWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowHeight\", function() { return windowHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"documentWidth\", function() { return documentWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"documentHeight\", function() { return documentHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollTop\", function() { return scrollTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollLeft\", function() { return scrollLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"devicePixelRatio\", function() { return devicePixelRatio; });\nconst windowWidth = () => {\r\n    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;\r\n  };\r\n  \r\n  const windowHeight  = () => {\r\n    return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;\r\n  };\r\n  \r\n  const documentWidth = () => {\r\n    return Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);\r\n  };\r\n  \r\n  const documentHeight = () => {\r\n    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);\r\n  };\r\n  \r\n  const scrollTop = () => {\r\n    return document.body.scrollTop || document.documentElement.scrollTop;\r\n  };\r\n  \r\n  const scrollLeft = () => {\r\n    return document.body.scrollLeft || document.documentElement.scrollLeft;\r\n  };\r\n  \r\n  const devicePixelRatio = () => {\r\n    return window.devicePixelRatio || Math.round(window.screen.availWidth / document.documentElement.clientWidth);\r\n  };\r\n  \r\n  \n\n//# sourceURL=webpack:///./screen.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blobsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blobsManager */ \"./blobsManager.js\");\n\n\nObject(_blobsManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
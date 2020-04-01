(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DeTransform"] = factory();
	else
		root["DeTransform"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: getOriCoordinate, getOriDragDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/transform */ \"./src/utils/transform.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getOriCoordinate\", function() { return _utils_transform__WEBPACK_IMPORTED_MODULE_0__[\"getOriCoordinate\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getOriDragDistance\", function() { return _utils_transform__WEBPACK_IMPORTED_MODULE_0__[\"getOriDragDistance\"]; });\n\n\n\n\n\n//# sourceURL=webpack://DeTransform/./src/index.js?");

/***/ }),

/***/ "./src/utils/matrix.js":
/*!*****************************!*\
  !*** ./src/utils/matrix.js ***!
  \*****************************/
/*! exports provided: applyTransform, parseCoefficients, inverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyTransform\", function() { return applyTransform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCoefficients\", function() { return parseCoefficients; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inverse\", function() { return inverse; });\n\nfunction applyTransform (point, origin, mat) {\n    let { x, y, z } = point, { oriX, oriY } = origin, oriZ = origin.oriZ || 0, newW;\n    x = x - oriX;\n    y = y - oriY;\n    z = z - oriZ;\n    if (mat.length === 6) {\n      return {\n        x: (mat[0] * x + mat[1] * y + mat[2]) + oriX,\n        y: (mat[3] * x + mat[4] * y + mat[5]) + oriY\n      };\n    } else if (mat.length === 16) {\n      newW = (mat[12] * x + mat[13] * y + mat[14] * z + mat[15]);\n      return {\n        x: (mat[0] * x + mat[1] * y + mat[2] * z + mat[3]) / newW + oriX,\n        y: (mat[4] * x + mat[5] * y + mat[6] * z + mat[7]) / newW + oriY,\n        z: (mat[8] * x + mat[9] * y + mat[10] * z + mat[11]) / newW + oriZ,\n        w: newW\n      };\n    }\n  }\n  \n  function parseCoefficients (XY, Z) {\n    return {\n      A: XY[0] * Z[0] + XY[1] * Z[1] + XY[2] * Z[2],\n      B: XY[3] * Z[0] + XY[4] * Z[1] + XY[5] * Z[2],\n      C: XY[6] * Z[0] + XY[7] * Z[1] + XY[8] * Z[2]\n    };\n  }\n  \n  function inverse (mat) {\n    let det;\n    if (mat.length === 6) {\n      let [a, b, c, d, e, f] = mat;\n      det = a * d - b * c;\n      return [\n        d / det, -c / det, (c * f - e * d) / det,\n        -b / det, a / det, -(a * f - e * b) / det\n      ];\n    } else if (mat.length === 9) {\n      let [\n        a, b, c,\n        d, e, f,\n        g, h, i\n      ] = mat;\n      det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);\n  \n      return [\n        (e * i - f * h) / det, (c * h - b * i) / det, (b * f - c * e) / det,\n        (f * g - d * i) / det, (a * i - c * g) / det, (c * d - a * f) / det,\n        (d * h - e * g) / det, (b * g - a * h) / det, (a * e - b * d) / det\n      ];\n    } else if (mat.length === 16) {\n      let [\n          a1, b1, c1, d1,\n          a2, b2, c2, d2,\n          a3, b3, c3, d3,\n          a4, b4, c4, d4\n        ] = mat, invM = [];\n      invM[0] = b2 * c3 * d4 -\n          b2 * d3 * c4 -\n          b3 * c2 * d4 +\n          b3 * d2 * c4 +\n          b4 * c2 * d3 -\n          b4 * d2 * c3;\n  \n      invM[1] = -b1 * c3 * d4 +\n          b1 * d3 * c4 +\n          b3 * c1 * d4 -\n          b3 * d1 * c4 -\n          b4 * c1 * d3 +\n          b4 * d1 * c3;\n  \n      invM[2] = b1 * c2 * d4 -\n          b1 * d2 * c4 -\n          b2 * c1 * d4 +\n          b2 * d1 * c4 +\n          b4 * c1 * d2 -\n          b4 * d1 * c2;\n  \n      invM[3] = -b1 * c2 * d3 +\n          b1 * d2 * c3 +\n          b2 * c1 * d3 -\n          b2 * d1 * c3 -\n          b3 * c1 * d2 +\n          b3 * d1 * c2;\n  \n      invM[4] = -a2 * c3 * d4 +\n          a2 * d3 * c4 +\n          a3 * c2 * d4 -\n          a3 * d2 * c4 -\n          a4 * c2 * d3 +\n          a4 * d2 * c3;\n  \n      invM[5] = a1 * c3 * d4 -\n          a1 * d3 * c4 -\n          a3 * c1 * d4 +\n          a3 * d1 * c4 +\n          a4 * c1 * d3 -\n          a4 * d1 * c3;\n  \n      invM[6] = -a1 * c2 * d4 +\n          a1 * d2 * c4 +\n          a2 * c1 * d4 -\n          a2 * d1 * c4 -\n          a4 * c1 * d2 +\n          a4 * d1 * c2;\n  \n      invM[7] = a1 * c2 * d3 -\n          a1 * d2 * c3 -\n          a2 * c1 * d3 +\n          a2 * d1 * c3 +\n          a3 * c1 * d2 -\n          a3 * d1 * c2;\n  \n      invM[8] = a2 * b3 * d4 -\n          a2 * d3 * b4 -\n          a3 * b2 * d4 +\n          a3 * d2 * b4 +\n          a4 * b2 * d3 -\n          a4 * d2 * b3;\n  \n      invM[9] = -a1 * b3 * d4 +\n          a1 * d3 * b4 +\n          a3 * b1 * d4 -\n          a3 * d1 * b4 -\n          a4 * b1 * d3 +\n          a4 * d1 * b3;\n  \n      invM[10] = a1 * b2 * d4 -\n          a1 * d2 * b4 -\n          a2 * b1 * d4 +\n          a2 * d1 * b4 +\n          a4 * b1 * d2 -\n          a4 * d1 * b2;\n  \n      invM[11] = -a1 * b2 * d3 +\n          a1 * d2 * b3 +\n          a2 * b1 * d3 -\n          a2 * d1 * b3 -\n          a3 * b1 * d2 +\n          a3 * d1 * b2;\n  \n      invM[12] = -a2 * b3 * c4 +\n          a2 * c3 * b4 +\n          a3 * b2 * c4 -\n          a3 * c2 * b4 -\n          a4 * b2 * c3 +\n          a4 * c2 * b3;\n  \n      invM[13] = a1 * b3 * c4 -\n          a1 * c3 * b4 -\n          a3 * b1 * c4 +\n          a3 * c1 * b4 +\n          a4 * b1 * c3 -\n          a4 * c1 * b3;\n  \n      invM[14] = -a1 * b2 * c4 +\n          a1 * c2 * b4 +\n          a2 * b1 * c4 -\n          a2 * c1 * b4 -\n          a4 * b1 * c2 +\n          a4 * c1 * b2;\n  \n      invM[15] = a1 * b2 * c3 -\n          a1 * c2 * b3 -\n          a2 * b1 * c3 +\n          a2 * c1 * b3 +\n          a3 * b1 * c2 -\n          a3 * c1 * b2;\n  \n      det = a1 * invM[0] + b1 * invM[4] + c1 * invM[8] + d1 * invM[12];\n      return [\n        invM[0] / det, invM[1] / det, invM[2] / det, invM[3] / det,\n        invM[4] / det, invM[5] / det, invM[6] / det, invM[7] / det,\n        invM[8] / det, invM[9] / det, invM[10] / det, invM[11] / det,\n        invM[12] / det, invM[13] / det, invM[14] / det, invM[15] / det\n      ];\n    }\n  }\n\n  \n\n//# sourceURL=webpack://DeTransform/./src/utils/matrix.js?");

/***/ }),

/***/ "./src/utils/transform.js":
/*!********************************!*\
  !*** ./src/utils/transform.js ***!
  \********************************/
/*! exports provided: getOriCoordinate, getOriDragDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOriCoordinate\", function() { return getOriCoordinate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOriDragDistance\", function() { return getOriDragDistance; });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/utils/matrix.js\");\n\n\nconst doc = document;\nlet __dragConfig = {};\n\nfunction filterEvent (event) {\n  let e = event && (event.sourceEvent || event.originalEvent || event);\n  return (e && ((e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]))) || e || { pageX: 0, pageY : 0 };\n}\n\n// todo: need improvement if transform applied on a scrollable body. pageX, pageY\nfunction parseEventCoordinates (event) {\n    let x = event.pageX || event.clientX + doc.scrollLeft + doc.body.scrollLeft,\n    y = event.pageY || event.clientY + doc.scrollTop + doc.body.scrollTop;\n    \n    return {\n        x,\n        y\n    };\n}\nfunction getOriCoordinate(element, event) {\n  let { x, y } = parseEventCoordinates(filterEvent(event)), cs, ori, mat, el = element, elList = [], left = 0, top = 0, temp, tempEl, oriX, oriY, hasTransform = false, is3DTransform = false, scrollTop = 0, scrollLeft = 0;\n\n  do {\n    cs = window.getComputedStyle(el);\n    if (el.tagName !== 'BODY' && cs.getPropertyValue('overflow') === 'auto' || cs.getPropertyValue('overflow') === 'scroll') {\n      if (el.scrollHeight > el.offsetHeight) {\n        scrollTop += el.scrollTop;\n      }\n      if (el.scrollHeight > el.offsetHeight) {\n        scrollLeft += el.scrollLeft;\n      }\n    }\n    if (cs.getPropertyValue('transform') && cs.getPropertyValue('transform') !== 'none') {\n      ori = cs.getPropertyValue('transform-origin').split(' ').map(e => +e.replace(/px/ig, ''));\n      oriX = ori[0]; oriY = ori[1];\n      mat = cs.getPropertyValue('transform').split('(')[1].split(')')[0].split(',').map(e => parseFloat(e.trim()));\n      if (mat.length === 6) {\n        // 2d transformation matrix otherwise ignore\n        left = 0; top = 0; tempEl = el;\n        do {\n          left += tempEl.offsetLeft;\n          top += tempEl.offsetTop;\n          tempEl = tempEl.offsetParent;\n        } while (tempEl);\n\n        elList.push({\n          elem: el,\n          oriX,\n          oriY,\n          invM: Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"inverse\"])(mat),\n          offsetLeft: left,\n          offsetTop: top\n        });\n        hasTransform = true;\n      } else if (mat.length === 16) {\n        is3DTransform = true;\n        hasTransform = true;\n        let [\n          a1, b1, c1, d1,\n          a2, b2, c2, d2,\n          a3, b3, c3, d3,\n          a4, b4, c4, d4\n        ] = mat;\n        left = 0; top = 0; tempEl = el;\n        do {\n          left += tempEl.offsetLeft;\n          top += tempEl.offsetTop;\n          tempEl = tempEl.offsetParent;\n        } while (tempEl);\n\n        elList.push({\n          elem: el,\n          oriX,\n          oriY,\n          matrix: [\n            a1, a2, a3, a4,\n            b1, b2, b3, b4,\n            c1, c2, c3, c4,\n            d1, d2, d3, d4\n          ],\n          offsetLeft: left,\n          offsetTop: top\n        });\n      }\n    }\n    el = el.parentElement;\n  } while (el);\n\n  x += scrollLeft;\n  y += scrollTop;\n\n  // calculate for target element (span)\n  left = 0; top = 0; tempEl = element;\n  do {\n    left += tempEl.offsetLeft;\n    top += tempEl.offsetTop;\n    tempEl = tempEl.offsetParent;\n  } while (tempEl);\n\n  if (is3DTransform) {\n    // 3d transform applied will solve only 1 element\n    tempEl = elList[0];\n    let chartBBox = { x1: left - tempEl.offsetLeft, y1: top - tempEl.offsetTop, x2: left + element.offsetWidth - tempEl.offsetLeft, y2: top + element.offsetHeight - tempEl.offsetTop },\n      bx1 = Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"applyTransform\"])({ x: chartBBox.x1, y: chartBBox.y1, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),\n      bx2 = Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"applyTransform\"])({ x: chartBBox.x2, y: chartBBox.y1, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),\n      bx3 = Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"applyTransform\"])({ x: chartBBox.x2, y: chartBBox.y2, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),\n      // bx4 = applyTransform({ x: chartBBox.x1, y: chartBBox.y2, z: 1 }, { oriX: ori[0], oriY: ori[1] }, tempEl.matrix),\n      { A, B, C } = Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"parseCoefficients\"])(Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"inverse\"])([\n        bx1.x, bx1.y, 1,\n        bx2.x, bx2.y, 1,\n        bx3.x, bx3.y, 1\n      ]), [bx1.z, bx2.z, bx3.z]), z;\n    x = x - tempEl.offsetLeft;\n    y = y - tempEl.offsetTop;\n    z = A * x + B * y + C;\n    temp = Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"applyTransform\"])({ x, y, z }, { oriX: ori[0], oriY: ori[1] }, Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"inverse\"])(tempEl.matrix));\n    x = temp.x - chartBBox.x1;\n    y = temp.y - chartBBox.y1;\n    z = temp.z;\n    return {\n      x, y\n    };\n  }\n  // 2d transform applid\n  while ((el = elList.pop())) {\n    x = x - el.offsetLeft;\n    y = y - el.offsetTop;\n    temp = Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"applyTransform\"])({ x, y }, { oriX: el.oriX, oriY: el.oriY }, el.invM);\n    x = temp.x + el.offsetLeft;\n    y = temp.y + el.offsetTop;\n  }\n\n  if (hasTransform) {\n    x -= left;\n    y -= top;\n    return {\n      x, y\n    };\n  }\n}\n\n// todo: remove argument state. parse state from event.\nfunction getOriDragDistance (element, event, state) {\n  let oriCoord = getOriCoordinate(element, event),\n    dx = 0, dy = 0,\n    { x, y } = parseEventCoordinates(filterEvent(event)), config = __dragConfig;\n\n  if (oriCoord) {\n    x = oriCoord.x;\n    y = oriCoord.y;\n  }\n\n  if (state === 'start') {\n    config._dragOX = x;\n    config._dragOY = y;\n  } else if (state === 'end') {\n    dx = x - config._dragOX;\n    dy = y - config._dragOY;\n    delete config._dragOX;\n    delete config._dragOY;\n  } else {\n    dx = x - config._dragOX;\n    dy = y - config._dragOY;\n  }\n  return {\n    dx,\n    dy\n  };\n}\n\n\n\n//# sourceURL=webpack://DeTransform/./src/utils/transform.js?");

/***/ })

/******/ });
});
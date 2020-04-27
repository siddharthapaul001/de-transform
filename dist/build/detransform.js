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
/*! exports provided: getOriCoordinate, getOriDragDistance, applyTransformAtPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/transform */ \"./src/utils/transform.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getOriCoordinate\", function() { return _utils_transform__WEBPACK_IMPORTED_MODULE_0__[\"getOriCoordinate\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getOriDragDistance\", function() { return _utils_transform__WEBPACK_IMPORTED_MODULE_0__[\"getOriDragDistance\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applyTransformAtPoint\", function() { return _utils_transform__WEBPACK_IMPORTED_MODULE_0__[\"applyTransformAtPoint\"]; });\n\n\n\n\n//# sourceURL=webpack://DeTransform/./src/index.js?");

/***/ }),

/***/ "./src/utils/matrix.js":
/*!*****************************!*\
  !*** ./src/utils/matrix.js ***!
  \*****************************/
/*! exports provided: parseCoefficients, inverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCoefficients\", function() { return parseCoefficients; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inverse\", function() { return inverse; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction parseCoefficients(XY, Z) {\n  return {\n    A: XY[0] * Z[0] + XY[1] * Z[1] + XY[2] * Z[2],\n    B: XY[3] * Z[0] + XY[4] * Z[1] + XY[5] * Z[2],\n    C: XY[6] * Z[0] + XY[7] * Z[1] + XY[8] * Z[2]\n  };\n}\n\nfunction inverse(mat) {\n  var det;\n\n  if (mat.length === 6) {\n    var _mat = _slicedToArray(mat, 6),\n        a = _mat[0],\n        c = _mat[1],\n        e = _mat[2],\n        b = _mat[3],\n        d = _mat[4],\n        f = _mat[5];\n\n    det = a * d - b * c;\n    return [d / det, -c / det, (c * f - e * d) / det, -b / det, a / det, -(a * f - e * b) / det];\n  } else if (mat.length === 9) {\n    var _mat2 = _slicedToArray(mat, 9),\n        _a = _mat2[0],\n        _b = _mat2[1],\n        _c = _mat2[2],\n        _d2 = _mat2[3],\n        _e2 = _mat2[4],\n        _f = _mat2[5],\n        g = _mat2[6],\n        h = _mat2[7],\n        i = _mat2[8];\n\n    det = _a * (_e2 * i - _f * h) - _b * (_d2 * i - _f * g) + _c * (_d2 * h - _e2 * g);\n    return [(_e2 * i - _f * h) / det, (_c * h - _b * i) / det, (_b * _f - _c * _e2) / det, (_f * g - _d2 * i) / det, (_a * i - _c * g) / det, (_c * _d2 - _a * _f) / det, (_d2 * h - _e2 * g) / det, (_b * g - _a * h) / det, (_a * _e2 - _b * _d2) / det];\n  } else if (mat.length === 16) {\n    var _mat3 = _slicedToArray(mat, 16),\n        a1 = _mat3[0],\n        b1 = _mat3[1],\n        c1 = _mat3[2],\n        d1 = _mat3[3],\n        a2 = _mat3[4],\n        b2 = _mat3[5],\n        c2 = _mat3[6],\n        d2 = _mat3[7],\n        a3 = _mat3[8],\n        b3 = _mat3[9],\n        c3 = _mat3[10],\n        d3 = _mat3[11],\n        a4 = _mat3[12],\n        b4 = _mat3[13],\n        c4 = _mat3[14],\n        d4 = _mat3[15],\n        invM = [];\n\n    invM[0] = b2 * c3 * d4 - b2 * d3 * c4 - b3 * c2 * d4 + b3 * d2 * c4 + b4 * c2 * d3 - b4 * d2 * c3;\n    invM[1] = -b1 * c3 * d4 + b1 * d3 * c4 + b3 * c1 * d4 - b3 * d1 * c4 - b4 * c1 * d3 + b4 * d1 * c3;\n    invM[2] = b1 * c2 * d4 - b1 * d2 * c4 - b2 * c1 * d4 + b2 * d1 * c4 + b4 * c1 * d2 - b4 * d1 * c2;\n    invM[3] = -b1 * c2 * d3 + b1 * d2 * c3 + b2 * c1 * d3 - b2 * d1 * c3 - b3 * c1 * d2 + b3 * d1 * c2;\n    invM[4] = -a2 * c3 * d4 + a2 * d3 * c4 + a3 * c2 * d4 - a3 * d2 * c4 - a4 * c2 * d3 + a4 * d2 * c3;\n    invM[5] = a1 * c3 * d4 - a1 * d3 * c4 - a3 * c1 * d4 + a3 * d1 * c4 + a4 * c1 * d3 - a4 * d1 * c3;\n    invM[6] = -a1 * c2 * d4 + a1 * d2 * c4 + a2 * c1 * d4 - a2 * d1 * c4 - a4 * c1 * d2 + a4 * d1 * c2;\n    invM[7] = a1 * c2 * d3 - a1 * d2 * c3 - a2 * c1 * d3 + a2 * d1 * c3 + a3 * c1 * d2 - a3 * d1 * c2;\n    invM[8] = a2 * b3 * d4 - a2 * d3 * b4 - a3 * b2 * d4 + a3 * d2 * b4 + a4 * b2 * d3 - a4 * d2 * b3;\n    invM[9] = -a1 * b3 * d4 + a1 * d3 * b4 + a3 * b1 * d4 - a3 * d1 * b4 - a4 * b1 * d3 + a4 * d1 * b3;\n    invM[10] = a1 * b2 * d4 - a1 * d2 * b4 - a2 * b1 * d4 + a2 * d1 * b4 + a4 * b1 * d2 - a4 * d1 * b2;\n    invM[11] = -a1 * b2 * d3 + a1 * d2 * b3 + a2 * b1 * d3 - a2 * d1 * b3 - a3 * b1 * d2 + a3 * d1 * b2;\n    invM[12] = -a2 * b3 * c4 + a2 * c3 * b4 + a3 * b2 * c4 - a3 * c2 * b4 - a4 * b2 * c3 + a4 * c2 * b3;\n    invM[13] = a1 * b3 * c4 - a1 * c3 * b4 - a3 * b1 * c4 + a3 * c1 * b4 + a4 * b1 * c3 - a4 * c1 * b3;\n    invM[14] = -a1 * b2 * c4 + a1 * c2 * b4 + a2 * b1 * c4 - a2 * c1 * b4 - a4 * b1 * c2 + a4 * c1 * b2;\n    invM[15] = a1 * b2 * c3 - a1 * c2 * b3 - a2 * b1 * c3 + a2 * c1 * b3 + a3 * b1 * c2 - a3 * c1 * b2;\n    det = a1 * invM[0] + b1 * invM[4] + c1 * invM[8] + d1 * invM[12];\n    return [invM[0] / det, invM[1] / det, invM[2] / det, invM[3] / det, invM[4] / det, invM[5] / det, invM[6] / det, invM[7] / det, invM[8] / det, invM[9] / det, invM[10] / det, invM[11] / det, invM[12] / det, invM[13] / det, invM[14] / det, invM[15] / det];\n  }\n}\n\n\n\n//# sourceURL=webpack://DeTransform/./src/utils/matrix.js?");

/***/ }),

/***/ "./src/utils/transform.js":
/*!********************************!*\
  !*** ./src/utils/transform.js ***!
  \********************************/
/*! exports provided: getOriCoordinate, getOriDragDistance, applyTransformAtPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOriCoordinate\", function() { return getOriCoordinate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOriDragDistance\", function() { return getOriDragDistance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyTransformAtPoint\", function() { return applyTransformAtPoint; });\n/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ \"./src/utils/matrix.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar doc = document;\nvar __dragConfig = {},\n    UNDEF;\n\nfunction filterEvent(event) {\n  var e = event && (event.sourceEvent || event.originalEvent || event);\n  return e && (e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0]) || e || {\n    pageX: 0,\n    pageY: 0\n  };\n} // todo: need improvement if transform applied on a scrollable body. pageX, pageY\n\n\nfunction parseEventCoordinates(event) {\n  var x = event.pageX || event.clientX + doc.scrollLeft + doc.body.scrollLeft,\n      y = event.pageY || event.clientY + doc.scrollTop + doc.body.scrollTop;\n  return {\n    x: x,\n    y: y\n  };\n}\n\nfunction applyTransform(point, origin, mat) {\n  var x = point.x,\n      y = point.y,\n      z = point.z,\n      oriX = origin.oriX,\n      oriY = origin.oriY,\n      oriZ = origin.oriZ || 0,\n      newW;\n  x = x - oriX;\n  y = y - oriY;\n  z = z - oriZ;\n\n  if (mat.length === 6) {\n    return {\n      x: mat[0] * x + mat[1] * y + mat[2] + oriX,\n      y: mat[3] * x + mat[4] * y + mat[5] + oriY\n    };\n  } else if (mat.length === 16) {\n    newW = mat[12] * x + mat[13] * y + mat[14] * z + mat[15];\n    return {\n      x: (mat[0] * x + mat[1] * y + mat[2] * z + mat[3]) / newW + oriX,\n      y: (mat[4] * x + mat[5] * y + mat[6] * z + mat[7]) / newW + oriY,\n      z: (mat[8] * x + mat[9] * y + mat[10] * z + mat[11]) / newW + oriZ,\n      w: newW\n    };\n  }\n} // alternate easy method\n// Note: not reliable for 3d transformation on firefox or other browsers\n// as this calucation relies on event.offsetX and event.offsetY which is experimental event attributes as per mdn\n\n\nfunction getOriCoordinateByOffsets(element, event) {\n  var x = event.offsetX,\n      y = event.offsetY,\n      dx = 0,\n      dy = 0,\n      tempEl,\n      left,\n      top;\n\n  if (element !== (event.target || event.srcElement)) {\n    dx = 0;\n    dy = 0;\n    tempEl = event.target || event.srcElement;\n\n    do {\n      dx += tempEl.offsetLeft;\n      dy += tempEl.offsetTop;\n      tempEl = tempEl.offsetParent;\n    } while (tempEl);\n\n    tempEl = element;\n\n    do {\n      dx -= tempEl.offsetLeft;\n      dy -= tempEl.offsetTop;\n      tempEl = tempEl.offsetParent;\n    } while (tempEl);\n  }\n\n  x += dx;\n  y += dy;\n  return {\n    x: x,\n    y: y\n  };\n}\n\nfunction getOriCoordinate(element, event) {\n  var useOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  var _parseEventCoordinate = parseEventCoordinates(filterEvent(event)),\n      x = _parseEventCoordinate.x,\n      y = _parseEventCoordinate.y,\n      cs,\n      ori,\n      mat,\n      el = element,\n      elList = [],\n      left = 0,\n      top = 0,\n      temp,\n      tempEl,\n      oriX,\n      oriY,\n      hasTransform = false,\n      is3DTransform = false,\n      scrollTop = 0,\n      scrollLeft = 0; // Note: This is a easier way to solve the problem.\n  // but it is not a reliable way as event.offsetX is experimental attribute\n  // which doesn't return accurate values for firefox (seen in 3d transform with perspective) and some browsers\n\n\n  if (useOffset && event.offsetX !== UNDEF) {\n    return getOriCoordinateByOffsets(element, event);\n  }\n\n  do {\n    cs = window.getComputedStyle(el);\n\n    if (el.tagName !== 'BODY' && (cs.getPropertyValue('overflow') === 'auto' || cs.getPropertyValue('overflow') === 'scroll')) {\n      if (el.scrollHeight > el.offsetHeight) {\n        scrollTop += el.scrollTop;\n      }\n\n      if (el.scrollWidth > el.offsetWidth) {\n        scrollLeft += el.scrollLeft;\n      }\n    }\n\n    if (cs.getPropertyValue('transform') && cs.getPropertyValue('transform') !== 'none') {\n      ori = cs.getPropertyValue('transform-origin').split(' ').map(function (e) {\n        return +e.replace(/px/ig, '');\n      });\n      oriX = ori[0];\n      oriY = ori[1];\n      mat = cs.getPropertyValue('transform').split('(')[1].split(')')[0].split(',').map(function (e) {\n        return parseFloat(e.trim());\n      });\n\n      if (mat.length === 6) {\n        // 2d transformation matrix otherwise ignore\n        var _mat = mat,\n            _mat2 = _slicedToArray(_mat, 6),\n            a = _mat2[0],\n            b = _mat2[1],\n            c = _mat2[2],\n            d = _mat2[3],\n            e = _mat2[4],\n            f = _mat2[5];\n\n        left = 0;\n        top = 0;\n        tempEl = el;\n\n        do {\n          left += tempEl.offsetLeft;\n          top += tempEl.offsetTop;\n          tempEl = tempEl.offsetParent;\n        } while (tempEl);\n\n        elList.push({\n          elem: el,\n          oriX: oriX,\n          oriY: oriY,\n          invM: Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"inverse\"])([a, c, e, b, d, f]),\n          matrix: [a, c, e, b, d, f],\n          offsetLeft: left,\n          offsetTop: top\n        });\n        hasTransform = true;\n      } else if (mat.length === 16) {\n        is3DTransform = true;\n        hasTransform = true;\n\n        var _mat3 = mat,\n            _mat4 = _slicedToArray(_mat3, 16),\n            a1 = _mat4[0],\n            b1 = _mat4[1],\n            c1 = _mat4[2],\n            d1 = _mat4[3],\n            a2 = _mat4[4],\n            b2 = _mat4[5],\n            c2 = _mat4[6],\n            d2 = _mat4[7],\n            a3 = _mat4[8],\n            b3 = _mat4[9],\n            c3 = _mat4[10],\n            d3 = _mat4[11],\n            a4 = _mat4[12],\n            b4 = _mat4[13],\n            c4 = _mat4[14],\n            d4 = _mat4[15];\n\n        left = 0;\n        top = 0;\n        tempEl = el;\n\n        do {\n          left += tempEl.offsetLeft;\n          top += tempEl.offsetTop;\n          tempEl = tempEl.offsetParent;\n        } while (tempEl);\n\n        elList.push({\n          elem: el,\n          oriX: oriX,\n          oriY: oriY,\n          matrix: [a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4],\n          offsetLeft: left,\n          offsetTop: top\n        });\n      }\n    }\n\n    el = el.parentElement;\n  } while (el);\n\n  x += scrollLeft;\n  y += scrollTop; // calculate for target element (span)\n\n  left = 0;\n  top = 0;\n  tempEl = element;\n\n  do {\n    left += tempEl.offsetLeft;\n    top += tempEl.offsetTop;\n    tempEl = tempEl.offsetParent;\n  } while (tempEl);\n\n  if (is3DTransform) {\n    // 3d transform applied will solve only 1 element\n    tempEl = elList[0];\n\n    var chartBBox = {\n      x1: left - tempEl.offsetLeft,\n      y1: top - tempEl.offsetTop,\n      x2: left + element.offsetWidth - tempEl.offsetLeft,\n      y2: top + element.offsetHeight - tempEl.offsetTop\n    },\n        bx1 = applyTransform({\n      x: chartBBox.x1,\n      y: chartBBox.y1,\n      z: 1\n    }, {\n      oriX: ori[0],\n      oriY: ori[1]\n    }, tempEl.matrix),\n        bx2 = applyTransform({\n      x: chartBBox.x2,\n      y: chartBBox.y1,\n      z: 1\n    }, {\n      oriX: ori[0],\n      oriY: ori[1]\n    }, tempEl.matrix),\n        bx3 = applyTransform({\n      x: chartBBox.x2,\n      y: chartBBox.y2,\n      z: 1\n    }, {\n      oriX: ori[0],\n      oriY: ori[1]\n    }, tempEl.matrix),\n        _parseCoefficients = Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"parseCoefficients\"])(Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"inverse\"])([bx1.x, bx1.y, 1, bx2.x, bx2.y, 1, bx3.x, bx3.y, 1]), [bx1.z, bx2.z, bx3.z]),\n        A = _parseCoefficients.A,\n        B = _parseCoefficients.B,\n        C = _parseCoefficients.C,\n        z;\n\n    x = x - tempEl.offsetLeft;\n    y = y - tempEl.offsetTop;\n    z = A * x + B * y + C;\n    temp = applyTransform({\n      x: x,\n      y: y,\n      z: z\n    }, {\n      oriX: ori[0],\n      oriY: ori[1]\n    }, Object(_matrix__WEBPACK_IMPORTED_MODULE_0__[\"inverse\"])(tempEl.matrix));\n    x = temp.x - chartBBox.x1;\n    y = temp.y - chartBBox.y1;\n    z = temp.z;\n    return {\n      x: x,\n      y: y\n    };\n  } else if (hasTransform) {\n    // 2d transform applid\n    while (el = elList.pop()) {\n      x = x - el.offsetLeft;\n      y = y - el.offsetTop;\n      temp = applyTransform({\n        x: x,\n        y: y\n      }, {\n        oriX: el.oriX,\n        oriY: el.oriY\n      }, el.invM);\n      x = temp.x + el.offsetLeft;\n      y = temp.y + el.offsetTop;\n    }\n  }\n\n  x -= left;\n  y -= top;\n  return {\n    x: x,\n    y: y\n  };\n} // todo: remove argument state. parse state from event.\n\n\nfunction getOriDragDistance(element, event, state) {\n  var useOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n  var oriCoord = getOriCoordinate(element, event, useOffset),\n      dx = 0,\n      dy = 0,\n      _parseEventCoordinate2 = parseEventCoordinates(filterEvent(event)),\n      x = _parseEventCoordinate2.x,\n      y = _parseEventCoordinate2.y,\n      config = __dragConfig;\n\n  if (oriCoord) {\n    x = oriCoord.x;\n    y = oriCoord.y;\n  }\n\n  if (state === 'start') {\n    config._dragOX = x;\n    config._dragOY = y;\n  } else if (state === 'end') {\n    dx = x - config._dragOX;\n    dy = y - config._dragOY;\n    delete config._dragOX;\n    delete config._dragOY;\n  } else {\n    dx = x - config._dragOX;\n    dy = y - config._dragOY;\n  }\n\n  return {\n    dx: dx,\n    dy: dy\n  };\n} // todo: extend support for all css 2d and 3d transform strings\n\n\nfunction applyTransformAtPoint(point, cssMatrixStr, origin) {\n  var mat = cssMatrixStr.slice(0, 6).toLowerCase() === 'matrix' && cssMatrixStr.split('(')[1].split(')')[0].split(',').map(function (e) {\n    return parseFloat(e.trim());\n  });\n\n  if (mat.length === 6) {\n    // 2d transformation matrix\n    var _mat5 = mat,\n        _mat6 = _slicedToArray(_mat5, 6),\n        a = _mat6[0],\n        b = _mat6[1],\n        c = _mat6[2],\n        d = _mat6[3],\n        e = _mat6[4],\n        f = _mat6[5];\n\n    mat = [a, c, e, b, d, f];\n  } else if (mat.length === 16) {\n    // 3d transformation matrix\n    var _mat7 = mat,\n        _mat8 = _slicedToArray(_mat7, 16),\n        a1 = _mat8[0],\n        b1 = _mat8[1],\n        c1 = _mat8[2],\n        d1 = _mat8[3],\n        a2 = _mat8[4],\n        b2 = _mat8[5],\n        c2 = _mat8[6],\n        d2 = _mat8[7],\n        a3 = _mat8[8],\n        b3 = _mat8[9],\n        c3 = _mat8[10],\n        d3 = _mat8[11],\n        a4 = _mat8[12],\n        b4 = _mat8[13],\n        c4 = _mat8[14],\n        d4 = _mat8[15];\n\n    mat = [a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4];\n  }\n\n  return applyTransform(point, {\n    oriX: origin.x,\n    oriY: origin.y,\n    oriZ: origin.z || 0\n  }, mat);\n}\n\n\n\n//# sourceURL=webpack://DeTransform/./src/utils/transform.js?");

/***/ })

/******/ });
});
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#mainDiv {\n  /* border: 1px solid black; */\n  height: 90vh;\n}\n\n#subDiv {\n  height: 100%;\n  /* border: 1px solid red; */\n}\n\n#screenDiv {\n  display: flex;\n  justify-content: center;\n  /* border: 1px solid red; */\n  height: 15%;\n}\n\n#screen {\n  border: 2px solid black;\n  height: 80%;\n  width: 50%;\n  border-radius: 50px;\n  text-align: center;\n}\n#screenText {\n  margin-top: 25px;\n  font-size: 30px;\n}\n#boardBox {\n  display: flex;\n  justify-content: space-around;\n  /* border: 1px solid black; */\n  height: 80%;\n}\n\n#playerBox,\n#compBox {\n  margin-top: 5%;\n  border: 2px solid black;\n  height: 80%;\n  width: 40%;\n}\n\n#buttonDiv {\n  display: flex;\n  justify-content: space-around;\n  /* border: 1px solid blue; */\n  height: 5%;\n  width: 40%;\n  margin-left: 30%;\n}\n\n#buttonDiv > button {\n  background: none;\n  outline: none;\n  border: none;\n  border: 2px solid black;\n  border-radius: 10px;\n  width: 25%;\n}\n\n#buttonDiv > button:hover {\n  background-color: #e8e8e8;\n}\n\n#buttonDiv > button:active {\n  background-color: #a8a8a8;\n}\n.board-row {\n  display: flex;\n}\n\n.board-cell {\n  width: 55px;\n  height: 45px;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.board-cell.highLighted {\n  background: red;\n}\n.board-cell.hit {\n  background-color: #dcdcdc;\n}\n.board-cell.hit::after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border-radius: 50%;\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 8px;\n  transform: translate(140%, 140%);\n}\n.miss {\n  background-color: orange;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameBoardDom/randomButton.js":
/*!******************************************!*\
  !*** ./src/gameBoardDom/randomButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomButton: () => (/* binding */ randomButton)\n/* harmony export */ });\n/* harmony import */ var _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameClasses/player */ \"./src/gameClasses/player.js\");\n/* harmony import */ var _gameFunctions_cyclePlacement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameFunctions/cyclePlacement */ \"./src/gameFunctions/cyclePlacement.js\");\n\n\nfunction randomButton() {\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.player.loadCellsDom(\"playerBox\")\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.computer.loadCellsDom(\"compBox\")\n  ;(0,_gameFunctions_cyclePlacement__WEBPACK_IMPORTED_MODULE_1__.cycleShipPlacement)()\n  const start = document.getElementById(\"start\")\n  start.disabled = false\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameBoardDom/randomButton.js?");

/***/ }),

/***/ "./src/gameBoardDom/reset.js":
/*!***********************************!*\
  !*** ./src/gameBoardDom/reset.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetButton: () => (/* binding */ resetButton)\n/* harmony export */ });\nfunction resetButton() {\n  const random = document.getElementById(\"random\")\n  const start = document.getElementById(\"start\")\n  const playerScreen = document.getElementById(\"playerBox\")\n  const compScreen = document.getElementById(\"compBox\")\n  playerScreen.innerHTML = \"\"\n  compScreen.innerHTML = \"\"\n  start.disabled = false\n  random.disabled = false\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameBoardDom/reset.js?");

/***/ }),

/***/ "./src/gameBoardDom/start.js":
/*!***********************************!*\
  !*** ./src/gameBoardDom/start.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   started: () => (/* binding */ started)\n/* harmony export */ });\n/* harmony import */ var _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameClasses/player */ \"./src/gameClasses/player.js\");\n\nfunction started() {\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.computer.setupCellListeners()\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.player.turn = true\n  const screen = document.getElementById(\"screenText\")\n  screen.innerHTML = \"Let's start!\"\n  const start = document.getElementById(\"start\")\n  start.disabled = true\n  const random = document.getElementById(\"random\")\n  random.disabled = true\n  const reset = document.getElementById(\"reset\")\n  reset.disabled = false\n  return\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameBoardDom/start.js?");

/***/ }),

/***/ "./src/gameClasses/gameBoard.js":
/*!**************************************!*\
  !*** ./src/gameClasses/gameBoard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Board: () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/gameClasses/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/gameClasses/ship.js\");\n\n\nclass Board {\n  constructor(size = 10, box) {\n    this.size = size\n    this.grid = this.createBoard()\n    this.box = box\n  }\n\n  createBoard() {\n    return Array.from({ length: this.size }, () => Array(this.size).fill(\"-\"))\n  }\n\n  printBoard() {\n    console.log(this.grid.map((row) => row.join(\" \")).join(\"\\n\"))\n  }\n\n  canPlaceShip(ship, orientation, startRow, startCol) {\n    const length = ship.length\n    if (orientation === \"horizontal\") {\n      if (startCol + length > this.size) return false\n      for (let i = 0; i < length; i++) {\n        if (this.grid[startRow][startCol + i] !== \"-\") return false\n      }\n    } else if (orientation === \"vertical\") {\n      if (startRow + length > this.size) return false\n      for (let i = 0; i < length; i++) {\n        if (this.grid[startRow + i][startCol] !== \"-\") return false\n      }\n    } else {\n      throw new Error(\"Invalid orientation. Use 'horizontal' or 'vertical'.\")\n    }\n    return true\n  }\n\n  placeShip(ship, orientation, startRow, startCol) {\n    if (!this.canPlaceShip(ship, orientation, startRow, startCol)) {\n      console.log(\"Cannot place ship.\")\n      return\n    }\n\n    const length = ship.length\n    const block = \"block\"\n    if (orientation === \"horizontal\") {\n      for (let i = 0; i < length; i++) {\n        this.grid[startRow][startCol + i] = ship\n        this.highLight(startRow, startCol + i, block)\n      }\n    } else if (orientation === \"vertical\") {\n      for (let i = 0; i < length; i++) {\n        this.grid[startRow + i][startCol] = ship\n        this.highLight(startRow + i, startCol, block)\n      }\n    }\n  }\n\n  receiveAttack(row, col) {\n    const dot = \"dot\"\n    const miss = \"miss\"\n    const cell = this.grid[row][col]\n\n    if (cell instanceof _ship__WEBPACK_IMPORTED_MODULE_1__.Ship) {\n      cell.isHit()\n      this.highLight(row, col, dot)\n      this.grid[row][col] = \"T\"\n    } else if (cell === \"M\" || cell === \"T\") {\n      console.log(\"Grid cell already marked!\")\n    } else {\n      this.grid[row][col] = \"M\"\n      this.highLight(row, col, miss)\n    }\n  }\n\n  highLight(row, col, type) {\n    const cell = document.querySelector(\n      `#${this.box} .board-cell[data-row=\"${row}\"][data-col=\"${col}\"]`\n    )\n    if (cell) {\n      if (type === \"block\") {\n        cell.classList.add(\"highLighted\")\n      } else if (type === \"dot\") {\n        cell.classList.add(\"hit\")\n        cell.classList.remove(\"highLighted\")\n      } else if (type === \"miss\") {\n        cell.classList.add(\"miss\")\n        cell.classList.remove(\"highLighted\")\n      }\n    } else {\n      console.log(`Cell not found at Row ${row}, Col ${col}`)\n    }\n  }\n\n  clearBoard() {\n    this.grid = this.createBoard()\n  }\n  computerMove() {\n    let row, col\n    do {\n      row = Math.floor(Math.random() * this.size)\n      col = Math.floor(Math.random() * this.size)\n    } while (this.grid[row][col] === \"M\" || this.grid[row][col] === \"T\")\n\n    _player__WEBPACK_IMPORTED_MODULE_0__.player.board.receiveAttack(row, col)\n    _player__WEBPACK_IMPORTED_MODULE_0__.player.board.printBoard\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameClasses/gameBoard.js?");

/***/ }),

/***/ "./src/gameClasses/player.js":
/*!***********************************!*\
  !*** ./src/gameClasses/player.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameClasses/gameBoard.js\");\n\nclass Player {\n  constructor(box) {\n    this.turn = false\n    this.box = box\n    this.board = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__.Board(10, box)\n  }\n  loadCellsDom() {\n    const cellsDiv = document.getElementById(this.box)\n\n    cellsDiv.innerHTML = \"\"\n\n    this.board.grid.forEach((row, rowIndex) => {\n      const rowDiv = document.createElement(\"div\")\n      rowDiv.className = \"board-row\"\n\n      row.forEach((cell, colIndex) => {\n        const cellDiv = document.createElement(\"div\")\n        cellDiv.className = \"board-cell\"\n        cellDiv.dataset.row = rowIndex\n        cellDiv.dataset.col = colIndex\n        rowDiv.appendChild(cellDiv)\n      })\n\n      cellsDiv.appendChild(rowDiv)\n    })\n  }\n  setupCellListeners() {\n    const cellDivs = document.querySelectorAll(`#${this.box} .board-cell`)\n\n    cellDivs.forEach((cell) => {\n      cell.addEventListener(\"click\", this.handlePlayerMove.bind(this))\n    })\n  }\n  toggleCell(cell) {\n    cell.classList.add(\"cell-active\")\n  }\n  handlePlayerMove(event) {\n    const row = event.target.dataset.row\n    const col = event.target.dataset.col\n\n    this.board.receiveAttack(row, col)\n    this.board.printBoard()\n    this.toggleCell(event.target)\n    console.log(`Cell clicked: Row ${row}, Col ${col}`)\n\n    player.board.computerMove()\n  }\n}\nconst player = new Player(\"playerBox\")\nconst computer = new Player(\"compBox\")\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameClasses/player.js?");

/***/ }),

/***/ "./src/gameClasses/ship.js":
/*!*********************************!*\
  !*** ./src/gameClasses/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   shipFive: () => (/* binding */ shipFive),\n/* harmony export */   shipFour: () => (/* binding */ shipFour),\n/* harmony export */   shipOne: () => (/* binding */ shipOne),\n/* harmony export */   shipThree: () => (/* binding */ shipThree),\n/* harmony export */   shipTwo: () => (/* binding */ shipTwo)\n/* harmony export */ });\nclass Ship {\n  static shipCount = 0\n  constructor(length) {\n    this.length = length\n    this.hit = 0\n    this.sunk = false\n    Ship.shipCount++\n    console.log(\"Current ship count:\" + Ship.shipCount)\n  }\n\n  isHit() {\n    this.hit++\n    if (this.hit >= this.length) {\n      this.sunk = true\n      console.log(\"Has sunk!\")\n      Ship.decrementShipCount()\n    }\n  }\n\n  isSunk() {\n    return this.sunk\n  }\n  static getShipCount() {\n    return Ship.shipCount\n  }\n\n  static decrementShipCount() {\n    if (Ship.shipCount > 0) {\n      Ship.shipCount--\n      Ship.gameStatus()\n    }\n  }\n  static gameStatus() {\n    if (Ship.shipCount <= 0) {\n      console.log(\"The game has ended!\")\n      console.log(Ship.shipCount)\n    } else {\n      console.log(this.shipCount)\n      console.log(\"Game hasn't ended!\")\n    }\n  }\n}\n\nconst shipOne = new Ship(1)\n\nconst shipTwo = new Ship(2)\n\nconst shipThree = new Ship(3)\n\nconst shipFour = new Ship(4)\n\nconst shipFive = new Ship(5)\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameClasses/ship.js?");

/***/ }),

/***/ "./src/gameFunctions/cyclePlacement.js":
/*!*********************************************!*\
  !*** ./src/gameFunctions/cyclePlacement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cycleShipPlacement: () => (/* binding */ cycleShipPlacement)\n/* harmony export */ });\n/* harmony import */ var _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameClasses/player */ \"./src/gameClasses/player.js\");\n/* harmony import */ var _shufflePlacement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shufflePlacement */ \"./src/gameFunctions/shufflePlacement.js\");\n/* harmony import */ var _shipPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipPlacement */ \"./src/gameFunctions/shipPlacement.js\");\n\n\n\n\nlet shuffledPlayerPlacements = (0,_shufflePlacement__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)([..._shipPlacement__WEBPACK_IMPORTED_MODULE_2__.playerShipPlacements])\nlet shuffledComputerPlacements = (0,_shufflePlacement__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)([..._shipPlacement__WEBPACK_IMPORTED_MODULE_2__.compShipPlacements])\n\nlet currentPlacementIndex = 0\n\nfunction cycleShipPlacement() {\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.player.board.clearBoard()\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.computer.board.clearBoard()\n\n  const playerPlacement = shuffledPlayerPlacements[currentPlacementIndex]\n  const computerPlacement = shuffledComputerPlacements[currentPlacementIndex]\n\n  playerPlacement.forEach(({ ship, orientation, startRow, startCol }) => {\n    _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.player.board.placeShip(ship, orientation, startRow, startCol)\n  })\n\n  computerPlacement.forEach(({ ship, orientation, startRow, startCol }) => {\n    _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.computer.board.placeShip(ship, orientation, startRow, startCol)\n  })\n\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.player.board.printBoard()\n  _gameClasses_player__WEBPACK_IMPORTED_MODULE_0__.computer.board.printBoard()\n\n  currentPlacementIndex =\n    (currentPlacementIndex + 1) % shuffledPlayerPlacements.length\n\n  const start = document.getElementById(\"start\")\n  start.disabled = false\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameFunctions/cyclePlacement.js?");

/***/ }),

/***/ "./src/gameFunctions/shipPlacement.js":
/*!********************************************!*\
  !*** ./src/gameFunctions/shipPlacement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compShipPlacements: () => (/* binding */ compShipPlacements),\n/* harmony export */   playerShipPlacements: () => (/* binding */ playerShipPlacements)\n/* harmony export */ });\n/* harmony import */ var _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameClasses/ship */ \"./src/gameClasses/ship.js\");\n\nconst playerShipPlacements = [\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"horizontal\", startRow: 0, startCol: 0 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"vertical\", startRow: 1, startCol: 5 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"vertical\", startRow: 4, startCol: 9 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"horizontal\", startRow: 9, startCol: 6 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"horizontal\", startRow: 6, startCol: 0 },\n  ],\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"vertical\", startRow: 8, startCol: 1 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"vertical\", startRow: 4, startCol: 4 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"horizontal\", startRow: 2, startCol: 0 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"vertical\", startRow: 3, startCol: 8 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"horizontal\", startRow: 0, startCol: 4 },\n  ],\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"horizontal\", startRow: 7, startCol: 5 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"vertical\", startRow: 0, startCol: 6 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"horizontal\", startRow: 4, startCol: 4 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"horizontal\", startRow: 9, startCol: 3 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"vertical\", startRow: 3, startCol: 8 },\n  ],\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"vertical\", startRow: 1, startCol: 1 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"horizontal\", startRow: 4, startCol: 7 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"vertical\", startRow: 7, startCol: 1 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"horizontal\", startRow: 0, startCol: 5 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"horizontal\", startRow: 7, startCol: 5 },\n  ],\n]\nconst compShipPlacements = [\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"horizontal\", startRow: 0, startCol: 0 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"vertical\", startRow: 1, startCol: 5 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"vertical\", startRow: 4, startCol: 9 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"horizontal\", startRow: 9, startCol: 6 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"horizontal\", startRow: 6, startCol: 0 },\n  ],\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"vertical\", startRow: 8, startCol: 1 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"vertical\", startRow: 4, startCol: 4 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"horizontal\", startRow: 2, startCol: 0 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"vertical\", startRow: 3, startCol: 8 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"horizontal\", startRow: 0, startCol: 4 },\n  ],\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"horizontal\", startRow: 7, startCol: 5 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"vertical\", startRow: 0, startCol: 6 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"horizontal\", startRow: 4, startCol: 4 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"horizontal\", startRow: 9, startCol: 3 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"vertical\", startRow: 3, startCol: 8 },\n  ],\n  [\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipOne, orientation: \"vertical\", startRow: 1, startCol: 1 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipTwo, orientation: \"horizontal\", startRow: 4, startCol: 7 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipThree, orientation: \"vertical\", startRow: 7, startCol: 1 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFour, orientation: \"horizontal\", startRow: 0, startCol: 5 },\n    { ship: _gameClasses_ship__WEBPACK_IMPORTED_MODULE_0__.shipFive, orientation: \"horizontal\", startRow: 7, startCol: 5 },\n  ],\n]\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameFunctions/shipPlacement.js?");

/***/ }),

/***/ "./src/gameFunctions/shufflePlacement.js":
/*!***********************************************!*\
  !*** ./src/gameFunctions/shufflePlacement.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shuffleArray: () => (/* binding */ shuffleArray)\n/* harmony export */ });\nfunction shuffleArray(array) {\n  for (let i = array.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1))\n    ;[array[i], array[j]] = [array[j], array[i]]\n  }\n  return array\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/gameFunctions/shufflePlacement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoardDom_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardDom/start */ \"./src/gameBoardDom/start.js\");\n/* harmony import */ var _gameBoardDom_randomButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardDom/randomButton */ \"./src/gameBoardDom/randomButton.js\");\n/* harmony import */ var _gameBoardDom_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoardDom/reset */ \"./src/gameBoardDom/reset.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst screen = document.getElementById(\"screenText\")\nscreen.innerHTML = \"Press Random to pick a configuration!\"\nconst startButton = document.getElementById(\"start\")\nstartButton.addEventListener(\"click\", _gameBoardDom_start__WEBPACK_IMPORTED_MODULE_0__.started)\nconst ranButton = document.getElementById(\"random\")\nranButton.addEventListener(\"click\", _gameBoardDom_randomButton__WEBPACK_IMPORTED_MODULE_1__.randomButton)\nconst reButton = document.getElementById(\"reset\")\nreButton.addEventListener(\"click\", _gameBoardDom_reset__WEBPACK_IMPORTED_MODULE_2__.resetButton)\nconst start = document.getElementById(\"start\")\nstart.disabled = true\nconst reset = document.getElementById(\"reset\")\nreset.disabled = true\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
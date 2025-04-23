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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin:0;\n    color:lightblue;\n}\n\n\n\nbody{\n    background: #373B44;\n    background: linear-gradient(30deg, rgba(55, 59, 68, 1) 0%, rgba(66, 134, 244, 1) 100%);\n\n    min-width: 350px;\n    \n}\n\n   \n   \n:root{\n --sm-padding:10px;\n --sm-margin:1rem;\n --sm-font:1rem;\n\n --xsml-padding:5px;\n\n}\n.date h2, .time h2{\n    font-family: monospace;\n    font-size: 1rem;\n}\n.logo img{\n    width: 50px;\n}\n.header-container{\n    display: flex\n    ;\n        justify-content: space-between;\n        align-items: center;\n       flex-wrap: wrap;\n        color: white;\n        padding:var(--sm-padding);\n        border-bottom: 1px solid white;;\n}\n\n.search-container{\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n.search-bar input{\n    padding: var(--xsml-padding);\n    font-size: var(--sm-font);\n   width: 80%;\n    min-width: 200px;\n    color:black;\n    border-radius: 0.5rem;\n    outline: none;\n    border:none;\n    color:rgb(47, 46, 46);\n    font-weight: 400;\n    border:1px solid rgb(11, 11, 59);\n    background-color: rgba(212, 230, 236, 0.954);\n    \n}\n.search-bar input:focus{\n    border:1px solid rgb(255, 255, 255);\n    transform: scaleY(1.08);\n}\n.logo{\n  display: flex;\n  justify-content: space-around;\n    align-items: center;\n}\n.logo h1{\n    display: inline;\n}\n\n.search-bar{\n  \n  margin:auto;\n  width: 80%;\n   \n    margin-top:var(--sm-margin);\n}\n.search-bar button{\n    padding:var(--xsml-padding);\n    font-size: var(--sm-font);\n    color:black;\n    border-radius: 0.5rem;\n    background-color: rgb(255, 255, 255);\n   border:2px solid transparent;\n\n}\n.search-bar button:hover{\n    background-color: rgba(66, 134, 244, 1);\n    color:white;\n    border:2px solid blue;\n}\n.search-option{\n   \n    min-width: 100px;\n    margin:var(--sm-margin);\n    display: flex;\n    justify-content: space-evenly;\n}\n\n\n\n.search-option i{\n     font-size: 30px;\n}\n.current-weather img{\nwidth: 100px;\n}\n.current-weather h4{\n    font-weight: lighter;\n    font-family: monospace;\n    font-size: small;\n    margin-bottom: 10px;\n}\n#city{\n    font-size: xx-large;\n    font-weight: 600;\n    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n#weather{\n    font-size: 2rem;\n    font-weight: 600;\n    font-family: monospace;\n   \n}\n#country{\n    position: relative;\n    bottom: 10px;\n}\n.current-weather p{\n    font-size: 0.8rem;\n    font-family: monospace;\n    margin-top: var(--sm-margin);\n}\n.weather-update-container{\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    gap:1rem;\n    margin:2rem;\n    border:1px solid gray;\n    border-radius: 20px;\n    padding:1rem;\n    background: #373B44;\n    background: linear-gradient(30deg, rgba(55, 59, 68, 1) 0%, rgb(88, 144, 235, 1) 100% );\n    \n}\n.tm{\n    display: flex;\n    justify-content: space-around;\n}\n.details > div{\n    display: flex;\n    justify-content: space-around;\n    gap:1rem;\n    font-family: monospace;\n    font-size: large;\n    font-weight:100;\n}\n.weather-detail h4{\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    margin-bottom: var(--sm-margin);\n    font-size: 2rem;\n\n}\n.details div{\n    margin:var(--sm-margin)\n}\n.details h5{\n    font-weight: lighter;\n    text-align: left;\n}\n.details span{\n    width: 100px;\n    text-align: center;\n}\n#temp{\n    font-size: 100px;\n}\n\n.week-update-container{\n    display: flex;\ngap:2.5rem;\nflex-wrap: wrap; /* not usually used with column, but you can */\njustify-content: center;  /* vertical alignment */\nalign-items: center; \nmargin-top: 5rem;\npadding:1rem;\npadding-bottom: 2rem;\n\n\n   \n}\n.week-update-container .card{\n    border:white 0.5px solid;\n    padding:10px;\n    text-align: center;\n    background: #000428;\n    background: linear-gradient(253deg, rgba(0, 4, 40, 0.6) 0%, rgba(0, 78, 146, 0.6) 100%);\n    border-radius: 10px;\n   width: 10%;\n    max-width:250px;\n    min-width: 200px;\n    padding-bottom: 4rem;\n\n    font-family: monospace;\n    font-weight: lighter;\n    display: flex;\n    flex-direction: column;\n    gap:1rem;\n    align-items: center;\n\n\n    \n    \n}\n.temp{\n    font-size: 2rem;\n \n    color:rgb(202, 228, 235);\n  \n    \n}\n.about-weather{\n    font-size: 1rem;\n    font-weight: lighter;\n    \n}\n    \n\n.week-update-container img{\n    width: 70px;\n}\n\n.mode select{\n    padding:0.3rem;\n    color:black;\n    border-radius: 10px;\n    \n}\n.mode option{\n    padding:1rem;\n}\n\n\n\n@media(max-width:700px){\n    .weather-update-container{\n        gap:3rem;\n    }\n    .current-weather{\n        text-align: center;\n    }\n    .weather-detail{\n        text-align: center;\n    }\n    #temp{\n        font-size: 50px;\n    }\n    .mode{\n        order:2;\n    }\n}\n@media (max-width:740px){\n    .search-bar{\n        width: 100%;\n        margin: 1rem;\n\n\n    }\n    .search-bar input{\n        width: 60%;\n        margin:auto;\n    };\n    .week-update-container{\n        padding: 10px !important;\n    }\n    .card{\n        width: 75%  !important;\n       max-width: 350px !important;\n      \n    }\n\n}\n.main{\n    height: fit-content;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-update/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-update/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-update/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-update/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-update/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-update/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-update/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-update/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-update/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/cloud.png":
/*!******************************!*\
  !*** ./src/assets/cloud.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a64c69d86bc7ffd0ddc.png\";\n\n//# sourceURL=webpack://weather-update/./src/assets/cloud.png?");

/***/ }),

/***/ "./src/assets/logo2.png":
/*!******************************!*\
  !*** ./src/assets/logo2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9985be433ec99ef1fc64.png\";\n\n//# sourceURL=webpack://weather-update/./src/assets/logo2.png?");

/***/ }),

/***/ "./src/assets/rainy-day.png":
/*!**********************************!*\
  !*** ./src/assets/rainy-day.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7610299be6da6fba0d64.png\";\n\n//# sourceURL=webpack://weather-update/./src/assets/rainy-day.png?");

/***/ }),

/***/ "./src/assets/snow.png":
/*!*****************************!*\
  !*** ./src/assets/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bedcbd16279e4296e4f.png\";\n\n//# sourceURL=webpack://weather-update/./src/assets/snow.png?");

/***/ }),

/***/ "./src/assets/stormy.png":
/*!*******************************!*\
  !*** ./src/assets/stormy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a31f3a1b776d9844323.png\";\n\n//# sourceURL=webpack://weather-update/./src/assets/stormy.png?");

/***/ }),

/***/ "./src/assets/sunny.png":
/*!******************************!*\
  !*** ./src/assets/sunny.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20e7d4a7d2e24dbce16d.png\";\n\n//# sourceURL=webpack://weather-update/./src/assets/sunny.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_logo2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo2.png */ \"./src/assets/logo2.png\");\n/* harmony import */ var _assets_sunny_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sunny.png */ \"./src/assets/sunny.png\");\n/* harmony import */ var _assets_cloud_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/cloud.png */ \"./src/assets/cloud.png\");\n/* harmony import */ var _assets_rainy_day_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/rainy-day.png */ \"./src/assets/rainy-day.png\");\n/* harmony import */ var _assets_stormy_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/stormy.png */ \"./src/assets/stormy.png\");\n/* harmony import */ var _assets_snow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/snow.png */ \"./src/assets/snow.png\");\n\n\n\n\n\n\n\n\nconst cityInput = document.querySelector(\"#search\");\n\nconst getWeatherEl = document.getElementById(\"get-weather\");\n\nconst cityName = document.getElementById(\"city\");\nconst countryName = document.getElementById(\"country\");\nconst tempEl = document.getElementById(\"temp\");\nconst approxTempEl = document.getElementById(\"approx-temp\");\n\nconst maxTemp = document.getElementById(\"max\");\nconst minTemp = document.getElementById(\"min\");\nconst humidityEl = document.getElementById(\"humidity\");\nconst windEl = document.getElementById(\"wind\");\nconst pressureEl = document.getElementById(\"pressure\");\nconst weatherEl = document.getElementById(\"weather\");\nconst weatherDesc = document.getElementById(\"desc\");\nconst icon = document.querySelector(\".weather-icon\");\nconst cardEls = document.querySelectorAll(\".card\");\nconsole.log(cardEls);\nconsole.log(tempEl);\n\nlet today = new Date();\ntoday = today.getDate();\n\n/************************************************************ */\n\nfunction setDataOnUi(data) {\n  // city name update;\n  const city = data.name;\n  cityName.innerText = city;\n  // country name update;\n  tempEl.innerText = `${Math.ceil(data.main.temp)}℃`;\n\n  countryName.innerText = data.sys.country;\n\n  approxTempEl.innerText = `${Math.ceil(data.main.feels_like)}℃`;\n\n  maxTemp.innerText = `  ${Math.ceil(data.main.temp_max)} ℃`;\n  minTemp.innerText = `  ${Math.floor(data.main.temp_min)} ℃`;\n  humidityEl.innerText = `${data.main.humidity}%`;\n  const wind = data.wind.speed * 3.6;\n\n  windEl.innerText = `${Math.trunc(wind)} kmph`;\n  pressureEl.innerText = `${data.main.pressure} hPa`;\n\n  weatherEl.innerText = data.weather[0].main;\n  weatherDesc.innerText = data.weather[0].description;\n  const iconImg = setIcons(data.weather[0].main);\n  icon.src = iconImg;\n\n  console.log(icon);\n}\n\n/****************************************************************************************** */\nfunction getWeekWeatherData() {\n  const city = cityInput.value;\n  const key = \"7132f1e93852b973f5fed30585286805\";\n\n  const weekWeather = fetch(\n    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`\n  );\n  weekWeather\n    .then((response) => {\n      console.log(response);\n      return response.json(); // its giving whole object\n    })\n    .then((week) => {\n      console.log(week);\n      for (let el = 7; el < 40; el += 8) {\n        console.log(el);\n        const timestamp = week.list[el].dt;\n        const date = new Date(timestamp * 1000); // to convert it into millisecond;\n\n        // const only_date = date.toLocaleString().split(\",\");\n\n        //card one childdren\n        switch (el) {\n          case 7:\n            const firstCard = cardEls[0].children;\n            const addIcon = setIcons(week.list[el].weather[0].main);\n            firstCard[0].src = addIcon;\n            console.log(firstCard[0]);\n            firstCard[1].textContent = `${week.list[el].main.temp}℃`;\n\n            firstCard[2].textContent = week.list[el].weather[0].main;\n            firstCard[3].textContent = week.list[el].weather[0].description;\n            const substr1 = week.list[el].dt_txt.substring(0, 10);\n\n            firstCard[4].textContent = substr1;\n            break;\n\n          case 15:\n            const secCard = cardEls[1].children;\n            const addIcon2 = setIcons(week.list[el].weather[0].main);\n            secCard[0].src = addIcon2;\n\n            secCard[1].textContent = `${week.list[el].main.temp}℃`;\n\n            secCard[2].textContent = week.list[el].weather[0].main;\n            secCard[3].textContent = week.list[el].weather[0].description;\n            const substr2 = week.list[el].dt_txt.substring(0, 10);\n\n            secCard[4].textContent = substr2;\n            break;\n\n          case 23:\n            const thirdCard = cardEls[2].children;\n            const addIcon3 = setIcons(week.list[el].weather[0].main);\n            thirdCard[0].src = addIcon3;\n            thirdCard[1].textContent = `${week.list[el].main.temp}℃`;\n\n            thirdCard[2].textContent = week.list[el].weather[0].main;\n            thirdCard[3].textContent = week.list[el].weather[0].description;\n            const substr3 = week.list[el].dt_txt.substring(0, 10);\n\n            thirdCard[4].textContent = substr3;\n            break;\n\n          case 31:\n            const fourCard = cardEls[3].children;\n            const addIcon4 = setIcons(week.list[el].weather[0].main);\n            fourCard[0].src = addIcon4;\n            fourCard[1].textContent = `${week.list[el].main.temp}℃`;\n\n            fourCard[2].textContent = week.list[el].weather[0].main;\n            fourCard[3].textContent = week.list[el].weather[0].description;\n            const substr4 = week.list[el].dt_txt.substring(0, 10);\n\n            fourCard[4].textContent = substr4;\n            break;\n\n          case 39:\n            const fiveCard = cardEls[4].children;\n            const addIcon5 = setIcons(week.list[el].weather[0].main);\n            fiveCard[0].src = addIcon5;\n            fiveCard[1].textContent = `${week.list[el].main.temp}℃`;\n\n            fiveCard[2].textContent = week.list[el].weather[0].main;\n            fiveCard[3].textContent = week.list[el].weather[0].description;\n            const substr5 = week.list[el].dt_txt.substring(0, 10);\n\n            fiveCard[4].textContent = substr5;\n            break;\n        }\n\n        // all date\n        // by spliting its giving an array of size 2;\n        // [0] = date;\n        // [1] = time  , i want date only;\n      }\n\n      // by this the required data is coming in json parsed format\n    })\n    .catch((err) => {\n      console.log(\"week data\", \"went wrong\");\n    });\n}\n\n/*************************************************************** */\n\nfunction fetchData() {\n  const city = cityInput.value;\n  const key = \"7132f1e93852b973f5fed30585286805\";\n\n  const weather = fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`\n  );\n  weather\n    .then((response) => {\n      return response.json();\n    })\n    .then((data) => {\n      setDataOnUi(data);\n    })\n    .catch((err) => {\n      console.log(\"OOps somthig wrnt wrong\");\n    });\n}\n\nfunction setIcons(type) {\n  switch (type) {\n    case \"Clear\":\n      return _assets_sunny_png__WEBPACK_IMPORTED_MODULE_2__;\n    case \"Clouds\":\n      return _assets_cloud_png__WEBPACK_IMPORTED_MODULE_3__;\n\n    case \"Rain\":\n      return _assets_rainy_day_png__WEBPACK_IMPORTED_MODULE_4__;\n    case \"Thunderstorm\":\n      return _assets_stormy_png__WEBPACK_IMPORTED_MODULE_5__;\n    case \"Snow\":\n      return _assets_snow_png__WEBPACK_IMPORTED_MODULE_6__;\n  }\n}\n\ngetWeatherEl.addEventListener(\"click\", fetchData);\n\ngetWeatherEl.addEventListener(\"click\", getWeekWeatherData);\n\n/*************************************************** */\nconst mode = document.querySelector(\"#mode-select\");\nmode.addEventListener(\"change\", function () {\n  const main = document.querySelector(\".main\");\n\n  const detailSection = document.querySelector(\".weather-update-container\");\n  console.log(detailSection);\n  if (mode.value == \"dark\") {\n    main.style.backgroundColor = \"\";\n    main.style.backgroundImage =\n      \"linear-gradient(23deg, rgb(60, 63, 65) 0%, rgb(16, 18, 21) 100%)\";\n    detailSection.style.backgroundImage =\n      \"linear-gradient(253deg, rgba(22, 34, 42, 1) 0%, rgba(58, 96, 115, 1) 100%)\";\n\n    cardEls.forEach((card) => {\n      card.style.backgroundImage =\n        \"linear-gradient(253deg, rgba(22, 34, 42, 1) 0%, rgba(58, 96, 115, 1) 100%)\";\n      card.style.border = \"none\";\n    });\n  } else {\n    main.style.backgroundColor = \"\";\n    main.style.backgroundImage =\n      \"linear-gradient(50deg, rgba(55, 59, 68, 1) 0%, rgba(66, 134, 244, 1) 100%)\";\n    detailSection.style.backgroundImage = \"\";\n    cardEls.forEach((card) => {\n      card.style.backgroundImage = \"\";\n      card.style.border = \"\";\n    });\n  }\n});\n\n/************************************************** */\n\nconst dateEl = document.getElementById(\"date\");\nconst timeEl = document.getElementById(\"time\");\nconsole.log(timeEl);\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  cityInput.value = \"delhi\";\n  fetchData();\n  getWeekWeatherData();\n\n  const d = new Date();\n  dateEl.innerText = d.toLocaleDateString();\n\n  setInterval(() => {\n    timeUpdate();\n  }, 1000);\n});\n\n/****************************************************** */\n\nfunction timeUpdate() {\n  const t = new Date();\n  const options = {\n    hour: \"numeric\",\n    minute: \"2-digit\",\n    second: \"2-digit\",\n    hour12: true, // 👈 this is the key!\n  };\n\n  const formattedTime = t.toLocaleTimeString(\"en-US\", options);\n  // console.log(formattedTime); // e.g. \"4:36:12 PM\"\n  timeEl.textContent = formattedTime;\n}\n\n\n//# sourceURL=webpack://weather-update/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-update/./src/styles.css?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/weather-forecast/";
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
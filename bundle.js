/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(12);

	__webpack_require__(13);

	__webpack_require__(15);
	__webpack_require__(17);

	// require('./components/carousel/carousel.scss');
	// require('./components/carousel/carousel.js');

	__webpack_require__(19);
	__webpack_require__(21);

	__webpack_require__(22);
	__webpack_require__(24);

	__webpack_require__(25);
	__webpack_require__(27);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(32);
	__webpack_require__(34);
	__webpack_require__(36);
	__webpack_require__(38);
	__webpack_require__(40);
	__webpack_require__(42);
	__webpack_require__(44);

	__webpack_require__(45);
	__webpack_require__(47);
	__webpack_require__(49);

	__webpack_require__(50);
	__webpack_require__(52);

/***/ },
/* 1 */
/***/ function(module, exports) {

	var slpComp = {};

	window.slpComp = slpComp;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./reset.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./reset.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica, \"\\82F9\\65B9\", \"\\601D\\6E90\\9ED1\\4F53\", \"\\9ED1\\4F53\";\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch; }\n\nhtml {\n  font-size: 10px; }\n\nbody {\n  font-size: 16px;\n  line-height: 1.6em; }\n\nh1 {\n  font-size: 22px;\n  line-height: 1.6em; }\n\nh2 {\n  font-size: 18px;\n  line-height: 1.6em; }\n\nh3 {\n  font-size: 17px;\n  line-height: 1.6em; }\n\nh4 {\n  font-size: 16px;\n  line-height: 1.6em; }\n\nh5 {\n  font-size: 14px;\n  line-height: 1.6em; }\n\nh6 {\n  font-size: 13px;\n  line-height: 1.6em; }\n\ninput {\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n          border-radius: 0; }\n\ninput[type=\"button\"], input[type=\"submit\"], input[type=\"reset\"] {\n  -webkit-appearance: button; }\n\ntextarea {\n  -webkit-appearance: none; }\n\nul {\n  list-style: none; }\n\na {\n  text-decoration: none; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./parm.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./parm.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./layout.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./layout.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\nbody {\n  margin: 0 auto;\n  padding-top: 54px;\n  max-width: 750px;\n  min-width: 320px;\n  min-height: 100%;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n     -moz-box-pack: start;\n          justify-content: flex-start;\n  text-decoration: none; }\n\npre {\n  display: block;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1em;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  -webkit-border-radius: 4px;\n          border-radius: 4px; }\n\n.usage {\n  margin-top: 20px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8; }\n  .usage .linenums {\n    margin: 0 0 0 33px;\n    line-height: 0; }\n    .usage .linenums li {\n      padding-left: 12px;\n      color: #bebec5;\n      line-height: 20px;\n      text-shadow: 0 1px 0 #fff; }\n\n.pln {\n  color: #48484c; }\n\n.kwd, .prettyprint, .tag {\n  color: #1e347b; }\n\n.typ, .atn, .dec, .var {\n  color: teal; }\n\n.pun, .opn, .clo {\n  color: #93a1a1; }\n\n.str, .atv {\n  color: #D14; }\n\n.example h1 {\n  margin: 20px 10px;\n  font-size: 40px;\n  position: relative; }\n  .example h1:before {\n    position: absolute;\n    width: 100%;\n    bottom: -5px;\n    content: '';\n    color: #e3e3e3;\n    border-bottom: 1px solid; }\n\n.example .subexample > h2 {\n  margin: 20px; }\n\n.example .subexample > h4 {\n  margin: 10px 20px; }\n\n.example .subexample .button-container {\n  padding: 10px; }\n  .example .subexample .button-container .btn {\n    margin-bottom: 10px; }\n\n.top-logo {\n  width: 100%;\n  min-height: 25px;\n  max-height: 32px; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./header.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./header.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.header-container .header-main {\n  height: 54px;\n  padding: 0 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  border-bottom: 1px solid #e3e3e3;\n  background: #fff;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center; }\n  .header-container .header-main .logo {\n    margin-right: 20px;\n    text-align: center; }\n    .header-container .header-main .logo img {\n      width: 32px;\n      height: 32px;\n      -webkit-border-radius: 50%;\n              border-radius: 50%;\n      background: #fc7d59; }\n  .header-container .header-main .header-main-wrapper {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n       -moz-box-flex: 1;\n            flex: 1;\n    line-height: 1; }\n  .header-container .header-main .toggler {\n    padding: 0 20px;\n    margin-right: -20px;\n    height: 100%;\n    text-align: center;\n    line-height: 54px; }\n    .header-container .header-main .toggler i {\n      font-size: 2.2rem; }\n\n.header-container .header-cell-group {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  overflow-x: visible;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  -webkit-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height;\n  transition-property: height; }\n  .header-container .header-cell-group .header-ul-nav {\n    background: #fff; }\n    .header-container .header-cell-group .header-ul-nav .header-cell {\n      height: 49px;\n      font-size: 16px;\n      border-bottom: 1px solid #e3e3e3; }\n      .header-container .header-cell-group .header-ul-nav .header-cell a {\n        margin-left: 20px;\n        line-height: 49px;\n        color: #000;\n        display: block;\n        -webkit-transition: opacity .35s ease-out;\n        transition: opacity .35s ease-out; }\n      .header-container .header-cell-group .header-ul-nav .header-cell .link-active {\n        color: #fc7d59; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(1) a {\n      -webkit-transition-delay: 200ms,200ms;\n              transition-delay: 200ms,200ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(2) a {\n      -webkit-transition-delay: 250ms,250ms;\n              transition-delay: 250ms,250ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(3) a {\n      -webkit-transition-delay: 300ms,300ms;\n              transition-delay: 300ms,300ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(4) a {\n      -webkit-transition-delay: 350ms,350ms;\n              transition-delay: 350ms,350ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(5) a {\n      -webkit-transition-delay: 400ms,400ms;\n              transition-delay: 400ms,400ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(6) a {\n      -webkit-transition-delay: 450ms,450ms;\n              transition-delay: 450ms,450ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(7) a {\n      -webkit-transition-delay: 500ms,500ms;\n              transition-delay: 500ms,500ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(8) a {\n      -webkit-transition-delay: 550ms,550ms;\n              transition-delay: 550ms,550ms; }\n    .header-container .header-cell-group .header-ul-nav :nth-child(9) a {\n      -webkit-transition-delay: 600ms,600ms;\n              transition-delay: 600ms,600ms; }\n\n.header-collapse {\n  overflow-y: hidden; }\n  .header-collapse .header-ul-nav .header-cell a {\n    opacity: 0.5; }\n\n.in {\n  visibility: visible; }\n  .in .header-ul-nav .header-cell a {\n    opacity: 1; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	(function () {
		_addEventListener = function (el, eventName, cb, useCapture) {
			if (window.addEventListener) {
				el.addEventListener(eventName, cb, Boolean(useCapture));
			} else {
				el["on" + eventName] = cb;
			}
		};

		function Header() {
			this.container = document.querySelector("[data-comp='Header']");
			this.toggler = this.container.querySelector(".toggler");
			this.togglerIcon = this.toggler.querySelector(".fa");
			this.headerGroup = this.container.querySelector(".header-cell-group");
			this.init();
		}
		Header.prototype.init = function () {
			const instance = this;

			_addEventListener(this.toggler, 'click', function () {
				instance.toggleDisplay();
			});
		};

		Header.prototype.toggleDisplay = function () {
			const group = this.headerGroup;
			if (group.classList.contains("in")) {
				group.style.height = "0px";
				group.classList.remove("in");
				this.togglerIcon.classList.remove("fa-close");
				this.togglerIcon.classList.add("fa-navicon");
			} else {
				group.classList.add("in");
				group.style.height = group.children[0].offsetHeight + "px";
				this.togglerIcon.classList.remove("fa-navicon");
				this.togglerIcon.classList.add("fa-close");
			}
		};
		window.slpComp.Header = Header;
	})();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./breadcrumbs.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./breadcrumbs.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.breadcrumbs-wrapper {\n  padding: 0 20px; }\n  .breadcrumbs-wrapper .breadcrumbs-cell {\n    display: inline-block;\n    font-size: 16px;\n    color: #fc7d59;\n    cursor: pointer; }\n    .breadcrumbs-wrapper .breadcrumbs-cell::after {\n      content: '/';\n      padding: 0 12px;\n      color: #d1d1d1; }\n    .breadcrumbs-wrapper .breadcrumbs-cell:last-child {\n      color: #d1d1d1;\n      cursor: default; }\n      .breadcrumbs-wrapper .breadcrumbs-cell:last-child::after {\n        content: none; }\n  .breadcrumbs-wrapper.breadcrumbs-arrow .breadcrumbs-cell::after {\n    content: '>'; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./_banner.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./_banner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".banner {\n  max-height: 562px; }\n  .banner img {\n    width: 100%; }\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./_library.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./_library.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.library-list {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  padding: 0 10px;\n  padding-bottom: 0; }\n  .library-list .list-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n       -moz-box-flex: 1;\n            flex: 1;\n    background-size: cover;\n    background-position: 50%;\n    text-decoration: none;\n    color: #000;\n    display: block;\n    margin-right: 8px;\n    margin-bottom: 8px;\n    position: relative;\n    max-height: 164px;\n    min-height: 148px;\n    overflow: hidden; }\n    .library-list .list-item .item-name {\n      position: absolute;\n      font-size: 19px;\n      font-family: Microsoft YaHei;\n      font-weight: bold;\n      left: 14px;\n      top: 14px;\n      color: #fff;\n      line-height: 1.3em; }\n    .library-list .list-item .item-icon {\n      position: absolute;\n      font-size: 36px;\n      bottom: 14px;\n      right: 14px;\n      color: #fff; }\n    .library-list .list-item .item-mask {\n      width: 100%;\n      height: 100%;\n      background-color: #666;\n      opacity: .5;\n      position: absolute; }\n  .library-list :last-child {\n    margin-right: 0; }\n\n.library-squared {\n  background: #e9e9e9;\n  padding: 10px 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  .library-squared .squared-item {\n    -webkit-box-flex: 33.333%;\n    -webkit-flex: 33.333%;\n       -moz-box-flex: 33.333%;\n            flex: 33.333%;\n    background: #fff;\n    border: 1px solid #e9e9e9;\n    text-align: center; }\n    .library-squared .squared-item i {\n      margin-top: 20px;\n      font-size: 4rem;\n      color: #2979ff; }\n    .library-squared .squared-item span {\n      height: 36px;\n      font-size: 1.4rem;\n      line-height: 1.3;\n      color: #2e2e2e;\n      margin: 10px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical; }\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./pageslider.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./pageslider.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.pages-container {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex; }\n  .pages-container .moving {\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    -webkit-transition-duration: .6s;\n            transition-duration: .6s;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform; }\n  .pages-container .pages {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n       -moz-box-flex: 1;\n            flex: 1;\n    width: 100%;\n    padding-top: 50%;\n    position: relative; }\n    .pages-container .pages .page {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 4; }\n      .pages-container .pages .page .item-content {\n        display: block;\n        width: 100%;\n        height: 100%;\n        background-size: cover; }\n        .pages-container .pages .page .item-content .mask {\n          width: 100%;\n          height: 60px;\n          position: absolute;\n          bottom: 0;\n          text-align: left;\n          background: -webkit-gradient(linear, 0 0, 0 bottom, from(transparent), to(rgba(0, 0, 0, 0.4)));\n          background: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4));\n          background: -ms-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4)); }\n          .pages-container .pages .page .item-content .mask h4 {\n            margin: 0 64px 10px 20px;\n            line-height: 76px;\n            color: white;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            word-break: keep-all; }\n      .pages-container .pages .page img {\n        height: 100%;\n        width: 100%; }\n    .pages-container .pages .previousitem {\n      z-index: 5; }\n    .pages-container .pages .currentitem {\n      z-index: 6; }\n    .pages-container .pages .nextitem {\n      z-index: 7; }\n  .pages-container .dot-nav-widget {\n    -webkit-box-flex: 1;\n    -webkit-flex: auto;\n       -moz-box-flex: 1;\n            flex: auto;\n    position: absolute;\n    z-index: 1000;\n    bottom: 10px;\n    width: 100%;\n    right: 0; }\n    .pages-container .dot-nav-widget.right {\n      text-align: right; }\n    .pages-container .dot-nav-widget.middle {\n      text-align: center; }\n    .pages-container .dot-nav-widget.none {\n      display: none; }\n    .pages-container .dot-nav-widget ul {\n      display: inline-block;\n      list-style: none;\n      padding: 4px;\n      -webkit-border-radius: 35%;\n              border-radius: 35%;\n      background: rgba(0, 0, 0, 0.1); }\n      .pages-container .dot-nav-widget ul li {\n        margin: 4px;\n        width: 4px;\n        height: 4px;\n        -webkit-border-radius: 50%;\n                border-radius: 50%;\n        float: left;\n        position: relative;\n        background: white; }\n      .pages-container .dot-nav-widget ul .on {\n        width: 7px;\n        height: 7px;\n        margin: 2px; }\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	(function () {
	  function Swiper() {
	    const allSwiper = document.querySelectorAll("[data-comp='Swiper']");

	    // allSwiper.forEach(function(element){
	    //   new SwiperItem(element);
	    // })

	    for (var i = allSwiper.length - 1; i >= 0; i--) {
	      new SwiperItem(allSwiper[i]);
	    }
	    // _.each(allSwiper,function(element){
	    //   new SwiperItem(element);
	    // })
	  }
	  function SwiperItem(element) {
	    this.swiper = element;
	    this._autoTime = parseInt(element.getAttribute('data-autoTime'));
	    this._widget = element.getAttribute('data-widget');
	    this.current = 0; //当前页面索引

	    this.counter = 0;
	    this.pageX;

	    this.width; //设备宽度

	    this.total; //图片总数
	    this.nowDistance = 0; //起始$el的x值

	    this.currentIndex;

	    this.$el = this.swiper.querySelector('.pages');
	    this.timer;
	    this.tablist;
	    this.init();
	  }
	  //初始化
	  SwiperItem.prototype.init = function () {
	    const pages = this.$el;

	    this.width = this.$el.clientWidth;
	    this.$el.style.webkitTransform = 'translate3d(0,0,0)';
	    this.total = this.$el.childElementCount;

	    var currentElement = this.$el.firstElementChild;
	    currentElement.style.webkitTransform = 'translate3d(0,0,0)';
	    currentElement.querySelector('.item-content').style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';

	    for (var i = 1; i < this.total; i++) {
	      this.setX(this.$el.children[i], this.width, i);
	    }
	    this.setX(this.$el.children[this.total - 1], -this.width, 1);

	    this.setXAndScale(this.$el.children[1].querySelector('.item-content'), 0, 1);
	    this.setXAndScale(this.$el.children[this.total - 1].querySelector('.item-content'), this.width * 0.9, 0.9);
	    if (this.total > 3) {
	      this.setXAndScale(this.$el.children[this.total - 2].querySelector('.item-content'), this.width * 0.9, 0.9);
	    }

	    // this.addWidget();
	    this.bindEvents();
	    // this.carousel();
	  };
	  SwiperItem.prototype.addWidget = function () {
	    var promo_nav = document.createElement('nav');
	    promo_nav.className = 'dot-nav-widget';
	    var ul = document.createElement('ul');
	    ul.className = 'tablist';

	    for (i = 0; i < this.total; i++) {
	      var li = document.createElement('li');
	      li.setAttribute('index', i);
	      ul.appendChild(li);
	    }
	    ul.firstChild.className = 'on';
	    promo_nav.appendChild(ul);

	    switch (this._widget) {
	      case 'right':
	        this.swiper.appendChild(promo_nav);
	        promo_nav.classList.add('right');
	        this.tablist = this.swiper.querySelector('.tablist');
	        break;
	      case 'mid':
	        this.swiper.appendChild(promo_nav);
	        promo_nav.classList.add('middle');
	        this.tablist = this.swiper.querySelector('.tablist');
	        break;
	      default:
	        this.tablist = null;
	        break;
	    }
	  };

	  //动态设定translate3d参数方法
	  SwiperItem.prototype.setX = function (el, x, i) {
	    el && (el.style.webkitTransform = 'translate3d(' + x * i + 'px' + ',0,0)');
	  };

	  //动态设定translate3d scale3d
	  SwiperItem.prototype.setXAndScale = function (el, x, d) {
	    el && (el.style.webkitTransform = 'translate3d(' + x + 'px' + ',0,0) scale3d(' + d + ',' + d + ',1)');
	  };

	  //获取translate3d X值
	  SwiperItem.prototype.getX = function (el) {
	    X = parseInt(el.style.webkitTransform.slice(12, -1).split(",")[0].slice(0, -2));
	    return X;
	  };

	  //绑定事件
	  SwiperItem.prototype.bindEvents = function () {
	    var self = this;
	    'touchstart touchmove touchend touchcancel'.split(' ').forEach(function (evn) {
	      self.$el.addEventListener(evn, self[evn].bind(self), false);
	    });
	  };

	  //获取当前触控页面对象
	  SwiperItem.prototype.getCurrent = function () {
	    return this.$el.children[this.current];
	  };

	  // //获取下一个子节点
	  //   SwiperItem.prototype.getNextElement = function(node){
	  //     var NextElementNode = node.nextSibling;
	  //     while(NextElementNode.nodeValue != null){
	  //       NextElementNode = NextElementNode.nextSibling
	  //     }
	  //     return NextElementNode;
	  //   }

	  // //获取上一个字节点
	  //   SwiperItem.prototype.getPrivousElement = function(node){
	  //     var PriviousElementNode = node.priviousSibling;
	  //     while(PriviousElementNode.nodeValue != null){
	  //       PriviousElementNode = PriviousElementNode.priviousSibling
	  //     }
	  //     return PriviousElementNode;
	  //   }

	  //四个滑动事件函数
	  SwiperItem.prototype.touchstart = function (e) {
	    clearInterval(this.timer);
	    var touches = e.touches[0];

	    //触控开始
	    this.pageX = touches.pageX;

	    //moving类名在样式中作滑动效果
	    this.$el.classList.remove('moving');
	    for (var i = 0; i < this.total; i++) {
	      this.$el.children[i].children[0].classList.remove('moving');
	    }
	  };

	  SwiperItem.prototype.touchmove = function (e) {
	    e.preventDefault();

	    var touches = e.changedTouches[0];
	    var displacement = touches.pageX - this.pageX; //位移
	    var total = this.total;
	    var index = this.current;

	    //计算当前索引值与执行动画索引值
	    var currentIndex, //当前索引值
	    counter; //执行动画索引值

	    //中间计算值
	    var num = parseInt(-displacement / this.width) + index;
	    var a = parseInt(num / total);

	    if (num < 0) {
	      currentIndex = (a + 1) * 4 + num;
	      counter = (a + 1) * 4 + num;
	    } else {
	      currentIndex = num - a * 4;
	      counter = num - a * 4;
	    }
	    if (Math.abs(displacement % this.width) > this.width / 2 && displacement < 0) {
	      currentIndex = currentIndex + 1 >= total ? 0 : currentIndex + 1;
	    } else {
	      if (Math.abs(displacement % this.width) > this.width / 2 && displacement > 0) {
	        currentIndex = currentIndex - 1 < 0 ? total - 1 : currentIndex - 1;
	      }
	    }

	    //动态添加class
	    for (var i = 0; i < total; i++) {
	      this.$el.children[i].classList.remove('currentitem', 'nextitem', 'previousitem');
	    }
	    var current = this.$el.children[currentIndex];
	    var next = current.nextElementSibling ? current.nextElementSibling : this.$el.firstElementChild;
	    var prev = current.previousElementSibling ? current.previousElementSibling : this.$el.lastElementChild;

	    current.classList.add('currentitem');
	    next.classList.add('nextitem');
	    prev.classList.add('previousitem');

	    if (this.tablist) {
	      for (i = 0; i < this.tablist.childElementCount; i++) {
	        this.tablist.children[i].classList.remove('on');
	      }
	      this.tablist.children[currentIndex].classList.add('on');
	    }

	    //根据当前索引值设置前后图片的参数
	    var currentX;
	    for (var i = 0; i < total; i++) {
	      if (this.$el.children[i].classList.contains("currentitem")) {
	        current = this.$el.children[i];
	        currentX = this.getX(current);

	        var prevDiv = i - 1 < 0 ? total - 1 : i - 1;
	        this.$el.children[prevDiv].style.webkitTransform = 'translate3d(' + (currentX - this.width) + 'px' + ',0,0)';
	        this.$el.children[prevDiv].children[0].style.webkitTransform = 'translate3d(' + this.width * 0.9 + 'px' + ',0,0) scale3d(0.9,0.9,1)';

	        var nextDiv = i + 1 > total - 1 ? 0 : i + 1;
	        this.$el.children[nextDiv].style.webkitTransform = 'translate3d(' + (currentX + this.width) + 'px' + ',0,0)';
	        this.$el.children[nextDiv].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
	      }
	    }

	    //动态设置$el的translate3d
	    this.displacement = displacement;
	    var disX = this.nowDistance + displacement;
	    this.setX(this.$el, disX, 1);

	    //计算动画参数
	    var position = this.width * 0.9;
	    var moveCurrent = parseInt(displacement / this.width);

	    var _enlarge = 0.9 + 0.1 * (displacement % this.width) / this.width;
	    var _shrink = 1 + 0.1 * (displacement % this.width) / this.width;

	    if (displacement > 0) {
	      var moveDiv = counter - 1 < 0 ? total - 1 : counter - 1;
	      this.setXAndScale(this.$el.children[moveDiv].children[0], position - displacement % this.width, _enlarge);
	    }

	    if (displacement < 0) {
	      var moveDiv = counter;
	      this.setXAndScale(this.$el.children[moveDiv].children[0], -displacement % this.width * 0.9, _shrink);
	    }
	  };

	  SwiperItem.prototype.touchend = function (e) {
	    var minRange = this.width / 2;
	    var move = e.changedTouches[0].pageX - this.pageX;

	    var n = parseInt(-move / this.width);
	    var remainder = move % this.width;

	    var current = this.current;
	    if (Math.abs(remainder) >= minRange && move > 0) {
	      current = current + n - 1 < 0 ? this.total + current + n - 1 : current + n - 1;
	      return this.go(current, -n + 1, true);
	    }
	    if (Math.abs(remainder) < minRange && move > 0) {
	      current = current + n < 0 ? this.total + current + n : current + n;
	      return this.go(current, -n, false);
	    }
	    if (Math.abs(remainder) >= minRange && move < 0) {
	      current = current + n + 1 > this.total - 1 ? 0 : current + n + 1;
	      return this.go(current, -n - 1, true);
	    }
	    if (Math.abs(remainder) < minRange && move < 0) {
	      current = current + n > this.total - 1 ? current + n - this.total : current + n;
	      return this.go(current, -n, false);
	    }
	  };

	  SwiperItem.prototype.touchcancel = function (e) {};
	  //去往索引值页面的go方法，接收三个参数:最终索引值，最终需要进行缩放的索引值，索引值是否改变
	  SwiperItem.prototype.go = function (i, n, boolean) {
	    var targetX = parseInt(this.nowDistance) + n * this.width;
	    this.nowDistance = targetX;
	    this.current = i;
	    var parent = this.$el;

	    //结束动画
	    if (boolean) {
	      if (this.displacement < 0) {
	        ii = i - 1 < 0 ? this.total - 1 : i - 1;
	        var targetChild = this.$el.children[ii].children[0];

	        targetChild.classList.add('moving');
	        parent.classList.add('moving');
	        parent.style.webkitTransform = 'translate3d(' + targetX + 'px' + ',0,0)';
	        targetChild.style.webkitTransform = 'translate3d(' + this.width * 0.9 + 'px' + ',0,0) scale3d(0.9,0.9,1)';
	      }
	      if (this.displacement > 0) {
	        var targetChild = this.$el.children[i].children[0];

	        targetChild.classList.add('moving');
	        parent.classList.add('moving');
	        parent.style.webkitTransform = 'translate3d(' + targetX + 'px' + ',0,0)';
	        targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
	      }
	    } else {
	      if (this.displacement < 0) {
	        var targetChild = this.$el.children[i].children[0];

	        targetChild.classList.add('moving');
	        parent.classList.add('moving');
	        targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
	        parent.style.webkitTransform = 'translate3d(' + targetX + 'px' + ',0,0)';
	      }
	      if (this.displacement > 0) {
	        ii = i - 1 < 0 ? this.total - 1 : i - 1;
	        var targetChild = this.$el.children[ii].children[0];

	        targetChild.classList.add('moving');
	        parent.classList.add('moving');
	        targetChild.style.webkitTransform = 'translate3d(' + this.width * 0.9 + 'px' + ',0,0) scale3d(0.9,0.9,1)';
	        parent.style.webkitTransform = 'translate3d(' + targetX + 'px' + ',0,0)';
	      }
	    }

	    this.resize();
	  };

	  //调整当前页面
	  SwiperItem.prototype.resize = function () {
	    for (var i = 0; i < this.total; i++) {
	      this.$el.children[i].classList.remove('currentitem', 'nextitem', 'previousitem');
	    }
	    var current = this.getCurrent();
	    var next = current.nextElementSibling ? current.nextElementSibling : this.$el.firstElementChild;
	    var prev = current.previousElementSibling ? current.previousElementSibling : this.$el.lastElementChild;

	    current.classList.add('currentitem');
	    next.classList.add('nextitem');
	    prev.classList.add('previousitem');

	    var currentX = current.style.webkitTransform.slice(12, -1).split(",")[0].slice(0, -2);
	    this.setX(next, parseInt(currentX) + this.width, 1);
	    this.setX(prev, parseInt(currentX) - this.width, 1);

	    current.children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
	    next.children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
	    this.setXAndScale(prev.children[0], this.width * 0.9, 0.9);
	  };

	  SwiperItem.prototype.carousel = function () {
	    var self = this;
	    this.timer = setInterval(nextImg, this._autoTime);

	    function nextImg() {
	      self.animate(1);
	    }

	    function play() {
	      self.timer;
	    }

	    if (this.tablist) {
	      for (var i = 0; i < this.tablist.childElementCount; i++) {
	        this.tablist.children[i].onclick = function () {
	          if (this.className == 'on') {
	            return;
	          }
	          var myIndex = parseInt(this.getAttribute('index'));
	          var index = self.current;
	          var offset = myIndex - index;
	          if (Math.abs(offset) > self.total / 2 && offset < 0) {
	            offset = self.total + offset;
	          } else {
	            if (Math.abs(offset) > self.total / 2 && offset > 0) {
	              offset = offset - self.total;
	            }
	          }
	          self.animate(offset);
	        };
	      }
	    }
	    play();
	  };

	  SwiperItem.prototype.animate = function (offset) {
	    var index = this.current;

	    this.current = this.current + offset;
	    if (this.current > this.total - 1) {
	      this.current = this.current - this.total;
	    }
	    if (this.current < 0) {
	      this.current = this.total + this.current;
	    }

	    if (this.tablist) {
	      for (i = 0; i < this.tablist.childElementCount; i++) {
	        this.tablist.children[i].classList.remove('on');
	      }
	    }

	    var currentX = this.getX(this.$el);
	    var newCurrentX = currentX + -offset * this.width;
	    this.nowDistance = newCurrentX;
	    this.setX(this.$el, newCurrentX, 1);

	    getIndexX = this.getX(this.$el.children[index]);
	    newIndexX = getIndexX + offset * this.width;
	    this.setX(this.$el.children[this.current], newIndexX, 1);

	    if (this.tablist) {
	      this.tablist.children[this.current].classList.add('on');
	    }

	    //动态添加class
	    for (var i = 0; i < this.total; i++) {
	      this.$el.children[i].classList.remove('currentitem', 'nextitem', 'previousitem');
	    }
	    var current = this.$el.children[this.current];
	    var next = current.nextElementSibling ? current.nextElementSibling : this.$el.firstElementChild;
	    var prev = current.previousElementSibling ? current.previousElementSibling : this.$el.lastElementChild;

	    current.classList.add('currentitem');
	    next.classList.add('nextitem');
	    prev.classList.add('previousitem');

	    //根据当前索引值设置前后图片的参数
	    this.$el.classList.add('moving');
	    for (var i = 0; i < this.total; i++) {
	      this.$el.children[i].children[0].classList.remove('moving');
	    }

	    var currentX;
	    current = this.$el.children[this.current];
	    currentX = this.getX(current);

	    this.$el.children[this.current].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';

	    var prevDiv = this.current - 1 < 0 ? this.total - 1 : this.current - 1;

	    if (offset < 0) {
	      this.$el.children[this.current].children[0].classList.add('moving');
	    } else {
	      this.$el.children[prevDiv].children[0].classList.add('moving');
	    }
	    this.$el.children[prevDiv].style.webkitTransform = 'translate3d(' + (currentX - this.width) + 'px' + ',0,0)';
	    this.$el.children[prevDiv].children[0].style.webkitTransform = 'translate3d(' + this.width * 0.9 + 'px' + ',0,0) scale3d(0.9,0.9,1)';

	    var nextDiv = this.current + 1 > this.total - 1 ? 0 : this.current + 1;
	    this.$el.children[nextDiv].style.webkitTransform = 'translate3d(' + (currentX + this.width) + 'px' + ',0,0)';
	    this.$el.children[nextDiv].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
	  };

	  window.slpComp.Swiper = Swiper;
	})();

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./collapse.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./collapse.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.collapse-panel {\n  border-top: 1px solid #000;\n  overflow: hidden; }\n  .collapse-panel.active .collapse-body {\n    visibility: visible; }\n  .collapse-panel .collapse-heading {\n    width: 100%;\n    padding: 0 20px;\n    height: 49px;\n    background: white;\n    border-bottom: 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    cursor: pointer;\n    font-weight: normal;\n    z-index: 50; }\n    .collapse-panel .collapse-heading .collapse-title {\n      line-height: 49px;\n      -webkit-box-flex: 1;\n      -webkit-flex: auto;\n         -moz-box-flex: 1;\n              flex: auto;\n      font-weight: 500;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      word-break: keep-all; }\n    .collapse-panel .collapse-heading .fa {\n      padding: 0 20px;\n      line-height: 49px;\n      display: none; }\n      .collapse-panel .collapse-heading .fa.left {\n        margin-left: -20px; }\n      .collapse-panel .collapse-heading .fa.right {\n        margin-right: -20px; }\n  .collapse-panel .collapse-body {\n    visibility: hidden;\n    height: 0;\n    background: #fff;\n    -webkit-transition-timing-function: ease;\n            transition-timing-function: ease;\n    -webkit-transition-duration: .35s;\n            transition-duration: .35s;\n    -webkit-transition-property: height, visibility;\n    transition-property: height, visibility;\n    position: relative; }\n  .collapse-panel .collapse-content {\n    font-size: 17px;\n    border-top: 1px solid #fff;\n    padding: 9px 15px; }\n  .collapse-panel:first-child {\n    border-top: none; }\n\n.primary .collapse-panel {\n  border-top: 1px solid #fff;\n  background-color: #fc7d59; }\n  .primary .collapse-panel .collapse-heading {\n    color: white;\n    background-image: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/library/collapse_bg.jpg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n    background-size: cover; }\n    .primary .collapse-panel .collapse-heading .fa {\n      display: block; }\n  .primary .collapse-panel .collapse-body .collapse-content::before {\n    content: \"\";\n    height: 0px;\n    width: 0px;\n    border-width: 0px 0px 16px 16px;\n    -webkit-border-bottom-right-radius: 5px;\n            border-bottom-right-radius: 5px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border-left-color: transparent;\n    border-bottom-color: #fc5836;\n    border-style: solid;\n    position: absolute;\n    top: -8px;\n    left: 18px; }\n  .primary .collapse-panel:first-child {\n    border-top: none; }\n\n.default .collapse-panel {\n  border-top: 1px solid #e3e3e3;\n  background-color: #fff; }\n  .default .collapse-panel .collapse-heading {\n    color: #fc7d59; }\n    .default .collapse-panel .collapse-heading .fa {\n      display: block;\n      width: 20px; }\n  .default .collapse-panel .collapse-body {\n    border-top: 1px solid #e3e3e3; }\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports) {

	(function () {
	  function Collapse() {
	    const allCollapse = document.querySelectorAll("[data-comp='Collapse']");

	    for (var i = allCollapse.length - 1; i >= 0; i--) {
	      new CollapseItem(allCollapse[i]);
	    }
	    // const mountedElements = document.querySelectorAll("[data-comp]");
	    // mountedElements.forEach(element){
	    //   new SlpComp[element.getAttribute('data-comp')](element, args)
	    // }
	  }

	  function CollapseItem(element) {
	    this.element = element;
	    this.compatible = element.getAttribute('data-compatible') === 'true';
	    this.activeIndex = parseInt(element.getAttribute('data-activeindex'));
	    this.style = this._parseStyle();
	    this.iconClass = this._getIconClass();
	    this.init();
	  }

	  CollapseItem.prototype._getIconClass = function () {
	    var defaultClass;
	    switch (this.style) {
	      case 'default':
	        defaultClass = {
	          open: 'fa fa-caret-down left',
	          close: 'fa fa-caret-right left'
	        };
	        break;
	      case 'primary':
	        defaultClass = {
	          open: 'fa fa-minus right',
	          close: 'fa fa-plus right'
	        };
	        break;
	      default:
	        defaultClass = {};
	    }
	    return defaultClass;
	  };

	  CollapseItem.prototype._parseStyle = function () {
	    const reg = /\s(default|primary)\s/;
	    const extendClass = ' ' + this.element.className + ' ';
	    if (reg.test(extendClass)) {
	      return extendClass.match(reg)[1];
	    } else {
	      return null;
	    }
	  };
	  //初始化，给title添加点击事件，设置icon
	  CollapseItem.prototype.init = function () {
	    this.addIcon();
	    this.enableActive();
	    this.bindEvents();
	  };
	  CollapseItem.prototype.addIcon = function () {
	    var allTitle = this.element.querySelectorAll('.collapse-heading');
	    for (var i = allTitle.length - 1; i >= 0; i--) {
	      var newIcon = document.createElement('i');
	      newIcon.className = i === this.activeIndex ? this.iconClass.open : this.iconClass.close;
	      switch (this.style) {
	        case 'default':
	          allTitle[i].insertBefore(newIcon, allTitle[i].querySelector('.collapse-title'));
	          break;
	        case 'primary':
	          allTitle[i].appendChild(newIcon);
	          break;
	        default:
	          break;
	      }
	    }
	    // allTitle.forEach(function(el, index){
	    //   var newIcon = document.createElement('i');
	    //   newIcon.className = index === this.activeIndex ? this.iconClass.open : this.iconClass.close;
	    //   switch (this.style) {
	    //     case 'default':
	    //       el.insertBefore(newIcon,el.querySelector('.collapse-title-txt'));
	    //       break;
	    //     case 'primary':
	    //       el.appendChild(newIcon);
	    //       break;
	    //     default:
	    //       break;
	    //   }
	    // }.bind(this))
	  };
	  CollapseItem.prototype.enableActive = function () {
	    const active = this.element.querySelectorAll('.collapse-panel')[this.activeIndex];
	    active.classList.add('active');
	    this._setHeight(active);
	  };
	  CollapseItem.prototype._setHeight = function (element) {
	    element.querySelector('.collapse-body').style.height = element.querySelector('.collapse-content').getBoundingClientRect().height + 'px';
	  };
	  CollapseItem.prototype.bindEvents = function () {
	    this.element.addEventListener('click', function (event) {
	      var el = event.target;
	      while (!el.classList.contains('collapse-heading') && el !== this.element.parentElement) {
	        el = el.parentElement;
	      }

	      if (el.classList.contains('collapse-heading')) {
	        this._toggleDisplay(el);
	      }
	    }.bind(this), false);
	  };
	  CollapseItem.prototype._hide = function (element) {
	    element.classList.remove('active');
	    element.querySelector('.collapse-body').removeAttribute('style');
	    element.querySelector('.fa').className = this.iconClass.close;
	  };
	  //处理折叠
	  CollapseItem.prototype._toggleDisplay = function (title) {
	    var target = title.parentElement;
	    if (target.classList.contains('active')) {
	      this._hide(target);
	    } else {
	      if (this.compatible) {
	        const otherActive = this.element.querySelector('.active');
	        if (otherActive) {
	          this._hide(otherActive);
	        }
	      }
	      target.classList.add('active');
	      target.querySelector('.fa').className = this.iconClass.open;
	      this._setHeight(target);
	    }
	  };

	  window.slpComp.Collapse = Collapse;
	})();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./category.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./category.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.category {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  padding: 10px 10px;\n  background: #fff; }\n  .category.main .category-item span {\n    position: absolute;\n    z-index: 10;\n    width: 85%; }\n  .category.main .category-item i {\n    position: absolute;\n    right: 10px;\n    bottom: 0;\n    font-size: 3.6rem;\n    color: #e24f22;\n    opacity: .6; }\n  .category.scroll {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n       -moz-box-pack: start;\n            justify-content: flex-start;\n    overflow: scroll; }\n    .category.scroll::after {\n      content: '';\n      display: inline-table;\n      height: 49px;\n      width: 10px; }\n    .category.scroll .category-item {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1 0 30%;\n         -moz-box-flex: 1;\n              flex: 1 0 30%;\n      background-size: cover; }\n      .category.scroll .category-item .mask {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        filter: Alpha(Opacity=40);\n        opacity: .4; }\n      .category.scroll .category-item span {\n        position: relative; }\n  .category .category-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n       -moz-box-flex: 1;\n            flex: 1;\n    overflow: hidden;\n    position: relative;\n    background: #fc7d59;\n    height: 49px;\n    margin-right: 10px;\n    -webkit-border-radius: 4px;\n            border-radius: 4px;\n    text-align: center; }\n    .category .category-item span {\n      display: block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      word-break: keep-all;\n      color: #fff;\n      font-size: 17px;\n      line-height: 49px; }\n  .category > :last-child {\n    margin-right: 0; }\n\n.category-lof5 {\n  width: 100%;\n  padding: 10px 0;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  overflow: auto; }\n  .category-lof5.nobg i {\n    color: #212121;\n    font-size: 2.2rem; }\n  .category-lof5.withbg i {\n    color: #fff;\n    font-size: 2rem; }\n  .category-lof5 .category-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 20%;\n       -moz-box-flex: 1;\n            flex: 1 0 20%;\n    text-align: center;\n    overflow: hidden; }\n    .category-lof5 .category-item .icon-bg {\n      width: 37px;\n      height: 37px;\n      -webkit-border-radius: 50%;\n              border-radius: 50%;\n      margin: 5px auto 0; }\n      .category-lof5 .category-item .icon-bg i {\n        line-height: 37px; }\n    .category-lof5 .category-item span {\n      padding: 4px;\n      font-size: 13px;\n      color: #212121;\n      margin: auto;\n      display: block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      word-break: keep-all; }\n  .category-lof5 :last-child {\n    margin-bottom: 0; }\n\n.category-lof2 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  .category-lof2 .category-item {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n       -moz-box-flex: 0;\n            flex: 0 0 50%;\n    overflow: hidden; }\n    .category-lof2 .category-item .item-wrapper {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n         -moz-box-align: center;\n              align-items: center; }\n      .category-lof2 .category-item .item-wrapper .info {\n        -webkit-box-flex: 1;\n        -webkit-flex: auto;\n           -moz-box-flex: 1;\n                flex: auto;\n        overflow: hidden; }\n        .category-lof2 .category-item .item-wrapper .info span {\n          display: block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          word-break: keep-all; }\n        .category-lof2 .category-item .item-wrapper .info .title {\n          color: #000;\n          font-size: 17px; }\n        .category-lof2 .category-item .item-wrapper .info .describes {\n          color: #878787;\n          font-size: 13px; }\n  .category-lof2.left .category-item .item-wrapper {\n    border-right: 1px solid #e3e3e3;\n    margin: 8px 0 8px 10px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -webkit-flex-direction: row-reverse;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: reverse;\n            flex-direction: row-reverse; }\n    .category-lof2.left .category-item .item-wrapper .icon-bg {\n      margin: 0 5px;\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 0 3.6rem;\n         -moz-box-flex: 0;\n              flex: 0 0 3.6rem;\n      text-align: center; }\n      .category-lof2.left .category-item .item-wrapper .icon-bg i {\n        font-size: 3.6rem; }\n  .category-lof2.right .category-item .item-wrapper {\n    padding: 8px 10px;\n    border: 1px solid #e3e3e3;\n    border-left: none;\n    border-top: none; }\n    .category-lof2.right .category-item .item-wrapper .info {\n      margin-left: 10px; }\n    .category-lof2.right .category-item .item-wrapper .icon-bg {\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 0 37px;\n         -moz-box-flex: 0;\n              flex: 0 0 37px;\n      width: 37px;\n      height: 37px;\n      -webkit-border-radius: 50%;\n              border-radius: 50%;\n      text-align: center;\n      line-height: 37px; }\n      .category-lof2.right .category-item .item-wrapper .icon-bg i {\n        font-size: 2rem;\n        color: #fff;\n        line-height: 37px; }\n  .category-lof2.right :nth-last-child(1) .item-wrapper, .category-lof2.right :nth-last-child(2) .item-wrapper {\n    border-bottom: none; }\n  .category-lof2 :nth-child(2n) .item-wrapper {\n    border-right: none; }\n\n.category-lof1 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column; }\n  .category-lof1 .category-item {\n    margin: 0 0 0 10px; }\n    .category-lof1 .category-item .item-wrapper {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n         -moz-box-align: center;\n              align-items: center; }\n      .category-lof1 .category-item .item-wrapper .icon-bg {\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 0 37px;\n           -moz-box-flex: 0;\n                flex: 0 0 37px;\n        width: 37px;\n        height: 37px;\n        -webkit-border-radius: 50%;\n                border-radius: 50%;\n        text-align: center;\n        line-height: 37px; }\n        .category-lof1 .category-item .item-wrapper .icon-bg i {\n          font-size: 2rem;\n          color: #fff;\n          line-height: 37px; }\n      .category-lof1 .category-item .item-wrapper .info {\n        -webkit-box-flex: 1;\n        -webkit-flex: auto;\n           -moz-box-flex: 1;\n                flex: auto;\n        margin-left: 10px;\n        padding: 10px 0px;\n        border-bottom: 1px solid #e3e3e3;\n        width: 1em;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -moz-box;\n        display: flex;\n        -webkit-box-align: center;\n        -webkit-align-items: center;\n           -moz-box-align: center;\n                align-items: center; }\n        .category-lof1 .category-item .item-wrapper .info span {\n          width: 100%;\n          display: block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          word-break: keep-all; }\n        .category-lof1 .category-item .item-wrapper .info .content {\n          -webkit-box-flex: 1;\n          -webkit-flex: auto;\n             -moz-box-flex: 1;\n                  flex: auto;\n          overflow: hidden; }\n          .category-lof1 .category-item .item-wrapper .info .content .title {\n            font-size: 16px;\n            color: #000; }\n          .category-lof1 .category-item .item-wrapper .info .content .describes {\n            font-size: 13px;\n            color: #878787; }\n        .category-lof1 .category-item .item-wrapper .info .icon-arrow {\n          -webkit-box-flex: 40px;\n          -webkit-flex: 40px;\n             -moz-box-flex: 40px;\n                  flex: 40px;\n          padding: 0 10px; }\n          .category-lof1 .category-item .item-wrapper .info .icon-arrow i {\n            font-size: 3rem;\n            color: #e3e3e3;\n            font-weight: bold; }\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.tab-cell {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex; }\n  .tab-cell .tab-item {\n    text-align: center; }\n\n.tab-lof5-default {\n  height: 49px;\n  margin: 0 10px;\n  overflow: hidden; }\n  .tab-lof5-default .tab-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 20%;\n       -moz-box-flex: 1;\n            flex: 1 0 20%;\n    margin: auto;\n    height: 100%;\n    line-height: 49px;\n    position: relative; }\n    .tab-lof5-default .tab-item a {\n      position: relative;\n      display: inline-block;\n      font-size: 16px;\n      color: #000; }\n  .tab-lof5-default .active a {\n    color: #fc7d59; }\n    .tab-lof5-default .active a:before {\n      content: '';\n      position: absolute;\n      height: 2px;\n      background: #fc7d59;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n\n.tab-lof5-primary {\n  height: 49px;\n  margin: 0 10px;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center; }\n  .tab-lof5-primary .tab-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 20%;\n       -moz-box-flex: 1;\n            flex: 1 0 20%;\n    -webkit-border-radius: 4px;\n            border-radius: 4px; }\n    .tab-lof5-primary .tab-item a {\n      font-size: 16px;\n      padding: 0 14px;\n      height: 34px;\n      line-height: 34px;\n      display: inline-block; }\n  .tab-lof5-primary .active {\n    color: #fff;\n    background: #fc7d59; }\n\n.tab-label {\n  margin: 5px 0;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  .tab-label .tab-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 25%;\n       -moz-box-flex: 1;\n            flex: 1 0 25%;\n    width: 100%;\n    font-size: 16px;\n    padding: 5px 0;\n    position: relative; }\n    .tab-label .tab-item a {\n      display: block; }\n    .tab-label .tab-item:after {\n      content: '';\n      position: absolute;\n      height: 15px;\n      width: 1px;\n      background: #e3e3e3;\n      right: 0;\n      top: 10px; }\n  .tab-label .active {\n    color: #fc7d59; }\n  .tab-label :nth-child(4n):after {\n    display: none; }\n\n.tab-lof4 {\n  margin: 10px 0;\n  overflow: hidden;\n  width: 75%;\n  height: 34px;\n  border: 1px solid #fc7d59;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  margin: auto;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap; }\n  .tab-lof4 .tab-item {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1 0 24%;\n       -moz-box-flex: 1;\n            flex: 1 0 24%;\n    width: 100%;\n    line-height: 34px;\n    border-right: 1px solid #fc7d59;\n    color: #000; }\n    .tab-lof4 .tab-item a {\n      display: block; }\n  .tab-lof4 :last-child {\n    border-right: none; }\n  .tab-lof4 .active {\n    color: white;\n    background: #fc7d59; }\n\n.tab-list {\n  color: #212121; }\n  .tab-list .tab-menu {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-justify-content: space-around;\n            justify-content: space-around;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n            align-items: center;\n    height: 49px;\n    position: relative;\n    border-top: 1px solid #e3e3e3;\n    border-bottom: 1px solid #e3e3e3; }\n    .tab-list .tab-menu .subtab {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n         -moz-box-flex: 1;\n              flex: 1; }\n      .tab-list .tab-menu .subtab .tab-item {\n        text-align: center;\n        border-right: 1px solid #e3e3e3; }\n        .tab-list .tab-menu .subtab .tab-item.active .title {\n          color: #fc7d59; }\n        .tab-list .tab-menu .subtab .tab-item .title {\n          font-size: 16px; }\n          .tab-list .tab-menu .subtab .tab-item .title .fa {\n            margin-left: 4px; }\n      .tab-list .tab-menu .subtab .tab-content {\n        display: none;\n        position: absolute;\n        top: 49px;\n        left: 0;\n        right: 0;\n        z-index: 500;\n        background: #fff; }\n        .tab-list .tab-menu .subtab .tab-content.show {\n          display: block; }\n        .tab-list .tab-menu .subtab .tab-content .box-ul li {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: -moz-box;\n          display: flex;\n          font-size: 16px;\n          height: 49px;\n          line-height: 49px;\n          border-bottom: 1px solid #e3e3e3; }\n          .tab-list .tab-menu .subtab .tab-content .box-ul li span {\n            -webkit-box-flex: 1;\n            -webkit-flex: auto;\n               -moz-box-flex: 1;\n                    flex: auto;\n            display: block;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            word-break: keep-all;\n            left: 40px;\n            padding-right: 20px; }\n          .tab-list .tab-menu .subtab .tab-content .box-ul li .blank {\n            -webkit-box-flex: 0;\n            -webkit-flex: 0 0 40px;\n               -moz-box-flex: 0;\n                    flex: 0 0 40px;\n            line-height: 49px;\n            text-align: center; }\n        .tab-list .tab-menu .subtab .tab-content .box-ul .selected {\n          color: #fc7d59; }\n    .tab-list .tab-menu > :last-child .tab-item {\n      border-right: none; }\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	(function () {
		function AllTab() {
			const allTab = document.querySelectorAll("[data-comp='Tab']");
			for (var i = allTab.length - 1; i >= 0; i--) {
				new Tab(allTab[i]);
			}
		}

		function Tab(element) {
			this.tabMenu = element.querySelector(".tab-menu");
			this.titleBindEvents(this.tabMenu);
			this.iconClass = {
				open: 'fa fa-angle-down',
				close: 'fa fa-angle-up'
			};
		}

		Tab.prototype.titleBindEvents = function (element) {
			element.addEventListener('click', function (event) {
				var el = event.target;
				while (!el.classList.contains('tab-item') && el !== element) {
					el = el.parentElement;
				}

				if (el.classList.contains('tab-item')) {
					this._toggleDisplay(el);
				}
			}.bind(this), false);
		};
		Tab.prototype._toggleDisplay = function (el) {
			var target = el;
			if (target.classList.contains('active')) {
				this._hide(target);
			} else {
				const otherActive = this.tabMenu.querySelector('.active');
				if (otherActive) {
					this._hide(otherActive);
				}
				target.classList.add('active');
				target.querySelector('.fa').className = this.iconClass.open;
				target.parentElement.querySelector('.tab-content').classList.add('show');
			}

			this.contentBindEvents();
		};
		Tab.prototype._hide = function (element) {
			element.classList.remove('active');
			element.querySelector('.fa').className = this.iconClass.close;
			element.parentElement.querySelector('.tab-content').classList.remove('show');
		};
		Tab.prototype.contentBindEvents = function () {
			var curActive = this.tabMenu.querySelector('.active');
			if (curActive) {
				curActive.parentElement.addEventListener('click', function (event) {
					var el = event.target;
					while (el.tagName !== 'LI' && el !== this.tabMenu) {
						el = el.parentElement;
					}

					if (el.tagName === 'LI') {
						this._toggleIcon(el);
					}
				}.bind(this), false);
			}
		};
		Tab.prototype._toggleIcon = function (el) {
			var prevActive = el.parentElement.querySelector('.selected');
			var Icon = prevActive.querySelector('i');
			prevActive.querySelector('.blank').removeChild(Icon);
			prevActive.classList.remove('selected');

			el.classList.add('selected');
			el.querySelector('.blank').appendChild(Icon);
		};

		window.slpComp.Tab = AllTab;
	})();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./button.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./button.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.btn {\n  display: inline-block;\n  text-align: center;\n  padding: 10px 12px;\n  -webkit-border-radius: 4px;\n          border-radius: 4px;\n  border: none;\n  outline: none;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 1;\n  font-size: 13px; }\n  .btn.disabled {\n    pointer-events: none;\n    cursor: not-allowed;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n\n.btn-large {\n  width: 100%;\n  padding: 14px 0px;\n  font-size: 18px; }\n\n.btn-mini {\n  padding: 6px 15px;\n  font-size: 14px; }\n\n.btn-primary {\n  background: #fc7d59;\n  color: #fff; }\n  .btn-primary.active, .btn-primary:active {\n    background: #e24f22;\n    color: #fff; }\n  .btn-primary.disabled, .btn-primary:disabled {\n    opacity: 0.2;\n    color: #fff; }\n\n.btn-primary-line {\n  border: 1px solid #fc7d59;\n  color: #fc7d59;\n  background: #fff; }\n  .btn-primary-line.active, .btn-primary-line:active {\n    border: 1px solid #e24f22;\n    color: #e24f22;\n    background: #fff; }\n  .btn-primary-line.disabled, .btn-primary-line:disabled {\n    border: 1px solid #e24f22;\n    color: #e24f22;\n    background: #fff;\n    opacity: 0.2; }\n\n.btn-default {\n  background: #e3e3e3;\n  color: #000; }\n  .btn-default.active, .btn-default:active {\n    background: #d1d1d1;\n    color: #000; }\n  .btn-default.disabled, .btn-default:disabled {\n    background: #e3e3e3;\n    color: #000;\n    opacity: 0.2; }\n\n.btn-default-line {\n  background: #fff;\n  border: 1px solid #878787;\n  color: #000; }\n  .btn-default-line.active, .btn-default-line:active {\n    border: 1px solid #000; }\n  .btn-default-line.disabled, .btn-default-line:disabled {\n    border: 1px solid #000;\n    opacity: 0.2; }\n", ""]);

	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./profile.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./profile.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.profile-cell {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  padding: 0 10px;\n  min-height: 48px;\n  overflow: hidden;\n  line-height: 1;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  color: #212121; }\n  .profile-cell::before {\n    content: \"\";\n    color: #e3e3e3;\n    width: 100%;\n    height: 1;\n    position: absolute;\n    bottom: 0;\n    left: 10px;\n    border-bottom: 1px solid; }\n  .profile-cell .cell-title {\n    width: 85px;\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n       -moz-box-flex: 0;\n            flex: none;\n    font-size: 17px; }\n  .profile-cell .cell-value {\n    -webkit-box-flex: 1;\n    -webkit-flex: auto;\n       -moz-box-flex: 1;\n            flex: auto;\n    margin-left: 20px;\n    padding: 11px 0;\n    font-size: 16px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n    -webkit-flex-direction: row-reverse;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: reverse;\n            flex-direction: row-reverse;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n            align-items: center;\n    line-height: 1.6; }\n    .profile-cell .cell-value .head {\n      width: 50px;\n      height: 50px; }\n      .profile-cell .cell-value .head img {\n        width: 100%;\n        -webkit-border-radius: 50%;\n                border-radius: 50%; }\n    .profile-cell .cell-value i {\n      margin-left: 10px;\n      font-size: 1.7rem;\n      color: #e3e3e3; }\n    .profile-cell .cell-value span {\n      text-align: right;\n      color: #878787; }\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./footer.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./footer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.footer-container {\n  margin-top: 10px;\n  background: #fff; }\n  .footer-container .footer {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column;\n    padding: 15px 0;\n    margin: 0 5px;\n    border-top: 1px solid #878787; }\n    .footer-container .footer .footer-button-group {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      margin-bottom: 12px;\n      font-size: 14px;\n      color: #000;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n         -moz-box-pack: center;\n              justify-content: center; }\n      .footer-container .footer .footer-button-group .footer-button {\n        padding: 0 10px;\n        position: relative; }\n        .footer-container .footer .footer-button-group .footer-button::after {\n          content: \"\";\n          height: 10px;\n          width: 1px;\n          position: absolute;\n          background: #878787;\n          right: 0;\n          top: 7px; }\n      .footer-container .footer .footer-button-group :last-child::after {\n        content: none; }\n    .footer-container .footer .footer-copyright {\n      font-size: 13px;\n      color: #878787;\n      text-align: center; }\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./spinner.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./spinner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".spinner-cell {\n  min-height: 50px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  padding: 0 10px; }\n  .spinner-cell .cell-title {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n       -moz-box-flex: 1;\n            flex: 1; }\n  .spinner-cell .cell-value {\n    color: #888;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n            align-items: center; }\n\n@-webkit-keyframes spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner-rolling {\n  -webkit-animation: spinner-rotate .8s infinite linear;\n          animation: spinner-rotate .8s infinite linear;\n  border: 4px solid transparent;\n  -webkit-border-radius: 50%;\n          border-radius: 50%; }\n\n.colorcircle {\n  width: 30px;\n  height: 30px;\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  -webkit-animation: spinner-rotate .8s infinite linear;\n          animation: spinner-rotate .8s infinite linear; }\n  .colorcircle .centerWrap {\n    width: 100%;\n    height: 100%;\n    -webkit-border-radius: 50%;\n            border-radius: 50%;\n    -webkit-box-shadow: 0 0 0 50px #fff;\n            box-shadow: 0 0 0 50px #fff;\n    -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4), 0 0 0 50px #fff;\n            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4), 0 0 0 50px #fff; }\n    .colorcircle .centerWrap:before {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 72%;\n      height: 72%;\n      top: 14%;\n      left: 14%;\n      -webkit-border-radius: 50%;\n              border-radius: 50%;\n      background: #fff;\n      -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n              box-shadow: 0 0 8px rgba(0, 0, 0, 0.4); }\n  .colorcircle div {\n    position: absolute;\n    width: 50%;\n    height: 50%; }\n    .colorcircle div:first-child, .colorcircle div:nth-child(4) {\n      left: 50%;\n      width: 57.74%;\n      margin-left: -28.87%; }\n    .colorcircle div:first-child {\n      background-image: -webkit-gradient(linear, left top, right top, color-stop(12%, #fff), color-stop(88%, gainsboro));\n      background-image: -webkit-linear-gradient(left, #fff 12%, gainsboro 88%);\n      background-image: linear-gradient(90deg, #fff 12%, gainsboro 88%); }\n    .colorcircle div:nth-child(2) {\n      left: 50%;\n      -webkit-transform-origin: bottom;\n              transform-origin: bottom;\n      -webkit-transform: skewX(150deg);\n              transform: skewX(150deg);\n      background-image: -webkit-linear-gradient(300deg, gainsboro 12%, #bfbfbf 88%);\n      background-image: linear-gradient(150deg, gainsboro 12%, #bfbfbf 88%); }\n    .colorcircle div:nth-child(3) {\n      -webkit-transform-origin: bottom;\n              transform-origin: bottom;\n      -webkit-transform: skewX(30deg);\n              transform: skewX(30deg);\n      background-image: -webkit-linear-gradient(60deg, #535353 12%, #313131 88%);\n      background-image: linear-gradient(30deg, #535353 12%, #313131 88%); }\n    .colorcircle div:nth-child(4) {\n      top: 50%;\n      background-image: -webkit-gradient(linear, left top, right top, color-stop(12%, #7d7d7d), color-stop(88%, #a0a0a0));\n      background-image: -webkit-linear-gradient(left, #7d7d7d 12%, #a0a0a0 88%);\n      background-image: linear-gradient(90deg, #7d7d7d 12%, #a0a0a0 88%); }\n    .colorcircle div:nth-child(5) {\n      left: 50%;\n      top: 50%;\n      -webkit-transform-origin: top;\n              transform-origin: top;\n      -webkit-transform: skewX(30deg);\n              transform: skewX(30deg);\n      background-image: -webkit-linear-gradient(60deg, #a0a0a0 12%, #bfbfbf 88%);\n      background-image: linear-gradient(30deg, #a0a0a0 12%, #bfbfbf 88%); }\n    .colorcircle div:nth-child(6) {\n      top: 50%;\n      -webkit-transform-origin: top;\n              transform-origin: top;\n      -webkit-transform: skewX(150deg);\n              transform: skewX(150deg);\n      background-image: -webkit-linear-gradient(300deg, #535353 12%, #7d7d7d 88%);\n      background-image: linear-gradient(150deg, #535353 12%, #7d7d7d 88%); }\n\n.spinner-ring {\n  background: none;\n  position: relative;\n  width: 30px;\n  height: 30px; }\n  .spinner-ring div {\n    position: absolute;\n    display: block;\n    width: 24px;\n    height: 24px;\n    top: 3px;\n    left: 3px;\n    -webkit-border-radius: 50%;\n            border-radius: 50%;\n    -webkit-box-shadow: 0 3px 0 0 #000;\n            box-shadow: 0 3px 0 0 #000;\n    -webkit-animation: spinner-rotate .8s infinite linear;\n            animation: spinner-rotate .8s infinite linear; }\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./picture.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./picture.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".picture-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n          flex-flow: row wrap;\n  padding: 10px 10px 5px 10px; }\n  .picture-wrapper .picture-item {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 32%;\n       -moz-box-flex: 0;\n            flex: 0 0 32%;\n    margin: 0 5px 5px 0;\n    padding-top: 32%;\n    background-size: cover;\n    background-position: 50%; }\n  .picture-wrapper :nth-child(3n) {\n    margin-right: 0; }\n", ""]);

	// exports


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./attachment.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./attachment.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.attachment-wrap {\n  margin: 20px;\n  border: 1px solid #fc7d59; }\n  .attachment-wrap .attachment-items {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    padding: 10px 0 0 10px; }\n    .attachment-wrap .attachment-items .attachment-item-left {\n      height: 50px; }\n      .attachment-wrap .attachment-items .attachment-item-left .fa {\n        font-size: 3rem;\n        margin: 10px;\n        color: #fff; }\n    .attachment-wrap .attachment-items .attachment-item-right {\n      -webkit-box-flex: 1;\n      -webkit-flex: auto;\n         -moz-box-flex: 1;\n              flex: auto;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n         -moz-box-orient: vertical;\n         -moz-box-direction: normal;\n              flex-direction: column;\n      border-bottom: 1px solid #fc7d59;\n      padding-bottom: 10px;\n      margin-left: 10px;\n      width: 1em;\n      padding-right: 20px; }\n      .attachment-wrap .attachment-items .attachment-item-right .item-title {\n        font-size: 16px;\n        color: #212121;\n        display: block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        word-break: keep-all; }\n      .attachment-wrap .attachment-items .attachment-item-right .item-size {\n        font-size: 14px;\n        color: #878787; }\n  .attachment-wrap :last-child .attachment-item-right {\n    border-bottom: none; }\n\n.excel .attachment-item-left {\n  background: #549e3b; }\n\n.pdf .attachment-item-left {\n  background: #f91b00; }\n\n.ppt .attachment-item-left {\n  background: #ce4217; }\n\n.zip .attachment-item-left {\n  background: #f8b848; }\n\n.word .attachment-item-left {\n  background: #2162ab; }\n\n.other .attachment-item-left {\n  background: #fc7d59; }\n", ""]);

	// exports


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./search.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./search.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.search-cell {\n  margin-bottom: 10px;\n  padding: 5px 10px;\n  background: #f0f0f0; }\n  .search-cell .search-form {\n    width: 100%;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    background: #fff;\n    border: 1px solid #e3e3e3;\n    -webkit-border-radius: 4px;\n            border-radius: 4px;\n    color: #878787;\n    font-size: 16px; }\n    .search-cell .search-form i {\n      margin-right: 4px; }\n\n.primary1 {\n  text-align: center;\n  padding: 0; }\n  .primary1 .search-bar {\n    width: 100%;\n    background: #fff;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n            align-items: center;\n    padding: 5px 0;\n    border: 1px solid #e3e3e3; }\n    .primary1 .search-bar .search-cell-left {\n      padding: 5px 20px;\n      border-right: 1px solid #e3e3e3; }\n      .primary1 .search-bar .search-cell-left i {\n        color: #b3b3b3;\n        font-size: 2.2rem; }\n    .primary1 .search-bar .search-cell-right {\n      padding: 0 16px;\n      border-left: 1px solid #d1d1d1; }\n      .primary1 .search-bar .search-cell-right i {\n        color: #fc7d59;\n        font-size: 1.5em; }\n    .primary1 .search-bar .search-cell-wrapper {\n      -webkit-box-flex: 1;\n      -webkit-flex: auto;\n         -moz-box-flex: 1;\n              flex: auto; }\n      .primary1 .search-bar .search-cell-wrapper .search-input {\n        width: 100%;\n        height: 34px;\n        outline: none;\n        font-size: 16px;\n        color: #212121;\n        border: none;\n        text-indent: 10px; }\n      .primary1 .search-bar .search-cell-wrapper .search-button {\n        display: none; }\n\n.primary2 {\n  padding: 10px 0;\n  background: #e3e3e3; }\n  .primary2 .search-bar {\n    width: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n            align-items: center; }\n    .primary2 .search-bar .search-cell-left {\n      padding: 5px 20px; }\n      .primary2 .search-bar .search-cell-left i {\n        color: #b3b3b3;\n        font-size: 1.5em; }\n    .primary2 .search-bar .search-cell-wrapper {\n      -webkit-box-flex: 1;\n      -webkit-flex: auto;\n         -moz-box-flex: 1;\n              flex: auto;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      margin-right: 10px; }\n      .primary2 .search-bar .search-cell-wrapper .search-input {\n        width: 100%;\n        height: 34px;\n        text-align: left;\n        outline: none;\n        font-size: 16px;\n        color: #212121;\n        border: none;\n        -webkit-border-bottom-left-radius: 4px;\n                border-bottom-left-radius: 4px;\n        -webkit-border-top-left-radius: 4px;\n                border-top-left-radius: 4px;\n        text-indent: 10px; }\n      .primary2 .search-bar .search-cell-wrapper .search-button {\n        display: block;\n        padding: 0 15px;\n        color: #fff;\n        background: #fc7d59;\n        border: none;\n        -webkit-border-bottom-right-radius: 4px;\n                border-bottom-right-radius: 4px;\n        -webkit-border-top-right-radius: 4px;\n                border-top-right-radius: 4px; }\n    .primary2 .search-bar .search-cell-right {\n      display: none; }\n", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	(function () {
	  function SearchBox() {
	    const allSearch = document.querySelectorAll("[data-comp='SearchBox']");

	    for (var i = allSearch.length - 1; i >= 0; i--) {
	      new Search(allSearch[i]);
	    }
	  }

	  function Search(element) {
	    const searchStyle = element.getAttribute('data-style');
	    const form = element.querySelector('.search-form');
	    const bar = element.querySelector('.search-bar');
	    const input = bar.querySelector('.search-input');
	    form.addEventListener('click', function (e) {
	      element.classList.add(searchStyle);
	      form.style.display = 'none';
	      bar.style = 'none';
	      input.focus();
	    }, false);
	    input.addEventListener('blur', function (e) {
	      element.classList.remove(searchStyle);
	      form.style.display = 'block';
	      bar.style.display = 'none';
	    }, false);
	  }

	  window.slpComp.Search = SearchBox;
	})();

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./product.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./product.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.product-row {\n  border-top: 1px solid #e3e3e3;\n  border-bottom: 1px solid #e3e3e3; }\n  .product-row .product-row-cell {\n    padding: 10px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    border-bottom: 1px solid #e3e3e3; }\n    .product-row .product-row-cell .product-cell-left {\n      height: 110px;\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 0 110px;\n         -moz-box-flex: 0;\n              flex: 0 0 110px; }\n    .product-row .product-row-cell .product-cell-right {\n      margin-left: 10px;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n         -moz-box-orient: vertical;\n         -moz-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n         -moz-box-pack: justify;\n              justify-content: space-between; }\n      .product-row .product-row-cell .product-cell-right .product-title {\n        font-size: 16px;\n        color: #212121;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical; }\n      .product-row .product-row-cell .product-cell-right .product-price {\n        font-size: 18px;\n        color: #fc7d59; }\n        .product-row .product-row-cell .product-cell-right .product-price i {\n          font-size: 16px;\n          color: #888;\n          margin-right: 4px;\n          font-style: normal; }\n  .product-row > :last-child {\n    border-bottom: none; }\n\n.product-column {\n  margin-top: 5px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n          flex-flow: row wrap;\n  border-top: 1px solid #e3e3e3;\n  border-bottom: 1px solid #e3e3e3; }\n  .product-column .product-column-cell {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 50%;\n       -moz-box-flex: 0;\n            flex: 0 0 50%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column;\n    padding: 10px; }\n    .product-column .product-column-cell .product-title {\n      font-size: 14px;\n      margin: 4px 0 2px;\n      color: #212121;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical; }\n    .product-column .product-column-cell .product-price {\n      font-size: 17px;\n      color: #fc7d59; }\n      .product-column .product-column-cell .product-price i {\n        font-size: 14px;\n        color: #888;\n        margin-right: 4px;\n        font-style: normal; }\n\n.product-details .product-details-cell {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  margin-bottom: 10px; }\n  .product-details .product-details-cell .product-cell-img {\n    width: 100%;\n    padding-top: 100%;\n    background-size: cover;\n    background-position: 50%; }\n  .product-details .product-details-cell .product-cell-title {\n    font-size: 17px;\n    color: #212121;\n    margin: 4px 10px 8px 10px; }\n  .product-details .product-details-cell .product-cell-price {\n    font-size: 22px;\n    color: #fc7d59;\n    margin-left: 10px; }\n    .product-details .product-details-cell .product-cell-price i {\n      margin-right: 4px;\n      font-size: 16px;\n      font-style: normal;\n      color: #878787; }\n", ""]);

	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./pagination.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./pagination.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.pagination {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n     -moz-box-orient: horizontal;\n     -moz-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  padding: 10px;\n  font-size: 16px;\n  color: #212121; }\n  .pagination .page-cell-wrapper {\n    -webkit-box-flex: 1;\n    -webkit-flex: auto;\n       -moz-box-flex: 1;\n            flex: auto;\n    text-align: center; }\n    .pagination .page-cell-wrapper i {\n      margin-left: 4px; }\n    .pagination .page-cell-wrapper .page-menu {\n      position: relative;\n      width: 50%;\n      height: 30px;\n      line-height: 30px;\n      margin: auto; }\n      .pagination .page-cell-wrapper .page-menu .pagenumber-alt {\n        visibility: hidden;\n        position: absolute;\n        bottom: 30px;\n        width: 100%;\n        max-height: 280px;\n        overflow: scroll;\n        margin: 5px 0;\n        background: #fff;\n        -webkit-border-radius: 4px;\n                border-radius: 4px;\n        -webkit-transition-timing-function: ease-out;\n                transition-timing-function: ease-out;\n        -webkit-transition-duration: .35s;\n                transition-duration: .35s;\n        -webkit-transition-property: height visibility;\n        transition-property: height visibility; }\n        .pagination .page-cell-wrapper .page-menu .pagenumber-alt ul {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: -moz-box;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: column;\n             -moz-box-orient: vertical;\n             -moz-box-direction: normal;\n                  flex-direction: column;\n          -webkit-box-align: center;\n          -webkit-align-items: center;\n             -moz-box-align: center;\n                  align-items: center; }\n          .pagination .page-cell-wrapper .page-menu .pagenumber-alt ul a {\n            -webkit-box-flex: 1;\n            -webkit-flex: 1 0 40px;\n               -moz-box-flex: 1;\n                    flex: 1 0 40px;\n            font-size: 16px;\n            width: 100%;\n            text-align: center;\n            line-height: 40px; }\n      .pagination .page-cell-wrapper .page-menu .in {\n        visibility: visible; }\n  .pagination .page-cell-left, .pagination .page-cell-right {\n    -webkit-box-flex: .5;\n    -webkit-flex: .5;\n       -moz-box-flex: .5;\n            flex: .5;\n    text-align: center;\n    padding: 0 15px;\n    height: 34px;\n    line-height: 34px;\n    -webkit-border-radius: 4px;\n            border-radius: 4px; }\n  .pagination .disable {\n    opacity: 0.2; }\n\n.page-main .page-cell-left, .page-main .page-cell-right, .page-main .page-cell-wrapper {\n  color: #fc7d59; }\n\n.page-default-normal .page-cell-left, .page-default-normal .page-cell-right {\n  border: 1px solid #878787; }\n\n.page-default-bg .page-cell-left, .page-default-bg .page-cell-right {\n  background: #e3e3e3; }\n\n.page-main-normal .page-cell-left, .page-main-normal .page-cell-right, .page-main-normal .page-cell-wrapper {\n  color: #fc7d59; }\n\n.page-main-normal .page-cell-left, .page-main-normal .page-cell-right {\n  border: 1px solid #fc7d59; }\n\n.page-main-bg .page-cell-wrapper {\n  color: #fc7d59; }\n\n.page-main-bg .page-cell-left, .page-main-bg .page-cell-right {\n  background: #fc7d59;\n  color: #fff; }\n\n.page-main-bg > .disable {\n  opacity: 0.2; }\n\n.page-main .pagenumber-alt, .page-main-normal .pagenumber-alt, .page-main-bg .pagenumber-alt {\n  border: 1px solid #fc7d59; }\n  .page-main .pagenumber-alt a, .page-main-normal .pagenumber-alt a, .page-main-bg .pagenumber-alt a {\n    color: #fc7d59; }\n    .page-main .pagenumber-alt a:hover, .page-main .pagenumber-alt a.active, .page-main-normal .pagenumber-alt a:hover, .page-main-normal .pagenumber-alt a.active, .page-main-bg .pagenumber-alt a:hover, .page-main-bg .pagenumber-alt a.active {\n      background: #fc7d59;\n      color: #fff; }\n\n.page-default .pagenumber-alt, .page-default-normal .pagenumber-alt, .page-default-bg .pagenumber-alt {\n  border: 1px solid #e3e3e3;\n  -webkit-box-shadow: 0.4px 0.4px rgba(0, 0, 0, 0.15);\n          box-shadow: 0.4px 0.4px rgba(0, 0, 0, 0.15); }\n  .page-default .pagenumber-alt a, .page-default-normal .pagenumber-alt a, .page-default-bg .pagenumber-alt a {\n    color: #212121; }\n    .page-default .pagenumber-alt a:hover, .page-default .pagenumber-alt a.active, .page-default-normal .pagenumber-alt a:hover, .page-default-normal .pagenumber-alt a.active, .page-default-bg .pagenumber-alt a:hover, .page-default-bg .pagenumber-alt a.active {\n      background: #e3e3e3; }\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports) {

	(function () {
	  function Pagination() {
	    const allPagination = document.querySelectorAll("[data-comp='Pagination']");

	    for (var i = allPagination.length - 1; i >= 0; i--) {
	      new PaginationItem(allPagination[i]);
	    }
	  }
	  function PaginationItem(element) {
	    this.container = element;
	    this.pageWrapper = this.container.querySelector('.page-cell-wrapper');
	    this.init();
	  }
	  PaginationItem.prototype.init = function () {
	    var instance = this;
	    if (window.addEventListener) {
	      this.pageWrapper.addEventListener("click", function () {
	        instance.toggleShowmenu();
	      }, false);
	    } else {
	      this.pageWrapper.onclick = function () {
	        instance.toggleShowmenu();
	      };
	    }
	  };
	  PaginationItem.prototype.toggleShowmenu = function () {
	    const pagelist = this.pageWrapper.querySelector('.pagenumber-alt');
	    const page_icon = this.pageWrapper.querySelector('.fa');
	    if (pagelist.classList.contains('in')) {
	      pagelist.classList.remove('in');
	      pagelist.style.height = 0;
	      page_icon.classList.remove('fa-angle-down');
	      page_icon.classList.add('fa-angle-up');
	    } else {
	      pagelist.classList.add('in');
	      pagelist.style.height = pagelist.querySelector('ul').offsetHeight + 'px';
	      page_icon.classList.remove('fa-angle-up');
	      page_icon.classList.add('fa-angle-down');
	    }
	  };

	  window.slpComp.Pagination = Pagination;
	})();

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./article.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./article.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.article-smimg {\n  border-top: 1px solid #e3e3e3;\n  border-bottom: 1px solid #e3e3e3; }\n  .article-smimg .head {\n    height: 45px;\n    line-height: 45px;\n    margin-left: 10px;\n    font-size: 14px;\n    color: #878787;\n    border-bottom: 1px solid #e3e3e3; }\n    .article-smimg .head span {\n      padding-left: 8px;\n      border-left: 2px solid #fc7d59; }\n  .article-smimg nav {\n    margin: 0 0 0 10px; }\n    .article-smimg nav .article-cell {\n      height: 85px;\n      position: relative;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: row;\n         -moz-box-orient: horizontal;\n         -moz-box-direction: normal;\n              flex-direction: row;\n      padding-right: 20px;\n      padding-bottom: 10px;\n      margin-top: 10px; }\n      .article-smimg nav .article-cell:before {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        background: #e3e3e3;\n        width: 100%;\n        height: 1px; }\n      .article-smimg nav .article-cell .cell-img {\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 0 100px;\n           -moz-box-flex: 0;\n                flex: 0 0 100px;\n        margin: auto;\n        height: 100%;\n        padding: 5px 0;\n        overflow: hidden; }\n      .article-smimg nav .article-cell .content {\n        -webkit-box-flex: 1;\n        -webkit-flex: auto;\n           -moz-box-flex: 1;\n                flex: auto;\n        overflow: hidden;\n        margin-right: 14px; }\n        .article-smimg nav .article-cell .content .title {\n          margin-bottom: 2px;\n          color: #212121;\n          width: 100%;\n          font-weight: bold; }\n        .article-smimg nav .article-cell .content .describes {\n          font-size: 14px;\n          color: #878787;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          display: -webkit-box;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical; }\n        .article-smimg nav .article-cell .content .time {\n          font-size: 14px;\n          color: #b3b3b3; }\n  .article-smimg .more-tag {\n    height: 49px;\n    line-height: 49px;\n    color: #fc7d59;\n    font-size: 17px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    margin: 0 10px;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n       -moz-box-pack: justify;\n            justify-content: space-between; }\n\n.article-default nav :last-child:before {\n  content: none; }\n\n.article-default nav .title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all; }\n\n.article-more .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between; }\n  .article-more .content .title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical; }\n\n.article-lgimg {\n  border-top: 1px solid #e3e3e3; }\n  .article-lgimg .article-cell {\n    padding: 15px 10px;\n    position: relative;\n    border-bottom: 1px solid #e3e3e3; }\n    .article-lgimg .article-cell .cell-img {\n      padding-bottom: 50%;\n      background-position: 50%;\n      background-size: cover; }\n    .article-lgimg .article-cell .content .title {\n      margin: 4px 0;\n      color: #212121;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical; }\n    .article-lgimg .article-cell .content .describes {\n      color: #878787; }\n      .article-lgimg .article-cell .content .describes .date {\n        display: inline-block; }\n  .article-lgimg .article-with-anthor .anthor {\n    float: right; }\n\n.article-onlytitle {\n  border-top: 1px solid #e3e3e3; }\n  .article-onlytitle .noinfo {\n    height: 49px;\n    padding: 0 10px;\n    border-bottom: 1px solid #e3e3e3; }\n    .article-onlytitle .noinfo .title {\n      line-height: 49px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      word-break: keep-all; }\n  .article-onlytitle .withinfo {\n    margin: 15px 0 0 10px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid #e3e3e3; }\n    .article-onlytitle .withinfo .title {\n      margin: 0 10px 4px 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical; }\n    .article-onlytitle .withinfo .describes {\n      margin-right: 10px;\n      font-size: 14px;\n      color: #878787;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical; }\n\n.article-midimg {\n  border-top: 1px solid #e3e3e3; }\n  .article-midimg .article-cell {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n            flex-direction: row;\n    border-bottom: 1px solid #e3e3e3;\n    margin: 10px 0 10px 10px;\n    padding: 0 10px 10px 0; }\n    .article-midimg .article-cell .cell-img {\n      -webkit-box-flex: 0;\n      -webkit-flex: 0 0 110px;\n         -moz-box-flex: 0;\n              flex: 0 0 110px;\n      height: 110px;\n      background-size: cover;\n      background-position: 50%; }\n    .article-midimg .article-cell .content {\n      -webkit-box-flex: 1;\n      -webkit-flex: auto;\n         -moz-box-flex: 1;\n              flex: auto;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -moz-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: column;\n         -moz-box-orient: vertical;\n         -moz-box-direction: normal;\n              flex-direction: column;\n      -webkit-justify-content: space-around;\n              justify-content: space-around; }\n      .article-midimg .article-cell .content .describes {\n        font-size: 14px;\n        color: #878787;\n        margin-right: 10px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical; }\n  .article-midimg .with-title-day .content {\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n       -moz-box-pack: justify;\n            justify-content: space-between; }\n    .article-midimg .with-title-day .content .date, .article-midimg .with-title-day .content .anthor {\n      font-size: 13px;\n      color: #b3b3b3; }\n", ""]);

	// exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./map.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./map.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".fixed-top,\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-top {\n  top: 0; }\n\n.fixed-bottom {\n  bottom: 0; }\n\n.map-container .location {\n  padding: 10px 10px 15px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n          justify-content: space-between;\n  border-top: 1px solid #e3e3e3;\n  border-bottom: 1px solid #e3e3e3; }\n  .map-container .location .nowposition {\n    -webkit-box-flex: 1;\n    -webkit-flex: auto;\n       -moz-box-flex: 1;\n            flex: auto;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n       -moz-box-orient: vertical;\n       -moz-box-direction: normal;\n            flex-direction: column; }\n    .map-container .location .nowposition .title {\n      font-size: 17px;\n      color: #212121; }\n    .map-container .location .nowposition .address {\n      margin-top: 2px;\n      font-size: 14px;\n      color: #878787; }\n  .map-container .location .goto {\n    text-align: center;\n    margin-left: 20px;\n    -webkit-box-flex: 10%;\n    -webkit-flex: 10%;\n       -moz-box-flex: 10%;\n            flex: 10%; }\n    .map-container .location .goto .btn {\n      width: 80px;\n      height: 34px;\n      padding: 10px 15px;\n      font-size: 16px; }\n", ""]);

	// exports


/***/ }
/******/ ]);
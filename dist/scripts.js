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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var app = angular.module('app', []);

	app.controller('MainCtrl', function($scope) {
	  $scope.moves = 10;
	  $scope.positions = {
	    topleft: {
	      x: 50,
	      y: 50
	    },
	    topright: {
	      x: 350,
	      y: 50
	    },
	    botright: {
	      x: 350,
	      y: 350
	    },
	    botleft: {
	      x: 50,
	      y: 350
	    }
	  };
	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module('app')
	.directive('ftField', ftField);

	function ftField() {
	  var directive = {
	    templateUrl: 'ftField/ftField.html',
	    scope: {
	      positions: '=',
	      moves: '=',
	    },
	    link: link,
	    controller: Controller,
	    controllerAs: 'vm',
	    bindToController: true,
	  };
	  return directive;

	  function link(scope, elem, attrs, ctrl) {
	    // TODO: A system to calculate moves (moves, movesUse, movesLeft)
	    var target, transform, transformList, index, startX, startY, prevX, prevY, currX, currY, movementX, movementY, matrix, radius = 50, distance, limitX, limitY, line;
	    var field = elem.find('svg')[0];

	    scope.mousedown = mousedown;
	    scope.mouseup = mouseup;
	    scope.positions = angular.copy(ctrl.positions);
	    scope.moves = ctrl.moves;
	    var keys = Object.keys(scope.positions);

	    function mousedown(event) {
	      if (event.target.nodeName == 'circle') {
	        field.onmousemove = drag;
	        target = event.target;
	        line = target.nextElementSibling;
	        transformList = target.transform.baseVal;
	        startX = event.clientX;
	        startY = event.clientY;
	        console.log(event);
	        // console.log(startX, startY);
	        prevX = currX = startX;
	        prevY = currY = startY;
	        // index = keys.indexOf(target.id);
	      } else {
	        target = null;
	      }
	    }

	    function drag(event) {
	      currX = event.clientX;
	      currY = event.clientY;
	      distance = Math.sqrt(Math.pow(currX - startX, 2) + Math.pow(currY - startY, 2));
	      if (scope.moves - Math.floor(distance/radius) > -1) {
	        scope.moves = ctrl.moves - Math.floor(distance/radius) - 1;
	        scope.$apply();
	      } else {
	        // currX = (currX - startX)*radius/distance + startX;
	        // currY = (currY - startY)*radius/distance + startY;
	      }

	      line.x2.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, currX);
	      line.y2.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, currY);
	      prevX = currX;
	      prevY = currY;
	    }

	    function mouseup(event) {
	      if (target) {
	        ctrl.positions[target.id].x = Math.round(line.x2.animVal.value);
	        ctrl.positions[target.id].y = Math.round(line.y2.animVal.value);
	        ctrl.moves = scope.moves;
	      }
	      field.onmousemove = null;
	    }
	  }
	}

	function Controller() {

	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module('app')
	.directive('player', player);

	function player() {
	  var directive = {
	    restrict: 'EA',
	    link: link,
	    templateUrl: 'player/player.html',
	    scope: {
	      key: '=',
	      value: '='
	    },
	    controller: Controller,
	    controllerAs: 'vm',
	    bindToController: true
	  }

	  return directive;

	  function link(scope, elem, attrs, ctrl) {
	  }
	}

	function Controller() {

	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "/* Put your css in here */\r\n\r\n.point--cover {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 400px;\r\n  pointer-events: none;\r\n}\r\n\r\n.point {\r\n  position: absolute;\r\n}\r\n\r\n.topleft {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.topright {\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.botright {\r\n  top: 100%;\r\n  right: 0;\r\n}\r\n\r\n.botleft {\r\n  top: 100%;\r\n  left: 0;\r\n}\r\n\r\nsvg {\r\n  border: 1px solid #000;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<svg width=\"600\" height=\"400\" ng-mousedown=\"mousedown($event)\" ng-mouseup=\"mouseup($event)\">\n<g player ng-repeat=\"(key, value) in positions\" key=\"key\" value=\"value\">\n</g>\n</svg>\n<h3>{{moves}}</h3>\n";
	var id1="ftField/ftField.html";
	var inj=angular.element(window.document).injector();
	if(inj){inj.get("$templateCache").put(id1,v1);}
	else{ngModule.run(["$templateCache",function(c){c.put(id1,v1)}]);}
	module.exports=v1;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<circle id=\"{{vm.key}}\" ng-attr-cx=\"{{vm.value.x}}\" ng-attr-cy=\"{{vm.value.y}}\" r=\"20\" stroke=\"black\" stroke-width=\"1\" fill=\"transparent\"/>\n<line ng-attr-x1=\"{{vm.value.x}}\" ng-attr-x2=\"{{vm.value.x}}\" ng-attr-y1=\"{{vm.value.y}}\" ng-attr-y2=\"{{vm.value.y}}\" stroke-width=\"1\" stroke=\"rgb(255,0,0)\"/>\n";
	var id1="player/player.html";
	var inj=angular.element(window.document).injector();
	if(inj){inj.get("$templateCache").put(id1,v1);}
	else{ngModule.run(["$templateCache",function(c){c.put(id1,v1)}]);}
	module.exports=v1;

/***/ }
/******/ ]);
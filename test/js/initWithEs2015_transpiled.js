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

	"use strict";

	var _bundle = __webpack_require__(1);

	var introConfig = {
		stepIndex: 0, // starting step index (optional)
		steps: [{
			title: "The title here",
			description: "The description describes some very useful tool. You can use this tool.",
			selector: ".image.avatar"
		}, {
			title: "The title 2",
			description: "The description 2",
			selector: ".major"
		}, // popperOptions: {
		// 	placement: "right",
		//  			flipBehavior: ["left", "top", "bottom"]
		// }
		{
			title: "The title 3",
			description: "The description 3",
			selector: ".button"
		}] // (required)
	};
	var container = document.querySelector("#intro"); // This is where the intro-guide will reside
	var myIntroGuide = (0, _bundle.introGuide)(container, introConfig);
	myIntroGuide.start();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["initIntroGuide"] = factory();
		else
			root["initIntroGuide"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
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

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.introGuide = introGuide;

		var _IntroGuide = __webpack_require__(1);

		/**
		 * A factory function for the class simply instantiating the IntroGuide class.
		 * @param  {HTMLTag | String} container
		 * @param  {Object} introConfig
		 * @return {Class instance}
		 */
		function introGuide(container, introConfig) {
		  if (!container) return false;
		  container = typeof container === "string" ? document.querySelector(container) : container;
		  return new _IntroGuide.IntroGuide(container, introConfig);
		}

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.IntroGuide = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		// import { Tooltip } from "Tooltip"


		var _InfoBox = __webpack_require__(2);

		var _Navigation = __webpack_require__(4);

		var _utils = __webpack_require__(5);

		var utils = _interopRequireWildcard(_utils);

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var IntroGuide = exports.IntroGuide = function () {
			function IntroGuide(container, config) {
				_classCallCheck(this, IntroGuide);

				this._container = container;
				this._container.className = "ig-maincontainer";
				this._config = this._preProcessConfig(config);
				// this._initGui();
				this._stepIndex = this._config.stepIndex || 0;
				this._bindEvents();
			}

			_createClass(IntroGuide, [{
				key: "_preProcessConfig",
				value: function _preProcessConfig(config) {
					var defaults = {};
					return Object.assign(defaults, config);
				}
			}, {
				key: "_bindEvents",
				value: function _bindEvents() {
					this._handleResizeBound = this._handleResizeBound || this._handleResize.bind(this);
					this._onKeyDownBound = this._onKeyDownBound || this._onKeyDown.bind(this);
					window.addEventListener("resize", this._handleResizeBound);
					window.addEventListener("keydown", this._onKeyDownBound);
				}
			}, {
				key: "_unbindEvents",
				value: function _unbindEvents() {
					window.removeEventListener('resize', this._handleResizeBound);
					window.removeEventListener('keydown', this._onKeyDownBound);
				}
			}, {
				key: "_onKeyDown",
				value: function _onKeyDown(e) {
					switch (e.keyCode) {
						case 27:
							// Esc
							this.stop();
							break;
						case 37:
							// Go left
							this.goToStep(this._stepIndex - 1);
							break;
						case 39:
							// Go right
							this.goToStep(this._stepIndex + 1);
							break;
					}
				}
			}, {
				key: "_handleResize",
				value: function _handleResize() {
					this.goToStep(this._stepIndex);
					// const c = this._getStepConfig(this._stepIndex);
					// if (this._checkStepConfig( c ) === false) {
					// 	return;
					// }
					// var position = this._infoBox._updatePosition(c.selector, c);
					// this._drawHole(position && position.reference ? position.reference : null);
				}
			}, {
				key: "_start",
				value: function _start() {
					if (!this._isActive) {
						this._isActive = true;
					}
					if (this._container.children.length === 0) {
						this._initGui();
					}
					this.goToStep(this._stepIndex);
					utils.addClass(this._container, "ig-fadein");
					// setTimeout(() => {
					// 	// this._handleResize();
					// }, 300);
				}
			}, {
				key: "start",
				value: function start() {
					var _this = this;

					if (document.readyState !== "complete") {
						if (!document.addEventListener) {
							//  IE <= 8
							document.attachEvent("onreadystatechange", function () {
								if (document.readyState === "complete") {
									_this._start();
								}
							});
						} else {
							// Not too un-modern browsers
							document.addEventListener("DOMContentLoaded", this._start.bind(this));
						}
					} else {
						this._start();
					}
				}
			}, {
				key: "stop",
				value: function stop() {
					var _this2 = this;

					if (this._isActive) {
						utils.removeClass(this._container, "ig-fadein");
						setTimeout(function () {
							_this2._unbindEvents();
							_this2._nav = null;
							_this2._canvas = null;
							_this2._btnClose = null;
							_this2._infoBox = null;
							_this2._container.innerHTML = "";
						}, 300);
						if (this._config.onStop) {
							this._config.onStop();
						}
					}
					this._isActive = false;
				}
			}, {
				key: "restart",
				value: function restart() {}
			}, {
				key: "_checkStepConfig",
				value: function _checkStepConfig(stepConfig) {
					var _this3 = this;

					var proceed = function proceed() {
						var incrementor = _this3._prevStepIndex === null || _this3._prevStepIndex < _this3._stepIndex ? 1 : -1;
						_this3.goToStep(_this3._stepIndex + incrementor);
					};
					if (stepConfig.selector) {
						var tag = document.querySelector(stepConfig.selector);
						if (utils.tagIsVisible(tag) === false) {
							proceed();
							return false;
						}
					}
					var ok = stepConfig.condition ? stepConfig.condition() : true;
					if (ok === false) {
						proceed();
					}
					return ok;
				}
			}, {
				key: "goToStep",
				value: function goToStep(step) {
					if (this._navDelayTimeout) {
						clearTimeout(this._navDelayTimeout);
					}
					if (this._beforeShowTimeout) {
						clearTimeout(this._beforeShowTimeout);
					}

					utils.removeClass(this._nav._tag, "ig-fadein-nav");
					this._nav._tag.style.visibility = "hidden";
					var navBtnLeft = this._nav._tag.querySelectorAll(".ig-nav-btn")[0],
					    navBtnRight = this._nav._tag.querySelectorAll(".ig-nav-btn")[1];

					this._prevStepIndex = this._stepIndex || null;
					this._stepIndex = step;
					var stepConfig = this._getStepConfig(step);

					switch (step) {
						case 0:
							if (!this._getStepConfig(step).btnLeftLabel) {
								navBtnLeft.style.display = "none";
							}
							break;
						case this._config.steps.length - 1:

							break;
						default:
							navBtnLeft.style.display = navBtnRight.style.display;
							if (step < 0) {
								return this.stop();
								// TODO: option "go to end"
								// step = this._config.steps.length - 1;
							} else if (step > this._config.steps.length - 1) {
									return this.stop();
									// TODO: option "go to end"
									// step = 0;
								}
					}

					function callback() {
						var _this4 = this;

						var ms = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

						var afterTimeout = function afterTimeout() {
							if (_this4._checkStepConfig(stepConfig) === false) {
								return;
							}
							_this4._nav.updateGui(step, stepConfig);

							var positionObj = _this4._infoBox.updateGui(stepConfig.selector, stepConfig.title, stepConfig.description, _this4._infoBox._tag.style.position); //stepConfig.popperOptions);
							var position = positionObj && positionObj.reference ? positionObj.reference : null;
							_this4._drawHole(position);
							_this4._navDelayTimeout = setTimeout(function () {
								_this4._nav._tag.style.visibility = "visible";
								// utils.removeClass(this._nav._tag, "ig-hide");
								utils.addClass(_this4._nav._tag, "ig-fadein-nav");
							}, 500);
						};
						if (ms) {
							this._beforeShowTimeout = setTimeout(afterTimeout, ms);
						} else {
							afterTimeout();
						}
					}

					if (stepConfig.beforeShow) {
						return stepConfig.beforeShow(callback.bind(this), utils);
					}
					return callback.call(this);
				}
			}, {
				key: "_getStepConfig",
				value: function _getStepConfig(stepIndex) {
					return this._config.steps[stepIndex];
				}
			}, {
				key: "_initGui",
				value: function _initGui() {
					var _this5 = this;

					var c = document.createElement("canvas");
					c.id = "ig-canvas-with-hole";
					c.className = "ig-canvas-with-hole";
					this._canvas = c;
					this._infoBox = new _InfoBox.InfoBox(this._container);
					this._container.appendChild(this._canvas);
					this._container.style.zIndex = this._container.style.zIndex || "2000";
					this._nav = new _Navigation.Navigation(this._infoBox._tag, function (e) {
						_this5.goToStep(_this5._stepIndex - 1);
						_this5._infoBox._tag.focus();
					}, function (e) {
						_this5.goToStep(_this5._stepIndex + 1);
						_this5._infoBox._tag.focus();
					}, this._config.steps.length);

					this._btnClose = document.createElement("div");
					this._btnClose.className = "ig-btnclose";
					this._btnClose.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
					this._btnClose.onclick = function (e) {
						return _this5.stop();
					};
					this._btnClose.ontouchstart = function (e) {
						return _this5.stop();
					};
					this._container.appendChild(this._btnClose);
				}
			}, {
				key: "_drawHole",
				value: function _drawHole() {
					var obj = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

					// var bbox = this._createBboxFromElement( document.querySelector( this._getStepConfig(this._stepIndex).selector ) )
					var bbox;
					if (obj) {
						var padding = 5;
						bbox = [obj.left - padding, obj.top - padding, obj.right + padding, obj.bottom + padding];
					}
					this._drawCanvasHole(bbox);
				}
			}, {
				key: "_createBboxFromElement",
				value: function _createBboxFromElement(tag) {
					var padding = 2;
					var h = tag.clientHeight,
					    w = tag.clientWidth,
					    left = tag.offsetLeft,
					    top = tag.offsetTop;
					return [left - padding, top - padding, left + w + padding, top + h + padding];
				}
			}, {
				key: "_drawCanvasHole",
				value: function _drawCanvasHole() {
					var bbox = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];


					var c = this._canvas;
					var ctx = c.getContext("2d");
					// ctx.clearRect (0, 0, c.width, c.height);

					var winWidth = $(window).width(),
					    winHeight = $(window).height();
					if (bbox) {
						var box = [];
						if (bbox instanceof Array) {
							box = bbox;
						}
						// else if (bbox.selector) {
						// 	var padding = 15;
						// 	var selector = bbox.selector;
						// 	var $el = $(selector);
						// 	var pos = $el.offset();
						// 	var marginLeft = 0, //utils.rmPx( $el.css("margin-left") ),
						// 		marginTop = 0, //utils.rmPx( $el.css("margin-top") ),
						// 		marginRight = 0, //utils.rmPx( $el.css("margin-right") ),
						// 		marginBottom = 0; //utils.rmPx( $el.css("margin-bottom") );
						// 	box.push(pos.left + marginLeft - padding - marginRight);
						// 	box.push(pos.top + marginTop - padding  - marginBottom);
						// 	box.push( pos.left + $el.width() + marginLeft + padding - marginRight);
						// 	box.push( pos.top + $el.height() + marginTop + padding - marginRight);
						// }

						var left = box[0],
						    top = box[1],
						    right = box[2],
						    bottom = box[3];
					}

					c.width = winWidth;
					c.height = winHeight;

					// ctx.fillRect(0,0,winWidth,winHeight);

					ctx.moveTo(0, 0);
					ctx.lineTo(winWidth, 0);
					ctx.lineTo(winWidth, winHeight);
					ctx.lineTo(0, winHeight);
					ctx.lineTo(0, 0);
					ctx.closePath();

					if (bbox) {
						ctx.moveTo(left, top);
						ctx.lineTo(left, bottom);
						ctx.lineTo(right, bottom);
						ctx.lineTo(right, top);
						ctx.lineTo(left, top);
						ctx.closePath();
					}

					ctx.fillStyle = "rgba(0,0,0,0.5)";
					ctx.shadowColor = 'rgba(0,0,0,1)';
					ctx.shadowBlur = 20;

					ctx.fill();
				}
			}]);

			return IntroGuide;
		}();

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.InfoBox = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _popper = __webpack_require__(3);

		var _popper2 = _interopRequireDefault(_popper);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var InfoBox = exports.InfoBox = function () {
			function InfoBox(container) {
				_classCallCheck(this, InfoBox);

				this._container = container;
				this._initGui();
			}

			_createClass(InfoBox, [{
				key: "_updatePosition",
				value: function _updatePosition() {
					var selector = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
					var popperOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					if (selector) {
						var referenceTag = document.querySelector(selector);
						var options = Object.assign({
							gpuAcceleration: false
							// offset: 60,
							// placement: "right"
							// flipBehavior: ["right", "top"],
							// boundariesPadding: 100,
							// boundariesElement: document.querySelector("body"),
						}, popperOptions);
						if (!this._popper) {
							this._popper = new _popper2.default(referenceTag, this._tag, options);
						} else {
							Object.assign(this._popper._options, options);
							this._popper._reference = referenceTag;
							this._popper.update();
						}
						return this._popper._getOffsets(this._popper._popper, this._popper._reference, this._popper._options.placement);
					}

					var centerTag = document.querySelector("#maindiv");
					var clientHeight = this._tag.clientHeight || 0,
					    clientWidth = this._tag.clientWidth || 0,
					    innerWidth = window.innerWidth || document.documentElement.clientWidth || 0,
					    innerHeight = window.innerHeight || document.documentElement.clientHeight || 0;
					// console.log(`${clientHeight} ${clientWidth} ${innerWidth} ${innerHeight}`);
					this._tag.style.left = innerWidth / 2 - clientWidth / 2 + "px";
					this._tag.style.top = innerHeight / 2 - clientHeight / 2 + "px";
					return null;
				}
			}, {
				key: "updateGui",
				value: function updateGui() {
					var selector = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
					var title = arguments[1];
					var description = arguments[2];
					var popperOptions = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

					var header = this._tag.querySelector(".ig-infobox-header");
					if (header.childNodes.length) {
						header.removeChild(header.childNodes[0]);
					}
					header.appendChild(document.createTextNode(title));

					var section = this._tag.querySelector(".ig-infobox-section");
					if (section.childNodes.length) {
						section.removeChild(section.childNodes[0]);
					}
					section.appendChild(document.createTextNode(description));

					return this._updatePosition(selector, popperOptions);
				}
			}, {
				key: "_initGui",
				value: function _initGui() {
					this._tag = document.createElement("div");
					this._tag.id = "ig-infobox";
					this._tag.className = "ig-infobox";

					var header = document.createElement("h3");
					header.className = "ig-infobox-header";

					var section = document.createElement("section");
					section.className = "ig-infobox-section";

					this._tag.appendChild(header);
					this._tag.appendChild(section);

					this._container.appendChild(this._tag);
				}
			}]);

			return InfoBox;
		}();

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
		 * @fileOverview Kickass library to create and place poppers near their reference elements.
		 * @version {{version}}
		 * @license
		 * Copyright (c) 2016 Federico Zivolo and contributors
		 *
		 * Permission is hereby granted, free of charge, to any person obtaining a copy
		 * of this software and associated documentation files (the "Software"), to deal
		 * in the Software without restriction, including without limitation the rights
		 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		 * copies of the Software, and to permit persons to whom the Software is
		 * furnished to do so, subject to the following conditions:
		 *
		 * The above copyright notice and this permission notice shall be included in all
		 * copies or substantial portions of the Software.
		 *
		 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		 * SOFTWARE.
		 */

		//
		// Cross module loader
		// Supported: Node, AMD, Browser globals
		//
		;(function (root, factory) {
		    if (true) {
		        // AMD. Register as an anonymous module.
		        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    } else if (typeof module === 'object' && module.exports) {
		        // Node. Does not work with strict CommonJS, but
		        // only CommonJS-like environments that support module.exports,
		        // like Node.
		        module.exports = factory();
		    } else {
		        // Browser globals (root is window)
		        root.Popper = factory();
		    }
		}(this, function () {

		    'use strict';

		    var root = window;

		    // default options
		    var DEFAULTS = {
		        // placement of the popper
		        placement: 'bottom',

		        gpuAcceleration: true,

		        // shift popper from its origin by the given amount of pixels (can be negative)
		        offset: 0,

		        // the element which will act as boundary of the popper
		        boundariesElement: 'viewport',

		        // amount of pixel used to define a minimum distance between the boundaries and the popper
		        boundariesPadding: 5,

		        // popper will try to prevent overflow following this order,
		        // by default, then, it could overflow on the left and on top of the boundariesElement
		        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

		        // the behavior used by flip to change the placement of the popper
		        flipBehavior: 'flip',

		        arrowElement: '[x-arrow]',

		        // list of functions used to modify the offsets before they are applied to the popper
		        modifiers: [ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

		        modifiersIgnored: [],
		    };

		    /**
		     * Create a new Popper.js instance
		     * @constructor Popper
		     * @param {HTMLElement} reference - The reference element used to position the popper
		     * @param {HTMLElement|Object} popper
		     *      The HTML element used as popper, or a configuration used to generate the popper.
		     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
		     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
		     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
		     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
		     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
		     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
		     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
		     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
		     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
		     * @param {Object} options
		     * @param {String} [options.placement=bottom]
		     *      Placement of the popper accepted values: `top(-left, -right), right(-left, -right), bottom(-left, -right),
		     *      left(-left, -right)`
		     *
		     * @param {Boolean} [options.gpuAcceleration=true]
		     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
		     *      browser to use the GPU to accelerate the rendering.
		     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
		     *
		     * @param {Number} [options.offset=0]
		     *      Amount of pixels the popper will be shifted (can be negative).
		     *
		     * @param {String|Element} [options.boundariesElement='viewport']
		     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
		     *      of the defined boundaries (except if `keepTogether` is enabled)
		     *
		     * @param {Number} [options.boundariesPadding=5]
		     *      Additional padding for the boundaries
		     *
		     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
		     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
		     *      this means that the last ones will never overflow
		     *
		     * @param {String|Array} [options.flipBehavior='flip']
		     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
		     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
		     *      its axis (`right - left`, `top - bottom`).
		     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
		     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
		     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
		     *
		     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
		     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
		     *      to this array to edit the offsets and placement.
		     *      The function should reflect the @params and @returns of preventOverflow
		     *
		     * @param {Array} [options.modifiersIgnored=[]]
		     *      Put here any built-in modifier name you want to exclude from the modifiers list
		     *      The function should reflect the @params and @returns of preventOverflow
		     *
		     * @param {Boolean} [options.removeOnDestroy=false]
		     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
		     */
		    function Popper(reference, popper, options) {
		        this._reference = reference.jquery ? reference[0] : reference;
		        this.state = {};

		        // if the popper variable is a configuration object, parse it to generate an HTMLElement
		        // generate a default popper if is not defined
		        var isNotDefined = typeof popper === 'undefined' || popper === null;
		        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
		        if (isNotDefined || isConfig) {
		            this._popper = this.parse(isConfig ? popper : {});
		        }
		        // otherwise, use the given HTMLElement as popper
		        else {
		            this._popper = popper.jquery ? popper[0] : popper;
		        }

		        // with {} we create a new object with the options inside it
		        this._options = Object.assign({}, DEFAULTS, options);

		        // refactoring modifiers' list
		        this._options.modifiers = this._options.modifiers.map(function(modifier){
		            // remove ignored modifiers
		            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

		            // set the x-placement attribute before everything else because it could be used to add margins to the popper
		            // margins needs to be calculated to get the correct popper offsets
		            if (modifier === 'applyStyle') {
		                this._popper.setAttribute('x-placement', this._options.placement);
		            }

		            // return predefined modifier identified by string or keep the custom one
		            return this.modifiers[modifier] || modifier;
		        }.bind(this));

		        // make sure to apply the popper position before any computation
		        this.state.position = this._getPosition(this._popper, this._reference);
		        setStyle(this._popper, { position: this.state.position});

		        // fire the first update to position the popper in the right place
		        this.update();

		        // setup event listeners, they will take care of update the position in specific situations
		        this._setupEventListeners();
		        return this;
		    }


		    //
		    // Methods
		    //
		    /**
		     * Destroy the popper
		     * @method
		     * @memberof Popper
		     */
		    Popper.prototype.destroy = function() {
		        this._popper.removeAttribute('x-placement');
		        this._popper.style.left = '';
		        this._popper.style.position = '';
		        this._popper.style.top = '';
		        this._popper.style[getSupportedPropertyName('transform')] = '';
		        this._removeEventListeners();

		        // remove the popper if user explicity asked for the deletion on destroy
		        if (this._options.removeOnDestroy) {
		            this._popper.remove();
		        }
		        return this;
		    };

		    /**
		     * Updates the position of the popper, computing the new offsets and applying the new style
		     * @method
		     * @memberof Popper
		     */
		    Popper.prototype.update = function() {
		        var data = { instance: this };

		        // store placement inside the data object, modifiers will be able to edit `placement` if needed
		        // and refer to _originalPlacement to know the original value
		        data.placement = this._options.placement;
		        data._originalPlacement = this._options.placement;

		        // compute the popper and reference offsets and put them inside data.offsets
		        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

		        // get boundaries
		        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

		        data = this.runModifiers(data, this._options.modifiers);

		        if (typeof this.state.updateCallback === 'function') {
		            this.state.updateCallback(data);
		        }

		    };

		    /**
		     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
		     * @method
		     * @memberof Popper
		     * @param {Function} callback
		     */
		    Popper.prototype.onCreate = function(callback) {
		        // the createCallbacks return as first argument the popper instance
		        callback(this);
		        return this;
		    };

		    /**
		     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
		     * used to style popper and its arrow.
		     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
		     * @method
		     * @memberof Popper
		     * @param {Function} callback
		     */
		    Popper.prototype.onUpdate = function(callback) {
		        this.state.updateCallback = callback;
		        return this;
		    };

		    /**
		     * Helper used to generate poppers from a configuration file
		     * @method
		     * @memberof Popper
		     * @param config {Object} configuration
		     * @returns {HTMLElement} popper
		     */
		    Popper.prototype.parse = function(config) {
		        var defaultConfig = {
		            tagName: 'div',
		            classNames: [ 'popper' ],
		            attributes: [],
		            parent: root.document.body,
		            content: '',
		            contentType: 'text',
		            arrowTagName: 'div',
		            arrowClassNames: [ 'popper__arrow' ],
		            arrowAttributes: [ 'x-arrow']
		        };
		        config = Object.assign({}, defaultConfig, config);

		        var d = root.document;

		        var popper = d.createElement(config.tagName);
		        addClassNames(popper, config.classNames);
		        addAttributes(popper, config.attributes);
		        if (config.contentType === 'node') {
		            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
		        }else if (config.contentType === 'html') {
		            popper.innerHTML = config.content;
		        } else {
		            popper.textContent = config.content;
		        }

		        if (config.arrowTagName) {
		            var arrow = d.createElement(config.arrowTagName);
		            addClassNames(arrow, config.arrowClassNames);
		            addAttributes(arrow, config.arrowAttributes);
		            popper.appendChild(arrow);
		        }

		        var parent = config.parent.jquery ? config.parent[0] : config.parent;

		        // if the given parent is a string, use it to match an element
		        // if more than one element is matched, the first one will be used as parent
		        // if no elements are matched, the script will throw an error
		        if (typeof parent === 'string') {
		            parent = d.querySelectorAll(config.parent);
		            if (parent.length > 1) {
		                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
		            }
		            if (parent.length === 0) {
		                throw 'ERROR: the given `parent` doesn\'t exists!';
		            }
		            parent = parent[0];
		        }
		        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
		        // the first one will be used as parent
		        if (parent.length > 1 && parent instanceof Element === false) {
		            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
		            parent = parent[0];
		        }

		        // append the generated popper to its parent
		        parent.appendChild(popper);

		        return popper;

		        /**
		         * Adds class names to the given element
		         * @function
		         * @ignore
		         * @param {HTMLElement} target
		         * @param {Array} classes
		         */
		        function addClassNames(element, classNames) {
		            classNames.forEach(function(className) {
		                element.classList.add(className);
		            });
		        }

		        /**
		         * Adds attributes to the given element
		         * @function
		         * @ignore
		         * @param {HTMLElement} target
		         * @param {Array} attributes
		         * @example
		         * addAttributes(element, [ 'data-info:foobar' ]);
		         */
		        function addAttributes(element, attributes) {
		            attributes.forEach(function(attribute) {
		                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
		            });
		        }

		    };

		    /**
		     * Helper used to get the position which will be applied to the popper
		     * @method
		     * @memberof Popper
		     * @param config {HTMLElement} popper element
		     * @returns {HTMLElement} reference element
		     */
		    Popper.prototype._getPosition = function(popper, reference) {
		        var container = getOffsetParent(reference);

		        // Decide if the popper will be fixed
		        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
		        var isParentFixed = isFixed(reference, container);
		        return isParentFixed ? 'fixed' : 'absolute';
		    };

		    /**
		     * Get offsets to the popper
		     * @method
		     * @memberof Popper
		     * @access private
		     * @param {Element} popper - the popper element
		     * @param {Element} reference - the reference element (the popper will be relative to this)
		     * @returns {Object} An object containing the offsets which will be applied to the popper
		     */
		    Popper.prototype._getOffsets = function(popper, reference, placement) {
		        placement = placement.split('-')[0];
		        var popperOffsets = {};

		        popperOffsets.position = this.state.position;
		        var isParentFixed = popperOffsets.position === 'fixed';

		        //
		        // Get reference element position
		        //
		        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

		        //
		        // Get popper sizes
		        //
		        var popperRect = getOuterSizes(popper);

		        //
		        // Compute offsets of popper
		        //

		        // depending by the popper placement we have to compute its offsets slightly differently
		        if (['right', 'left'].indexOf(placement) !== -1) {
		            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
		            if (placement === 'left') {
		                popperOffsets.left = referenceOffsets.left - popperRect.width;
		            } else {
		                popperOffsets.left = referenceOffsets.right;
		            }
		        } else {
		            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
		            if (placement === 'top') {
		                popperOffsets.top = referenceOffsets.top - popperRect.height;
		            } else {
		                popperOffsets.top = referenceOffsets.bottom;
		            }
		        }

		        // Add width and height to our offsets object
		        popperOffsets.width   = popperRect.width;
		        popperOffsets.height  = popperRect.height;


		        return {
		            popper: popperOffsets,
		            reference: referenceOffsets
		        };
		    };


		    /**
		     * Setup needed event listeners used to update the popper position
		     * @method
		     * @memberof Popper
		     * @access private
		     */
		    Popper.prototype._setupEventListeners = function() {
		        // NOTE: 1 DOM access here
		        this.state.updateBound = this.update.bind(this);
		        root.addEventListener('resize', this.state.updateBound);
		        // if the boundariesElement is window we don't need to listen for the scroll event
		        if (this._options.boundariesElement !== 'window') {
		            var target = getScrollParent(this._reference);
		            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
		            if (target === root.document.body || target === root.document.documentElement) {
		                target = root;
		            }
		            target.addEventListener('scroll', this.state.updateBound);
		        }
		    };

		    /**
		     * Remove event listeners used to update the popper position
		     * @method
		     * @memberof Popper
		     * @access private
		     */
		    Popper.prototype._removeEventListeners = function() {
		        // NOTE: 1 DOM access here
		        root.removeEventListener('resize', this.state.updateBound);
		        if (this._options.boundariesElement !== 'window') {
		            var target = getScrollParent(this._reference);
		            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
		            if (target === root.document.body || target === root.document.documentElement) {
		                target = root;
		            }
		            target.removeEventListener('scroll', this.state.updateBound);
		        }
		        this.state.updateBound = null;
		    };

		    /**
		     * Computed the boundaries limits and return them
		     * @method
		     * @memberof Popper
		     * @access private
		     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
		     * @param {Number} padding - Boundaries padding
		     * @param {Element} boundariesElement - Element used to define the boundaries
		     * @returns {Object} Coordinates of the boundaries
		     */
		    Popper.prototype._getBoundaries = function(data, padding, boundariesElement) {
		        // NOTE: 1 DOM access here
		        var boundaries = {};
		        var width, height;
		        if (boundariesElement === 'window') {
		            var body = root.document.body,
		                html = root.document.documentElement;

		            height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
		            width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );

		            boundaries = {
		                top: 0,
		                right: width,
		                bottom: height,
		                left: 0
		            };
		        } else if (boundariesElement === 'viewport') {
		            var offsetParent = getOffsetParent(this._popper);
		            var scrollParent = getScrollParent(this._popper);
		            var offsetParentRect = getOffsetRect(offsetParent);

		            // if the popper is fixed we don't have to substract scrolling from the boundaries
		            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
		            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

		            boundaries = {
		                top: 0 - (offsetParentRect.top - scrollTop),
		                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
		                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
		                left: 0 - (offsetParentRect.left - scrollLeft)
		            };
		        } else {
		            if (getOffsetParent(this._popper) === boundariesElement) {
		                boundaries = {
		                    top: 0,
		                    left: 0,
		                    right: boundariesElement.clientWidth,
		                    bottom: boundariesElement.clientHeight
		                };
		            } else {
		                boundaries = getOffsetRect(boundariesElement);
		            }
		        }
		        boundaries.left += padding;
		        boundaries.right -= padding;
		        boundaries.top = boundaries.top + padding;
		        boundaries.bottom = boundaries.bottom - padding;
		        return boundaries;
		    };


		    /**
		     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
		     * @method
		     * @memberof Popper
		     * @access public
		     * @param {Object} data
		     * @param {Array} modifiers
		     * @param {Function} ends
		     */
		    Popper.prototype.runModifiers = function(data, modifiers, ends) {
		        var modifiersToRun = modifiers.slice();
		        if (ends !== undefined) {
		            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
		        }

		        modifiersToRun.forEach(function(modifier) {
		            if (isFunction(modifier)) {
		                data = modifier.call(this, data);
		            }
		        }.bind(this));

		        return data;
		    };

		    /**
		     * Helper used to know if the given modifier depends from another one.
		     * @method
		     * @memberof Popper
		     * @returns {Boolean}
		     */

		    Popper.prototype.isModifierRequired = function(requesting, requested) {
		        var index = getArrayKeyIndex(this._options.modifiers, requesting);
		        return !!this._options.modifiers.slice(0, index).filter(function(modifier) {
		            return modifier === requested;
		        }).length;
		    };

		    //
		    // Modifiers
		    //

		    /**
		     * Modifiers list
		     * @namespace Popper.modifiers
		     * @memberof Popper
		     * @type {Object}
		     */
		    Popper.prototype.modifiers = {};

		    /**
		     * Apply the computed styles to the popper element
		     * @method
		     * @memberof Popper.modifiers
		     * @argument {Object} data - The data object generated by `update` method
		     * @returns {Object} The same data object
		     */
		    Popper.prototype.modifiers.applyStyle = function(data) {
		        // apply the final offsets to the popper
		        // NOTE: 1 DOM access here
		        var styles = {
		            position: data.offsets.popper.position
		        };

		        // round top and left to avoid blurry text
		        var left = Math.round(data.offsets.popper.left);
		        var top = Math.round(data.offsets.popper.top);

		        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
		        // we automatically use the supported prefixed version if needed
		        var prefixedProperty;
		        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
		            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
		            styles.top = 0;
		            styles.left = 0;
		        }
		        // othwerise, we use the standard `left` and `top` properties
		        else {
		            styles.left =left;
		            styles.top = top;
		        }

		        setStyle(this._popper, styles);

		        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
		        // NOTE: 1 DOM access here
		        this._popper.setAttribute('x-placement', data.placement);

		        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
		        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
		            setStyle(data.arrowElement, data.offsets.arrow);
		        }

		        return data;
		    };

		    /**
		     * Modifier used to shift the popper on the start or end of its reference element side
		     * @method
		     * @memberof Popper.modifiers
		     * @argument {Object} data - The data object generated by `update` method
		     * @returns {Object} The data object, properly modified
		     */
		    Popper.prototype.modifiers.shift = function(data) {
		        var placement = data.placement;
		        var basePlacement = placement.split('-')[0];
		        var shiftVariation = placement.split('-')[1];

		        // if shift shiftVariation is specified, run the modifier
		        if (shiftVariation) {
		            var reference = data.offsets.reference;
		            var popper = getPopperClientRect(data.offsets.popper);

		            var shiftOffsets = {
		                y: {
		                    start:  { top: reference.top },
		                    end:    { top: reference.top + reference.height - popper.height }
		                },
		                x: {
		                    start:  { left: reference.left },
		                    end:    { left: reference.left + reference.width - popper.width }
		                }
		            };

		            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

		            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
		        }

		        return data;
		    };


		    /**
		     * Modifier used to make sure the popper does not overflows from it's boundaries
		     * @method
		     * @memberof Popper.modifiers
		     * @argument {Object} data - The data object generated by `update` method
		     * @returns {Object} The data object, properly modified
		     */
		    Popper.prototype.modifiers.preventOverflow = function(data) {
		        var order = this._options.preventOverflowOrder;
		        var popper = getPopperClientRect(data.offsets.popper);

		        var check = {
		            left: function() {
		                var left = popper.left;
		                if (popper.left < data.boundaries.left) {
		                    left = Math.max(popper.left, data.boundaries.left);
		                }
		                return { left: left };
		            },
		            right: function() {
		                var left = popper.left;
		                if (popper.right > data.boundaries.right) {
		                    left = Math.min(popper.left, data.boundaries.right - popper.width);
		                }
		                return { left: left };
		            },
		            top: function() {
		                var top = popper.top;
		                if (popper.top < data.boundaries.top) {
		                    top = Math.max(popper.top, data.boundaries.top);
		                }
		                return { top: top };
		            },
		            bottom: function() {
		                var top = popper.top;
		                if (popper.bottom > data.boundaries.bottom) {
		                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
		                }
		                return { top: top };
		            }
		        };

		        order.forEach(function(direction) {
		            data.offsets.popper = Object.assign(popper, check[direction]());
		        });

		        return data;
		    };

		    /**
		     * Modifier used to make sure the popper is always near its reference
		     * @method
		     * @memberof Popper.modifiers
		     * @argument {Object} data - The data object generated by _update method
		     * @returns {Object} The data object, properly modified
		     */
		    Popper.prototype.modifiers.keepTogether = function(data) {
		        var popper  = getPopperClientRect(data.offsets.popper);
		        var reference = data.offsets.reference;
		        var f = Math.floor;

		        if (popper.right < f(reference.left)) {
		            data.offsets.popper.left = f(reference.left) - popper.width;
		        }
		        if (popper.left > f(reference.right)) {
		            data.offsets.popper.left = f(reference.right);
		        }
		        if (popper.bottom < f(reference.top)) {
		            data.offsets.popper.top = f(reference.top) - popper.height;
		        }
		        if (popper.top > f(reference.bottom)) {
		            data.offsets.popper.top = f(reference.bottom);
		        }

		        return data;
		    };

		    /**
		     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
		     * Requires the `preventOverflow` modifier before it in order to work.
		     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
		     * @method
		     * @memberof Popper.modifiers
		     * @argument {Object} data - The data object generated by _update method
		     * @returns {Object} The data object, properly modified
		     */
		    Popper.prototype.modifiers.flip = function(data) {
		        // check if preventOverflow is in the list of modifiers before the flip modifier.
		        // otherwise flip would not work as expected.
		        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
		            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
		            return data;
		        }

		        if (data.flipped && data.placement === data._originalPlacement) {
		            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
		            return data;
		        }

		        var placement = data.placement.split('-')[0];
		        var placementOpposite = getOppositePlacement(placement);
		        var variation = data.placement.split('-')[1] || '';

		        var flipOrder = [];
		        if(this._options.flipBehavior === 'flip') {
		            flipOrder = [
		                placement,
		                placementOpposite
		            ];
		        } else {
		            flipOrder = this._options.flipBehavior;
		        }

		        flipOrder.forEach(function(step, index) {
		            if (placement !== step || flipOrder.length === index + 1) {
		                return;
		            }

		            placement = data.placement.split('-')[0];
		            placementOpposite = getOppositePlacement(placement);

		            var popperOffsets = getPopperClientRect(data.offsets.popper);

		            // this boolean is used to distinguish right and bottom from top and left
		            // they need different computations to get flipped
		            var a = ['right', 'bottom'].indexOf(placement) !== -1;

		            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
		            if (
		                a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) ||
		                !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])
		            ) {
		                // we'll use this boolean to detect any flip loop
		                data.flipped = true;
		                data.placement = flipOrder[index + 1];
		                if (variation) {
		                    data.placement += '-' + variation;
		                }
		                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

		                data = this.runModifiers(data, this._options.modifiers, this._flip);
		            }
		        }.bind(this));
		        return data;
		    };

		    /**
		     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
		     * The offsets will shift the popper on the side of its reference element.
		     * @method
		     * @memberof Popper.modifiers
		     * @argument {Object} data - The data object generated by _update method
		     * @returns {Object} The data object, properly modified
		     */
		    Popper.prototype.modifiers.offset = function(data) {
		        var offset = this._options.offset;
		        var popper  = data.offsets.popper;

		        if (data.placement.indexOf('left') !== -1) {
		            popper.top -= offset;
		        }
		        else if (data.placement.indexOf('right') !== -1) {
		            popper.top += offset;
		        }
		        else if (data.placement.indexOf('top') !== -1) {
		            popper.left -= offset;
		        }
		        else if (data.placement.indexOf('bottom') !== -1) {
		            popper.left += offset;
		        }
		        return data;
		    };

		    /**
		     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
		     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
		     * @method
		     * @memberof Popper.modifiers
		     * @argument {Object} data - The data object generated by _update method
		     * @returns {Object} The data object, properly modified
		     */
		    Popper.prototype.modifiers.arrow = function(data) {
		        var arrow  = this._options.arrowElement;

		        // if the arrowElement is a string, suppose it's a CSS selector
		        if (typeof arrow === 'string') {
		            arrow = this._popper.querySelector(arrow);
		        }

		        // if arrow element is not found, don't run the modifier
		        if (!arrow) {
		            return data;
		        }

		        // the arrow element must be child of its popper
		        if (!this._popper.contains(arrow)) {
		            console.warn('WARNING: `arrowElement` must be child of its popper element!');
		            return data;
		        }

		        // arrow depends on keepTogether in order to work
		        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
		            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
		            return data;
		        }

		        var arrowStyle  = {};
		        var placement   = data.placement.split('-')[0];
		        var popper      = getPopperClientRect(data.offsets.popper);
		        var reference   = data.offsets.reference;
		        var isVertical  = ['left', 'right'].indexOf(placement) !== -1;

		        var len         = isVertical ? 'height' : 'width';
		        var side        = isVertical ? 'top' : 'left';
		        var altSide     = isVertical ? 'left' : 'top';
		        var opSide      = isVertical ? 'bottom' : 'right';
		        var arrowSize   = getOuterSizes(arrow)[len];

		        //
		        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
		        //

		        // top/left side
		        if (reference[opSide] - arrowSize < popper[side]) {
		            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
		        }
		        // bottom/right side
		        if (reference[side] + arrowSize > popper[opSide]) {
		            data.offsets.popper[side] += (reference[side] + arrowSize) - popper[opSide];
		        }

		        // compute center of the popper
		        var center = reference[side] + (reference[len] / 2) - (arrowSize / 2);

		        var sideValue = center - popper[side];

		        // prevent arrow from being placed not contiguously to its popper
		        sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
		        arrowStyle[side] = sideValue;
		        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

		        data.offsets.arrow = arrowStyle;
		        data.arrowElement = arrow;

		        return data;
		    };


		    //
		    // Helpers
		    //

		    /**
		     * Get the outer sizes of the given element (offset size + margins)
		     * @function
		     * @ignore
		     * @argument {Element} element
		     * @returns {Object} object containing width and height properties
		     */
		    function getOuterSizes(element) {
		        // NOTE: 1 DOM access here
		        var _display = element.style.display, _visibility = element.style.visibility;
		        element.style.display = 'block'; element.style.visibility = 'hidden';
		        var calcWidthToForceRepaint = element.offsetWidth;

		        // original method
		        var styles = root.getComputedStyle(element);
		        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
		        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
		        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

		        // reset element styles
		        element.style.display = _display; element.style.visibility = _visibility;
		        return result;
		    }

		    /**
		     * Get the opposite placement of the given one/
		     * @function
		     * @ignore
		     * @argument {String} placement
		     * @returns {String} flipped placement
		     */
		    function getOppositePlacement(placement) {
		        var hash = {left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
		        return placement.replace(/left|right|bottom|top/g, function(matched){
		            return hash[matched];
		        });
		    }

		    /**
		     * Given the popper offsets, generate an output similar to getBoundingClientRect
		     * @function
		     * @ignore
		     * @argument {Object} popperOffsets
		     * @returns {Object} ClientRect like output
		     */
		    function getPopperClientRect(popperOffsets) {
		        var offsets = Object.assign({}, popperOffsets);
		        offsets.right = offsets.left + offsets.width;
		        offsets.bottom = offsets.top + offsets.height;
		        return offsets;
		    }

		    /**
		     * Given an array and the key to find, returns its index
		     * @function
		     * @ignore
		     * @argument {Array} arr
		     * @argument keyToFind
		     * @returns index or null
		     */
		    function getArrayKeyIndex(arr, keyToFind) {
		        var i = 0, key;
		        for (key in arr) {
		            if (arr[key] === keyToFind) {
		                return i;
		            }
		            i++;
		        }
		        return null;
		    }

		    /**
		     * Get CSS computed property of the given element
		     * @function
		     * @ignore
		     * @argument {Eement} element
		     * @argument {String} property
		     */
		    function getStyleComputedProperty(element, property) {
		        // NOTE: 1 DOM access here
		        var css = root.getComputedStyle(element, null);
		        return css[property];
		    }

		    /**
		     * Returns the offset parent of the given element
		     * @function
		     * @ignore
		     * @argument {Element} element
		     * @returns {Element} offset parent
		     */
		    function getOffsetParent(element) {
		        // NOTE: 1 DOM access here
		        var offsetParent = element.offsetParent;
		        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
		    }

		    /**
		     * Returns the scrolling parent of the given element
		     * @function
		     * @ignore
		     * @argument {Element} element
		     * @returns {Element} offset parent
		     */
		    function getScrollParent(element) {
		        if (element === root.document) {
		            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
		            // greater than 0 and return the proper element
		            if (root.document.body.scrollTop) {
		                return root.document.body;
		            } else {
		                return root.document.documentElement;
		            }
		        }

		        // Firefox want us to check `-x` and `-y` variations as well
		        if (
		            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 ||
		            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 ||
		            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1
		        ) {
		            return element;
		        }
		        return element.parentNode ? getScrollParent(element.parentNode) : element;
		    }

		    /**
		     * Check if the given element is fixed or is inside a fixed parent
		     * @function
		     * @ignore
		     * @argument {Element} element
		     * @argument {Element} customContainer
		     * @returns {Boolean} answer to "isFixed?"
		     */
		    function isFixed(element) {
		        if (element === root.document.body) {
		            return false;
		        }
		        if (getStyleComputedProperty(element, 'position') === 'fixed') {
		            return true;
		        }
		        return element.parentNode ? isFixed(element.parentNode) : element;
		    }

		    /**
		     * Set the style to the given popper
		     * @function
		     * @ignore
		     * @argument {Element} element - Element to apply the style to
		     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
		     */
		    function setStyle(element, styles) {
		        function is_numeric(n) {
		            return (n !== '' && !isNaN(parseFloat(n)) && isFinite(n));
		        }
		        Object.keys(styles).forEach(function(prop) {
		            var unit = '';
		            // add unit if the value is numeric and is one of the following
		            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
		                unit = 'px';
		            }
		            element.style[prop] = styles[prop] + unit;
		        });
		    }

		    /**
		     * Check if the given variable is a function
		     * @function
		     * @ignore
		     * @argument {Element} element - Element to check
		     * @returns {Boolean} answer to: is a function?
		     */
		    function isFunction(functionToCheck) {
		        var getType = {};
		        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
		    }

		    /**
		     * Get the position of the given element, relative to its offset parent
		     * @function
		     * @ignore
		     * @param {Element} element
		     * @return {Object} position - Coordinates of the element and its `scrollTop`
		     */
		    function getOffsetRect(element) {
		        var elementRect = {
		            width: element.offsetWidth,
		            height: element.offsetHeight,
		            left: element.offsetLeft,
		            top: element.offsetTop
		        };

		        elementRect.right = elementRect.left + elementRect.width;
		        elementRect.bottom = elementRect.top + elementRect.height;

		        // position
		        return elementRect;
		    }

		    /**
		     * Get bounding client rect of given element
		     * @function
		     * @ignore
		     * @param {HTMLElement} element
		     * @return {Object} client rect
		     */
		    function getBoundingClientRect(element) {
		        var rect = element.getBoundingClientRect();
		        return {
		            left: rect.left,
		            top: rect.top,
		            right: rect.right,
		            bottom: rect.bottom,
		            width: rect.right - rect.left,
		            height: rect.bottom - rect.top
		        };
		    }

		    /**
		     * Given an element and one of its parents, return the offset
		     * @function
		     * @ignore
		     * @param {HTMLElement} element
		     * @param {HTMLElement} parent
		     * @return {Object} rect
		     */
		    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
		        var elementRect = getBoundingClientRect(element);
		        var parentRect = getBoundingClientRect(parent);

		        if (fixed) {
		            var scrollParent = getScrollParent(parent);
		            parentRect.top += scrollParent.scrollTop;
		            parentRect.bottom += scrollParent.scrollTop;
		            parentRect.left += scrollParent.scrollLeft;
		            parentRect.right += scrollParent.scrollLeft;
		        }

		        var rect = {
		            top: elementRect.top - parentRect.top ,
		            left: elementRect.left - parentRect.left ,
		            bottom: (elementRect.top - parentRect.top) + elementRect.height,
		            right: (elementRect.left - parentRect.left) + elementRect.width,
		            width: elementRect.width,
		            height: elementRect.height
		        };
		        return rect;
		    }

		    /**
		     * Get the prefixed supported property name
		     * @function
		     * @ignore
		     * @argument {String} property (camelCase)
		     * @returns {String} prefixed property (camelCase)
		     */
		    function getSupportedPropertyName(property) {
		        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

		        for (var i = 0; i < prefixes.length; i++) {
		            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
		            if (typeof root.document.body.style[toCheck] !== 'undefined') {
		                return toCheck;
		            }
		        }
		        return null;
		    }

		    /**
		     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
		     * objects to a target object. It will return the target object.
		     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
		     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
		     * @function
		     * @ignore
		     */
		    if (!Object.assign) {
		        Object.defineProperty(Object, 'assign', {
		            enumerable: false,
		            configurable: true,
		            writable: true,
		            value: function(target) {
		                if (target === undefined || target === null) {
		                    throw new TypeError('Cannot convert first argument to object');
		                }

		                var to = Object(target);
		                for (var i = 1; i < arguments.length; i++) {
		                    var nextSource = arguments[i];
		                    if (nextSource === undefined || nextSource === null) {
		                        continue;
		                    }
		                    nextSource = Object(nextSource);

		                    var keysArray = Object.keys(nextSource);
		                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
		                        var nextKey = keysArray[nextIndex];
		                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
		                        if (desc !== undefined && desc.enumerable) {
		                            to[nextKey] = nextSource[nextKey];
		                        }
		                    }
		                }
		                return to;
		            }
		        });
		    }

		    return Popper;
		}));


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.Navigation = undefined;

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		var _utils = __webpack_require__(5);

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Navigation = exports.Navigation = function () {
			function Navigation(container, clickPrev, clickNext, nbrOfSteps) {
				_classCallCheck(this, Navigation);

				this._container = container;
				this.clickPrev = clickPrev;
				this.clickNext = clickNext;
				this._nbrOfSteps = nbrOfSteps;
				this._draw();
			}

			_createClass(Navigation, [{
				key: "_draw",
				value: function _draw() {
					var nav = document.createElement("div");
					nav.className = "ig-nav-container";
					nav.innerHTML = '<div class="ig-nav">' + '<div class="ig-nav-btn-group">' + '<div class="ig-nav-btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>' +
					// '<div class="ig-nav-btn"><i class="fa fa-stop-circle" aria-hidden="true"></i></div>'+
					'<div class="ig-nav-btn"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>' + '</div>' + '</div>';
					var btnPrev = nav.querySelectorAll(".ig-nav-btn")[0];
					btnPrev.onclick = this.clickPrev;
					btnPrev.ontouchstart = this.clickPrev;
					this._btnPrev = btnPrev;

					var btnNext = nav.querySelectorAll(".ig-nav-btn")[1];
					btnNext.onclick = this.clickNext;
					btnNext.ontouchstart = this.clickNext;
					this._btnNext = btnNext;
					this._container.appendChild(nav);
					this._tag = nav;
				}
			}, {
				key: "updateGui",
				value: function updateGui(step) {
					var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var btnNext = this._btnNext,
					    btnPrev = this._btnPrev;

					var orgDisplay = "inline-block";
					switch (step) {
						case 0:
							// Hide btnPrev on first step, unless...
							if (!config.btnLeftLabel) {
								btnPrev.style.display = "none";
							}
							break;
						case this._nbrOfSteps - 1:
							// Hide btnNext on last step, unless...
							if (!config.btnRightLabel) {
								btnNext.style.display = "none";
							}
							break;
						default:
							btnPrev.style.display = orgDisplay;
							btnNext.style.display = orgDisplay;
					}

					if (btnNext.childNodes.length > 1) {
						// Remove the text node if any
						btnNext.removeChild(btnNext.firstChild);
					}
					if (btnPrev.childNodes.length > 1) {
						// Remove the text node if any
						btnPrev.removeChild(btnPrev.lastChild);
					}

					if (config.btnLeftLabel) {
						var textNode = document.createTextNode(" " + config.btnLeftLabel);
						btnPrev.appendChild(textNode);
					}
					if (config.btnRightLabel) {
						var _textNode = document.createTextNode(config.btnRightLabel + " ");
						btnNext.insertBefore(_textNode, btnNext.firstChild);
					}
					// if (config.btnLeftIcon) {
					var iconPrev = btnPrev.querySelector("i");
					iconPrev.className = "";
					if (config.btnLeftIcon !== false) {
						(0, _utils.addClass)(iconPrev, typeof config.btnLeftIcon === "string" ? config.btnLeftIcon : "fa fa-arrow-left");
					}
					// }
					// if (config.btnRightIcon) {
					var iconNext = btnNext.querySelector("i");
					iconNext.className = "";
					if (config.btnRightIcon !== false) {
						(0, _utils.addClass)(iconNext, typeof config.btnRightIcon === "string" ? config.btnRightIcon : "fa fa-arrow-right");
					}
					// }
				}
			}]);

			return Navigation;
		}();

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.addClass = addClass;
		exports.removeClass = removeClass;
		exports.tagIsVisible = tagIsVisible;
		function addClass(el, className) {
			el.className = el.className.split(" ").concat([className]).join(" ");
		}
		function removeClass(el, className) {
			el.className = el.className.split(" ").splice(className, 1).join(" ");
		}

		function tagIsVisible(el) {
			return !!el && el.offsetParent !== null && el.style.display !== "none" && el.style.visibility !== "hidden";
		}

	/***/ }
	/******/ ])
	});
	;

/***/ }
/******/ ]);
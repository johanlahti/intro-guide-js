import { InfoBox } from "./InfoBox"
import { Navigation } from "./Navigation"
// import { Tooltip } from "Tooltip"
import * as utils from "./utils"
import { defaultConfig } from "./defaultConfig"



export class IntroGuide {
	constructor(container, config) {
		this._scrollOffsetX = 0;
		this._scrollOffsetY = 0;
		this._container = container;
		this._container.className = "ig-maincontainer";
		this._config = this._preProcessConfig(config);
		// this._initGui();
		this._stepIndex = this._config.stepIndex || 0;
		this._bindEvents();
	}

	_preProcessConfig(config) {
		return Object.assign({}, defaultConfig, config);
	}

	_bindEvents() {
		this._handleResizeBound = this._handleResizeBound || this._handleResize.bind(this);
		this._onKeyDownBound = this._onKeyDownBound || this._onKeyDown.bind(this);
		this._onScrollBound = this._onScrollBound || this._onScroll.bind(this);

		window.addEventListener("resize", this._handleResizeBound);
		window.addEventListener("keydown", this._onKeyDownBound);
		window.addEventListener("scroll", this._onScrollBound);
		
	}
	_unbindEvents() {
		window.removeEventListener('resize', this._handleResizeBound);
		window.removeEventListener('keydown', this._onKeyDownBound);
		window.removeEventListener("scroll", this._onScrollBound);
	}


	_onKeyDown(e) {
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

	_allowScroll(allow) {
		if (allow === true) {
			window.removeEventListener("scroll", this._onScrollBound);
		}
		else {
			window.addEventListener("scroll", this._onScrollBound);
		}
	}

	_onScroll(e) {
		console.log("scroll: "+this._scrollOffsetY);
		window.scrollTo(this._scrollOffsetX, this._scrollOffsetY);
	}

	_handleResize() {
		this.goToStep(this._stepIndex);
		// const c = this._getStepConfig(this._stepIndex);
		// if (this._checkStepConfig( c ) === false) {
		// 	return;
		// }
		// var position = this._infoBox._updatePosition(c.selector, c);
		// this._drawHole(position && position.reference ? position.reference : null);
	}

	_start() {
		if (!this._isActive) {
			this._isActive = true;
		}
		if (this._container.children.length === 0) {
			this._initGui();
		}
		this._container.style.display = "block";
		this.goToStep(this._stepIndex);
		utils.addClass(this._container, "ig-fadein");
		// setTimeout(() => {
		// 	// this._handleResize();
		// }, 300);
	}

	start() {
		if (document.readyState !== "complete") {
			if (!document.addEventListener) {
				//  IE <= 8
				document.attachEvent("onreadystatechange", () => {
					if ( document.readyState === "complete" ) {
						this._start();
					}
				});
			}
			else {
				// Not too un-modern browsers
				document.addEventListener("DOMContentLoaded", this._start.bind(this));
			}
		}
		else {
			this._start();
		}
	}

	stop() {
		if (this._isActive) {
			utils.removeClass(this._container, "ig-fadein");
			setTimeout(() => {
				this._unbindEvents();
				this._nav = null;
				this._canvas = null;
				this._btnClose = null;
				this._infoBox = null;
				this._container.style.display = "none";
				this._container.innerHTML = "";
			}, 300);
			if (this._config.onStop) {
				this._config.onStop();
			}
		}
		this._isActive = false;
	}

	restart() {

	}

	_checkStepConfig(stepConfig) {
		const proceed = () => {
			let incrementor = (this._prevStepIndex === null || this._prevStepIndex <= this._stepIndex) ? 1 : -1;
			this.goToStep(this._stepIndex + incrementor);
		}
		if (stepConfig.selector) {
			let tag = document.querySelector(stepConfig.selector);
			if (utils.tagIsVisible(tag) === false) {
				proceed();
				return false;
			}
		}
		// var ok = stepConfig.condition ? stepConfig.condition() : true;
		// if (ok === false) {
		// 	proceed();
		// }
		return true;
	}

	scrollTo(x, y) {
		this._allowScroll(true);
		window.scrollTo(x, y);
		this._allowScroll(false);
	}

	goToStep(step) {
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
		const stepConfig = this._getStepConfig(step);

		if (this._prevStepIndex) {
			// Call afterHide function if any
			const prevStepConfig = this._getStepConfig(this._prevStepIndex);
			if (prevStepConfig && prevStepConfig.afterHide) {
				prevStepConfig.afterHide(utils);
			}
		}

		// Start from scroll == 0
		this._scrollOffsetX = 0;
		this._scrollOffsetY = 0;
		// this.scrollTo(this._scrollOffsetX, this._scrollOffsetY);

		switch (step) {
			case 0:
				if ( !this._getStepConfig(step).btnLeftLabel ) {
					navBtnLeft.style.display = "none";
				}
				break;
			case -1:
				return this.goToStep(step+1);
			case this._config.steps.length:
				return this.stop();
				// return this.goToStep(step-1);
			default:
				navBtnLeft.style.display = navBtnRight.style.display;
				// if (step < 0) {
				// 	this._stepIndex = 0;
				// 	return;
				// 	// this.goToStep(this._stepIndex);
				// 	// return this.stop();
				// 	// TODO: option "go to end"
				// 	// step = this._config.steps.length - 1;
				// }
				// else if (step > this._config.steps.length - 1) {
				// 	return this.stop();
				// 	// TODO: option "go to end"
				// 	// step = 0;
				// }
		}
		if (this._checkStepConfig(stepConfig) === false) {
			return;
		}

		
		function beforeShowCallback(ms=null) {
			const beforeShowTimeoutFunc = () => {
				// if (this._checkStepConfig(stepConfig) === false) {
				// 	return;
				// }

				this.scrollTo(this._scrollOffsetX, this._scrollOffsetY);
				this._nav.updateGui(step, stepConfig);

				var positionObj = this._infoBox.updateGui(stepConfig.title, stepConfig.description, stepConfig.selector, "static"); //this._infoBox._tag.style.position); //stepConfig.popperOptions);
				var position = positionObj && positionObj.reference ? positionObj.reference : null;
				if (position && position.top) {
					const marginY = 100;	// TODO: Move to options?
					const marginX = 0;		// TODO: Move to options?
					const isOutsideViewportY = window.innerHeight - position.top + window.pageYOffset - marginY < 0;
					const isOutsideViewportX = window.innerWidth - position.left + window.pageXOffset - marginX < 0;
					if (isOutsideViewportX) {
						this._scrollOffsetX = position.left - marginX;
						
						// We need to adjust left and right to the viewport's offset (since the canvas only extends over the viewport)
						position.left -= this._scrollOffsetX;
						position.right -= this._scrollOffsetX;
					}
					if (isOutsideViewportY) {
						this._scrollOffsetY = position.top - marginY;
						
						// We need to adjust top and bottom to the viewport's offset (since the canvas only extends over the viewport)
						position.top -= this._scrollOffsetY;
						position.bottom -= this._scrollOffsetY;
						
					}
					if (isOutsideViewportX || isOutsideViewportY) {
						// Scroll us so we can see the thing
						this.scrollTo(this._scrollOffsetX, this._scrollOffsetY);
					}
				}


				this._drawHole( position  );
				this._navDelayTimeout = setTimeout(() => {
					this._nav._tag.style.visibility = "visible";
					// utils.removeClass(this._nav._tag, "ig-hide");
					utils.addClass(this._nav._tag, "ig-fadein-nav");
				}, 500);
				return null;
			}

			this._beforeShowTimeout = ms ? setTimeout(beforeShowTimeoutFunc, ms) : beforeShowTimeoutFunc();

		}
		// const goingForward = !this._prevStepIndex || this._prevStepIndex < this._stepIndex;

		if (stepConfig.beforeShow) {  // && goingForward) {
			stepConfig.beforeShow(beforeShowCallback.bind(this), utils);
		}
		else {
			beforeShowCallback.call(this);
		}
	}

	_getStepConfig(stepIndex) {
		const c = this._config;
		let stepConfig = c.steps[stepIndex];
		switch (stepIndex) {
			case c.steps.length - 1:
				// Apply default settings for last step
				stepConfig = Object.assign({}, {
					btnRightLabel: c.btnRightLabelEnd,
					btnRightIcon: c.btnRightIconEnd
				}, stepConfig);
				break;
		}
		return stepConfig;
	}


	_initGui() {
		var c = document.createElement("canvas");
		c.id = "ig-canvas-with-hole";
		c.className = "ig-canvas-with-hole";
		this._canvas = c;
		this._infoBox = new InfoBox(this._container);
		this._container.appendChild(this._canvas);
		this._container.style.zIndex = this._container.style.zIndex || "2000";
		this._nav = new Navigation(this._infoBox._tag,
			(e) => {
				this.goToStep( this._stepIndex - 1 );
				this._infoBox._tag.focus();
			},
			(e) => {
				// if (this._stepIndex > this._config.steps.length - 1) {
				// 	return this.stop();	
				// }
				this.goToStep( this._stepIndex + 1 );
				this._infoBox._tag.focus();
			},
			this._config.steps.length
		)

		this._btnClose = document.createElement("div");
		this._btnClose.className = "ig-btnclose";
		this._btnClose.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
		this._btnClose.onclick = (e) => this.stop();
		this._btnClose.ontouchstart = (e) => this.stop();
		this._container.appendChild(this._btnClose);


	}

	_drawHole(obj=null) {
		// var bbox = this._createBboxFromElement( document.querySelector( this._getStepConfig(this._stepIndex).selector ) )
		var bbox;
		if (obj) {
			const padding = 5;
			bbox = [obj.left-padding, obj.top-padding, obj.right+padding, obj.bottom+padding];
		}
		this._drawCanvasHole( bbox );
	}

	_createBboxFromElement(tag) {
		var padding = 2;
		var h = tag.clientHeight,
			w = tag.clientWidth,
			left = tag.offsetLeft,
			top = tag.offsetTop;
		return [
			left - padding,
			top - padding,
			left + w + padding,
			top + h + padding
		];
	}

	_drawCanvasHole(bbox=null) {

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
		ctx.beginPath(); // needed for IE and Edge
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

}
	

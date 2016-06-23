import { InfoBox } from "./InfoBox"
import { Navigation } from "./Navigation"
// import { Tooltip } from "Tooltip"


function addClass(el, className) {
	el.className = el.className.split(" ").concat([className]).join(" ");
}
function removeClass(el, className) {
	el.className = el.className.split(" ").splice(className, 1).join(" ");
}

export class IntroGuide {
	constructor(container, config) {
		this._container = container;
		this._container.className = "ig-maincontainer";
		this._config = config;
		this._initGui();
		this._stepIndex = this._config.stepIndex || 0;
		this._bindEvents();

	}

	_bindEvents() {
		this._handleResizeBound = this._handleResizeBound || this._handleResize.bind(this);
		this._onKeyDownBound = this._onKeyDownBound || this._onKeyDown.bind(this);
		window.addEventListener("resize", this._handleResizeBound);
		window.addEventListener("keydown", this._onKeyDownBound);
	}
	_unbindEvents() {
		window.removeEventListener('resize', this._handleResizeBound);
		window.removeEventListener('keydown', this._onKeyDownBound);
	}

	_onKeyDown(e) {
		switch (e.keyCode) {
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

	_handleResize() {
		this._drawHole();
	}

	start() {
		if (document.readyState !== "complete") {
			document.addEventListener("DOMContentLoaded", this._start.bind(this));
		}
		else {
			this._start();
		}
	}

	_start() {
		if (this._container.children.length === 0) {
			this._initGui();
		}
		this.goToStep(this._stepIndex);
		setTimeout(() => {
			addClass(this._container, "ig-fadein");
			// var tooltip1 = new Tooltip(
			// 	document.querySelectorAll(".ig-nav-btn")[1],
			// 	"Klicka här för att komma vidare"
			// );
			// var tooltip2 = new Tooltip(
			// 		document.querySelectorAll(".ig-btnclose")[1],
			// 		"Klicka här för att avsluta introduktionen"
			// 	);

		}, 300);


	}

	stop() {
		setTimeout(() => {
			this._unbindEvents();
			this._nav = null;
			this._canvas = null;
			this._btnClose = null;
			this._infoBox = null;
			this._container.innerHTML = "";
		}, 300);
	}

	restart() {

	}

	goToStep(step) {
		if (this._navDelayTimeout) {
			clearTimeout(this._navDelayTimeout);
		}

		removeClass(this._nav._tag, "ig-fadein-nav");
		this._nav._tag.style.visibility = "hidden";
		if (step < 0) {
			step = this._config.steps.length - 1;
		}
		else if (step > this._config.steps.length - 1) {
			step = 0;
		}
		this._stepIndex = step;
		const stepConfig = this._getStepConfig(step);
		var position = this._infoBox.updateGui(stepConfig.selector, stepConfig.title, stepConfig.description, "absolute"); //stepConfig.popperOptions);
		this._drawHole( position.reference );
		this._navDelayTimeout = setTimeout(() => {
			this._nav._tag.style.visibility = "visible";
			// removeClass(this._nav._tag, "ig-hide");
			addClass(this._nav._tag, "ig-fadein-nav");
		}, 500);
	}

	_getStepConfig(stepIndex) {
		return this._config.steps[stepIndex];
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
				this.goToStep( this._stepIndex + 1 );
				this._infoBox._tag.focus();
			}
		)

		this._btnClose = document.createElement("div");
		this._btnClose.className = "ig-btnclose";
		this._btnClose.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
		this._btnClose.onclick = (e) => this.stop();
		this._btnClose.ontouchstart = (e) => this.stop();
		this._container.appendChild(this._btnClose);


	}

	_drawHole(obj) {
		// var bbox = this._createBboxFromElement( document.querySelector( this._getStepConfig(this._stepIndex).selector ) )
		const padding = 10;
		var bbox = [obj.left-padding, obj.top-padding, obj.right+padding, obj.bottom+padding];
		this._drawCanvasHole( bbox );
	}

	_createBboxFromElement(tag) {
		var padding = 10;
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

	_drawCanvasHole(bbox) {

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

}
	

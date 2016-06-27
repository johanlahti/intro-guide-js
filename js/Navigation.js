import { addClass, removeClass } from "./utils"


export class Navigation {
	constructor(container, clickPrev, clickNext, nbrOfSteps) {
		this._container = container;
		this.clickPrev = clickPrev;
		this.clickNext = clickNext;
		this._nbrOfSteps = nbrOfSteps;
		this._draw();
	}

	_draw() {
		var nav = document.createElement("div");
		nav.className = "ig-nav-container";
		nav.innerHTML = 
			'<div class="ig-nav">'+
				'<div class="ig-nav-btn-group">'+
					'<div class="ig-nav-btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>'+
					// '<div class="ig-nav-btn"><i class="fa fa-stop-circle" aria-hidden="true"></i></div>'+
					'<div class="ig-nav-btn"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>'+
				'</div>'+
			'</div>';
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


	updateGui(step, config={}) {
		var btnNext = this._btnNext,
			btnPrev = this._btnPrev;

		const orgDisplay = "inline-block";
		switch (step) {
			case 0:
				// Hide btnPrev on first step, unless...
				if ( !config.btnLeftLabel ) {
					btnPrev.style.display = "none";
				}
				break;
			case this._nbrOfSteps - 1:
				// Hide btnNext on last step, unless...
				if ( !config.btnRightLabel ) {
					btnNext.style.display = "none";
				}
				break;
			default:
				btnPrev.style.display = orgDisplay;
				btnNext.style.display = orgDisplay;
		}
		
		if (btnNext.childNodes.length > 1) {
			// Remove the text node if any
			btnNext.removeChild( btnNext.firstChild );
		}
		if (btnPrev.childNodes.length > 1) {
			// Remove the text node if any
			btnPrev.removeChild( btnPrev.lastChild );
		}

		if (config.btnLeftLabel) {
			let textNode = document.createTextNode( " " + config.btnLeftLabel );
			btnPrev.appendChild( textNode );
		}
		if (config.btnRightLabel) {
			let textNode = document.createTextNode( config.btnRightLabel + " ");
			btnNext.insertBefore( textNode, btnNext.firstChild );	
		}
		// if (config.btnLeftIcon) {
		let iconPrev = btnPrev.querySelector("i");
		iconPrev.className = "";
		if (config.btnLeftIcon !== false) {
			addClass(iconPrev, typeof(config.btnLeftIcon) === "string" ? config.btnLeftIcon : "fa fa-arrow-left");
		}
		// }
		// if (config.btnRightIcon) {
		let iconNext = btnNext.querySelector("i");
		iconNext.className = "";
		if (config.btnRightIcon !== false) {
			addClass(iconNext, typeof(config.btnRightIcon) === "string" ? config.btnRightIcon : "fa fa-arrow-right");
		}
		// }

	}
}


			
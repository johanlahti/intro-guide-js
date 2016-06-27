
import Popper from "popper.js"


export class InfoBox {

	constructor(container) {
		this._container = container;
		this._initGui();
	}

	_updatePosition(selector=null, popperOptions={}) {

		if (selector) {
			let referenceTag = document.querySelector( selector );
			var options = Object.assign({
					gpuAcceleration: false
					// offset: 60,
					// placement: "right"
					// flipBehavior: ["right", "top"],
					// boundariesPadding: 100,
					// boundariesElement: document.querySelector("body"),
			}, popperOptions);
			if (!this._popper) {
				this._popper = new Popper(
					referenceTag,
					this._tag,
					options
				);
			}
			else {
				Object.assign(this._popper._options, options);
				this._popper._reference = referenceTag;
				this._popper.update();
			}
			return this._popper._getOffsets(this._popper._popper, this._popper._reference, this._popper._options.placement);
		}
		this._tag.style.left = (window.innerWidth / 2 - this._tag.clientWidth / 2) + "px";
		this._tag.style.top = (window.innerHeight / 2 - this._tag.clientHeight / 2) + "px";

		return null;

	}

	
	updateGui(selector=null, title, description, popperOptions={}) {
		var header = this._tag.querySelector(".ig-infobox-header");
		if (header.childNodes.length) {
			header.removeChild( header.childNodes[0] );
		}
		header.appendChild( document.createTextNode(title) );

		var section = this._tag.querySelector(".ig-infobox-section");
		if (section.childNodes.length) {
			section.removeChild( section.childNodes[0] );
		}
		section.appendChild( document.createTextNode(description) );

		return this._updatePosition( selector, popperOptions );

	}

	_initGui() {
		this._tag = document.createElement("div");
		this._tag.id = "ig-infobox";
		this._tag.className = "ig-infobox";

		let header = document.createElement("h3");
		header.className = "ig-infobox-header";

		let section = document.createElement("section");
		section.className = "ig-infobox-section";

		this._tag.appendChild(header);
		this._tag.appendChild(section);

		this._container.appendChild(this._tag);
		
	}

}
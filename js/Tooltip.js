import Popper from "popper.js"


export class Tooltip {
	constructor(connectTag, text, container) {
		this._container = container || document.querySelector("body");
		this._connectTag = connectTag;
		this._tag = document.createElement("div");
		this._tag.className = "ig-tooltip";
		this._tag.appendChild( document.createTextNode(text) );

		var arrowElement = document.createElement("div");
		arrowElement.className = "ig-tooltip-arrow"
		// arrowElement.setAttribute("x-arrow", "");
		this._tag.appendChild(arrowElement);
		this._container.appendChild(this._tag);

		this._popper = new Popper(
			this._connectTag,
			this._tag,
			{
				placement: 'bottom',
				boundariesElement: this._container,
				gpuAcceleration: true,
				arrowElement: arrowElement
				// offset: -30
			}
		);

	}
}
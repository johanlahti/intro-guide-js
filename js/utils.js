



export function addClass(el, className) {
	el.className = el.className.split(" ").concat([className]).join(" ");
}
export function removeClass(el, className) {
	el.className = el.className.split(" ").splice(className, 1).join(" ");
}

export function tagIsVisible(el) {
	return !(el.offsetWidth <= 0 && el.offsetHeight <= 0 || 
		((el.style && el.style.display) || jQuery.css( el, "display" )) === "none");
}

export function getBrowser() {
	var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	var ieVersion = match ? parseInt(match[1]) : undefined;

	return {
		ie: match,
		ieVersion: ieVersion,
		ie8: ieVersion === 8,
		ie9: ieVersion === 9,
		ie10: ieVersion === 10,
		ie11: ieVersion === 11
	}
}

export function getBoundingRect(tag) {
	if (!tag || !tag.getBoundingClientRect ) {
		return null;
	}
	var _position = tag.getBoundingClientRect();		
	// ClientRect (readonly) -> Object so we can modify its values
	var position = {};
	for (var k in _position) {
		position[k] = _position[k];
	}
	return position;
}




export function addClass(el, className) {
	el.className = el.className.split(" ").concat([className]).join(" ");
}
export function removeClass(el, className) {
	el.className = el.className.split(" ").splice(className, 1).join(" ");
}

export function tagIsVisible(el) {
	return !!el && el.offsetParent !== null && el.style.display !== "none" && el.style.visibility !== "hidden";
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
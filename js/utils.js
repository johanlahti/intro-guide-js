



export function addClass(el, className) {
	el.className = el.className.split(" ").concat([className]).join(" ");
}
export function removeClass(el, className) {
	el.className = el.className.split(" ").splice(className, 1).join(" ");
}

export function tagIsVisible(el) {
	return !!el && el.offsetParent !== null && el.style.display !== "none" && el.style.visibility !== "hidden";
}




export function addClass(el, className) {
	el.className = el.className.split(" ").concat([className]).join(" ");
}
export function removeClass(el, className) {
	el.className = el.className.split(" ").splice(className, 1).join(" ");
}
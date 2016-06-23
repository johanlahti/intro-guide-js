

import { IntroGuide } from "./IntroGuide"



/**
 * A factory function for the class simply instantiating the IntroGuide class.
 * @param  {HTMLTag | String} container
 * @param  {Object} introConfig
 * @return {Class instance}
 */
export function introGuide(container, introConfig) {
	if (!container) return false;
	container = typeof container === "string" ? document.querySelector(container) : container;
	return new IntroGuide(container, introConfig);
}


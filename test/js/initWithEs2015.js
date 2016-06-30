
import { introGuide } from "../../dist/js/bundle"

var introConfig = {
	stepIndex: 0, // starting step index (optional)
	steps: [
		{
			title: "Welcome!",
			description: 'You can use your left/right keys to navigate between the steps',
			selector: null,
			btnRightLabel: "Get started"						// Custom label for this step

		},
		{
			title: "Close button",
			description: "To quit this intro – click this button (or press Escape)",
			selector: ".ig-btnclose i"
		},
		{
			title: "This element",
			description: 'You can tell which element to highlight using a CSS selector',
			selector: ".image.avatar"
		},
		{
			title: "No selector?",
			description: 'Then the text will be centered',
			selector: null
		},
		{
			title: "Element not visible?",
			description: 'If the element is not visible the step will be skipped (Psst! You may not see the next step)',
			selector: null
		},
		{
			title: "Only big screens will render this step",
			description: "Try making the window smaller to see how this step is skipped",
			selector: ".button.small-screen-hide"
		},
		{
			title: "Re-render on resize",
			description: "The GUI will adapt to window resize",
			selector: ".major"
		},
		{
			title: "Before show",
			description: "Do something before the step is rendered by defining a beforeShow function",
			selector: ".major",
			beforeShow: function(callback, utils) {
				var theTag = document.querySelector(".major");
				var tagIsVisible = utils.tagIsVisible( theTag );
				var ms = null; // delay for rendering this step
				if (tagIsVisible) {
					theTag.style.transition = "transform 0.5s";
					theTag.style.transform = "scale(0.5,0.5)";
					ms = 500;
				}
				callback(ms);
			},
			afterHide: function(callback, utils) {
				var theTag = document.querySelector(".major");
				var tagIsVisible = utils.tagIsVisible( theTag );
				var ms = null; // delay for rendering this step
				if (tagIsVisible) {
					theTag.style.transition = null;
					theTag.style.transform = null;
					// ms = 0;
				}
				callback(ms);
			}
		},
		{
			title: "After hide",
			description: "Likewise, you can execute a function when leaving the step",
			selector: ".major",
		},
		{
			title: "Scrolling down",
			description: "We had to scroll down to reach here",
			selector: "article:nth-child(5)"
		},
		{
			title: "Customized buttons",
			description: 'You can customize the buttons\' appearence for each step',
			selector: ".image.avatar",
			btnLeftLabel: "Back",						// Custom label for this step
			btnLeftIcon: "fa fa-chevron-circle-left",	// Custom icon for this step
			btnRightLabel: "Next",						// Custom label for this step
			btnRightIcon: "fa fa-chevron-circle-right"	// Custom icon for this step
		},
		{
			title: "Truely open source",
			description: "intro-guide-js has an MIT License (can be used in commercial projects too!)",
			selector: null,
			btnRightLabel: "Done",						// Custom label for this step
			btnRightIcon: "fa fa-check"	// Custom icon for this step
		},
		{
			title: "Done!",
			description: "Hope you find intro-guide-js useful. Don't hesitate to give feedback or contribute.",
			selector: null,
			btnRightLabel: "Done",						// Custom label for this step
			btnRightIcon: "fa fa-check"	// Custom icon for this step
		}
	]  // (required)
};
var container = document.querySelector("#intro"); // This is where the intro-guide will reside
var myIntroGuide = introGuide(container, introConfig);
myIntroGuide.start();
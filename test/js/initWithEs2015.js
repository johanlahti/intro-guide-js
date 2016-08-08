
import { introGuide } from "../../dist/js/bundle"	// <- Import style for this example only (using local build)
// import { introGuide } from "intro-guide-js"		// <- If you install this package through npm, write the package name like this instead

var introConfig = {
	stepIndex: 0, // starting step index (optional)
	steps: [
		{
			title: "Welcome!",
			description: 'Press the button below or use your left/right keys to navigate',
			selector: null,
			btnLeftLabel: "Stop",								// Custom label for this step
			btnRightLabel: "Get started"						// Custom label for this step

		},
		{
			title: "Close button",
			description: "To quit the intro, click this button or press Escape",
			selector: ".ig-btnclose i"
		},
		{
			title: "This element",
			description: 'Set element to highlight using a CSS selector',
			selector: ".image.avatar"
		},
		{
			title: "No selector?",
			description: 'The text will be centered',
			selector: null
		},
		{
			title: "Element not visible…?",
			description: '…then the step will be skipped (you may not see the next step!)',
			selector: null
		},
		{
			title: "Only big screens will render this step",
			description: "Try making the window smaller and it will proceed to the next step",
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
			afterHide: function(utils) {
				var theTag = document.querySelector(".major");
				var tagIsVisible = utils.tagIsVisible( theTag );
				if (tagIsVisible) {
					theTag.style.transition = null;
					theTag.style.transform = null;
				}
			}
		},
		{
			title: "After hide",
			description: "Likewise, you can execute a function on leave",
			selector: ".major",
		},
		{
			title: "Scrolling down",
			description: "We had to scroll down to reach here",
			selector: "article:nth-child(5)"
		},
		{
			title: "Customized buttons",
			description: 'You can customize the buttons',
			selector: ".image.avatar",
			btnLeftLabel: "Back",						// Custom label for this step
			btnLeftIcon: "fa fa-chevron-circle-left",	// Custom icon for this step
			btnRightLabel: "Next",						// Custom label for this step
			btnRightIcon: "fa fa-chevron-circle-right"	// Custom icon for this step
		},
		{
			title: "Truely open source",
			description: "intro-guide-js has an MIT License",
			selector: null,
			btnRightLabel: "Done",						// Custom label for this step
			btnRightIcon: "fa fa-hand-peace-o"	// Custom icon for this step
		}
	]  // (required)
};
var container = document.querySelector("#intro"); // This is where the intro-guide will reside
var myIntroGuide = introGuide(container, introConfig);
myIntroGuide.start();
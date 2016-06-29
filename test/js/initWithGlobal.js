
var introConfig = {
	stepIndex: 0, // starting step index (optional)
	steps: [
		{
			title: "The title here",
			description: "The description describes some very useful tool. You can use this tool.",
			selector: ".image.avatar"
		},
		{
			title: "The title 2",
			description: "The description 2",
			selector: ".major"
			// popperOptions: {
			// 	placement: "right",
   //  			flipBehavior: ["left", "top", "bottom"]
			// }
		},
		{
			title: "The title 3",
			description: "The description 3",
			selector: ".button"
		}
	]  // (required)
};
var container = document.querySelector("#intro"); // This is where the intro-guide will reside
var myIntroGuide = introGuide.introGuide(container, introConfig);
myIntroGuide.start();
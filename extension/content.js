console.log("Stop Slide Scrolling in Google Presentation loaded")

/**
 * 	Listen for scroll, and if ALT is not pressed, prevent it
 */
window.addEventListener("mousewheel", function(event) {
	if (keys.alt != true)
		event.stopPropagation();
}, true);



// object to track pressed keys
var keys = {
	alt: false,
};

/**
 * 	If keydown detected
 */
document.onkeydown = function(event) {
	if (event.keyCode == 18) keys.alt = true; // alt
	//console.log(event.keyCode,keys);
};
/**
 * 	Reset keys that are no longer pressed
 */
document.onkeyup = function(event) {
	if (event.keyCode == 18) keys.alt = false;
	//console.log(event.keyCode,keys);
};

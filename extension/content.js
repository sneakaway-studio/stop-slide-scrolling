

console.log("Stop Slide Scrolling in Google Presentation loaded");

/**
 * 	Listen for scroll, prevent it
 */
window.addEventListener("mousewheel", function(event) {
    event.stopPropagation();
}, true);

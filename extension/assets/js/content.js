console.log("Stop Slide Scrolling in Google Presentation loaded");


let modifierKey, preventStr;

// get data on load
chrome.runtime.sendMessage({
    sender: "content",
    action: "getData",
}, function(response) {
    // console.log("response", response);
    modifierKey = response.modifierKey || "None";
});

/**
 * 	Listen for scroll, prevent it
 */
window.addEventListener("wheel", function(e) {
    // console.log("wheel event", modifierKey, e);
    preventStr = "";

    if (!modifierKey || modifierKey == "" || modifierKey == "None")
        preventStr = "✅ None";
    else if (modifierKey != "" && modifierKey == "Shift" && e.shiftKey)
        preventStr = "✅ Shift";
    else if (modifierKey != "" && modifierKey == "Alt" && e.altKey)
        preventStr = "✅ Alt";
    else if (modifierKey != "" && modifierKey == "Command" && e.metaKey)
        preventStr = "✅ Command";


    if (preventStr != "") {
        // console.log(preventStr);
        e.stopPropagation();
    }

}, true);

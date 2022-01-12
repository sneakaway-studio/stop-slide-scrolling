chrome.runtime.onInstalled.addListener((details) => {
    console.log("onInstalled details =", details);
});

/**
 * 	Listen for messages from content or popup scripts, run the callback
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    // test
    console.log("request =", request);

    // get
    if (request.action === "getData") {

        // send response
        sendResponse({
            message: "success",
            action: request.action,
            modifierKey: localStorage.getItem("modifierKey") || ""
        });
    }
    // set
    else if (request.action === "setData") {
        // set any data
        localStorage.setItem('modifierKey', request.modifierKey);

        // send response
        sendResponse({
            message: "success",
            action: request.action,
            modifierKey: localStorage.getItem("modifierKey") || ""
        });
    }

    return true;
});

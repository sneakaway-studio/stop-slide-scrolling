/**
 *	Javascript for the popup
 */

let modifierKeySelect;

// once document has loaded...
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    modifierKeySelect = document.getElementById("modifierKey");

    // get data on load
    chrome.runtime.sendMessage({
        sender: "popup",
        action: "getData",
    }, function(response) {
        // displayResponse(response);
        // alert(response.modifierKey);
        modifierKeySelect.value = response.modifierKey;
    });

    // listen for changes
    modifierKeySelect.addEventListener("change", () => {

        let selectedOptionValue = modifierKeySelect.options[modifierKeySelect.selectedIndex].value;
        // alert(selectedOptionValue);

        // send message to background
        chrome.runtime.sendMessage({
            sender: "popup",
            action: "setData",
            modifierKey: selectedOptionValue,
        }, function(response) {
            // displayResponse(response);
        });
    });
    
});

// called after response from background
function displayResponse(response) {
    // display the response object as a string
    document.getElementById("responseField").value = JSON.stringify(response, null, 2);
}

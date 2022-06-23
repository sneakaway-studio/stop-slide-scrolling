/**
 *	Javascript for the popup
 */

let modifierKeySelectEle;

// once document has loaded...
window.addEventListener('DOMContentLoaded', (event) => {
	// console.log('POPUP => DOM fully loaded and parsed');
	loadPopup();
});

function loadPopup() {
	// reference to select element
	modifierKeySelectEle = document.getElementById("modifierKey");

	// get data on load
	chrome.runtime.sendMessage({
		sender: "popup",
		action: "getData",
	}, function(response) {
		// alert(response.modifierKey);
		// console.log('POPUP => loadPopup => response', response);
		// set select field value
		modifierKeySelectEle.value = response.modifierKey;
	});

	// listen for changes
	modifierKeySelectEle.addEventListener("change", () => {
		// get select field value
		let selectedOptionValue = modifierKeySelectEle.options[modifierKeySelectEle.selectedIndex].value;
		// alert(selectedOptionValue);

		// send message to background
		chrome.runtime.sendMessage({
			sender: "popup",
			action: "setData",
			modifierKey: selectedOptionValue,
		}, function(response) {
			// console.log('POPUP => change => response', response);
			displayResponse(response);
		});
	});

}

// called after response from background
function displayResponse(response) {
	if (response.message == "success" && response.modifierKey) {
		// TEST => display the response object as a string
		// document.getElementById("responseMsgTest").value = JSON.stringify(response, null, 2);
		// display then hide success message
		document.getElementById("responseMsg").innerHTML = `Modifier key set to ${response.modifierKey}`;
		setTimeout(function() {
			document.getElementById("responseMsg").innerHTML = "";
		}, 1500);
	}
}

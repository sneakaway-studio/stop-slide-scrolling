const welcome = `
===================================================
=============== Stop Slide Scrolling ==============
===================================================
`;

chrome.runtime.onInstalled.addListener((details) => {
	console.log(welcome);
	console.log("onInstalled details =", details);
});


const getStorageData = key =>
	new Promise((resolve, reject) =>
		chrome.storage.sync.get(key, result => {
			// console.log("getStorageData() result =", result);
			if (chrome.runtime.lastError)
				reject(Error(chrome.runtime.lastError.message));
			else resolve(result);
		})
	);

const setStorageData = data =>
	new Promise((resolve, reject) =>
		chrome.storage.sync.set(data, () => {
			console.log("setStorageData() data =", data);
			if (chrome.runtime.lastError)
				reject(Error(chrome.runtime.lastError.message));
			else resolve();
		})
	);


/**
 * 	Listen for messages from content or popup scripts, run the callback
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	// test
	// console.log("request =", request);

	// get
	if (request.action === "getData") {
		// async / await method
		// const { data } = await getStorageData('data');

		// get data
		getStorageData("modifierKey").then(result => {
			// send response
			sendResponse({
				message: "success",
				action: request.action,
				modifierKey: result.modifierKey || ""
			});
		});
	}
	// set
	else if (request.action === "setData") {
		// async / await method
		// await setStorageData({ data: [someData] });

		// set any data
		setStorageData({
			"modifierKey": request.modifierKey
		}).then(result => {
			// get data
			getStorageData("modifierKey").then(result => {
				// send response
				sendResponse({
					message: "success",
					action: request.action,
					modifierKey: result.modifierKey || ""
				});
			});
		});
	}

	return true;
});

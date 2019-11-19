chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
    });
});

chrome.browserAction.onClicked.addListener(function (tab) {
    "use strict";

    chrome.storage.sync.get('color', function (data) {
        let color = data.color;

        if (color === "transparent") {
            color = "";
        }

        let code = "document.body.style.backgroundColor = '" + color + "';";

        chrome.tabs.executeScript(
            tab.id,
            { code: code }
        );
    });
});

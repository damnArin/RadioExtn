chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.type == "openTab") {

        chrome.tabs.create({"url": "http://www.google.com", "selected": true}, function (tab) {

        });

    }

});
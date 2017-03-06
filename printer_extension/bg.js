// Browser action                                                                                                                                                                                      
chrome.browserAction.onClicked.addListener(function(){
    chrome.management.getAll(function(info) {
      for (var i = 0; i < info.length; i++) {
        if (info[i].isApp && info[i].name == "Print App") {
          chrome.management.launchApp(info[i].id);
          break;
	}
      }
    });
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "Downloader",
    title: "Add to queue",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  var url = info.linkUrl;
  var root = getAllAngularRootElements()[0];
  ng.probe(root).componentInstance.downloadsService.createFromBackgroundJS(url).subscribe();
});

setInterval(function() {
  chrome.browserAction.setBadgeText({text: "..."});
  let root = getAllAngularRootElements()[0];
  ng.probe(root).componentInstance.downloadsService.get().subscribe((downloads) => {    
    let started = downloads.filter((download, index, array) => {
      return download.status == "started"
    });
    chrome.browserAction.setBadgeText({text: started.length.toString()});
  });  
}, 1000 * 60);

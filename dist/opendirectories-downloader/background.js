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

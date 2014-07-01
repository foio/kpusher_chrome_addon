

chrome.browserAction.onClicked.addListener(function(tab){
    var kpusherHost = "http://kpusher.xuanhao360.com/article?url=";
	var curUrl = tab.url;
	chrome.tabs.create( {url:kpusherHost+curUrl} );
});

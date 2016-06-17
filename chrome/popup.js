$(function(){
	$('.linkjack').click(function(){
		chrome.tabs.create({url: $(this).attr('href')});
	});

	$('.openfeedback').click(function(){
		for (var x=1;x<21;x++)
			chrome.tabs.create({url: "http://feedback.ebay.com/ws/eBayISAPI.dll?LeaveFeedback2&page=" + x + "&items=100&show_as=all"});
	});
	
	function sendmessage(msg){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {method: "msg"}, function(response) {
				//console.log(response.farewell);
			});
		});
	}
	
	$(".sendMessage").click(function(){
		var message=$(this).data("message");
		
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
			});
		});
	});
});
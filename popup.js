$(function(){
	$('.linkjack').click(function(){
		chrome.tabs.create({url: $(this).attr('href')});
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
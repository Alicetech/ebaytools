if (window.location.hostname=="feedback.ebay.com")
{

	var positive=function(){
		var root=$($(this).parents("table").get(3));
		root.find('input[size=80]').val("Thanks A++++++++++");
		root.find('.detailedquestion table').each(function(){$(this).find("a>img:last:not([alt='Very accurate selected'],[alt='Very satisfied selected'],[alt='Very quickly selected'])").click();});
	}
	var negative=function(){
		var root=$($(this).parents("table").get(3));
		root.find('input[size=80]').val("Did not arrive.");
		root.find('.detailedquestion table').each(function(){$(this).find("a>img:first:not([alt='Very inaccurate selected'],[alt='Very unsatisfied selected'],[alt='Very slowly selected'])").click();});

		root.find('div[class="question-layer"] input:first').click();

	}

	$("input[value=negative]").click(function(){negative.apply(this)});
	$("input[value=positive]").click(function(){positive.apply(this)});

	// $("input[value=positive]").click();
}

chrome.extension.onMessage.addListener( function(request,sender,sendResponse)
{
	// Make sure we only accept our own calls (stops exploitation?)
	if (sender.id!=chrome.runtime.id)
		return console.warn("rejected sender id",sender.id);
	
	if( request.method == "positiveall")
	{
		$("input[value=positive]").click();
	}
	else if( request.method == "negativeall")
	{
		$("input[value=negative]").click();
	}
});

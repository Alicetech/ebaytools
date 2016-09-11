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

// Ebay programers are dumbasses who can't loadbalance their server. 
// This fixes a but when their sub par servers time out on an SQL query.
// Note to ebay: Stop using bubblememmory storage for your shit database servers.
if (window.location.hostname=="cart.payments.ebay.com")
{
	if ($("body").text().indexOf("We were unable to load your cart.")!=-1)
		location.reload();
}

if (window.location.toString().indexOf("https://checkout.ebay.com/xo/view?pagename=success")==0
 || window.location.toString().indexOf("https://mbuy.ebay.com/xo?action=success")==0
 
)
{
	window.location="http://cart.payments.ebay.com/sc/ptc";
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

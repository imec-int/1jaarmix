// Robby

var activeMenu = "#intro";

/*
 Events
*/
$("#menu a").click(function(event){
	//event.preventDefault();
	
	/*$("#menu a").removeClass("menuItemActive");
	$("#menu a").addClass("menuItem");
	$(this).addClass("menuItemActive");*/
	highlightMenuItem("#"+$(this).attr("id"));

	scrollToPage($(this).attr("href"));
	return false;
});

var scroller=self.setInterval(function(){checkScroll()},800);

function checkScroll(){
	var scrollFromTop = $(this).scrollTop();
	// find the div which top is closest to top of browser
	var closest;
	var closestDistance = Infinity;
	$(".pageDiv").each(function(){
		console.log($(this).attr("id") + " - " + Math.abs(scrollFromTop - $(this).offset().top) + " - " + closestDistance);

		if(Math.abs(scrollFromTop - $(this).offset().top) < closestDistance){
			var thisdiv = $(this).attr("id");
			closest = "#a_"+thisdiv;
			closestDistance = Math.abs(scrollFromTop - $(this).offset().top);
		}
	});
	if(closest){
		//closest = $()
		console.log(closest+" is smallest");
		highlightMenuItem(closest);
	}
}


$(document).ready(function() {
	//
});


function highlightMenuItem(active){
	/*console.log("highlight: ");
	console.log(active);*/
	$("#menu a").removeClass("menuItemActive");
	$("#menu a").addClass("menuItem");
	$(active).addClass("menuItemActive");
}


// check scrolling
// highlight menu items




/*
 Makes DIVS full height
*/


/*
 PageChange
*/
/*function menuClick(e){
	var target = e.currentTarget.getAttribute("href");
	activeMenu = e.currentTarget.getAttribute("href");

}*/

/*
 Transistion scroll to given page (div)
*/
function scrollToPage(pageId){
	var offset = $(pageId).offset().top;
	$('html, body').stop().animate({scrollTop: offset}, 400, function(){
		window.location = pageId;
	});
	activeMenu = pageId;
}

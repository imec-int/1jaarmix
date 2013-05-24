// Robby

var activeMenu = "#intro";

/*
 Events
*/
$("#menu a").click(function(event){
	//event.preventDefault();
	
	$("#menu a").removeClass("menuItemActive");
	$("#menu a").addClass("menuItem");
	$(this).addClass("menuItemActive");


	scrollToPage($(this).attr("href"));
	return false;
});

$(document).ready(function() {
	//
});


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
}

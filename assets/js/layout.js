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

});

$(document).ready(function() {
	$(".pageDiv").droidscroll();
}

/*
 Makes DIVS full height
*/


/*
 PageChange
*/
function menuClick(e){
	var target = e.currentTarget.getAttribute("href");
	activeMenu = e.currentTarget.getAttribute("href");

}


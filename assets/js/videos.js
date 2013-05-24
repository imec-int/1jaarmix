// Sam & Matthias
Videos = {
	pageloaded: function(){
		Videos.initIntroVideo();
	},

	isScrolledIntoView: function(elem){
		var docViewTop = $(window).scrollTop();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return (elemBottom >= docViewTop);
	},

	initIntroVideo: function(){
		var iframe = $('#intromovie')[0];
		// $f van froogaloop
		var player = $f(iframe.id);
		// when player is ready add listeners for finish
		player.addEvent('ready', function(){
			player.addEvent('finish', onFinish);
			player.addEvent('playProgress', onPlayProgress);
		});

		// on finish scroll to next div
		function onFinish(id){
			// scroll to next div
			console.log('end');
			var offset = $("#projects").offset().top;
			$('html, body').stop().animate({scrollTop: offset}, 400);
		}

		// when playing check if video is scrolled out of view. If so, pause
		function onPlayProgress(data, id){
			if(!Videos.isScrolledIntoView($("#intro")[0])){
				player.api('pause');
			}
		}
	}
}

$(Videos.pageloaded);
// Sam & Matthias
Videos = {
	pageloaded: function(){
		Videos.initIntroVideo();
		Videos.initProjectVideos();
	},

	isScrolledIntoView: function(elem){
		var docViewTop = $(window).scrollTop();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return (elemBottom >= docViewTop && docViewTop + $(window).height() >= elemTop);
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
			// if was fullscreen exit
			if(document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled){
				Videos.cancelFullscreen();
			}
			// scroll to next div
			var offset = $("#projects").offset().top;
			$('html, body').stop().animate({scrollTop: offset}, 400);
		}

		// when playing check if video is scrolled out of view. If so, pause
		function onPlayProgress(data, id){
			if(!Videos.isScrolledIntoView($("#intro")[0])){
				player.api('pause');
			}
		}
	},

	initProjectVideos: function(){
		var iframes = $(".projectMovie").children('iframe');
		iframes.each(function(index, iframe){
			var player = $f(iframe.id);
			player.addEvent('ready', function(){
				player.addEvent('finish', onFinish);
				player.addEvent('playProgress', onPlayProgress);
			});
		});

		function onFinish(id){
			// start next
			var nextVideo = $('#' + id).parent().next().children('iframe');
			// if it's not the last video, start playing the next one
			if(nextVideo && nextVideo.length !== 0) {
				$f(nextVideo[0]).api('play');
			}
			if(document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled){
				Videos.cancelFullscreen();
			}
		}

		function onPlayProgress(data, id){
			var elem = $('#' + id);
			if(!Videos.isScrolledIntoView(elem)) {
				$f(elem[0]).api('pause');
			}
		}
	},

	cancelFullscreen: function() {
	  if(document.cancelFullScreen) {
	    document.cancelFullScreen();
	  } else if(document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if(document.webkitCancelFullScreen) {
	    document.webkitCancelFullScreen();
	  }
	}
}

$(Videos.pageloaded);
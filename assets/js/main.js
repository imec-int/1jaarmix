var tweets = [];
var debug1;
var debug2;

var minuteTweets = [];
var cv,ctx;

var cvWidth=0, cvHeight=0;

var blockSize;

var currentIndex = 0;
var intervaller = 0;

$(document).ready(function()
{

	//init canvas

	cv=document.getElementById("cv");
	ctx=cv.getContext("2d");
	ctx.fillStyle="#EEEEEE";
	ctx.fillRect(0,0,cv.width,cv.height);
	cvWidth = cv.width;
	cvHeight = cv.height;

	var length = 1440; // user defined length

	for(var i = 0; i < length; i++) {
	    minuteTweets.push(0);
	}

	blockSize = Math.floor((cvWidth *0.8)/1440);

	console.log(blockSize);

	$.getJSON('assets/data/tvvv.json', function(data) {
		tweets = data;
		//startRunningThroughTweets();
		intervaller = setInterval("runThroughTweet()",20);
	});
});

function startRunningThroughTweets(){
	for(var i in tweets){
		var tweet = tweets[i];
		tweet["timestamp"] = Date.parse(tweet["timestamp"]);
		/*if(!debug1){
			debug1 = Date.now();
			debug2 = Date.parse("Thu, 1 July 2004 22:30:00");
		} */
		//console.log(Date.parse(tweet["timestamp"]).toString("u"));
		drawTweet(tweet)
	}
}

function runThroughTweet(){
	if(currentIndex >= tweets.length -1)
		clearInterval(intervaller);
	var tweet = tweets[currentIndex];
	tweet["timestamp"] = Date.parse(tweet["timestamp"]);
	/*if(!debug1){
		debug1 = Date.now();
		debug2 = Date.parse("Thu, 1 July 2004 22:30:00");
	} */
	//console.log(Date.parse(tweet["timestamp"]).toString("u"));
	drawTweet(tweet)
	currentIndex++;
}

function drawTweet(tweet){
	var c = ctx;
	var hour = parseInt(tweet["timestamp"].toString("HH"));
	var min = parseInt(tweet["timestamp"].toString("mm"));
	var timeIndicator = (hour*60)+min;
	//console.log(timeIndicator);
	//console.log(min+", "+hourlyTweets[min]);
	var b = Math.min(minuteTweets[timeIndicator],250);
	var color = "rgb(20,20,"+b+")";
	//console.log(color);
	c.fillStyle=color;

	c.fillRect(timeIndicator, cvHeight-20-(minuteTweets[timeIndicator]*5),1,5);
	//console.log("draw on "+(hour*blockSize)+", "+cvHeight-20-(hourlyTweets[hour]*3)+", "+blockSize);
	minuteTweets[timeIndicator]++;
}
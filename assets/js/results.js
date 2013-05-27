var pollindex = 0;
var polldata =
	[
	{
		"question": "Over 10 jaar kijkt men alleen nog maar on-demand of uitgesteld naar televisie.",
		"category": "Content",
		"answers": [
			13,
			31,
			5,
			30,
			21
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstk8n"
	},
	{
		"question": "Als de media niet innoveert in Vlaanderen kijken we straks enkel naar buitenlandse content.",
		"category": "Content",
		"answers": [
			3,
			36,
			2,
			40,
			19
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstkd3"
	},
	{
		"question": "Het mediabedrijf van de toekomst covert elk medium.",
		"category": "Content",
		"answers": [
			17,
			31,
			6,
			18,
			28
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstl1p"
	},
	{
		"question": "Content aggregeren is een overbodige schakel in de waardeketen van media geworden.",
		"category": "Content",
		"answers": [
			31,
			42,
			7,
			16,
			4
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstl6t"
	},
	{
		"question": "Journalistiek zal volautomatisch worden: content wordt gemaakt door algoritmes.",
		"category": "Content",
		"answers": [
			49,
			39,
			2,
			8,
			2
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstl9n"
	},
	{
		"question": "Het doorspoelen of vermijden van reclame moet betalend worden.",
		"category": "Geld",
		"answers": [
			51,
			13,
			5,
			27,
			4
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstlf6"
	},
	{
		"question": "Binnenkort zit alle kwaliteitscontent onherroepelijk achter een betaalmuur.",
		"category": "Geld",
		"answers": [
			13,
			34,
			7,
			34,
			12
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstlmi"
	},
	{
		"question": "Vergelijkbare ROI cijfers over alle media heen zijn een must voor de mediasector.",
		"category": "Geld",
		"answers": [
			6,
			13,
			15,
			36,
			30
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstlqd"
	},
	{
		"question": "Views en clicks zeggen niets over de impact van de reclame, sentimentanalyse is de nieuwe currency.",
		"category": "Geld",
		"answers": [
			4,
			21,
			26,
			33,
			16
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstmj4"
	},
	{
		"question": "Targeted advertenties zijn de redding van het advertentiemodel.",
		"category": "Geld",
		"answers": [
			4,
			19,
			12,
			46,
			19
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstmnw"
	},
	{
		"question": "Net zoals de iPad wordt Google Glass de norm binnen de drie jaar.",
		"category": "Innovatie",
		"answers": [
			5,
			42,
			16,
			16,
			21
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstms7"
	},
	{
		"question": "De mediabedrijven moeten meer samenwerken om gecombineerde producten te maken.",
		"category": "Innovatie",
		"answers": [
			1,
			9,
			13,
			41,
			36
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstmvn"
	},
	{
		"question": "Echte innovatie zit in de hardware, software zal altijd volgen.",
		"category": "Innovatie",
		"answers": [
			43,
			31,
			11,
			9,
			6
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstne7"
	},
	{
		"question": "De strenge Europese privacy wetgeving is een competitief nadeel voor innovatie.",
		"category": "Innovatie",
		"answers": [
			18,
			35,
			6,
			20,
			20
		],
		"totalanswers": 99,
		"twitpic": "http://twitpic.com/cstn77"
	},
	{
		"question": "De overheid moet reguleren hoe distributeurs en omroepen kunnen samenwerken.",
		"category": "Innovatie",
		"answers": [
			31,
			33,
			9,
			18,
			9
		],
		"totalanswers": 100,
		"twitpic": "http://twitpic.com/cstnhs"
	}
];


//console.log(polldata[0].question);
$(pollInit); // laden als de pagina geladen is


function pollInit() {
	pollindex = getQuerystring('index',0);
	$("#stelling").text(polldata[pollindex].question);

	svg = d3.select("svg");
	var totalHeight = $("#d3canvas").height();
	var rects = svg.selectAll("rect")
		.data(polldata[pollindex].answers);
	var heightScale = d3.scale.linear()
			.domain([0, d3.max(polldata[pollindex].answers)])
			.range([totalHeight*1, 0]); //omgedraaid

 	var possibleanswers = ['Helemaal Oneens', 'Oneens', 'Neutraal', 'Eens', 'Helemaal Eens'];

	rects.enter()
		.append("rect")
			.attr("rx", 6)
			.attr("ry", 6)
			.attr("x", function (d,i){
				return i*100;
			})
			.attr("y", function (d,i){
				return heightScale(d);
			})
			.attr("height", function (d,i){
				return totalHeight - heightScale(d);
			})
			.attr("width", 50)
			.attr("fill", "#E40473")
			.attr("class","shadow");

	rects.enter()
		.append("text")
			.attr("font-size", "20px")
			.attr("x", function (d,i){
				return i*100;
			})
			.attr("y", function (d,i){
				return heightScale(d);
			})
			.text(function (d, i){
				return d + " %";
			});

	rects.enter()
		.append("text")
			.attr("font-size", "20px")
			.attr("x", function (d,i){
				return i*100;
			})
			.attr("y", function (d,i){
				return totalHeight;
			})
			.text(function (d, i){
				return possibleanswers[i];
			});
	rects.exit().remove();
}


function updatePoll(){
	 var totalHeight = $("#d3canvas").height();
	 var heightScale = d3.scale.linear()
			.domain([0, d3.max(polldata[pollindex].answers)])
			.range([totalHeight*1, 0]);
	var rects = svg.selectAll("rect")
		.data(polldata[pollindex].answers);
	var height = d3.scale.linear()
			.domain([0, d3.max(polldata[pollindex].answers)])
			.range([0, $('#d3canvas').height()]);
		rects.transition()
			.duration(750)
			.attr("y", function (d,i){
					return heightScale(d);
				})
				.attr("height", function (d,i){
					return totalHeight - heightScale(d);
				});
		rects.exit().remove();
}

function nextPoll() {
	pollindex++;
	if (pollindex == 15) {pollindex = 0;}
	$("#stelling").text(polldata[pollindex].question);
	updatePoll();
	location.hash = "results?index="+pollindex+"";

}

function prevPoll() {
	if (pollindex == 0) {pollindex = 15;}
	pollindex--;
	$("#stelling").text(polldata[pollindex].question);
	updatePoll();
	location.hash = "results?index="+pollindex+"";

}

function getQuerystring(key, default_)
{
	if (default_==null) default_="";
	key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
	var qs = regex.exec(window.location.href);
	if(qs == null)
		return default_;
	else
		scrollToPage("#results");
		return qs[1];
}
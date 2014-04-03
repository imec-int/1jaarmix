Results = {
	labels: ['Helemaal Oneens', 'Oneens', 'Neutraal', 'Eens', 'Helemaal Eens'],
	index: 0,
	data:[
		{
			"question": "Over 10 jaar kijkt men alleen nog maar on-demand of uitgesteld naar televisie.",
			"questiontwitter": "Over 10 jaar kijkt men alleen nog maar on-demand of uitgesteld naar televisie",
			"category": "Content",
			"answers": [14, 29, 8, 28, 21],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstk8n"
		},
		{
			"question": "Als de media niet innoveert in Vlaanderen kijken we straks enkel naar buitenlandse content.",
			"questiontwitter": "Als de media hier niet innoveert kijken we straks enkel buitenlandse content.",
			"category": "Content",
			"answers": [7, 31, 2, 40, 20],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstkd3"
		},
		{
			"question": "Het mediabedrijf van de toekomst covert elk medium.",
			"category": "Content",
			"answers": [17,	30,	6, 18, 29],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstl1p"
		},
		{
			"question": "Content aggregeren is een overbodige schakel in de waardeketen van media geworden.",
			"questiontwitter": "Content aggregeren is een overbodige schakel in de waardeketen van de media.",
			"category": "Content",
			"answers": [31,	45,	7, 14, 3],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstl6t"
		},
		{
			"question": "Journalistiek zal volautomatisch worden: content wordt gemaakt door algoritmes.",
			"questiontwitter": "Journalistiek wordt volautomatisch: content wordt gemaakt door algoritmes.",
			"category": "Content",
			"answers": [49, 37,	2, 9, 3],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstl9n"
		},
		{
			"question": "Het doorspoelen of vermijden van reclame moet betalend worden.",
			"category": "Geld",
			"answers": [56,	15,	4, 22, 3],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstlf6"
		},
		{
			"question": "Binnenkort zit alle kwaliteitscontent onherroepelijk achter een betaalmuur.",
			"category": "Geld",
			"answers": [14, 33, 5, 38, 10],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstlmi"
		},
		{
			"question": "Vergelijkbare ROI cijfers over alle media heen zijn een must voor de mediasector.",
			"questiontwitter": "Vergelijkbare ROI cijfers over alle media heen zijn een must voor de media.",
			"category": "Geld",
			"answers": [6, 11, 15, 39, 29],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstlqd"
		},
		{
			"question": "Views en clicks zeggen niets over de impact van de reclame, sentimentanalyse is de nieuwe currency.",
			"questiontwitter": "Views en clicks zeggen niets over de impact van de reclame... ",
			"category": "Geld",
			"answers": [4, 18, 26, 37, 15],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstmj4"
		},
		{
			"question": "Targeted advertenties zijn de redding van het advertentiemodel.",
			"category": "Geld",
			"answers": [7, 21, 10, 44, 18],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstmnw"
		},
		{
			"question": "Net zoals de iPad wordt Google Glass de norm binnen de drie jaar.",
			"category": "Innovatie",
			"answers": [4, 44, 15, 19, 18],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstms7"
		},
		{
			"question": "De mediabedrijven moeten meer samenwerken om gecombineerde producten te maken.",
			"questiontwitter": "Mediabedrijven moeten meer samenwerken om gecombineerde producten te maken.",
			"category": "Innovatie",
			"answers": [2, 7, 13, 42, 36],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstmvn"
		},
		{
			"question": "Echte innovatie zit in de hardware, software zal altijd volgen.",
			"category": "Innovatie",
			"answers": [42, 33,	11,	9, 5],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstne7"
		},
		{
			"question": "De strenge Europese privacy wetgeving is een competitief nadeel voor innovatie.",
			"questiontwitter": "De strenge Europese privacy wetgeving is competitief nadeel voor innovatie.",
			"category": "Innovatie",
			"answers": [15,	26,	17,	28,	14],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstn77"
		},
		{
			"question": "De overheid moet reguleren hoe distributeurs en omroepen kunnen samenwerken.",
			"category": "Innovatie",
			"answers": [40, 29,	9, 13, 9],
			"totalanswers": 100,
			"twitpic": "http://twitpic.com/cstnhs"
		}
	],

	barWidth: 50,
	barDistance: 100,

	init: function(){
		Results.height = $("#bars").height();
		Results.width = $("#bars").width();
		Results.svg = d3.select("#bars").append("svg")
			.attr("width", Results.width)
			.attr("height", Results.height);
		var defs = Results.svg.append("defs");
		var filter = defs.append("filter")
			.attr("id", "drop-shadow");

		filter.append("feGaussianBlur")
			.attr("in", "SourceAlpha")
			.attr("stdDeviation", 2)
			.attr("result", "blur");
		filter.append("feOffset")
			.attr("in", "blur")
			.attr("dx", 4)
			.attr("dy", -2)
			.attr("result", "offsetBlur");
		// feFuncA appears to be case sensitive -> not possible to generate using jquery, document.createelement whatever
		// $('filter').append("<feComponentTransfer><feFuncA type='linear' slope='0.2'/></feComponentTransfer>");
		var feMerge = filter.append("feMerge");
		feMerge.append("feMergeNode")
			.attr("in", "offsetBlur");
		feMerge.append("feMergeNode")
			.attr("in", "SourceGraphic");

		Results.topOffset = 30;
		Results.maxBarheight = Results.height - Results.topOffset;

		Results.index = Results.getIndexFromUrl();
		console.log( Results.index );
		Results.drawBars( Results.data[Results.index] );
	},

	drawBars: function(data){
		Results.updateQuestiontext( data );
		Results.updateQuestionNumber(Results.index+1);
		Results.updateSocialMessages( data );
		//window.location.hash = "#results" + Results.index;

		var heightScale = d3.scale.linear()
			.domain([0, d3.max(data.answers)])
			.range([0, Results.maxBarheight]);

		var bars = Results.svg.selectAll("rect")
			.data(data.answers);

		var percentages = Results.svg.selectAll("text")
			.data(data.answers);

		bars.enter()
			.append("rect")
				.attr("rx", 6) //afrondingen
				.attr("ry", 6)
				.attr("x", function (d,i){
					return i*Results.barDistance;
				})
				.attr("y", function (d,i){
					return Results.maxBarheight + Results.topOffset - heightScale(d);
				})
				.attr("height", function (d,i){
					return heightScale(d);
				})
				.attr("width", Results.barWidth)
				.attr("fill", "#E40473")
				.style("filter", "url(#drop-shadow)");

		percentages.enter()
			.append("text")
				.attr("id", function (d,i){
					return 'percentage' + i;
				}, true)
				.attr("font-size", "20px")
				.attr("text-anchor", "middle") // text centeren
				.attr("x", function (d,i){
					return i*Results.barDistance + Results.barWidth/2; // anchor zit int midden
				})
				.attr("y", function (d,i){
					return Results.maxBarheight - heightScale(d) + Results.topOffset - 10;
				})
				.text(function (d, i){
					return d + " %";
				});
		Results.previousAnswers = data.answers;
	},

	updateBars: function(data){
		Results.updateQuestiontext( data );
		Results.updateQuestionNumber(Results.index+1);
		Results.updateSocialMessages( data );
		window.location.hash = "#results" + Results.index;

		var heightScale = d3.scale.linear()
			.domain([0, d3.max(data.answers)])
			.range([0, Results.maxBarheight]);

		var bars = Results.svg.selectAll("rect")
			.data(data.answers);

		var percentages = Results.svg.selectAll("text")
			.data(data.answers);

		bars.transition()
			.duration(750)
			.attr("y", function (d,i){
				return Results.maxBarheight + Results.topOffset - heightScale(d);
			})
			.attr("height", function (d,i){
				return heightScale(d);
			});

		percentages.transition()
			.duration(750)
			.attr("x", function (d,i){
				return i*Results.barDistance + Results.barWidth/2; // anchor zit int midden
			})
			.attr("y", function (d,i){
				return Results.maxBarheight - heightScale(d) + Results.topOffset - 10;
			});

		setTimeout(function(){
			for(var i in data.answers){
				Results.updatePercentages($("#percentage" + i), Results.previousAnswers[i], data.answers[i], 400);
			}

			Results.previousAnswers = data.answers;
		},100);
	},

	updatePercentages: function(percentageEl, oldvalue, newvalue, time){
		var timePerStep = time/(Math.abs(newvalue-oldvalue));

		if(newvalue > oldvalue)
			Results.updatePercentage(percentageEl, oldvalue, newvalue, true, timePerStep);
		else if(newvalue < oldvalue)
			Results.updatePercentage(percentageEl, oldvalue, newvalue, false, timePerStep);
		// als gelijk --> niets doen

	},

	updatePercentage: function(percentageEl, value, goal, up, timePerStep){
		if(up)
			value++;
		else
			value--;

		percentageEl.text(value + " %");

		if(value == goal)
			return;


		setTimeout(function(){
			Results.updatePercentage(percentageEl, value, goal, up, timePerStep);
		},timePerStep);

	},

	updateQuestiontext: function(item){
		$("#stelling").text( item.question );
	},

	updateQuestionNumber: function(index){
 		$("#vraagIndex").text( index );
 	},

	updateSocialMessages: function(item){
		var twitter = $(document.createElement('a'));
		twitter.attr('href', 'http://twitter.com/share');
		twitter.attr('class', 'twitter-share-button');
		twitter.attr('data-url', "http://www.startmixing.be/"+ Results.index+".html#results" + Results.index);

		/*if(item.questiontwitter)
			twitter.attr('data-text', item.questiontwitter + " www.startmixing.be/#results" + Results.index); // kortere versie
		else
			twitter.attr('data-text', item.question +  " www.startmixing.be/#results" + Results.index);
		*/
		twitter.attr('data-via', 'mixbe');
		twitter.attr('data-lang', 'nl');
		twitter.attr('data-related', 'mixbe');
		twitter.attr('data-hashtags', '1jaarmix');
		twitter.innerHTML = "tweet dit";
		$(".twit").empty();
		$(".twit").append(twitter);

		if(typeof(twttr) !== 'undefined' && typeof(twttr.widgets) !== 'undefined')
			twttr.widgets.load();

		//G+ button updaten
		gapi.plusone.render("gplusContainer", {"href":"http://www.startmixing.be/"+ Results.index+".html#results" + Results.index});
	},

	next: function (event){
		Results.index++;
		if(Results.index >= Results.data.length)
			Results.index = 0;

		Results.updateBars( Results.data[Results.index] );
	},

	prev: function (event){
		Results.index--;
		if(Results.index < 0)
			Results.index = Results.data.length - 1;

		Results.updateBars( Results.data[Results.index] );
	},

	getIndexFromUrl: function(){
		if( window.location.hash.match(/#results/) )
			scrollToPage("#results"); //robby's functie aanroepen

		var match = window.location.hash.match(/#results(\d+)/);

		if(!match)
			return 0;
		if(!match[1])
			return 0;

		var index = parseInt(match[1]);

		if(isNaN(index))
			return 0;

		if(index < 0)
			return 0;

		if(index >= Results.data.length)
			return 0;

		return index;
	}
};


$(Results.init); // laden als de pagina geladen is

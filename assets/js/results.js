Results = {
	labels: ['Helemaal Oneens', 'Oneens', 'Neutraal', 'Eens', 'Helemaal Eens'],
	index: 0,
	data:[
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
	],

	barWidth: 50,
	barDistance: 100,

	init: function(){
		Results.height = $("#bars").height();
		Results.width = $("#bars").width();
		Results.svg = d3.select("#bars").append("svg")
			.attr("width", Results.width)
			.attr("height", Results.height);

		Results.topOffset = 30;
		Results.maxBarheight = Results.height - 10; //marge van 10 tss bars en labels


		Results.index = 0;
		Results.drawBars( Results.data[Results.index] );
	},

	drawBars: function(data){
		Results.updateQuestiontext( data );

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
					return Results.maxBarheight - heightScale(d) + Results.topOffset;
				})
				.attr("height", function (d,i){
					return heightScale(d) - Results.topOffset;
				})
				.attr("width", Results.barWidth)
				.attr("fill", "#E40473")
				.attr("class","shadow");

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
				return Results.maxBarheight - heightScale(d) + Results.topOffset;
			})
			.attr("height", function (d,i){
				return heightScale(d) - Results.topOffset;
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
	}
};


$(Results.init); // laden als de pagina geladen is
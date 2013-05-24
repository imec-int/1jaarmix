var pollindex = 0;
var polldata =
  [
  {
    "question": "Over 10 jaar kijkt men alleen nog maar on-demand of uitgesteld naar televisie.",
    "category": "Content",
    "answers": [
      13,
      30,
      5,
      29,
      20
    ],
    "totalanswers": 97,
    "twitpic": "http://twitpic.com/cstk8n",
    "answerspercentage": [
      13.402061855670103,
      30.927835051546392,
      5.154639175257732,
      29.896907216494846,
      20.61855670103093
    ]
  },
  {
    "question": "Als de media niet innoveert in Vlaanderen kijken we straks enkel naar buitenlandse content.",
    "category": "Content",
    "answers": [
      4,
      41,
      2,
      46,
      22
    ],
    "totalanswers": 115,
    "twitpic": "http://twitpic.com/cstkd3",
    "answerspercentage": [
      3.4782608695652173,
      35.65217391304348,
      1.7391304347826086,
      40,
      19.130434782608695
    ]
  },
  {
    "question": "Het mediabedrijf van de toekomst covert elk medium.",
    "category": "Content",
    "answers": [
      19,
      34,
      7,
      20,
      31
    ],
    "totalanswers": 111,
    "twitpic": "http://twitpic.com/cstl1p",
    "answerspercentage": [
      17.117117117117118,
      30.63063063063063,
      6.306306306306307,
      18.01801801801802,
      27.92792792792793
    ]
  },
  {
    "question": "Content aggregeren is een overbodige schakel in de waardeketen van media geworden.",
    "category": "Content",
    "answers": [
      36,
      48,
      8,
      18,
      4
    ],
    "totalanswers": 114,
    "twitpic": "http://twitpic.com/cstl6t",
    "answerspercentage": [
      31.57894736842105,
      42.10526315789474,
      7.017543859649122,
      15.789473684210526,
      3.508771929824561
    ]
  },
  {
    "question": "Journalistiek zal volautomatisch worden: content wordt gemaakt door algoritmes.",
    "category": "Content",
    "answers": [
      58,
      45,
      2,
      9,
      2
    ],
    "totalanswers": 116,
    "twitpic": "http://twitpic.com/cstl9n",
    "answerspercentage": [
      50,
      38.793103448275865,
      1.7241379310344827,
      7.758620689655173,
      1.7241379310344827
    ]
  },
  {
    "question": "Het doorspoelen of vermijden van reclame moet betalend worden.",
    "category": "Geld",
    "answers": [
      29,
      7,
      3,
      15,
      2
    ],
    "totalanswers": 56,
    "twitpic": "http://twitpic.com/cstlf6",
    "answerspercentage": [
      51.785714285714285,
      12.5,
      5.357142857142857,
      26.785714285714285,
      3.5714285714285716
    ]
  },
  {
    "question": "Binnenkort zit alle kwaliteitscontent onherroepelijk achter een betaalmuur.",
    "category": "Geld",
    "answers": [
      14,
      34,
      7,
      34,
      12
    ],
    "totalanswers": 101,
    "twitpic": "http://twitpic.com/cstlmi",
    "answerspercentage": [
      13.861386138613861,
      33.663366336633665,
      6.930693069306931,
      33.663366336633665,
      11.881188118811881
    ]
  },
  {
    "question": "Vergelijkbare ROI cijfers over alle media heen zijn een must voor de mediasector.",
    "category": "Geld",
    "answers": [
      7,
      14,
      16,
      38,
      32
    ],
    "totalanswers": 107,
    "twitpic": "http://twitpic.com/cstlqd",
    "answerspercentage": [
      6.542056074766355,
      13.08411214953271,
      14.953271028037383,
      35.51401869158879,
      29.906542056074766
    ]
  },
  {
    "question": "Views en clicks zeggen niets over de impact van de reclame, sentimentanalyse is de nieuwe currency.",
    "category": "Geld",
    "answers": [
      4,
      23,
      29,
      36,
      18
    ],
    "totalanswers": 110,
    "twitpic": "http://twitpic.com/cstmj4",
    "answerspercentage": [
      3.6363636363636362,
      20.90909090909091,
      26.363636363636363,
      32.72727272727273,
      16.363636363636363
    ]
  },
  {
    "question": "Targeted advertenties zijn de redding van het advertentiemodel.",
    "category": "Geld",
    "answers": [
      5,
      20,
      13,
      49,
      20
    ],
    "totalanswers": 107,
    "twitpic": "http://twitpic.com/cstmnw",
    "answerspercentage": [
      4.672897196261682,
      18.69158878504673,
      12.149532710280374,
      45.794392523364486,
      18.69158878504673
    ]
  },
  {
    "question": "Net zoals de iPad wordt Google Glass de norm binnen de drie jaar.",
    "category": "Innovatie",
    "answers": [
      1,
      8,
      3,
      3,
      4
    ],
    "totalanswers": 19,
    "twitpic": "http://twitpic.com/cstms7",
    "answerspercentage": [
      5.2631578947368425,
      42.10526315789474,
      15.789473684210526,
      15.789473684210526,
      21.05263157894737
    ]
  },
  {
    "question": "De mediabedrijven moeten meer samenwerken om gecombineerde producten te maken.",
    "category": "Innovatie",
    "answers": [
      1,
      8,
      11,
      35,
      31
    ],
    "totalanswers": 86,
    "twitpic": "http://twitpic.com/cstmvn",
    "answerspercentage": [
      1.1627906976744187,
      9.30232558139535,
      12.790697674418604,
      40.69767441860465,
      36.04651162790697
    ]
  },
  {
    "question": "Echte innovatie zit in de hardware, software zal altijd volgen.",
    "category": "Innovatie",
    "answers": [
      44,
      32,
      11,
      9,
      6
    ],
    "totalanswers": 102,
    "twitpic": "http://twitpic.com/cstne7",
    "answerspercentage": [
      43.13725490196079,
      31.372549019607842,
      10.784313725490197,
      8.823529411764707,
      5.882352941176471
    ]
  },
  {
    "question": "De strenge Europese privacy wetgeving is een competitief nadeel voor innovatie.",
    "category": "Innovatie",
    "answers": [
      18,
      34,
      6,
      20,
      20
    ],
    "totalanswers": 98,
    "twitpic": "http://twitpic.com/cstn77",
    "answerspercentage": [
      18.367346938775512,
      34.69387755102041,
      6.122448979591836,
      20.408163265306122,
      20.408163265306122
    ]
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
    "twitpic": "http://twitpic.com/cstnhs",
    "answerspercentage": [
      31,
      33,
      9,
      18,
      9
    ]
  }
];
//console.log(polldata[0].question);
$(pollInit); // laden als de pagina geladen is


function pollInit() {
  pollindex = getQuerystring('index',0);
  $("#stelling").text(polldata[pollindex].question);
  // console.log(getQuerystring('index'))
  svg = d3.select("svg");
  var totalHeight = $("#d3canvas").height(); //in Firefox is dat toch 0 hoor
  var rects = svg.selectAll("rect")
    .data(polldata[pollindex].answers);
  var heightScale = d3.scale.linear()
      .domain([0, d3.max(polldata[pollindex].answers)])
      .range([totalHeight*1, 0]); //omgedraaid

  rects.enter().append("rect")
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
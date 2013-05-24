var pollindex = 0;
var polldata = 
  [{
    "question": "Over 10 jaar kijkt men alleen nog maar on-demand of uitgesteld naar televisie.",
    "category": "Content",
    "answers": {
      "Helemaal Oneens": 13,
      "Oneens": 30,
      "Neutraal": 5,
      "Eens": 29,
      "Helemaal Eens": 20
    },
    "totalanswers": 97,
    "answerspercentage": {
      "Helemaal Oneens": 13.402061855670103,
      "Oneens": 30.927835051546392,
      "Neutraal": 5.154639175257732,
      "Eens": 29.896907216494846,
      "Helemaal Eens": 20.61855670103093
    }
  },
  {
    "question": "Als de media niet innoveert in Vlaanderen kijken we straks enkel naar buitenlandse content.",
    "category": "Content",
    "answers": {
      "Helemaal Oneens": 4,
      "Oneens": 41,
      "Neutraal": 2,
      "Eens": 46,
      "Helemaal Eens": 22
    },
    "totalanswers": 115,
    "answerspercentage": {
      "Helemaal Oneens": 3.4782608695652173,
      "Oneens": 35.65217391304348,
      "Neutraal": 1.7391304347826086,
      "Eens": 40,
      "Helemaal Eens": 19.130434782608695
    }
  },
  {
    "question": "Het mediabedrijf van de toekomst covert elk medium.",
    "category": "Content",
    "answers": {
      "Helemaal Oneens": 19,
      "Oneens": 34,
      "Neutraal": 7,
      "Eens": 20,
      "Helemaal Eens": 31
    },
    "totalanswers": 111,
    "answerspercentage": {
      "Helemaal Oneens": 17.117117117117118,
      "Oneens": 30.63063063063063,
      "Neutraal": 6.306306306306307,
      "Eens": 18.01801801801802,
      "Helemaal Eens": 27.92792792792793
    }
  },
  {
    "question": "Content aggregeren is een overbodige schakel in de waardeketen van media geworden.",
    "category": "Content",
    "answers": {
      "Helemaal Oneens": 36,
      "Oneens": 48,
      "Neutraal": 8,
      "Eens": 18,
      "Helemaal Eens": 4
    },
    "totalanswers": 114,
    "answerspercentage": {
      "Helemaal Oneens": 31.57894736842105,
      "Oneens": 42.10526315789474,
      "Neutraal": 7.017543859649122,
      "Eens": 15.789473684210526,
      "Helemaal Eens": 3.508771929824561
    }
  },
  {
    "question": "Journalistiek zal volautomatisch worden: content wordt gemaakt door algoritmes.",
    "category": "Content",
    "answers": {
      "Helemaal Oneens": 58,
      "Oneens": 45,
      "Neutraal": 2,
      "Eens": 9,
      "Helemaal Eens": 2
    },
    "totalanswers": 116,
    "answerspercentage": {
      "Helemaal Oneens": 50,
      "Oneens": 38.793103448275865,
      "Neutraal": 1.7241379310344827,
      "Eens": 7.758620689655173,
      "Helemaal Eens": 1.7241379310344827
    }
  },
  {
    "question": "Het doorspoelen of vermijden van reclame moet betalend worden.",
    "category": "Geld",
    "answers": {
      "Helemaal Oneens": 29,
      "Oneens": 7,
      "Neutraal": 3,
      "Eens": 15,
      "Helemaal Eens": 2
    },
    "totalanswers": 56,
    "answerspercentage": {
      "Helemaal Oneens": 51.785714285714285,
      "Oneens": 12.5,
      "Neutraal": 5.357142857142857,
      "Eens": 26.785714285714285,
      "Helemaal Eens": 3.5714285714285716
    }
  },
  {
    "question": "Binnenkort zit alle kwaliteitscontent onherroepelijk achter een betaalmuur.",
    "category": "Geld",
    "answers": {
      "Helemaal Oneens": 14,
      "Oneens": 34,
      "Neutraal": 7,
      "Eens": 34,
      "Helemaal Eens": 12
    },
    "totalanswers": 101,
    "answerspercentage": {
      "Helemaal Oneens": 13.861386138613861,
      "Oneens": 33.663366336633665,
      "Neutraal": 6.930693069306931,
      "Eens": 33.663366336633665,
      "Helemaal Eens": 11.881188118811881
    }
  },
  {
    "question": "Vergelijkbare ROI cijfers over alle media heen zijn een must voor de mediasector.",
    "category": "Geld",
    "answers": {
      "Helemaal Oneens": 7,
      "Oneens": 14,
      "Neutraal": 16,
      "Eens": 38,
      "Helemaal Eens": 32
    },
    "totalanswers": 107,
    "answerspercentage": {
      "Helemaal Oneens": 6.542056074766355,
      "Oneens": 13.08411214953271,
      "Neutraal": 14.953271028037383,
      "Eens": 35.51401869158879,
      "Helemaal Eens": 29.906542056074766
    }
  },
  {
    "question": "Vergelijkbare ROI cijfers over alle media heen zijn een must voor de mediasector.",
    "category": "Geld",
    "answers": {
      "Helemaal Oneens": 4,
      "Oneens": 23,
      "Neutraal": 29,
      "Eens": 36,
      "Helemaal Eens": 18
    },
    "totalanswers": 110,
    "answerspercentage": {
      "Helemaal Oneens": 3.6363636363636362,
      "Oneens": 20.90909090909091,
      "Neutraal": 26.363636363636363,
      "Eens": 32.72727272727273,
      "Helemaal Eens": 16.363636363636363
    }
  },
  {
    "question": "Targeted advertenties zijn de redding van het advertentiemodel.",
    "category": "Geld",
    "answers": {
      "Helemaal Oneens": 5,
      "Oneens": 20,
      "Neutraal": 13,
      "Eens": 49,
      "Helemaal Eens": 20
    },
    "totalanswers": 107,
    "answerspercentage": {
      "Helemaal Oneens": 4.672897196261682,
      "Oneens": 18.69158878504673,
      "Neutraal": 12.149532710280374,
      "Eens": 45.794392523364486,
      "Helemaal Eens": 18.69158878504673
    }
  },
  {
    "question": "Net zoals de iPad wordt Google Glass de norm binnen de drie jaar.",
    "category": "Innovatie",
    "answers": {
      "Helemaal Oneens": 1,
      "Oneens": 8,
      "Neutraal": 3,
      "Eens": 3,
      "Helemaal Eens": 4
    },
    "totalanswers": 19,
    "answerspercentage": {
      "Helemaal Oneens": 5.2631578947368425,
      "Oneens": 42.10526315789474,
      "Neutraal": 15.789473684210526,
      "Eens": 15.789473684210526,
      "Helemaal Eens": 21.05263157894737
    }
  },
  {
    "question": "De mediabedrijven moeten meer samenwerken om gecombineerde producten te maken.",
    "category": "Innovatie",
    "answers": {
      "Helemaal Oneens": 1,
      "Oneens": 8,
      "Neutraal": 11,
      "Eens": 35,
      "Helemaal Eens": 31
    },
    "totalanswers": 86,
    "answerspercentage": {
      "Helemaal Oneens": 1.1627906976744187,
      "Oneens": 9.30232558139535,
      "Neutraal": 12.790697674418604,
      "Eens": 40.69767441860465,
      "Helemaal Eens": 36.04651162790697
    }
  },
  {
    "question": "Echte innovatie zit in de hardware, software zal altijd volgen.",
    "category": "Innovatie",
    "answers": {
      "Helemaal Oneens": 44,
      "Oneens": 32,
      "Neutraal": 11,
      "Eens": 9,
      "Helemaal Eens": 6
    },
    "totalanswers": 102,
    "answerspercentage": {
      "Helemaal Oneens": 43.13725490196079,
      "Oneens": 31.372549019607842,
      "Neutraal": 10.784313725490197,
      "Eens": 8.823529411764707,
      "Helemaal Eens": 5.882352941176471
    }
  },
  {
    "question": "De strenge Europese privacy wetgeving is een competitief nadeel voor innovatie.",
    "category": "Innovatie",
    "answers": {
      "Helemaal Oneens": 18,
      "Oneens": 34,
      "Neutraal": 6,
      "Eens": 20,
      "Helemaal Eens": 20
    },
    "totalanswers": 98,
    "answerspercentage": {
      "Helemaal Oneens": 18.367346938775512,
      "Oneens": 34.69387755102041,
      "Neutraal": 6.122448979591836,
      "Eens": 20.408163265306122,
      "Helemaal Eens": 20.408163265306122
    }
  },
  {
    "question": "De overheid moet reguleren hoe distributeurs en omroepen kunnen samenwerken.",
    "category": "Innovatie",
    "answers": {
      "Helemaal Oneens": 31,
      "Oneens": 33,
      "Neutraal": 9,
      "Eens": 18,
      "Helemaal Eens": 9
    },
    "totalanswers": 100,
    "answerspercentage": {
      "Helemaal Oneens": 31,
      "Oneens": 33,
      "Neutraal": 9,
      "Eens": 18,
      "Helemaal Eens": 9
    }
  }];
//console.log(polldata[0].question);
pollInit();


function pollInit() {
	$("#stelling").text(polldata[pollindex].question);
	pollindex = 0;
	svg = d3.select("svg");
	var rects = svg.selectAll("rect")
		.data(polldata);
	rects.enter().append("rect")
		.attr("x", function(d,i) {i*100})
	    .attr("height", function(d,i) {return d[i].answerspercentage["Helemaal Eens"]})
	    .attr("width", 50)
	    .attr("class","rect");
	rects.exit().remove();	


}

function nextPoll() {
	pollindex++;
	$("#stelling").text(polldata[pollindex].question);
	var rects = svg.selectAll('rect');
	rects.style("fill","steelblue");
	rects.attr('x', pollindex*10+'px');
	rects.attr('width','100px');
	rects.attr('height','200px');
	console.log(polldata[pollindex].answerspercentage[0]);
	
}

function prevPoll() {
	pollindex--;
	$("#stelling").text(polldata[pollindex].question);
	console.log(pollindex);
	
}


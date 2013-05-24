/**
 * Author: de Sam
 *
 * Ja, dit moet je met node doen
 */

var fs = require('fs');
var questiondata = require('./questions').questiondata;


parsePeople('../assets/data/questions.csv', function (err, people){
	if(err) return console.log(err);


	console.log(people);

	// knn we natuurlijk ook afleiden uit de file, tenzij niemand bvb 'Neutraal' heeft geantwoord
	var possibleanswers = ['Helemaal Oneens', 'Oneens', 'Neutraal', 'Eens', 'Helemaal Eens'];

	var mergedAnswers = mergePeopleToQuestions(questiondata, possibleanswers, people);

	console.log(mergedAnswers);

	fs.writeFile('../assets/data/mergedanswers.json', JSON.stringify(mergedAnswers), function (err) {
		if(err) return console.log(err);

		console.log("Voila, de file is geparsed, en nu ga ik om een broodje:p");
	});
});

function parsePeople(csvFile, callback){
	// eerst de answers proper in objectjes rammen
	fs.readFile(csvFile , 'utf8', function (err, data){
		if(err) return callback(err);

		var people = [];
		var lines = data.split("\n");

		// eerste lijn bevat de keys voor de volgende lijnen
		for(var i=1; i < lines.length; i++){
			if(trim(lines[i]) == '')
				continue; //lege lijnen skippen

			people.push( parsePerson(lines[0], lines[i]) );
		}

		return callback(null, people);
	});
}

function parsePerson(firstline, line){
	var personkeys = firstline.split(',');
	var persondata = line.split(',');


	var person = {
		answers:[]
	};
	for(var i=0; (i < persondata.length) && (i < personkeys.length); i++){
		var key = trim(personkeys[i]).toLowerCase();
		var data = trim(persondata[i]);
		data = (data == '-')?null:data; // '-' vervangen door null

		var matchQuestion = key.match(/^vraag(\d+)$/);
		if(matchQuestion){
			var questionnr = parseInt(matchQuestion[1]) - 1; //vraag1 wordt '0'
			person.answers[questionnr] = data;
		}else{
			person[key] = data;
		}
	}
	return person;
}

function mergePeopleToQuestions(questiondata, possibleanswers, people){
	// array maken met alle vragen en plaats voorzien voor de antwoorden:
	var mergedAnswers = [];
	for(var q=0; q < questiondata.length; q++){
		var questionWithAnswers = {
			question: questiondata[q].question,
			category: questiondata[q].category,
			answers: {},
			totalanswers: 0
		};
		for(var p in possibleanswers){
			var answerkey = possibleanswers[p];
			questionWithAnswers.answers[answerkey] = 0;
		}
		mergedAnswers.push( questionWithAnswers );
	}


	// Nu alle antwoorden optellen volgens vraag:
	for(var i=0; i < people.length; i++){

		var person = people[i];
		for(var q=0; q < person.answers.length; q++){
			if( !mergedAnswers[q] )
				continue; // in het unlikly geval er minder vragen zijn dan antwoorden, enkel bij debuggen (tot Els mij de vragen gegegevn heeft)

			var questionWithAnswers = mergedAnswers[q];

			// wat heeft de mens geantwoord?
			var answerkey = person.answers[q];

			// eentje bijtellen bij het geantwoorde:
			if(answerkey){
				// als null == niet geantwoord == niets mee doen
				questionWithAnswers.answers[answerkey]++;
				questionWithAnswers.totalanswers++; // kan handig zijn voor de kasper z'n d3
			}
		}
	}

	return mergedAnswers;
}

function trim(str){
	return str.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ");
}



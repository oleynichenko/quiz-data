db = db.getSiblingDB(`quiz`);

var questionsIds = [63, 64];
// var theme = "js-functions";

var pipeline = [
	{
		$match: {id: {$in: questionsIds}}
		// $match: {themes: theme}
	}
];

var res = db.questions.aggregate(pipeline).toArray();

load("_calcOptionCost.js");

res.forEach((question) => {
  const pointsAvailable = question.pointsAvailable;
  const optionsQuantity = Object.keys(question.options).length;
  const correctOptionsQuantity = question.correctOptions.length;

  const optionCost = _calcOptionCost(pointsAvailable, optionsQuantity, correctOptionsQuantity);

  db.questions.updateOne({id: question.id}, {$set: {optionCost}});
});

print(`Сделано ${res.length} замен`);
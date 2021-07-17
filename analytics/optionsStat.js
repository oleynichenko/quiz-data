db = db.getSiblingDB(`quiz`);

var testId = "2";
var limitScore = 0;
var requiredId = "9";

var pipeline = [
	{
		$match: {
			"testId": testId,
			"result.percentScored": {$gte: limitScore}
		}
	},
	{
		$project: {
			_id: 0,
			"wrongAnsweredQuestion": "$result.wrongQuestionsIds",
			"answers": {$objectToArray: "$answers"}
		}
	},
	{
		$unwind: "$wrongAnsweredQuestion"
	},
	{
		$project: {
			"answers": {
				$arrayElemAt: [ 
					{$filter: {
	           input: "$answers",
	           as: "item",
	           cond: { $eq: [ "$$item.k", {$substrBytes: ["$wrongAnsweredQuestion", 0, 100]} ]}
	        }}, 0 ]
			}
		}
	},
	{
		$project: {
			wrongQuestionId: "$answers.k",
			chosenOptions: "$answers.v"
		}
	},
	{
		$unwind: "$chosenOptions"
	},
	{
		$group: {
			_id : { wrongQuestionId: "$wrongQuestionId", chosenOption: "$chosenOptions"},
			"total": {$sum: 1}		
		}
	},
	{
		$group: {
			"_id": "$_id.wrongQuestionId",
			"optionsStat": {
				$push: {"option": "$_id.chosenOption", "sum": "$total"}
			}
		}
	},
	{
		$match: {
			"_id": requiredId
		}
	}
];

var res = db.passes.aggregate(pipeline).toArray();
printjson(res);
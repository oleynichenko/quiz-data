db = db.getSiblingDB(`quiz`);

var testId = "2";
var permalink = "js-functions";
var startTime = new Date(2018, 6, 28);
var limitScore = 50;
// вопросы в ответах на которые допущены ошибки. С количестом тестеров допустивших ошибки.
// Можно добавить процент от общего количества

var pipeline = [
	{
		$match: {
			"testId": testId,
			"permalink": permalink,
			"date": {$gte: startTime},
			"result.percentScored": {$gte: limitScore}
		}
	},
	{
		$project: {
			_id: 0,
			// totalPasses: {$sum: 1},
			"wrongAnsweredQuestion": "$result.wrongQuestionsIds",
		}
	},
	{
		$unwind: "$wrongAnsweredQuestion"
	},
	{
		$group: {
			"_id": "$wrongAnsweredQuestion",
			"total": {$sum: 1}	
		}
	},
	{
		$sort: {total: -1}
	},
	// {
	// 	$count: "total"
	// }
];

var res = db.passes.aggregate(pipeline).toArray();
printjson(res);
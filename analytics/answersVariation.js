db = db.getSiblingDB(`quiz`);

// Показывает статитстику вариантов ответа на конкретный вопрос. Можно ограничить по общему баллу теста
// _id: null в результатах - количество сдач в которых не было этого вопроса

var limitScore = 0;
var questionId = "31";

var pipeline = [
	{
		$match: {
			"result.percentScored": {$gte: limitScore}
		}
	},
	{
		$project: {
			_id: 0,
			"answersInArray": {$objectToArray: "$answers"}
		}
	},
	{
		$project: {
			"answer": {
				$arrayElemAt: [ 
					{$filter: {
	           input: "$answersInArray",
	           as: "item",
	           cond: { $eq: [ "$$item.k", questionId]}
	        }}, 0 ]
			}
		}
	},
	{
		$sortByCount: "$answer.v"		
	}
	// {
	// 	$count: "total"
	// }
];

var res = db.passes.aggregate(pipeline).toArray();
printjson(res);
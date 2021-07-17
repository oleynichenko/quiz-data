db = db.getSiblingDB(`quiz`);

var testId = "2";
var usedAttempts = 4;
var permalink = "js-functions";
var startTime = new Date(2018, 6, 28);

var pipeline = [
	{
		$match: {
		  "testId": testId,
		  "permalink": permalink,
			"date": {$gte: startTime}
		}
	},
	{
		$group: {
			"_id": null,
			"passes_total": {$sum: 1},
			"withAttempts": {
				$sum: {
					$cond: [{$gte: ["$usedAttempts", usedAttempts]}, 1,	0]
				}
			}
		} 
	},
	{
		$addFields: {
			percent: {
				// $ceil: {
					$multiply: [
		  			{$divide: ["$withAttempts", "$passes_total"]},
		  			100
					]					
				// }
			}
		}
	},
];

var res = db.passes.aggregate(pipeline).toArray();
printjson(res);
db = db.getSiblingDB(`quiz`);

var id = "2";

var pipeline = [
	{
		$match: {
			"testId": id
		}
	},
	{
		$sortByCount: "$usedAttempts"
	},
];

var res = db.passes.aggregate(pipeline).toArray();
printjson(res);
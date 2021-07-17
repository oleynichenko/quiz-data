db = db.getSiblingDB(`quiz`);

var id = "2";

var pipeline = [
	{
		$match: {
			"testId": id,
			"result.percentScored": 0
		}
	},
];

var res = db.passes.aggregate(pipeline).toArray();
printjson(res);
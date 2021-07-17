db = db.getSiblingDB(`quiz`);

var testId = "2";
var permalink = "js-functions";
var startTime = new Date(2018, 6, 28);
// var boundaries = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var boundaries = [0, 48.3, 90, 95, 100];

// var boundaries = [0, 90, 95];

// var bucketRange = 30;

// function getBoundaries(range) {
// 	var bucketsRange = Math.floor(100 / range);
// 	var boundaries = [];

// 	if (bucketsRange >= 1) {
// 		for(var i = 1; i*boundaries < 100, i++) {
// 			boundaries.push(i * range);
// 		}
// 	} else {
// 		boundaries = [100]
// 	}

// 	return boundaries;
// }

// var boundaries = getBoundaries(bucketRange);

var pipeline = [
	{
		$match: {
			"testId": testId,
			"permalink": permalink,
			"date": {$gte: startTime}
		}
	},
	{
		$bucket: {
      groupBy: "$result.percentScored",
      boundaries: boundaries,
      default: "Other",
      output: {
        "count": { $sum: 1 },
        "average": {$avg: "$result.percentScored"}
      }
    }
	},
	// {
	// 	$count: "total"
	// }
];

var res = db.passes.aggregate(pipeline).toArray();
printjson(res);
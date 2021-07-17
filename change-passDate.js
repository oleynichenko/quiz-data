db = db.getSiblingDB(`quiz`);
var pipeline = [
	{
		$match: {date: {$type: `double`}}
	},
	{
		$project: {
			date: 1
		}
	}
	// {
	// 	$count: `total`
	// }
];

var passes = db.passes.aggregate(pipeline).toArray();
var counter = 0;

passes.forEach((elem) => {
	db.passes.updateOne(
		{_id: elem._id},
		{$set: {
			date: new Date(elem.date)
		}}
	);

	counter++;
});


print(`Обновлено сдач ${counter}`);

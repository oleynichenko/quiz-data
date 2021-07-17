function _getQuestions(ids) {
	const pipeline = [
		{
			$match: {id: {$in: ids}}
		},
		{
			$project: {
				_id: 0,
				pointsAvailable: 1,
				optionCost: 1,
				correctOptions: 1,
				id: 1
			}
		}
	];

	const rightData = db.questions.aggregate(pipeline).toArray();

	return rightData;	
}
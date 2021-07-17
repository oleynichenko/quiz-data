function _findPassesWithQuestion(questionId) {
	var pipeline = [
		// стоит добавить match по themes и id вопросов в тестах чтобы в итоге выбрать только те permalink где вопрос может быть
		{
			$project: {
				"answers": 1,
				"answersInArray": {$objectToArray: "$answers"}
			}
		},
		{
			$match: {
				"answersInArray.k": questionId
		  }	
		},
	];

	var res = db.passes.aggregate(pipeline).toArray();

	return res;	
}
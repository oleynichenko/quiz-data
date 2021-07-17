db = db.getSiblingDB(`quiz`);

// в вопросах на замену должны быть указаны Id
var questionsData = [];

for (let i = 0; i < questionsData.length; i++) {
	const question = questionsData[i];
	
	db.questions.replaceOne({id: question.id}, question);
}

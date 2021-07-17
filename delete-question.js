db = db.getSiblingDB(`quiz`);

var questionId = "6";
var questionIdNumber = Number(questionId);

// удаляем вопрос из базы
db.questions.deleteOne({id: questionIdNumber});

print(`Вопрос ${questionIdNumber} удален из базы`);


// находим все сдачи где вопрос присутствовал
load("_findPassesWithQuestion.js");
var passesWithQuestion = _findPassesWithQuestion(questionId);
var passesWithQuestionQuantity = passesWithQuestion.length;

print(`Вопрос ${questionIdNumber} найден в ${passesWithQuestionQuantity} сдачах`);


// выбираем все id вопросов что есть в ответах где присутствует искомый id 
var ids = [];

passesWithQuestion.forEach((item) => {
	var answers = item.answers;

	delete answers[questionId];

	Object.keys(answers).forEach(function(element) {
		const id = Number(element);

		if(ids.indexOf(id) === -1){
    	ids.push(id);
    }
	});
});

print(`В сдачах для пересчета присутствуют ${ids.length} id-s вопросов`);

load("_getQuestions.js");

var rightData = _getQuestions(ids);

print(`Из них найдено ${rightData.length} вопросов`);

load("_getTestResult.js");

var updatedPassesQuantity = 0;

// Пересчитываем результаты и записываем в базу
passesWithQuestion.forEach((item) => {
  var answers = item.answers;

	const result = getTestResult(answers, rightData);

	db.passes.updateOne(
		{_id: item._id},
		{$set: {
			answers: answers,
			result: result
		}}
	);  

	updatedPassesQuantity++;
});

print(`Пересчитано ${updatedPassesQuantity} сдач`);

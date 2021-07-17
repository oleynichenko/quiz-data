db = db.getSiblingDB(`quiz`);

var questionId = "18";
var questionIdNumber = Number(questionId);
// var newOptions = ["c"];

var questionData = db.questions.findOne({id: questionIdNumber});

var pointsAvailable = questionData.pointsAvailable;
// var pointsAvailable = 1.2;

// var optionsQuantity = Object.keys(questionData.options).length;
var optionsQuantity = 3;

// var correctOptionsQuantity = newOptions.length;
var correctOptionsQuantity = questionData.correctOptions.length;

load("_calcOptionCost.js");

var newCost = _calcOptionCost(pointsAvailable, optionsQuantity, correctOptionsQuantity);

db.questions.updateOne(
	{id: questionIdNumber}, 
	{$set: {
		// correctOptions: newOptions,
		"options.с": `Параметр <code>ninja</code> функции <code>skulk()</code> передается в качестве параметра функции <code>performAction()</code>`,
		// "options.f": `Все утверждения неверные`,
		optionCost: newCost
	}}
);

print(`Вопрос ${questionIdNumber} обновлен`);

load("_findPassesWithQuestion.js");
var passesWithQuestion = _findPassesWithQuestion(questionId);
var passesWithQuestionQuantity = passesWithQuestion.length;

print(`Вопрос ${questionIdNumber} найден в ${passesWithQuestionQuantity} сдачах`);


// выбираем все id вопросов что есть в ответах где присутствует искомый id 
var ids = [];

passesWithQuestion.forEach((item) => {
	Object.keys(item.answers).forEach(function(element) {
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

passesWithQuestion.forEach((item) => {
  var answers = item.answers;

	const result = getTestResult(answers, rightData);

	db.passes.updateOne(
		{_id: item._id},
		{$set: {
			result: result
		}}
	);  

	updatedPassesQuantity++;
});

print(`Пересчитано ${updatedPassesQuantity} сдач.`);
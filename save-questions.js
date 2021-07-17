db = db.getSiblingDB(`quiz`);

// Перед загрузкой должен быть загружен файл с questionsData

var pipeline = [
  {
    $group: {
      "_id": null,
      "maxTestId": {$max: "$id"}
    }
  },
];

var firstNumber = db.questions.aggregate(pipeline).toArray()[0].maxTestId + 1;

print(`Вопросы будут начинаться с номера ${firstNumber}`);

load("_calcOptionCost.js");

for (let i = 0; i < questionsData.length; i++) {
  const question = questionsData[i];

  const pointsAvailable = question.pointsAvailable;
  const optionsQuantity = Object.keys(question.options).length;
  const correctOptionsQuantity = question.correctOptions.length;

  question.id = i + firstNumber;
  question.optionCost = _calcOptionCost(pointsAvailable, optionsQuantity, correctOptionsQuantity);

  db.questions.insertOne(question);
}


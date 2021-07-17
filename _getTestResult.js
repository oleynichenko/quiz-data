function roundUp (number, fraction = 1) {
  return (number % 1 === 0) ? number : +number.toFixed(fraction);
}

function ceilUp (number, fraction = 0) {
  const multiplier = Math.pow(10, fraction);

  return (number % 1 === 0) ? number : Math.ceil(number * multiplier) / multiplier;
}

function getPercent (a, b) {
  const percent = (a / b) * 100;
  return ceilUp(percent, 1);
}

function _countAnswerScore(rightAnswer, userAnswer, optionCost, pointsAvailable) {
  let score = 0;

  userAnswer.forEach((elem) => {
    if (rightAnswer.indexOf(elem) === -1) {
      score -= optionCost.wrong;
    } else {
      score += optionCost.right;
    }
  });

  if (score < 0) {
    return 0;
  } else if (score > pointsAvailable) {
    return pointsAvailable;
  } else {
    return score;
  }
}

function getTestResult(userData, rightData) {

  let possibleScore = 0;
  let rightAnswersQuantity = 0;
  let pointsScored = 0;
  let wrongQuestionsIds = [];


  rightData.forEach((item) => {
    const chosenOptions = userData[item.id];

    if (chosenOptions) {
      const pointsAvailable = item.pointsAvailable;
      const optionCost = item.optionCost;
      const correctOptions = item.correctOptions;

      const answerScore = _countAnswerScore(correctOptions, chosenOptions, optionCost, pointsAvailable);

      pointsScored += answerScore;
      possibleScore += pointsAvailable;
      // правильный ответ - считаем в количество правильных,
      // нет - ID в массив на отметку красным

      if (answerScore === pointsAvailable) {
        rightAnswersQuantity += 1;
      } else {
        wrongQuestionsIds.push(item.id);
      }
    }
  });

  return {
    rightAnswersQuantity,
    percentScored: getPercent(pointsScored, possibleScore),
    possibleScore: roundUp(possibleScore, 2),
    pointsScored: roundUp(pointsScored, 2),
    wrongQuestionsIds
  };
}

const setFeedbackAverageLevel = (pass, test) => {
	const average = test.stat.report.average;
	if (average) {
		return (pass.result.percentScored < average)
		? `<p>Cредний результат по тесту ${average}%. Ваш похоже ниже... </p>`
		: `<p>Ваш результат выше чем средний по тесту (${average}%), и поэтому код который вы способны написать наверняка не сделает мир хуже.</p>`;
	} else {
		return `<p>Пока еще это не профессиональный уровень...</p>`;
	}
};

const setSharingAverageLevel = (pass, test) => {
	return (pass.result.percentScored > test.stat.report.average)
	? {
		imageName: `js-functions-average.jpg`,
		imageNameTw: `js-functions-average-tw.jpg`,
		hashtag: `#js_functions_ninja`
	}
	: {};
};

const getRecommendationAverageLevel = (pass, test) => {
	if (pass.result.percentScored < test.stat.report.average) {
		return `courses`;
	} else {
		return `book`;
	}
};


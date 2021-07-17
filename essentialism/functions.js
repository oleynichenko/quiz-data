var delSymbols = (data) => {
	return String(data).replace(/\r\n|\r|\n/g," ").replace(/\s+/g,' ');
};

var setFeedbackAverageLevel = (pass, test) => {
	const average = test.stat.report.average;
	
	if (average) {
		return (pass.result.percentScored < average)
		? `<p>Ваш результат ниже чем средний по тесту — ${average}%. Это значит, что пока вы относитесь к той половине человечества, которая в попытках устроить свою жизнь все больше запутывается.</p><p>Есть и хорошая новость: интерес к теме теста рано или поздно заставит вас остановиться и поставить четкие границы между тем, что хотите вы и тем, что хотят от вас другие.</p><p>Сделайте это сейчас и сократите годы растраченные на никому ненужные дела.</p>` 
		: `<p>Прекрасно! Ваш результат выше среднего по тесту — ${average}%! Это значит, что вы точно не делаете мир более запутанным и этим фактом можно смело поделиться с другими! <p>Вместе с тем, есть очень большая вероятность остаться на таком уровне до конца жизни. Быть "не хуже других" — серьезная преграда для развития. Перед ней останавливается подавляющее большинство и только единицы продолжают идти к полностью "своей" жизни.</p>`;
	} else {
		return ``;
	}
};

var setSharingAverageLevel = (pass, test) => {
	return (pass.result.percentScored > test.stat.report.average)
	? {
		imageName: `essentialism-average.jpg`,
		imageNameTw: `essentialism-average-tw.jpg`,
		hashtag: `#essentialist`
	}
	: {};
};

var getRecommendAverageLevel = (pass, test) => {
	if (pass.result.percentScored < test.stat.report.average) {
		return `lowAverage`;
	} else {
		return `upAverage`;
	}
};

// console.log(delSymbols(setFeedbackAverageLevel));

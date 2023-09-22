var test = {
	"id": "41",
	"enable": true,
	"title": "Каббала для народов мира, урок 1 (Что такое каббала)",
	"questions": {
		"themes": [
			"knm-1"
		]
	},
	"levels": [
		{
			"name": "common",
			"marked": false,
			"score": {
				"min": 0,
				"max": 90
			}
		},
		{
			"name": "profi",
			"marked": true,
			"conclusionPhrase": "Профессиональный уровень",
			"score": {
				"min": 90,
				"max": 95
			},
			"feedback": {
				"data": "<p>Отличный результат! Вы безусловно отлично поработали над материалом!</p>"
			}
		},
		{
			"name": "expert",
			"marked": true,
			"conclusionPhrase": "Уровень эксперта",
			"score": {
				"min": 95,
				"max": 100
			},
			"feedback": {
				"data": "<p>Чудесно! Вы безусловно являетесь экспертом в этой теме.</p>"
			}
		},
		{
			"name": "master",
			"marked": true,
			"conclusionPhrase": "Максимальный результат",
			"score": {
				"min": 100,
				"max": 101
			},
			"feedback": {
				"data": "<p>Блестяще! Ваши знания безупречны!</p>"
			}
		}
	],
	"description": "Оценивает знания полученные на первом занятии курса \"Каббала для народов мира\"." +
		" Состоит из 12 вопросов.",
	"links": [
		{
			"permalink": "knm-1",
			"questionsQuantity": 12,
		},
		{
			"permalink": "knm-1-full",
		}
	]
};

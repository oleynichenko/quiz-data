var test = {
	"id": "32",
	"enable": true,
	"title": "Каббала для народов мира, модуль 3, урок 5",
	"questions": {
		"themes": [
			"knm-3-lesson-5"
		]
	},
	"canonLink": "knm-3-lesson-5",
	"levels": [
		{
			"name": "common",
			"marked": false,
			"score": {
				"min": 0,
				"max": 90
			},
			"recommendation": {
				"data": "common"
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
			},
			"recommendation": {
				"data": "common"
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
			},
			"recommendation": {
				"data": "common"
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
			},
			"recommendation": {
				"data": "newtest"
			}
		}
	],
	"images": {
		"main": "essentialism-main.jpg",
		"mainTw": "essentialism-main-tw.jpg"
	},
	"description": "Оценивает знания полученные на четвертом занятии курса \"Каббала для народом мира\", модуль 3. Состоит из 12 вопросов.",
	"recommendation": {
		"newtest": "<p>Продолжайте изучение материалов урока ${stuff.articleLink}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью материалов урока ${stuff.articleLink}</p>"
	},
	"stuff": {
		"articleLink": "<a href=\"https://docs.google.com/document/d/10cE5092N8kQonmcUWTZ7QrTjvH2cHADXPRF5TvyLRNg\" target=\"_blank\">Ступени постижения</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "knm-3-lesson-5",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": true,
			"questionsQuantity": 12,
			"isDisqus": false
		},
		{
			"name": "Все вопросы",
			"permalink": "knm-3-lesson-5-full",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": false
		}
	],
	"stat": {
		"levels": {
			"profi": 90,
			"expert": 95
		},
		"report": {}
	}
};

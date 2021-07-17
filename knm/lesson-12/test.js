var test = {
	"id": "18",
	"enable": true,
	"title": "Каббала для народов мира: \"Повторение пройденного материала\"",
	"questions": {
		"themes": [
			"knm-lesson-9",
			"knm-lesson-10",
			"knm-lesson-11"
		]
	},
	"canonLink": "knm-lessons-9-11",
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
	"description": "Оценивает знания полученные на занятиях: \"Миры\", \"Буквы\" и \"7 заповедей\" курса 'Каббала для народов мира'. Состоит из 12 вопросов.",
	"recommendation": {
		"newtest": "<p>Продолжайте изучение материалы уроков: ${stuff.articleLink5}, ${stuff.articleLink6}, ${stuff.articleLink7}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью материалов: ${stuff.articleLink5}, ${stuff.articleLink6}, ${stuff.articleLink7}</p>"
	},
	"stuff": {
		"articleLink5": "<a href=\"https://docs.google.com/document/d/1B-PZr_9EdpT_iFyFCOZpZKzEP0gRA0IgAzIPgVOXfjE\" target=\"_blank\">Миры</a>",
		"articleLink6": "<a href=\"https://docs.google.com/document/d/1wr62T9GmAI6CViyvazXfhTcaSX4H2sjVbqH909rX-ew\" target=\"_blank\">Буквы</a>",
		"articleLink7": "<a href=\"https://docs.google.com/document/d/1Fsjb-I5x55_UQxGRWf_aNLDUsTbeNH8FtT82nKUeyDo\" target=\"_blank\">7 заповедей</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "knm-lessons-9-11",
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
			"permalink": "knm-lessons-9-11-full",
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

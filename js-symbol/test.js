var test = {
	"id": "4",
	"enable": true,
	"title": "LearnJavascript: тип данных Symbol",
	"questions": {
		"themes": [
			"js-symbol"
		]
	},
	"canonLink": "js-symbol",
	"levels": [
		{
			"name": "common",
			"marked": false,
			"score": {
				"min": 0.0,
				"max": 90.0
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
				"min": 90.0,
				"max": 95.0
			},
			"feedback": {
				"data": "<p>Отличный результат! Вы безусловно профессионал и до уровня EXPERT остается совсем немного!</p>"
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
				"min": 95.0,
				"max": 100.0
			},
			"feedback": {
				"data": "<p>Блестяще! Вы безусловно мастер в этой теме.</p>"
			},
			"recommendation": {
				"data": "common"
			}
		},
		{
			"name": "master",
			"marked": true,
			"conclusionPhrase": "Макcимальный результат",
			"score": {
				"min": 100.0,
				"max": 101.0
			},
			"feedback": {
				"data": "<p>Блестяще! Вы безусловно мастер в этой теме.</p>"
			},
			"recommendation": {
				"data": "newtest"
			}
		}
	],
	"description": "Оценивает знания символов в Javascript. Создан в 2018 году на основе статьи \"Тип данных Symbol\" из learn.javascript.ru. Состоит из 10 случайных вопросов из 13-ти возможных.",
	"recommendation": {
		"newtest": "<p>Попробуйте пройти еще один тест ${stuff.testLink}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью статьи ${stuff.articleLink}</p>"
	},
	"stuff": {
		"articleLink": "<a href=\"https://learn.javascript.ru/symbol\" target=\"_blank\">Тип данных Symbol</a>",
		"testLink": "<a href=\"http://tests.kiev.ua/links/js-functions\" target=\"_blank\">Javascript Ninja: функции</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "js-symbol",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": false,
			"goInStat": true,
			"questionsQuantity": 10,
			"isDisqus": true
		},
		{
			"name": "Все вопросы",
			"permalink": "js-symbol-full",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": false,
			"goInStat": false
		},
	],
	"stat": {
		"levels": {
			"profi": 90.0,
			"expert": 95.0
		},
		"report": {}
	}
};

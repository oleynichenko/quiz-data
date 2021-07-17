var test = {
	"id": "5",
	"enable": true,
	"title": "90 законов: введение",
	"questions": {
		"themes": [
			'90-laws',
			'90-laws-foreword'
		],
	},
	"canonLink": "90-laws",
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
				"min": 95.0,
				"max": 100.0
			},
			"feedback": {
				"data": "<p>Блестяще! Вы безусловно являетесь экспертом в этой теме.</p>"
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
				"min": 100.0,
				"max": 101.0
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
	"description": '',
	"recommendation": {
		"newtest": "<p>Продолжайте изучение книги ${stuff.articleLink}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью книги ${stuff.articleLink} (страницы '6-27')</p>"
	},
	"stuff": {
		"articleLink": "<a href=\https://monoteism.ru/wp-content/uploads/2020/05/90laws_II_Block_ForWeb.pdf\" target=\"_blank\">90 законов</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "90-laws",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": false,
			"goInStat": true,
			"questionsQuantity": 10,
			"isDisqus": false
		},
		{
			"name": "Все вопросы",
			"permalink": "90-laws-full",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": false,
			"goInStat": false
		},
		{
			"name": "Три вопроса",
			"permalink": "90-laws-short",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": false,
			"goInStat": false,
			"questionsQuantity": 3,
			"isDisqus": false
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

var test = {
	"id": "35",
	"enable": true,
	"title": "Знакомство с монотеизмом: \"Будущий мир\"",
	"questions": {
		"themes": [
			"zm-lesson-7"
		]
	},
	"canonLink": "zm-lesson-7",
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
	"description": "Оценивает знания полученные на занятии \"Будущий мир\" курса \"Знакомство с монотеизмом\". Состоит из 10 вопросов.",
	"recommendation": {
		"newtest": "<p>Продолжайте изучение материалов урока ${stuff.articleLink}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью материалов урока ${stuff.articleLink}</p>"
	},
	"stuff": {
		"articleLink": "<a href=\"https://docs.google.com/document/d/1zlSrp_RGfuocMSzpI_h_bwQyu_90JS40pbCRQ2FZT90\" target=\"_blank\">Будущий мир</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "zm-lesson-7",
			"interval": null,
			"time": null,
			"enable": true,
			"enabledInfo": true,
			"goInStat": true,
			"questionsQuantity": 10,
			"isDisqus": false
		},
		{
			"name": "Все вопросы",
			"permalink": "zm-lesson-7-full",
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

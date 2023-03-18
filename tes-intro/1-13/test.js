var test = {
	"id": "26",
	"enable": true,
	"title": "Предисловие к ТЭС, пункты 1-13",
	"questions": {
		"themes": [
			"intro-tes-1",
			"intro-tes-2",
			"intro-tes-3",
			"intro-tes-4",
			"intro-tes-5",
			"intro-tes-6",
			"intro-tes-7",
			"intro-tes-8",
			"intro-tes-9",
			"intro-tes-10",
			"intro-tes-11",
			"intro-tes-12",
			"intro-tes-13"
		]
	},
	"canonLink": "intro-tes-lesson-1",
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
	"description": "Оценивает знания полученные на первом занятии курса по статье Бааль Салама 'Предисловие к ТЭС'. Состоит из 12 вопросов.",
	"recommendation": {
		"newtest": "<p>Продолжайте изучение материалов урока ${stuff.articleLink}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью материалов урока ${stuff.articleLink}</p>"
	},
	"stuff": {
		"articleLink": "<a href=\"https://docs.google.com/document/d/1rXo_dASGoaIjw9XbbmdcuGcV8612zkMCRi66PwJjKOs\" target=\"_blank\">Предилсовие к ТЭС, пункты 1-13</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "intro-tes-lesson-1",
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
			"permalink": "intro-tes-lesson-1-full",
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

var test = {
	"id": "27",
	"enable": true,
	"title": "Предисловие к ТЭС, пункты 14-26",
	"questions": {
		"themes": [
			"intro-tes-14",
			"intro-tes-15",
			"intro-tes-16",
			"intro-tes-17",
			"intro-tes-18",
			"intro-tes-19",
			"intro-tes-20",
			"intro-tes-21",
			"intro-tes-22",
			"intro-tes-23",
			"intro-tes-24",
			"intro-tes-25",
			"intro-tes-26"
		]
	},
	"canonLink": "intro-tes-lesson-2",
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
	"description": "Оценивает знания полученные на втором занятии курса по статье Бааль Салама 'Предисловие к ТЭС'. Состоит из 12 вопросов.",
	"recommendation": {
		"newtest": "<p>Продолжайте изучение материалов урока ${stuff.articleLink}</p>",
		"common": "<p>Восполнить обнаруженные пробелы в знаниях вы можете с помощью материалов урока ${stuff.articleLink}</p>"
	},
	"stuff": {
		"articleLink": "<a href=\"https://docs.google.com/document/d/152bTH8Met66cNSBu9tAJaK5ymcwimjug8IPjXB5Qsms\" target=\"_blank\">Предисловие к ТЭС, пункты 14-26</a>"
	},
	"links": [
		{
			"name": "Основная",
			"permalink": "intro-tes-lesson-2",
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
			"permalink": "intro-tes-lesson-2-full",
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
